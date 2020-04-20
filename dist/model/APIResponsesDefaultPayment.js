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
 * The APIResponsesDefaultPayment model module.
 * @module model/APIResponsesDefaultPayment
 * @version 1.2.2
 */
var APIResponsesDefaultPayment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesDefaultPayment</code>.
   * Details of the newly set default payment details
   * @alias module:model/APIResponsesDefaultPayment
   */
  function APIResponsesDefaultPayment() {
    _classCallCheck(this, APIResponsesDefaultPayment);

    APIResponsesDefaultPayment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesDefaultPayment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesDefaultPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesDefaultPayment} obj Optional instance to populate.
     * @return {module:model/APIResponsesDefaultPayment} The populated <code>APIResponsesDefaultPayment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesDefaultPayment();

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('nextReleaseDate')) {
          obj['nextReleaseDate'] = _ApiClient["default"].convertToType(data['nextReleaseDate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesDefaultPayment;
}();
/**
 * Information message - \"By changing your default bank account you will not be able to release any deposits for 7 calendar days\"
 * @member {String} status
 */


APIResponsesDefaultPayment.prototype['status'] = undefined;
/**
 * Releases cannot be created or updated for 7 days following the changing of default payment details (dd/mm/yyyy)
 * @member {String} nextReleaseDate
 */

APIResponsesDefaultPayment.prototype['nextReleaseDate'] = undefined;
var _default = APIResponsesDefaultPayment;
exports["default"] = _default;