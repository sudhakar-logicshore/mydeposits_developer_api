"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIResponsesBatchTenancy = _interopRequireDefault(require("./APIResponsesBatchTenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesBatchDetails model module.
 * @module model/APIResponsesBatchDetails
 * @version 1.2.2
 */
var APIResponsesBatchDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBatchDetails</code>.
   * Details of a given batch ID
   * @alias module:model/APIResponsesBatchDetails
   */
  function APIResponsesBatchDetails() {
    _classCallCheck(this, APIResponsesBatchDetails);

    APIResponsesBatchDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBatchDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBatchDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBatchDetails} obj Optional instance to populate.
     * @return {module:model/APIResponsesBatchDetails} The populated <code>APIResponsesBatchDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBatchDetails();

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

        if (data.hasOwnProperty('tenancies')) {
          obj['tenancies'] = _ApiClient["default"].convertToType(data['tenancies'], [_APIResponsesBatchTenancy["default"]]);
        }
      }

      return obj;
    }
  }]);

  return APIResponsesBatchDetails;
}();
/**
 * Our unique reference for this batch
 * @member {String} batchID
 */


APIResponsesBatchDetails.prototype['batchID'] = undefined;
/**
 * The name of the batch
 * @member {String} batchName
 */

APIResponsesBatchDetails.prototype['batchName'] = undefined;
/**
 * The current payment balance held within the batch
 * @member {Number} totalAmountInBatch
 */

APIResponsesBatchDetails.prototype['totalAmountInBatch'] = undefined;
/**
 * The status of the batch
 * @member {String} status
 */

APIResponsesBatchDetails.prototype['status'] = undefined;
/**
 * @member {Array.<module:model/APIResponsesBatchTenancy>} tenancies
 */

APIResponsesBatchDetails.prototype['tenancies'] = undefined;
var _default = APIResponsesBatchDetails;
exports["default"] = _default;