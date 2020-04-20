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
 * The APIResponsesBatch model module.
 * @module model/APIResponsesBatch
 * @version 1.2.2
 */
var APIResponsesBatch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBatch</code>.
   * @alias module:model/APIResponsesBatch
   */
  function APIResponsesBatch() {
    _classCallCheck(this, APIResponsesBatch);

    APIResponsesBatch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBatch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBatch} obj Optional instance to populate.
     * @return {module:model/APIResponsesBatch} The populated <code>APIResponsesBatch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBatch();

        if (data.hasOwnProperty('batchID')) {
          obj['batchID'] = _ApiClient["default"].convertToType(data['batchID'], 'String');
        }

        if (data.hasOwnProperty('batchName')) {
          obj['batchName'] = _ApiClient["default"].convertToType(data['batchName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesBatch;
}();
/**
 * Our unique ID for the new batch
 * @member {String} batchID
 */


APIResponsesBatch.prototype['batchID'] = undefined;
/**
 * Your name for the new batch
 * @member {String} batchName
 */

APIResponsesBatch.prototype['batchName'] = undefined;
var _default = APIResponsesBatch;
exports["default"] = _default;