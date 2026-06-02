---
id: get_work_groups
title: Get Work Groups
category: API Reference
---

# Get Work Groups

**Source:** https://open.seatalk.io/docs/hr-application_get-work-group

## API Description

Use this API to obtain all the accessible work groups in the current organization.

Note:

- This API requires Get Work Groups in Organization Setting permission

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/work_group/details

Note:

- This API requires Get Work Groups in Organization Setting permission

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default |
| --- | --- | --- | --- | --- |
| id | int | No | - The work group ID - If not specified, the result will return all the accessible work groups | |

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| work_groups | []object | The list of work groups |
| ∟id | int | The work group ID |
| ∟name | string | The work group name |

Response Sample

```json
{
"code": 0,
"work_groups": [
{
"id": 10,
"name": "Weekend Working Group"
},
{
"id": 34,
"name": "Default Groups"
}
]
}
```