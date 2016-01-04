var cheerio = require("cheerio");
var fs = require("fs");
var request = require("request");

//downloads all link urls from a website into a .txt file
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

//downloads all paragraphs from a website into a .txt file
function grabParagraphs(url, fileName){
  var paragraphs = [];
  if(typeof url !== "string"){
    throw new Error("Make sure your url is a string");
  } else{
    if(!fileName){
      fileName = Math.floor(Math.random() * 5000).toString();
    }
    request(url, function(err, resp, body){
      if(err) throw new Error(err);
      if(resp.statusCode !== 200) throw new Error("Server responded with " + resp.statusCode);
      $ = cheerio.load(body);
      $("p").each(function(i, paragraph){
        paragraphs[i] = $(paragraph).text();
      });
      fs.writeFile(fileName.toString() + ".txt", paragraphs.join("\n"), function(err){
        if(err) throw new Error(err);
      });
    });
  }
}

function grabImages(url, fileName){
  var images = [];
  if(typeof url !== "string"){
    throw new Error("Make sure your url is a string");
  } else{
    if(!fileName){
      fileName = Math.floor(Math.random() * 5000).toString();
    }
    request(url, function(err, resp, body){
      if(err) throw new Error(err);
      if(resp.statusCode !== 200) throw new Error("Server responded with " + resp.statusCode);
      $ = cheerio.load(body);
      $("img").each(function(i, img){
        images[i] = $(img).attr("src");
      });
      fs.writeFile(fileName.toString() + ".txt", images.join("\n"), function(err){
        if(err) throw new Error(err);
      });
    });
  }
}


module.exports = {
  grabLinks: grabLinks,
  grabParagraphs: grabParagraphs,
  grabImages: grabImages,
}
