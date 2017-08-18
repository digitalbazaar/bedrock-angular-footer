/*!
 * Footer module.
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import FooterComponent from './footer-component.js';

const module = angular.module('bedrock.footer', ['ngMaterial', 'ngRoute']);

module.component('brFooter', FooterComponent);

/* @ngInject */
module.config($routeProvider => {
  // extend $routeProvider to set footer defaults
  const when = $routeProvider.when;
  // this must not be an arrow function
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
    return when.apply($routeProvider, arguments);
  };
});
