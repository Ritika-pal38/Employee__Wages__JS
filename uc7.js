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
let employee_Daily_WagesArr = new Array();

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
function calculateDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;

}

while(total_EmployeeHours <= Max_Hours_In_Month && total_WorkingDays < Num_of_Working_Days){
    total_WorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHours = getWorkingHours(empCheck);
    total_EmployeeHours = total_EmployeeHours+empHours;
    employee_Daily_WagesArr.push(calculateDailyWage(empHours));
}

let empWage = calculateDailyWage(total_EmployeeHours);


function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
employee_Daily_WagesArr.forEach(sum);
console.log("UC-7A Total Days: " + total_WorkingDays + " Total Hrs: " +total_EmployeeHours  + " Employee Wage: " + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC-7A Emp Wage with reduce: " + employee_Daily_WagesArr.reduce(totalWages, 0));

// UC 7B Show the Day along with Daily Wage using Array map helper function

let dailyCntr = 0;
function mapDayWithWage(dailywage) {
    dailyCntr++;
    return dailyCntr + "=" + dailywage;
}

let mapDayWithWageArr = employee_Daily_WagesArr.map(mapDayWithWage);

console.log("UC7B Daily Wage Map");

console.log(mapDayWithWageArr);

// UC 7C - Show Days when Full time wage of 160 were earned

function fulltimewage(dailywage) {
    return dailywage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimewage);

console.log("UC7C Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full Time Wage was earned using find function

function findFulltimeWage(dailywage) {
    return dailywage.includes("160");
}

console.log("UC 7D First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find(findFulltimeWage));

// UC 7E Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailywage) {
    return dailywage.includes ("160");
}

console.log("UC 7E Check All Element have Full Time Wage: "+
fullDayWageArr.every(isAllFulltimeWage));

// UC 7F Check if there is any Part Time Wage
function isAnyPartTimeWage (dailywage) {
    return dailywage.includes ("80");
}

console.log("UC 7F Check If Any Part Time Wage: "+
mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Find the number of days the Employee Worked
function totalDaysWorked (numOfDays, dailywage) {
    if (dailywage > 0) return numOfDays+1;
    return numOfDays;
}

console.log("UC 7G- Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));