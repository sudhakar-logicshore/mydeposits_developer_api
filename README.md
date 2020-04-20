# mydeposits_developer_api

MydepositsDeveloperApi - JavaScript client for mydeposits_developer_api
API services to automate Deposit Protection within your existing Property Management Software workflows and applications for both England & Wales, and also Scotland
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.2.2
- Package version: 1.2.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install mydeposits_developer_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your mydeposits_developer_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MydepositsDeveloperApi = require('mydeposits_developer_api');

var defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
var mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
mydeposits_accessCode.accessToken = "YOUR ACCESS TOKEN"

var api = new MydepositsDeveloperApi.AuthenticationServicesApi()
var scheme = "scheme_example"; // {String} ID of the selected deposit protection Scheme as returned by protectionschemes method.
var region = "region_example"; // {String} ID of the selected deposit protection Region as returned by protectionregions method.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.authorisationCreate(scheme, region, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.sandbox.mydeposits.co.uk*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MydepositsDeveloperApi.AuthenticationServicesApi* | [**authorisationCreate**](docs/AuthenticationServicesApi.md#authorisationCreate) | **GET** /v1/{scheme}/{region}/authorize | Request authorisation for a given member
*MydepositsDeveloperApi.AuthenticationServicesApi* | [**tokenCreate**](docs/AuthenticationServicesApi.md#tokenCreate) | **POST** /v1/{scheme}/{region}/token | Request a token for a given member
*MydepositsDeveloperApi.BatchServicesApi* | [**batchAddTenancy**](docs/BatchServicesApi.md#batchAddTenancy) | **POST** /v1/{scheme}/{region}/batch/{id}/tenancy | Add a tenancy deposit protection to an existing batch
*MydepositsDeveloperApi.BatchServicesApi* | [**batchCheckout**](docs/BatchServicesApi.md#batchCheckout) | **POST** /v1/{scheme}/{region}/batch/{id}/checkout | Checkout a batch containing tenancy deposit protections
*MydepositsDeveloperApi.BatchServicesApi* | [**batchGet**](docs/BatchServicesApi.md#batchGet) | **GET** /v1/{scheme}/{region}/batch/{id} | Retrieve batch entity details for a batch under a specified mydeposits member account
*MydepositsDeveloperApi.BatchServicesApi* | [**batchGetList**](docs/BatchServicesApi.md#batchGetList) | **GET** /v1/{scheme}/{region}/batches | Retrieve a list of all batches underneath an account
*MydepositsDeveloperApi.BatchServicesApi* | [**batchPost**](docs/BatchServicesApi.md#batchPost) | **POST** /v1/{scheme}/{region}/batch | Create new batch entity within a specified mydeposits Custodial account
*MydepositsDeveloperApi.GlobalServicesApi* | [**protectionRegionsGet**](docs/GlobalServicesApi.md#protectionRegionsGet) | **GET** /v1/protectionregions | List of regions served by mydeposits
*MydepositsDeveloperApi.GlobalServicesApi* | [**protectionSchemesGet**](docs/GlobalServicesApi.md#protectionSchemesGet) | **GET** /v1/{region}/protectionschemes | List of available Deposit Protection Schemes within this region
*MydepositsDeveloperApi.GlobalServicesApi* | [**schemeRulesGet**](docs/GlobalServicesApi.md#schemeRulesGet) | **GET** /v1/{scheme}/{region}/schemerules | Returns a link to the Scheme Rules for this scheme and region
*MydepositsDeveloperApi.LandlordServicesApi* | [**landlordGet**](docs/LandlordServicesApi.md#landlordGet) | **GET** /v1/{scheme}/{region}/landlord/{id} | Retrieve landlord entity details for a landlord under a specified mydeposits member account
*MydepositsDeveloperApi.LandlordServicesApi* | [**landlordPost**](docs/LandlordServicesApi.md#landlordPost) | **POST** /v1/{scheme}/{region}/landlord | Create new landlord entity within a specified mydeposits member account
*MydepositsDeveloperApi.LandlordServicesApi* | [**landlordPut**](docs/LandlordServicesApi.md#landlordPut) | **PUT** /v1/{scheme}/{region}/landlord/{id} | Update a landlord entity within a specified mydeposits member account
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**addMember**](docs/MemberAccountServicesApi.md#addMember) | **POST** /v1/{scheme}/{region}/member | Create a new member account record
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**memberBranchCreate**](docs/MemberAccountServicesApi.md#memberBranchCreate) | **POST** /v1/{scheme}/{region}/member/branch | Create a new branch under a corporate landlord or agent member&#39;s account record
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**memberBranchGet**](docs/MemberAccountServicesApi.md#memberBranchGet) | **GET** /v1/{scheme}/{region}/member/branch/{id} | Request details for a given branch under the member&#39;s account
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**memberBranchList**](docs/MemberAccountServicesApi.md#memberBranchList) | **GET** /v1/{scheme}/{region}/member/branches | Request all branches for a given corporate landlord or agent member
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**memberBranchPut**](docs/MemberAccountServicesApi.md#memberBranchPut) | **PUT** /v1/{scheme}/{region}/member/branch/{id} | Update an existing branch
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**memberPaymentDetailsCreate**](docs/MemberAccountServicesApi.md#memberPaymentDetailsCreate) | **POST** /v1/{scheme}/{region}/member/account/payment/detail | Custodial only - Add repayment details under a member account record
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**memberPaymentDetailsDefault**](docs/MemberAccountServicesApi.md#memberPaymentDetailsDefault) | **POST** /v1/{scheme}/{region}/member/account/payment/{id}/default | Custodial only - Set the default repayment details for the member&#39;s account
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**memberPaymentDetailsGet**](docs/MemberAccountServicesApi.md#memberPaymentDetailsGet) | **GET** /v1/{scheme}/{region}/member/account/payment/details | Custodial only - Request all stored UK repayment details for a given member
*MydepositsDeveloperApi.MemberAccountServicesApi* | [**subscribeMember**](docs/MemberAccountServicesApi.md#subscribeMember) | **POST** /v1/{scheme}/{region}/member/subscribe | Subscribe a member to the specified scheme
*MydepositsDeveloperApi.PropertyServicesApi* | [**propertyGet**](docs/PropertyServicesApi.md#propertyGet) | **GET** /v1/{scheme}/{region}/property/{id} | Return all information for this property
*MydepositsDeveloperApi.PropertyServicesApi* | [**propertyPost**](docs/PropertyServicesApi.md#propertyPost) | **POST** /v1/{scheme}/{region}/property | Create a new property record within a specified mydeposits member account
*MydepositsDeveloperApi.PropertyServicesApi* | [**propertyPut**](docs/PropertyServicesApi.md#propertyPut) | **PUT** /v1/{scheme}/{region}/property/{id} | Update an existing property
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyCertificate**](docs/TenancyServicesApi.md#tenancyCertificate) | **GET** /v1/{scheme}/{region}/tenancy/{id}/depositprotection | Retrieve deposit protection PDF
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyCheckout**](docs/TenancyServicesApi.md#tenancyCheckout) | **POST** /v1/{scheme}/{region}/tenancy/{id}/checkout | Checkout a tenancy deposit protection
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyGet**](docs/TenancyServicesApi.md#tenancyGet) | **GET** /v1/{scheme}/{region}/tenancy/{id} | Retrieve details of a tenancy
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyGetList**](docs/TenancyServicesApi.md#tenancyGetList) | **GET** /v1/{scheme}/{region}/tenancies | Retrieve a list of all tenancies underneath an account
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyPost**](docs/TenancyServicesApi.md#tenancyPost) | **POST** /v1/{scheme}/{region}/tenancy | Create new tenancy record within a specified mydeposits member account
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyUnprotect**](docs/TenancyServicesApi.md#tenancyUnprotect) | **POST** /v1/{scheme}/{region}/tenancy/{id}/unprotect | Submit a request to initiate a deposit release
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyUnprotectAccept**](docs/TenancyServicesApi.md#tenancyUnprotectAccept) | **POST** /v1/{scheme}/{region}/tenancy/{id}/unprotect/accept | Custodial only - Accept a tenant&#39;s deposit release request
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyUnprotectCounter**](docs/TenancyServicesApi.md#tenancyUnprotectCounter) | **POST** /v1/{scheme}/{region}/tenancy/{id}/unprotect/counter | Custodial only - Submit a counter offer to a tenant&#39;s release request
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyUnprotectOTP**](docs/TenancyServicesApi.md#tenancyUnprotectOTP) | **POST** /v1/{scheme}/{region}/tenancy/{id}/otp | Request a One Time Password to initiate or respond to a release
*MydepositsDeveloperApi.TenancyServicesApi* | [**tenancyUnprotectSPT**](docs/TenancyServicesApi.md#tenancyUnprotectSPT) | **POST** /v1/{scheme}/{region}/tenancy/{id}/convertspt | Insurance only - Convert a live protection to a statutory periodic tenancy


## Documentation for Models

 - [MydepositsDeveloperApi.APIModelsBatch](docs/APIModelsBatch.md)
 - [MydepositsDeveloperApi.APIModelsBatchAddTenancy](docs/APIModelsBatchAddTenancy.md)
 - [MydepositsDeveloperApi.APIModelsBranch](docs/APIModelsBranch.md)
 - [MydepositsDeveloperApi.APIModelsCheckout](docs/APIModelsCheckout.md)
 - [MydepositsDeveloperApi.APIModelsDeductions](docs/APIModelsDeductions.md)
 - [MydepositsDeveloperApi.APIModelsInterestedParty](docs/APIModelsInterestedParty.md)
 - [MydepositsDeveloperApi.APIModelsJointTenant](docs/APIModelsJointTenant.md)
 - [MydepositsDeveloperApi.APIModelsLandlord](docs/APIModelsLandlord.md)
 - [MydepositsDeveloperApi.APIModelsLandlordMember](docs/APIModelsLandlordMember.md)
 - [MydepositsDeveloperApi.APIModelsPaymentDetail](docs/APIModelsPaymentDetail.md)
 - [MydepositsDeveloperApi.APIModelsProperty](docs/APIModelsProperty.md)
 - [MydepositsDeveloperApi.APIModelsSubscribe](docs/APIModelsSubscribe.md)
 - [MydepositsDeveloperApi.APIModelsTenancy](docs/APIModelsTenancy.md)
 - [MydepositsDeveloperApi.APIModelsTenant](docs/APIModelsTenant.md)
 - [MydepositsDeveloperApi.APIModelsToken](docs/APIModelsToken.md)
 - [MydepositsDeveloperApi.APIModelsUnprotect](docs/APIModelsUnprotect.md)
 - [MydepositsDeveloperApi.APIModelsUnprotectAccept](docs/APIModelsUnprotectAccept.md)
 - [MydepositsDeveloperApi.APIModelsUnprotectionDeductions](docs/APIModelsUnprotectionDeductions.md)
 - [MydepositsDeveloperApi.APIResponsesBatch](docs/APIResponsesBatch.md)
 - [MydepositsDeveloperApi.APIResponsesBatchAddTenancy](docs/APIResponsesBatchAddTenancy.md)
 - [MydepositsDeveloperApi.APIResponsesBatchCheckout](docs/APIResponsesBatchCheckout.md)
 - [MydepositsDeveloperApi.APIResponsesBatchDetails](docs/APIResponsesBatchDetails.md)
 - [MydepositsDeveloperApi.APIResponsesBatchList](docs/APIResponsesBatchList.md)
 - [MydepositsDeveloperApi.APIResponsesBatchTenancy](docs/APIResponsesBatchTenancy.md)
 - [MydepositsDeveloperApi.APIResponsesBranch](docs/APIResponsesBranch.md)
 - [MydepositsDeveloperApi.APIResponsesBranchDetails](docs/APIResponsesBranchDetails.md)
 - [MydepositsDeveloperApi.APIResponsesBranchList](docs/APIResponsesBranchList.md)
 - [MydepositsDeveloperApi.APIResponsesCheckout](docs/APIResponsesCheckout.md)
 - [MydepositsDeveloperApi.APIResponsesConvertSPT](docs/APIResponsesConvertSPT.md)
 - [MydepositsDeveloperApi.APIResponsesDefaultPayment](docs/APIResponsesDefaultPayment.md)
 - [MydepositsDeveloperApi.APIResponsesErrorList](docs/APIResponsesErrorList.md)
 - [MydepositsDeveloperApi.APIResponsesErrors](docs/APIResponsesErrors.md)
 - [MydepositsDeveloperApi.APIResponsesInterestedPartyDetails](docs/APIResponsesInterestedPartyDetails.md)
 - [MydepositsDeveloperApi.APIResponsesJointTenant](docs/APIResponsesJointTenant.md)
 - [MydepositsDeveloperApi.APIResponsesLandlord](docs/APIResponsesLandlord.md)
 - [MydepositsDeveloperApi.APIResponsesLandlordDetails](docs/APIResponsesLandlordDetails.md)
 - [MydepositsDeveloperApi.APIResponsesLandlordMember](docs/APIResponsesLandlordMember.md)
 - [MydepositsDeveloperApi.APIResponsesLeadTenant](docs/APIResponsesLeadTenant.md)
 - [MydepositsDeveloperApi.APIResponsesOTP](docs/APIResponsesOTP.md)
 - [MydepositsDeveloperApi.APIResponsesPaymentDetail](docs/APIResponsesPaymentDetail.md)
 - [MydepositsDeveloperApi.APIResponsesPaymentDetails](docs/APIResponsesPaymentDetails.md)
 - [MydepositsDeveloperApi.APIResponsesPaymentDetailsList](docs/APIResponsesPaymentDetailsList.md)
 - [MydepositsDeveloperApi.APIResponsesProperty](docs/APIResponsesProperty.md)
 - [MydepositsDeveloperApi.APIResponsesPropertyDetails](docs/APIResponsesPropertyDetails.md)
 - [MydepositsDeveloperApi.APIResponsesProtection](docs/APIResponsesProtection.md)
 - [MydepositsDeveloperApi.APIResponsesProtectionList](docs/APIResponsesProtectionList.md)
 - [MydepositsDeveloperApi.APIResponsesSchemeRules](docs/APIResponsesSchemeRules.md)
 - [MydepositsDeveloperApi.APIResponsesTenancy](docs/APIResponsesTenancy.md)
 - [MydepositsDeveloperApi.APIResponsesTenancyDetails](docs/APIResponsesTenancyDetails.md)
 - [MydepositsDeveloperApi.APIResponsesToken](docs/APIResponsesToken.md)
 - [MydepositsDeveloperApi.APIResponsesUnprotect](docs/APIResponsesUnprotect.md)
 - [MydepositsDeveloperApi.Country](docs/Country.md)
 - [MydepositsDeveloperApi.DeductionReasons](docs/DeductionReasons.md)
 - [MydepositsDeveloperApi.InlineResponse200](docs/InlineResponse200.md)
 - [MydepositsDeveloperApi.LocalAuthorityRegion](docs/LocalAuthorityRegion.md)
 - [MydepositsDeveloperApi.PropertyType](docs/PropertyType.md)
 - [MydepositsDeveloperApi.TenancyStatus](docs/TenancyStatus.md)
 - [MydepositsDeveloperApi.TenancyType](docs/TenancyType.md)
 - [MydepositsDeveloperApi.Title](docs/Title.md)


## Documentation for Authorization



### mydeposits_accessCode


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://api.sandbox.mydeposits.co.uk/{scheme}/eng/authorize
- **Scopes**: 
  - write:mydeposits: modify mydeposits entities in your account
  - read:mydeposits: read your mydeposits entities



### mydeposits_implicit


- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: N/A

