"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Country = _interopRequireDefault(require("./Country"));

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesInterestedPartyDetails model module.
 * @module model/APIResponsesInterestedPartyDetails
 * @version 1.2.2
 */
var APIResponsesInterestedPartyDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesInterestedPartyDetails</code>.
   * @alias module:model/APIResponsesInterestedPartyDetails
   */
  function APIResponsesInterestedPartyDetails() {
    _classCallCheck(this, APIResponsesInterestedPartyDetails);

    APIResponsesInterestedPartyDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesInterestedPartyDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesInterestedPartyDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesInterestedPartyDetails} obj Optional instance to populate.
     * @return {module:model/APIResponsesInterestedPartyDetails} The populated <code>APIResponsesInterestedPartyDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesInterestedPartyDetails();

        if (data.hasOwnProperty('interestedPartyID')) {
          obj['interestedPartyID'] = _ApiClient["default"].convertToType(data['interestedPartyID'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _Title["default"].constructFromObject(data['title']);
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
        }

        if (data.hasOwnProperty('companyName')) {
          obj['companyName'] = _ApiClient["default"].convertToType(data['companyName'], 'String');
        }

        if (data.hasOwnProperty('addressLine1')) {
          obj['addressLine1'] = _ApiClient["default"].convertToType(data['addressLine1'], 'String');
        }

        if (data.hasOwnProperty('addressLine2')) {
          obj['addressLine2'] = _ApiClient["default"].convertToType(data['addressLine2'], 'String');
        }

        if (data.hasOwnProperty('addressLine3')) {
          obj['addressLine3'] = _ApiClient["default"].convertToType(data['addressLine3'], 'String');
        }

        if (data.hasOwnProperty('addressLine4')) {
          obj['addressLine4'] = _ApiClient["default"].convertToType(data['addressLine4'], 'String');
        }

        if (data.hasOwnProperty('postcode')) {
          obj['postcode'] = _ApiClient["default"].convertToType(data['postcode'], 'String');
        }

        if (data.hasOwnProperty('countryCode')) {
          obj['countryCode'] = _Country["default"].constructFromObject(data['countryCode']);
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('mobileTelephone')) {
          obj['mobileTelephone'] = _ApiClient["default"].convertToType(data['mobileTelephone'], 'String');
        }

        if (data.hasOwnProperty('workTelephone')) {
          obj['workTelephone'] = _ApiClient["default"].convertToType(data['workTelephone'], 'String');
        }

        if (data.hasOwnProperty('homeTelephone')) {
          obj['homeTelephone'] = _ApiClient["default"].convertToType(data['homeTelephone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesInterestedPartyDetails;
}();
/**
 * @member {String} interestedPartyID
 */


APIResponsesInterestedPartyDetails.prototype['interestedPartyID'] = undefined;
/**
 * @member {module:model/Title} title
 */

APIResponsesInterestedPartyDetails.prototype['title'] = undefined;
/**
 * @member {String} firstName
 */

APIResponsesInterestedPartyDetails.prototype['firstName'] = undefined;
/**
 * @member {String} lastName
 */

APIResponsesInterestedPartyDetails.prototype['lastName'] = undefined;
/**
 * @member {String} companyName
 */

APIResponsesInterestedPartyDetails.prototype['companyName'] = undefined;
/**
 * @member {String} addressLine1
 */

APIResponsesInterestedPartyDetails.prototype['addressLine1'] = undefined;
/**
 * @member {String} addressLine2
 */

APIResponsesInterestedPartyDetails.prototype['addressLine2'] = undefined;
/**
 * @member {String} addressLine3
 */

APIResponsesInterestedPartyDetails.prototype['addressLine3'] = undefined;
/**
 * @member {String} addressLine4
 */

APIResponsesInterestedPartyDetails.prototype['addressLine4'] = undefined;
/**
 * @member {String} postcode
 */

APIResponsesInterestedPartyDetails.prototype['postcode'] = undefined;
/**
 * @member {module:model/Country} countryCode
 */

APIResponsesInterestedPartyDetails.prototype['countryCode'] = undefined;
/**
 * @member {String} emailAddress
 */

APIResponsesInterestedPartyDetails.prototype['emailAddress'] = undefined;
/**
 * @member {String} mobileTelephone
 */

APIResponsesInterestedPartyDetails.prototype['mobileTelephone'] = undefined;
/**
 * @member {String} workTelephone
 */

APIResponsesInterestedPartyDetails.prototype['workTelephone'] = undefined;
/**
 * @member {String} homeTelephone
 */

APIResponsesInterestedPartyDetails.prototype['homeTelephone'] = undefined;
var _default = APIResponsesInterestedPartyDetails;
exports["default"] = _default;