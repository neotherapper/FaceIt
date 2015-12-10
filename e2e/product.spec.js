'use strict';

describe('The Product List view', function () {
    var page;

    beforeEach(function () {
        browser.get('/index.html');
        page = require('./product.po');
    });

    it('should include product element with correct data', function() {
        expect(page.h1El.getText()).toBe('Product List');
    });

    it('should list more than 5 products', function () {
        expect(page.productEls.count()).toBeGreaterThan(5);
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Product View');
    });

    it('should have specific information for its first product', function() {
        page.productEls.then(function(products){
            var firstProductTitle = products[0].element(by.css('.panel-heading'));
            var firstProductUscore = products[0].element(by.binding('uscore'));
            var firstProductImage = products[0].element(by.css('img'));

            expect(firstProductTitle.getText()).toEqual('Halo 5: Guardians');
            expect(firstProductUscore.getText()).toEqual('6.6');
            expect(firstProductImage.getAttribute('src')).toMatch(/assets\/images\/halo_5.jpg$/);
            expect(firstProductImage.getAttribute('alt')).toBe('Photo of Halo 5: Guardians');
        });
    });

    it('should have an add product button that adds a product', function() {
        page.addButton.click();
        page.productEls.then(function(products){
            var addedProductTitle = products[0].element(by.css('.panel-heading'));
            var addedProductUscore = products[0].element(by.binding('uscore'));
            var addedProductImage = products[0].element(by.css('img'));

            expect(addedProductTitle.getText()).toEqual('Product Title');
            expect(addedProductUscore.getText()).toEqual('0');
            expect(addedProductImage.getAttribute('src')).toMatch(/assets\/images\/no_image.jpeg$/);
        });
    });

    it('should have a delete button at each product that deletes it', function() {
        page.productEls.then(function(products){
            var deleteButton = products[0].element(by.css('.btn-danger'));
            deleteButton.click();
            expect(page.productEls.count()).toEqual(5);
        });
    });

    it('should have an edit button at each product that when clicked reveals a save button',function() {
        page.productEls.then(function(products){
            var editButton = products[0].element(by.css('.btn-primary'));
            editButton.click();
            var saveButton = products[0].element(by.css('.btn-success'));
            expect(saveButton.getText()).toEqual('Save');
        });
    });

});