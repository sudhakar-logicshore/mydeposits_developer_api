# MydepositsDeveloperApi.LandlordServicesApi

All URIs are relative to *https://api.sandbox.mydeposits.co.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**landlordGet**](LandlordServicesApi.md#landlordGet) | **GET** /v1/{scheme}/{region}/landlord/{id} | Retrieve landlord entity details for a landlord under a specified mydeposits member account
[**landlordPost**](LandlordServicesApi.md#landlordPost) | **POST** /v1/{scheme}/{region}/landlord | Create new landlord entity within a specified mydeposits member account
[**landlordPut**](LandlordServicesApi.md#landlordPut) | **PUT** /v1/{scheme}/{region}/landlord/{id} | Update a landlord entity within a specified mydeposits member account



## landlordGet

> APIResponsesLandlordDetails landlordGet(scheme, region, id)

Retrieve landlord entity details for a landlord under a specified mydeposits member account

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

let apiInstance = new MydepositsDeveloperApi.LandlordServicesApi();
let id = 789; // Number | Landlord ID
apiInstance.landlordGet(scheme, region, id, (error, data, response) => {
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
 **id** | **Number**| Landlord ID | 

### Return type

[**APIResponsesLandlordDetails**](APIResponsesLandlordDetails.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## landlordPost

> APIResponsesLandlord landlordPost(scheme, region, body)

Create new landlord entity within a specified mydeposits member account

Allows creation of a new landlord entity within mydeposits. This record can be used when creating a new tenancy record.

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

let apiInstance = new MydepositsDeveloperApi.LandlordServicesApi();
let body = new MydepositsDeveloperApi.APIModelsLandlord(); // APIModelsLandlord | The landlord object that needs to be added to the agent account
apiInstance.landlordPost(scheme, region, body, (error, data, response) => {
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
 **body** | [**APIModelsLandlord**](APIModelsLandlord.md)| The landlord object that needs to be added to the agent account | 

### Return type

[**APIResponsesLandlord**](APIResponsesLandlord.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## landlordPut

> APIResponsesLandlord landlordPut(scheme, region, id, value)

Update a landlord entity within a specified mydeposits member account

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

let apiInstance = new MydepositsDeveloperApi.LandlordServicesApi();
let id = 789; // Number | Landlord ID
let value = new MydepositsDeveloperApi.APIModelsLandlord(); // APIModelsLandlord | Models.Landlord
apiInstance.landlordPut(scheme, region, id, value, (error, data, response) => {
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
 **id** | **Number**| Landlord ID | 
 **value** | [**APIModelsLandlord**](APIModelsLandlord.md)| Models.Landlord | 

### Return type

[**APIResponsesLandlord**](APIResponsesLandlord.md)

### Authorization

[mydeposits_accessCode](../README.md#mydeposits_accessCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

