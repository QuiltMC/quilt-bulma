# Quilt Bulma

This repository exists to package Quilt's modifications to [the Bulma CSS framework](https://bulma.io). This allows
us to share it between all of our sites, without relying on hacky approaches such as using the main domain as a
pseudo-CDN.

# Development

## Building

1. Install NodeJS v18 or later
2. Install `npm` and `pnpm`
3. Run `pnpm i` and `pnpm build`
4. The built files will be placed in the `dist/` directory

## Creating a distribution

1. Follow the **Building** steps above
2. Run `pnpm pack` and a `quilt-bulma.zip` file will be generated

## Releasing

1. Update the version provided in the `package.json`
2. Commit your changes, and add a tag named `vVERSION` - for example, `v0.0.3`
3. Push your changes along with the tag
4. GitHub Actions will build and release automatically

# Usage

1. Install `quilt-bulma` with your favourite npm-alike
2. Make use of the files you'll now find in `node_modules/quilt-bulma

# Package Structure

* `css/`: Plain CSS which is needed to tie the light and dark themes together
* `sass/`: SCSS files representing our Bulma customisations
* When built, `/dist`: Contains built CSS files, as well as their minified versions`

# Project Credit

This project combines and modifies the following projects:

* [Bulma](https://bulma.io), the CSS framework


* The following [CreativeBulma](https://github.com/CreativeBulma/) components:
  * [bulma-divider](https://github.com/CreativeBulma/bulma-divider/), a Bulma extension for dividers with text
  * [bulma-tooltip](https://github.com/CreativeBulma/bulma-tooltip/), a Bulma extension for adding tooltips to anything


* The following [wikiki](https://wikiki.github.io/) components:
  * [bulma-timeline](https://wikiki.github.io/components/timeline/), a Bulma extension for vertical timeline layouts
