(function() {
  'use strict';

  describe('Product controller', function(){
    var vm;

    beforeEach(module('faceIt'));
    beforeEach(inject(function(_$controller_, _Product_, _toastr_) {
      spyOn(_Product_, 'get').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('ProductController');
    }));

    it('should define more than 5 products', function() {
      expect(angular.isArray(vm.products)).toBeTruthy();
      expect(vm.products.length === 5).toBeTruthy();
    });
  });
})();
