Package.describe({
  name: 'kabalin:googlemaps-js-info-bubble',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles('js-info-bubble/src/infobubble-compiled.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kabalin:googlemaps-js-info-bubble');
  api.addFiles('googlemaps-js-info-bubble-tests.js');
});
