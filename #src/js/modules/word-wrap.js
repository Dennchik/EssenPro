export function wordWrap() {
	document.addEventListener("DOMContentLoaded", function () {
		const text = document.body.innerHTML;
		const prepositions = ['а', ' в', 'во', 'и', 'к', 'кроме', 'с', 'со', 'у', 'о', 'об', 'от', 'по', 'под', 'про', 'за', 'из', 'над', 'до', 'для', 'через', 'при', 'без', ' из-за ', 'ради', 'около', 'вокруг', 'впереди', 'внутри', 'вне', 'на', 'из-под', 'накануне', 'после', 'между', 'среди', 'перед', 'напротив', 'вместо', 'сверх', 'по']; // список предлогов
		let updatedText = text;

		prepositions.forEach(preposition => {
			const regex = new RegExp(` ${preposition} `, 'g');
			updatedText = updatedText.replace(regex, ` ${preposition}&nbsp;`);
		});

		document.body.innerHTML = updatedText;
	});
}