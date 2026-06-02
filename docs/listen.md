---
id: listen
title: Listen
category: Core Concepts
---

# Listen

**Source:** https://open.seatalk.io/docs/web-sdk_listen

Listen on an event.

## Support

| App Capability | Android | iOS | PC |
| --- | --- | --- | --- |
| Web | ✅ | ✅ | ❌ |

## Parameters

### Input(Object object)

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| event | string | Yes | NA | The event name |
| source | string | Yes | NA | The app ID of the event registrant |
| callback | function | Yes | NA | The callback function of the event |

### Output

None.

## Example

```
import { listen } from '@seatalk/web-app-sdk';

listen({
event: 'My Event',
source: 'SOURCE_APPID',
callback: (res) => {
console.log(res);
}
})
.then(() => {
console.log('listen:ok');
})
.catch((err) => {
console.log(err);
});
```