"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIResponsesErrors = _interopRequireDefault(require("./APIResponsesErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesErrorList model module.
 * @module model/APIResponsesErrorList
 * @version 1.2.2
 */
var APIResponsesErrorList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesErrorList</code>.
   * @alias module:model/APIResponsesErrorList
   */
  function APIResponsesErrorList() {
    _classCallCheck(this, APIResponsesErrorList);

    APIResponsesErrorList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesErrorList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesErrorList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesErrorList} obj Optional instance to populate.
     * @return {module:model/APIResponsesErrorList} The populated <code>APIResponsesErrorList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesErrorList();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_APIResponsesErrors["default"]]);
        }
      }

      return obj;
    }
  }]);

  return APIResponsesErrorList;
}();
/**
 * @member {Array.<module:model/APIResponsesErrors>} errors
 */


APIResponsesErrorList.prototype['errors'] = undefined;
var _default = APIResponsesErrorList;
exports["default"] = _default;