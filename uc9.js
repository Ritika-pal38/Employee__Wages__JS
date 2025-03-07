const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Max_Hours_In_Month = 160;
const Num_of_Working_Days = 20;

let total_EmployeeHours = 0;
let total_WorkingDays = 0;
let dayWiseWageMap = new Map();
let dayWiseHourMap = new Map();

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateDailyWage(empHours) {
    return empHours * WAGE_PER_HOUR;
}

while (total_EmployeeHours <= Max_Hours_In_Month && total_WorkingDays < Num_of_Working_Days) {
    total_WorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getWorkingHours(empCheck);
    total_EmployeeHours += empHours;
    let dailyWage = calculateDailyWage(empHours);
    dayWiseWageMap.set(total_WorkingDays, dailyWage);
    dayWiseHourMap.set(total_WorkingDays, empHours);
}

// a. Calculate total Wage and total Hours worked using arrow functions
const totalWage = Array.from(dayWiseWageMap.values()).reduce((total, wage) => total + wage, 0);
const totalHours = Array.from(dayWiseHourMap.values()).reduce((total, hours) => total + hours, 0);

console.log(`Total Hours Worked: ${totalHours}, Total Employee Wage: ${totalWage}`);

// b. Show full working days, part working days, and no working days
let fullWorkingDays = [], partWorkingDays = [], noWorkingDays = [];

dayWiseHourMap.forEach((hours, day) => {
    if (hours === FULL_TIME_HOURS) fullWorkingDays.push(day);
    else if (hours === PART_TIME_HOURS) partWorkingDays.push(day);
    else noWorkingDays.push(day);
});

console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("No Working Days: " + noWorkingDays);
