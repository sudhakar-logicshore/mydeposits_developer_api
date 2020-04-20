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


import ApiClient from "../ApiClient";
import APIResponsesSchemeRules from '../model/APIResponsesSchemeRules';

/**
* GlobalServices service.
* @module api/GlobalServicesApi
* @version 1.2.2
*/
export default class GlobalServicesApi {

    /**
    * Constructs a new GlobalServicesApi. 
    * @alias module:api/GlobalServicesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    protectionRegionsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/v1/protectionregions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    protectionSchemesGet(region, callback) {
      let postBody = null;
      // verify the required parameter 'region' is set
      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling protectionSchemesGet");
      }

      let pathParams = {
        'region': region
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/v1/{region}/protectionschemes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    schemeRulesGet(region, scheme, callback) {
      let postBody = null;
      // verify the required parameter 'region' is set
      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling schemeRulesGet");
      }
      // verify the required parameter 'scheme' is set
      if (scheme === undefined || scheme === null) {
        throw new Error("Missing the required parameter 'scheme' when calling schemeRulesGet");
      }

      let pathParams = {
        'region': region,
        'scheme': scheme
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = APIResponsesSchemeRules;
      return this.apiClient.callApi(
        '/v1/{scheme}/{region}/schemerules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
