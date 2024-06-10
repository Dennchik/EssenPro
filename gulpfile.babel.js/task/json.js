//* Configuration
import filePath from 'path';
import path from "../config/path.js";
//* Processing - Json
export default () => {
	return $.gulp.src(path.json.src)
		.pipe($.merge({
			fileName: path.json.fileName,
			edit: (json, file) => {
				let filename = filePath.basename(file.path),
					primaryKey = filename.replace(filePath.extname(filename), '');
				let data = {};
				data[primaryKey.toLowerCase()] = json;
				return data;
			}
		}))
		.pipe($.gulp.dest(path.json.dest));
};