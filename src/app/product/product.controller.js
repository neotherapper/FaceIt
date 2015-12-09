/**
 * Product Controller
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular
        .module('faceIt')
        .controller('ProductController', ProductController);

    /** @ngInject */
    function ProductController(Product, products) {
        var vm = this;

        vm.addProduct   = addProduct;
        vm.products     = products;
        vm.saveProduct  = saveProduct;

        activate();

        //////////////////////////////////////

        /**
         * @name activate
         * @desc Function to activate the Product controller
         * @memberOf Controllers.ProductController
         */
        function activate() {

        }

        function addProduct() {
            Product.add();
        }

        function saveProduct(product){
            Product.save(product);
        }
    }
})();
