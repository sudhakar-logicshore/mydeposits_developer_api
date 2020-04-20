"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocalAuthorityRegion = _interopRequireDefault(require("./LocalAuthorityRegion"));

var _PropertyType = _interopRequireDefault(require("./PropertyType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIModelsProperty model module.
 * @module model/APIModelsProperty
 * @version 1.2.2
 */
var APIModelsProperty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsProperty</code>.
   * Property model used to create or update property objects
   * @alias module:model/APIModelsProperty
   * @param addressLine1 {String} Must be 100 characters or less
   * @param postcode {String} Must be 8 characters or less
   */
  function APIModelsProperty(addressLine1, postcode) {
    _classCallCheck(this, APIModelsProperty);

    APIModelsProperty.initialize(this, addressLine1, postcode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsProperty, null, [{
    key: "initialize",
    value: function initialize(obj, addressLine1, postcode) {
      obj['addressLine1'] = addressLine1;
      obj['postcode'] = postcode;
    }
    /**
     * Constructs a <code>APIModelsProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsProperty} obj Optional instance to populate.
     * @return {module:model/APIModelsProperty} The populated <code>APIModelsProperty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsProperty();

        if (data.hasOwnProperty('thirdPartyReference')) {
          obj['thirdPartyReference'] = _ApiClient["default"].convertToType(data['thirdPartyReference'], 'String');
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

        if (data.hasOwnProperty('propertyType')) {
          obj['propertyType'] = _PropertyType["default"].constructFromObject(data['propertyType']);
        }

        if (data.hasOwnProperty('localAuthority')) {
          obj['localAuthority'] = _LocalAuthorityRegion["default"].constructFromObject(data['localAuthority']);
        }

        if (data.hasOwnProperty('landlordID')) {
          obj['landlordID'] = _ApiClient["default"].convertToType(data['landlordID'], 'String');
        }

        if (data.hasOwnProperty('branchID')) {
          obj['branchID'] = _ApiClient["default"].convertToType(data['branchID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsProperty;
}();
/**
 * Your unique reference for this property.  Must be 25 characters or less 
 * @member {String} thirdPartyReference
 */


APIModelsProperty.prototype['thirdPartyReference'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine1
 */

APIModelsProperty.prototype['addressLine1'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine2
 */

APIModelsProperty.prototype['addressLine2'] = undefined;
/**
 * Must be 90 characters or less
 * @member {String} addressLine3
 */

APIModelsProperty.prototype['addressLine3'] = undefined;
/**
 * Must be 80 characters or less
 * @member {String} addressLine4
 */

APIModelsProperty.prototype['addressLine4'] = undefined;
/**
 * Must be 8 characters or less
 * @member {String} postcode
 */

APIModelsProperty.prototype['postcode'] = undefined;
/**
 * @member {module:model/PropertyType} propertyType
 */

APIModelsProperty.prototype['propertyType'] = undefined;
/**
 * @member {module:model/LocalAuthorityRegion} localAuthority
 */

APIModelsProperty.prototype['localAuthority'] = undefined;
/**
 * ID of the landlord that the property belongs to. Mandatory for Insurance agent members only 
 * @member {String} landlordID
 */

APIModelsProperty.prototype['landlordID'] = undefined;
/**
 * Branch ID if the landlord belongs to a branch rather than a head office
 * @member {String} branchID
 */

APIModelsProperty.prototype['branchID'] = undefined;
var _default = APIModelsProperty;
exports["default"] = _default;