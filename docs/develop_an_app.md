---
id: develop_an_app
title: Develop An App
category: Core Concepts
---

# Develop an App

**Source:** https://open.seatalk.io/docs/develop-private-app_

## Use Server APIs

### Start to Use Server APIs

- Read through the API Documentation to understand what APIs are required by your app.

- Get an access token as instructed in the Get App Access Token Doc.

- Use the access token in each API call's header to perform the functionality of your app. 

### Access Organization Data

To access or update the data of your organization, approval from your organization administrator is required. Create a [release request](/docs/release_private_app) to get approval from the administrator.

### Server API Data Scope

For those APIs under the Contact and HR Application category, Server API Data Scope is applied to restrict data access to certain departments or employees. You can refer to each API's documentation to find out whether Server API Data Scope is required for a particular API.

The Server API Data Scope of your app is subject to the settings done by your organization administrator.

## Use Event Callback

For how to set up and use event callback for your app, refer to [Event Callback](/docs/server_apis_event_callback).

## Use SeaTalk Open Platform SDK

Please refer to detailed documentation of SDK from the following docs:

- Web SDK