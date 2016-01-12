Package.describe({
  name: 'picsoung:accounts-cronofy',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Login service for Cronofy, getting calendars.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('picsoung:cronofy@1.0.0', ['client', 'server']);

  api.addFiles("cronofy.js");
});
