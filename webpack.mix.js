const mix = require('laravel-mix');

require('mix-tailwindcss');

mix.sass('src/scss/app.scss', 'public/css').setPublicPath('dist/').options({ processCssUrls: false }).tailwind();
