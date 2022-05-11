let stringLength = (str) => {
  if (str.length < 1) {
    throw new Error("The string should be greater than 1 character.");
  } else if (str.length > 10) {
    throw new Error("The string should be less than 10 characters.");
  } else {
    return str.length;
  }
};

module.exports = stringLength;
