# MydepositsDeveloperApi.APIModelsTenancy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thirdPartyReference** | **String** | Your reference for this tenancy. This should be unique across the member&#39;s account. Must be 40 characters or less | [optional] 
**branchID** | **String** | The mydeposits ID for the agent&#39;s branch that the landlord belongs to Only needed for agent accounts  | [optional] 
**depositHolder** | **String** | Agent / Landlord (required for Insurance only) | 
**depositAmount** | **String** | Value of the deposit, up to 2 decimal places&lt;br&gt;Maximum value for Insurance: 16666.67 Maximum value for Scotland: 99999.00  | 
**depositCapOverride** | **String** | Allow the member to override the 5 week deposit cap limit for the stated annual rent and deposit amount &#39;true&#39; if override is needed, otherwise omit from request  | [optional] 
**dateDepositPaid** | **String** | The date that the tenant paid the deposit (dd/MM/yyyy) | 
**tenancyStartDate** | **String** | The start date of the tenancy (dd/MM/yyyy) | 
**tenancyEndDate** | **String** | The end date of the tenancy, must be after the start date (dd/MM/yyyy) | 
**tenancyType** | [**TenancyType**](TenancyType.md) |  | 
**annualRentalAmount** | **String** | Manadtory for Insurance and Custodial. The annual rental amount of the tenancy in pounds | 
**landlordID** | **String** | The mydeposits landlord ID for landlord owning the property | 
**landlordRegistrationNumber** | **String** | Scotland Custodial only, the landlord&#39;s registration number given by the local authority the property resides in | [optional] 
**propertyID** | **String** | The mydeposits ID of the property this tenancy refers to | 
**leadTenant** | [**APIModelsTenant**](APIModelsTenant.md) |  | 
**jointTenants** | [**[APIModelsJointTenant]**](APIModelsJointTenant.md) | All additional tenants | [optional] 
**interestedParty** | [**APIModelsInterestedParty**](APIModelsInterestedParty.md) |  | [optional] 


