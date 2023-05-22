const config = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        changelogTitle: "# Changelog\n\n",
      },
    ],
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
          "api/*",
          // "api/dist/*.js.map",
          "CHANGELOG.md",
          "web/*",
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
