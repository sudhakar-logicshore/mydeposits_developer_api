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
 * The APIResponsesOTP model module.
 * @module model/APIResponsesOTP
 * @version 1.2.2
 */
var APIResponsesOTP = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesOTP</code>.
   * @alias module:model/APIResponsesOTP
   */
  function APIResponsesOTP() {
    _classCallCheck(this, APIResponsesOTP);

    APIResponsesOTP.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesOTP, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesOTP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesOTP} obj Optional instance to populate.
     * @return {module:model/APIResponsesOTP} The populated <code>APIResponsesOTP</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesOTP();

        if (data.hasOwnProperty('communicationMethod')) {
          obj['communicationMethod'] = _ApiClient["default"].convertToType(data['communicationMethod'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesOTP;
}();
/**
 * Will notify you whether the OTP was sent via email or SMS. Possible values are \"EMAIL\" or \"SMS\"
 * @member {String} communicationMethod
 */


APIResponsesOTP.prototype['communicationMethod'] = undefined;
var _default = APIResponsesOTP;
exports["default"] = _default;