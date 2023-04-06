const Employee = require("./Lib/employee");

let emp1 = new Employee("Nick", 234, "some@gmail.com");
emp1.getID();
emp1.getEmail();
emp1.getName();
emp1.getRole();