//* Server
import path from '../config/path.js';;
export default () => {
	$.browserSync.init({
		server: {
			baseDir: path.root
		},
		notify: false,
	});
};