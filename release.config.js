// const config = {
//   branches: ["main"],
//   plugins: [
//     "@semantic-release/commit-analyzer",
//     "@semantic-release/release-notes-generator",
//     [
//       "@semantic-release/changelog",
//       {
//         changelogFile: "CHANGELOG.md",
//         changelogTitle: "# Changelog\n\n",
//       },
//     ],
//     [
//       "@semantic-release/exec",
//       {
//         prepareCmd: "echo 'Release prepared'",
//       },
//     ],
//     [
//       "@semantic-release/git",
//       {
//         assets: ["dist/*.js", "dist/*.js.map", "CHANGELOG.md"],
//         message: "chore(release): ${nextRelease.version} [skip ci]",
//       },
//     ],
//     [
//       "@semantic-release/github",
//       {
//         successComment: false,
//         failComment: false,
//       },
//     ],
//   ],
// };

// module.exports = config;
