---
id: system_account_error_codes
title: System Account Error Codes
category: Core Concepts
---

# System Account Error Codes

**Source:** https://open.seatalk.io/docs/System-Account-Error-Code_

SeaTalk will return HTTP status 200 upon successful request. However, receiving 200 does not mean that the message was successfully pushed to the chat. A code is returned in the response body to give a description of the error. Any non-zero code indicates the occurrence of an error.

Please refer to the table below for the error messages and corresponding resolutions.

| Value | Description | Resolution |
| --- | --- | --- |
| 0 | Success | The message has been successfully pushed to the group chat |
| 1 | Invalid webhook URL | Check whether the system account is deleted |
| 2 | The system account is not active | Check whether the status of the system account is set to be inactive |
| 3 | The message exceeds the maximum length allowed | Refer to the message content length above |
| 4 | The message content is empty | Make sure the message has content |
| 5 | The image file exceeds the maximum size limit allowed | Refer to the image size limit above |
| 6 | The image type is invalid | Make sure the image type is valid |
| 7 | The message type is not supported | Make sure the "tag" field refers to a supported message type |
| 8 | API is rejected due to rate limit control | Ensure the API request is complying with the rate limit policy. You can refer to API Documentation Guide for the rate limits of different APIs |
| 9 | Server error | / |
| 11 | Server error | / |
| 13 | Server error | / |
| 101 | API is rejected due to rate limit control | Ensure the API request is complying with the rate limit policy. You can refer to API Documentation Guide for the rate limits of different APIs |
| 102 | Parameters invalid | Ensure that the request parameters are valid |
| 4001 | Message exceeds the maximum length | Ensure that the content of the text/image is within the valid length/size limit |
| 4002 | Invalid image format | Ensure the image type is one of the following: "JPG", "PNG", "GIF" |