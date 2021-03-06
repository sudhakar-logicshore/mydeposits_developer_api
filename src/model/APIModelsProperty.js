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
import LocalAuthorityRegion from './LocalAuthorityRegion';
import PropertyType from './PropertyType';

/**
 * The APIModelsProperty model module.
 * @module model/APIModelsProperty
 * @version 1.2.2
 */
class APIModelsProperty {
    /**
     * Constructs a new <code>APIModelsProperty</code>.
     * Property model used to create or update property objects
     * @alias module:model/APIModelsProperty
     * @param addressLine1 {String} Must be 100 characters or less
     * @param postcode {String} Must be 8 characters or less
     */
    constructor(addressLine1, postcode) { 
        
        APIModelsProperty.initialize(this, addressLine1, postcode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, addressLine1, postcode) { 
        obj['addressLine1'] = addressLine1;
        obj['postcode'] = postcode;
    }

    /**
     * Constructs a <code>APIModelsProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsProperty} obj Optional instance to populate.
     * @return {module:model/APIModelsProperty} The populated <code>APIModelsProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIModelsProperty();

            if (data.hasOwnProperty('thirdPartyReference')) {
                obj['thirdPartyReference'] = ApiClient.convertToType(data['thirdPartyReference'], 'String');
            }
            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('addressLine3')) {
                obj['addressLine3'] = ApiClient.convertToType(data['addressLine3'], 'String');
            }
            if (data.hasOwnProperty('addressLine4')) {
                obj['addressLine4'] = ApiClient.convertToType(data['addressLine4'], 'String');
            }
            if (data.hasOwnProperty('postcode')) {
                obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
            }
            if (data.hasOwnProperty('propertyType')) {
                obj['propertyType'] = PropertyType.constructFromObject(data['propertyType']);
            }
            if (data.hasOwnProperty('localAuthority')) {
                obj['localAuthority'] = LocalAuthorityRegion.constructFromObject(data['localAuthority']);
            }
            if (data.hasOwnProperty('landlordID')) {
                obj['landlordID'] = ApiClient.convertToType(data['landlordID'], 'String');
            }
            if (data.hasOwnProperty('branchID')) {
                obj['branchID'] = ApiClient.convertToType(data['branchID'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Your unique reference for this property.  Must be 25 characters or less 
 * @member {String} thirdPartyReference
 */
APIModelsProperty.prototype['thirdPartyReference'] = undefined;

/**
 * Must be 100 characters or less
 * @member {String} addressLine1
 */
APIModelsProperty.prototype['addressLine1'] = undefined;

/**
 * Must be 100 characters or less
 * @member {String} addressLine2
 */
APIModelsProperty.prototype['addressLine2'] = undefined;

/**
 * Must be 90 characters or less
 * @member {String} addressLine3
 */
APIModelsProperty.prototype['addressLine3'] = undefined;

/**
 * Must be 80 characters or less
 * @member {String} addressLine4
 */
APIModelsProperty.prototype['addressLine4'] = undefined;

/**
 * Must be 8 characters or less
 * @member {String} postcode
 */
APIModelsProperty.prototype['postcode'] = undefined;

/**
 * @member {module:model/PropertyType} propertyType
 */
APIModelsProperty.prototype['propertyType'] = undefined;

/**
 * @member {module:model/LocalAuthorityRegion} localAuthority
 */
APIModelsProperty.prototype['localAuthority'] = undefined;

/**
 * ID of the landlord that the property belongs to. Mandatory for Insurance agent members only 
 * @member {String} landlordID
 */
APIModelsProperty.prototype['landlordID'] = undefined;

/**
 * Branch ID if the landlord belongs to a branch rather than a head office
 * @member {String} branchID
 */
APIModelsProperty.prototype['branchID'] = undefined;






export default APIModelsProperty;

