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

        vm.addProduct       = addProduct;
        vm.deleteProduct    = deleteProduct;
        vm.products         = products;
        vm.saveProduct      = saveProduct;

        activate();

        //////////////////////////////////////

        /**
         * @name activate
         * @desc Function to activate the Product controller
         * @memberOf Controllers.ProductController
         */
        function activate() {
            document.title = 'Product View';
        }

        /**
         * @name addProduct
         * @desc Function to add a new product to the view
         * @memberOf Controllers.ProductController
         */
        function addProduct() {
            Product.add();
        }

        /**
         * @name deleteProduct
         * @desc Function to delete a specific product
         * @param {Object} product
         * @memberOf Controllers.ProductController
         */
        function deleteProduct(product) {
            Product.del(product);
        }

        /**
         * @name saveProduct
         * @desc Function to save a specific product
         * @param {Object} product
         * @memberOf Controllers.ProductController
         */
        function saveProduct(product){
            Product.save(product);
        }
    }
})();
