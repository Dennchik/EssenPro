//* Deleting a directory - Fonts
import path from "../config/path.js";
export default () => {
	return $.del(path.fontsStyle.dest);
};
