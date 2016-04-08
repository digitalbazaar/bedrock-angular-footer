/*
 * Bedrock Configuration.
 *
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
var fs = require('fs');
var path = require('path');

module.exports = function(bedrock) {
  var vars = bedrock.config.views.vars;
  vars['bedrock-angular-footer'] = vars['bedrock-angular-footer'] || {};
};
