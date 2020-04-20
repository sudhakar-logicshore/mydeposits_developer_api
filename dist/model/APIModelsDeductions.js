"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeductionReasons = _interopRequireDefault(require("./DeductionReasons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIModelsDeductions model module.
 * @module model/APIModelsDeductions
 * @version 1.2.2
 */
var APIModelsDeductions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsDeductions</code>.
   * A single deduction for a deposit release request
   * @alias module:model/APIModelsDeductions
   * @param deductionReason {module:model/DeductionReasons} 
   * @param deductionAmount {String} The amount you wish to deduct for this deduction reason
   */
  function APIModelsDeductions(deductionReason, deductionAmount) {
    _classCallCheck(this, APIModelsDeductions);

    APIModelsDeductions.initialize(this, deductionReason, deductionAmount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsDeductions, null, [{
    key: "initialize",
    value: function initialize(obj, deductionReason, deductionAmount) {
      obj['deductionReason'] = deductionReason;
      obj['deductionAmount'] = deductionAmount;
    }
    /**
     * Constructs a <code>APIModelsDeductions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsDeductions} obj Optional instance to populate.
     * @return {module:model/APIModelsDeductions} The populated <code>APIModelsDeductions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsDeductions();

        if (data.hasOwnProperty('deductionReason')) {
          obj['deductionReason'] = _DeductionReasons["default"].constructFromObject(data['deductionReason']);
        }

        if (data.hasOwnProperty('deductionAmount')) {
          obj['deductionAmount'] = _ApiClient["default"].convertToType(data['deductionAmount'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsDeductions;
}();
/**
 * @member {module:model/DeductionReasons} deductionReason
 */


APIModelsDeductions.prototype['deductionReason'] = undefined;
/**
 * The amount you wish to deduct for this deduction reason
 * @member {String} deductionAmount
 */

APIModelsDeductions.prototype['deductionAmount'] = undefined;
var _default = APIModelsDeductions;
exports["default"] = _default;