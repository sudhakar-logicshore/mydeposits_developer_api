"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIResponsesBatchDetails = _interopRequireDefault(require("./APIResponsesBatchDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesBatchList model module.
 * @module model/APIResponsesBatchList
 * @version 1.2.2
 */
var APIResponsesBatchList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBatchList</code>.
   * @alias module:model/APIResponsesBatchList
   */
  function APIResponsesBatchList() {
    _classCallCheck(this, APIResponsesBatchList);

    APIResponsesBatchList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBatchList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBatchList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBatchList} obj Optional instance to populate.
     * @return {module:model/APIResponsesBatchList} The populated <code>APIResponsesBatchList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBatchList();

        if (data.hasOwnProperty('batches')) {
          obj['batches'] = _ApiClient["default"].convertToType(data['batches'], [_APIResponsesBatchDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return APIResponsesBatchList;
}();
/**
 * @member {Array.<module:model/APIResponsesBatchDetails>} batches
 */


APIResponsesBatchList.prototype['batches'] = undefined;
var _default = APIResponsesBatchList;
exports["default"] = _default;