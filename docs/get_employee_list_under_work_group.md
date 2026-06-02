---
id: get_employee_list_under_work_group
title: Get Employee List Under Work Group
category: API Reference
---

# Get Employee List under Work Group

**Source:** https://open.seatalk.io/docs/hr-application_get-empl-list-work-group

## API Description

Use this API to obtain the employees under a specific work group.

Note:

- This API requires Get Employee List under Work Group permission

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/work_group/employees

Note:

- This API requires Get Employee List under Work Group permission

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| id | int | Yes | The work group ID | N/A | 12 |

Request Sample

```
https://openapi.seatalk.io/hr/v2/work_group/employees?id=12
```

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| employees | []object | The list of employee objects |
| ∟employee_code | string | The employee_code of the employee |
| ∟name | string | The name of the employee |
| ∟seatalk_id | string | The SeaTalk ID of the employees |

Response Sample

```json
{
"code": 0,
"employees": [
{
"employee_code": "11490",
"name": "jiayi",
"seatalk_id": "9151008207"
},
{
"employee_code": "23801",
"name": "Chen Yixin",
"seatalk_id": "1322961489"
}
]
}
```