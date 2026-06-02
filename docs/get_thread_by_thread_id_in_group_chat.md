---
id: get_thread_by_thread_id_in_group_chat
title: Get Thread By Thread Id In Group Chat
category: API Reference
---

# Get Thread by Thread ID in Group Chat

**Source:** https://open.seatalk.io/docs/Get-Thread-by-Thread-ID

API Updates: Effective from 14 November 2024.
Sending Images, Files and Videos to 1-1 chats with Bots&nbsp;on SeaTalk App: Requires SeaTalk App version 3.50 or above, releasing on 28 November 2024, for full functionality.

## API Description

Retrieve all messages within a thread of a group that the bot is a member of, including the root message and all replies. Images, files and videos sent to bots can be downloaded with the URL starting with https://openapi.seatalk.io/messaging/v2/file/. For more information, please refer to this document (https://open.seatalk.io/docs/Introduction-to-Received-Message-Types). The rate limit for this endpoint is 100 requests/min and 20 requests/sec.

Message Retrieval Rules:

- For thread replies sent before the bot joins the group, retrieval is limited by the "Chat History For New Members" setting at the time the bot was added.

- Whisper messages, and deleted messages will not be returned.

- Available thread replies will still be returned even if the root message has been deleted, and vice versa.

- If the specified thread_id points to an unthreaded message, the API will return error code 4010.

- Only replies sent in the past 7 days will be available.

Note:

- To call this API, your app must enable the bot capability and have an Online status. See more at Quickly build a Bot.

- This API requires Get Thread by Thread ID permission and the relevant Availability scope.

- This API is limited to 100 requests per minute under one app ID.

Request Method: `GET`

End Point: https://openapi.seatalk.io/messaging/v2/group_chat/ (https://openapi.seatalk.io/messaging/v2/group_chat)get_thread_by_thread_id

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |
| Content-Type | string | Yes | Request header format | N/A | application/json |

Parameter

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| group_id | string | Yes | The group chat ID | N/A | "abcdef" |
| thread_id | string | Yes | The thread ID | N/A | |
| page_size | int | No | Number of messages included in one response for each list. It must be an integer between 1-100 (inclusive). Remarks: In very few cases, it is possible that due to the large size of the message body requested, it may not be possible to return the desired number of pages. | 50 | 50 |
| cursor | string | No | - Pagination markup. It is not filled in the first request, indicating traversal from the latest message. - When there will be more messages, the next cursor will be returned in the response of the current request, and the next traversal can use the cursor to get the rest of chat histories. | N/A | gmrdPA7cyZP2qGJkM-hatoA7SySeNmOlDyv8x1p9K0pxvJPxs_qL5Y2OL2-Dkoq1VH_FtDccHq5GrpzuMK4pyw== |

Request Sample

https://openapi.seatalk.io/messaging/v2/group_chat/get_thread_by_thread_id?group_id=abcdef&amp;thread_id=uytreb&amp;page_size=50
&nbsp;

## Response Parameter

| Parameter | Type | Description | Size/Length Limit |
| --- | --- | --- | --- |
| code | int | Refer to the Error Code for explanation | |
| next_cursor | string | Cursor info for the next request. Put it in the "cursor" field in the next request. If the cursor is empty, it means there is no next request to be called. | |
| thread_messages | [] object | List of Message object | |
| ∟message_id | string | The message ID | |
| ∟quoted_message_id | string | - The message ID of the quoted message. - Return empty if not quoting any message. | |
| ∟thread_id | string | Effective from 11 June 2024. The thread ID. Provided if the message is part of a thread. | |
| ∟sender | object | | |
| ∟seatalk_id | string | The SeaTalk ID of the message sender. | |
| ∟employee_code | string | - The employee code of the message sender. - Return empty if the message sender does not belong to the same org as bot. | |
| ∟email | string | - The email of the message sender. - Return empty if the message sender does not belong to the same org as bot. | |
| ∟sender_type | int | 1: User 2: Bot 3: System Account | |
| ∟message_sent_time | unit64 | The time when the message is sent. | |
| ∟tag | string | The message type. Allowed tags: "text", "combined_forwarded_message_history", "image", "file", "video" For more details on suppported message types for bots, refer to this document. | |
| ∟text | object | The text message object | |
| ∟plain_text | string | The text message content | |
| ∟last_edited_time | unit64 | - Return the message's most recent edit time - Return 0 if the message is not edited | |
| ∟mentioned_list | [] object | List of mappings between usernames and SeaTalk IDs of users or bots | |
| ∟username | string | - Mention specific user or bot: User's current username inserted into the plain_text message content - Mention all: Empty | |
| ∟seatalk_id | string | - Mention specific user or bot: SeaTalk ID | |
| ∟employee_code | string | - Mention specific user: Employee Code - Mention specific bot: Empty | |
| ∟email | string | - Mention specific user: Email - Mention specific bot: Empty | |
| ∟combined_forwarded_chat_history | object | The combined forwarded chat history message object | |
| ∟content | Multi-layered Array List of Message object | Support returning up to 3 layers of combined forwarded chat history | |
| ∟image | object | The image object | |
| ∟content | string | The URL of the image. Requires a valid API token to access. The image message expires in 7 days and cannot be downloaded using the URL subsequently. | Max: 250 MB |
| ∟file | object | The file object | |
| ∟content | string | The URL of the file. Requires a valid API token to access. The file message expires in 7 days and cannot be downloaded using the URL subsequently. | Max: 250 MB |
| ∟filename | string | The file name with extension; files with no extension specified will be sent as unidentified files | |
| ∟video | object | The video object | Max: 100 characters |
| ∟content | string | The URL of the video. Requires a valid API token to access. The video message expires in 7 days and cannot be downloaded using the URL subsequently. | Max: 250 MB |
| ∟interactive_message | object | The interactive_message object | |
| ∟elements | object | The interactive message elements | |

