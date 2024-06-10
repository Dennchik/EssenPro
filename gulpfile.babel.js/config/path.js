const pathSrc = "./#src";
const pathDest = "./build";

export default {
	root: pathDest,

	json: {
		fileName: 'data.json',
		src: pathSrc + '/data/*.json',
		watch: pathSrc + '/data/*.json',
		dest: pathSrc + '/data/temp',
		readFile: pathSrc + '/data/temp/data.json'
	},
	pug: {
		src: pathSrc + '/pug/pages/**/*{.pug,jade}',
		watch: pathSrc + '/pug/**/*.{pug,jade}',
		dest: pathDest
	},
	html: {
		src: pathDest + '/*.html',
		watch: pathDest + '/**/*.html',
		dest: pathDest
	},
	scss: {
		src: pathSrc + '/scss/*.{sass,scss}',
		watch: [pathSrc + '/scss/**/*.{sass,scss}', '!' + pathSrc + '/scss/app/**/*.{sass,scss}'],

		dest: pathDest + '/css',
	},
	js: {
		src: pathSrc + '/js/*.js',
		watch: pathSrc + '/js/**/*.{js,scss}',
		dest: pathDest + "/js"
	},
	react: {
		src: pathSrc + '/js/**/*.jsx',
		watch: pathSrc + '/js/**/*.jsx',
		dest: pathDest + '/js'
	},
	reactSass: {
		src: pathSrc + '/scss/assets/*.{jsx,js}',
		watch: pathSrc + '/scss/app/**/*.{scss,sass,jsx}',
		dest: pathDest + '/js/app/'
	},
	reactWebp: {
		src: pathSrc + '/js/layouts/*.{jsx}',
		watch: pathSrc + '/js/**/*.{jsx,scss}',
		dest: pathDest + '/js/app/'
	},
	image: {
		src: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico,mp4,mv4,mp3}',
		watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg,ico,,mp4,mv4,mp3}',
		dest: pathDest + '/img/',
	},
	sprite: {
		src: pathSrc + '/img-sprite/**/*.svg',
		watch: pathSrc + '/img-sprite/**/*.svg',
		dest: pathDest + '/img/sprites'
	},
	fonts: {
		src: pathSrc + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
		dest: pathDest + "/fonts"
	},
	fontsStyle: {
		src: pathSrc + '/scss/core/_fonts.scss',
		watch: pathSrc + '/scss/**/**.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
		dest: pathDest + '/fonts/',
	},
	clearFonts: {
		watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
	}
}; 