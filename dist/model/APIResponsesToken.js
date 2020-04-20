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
 * The APIResponsesToken model module.
 * @module model/APIResponsesToken
 * @version 1.2.2
 */
var APIResponsesToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesToken</code>.
   * @alias module:model/APIResponsesToken
   */
  function APIResponsesToken() {
    _classCallCheck(this, APIResponsesToken);

    APIResponsesToken.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesToken, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesToken} obj Optional instance to populate.
     * @return {module:model/APIResponsesToken} The populated <code>APIResponsesToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesToken();

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }

        if (data.hasOwnProperty('token_type')) {
          obj['token_type'] = _ApiClient["default"].convertToType(data['token_type'], 'String');
        }

        if (data.hasOwnProperty('expires_in')) {
          obj['expires_in'] = _ApiClient["default"].convertToType(data['expires_in'], 'String');
        }

        if (data.hasOwnProperty('refresh_token')) {
          obj['refresh_token'] = _ApiClient["default"].convertToType(data['refresh_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesToken;
}();
/**
 * The token to use to when submitting a request
 * @member {String} access_token
 */


APIResponsesToken.prototype['access_token'] = undefined;
/**
 * The type of token
 * @member {String} token_type
 */

APIResponsesToken.prototype['token_type'] = undefined;
/**
 * How long until the token expires
 * @member {String} expires_in
 */

APIResponsesToken.prototype['expires_in'] = undefined;
/**
 * Used to gain a new token when the access token expires
 * @member {String} refresh_token
 */

APIResponsesToken.prototype['refresh_token'] = undefined;
var _default = APIResponsesToken;
exports["default"] = _default;