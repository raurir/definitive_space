const fs = require("fs");
const src = fs.readFileSync("blocks.js").toString();
console.log(src.length);
const compressed = src
	.replace(/  /g, "")
	.replace(/;\n/g, ";")
	.replace(/\n/g, "");
fs.writeFileSync("blocks.min.js", compressed);
