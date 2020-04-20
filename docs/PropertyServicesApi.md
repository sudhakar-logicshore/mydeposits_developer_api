# MydepositsDeveloperApi.PropertyServicesApi

All URIs are relative to *https://api.sandbox.mydeposits.co.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**propertyGet**](PropertyServicesApi.md#propertyGet) | **GET** /v1/{scheme}/{region}/property/{id} | Return all information for this property
[**propertyPost**](PropertyServicesApi.md#propertyPost) | **POST** /v1/{scheme}/{region}/property | Create a new property record within a specified mydeposits member account
[**propertyPut**](PropertyServicesApi.md#propertyPut) | **PUT** /v1/{scheme}/{region}/property/{id} | Update an existing property



## propertyGet

> APIResponsesPropertyDetails propertyGet(scheme, region, id)

Return all information for this property

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
mydeposits_accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MydepositsDeveloperApi.PropertyServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let id = 789; // Number | Property ID
apiInstance.propertyGet(scheme, region, id, (error, data, response) => {
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
 **id** | **Number**| Property ID | 

### Return type

[**APIResponsesPropertyDetails**](APIResponsesPropertyDetails.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## propertyPost

> APIResponsesProperty propertyPost(scheme, region, body)

Create a new property record within a specified mydeposits member account

Allows creation of a new property record within the mydeposits member account for the chosen scheme and region.

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
mydeposits_accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MydepositsDeveloperApi.PropertyServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let body = new MydepositsDeveloperApi.APIModelsProperty(); // APIModelsProperty | Property entity to be created
apiInstance.propertyPost(scheme, region, body, (error, data, response) => {
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
 **body** | [**APIModelsProperty**](APIModelsProperty.md)| Property entity to be created | 

### Return type

[**APIResponsesProperty**](APIResponsesProperty.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## propertyPut

> APIResponsesProperty propertyPut(scheme, region, id, value)

Update an existing property

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';
let defaultClient = MydepositsDeveloperApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: mydeposits_accessCode
let mydeposits_accessCode = defaultClient.authentications['mydeposits_accessCode'];
mydeposits_accessCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MydepositsDeveloperApi.PropertyServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let id = 789; // Number | Property ID
let value = new MydepositsDeveloperApi.APIModelsProperty(); // APIModelsProperty | Models.Property
apiInstance.propertyPut(scheme, region, id, value, (error, data, response) => {
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
 **id** | **Number**| Property ID | 
 **value** | [**APIModelsProperty**](APIModelsProperty.md)| Models.Property | 

### Return type

[**APIResponsesProperty**](APIResponsesProperty.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

