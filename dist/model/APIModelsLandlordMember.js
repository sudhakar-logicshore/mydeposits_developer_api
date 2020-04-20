"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIModelsLandlordMember model module.
 * @module model/APIModelsLandlordMember
 * @version 1.2.2
 */
var APIModelsLandlordMember = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsLandlordMember</code>.
   * Model for a new landlord member
   * @alias module:model/APIModelsLandlordMember
   * @param landlordType {String} Private / Corporate
   * @param title {module:model/Title} 
   * @param firstName {String} Must be 50 characters or less
   * @param lastName {String} Must be 50 characters or less
   * @param addressLine1 {String} Must be 100 characters or less
   * @param postcode {String} Must be 8 characters or less
   * @param countryCode {String} This is required for Custodial, and must be GB for Insurance
   * @param emailAddress {String} Must be 100 characters or less
   */
  function APIModelsLandlordMember(landlordType, title, firstName, lastName, addressLine1, postcode, countryCode, emailAddress) {
    _classCallCheck(this, APIModelsLandlordMember);

    APIModelsLandlordMember.initialize(this, landlordType, title, firstName, lastName, addressLine1, postcode, countryCode, emailAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsLandlordMember, null, [{
    key: "initialize",
    value: function initialize(obj, landlordType, title, firstName, lastName, addressLine1, postcode, countryCode, emailAddress) {
      obj['landlordType'] = landlordType;
      obj['title'] = title;
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
      obj['addressLine1'] = addressLine1;
      obj['postcode'] = postcode;
      obj['countryCode'] = countryCode;
      obj['emailAddress'] = emailAddress;
    }
    /**
     * Constructs a <code>APIModelsLandlordMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsLandlordMember} obj Optional instance to populate.
     * @return {module:model/APIModelsLandlordMember} The populated <code>APIModelsLandlordMember</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsLandlordMember();

        if (data.hasOwnProperty('landlordType')) {
          obj['landlordType'] = _ApiClient["default"].convertToType(data['landlordType'], 'String');
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
          obj['countryCode'] = _ApiClient["default"].convertToType(data['countryCode'], 'String');
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

        if (data.hasOwnProperty('branchTelephone')) {
          obj['branchTelephone'] = _ApiClient["default"].convertToType(data['branchTelephone'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('workEmailAddress')) {
          obj['workEmailAddress'] = _ApiClient["default"].convertToType(data['workEmailAddress'], 'String');
        }

        if (data.hasOwnProperty('dateOfBirth')) {
          obj['dateOfBirth'] = _ApiClient["default"].convertToType(data['dateOfBirth'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsLandlordMember;
}();
/**
 * Private / Corporate
 * @member {String} landlordType
 */


APIModelsLandlordMember.prototype['landlordType'] = undefined;
/**
 * @member {module:model/Title} title
 */

APIModelsLandlordMember.prototype['title'] = undefined;
/**
 * Must be 50 characters or less
 * @member {String} firstName
 */

APIModelsLandlordMember.prototype['firstName'] = undefined;
/**
 * Must be 50 characters or less
 * @member {String} lastName
 */

APIModelsLandlordMember.prototype['lastName'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine1
 */

APIModelsLandlordMember.prototype['addressLine1'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine2
 */

APIModelsLandlordMember.prototype['addressLine2'] = undefined;
/**
 * Must be 90 characters or less
 * @member {String} addressLine3
 */

APIModelsLandlordMember.prototype['addressLine3'] = undefined;
/**
 * Must be 80 characters or less
 * @member {String} addressLine4
 */

APIModelsLandlordMember.prototype['addressLine4'] = undefined;
/**
 * Must be 8 characters or less
 * @member {String} postcode
 */

APIModelsLandlordMember.prototype['postcode'] = undefined;
/**
 * This is required for Custodial, and must be GB for Insurance
 * @member {String} countryCode
 */

APIModelsLandlordMember.prototype['countryCode'] = undefined;
/**
 * Required for corporate landlords Must be 100 characters or less 
 * @member {String} companyName
 */

APIModelsLandlordMember.prototype['companyName'] = undefined;
/**
 * Must be 15 characters or less
 * @member {String} companyRegistrationNumber
 */

APIModelsLandlordMember.prototype['companyRegistrationNumber'] = undefined;
/**
 * Required for Insurance corporate landlords only Must be 100 characters or less 
 * @member {String} registeredAddressLine1
 */

APIModelsLandlordMember.prototype['registeredAddressLine1'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} registeredAddressLine2
 */

APIModelsLandlordMember.prototype['registeredAddressLine2'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} registeredAddressLine3
 */

APIModelsLandlordMember.prototype['registeredAddressLine3'] = undefined;
/**
 * Required for Insurance corporate landlords only Must be 8 characters or less 
 * @member {String} registeredPostcode
 */

APIModelsLandlordMember.prototype['registeredPostcode'] = undefined;
/**
 * Private landlords - must provide either a home or mobile phone number Corporate landlords (Custodial) - must provide either a home or mobile phone number Must be 15 characters or less 
 * @member {String} homeTelephone
 */

APIModelsLandlordMember.prototype['homeTelephone'] = undefined;
/**
 * Private landlords - must provide either a home or mobile phone number Corporate landlords (Custodial) - must provide either a home or mobile phone number Corporate landlords (Insurance) - must provide either a work or mobile phone number Must be 15 characters or less 
 * @member {String} mobileTelephone
 */

APIModelsLandlordMember.prototype['mobileTelephone'] = undefined;
/**
 * Corporate landlords (Insurance) - must provide either a work or mobile phone number Must be 15 characters or less 
 * @member {String} workTelephone
 */

APIModelsLandlordMember.prototype['workTelephone'] = undefined;
/**
 * For Custodial corporate landlords only - must provide a branch phone number Must be 15 characters or less 
 * @member {String} branchTelephone
 */

APIModelsLandlordMember.prototype['branchTelephone'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} emailAddress
 */

APIModelsLandlordMember.prototype['emailAddress'] = undefined;
/**
 * Required for Corporate Custodial members only. ust be 255 characters or less 
 * @member {String} workEmailAddress
 */

APIModelsLandlordMember.prototype['workEmailAddress'] = undefined;
/**
 * Required for private landlords (E&W Insurance + Custodial) and for corporate landlords (E&W Custodial only). Must be at least 16 years old to join the scheme. Must be in the format dd/mm/yyyy. Must be 10 characters 
 * @member {String} dateOfBirth
 */

APIModelsLandlordMember.prototype['dateOfBirth'] = undefined;
var _default = APIModelsLandlordMember;
exports["default"] = _default;