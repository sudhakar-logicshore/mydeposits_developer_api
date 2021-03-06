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
 * The APIResponsesConvertSPT model module.
 * @module model/APIResponsesConvertSPT
 * @version 1.2.2
 */
class APIResponsesConvertSPT {
    /**
     * Constructs a new <code>APIResponsesConvertSPT</code>.
     * @alias module:model/APIResponsesConvertSPT
     */
    constructor() { 
        
        APIResponsesConvertSPT.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIResponsesConvertSPT</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesConvertSPT} obj Optional instance to populate.
     * @return {module:model/APIResponsesConvertSPT} The populated <code>APIResponsesConvertSPT</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIResponsesConvertSPT();

            if (data.hasOwnProperty('tenancyID')) {
                obj['tenancyID'] = ApiClient.convertToType(data['tenancyID'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('sptDate')) {
                obj['sptDate'] = ApiClient.convertToType(data['sptDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The tenancy ID of the deposit you are converting
 * @member {String} tenancyID
 */
APIResponsesConvertSPT.prototype['tenancyID'] = undefined;

/**
 * Will be \"protected\"
 * @member {String} status
 */
APIResponsesConvertSPT.prototype['status'] = undefined;

/**
 * Will be \"Statutory Periodics\"
 * @member {String} type
 */
APIResponsesConvertSPT.prototype['type'] = undefined;

/**
 * The date that the tenancy was converted to a statutory periodic tenancy (dd/mm/yyyy)
 * @member {String} sptDate
 */
APIResponsesConvertSPT.prototype['sptDate'] = undefined;






export default APIResponsesConvertSPT;

