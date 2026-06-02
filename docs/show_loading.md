---
id: show_loading
title: Show Loading
category: Core Concepts
---

# Show Loading

**Source:** https://open.seatalk.io/docs/web-sdk_show-loading

Show the loading prompt box.

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
import { showLoading } from '@seatalk/web-app-sdk';

showLoading()
.then(() => {
console.log('showLoading:ok');
})
.catch((err) => {
console.log(err);
});
```

## Preview

### Android

![A3oxODoxAJTGWEYKEQECACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxODoxAJTGWEYKEQECACc?sign=1660299915.7048802-v5OCh-0-aa66e7e84212817510988271a9002b51)

### iOS

![A3oxOLiCAPyxV0YKEQEBACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOLiCAPyxV0YKEQEBACc?sign=1660299898.0015206-FrNiV-0-37dd1412d042a2a9c7e1a84f1e0843a2)