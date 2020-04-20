# MydepositsDeveloperApi.TenancyServicesApi

All URIs are relative to *https://api.sandbox.mydeposits.co.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenancyCertificate**](TenancyServicesApi.md#tenancyCertificate) | **GET** /v1/{scheme}/{region}/tenancy/{id}/depositprotection | Retrieve deposit protection PDF
[**tenancyCheckout**](TenancyServicesApi.md#tenancyCheckout) | **POST** /v1/{scheme}/{region}/tenancy/{id}/checkout | Checkout a tenancy deposit protection
[**tenancyGet**](TenancyServicesApi.md#tenancyGet) | **GET** /v1/{scheme}/{region}/tenancy/{id} | Retrieve details of a tenancy
[**tenancyGetList**](TenancyServicesApi.md#tenancyGetList) | **GET** /v1/{scheme}/{region}/tenancies | Retrieve a list of all tenancies underneath an account
[**tenancyPost**](TenancyServicesApi.md#tenancyPost) | **POST** /v1/{scheme}/{region}/tenancy | Create new tenancy record within a specified mydeposits member account
[**tenancyUnprotect**](TenancyServicesApi.md#tenancyUnprotect) | **POST** /v1/{scheme}/{region}/tenancy/{id}/unprotect | Submit a request to initiate a deposit release
[**tenancyUnprotectAccept**](TenancyServicesApi.md#tenancyUnprotectAccept) | **POST** /v1/{scheme}/{region}/tenancy/{id}/unprotect/accept | Custodial only - Accept a tenant&#39;s deposit release request
[**tenancyUnprotectCounter**](TenancyServicesApi.md#tenancyUnprotectCounter) | **POST** /v1/{scheme}/{region}/tenancy/{id}/unprotect/counter | Custodial only - Submit a counter offer to a tenant&#39;s release request
[**tenancyUnprotectOTP**](TenancyServicesApi.md#tenancyUnprotectOTP) | **POST** /v1/{scheme}/{region}/tenancy/{id}/otp | Request a One Time Password to initiate or respond to a release
[**tenancyUnprotectSPT**](TenancyServicesApi.md#tenancyUnprotectSPT) | **POST** /v1/{scheme}/{region}/tenancy/{id}/convertspt | Insurance only - Convert a live protection to a statutory periodic tenancy



## tenancyCertificate

> File tenancyCertificate(scheme, region, id)

Retrieve deposit protection PDF

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let id = 789; // Number | ID of the Tenancy resource
apiInstance.tenancyCertificate(scheme, region, id, (error, data, response) => {
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
 **id** | **Number**| ID of the Tenancy resource | 

### Return type

**File**

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf


## tenancyCheckout

> APIResponsesCheckout tenancyCheckout(scheme, region, id, value)

Checkout a tenancy deposit protection

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let id = 789; // Number | ID of the Tenancy resource
let value = new MydepositsDeveloperApi.APIModelsCheckout(); // APIModelsCheckout | 
apiInstance.tenancyCheckout(scheme, region, id, value, (error, data, response) => {
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
 **id** | **Number**| ID of the Tenancy resource | 
 **value** | [**APIModelsCheckout**](APIModelsCheckout.md)|  | 

### Return type

[**APIResponsesCheckout**](APIResponsesCheckout.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenancyGet

> APIResponsesTenancyDetails tenancyGet(scheme, region, id)

Retrieve details of a tenancy

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let id = 789; // Number | 
apiInstance.tenancyGet(scheme, region, id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**APIResponsesTenancyDetails**](APIResponsesTenancyDetails.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tenancyGetList

> APIResponsesProtectionList tenancyGetList(scheme, region)

Retrieve a list of all tenancies underneath an account

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
apiInstance.tenancyGetList(scheme, region, (error, data, response) => {
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

[**APIResponsesProtectionList**](APIResponsesProtectionList.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tenancyPost

> APIResponsesTenancy tenancyPost(scheme, region, body)

Create new tenancy record within a specified mydeposits member account

Allows creation of a new tenancy record within the mydeposits member account for the chosen scheme and region.

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let body = new MydepositsDeveloperApi.APIModelsTenancy(); // APIModelsTenancy | Tenancy object that needs adding to the members account
apiInstance.tenancyPost(scheme, region, body, (error, data, response) => {
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
 **body** | [**APIModelsTenancy**](APIModelsTenancy.md)| Tenancy object that needs adding to the members account | 

### Return type

[**APIResponsesTenancy**](APIResponsesTenancy.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenancyUnprotect

> APIResponsesUnprotect tenancyUnprotect(signature, scheme, region, id, value)

Submit a request to initiate a deposit release

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let signature = "signature_example"; // String | Hashed request body (HMAC-SHA512) Hashing key = (OTP/Private key) + TenancyID e.g. OTP = '123', TenancyID = 456 - Hashing key = 123456 
let id = 789; // Number | ID of the Tenancy resource
let value = new MydepositsDeveloperApi.APIModelsUnprotect(); // APIModelsUnprotect | 
apiInstance.tenancyUnprotect(signature, scheme, region, id, value, (error, data, response) => {
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
 **signature** | **String**| Hashed request body (HMAC-SHA512) Hashing key &#x3D; (OTP/Private key) + TenancyID e.g. OTP &#x3D; &#39;123&#39;, TenancyID &#x3D; 456 - Hashing key &#x3D; 123456  | 
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **id** | **Number**| ID of the Tenancy resource | 
 **value** | [**APIModelsUnprotect**](APIModelsUnprotect.md)|  | 

### Return type

[**APIResponsesUnprotect**](APIResponsesUnprotect.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenancyUnprotectAccept

> APIResponsesUnprotect tenancyUnprotectAccept(signature, scheme, region, id, value)

Custodial only - Accept a tenant&#39;s deposit release request

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let signature = "signature_example"; // String | Hashed request body (HMAC-SHA512) Hashing key = (OTP/Private key) + TenancyID e.g. OTP = '123', TenancyID = 456 - Hashing key = 123456 
let id = 789; // Number | ID of the Tenancy resource
let value = new MydepositsDeveloperApi.APIModelsUnprotectAccept(); // APIModelsUnprotectAccept | 
apiInstance.tenancyUnprotectAccept(signature, scheme, region, id, value, (error, data, response) => {
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
 **signature** | **String**| Hashed request body (HMAC-SHA512) Hashing key &#x3D; (OTP/Private key) + TenancyID e.g. OTP &#x3D; &#39;123&#39;, TenancyID &#x3D; 456 - Hashing key &#x3D; 123456  | 
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **id** | **Number**| ID of the Tenancy resource | 
 **value** | [**APIModelsUnprotectAccept**](APIModelsUnprotectAccept.md)|  | 

### Return type

[**APIResponsesUnprotect**](APIResponsesUnprotect.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenancyUnprotectCounter

> APIResponsesUnprotect tenancyUnprotectCounter(signature, scheme, region, id, value)

Custodial only - Submit a counter offer to a tenant&#39;s release request

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let signature = "signature_example"; // String | Hashed request body (HMAC-SHA512) Hashing key = (OTP/Private key) + TenancyID e.g. OTP = '123', TenancyID = 456 - Hashing key = 123456 
let id = 789; // Number | ID of the Tenancy resource
let value = new MydepositsDeveloperApi.APIModelsUnprotect(); // APIModelsUnprotect | 
apiInstance.tenancyUnprotectCounter(signature, scheme, region, id, value, (error, data, response) => {
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
 **signature** | **String**| Hashed request body (HMAC-SHA512) Hashing key &#x3D; (OTP/Private key) + TenancyID e.g. OTP &#x3D; &#39;123&#39;, TenancyID &#x3D; 456 - Hashing key &#x3D; 123456  | 
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **id** | **Number**| ID of the Tenancy resource | 
 **value** | [**APIModelsUnprotect**](APIModelsUnprotect.md)|  | 

### Return type

[**APIResponsesUnprotect**](APIResponsesUnprotect.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## tenancyUnprotectOTP

> APIResponsesOTP tenancyUnprotectOTP(scheme, region, id)

Request a One Time Password to initiate or respond to a release

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let id = 789; // Number | ID of the Tenancy resource
apiInstance.tenancyUnprotectOTP(scheme, region, id, (error, data, response) => {
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
 **id** | **Number**| ID of the Tenancy resource | 

### Return type

[**APIResponsesOTP**](APIResponsesOTP.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tenancyUnprotectSPT

> APIResponsesConvertSPT tenancyUnprotectSPT(scheme, region, id)

Insurance only - Convert a live protection to a statutory periodic tenancy

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

let apiInstance = new MydepositsDeveloperApi.TenancyServicesApi();
let id = 789; // Number | ID of the Tenancy resource
apiInstance.tenancyUnprotectSPT(scheme, region, id, (error, data, response) => {
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
 **id** | **Number**| ID of the Tenancy resource | 

### Return type

[**APIResponsesConvertSPT**](APIResponsesConvertSPT.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

