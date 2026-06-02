---
id: webhooks
title: Receiving Messages (Webhooks)
category: Core Concepts
---
# Receiving Messages via Webhooks

To make your bot interactive, you need to receive messages sent by users. SeaTalk uses webhooks to deliver these events to your server.

## Event Subscription

1. Go to your App's dashboard in the Developer Center.
2. Navigate to **Event Subscriptions**.
3. Enter your server's **Request URL**.
4. SeaTalk will immediately send a verification request to this URL.

### Verification Request Format

When you set the URL, SeaTalk sends a POST request:

```json
{
  "type": "url_verification",
  "challenge": "RANDOM_STRING"
}
```

Your server must respond with the `challenge` string:

```json
{
  "challenge": "RANDOM_STRING"
}
```

## Handling Incoming Messages

Once verified, you will receive message events like this:

```json
{
  "event_id": "evt_123",
  "event_type": "message",
  "timestamp": 1600000000000,
  "event": {
    "message_id": "msg_456",
    "sender": {
      "employee_id": "EMP001"
    },
    "message": {
      "tag": "text",
      "text": {
        "content": "ping"
      }
    }
  }
}
```
