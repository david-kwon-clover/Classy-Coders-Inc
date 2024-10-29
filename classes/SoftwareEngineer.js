const { Employee } = require("./Employee");

class SoftwareEngineer extends Employee {
    #salary;
    #isHired;
    #programmingLanguages;
    constructor(name, position, salary, programmingLanguages) {
        super(name, position, salary, programmingLanguages);
        this.#programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }

    setProgrammingLanguage(language) {
        this.#programmingLanguages.push(language);
    }
}

module.exports = {
    SoftwareEngineer,
}