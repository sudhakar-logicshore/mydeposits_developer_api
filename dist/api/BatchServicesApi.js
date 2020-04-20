"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsBatch = _interopRequireDefault(require("../model/APIModelsBatch"));

var _APIModelsBatchAddTenancy = _interopRequireDefault(require("../model/APIModelsBatchAddTenancy"));

var _APIModelsCheckout = _interopRequireDefault(require("../model/APIModelsCheckout"));

var _APIResponsesBatch = _interopRequireDefault(require("../model/APIResponsesBatch"));

var _APIResponsesBatchAddTenancy = _interopRequireDefault(require("../model/APIResponsesBatchAddTenancy"));

var _APIResponsesBatchCheckout = _interopRequireDefault(require("../model/APIResponsesBatchCheckout"));

var _APIResponsesBatchDetails = _interopRequireDefault(require("../model/APIResponsesBatchDetails"));

var _APIResponsesBatchList = _interopRequireDefault(require("../model/APIResponsesBatchList"));

var _APIResponsesErrorList = _interopRequireDefault(require("../model/APIResponsesErrorList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* BatchServices service.
* @module api/BatchServicesApi
* @version 1.2.2
*/
var BatchServicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BatchServicesApi. 
  * @alias module:api/BatchServicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BatchServicesApi(apiClient) {
    _classCallCheck(this, BatchServicesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the batchAddTenancy operation.
   * @callback module:api/BatchServicesApi~batchAddTenancyCallback
   * @param {String} error Error message, if any.
   * @param {module:model/APIResponsesBatchAddTenancy} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Add a tenancy deposit protection to an existing batch
   * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
   * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
   * @param {Number} id ID of the Batch resource
   * @param {module:model/APIModelsBatchAddTenancy} value 
   * @param {module:api/BatchServicesApi~batchAddTenancyCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/APIResponsesBatchAddTenancy}
   */


  _createClass(BatchServicesApi, [{
    key: "batchAddTenancy",
    value: function batchAddTenancy(scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling batchAddTenancy");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling batchAddTenancy");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling batchAddTenancy");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling batchAddTenancy");
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
      var returnType = _APIResponsesBatchAddTenancy["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/batch/{id}/tenancy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the batchCheckout operation.
     * @callback module:api/BatchServicesApi~batchCheckoutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesBatchCheckout} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Checkout a batch containing tenancy deposit protections
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id ID of the Batch resource
     * @param {module:model/APIModelsCheckout} value 
     * @param {module:api/BatchServicesApi~batchCheckoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesBatchCheckout}
     */

  }, {
    key: "batchCheckout",
    value: function batchCheckout(scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling batchCheckout");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling batchCheckout");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling batchCheckout");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling batchCheckout");
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
      var returnType = _APIResponsesBatchCheckout["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/batch/{id}/checkout', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the batchGet operation.
     * @callback module:api/BatchServicesApi~batchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesBatchDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve batch entity details for a batch under a specified mydeposits member account
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id ID of the Batch resource
     * @param {module:api/BatchServicesApi~batchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesBatchDetails}
     */

  }, {
    key: "batchGet",
    value: function batchGet(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling batchGet");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling batchGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling batchGet");
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
      var returnType = _APIResponsesBatchDetails["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/batch/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the batchGetList operation.
     * @callback module:api/BatchServicesApi~batchGetListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesBatchList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of all batches underneath an account
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:api/BatchServicesApi~batchGetListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesBatchList}
     */

  }, {
    key: "batchGetList",
    value: function batchGetList(scheme, region, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling batchGetList");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling batchGetList");
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
      var returnType = _APIResponsesBatchList["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/batches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the batchPost operation.
     * @callback module:api/BatchServicesApi~batchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesBatch} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new batch entity within a specified mydeposits Custodial account
     * Allows creation of a new batch entity within mydeposits. This entity can be used to group tenancies together for a single payment.
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:model/APIModelsBatch} body The batch object that needs to be added to the member's account
     * @param {module:api/BatchServicesApi~batchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesBatch}
     */

  }, {
    key: "batchPost",
    value: function batchPost(scheme, region, body, callback) {
      var postBody = body; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling batchPost");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling batchPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling batchPost");
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
      var accepts = ['*/*'];
      var returnType = _APIResponsesBatch["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/batch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BatchServicesApi;
}();

exports["default"] = BatchServicesApi;