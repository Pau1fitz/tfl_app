describe('PFL App homepage', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('PFL App');
  });

  it("has a logo", function() {
    expect(browser.isElementPresent(by.id("logo"))).toBe(true);
  });

  it("has a status section", function() {
    expect(browser.isElementPresent(by.id("status_header"))).toBe(true);
  });

  it("has a section that allows a user to enter postcode", function(){
    expect(browser.isElementPresent(by.id("input_box"))).toBe(true);
  });

});