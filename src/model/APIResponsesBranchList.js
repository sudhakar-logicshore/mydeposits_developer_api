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
import APIResponsesBranchDetails from './APIResponsesBranchDetails';

/**
 * The APIResponsesBranchList model module.
 * @module model/APIResponsesBranchList
 * @version 1.2.2
 */
class APIResponsesBranchList {
    /**
     * Constructs a new <code>APIResponsesBranchList</code>.
     * @alias module:model/APIResponsesBranchList
     */
    constructor() { 
        
        APIResponsesBranchList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIResponsesBranchList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBranchList} obj Optional instance to populate.
     * @return {module:model/APIResponsesBranchList} The populated <code>APIResponsesBranchList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIResponsesBranchList();

            if (data.hasOwnProperty('branchDetails')) {
                obj['branchDetails'] = ApiClient.convertToType(data['branchDetails'], [APIResponsesBranchDetails]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/APIResponsesBranchDetails>} branchDetails
 */
APIResponsesBranchList.prototype['branchDetails'] = undefined;






export default APIResponsesBranchList;

