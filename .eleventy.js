module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./_includes/");
    eleventyConfig.addWatchTarget("./_includes/");
    return {
      passthroughFileCopy: true
    }
  }