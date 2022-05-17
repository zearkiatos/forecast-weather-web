module.exports = {
  moduleDirectories: ["node_modules", "tests"],
  testMatch: ["**/*.test.js", "**/*.test.jsx"],
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.js","src/**/*.jsx", "!**/node_modules/**"],
};
