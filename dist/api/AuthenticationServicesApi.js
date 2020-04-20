"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsToken = _interopRequireDefault(require("../model/APIModelsToken"));

var _APIResponsesToken = _interopRequireDefault(require("../model/APIResponsesToken"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AuthenticationServices service.
* @module api/AuthenticationServicesApi
* @version 1.2.2
*/
var AuthenticationServicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthenticationServicesApi. 
  * @alias module:api/AuthenticationServicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthenticationServicesApi(apiClient) {
    _classCallCheck(this, AuthenticationServicesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the authorisationCreate operation.
   * @callback module:api/AuthenticationServicesApi~authorisationCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Request authorisation for a given member
   * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
   * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
   * @param {module:api/AuthenticationServicesApi~authorisationCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse200}
   */


  _createClass(AuthenticationServicesApi, [{
    key: "authorisationCreate",
    value: function authorisationCreate(scheme, region, callback) {
      var postBody = null; // verify the required parameter 'scheme' is set

      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling authorisationCreate");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling authorisationCreate");
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
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/authorize', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the tokenCreate operation.
     * @callback module:api/AuthenticationServicesApi~tokenCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a token for a given member
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:model/APIModelsToken} value 
     * @param {module:api/AuthenticationServicesApi~tokenCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesToken}
     */

  }, {
    key: "tokenCreate",
    value: function tokenCreate(scheme, region, value, callback) {
      // verify the required parameter 'scheme' is set
      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling tokenCreate");
      } // verify the required parameter 'region' is set


      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling tokenCreate");
      } // verify the required parameter 'value' is set


      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling tokenCreate");
      }

      var pathParams = {
        'scheme': scheme,
        'region': region
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = value;
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _APIResponsesToken["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/token', 'POST', pathParams, queryParams, headerParams, formParams, {}, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AuthenticationServicesApi;
}();

exports["default"] = AuthenticationServicesApi;