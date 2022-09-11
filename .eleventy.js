// const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function (eleventyConfig) {
  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("_website-source/**/*.css");
  eleventyConfig.addPassthroughCopy("_website-source/**/*.scss");

  // eleventyConfig.addPlugin(EleventyVitePlugin);

  // https://www.npmjs.com/package/eleventy-postcss-extension
  // https://www.11ty.dev/docs/plugins/render/#renderfile 
  // https://www.npmjs.com/package/eleventy-sass
  // https://www.npmjs.com/package/eleventy-plugin-rollup
  // https://www.npmjs.com/package/eleventy-plugin-purgecss 
  // https://www.npmjs.com/package/eleventy-plugin-page-assets
  // https://bryanlrobinson.com/blog/creating-11ty-plugin-embed-svg-contents/ 




  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "njk",
      "html",
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: "/",
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: "_website-source",
      output: "_website-publish"
    }
  };
};
