const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Max_Hours_In_Month = 100;
const Num_of_Working_Days = 10;
let total_EmployeeHours = 0;
let total_WorkingDays = 0;

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

while(total_EmployeeHours <= Max_Hours_In_Month && total_WorkingDays < Num_of_Working_Days){
    total_WorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    total_EmployeeHours = total_EmployeeHours +getWorkingHours(empCheck);
}

let empWage = total_EmployeeHours*WAGE_PER_HOUR;
console.log("UC5 - Total Days : "+total_WorkingDays+" , Total working hours : "+total_EmployeeHours+" , Employee Wages : "+empWage);