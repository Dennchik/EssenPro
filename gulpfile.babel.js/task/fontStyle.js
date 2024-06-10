//* Configuration
import path from "../config/path.js";
//* Plugins
const cb = () => { };
export default (done) => {
	let file_content = $.fs.readFileSync(path.fontsStyle.src);

	$.fs.writeFile(path.fontsStyle.src, '', cb);
	$.fs.readdir(path.fontsStyle.dest, function (err, items) {
		if (items) {
			let c_fontname;
			for (let i = 0; i < items.length; i++) {
				let fontname = items[i].split('.');
				fontname = fontname[0];
				if (c_fontname !== fontname) {
					$.fs.appendFile(
						path.fontsStyle.src, '@include font-face("' + fontname + '", "' +
						fontname + '", 400,  "normal");\r\n', cb
					);
				}
				c_fontname = fontname;
			}
		}
	});
	done();
};