---
id: understand_app_capability
title: Understand App Capability
category: Core Concepts
---

# Understand App Capability

**Source:** https://open.seatalk.io/docs/understand-app-capability

SeaTalk Open Platform provides versatile app capabilities for you to build apps based on your own needs. Currently, three app capabilities are supported: 

- Web

- Bot

## App Capabilities Comparison

Wondering which app capability should you select for your app? See the table below for a comparison of the three capabilities:

| App Capability | Primary User Touchpoint | Clients Supported | User Experience | Server APIs Support | Special Capabilities | Most Suitable When... |
| --- | --- | --- | --- | --- | --- | --- |
| Web | Workspace | Mobile, PC | Can be unstable sometimes | Yes | Web SDK | - There is an existing web app that needs a quick integration with SeaTalk - The targeted app users mainly use PC devices for their day-to-day work |
| Bot | Chatroom | Mobile, PC | Similar to chatting with normal contacts | Yes | Send Message to Bot Subscriber API Event Callback | - The app logic involves many conversations that are currently handled by human agents |

However, if your app does not need any front-end user interface and involves purely back-end logic (such as auditing apps), you can always release your apps without any front-end distribution configuration. See [Build Private App - Create App](/docs/create_private_app) for a guide to building an app on SeaTalk Open Platform.

## App Capabilities Compatibility

There are cases when several app capabilities are required under one app. For example, a Web app contains a lot of UIUX to fulfil complex business logic, while a bot addresses FAQs in 1-on-1 chats.

To make app development more powerful, SeaTalk Open Platform provides a flexible app architecture that makes all the app capabilities compatible with each other. This means that:

- You can choose whatever app capability you deem fit for your app during app configuration and app development

- You can always turn on/off a particular app capability in a new app version to adjust the experience of your app users

For the app capability configuration detail, see [Build Private App - Release App](/docs/release_private_app)