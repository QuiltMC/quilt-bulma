import * as fs from "fs";
import * as path from "path";
import sass from "sass";
import glob from "glob";

function setupDirectory(path) {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(path);
	}
}

setupDirectory("dist");

glob("./sass/*.{scss,sass}", {}, (_er, files) => {
	files.forEach((name) => {
		console.log(`Building: ${name}`);

		const result = sass.compile(name, {
			style: "compressed",
		});

		fs.writeFileSync(`dist/${path.parse(name).name}.min.css`, result.css);
	});
	console.log();
});
