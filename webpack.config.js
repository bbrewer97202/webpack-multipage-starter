var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
	ProvidePlugin = require("webpack/lib/ProvidePlugin");

module.exports = {
    entry: {
    	"vendor": ["jquery", "underscore"],
    	"site": "./src/js/site.js",
    	"home": "./src/js/modules/home/entry.js",
    	"about": "./src/js/modules/about/entry.js",
    },
    output: {
        path: __dirname + "/js",
        filename: "[name].js"
    },
	plugins: [
		new CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
		new ProvidePlugin({
		    $: "jquery",
		    jQuery: "jquery",
		    "windows.jQuery": "jquery"
		})		
	]    
};
