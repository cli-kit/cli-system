module.exports = {
  action: require('cli-mid-action'),
  boot: require('cli-mid-boot'),
  color: require('cli-mid-color'),
  command: require('cli-mid-command'),
  convert: require('cli-mid-convert'),
  debug: require('cli-mid-debug'),
  defaults: require('cli-mid-defaults'),
  ecommand: require('cli-mid-ecommand'),
  empty: require('cli-mid-empty'),
  emultiple: require('cli-mid-emultiple'),
  env: require('cli-mid-env'),
  erequired: require('cli-mid-erequired'),
  error: require('cli-mid-error'),
  eunknown: require('cli-mid-eunknown'),
  events: require('cli-mid-events'),
  exec: require('cli-mid-exec'),
  help: require('cli-mid-help'),

  load: require('./load'),

  logger: require('cli-mid-logger'),
  manual: require('cli-mid-manual'),
  merge: require('cli-mid-merge'),
  multiple: require('cli-mid-multiple'),
  notify: require('cli-mid-notify'),
  parser: require('cli-mid-parser'),
  rc: require('cli-mid-rc'),
  ready: require('cli-mid-ready'),
  run: require('cli-mid-run'),
  stdin: require('cli-mid-stdin'),

  substitute: require('./substitute'),

  unparsed: require('cli-mid-unparsed'),
  variables: require('cli-mid-variables'),
  verbose: require('cli-mid-verbose'),

  version: require('cli-mid-version')
}
