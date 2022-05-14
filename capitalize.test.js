const capitalize = require("./capitalize");

test("hello should return Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
