# SPLATE

![SPLATE header](./src/images/splate.png)

**SPLATE** is an SCSS boilerplate for use in styling frontend web development projects. It’s based on the [7-1](https://sass-guidelin.es/) SCSS format, but adapted to my own needs and preferences. SPLATE keeps your styles neat and tidy, and provides leeway for adding your own custom rules.

## What is ‘SCSS’?

[SCSS](https://sass-lang.com/documentation/syntax) (Sassy CSS) is a syntax style for SASS (Syntactically Awesome Style Sheets), which is itself an extension language for CSS. What does any of that mean? Webpages and web-based projects are styled with CSS, and while much can be achieved with default CSS, SCSS allows for more dynamic stylesheets that are easier to maintain, and add deeper programmatic functionality with utilities like variables, modules, nesting, and functions.

One of SCSS’s best features is the ability to separate styles into [_partials_](https://sass-lang.com/guide#topic-4#), allowing you to organize your styles into a more modular filetree that’s easier to work with. The partials contain small, modular bits of SCSS, which are imported into a main SCSS file before compiling. SPLATE is a pre-made directory structure for just such a use case.

![How SCSS Works](./src/images/scss-color.png)

[Learn SASS](https://sass-lang.com/guide)

## Usage

Clone SPLATE locally, and install dependencies (SPLATE uses `node-sass` for compiling):

```sh
git clone https://github.com/timmybytes/splate.git
cd splate
npm i
```

### Development

**Compile SCSS into CSS**

```sh
# Compiled CSS goes in the `dist/` directory be default.
$ npm run scss
```

**Compile SCSS live and watch for changes**

```sh
npm run scss:watch
```

**Copy all SCSS and HTML files from `src/` to `dist/`**

```sh
npm run build
```

**Generate SassDoc documentation**

```sh
# Outputs to `sassdoc/` in root by default.
$ npm run doc
```

**Compile/copy SCSS and HTML from `src/`, and generate [SassDoc](http://sassdoc.com/) documentation**

```sh
npm run prod
```

## Documentation

SPLATE uses [SassDoc](http://sassdoc.com/) for creating SASS documentation. The `sassdoc/` directory contains very basic initial documentation for the project. SassDoc will overwrite the `sassdoc/` directory each time it's generated and you can view or deploy the included html file for reference.

## Contributing

I’m not currently looking for contributions to SPLATE. However, if you feel something could be improved, feel free to submit an issue for discussion. Any and all ideas will be considered!

## License

This project is licensed under the [MIT License](./LICENSE.md). SPLATE is just a bunch of files—fork, tweak, and destroy them as you see fit.
