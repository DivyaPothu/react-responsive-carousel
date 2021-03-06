var jest = require('jest-cli');
var gutil = require('gulp-util');
var configs = require('./configs');

var jestConfig = {
  rootDir: configs.paths.source,
  "unmockedModulePathPatterns": [
      "./node_modules/"
  ],
  verbose: false
};

module.exports = function() {
    jest.runCLI({ config: jestConfig }), configs.paths.source, function() {
      done().on('error', gutil.log);
    };
};
