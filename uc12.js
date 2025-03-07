class EmployeePayrollData {

    // Constructor with gender and startDate
    constructor(id, name, salary, gender, startDate) { 
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }
    
    // Getter and setter for name
    get name() { return this._name; }
    set name(name) { this._name = name; }
    
    // Getter and setter for gender
    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }
    
    // Getter and setter for startDate
    get startDate() { return this._startDate; }
    set startDate(startDate) { 
        if (startDate instanceof Date) {
            this._startDate = startDate;
        } else {
            throw "Invalid date!";
        }
    }
    
    // Method to return a string representation of the employee
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const startDateStr = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "N/A";
        return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, start date=${startDateStr}`;
    }
}

// Creating an employee instance
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date("2022-03-01"));
console.log(employeePayrollData.toString()); 

// Modifying name and gender
employeePayrollData.name = "Shakti";
employeePayrollData.gender = "F";
console.log(employeePayrollData.toString()); 

// Adding another employee
let employee2 = new EmployeePayrollData(2, "Ritika", 40000, "F", new Date());
console.log(employee2.toString());
