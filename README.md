# hrefz

hrefz is a module that grabs links from a  specified url and saves them inside a text file


### Built on

hrefz uses:

* [cheerio](https://github.com/cheeriojs/cheerio) - to scrape the website
* [request](https://github.com/request/request) - to grab the website


### Installation

```sh
$ npm i hrefz
```

### Use

```javascript
var hrefz = require("hrefz");

//the first argument is the URL and the second is a filename
var links = hrefz.grabLinks("http://yourwebsite.com", "nameoffile");

```

License
----

MIT
