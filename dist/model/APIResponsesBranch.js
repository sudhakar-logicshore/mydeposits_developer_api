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
 * The APIResponsesBranch model module.
 * @module model/APIResponsesBranch
 * @version 1.2.2
 */
var APIResponsesBranch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBranch</code>.
   * Summary of newly created Branch object
   * @alias module:model/APIResponsesBranch
   */
  function APIResponsesBranch() {
    _classCallCheck(this, APIResponsesBranch);

    APIResponsesBranch.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBranch, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBranch} obj Optional instance to populate.
     * @return {module:model/APIResponsesBranch} The populated <code>APIResponsesBranch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBranch();

        if (data.hasOwnProperty('branchID')) {
          obj['branchID'] = _ApiClient["default"].convertToType(data['branchID'], 'String');
        }

        if (data.hasOwnProperty('thirdPartyReference')) {
          obj['thirdPartyReference'] = _ApiClient["default"].convertToType(data['thirdPartyReference'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesBranch;
}();
/**
 * The unique ID of the branch record
 * @member {String} branchID
 */


APIResponsesBranch.prototype['branchID'] = undefined;
/**
 * @member {String} thirdPartyReference
 */

APIResponsesBranch.prototype['thirdPartyReference'] = undefined;
var _default = APIResponsesBranch;
exports["default"] = _default;