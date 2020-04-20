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
 * The APIResponsesConvertSPT model module.
 * @module model/APIResponsesConvertSPT
 * @version 1.2.2
 */
var APIResponsesConvertSPT = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesConvertSPT</code>.
   * @alias module:model/APIResponsesConvertSPT
   */
  function APIResponsesConvertSPT() {
    _classCallCheck(this, APIResponsesConvertSPT);

    APIResponsesConvertSPT.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesConvertSPT, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesConvertSPT</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesConvertSPT} obj Optional instance to populate.
     * @return {module:model/APIResponsesConvertSPT} The populated <code>APIResponsesConvertSPT</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesConvertSPT();

        if (data.hasOwnProperty('tenancyID')) {
          obj['tenancyID'] = _ApiClient["default"].convertToType(data['tenancyID'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('sptDate')) {
          obj['sptDate'] = _ApiClient["default"].convertToType(data['sptDate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesConvertSPT;
}();
/**
 * The tenancy ID of the deposit you are converting
 * @member {String} tenancyID
 */


APIResponsesConvertSPT.prototype['tenancyID'] = undefined;
/**
 * Will be \"protected\"
 * @member {String} status
 */

APIResponsesConvertSPT.prototype['status'] = undefined;
/**
 * Will be \"Statutory Periodics\"
 * @member {String} type
 */

APIResponsesConvertSPT.prototype['type'] = undefined;
/**
 * The date that the tenancy was converted to a statutory periodic tenancy (dd/mm/yyyy)
 * @member {String} sptDate
 */

APIResponsesConvertSPT.prototype['sptDate'] = undefined;
var _default = APIResponsesConvertSPT;
exports["default"] = _default;