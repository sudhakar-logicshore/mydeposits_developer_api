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
 * The APIModelsBatchAddTenancy model module.
 * @module model/APIModelsBatchAddTenancy
 * @version 1.2.2
 */
var APIModelsBatchAddTenancy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsBatchAddTenancy</code>.
   * Details of which tenancy to add to a given batch
   * @alias module:model/APIModelsBatchAddTenancy
   * @param tenancyID {String} Must be 50 characters or less
   */
  function APIModelsBatchAddTenancy(tenancyID) {
    _classCallCheck(this, APIModelsBatchAddTenancy);

    APIModelsBatchAddTenancy.initialize(this, tenancyID);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsBatchAddTenancy, null, [{
    key: "initialize",
    value: function initialize(obj, tenancyID) {
      obj['tenancyID'] = tenancyID;
    }
    /**
     * Constructs a <code>APIModelsBatchAddTenancy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsBatchAddTenancy} obj Optional instance to populate.
     * @return {module:model/APIModelsBatchAddTenancy} The populated <code>APIModelsBatchAddTenancy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsBatchAddTenancy();

        if (data.hasOwnProperty('tenancyID')) {
          obj['tenancyID'] = _ApiClient["default"].convertToType(data['tenancyID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsBatchAddTenancy;
}();
/**
 * Must be 50 characters or less
 * @member {String} tenancyID
 */


APIModelsBatchAddTenancy.prototype['tenancyID'] = undefined;
var _default = APIModelsBatchAddTenancy;
exports["default"] = _default;