// //* Configuration
import path from '../config/path.js';
import app from '../config/app.js';
//* Processing - Pug
export default () => {
	return $.gulp.src(path.pug.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "PUG",
				message: error.message
			}))
		}))
		.pipe($.gul.data(function () {
			return JSON.parse($.fs.readFileSync(path.json.readFile));
		}))
		.pipe($.gul.pug(app.pug))
		.pipe($.gul.fileInclude())
		.pipe($.gul.webpHtml())
		.pipe($.gul.htmlmin(app.htmlMin))
		.pipe($.gulp.dest(path.pug.dest));
};