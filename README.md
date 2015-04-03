# webpack multipage starter
Bundle shared "core" Javascript and CSS for all pages. Bundle Javascript and CSS unique to a single page type separately, only for pages of that type.

### Goals
* Component driven architecture
* Enable use of common third-party libraries like Bootstrap, jQuery.
* Use ES6 

### Installation
Install dependencies, 
```sh
$ npm install 
```

### Usage
Run grunt task to generate 'dist' directory and start development server and watch:
```sh
$ grunt
```
Open http://localhost:8000 in a browser.

### Details
All source code lives in the "src" directory. Child directories in "entry" exist for each type of page. For example a site with three kinds of templates (a homepage, a catalog page, and a product detail page) would have three sub-directories here. As much code as possible lives within "components" sub-directories. Components used across multiple entry page types are shared as "core" JavaScript and CSS files. Code that is not component based or entry page template specific lives in the "utility" directory. Third party code goes in the "vendor" directory.

### Notes
CSS code is generated from SASS. Use of a BEM style naming convention recommended since CSS bundle order cannot be controlled. 

ES5-Shims included for IE8 or less support, added to entry page HTML files in IE conditional comments. These libs and references may be removed if IE8 support is not required. Even with shim some ES6 features will not work well (e.g. getters/setters), see https://github.com/es-shims/es5-shim

Run 'grunt production' for optimized build. 

### License

[MIT License](http://opensource.org/licenses/MIT)