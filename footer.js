/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './footer-directive',
], function(
  angular,
  footerDirective) {

'use strict';

var module = angular.module('bedrock.footer', []);

module.directive(footerDirective);

return module.name;

});
