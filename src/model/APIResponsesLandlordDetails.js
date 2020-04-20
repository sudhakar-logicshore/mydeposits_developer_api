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
 * The APIResponsesLandlordDetails model module.
 * @module model/APIResponsesLandlordDetails
 * @version 1.2.2
 */
class APIResponsesLandlordDetails {
    /**
     * Constructs a new <code>APIResponsesLandlordDetails</code>.
     * Details of a landlord within a member account
     * @alias module:model/APIResponsesLandlordDetails
     */
    constructor() { 
        
        APIResponsesLandlordDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIResponsesLandlordDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesLandlordDetails} obj Optional instance to populate.
     * @return {module:model/APIResponsesLandlordDetails} The populated <code>APIResponsesLandlordDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIResponsesLandlordDetails();

            if (data.hasOwnProperty('landlordType')) {
                obj['landlordType'] = ApiClient.convertToType(data['landlordType'], 'String');
            }
            if (data.hasOwnProperty('landlordID')) {
                obj['landlordID'] = ApiClient.convertToType(data['landlordID'], 'String');
            }
            if (data.hasOwnProperty('thirdPartyReference')) {
                obj['thirdPartyReference'] = ApiClient.convertToType(data['thirdPartyReference'], 'String');
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
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('companyRegistrationNumber')) {
                obj['companyRegistrationNumber'] = ApiClient.convertToType(data['companyRegistrationNumber'], 'String');
            }
            if (data.hasOwnProperty('registeredAddressLine1')) {
                obj['registeredAddressLine1'] = ApiClient.convertToType(data['registeredAddressLine1'], 'String');
            }
            if (data.hasOwnProperty('registeredAddressLine2')) {
                obj['registeredAddressLine2'] = ApiClient.convertToType(data['registeredAddressLine2'], 'String');
            }
            if (data.hasOwnProperty('registeredAddressLine3')) {
                obj['registeredAddressLine3'] = ApiClient.convertToType(data['registeredAddressLine3'], 'String');
            }
            if (data.hasOwnProperty('registeredPostcode')) {
                obj['registeredPostcode'] = ApiClient.convertToType(data['registeredPostcode'], 'String');
            }
            if (data.hasOwnProperty('homeTelephone')) {
                obj['homeTelephone'] = ApiClient.convertToType(data['homeTelephone'], 'String');
            }
            if (data.hasOwnProperty('mobileTelephone')) {
                obj['mobileTelephone'] = ApiClient.convertToType(data['mobileTelephone'], 'String');
            }
            if (data.hasOwnProperty('workTelephone')) {
                obj['workTelephone'] = ApiClient.convertToType(data['workTelephone'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('branchID')) {
                obj['branchID'] = ApiClient.convertToType(data['branchID'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} landlordType
 */
APIResponsesLandlordDetails.prototype['landlordType'] = undefined;

/**
 * mydeposits ID of the landlord
 * @member {String} landlordID
 */
APIResponsesLandlordDetails.prototype['landlordID'] = undefined;

/**
 * Your unique third party reference, if we have been given one
 * @member {String} thirdPartyReference
 */
APIResponsesLandlordDetails.prototype['thirdPartyReference'] = undefined;

/**
 * @member {module:model/Title} title
 */
APIResponsesLandlordDetails.prototype['title'] = undefined;

/**
 * @member {String} firstName
 */
APIResponsesLandlordDetails.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
APIResponsesLandlordDetails.prototype['lastName'] = undefined;

/**
 * @member {String} addressLine1
 */
APIResponsesLandlordDetails.prototype['addressLine1'] = undefined;

/**
 * @member {String} addressLine2
 */
APIResponsesLandlordDetails.prototype['addressLine2'] = undefined;

/**
 * @member {String} addressLine3
 */
APIResponsesLandlordDetails.prototype['addressLine3'] = undefined;

/**
 * @member {String} addressLine4
 */
APIResponsesLandlordDetails.prototype['addressLine4'] = undefined;

/**
 * @member {String} postcode
 */
APIResponsesLandlordDetails.prototype['postcode'] = undefined;

/**
 * @member {module:model/Country} countryCode
 */
APIResponsesLandlordDetails.prototype['countryCode'] = undefined;

/**
 * @member {String} companyName
 */
APIResponsesLandlordDetails.prototype['companyName'] = undefined;

/**
 * @member {String} companyRegistrationNumber
 */
APIResponsesLandlordDetails.prototype['companyRegistrationNumber'] = undefined;

/**
 * @member {String} registeredAddressLine1
 */
APIResponsesLandlordDetails.prototype['registeredAddressLine1'] = undefined;

/**
 * @member {String} registeredAddressLine2
 */
APIResponsesLandlordDetails.prototype['registeredAddressLine2'] = undefined;

/**
 * @member {String} registeredAddressLine3
 */
APIResponsesLandlordDetails.prototype['registeredAddressLine3'] = undefined;

/**
 * @member {String} registeredPostcode
 */
APIResponsesLandlordDetails.prototype['registeredPostcode'] = undefined;

/**
 * @member {String} homeTelephone
 */
APIResponsesLandlordDetails.prototype['homeTelephone'] = undefined;

/**
 * @member {String} mobileTelephone
 */
APIResponsesLandlordDetails.prototype['mobileTelephone'] = undefined;

/**
 * @member {String} workTelephone
 */
APIResponsesLandlordDetails.prototype['workTelephone'] = undefined;

/**
 * @member {String} emailAddress
 */
APIResponsesLandlordDetails.prototype['emailAddress'] = undefined;

/**
 * The member number for any existing parent branch of the landlord
 * @member {String} branchID
 */
APIResponsesLandlordDetails.prototype['branchID'] = undefined;






export default APIResponsesLandlordDetails;
