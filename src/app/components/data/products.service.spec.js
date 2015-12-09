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

      it('should return array of object', function() {
        var data = Products.get();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
