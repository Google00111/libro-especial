const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'resources/js/components/sections');
const files = fs.readdirSync(sectionsDir);

files.forEach(file => {
    if (file.endsWith('.vue')) {
        let content = fs.readFileSync(path.join(sectionsDir, file), 'utf-8');
        
        // Remove scrollTrigger properties from GSAP calls
        content = content.replace(/scrollTrigger:\s*{[^}]*},/g, '');
        content = content.replace(/scrollTrigger:\s*el,/g, '');
        
        // Let's also remove the import and registration just to clean up
        content = content.replace(/import { ScrollTrigger } from 'gsap\/ScrollTrigger';\n/g, '');
        content = content.replace(/gsap\.registerPlugin\(ScrollTrigger\);\n/g, '');
        
        fs.writeFileSync(path.join(sectionsDir, file), content, 'utf-8');
        console.log(`Patched ${file}`);
    }
});
