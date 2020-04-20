"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _APIModelsInterestedParty = _interopRequireDefault(require("./APIModelsInterestedParty"));

var _APIModelsJointTenant = _interopRequireDefault(require("./APIModelsJointTenant"));

var _APIModelsTenant = _interopRequireDefault(require("./APIModelsTenant"));

var _TenancyType = _interopRequireDefault(require("./TenancyType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The APIModelsTenancy model module.
 * @module model/APIModelsTenancy
 * @version 1.2.2
 */
var APIModelsTenancy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsTenancy</code>.
   * Tenancy model used to register a new tenancy deposit
   * @alias module:model/APIModelsTenancy
   * @param depositHolder {String} Agent / Landlord (required for Insurance only)
   * @param depositAmount {String} Value of the deposit, up to 2 decimal places<br>Maximum value for Insurance: 16666.67 Maximum value for Scotland: 99999.00 
   * @param dateDepositPaid {String} The date that the tenant paid the deposit (dd/MM/yyyy)
   * @param tenancyStartDate {String} The start date of the tenancy (dd/MM/yyyy)
   * @param tenancyEndDate {String} The end date of the tenancy, must be after the start date (dd/MM/yyyy)
   * @param tenancyType {module:model/TenancyType} 
   * @param annualRentalAmount {String} Manadtory for Insurance and Custodial. The annual rental amount of the tenancy in pounds
   * @param landlordID {String} The mydeposits landlord ID for landlord owning the property
   * @param propertyID {String} The mydeposits ID of the property this tenancy refers to
   * @param leadTenant {module:model/APIModelsTenant} 
   */
  function APIModelsTenancy(depositHolder, depositAmount, dateDepositPaid, tenancyStartDate, tenancyEndDate, tenancyType, annualRentalAmount, landlordID, propertyID, leadTenant) {
    _classCallCheck(this, APIModelsTenancy);

    APIModelsTenancy.initialize(this, depositHolder, depositAmount, dateDepositPaid, tenancyStartDate, tenancyEndDate, tenancyType, annualRentalAmount, landlordID, propertyID, leadTenant);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsTenancy, null, [{
    key: "initialize",
    value: function initialize(obj, depositHolder, depositAmount, dateDepositPaid, tenancyStartDate, tenancyEndDate, tenancyType, annualRentalAmount, landlordID, propertyID, leadTenant) {
      obj['depositHolder'] = depositHolder;
      obj['depositAmount'] = depositAmount;
      obj['dateDepositPaid'] = dateDepositPaid;
      obj['tenancyStartDate'] = tenancyStartDate;
      obj['tenancyEndDate'] = tenancyEndDate;
      obj['tenancyType'] = tenancyType;
      obj['annualRentalAmount'] = annualRentalAmount;
      obj['landlordID'] = landlordID;
      obj['propertyID'] = propertyID;
      obj['leadTenant'] = leadTenant;
    }
    /**
     * Constructs a <code>APIModelsTenancy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsTenancy} obj Optional instance to populate.
     * @return {module:model/APIModelsTenancy} The populated <code>APIModelsTenancy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsTenancy();

        if (data.hasOwnProperty('thirdPartyReference')) {
          obj['thirdPartyReference'] = _ApiClient["default"].convertToType(data['thirdPartyReference'], 'String');
        }

        if (data.hasOwnProperty('branchID')) {
          obj['branchID'] = _ApiClient["default"].convertToType(data['branchID'], 'String');
        }

        if (data.hasOwnProperty('depositHolder')) {
          obj['depositHolder'] = _ApiClient["default"].convertToType(data['depositHolder'], 'String');
        }

        if (data.hasOwnProperty('depositAmount')) {
          obj['depositAmount'] = _ApiClient["default"].convertToType(data['depositAmount'], 'String');
        }

        if (data.hasOwnProperty('depositCapOverride')) {
          obj['depositCapOverride'] = _ApiClient["default"].convertToType(data['depositCapOverride'], 'String');
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

        if (data.hasOwnProperty('tenancyType')) {
          obj['tenancyType'] = _TenancyType["default"].constructFromObject(data['tenancyType']);
        }

        if (data.hasOwnProperty('annualRentalAmount')) {
          obj['annualRentalAmount'] = _ApiClient["default"].convertToType(data['annualRentalAmount'], 'String');
        }

        if (data.hasOwnProperty('landlordID')) {
          obj['landlordID'] = _ApiClient["default"].convertToType(data['landlordID'], 'String');
        }

        if (data.hasOwnProperty('landlordRegistrationNumber')) {
          obj['landlordRegistrationNumber'] = _ApiClient["default"].convertToType(data['landlordRegistrationNumber'], 'String');
        }

        if (data.hasOwnProperty('propertyID')) {
          obj['propertyID'] = _ApiClient["default"].convertToType(data['propertyID'], 'String');
        }

        if (data.hasOwnProperty('leadTenant')) {
          obj['leadTenant'] = _APIModelsTenant["default"].constructFromObject(data['leadTenant']);
        }

        if (data.hasOwnProperty('jointTenants')) {
          obj['jointTenants'] = _ApiClient["default"].convertToType(data['jointTenants'], [_APIModelsJointTenant["default"]]);
        }

        if (data.hasOwnProperty('interestedParty')) {
          obj['interestedParty'] = _APIModelsInterestedParty["default"].constructFromObject(data['interestedParty']);
        }
      }

      return obj;
    }
  }]);

  return APIModelsTenancy;
}();
/**
 * Your reference for this tenancy. This should be unique across the member's account. Must be 40 characters or less
 * @member {String} thirdPartyReference
 */


APIModelsTenancy.prototype['thirdPartyReference'] = undefined;
/**
 * The mydeposits ID for the agent's branch that the landlord belongs to Only needed for agent accounts 
 * @member {String} branchID
 */

APIModelsTenancy.prototype['branchID'] = undefined;
/**
 * Agent / Landlord (required for Insurance only)
 * @member {String} depositHolder
 */

APIModelsTenancy.prototype['depositHolder'] = undefined;
/**
 * Value of the deposit, up to 2 decimal places<br>Maximum value for Insurance: 16666.67 Maximum value for Scotland: 99999.00 
 * @member {String} depositAmount
 */

APIModelsTenancy.prototype['depositAmount'] = undefined;
/**
 * Allow the member to override the 5 week deposit cap limit for the stated annual rent and deposit amount 'true' if override is needed, otherwise omit from request 
 * @member {String} depositCapOverride
 */

APIModelsTenancy.prototype['depositCapOverride'] = undefined;
/**
 * The date that the tenant paid the deposit (dd/MM/yyyy)
 * @member {String} dateDepositPaid
 */

APIModelsTenancy.prototype['dateDepositPaid'] = undefined;
/**
 * The start date of the tenancy (dd/MM/yyyy)
 * @member {String} tenancyStartDate
 */

APIModelsTenancy.prototype['tenancyStartDate'] = undefined;
/**
 * The end date of the tenancy, must be after the start date (dd/MM/yyyy)
 * @member {String} tenancyEndDate
 */

APIModelsTenancy.prototype['tenancyEndDate'] = undefined;
/**
 * @member {module:model/TenancyType} tenancyType
 */

APIModelsTenancy.prototype['tenancyType'] = undefined;
/**
 * Manadtory for Insurance and Custodial. The annual rental amount of the tenancy in pounds
 * @member {String} annualRentalAmount
 */

APIModelsTenancy.prototype['annualRentalAmount'] = undefined;
/**
 * The mydeposits landlord ID for landlord owning the property
 * @member {String} landlordID
 */

APIModelsTenancy.prototype['landlordID'] = undefined;
/**
 * Scotland Custodial only, the landlord's registration number given by the local authority the property resides in
 * @member {String} landlordRegistrationNumber
 */

APIModelsTenancy.prototype['landlordRegistrationNumber'] = undefined;
/**
 * The mydeposits ID of the property this tenancy refers to
 * @member {String} propertyID
 */

APIModelsTenancy.prototype['propertyID'] = undefined;
/**
 * @member {module:model/APIModelsTenant} leadTenant
 */

APIModelsTenancy.prototype['leadTenant'] = undefined;
/**
 * All additional tenants
 * @member {Array.<module:model/APIModelsJointTenant>} jointTenants
 */

APIModelsTenancy.prototype['jointTenants'] = undefined;
/**
 * @member {module:model/APIModelsInterestedParty} interestedParty
 */

APIModelsTenancy.prototype['interestedParty'] = undefined;
var _default = APIModelsTenancy;
exports["default"] = _default;