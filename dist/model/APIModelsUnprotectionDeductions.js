"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsDeductions = _interopRequireDefault(require("./APIModelsDeductions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIModelsUnprotectionDeductions model module.
 * @module model/APIModelsUnprotectionDeductions
 * @version 1.2.2
 */
var APIModelsUnprotectionDeductions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsUnprotectionDeductions</code>.
   * Deductions requested for a deposit release request. Only needed if deductions are to be made
   * @alias module:model/APIModelsUnprotectionDeductions
   * @param paymentMethod {String} Must be CHEQUE or BACS
   * @param defaultPaymentID {String} Only needed for BACS payments
   * @param deduction {Array.<module:model/APIModelsDeductions>} 
   */
  function APIModelsUnprotectionDeductions(paymentMethod, defaultPaymentID, deduction) {
    _classCallCheck(this, APIModelsUnprotectionDeductions);

    APIModelsUnprotectionDeductions.initialize(this, paymentMethod, defaultPaymentID, deduction);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsUnprotectionDeductions, null, [{
    key: "initialize",
    value: function initialize(obj, paymentMethod, defaultPaymentID, deduction) {
      obj['paymentMethod'] = paymentMethod;
      obj['defaultPaymentID'] = defaultPaymentID;
      obj['deduction'] = deduction;
    }
    /**
     * Constructs a <code>APIModelsUnprotectionDeductions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsUnprotectionDeductions} obj Optional instance to populate.
     * @return {module:model/APIModelsUnprotectionDeductions} The populated <code>APIModelsUnprotectionDeductions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsUnprotectionDeductions();

        if (data.hasOwnProperty('paymentMethod')) {
          obj['paymentMethod'] = _ApiClient["default"].convertToType(data['paymentMethod'], 'String');
        }

        if (data.hasOwnProperty('defaultPaymentID')) {
          obj['defaultPaymentID'] = _ApiClient["default"].convertToType(data['defaultPaymentID'], 'String');
        }

        if (data.hasOwnProperty('deduction')) {
          obj['deduction'] = _ApiClient["default"].convertToType(data['deduction'], [_APIModelsDeductions["default"]]);
        }
      }

      return obj;
    }
  }]);

  return APIModelsUnprotectionDeductions;
}();
/**
 * Must be CHEQUE or BACS
 * @member {String} paymentMethod
 */


APIModelsUnprotectionDeductions.prototype['paymentMethod'] = undefined;
/**
 * Only needed for BACS payments
 * @member {String} defaultPaymentID
 */

APIModelsUnprotectionDeductions.prototype['defaultPaymentID'] = undefined;
/**
 * @member {Array.<module:model/APIModelsDeductions>} deduction
 */

APIModelsUnprotectionDeductions.prototype['deduction'] = undefined;
var _default = APIModelsUnprotectionDeductions;
exports["default"] = _default;