# grunt-airbornos

**Optimize JavaScript files for running under Airborn OS.** By default,
Airborn OS has to parse all JavaScript files that contain variables like
`localStorage`, `location`, `window.top`, etc., to rewrite them to e.g.
`airborn_localStorage`, so that it can store the user's data inside the
Airborn OS account. For large JavaScript files, this can take a lot of
time, so doing it in advance is a big win. That's what this grunt plugin
is for. It rewrites those variables and lets Airborn OS know that the
file has been pre-prepared, so that it doesn't have to parse it again.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to
check out the [Getting Started](http://gruntjs.com/getting-started)
guide, as it explains how to create a [Gruntfile](http://gruntjs.com
/sample-gruntfile) as well as install and use Grunt plugins. Once you're
familiar with that process, you may install this plugin with this
command:

```shell
npm install grunt-airbornos --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-airbornos');
```

## The "airbornos" task

### Overview
In your project's Gruntfile, add a section named `airbornos` to the data
object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  airbornos: {
    your_target: {
      // Target-specific file lists go here.
    },
  },
});
```

### Usage Examples

```js
grunt.initConfig({
  airbornos: {
    files: [{
      expand: true,
      cwd: 'src',
      src: 'scripts/**/.js',
      dest: 'build'
    }]
  },
});
```