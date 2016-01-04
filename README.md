# hrefz

hrefz downloads web content from websites.


### Installation

```sh
$ npm install hrefz
```

### Use

```javascript
var hrefz = require("hrefz");

//downloads all link urls from a website.
hrefz.grabLinks("http://yourwebsite.com", "chooseafilename");

//downloads all paragraphs from a website
hrefz.grabParagraphs("http://yourwebsite.com", "chooseafilename");

//downloads all images src's from a website
hrefz.grabImages("http://yourwebsite.com", "chooseafilename");

```

### Built on

hrefz uses:

* [cheerio](https://github.com/cheeriojs/cheerio) - to scrape the website
* [request](https://github.com/request/request) - to grab the website

License
----

MIT
