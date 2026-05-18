const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'resources/js/components/sections');
const files = fs.readdirSync(sectionsDir);

files.forEach(file => {
    if (file.endsWith('.vue')) {
        let content = fs.readFileSync(path.join(sectionsDir, file), 'utf-8');
        
        // Remove hardcoded dark backgrounds from sections
        content = content.replace(/background:\s*linear-gradient\([^;]+;\n/g, '');
        content = content.replace(/background:\s*var\(--gradient-magic\);\n/g, '');
        
        // Replace text colors to be readable on light paper
        content = content.replace(/color:\s*var\(--white-warm\)/g, 'color: var(--ink-dark)');
        content = content.replace(/color:\s*rgba\(255,\s*249,\s*240,[^\)]+\)/g, 'color: var(--ink-light)');
        content = content.replace(/color:\s*#FFFEF8/g, 'color: var(--ink-dark)');
        
        // Make sure gold text is slightly darker so it's readable
        content = content.replace(/color:\s*var\(--gold-soft\)/g, 'color: var(--gold-burn)');
        
        // Remove text-shadows that might look weird on paper (glows)
        content = content.replace(/text-shadow:[^;]+;/g, '');
        
        // Invert glassmorphism backgrounds to be dark instead of light, or just make them transparent/sepia
        content = content.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0.0[0-9]\)/g, 'background: rgba(139, 69, 19, 0.05)');
        content = content.replace(/background:\s*var\(--accent,\s*rgba[^)]+\)/g, 'background: var(--accent, rgba(139, 69, 19, 0.05))');
        
        fs.writeFileSync(path.join(sectionsDir, file), content, 'utf-8');
        console.log(`Patched colors in ${file}`);
    }
});
