/*
 * Bedrock Configuration.
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */

module.exports = function(bedrock) {
  const vars = bedrock.config.views.vars;
  vars['bedrock-angular-footer'] = vars['bedrock-angular-footer'] || {};
};
