const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .react() // Adicione isso para compilar React
   .sass('resources/sass/app.scss', 'public/css');