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
    function Product($q, Products) {

        var service = {
			edit: edit,
			del: del,
            get: get
        };

        return service;

        ///////////////////////////////////////////////

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
					deferred.resolve(response);
				})
				.catch(function(error){
					deferred.reject(error);
				});

			return deferred.promise;
		}

        /**
         * @name edit
         * @desc Edits Products from products data service
         * @returns {Promise} Data for Products
         * @memberOf Factories.Product
         */
		function edit(){
		}

        /**
         * @name del
         * @desc Deletes Products from products data service
         * @returns {Promise} Data for Products
         * @memberOf Factories.Product
         */
		function del(){
		}

    }

})();
