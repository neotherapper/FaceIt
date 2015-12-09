/**
 * Product Photo Directive
 * @namespace Directives
 */

(function() {
    'use strict';

    angular
        .module('faceIt')
        .directive('fcProductPhoto', productPhoto);

    /**
     * @namespace productPhoto
     * @desc productPhoto directive
     * @example <fc-product-photo data="::result"></fc-product>
     * @memberOf Directives
     */
    /* @ngInject */
    function productPhoto() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/product_photo/product_photo.html',
            scope: {
                data: '='
            },
            link: link,
            controller: ProductPhotoController,
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return directive;
    }

    function link(scope, ele, attr){

    }

    /**
     * @namespace productPhoto
     * @desc profilePhoto directive controller
     * @memberOf Controllers
     */
    /* @ngInject */
    function ProductPhotoController($scope) {

        var vm = this;

        vm.photo = {};

        activate();

        /**
         * @name activate
         * @desc Function to activate the controller
         * @memberOf Controllers.ProductPhotoController
         */
        function activate() {
            var photoSrc = '../../assets/images/';

            if(vm.data){
                if(vm.data.photo){
                    vm.photo.src = photoSrc + vm.data.photo;
                }else{
                    console.log('lol');
                    vm.photo.src = getEmptyPhotoSrc();
                }
                vm.photo.alt    = 'Photo of ' + vm.data.title;
            }
        }

        /**
         * @name getEmptyPhotoSrc
         * @desc Function to build a default 'empty' photo src
         * @returns {String} photo path
         * @memberOf Controllers.ProfilePhotoController
         */
        function getEmptyPhotoSrc(){

            var photoSrc = '../../assets/images/';

			photoSrc += 'no_image.jpeg';

            return photoSrc;
        }
    }


})();