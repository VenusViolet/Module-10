const Employee = require("./Employee");

class Manager extends Employee {
    consturctor(name, id, email, officeNumber) {
        super(name, "Manager", id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;