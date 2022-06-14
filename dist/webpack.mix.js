const mix = require('laravel-mix');

require('mix-tailwindcss');

mix.sass('../src/scss/app.scss', 'public/css').tailwind('./tailwind.config.js').setPublicPath('dist/').version();

mix.browserSync({
	proxy: 'linktree.test/dist/index.html',
	files: ['src/**/*.scss', 'src/**/*.js', 'dist/*.html'],
});
