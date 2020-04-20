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
import Country from './Country';
import Title from './Title';

/**
 * The APIResponsesLeadTenant model module.
 * @module model/APIResponsesLeadTenant
 * @version 1.2.2
 */
class APIResponsesLeadTenant {
    /**
     * Constructs a new <code>APIResponsesLeadTenant</code>.
     * @alias module:model/APIResponsesLeadTenant
     */
    constructor() { 
        
        APIResponsesLeadTenant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIResponsesLeadTenant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesLeadTenant} obj Optional instance to populate.
     * @return {module:model/APIResponsesLeadTenant} The populated <code>APIResponsesLeadTenant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIResponsesLeadTenant();

            if (data.hasOwnProperty('tenantID')) {
                obj['tenantID'] = ApiClient.convertToType(data['tenantID'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = Title.constructFromObject(data['title']);
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
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
            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = Country.constructFromObject(data['countryCode']);
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('mobileTelephone')) {
                obj['mobileTelephone'] = ApiClient.convertToType(data['mobileTelephone'], 'String');
            }
            if (data.hasOwnProperty('workTelephone')) {
                obj['workTelephone'] = ApiClient.convertToType(data['workTelephone'], 'String');
            }
            if (data.hasOwnProperty('homeTelephone')) {
                obj['homeTelephone'] = ApiClient.convertToType(data['homeTelephone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The mydeposits tenant ID
 * @member {String} tenantID
 */
APIResponsesLeadTenant.prototype['tenantID'] = undefined;

/**
 * @member {module:model/Title} title
 */
APIResponsesLeadTenant.prototype['title'] = undefined;

/**
 * First name
 * @member {String} firstName
 */
APIResponsesLeadTenant.prototype['firstName'] = undefined;

/**
 * Last name
 * @member {String} lastName
 */
APIResponsesLeadTenant.prototype['lastName'] = undefined;

/**
 * @member {String} addressLine1
 */
APIResponsesLeadTenant.prototype['addressLine1'] = undefined;

/**
 * @member {String} addressLine2
 */
APIResponsesLeadTenant.prototype['addressLine2'] = undefined;

/**
 * @member {String} addressLine3
 */
APIResponsesLeadTenant.prototype['addressLine3'] = undefined;

/**
 * @member {String} addressLine4
 */
APIResponsesLeadTenant.prototype['addressLine4'] = undefined;

/**
 * @member {String} postcode
 */
APIResponsesLeadTenant.prototype['postcode'] = undefined;

/**
 * @member {module:model/Country} countryCode
 */
APIResponsesLeadTenant.prototype['countryCode'] = undefined;

/**
 * @member {String} emailAddress
 */
APIResponsesLeadTenant.prototype['emailAddress'] = undefined;

/**
 * @member {String} mobileTelephone
 */
APIResponsesLeadTenant.prototype['mobileTelephone'] = undefined;

/**
 * @member {String} workTelephone
 */
APIResponsesLeadTenant.prototype['workTelephone'] = undefined;

/**
 * @member {String} homeTelephone
 */
APIResponsesLeadTenant.prototype['homeTelephone'] = undefined;






export default APIResponsesLeadTenant;
