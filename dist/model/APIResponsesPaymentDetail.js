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
 * The APIResponsesPaymentDetail model module.
 * @module model/APIResponsesPaymentDetail
 * @version 1.2.2
 */
var APIResponsesPaymentDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesPaymentDetail</code>.
   * ID of the newly added payment detail
   * @alias module:model/APIResponsesPaymentDetail
   */
  function APIResponsesPaymentDetail() {
    _classCallCheck(this, APIResponsesPaymentDetail);

    APIResponsesPaymentDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesPaymentDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesPaymentDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesPaymentDetail} obj Optional instance to populate.
     * @return {module:model/APIResponsesPaymentDetail} The populated <code>APIResponsesPaymentDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesPaymentDetail();

        if (data.hasOwnProperty('bacsPaymentDetailsID')) {
          obj['bacsPaymentDetailsID'] = _ApiClient["default"].convertToType(data['bacsPaymentDetailsID'], 'String');
        }

        if (data.hasOwnProperty('isDefaultPayment')) {
          obj['isDefaultPayment'] = _ApiClient["default"].convertToType(data['isDefaultPayment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesPaymentDetail;
}();
/**
 * The unique ID of the payment details record
 * @member {String} bacsPaymentDetailsID
 */


APIResponsesPaymentDetail.prototype['bacsPaymentDetailsID'] = undefined;
/**
 * Whether this is the default payment method or not, will be either \"true\" or \"false\"
 * @member {String} isDefaultPayment
 */

APIResponsesPaymentDetail.prototype['isDefaultPayment'] = undefined;
var _default = APIResponsesPaymentDetail;
exports["default"] = _default;