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
 * The APIModelsJointTenant model module.
 * @module model/APIModelsJointTenant
 * @version 1.2.2
 */
var APIModelsJointTenant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsJointTenant</code>.
   * Joint tenant details, when there is more than a single tenant in a tenancy
   * @alias module:model/APIModelsJointTenant
   * @param title {module:model/Title} 
   * @param firstName {String} Must be 30 characters or less
   * @param lastName {String} Must be 30 characters or less
   * @param emailAddress {String} Must be 100 characters or less. Mandatory for Custodial 
   */
  function APIModelsJointTenant(title, firstName, lastName, emailAddress) {
    _classCallCheck(this, APIModelsJointTenant);

    APIModelsJointTenant.initialize(this, title, firstName, lastName, emailAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsJointTenant, null, [{
    key: "initialize",
    value: function initialize(obj, title, firstName, lastName, emailAddress) {
      obj['title'] = title;
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
      obj['emailAddress'] = emailAddress;
    }
    /**
     * Constructs a <code>APIModelsJointTenant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsJointTenant} obj Optional instance to populate.
     * @return {module:model/APIModelsJointTenant} The populated <code>APIModelsJointTenant</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsJointTenant();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _Title["default"].constructFromObject(data['title']);
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('workTelephone')) {
          obj['workTelephone'] = _ApiClient["default"].convertToType(data['workTelephone'], 'String');
        }

        if (data.hasOwnProperty('mobileTelephone')) {
          obj['mobileTelephone'] = _ApiClient["default"].convertToType(data['mobileTelephone'], 'String');
        }

        if (data.hasOwnProperty('homeTelephone')) {
          obj['homeTelephone'] = _ApiClient["default"].convertToType(data['homeTelephone'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
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
      }

      return obj;
    }
  }]);

  return APIModelsJointTenant;
}();
/**
 * @member {module:model/Title} title
 */


APIModelsJointTenant.prototype['title'] = undefined;
/**
 * Must be 30 characters or less
 * @member {String} firstName
 */

APIModelsJointTenant.prototype['firstName'] = undefined;
/**
 * Must be 30 characters or less
 * @member {String} lastName
 */

APIModelsJointTenant.prototype['lastName'] = undefined;
/**
 * Work telephone number. Must be 15 characters or less 
 * @member {String} workTelephone
 */

APIModelsJointTenant.prototype['workTelephone'] = undefined;
/**
 * Mobile telephone number. Must be 15 characters or less 
 * @member {String} mobileTelephone
 */

APIModelsJointTenant.prototype['mobileTelephone'] = undefined;
/**
 * Home telephone number Must be 15 characters or less 
 * @member {String} homeTelephone
 */

APIModelsJointTenant.prototype['homeTelephone'] = undefined;
/**
 * Must be 100 characters or less. Mandatory for Custodial 
 * @member {String} emailAddress
 */

APIModelsJointTenant.prototype['emailAddress'] = undefined;
/**
 * Must be 100 characters or less. Mandatory for Custodial 
 * @member {String} addressLine1
 */

APIModelsJointTenant.prototype['addressLine1'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine2
 */

APIModelsJointTenant.prototype['addressLine2'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine3
 */

APIModelsJointTenant.prototype['addressLine3'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine4
 */

APIModelsJointTenant.prototype['addressLine4'] = undefined;
/**
 * Must be 8 characters or less. Mandatory for Custodial 
 * @member {String} postcode
 */

APIModelsJointTenant.prototype['postcode'] = undefined;
/**
 * @member {module:model/Country} countryCode
 */

APIModelsJointTenant.prototype['countryCode'] = undefined;
var _default = APIModelsJointTenant;
exports["default"] = _default;