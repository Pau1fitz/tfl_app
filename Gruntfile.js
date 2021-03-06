module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'public/**/*.js', 'test/*.js']
    },
    modernizr: {

    dist: {
        "devFile" : "lib/modernizr-dev.js",

        "outputFile" : "build/modernizr-custom.js",
        "extra" : {
            "shiv" : true,
            "printshiv" : false,
            "load" : true,
            "mq" : false,
            "cssclasses" : true
        },
        "extensibility" : {
            "addtest" : false,
            "prefixed" : false,
            "teststyles" : false,
            "testprops" : false,
            "testallprops" : false,
            "hasevents" : false,
            "prefixes" : false,
            "domprefixes" : false,
            "cssclassprefix": ""
        },
        "uglify" : true,
        "tests" : [],
        "parseFiles" : true,
        "matchCommunityTests" : false,
        "customTests" : []
        }

    },
    protractor: {
      options: {
        configFile: "test/conf.js", // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        args: {
          // Arguments passed to the command
        }
      },
      your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
        options: {
          configFile: "test/conf.js", // Target-specific config file
          args: {} // Target-specific arguments
        }
      },
    },
    protractor_webdriver: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        command: 'webdriver-manager start',// Target-specific file lists and/or options go here.
      },
    },

    express: {
      options: {
        port: 3000,
        debug: true
      },
      server: {
        options: {
          script: 'server.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks("grunt-modernizr");
  grunt.registerTask('default', ['express','jshint','protractor_webdriver','protractor']);

};