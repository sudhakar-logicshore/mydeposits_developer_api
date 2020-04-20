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
 * The APIResponsesBranchDetails model module.
 * @module model/APIResponsesBranchDetails
 * @version 1.2.2
 */
var APIResponsesBranchDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIResponsesBranchDetails</code>.
   * Summary of branch details
   * @alias module:model/APIResponsesBranchDetails
   */
  function APIResponsesBranchDetails() {
    _classCallCheck(this, APIResponsesBranchDetails);

    APIResponsesBranchDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIResponsesBranchDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>APIResponsesBranchDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIResponsesBranchDetails} obj Optional instance to populate.
     * @return {module:model/APIResponsesBranchDetails} The populated <code>APIResponsesBranchDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIResponsesBranchDetails();

        if (data.hasOwnProperty('branchID')) {
          obj['branchID'] = _ApiClient["default"].convertToType(data['branchID'], 'String');
        }

        if (data.hasOwnProperty('parentBranchID')) {
          obj['parentBranchID'] = _ApiClient["default"].convertToType(data['parentBranchID'], 'String');
        }

        if (data.hasOwnProperty('thirdPartyReference')) {
          obj['thirdPartyReference'] = _ApiClient["default"].convertToType(data['thirdPartyReference'], 'String');
        }

        if (data.hasOwnProperty('branchName')) {
          obj['branchName'] = _ApiClient["default"].convertToType(data['branchName'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('firstName')) {
          obj['firstName'] = _ApiClient["default"].convertToType(data['firstName'], 'String');
        }

        if (data.hasOwnProperty('lastName')) {
          obj['lastName'] = _ApiClient["default"].convertToType(data['lastName'], 'String');
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

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('mobileTelephone')) {
          obj['mobileTelephone'] = _ApiClient["default"].convertToType(data['mobileTelephone'], 'String');
        }

        if (data.hasOwnProperty('branchTelephone')) {
          obj['branchTelephone'] = _ApiClient["default"].convertToType(data['branchTelephone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return APIResponsesBranchDetails;
}();
/**
 * The unique ID of the branch record
 * @member {String} branchID
 */


APIResponsesBranchDetails.prototype['branchID'] = undefined;
/**
 * The branch ID (if any) of the parent branch for this record
 * @member {String} parentBranchID
 */

APIResponsesBranchDetails.prototype['parentBranchID'] = undefined;
/**
 * @member {String} thirdPartyReference
 */

APIResponsesBranchDetails.prototype['thirdPartyReference'] = undefined;
/**
 * @member {String} branchName
 */

APIResponsesBranchDetails.prototype['branchName'] = undefined;
/**
 * Required field for Insurance only
 * @member {module:model/APIResponsesBranchDetails.TitleEnum} title
 */

APIResponsesBranchDetails.prototype['title'] = undefined;
/**
 * Required for Insurance only. 50 characters or less
 * @member {String} firstName
 */

APIResponsesBranchDetails.prototype['firstName'] = undefined;
/**
 * Required for Insurance only. 50 characters or less
 * @member {String} lastName
 */

APIResponsesBranchDetails.prototype['lastName'] = undefined;
/**
 * @member {String} addressLine1
 */

APIResponsesBranchDetails.prototype['addressLine1'] = undefined;
/**
 * @member {String} addressLine2
 */

APIResponsesBranchDetails.prototype['addressLine2'] = undefined;
/**
 * @member {String} addressLine3
 */

APIResponsesBranchDetails.prototype['addressLine3'] = undefined;
/**
 * @member {String} addressLine4
 */

APIResponsesBranchDetails.prototype['addressLine4'] = undefined;
/**
 * @member {String} postcode
 */

APIResponsesBranchDetails.prototype['postcode'] = undefined;
/**
 * @member {String} emailAddress
 */

APIResponsesBranchDetails.prototype['emailAddress'] = undefined;
/**
 * @member {String} mobileTelephone
 */

APIResponsesBranchDetails.prototype['mobileTelephone'] = undefined;
/**
 * @member {String} branchTelephone
 */

APIResponsesBranchDetails.prototype['branchTelephone'] = undefined;
/**
 * Allowed values for the <code>title</code> property.
 * @enum {String}
 * @readonly
 */

APIResponsesBranchDetails['TitleEnum'] = {
  /**
   * value: "Mr"
   * @const
   */
  "Mr": "Mr",

  /**
   * value: "Mrs"
   * @const
   */
  "Mrs": "Mrs",

  /**
   * value: "Miss"
   * @const
   */
  "Miss": "Miss",

  /**
   * value: "Ms"
   * @const
   */
  "Ms": "Ms",

  /**
   * value: "Dr"
   * @const
   */
  "Dr": "Dr",

  /**
   * value: "Lady"
   * @const
   */
  "Lady": "Lady",

  /**
   * value: "Lord"
   * @const
   */
  "Lord": "Lord",

  /**
   * value: "Professor"
   * @const
   */
  "Professor": "Professor",

  /**
   * value: "Sir"
   * @const
   */
  "Sir": "Sir"
};
var _default = APIResponsesBranchDetails;
exports["default"] = _default;