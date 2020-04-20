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
 * The APIResponsesBatchCheckout model module.
 * @module model/APIResponsesBatchCheckout
 * @version 1.2.2
 */
var APIResponsesBatchCheckout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBatchCheckout</code>.
   * @alias module:model/APIResponsesBatchCheckout
   */
  function APIResponsesBatchCheckout() {
    _classCallCheck(this, APIResponsesBatchCheckout);

    APIResponsesBatchCheckout.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBatchCheckout, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBatchCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBatchCheckout} obj Optional instance to populate.
     * @return {module:model/APIResponsesBatchCheckout} The populated <code>APIResponsesBatchCheckout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBatchCheckout();

        if (data.hasOwnProperty('paymentValue')) {
          obj['paymentValue'] = _ApiClient["default"].convertToType(data['paymentValue'], 'Number');
        }

        if (data.hasOwnProperty('paymentReference')) {
          obj['paymentReference'] = _ApiClient["default"].convertToType(data['paymentReference'], 'String');
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

  return APIResponsesBatchCheckout;
}();
/**
 * The total monetary value of the batch of tenancies that you need to send to us via bank transfer
 * @member {Number} paymentValue
 */


APIResponsesBatchCheckout.prototype['paymentValue'] = undefined;
/**
 * The payment reference to use when submitting a bank transfer to us to pay for the batch of tenancies
 * @member {String} paymentReference
 */

APIResponsesBatchCheckout.prototype['paymentReference'] = undefined;
/**
 * The mydeposits bank account number to transfer the payment into
 * @member {String} bankAccountNumber
 */

APIResponsesBatchCheckout.prototype['bankAccountNumber'] = undefined;
/**
 * The mydeposits bank sort code to transfer the payment into
 * @member {String} bankSortCode
 */

APIResponsesBatchCheckout.prototype['bankSortCode'] = undefined;
var _default = APIResponsesBatchCheckout;
exports["default"] = _default;