var cheerio = require("cheerio");
var fs = require("fs");
var request = require("request");

function grabLinks(url, fileName){
  var links = [];
  if(typeof url !== "string"){
    throw new Error("Make sure your url is a string!");
  } else{
    if(!fileName){
      fileName = Math.floor(Math.random() * 5000).toString();
    }
    request(url, function(err, resp, body){
      if(err) throw new Error(err);
      if(resp.statusCode !== 200) throw new Error("Server responded with " + resp.statusCode);
      $ = cheerio.load(body);
      $("a").each(function(i, link){
        links[i] = $(link).attr("href");
      });
      fs.writeFile(fileName.toString() +".txt", links.join("\n"), function(err){
        if(err) throw new Error(err);
      });
    });
  }
}

module.exports = {
  grabLinks: grabLinks
}
