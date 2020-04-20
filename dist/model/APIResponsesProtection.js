"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TenancyStatus = _interopRequireDefault(require("./TenancyStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesProtection model module.
 * @module model/APIResponsesProtection
 * @version 1.2.2
 */
var APIResponsesProtection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesProtection</code>.
   * Summary of tenancy details
   * @alias module:model/APIResponsesProtection
   */
  function APIResponsesProtection() {
    _classCallCheck(this, APIResponsesProtection);

    APIResponsesProtection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesProtection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesProtection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesProtection} obj Optional instance to populate.
     * @return {module:model/APIResponsesProtection} The populated <code>APIResponsesProtection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesProtection();

        if (data.hasOwnProperty('branchID')) {
          obj['branchID'] = _ApiClient["default"].convertToType(data['branchID'], 'String');
        }

        if (data.hasOwnProperty('tenancyID')) {
          obj['tenancyID'] = _ApiClient["default"].convertToType(data['tenancyID'], 'String');
        }

        if (data.hasOwnProperty('depositProtectionNumber')) {
          obj['depositProtectionNumber'] = _ApiClient["default"].convertToType(data['depositProtectionNumber'], 'String');
        }

        if (data.hasOwnProperty('tenancyStartDate')) {
          obj['tenancyStartDate'] = _ApiClient["default"].convertToType(data['tenancyStartDate'], 'String');
        }

        if (data.hasOwnProperty('tenancyEndDate')) {
          obj['tenancyEndDate'] = _ApiClient["default"].convertToType(data['tenancyEndDate'], 'String');
        }

        if (data.hasOwnProperty('depositAmount')) {
          obj['depositAmount'] = _ApiClient["default"].convertToType(data['depositAmount'], 'String');
        }

        if (data.hasOwnProperty('protectedAmount')) {
          obj['protectedAmount'] = _ApiClient["default"].convertToType(data['protectedAmount'], 'String');
        }

        if (data.hasOwnProperty('currentStatus')) {
          obj['currentStatus'] = _TenancyStatus["default"].constructFromObject(data['currentStatus']);
        }
      }

      return obj;
    }
  }]);

  return APIResponsesProtection;
}();
/**
 * The branch that the deposit is linked to
 * @member {String} branchID
 */


APIResponsesProtection.prototype['branchID'] = undefined;
/**
 * The mydeposits unique ID for this tenancy
 * @member {String} tenancyID
 */

APIResponsesProtection.prototype['tenancyID'] = undefined;
/**
 * The certificate number for this tenancy
 * @member {String} depositProtectionNumber
 */

APIResponsesProtection.prototype['depositProtectionNumber'] = undefined;
/**
 * The start date of the tenancy
 * @member {String} tenancyStartDate
 */

APIResponsesProtection.prototype['tenancyStartDate'] = undefined;
/**
 * The end date of the tenancy
 * @member {String} tenancyEndDate
 */

APIResponsesProtection.prototype['tenancyEndDate'] = undefined;
/**
 * The deposits amount
 * @member {String} depositAmount
 */

APIResponsesProtection.prototype['depositAmount'] = undefined;
/**
 * The amount of the deposit to be protected
 * @member {String} protectedAmount
 */

APIResponsesProtection.prototype['protectedAmount'] = undefined;
/**
 * @member {module:model/TenancyStatus} currentStatus
 */

APIResponsesProtection.prototype['currentStatus'] = undefined;
var _default = APIResponsesProtection;
exports["default"] = _default;