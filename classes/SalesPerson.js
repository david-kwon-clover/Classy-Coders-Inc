const { Employee } = require("./Employee");

class SalesPerson extends Employee {
    #salary;
    #isHired;
    #totalSales;
    constructor(name, position, salary, clients) {
        super(name, position, salary);
        this.#totalSales = 0;
        this.clients = clients;
    }

    getSalesNumbers() {
        return this.#totalSales;
    }

    makeSale(amount) {
        this.#totalSales += amount;
    }

    findClient(client) {
        if(!this.clients.includes(client)) {
            throw new Error("Client not found");
        }

        return this.clients.find((clientName) => {
            return clientName === client;
        })
    }
    
}

module.exports = {
    SalesPerson,
}