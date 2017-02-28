/*!
 * Footer Component.
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
define([], function() {

'use strict';

function register(module) {
  module.component('brFooter', {
    controller: Ctrl,
    templateUrl: requirejs.toUrl(
      'bedrock-angular-footer/footer-component.html'),
  });
}

/* @ngInject */
function Ctrl($rootScope, config) {
  var self = this;
  self.route = $rootScope.route;
  self.targets = config.data['bedrock-angular-footer'].targets;
  self.copyright = config.data['bedrock-angular-footer'].copyright;
}

return register;

});
