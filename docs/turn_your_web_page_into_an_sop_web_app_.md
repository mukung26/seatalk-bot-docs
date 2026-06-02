---
id: turn_your_web_page_into_an_sop_web_app_
title: Turn Your Web Page Into An Sop Web App 
category: Core Concepts
---

# Turn Your Web Page Into an SOP Web App 

**Source:** https://open.seatalk.io/docs/web-to-web-app-demo

## Intro

This tutorial is a complete guide for you to quickly build your web app on SeaTalk Open Platform. We will walk you through:

- How to create a web app

- How to configure a web app

- How to release a web app so that your users can start using it

- How to better integrate with SeaTalk via capabilities provided by SeaTalk Open Platform

At the end of this guide, we provide a demo for you to get hands-on experience of integrating an existing website onto SeaTalk.

A Web App is a website that runs in SeaTalk mobile and desktop Workspace. It is one of the app capabilities offered by SeaTalk Open Platform. It is suitable if

- You have an existing web app that you'd like to integrate directly into SeaTalk, or

- You want to build an app that can be used on both mobile and desktop Workspace. 

To help a web app deliver a better user experience and get access to organization & employee data, SeaTalk Open Platform provides Web SDKs and Server APIs for your web app to be integrated with SeaTalk more holistically. See the following flow chart for how different components of your app and SeaTalk work together to make a web app possible: 

