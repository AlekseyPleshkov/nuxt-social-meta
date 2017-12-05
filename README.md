# Nuxt social meta

Generate meta-tags for social network - facebook and twitter.

## Install

```sh
npm i --save @nuxtjs/social-meta
```

## Usage

Add module to nuxt.config.js

```js
module.exports = {
  modules: [
    ...
    ['@nuxtjs/social-meta', {
      url: 'Site url',
      title: 'Title site',
      description: 'Description site',
      img: 'Link to image in static folder',
      locale: 'ru_RU',
      twitter: '@UserName',
      themeColor: '#ThemeColor'
    }]
  ]
}
```