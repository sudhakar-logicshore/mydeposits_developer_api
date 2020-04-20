"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIResponsesBranchDetails = _interopRequireDefault(require("./APIResponsesBranchDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesBranchList model module.
 * @module model/APIResponsesBranchList
 * @version 1.2.2
 */
var APIResponsesBranchList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBranchList</code>.
   * @alias module:model/APIResponsesBranchList
   */
  function APIResponsesBranchList() {
    _classCallCheck(this, APIResponsesBranchList);

    APIResponsesBranchList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBranchList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBranchList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBranchList} obj Optional instance to populate.
     * @return {module:model/APIResponsesBranchList} The populated <code>APIResponsesBranchList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBranchList();

        if (data.hasOwnProperty('branchDetails')) {
          obj['branchDetails'] = _ApiClient["default"].convertToType(data['branchDetails'], [_APIResponsesBranchDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return APIResponsesBranchList;
}();
/**
 * @member {Array.<module:model/APIResponsesBranchDetails>} branchDetails
 */


APIResponsesBranchList.prototype['branchDetails'] = undefined;
var _default = APIResponsesBranchList;
exports["default"] = _default;