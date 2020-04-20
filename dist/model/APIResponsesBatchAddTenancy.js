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
 * The APIResponsesBatchAddTenancy model module.
 * @module model/APIResponsesBatchAddTenancy
 * @version 1.2.2
 */
var APIResponsesBatchAddTenancy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBatchAddTenancy</code>.
   * @alias module:model/APIResponsesBatchAddTenancy
   */
  function APIResponsesBatchAddTenancy() {
    _classCallCheck(this, APIResponsesBatchAddTenancy);

    APIResponsesBatchAddTenancy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBatchAddTenancy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBatchAddTenancy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBatchAddTenancy} obj Optional instance to populate.
     * @return {module:model/APIResponsesBatchAddTenancy} The populated <code>APIResponsesBatchAddTenancy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBatchAddTenancy();

        if (data.hasOwnProperty('batchID')) {
          obj['batchID'] = _ApiClient["default"].convertToType(data['batchID'], 'String');
        }

        if (data.hasOwnProperty('batchName')) {
          obj['batchName'] = _ApiClient["default"].convertToType(data['batchName'], 'String');
        }

        if (data.hasOwnProperty('totalAmountInBatch')) {
          obj['totalAmountInBatch'] = _ApiClient["default"].convertToType(data['totalAmountInBatch'], 'Number');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesBatchAddTenancy;
}();
/**
 * Our unique ID for this batch of tenancies
 * @member {String} batchID
 */


APIResponsesBatchAddTenancy.prototype['batchID'] = undefined;
/**
 * You name for this batch
 * @member {String} batchName
 */

APIResponsesBatchAddTenancy.prototype['batchName'] = undefined;
/**
 * The total monetary value of the batch of tenancies that you need to send to us via bank transfer
 * @member {Number} totalAmountInBatch
 */

APIResponsesBatchAddTenancy.prototype['totalAmountInBatch'] = undefined;
/**
 * The status of the batch. Can be checked out if \"READY_TO_PAY\"
 * @member {String} status
 */

APIResponsesBatchAddTenancy.prototype['status'] = undefined;
var _default = APIResponsesBatchAddTenancy;
exports["default"] = _default;