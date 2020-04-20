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
    instance = new MydepositsDeveloperApi.APIModelsUnprotect();
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

  describe('APIModelsUnprotect', function() {
    it('should create an instance of APIModelsUnprotect', function() {
      // uncomment below and update the code to test APIModelsUnprotect
      //var instane = new MydepositsDeveloperApi.APIModelsUnprotect();
      //expect(instance).to.be.a(MydepositsDeveloperApi.APIModelsUnprotect);
    });

    it('should have the property tenancyEndDate (base name: "tenancyEndDate")', function() {
      // uncomment below and update the code to test the property tenancyEndDate
      //var instane = new MydepositsDeveloperApi.APIModelsUnprotect();
      //expect(instance).to.be();
    });

    it('should have the property keyType (base name: "keyType")', function() {
      // uncomment below and update the code to test the property keyType
      //var instane = new MydepositsDeveloperApi.APIModelsUnprotect();
      //expect(instance).to.be();
    });

    it('should have the property deductions (base name: "deductions")', function() {
      // uncomment below and update the code to test the property deductions
      //var instane = new MydepositsDeveloperApi.APIModelsUnprotect();
      //expect(instance).to.be();
    });

  });

}));
