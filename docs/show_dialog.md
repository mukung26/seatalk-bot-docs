---
id: show_dialog
title: Show Dialog
category: Core Concepts
---

# Show Dialog

**Source:** https://open.seatalk.io/docs/web-sdk_show-dialog

Show a dialog to users.

## Support

| App Capability | Android | iOS | PC |
| --- | --- | --- | --- |
| Web | ✅ | ✅ | ✅ |

## Parameters

### Input(Object object)

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| title | string | No | NA | The dialog title text |
| message | string | Yes | NA | The dialog body text |
| okText | string | Yes | NA | The text on the confirmation button |
| okStyle | string | No | NA | The style of the confirmation button, the values available are: - normal - success - critical |
| okColor | string | No | NA | The color of the confirmation button |
| cancelText | string | No | NA | The text on the cancellation button |
| cancelStyle | string | No | NA | The style of the confirmation button, the values available are: - normal - success - critical |
| cancelColor | string | No | NA | The color of the cancellation button |
| inputConfig | object | No | NA | - The config of the textarea - Not supported on the desktop |
| ∟placeholder | string | No | NA | The placeholder of the textarea |
| ∟prefilledText | string | No | NA | The prefilled text of the textarea |
| ∟maxInputLength | number | No | NA | The maximum length of the textarea |

### Output(Object object)

| Name | Type | Description |
| --- | --- | --- |
| content | string | The text on the textarea |
| confirm | boolean | Whether the confirmation button is clicked |
| cancel | boolean | Whether the cancellation button is clicked |

## Example

```
import { showDialog } from '@seatalk/web-app-sdk';

showDialog({
title: 'Dialog Title',
message: 'Dialog message',
okText: 'Ok',
cancelText: 'Cancel',
inputConfig: {
placeholder: 'Input something',
prefilledText: 'Hello',
maxInputLength: 150,
},
})
.then((res) => {
if (res.confirm) {
console.log(res.content);
};
})
.catch((err) => {
console.log(err);
});
```

## Preview

### Android

![A3oxOBUXAHAUhUYKER4CACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOBUXAHAUhUYKER4CACc?sign=1660300641.5930173-Nuyzk-0-0191564cc8d36c91547c471418d840b6)

### iOS

![A3oxOCk0AAQih0YKER0KACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOCk0AAQih0YKER0KACc?sign=1660300675.2272172-DEXfW-0-08d2e3911dac94cd52cc17b0f4163ef9)

### PC

![A3oxOJfpACh=h0YKESoGACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOJfpACh=h0YKESoGACc?sign=1660300681.1853724-LIfnN-0-44bf7870aa1383eefd55463e36242e72)