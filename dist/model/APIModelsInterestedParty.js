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
 * The APIModelsInterestedParty model module.
 * @module model/APIModelsInterestedParty
 * @version 1.2.2
 */
var APIModelsInterestedParty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsInterestedParty</code>.
   * Details of an interested party that has a registered claim in the deposit
   * @alias module:model/APIModelsInterestedParty
   * @param title {module:model/Title} 
   * @param firstName {String} Must be 50 characters or less
   * @param lastName {String} Must be 50 characters or less
   * @param addressLine1 {String} Must be 100 characters or less
   * @param postcode {String} Must be 8 characters or less
   * @param countryCode {module:model/Country} 
   * @param emailAddress {String} Must be 255 characters or less. Mandatory for Custodial only 
   */
  function APIModelsInterestedParty(title, firstName, lastName, addressLine1, postcode, countryCode, emailAddress) {
    _classCallCheck(this, APIModelsInterestedParty);

    APIModelsInterestedParty.initialize(this, title, firstName, lastName, addressLine1, postcode, countryCode, emailAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsInterestedParty, null, [{
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
     * Constructs a <code>APIModelsInterestedParty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsInterestedParty} obj Optional instance to populate.
     * @return {module:model/APIModelsInterestedParty} The populated <code>APIModelsInterestedParty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsInterestedParty();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _Title["default"].constructFromObject(data['title']);
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
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

  return APIModelsInterestedParty;
}();
/**
 * @member {module:model/Title} title
 */


APIModelsInterestedParty.prototype['title'] = undefined;
/**
 * Must be 50 characters or less
 * @member {String} firstName
 */

APIModelsInterestedParty.prototype['firstName'] = undefined;
/**
 * Must be 50 characters or less
 * @member {String} lastName
 */

APIModelsInterestedParty.prototype['lastName'] = undefined;
/**
 * Must be 50 characters or less
 * @member {String} companyName
 */

APIModelsInterestedParty.prototype['companyName'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine1
 */

APIModelsInterestedParty.prototype['addressLine1'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine2
 */

APIModelsInterestedParty.prototype['addressLine2'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine3
 */

APIModelsInterestedParty.prototype['addressLine3'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine4
 */

APIModelsInterestedParty.prototype['addressLine4'] = undefined;
/**
 * Must be 8 characters or less
 * @member {String} postcode
 */

APIModelsInterestedParty.prototype['postcode'] = undefined;
/**
 * @member {module:model/Country} countryCode
 */

APIModelsInterestedParty.prototype['countryCode'] = undefined;
/**
 * Home telephone number.  Must be 15 characters or less 
 * @member {String} homeTelephone
 */

APIModelsInterestedParty.prototype['homeTelephone'] = undefined;
/**
 * Work telephone number. Must be 15 characters or less 
 * @member {String} workTelephone
 */

APIModelsInterestedParty.prototype['workTelephone'] = undefined;
/**
 * Mobile telephone number.  Must be 15 characters or less 
 * @member {String} mobileTelephone
 */

APIModelsInterestedParty.prototype['mobileTelephone'] = undefined;
/**
 * Must be 255 characters or less. Mandatory for Custodial only 
 * @member {String} emailAddress
 */

APIModelsInterestedParty.prototype['emailAddress'] = undefined;
var _default = APIModelsInterestedParty;
exports["default"] = _default;