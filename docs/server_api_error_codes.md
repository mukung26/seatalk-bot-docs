---
id: server_api_error_codes
title: Server Api Error Codes
category: API Reference
---

# Server API Error Codes

**Source:** https://open.seatalk.io/docs/reference_server-api-error-code_

SeaTalk will return HTTP status 200 upon successful request. However, this does not mean that the action was successful. A code is returned in the response body to give a description of the error. Any non-zero code indicates the occurrence of an error.

Please refer to the table below for the error messages and corresponding resolutions.

| Value | Description | Resolution |
| --- | --- | --- |
| 0 | Success | / |
| 2 | Server error | / |
| 5 | Resource not found | / |
| 8 | Server error | / |
| 100 | App access token is expired or invalid | - If the token is expired/invalid, call the Get App Access Token API to get a valid token - Another common error is not specifying the authorization token type as "Bearer" |
| 101 | API is rejected due to rate limit control | Ensure that the API request complies with the rate limit policy. You can refer to API Documentation Guide for the rate limits of different APIs |
| 102 | Request body contains invalid input | Ensure that the request body has all the fields required and inputs them correctly |
| 103 | App permission denied | Ensure that the app has the approved API permission |
| 104 | Bot capability is not turned on | Ensure that the bot capability has been turned on for the app |
| 105 | App is not online | Ensure that the app status is set to online |
| 1000 | App Secret is invalid | Ensure that the app secret passed in is valid |
| 2000 | Single Sign-On Token is expired or invalid | / |
| 2001 | User is not an employee of current company | / |
| 2002 | Token belongs to another app | / |
| 2003 | Cursor invalid | Check whether the cursor passed in to the pagination API is correct |
| 2004 | Cursor expired | / |
| 3000 | User not found with the current email | Check whether the email belongs to a valid employee within the app's service/data scope |
| 3001 | User not found with the current code | Check whether the code belongs to a valid employee within the app's service/data scope |
| 3002 | User is not a subscriber of the bot | Ensure that the user is currently a subscriber of the bot |
| 3003 | User is not signed in to SeaTalk | Ensure that the user has signed in on SeaTalk |
| 3004 | Invalid custom field name | Ensure that the custom field name is valid |
| 4000 | Message type is invalid | Ensure that the "tag" field is entered with a supported message type |
| 4001 | Message exceeds the maximum length | Ensure that the content of the text/image is within the valid length/size limit |
| 4002 | Message sending failed | / |
| 4003 | Message cannot be empty | Ensure that the message content is not empty |
| 4004 | Fail to fetch the quoted message due to SeaTalk's internal error. Please try again. | / |
| 4005 | The quoted message cannot be found. Possibly due to: - The message was sent longer than 7 days ago or deleted for everyone. - The message is not in the same feed. | Remove the quote if the message is no longer valid. Only quote a message in the same feed, i.e: - Do not quote a thread reply when you are sending a unthreaded message. - Do not quote a message that doesn't belong to the current thread when sending a thread reply. |
| 4006 | According to your organisation policy, messages that contain sensitive information shouldn't be shared with people outside your organisation | / |
| 4007 | Invalid image format | Ensure that the image type is one of the following: "JPG", "PNG", "GIF" |
| 4008 | Message ID is not valid | Ensure that the message id is of a quoted message |
| 4009 | Message cannot be found via the message id provided | Ensure that the message is retrieved before it expires |
| 4010 | The thread cannot be found. Possibly due to: - The ID is not pointing to the root message of a thread. - The whole thread has expired on the server. | Make sure the ID is pointing to a valid thread |
| 4011 | Mention everyone (@all) is not allowed in thread replies. | Remove the "@all" from the reply content. |
| 4012 | No permission to update this message | No permission, chatID is 0, not in bot data scope, bot is not in the group, the group is disbanded, etc. |
| 4013 | This user cannot be contacted due to their organisation's policy. | / |
| 5000 | appID mismatch | / |
| 5001 | linkID expired | / |
| 5002 | App not released yet | Ensure that the app has been released |
| 5003 | App link amount has reached the upper limit | / |
| 7000 | Group chat not found with the current code | Ensure that the group ID passed in is correct |
| 7001 | Bot is not a member of the group chat | Ensure that the group ID passed in is correct and that the bot is in the group chat |