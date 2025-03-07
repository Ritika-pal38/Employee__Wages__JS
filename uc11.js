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

const getWorkingHours = (empCheck) => 
    empCheck === IS_PART_TIME ? PART_TIME_HOURS : 
    empCheck === IS_FULL_TIME ? FULL_TIME_HOURS : 0;

const calculateDailyWage = (empHours) => empHours * WAGE_PER_HOUR;

while (total_EmployeeHours <= Max_Hours_In_Month && total_WorkingDays < Num_of_Working_Days) {
    total_WorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getWorkingHours(empCheck);
    total_EmployeeHours += empHours;
    let dailyWage = calculateDailyWage(empHours);

    dayWiseDetailsMap.set(total_WorkingDays, {
        day: total_WorkingDays,
        hoursWorked: empHours,
        wageEarned: dailyWage
    });
}

// a. Calculate total Wage and total Hours worked
const totalWage = Array.from(dayWiseDetailsMap.values())
    .reduce((total, day) => total + day.wageEarned, 0);

const totalHours = Array.from(dayWiseDetailsMap.values())
    .reduce((total, day) => total + day.hoursWorked, 0);

console.log("Total Wage:", totalWage);
console.log("Total Hours Worked:", totalHours);

// b. Show Full Working Days using forEach
console.log("Full Working Days:");
dayWiseDetailsMap.forEach(day => {
    if (day.hoursWorked === FULL_TIME_HOURS) {
        console.log(`Day ${day.day}: Hours Worked = ${day.hoursWorked}, Wage Earned = ${day.wageEarned}`);
    }
});

// c. Show Part Working Days using Map and reduce to String Array
const partWorkingDays = Array.from(dayWiseDetailsMap.values())
    .filter(day => day.hoursWorked === PART_TIME_HOURS)
    .map(day => `Day ${day.day}`);

console.log("Part Working Days:", partWorkingDays.join(", "));

// d. Show No Working Days using Map
const noWorkingDays = Array.from(dayWiseDetailsMap.values())
    .filter(day => day.hoursWorked === 0)
    .map(day => `Day ${day.day}`);

console.log("No Working Days:", noWorkingDays.join(", "));
