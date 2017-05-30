/*!
 * Footer module.
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import FooterComponent from './footer-component.js';

var module = angular.module('bedrock.footer', ['ngRoute']);

module.component('brFooter', FooterComponent);

/* @ngInject */
module.config(function($routeProvider) {
  // extend $routeProvider to set footer defaults
  var when = $routeProvider.when;
  $routeProvider.when = function(path, route) {
    if(!('vars' in route)) {
      route.vars = {};
    }
    if(!('footer' in route.vars)) {
      route.vars.footer = {};
    }
    if(!('show' in route.vars.footer)) {
      route.vars.footer.show = true;
    }
    // backwards compatibility outer hr display
    route.vars.footer._hideOuterHr = true;
    return when.apply($routeProvider, arguments);
  };
});
