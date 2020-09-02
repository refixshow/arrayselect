const select = require("./arrayselect.js");

describe("Testing prototype function", () => {
  const mockedArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it("shoult have a title", () => {
    expect(mockedArr.select(0, 3)).toBe([0, 1, 2, 3, 4]);
  });
});
