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
    instance = new MydepositsDeveloperApi.MemberAccountServicesApi();
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

  describe('MemberAccountServicesApi', function() {
    describe('addMember', function() {
      it('should call addMember successfully', function(done) {
        //uncomment below and update the code to test addMember
        //instance.addMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('memberBranchCreate', function() {
      it('should call memberBranchCreate successfully', function(done) {
        //uncomment below and update the code to test memberBranchCreate
        //instance.memberBranchCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('memberBranchGet', function() {
      it('should call memberBranchGet successfully', function(done) {
        //uncomment below and update the code to test memberBranchGet
        //instance.memberBranchGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('memberBranchList', function() {
      it('should call memberBranchList successfully', function(done) {
        //uncomment below and update the code to test memberBranchList
        //instance.memberBranchList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('memberBranchPut', function() {
      it('should call memberBranchPut successfully', function(done) {
        //uncomment below and update the code to test memberBranchPut
        //instance.memberBranchPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('memberPaymentDetailsCreate', function() {
      it('should call memberPaymentDetailsCreate successfully', function(done) {
        //uncomment below and update the code to test memberPaymentDetailsCreate
        //instance.memberPaymentDetailsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('memberPaymentDetailsDefault', function() {
      it('should call memberPaymentDetailsDefault successfully', function(done) {
        //uncomment below and update the code to test memberPaymentDetailsDefault
        //instance.memberPaymentDetailsDefault(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('memberPaymentDetailsGet', function() {
      it('should call memberPaymentDetailsGet successfully', function(done) {
        //uncomment below and update the code to test memberPaymentDetailsGet
        //instance.memberPaymentDetailsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeMember', function() {
      it('should call subscribeMember successfully', function(done) {
        //uncomment below and update the code to test subscribeMember
        //instance.subscribeMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));