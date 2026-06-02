---
id: get_sso_token
title: Get Sso Token
category: API Reference
---

# Get SSO Token

**Source:** https://open.seatalk.io/docs/web-sdk_get-sso-token

Get a Single-Sign-On (SSO) token of a user's SeaTalk account.

## Support

| App Capability | Android | iOS | PC |
| --- | --- | --- | --- |
| Web | ✅ | ✅ | ✅ |

## Parameters

### Input

None.

### Output(String token)

| Name | Type | Description |
| --- | --- | --- |
| token | string | The SSO token |

## Example

```
import { getSSOToken } from '@seatalk/web-app-sdk';

getSSOToken()
.then((token) => {
console.log(token);
})
.catch((err) => {
console.log(err);
});
```