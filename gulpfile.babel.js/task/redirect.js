//* Configuration
import path from "../config/path.js";
export default () => {
	return $.gulp.src("./#src/js/_redirects")
		.pipe($.gulp.dest(path.pug.dest));
};