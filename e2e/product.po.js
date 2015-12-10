/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var ProductPage = function() {
  this.prEl = element(by.css('.product'));
  this.h1El = this.prEl.element(by.css('h1'));
  this.addButton = this.prEl.element(by.id('add'));
  this.productEls = element(by.css('body')).all(by.repeater('product in vm.products'));
};

module.exports = new ProductPage();