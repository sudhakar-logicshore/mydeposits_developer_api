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
* Enum class Country.
* @enum {}
* @readonly
*/
var Country = /*#__PURE__*/function () {
  function Country() {
    _classCallCheck(this, Country);

    _defineProperty(this, "AD", "AD");

    _defineProperty(this, "AE", "AE");

    _defineProperty(this, "AF", "AF");

    _defineProperty(this, "AG", "AG");

    _defineProperty(this, "AI", "AI");

    _defineProperty(this, "AL", "AL");

    _defineProperty(this, "AM", "AM");

    _defineProperty(this, "AN", "AN");

    _defineProperty(this, "AO", "AO");

    _defineProperty(this, "AQ", "AQ");

    _defineProperty(this, "AR", "AR");

    _defineProperty(this, "AS", "AS");

    _defineProperty(this, "AT", "AT");

    _defineProperty(this, "AU", "AU");

    _defineProperty(this, "AW", "AW");

    _defineProperty(this, "AZ", "AZ");

    _defineProperty(this, "BA", "BA");

    _defineProperty(this, "BB", "BB");

    _defineProperty(this, "BD", "BD");

    _defineProperty(this, "BE", "BE");

    _defineProperty(this, "BF", "BF");

    _defineProperty(this, "BG", "BG");

    _defineProperty(this, "BH", "BH");

    _defineProperty(this, "BI", "BI");

    _defineProperty(this, "BJ", "BJ");

    _defineProperty(this, "BM", "BM");

    _defineProperty(this, "BN", "BN");

    _defineProperty(this, "BO", "BO");

    _defineProperty(this, "BR", "BR");

    _defineProperty(this, "BS", "BS");

    _defineProperty(this, "BT", "BT");

    _defineProperty(this, "BV", "BV");

    _defineProperty(this, "BW", "BW");

    _defineProperty(this, "BY", "BY");

    _defineProperty(this, "BZ", "BZ");

    _defineProperty(this, "CA", "CA");

    _defineProperty(this, "CC", "CC");

    _defineProperty(this, "CD", "CD");

    _defineProperty(this, "CF", "CF");

    _defineProperty(this, "CG", "CG");

    _defineProperty(this, "CH", "CH");

    _defineProperty(this, "CI", "CI");

    _defineProperty(this, "CK", "CK");

    _defineProperty(this, "CL", "CL");

    _defineProperty(this, "CM", "CM");

    _defineProperty(this, "CN", "CN");

    _defineProperty(this, "CO", "CO");

    _defineProperty(this, "CR", "CR");

    _defineProperty(this, "CU", "CU");

    _defineProperty(this, "CV", "CV");

    _defineProperty(this, "CX", "CX");

    _defineProperty(this, "CY", "CY");

    _defineProperty(this, "CZ", "CZ");

    _defineProperty(this, "DE", "DE");

    _defineProperty(this, "DJ", "DJ");

    _defineProperty(this, "DK", "DK");

    _defineProperty(this, "DM", "DM");

    _defineProperty(this, "DO", "DO");

    _defineProperty(this, "DZ", "DZ");

    _defineProperty(this, "EC", "EC");

    _defineProperty(this, "EE", "EE");

    _defineProperty(this, "EG", "EG");

    _defineProperty(this, "EH", "EH");

    _defineProperty(this, "ES", "ES");

    _defineProperty(this, "ET", "ET");

    _defineProperty(this, "FI", "FI");

    _defineProperty(this, "FJ", "FJ");

    _defineProperty(this, "FK", "FK");

    _defineProperty(this, "FM", "FM");

    _defineProperty(this, "FO", "FO");

    _defineProperty(this, "FR", "FR");

    _defineProperty(this, "GA", "GA");

    _defineProperty(this, "GB", "GB");

    _defineProperty(this, "GD", "GD");

    _defineProperty(this, "GE", "GE");

    _defineProperty(this, "GF", "GF");

    _defineProperty(this, "GG", "GG");

    _defineProperty(this, "GH", "GH");

    _defineProperty(this, "GI", "GI");

    _defineProperty(this, "GL", "GL");

    _defineProperty(this, "GM", "GM");

    _defineProperty(this, "GN", "GN");

    _defineProperty(this, "GP", "GP");

    _defineProperty(this, "GQ", "GQ");

    _defineProperty(this, "GR", "GR");

    _defineProperty(this, "GT", "GT");

    _defineProperty(this, "GU", "GU");

    _defineProperty(this, "GW", "GW");

    _defineProperty(this, "GY", "GY");

    _defineProperty(this, "HK", "HK");

    _defineProperty(this, "HM", "HM");

    _defineProperty(this, "HN", "HN");

    _defineProperty(this, "HR", "HR");

    _defineProperty(this, "HT", "HT");

    _defineProperty(this, "HU", "HU");

    _defineProperty(this, "ID", "ID");

    _defineProperty(this, "IE", "IE");

    _defineProperty(this, "IL", "IL");

    _defineProperty(this, "IM", "IM");

    _defineProperty(this, "IN", "IN");

    _defineProperty(this, "IO", "IO");

    _defineProperty(this, "IQ", "IQ");

    _defineProperty(this, "IR", "IR");

    _defineProperty(this, "IS", "IS");

    _defineProperty(this, "IT", "IT");

    _defineProperty(this, "JE", "JE");

    _defineProperty(this, "JM", "JM");

    _defineProperty(this, "JO", "JO");

    _defineProperty(this, "JP", "JP");

    _defineProperty(this, "KE", "KE");

    _defineProperty(this, "KG", "KG");

    _defineProperty(this, "KH", "KH");

    _defineProperty(this, "KI", "KI");

    _defineProperty(this, "KM", "KM");

    _defineProperty(this, "KN", "KN");

    _defineProperty(this, "KP", "KP");

    _defineProperty(this, "KR", "KR");

    _defineProperty(this, "KS", "KS");

    _defineProperty(this, "KW", "KW");

    _defineProperty(this, "KY", "KY");

    _defineProperty(this, "KZ", "KZ");

    _defineProperty(this, "LA", "LA");

    _defineProperty(this, "LB", "LB");

    _defineProperty(this, "LC", "LC");

    _defineProperty(this, "LI", "LI");

    _defineProperty(this, "LK", "LK");

    _defineProperty(this, "LR", "LR");

    _defineProperty(this, "LS", "LS");

    _defineProperty(this, "LT", "LT");

    _defineProperty(this, "LU", "LU");

    _defineProperty(this, "LV", "LV");

    _defineProperty(this, "LY", "LY");

    _defineProperty(this, "MA", "MA");

    _defineProperty(this, "MC", "MC");

    _defineProperty(this, "MD", "MD");

    _defineProperty(this, "ME", "ME");

    _defineProperty(this, "MG", "MG");

    _defineProperty(this, "MH", "MH");

    _defineProperty(this, "MK", "MK");

    _defineProperty(this, "ML", "ML");

    _defineProperty(this, "MM", "MM");

    _defineProperty(this, "MN", "MN");

    _defineProperty(this, "MO", "MO");

    _defineProperty(this, "MP", "MP");

    _defineProperty(this, "MQ", "MQ");

    _defineProperty(this, "MR", "MR");

    _defineProperty(this, "MS", "MS");

    _defineProperty(this, "MT", "MT");

    _defineProperty(this, "MU", "MU");

    _defineProperty(this, "MV", "MV");

    _defineProperty(this, "MW", "MW");

    _defineProperty(this, "MX", "MX");

    _defineProperty(this, "MY", "MY");

    _defineProperty(this, "MZ", "MZ");

    _defineProperty(this, "NA", "NA");

    _defineProperty(this, "NC", "NC");

    _defineProperty(this, "NE", "NE");

    _defineProperty(this, "NF", "NF");

    _defineProperty(this, "NG", "NG");

    _defineProperty(this, "NI", "NI");

    _defineProperty(this, "NL", "NL");

    _defineProperty(this, "false", "false");

    _defineProperty(this, "NP", "NP");

    _defineProperty(this, "NR", "NR");

    _defineProperty(this, "NT", "NT");

    _defineProperty(this, "NU", "NU");

    _defineProperty(this, "NZ", "NZ");

    _defineProperty(this, "OM", "OM");

    _defineProperty(this, "PA", "PA");

    _defineProperty(this, "PE", "PE");

    _defineProperty(this, "PF", "PF");

    _defineProperty(this, "PG", "PG");

    _defineProperty(this, "PH", "PH");

    _defineProperty(this, "PK", "PK");

    _defineProperty(this, "PL", "PL");

    _defineProperty(this, "PM", "PM");

    _defineProperty(this, "PN", "PN");

    _defineProperty(this, "PR", "PR");

    _defineProperty(this, "PS", "PS");

    _defineProperty(this, "PT", "PT");

    _defineProperty(this, "PW", "PW");

    _defineProperty(this, "PY", "PY");

    _defineProperty(this, "PZ", "PZ");

    _defineProperty(this, "QA", "QA");

    _defineProperty(this, "RE", "RE");

    _defineProperty(this, "RO", "RO");

    _defineProperty(this, "RS", "RS");

    _defineProperty(this, "RU", "RU");

    _defineProperty(this, "RW", "RW");

    _defineProperty(this, "SA", "SA");

    _defineProperty(this, "SB", "SB");

    _defineProperty(this, "SC", "SC");

    _defineProperty(this, "SD", "SD");

    _defineProperty(this, "SE", "SE");

    _defineProperty(this, "SG", "SG");

    _defineProperty(this, "SH", "SH");

    _defineProperty(this, "SI", "SI");

    _defineProperty(this, "SJ", "SJ");

    _defineProperty(this, "SK", "SK");

    _defineProperty(this, "SL", "SL");

    _defineProperty(this, "SM", "SM");

    _defineProperty(this, "SN", "SN");

    _defineProperty(this, "SO", "SO");

    _defineProperty(this, "SR", "SR");

    _defineProperty(this, "ST", "ST");

    _defineProperty(this, "SV", "SV");

    _defineProperty(this, "SY", "SY");

    _defineProperty(this, "SZ", "SZ");

    _defineProperty(this, "TC", "TC");

    _defineProperty(this, "TD", "TD");

    _defineProperty(this, "TF", "TF");

    _defineProperty(this, "TG", "TG");

    _defineProperty(this, "TH", "TH");

    _defineProperty(this, "TJ", "TJ");

    _defineProperty(this, "TK", "TK");

    _defineProperty(this, "TM", "TM");

    _defineProperty(this, "TN", "TN");

    _defineProperty(this, "TO", "TO");

    _defineProperty(this, "TP", "TP");

    _defineProperty(this, "TR", "TR");

    _defineProperty(this, "TT", "TT");

    _defineProperty(this, "TV", "TV");

    _defineProperty(this, "TW", "TW");

    _defineProperty(this, "TZ", "TZ");

    _defineProperty(this, "UA", "UA");

    _defineProperty(this, "UG", "UG");

    _defineProperty(this, "UM", "UM");

    _defineProperty(this, "US", "US");

    _defineProperty(this, "UY", "UY");

    _defineProperty(this, "UZ", "UZ");

    _defineProperty(this, "VA", "VA");

    _defineProperty(this, "VC", "VC");

    _defineProperty(this, "VE", "VE");

    _defineProperty(this, "VG", "VG");

    _defineProperty(this, "VI", "VI");

    _defineProperty(this, "VN", "VN");

    _defineProperty(this, "VU", "VU");

    _defineProperty(this, "WF", "WF");

    _defineProperty(this, "WS", "WS");

    _defineProperty(this, "YE", "YE");

    _defineProperty(this, "YU", "YU");

    _defineProperty(this, "ZA", "ZA");

    _defineProperty(this, "ZM", "ZM");

    _defineProperty(this, "ZR", "ZR");

    _defineProperty(this, "ZW", "ZW");
  }

  _createClass(Country, null, [{
    key: "constructFromObject",

    /**
    * Returns a <code>Country</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Country} The enum <code>Country</code> value.
    */
    value: function constructFromObject(object) {
      return object;
    }
  }]);

  return Country;
}();

exports["default"] = Country;