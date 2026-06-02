---
id: get_check_in_report
title: Get Check In Report
category: API Reference
---

# Get Check-in Report

**Source:** https://open.seatalk.io/docs/hr-application_get-check-in-report

## API Description

Use this API to obtain employees' check-in records according to a specific date range. 

Note:

- This API requires Get Check-in Summary Report permission and the relevant Data Scope

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/checkin/records

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
| employee_code_list | []string | Yes | A list of employee_codes to obtain the related check-in records | N/A | ["26161"] |

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| reports | []object | A list of report objects |
| ∟id | int | The check-in record ID |
| ∟employee_code | string | The employee_code of the employee |
| ∟check_in_time | string | The date and time of the check-in record |
| ∟check_in_location | object | The check-in location |
| ∟name | string | The location name |
| ∟address | string | The location address |
| ∟lat | string | The location latitude |
| ∟lng | string | The location longitude |
| ∟place_id | string | A textual identifier that uniquely identifies a place |
| ∟client_name | string | The client name of the check-in record |
| ∟description | string | The description of the check-in record |

Response Sample

```json
{
"code": 0,
"reports": [
{
"id": 953,
"employee_code": "25904",
"check_in_time": "2020-12-08T14:50:41+08:00",
"check_in_location": {
"name": "Vionic Takashimaya",
"address": "S&agrave;i G&ograve;n Center, Tầng B1, 92-94 Nam Kỳ Khởi Nghĩa, Bến Ngh&eacute;",
"lat": "10.7730537",
"lng": "106.700993",
"place_id": "ChIJ0VT2S0cvdTERdnmXEX95VHM"
},
"client_name": "name",
"description": ""
}
]
}
```