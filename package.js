Package.describe({
  name: 'espressolocator:googlemaps-js-info-bubble',
  version: '0.0.1',
  summary: 'Meteor package wrapper for googlemaps/js-info-bubble.',
  git: 'https://github.com/espressolocator/googlemaps-js-info-bubble',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles('js-info-bubble/src/infobubble-compiled.js', 'client');
});

