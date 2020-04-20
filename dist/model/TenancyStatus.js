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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class TenancyStatus.
* @enum {}
* @readonly
*/
var TenancyStatus = /*#__PURE__*/function () {
  function TenancyStatus() {
    _classCallCheck(this, TenancyStatus);

    _defineProperty(this, "registered", "registered");

    _defineProperty(this, "awaiting payment", "awaiting payment");

    _defineProperty(this, "protected awaiting payment (insurance only)", "protected awaiting payment (insurance only)");

    _defineProperty(this, "protected", "protected");

    _defineProperty(this, "release initiated (custodial only)", "release initiated (custodial only)");

    _defineProperty(this, "unprotected", "unprotected");

    _defineProperty(this, "release in dispute", "release in dispute");

    _defineProperty(this, "release in court", "release in court");

    _defineProperty(this, "cancelled", "cancelled");

    _defineProperty(this, "closed", "closed");

    _defineProperty(this, "cheque bounced", "cheque bounced");
  }

  _createClass(TenancyStatus, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>TenancyStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TenancyStatus} The enum <code>TenancyStatus</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return TenancyStatus;
}();

exports["default"] = TenancyStatus;