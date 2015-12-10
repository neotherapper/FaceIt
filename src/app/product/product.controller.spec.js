(function() {
  'use strict';

  describe('Product controller', function(){
      var vm;
      beforeEach(module('faceIt'));

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$controller_) {

        vm = _$controller_('ProductController', {
                products: [{},{},{},{},{},{}]
             });
    }));

    it('should define 6 products', inject(function() {
        expect(angular.isArray(vm.products)).toBeTruthy();
        expect(vm.products.length === 6).toBeTruthy();
    }));

  });
})();
