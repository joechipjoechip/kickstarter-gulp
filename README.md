# What's this about?

* Automated tasks with Gulp
* Browsersync for live reloading static file changes
* Javascript transpiling with Babel for ES6 support
* Dynamic CSS with SASS support
* Sourcemaps for js and css files
* Javascript linting for Airbnb style with ESLint
* Editorconfig for consistent code
* Desktop notifications on errors

# 1. Create dotenv
File: /.env
```
# Source and distribution dirs for static files
STATIC_SRC = ./web/src
STATIC_DIST = ./web/dist
```

# 2. NPM dependencies
Install global dependencies
```
npm install -g eslint-config-airbnb eslint-plugin-react eslint gulp
```
Install project dependencies
```
npm install
```

# 3. Editor
Make sure your editor supports .editorconfig and ESlinting

# 4. Fire it up!
* Run command `gulp`
* Cheers!
