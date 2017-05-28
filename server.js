var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.get('/',function(req,res,next){
	var info={"ipaddress":req.ip,"language":req.headers["accept-language"].split(",")[0],"software":req.headers["user-agent"]};
	console.log(req.connection.remoteAddress);
	res.send(info);
});
app.listen(port,function()
{
	console.log("listening");
})