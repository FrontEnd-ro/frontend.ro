/**
 * Custom configuration for our Gruntfile. We've extracted them
 * into a separate file so it's easier to know/understand what
 * we've added on top of the initial MailMason code.
 */
function getConnectConfig() {
  return {
    server: {
      options: {
        port: 8080,
        open: true,
        // inject livereload.js into the pages
        livereload: true,
        base: {
          path: '.',
          options: {
            index: 'previews.html',
          },
        },
      },
    },
  };
}

function extendWithDevTask(grunt) {
  // Custom made task by us, so we can build,
  // watch and start a static server to preview templates
  // in one command.
  grunt.registerTask('dev', [
    'default',
    'connect',
    'watch',
  ]);
}

module.exports = { getConnectConfig, extendWithDevTask };
