---
id: download_claim_attachments
title: Download Claim Attachments
category: Core Concepts
---

# Download Claim Attachments

**Source:** https://open.seatalk.io/docs/hr-application_download-claim-attachments

## API Description

Use this API to download employees' claim attachments according to the specific claim reports. 

Note:

- This API requires Download Attachments of Claim Reports permission

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/claim/report_attachments

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| report_id_list | []int | Yes | A list of claim report IDs to obtain the related attachments | N/A | |

## Response Parameter

The expected response result is a `zip file` including the attachments of the specific claim reports. The zip file folder structure is as follows:

| Level | Parameter | Type |
| --- | --- | --- |
| 1 | seatalk_claim_reports_\ | Folder |
| 2 | ∟\ | Folder |
| 3 | ∟\_\_\ | File |