const { Employee } = require("./Employee");

class Manager extends Employee {
    #salary;
    #isHired;
    #employeesManaged;
    constructor(name, position, salary, department) {
        super(name, position, salary);
        this.department = department;
        this.#employeesManaged = [];
    }

    getEmployeesManaged() {
        return this.#employeesManaged;
    }

    addEmployeeManaged(employee) {
        this.#employeesManaged.push(employee);
    }

    promote(promotedPosition) {
        this.position = promotedPosition;
        this.setSalary(this.getSalary() * 1.2);
    }
}

module.exports = {
    Manager,
}