![](https://cdn.edge.test.shopee.com/c3/77367679/seeatalk-oa-public/AnQxzKAAqAAP2kQREQcAJw?sign=1723196519.0659375-mYPmv-0-6fc18529ef9604506aaefb57fbd95047)

## Create An SOP App 

Fromopen.seatalk.io (https://confluence.shopee.io/open.seatalk.io), click on "Start building" or "Create app" to trigger the app creation wizard. You can also trigger this by clicking "Create app" from you app list. Follow the steps in the wizard to complete the basic configuration of your app.

Step 1: Basic app information

![](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOP8TAFiRYRBkEdUJACc?sign=1756710332.5153353-15cwL-0-754c1a4e946fd5712ef6314038335f8a)

Step 2: Service and data scope configuration

![](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxODS1ADx4YhBkEU4BACc?sign=1756710347.2884595-nAX5S-0-f6e9d3b197854b6fafd8364c1397e1a2)

Your new app will have a default status of Not Configured.Learn more about app statuses. (https://open.test.seatalk.io/docs/SOP-App-Statuses) Click the Enable button in the Workspace app card in the Capability section.

![](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOKoRAExHZBBkEQkEACc?sign=1756710376.9303987-nnYwj-0-ef8ab7896e45ea8424c70ba5704b4ba9)

Once a capability is successfully enabled, it will appear in the menu on the left hand side of the page, and you will be directed to the capability configuration menu of the newly added capability. Additionally, default API permissions for the capability will be enabled for your app.

## Configure Web App Capability 

Step 4: Go to Workspace App -> Web App and click "Edit" button on top right 

![](https://cdn.edge.test.shopee.com/c3/77367679/seeatalk-oa-public/AnQxUA0AlGQV2kQRAQMAJw?sign=1723196638.7535832-GodYP-0-f29fa7f0ccfffd0560e8876f0ef51f20)

Step 5: Put your web page's URL in relevant input boxes and click "Save" button. 

- Do note that we differentiate URL used in mobile clients and desktop clients. You can put different URL in these two fields 

![](https://cdn.edge.test.shopee.com/c3/77367679/seeatalk-oa-public/AnQxCXUAIBkZ2kQRVwoAJw?sign=1723196655.1804895-TeufE-0-b7cb2102c13bb13211da92762d1ead6b)

## Release Web App 

Step 6: Go to Workspace App -> Release and click "Create New Release" button 

![](https://cdn.edge.test.shopee.com/c3/77367679/seeatalk-oa-public/AnQxzT0AsG8a2kQRUQAAJw?sign=1723196677.1067674-dI1xB-0-8ff2f00e8b037cb89a86c9606c5236ff)

Step 7: Fill in Release Info and select Web App in both "Capability Setting" => "Mobile Workspace" &"Capability Setting" => "Desktop Workspace" and click Release

![](https://cdn.edge.test.shopee.com/c3/77367679/seeatalk-oa-public/AnQx=D0AfDsb2kQRUgoAJw?sign=1723196690.1478431-g3t3U-0-7a1e97611dcd92beb02a7f046fe079ab)

### See Your App on SeaTalk

After a successful release, you should be able to find your app on SeaTalk's Workspace.

Mobile Workspace

On the mobile SeaTalk app, switch to the "Workspace" tab and your app will appear there.

![](https://cdn.edge.test.shopee.com/c3/77367679/seeatalk-oa-public/AnQxew4AoGcZ2kQRAQMAJw?sign=1723196704.4846146-7NdWC-0-2cf961579ffc5e293f3832dd9b07084e)

Desktop Workspace

Likewise, on the desktop SeaTalk app, your users should be able to see the app on the "Workspace" tab.

![A3oxOIPqAHCd2qQLERgCACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOIPqAHCd2qQLERgCACc?sign=1661770049.396432-3OPjr-0-aed4739cdd59dc2d73d205b6271b26e9)

## Integrate with SeaTalk's Single sign-on Function

Integrating your web app with SeaTalk doesn't stop at configuring a URL. SeaTalk Open Platform provide various capabilities for you to enhance your users' web app experience. Mainly:

- Your web app can get a user's identity through Login with SSO (see "Get User Identity For Web App" below). Compatibility with Google Identity Service is also supported if your web app wants to let users sign in with Google.

- Your web app can tap into the Web SDK to deliver a better user experience. Read more about Web SDK here.

- Your web app can tap into server APIs to manage employee information and send customised messages to your app users. See the full list of Server APIs provided here.

In the following section, we will walk you through how to get a user's identity for your web app.

### Get User Identity For Web App

It's very common that when users open your web app on SeaTalk, you need to know who they are. To get their identity, SeaTalk Open Platform provides Login with SSO (Single Sign-on) mechanism that:

- For web app users: provides the ability to quickly and easily help users sign in to your web app on SeaTalk without them being aware.

- For web app: allows your web app to get an SSO token by using Get SSO Token function in Web SDK and verify it to get the actual user info by using Verify Single Sign-on Token Server API.

See the flow chart below for an overview of how your app's front end (APPFrontEnd) and back end ( (APPBackEnd) ) interact with Web SDK and Server API to get user identity in your web app:

![](https://cdn.edge.test.shopee.com/c3/77367679/seeatalk-oa-public/AnQxnHUADGcd2kQRDQAAJw?sign=1723196725.70356-v5mI8-0-7493b2384299aa94e63da79ac71d2652)

In the following two subsections, we provide actual implementation examples that your web app can refer to for getting user identity.

### Front End Implementation Example

#### Steps

#1: Install SeaTalk Open Platform Web SDK

```
npm install @seatalk/web-app-SDK
```

#2: Determine the operating environment of the current web app user

```
import { clientInfo } from '@seatalk/web-app-sdk';

console.log(clientInfo.app)
```

Output

```
// in SeaTalk
"SeaTalk"

// in browser
"Browser"
```

#3: Get SSO Token (https://open.seatalk.io/docs/functions_get-sso-token) of the current user

```
import {
getSSOToken
} from '@seatalk/web-app-sdk';

getSSOToken({
onSuccess: (token) => {
console.log(token);
},
});
```

Output

```
3986765785778635695
```

The SSO token will expire after one use or 180 seconds.

#### Demo

```
import {
clientInfo,
getSSOToken
} from '@seatalk/web-app-sdk';
import axios from 'axios';

const loginWithSSO = () => {
// Determine the operating environment
if (clientInfo.app !== 'SeaTalk') {
console.log('Non SeaTalk environment.');
return;
}

// Get the SSO token
getSSOToken({
onSuccess: async (token) => {
// Verify the SSO token
const {
data
} = await axios.post(`${path_to_verify}`, JSON.stringify({
'sso_token': token
}));
if (data.code === 0) {
console.log('Login successfully. Redirect to the homepage.');
} else {
console.log('Failed to verify SSO token.');
}
},
onError: () => {
console.log('Failed to get SSO token.');
}
});
}
```

#### Compatibility with Google Identity Service

![](https://cdn.edge.test.shopee.com/c3/77367679/seeatalk-oa-public/AnQxVw8AqB0c2kQREQMAJw?sign=1723196748.902655-FKARi-0-e7478426c1a487c77f09181b0e26e676)

Most apps support signing in with Google. Since the popup will be blocked by SeaTalk, we provide a compatible solution on the front end:

- Define a variable of type boolean, named 'showGSigninBtn' (or any name you like), to control the visibility of the 'Sign in with Google' button. Set the default value of 'showGSigninBtn' to false.

- When determining the operating environment, if clientInfo.app is not equal to 'SeaTalk' (which means the app is not running in SeaTalk environment), set the value of 'showGSigninBtn' to true.

- Now the user can sign in with Google in browser and also login with SSO in SeaTalk.

### Back End Implementation Example

#### Steps

#1: Integrated Get Access Token (https://open.seatalk.io/docs/get-app-access-token), using your app's credentials

```
import json
import requests

data = {
"app_id": "demo_id",
"app_secret": "demo_secret"
}

json_data = json.dumps(data, ensure_ascii = False).encode('utf8')
resp = requests.post("https://openapi.seatalk.io/auth/app_access_token", data = json_data, timeout = self.timeout, verify = False)
```

Output

```json
{
"app_access_token": "demo_app_access_token",
"code": 0,
"expire": 1658747005
}
```

#2: Verify Single Sign-on Token (https://open.seatalk.io/docs/verify-sso-token) after your app's frontend passes over the token of a web app user

```
import json
import requests

data = {
"token": "test_sso_token"
}

json_data = json.dumps(data, ensure_ascii = False).encode('utf8')
requests.post("https://openapi.seatalk.io/sso/v2/verify", data = json_data, timeout = self.timeout, verify = False)
```

Output

```json
{
"code": 0,
"profile": {
"email": "demo@shopee.com",
"employee_code": "demo_code",
"name": "demo_name"
}
}
```

#3: Get Employee Profile (https://open.seatalk.io/docs/get-employee-profile) if you need a user profile

```
import json
import requests

path = "https://openapi.seatalk.io/?employee_code=demo_code"
resp = requests.get(path)
```

Output

```json
{
"code": 0,
"employees": [
{
"employee_code": "demo_code",
"name": "demo_name",
"email": "demo@shopee.com",
"mobile": "",
"seatalk_id": "demo_id",
"seatalk_nickname": "demo_nickname",
"avatar": "https://openapi.seatalk.io/file/employee/icon/demo_icon_name",
"departments": [
"demo_department"
],
"gender": 0,
"reporting_manager_employee_code": ""
}
]
}
```

#4: Store the login status of the current web app user

- Since the http protocol is stateless, it is usually necessary to use the session or JWT (Json Web Token) mechanism to maintain the login state. When we use session, we can use redis to store user information.

```
from redis.client import Redis

redis_client = Redis(
connection_pool=ConnectionPool.from_url(
"redis://127.0.0.1:6379/0", max_connections=10, health_check_interval=30
)
)
session_id = random.choices(string.ascii_letters, k=32)
redis_client.setex(session_id, 3600, "demo_user_info")
```

#### Demo

Only the core process code is shown here, please view the complete code on github (https://github.com/seatalk-io/openapi-demo-python).