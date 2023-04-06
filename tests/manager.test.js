const Manager = require("../Lib/manager");

describe("office number", () => {
  it("should set office number based off of user input from question prompt", () => {
    const officeNumber = 6784046969;
    const mgr = new Manager("Nick", 456, "test@gmail.com", officeNumber);
    expect(mgr.officeNumber).toEqual(officeNumber);
  });
});

describe("getRole", () => {
  it("should get employee type ", () => {
    const roleType = "Manager";
    const mgr = new Manager("Nick", 123, "someEmail@gmail.com", 4046786969);
    expect(mgr.getRole()).toBe(roleType);
  });
});