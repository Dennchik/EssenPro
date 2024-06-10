//* Конфигурация
import path from "../config/path.js";
//* Deleting a directory - Build 
export default () => {
	return $.del(path.root);
};