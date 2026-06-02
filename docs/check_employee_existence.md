---
id: check_employee_existence
title: Check Employee Existence
category: Core Concepts
---

# Check Employee Existence

**Source:** https://open.seatalk.io/docs/check-employee-existenece

## API Description

Use this API to verify whether an employee exists/some employees exist in the organization or not via the user's SeaTalk ID. If the employee does exist, the API response will return his/her employee_code. 

Note:

- This API requires Check Employee Existence permission and the relevant Data Scope.

Request Method: `GET`

End Point: https://openapi.seatalk.io/contacts/v2/check_employees

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| id | string | Yes | One or more SeaTalk ID(s) | | 123 |

Request Sample

```
https://openapi.seatalk.io/contacts/v2/check_employees?id=123&id=456
```

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| employees | []object | A list of employees |
| ∟id | string | The SeaTalk ID of the user |
| ∟is_employee | bool | True if the SeaTalk user is an employee of the current organization False if the SeaTalk user is not an employee of the current organization |
| ∟employee_code | string | The employee_code of the employee Null if the user is not an employee of the current organization |
| ∟email | string | The email of the employee |

Response Sample

```
{
"code": 0,
"employees": [
{
"id": "123",
"is_employee": true,
"employee_code": "9120"
"email": "employee@seatalk.biz"
},
{
"id": "456",
"is_employee": false,
"employee_code": null
}
]
}
```