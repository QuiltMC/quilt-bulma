# Quilt Bulma

This repository exists to package Quilt's modifications to [the Bulma CSS framework](https://bulma.io). This allows
us to share it between all of our sites, without relying on hacky approaches such as using the main domain as a 
pseudo-CDN.

# Development

## Building

1. Install NodeJS v18 or later
2. Install `npm` and `pnpm`
3. Run `pnpm i --dev` and `pnpm run build`
4. The built files will be placed in the `dist/` directory

## Creating a distribution

1. Follow the **Building** steps above
2. Run `pnpm pack` and a `quilt-bulma.zip` file will be generated

# Package Structure

* `css/`: Plain CSS which is needed to tie the light and dark themes together
* `sass/`: SCSS files representing our Bulma customisations
* When built, `/dist`: Contains built CSS files, as well as their minified versions

## Usage

* Create a [Personal Access Token](https://github.com/settings/tokens) with at least the `packages:read` scope

* Create a `.npmrc` file in your home folder (if it doesn't exist), and add the following line, replacing `TOKEN_HERE` 
  with the Personal Access Token you just generated:
  ```text
  //npm.pkg.github.com/:_authToken=TOKEN_HERE
  ```

* Create a `.npmrc` file in your project directory (if it doesn't exist), and add the following line:
  ```text
  @quiltmc:registry=https://npm.pkg.github.com
  ```

* Install `@quiltmc/quilt-bulma` with your favourite npm-alike
* Make use of the files you'll now find in `node_modules/@quiltmc/quilt-bulma`

# Project Credit

This project combines and modifies the following projects:

* [Bulma](https://bulma.io), the CSS framework


* The following [CreativeBulma](https://github.com/CreativeBulma/) components:
  * [bulma-divider](https://github.com/CreativeBulma/bulma-divider/), a Bulma extension for dividers with text
  * [bulma-tooltip](https://github.com/CreativeBulma/bulma-tooltip/), a Bulma extension for adding tooltips to anything


* The following [wikiki](https://wikiki.github.io/) components:
  * [bulma-timeline](https://wikiki.github.io/components/timeline/), a Bulma extension for vertical timeline layouts
