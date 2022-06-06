module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/EstefaniaGarC/app-ci-cd",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};

/* According to this configuration our commits need to follow the conventional-commit nomenclature: https://www.conventionalcommits.org/en/v1.0.0/
    <type>[optional scope]: <description>
    [optional body]
    [optional footer(s)]
*/
