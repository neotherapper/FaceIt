/**
 * Main Controller
 * @namespace Controllers
 */
(function () {
    'use strict';

    angular
        .module('faceIt')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, webDevTec, toastr) {
        var vm = this;

        vm.awesomeThings    = [];
        vm.classAnimation   = '';
        vm.creationDate     = 1449610440856;
        vm.showToastr       = showToastr;

        activate();

        //////////////////////////////////////

        /**
         * @name activate
         * @desc Function to activate the Main controller
         * @memberOf Controllers.MainController
         */
        function activate() {
            getWebDevTec();
            $timeout(function () {
                vm.classAnimation = 'rubberBand';
            }, 4000);
        }

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

        function getWebDevTec() {
            vm.awesomeThings = webDevTec.getTec();

            angular.forEach(vm.awesomeThings, function (awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }
    }
})();
