const config = {
  verbose: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/vendor/"],
  coverageDirectory: "./coverage/",
};

module.exports = async () => {
  return config;
};
