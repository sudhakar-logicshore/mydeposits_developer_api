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

import ApiClient from '../ApiClient';

/**
 * The APIResponsesLandlordMember model module.
 * @module model/APIResponsesLandlordMember
 * @version 1.2.2
 */
class APIResponsesLandlordMember {
    /**
     * Constructs a new <code>APIResponsesLandlordMember</code>.
     * @alias module:model/APIResponsesLandlordMember
     */
    constructor() { 
        
        APIResponsesLandlordMember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIResponsesLandlordMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesLandlordMember} obj Optional instance to populate.
     * @return {module:model/APIResponsesLandlordMember} The populated <code>APIResponsesLandlordMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIResponsesLandlordMember();

            if (data.hasOwnProperty('memberID')) {
                obj['memberID'] = ApiClient.convertToType(data['memberID'], 'String');
            }
            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'String');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} memberID
 */
APIResponsesLandlordMember.prototype['memberID'] = undefined;

/**
 * The token to use to when submitting a request
 * @member {String} access_token
 */
APIResponsesLandlordMember.prototype['access_token'] = undefined;

/**
 * The type of token
 * @member {String} token_type
 */
APIResponsesLandlordMember.prototype['token_type'] = undefined;

/**
 * How long until the token expires
 * @member {String} expires_in
 */
APIResponsesLandlordMember.prototype['expires_in'] = undefined;

/**
 * Used to gain a new token when the access token expires
 * @member {String} refresh_token
 */
APIResponsesLandlordMember.prototype['refresh_token'] = undefined;






export default APIResponsesLandlordMember;
