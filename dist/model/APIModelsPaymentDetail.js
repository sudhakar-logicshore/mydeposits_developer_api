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
 * The APIModelsPaymentDetail model module.
 * @module model/APIModelsPaymentDetail
 * @version 1.2.2
 */
var APIModelsPaymentDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsPaymentDetail</code>.
   * An object holding information on how a deposit should be repaid to a member
   * @alias module:model/APIModelsPaymentDetail
   * @param beneficiaryName {String} The name on the bank account, must be 75 characters or less
   * @param bankAccountNumber {String} Must be an 8 digit number
   * @param bankSortCode {String} Must be a 6 digit number
   */
  function APIModelsPaymentDetail(beneficiaryName, bankAccountNumber, bankSortCode) {
    _classCallCheck(this, APIModelsPaymentDetail);

    APIModelsPaymentDetail.initialize(this, beneficiaryName, bankAccountNumber, bankSortCode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsPaymentDetail, null, [{
    key: "initialize",
    value: function initialize(obj, beneficiaryName, bankAccountNumber, bankSortCode) {
      obj['beneficiaryName'] = beneficiaryName;
      obj['bankAccountNumber'] = bankAccountNumber;
      obj['bankSortCode'] = bankSortCode;
    }
    /**
     * Constructs a <code>APIModelsPaymentDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsPaymentDetail} obj Optional instance to populate.
     * @return {module:model/APIModelsPaymentDetail} The populated <code>APIModelsPaymentDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsPaymentDetail();

        if (data.hasOwnProperty('beneficiaryName')) {
          obj['beneficiaryName'] = _ApiClient["default"].convertToType(data['beneficiaryName'], 'String');
        }

        if (data.hasOwnProperty('bankAccountNumber')) {
          obj['bankAccountNumber'] = _ApiClient["default"].convertToType(data['bankAccountNumber'], 'String');
        }

        if (data.hasOwnProperty('bankSortCode')) {
          obj['bankSortCode'] = _ApiClient["default"].convertToType(data['bankSortCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsPaymentDetail;
}();
/**
 * The name on the bank account, must be 75 characters or less
 * @member {String} beneficiaryName
 */


APIModelsPaymentDetail.prototype['beneficiaryName'] = undefined;
/**
 * Must be an 8 digit number
 * @member {String} bankAccountNumber
 */

APIModelsPaymentDetail.prototype['bankAccountNumber'] = undefined;
/**
 * Must be a 6 digit number
 * @member {String} bankSortCode
 */

APIModelsPaymentDetail.prototype['bankSortCode'] = undefined;
var _default = APIModelsPaymentDetail;
exports["default"] = _default;