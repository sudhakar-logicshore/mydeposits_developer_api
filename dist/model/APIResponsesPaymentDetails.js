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
 * The APIResponsesPaymentDetails model module.
 * @module model/APIResponsesPaymentDetails
 * @version 1.2.2
 */
var APIResponsesPaymentDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesPaymentDetails</code>.
   * Summary of payment details
   * @alias module:model/APIResponsesPaymentDetails
   */
  function APIResponsesPaymentDetails() {
    _classCallCheck(this, APIResponsesPaymentDetails);

    APIResponsesPaymentDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesPaymentDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesPaymentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesPaymentDetails} obj Optional instance to populate.
     * @return {module:model/APIResponsesPaymentDetails} The populated <code>APIResponsesPaymentDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesPaymentDetails();

        if (data.hasOwnProperty('paymentDetailsID')) {
          obj['paymentDetailsID'] = _ApiClient["default"].convertToType(data['paymentDetailsID'], 'String');
        }

        if (data.hasOwnProperty('beneficiaryName')) {
          obj['beneficiaryName'] = _ApiClient["default"].convertToType(data['beneficiaryName'], 'String');
        }

        if (data.hasOwnProperty('bankAccountNumber')) {
          obj['bankAccountNumber'] = _ApiClient["default"].convertToType(data['bankAccountNumber'], 'String');
        }

        if (data.hasOwnProperty('bankSortCode')) {
          obj['bankSortCode'] = _ApiClient["default"].convertToType(data['bankSortCode'], 'String');
        }

        if (data.hasOwnProperty('isDefaultPayment')) {
          obj['isDefaultPayment'] = _ApiClient["default"].convertToType(data['isDefaultPayment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesPaymentDetails;
}();
/**
 * The unique ID of the payment details record
 * @member {String} paymentDetailsID
 */


APIResponsesPaymentDetails.prototype['paymentDetailsID'] = undefined;
/**
 * The name linked to the bank account
 * @member {String} beneficiaryName
 */

APIResponsesPaymentDetails.prototype['beneficiaryName'] = undefined;
/**
 * The bank account number the deposit should be paid into
 * @member {String} bankAccountNumber
 */

APIResponsesPaymentDetails.prototype['bankAccountNumber'] = undefined;
/**
 * The sort code of the account the deposit should be paid into
 * @member {String} bankSortCode
 */

APIResponsesPaymentDetails.prototype['bankSortCode'] = undefined;
/**
 * Whether this is the default payment method or not, will be either \"true\" or \"false\"
 * @member {String} isDefaultPayment
 */

APIResponsesPaymentDetails.prototype['isDefaultPayment'] = undefined;
var _default = APIResponsesPaymentDetails;
exports["default"] = _default;