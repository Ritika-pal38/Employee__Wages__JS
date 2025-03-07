let totalEmpWage = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Max_Hours_In_Month = 160;
const Num_of_Working_Days = 20;

let total_EmployeeHours = 0;
let total_WorkingDays = 0;
let employee_Daily_WagesArr = [];
let dayWiseWageMap = new Map();

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
    employee_Daily_WagesArr.push(dailyWage);
    dayWiseWageMap.set(total_WorkingDays, dailyWage);
}

let empWage = calculateDailyWage(total_EmployeeHours);

// Calculate total wage from Map
let totalWageFromMap = Array.from(dayWiseWageMap.values()).reduce((total, dailyWage) => total + dailyWage, 0);

// Display Day-Wage mapping
console.log("Day-Wise Wage Map:");
for (let [day, wage] of dayWiseWageMap) {
    console.log(`Day ${day}: Wage = ${wage}`);
}

console.log("Total Employee Wage calculated from Map: " + totalWageFromMap);
