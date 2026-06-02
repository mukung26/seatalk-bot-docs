---
id: get_leave_balance_report
title: Get Leave Balance Report
category: API Reference
---

# Get Leave Balance Report

**Source:** https://open.seatalk.io/docs/hr-application_get-leave-balance-report

## API Description

Use this API to obtain employees' monthly balances.

If an earlier month is specified, the result will show the employees' leave balances as of the last day of that month. If the current month is specified, the result will show the current balance. 

Note:

- This API requires Get Leave Balance Summary Report permission and the relevant Data Scope

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/leave/balances

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| month | string | Yes | The start date of the leave period | N/A | 202101 |
| employee_code_list | []string | Yes | A list of employee_codes to obtain related level balance records | N/A | "23801" |

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| employees | []object | A list of employee |
| ∟employee_code | string | The employee_code of the employee |
| ∟leave_types | []object | A list of leave types |
| ∟leave_type_name | string | The leave Type Name |
| ∟leave_rule_name | string | The leave rule name |
| ∟entitled | string | The number of days of leave granted to the employee through periodical entitlement (only for periodically accrued leave types) |
| ∟carryover | string | The number of days of leave carried from the previous accrual period (only for periodically accrued leave types) |
| ∟forfeit | string | The number of days of carried leave forfeited due to expiration |
| ∟adjust | string | The number of leave days of carried leave forfeited due to expiration through credit application/manual adjustment |
| ∟total | string | = Entitled + Carryover + Adjust - Forfeit |
| ∟taken | string | The number of days of leave approved |
| ∟balance | string | = Total - Taken |

Response Sample

```json
{
"code": 0,
"employees": [
{
"employee_code": "23801",
"leave_types": [
{
"leave_type_name": "Annual Leave!!",
"leave_rule_name": "",
"entitled": "0",
"carryover": "0",
"forfeit": "0",
"adjust": "0",
"total": "0",
"taken": "0",
"balance": "0"
},
{
"leave_type_name": "Sick Leave",
"leave_rule_name": "",
"entitled": "24",
"carryover": "0",
"forfeit": "0",
"adjust": "0",
"total": "24",
"taken": "0",
"balance": "24"
}
]
}
]
}
```