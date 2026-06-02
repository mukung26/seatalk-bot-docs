---
id: event__group_chat_converted_to_external_group
title: Event  Group Chat Converted To External Group
category: Events
---

# Event: Group Chat Converted to External Group

**Source:** https://open.seatalk.io/docs/group_chat_converted_to_external_group

### Event Description

When the &lrm;`group_chat_converted_to_external_group` event is triggered, it means that a group chat your bot is in has been converted from an internal group within the organisation your bot belongs to into an external group.

This event allows your bot to detect when a group chat has become external and apply any required security measures to prevent sensitive information from being leaked to external parties.

Note:

- No event callback will be sent if the bot is not online.

### Event Parameter

Header

| Parameter | Type | Description |
| --- | --- | --- |
| Content-Type | string | Request header format |
| Signature | string | A signature to ensure that the request is sent by SeaTalk |

Body

| Parameter | Type | Description |
| --- | --- | --- |
| event_id | string | The ID of the event |
| event_type | string | The type of the event. It will be "group_chat_converted_to_external_group" in this case |
| timestamp | unit64 | The time when this event happened |
| app_id | string | The ID of the app to receive the event notification |
| event | object | Event-specific information |
| ∟group_id | string | The ID of the group chat which has been converted into an external group |
| ∟operator | Object | Information of the admin/owner who performed the conversion. |
| ∟seatalk_id | string | The SeaTalk ID of the operator. |
| ∟employee_code | string | The employee code of the operator. |
| ∟email | string | The email of the operator. |

Request Body Sample

```json
{
"event_id": "1234567",
"event_type": "group_chat_converted_to_external_group",
"timestamp": 1779186268,
"app_id": "abcdefghiklmn",
"event": {
"group_id": "qwertyui",
"operator": {
"seatalk_id": "1234567890",
"employee_code": "e_12345678",
"email": "sample@seatalk.biz"
}
}
}
```