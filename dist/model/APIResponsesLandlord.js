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
 * The APIResponsesLandlord model module.
 * @module model/APIResponsesLandlord
 * @version 1.2.2
 */
var APIResponsesLandlord = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesLandlord</code>.
   * @alias module:model/APIResponsesLandlord
   */
  function APIResponsesLandlord() {
    _classCallCheck(this, APIResponsesLandlord);

    APIResponsesLandlord.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesLandlord, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesLandlord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesLandlord} obj Optional instance to populate.
     * @return {module:model/APIResponsesLandlord} The populated <code>APIResponsesLandlord</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesLandlord();

        if (data.hasOwnProperty('landlordID')) {
          obj['landlordID'] = _ApiClient["default"].convertToType(data['landlordID'], 'String');
        }

        if (data.hasOwnProperty('landlordReference')) {
          obj['landlordReference'] = _ApiClient["default"].convertToType(data['landlordReference'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesLandlord;
}();
/**
 * mydeposits landlord ID of the new landlord
 * @member {String} landlordID
 */


APIResponsesLandlord.prototype['landlordID'] = undefined;
/**
 * Your unique third party reference, if we have been given one
 * @member {String} landlordReference
 */

APIResponsesLandlord.prototype['landlordReference'] = undefined;
var _default = APIResponsesLandlord;
exports["default"] = _default;