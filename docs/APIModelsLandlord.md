# MydepositsDeveloperApi.APIModelsLandlord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**landlordType** | **String** | Whether this is a private or corporate landlord (CORPORATE / PRIVATE)  | 
**thirdPartyReference** | **String** | Your unique reference for this property. Must be 25 characters or less | [optional] 
**title** | [**Title**](Title.md) |  | 
**firstName** | **String** | The first name for either a private landlord, or the primary contact of a corporate landlord. Must be 50 characters or less  | 
**lastName** | **String** | The last name for either a private landlord, or the primary contact of a corporate landlord. Must be 50 characters or less  | 
**addressLine1** | **String** | Mandatory for Insurance and Scotland. Only mandatory for Custodial if address is to be supplied in request. Must be 100 characters or less  | 
**addressLine2** | **String** | Must be 100 characters or less | [optional] 
**addressLine3** | **String** | Must be 90 characters or less | [optional] 
**addressLine4** | **String** | Must be 80 characters or less | [optional] 
**postcode** | **String** | Mandatory for Insurance only and Scotland. Only mandatory for Custodial if address is to be supplied in request.  Must be 8 characters or less  | 
**countryCode** | [**Country**](Country.md) |  | [optional] 
**companyName** | **String** | Required for corporate landlords. Must be 100 characters or less  | [optional] 
**companyRegistrationNumber** | **String** | Must be 15 characters or less | [optional] 
**registeredAddressLine1** | **String** | This must be populated if there is a company name.   Required for corporate landlords for Insurance only. Must be 100 characters or less  | [optional] 
**registeredAddressLine2** | **String** | Required for corporate landlords for Insurance only. Must be 100 characters or less  | [optional] 
**registeredAddressLine3** | **String** | Required for corporate landlords for Insurance only. Must be 100 characters or less  | [optional] 
**registeredPostcode** | **String** | Required for corporate landlords for Insurance only. This must be populated if there is a company name. Must be 8 characters or less  | [optional] 
**homeTelephone** | **String** | Must be between 10 and 15 characters if provided | [optional] 
**mobileTelephone** | **String** | Email address or mobile is mandatory. Must be between 10 and 15 characters if provided  | [optional] 
**workTelephone** | **String** | Must be between 10 and 15 characters if provided | [optional] 
**emailAddress** | **String** | Email address or mobile is mandatory. Must be 100 characters or less  | [optional] 
**branchID** | **String** | Branch ID if the landlord belongs to a branch | [optional] 


