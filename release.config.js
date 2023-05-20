const config = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    {
      releaseRules: [
        { type: "fix", release: "minor" },
        { type: "feat", release: "minor" },
        { type: "refactor", release: "minor" },
        { type: "refactor", release: "patch" },
        { scope: "no-release", release: false },
      ],
    },
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
        assets: ["dist/*.js", "dist/*.js.map", "CHANGELOG.md"],
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
