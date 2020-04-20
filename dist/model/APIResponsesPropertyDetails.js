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
 * The APIResponsesPropertyDetails model module.
 * @module model/APIResponsesPropertyDetails
 * @version 1.2.2
 */
var APIResponsesPropertyDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesPropertyDetails</code>.
   * Details of a given property
   * @alias module:model/APIResponsesPropertyDetails
   */
  function APIResponsesPropertyDetails() {
    _classCallCheck(this, APIResponsesPropertyDetails);

    APIResponsesPropertyDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesPropertyDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesPropertyDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesPropertyDetails} obj Optional instance to populate.
     * @return {module:model/APIResponsesPropertyDetails} The populated <code>APIResponsesPropertyDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesPropertyDetails();

        if (data.hasOwnProperty('propertyID')) {
          obj['propertyID'] = _ApiClient["default"].convertToType(data['propertyID'], 'String');
        }

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

  return APIResponsesPropertyDetails;
}();
/**
 * @member {String} propertyID
 */


APIResponsesPropertyDetails.prototype['propertyID'] = undefined;
/**
 * @member {String} thirdPartyReference
 */

APIResponsesPropertyDetails.prototype['thirdPartyReference'] = undefined;
/**
 * @member {String} addressLine1
 */

APIResponsesPropertyDetails.prototype['addressLine1'] = undefined;
/**
 * @member {String} addressLine2
 */

APIResponsesPropertyDetails.prototype['addressLine2'] = undefined;
/**
 * @member {String} addressLine3
 */

APIResponsesPropertyDetails.prototype['addressLine3'] = undefined;
/**
 * @member {String} addressLine4
 */

APIResponsesPropertyDetails.prototype['addressLine4'] = undefined;
/**
 * @member {String} postcode
 */

APIResponsesPropertyDetails.prototype['postcode'] = undefined;
/**
 * @member {module:model/PropertyType} propertyType
 */

APIResponsesPropertyDetails.prototype['propertyType'] = undefined;
/**
 * @member {module:model/LocalAuthorityRegion} localAuthority
 */

APIResponsesPropertyDetails.prototype['localAuthority'] = undefined;
/**
 * @member {String} landlordID
 */

APIResponsesPropertyDetails.prototype['landlordID'] = undefined;
/**
 * @member {String} branchID
 */

APIResponsesPropertyDetails.prototype['branchID'] = undefined;
var _default = APIResponsesPropertyDetails;
exports["default"] = _default;