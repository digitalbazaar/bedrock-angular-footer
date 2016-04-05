/*
 * Bedrock Configuration.
 *
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
var fs = require('fs');
var path = require('path');

module.exports = function(bedrock) {
  // FIXME: overrides config set elsewhere
  // export bedrock-key location for UI
  var vars = bedrock.config.views.vars;
  vars['bedrock-angular-footer'] = vars['bedrock-angular-footer'] || {};
  console.log(vars['bedrock-angular-footer']);
};
