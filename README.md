# Dwebble

> (Japanese: イシズマイ Ishizumai) is a Bug/Rock Pokémon.

![](http://img2.wikia.nocookie.net/__cb20110514192036/pokemon/images/4/4a/Dwebble_BW.gif)

## U wot m8?

Dwebble is a starting point for making serious single page apps. It uses webpack as a module system, react for views and sass for style. For an even more opinionated front-end boilerplate - Dwebble evolves into [Crustle](https://github.com/measured/crustle) starting at level 34.

## Installation

1. Clone this repo and change the `origin` git remote.
2. Install node modules:

``` text
npm install
```

## Development server

``` text
npm run dev-server
open http://localhost:8080/
```

- The configuration is `webpack-dev-server.config.js`.
- Static HTML is served from `config/dev-server-public`.
- It automatically recompiles and refreshes the page when files are changed.


## Hot Module Replacement development server

``` text
npm run hot
open http://localhost:8080/
```

- The configuration is `webpack-hot-dev-server.config.js`.
- Static HTML is served from `config/dev-server-public`.
- It automatically recompiles when files are changed. When a hot-replacement-enabled file is changed (i. e. stylesheets or React components) the module is hot-replaced. If Hot Replacement is not possible the page is refreshed.

## Deployment to S3 bucket

1. Copy the `s3.example.json` file in `config/`.
2. Replace the placeholder values with your S3 bucket
3. Run the deploy script:

``` text
npm run deploy
```

- Static HTML is located in `config/production-public`.
- You might need to run it again if the Html file doesn't get picked up.
- The actual build folder is located in `build/public/`
- The main css and js files should get sent to the build folder, but if you have other static assets you may need to create a gulp task for them, or use webpack to move them in.

To build the production files without deploying:

``` text
npm run build
```

## Authors
**David Hauser**
- [GitHub](http://github.com/haustraliaer)

**Ben Jennings**
- [GitHub](http://github.com/jenbennings)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

Many thanks to @sokra for getting us [started](https://github.com/webpack/react-starter) with webpack and react!
