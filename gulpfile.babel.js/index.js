global.$ = {
	//* Plugins
	gulp: require('gulp'),
	gul: require('gulp-load-plugins')(),
	browserSync: require('browser-sync').create(),
	sass: require('gulp-sass')(require('sass')),
	reactWebpHtml: require('react-image-webp'),
	gulpSvgSprite: require('gulp-svg-sprite'),
	webPackStream: require('webpack-stream'),
	merge: require('gulp-merge-json'),
	gulpIf: require('gulp-if'),
	del: require('del'),
	fs: require('fs'),
	//* Configuration
	app: require('./config/app'),
};
//* Configuration
import path from './config/path.js';
import app from './config/app.js';
//* Tasks
import clear from './task/clear';
import pug from './task/pug';
import js from './task/js';
import react from './task/react';
import json from './task/json';
import scss from './task/scss';
import image from './task/image';
import sprite from './task/sprite';
import server from './task/server';
import fonts from './task/fonts';
import fontsStyle from './task/fontStyle';
import clearFonts from './task/clearFonts';
import reactWebp from './task/reactWebp';
import redirect from "./task/redirect";

const change = $.gulp.series(clearFonts, fonts, fontsStyle);
const changejson = $.gulp.series(json, pug);
//* Observation
function reload(done) {
	$.browserSync.reload();
	done();
}
const watcher = () => {

	$.gulp.watch(path.js.watch, $.gulp.series(js, reload));
	// $.gulp.watch(path.reactSass.watch, $.gulp.series(js, reload));
	// $.gulp.watch(path.react.watch, $.gulp.series(react, reload));
	// $.gulp.watch(path.pug.watch, pug).on('all', $.browserSync.reload);
	$.gulp.watch(path.pug.watch, $.gulp.series(pug, reload));
	$.gulp.watch(path.json.watch, changejson).on('all', $.browserSync.reload);
	$.gulp.watch(path.json.readFile, pug).on('all', $.browserSync.reload);
	$.gulp.watch(path.scss.watch, $.gulp.series(scss, reload));
	// $.gulp.watch(path.scss.watch, scss).on('all', $.browserSync.reload);
	$.gulp.watch(path.image.watch, image).on('all', $.browserSync.reload);
	$.gulp.watch(path.sprite.watch, sprite).on('all', $.browserSync.reload);
	$.gulp.watch(path.fonts.watch, fonts).on('all', $.browserSync.reload);
	$.gulp.watch(path.fontsStyle.watch, change).on('all', $.browserSync.reload);
};
const end = $.gulp.series(
	clear, json,
	// redirect,
	$.gulp.parallel(pug, scss, js, image, sprite, fonts), fontsStyle
);
const dev = $.gulp.series(end, $.gulp.parallel(watcher, server));
//* Call back
export { clear };
export { clearFonts };
export { reactWebp };
export { pug };
export { json };
export { scss };
export { js };
export { react };
export { image };
export { sprite };
export { fonts };
export { fontsStyle };
export { redirect };
//* Assembly
export default app.isProd ? end : dev;