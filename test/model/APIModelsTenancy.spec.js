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
    instance = new MydepositsDeveloperApi.APIModelsTenancy();
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

  describe('APIModelsTenancy', function() {
    it('should create an instance of APIModelsTenancy', function() {
      // uncomment below and update the code to test APIModelsTenancy
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be.a(MydepositsDeveloperApi.APIModelsTenancy);
    });

    it('should have the property thirdPartyReference (base name: "thirdPartyReference")', function() {
      // uncomment below and update the code to test the property thirdPartyReference
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property branchID (base name: "branchID")', function() {
      // uncomment below and update the code to test the property branchID
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property depositHolder (base name: "depositHolder")', function() {
      // uncomment below and update the code to test the property depositHolder
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property depositAmount (base name: "depositAmount")', function() {
      // uncomment below and update the code to test the property depositAmount
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property depositCapOverride (base name: "depositCapOverride")', function() {
      // uncomment below and update the code to test the property depositCapOverride
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property dateDepositPaid (base name: "dateDepositPaid")', function() {
      // uncomment below and update the code to test the property dateDepositPaid
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property tenancyStartDate (base name: "tenancyStartDate")', function() {
      // uncomment below and update the code to test the property tenancyStartDate
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property tenancyEndDate (base name: "tenancyEndDate")', function() {
      // uncomment below and update the code to test the property tenancyEndDate
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property tenancyType (base name: "tenancyType")', function() {
      // uncomment below and update the code to test the property tenancyType
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property annualRentalAmount (base name: "annualRentalAmount")', function() {
      // uncomment below and update the code to test the property annualRentalAmount
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property landlordID (base name: "landlordID")', function() {
      // uncomment below and update the code to test the property landlordID
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property landlordRegistrationNumber (base name: "landlordRegistrationNumber")', function() {
      // uncomment below and update the code to test the property landlordRegistrationNumber
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property propertyID (base name: "propertyID")', function() {
      // uncomment below and update the code to test the property propertyID
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property leadTenant (base name: "leadTenant")', function() {
      // uncomment below and update the code to test the property leadTenant
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property jointTenants (base name: "jointTenants")', function() {
      // uncomment below and update the code to test the property jointTenants
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

    it('should have the property interestedParty (base name: "interestedParty")', function() {
      // uncomment below and update the code to test the property interestedParty
      //var instane = new MydepositsDeveloperApi.APIModelsTenancy();
      //expect(instance).to.be();
    });

  });

}));
