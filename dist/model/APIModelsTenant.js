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
 * The APIModelsTenant model module.
 * @module model/APIModelsTenant
 * @version 1.2.2
 */
var APIModelsTenant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsTenant</code>.
   * Details of the lead tenant in a tenancy
   * @alias module:model/APIModelsTenant
   * @param title {module:model/Title} 
   * @param firstName {String} Must be 30 characters or less
   * @param lastName {String} Must be 30 characters or less
   * @param addressLine1 {String} Must be 100 characters or less
   * @param postcode {String} Must be 8 characters or less
   * @param countryCode {module:model/Country} 
   * @param emailAddress {String} Must provide either an email address or mobile phone number Must be 100 characters or less 
   */
  function APIModelsTenant(title, firstName, lastName, addressLine1, postcode, countryCode, emailAddress) {
    _classCallCheck(this, APIModelsTenant);

    APIModelsTenant.initialize(this, title, firstName, lastName, addressLine1, postcode, countryCode, emailAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsTenant, null, [{
    key: "initialize",
    value: function initialize(obj, title, firstName, lastName, addressLine1, postcode, countryCode, emailAddress) {
      obj['title'] = title;
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
      obj['addressLine1'] = addressLine1;
      obj['postcode'] = postcode;
      obj['countryCode'] = countryCode;
      obj['emailAddress'] = emailAddress;
    }
    /**
     * Constructs a <code>APIModelsTenant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsTenant} obj Optional instance to populate.
     * @return {module:model/APIModelsTenant} The populated <code>APIModelsTenant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsTenant();

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

        if (data.hasOwnProperty('homeTelephone')) {
          obj['homeTelephone'] = _ApiClient["default"].convertToType(data['homeTelephone'], 'String');
        }

        if (data.hasOwnProperty('workTelephone')) {
          obj['workTelephone'] = _ApiClient["default"].convertToType(data['workTelephone'], 'String');
        }

        if (data.hasOwnProperty('mobileTelephone')) {
          obj['mobileTelephone'] = _ApiClient["default"].convertToType(data['mobileTelephone'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsTenant;
}();
/**
 * @member {module:model/Title} title
 */


APIModelsTenant.prototype['title'] = undefined;
/**
 * Must be 30 characters or less
 * @member {String} firstName
 */

APIModelsTenant.prototype['firstName'] = undefined;
/**
 * Must be 30 characters or less
 * @member {String} lastName
 */

APIModelsTenant.prototype['lastName'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine1
 */

APIModelsTenant.prototype['addressLine1'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine2
 */

APIModelsTenant.prototype['addressLine2'] = undefined;
/**
 * Must be 90 characters or less
 * @member {String} addressLine3
 */

APIModelsTenant.prototype['addressLine3'] = undefined;
/**
 * Must be 80 characters or less
 * @member {String} addressLine4
 */

APIModelsTenant.prototype['addressLine4'] = undefined;
/**
 * Must be 8 characters or less
 * @member {String} postcode
 */

APIModelsTenant.prototype['postcode'] = undefined;
/**
 * @member {module:model/Country} countryCode
 */

APIModelsTenant.prototype['countryCode'] = undefined;
/**
 * Must provide either a home, mobile or work phone number Must be 15 characters or less 
 * @member {String} homeTelephone
 */

APIModelsTenant.prototype['homeTelephone'] = undefined;
/**
 * Must provide either a home, mobile or work phone number Must be 15 characters or less 
 * @member {String} workTelephone
 */

APIModelsTenant.prototype['workTelephone'] = undefined;
/**
 * Must provide either an email address or a mobile phone number Must provide either a home, mobile or work phone number Must be 15 characters or less 
 * @member {String} mobileTelephone
 */

APIModelsTenant.prototype['mobileTelephone'] = undefined;
/**
 * Must provide either an email address or mobile phone number Must be 100 characters or less 
 * @member {String} emailAddress
 */

APIModelsTenant.prototype['emailAddress'] = undefined;
var _default = APIModelsTenant;
exports["default"] = _default;