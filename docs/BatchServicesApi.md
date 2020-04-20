# MydepositsDeveloperApi.BatchServicesApi

All URIs are relative to *https://api.sandbox.mydeposits.co.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchAddTenancy**](BatchServicesApi.md#batchAddTenancy) | **POST** /v1/{scheme}/{region}/batch/{id}/tenancy | Add a tenancy deposit protection to an existing batch
[**batchCheckout**](BatchServicesApi.md#batchCheckout) | **POST** /v1/{scheme}/{region}/batch/{id}/checkout | Checkout a batch containing tenancy deposit protections
[**batchGet**](BatchServicesApi.md#batchGet) | **GET** /v1/{scheme}/{region}/batch/{id} | Retrieve batch entity details for a batch under a specified mydeposits member account
[**batchGetList**](BatchServicesApi.md#batchGetList) | **GET** /v1/{scheme}/{region}/batches | Retrieve a list of all batches underneath an account
[**batchPost**](BatchServicesApi.md#batchPost) | **POST** /v1/{scheme}/{region}/batch | Create new batch entity within a specified mydeposits Custodial account



## batchAddTenancy

> APIResponsesBatchAddTenancy batchAddTenancy(scheme, region, id, value)

Add a tenancy deposit protection to an existing batch

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.BatchServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let id = 789; // Number | ID of the Batch resource
let value = new MydepositsDeveloperApi.APIModelsBatchAddTenancy(); // APIModelsBatchAddTenancy | 
apiInstance.batchAddTenancy(scheme, region, id, value, (error, data, response) => {
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
 **id** | **Number**| ID of the Batch resource | 
 **value** | [**APIModelsBatchAddTenancy**](APIModelsBatchAddTenancy.md)|  | 

### Return type

[**APIResponsesBatchAddTenancy**](APIResponsesBatchAddTenancy.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchCheckout

> APIResponsesBatchCheckout batchCheckout(scheme, region, id, value)

Checkout a batch containing tenancy deposit protections

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.BatchServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let id = 789; // Number | ID of the Batch resource
let value = new MydepositsDeveloperApi.APIModelsCheckout(); // APIModelsCheckout | 
apiInstance.batchCheckout(scheme, region, id, value, (error, data, response) => {
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
 **id** | **Number**| ID of the Batch resource | 
 **value** | [**APIModelsCheckout**](APIModelsCheckout.md)|  | 

### Return type

[**APIResponsesBatchCheckout**](APIResponsesBatchCheckout.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchGet

> APIResponsesBatchDetails batchGet(scheme, region, id)

Retrieve batch entity details for a batch under a specified mydeposits member account

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.BatchServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let id = 789; // Number | ID of the Batch resource
apiInstance.batchGet(scheme, region, id, (error, data, response) => {
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
 **id** | **Number**| ID of the Batch resource | 

### Return type

[**APIResponsesBatchDetails**](APIResponsesBatchDetails.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## batchGetList

> APIResponsesBatchList batchGetList(scheme, region)

Retrieve a list of all batches underneath an account

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.BatchServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
apiInstance.batchGetList(scheme, region, (error, data, response) => {
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

[**APIResponsesBatchList**](APIResponsesBatchList.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## batchPost

> APIResponsesBatch batchPost(scheme, region, body)

Create new batch entity within a specified mydeposits Custodial account

Allows creation of a new batch entity within mydeposits. This entity can be used to group tenancies together for a single payment.

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
let token = await MydepositsDeveloperApi.getAccessToken(scheme,region,{
  client_id:"xx",
  client_secret:"xxx",
  grant_type:"xxx",
  username:"xxx",
  password:"xxx"
});
mydeposits_accessCode.accessToken = token.access_token;

let apiInstance = new MydepositsDeveloperApi.BatchServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let body = new MydepositsDeveloperApi.APIModelsBatch(); // APIModelsBatch | The batch object that needs to be added to the member's account
apiInstance.batchPost(scheme, region, body, (error, data, response) => {
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
 **body** | [**APIModelsBatch**](APIModelsBatch.md)| The batch object that needs to be added to the member&#39;s account | 

### Return type

[**APIResponsesBatch**](APIResponsesBatch.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

