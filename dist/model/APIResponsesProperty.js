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
 * The APIResponsesProperty model module.
 * @module model/APIResponsesProperty
 * @version 1.2.2
 */
var APIResponsesProperty = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesProperty</code>.
   * Property response object
   * @alias module:model/APIResponsesProperty
   */
  function APIResponsesProperty() {
    _classCallCheck(this, APIResponsesProperty);

    APIResponsesProperty.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesProperty, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesProperty} obj Optional instance to populate.
     * @return {module:model/APIResponsesProperty} The populated <code>APIResponsesProperty</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesProperty();

        if (data.hasOwnProperty('propertyID')) {
          obj['propertyID'] = _ApiClient["default"].convertToType(data['propertyID'], 'String');
        }

        if (data.hasOwnProperty('propertyReference')) {
          obj['propertyReference'] = _ApiClient["default"].convertToType(data['propertyReference'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesProperty;
}();
/**
 * The mydeposits property ID
 * @member {String} propertyID
 */


APIResponsesProperty.prototype['propertyID'] = undefined;
/**
 * Your unique third party reference, if we have been given one
 * @member {String} propertyReference
 */

APIResponsesProperty.prototype['propertyReference'] = undefined;
var _default = APIResponsesProperty;
exports["default"] = _default;