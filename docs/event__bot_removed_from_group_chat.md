---
id: event__bot_removed_from_group_chat
title: Event  Bot Removed From Group Chat
category: Events
---

# Event: Bot Removed From Group Chat

**Source:** https://open.seatalk.io/docs/Event-Bot-Removed-From-Group-Chat

### Event Description

This event is triggered when the bot has been removed from a group successfully due to manual removal or group disbandment.

### Event Parameter

Header

| Parameter | Type | Description |
| --- | --- | --- |
| Content-Type | string | Request header format |
| Signature | unit64 | A signature to ensure that the request is sent by SeaTalk |

Body

| Parameter | Type | Description |
| --- | --- | --- |
| event_id | string | The ID of the event |
| event_type | string | The type of the event. It will be "bot_removed_from_group_chat" in this case |
| timestamp | unit64 | The time when this event happened |
| app_id | string | The ID of the app to receive the event notifi |
| event | object | Event-specific information |
| ∟group_id | string | The ID of the group chat |
| ∟remover | object | Information of the user who has removed the bot from the group chat |
| ∟seatalk_id | string | The SeaTalk ID of the remover |
| ∟employee_code | string | - The employee_code of the remover - Return empty if the remover and the bot do not belong to the same organisation |
| ∟email | string | - The email of the remover - Return empty when the user and the bot do not belong to the same organisation. |

Request Body Sample

```
{
"event_id": "1234567",
"event_type": "bot_removed_from_group_chat",
"timestamp": 1687764109,
"app_id": "abcdefghiklmn",
"event": {
"group_id": "qwertyui",
"remover": {
"seatalk_id": "1234567890",
"employee_code": "e_12345678"
"email": "sample@seatalk.biz"
}
}
}
```