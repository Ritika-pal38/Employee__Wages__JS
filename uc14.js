class EmployeePayrollData {

    constructor(id, name, salary, gender, startDate) { 
        this.id = id;
        this.name = name; // Triggers the name setter with validation
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    // Employee ID validation: non-zero positive number
    get id() { return this._id; }
    set id(id) {
        const idRegex = /^[1-9][0-9]*$/; // Only non-zero positive numbers
        if (idRegex.test(id)) {
            this._id = id;
        } else {
            throw new Error("Invalid Employee ID! It should be a non-zero positive number.");
        }
    }

    // Name validation: starts with a capital letter, at least 3 characters
    get name() { return this._name; }
    set name(name) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Capital first letter + at least 3 characters
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw new Error("Invalid name! Name should start with a capital letter and have at least 3 characters.");
        }
    }

    // Salary validation: positive number
    get salary() { return this._salary; }
    set salary(salary) {
        if (salary > 0) {
            this._salary = salary;
        } else {
            throw new Error("Invalid salary! Salary should be a positive number.");
        }
    }

    // Gender validation: Only 'M' or 'F'
    get gender() { return this._gender; }
    set gender(gender) {
        const genderRegex = /^[MF]$/; // Only M or F
        if (genderRegex.test(gender)) {
            this._gender = gender;
        } else {
            throw new Error("Invalid gender! Gender should be either 'M' or 'F'.");
        }
    }

    // Start date validation: Date should not be in the future
    get startDate() { return this._startDate; }
    set startDate(startDate) { 
        if (startDate instanceof Date && startDate <= new Date()) {
            this._startDate = startDate;
        } else {
            throw new Error("Invalid date! The start date cannot be in the future.");
        }
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const startDateStr = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "N/A";
        return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, start date=${startDateStr}`;
    }
}

// Testing with try-catch

try {
    let employee1 = new EmployeePayrollData(1, "Mark", 30000, "M", new Date("2022-03-01"));
    console.log(employee1.toString());

    employee1.name = "Shakti"; // Valid name
    console.log(employee1.toString());

    employee1.name = "ra"; // Invalid name — should throw error
    console.log(employee1.toString()); // This won't execute
} catch (error) {
    console.error(error.message);
}

try {
    let employee2 = new EmployeePayrollData(2, "Ri", 40000, "F", new Date());
    console.log(employee2.toString());
} catch (error) {
    console.error(error.message);
}

try {
    let employee3 = new EmployeePayrollData(0, "John", 15000, "M", new Date()); // Invalid ID
    console.log(employee3.toString());
} catch (error) {
    console.error(error.message);
}

try {
    let employee4 = new EmployeePayrollData(3, "Alice", -500, "F", new Date("2022-01-01")); // Invalid Salary
    console.log(employee4.toString());
} catch (error) {
    console.error(error.message);
}

try {
    let employee5 = new EmployeePayrollData(4, "Bob", 50000, "X", new Date("2023-12-31")); // Invalid Gender
    console.log(employee5.toString());
} catch (error) {
    console.error(error.message);
}

try {
    let employee6 = new EmployeePayrollData(5, "Charlie", 35000, "M", new Date("2026-05-01")); // Invalid Date (future date)
    console.log(employee6.toString());
} catch (error) {
    console.error(error.message);
}
