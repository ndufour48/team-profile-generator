const Engineer = require("../Lib/engineer");

describe("github username", () => {
  it("should set GitHub username based off of user input from question prompt", () => {
    const github = "ndufour48";
    const eng = new Engineer("Nick", 456, "test@gmail.com", github);
    expect(eng.github).toEqual(github);
  });
});

describe("getRole", () => {
  it("should get employee type ", () => {
    const roleType = "Engineer";
    const eng = new Engineer("Nick", 123, "someEmail@gmail.com");
    expect(eng.getRole()).toBe(roleType);
  });
});

describe("getGithub", () => {
  it("should get github username from object", () => {
    const github = "ndufour48";
    const eng = new Engineer("Nick", 123, "someEmail@gmail.com", github);
    expect(eng.getGithub()).toBe(github);
  });
});