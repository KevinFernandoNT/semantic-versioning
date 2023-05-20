const config = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",

    [
      "@semantic-release/exec",
      {
        prepareCmd: "echo 'Release prepared'",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "api/dist/*.js",
          "api/dist/*.js.map",
          "CHANGELOG.md",
          "web/build/*",
        ],
        message: "chore(release): ${nextRelease.version} [skip ci]",
      },
    ],

    [
      "@semantic-release/github",
      {
        successComment: false,
        failComment: false,
      },
    ],
  ],
};

module.exports = config;
