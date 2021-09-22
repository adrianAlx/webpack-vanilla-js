# Webpack Vanilla JS

Final configuration for Vanilla JS and Sass/CSS

### Notes:
You can update package.json:
```bash
npm i -g npm-check-updates
npm-check-updates -u
```

Remember to keep these versions:
```json
"css-loader": "^5.2.2",
"css-minimizer-webpack-plugin": "^3.0.2",
"html-loader": "^1.3.2",
"webpack-dev-server": "^3.11.2",
```

Rebuild node modules:
```bash
npm install
```

and:
```bash
npm run build
```

Start live server:
```bash
npm start
```

#### Polyfilling:
Basic Core:
```js
import "core-js/stable";
```

Async await:
```js
import 'regenerator-runtime/runtime';
```