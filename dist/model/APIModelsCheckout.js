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
 * The APIModelsCheckout model module.
 * @module model/APIModelsCheckout
 * @version 1.2.2
 */
var APIModelsCheckout = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsCheckout</code>.
   * @alias module:model/APIModelsCheckout
   * @param paymentMethod {String} Must be BANK_TRANSFER
   */
  function APIModelsCheckout(paymentMethod) {
    _classCallCheck(this, APIModelsCheckout);

    APIModelsCheckout.initialize(this, paymentMethod);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsCheckout, null, [{
    key: "initialize",
    value: function initialize(obj, paymentMethod) {
      obj['paymentMethod'] = paymentMethod;
    }
    /**
     * Constructs a <code>APIModelsCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsCheckout} obj Optional instance to populate.
     * @return {module:model/APIModelsCheckout} The populated <code>APIModelsCheckout</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsCheckout();

        if (data.hasOwnProperty('paymentMethod')) {
          obj['paymentMethod'] = _ApiClient["default"].convertToType(data['paymentMethod'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsCheckout;
}();
/**
 * Must be BANK_TRANSFER
 * @member {String} paymentMethod
 */


APIModelsCheckout.prototype['paymentMethod'] = undefined;
var _default = APIModelsCheckout;
exports["default"] = _default;