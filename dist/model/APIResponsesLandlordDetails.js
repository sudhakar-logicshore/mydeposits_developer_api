"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Country = _interopRequireDefault(require("./Country"));

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesLandlordDetails model module.
 * @module model/APIResponsesLandlordDetails
 * @version 1.2.2
 */
var APIResponsesLandlordDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesLandlordDetails</code>.
   * Details of a landlord within a member account
   * @alias module:model/APIResponsesLandlordDetails
   */
  function APIResponsesLandlordDetails() {
    _classCallCheck(this, APIResponsesLandlordDetails);

    APIResponsesLandlordDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesLandlordDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesLandlordDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesLandlordDetails} obj Optional instance to populate.
     * @return {module:model/APIResponsesLandlordDetails} The populated <code>APIResponsesLandlordDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesLandlordDetails();

        if (data.hasOwnProperty('landlordType')) {
          obj['landlordType'] = _ApiClient["default"].convertToType(data['landlordType'], 'String');
        }

        if (data.hasOwnProperty('landlordID')) {
          obj['landlordID'] = _ApiClient["default"].convertToType(data['landlordID'], 'String');
        }

        if (data.hasOwnProperty('thirdPartyReference')) {
          obj['thirdPartyReference'] = _ApiClient["default"].convertToType(data['thirdPartyReference'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _Title["default"].constructFromObject(data['title']);
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('addressLine1')) {
          obj['addressLine1'] = _ApiClient["default"].convertToType(data['addressLine1'], 'String');
        }

        if (data.hasOwnProperty('addressLine2')) {
          obj['addressLine2'] = _ApiClient["default"].convertToType(data['addressLine2'], 'String');
        }

        if (data.hasOwnProperty('addressLine3')) {
          obj['addressLine3'] = _ApiClient["default"].convertToType(data['addressLine3'], 'String');
        }

        if (data.hasOwnProperty('addressLine4')) {
          obj['addressLine4'] = _ApiClient["default"].convertToType(data['addressLine4'], 'String');
        }

        if (data.hasOwnProperty('postcode')) {
          obj['postcode'] = _ApiClient["default"].convertToType(data['postcode'], 'String');
        }

        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _Country["default"].constructFromObject(data['countryCode']);
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }

        if (data.hasOwnProperty('companyRegistrationNumber')) {
          obj['companyRegistrationNumber'] = _ApiClient["default"].convertToType(data['companyRegistrationNumber'], 'String');
        }

        if (data.hasOwnProperty('registeredAddressLine1')) {
          obj['registeredAddressLine1'] = _ApiClient["default"].convertToType(data['registeredAddressLine1'], 'String');
        }

        if (data.hasOwnProperty('registeredAddressLine2')) {
          obj['registeredAddressLine2'] = _ApiClient["default"].convertToType(data['registeredAddressLine2'], 'String');
        }

        if (data.hasOwnProperty('registeredAddressLine3')) {
          obj['registeredAddressLine3'] = _ApiClient["default"].convertToType(data['registeredAddressLine3'], 'String');
        }

        if (data.hasOwnProperty('registeredPostcode')) {
          obj['registeredPostcode'] = _ApiClient["default"].convertToType(data['registeredPostcode'], 'String');
        }

        if (data.hasOwnProperty('homeTelephone')) {
          obj['homeTelephone'] = _ApiClient["default"].convertToType(data['homeTelephone'], 'String');
        }

        if (data.hasOwnProperty('mobileTelephone')) {
          obj['mobileTelephone'] = _ApiClient["default"].convertToType(data['mobileTelephone'], 'String');
        }

        if (data.hasOwnProperty('workTelephone')) {
          obj['workTelephone'] = _ApiClient["default"].convertToType(data['workTelephone'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('branchID')) {
          obj['branchID'] = _ApiClient["default"].convertToType(data['branchID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesLandlordDetails;
}();
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
var _default = APIResponsesLandlordDetails;
exports["default"] = _default;