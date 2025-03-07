const Number_Of_Working_Days = 2;
let empHours = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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

for(let day = 0;day<Number_Of_Working_Days;day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = empHours+getWorkingHours(empCheck);

}
 let empWage = empHours*WAGE_PER_HOUR;
 console.log("Total working hours : "+empHours+" Employee wage : "+empWage);