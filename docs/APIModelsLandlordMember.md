# MydepositsDeveloperApi.APIModelsLandlordMember

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**landlordType** | **String** | Private / Corporate | 
**title** | [**Title**](Title.md) |  | 
**firstName** | **String** | Must be 50 characters or less | 
**lastName** | **String** | Must be 50 characters or less | 
**addressLine1** | **String** | Must be 100 characters or less | 
**addressLine2** | **String** | Must be 100 characters or less | [optional] 
**addressLine3** | **String** | Must be 90 characters or less | [optional] 
**addressLine4** | **String** | Must be 80 characters or less | [optional] 
**postcode** | **String** | Must be 8 characters or less | 
**countryCode** | **String** | This is required for Custodial, and must be GB for Insurance | 
**companyName** | **String** | Required for corporate landlords Must be 100 characters or less  | [optional] 
**companyRegistrationNumber** | **String** | Must be 15 characters or less | [optional] 
**registeredAddressLine1** | **String** | Required for Insurance corporate landlords only Must be 100 characters or less  | [optional] 
**registeredAddressLine2** | **String** | Must be 100 characters or less | [optional] 
**registeredAddressLine3** | **String** | Must be 100 characters or less | [optional] 
**registeredPostcode** | **String** | Required for Insurance corporate landlords only Must be 8 characters or less  | [optional] 
**homeTelephone** | **String** | Private landlords - must provide either a home or mobile phone number Corporate landlords (Custodial) - must provide either a home or mobile phone number Must be 15 characters or less  | [optional] 
**mobileTelephone** | **String** | Private landlords - must provide either a home or mobile phone number Corporate landlords (Custodial) - must provide either a home or mobile phone number Corporate landlords (Insurance) - must provide either a work or mobile phone number Must be 15 characters or less  | [optional] 
**workTelephone** | **String** | Corporate landlords (Insurance) - must provide either a work or mobile phone number Must be 15 characters or less  | [optional] 
**branchTelephone** | **String** | For Custodial corporate landlords only - must provide a branch phone number Must be 15 characters or less  | [optional] 
**emailAddress** | **String** | Must be 100 characters or less | 
**workEmailAddress** | **String** | Required for Corporate Custodial members only. ust be 255 characters or less  | [optional] 
**dateOfBirth** | **String** | Required for private landlords (E&amp;W Insurance + Custodial) and for corporate landlords (E&amp;W Custodial only). Must be at least 16 years old to join the scheme. Must be in the format dd/mm/yyyy. Must be 10 characters  | [optional] 


