const express = require("express"),
	  {join} = require("path"),
	  {exec} = require("child_process");

const app = express();
const PORT = process.env.PORT || 1999;

var child;
const public = join(__dirname, "public");

app.use(express.static(public));
app
	.get("*",(req, res)=>{
		res.status(404).send("not-found");
	})
	.get("/",(req, res)=>{
		res.writeHeader(200, {"Content-Type":"text/html; charset=utf-8"})
		res.sendFile("index.html");
	})
	.get("*.js", (req, res)=>{
		res.writeHeader(200, {"Content-Type":"text/javascript"});
		res.sendFile(req.url);
	})
	.get("*.css",(req, res)=>{
		res.writeHeader(200, {"Content-Type":"text/css"});
		res.sendFile(req.url);
	})
	.get("/change-data", (req, res)=>{
		
	})
	.get("/fetch-data", (req, res)=>{
		
	})
	.listen(PORT, ()=>{
		console.log(`Listening on port ${PORT}`);
		//exec(`start http://localhost:${PORT}`);
	});
