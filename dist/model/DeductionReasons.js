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
* Enum class DeductionReasons.
* @enum {}
* @readonly
*/
var DeductionReasons = /*#__PURE__*/function () {
  function DeductionReasons() {
    _classCallCheck(this, DeductionReasons);

    _defineProperty(this, "CLEANING", "CLEANING");

    _defineProperty(this, "GARDEN_MAINTENANCE", "GARDEN_MAINTENANCE");

    _defineProperty(this, "MISSING_ITEMS", "MISSING_ITEMS");

    _defineProperty(this, "REDECORATION", "REDECORATION");

    _defineProperty(this, "RENT_ARREARS", "RENT_ARREARS");

    _defineProperty(this, "REPAIRS", "REPAIRS");

    _defineProperty(this, "UNPAID_BILLS", "UNPAID_BILLS");

    _defineProperty(this, "OTHERS", "OTHERS");
  }

  _createClass(DeductionReasons, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>DeductionReasons</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DeductionReasons} The enum <code>DeductionReasons</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return DeductionReasons;
}();

exports["default"] = DeductionReasons;