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
 * The APIModelsBranch model module.
 * @module model/APIModelsBranch
 * @version 1.2.2
 */
var APIModelsBranch = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>APIModelsBranch</code>.
   * Details of an branch for a corporate landlord or agent member
   * @alias module:model/APIModelsBranch
   * @param branchName {String} Must be 50 characters or less
   * @param thirdPartyReference {String} Must be 100 characters or less
   * @param addressLine1 {String} Must be 100 characters or less
   * @param postcode {String} Must be 8 characters or less
   * @param emailAddress {String} Must be 255 characters or less.
   * @param branchTelephone {String} Must be 15 characters or less
   */
  function APIModelsBranch(branchName, thirdPartyReference, addressLine1, postcode, emailAddress, branchTelephone) {
    _classCallCheck(this, APIModelsBranch);

    APIModelsBranch.initialize(this, branchName, thirdPartyReference, addressLine1, postcode, emailAddress, branchTelephone);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(APIModelsBranch, null, [{
    key: "initialize",
    value: function initialize(obj, branchName, thirdPartyReference, addressLine1, postcode, emailAddress, branchTelephone) {
      obj['branchName'] = branchName;
      obj['thirdPartyReference'] = thirdPartyReference;
      obj['addressLine1'] = addressLine1;
      obj['postcode'] = postcode;
      obj['emailAddress'] = emailAddress;
      obj['branchTelephone'] = branchTelephone;
    }
    /**
     * Constructs a <code>APIModelsBranch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIModelsBranch} obj Optional instance to populate.
     * @return {module:model/APIModelsBranch} The populated <code>APIModelsBranch</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new APIModelsBranch();

        if (data.hasOwnProperty('branchName')) {
          obj['branchName'] = _ApiClient["default"].convertToType(data['branchName'], 'String');
        }

        if (data.hasOwnProperty('parentBranchID')) {
          obj['parentBranchID'] = _ApiClient["default"].convertToType(data['parentBranchID'], 'String');
        }

        if (data.hasOwnProperty('thirdPartyReference')) {
          obj['thirdPartyReference'] = _ApiClient["default"].convertToType(data['thirdPartyReference'], 'String');
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

  return APIModelsBranch;
}();
/**
 * Must be 50 characters or less
 * @member {String} branchName
 */


APIModelsBranch.prototype['branchName'] = undefined;
/**
 * Must be 50 characters or less
 * @member {String} parentBranchID
 */

APIModelsBranch.prototype['parentBranchID'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} thirdPartyReference
 */

APIModelsBranch.prototype['thirdPartyReference'] = undefined;
/**
 * Required field for Insurance only
 * @member {module:model/APIModelsBranch.TitleEnum} title
 */

APIModelsBranch.prototype['title'] = undefined;
/**
 * Required for Insurance only. 50 characters or less
 * @member {String} firstName
 */

APIModelsBranch.prototype['firstName'] = undefined;
/**
 * Required for Insurance only. 50 characters or less
 * @member {String} lastName
 */

APIModelsBranch.prototype['lastName'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine1
 */

APIModelsBranch.prototype['addressLine1'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine2
 */

APIModelsBranch.prototype['addressLine2'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine3
 */

APIModelsBranch.prototype['addressLine3'] = undefined;
/**
 * Must be 100 characters or less
 * @member {String} addressLine4
 */

APIModelsBranch.prototype['addressLine4'] = undefined;
/**
 * Must be 8 characters or less
 * @member {String} postcode
 */

APIModelsBranch.prototype['postcode'] = undefined;
/**
 * Must be 255 characters or less.
 * @member {String} emailAddress
 */

APIModelsBranch.prototype['emailAddress'] = undefined;
/**
 * Must be 15 characters or less
 * @member {String} mobileTelephone
 */

APIModelsBranch.prototype['mobileTelephone'] = undefined;
/**
 * Must be 15 characters or less
 * @member {String} branchTelephone
 */

APIModelsBranch.prototype['branchTelephone'] = undefined;
/**
 * Allowed values for the <code>title</code> property.
 * @enum {String}
 * @readonly
 */

APIModelsBranch['TitleEnum'] = {
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
var _default = APIModelsBranch;
exports["default"] = _default;