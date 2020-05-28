/* globals gauge*/
"use strict";
const request = require("request");

step("Open Baidu <url>", async (url) => {
	var options = {method:'get',encoding:'utf-8',url:url};
    request(options,(err,res,body)=>{
		console.log("*******************"+body.toString());
	});
});

