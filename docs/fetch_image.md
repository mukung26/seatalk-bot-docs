---
id: fetch_image
title: Fetch Image
category: Core Concepts
---

# Fetch Image

**Source:** https://open.seatalk.io/docs/web-sdk_fetch-image

Fetch an image.

## Support

| App Capability | Android | iOS | PC |
| --- | --- | --- | --- |
| Web | ✅ | ✅ | ✅ |

## Parameters

### Input(Object object)

| Name | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| url | string | Yes | NA | The internal image URL acquired by pickImages |

### Output(Blob blob)

| Name | Type | Description |
| --- | --- | --- |
| blob | Blob | The image content in Blob format |

## Example

```
import { fetchImage } from '@seatalk/web-app-sdk';

fetchImage({
url: 'INTERNAL_IMAGE_URL'
})
.then((res) => {
console.log(res);
})
.catch((err) => {
console.log(err);
});
```