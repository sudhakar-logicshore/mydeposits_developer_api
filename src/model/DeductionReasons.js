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
* Enum class DeductionReasons.
* @enum {}
* @readonly
*/
export default class DeductionReasons {
    
        /**
         * value: "CLEANING"
         * @const
         */
        "CLEANING" = "CLEANING";

    
        /**
         * value: "GARDEN_MAINTENANCE"
         * @const
         */
        "GARDEN_MAINTENANCE" = "GARDEN_MAINTENANCE";

    
        /**
         * value: "MISSING_ITEMS"
         * @const
         */
        "MISSING_ITEMS" = "MISSING_ITEMS";

    
        /**
         * value: "REDECORATION"
         * @const
         */
        "REDECORATION" = "REDECORATION";

    
        /**
         * value: "RENT_ARREARS"
         * @const
         */
        "RENT_ARREARS" = "RENT_ARREARS";

    
        /**
         * value: "REPAIRS"
         * @const
         */
        "REPAIRS" = "REPAIRS";

    
        /**
         * value: "UNPAID_BILLS"
         * @const
         */
        "UNPAID_BILLS" = "UNPAID_BILLS";

    
        /**
         * value: "OTHERS"
         * @const
         */
        "OTHERS" = "OTHERS";

    

    /**
    * Returns a <code>DeductionReasons</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DeductionReasons} The enum <code>DeductionReasons</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
