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
 * The APIModelsLandlord model module.
 * @module model/APIModelsLandlord
 * @version 1.2.2
 */
var APIModelsLandlord = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsLandlord</code>.
   * Landlord model used to create or update landlord entities within a member account
   * @alias module:model/APIModelsLandlord
   * @param landlordType {String} Whether this is a private or corporate landlord (CORPORATE / PRIVATE) 
   * @param title {module:model/Title} 
   * @param firstName {String} The first name for either a private landlord, or the primary contact of a corporate landlord. Must be 50 characters or less 
   * @param lastName {String} The last name for either a private landlord, or the primary contact of a corporate landlord. Must be 50 characters or less 
   * @param addressLine1 {String} Mandatory for Insurance and Scotland. Only mandatory for Custodial if address is to be supplied in request. Must be 100 characters or less 
   * @param postcode {String} Mandatory for Insurance only and Scotland. Only mandatory for Custodial if address is to be supplied in request.  Must be 8 characters or less 
   */
  function APIModelsLandlord(landlordType, title, firstName, lastName, addressLine1, postcode) {
    _classCallCheck(this, APIModelsLandlord);

    APIModelsLandlord.initialize(this, landlordType, title, firstName, lastName, addressLine1, postcode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsLandlord, null, [{
    key: "initialize",
    value: function initialize(obj, landlordType, title, firstName, lastName, addressLine1, postcode) {
      obj['landlordType'] = landlordType;
      obj['title'] = title;
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
      obj['addressLine1'] = addressLine1;
      obj['postcode'] = postcode;
    }
    /**
     * Constructs a <code>APIModelsLandlord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsLandlord} obj Optional instance to populate.
     * @return {module:model/APIModelsLandlord} The populated <code>APIModelsLandlord</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsLandlord();

        if (data.hasOwnProperty('landlordType')) {
          obj['landlordType'] = _ApiClient["default"].convertToType(data['landlordType'], 'String');
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

  return APIModelsLandlord;
}();
/**
 * Whether this is a private or corporate landlord (CORPORATE / PRIVATE) 
 * @member {String} landlordType
 */


APIModelsLandlord.prototype['landlordType'] = undefined;
/**
 * Your unique reference for this property. Must be 25 characters or less
 * @member {String} thirdPartyReference
 */

APIModelsLandlord.prototype['thirdPartyReference'] = undefined;
/**
 * @member {module:model/Title} title
 */

APIModelsLandlord.prototype['title'] = undefined;
/**
 * The first name for either a private landlord, or the primary contact of a corporate landlord. Must be 50 characters or less 
 * @member {String} firstName
 */

APIModelsLandlord.prototype['firstName'] = undefined;
/**
 * The last name for either a private landlord, or the primary contact of a corporate landlord. Must be 50 characters or less 
 * @member {String} lastName
 */

APIModelsLandlord.prototype['lastName'] = undefined;
/**
 * Mandatory for Insurance and Scotland. Only mandatory for Custodial if address is to be supplied in request. Must be 100 characters or less 
 * @member {String} addressLine1
 */

APIModelsLandlord.prototype['addressLine1'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine2
 */

APIModelsLandlord.prototype['addressLine2'] = undefined;
/**
 * Must be 90 characters or less
 * @member {String} addressLine3
 */

APIModelsLandlord.prototype['addressLine3'] = undefined;
/**
 * Must be 80 characters or less
 * @member {String} addressLine4
 */

APIModelsLandlord.prototype['addressLine4'] = undefined;
/**
 * Mandatory for Insurance only and Scotland. Only mandatory for Custodial if address is to be supplied in request.  Must be 8 characters or less 
 * @member {String} postcode
 */

APIModelsLandlord.prototype['postcode'] = undefined;
/**
 * @member {module:model/Country} countryCode
 */

APIModelsLandlord.prototype['countryCode'] = undefined;
/**
 * Required for corporate landlords. Must be 100 characters or less 
 * @member {String} companyName
 */

APIModelsLandlord.prototype['companyName'] = undefined;
/**
 * Must be 15 characters or less
 * @member {String} companyRegistrationNumber
 */

APIModelsLandlord.prototype['companyRegistrationNumber'] = undefined;
/**
 * This must be populated if there is a company name.   Required for corporate landlords for Insurance only. Must be 100 characters or less 
 * @member {String} registeredAddressLine1
 */

APIModelsLandlord.prototype['registeredAddressLine1'] = undefined;
/**
 * Required for corporate landlords for Insurance only. Must be 100 characters or less 
 * @member {String} registeredAddressLine2
 */

APIModelsLandlord.prototype['registeredAddressLine2'] = undefined;
/**
 * Required for corporate landlords for Insurance only. Must be 100 characters or less 
 * @member {String} registeredAddressLine3
 */

APIModelsLandlord.prototype['registeredAddressLine3'] = undefined;
/**
 * Required for corporate landlords for Insurance only. This must be populated if there is a company name. Must be 8 characters or less 
 * @member {String} registeredPostcode
 */

APIModelsLandlord.prototype['registeredPostcode'] = undefined;
/**
 * Must be between 10 and 15 characters if provided
 * @member {String} homeTelephone
 */

APIModelsLandlord.prototype['homeTelephone'] = undefined;
/**
 * Email address or mobile is mandatory. Must be between 10 and 15 characters if provided 
 * @member {String} mobileTelephone
 */

APIModelsLandlord.prototype['mobileTelephone'] = undefined;
/**
 * Must be between 10 and 15 characters if provided
 * @member {String} workTelephone
 */

APIModelsLandlord.prototype['workTelephone'] = undefined;
/**
 * Email address or mobile is mandatory. Must be 100 characters or less 
 * @member {String} emailAddress
 */

APIModelsLandlord.prototype['emailAddress'] = undefined;
/**
 * Branch ID if the landlord belongs to a branch
 * @member {String} branchID
 */

APIModelsLandlord.prototype['branchID'] = undefined;
var _default = APIModelsLandlord;
exports["default"] = _default;