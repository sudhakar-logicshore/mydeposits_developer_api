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
 * The APIModelsBatchAddTenancy model module.
 * @module model/APIModelsBatchAddTenancy
 * @version 1.2.2
 */
class APIModelsBatchAddTenancy {
    /**
     * Constructs a new <code>APIModelsBatchAddTenancy</code>.
     * Details of which tenancy to add to a given batch
     * @alias module:model/APIModelsBatchAddTenancy
     * @param tenancyID {String} Must be 50 characters or less
     */
    constructor(tenancyID) { 
        
        APIModelsBatchAddTenancy.initialize(this, tenancyID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tenancyID) { 
        obj['tenancyID'] = tenancyID;
    }

    /**
     * Constructs a <code>APIModelsBatchAddTenancy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsBatchAddTenancy} obj Optional instance to populate.
     * @return {module:model/APIModelsBatchAddTenancy} The populated <code>APIModelsBatchAddTenancy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIModelsBatchAddTenancy();

            if (data.hasOwnProperty('tenancyID')) {
                obj['tenancyID'] = ApiClient.convertToType(data['tenancyID'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Must be 50 characters or less
 * @member {String} tenancyID
 */
APIModelsBatchAddTenancy.prototype['tenancyID'] = undefined;






export default APIModelsBatchAddTenancy;

