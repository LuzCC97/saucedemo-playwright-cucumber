module.exports = {
  default: {
    require: [
      'steps/**/*.js',
      'support/**/*.js'
    ],
    format: [
      'progress'
    ],
    paths: [
      'features/**/*.feature'
    ],
    publishQuiet: true
  }
};