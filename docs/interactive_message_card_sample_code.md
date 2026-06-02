---
id: interactive_message_card_sample_code
title: Interactive Message Card Sample Code
category: Core Concepts
---

# Interactive Message Card Sample Code

**Source:** https://open.seatalk.io/docs/interactive-msg_sample-code

This document will provide some sample code to illustrate typical examples of interactive message cards under common scenarios.

## Simple Notification

![AnoyXWEAyKRKwwIhdwECAEc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/AnoyXWEAyKRKwwIhdwECAEc?sign=1652234037.734259-m6bC9-0-6ff8b40c3a6b99f4ad22fefbabfcf359)

```
"interactive_message": {
"default": {
"elements": [
{
"element_type": "title",
"title": {
"text": "System Upgrade Annoucement"
}
},
{
"element_type": "description",
"description": {
"format": 1,
"text": "The system is under maintenance for an upgrade during 12 - 2AM tomorrow"
}
}
]
}
}
```

## Approval

![AnoyCRkAEN9NwwIhEgILAEc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/AnoyCRkAEN9NwwIhEgILAEc?sign=1652234090.443938-RlWnH-0-2d3bfa113d282ea4f7bd7072c2d45637)

```
"interactive_message": {
"default": {
"elements": [
{
"element_type": "title",
"title": {
"text": "Leave application request"
}
},
{
"element_type": "description",
"description": {
"format": 1,
"text": "Jane Thompson has applied to take a leave from March 3rd to March 5th. Leave reason: sick leave."
}
},
{
"element_type": "button",
"button": {
"button_type": "callback",
"text": "Approve",
"value": "approve"
}
},
{
"element_type": "button",
"button": {
"button_type": "callback",
"text": "Reject",
"value": "reject"
}
}
]
}
}
```

## App Engagement

![Anoyv3EAsGJRwwIhtgEDAEc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/Anoyv3EAsGJRwwIhtgEDAEc?sign=1652234148.0566878-nMyzU-0-3a3912b753d6f5a8b07ea3bd8643f7f5)

```
"interactive_message": {
"default": {
"elements": [
{
"element_type": "title",
"title": {
"text": "Your Application Has Been Approved"
}
},
{
"element_type": "description",
"description": {
"format": 1,
"text": "Your application has been approved by Nick Nilman at 3:34pm today."
}
},
{
"element_type": "button",
"button": {
"button_type": "redirect",
"text": "View details",
"mobile_link": {
"type": "web",
"path": "https://webApp.com/somePath"
},
"desktop_link": {
"type": "web",
"path": "https://webApp.com/somePath"
}
}
}
]
}
}
```

## Hybrid Scenario With Content Internationalisation

![AnoyBRIAVDdXwwIhdgEIAEc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/AnoyBRIAVDdXwwIhdgEIAEc?sign=1652234243.6048691-hmD6H-0-2d8390e4cb485fc2ad4cbf7c7922935d)

![AnoyAjEA-KpXwwIh8wEHAEc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/AnoyAjEA-KpXwwIh8wEHAEc?sign=1652234250.9494798-z1Fga-0-333d18c0216cb1bcf9bfb114b8327f78)

```
"interactive_message": {
"default": {
"elements": [
{
"element_type": "title",
"title": {
"text": "Mail pending for collection"
}
},
{
"element_type": "description",
"description": {
"format": 1,
"text": "You have a mail at the office lobby pending for collection. Please visit the lobby during the office hours to collect it."
}
},
{
"element_type": "button",
"button": {
"button_type": "redirect",
"text": "View details",
"mobile_link": {
"type": "web",
"path": "https://webApp.com/somePath"
},
"desktop_link": {
"type": "web",
"path": "https://webApp.com/somePath"
}
}
},
{
"element_type": "button",
"button": {
"button_type": "callback",
"text": "I have collected it",
"value": "collected"
}
}
]
},
"zh-Hans": {
"elements": [
{
"element_type": "title",
"title": {
"text": "待取信件"
}
},
{
"element_type": "description",
"description": {
"format": 1,
"text": "你有一封待取的信件，请在办公时间段前往大厅领取。"
}
},
{
"element_type": "button",
"button": {
"button_type": "redirect",
"text": "查看详情",
"mobile_link": {
"type": "web",
"path": "https://webApp.com/somePath"
},
"desktop_link": {
"type": "web",
"path": "https://webApp.com/somePath"
}
}
},
{
"element_type": "button",
"button": {
"button_type": "callback",
"text": "我已取件",
"value": "collected"
}
}
]
}
}
```