"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsLandlord = _interopRequireDefault(require("../model/APIModelsLandlord"));

var _APIResponsesErrorList = _interopRequireDefault(require("../model/APIResponsesErrorList"));

var _APIResponsesLandlord = _interopRequireDefault(require("../model/APIResponsesLandlord"));

var _APIResponsesLandlordDetails = _interopRequireDefault(require("../model/APIResponsesLandlordDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LandlordServices service.
* @module api/LandlordServicesApi
* @version 1.2.2
*/
var LandlordServicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LandlordServicesApi. 
  * @alias module:api/LandlordServicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LandlordServicesApi(apiClient) {
    _classCallCheck(this, LandlordServicesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the landlordGet operation.
   * @callback module:api/LandlordServicesApi~landlordGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/APIResponsesLandlordDetails} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Retrieve landlord entity details for a landlord under a specified mydeposits member account
   * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
   * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
   * @param {Number} id Landlord ID
   * @param {module:api/LandlordServicesApi~landlordGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/APIResponsesLandlordDetails}
   */


  _createClass(LandlordServicesApi, [{
    key: "landlordGet",
    value: function landlordGet(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling landlordGet");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling landlordGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling landlordGet");
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
      var returnType = _APIResponsesLandlordDetails["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/landlord/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the landlordPost operation.
     * @callback module:api/LandlordServicesApi~landlordPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesLandlord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new landlord entity within a specified mydeposits member account
     * Allows creation of a new landlord entity within mydeposits. This record can be used when creating a new tenancy record.
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:model/APIModelsLandlord} body The landlord object that needs to be added to the agent account
     * @param {module:api/LandlordServicesApi~landlordPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesLandlord}
     */

  }, {
    key: "landlordPost",
    value: function landlordPost(scheme, region, body, callback) {
      var postBody = body; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling landlordPost");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling landlordPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling landlordPost");
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
      var returnType = _APIResponsesLandlord["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/landlord', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the landlordPut operation.
     * @callback module:api/LandlordServicesApi~landlordPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesLandlord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a landlord entity within a specified mydeposits member account
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id Landlord ID
     * @param {module:model/APIModelsLandlord} value Models.Landlord
     * @param {module:api/LandlordServicesApi~landlordPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesLandlord}
     */

  }, {
    key: "landlordPut",
    value: function landlordPut(scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling landlordPut");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling landlordPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling landlordPut");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling landlordPut");
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
      var returnType = _APIResponsesLandlord["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/landlord/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LandlordServicesApi;
}();

exports["default"] = LandlordServicesApi;