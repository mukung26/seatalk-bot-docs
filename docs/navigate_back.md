---
id: navigate_back
title: Navigate Back
category: Core Concepts
---

# Navigate Back

**Source:** https://open.seatalk.io/docs/web-sdk_navigate-back

Close the current page to return to a previous page.

## Support

| App Capability | Android | iOS | PC |
| --- | --- | --- | --- |
| Web | ✅ | ✅ | ❌ |

## Parameters

### Input(Object object)

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| data | string | Yes | "" | The data string |
| delta | string | Yes | 1 | - The number of pages to pop - If delta is larger than the number of items in the current app's page stack, it will exit the current app and return to the last page before the current app. |

### Output

None.

## Example

```
import { navigateBack } from '@seatalk/web-app-sdk';

navigateBack({
data: 'Data from Web App',
delta: 2
})
.then(() => {
console.log('navigateBack:ok');
})
.catch((err) => {
console.log(err);
});
```