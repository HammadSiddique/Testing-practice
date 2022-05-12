let reverseString = require("./reverseString");

test("hello will become olleh", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
