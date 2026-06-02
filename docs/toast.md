---
id: toast
title: Toast
category: Core Concepts
---

# Toast

**Source:** https://open.seatalk.io/docs/web-sdk_toast

Display a toast message to users.

## Support

| App Capability | Android | iOS | PC |
| --- | --- | --- | --- |
| Web | ✅ | ✅ | ✅ |

## Parameters

### Input(Object object)

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| message | string | Yes | NA | The text to show on the toast |

### Output

None.

## Example

```
import { toast } from '@seatalk/web-app-sdk';

toast({
message: 'Hello world',
})
.then(() => {
console.log('toast:ok');
})
.catch((err) => {
console.log(err);
});
```

## Preview

### Android

![A3oxOCcDAFRyT0YKEQ0BACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOCcDAFRyT0YKEQ0BACc?sign=1660299762.8629785-JbxUb-0-29486d4500da1b8b8da957a47fe5ef5a)

### iOS

![A3oxOMY=AFwtUEYKEQEAACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOMY=AFwtUEYKEQEAACc?sign=1660299774.832636-izY9X-0-8469dd4866c9239cfed1ba0b6ab626b5)

### PC

![A3oxOLBBAGyqUEYKEQEAACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOLBBAGyqUEYKEQEAACc?sign=1660299782.8316221-EkXgW-0-623502c752a8327feb6cc394f1afc3f7)