const { Employee, Manager, SalesPerson, SoftwareEngineer } = require('./index');

describe("Employee tests without static methods", () => {
    const preston = new Employee("Preston", "Engineer", 100000);
    test("Can create instance of Employee class", () => {
        expect(preston instanceof Employee).toBe(true);
    })

    test("Can get Employee salary", () => {
        expect(preston.getSalary()).toBe(100000)
    })

    test("Can update salary", () => {
        preston.setSalary(105000)
        expect(preston.getSalary()).toBe(105000)
    })

    test("Can handle errors for setting negative salary", () => {
        expect(() => {
            preston.setSalary(-1000)
        }).toThrow("Salary cannot be negative");
    })

    test("Can get current isHired status", () => {
        expect(preston.getStatus()).toBe(true);
    })

    test("Can fire Employee", () => {
        preston.setStatus("fire");
        expect(preston.getStatus()).toBe(false);
    })

    test("Can promote Employee", () => {
        preston.promote("Senior Engineer");
        expect(preston.position).toBe("Senior Engineer");
        expect(preston.getSalary()).toBe(126000);
    })
})

describe("Manager tests", () => {
    const preston = new Employee("Preston", "Engineer", 100000);
    const jenna = new Manager("Jenna", "Head of Engineers", 120000, "Software Engineering", 10);
    
    test("Can create instance of Manager that is a subclass of Employee", () => {
        expect(jenna instanceof Manager).toBe(true);
        expect(jenna instanceof Employee).toBe(true);
    })
    
    test("Can get the managers department", () => {
        expect(jenna.getEmployeesManaged()).toEqual([]);
    })
    
    test("Can update a Managers department", () => {
        jenna.addEmployeeManaged(preston);
        expect(jenna.getEmployeesManaged()).toEqual([preston]);
    })

    test("Can promote Manager", () => {
        jenna.promote("Director of Software Engineering");
        expect(jenna.position).toBe("Director of Software Engineering");
        expect(jenna.getSalary()).toBe(144000);
    })
})

describe("Software Engineer Tests", () => {
    const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, ["JavaScript", "Java", "Python"]);
    
    test("Can create instance of SoftwareEngineer that is a subclass of Employees", () => {
        expect(programmer instanceof Employee).toBe(true)
        expect(programmer instanceof SoftwareEngineer).toBe(true)
    })

    test("Can get all programmingLanguages", () => {
        expect(programmer.getProgrammingLanguages()).toEqual(["JavaScript", "Java", "Python"])
    })

    test("Can update programmingLanguages", () => {
        programmer.setProgrammingLanguage("C#"); 
        expect(programmer.getProgrammingLanguages()).toEqual (["JavaScript", "Java", "Python", "C#"]);
    })
})

describe("SalesPerson Tests", () => {
    const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"])

    test("Can create instance of SalesPerson that is a subclass of Employees", () => {
        expect(malik instanceof SalesPerson).toBe(true);
        expect(malik instanceof Employee).toBe(true);
    })

    test("Can get totalSales with getSalesNumber", () => {
        expect(malik.getSalesNumbers()).toBe(0);
    })

    test("Can update totalSales with makeSale", () => {
        malik.makeSale(10500);
        malik.makeSale(20000);
        expect(malik.getSalesNumbers()).toBe(30500);
    })

    test("Can find client with findClient", () => {
        expect(malik.findClient("Vine")).toBe("Vine");
    })

    test("Can handle error if client cannot be found with findClient", () => {
        expect(() => {
            malik.findClient("Spotify")
        }).toThrow("Client not found");
    })
})

describe("Employee Static Properties and Methods Tests", () => {
    test("getEmployees returns array of all employees", () => {
        expect(Employee.getEmployees().length).toBe(5)
    })

    test("getTotalPayroll returns salary of all employees created", () => {
        expect(Employee.getTotalPayroll()).toBe(560000)
    })
})
