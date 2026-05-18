<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes — Libro Especial
|--------------------------------------------------------------------------
| All routes serve the SPA. Vue Router handles client-side routing.
*/

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
