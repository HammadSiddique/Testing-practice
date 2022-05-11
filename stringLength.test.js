const length = require("./stringLength");

test('empty string will throw error"', () => {
  expect(() => length("")).toThrowError("fail test");
});

test("length of string expected to be 5", () => {
  expect(length("hello")).toBe(5);
});

test("More than 10 characters - this is a fail test", () => {
  expect(length("longer string")).toThrowError("fail test");
});
