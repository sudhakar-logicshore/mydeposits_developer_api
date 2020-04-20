"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsUnprotectionDeductions = _interopRequireDefault(require("./APIModelsUnprotectionDeductions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIModelsUnprotect model module.
 * @module model/APIModelsUnprotect
 * @version 1.2.2
 */
var APIModelsUnprotect = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsUnprotect</code>.
   * Tenancy model used to initiate or counter a deposit release request
   * @alias module:model/APIModelsUnprotect
   * @param tenancyEndDate {String} The date the tenant vacated the property (dd/mm/yyyy)
   * @param keyType {String} Either OTP (online portals) or PRIVATE_KEY (PMS software)
   */
  function APIModelsUnprotect(tenancyEndDate, keyType) {
    _classCallCheck(this, APIModelsUnprotect);

    APIModelsUnprotect.initialize(this, tenancyEndDate, keyType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsUnprotect, null, [{
    key: "initialize",
    value: function initialize(obj, tenancyEndDate, keyType) {
      obj['tenancyEndDate'] = tenancyEndDate;
      obj['keyType'] = keyType;
    }
    /**
     * Constructs a <code>APIModelsUnprotect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsUnprotect} obj Optional instance to populate.
     * @return {module:model/APIModelsUnprotect} The populated <code>APIModelsUnprotect</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsUnprotect();

        if (data.hasOwnProperty('tenancyEndDate')) {
          obj['tenancyEndDate'] = _ApiClient["default"].convertToType(data['tenancyEndDate'], 'String');
        }

        if (data.hasOwnProperty('keyType')) {
          obj['keyType'] = _ApiClient["default"].convertToType(data['keyType'], 'String');
        }

        if (data.hasOwnProperty('deductions')) {
          obj['deductions'] = _APIModelsUnprotectionDeductions["default"].constructFromObject(data['deductions']);
        }
      }

      return obj;
    }
  }]);

  return APIModelsUnprotect;
}();
/**
 * The date the tenant vacated the property (dd/mm/yyyy)
 * @member {String} tenancyEndDate
 */


APIModelsUnprotect.prototype['tenancyEndDate'] = undefined;
/**
 * Either OTP (online portals) or PRIVATE_KEY (PMS software)
 * @member {String} keyType
 */

APIModelsUnprotect.prototype['keyType'] = undefined;
/**
 * @member {module:model/APIModelsUnprotectionDeductions} deductions
 */

APIModelsUnprotect.prototype['deductions'] = undefined;
var _default = APIModelsUnprotect;
exports["default"] = _default;