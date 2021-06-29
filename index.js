module.exports = function socialMeta(options) {
  // All meta tags
  const metaTags = [
    // Global
    { name: "author", content: options.url },
    { name: "publisher", content: options.url },
    { name: "apple-mobile-web-app-title", content: options.title },
    { name: "theme-color", content: options.theme_color },

    // Facebook & LinkedIn
    { property: "og:title", content: options.title },
    { property: "og:description", content: options.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: options.url },
    { property: "og:image", content: options.img },
    { property: "og:image:width", content: options.img_size.width },
    { property: "og:image:height", content: options.img_size.height },
    { property: "og:locale", content: options.locale },
    { property: "og:site_name", content: options.site_name },

    // Twitter
    { name: "twitter:card", content: options.twitter_card },
    { name: "twitter:site", content: options.twitter },
    { name: "twitter:creator", content: options.twitter },
    { name: "twitter:title", content: options.title },
    { name: "twitter:description", content: options.description },
    { name: "twitter:image", content: options.img },
    { name: "twitter:image:width", content: options.img_size.width },
    { name: "twitter:image:height", content: options.img_size.height },
  ];

  // Add meta tags to head
  metaTags.forEach((tag) => {
    if (tag.content !== undefined && tag.content !== null) {
      if (tag.hasOwnProperty("name")) {
        this.options.head.meta.push({
          hid: tag.name,
          name: tag.name,
          content: tag.content,
        });
      }else if(tag.hasOwnProperty("property")){
        this.options.head.meta.push({
          hid: tag.property,
          property: tag.property,
          content: tag.content,
        });
      }
    }
  });
};

module.exports.meta = require("./package.json");
