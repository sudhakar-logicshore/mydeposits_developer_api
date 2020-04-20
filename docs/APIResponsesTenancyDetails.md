# MydepositsDeveloperApi.APIResponsesTenancyDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenancyID** | **String** | Our unique reference for this tenancy | [optional] 
**depositProtectionNumber** | **String** | Deposit protection number | [optional] 
**thirdPartyReference** | **String** | Your unique reference for this tenancy, if we have been given one | [optional] 
**tenancyType** | **String** | The type of tenancy this deposit is against | [optional] 
**depositHolder** | **String** | Insurance Only - Agent / Landlord | [optional] 
**depositAmount** | **String** | Stated value of the deposit, up to 2 decimal places | [optional] 
**protectedAmount** | **String** | Value of the protected deposit, up to 2 decimal places | [optional] 
**dateDepositPaid** | **String** | The date the landlord/agent received the deposit (dd/MM/yyyy) | [optional] 
**tenancyStartDate** | **String** | The date the tenancy started (dd/MM/yyyy) | [optional] 
**tenancyEndDate** | **String** | The date the tenancy ended (dd/MM/yyyy) | [optional] 
**annualRentalAmount** | **String** |  | [optional] 
**landlordRegistrationNumber** | **String** | Only needed for Scotland Custodial, landlord registration number for local authority that the property resides in | [optional] 
**landlord** | [**APIResponsesLandlord**](APIResponsesLandlord.md) |  | [optional] 
**property** | [**APIResponsesProperty**](APIResponsesProperty.md) |  | [optional] 
**leadTenant** | [**APIResponsesLeadTenant**](APIResponsesLeadTenant.md) |  | [optional] 
**jointTenants** | [**[APIResponsesJointTenant]**](APIResponsesJointTenant.md) |  | [optional] 
**interestedParty** | [**APIResponsesInterestedPartyDetails**](APIResponsesInterestedPartyDetails.md) |  | [optional] 
**branchID** | **String** |  | [optional] 
**currentStatus** | [**TenancyStatus**](TenancyStatus.md) |  | [optional] 


