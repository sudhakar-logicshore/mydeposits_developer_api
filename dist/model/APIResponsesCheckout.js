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
 * The APIResponsesCheckout model module.
 * @module model/APIResponsesCheckout
 * @version 1.2.2
 */
var APIResponsesCheckout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesCheckout</code>.
   * @alias module:model/APIResponsesCheckout
   */
  function APIResponsesCheckout() {
    _classCallCheck(this, APIResponsesCheckout);

    APIResponsesCheckout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesCheckout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesCheckout} obj Optional instance to populate.
     * @return {module:model/APIResponsesCheckout} The populated <code>APIResponsesCheckout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesCheckout();

        if (data.hasOwnProperty('tenancyID')) {
          obj['tenancyID'] = _ApiClient["default"].convertToType(data['tenancyID'], 'String');
        }

        if (data.hasOwnProperty('depositAmount')) {
          obj['depositAmount'] = _ApiClient["default"].convertToType(data['depositAmount'], 'Number');
        }

        if (data.hasOwnProperty('paymentReference')) {
          obj['paymentReference'] = _ApiClient["default"].convertToType(data['paymentReference'], 'String');
        }

        if (data.hasOwnProperty('protectionFee')) {
          obj['protectionFee'] = _ApiClient["default"].convertToType(data['protectionFee'], 'Number');
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

  return APIResponsesCheckout;
}();
/**
 * The ID of the tenancy being checked out
 * @member {String} tenancyID
 */


APIResponsesCheckout.prototype['tenancyID'] = undefined;
/**
 * The monetary value of the tenancy that you need to send to us via bank transfer
 * @member {Number} depositAmount
 */

APIResponsesCheckout.prototype['depositAmount'] = undefined;
/**
 * The unique payment reference to use when submitting a bank transfer to us to pay for the tenancy
 * @member {String} paymentReference
 */

APIResponsesCheckout.prototype['paymentReference'] = undefined;
/**
 * Any applicable fee charged for this protection
 * @member {Number} protectionFee
 */

APIResponsesCheckout.prototype['protectionFee'] = undefined;
/**
 * The mydeposits bank account number to transfer the payment into.
 * @member {String} bankAccountNumber
 */

APIResponsesCheckout.prototype['bankAccountNumber'] = undefined;
/**
 * The mydeposits bank sort code to transfer the payment into.
 * @member {String} bankSortCode
 */

APIResponsesCheckout.prototype['bankSortCode'] = undefined;
var _default = APIResponsesCheckout;
exports["default"] = _default;