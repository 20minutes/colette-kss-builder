# Colette kss-builder

Custom Twig.js builder for [kss-node](https://github.com/kss-node/kss-node) designed for [Colette](https://github.com/20minutes/colette).

## Custom KSS rules added

KSS is great but some options are missing.

### Symbols

To document SVG symbols

```scss
// SVG symbols
//
// A collection of svg symbols built with [svgstore](https://www.npmjs.com/package/svgstore).
//
// Symbols: **/*.svg in ../../svg/
//
// Style guide: Symbols
```

A new option is added to KSS to include SVG symbols bundle in KSS template.

```js
module.exports = {
  svgSprite: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0 0 32 32" id="symbol-social-youtube" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 8.3c-.4-1.4-1.4-2.4-2.8-2.8-2.4-.7-12.5-.7-12.5-.7s-10 0-12.5.7C2.1 5.9 1.1 6.9.7 8.3.2 10.8 0 13.4 0 16c0 2.6.2 5.2.7 7.7.4 1.4 1.4 2.4 2.8 2.8 2.5.7 12.5.7 12.5.7s10 0 12.5-.7c1.4-.4 2.4-1.4 2.8-2.8.5-2.5.7-5.1.7-7.7 0-2.6-.2-5.2-.7-7.7zM12.8 20.8v-9.6l8.4 4.8-8.4 4.8z"/></symbol></svg>`,
  svgPrefix: 'symbol',
}
```

It’s recommanded to use a tool to build your svg sprite.

## Integrate your local version into Colette

1. Run `npm pack` to generate a compressed `.tgz` file of the project (e.g `colette-kss-builder-5.4.0.tgz`) on the root of the project
2. On Colette's side, point to that file on the `package.json` and run `npm install`
3. /!\ Be careful to not commit this file and/or the colette-kss-file path
