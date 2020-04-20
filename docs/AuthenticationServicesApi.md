# MydepositsDeveloperApi.AuthenticationServicesApi

All URIs are relative to *https://api.sandbox.mydeposits.co.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorisationCreate**](AuthenticationServicesApi.md#authorisationCreate) | **GET** /v1/{scheme}/{region}/authorize | Request authorisation for a given member
[**tokenCreate**](AuthenticationServicesApi.md#tokenCreate) | **POST** /v1/{scheme}/{region}/token | Request a token for a given member



## authorisationCreate

> InlineResponse200 authorisationCreate(scheme, region)

Request authorisation for a given member

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';

let apiInstance = new MydepositsDeveloperApi.AuthenticationServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
apiInstance.authorisationCreate(scheme, region, (error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tokenCreate

> APIResponsesToken tokenCreate(scheme, region, value)

Request a token for a given member

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';

let apiInstance = new MydepositsDeveloperApi.AuthenticationServicesApi();
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let value = new MydepositsDeveloperApi.APIModelsToken(); // APIModelsToken | 
apiInstance.tokenCreate(scheme, region, value, (error, data, response) => {
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
 **value** | [**APIModelsToken**](APIModelsToken.md)|  | 

### Return type

[**APIResponsesToken**](APIResponsesToken.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

