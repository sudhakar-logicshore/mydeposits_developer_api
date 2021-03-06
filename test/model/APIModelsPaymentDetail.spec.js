/**
 * mydeposits - Developer API
 * API services to automate Deposit Protection within your existing Property Management Software workflows and applications for both England & Wales, and also Scotland
 *
 * The version of the OpenAPI document: 1.2.2
 * Contact: api@mydeposits.co.uk
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MydepositsDeveloperApi);
  }
}(this, function(expect, MydepositsDeveloperApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MydepositsDeveloperApi.APIModelsPaymentDetail();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('APIModelsPaymentDetail', function() {
    it('should create an instance of APIModelsPaymentDetail', function() {
      // uncomment below and update the code to test APIModelsPaymentDetail
      //var instane = new MydepositsDeveloperApi.APIModelsPaymentDetail();
      //expect(instance).to.be.a(MydepositsDeveloperApi.APIModelsPaymentDetail);
    });

    it('should have the property beneficiaryName (base name: "beneficiaryName")', function() {
      // uncomment below and update the code to test the property beneficiaryName
      //var instane = new MydepositsDeveloperApi.APIModelsPaymentDetail();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountNumber (base name: "bankAccountNumber")', function() {
      // uncomment below and update the code to test the property bankAccountNumber
      //var instane = new MydepositsDeveloperApi.APIModelsPaymentDetail();
      //expect(instance).to.be();
    });

    it('should have the property bankSortCode (base name: "bankSortCode")', function() {
      // uncomment below and update the code to test the property bankSortCode
      //var instane = new MydepositsDeveloperApi.APIModelsPaymentDetail();
      //expect(instance).to.be();
    });

  });

}));
