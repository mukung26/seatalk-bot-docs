---
id: hide_loading
title: Hide Loading
category: Core Concepts
---

# Hide Loading

**Source:** https://open.seatalk.io/docs/web-sdk_hide-loading

Hide the loading prompt box.

## Support

| App Capability | Android | iOS | PC |
| --- | --- | --- | --- |
| Web | ✅ | ✅ | ❌ |

## Parameters

### Input

None.

### Output

None.

## Example

```
import { hideLoading } from '@seatalk/web-app-sdk';

hideLoading()
.then(() => {
console.log('hideLoading:ok');
})
.catch((err) => {
console.log(err);
});
```