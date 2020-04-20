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
 * The APIResponsesBatchTenancy model module.
 * @module model/APIResponsesBatchTenancy
 * @version 1.2.2
 */
var APIResponsesBatchTenancy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBatchTenancy</code>.
   * Details of a given tenancy within a batch
   * @alias module:model/APIResponsesBatchTenancy
   */
  function APIResponsesBatchTenancy() {
    _classCallCheck(this, APIResponsesBatchTenancy);

    APIResponsesBatchTenancy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBatchTenancy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBatchTenancy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBatchTenancy} obj Optional instance to populate.
     * @return {module:model/APIResponsesBatchTenancy} The populated <code>APIResponsesBatchTenancy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBatchTenancy();

        if (data.hasOwnProperty('tenancyID')) {
          obj['tenancyID'] = _ApiClient["default"].convertToType(data['tenancyID'], 'String');
        }

        if (data.hasOwnProperty('amountInBatch')) {
          obj['amountInBatch'] = _ApiClient["default"].convertToType(data['amountInBatch'], 'Number');
        }

        if (data.hasOwnProperty('outstandingBalance')) {
          obj['outstandingBalance'] = _ApiClient["default"].convertToType(data['outstandingBalance'], 'Number');
        }

        if (data.hasOwnProperty('depositAmount')) {
          obj['depositAmount'] = _ApiClient["default"].convertToType(data['depositAmount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesBatchTenancy;
}();
/**
 * Our unique reference for this tenancy
 * @member {String} tenancyID
 */


APIResponsesBatchTenancy.prototype['tenancyID'] = undefined;
/**
 * The value for this tenancy that will be paid within this batch
 * @member {Number} amountInBatch
 */

APIResponsesBatchTenancy.prototype['amountInBatch'] = undefined;
/**
 * The outstanding balance for this tenancy
 * @member {Number} outstandingBalance
 */

APIResponsesBatchTenancy.prototype['outstandingBalance'] = undefined;
/**
 * The stated deposit amount for this tenancy
 * @member {Number} depositAmount
 */

APIResponsesBatchTenancy.prototype['depositAmount'] = undefined;
var _default = APIResponsesBatchTenancy;
exports["default"] = _default;