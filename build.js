const {spawnSync} = require("child_process")

const CleanCSS = require('clean-css')
const fs = require('fs')
const sass = require('sass')

function setupDirectory(path) {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(path)
	} else {
		fs.rmSync(path, {recursive: true})
		fs.mkdirSync(path)
	}
}

setupDirectory("dist")

// TODO: Think about ways to de-hardcode this

const files = ["style-dark", "style-dark-rtl", "style-light", "style-light-rtl"]
const css = ["style", "style-rtl"]

files.forEach((name) => {
	console.log(`Building: ${name}.scss`)

	const result = sass.compile(`sass/${name}.scss`)

	fs.writeFileSync(`dist/${name}.css`, result.css)
})

console.log()
console.log(`Copying plain CSS files`)

css.forEach((name) => {
	fs.copyFileSync(`css/${name}.css`, `dist/${name}.css`)
	fs.copyFileSync(`css/${name}.min.css`, `dist/${name}.min.css`)
})

console.log()

files.forEach((name) => {
	const cleaner = new CleanCSS({
		inline: false,
		level: 2,
	})

	console.log(`Minifying: ${name}.css -> ${name}.min.css`)

	const result = cleaner.minify(
		fs.readFileSync(`dist/${name}.css`),

		(e, result) => {
			fs.writeFileSync(`dist/${name}.min.css`, result.styles)
		}
	)
})
