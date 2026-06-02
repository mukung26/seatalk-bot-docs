---
id: api-reference
title: API Reference
category: API Reference
---
# API Reference

Here are some of the most commonly used SeaTalk backend APIs. All requests must carry the `Authorization: Bearer <app_access_token>` header.

## Send a Text Message

**Endpoint:** `POST /message/v2/send`

**Payload:**
```json
{
  "employee_id": "EMP_ID",
  "message": {
    "tag": "text",
    "text": {
      "content": "Message content here"
    }
  }
}
```

## Send an Interactive Card

Interactive cards allow users to click buttons or submit forms.

**Endpoint:** `POST /message/v2/send`

**Payload:**
```json
{
  "employee_id": "EMP_ID",
  "message": {
    "tag": "interactive_message",
    "interactive_message": {
      "template_id": "TPL_123",
      "template_variable": {
        "title": "Approval Request",
        "content": "Please approve server provisioning."
      }
    }
  }
}
```

## Get User Details

**Endpoint:** `GET /contact/v2/employee?employee_id=EMP_ID`

**Response:**
```json
{
  "code": 0,
  "employee": {
    "employee_id": "EMP_ID",
    "name": "John Doe",
    "department_ids": [101, 102],
    "email": "john.doe@company.com"
  }
}
```
