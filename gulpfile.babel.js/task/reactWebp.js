import path from "../config/path.js";

export default (done) => {
	// Читаем содержимое каталога с файлами JSX
	$.fs.readdir(path.reactWebp.src, function (err, items) {
		if (items) {
			// Для каждого файла JSX в каталоге
			items.forEach(item => {
				// Формируем путь к файлу JSX
				let jsxFilePath = `${path.reactWebp.src}/${item}`;
				// Читаем текущее содержимое файла
				$.fs.readFile(jsxFilePath, 'utf8', (err, data) => {
					if (err) {
						console.error(`Произошла ошибка при чтении файла ${jsxFilePath}: ${err}`);
					} else {
						// Добавляем строку с тегом <picture> в содержимое файла
						let updatedContent = data + `\n<picture>\n\t<source srcset="/img/tmp/${item.split('.')[0]}.webp" type="image/webp">\n\t<img src="/img/tmp/${item}" alt="${item.split('.')[0]}">\n</picture>\n`;
						// Записываем обновленное содержимое обратно в файл
						$.fs.writeFile(jsxFilePath, updatedContent, 'utf8', (err) => {
							if (err) {
								console.error(`Произошла ошибка при записи файла ${jsxFilePath}: ${err}`);
							} else {
								console.log(`Тег <picture> успешно добавлен в файл ${jsxFilePath}`);
							}
						});
					}
				});
			});
		}
	});

	done(); // Говорим Gulp, что задача завершена
};
