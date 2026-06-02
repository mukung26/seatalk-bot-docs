---
id: quick-start
title: Quick Start
category: Getting Started
---
# Quick Start

In this guide, you will learn how to create your first SeaTalk bot and send a simple message.

## Step 1: Create an App in Developer Center

1. Log in to the [SeaTalk Developer Center](https://open.seatalk.io).
2. Click on **Create App**.
3. Fill in the required details: App Name, Description, and App Icon.
4. Once created, navigate to **Credentials** to find your `app_id` and `app_secret`.

## Step 2: Get an Access Token

To interact with SeaTalk APIs, you need an access token.

```bash
curl -X POST https://openapi.seatalk.io/auth/app_access_token \
  -H 'Content-Type: application/json' \
  -d '{
    "app_id": "YOUR_APP_ID",
    "app_secret": "YOUR_APP_SECRET"
  }'
```

You will receive a response containing the `app_access_token`:
```json
{
  "code": 0,
  "app_access_token": "AA_...",
  "expire_in": 7200
}
```

## Step 3: Send a Message

Now, use the token to send a message to a specific user.

```javascript
const fetch = require('node-fetch');

async function sendMessage() {
  const response = await fetch('https://openapi.seatalk.io/message/v2/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_APP_ACCESS_TOKEN'
    },
    body: JSON.stringify({
      employee_id: "USER_EMPLOYEE_ID",
      message: {
        tag: "text",
        text: {
          content: "Hello from my first SeaTalk bot!"
        }
      }
    })
  });
  const data = await response.json();
  console.log(data);
}

sendMessage();
```
