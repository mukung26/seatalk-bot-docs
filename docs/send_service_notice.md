---
id: send_service_notice
title: Send Service Notice
category: Core Concepts
---

# Send Service Notice

**Source:** https://open.seatalk.io/docs/messaging_send-service-notice_i18n

## API Description

Use this API to send structured Service Notice messages to employee(s) in SeaTalk. Service Notice Message is a dedicated message type for app developer or service provider to inform user with clear information and action guidance to stimulate user engagement. The message will be displayed in a "App Center" service channel and allow user to click to redirect to specific content page inside of custom app.

Request Method: `POST`

End Point: https://openapi.seatalk.io/messaging/v2/service_notice/i18n

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | obtained through the Get App Access Token API | | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |
| Content-Type | string | Yes | Content-Type | | application/json |

Body

| Parameter | Type | Mandatory | Length/Size Limit | Description | Default |
| --- | --- | --- | --- | --- | --- |
| default_language | string | Yes | | Language code of a default language, which will be applied if user preferred language is not within the list provided in messages field. Refer to Languages table below for supported languages. | |
| messages | {string: } | Yes | 100 | Key is the language code, refer to Languages table below for supported languages. | |
| employee_codes | []string | Yes | 100 | A list of employee_code that will be the recipients of the service notice | |

Notice Message

| Parameter | Type | Mandatory | Length/Size Limit | Description | Default | Demo |
| --- | --- | --- | --- | --- | --- | --- |
| title | string | Yes | 60 characters | Title of the service notice message. | | New Update Is Available |
| subtitle | string | Yes | 1000 characters | Subtitle of the service notice message. It'll be also used as preview message in mobile push notification. | | Version 2.0.1 is released |
| body | string | No | 60 characters | A short and brief message content which will be highlighted in bold style. | | |
| description | string | No | 200 characters | A supplementary information to elaborate the contact in "body" section. | | |
| alert | object | No | | A color text to indicate different status of the service message. | | |
| ∟level | int | No | | Refer to Notice Alert Levels table below. The label color will be different of each level. | 1 | |
| ∟label | string | No | 100 characters | The text content. | | |
| button | object | No | | A clickable button on service notice message in client side. It allows user to click and redirect to certain customized content page. | | |
| ∟link | string | No | 2000 characters | A customized redirection link pointing to certain customized content page. While user's clicking on the "button", SeaTalk App will pass this link to corresponding custom app. The custom app should consume and resolve this link to redirect to certain content page. Find more details in Service Notice Redirection section of this doc. | | Sample URL: seatalk://application/rn/{your_app_id}/{your_path}?{your_params} |
| ∟label | string | No | 60 characters | The text content of "button" | | |

Languages

| Code | Type | Description |
| --- | --- | --- |
| en | string | English |
| zh-Hant | string | Traditional Chinese |
| zh-Hans | string | Simplified Chinese |
| id | string | Bahasa Indonesia |
| th | string | Thai |
| vi | string | Vietnamese |

Notice Alert Levels

| Value | Type | Description |
| --- | --- | --- |
| 0 | int | Default (blue color) |
| 1 | int | Success (green color) |
| 2 | int | Warning (yellow color) |
| 3 | int | Critical (red color) |

Request Body Sample

```json
{
"default_language": "en",
"messages": {
"en": {
"title": "New Update Is Available!",
"subtitle": "Version 2.0.1 is released",
"description": "A few bug fixes and performance optimizations",
"button": {
"label": "Details",
"Link": "https://seatalk.seagroup.com/download"
}
},
"zh-Hans": {
"title": "更新通知!",
"subtitle": "新版本2.0.1发布",
"description": "问题修复和性能优化",
"button": {
"label": "详情",
"Link": "https://seatalk.seagroup.com/download"
}
}
},
"employee_codes": [
"10000",
"20000"
]
}
```

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | refer to Error Code |
| failed_offsets | []int | failed recipients offsets (starting from 0) |
| failed_reasons | []string | failed reasons |

Response Sample

```json
{
"code": 0,
"failed_offsets": [],
"failed_reasons": []
}
```

Service Notice Message Structure

![31.api_service_notice.jpg](https://open.seatalk.io/apidocs/seagroup/res/31.api_service_notice.jpg)

Service Notice Redirection

To integrate with the Service Notice capability of SeaTalk and redirect to specific page inside of your customize app upon user's clicking, you may provide a Redirection URL to the `Link` parameter of service notice message.

URL Template

```
seatalk://application/rn/{your_app_id}/{your_path}?{your_params}
```

Variable List

| # | Name of variable | Description |
| --- | --- | --- |
| 1 | your_app_id | The SeaTalk Open Platform app_idassociated with your app |
| 2 | your_path | This path will be used to resolve the exact page of your app that will be navigated to. It must be a valid path that was defined by you when implementing ISeaTalkApplication in customize app. |
| 3 | your_param | Optional variable. These are any parameters that you may want to pass as props to the specific page in customize app. |