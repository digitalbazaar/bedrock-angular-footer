/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([], function() {

'use strict';

/* @ngInject */
function factory(config) {
  return {
    restrict: 'E',
    scope: {
      footerLinks: '=brFooterLinks'
    },
    templateUrl: requirejs.toUrl(
      'bedrock-angular-footer/footer.html'),
    link: Link
  };

  function Link(scope) {
    var model = scope.model = {};
    model.targets = config.data['bedrock-angular-footer'].targets;
    model.copyright = config.data['bedrock-angular-footer'].copyright;
  }
}

return {brFooter: factory};

});
