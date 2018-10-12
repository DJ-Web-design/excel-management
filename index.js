const express = require("express"),
	  {parse} = require("url"),
	  {join} = require("path"),
	  {queryParse, sendFile} = require("./Utils")

const app = express();

const PORT = process.env.PORT || 1999;

app.use(express.static(join(__dirname, "public")));
app
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
	.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));