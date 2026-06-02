---
id: integrate_login_with_seatalk_to_your_website
title: Integrate Login With Seatalk To Your Website
category: Core Concepts
---

# Integrate Login With SeaTalk to Your Website

**Source:** https://open.seatalk.io/docs/Integrate-Login-With-SeaTalk-to-Your-Website

In this article, we will guide you to integrate Login With SeaTalk Capability 

## What Can Login With SeaTalk Capability Do? 

Login With SeaTalk capability allows your user to login to your website with their SeaTalk account just like using their Google, Facebook, or any other third party accounts.

We follow Oauth 2.0 standard (https://oauth.net/2/) to provide relevant technical fundations and protocals when sending sensitive information related to our user. 

## Step 1: Create an SOP App 

From open.seatalk.io (https://open.seatalk.io/), click on "Start building" or "Create app" to trigger the app creation wizard. You can also trigger this by clicking "Create app" from you app list. Follow the steps in the wizard to complete the basic configuration of your app.

Step 1: Basic app information

![](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOOBiAOihcNNjEZcDACc?sign=1756454725.771776-96vep-0-43eb12aa4fad6eec78ddd6bf95164bdb)

Step 2: Service and data scope configuration

![](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOEA6ADTRcdNjEccJACc?sign=1756454745.219727-5nMaU-0-e81b4f5faf3224111465bf8794fc31fc)

Your new app will have a default status of Not Configured. Learn more about app statuses. (https://open.seatalk.io/docs/SOP-App-Statuses) Click the Enable button in the Login with SeaTalk card in the Capability section.

![](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxODGVAJysmdNjEV4KACc?sign=1756455398.2061467-dKIF9-0-5225dcd4dd476d098eb70c114f03c643)

![](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxODIEAPzLlNNjES8KACc?sign=1756455318.5889473-ziMiT-0-fba3cac2b072fe28dc253cb87204911e)

Once a capability is successfully enabled, it will appear in the menu on the left hand side of the page, and you will be directed to the capability configuration menu of the newly added capability. Additionally, default API permissions for the capability will be enabled for your app.

## Step 2: Configure Redirect URI

- Navigate to the Login With SeaTalk section. Configure a Redirect URI that matches your service exactly. Redirect URI controls which URI can obtain the authentication code that will be used to exchange for the user identity.

![](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOJkbABD0ndNjEXgHACc?sign=1756455468.3125393-sMbL5-0-c4fa6383dcd89a3fa491890d6206b839)

## Step 3: Add in Login Button With SeaTalk JS Framework

- You can easily add a standard Login with Seatalk Button to your website by using the HTML and JavaScript Library. When a user taps the login button, he/she will be redirected to the SeaTalk Login Page as described in Login with SeaTalk Overview.

- See the following code snippet for an example:

Copy

- An element with the ID seatalk_login_app_info is used to specify the information of your app on SeaTalk Open Platform：

| Data Attributes | Value | Mandatory | Description |
| --- | --- | --- | --- |
| data-appid | String | Yes | Your app's App ID, which is the unique identifier of your app |
| data-redirect_uri | String | Yes | The redirection endpoint URI after successful authorization |
| data-response_type | code | Yes | - The authorized type - Value must be set to "code" |
| data-state | String | No | - A value used by the client to maintain the state between the request and callback. When the authorization is successful, data-state will be appended to the redirect URI for verification - The parameter should be used for preventing the case where unauthorized commands are submitted from a user that the website trusts ("request forgery" or "session riding") |

- An element with the ID seatalk_login_button will be rendered as a Login With SeaTalk button. You can customize the button by the parameters provided in the data attributes below:

| Data Attributes | Value | Mandatory | Description |
| --- | --- | --- | --- |
| data-size | small | default | large | No | The size of the button |
| data-align | center | border | No | - The alignment of the button icon and text - Default: center |
| data-theme | default | dark | No | The theme of the button |
| data-logo_size | String | No | - The size of the SeaTalk Logo - Default: 22 pixels |
| data-copywriting | String | No | - The copywriting of the button - Default: Login with SeaTalk |

- SeaTalk Open Platform provides design guidelines for the Login with SeaTalk button. See Button Design Guidelines for detail.

## Step 4: Get User Identity

After users grant your app on the SeaTalk Login Page the permission to access their SeaTalk profile, they will be redirected to the service you provided before in the data-redirect_uri attributes within the code.

Upon redirection, an authorization code will be appended at the end of the redirect URI for your service as a temporary token that carries the user information. An example of the redirect URI ishttps://www.yourwebsite.com/?code=1f2b62b4210448a19ac1a83da59fb32c&state=test (https://www.yourwebsite.com/?code=1f2b62b4210448a19ac1a83da59fb32c&state=test).

- The token will expire after 10 minutes. You can use the code to exchange for the user profile information by calling Verify Login with SeaTalk Code API. 

## What's Next 

Now you have successfully integrated your app with Login With SeaTalk capability. you can now try it out by yourself. 

- If you want to get user's employee profile info, you can apply for permission of Get Employee Profile API following this process: https://open.seatalk.io/docs/build-an-app-for-your-team

- If you want to let more people login to your website, you can follow this method and apply for more Service Scope: https://open.seatalk.io/docs/build-an-app-for-your-team

- If you want to learn more about Login With SeaTalk: https://open.seatalk.io/docs/login-with-seatalk-overview