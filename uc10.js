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
let dayWiseDetailsMap = new Map();

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

    // Create an object to store day, hours, and wage
    let dayDetails = {
        day: total_WorkingDays,
        hoursWorked: empHours,
        wageEarned: dailyWage
    };

    // Store the object in the map
    dayWiseDetailsMap.set(total_WorkingDays, dayDetails);
}

// Calculate total wage and total hours using Map values
let totalWageFromMap = Array.from(dayWiseDetailsMap.values()).reduce((total, details) => total + details.wageEarned, 0);
let totalHoursFromMap = Array.from(dayWiseDetailsMap.values()).reduce((total, details) => total + details.hoursWorked, 0);

// Display totals
console.log("Total Hours Worked:", totalHoursFromMap);
console.log("Total Employee Wage calculated from Map:", totalWageFromMap);
