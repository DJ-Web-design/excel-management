const {readFileSync, existsSync} = require("fs"),
	{join} = require("path")

exports.queryParse = string => {
	var temp = {};
	queryString.split("&").forEach(e=>{
		let splitted = e.split("=");
		temp[splitted[0]] = splitted[1];
	});
	return temp;
}

exports.sendFile = (file) => {
	if (existsSync(join(__dirname, "public", file))) {
		return readFileSync(join(__dirname, "public", file))
	} else {
		return "not-fount"
	}
}