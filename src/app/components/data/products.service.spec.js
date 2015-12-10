(function() {
  'use strict';

  describe('service Products', function() {
    var Products;

    beforeEach(module('faceIt'));
    beforeEach(inject(function(_Products_) {
      Products = _Products_;
    }));

    it('should be registered', function() {
      expect(Products).not.toEqual(null);
    });

    describe('get function', function() {
      it('should exist', function() {
        expect(Products.get).not.toEqual(null);
      });

      it('should eventually return array of object', inject(function($rootScope) {
        var data = Products.get();
        var resolvedValue;

        expect(data).toBeDefined();

        data.then(function(value){
            resolvedValue = value;
        });

        // Propagate promise resolution to 'then' functions using $apply().
        $rootScope.$apply();
        expect(resolvedValue).toEqual(jasmine.any(Array));
        expect(resolvedValue[0]).toEqual(jasmine.any(Object));
        expect(resolvedValue.length > 5).toBeTruthy();

      }));



    });
  });
})();
