class EmployeePayrollData {

    constructor(id, name, salary, gender, startDate) { 
        this.id = id;
        this.name = name; // Triggers the name setter with validation
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
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

    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender; }

    get startDate() { return this._startDate; }
    set startDate(startDate) { 
        if (startDate instanceof Date) {
            this._startDate = startDate;
        } else {
            throw new Error("Invalid date!");
        }
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const startDateStr = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "N/A";
        return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, start date=${startDateStr}`;
    }
}

// Testing name validation with try-catch
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
