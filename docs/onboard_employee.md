---
id: onboard_employee
title: Onboard Employee
category: Core Concepts
---

# Onboard Employee

**Source:** https://open.seatalk.io/docs/onboard-employee

## API Description

Use this API to onboard a new employee in your organization. 

Note:

- This API requires Onboard/Update/Re-board Employee permission

Request Method: `POST`

End Point: https://openapi.seatalk.io/oa_sync/employees/onboard

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |
| Content-Type | string | Yes | Request header format | N/A | application/json |

Body

| Parameter | Type | Mandatory | Max Length |
| --- | --- | --- | --- |
| employees | []OnboardEmployeeParam | Yes | 50 |

OnboardEmployeeParam

| Parameter | Type | Mandatory | Max Length | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| employee_code | string | No | 30 char | - The unique Identifier of an employee in the organization - If no value is given, SeaTalk will generate a random value for the employee as his/her employee_code | N/A | "202101" |
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

```json
{
"employees": [
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
]
}
```

## Response Parameter

Result Fields

| Parameter | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| message | string | - The error message - Return empty string if the request is successful |
| rid | string | The request ID |
| onboard_result | OnboardResult | The onboarding request result |

OnboardResult

| Parameter | Type | Description |
| --- | --- | --- |
| employees | []Employee | A list of employees |
| total_num | int | The total number of employees in this request |
| success_num | int | The number of successfully onboarded employees in this request |
| error_num | int | The Number of employees that haven't been onboarded successfully in this request |

Employee

| Parameter | Type | Description |
| --- | --- | --- |
| email | string | The email of the target employee |
| employee_code | string | The employee_code of this employee |
| error | string | - Error message for this employee if he/she hasn't been onboarded successfully - Empty if success |
| error_code | string | - Error code for this employee's onboarding request - 0 if success |

Response Sample

```json
{
"code": 0,
"message": "",
"rid": "95593665-354b-4e90-996f-1313a0ec1684",
"onboard_result": {
"employees": [
{
"email": "junkai.la@company.com",
"employee_code": "e_pfu5zya3",
"error": "",
"error_code": 0
}
],
"total_num": 1,
"success_num": 1,
"error_num": 0
}
}
```