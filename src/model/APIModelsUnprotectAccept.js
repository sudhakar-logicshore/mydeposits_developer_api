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
 * The APIModelsUnprotectAccept model module.
 * @module model/APIModelsUnprotectAccept
 * @version 1.2.2
 */
class APIModelsUnprotectAccept {
    /**
     * Constructs a new <code>APIModelsUnprotectAccept</code>.
     * Tenancy model used to accept a deposit release request
     * @alias module:model/APIModelsUnprotectAccept
     * @param tenancyEndDate {String} The date the tenant vacated the property (dd/mm/yyyy)
     * @param keyType {String} Either OTP (online portals) or PRIVATE_KEY (PMS software)
     */
    constructor(tenancyEndDate, keyType) { 
        
        APIModelsUnprotectAccept.initialize(this, tenancyEndDate, keyType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tenancyEndDate, keyType) { 
        obj['tenancyEndDate'] = tenancyEndDate;
        obj['keyType'] = keyType;
    }

    /**
     * Constructs a <code>APIModelsUnprotectAccept</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsUnprotectAccept} obj Optional instance to populate.
     * @return {module:model/APIModelsUnprotectAccept} The populated <code>APIModelsUnprotectAccept</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIModelsUnprotectAccept();

            if (data.hasOwnProperty('tenancyEndDate')) {
                obj['tenancyEndDate'] = ApiClient.convertToType(data['tenancyEndDate'], 'String');
            }
            if (data.hasOwnProperty('keyType')) {
                obj['keyType'] = ApiClient.convertToType(data['keyType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The date the tenant vacated the property (dd/mm/yyyy)
 * @member {String} tenancyEndDate
 */
APIModelsUnprotectAccept.prototype['tenancyEndDate'] = undefined;

/**
 * Either OTP (online portals) or PRIVATE_KEY (PMS software)
 * @member {String} keyType
 */
APIModelsUnprotectAccept.prototype['keyType'] = undefined;






export default APIModelsUnprotectAccept;

