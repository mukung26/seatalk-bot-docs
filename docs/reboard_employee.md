---
id: reboard_employee
title: Reboard Employee
category: Core Concepts
---

# Reboard Employee

**Source:** https://open.seatalk.io/docs/reboard-employee

## API Description

Use this API to re-onboard an offboarded employee in your organization. 

Note:

- This API requires Onboard/Update/Re-board Employee permission

Request Method: `POST`

End Point: https://openapi.seatalk.io/oa_sync/employees/reboard

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |
| Content-Type | string | Yes | Request header format | N/A | application/json |

Param 

| Parameter | Type | Mandatory | Max Length |
| --- | --- | --- | --- |
| employee_code | string | Yes | 30 char |

Body

If no value is given in any of the fields below, the employee data before he/she was offboarded will be restored.

| Parameter | Type | Mandatory | Max Length | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| name | string | Yes | 100 char | The name of the employee | N/A | |
| hand_phone | string | No | 100 char | - The phone number of the employee - Must be in a valid phone number format and unique within the organization | N/A | |
| company_email | string | Yes | 100 char | - The company email of the employee - Must be in a valid email format and unique within the organization | N/A | |
| personal_email | string | No | 100 char | - The personal email of the employee - Must be in a valid email format | N/A | |
| department_code | string | No | 255 char | - The department this employee belongs to - Must be a valid department_code within the organization | N/A | |
| report_to | string | No | 255 char | - The employee_code of the reporting manager - Must be a valid employee_code within the organization | N/A | |
| birth_date | string | No | 100 char | - The date of birth of the employee - Must be in a valid date format: "YYYY-MM-DD" | N/A | |
| board_date | string | No | N/A | - The onboarding date - Must be valid date format: "YYYY-MM-DD" | N/A | |
| probation_end_date | string | No | N/A | - The end date of this employee's probation - Must be valid date format: "YYYY-MM-DD" - Must be later than the employee's board_date | N/A | |
| gender | int | No | N/A | 1: Male 2: Female 3: Others | N/A | |
| martial_status | int | No | N/A | 1: Single 2: Married 3: Divorced 4: Widowed 5: Others | N/A | |
| address | string | No | 255 char | The address of the employee | N/A | |
| employment_type | int | No | N/A | 1: Full-time 2: Part-time 3: Shift work 4: Contractor 5: Internship 6: Others | N/A | |
| number_of_children | int | No | N/A | The number of children the current employee has | N/A | |
| job_title | string | No | 255 char | - The employee's job title - Must correspond to one of the Job Titles set in the current organization's OA system | N/A | |
| office | string | No | 255 char | - The employee's office - Must correspond to one of the Offices set in the current organization's OA system | N/A | |
| payroll_company | string | No | 255 char | - The employee's payroll company - Must correspond to one of the Payroll Companys set in the current organization's OA system | N/A | |
| rank | string | No | 255 char | - The employee's rank - Must correspond to one of the Ranks set in the current organization's OA system | N/A | |

Request Sample

Request URL: `https://{{host}}/oa_sync/employees/reboard?employee_code=e_pfu5zya3`

Request Body:

```json
{
"board_date": "2021-10-10",
"name": "junkai.la",
"company_email": "junkai.la@company.com",
"hand_phone": "13344445555",
"personal_email": "junkai.la@personal.com",
"birth_date": "1999-01-01",
"gender": 1,
"martial_status": 5,
"address": "#06-12 1037 XX Road, Singapore 123456",
"employee_type": 1,
"number_of_children": 2,
"job_title": "Backend Engineer",
"office": "Da Shi Building ",
"department_code": "YS COMPANY",
"report_to": "e_ukmhkpmh",
"payroll_company": "sea",
"rank": "Engineer"
}
```

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| message | string | - The error message - Return empty string if the request is successful |
| rid | string | The request ID |

Response Sample

```json
{
"code": 0,
"message": "",
"rid": "113b64dc-43f0-4aa4-aaf9-e84a08e80b79"
}
```