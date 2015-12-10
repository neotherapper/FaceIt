(function() {
  'use strict';

  angular
    .module('faceIt')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('products', {
        url: '/',
        templateUrl: 'app/product/product.html',
        controller: 'ProductController',
        controllerAs: 'vm',
        resolve: {
            products: /* @ngInject */
            function (Product) {
                return Product.get();
            }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
