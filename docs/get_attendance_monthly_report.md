---
id: get_attendance_monthly_report
title: Get Attendance Monthly Report
category: API Reference
---

# Get Attendance Monthly Report

**Source:** https://open.seatalk.io/docs/hr-application_get-attendance-monthly-report

## API Description

Use this API to obtain attendance monthly reports by a date range, an employee_code list or a workgroup/department list.

Note:

- This API requires Get Attendance Monthly Report permission and the relevant Data Scope

Request Method: `GET`

End Point: https://openapi.seatalk.io/hr/v2/attendance/monthly_report

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
| employee_code_list | []string | Yes | A list of employee_codes to obtain the related attendance records | N/A | ["26161"] |

## Response Parameter

Result Fields

| Parameters | Type | Description |
| --- | --- | --- |
| code | int | Refer to Error Code for explanations |
| reports | []object | A list of report objects |
| ∟employee_code | string | The employee_code of the employee |
| ∟work_group_id | int | The work group ID that the employee belongs to when the attendance record was generated |
| ∟num_present_days | string | The number of days that the employee turned up within the filtered date range. |
| ∟num_required_days | string | The number of days that the employee should turn up within the filtered date range. |
| ∟num_absent_days | string | The number of days that the employee was marked as absent within the filtered date range. |
| ∟num_leave_days | string | The number of days that the employee was on leave within the filtered date range. |
| ∟actual_working_duration_in_minutes | int | The actual duration for which the employee turns up within the filtered date range in minutes |
| ∟required_working_duration_in_minutes | int | The required duration for which the employee should turn up within the filtered date range according to the work shift requirement in minutes |
| ∟over_working_duration_in_minutes | int | The over-duration of Actual Working Duration – Required Working Duration |
| ∟overtime_duration_in_minutes | int | The overtime duration calculated as defined by work shift rules |
| ∟rest_day_duration_in_minutes | int | The rest day duration calculated as defined by work shift rules |
| ∟late_in_count | int | The number of late-in records |
| ∟early_out_count | int | The number of early-out records |
| ∟invalid_count | int | The number of invalid records |
| ∟no_record_count | int | The number of missing records |

Response Sample

```json
{
"code": 0,
"reports": [
{
"employee_code": "26161",
"work_group_id": 40,
"num_present_days": "0",
"num_required_days": "1",
"num_absent_days": "1",
"num_leave_days": "0",
"actual_working_duration_in_minutes": 0,
"required_working_duration_in_minutes": 599,
"over_working_duration_in_minutes": 0,
"overtime_duration_in_minutes": 0,
"rest_day_duration_in_minutes": 0,
"late_in_count": 0,
"early_out_count": 0,
"invalid_count": 0,
"no_record_count": 6
}
]
}
```