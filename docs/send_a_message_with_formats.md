---
id: send_a_message_with_formats
title: Send A Message With Formats
category: Core Concepts
---

# Send a Message with Formats

**Source:** https://open.seatalk.io/docs/format-a-message

When sending a text message to a 1-on-1 chat or a group chat, the content field of text objects can be formatted into rich text. Formatting is also supported for interactive message description element. Here are the supported formatting methods:

## Basic Formatting using Markdown

### Text Style

| Element | Markdown Syntax | Effect |
| --- | --- | --- |
| Bold | **bold** or __bold__ | bold |
| Italic | *italic* or _italic_ Remarks: For the single underscore syntax, it is only activated by placing spaces before and after. | italic |
| Inline Code | `inline code` | |

### Line Break

To make a new line, use the newline character (i.e., \n) or the 
line break tag (note the space in between).

### List

| Element | Markdown Syntax | Effect |
| --- | --- | --- |
| Bulleted List | - Item 1 - Item 2 Signs supported: asterisks * , hyphens - , and plus signs + Code Sample: "content": "- Item 1\n- Item2" | |
| Numbered List | 1. Item 1 2. Item 2 Code Sample: "content": "1. Item 1\n2. Item2" | 1. Item 1 2. Item 2 |
| Indented Lists | Every 4 spaces/1 tab denotes an indent. Currently, SeaTalk only supports indenting from the second list item onwards. Item 1 Item 1a Item 1i Item 2 - Item 1 - Item 1a - Item 1b - Item 2 *Indented lists are supported on SeaTalk versions 3.56 and later. | 1. Item 1 a. Item 1a i. Item 1i 2. Item 2 Item 1 Item 1a Item 1b Item 2 |

### Code Block

| Element | Markdown Syntax | Effect |
| --- | --- | --- |
| Code Block | ``` code block ``` or ~~~ code block ~~~ | |

### Escape a Markdown Format

To escape a certain markdown format, use two "\" characters. E.g., "\\_"

## Advanced Formatting

### Mention

In messages sent to a group chat, you can mention a particular user or all group chat members by including a mention tag by following the format below:

- To mention a particular user using his/her email: 

- To mention a particular user using his/her SeaTalk ID: 

- To mention all group chat members: 

Note:

- Notifying all group chat members will succeed only if the "Notify all members with @All" setting is turned on in the group chat