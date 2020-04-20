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
 * The APIModelsBatch model module.
 * @module model/APIModelsBatch
 * @version 1.2.2
 */
var APIModelsBatch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsBatch</code>.
   * Details of the new requested batch
   * @alias module:model/APIModelsBatch
   * @param batchName {String} Must be 50 characters or less
   */
  function APIModelsBatch(batchName) {
    _classCallCheck(this, APIModelsBatch);

    APIModelsBatch.initialize(this, batchName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsBatch, null, [{
    key: "initialize",
    value: function initialize(obj, batchName) {
      obj['batchName'] = batchName;
    }
    /**
     * Constructs a <code>APIModelsBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsBatch} obj Optional instance to populate.
     * @return {module:model/APIModelsBatch} The populated <code>APIModelsBatch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsBatch();

        if (data.hasOwnProperty('batchName')) {
          obj['batchName'] = _ApiClient["default"].convertToType(data['batchName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsBatch;
}();
/**
 * Must be 50 characters or less
 * @member {String} batchName
 */


APIModelsBatch.prototype['batchName'] = undefined;
var _default = APIModelsBatch;
exports["default"] = _default;