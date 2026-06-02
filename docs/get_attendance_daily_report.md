---
id: get_attendance_daily_report
title: Get Attendance Daily Report
category: API Reference
---

# Get Attendance Daily Report

**Source:** https://open.seatalk.io/docs/hr-application_get-attendance-daily-report

## API Description

Use this API to obtain the attendance daily summary reports by date range and an employee_code list. 

If you need to use work groups and department filters, you can use Get Employees under Departments (/docs/get-department-employees) or Get Employees under Work Groups (/docs/hr-application_get-empl-list-work-group) to obtain the employee_code list.

Note:

- This API requires Get Attendance Daily Report permission and the relevant Data Scope

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/attendance/daily_report

Note:

- This API requires Get Attendance Daily Report permission

## Request Parameter

Header

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| Authorization | string | Yes | Obtained through the Get App Access Token API | N/A | Bearer c8bda0f77ef940c5bea9f23b2d7fc0d8 |

Parameter

| Parameter | Type | Mandatory | Description | Default | Sample |
| --- | --- | --- | --- | --- | --- |
| start_date | string | Yes | The start date of the attendance period | N/A | 2021-01-01 |
| end_date | string | Yes | The end date of the attendance period | N/A | 2021-01-31 |
| employee_code_list | []string | Yes | A list of employee_codes to obtain the related attendance records | N/A | "26161" |

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| reports | []object | A list of report objects |
| ∟employee_code | string | The employee_code of the employee |
| ∟work_group_id | int | The work group ID that the employee belongs to when the attendance record was generated |
| ∟attendance_type | int | Refer to Attendance Type for explanations |
| ∟attendance_date | string | The date of attendance record |
| ∟attendance_date_type | int | Refer to Attendance Date Type for explanations |
| ∟work_shift_type | int | Refer to Work Shift Type for explanations |
| ∟clock_settings | []object | The current work shift's clock setting |
| ∟clock_in_day | int | The clock in day number |
| ∟clock_in_time | string | The clock in time |
| ∟clock_out_day | int | The clock out day number |
| ∟clock_out_time | string | Clock out time |
| ∟attendance_result | int | Refer to Attendance Result for explanations |
| ∟attendances | []object | The detailed clock in and out records for the employee on the attendance date. All records will be shown with a status |
| ∟num_clock | int | The number of shifts |
| ∟clock_type | int | Refer to Clock Type for explanations |
| ∟status | int | Refer to Attendance Status for explanations |
| ∟clock_time | string | The clock time |
| ∟actual_working_duration_in_minutes | int | The actual duration that the employee turns up for the attendance date (in hours and minutes) |
| ∟required_working_duration_in_minutes | int | The required duration that the employee should turn up for the attendance date according to the work shift requirement (in hours and minutes) |
| ∟over_working_duration_in_minutes | int | The over duration of Actual Working Duration – Required Working Duration |
| ∟overtime_duration_in_minutes | int | The overtime duration calculated as defined by work shift rules |

Response Sample

```json
{
"code": 0,
"reports": [
{
"employee_code": "26161",
"work_group_id": 40,
"attendance_type": 1,
"attendance_date": "2021-01-05",
"attendance_date_type": 4,
"work_shift_type": 0,
"clock_settings": [
{
"clock_in_day": 0,
"clock_in_time": "08:01",
"clock_out_day": 0,
"clock_out_time": "14:00"
}
],
"attendance_result": 3,
"attendances": [
{
"num_clock": 1,
"clock_type": 1,
"status": 0,
"clock_time": ""
},
{
"num_clock": 1,
"clock_type": 2,
"status": 0,
"clock_time": ""
}
],
"actual_working_duration_in_minutes": 0,
"required_working_duration_in_minutes": 359,
"over_working_duration_in_minutes": 0,
"overtime_duration_in_minutes": 0
}
]
}
```