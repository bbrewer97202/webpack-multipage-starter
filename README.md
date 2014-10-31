# webpack multipage starter
Simple webpack boilerplate for multiple JavaScript bundles.

### Overview
Example contains three sample HTML pages. Each page references two JavaScript files: 
* *vendor.js* contains 3rd party scripts, installed via node (in this example jquery + underscore)
* *site.js* contains shared code common across multiple HTML files

Optionally HTML files may have a third "entry" JavaScript file (home.js and about.js) that contains code specific to those pages alone.

### Installation
Install webpack globally:
```sh
$ npm install webpack -g
```

In the cloned project root directory, install the node.js dependencies:
```sh
$ npm install
```

### Usage
Run webpack (with optional watch and output flags)
```sh
$ webpack --progress --colors --watch
```
Open "index.html" in a browser.

### License

[MIT License](http://opensource.org/licenses/MIT)