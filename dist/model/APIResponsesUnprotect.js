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
 * The APIResponsesUnprotect model module.
 * @module model/APIResponsesUnprotect
 * @version 1.2.2
 */
var APIResponsesUnprotect = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesUnprotect</code>.
   * @alias module:model/APIResponsesUnprotect
   */
  function APIResponsesUnprotect() {
    _classCallCheck(this, APIResponsesUnprotect);

    APIResponsesUnprotect.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesUnprotect, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesUnprotect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesUnprotect} obj Optional instance to populate.
     * @return {module:model/APIResponsesUnprotect} The populated <code>APIResponsesUnprotect</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesUnprotect();

        if (data.hasOwnProperty('tenancyID')) {
          obj['tenancyID'] = _ApiClient["default"].convertToType(data['tenancyID'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('dateUnprotected')) {
          obj['dateUnprotected'] = _ApiClient["default"].convertToType(data['dateUnprotected'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesUnprotect;
}();
/**
 * The tenancy ID of the deposit you are unprotecting
 * @member {String} tenancyID
 */


APIResponsesUnprotect.prototype['tenancyID'] = undefined;
/**
 * Will be either \"Awaiting tenant response\" for release initiation or countering, or \"Deposit released\"  for accepting a release request.
 * @member {String} status
 */

APIResponsesUnprotect.prototype['status'] = undefined;
/**
 * The date of the deposit unprotection if no deductions were requested, otherwise todays date
 * @member {String} dateUnprotected
 */

APIResponsesUnprotect.prototype['dateUnprotected'] = undefined;
var _default = APIResponsesUnprotect;
exports["default"] = _default;