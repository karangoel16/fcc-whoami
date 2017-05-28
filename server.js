var express = require('express');
var useragent = require('useragent');
var app = express();
useragent(true);
var port = process.env.PORT || 3000;
app.get('/',function(req,res,next){
	var agent=useragent.parse(req.headers['user-agent']);
	var info={"ipaddress":req.ip.split(':')[3],"language":req.headers["accept-language"].split(",")[0],"software":agent.os.toString()};
	//console.log(req.connection.remoteAddress);
	res.send(info);
});
app.listen(port,function()
{
	console.log("listening");
})