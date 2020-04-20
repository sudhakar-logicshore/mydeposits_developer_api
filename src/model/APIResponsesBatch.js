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
 * The APIResponsesBatch model module.
 * @module model/APIResponsesBatch
 * @version 1.2.2
 */
class APIResponsesBatch {
    /**
     * Constructs a new <code>APIResponsesBatch</code>.
     * @alias module:model/APIResponsesBatch
     */
    constructor() { 
        
        APIResponsesBatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIResponsesBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBatch} obj Optional instance to populate.
     * @return {module:model/APIResponsesBatch} The populated <code>APIResponsesBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIResponsesBatch();

            if (data.hasOwnProperty('batchID')) {
                obj['batchID'] = ApiClient.convertToType(data['batchID'], 'String');
            }
            if (data.hasOwnProperty('batchName')) {
                obj['batchName'] = ApiClient.convertToType(data['batchName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Our unique ID for the new batch
 * @member {String} batchID
 */
APIResponsesBatch.prototype['batchID'] = undefined;

/**
 * Your name for the new batch
 * @member {String} batchName
 */
APIResponsesBatch.prototype['batchName'] = undefined;






export default APIResponsesBatch;
