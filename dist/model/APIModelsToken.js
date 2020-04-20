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
 * The APIModelsToken model module.
 * @module model/APIModelsToken
 * @version 1.2.2
 */
var APIModelsToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsToken</code>.
   * An object holding information about user info
   * @alias module:model/APIModelsToken
   * @param clientId {String} provided by my deposit
   * @param clientSecret {String} provided by my deposit
   * @param username {String} user name to login
   * @param password {String} user password to validate
   * @param grantType {String} grant type - password
   */
  function APIModelsToken(clientId, clientSecret, username, password, grantType) {
    _classCallCheck(this, APIModelsToken);

    APIModelsToken.initialize(this, clientId, clientSecret, username, password, grantType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsToken, null, [{
    key: "initialize",
    value: function initialize(obj, clientId, clientSecret, username, password, grantType) {
      obj['client_id'] = clientId;
      obj['client_secret'] = clientSecret;
      obj['username'] = username;
      obj['password'] = password;
      obj['grant_type'] = grantType;
    }
    /**
     * Constructs a <code>APIModelsToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsToken} obj Optional instance to populate.
     * @return {module:model/APIModelsToken} The populated <code>APIModelsToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsToken();

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'String');
        }

        if (data.hasOwnProperty('client_secret')) {
          obj['client_secret'] = _ApiClient["default"].convertToType(data['client_secret'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('grant_type')) {
          obj['grant_type'] = _ApiClient["default"].convertToType(data['grant_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIModelsToken;
}();
/**
 * provided by my deposit
 * @member {String} client_id
 */


APIModelsToken.prototype['client_id'] = undefined;
/**
 * provided by my deposit
 * @member {String} client_secret
 */

APIModelsToken.prototype['client_secret'] = undefined;
/**
 * user name to login
 * @member {String} username
 */

APIModelsToken.prototype['username'] = undefined;
/**
 * user password to validate
 * @member {String} password
 */

APIModelsToken.prototype['password'] = undefined;
/**
 * grant type - password
 * @member {String} grant_type
 */

APIModelsToken.prototype['grant_type'] = undefined;
var _default = APIModelsToken;
exports["default"] = _default;