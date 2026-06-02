---
id: get_claim_summary_reports
title: Get Claim Summary Reports
category: API Reference
---

# Get Claim Summary Reports

**Source:** https://open.seatalk.io/docs/hr-application_get-claim-report

## API Description

Use this API to obtain employees' claim report records (including entry details) according to a specific date range. 

Note:

- This API requires Get Claim Summary Report permission and the relevant Data Scope

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/claim/reports

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| start_date | string | Yes | The start date of the check-in period | N/A | 2021-01-01 |
| end_date | string | Yes | The end date of the check-in period | N/A | 2021-01-31 |
| employee_code_list | []string | Yes | A list of employee_codes to obtain the related claim records | N/A | ["5281"] |

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | refer to Error Code for explanations |
| reports | []object | A list of report objects |
| ∟id | int | The check-in record ID |
| ∟employee_code | string | The employee_code of the employee |
| ∟submission_time | string | The date and time when the applicant submitted the claim report |
| ∟application_no | string | The application number of the claim report |
| ∟base_currency | object | The base currency in the current claim system |
| ∟name | string | The name of the base currency |
| ∟code | string | The code of the base currency |
| ∟original_amount | string | The total original amount according to the base currency of the specific claim report |
| ∟entries | []object | The claim entries in one report |
| ∟entry_no | int | The sequence number of the entry |
| ∟exchange_rate | string | The exchange rate of the claim entry |
| ∟amount | string | The total amount according to the selected currency of the specific claim report |
| ∟amount_in_base_currency | string | The total amount according to the base currency of the specific claim report |
| ∟base_currency | object | The base currency in the current claim system |
| ∟name | string | The name of the base currency |
| ∟code | string | The code of the base currency |
| ∟receipt_date | string | The receipt date of the claim entry |
| ∟category_name | string | The category of the claim entry |
| ∟description | string | The description of this claim entry |
| ∟num_attachments | int | The number of attachments in this claim report |
| ∟other_details | object | Other details of this claim entry |
| ∟finance_checked | bool | Whether the finance has checked this entry |
| ∟payment_due_date | string | The payment due date of this claim report |
| ∟status | int | Refer to Claim Status for explanations |

Response Sample

```json
{
"code": 0,
"reports": [
{
"id": 2502,
"employee_code": "5281",
"submission_time": "2020-12-15T10:47:09Z",
"application_no": "CR-115",
"base_currency": {
"name": "Singapore Dollar",
"code": "SGD"
},
"original_amount": "3",
"entries": [
{
"entry_no": 1,
"exchange_rate": "1",
"amount": "3",
"amount_in_base_currency": "3",
"base_currency": {
"name": "Singapore Dollar",
"code": "SGD"
},
"receipt_date": "2020-12-15",
"category_name": "Travel - Air Ticket",
"description": "w",
"num_attachments": 2,
"other_details": {
"airline": "h",
"booking_reference": "h",
"class": "economy",
"departure": "yy",
"destination": "y",
"flight_type": "one_way",
"travel_date": "2020-12-15"
},
"finance_checked": false
}
],
"payment_due_date": "",
"status": 3
}
]
}
```

&nbsp;