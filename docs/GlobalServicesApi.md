# MydepositsDeveloperApi.GlobalServicesApi

All URIs are relative to *https://api.sandbox.mydeposits.co.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protectionRegionsGet**](GlobalServicesApi.md#protectionRegionsGet) | **GET** /v1/protectionregions | List of regions served by mydeposits
[**protectionSchemesGet**](GlobalServicesApi.md#protectionSchemesGet) | **GET** /v1/{region}/protectionschemes | List of available Deposit Protection Schemes within this region
[**schemeRulesGet**](GlobalServicesApi.md#schemeRulesGet) | **GET** /v1/{scheme}/{region}/schemerules | Returns a link to the Scheme Rules for this scheme and region



## protectionRegionsGet

> [String] protectionRegionsGet()

List of regions served by mydeposits

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';

let apiInstance = new MydepositsDeveloperApi.GlobalServicesApi();
apiInstance.protectionRegionsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## protectionSchemesGet

> [String] protectionSchemesGet(region)

List of available Deposit Protection Schemes within this region

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';

let apiInstance = new MydepositsDeveloperApi.GlobalServicesApi();
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
apiInstance.protectionSchemesGet(region, (error, data, response) => {
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
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## schemeRulesGet

> APIResponsesSchemeRules schemeRulesGet(region, scheme)

Returns a link to the Scheme Rules for this scheme and region

### Example

```javascript
import MydepositsDeveloperApi from 'mydeposits_developer_api';

let apiInstance = new MydepositsDeveloperApi.GlobalServicesApi();
let region = "region_example"; // String | ID of the selected deposit protection Region as returned by protectionregions method.
let scheme = "scheme_example"; // String | ID of the selected deposit protection Scheme as returned by protectionschemes method.
apiInstance.schemeRulesGet(region, scheme, (error, data, response) => {
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
 **region** | **String**| ID of the selected deposit protection Region as returned by protectionregions method. | 
 **scheme** | **String**| ID of the selected deposit protection Scheme as returned by protectionschemes method. | 

### Return type

[**APIResponsesSchemeRules**](APIResponsesSchemeRules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

