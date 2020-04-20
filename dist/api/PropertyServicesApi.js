"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsProperty = _interopRequireDefault(require("../model/APIModelsProperty"));

var _APIResponsesErrorList = _interopRequireDefault(require("../model/APIResponsesErrorList"));

var _APIResponsesProperty = _interopRequireDefault(require("../model/APIResponsesProperty"));

var _APIResponsesPropertyDetails = _interopRequireDefault(require("../model/APIResponsesPropertyDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PropertyServices service.
* @module api/PropertyServicesApi
* @version 1.2.2
*/
var PropertyServicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PropertyServicesApi. 
  * @alias module:api/PropertyServicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PropertyServicesApi(apiClient) {
    _classCallCheck(this, PropertyServicesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the propertyGet operation.
   * @callback module:api/PropertyServicesApi~propertyGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/APIResponsesPropertyDetails} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Return all information for this property
   * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
   * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
   * @param {Number} id Property ID
   * @param {module:api/PropertyServicesApi~propertyGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/APIResponsesPropertyDetails}
   */


  _createClass(PropertyServicesApi, [{
    key: "propertyGet",
    value: function propertyGet(scheme, region, id, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling propertyGet");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling propertyGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertyGet");
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
      var returnType = _APIResponsesPropertyDetails["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/property/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the propertyPost operation.
     * @callback module:api/PropertyServicesApi~propertyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new property record within a specified mydeposits member account
     * Allows creation of a new property record within the mydeposits member account for the chosen scheme and region.
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:model/APIModelsProperty} body Property entity to be created
     * @param {module:api/PropertyServicesApi~propertyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesProperty}
     */

  }, {
    key: "propertyPost",
    value: function propertyPost(scheme, region, body, callback) {
      var postBody = body; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling propertyPost");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling propertyPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling propertyPost");
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
      var returnType = _APIResponsesProperty["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/property', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the propertyPut operation.
     * @callback module:api/PropertyServicesApi~propertyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing property
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {Number} id Property ID
     * @param {module:model/APIModelsProperty} value Models.Property
     * @param {module:api/PropertyServicesApi~propertyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesProperty}
     */

  }, {
    key: "propertyPut",
    value: function propertyPut(scheme, region, id, value, callback) {
      var postBody = value; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling propertyPut");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling propertyPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertyPut");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling propertyPut");
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
      var returnType = _APIResponsesProperty["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/property/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PropertyServicesApi;
}();

exports["default"] = PropertyServicesApi;