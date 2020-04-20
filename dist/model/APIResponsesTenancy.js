"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesTenancy model module.
 * @module model/APIResponsesTenancy
 * @version 1.2.2
 */
var APIResponsesTenancy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesTenancy</code>.
   * Details of a newly registered tenancy deposit
   * @alias module:model/APIResponsesTenancy
   */
  function APIResponsesTenancy() {
    _classCallCheck(this, APIResponsesTenancy);

    APIResponsesTenancy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesTenancy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesTenancy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesTenancy} obj Optional instance to populate.
     * @return {module:model/APIResponsesTenancy} The populated <code>APIResponsesTenancy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesTenancy();

        if (data.hasOwnProperty('tenancyID')) {
          obj['tenancyID'] = _ApiClient["default"].convertToType(data['tenancyID'], 'String');
        }

        if (data.hasOwnProperty('protectionFee')) {
          obj['protectionFee'] = _ApiClient["default"].convertToType(data['protectionFee'], 'Number');
        }

        if (data.hasOwnProperty('landlordID')) {
          obj['landlordID'] = _ApiClient["default"].convertToType(data['landlordID'], 'String');
        }

        if (data.hasOwnProperty('propertyID')) {
          obj['propertyID'] = _ApiClient["default"].convertToType(data['propertyID'], 'String');
        }

        if (data.hasOwnProperty('depositAmount')) {
          obj['depositAmount'] = _ApiClient["default"].convertToType(data['depositAmount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesTenancy;
}();
/**
 * The mydeposits unique tenancy identifier
 * @member {String} tenancyID
 */


APIResponsesTenancy.prototype['tenancyID'] = undefined;
/**
 * Any outstanding fee needing to be paid before the deposit is protected
 * @member {Number} protectionFee
 */

APIResponsesTenancy.prototype['protectionFee'] = undefined;
/**
 * The mydeposits member number of the landlord relating to the tenancy
 * @member {String} landlordID
 */

APIResponsesTenancy.prototype['landlordID'] = undefined;
/**
 * The mydeposits ID of the property that this tenancy is registered against
 * @member {String} propertyID
 */

APIResponsesTenancy.prototype['propertyID'] = undefined;
/**
 * The value of the protected deposit
 * @member {Number} depositAmount
 */

APIResponsesTenancy.prototype['depositAmount'] = undefined;
var _default = APIResponsesTenancy;
exports["default"] = _default;