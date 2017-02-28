/*!
 * Footer module.
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './footer-component'
], function(angular) {

'use strict';

var module = angular.module('bedrock.footer', []);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

/* @ngInject */
module.config(function($routeProvider) {
  // extend $routeProvider to set footer defaults
  var when = $routeProvider.when;
  $routeProvider.when = function(path, route) {
    if(!('vars' in route)) {
      route.vars = {};
    }
    if(!('footer' in route.vars)) {
      route.vars.footer = true;
    }
    return when.apply($routeProvider, arguments);
  };
});

});
