/**
 * Product Directive
 * @namespace Directives
 */

(function() {
    'use strict';

    angular
        .module('faceIt')
        .directive('fcProduct', product);

    /**
     * @namespace product
     * @desc product directive
     * @example <fc-product data="product" whensaved="vm.saveProduct"></fc-product>
     * @memberOf Directives
     */
    /* @ngInject */
    function product() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/product/product.html',
            scope: {
                data: '=',
                whendeleted: "=",
                whensaved: "="
            },
            link: link,
            controller: ProductController,
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return directive;
    }

    function link(scope, ele, attr){

    }

    /**
     * @namespace product
     * @desc product directive controller
     * @memberOf Controllers
     */
    /* @ngInject */
    function ProductController($scope) {

        var vm = this;

        vm.product          = {};
        vm.editProduct      = editProduct;
        vm.removeProduct    = removeProduct;
        vm.saveProduct      = saveProduct;

        vm.productEdited    = null;
        activate();

        /**
         * @name activate
         * @desc Function to activate the controller
         * @memberOf Controllers.ProductController
         */
        function activate() {
			vm.product = vm.data;
        }

        function editProduct(property) {
            vm.productEdited = true;

        }

        function removeProduct() {
            vm.whendeleted(vm.product);
        }

         function saveProduct() {
            vm.productEdited = false;
            vm.whensaved(vm.product);
        }
    }

})();
