"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsBranch = _interopRequireDefault(require("../model/APIModelsBranch"));

var _APIModelsLandlordMember = _interopRequireDefault(require("../model/APIModelsLandlordMember"));

var _APIModelsPaymentDetail = _interopRequireDefault(require("../model/APIModelsPaymentDetail"));

var _APIModelsSubscribe = _interopRequireDefault(require("../model/APIModelsSubscribe"));

var _APIResponsesBranch = _interopRequireDefault(require("../model/APIResponsesBranch"));

var _APIResponsesBranchDetails = _interopRequireDefault(require("../model/APIResponsesBranchDetails"));

var _APIResponsesBranchList = _interopRequireDefault(require("../model/APIResponsesBranchList"));

var _APIResponsesDefaultPayment = _interopRequireDefault(require("../model/APIResponsesDefaultPayment"));

var _APIResponsesErrorList = _interopRequireDefault(require("../model/APIResponsesErrorList"));

var _APIResponsesLandlordMember = _interopRequireDefault(require("../model/APIResponsesLandlordMember"));

var _APIResponsesPaymentDetail = _interopRequireDefault(require("../model/APIResponsesPaymentDetail"));

var _APIResponsesPaymentDetailsList = _interopRequireDefault(require("../model/APIResponsesPaymentDetailsList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* MemberAccountServices service.
* @module api/MemberAccountServicesApi
* @version 1.2.2
*/
var MemberAccountServicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MemberAccountServicesApi. 
  * @alias module:api/MemberAccountServicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MemberAccountServicesApi(apiClient) {
    _classCallCheck(this, MemberAccountServicesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addMember operation.
   * @callback module:api/MemberAccountServicesApi~addMemberCallback
   * @param {String} error Error message, if any.
   * @param {module:model/APIResponsesLandlordMember} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a new member account record
   * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
   * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
   * @param {module:model/APIModelsLandlordMember} value 
   * @param {module:api/MemberAccountServicesApi~addMemberCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/APIResponsesLandlordMember}
   */


  _createClass(MemberAccountServicesApi, [{
    key: "addMember",
    value: function addMember(scheme, region, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling addMember");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling addMember");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling addMember");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _APIResponsesLandlordMember["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/member', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the memberBranchCreate operation.
     * @callback module:api/MemberAccountServicesApi~memberBranchCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new branch under a corporate landlord or agent member's account record
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:model/APIModelsBranch} value 
     * @param {module:api/MemberAccountServicesApi~memberBranchCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesBranch}
     */

  }, {
    key: "memberBranchCreate",
    value: function memberBranchCreate(scheme, region, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling memberBranchCreate");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling memberBranchCreate");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling memberBranchCreate");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _APIResponsesBranch["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/member/branch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the memberBranchGet operation.
     * @callback module:api/MemberAccountServicesApi~memberBranchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesBranchDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request details for a given branch under the member's account
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {String} id 
     * @param {module:api/MemberAccountServicesApi~memberBranchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesBranchDetails}
     */

  }, {
    key: "memberBranchGet",
    value: function memberBranchGet(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling memberBranchGet");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling memberBranchGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling memberBranchGet");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _APIResponsesBranchDetails["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/member/branch/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the memberBranchList operation.
     * @callback module:api/MemberAccountServicesApi~memberBranchListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesBranchList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request all branches for a given corporate landlord or agent member
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:api/MemberAccountServicesApi~memberBranchListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesBranchList}
     */

  }, {
    key: "memberBranchList",
    value: function memberBranchList(scheme, region, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling memberBranchList");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling memberBranchList");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _APIResponsesBranchList["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/member/branches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the memberBranchPut operation.
     * @callback module:api/MemberAccountServicesApi~memberBranchPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesBranch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing branch
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id Branch ID
     * @param {module:model/APIModelsBranch} value Models.Branch
     * @param {module:api/MemberAccountServicesApi~memberBranchPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesBranch}
     */

  }, {
    key: "memberBranchPut",
    value: function memberBranchPut(scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling memberBranchPut");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling memberBranchPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling memberBranchPut");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling memberBranchPut");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _APIResponsesBranch["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/member/branch/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the memberPaymentDetailsCreate operation.
     * @callback module:api/MemberAccountServicesApi~memberPaymentDetailsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesPaymentDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Custodial only - Add repayment details under a member account record
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:model/APIModelsPaymentDetail} value 
     * @param {module:api/MemberAccountServicesApi~memberPaymentDetailsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesPaymentDetail}
     */

  }, {
    key: "memberPaymentDetailsCreate",
    value: function memberPaymentDetailsCreate(scheme, region, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling memberPaymentDetailsCreate");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling memberPaymentDetailsCreate");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling memberPaymentDetailsCreate");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _APIResponsesPaymentDetail["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/member/account/payment/detail', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the memberPaymentDetailsDefault operation.
     * @callback module:api/MemberAccountServicesApi~memberPaymentDetailsDefaultCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesDefaultPayment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Custodial only - Set the default repayment details for the member's account
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {String} id ID of the payment details record that is to become the default payment object
     * @param {module:api/MemberAccountServicesApi~memberPaymentDetailsDefaultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesDefaultPayment}
     */

  }, {
    key: "memberPaymentDetailsDefault",
    value: function memberPaymentDetailsDefault(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling memberPaymentDetailsDefault");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling memberPaymentDetailsDefault");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling memberPaymentDetailsDefault");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _APIResponsesDefaultPayment["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/member/account/payment/{id}/default', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the memberPaymentDetailsGet operation.
     * @callback module:api/MemberAccountServicesApi~memberPaymentDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesPaymentDetailsList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Custodial only - Request all stored UK repayment details for a given member
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:api/MemberAccountServicesApi~memberPaymentDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesPaymentDetailsList}
     */

  }, {
    key: "memberPaymentDetailsGet",
    value: function memberPaymentDetailsGet(scheme, region, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling memberPaymentDetailsGet");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling memberPaymentDetailsGet");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _APIResponsesPaymentDetailsList["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/member/account/payment/details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the subscribeMember operation.
     * @callback module:api/MemberAccountServicesApi~subscribeMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subscribe a member to the specified scheme
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:model/APIModelsSubscribe} value 
     * @param {module:api/MemberAccountServicesApi~subscribeMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "subscribeMember",
    value: function subscribeMember(scheme, region, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling subscribeMember");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling subscribeMember");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling subscribeMember");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/v1/{scheme}/{region}/member/subscribe', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MemberAccountServicesApi;
}();

exports["default"] = MemberAccountServicesApi;