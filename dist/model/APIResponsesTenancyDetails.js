"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIResponsesInterestedPartyDetails = _interopRequireDefault(require("./APIResponsesInterestedPartyDetails"));

var _APIResponsesJointTenant = _interopRequireDefault(require("./APIResponsesJointTenant"));

var _APIResponsesLandlord = _interopRequireDefault(require("./APIResponsesLandlord"));

var _APIResponsesLeadTenant = _interopRequireDefault(require("./APIResponsesLeadTenant"));

var _APIResponsesProperty = _interopRequireDefault(require("./APIResponsesProperty"));

var _TenancyStatus = _interopRequireDefault(require("./TenancyStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIResponsesTenancyDetails model module.
 * @module model/APIResponsesTenancyDetails
 * @version 1.2.2
 */
var APIResponsesTenancyDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesTenancyDetails</code>.
   * Details of a given tenancy ID
   * @alias module:model/APIResponsesTenancyDetails
   */
  function APIResponsesTenancyDetails() {
    _classCallCheck(this, APIResponsesTenancyDetails);

    APIResponsesTenancyDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesTenancyDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesTenancyDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesTenancyDetails} obj Optional instance to populate.
     * @return {module:model/APIResponsesTenancyDetails} The populated <code>APIResponsesTenancyDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesTenancyDetails();

        if (data.hasOwnProperty('tenancyID')) {
          obj['tenancyID'] = _ApiClient["default"].convertToType(data['tenancyID'], 'String');
        }

        if (data.hasOwnProperty('depositProtectionNumber')) {
          obj['depositProtectionNumber'] = _ApiClient["default"].convertToType(data['depositProtectionNumber'], 'String');
        }

        if (data.hasOwnProperty('thirdPartyReference')) {
          obj['thirdPartyReference'] = _ApiClient["default"].convertToType(data['thirdPartyReference'], 'String');
        }

        if (data.hasOwnProperty('tenancyType')) {
          obj['tenancyType'] = _ApiClient["default"].convertToType(data['tenancyType'], 'String');
        }

        if (data.hasOwnProperty('depositHolder')) {
          obj['depositHolder'] = _ApiClient["default"].convertToType(data['depositHolder'], 'String');
        }

        if (data.hasOwnProperty('depositAmount')) {
          obj['depositAmount'] = _ApiClient["default"].convertToType(data['depositAmount'], 'String');
        }

        if (data.hasOwnProperty('protectedAmount')) {
          obj['protectedAmount'] = _ApiClient["default"].convertToType(data['protectedAmount'], 'String');
        }

        if (data.hasOwnProperty('dateDepositPaid')) {
          obj['dateDepositPaid'] = _ApiClient["default"].convertToType(data['dateDepositPaid'], 'String');
        }

        if (data.hasOwnProperty('tenancyStartDate')) {
          obj['tenancyStartDate'] = _ApiClient["default"].convertToType(data['tenancyStartDate'], 'String');
        }

        if (data.hasOwnProperty('tenancyEndDate')) {
          obj['tenancyEndDate'] = _ApiClient["default"].convertToType(data['tenancyEndDate'], 'String');
        }

        if (data.hasOwnProperty('annualRentalAmount')) {
          obj['annualRentalAmount'] = _ApiClient["default"].convertToType(data['annualRentalAmount'], 'String');
        }

        if (data.hasOwnProperty('landlordRegistrationNumber')) {
          obj['landlordRegistrationNumber'] = _ApiClient["default"].convertToType(data['landlordRegistrationNumber'], 'String');
        }

        if (data.hasOwnProperty('landlord')) {
          obj['landlord'] = _APIResponsesLandlord["default"].constructFromObject(data['landlord']);
        }

        if (data.hasOwnProperty('property')) {
          obj['property'] = _APIResponsesProperty["default"].constructFromObject(data['property']);
        }

        if (data.hasOwnProperty('leadTenant')) {
          obj['leadTenant'] = _APIResponsesLeadTenant["default"].constructFromObject(data['leadTenant']);
        }

        if (data.hasOwnProperty('jointTenants')) {
          obj['jointTenants'] = _ApiClient["default"].convertToType(data['jointTenants'], [_APIResponsesJointTenant["default"]]);
        }

        if (data.hasOwnProperty('interestedParty')) {
          obj['interestedParty'] = _APIResponsesInterestedPartyDetails["default"].constructFromObject(data['interestedParty']);
        }

        if (data.hasOwnProperty('branchID')) {
          obj['branchID'] = _ApiClient["default"].convertToType(data['branchID'], 'String');
        }

        if (data.hasOwnProperty('currentStatus')) {
          obj['currentStatus'] = _TenancyStatus["default"].constructFromObject(data['currentStatus']);
        }
      }

      return obj;
    }
  }]);

  return APIResponsesTenancyDetails;
}();
/**
 * Our unique reference for this tenancy
 * @member {String} tenancyID
 */


