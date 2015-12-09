/**
 * Product Factory
 * @namespace Factories
 */

(function () {
    'use strict';

    angular
        .module('faceIt')
        .factory('Product', Product);

    /**
     * @namespace Product
     * @desc Application wide data crud for Products
     * @memberOf Factories
     */
    /* @ngInject */
    function Product($q, Products, toastr) {

        var products;

        var service = {
            add:    add,
			del:    del,
            get:    get,
            save:   save
        };

        return service;

        ///////////////////////////////////////////////

        /**
         * @name add
         * @desc Adds a new product to this product storage
         * @memberOf Factories.Product
         */
        function add() {
            var newProduct = {
                developer: 'Product Developer',
                genre: 'Product Genre',
                photo: null,
                rating: 'Product Rating',
                score: 0,
                uscore: 0.0,
                summary: 'Product Summary',
                title: 'Product Title'
            };

            toastr.info('Adding new Product');
            products.push(newProduct);
        }

        /**
         * @name del
         * @desc Deletes a Product from this product storage
         * @memberOf Factories.Product
         */
		function del(product){
            toastr.warning('Deleting Product ' + product.title);
            products.splice(products.indexOf(product), 1);
		}

        /**
         * @name get
         * @desc Returns Products from products data service
         * @returns {Promise} Data for Products
         * @memberOf Factories.Product
         */
		function get(){
			var deferred = $q.defer();

			Products.get()
				.then(function(response){
                    // Clone the original products because we do not want to change it.
		            products = angular.extend([], response);
                    console.log(products);
					deferred.resolve(products);
				})
				.catch(function(error){
					deferred.reject(error);
				});

			return deferred.promise;
		}

        /**
         * @name save
         * @desc Save Products to this product storage
         * @param {Object} product object to be saved
         * @memberOf Factories.Product
         */
		function save(product){
            toastr.success('You successfully saved ' + product.title);
		}

    }

})();
