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
 * The APIResponsesBatchCheckout model module.
 * @module model/APIResponsesBatchCheckout
 * @version 1.2.2
 */
class APIResponsesBatchCheckout {
    /**
     * Constructs a new <code>APIResponsesBatchCheckout</code>.
     * @alias module:model/APIResponsesBatchCheckout
     */
    constructor() { 
        
        APIResponsesBatchCheckout.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>APIResponsesBatchCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBatchCheckout} obj Optional instance to populate.
     * @return {module:model/APIResponsesBatchCheckout} The populated <code>APIResponsesBatchCheckout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIResponsesBatchCheckout();

            if (data.hasOwnProperty('paymentValue')) {
                obj['paymentValue'] = ApiClient.convertToType(data['paymentValue'], 'Number');
            }
            if (data.hasOwnProperty('paymentReference')) {
                obj['paymentReference'] = ApiClient.convertToType(data['paymentReference'], 'String');
            }
            if (data.hasOwnProperty('bankAccountNumber')) {
                obj['bankAccountNumber'] = ApiClient.convertToType(data['bankAccountNumber'], 'String');
            }
            if (data.hasOwnProperty('bankSortCode')) {
                obj['bankSortCode'] = ApiClient.convertToType(data['bankSortCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The total monetary value of the batch of tenancies that you need to send to us via bank transfer
 * @member {Number} paymentValue
 */
APIResponsesBatchCheckout.prototype['paymentValue'] = undefined;

/**
 * The payment reference to use when submitting a bank transfer to us to pay for the batch of tenancies
 * @member {String} paymentReference
 */
APIResponsesBatchCheckout.prototype['paymentReference'] = undefined;

/**
 * The mydeposits bank account number to transfer the payment into
 * @member {String} bankAccountNumber
 */
APIResponsesBatchCheckout.prototype['bankAccountNumber'] = undefined;

/**
 * The mydeposits bank sort code to transfer the payment into
 * @member {String} bankSortCode
 */
APIResponsesBatchCheckout.prototype['bankSortCode'] = undefined;






export default APIResponsesBatchCheckout;

