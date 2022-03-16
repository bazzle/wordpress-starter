module.exports = function(grunt) {

  require("jit-grunt")(grunt);

  grunt.initConfig({
    
    "dart-sass": {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      files: {
        src: "assets/css/main.scss",
        dest: "style.css"
      }
    },
    svgstore: {
      options: {
        includedemo: true,
        cleanSymbols: true,
        cleanup:true
      },
      files: {
        src: 'assets/svg/embed/*.svg',
        dest: 'build/svg/icons.svg'
      },
    },
    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        }
      },
      production: {
        files: [
          {
            'static/main.min.js': 'assets/js/main.js'
          },
          {
            'static/editor.min.js': 'assets/js/editor.js'
          }
        ]
      }
    },
    browserSync: {
        dev: {
            bsFiles: {
                src : [
                    "**/*.php",
                    "build/css/*.css",
                    "build/scripts/main.js"
                ]
            },
            options: {
                watchTask: true,
                proxy: "http://gutenburgtest.local/"
            }
        }
    },
    watch: {
      css: {
        files: ["assets/css/**/*.scss"],
        tasks: ["dart-sass"]
      },
      scripts: {
        files: ["assets/scripts/**/*.js"],
        tasks: ["browserify"]
      }
    }
  });
  grunt.registerTask("svg", [
    "svgstore"
  ]);
  grunt.registerTask("dev", [
    "browserSync", "watch"
  ]);
};