APIResponsesTenancyDetails.prototype['tenancyID'] = undefined;
/**
 * Deposit protection number
 * @member {String} depositProtectionNumber
 */

APIResponsesTenancyDetails.prototype['depositProtectionNumber'] = undefined;
/**
 * Your unique reference for this tenancy, if we have been given one
 * @member {String} thirdPartyReference
 */

APIResponsesTenancyDetails.prototype['thirdPartyReference'] = undefined;
/**
 * The type of tenancy this deposit is against
 * @member {String} tenancyType
 */

APIResponsesTenancyDetails.prototype['tenancyType'] = undefined;
/**
 * Insurance Only - Agent / Landlord
 * @member {String} depositHolder
 */

APIResponsesTenancyDetails.prototype['depositHolder'] = undefined;
/**
 * Stated value of the deposit, up to 2 decimal places
 * @member {String} depositAmount
 */

APIResponsesTenancyDetails.prototype['depositAmount'] = undefined;
/**
 * Value of the protected deposit, up to 2 decimal places
 * @member {String} protectedAmount
 */

APIResponsesTenancyDetails.prototype['protectedAmount'] = undefined;
/**
 * The date the landlord/agent received the deposit (dd/MM/yyyy)
 * @member {String} dateDepositPaid
 */

APIResponsesTenancyDetails.prototype['dateDepositPaid'] = undefined;
/**
 * The date the tenancy started (dd/MM/yyyy)
 * @member {String} tenancyStartDate
 */

APIResponsesTenancyDetails.prototype['tenancyStartDate'] = undefined;
/**
 * The date the tenancy ended (dd/MM/yyyy)
 * @member {String} tenancyEndDate
 */

APIResponsesTenancyDetails.prototype['tenancyEndDate'] = undefined;
/**
 * @member {String} annualRentalAmount
 */

APIResponsesTenancyDetails.prototype['annualRentalAmount'] = undefined;
/**
 * Only needed for Scotland Custodial, landlord registration number for local authority that the property resides in
 * @member {String} landlordRegistrationNumber
 */

APIResponsesTenancyDetails.prototype['landlordRegistrationNumber'] = undefined;
/**
 * @member {module:model/APIResponsesLandlord} landlord
 */

APIResponsesTenancyDetails.prototype['landlord'] = undefined;
/**
 * @member {module:model/APIResponsesProperty} property
 */

APIResponsesTenancyDetails.prototype['property'] = undefined;
/**
 * @member {module:model/APIResponsesLeadTenant} leadTenant
 */

APIResponsesTenancyDetails.prototype['leadTenant'] = undefined;
/**
 * @member {Array.<module:model/APIResponsesJointTenant>} jointTenants
 */

APIResponsesTenancyDetails.prototype['jointTenants'] = undefined;
/**
 * @member {module:model/APIResponsesInterestedPartyDetails} interestedParty
 */

APIResponsesTenancyDetails.prototype['interestedParty'] = undefined;
/**
 * @member {String} branchID
 */

APIResponsesTenancyDetails.prototype['branchID'] = undefined;
/**
 * @member {module:model/TenancyStatus} currentStatus
 */

APIResponsesTenancyDetails.prototype['currentStatus'] = undefined;
var _default = APIResponsesTenancyDetails;
exports["default"] = _default;