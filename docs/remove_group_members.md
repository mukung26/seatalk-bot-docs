---
id: remove_group_members
title: Remove Group Members
category: Core Concepts
---

# Remove Group Members

**Source:** https://open.seatalk.io/docs/Remove-Group-Members

## API Description

This API allows a bot to remove group members. 

- Number of users in each API call must be within 1-30 users.

- Rate Limit: 10 groups per app per minute

- All users in the member list must be in the service scope of the Bot, else they will not be removed from the group

Request Method: `POST`End Point: https://openapi.seatalk.io//messaging/v2/group_chat/remove_group_members

## Request Parameter

### Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |
| Content-Type | string | Yes | Request header format | N/A | application/json |

### Body

| Parameter | Type | Mandatory | Description | Default | Length Limit | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| group_id | string | Yes | The group chat ID. Ensure target group has setting 'Allow members to add members' = ON. | N/A | N/A | "abcdef" |
| employee_codes | string[] | Yes | The list of users to be removed from the group. Owners/admins cannot be removed from the group. Only users in the bot's service scope can be removed from the group. Regardless of the duplicates, the maximum size will still be 30, and at least 1 member. | N/A | N/A | Refer to request sample below |

### Request Sample

```
{
"group_id": "xxx",
"employee_codes": ["xxx1", "xxx2","xxx3"],
}
```

## Response Parameter

| Parameter | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanation. 0 if updating the message successfully. |
| message | string | The error description of code, following the error code. "success" if code = 0 |
| total_num | int | The total number of employees in this request |
| success_num | int | The number of employees successfully removed from the group |
| error_num | int | The number of employees failed to be removed from the group |
| remove_failed | []object | List of employees who were failed to be removed from the group. Will only be filled in if code = 0 |
| ∟email | string | The email of the employee that was failed to be removed |
| ∟employee_code | string | The employee_code of the user who failed to be removed from the group |
| ∟error_code | int | Error code of the user who failed to be removed from the group |
| ∟error_message | string | The description of error_code, following the error code. |

### Error Codes

| Value | Description | Resolution |
| --- | --- | --- |
| 101 | API is rejected due to rate limit control | Ensure that the API request complies with the rate limit policy of 10 Groups/Bot/min |
| 102 | Request body contains invalid input | Ensure that the employee_code contains 1- 30 valid employee codes. |
| 3001 | User not found with the current code | Check whether the code belongs to a valid employee within the app's service/data scope and check whether the user is indeed inside the group chat to be removed. |
| 3003 | User is not signed in to SeaTalk | Ensure that the user has signed in on SeaTalk |
| 4012 | No permission | Ensure that the group owner/admin has allowed members to add/remove members. Ensure that the bot has not tried to remove any group owner/admin. |
| 4013 | This user cannot be contacted due to your organisation's policy or theirs. | Check whether the particular user is allowed to be added into your group. |
| 7000 | Group chat not found with the current code | Ensure that the group ID passed in is correct |
| 7001 | Bot is not a member of the group chat | Ensure that the group ID passed in is correct and that the bot is in the group chat |
| 7004 | User is not a member of the group chat | Ensure that the user is in the group chat |

### Response Sample

API-level Failure Sample:

```json
{
"code": 4012,
"message": "No permission",
"total_num": 5,
"success_num": 0,
"error_num": 5
}
```

API-level Success; User-level Failure Sample: 

```
{
"code": 0,
"message": "success",
"total_num": 5,
"success_num": 3,
"error_num": 2,
"add_failed": [
{
"email": "junkai.la@company.com",
"employee_code": "e_pfu5zya3",
"error_code": 4013,
"error_message": "This user cannot be contacted due to their organisation's policy."
},
{
"email": "manny.del@company.com",
"employee_code": "a_djx2gjs8",
"error_code": 3001,
"error_message": "User not found with the current code"
}, 
],
}
```