Response Sample

```
{
"code": 0,
"next_cursor": "zswdefvffggff",
"thread_messages": [

//unsupported tag
{
"message_id": "abcdefghi",
"quoted_message_id": "",
"sender": {
"seatalk_id": "123456789",
"employee_code": "abcdefg"
},
"message_sent_time": 1687944555,
"tag": "note",
"text":null,
"combined_forwarded_chat_history":null,
"image":null,
"video":null,
"file":null
},

//text
{
"message_id": "bcdefghiu",
"quoted_message_id": "",
"sender": {
"seatalk_id": "123456789",
"employee_code": "abcdefg"
},
"message_sent_time": 1687944533,
"tag": "text",
"text": {
"plain_text": "@User1 Today is Monday",
"last_edited_time": 1710919702,
"mentioned_list": [
{
"username": "User1",
"seatalk_id": "234567890"
}
]
},
"combined_forwarded_chat_history": null
},

//combined forwarded 
{
"message_id": "bcdefghiu",
"quoted_message_id": "",
"sender": {
"seatalk_id": "123456789",
"employee_code": "abcdefg"
},
"message_sent_time": 1687944533,
"tag":"combined_forwarded_chat_history",
"combined_forwarded_chat_history":{
"content":[
{
"message_id":"",
"quoted_message_id":"",
"sender":{
"seatalk_id":"9440420845",
"employee_code":"e_n29j6jjq",
"sender_type":1
},
"message_sent_time":1693463635,
"tag":"text",
"text":{
"plain_text":"Hello, world!",
"last_edited_time":0,
"mentioned_list":[

]
},
"combined_forwarded_chat_history":null,
"image":null,
"video":null,
"file":null 
},
{
"message_id":"",
"quoted_message_id":"",
"sender":{
"seatalk_id":"9440420845",
"employee_code":"e_n29j6jjq",
"sender_type":1
},
"message_sent_time":1693463639,
"tag":"text",
"text":{
"plain_text":"Hello, world!",
"last_edited_time":0,
"mentioned_list":[

]
},
"combined_forwarded_chat_history":null,
"image":null,
"video":null,
"file":null
}
]
},
"image":null,
"video":null,
"file":null
}, 

//image
{
"message_id": "bcdefghiu",
"quoted_message_id": "",
"sender": {
"seatalk_id": "123456789",
"employee_code": "abcdefg"
},
"message_sent_time": 1687944533,
"tag":"image",
"text":null,
"combined_forwarded_chat_history":null,
"image": {
"content":"https://openapi.test.seatalk.io/messaging/v2/file/asjewnJHe7dfjsWK8LksdmsMN90JjsdwekjU1efwefscvLKJ"
},
"video":null,
"file":null

},

//video
{
"message_id": "bcdefghiu",
"quoted_message_id": "",
"sender": {
"seatalk_id": "123456789",
"employee_code": "abcdefg"
},
"message_sent_time": 1687944533,
"tag":"image",
"text":null,
"combined_forwarded_chat_history":null,
"image":null,
"video":{
"content":"https://openapi.test.seatalk.io/messaging/v2/file/uieLdasuUWhebwrBksadfjBMSFIUEmwkefjhgjksdJKK8GJSFNsdjk"
},
"file":null

},

//file
{
"message_id": "bcdefghiu",
"quoted_message_id": "",
"sender": {
"seatalk_id": "123456789",
"employee_code": "abcdefg"
},
"message_sent_time": 1687944533,
"tag":"image",
"text":null,
"combined_forwarded_chat_history":null,
"image":null,
"video":null,
"file":{
"content":"https://openapi.test.seatalk.io/messaging/v2/file/lskdfewnOKNFiewbeBKuKEKQW7JWEfjefnqwesdi8JFNekqlkfwqef",
"filename":"sample.txt"
}
},

//interactive message
{
"message_id": "bcdefghiu",
"quoted_message_id": "",
"sender": {
"seatalk_id": "123456789",
"employee_code": "abcdefg"
},
"message_sent_time": 1687944533,
"tag":"interactive_message",
"text":null,
"combined_forwarded_chat_history":null,
"image":null,
"video":null,
"file":null,
"interactive_message": {
"elements": [
{
"element_type": "button_group",
"title": null,
"description": null,
"button": null,
"button_group": [
{
"button_type": "callback",
"text": "callback_sdsd",
"mobile_link": null,
"desktop_link": null
}
],
"image": null
}
]
}
]
}
```