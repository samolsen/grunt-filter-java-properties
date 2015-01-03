# grunt-filter-java-properties
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> [Grunt](http://gruntjs.com/) wrapper for the [filter-java-properties](https://github.com/samolsen/node-filter-java-properties) Node package. Performs key-value string replacement, similar to the Maven Resources plugin.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-filter-java-properties --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-filter-java-properties');
```

## The "filter_java_properties" task

### Overview
In your project's Gruntfile, add a section named `filter_java_properties` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  filter_java_properties: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.propertiesPath
Type: `String`  
*Required*

Path to a **.properties** file. Path should be absolute, or relative to `process.cwd()`.

#### options.delimiters
Type: `String`  
Default: `["${*}", "@"]`

Delimiters to use for string filtering. [More info](https://github.com/samolsen/node-filter-java-properties/blob/master/docs/javascript-api.md#filter-delimiters).

### Usage Examples

#### Default Options
In this example, the files contained in the `src` directory are filtered using the default delimiters, and written to the `dest` directory.

```js
grunt.initConfig({
  filter_java_properties: {
    options: {
      // The path to a file containing Java .properties style key-value pairs is required
      propertiesPath: '/tmp/configure.properties'
    },
    files: {
      'dest/': ['src/*']
    },
  },
})
```

#### Custom Delimiters
In this example, custom delimiters are used to filter the `src` files. See the Node package docs for [more info](https://github.com/samolsen/node-filter-java-properties/blob/master/docs/javascript-api.md#filter-delimiters).

```js
grunt.initConfig({
  filter_java_properties: {
    options: {
      // The path to a file containing Java .properties style key-value pairs is required
      propertiesPath: '/tmp/configure.properties',
      delimiters: '(*)'
    },
    files: {
      'dest/': ['src/*']
    },
  },
})
```

## License
Copyright (c) 2015 Sam Olsen. Licensed under the MIT license.

[npm-url]: https://npmjs.org/package/grunt-filter-java-properties
[npm-image]: https://badge.fury.io/js/grunt-filter-java-properties.png

[travis-url]: http://travis-ci.org/samolsen/grunt-filter-java-properties
[travis-image]: https://secure.travis-ci.org/samolsen/grunt-filter-java-properties.png?branch=master
