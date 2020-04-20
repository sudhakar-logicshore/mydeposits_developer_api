"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsCheckout = _interopRequireDefault(require("../model/APIModelsCheckout"));

var _APIModelsTenancy = _interopRequireDefault(require("../model/APIModelsTenancy"));

var _APIModelsUnprotect = _interopRequireDefault(require("../model/APIModelsUnprotect"));

var _APIModelsUnprotectAccept = _interopRequireDefault(require("../model/APIModelsUnprotectAccept"));

var _APIResponsesCheckout = _interopRequireDefault(require("../model/APIResponsesCheckout"));

var _APIResponsesConvertSPT = _interopRequireDefault(require("../model/APIResponsesConvertSPT"));

var _APIResponsesErrorList = _interopRequireDefault(require("../model/APIResponsesErrorList"));

var _APIResponsesOTP = _interopRequireDefault(require("../model/APIResponsesOTP"));

var _APIResponsesProtectionList = _interopRequireDefault(require("../model/APIResponsesProtectionList"));

var _APIResponsesTenancy = _interopRequireDefault(require("../model/APIResponsesTenancy"));

var _APIResponsesTenancyDetails = _interopRequireDefault(require("../model/APIResponsesTenancyDetails"));

var _APIResponsesUnprotect = _interopRequireDefault(require("../model/APIResponsesUnprotect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TenancyServices service.
* @module api/TenancyServicesApi
* @version 1.2.2
*/
var TenancyServicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TenancyServicesApi. 
  * @alias module:api/TenancyServicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TenancyServicesApi(apiClient) {
    _classCallCheck(this, TenancyServicesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the tenancyCertificate operation.
   * @callback module:api/TenancyServicesApi~tenancyCertificateCallback
   * @param {String} error Error message, if any.
   * @param {File} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve deposit protection PDF
   * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
   * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
   * @param {Number} id ID of the Tenancy resource
   * @param {module:api/TenancyServicesApi~tenancyCertificateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link File}
   */


  _createClass(TenancyServicesApi, [{
    key: "tenancyCertificate",
    value: function tenancyCertificate(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyCertificate");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyCertificate");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenancyCertificate");
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
      var accepts = ['application/pdf'];
      var returnType = File;
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy/{id}/depositprotection', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyCheckout operation.
     * @callback module:api/TenancyServicesApi~tenancyCheckoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesCheckout} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Checkout a tenancy deposit protection
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id ID of the Tenancy resource
     * @param {module:model/APIModelsCheckout} value 
     * @param {module:api/TenancyServicesApi~tenancyCheckoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesCheckout}
     */

  }, {
    key: "tenancyCheckout",
    value: function tenancyCheckout(scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyCheckout");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyCheckout");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenancyCheckout");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling tenancyCheckout");
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
      var returnType = _APIResponsesCheckout["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy/{id}/checkout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyGet operation.
     * @callback module:api/TenancyServicesApi~tenancyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesTenancyDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve details of a tenancy
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id 
     * @param {module:api/TenancyServicesApi~tenancyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesTenancyDetails}
     */

  }, {
    key: "tenancyGet",
    value: function tenancyGet(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyGet");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenancyGet");
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
      var returnType = _APIResponsesTenancyDetails["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyGetList operation.
     * @callback module:api/TenancyServicesApi~tenancyGetListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesProtectionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of all tenancies underneath an account
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:api/TenancyServicesApi~tenancyGetListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesProtectionList}
     */

  }, {
    key: "tenancyGetList",
    value: function tenancyGetList(scheme, region, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyGetList");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyGetList");
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
      var returnType = _APIResponsesProtectionList["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyPost operation.
     * @callback module:api/TenancyServicesApi~tenancyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesTenancy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new tenancy record within a specified mydeposits member account
     * Allows creation of a new tenancy record within the mydeposits member account for the chosen scheme and region.
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:model/APIModelsTenancy} body Tenancy object that needs adding to the members account
     * @param {module:api/TenancyServicesApi~tenancyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesTenancy}
     */

  }, {
    key: "tenancyPost",
    value: function tenancyPost(scheme, region, body, callback) {
      var postBody = body; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyPost");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tenancyPost");
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
      var returnType = _APIResponsesTenancy["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyUnprotect operation.
     * @callback module:api/TenancyServicesApi~tenancyUnprotectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesUnprotect} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit a request to initiate a deposit release
     * @param {String} signature Hashed request body (HMAC-SHA512) Hashing key = (OTP/Private key) + TenancyID e.g. OTP = '123', TenancyID = 456 - Hashing key = 123456 
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id ID of the Tenancy resource
     * @param {module:model/APIModelsUnprotect} value 
     * @param {module:api/TenancyServicesApi~tenancyUnprotectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesUnprotect}
     */

  }, {
    key: "tenancyUnprotect",
    value: function tenancyUnprotect(signature, scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'signature' is set

      if (signature === undefined || signature === null) {
        throw new Error("Missing the required parameter 'signature' when calling tenancyUnprotect");
      } // verify the required parameter 'scheme' is set


      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyUnprotect");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyUnprotect");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenancyUnprotect");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling tenancyUnprotect");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region,
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'signature': signature
      };
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _APIResponsesUnprotect["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy/{id}/unprotect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyUnprotectAccept operation.
     * @callback module:api/TenancyServicesApi~tenancyUnprotectAcceptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesUnprotect} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Custodial only - Accept a tenant's deposit release request
     * @param {String} signature Hashed request body (HMAC-SHA512) Hashing key = (OTP/Private key) + TenancyID e.g. OTP = '123', TenancyID = 456 - Hashing key = 123456 
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id ID of the Tenancy resource
     * @param {module:model/APIModelsUnprotectAccept} value 
     * @param {module:api/TenancyServicesApi~tenancyUnprotectAcceptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesUnprotect}
     */

  }, {
    key: "tenancyUnprotectAccept",
    value: function tenancyUnprotectAccept(signature, scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'signature' is set

      if (signature === undefined || signature === null) {
        throw new Error("Missing the required parameter 'signature' when calling tenancyUnprotectAccept");
      } // verify the required parameter 'scheme' is set


      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyUnprotectAccept");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyUnprotectAccept");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenancyUnprotectAccept");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling tenancyUnprotectAccept");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region,
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'signature': signature
      };
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _APIResponsesUnprotect["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy/{id}/unprotect/accept', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyUnprotectCounter operation.
     * @callback module:api/TenancyServicesApi~tenancyUnprotectCounterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesUnprotect} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Custodial only - Submit a counter offer to a tenant's release request
     * @param {String} signature Hashed request body (HMAC-SHA512) Hashing key = (OTP/Private key) + TenancyID e.g. OTP = '123', TenancyID = 456 - Hashing key = 123456 
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id ID of the Tenancy resource
     * @param {module:model/APIModelsUnprotect} value 
     * @param {module:api/TenancyServicesApi~tenancyUnprotectCounterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesUnprotect}
     */

  }, {
    key: "tenancyUnprotectCounter",
    value: function tenancyUnprotectCounter(signature, scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'signature' is set

      if (signature === undefined || signature === null) {
        throw new Error("Missing the required parameter 'signature' when calling tenancyUnprotectCounter");
      } // verify the required parameter 'scheme' is set


      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyUnprotectCounter");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyUnprotectCounter");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenancyUnprotectCounter");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling tenancyUnprotectCounter");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region,
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'signature': signature
      };
      var formParams = {};
      var authNames = ['mydeposits_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _APIResponsesUnprotect["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy/{id}/unprotect/counter', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyUnprotectOTP operation.
     * @callback module:api/TenancyServicesApi~tenancyUnprotectOTPCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesOTP} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a One Time Password to initiate or respond to a release
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id ID of the Tenancy resource
     * @param {module:api/TenancyServicesApi~tenancyUnprotectOTPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesOTP}
     */

  }, {
    key: "tenancyUnprotectOTP",
    value: function tenancyUnprotectOTP(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyUnprotectOTP");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyUnprotectOTP");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenancyUnprotectOTP");
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
      var returnType = _APIResponsesOTP["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy/{id}/otp', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tenancyUnprotectSPT operation.
     * @callback module:api/TenancyServicesApi~tenancyUnprotectSPTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesConvertSPT} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insurance only - Convert a live protection to a statutory periodic tenancy
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id ID of the Tenancy resource
     * @param {module:api/TenancyServicesApi~tenancyUnprotectSPTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesConvertSPT}
     */

  }, {
    key: "tenancyUnprotectSPT",
    value: function tenancyUnprotectSPT(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tenancyUnprotectSPT");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tenancyUnprotectSPT");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenancyUnprotectSPT");
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
      var returnType = _APIResponsesConvertSPT["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/tenancy/{id}/convertspt', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TenancyServicesApi;
}();

exports["default"] = TenancyServicesApi;