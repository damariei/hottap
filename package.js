Package.describe({
  summary: "Hottap HTTP Client Library ported to Meteor"
});

Package.on_use(function (api) {
  api.add_files(['hottap.js'], 'client');
});
