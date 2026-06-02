---
id: build_app_for_your_team
title: Build App For Your Team
category: Getting Started
---

# Build App For Your Team

**Source:** https://open.seatalk.io/docs/Build-an-app-for-your-own-team

In this article, we will introduce you the process of creating and releasing a SeaTalk Open Platform app for your team. There are 4 steps to be done: 

- Create an app 

- Develop the app and adjust app settings 

- Apply Scopes & Permissions for your app 

- Release your app

## Step 1: Create An App

In the "Apps" tab, you can click the "Create App" button to start creating an app 

![A3oxOKabAGBgOtpEETQDACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOKabAGBgOtpEETQDACc?sign=1723197216.4244773-uQpRw-0-c9527d15164f5f4c8ffb27aa99e84d73)

Fill in the App Icon, App Name, App Description and click Create to create your app 

![A3oxOEHQALwIPdpEES4GACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOEHQALwIPdpEES4GACc?sign=1723197243.9666436-Xp1nQ-0-310bc3aa1ebc955fe3f01b20ad3fa181)

You will be redirected to your app's detail page after the app is created. 

## Step 2: Develop the App and Adjust App Settings 

On the app's detail page, you will see the following options on the menu tab on the left:

- Basic Info & Credentials: your app's basic information, app owner information, and app credentials (App ID and App Secret)

- Collaborators: the list of your app's developers

- Scopes & Permission: the service scope, data scope and API permissions of your app

- App Capability: configurations of Login with SeaTalk, RN capability and Web capability

- Event Callback: configurations of the event callback URL

- Security Settings: configurations of the IP whitelist

- Release: your app's release management

For app capabilities and the respective development process, you can find more guidance here: 

- Understand the app capabilities: Understand App Capabilities

- RN App: Build SeaTalk RN App 

- Web App: Build SeaTalk Web App 

- Login with SeaTalk: Allow user to login using SeaTalk account

## Step 3: Apply Scopes & Permissions for Your App 

Before releasing your app to your audience, you will need to apply for Scopes & Permission for your app. Scopes & Permission controls the following information and access to your app:

- Who can see and use your app: controlled by Service Scope and Effective Service Scope

- Whose data can your app get: controlled by Data Scope 

- What Server API can your app's server call: controlled by Permissions

In the following section, we will introduce how to apply for and configure Service Scope, Data Scope and Permissions.

### Apply For Service Scope

Service Scope controls who can see and use your app on SeaTalk ("who does your app serve"). To apply for Service Scope, describe the department you want to apply for using the breadcrumb in the "Department Description" section. If some specific users need to be included, directly search and select individual employees in "Whitelist Employee" section. Your Organization Admin will help to approve your request.

![A3oxOGYOAJy-PtpEESMKACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOGYOAJy-PtpEESMKACc?sign=1723197273.3227673-45KxT-0-ec409013a1be7390a7ce7eeedced96c2) 

### Apply For and Configure Data Scope

Data Scope controls whose data your app can access. In the Data Scope section, you can choose to automatically sync the departments and employees from Service Scope to Data Scope by selecting "Yes" for the "Sync from Service Scope" option, or "No" to specify different departments and employees.

![A3oxOJCNAKgRP9pEEdoBACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOJCNAKgRP9pEEdoBACc?sign=1723197283.7965236-UZXs9-0-5af0939177afe19923be87b7994874c3)

![A3oxOMZHAIQEQNpEEYQIACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOMZHAIQEQNpEEYQIACc?sign=1723197292.5605295-Zd7Q8-0-3aaee37d5e2a93067462c86517c8e6f6)

### Apply For and Configure API Permission

Permission is required for your app's back end to call particular APIs. To apply for API permissions, simply select the APIs your app needs to call by checking the check box in front of each API in the API Permission section.

For each API, there's "Limited by" information for you to quickly know whether Service Scope/Data Scope is required for an API.

![A3oxOO2-AKQWQdpEEdcKACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOO2-AKQWQdpEEdcKACc?sign=1723197325.0802796-4jcTI-0-d3d230e34abfe5f878c2c5391f0f5e66)

After filling up all your request, click the "Submit" button. Your request will be sent to your Organization Admin for approval.

![A3oxOCEJAHyjQtpEEZoJACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOCEJAHyjQtpEEZoJACc?sign=1723197334.4357228-n8I55-0-23d8f50f964c42105a4a75378c3a7518)

## Step 4: Release Your App

After your Scopes & Permission request is approved and all development process is finished, you can proceed to release your app to your user in the "Release" tab.

![A3oxODt4AGAUQ9pEEUwGACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxODt4AGAUQ9pEEUwGACc?sign=1723197343.0195034-tCHvJ-0-f18193479f1ea513e9bc68b5406c046f) 

Follow the steps below to release your app:

### Fill in Release Information

Fill in the Distribution Title and Change Log for your reference:

![A3oxOLRtAKicRtpEETYLACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOLRtAKicRtpEETYLACc?sign=1723197404.9857202-YHeTw-0-e8d725ccb5594f971dedd5ffc7d09d7c)

### Select Effective Service Scope 

Effective Service Scope refers to the actual set of departments and employees within the app's Service Scope that will see and use the app upon this successful release. Click on "Edit" to configure the effective Service Scope:

![A3oxOECbADiOR9pEEdULACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOECbADiOR9pEEdULACc?sign=1723197416.3572695-hLyh8-0-aaed9bd369041b84403c89bc92a10aa9)

You can select departments or individual employees to open access to them:

![A3oxOKWIAGQkSNpEEXoCACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOKWIAGQkSNpEEXoCACc?sign=1723197425.9596758-g2LEf-0-9e79209b87eed4a92fbff5df57cd8206) ![A3oxOF8NACy6SNpEEZgKACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOF8NACy6SNpEEZgKACc?sign=1723197434.3431685-1PFMr-0-e5abcf9f3516f48213e84923f8664280)

### Select App Capability 

In the Capability Setting section, you can configure:

- Whether your app can be accessed on Mobile or/and Desktop Workspace. If Mobile/Desktop Workspace is enabled, the Web App URL/RN bundles configured in the "App Capabilities" tab will be applied upon a successful release.

- Whether your app will turn on the bot capability. If this is the first time your app enables the bot capability, a bot account will be created on SeaTalk, and app users will be able to search for and subscribe to it. For more details, see Quickly Build a Bot.

![A3oxODPnAORwTNpEEboJACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxODPnAORwTNpEEboJACc?sign=1723197498.7278442-MOZfg-0-3ec7a008617033db89218eab2b006c7b)

### Release to public 

After setting up the Release Info, Effective Service Scope, and Capability Settings, click the "Release" button to make these settings take effect. Or, you can click "Save as Draft" so you can come back and edit later.

![A3oxOGugACC5TdpEEWgCACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOGugACC5TdpEEWgCACc?sign=1723197517.4007-M01AD-0-a06ef83df9e8b43a6f6bfea3a1ba360c)

![A3oxOEvJANzSTtpEEYALACc](https://sos.sp-cdn.shopee.com/c3/53693910/sos/A3oxOEvJANzSTtpEEYALACc?sign=1723197535.6858027-sDnIM-0-bc31be727cb148e88cbf159885bac471)