const mix = require('laravel-mix');

require('mix-tailwindcss');

mix.sass('./src/scss/app.scss', 'public/css').tailwind('./tailwind.config.js').setPublicPath('/').version();

mix.browserSync({
	proxy: 'linktree.test/',
	files: ['src/**/*.scss', 'src/**/*.js', 'dist/*.html'],
});
