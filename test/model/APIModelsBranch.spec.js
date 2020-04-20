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
    instance = new MydepositsDeveloperApi.APIModelsBranch();
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

  describe('APIModelsBranch', function() {
    it('should create an instance of APIModelsBranch', function() {
      // uncomment below and update the code to test APIModelsBranch
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be.a(MydepositsDeveloperApi.APIModelsBranch);
    });

    it('should have the property branchName (base name: "branchName")', function() {
      // uncomment below and update the code to test the property branchName
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property parentBranchID (base name: "parentBranchID")', function() {
      // uncomment below and update the code to test the property parentBranchID
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property thirdPartyReference (base name: "thirdPartyReference")', function() {
      // uncomment below and update the code to test the property thirdPartyReference
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property addressLine1 (base name: "addressLine1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "addressLine2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property addressLine3 (base name: "addressLine3")', function() {
      // uncomment below and update the code to test the property addressLine3
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property addressLine4 (base name: "addressLine4")', function() {
      // uncomment below and update the code to test the property addressLine4
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property postcode (base name: "postcode")', function() {
      // uncomment below and update the code to test the property postcode
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "emailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property mobileTelephone (base name: "mobileTelephone")', function() {
      // uncomment below and update the code to test the property mobileTelephone
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

    it('should have the property branchTelephone (base name: "branchTelephone")', function() {
      // uncomment below and update the code to test the property branchTelephone
      //var instane = new MydepositsDeveloperApi.APIModelsBranch();
      //expect(instance).to.be();
    });

  });

}));
