//* Configuration
import path from "../config/path.js";
import app from "../config/app.js";
//* Processing React
export default () => {
	return $.gulp.src(path.react.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "React",
				message: error.message
			}))
		}))
		.pipe($.gulpIf(app.isDev, $.gul.sourcemaps.init({
			loadMaps: true
		})))
		// .pipe($.gul.babel({
		// 	only: [
		// 		'#src/js/assets',
		// 	],
		// 	compact: false
		// }))
		.pipe($.gul.babel())
		.pipe($.webPackStream(app.webpackReact))
		.pipe($.gul.fileInclude())
		.pipe($.gulpIf(app.isDev, $.gul.sourcemaps.write('.', {
			includeContent: false,
		})))

		.pipe($.gulp.dest(path.react.dest));
};