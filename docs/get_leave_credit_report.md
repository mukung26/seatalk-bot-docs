---
id: get_leave_credit_report
title: Get Leave Credit Report
category: API Reference
---

# Get Leave Credit Report

**Source:** https://open.seatalk.io/docs/hr-application_get-leave-credit-report

## API Description

Use this API to obtain employees' leave credit application records according to a specific date range.

Note:

- This API requires Get Leave Credit Application Summary Report permission and the relevant Data Scope

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/leave/credit_applications

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| start_date | string | Yes | The start date of the leave period | N/A | 2021-01-01 |
| end_date | string | Yes | The end date of the leave period | N/A | 2021-01-31 |
| employee_code_list | []string | Yes | A list of employee_codes to obtain the related leave records | N/A | ["26161"] |

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| applications | []object | A list of leave application objects |
| ∟id | int | The leave application ID |
| ∟leave_type_name | string | The leave type name that the leave application is applying for |
| ∟credit | string | The total duration supposed to be credited |
| ∟submitted_date | string | The date when the applicant submitted the leave application |
| ∟status | int | Refer to Leave & Credit Application Status for explanations |
| ∟applicant_employee_code | string | The employee_code of the applicant |
| ∟last_approver_code | string | The last approver's employee_code of the leave application |
| ∟last_action_time | string | The approval date time when action is done by the last approver |

Response Sample

```json
{
"code": 0,
"applications": [
{
"id": 526,
"leave_type_name": "National Service Leave",
"credit": "2",
"submitted_date": "2020-12-03",
"status": 4,
"applicant_employee_code": "5281",
"last_approver_code": "0",
"last_action_time": "1970-01-01T07:30:00+07:30"
}
]
}
```