---
id: get_user_language_preference
title: Get User Language Preference
category: API Reference
---

# Get User Language Preference

**Source:** https://open.seatalk.io/docs/get-user-lang-pref

## API Description

Use this API to obtain the user's language preference setting on the SeaTalk mobile app.

Note:

- This API requires Get User Language Preference permission and the relevant Data Scope.

Request Method: `GET`

End Point: https://openapi.seatalk.io/contacts/v2/language_preference 

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default | Size Limit | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| employee_code | string | Yes | One or more employee_code(s) | N/A | Maximum: 500 | "123" |

Request Sample

```
https://openapi.seatalk.io/contacts/v2/language_preference?employee_code=123&employee_code=456
```

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| languages | dict | dict: the key is the employee_code of the employee and the value is the Language code |

Response Sample

```json
{
"code": 0,
"languages": {
"123": "zh-Hant",
"456": "en"
}
}
```