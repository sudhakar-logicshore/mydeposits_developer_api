# MydepositsDeveloperApi.MemberAccountServicesApi

All URIs are relative to *https://api.sandbox.mydeposits.co.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMember**](MemberAccountServicesApi.md#addMember) | **POST** /v1/{scheme}/{region}/member | Create a new member account record
[**memberBranchCreate**](MemberAccountServicesApi.md#memberBranchCreate) | **POST** /v1/{scheme}/{region}/member/branch | Create a new branch under a corporate landlord or agent member&#39;s account record
[**memberBranchGet**](MemberAccountServicesApi.md#memberBranchGet) | **GET** /v1/{scheme}/{region}/member/branch/{id} | Request details for a given branch under the member&#39;s account
[**memberBranchList**](MemberAccountServicesApi.md#memberBranchList) | **GET** /v1/{scheme}/{region}/member/branches | Request all branches for a given corporate landlord or agent member
[**memberBranchPut**](MemberAccountServicesApi.md#memberBranchPut) | **PUT** /v1/{scheme}/{region}/member/branch/{id} | Update an existing branch
[**memberPaymentDetailsCreate**](MemberAccountServicesApi.md#memberPaymentDetailsCreate) | **POST** /v1/{scheme}/{region}/member/account/payment/detail | Custodial only - Add repayment details under a member account record
[**memberPaymentDetailsDefault**](MemberAccountServicesApi.md#memberPaymentDetailsDefault) | **POST** /v1/{scheme}/{region}/member/account/payment/{id}/default | Custodial only - Set the default repayment details for the member&#39;s account
[**memberPaymentDetailsGet**](MemberAccountServicesApi.md#memberPaymentDetailsGet) | **GET** /v1/{scheme}/{region}/member/account/payment/details | Custodial only - Request all stored UK repayment details for a given member
[**subscribeMember**](MemberAccountServicesApi.md#subscribeMember) | **POST** /v1/{scheme}/{region}/member/subscribe | Subscribe a member to the specified scheme



## addMember

> APIResponsesLandlordMember addMember(scheme, region, value)

Create a new member account record

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
let value = new MydepositsDeveloperApi.APIModelsLandlordMember(); // APIModelsLandlordMember | 
apiInstance.addMember(scheme, region, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **value** | [**APIModelsLandlordMember**](APIModelsLandlordMember.md)|  | 

### Return type

[**APIResponsesLandlordMember**](APIResponsesLandlordMember.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## memberBranchCreate

> APIResponsesBranch memberBranchCreate(scheme, region, value)

Create a new branch under a corporate landlord or agent member&#39;s account record

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
let value = new MydepositsDeveloperApi.APIModelsBranch(); // APIModelsBranch | 
apiInstance.memberBranchCreate(scheme, region, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **value** | [**APIModelsBranch**](APIModelsBranch.md)|  | 

### Return type

[**APIResponsesBranch**](APIResponsesBranch.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## memberBranchGet

> APIResponsesBranchDetails memberBranchGet(scheme, region, id)

Request details for a given branch under the member&#39;s account

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
let id = "id_example"; // String | 
apiInstance.memberBranchGet(scheme, region, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **id** | **String**|  | 

### Return type

[**APIResponsesBranchDetails**](APIResponsesBranchDetails.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberBranchList

> APIResponsesBranchList memberBranchList(scheme, region)

Request all branches for a given corporate landlord or agent member

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
apiInstance.memberBranchList(scheme, region, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 

### Return type

[**APIResponsesBranchList**](APIResponsesBranchList.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberBranchPut

> APIResponsesBranch memberBranchPut(scheme, region, id, value)

Update an existing branch

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
let id = 789; // Number | Branch ID
let value = new MydepositsDeveloperApi.APIModelsBranch(); // APIModelsBranch | Models.Branch
apiInstance.memberBranchPut(scheme, region, id, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **id** | **Number**| Branch ID | 
 **value** | [**APIModelsBranch**](APIModelsBranch.md)| Models.Branch | 

### Return type

[**APIResponsesBranch**](APIResponsesBranch.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## memberPaymentDetailsCreate

> APIResponsesPaymentDetail memberPaymentDetailsCreate(scheme, region, value)

Custodial only - Add repayment details under a member account record

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
let value = new MydepositsDeveloperApi.APIModelsPaymentDetail(); // APIModelsPaymentDetail | 
apiInstance.memberPaymentDetailsCreate(scheme, region, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **value** | [**APIModelsPaymentDetail**](APIModelsPaymentDetail.md)|  | 

### Return type

[**APIResponsesPaymentDetail**](APIResponsesPaymentDetail.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## memberPaymentDetailsDefault

> APIResponsesDefaultPayment memberPaymentDetailsDefault(scheme, region, id)

Custodial only - Set the default repayment details for the member&#39;s account

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
let id = "id_example"; // String | ID of the payment details record that is to become the default payment object
apiInstance.memberPaymentDetailsDefault(scheme, region, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **id** | **String**| ID of the payment details record that is to become the default payment object | 

### Return type

[**APIResponsesDefaultPayment**](APIResponsesDefaultPayment.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## memberPaymentDetailsGet

> APIResponsesPaymentDetailsList memberPaymentDetailsGet(scheme, region)

Custodial only - Request all stored UK repayment details for a given member

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
apiInstance.memberPaymentDetailsGet(scheme, region, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 

### Return type

[**APIResponsesPaymentDetailsList**](APIResponsesPaymentDetailsList.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribeMember

> subscribeMember(scheme, region, value)

Subscribe a member to the specified scheme

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];

let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.MemberAccountServicesApi();
let value = new MydepositsDeveloperApi.APIModelsSubscribe(); // APIModelsSubscribe | 
apiInstance.subscribeMember(scheme, region, value, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **value** | [**APIModelsSubscribe**](APIModelsSubscribe.md)|  | 

### Return type

null (empty response body)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

