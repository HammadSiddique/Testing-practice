const Calculator = require("./calculator");

const calculator = new Calculator();

describe("addition", () => {
  test("1+1 is equal to 2", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });
  test("5+7 is equal to 12", () => {
    expect(calculator.add(5, 7)).toBe(12);
  });
});

describe("subtraction", () => {
  test("1-1 is equal to 0", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });
  test("22-10 is equal to 12", () => {
    expect(calculator.subtract(22, 10)).toBe(12);
  });
});

describe("division", () => {
  test("4/2 is equal to 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  test("24/2 is equal to 12", () => {
    expect(calculator.divide(24, 2)).toBe(12);
  });
});

describe("multiplication", () => {
  test("2x2 is equal to 4", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
  test("3x4 is equal to 12", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });
});
