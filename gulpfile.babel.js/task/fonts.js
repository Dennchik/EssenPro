import gulp from "gulp";
//* Configuration
import path from "../config/path.js";
import app from "../config/app.js";
//* Plugins
import loadPlugins from "gulp-load-plugins";

const gul = loadPlugins();
//* Processing Fonts
export default () => {
	return gulp.src(path.fonts.src)
		.pipe(gul.plumber({
			errorHandler: gul.notify.onError(error => ({
				title: "Fonts",
				message: error.message
			}))
		}))
		.pipe(gul.newer(path.fonts.dest))
		.pipe(gul.fonter(app.fonter))
		.pipe(gulp.dest(path.fonts.dest))
		.pipe(gul.ttf2woff2())
		.pipe(gul.debug({ title: 'ttf2woff2' }))
		.pipe(gulp.dest(path.fonts.dest));
};
