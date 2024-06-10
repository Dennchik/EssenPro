//* Configuration
import path from "../config/path.js";
import app from "../config/app.js";
//* Processing JavaScript
export default () => {
	return $.gulp.src(path.js.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "JavaScript",
				message: error.message
			}))
		}))
		.pipe($.gul.fileInclude())
		.pipe($.gulpIf(app.isDev, $.gul.sourcemaps.init({
			loadMaps: true
		})))
		.pipe($.gul.babel())
		.pipe($.webPackStream(app.webpack))
		.pipe($.gulpIf(app.isDev, $.gul.sourcemaps.write('.', {
			includeContent: false,
		})))
		.pipe($.gulp.dest(path.js.dest));
};