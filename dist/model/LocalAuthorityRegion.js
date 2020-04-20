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
* Enum class LocalAuthorityRegion.
* @enum {}
* @readonly
*/
var LocalAuthorityRegion = /*#__PURE__*/function () {
  function LocalAuthorityRegion() {
    _classCallCheck(this, LocalAuthorityRegion);

    _defineProperty(this, "AberdeenCity,", "AberdeenCity,");

    _defineProperty(this, "Aberdeenshire,", "Aberdeenshire,");

    _defineProperty(this, "Angus,", "Angus,");

    _defineProperty(this, "ArgyllAndBute,", "ArgyllAndBute,");

    _defineProperty(this, "Clackmannanshire,", "Clackmannanshire,");

    _defineProperty(this, "DumfriesAndGalloway,", "DumfriesAndGalloway,");

    _defineProperty(this, "DundeeCity,", "DundeeCity,");

    _defineProperty(this, "EastAyrshire,", "EastAyrshire,");

    _defineProperty(this, "EastDunbartonshire,", "EastDunbartonshire,");

    _defineProperty(this, "EastLothian,", "EastLothian,");

    _defineProperty(this, "EastRenfrewshire,", "EastRenfrewshire,");

    _defineProperty(this, "Edinburgh,", "Edinburgh,");

    _defineProperty(this, "EileanSiar,", "EileanSiar,");

    _defineProperty(this, "Falkirk,", "Falkirk,");

    _defineProperty(this, "Fife,", "Fife,");

    _defineProperty(this, "GlasgowCity,", "GlasgowCity,");

    _defineProperty(this, "Highland,", "Highland,");

    _defineProperty(this, "Inverclyde,", "Inverclyde,");

    _defineProperty(this, "Midlothian,", "Midlothian,");

    _defineProperty(this, "Moray,", "Moray,");

    _defineProperty(this, "NorthAyrshire,", "NorthAyrshire,");

    _defineProperty(this, "NorthLanarkshire,", "NorthLanarkshire,");

    _defineProperty(this, "OrkneyIslands,", "OrkneyIslands,");

    _defineProperty(this, "PerthAndKinross,", "PerthAndKinross,");

    _defineProperty(this, "Renfrewshire,", "Renfrewshire,");

    _defineProperty(this, "ScottishBorders,", "ScottishBorders,");

    _defineProperty(this, "ShetlandIslands,", "ShetlandIslands,");

    _defineProperty(this, "SouthAyrshire,", "SouthAyrshire,");

    _defineProperty(this, "SouthLanarkshire,", "SouthLanarkshire,");

    _defineProperty(this, "Stirling,", "Stirling,");

    _defineProperty(this, "WestDunbartonshire,", "WestDunbartonshire,");

    _defineProperty(this, "WestLothian", "WestLothian");
  }

  _createClass(LocalAuthorityRegion, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>LocalAuthorityRegion</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/LocalAuthorityRegion} The enum <code>LocalAuthorityRegion</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return LocalAuthorityRegion;
}();

exports["default"] = LocalAuthorityRegion;