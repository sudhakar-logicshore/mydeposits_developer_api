"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIResponsesSchemeRules = _interopRequireDefault(require("../model/APIResponsesSchemeRules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* GlobalServices service.
* @module api/GlobalServicesApi
* @version 1.2.2
*/
var GlobalServicesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GlobalServicesApi. 
  * @alias module:api/GlobalServicesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GlobalServicesApi(apiClient) {
    _classCallCheck(this, GlobalServicesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the protectionRegionsGet operation.
   * @callback module:api/GlobalServicesApi~protectionRegionsGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<String>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List of regions served by mydeposits
   * @param {module:api/GlobalServicesApi~protectionRegionsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<String>}
   */


  _createClass(GlobalServicesApi, [{
    key: "protectionRegionsGet",
    value: function protectionRegionsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ['String'];
      return this.apiClient.callApi('/v1/protectionregions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the protectionSchemesGet operation.
     * @callback module:api/GlobalServicesApi~protectionSchemesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of available Deposit Protection Schemes within this region
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {module:api/GlobalServicesApi~protectionSchemesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */

  }, {
    key: "protectionSchemesGet",
    value: function protectionSchemesGet(region, callback) {
      var postBody = null; // verify the required parameter 'region' is set

      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling protectionSchemesGet");
      }

      var pathParams = {
        'region': region
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/v1/{region}/protectionschemes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the schemeRulesGet operation.
     * @callback module:api/GlobalServicesApi~schemeRulesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponsesSchemeRules} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a link to the Scheme Rules for this scheme and region
     * @param {String} region ID of the selected deposit protection Region as returned by protectionregions method.
     * @param {String} scheme ID of the selected deposit protection Scheme as returned by protectionschemes method.
     * @param {module:api/GlobalServicesApi~schemeRulesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponsesSchemeRules}
     */

  }, {
    key: "schemeRulesGet",
    value: function schemeRulesGet(region, scheme, callback) {
      var postBody = null; // verify the required parameter 'region' is set

      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling schemeRulesGet");
      } // verify the required parameter 'scheme' is set


      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling schemeRulesGet");
      }

      var pathParams = {
        'region': region,
        'scheme': scheme
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _APIResponsesSchemeRules["default"];
      return this.apiClient.callApi('/v1/{scheme}/{region}/schemerules', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GlobalServicesApi;
}();

exports["default"] = GlobalServicesApi;