module.exports = function socialMeta(options) {
  // All meta tags
  const metaTags = [
    // Global
    { name: "author", content: options.url },
    { name: "publisher", content: options.url },
    { name: "apple-mobile-web-app-title", content: options.title },
    { name: "theme-color", content: options.themeColor },

    // Facebook & LinkedIn
    { name: "og:title", content: options.title },
    { name: "og:description", content: options.description },
    { name: "og:type", content: "website" },
    { name: "og:url", content: options.url },
    { name: "og:image", content: options.img },
    { name: "og:locale", content: options.locale },
    { name: "og:site_name", content: options.site_name },

    // Twitter
    { name: "twitter:card", content: options.twitter_card },
    { name: "twitter:site", content: options.twitter },
    { name: "twitter:creator", content: options.twitter },
    { name: "twitter:title", content: options.title },
    { name: "twitter:description", content: options.description },
    { name: "twitter:image", content: options.img },
  ];

  // Add meta tags to head
  metaTags.forEach((tag) => {
    if (tag.content !== undefined && tag.content !== null) {
      this.options.head.meta.push({
        hid: tag.name,
        name: tag.name,
        content: tag.content,
      });
    }
  });
};

module.exports.meta = require("./package.json");
