# Nuxt social meta

Nuxt.js module generate meta-tags for social networks - Facebook, Twitter and LinkedIn (and the rest uses OG tags, such as Discord etc.).

## Install

```sh
npm i nuxt-social-meta --save

# or, with yarn:

yarn add nuxt-social-meta
```

## Usage

Add module to your `nuxt.config.js`

```js
module.exports = {
  modules: [
    ...[
      "nuxt-social-meta",
      {
        url: "Site url",
        title: "Title",
        site_name: "Site name",
        description: "Site description",
        img: "Link to image in static folder",
        img_size: { width: "Image width in px", height: "Image height in px" },
        locale: "en_US",
        twitter: "@user",
        twitter_card: "summary_large_image",
        theme_color: "#theme-color",
      },
    ],
  ],
};
```

## Override

The `title` meta will automatically overwrite, while for all the other `meta` properties (such as `og: title`, `og: description`, etc.) the `hid` attribute **must** be entered to override the desired property.

```js
export default {
  ...
  head() {
    return {
      title: 'Page title',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Page title',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Page description',
        },
        ...
      ]
    }
  }
  ...
}
```