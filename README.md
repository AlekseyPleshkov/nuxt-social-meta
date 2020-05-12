# Nuxt social meta

Nuxt.js module generate meta-tags for social network - Facebook, Twitter, and LinkedIn.

## Install

```sh
npm i --save nuxt-social-meta
```

## Usage

Add module to nuxt.config.js

```js
module.exports = {
  modules: [
    ...[
      'nuxt-social-meta',
      {
        url: 'Site url',
        title: 'Title site',
        site_name: 'Site Name',
        description: 'Description site',
        img: 'Link to image in static folder',
        locale: 'ru_RU',
        twitter: '@UserName',
        themeColor: '#ThemeColor',
      },
    ],
  ],
}
```
