/*!
 * Footer Component.
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
export default {
  controller: Ctrl,
  templateUrl: 'bedrock-angular-footer/footer-component.html'
};

/* @ngInject */
function Ctrl($rootScope, config) {
  const self = this;
  self.route = $rootScope.route;
  self.targets = config.data['bedrock-angular-footer'].targets;
  self.copyright = config.data['bedrock-angular-footer'].copyright;
}
