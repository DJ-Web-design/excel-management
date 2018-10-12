const {existsSync, appendFileSync, unlinkSync, writeFileSync, readFileSync} = require("fs"),
	{join} = require("path");

class ExcelManagement {
	constructor(){
		this.tablesPath = join(__dirname, "../../Tables");
		this.tablesManagementPath = join(__dirname, "../../TablesManagement");
	}
	createTable(tableName){
		let data;
		if (existsSync(join(this.tablesPath, tableName+".csv"))) {
			data = "Existe una tabla con ese nombre";
		} else {
			appendFileSync(join(this.tablesPath, tableName+".csv"));
			appendFileSync(join(this.tablesManagementPath, tableName+".json"))
			data = "Tabla Creada";
		}
		return data;
	}
	deleteTable(tableName){
		let data;
		if (existsSync(join(this.tablesPath, tableName+".csv"))) {
			unlinkSync(join(this.tablesPath, tableName+".csv"));
			data = "Tabla Eliminada";
		} else {
			data = "Tabla no existe";
		}
		return data;
	}

	createReg(table, data){
		if (data.toString() !== "[object Object]") {
			throw new Error("Parametro data debe ser un Objeto");
		} else {
			writeFileSync(join(this.tablesManagementPath, table+".json"), JSON.stringify(data));
			writeFileSync(join(this.tablesPath, table+".csv"), Object.keys(data).join(";") + "\n")
		}
	}
	addReg(table, data){
		if (data.toString() !== "[object Object]") {
			throw new Error("Parametro data debe ser un Objeto");
		} else {
			let dataJson = require(join(this.tablesManagementPath, table+".json"));
			let dataCSV = join(this.tablesPath, table+".csv");
			let toString = [];
			Object.keys(dataJson).forEach((e, i)=>{
					toString.push(data[e]);
			})
			let finalData = toString.map(e=>{
				if (!e) return "";
				else return e;
			}).join(";") + ";\n";
			appendFileSync(dataCSV, finalData);
		}
	}
	/**
	 * {order:"ascendent", "descendent"}
	 * {key:"Value"}
	 */
	findReg(table, option){
		let dataJson = require(join(this.tablesManagementPath, table+".json"));
		let dataCSV = join(this.tablesPath, table+".csv");

		var reverse = option.reverse || "descendent";

		var indexes = []
		var reg;
		var keys = [];

		Object.keys(dataJson).forEach((e, index)=>{
			keys.push(e);
			Object.keys(option).forEach(ev=>{
				if (e === ev) {
					reg = new RegExp(option[e], "gi");
					indexes.push(index);
				}
			})
		})

		let buff = readFileSync(dataCSV);
		let str = Buffer.from(buff).toString();
		var files = str.split(/\n/g);

		var newData = [];
		indexes.forEach((e, i)=>{
			let arrdata = files.map((ev, ind)=>{
				return ev.split(";");
			})
			arrdata.forEach((ev, inde)=>{
				if (ev[e]) {
					if (ev[e].match(reg)) {
						let temp = {
							index: inde
						};
						keys.forEach((a, d)=>{
							temp[a] = ev[d];
						})
						newData.push(temp)
					}
				}
			})	
		})
		if (reverse === "ascendent") newData = newData.reverse();
		return newData

	}
	deleteRegByIndex(table, index){
		let dataJson = require(join(this.tablesManagementPath, table+".json"));
		let dataCSV = join(this.tablesPath, table+".csv");

		let data = Buffer.from(readFileSync(dataCSV)).toString()
		writeFileSync(dataCSV, data.split("\n").splice(index, 1).join("\n"));

	}
}

module.exports = ExcelManagement;