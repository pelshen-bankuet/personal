const CleanCSS = require("clean-css");
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.*": "assets/fa/webfonts",
        "node_modules/@fortawesome/fontawesome-free/css/brands.css": "assets/fa/css/brands.min.css",
        "node_modules/@fortawesome/fontawesome-free/css/fontawesome.css": "assets/fa/css/fontawesome.min.css",
        "img": "img",
        "*.png": "",
        "favicon.ico": "",
        "site.webmanifest": ""
    });

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    return {
        dir: {
            output: "dist"
        }
    }
};
