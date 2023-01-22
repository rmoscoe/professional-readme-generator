// TODO: Create a function that returns a license badge based on which license is passed in
const licenses = {
  "Creative Commons Zero v1.0 Universal": {
    badge: "https://img.shields.io/badge/license-Creative%20Commons%20Zero%20v1.0-blue",
    link: "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  "GNU Lesser General Public License v3.0": {
    badge: "https://img.shields.io/badge/license-GNU%20Lesser%20General%20Public%20License%20v3.0-blueviolet",
    link: "https://choosealicense.com/licenses/gpl-3.0/"
  },
  "MIT": {
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  "The Unlicense": {
    badge: "https://img.shields.io/badge/license-The%20Unlicense-brightgreen",
    link: "https://choosealicense.com/licenses/unlicense/"
  },
  "None": {
    badge: "",
    link: ""
  }
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return licenses[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licenses[license].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `\n\n${renderLicenseBadge(license)}\n\n[${licenses[license]}](${renderLicenseLink(license)})\n\n<br/>\n\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

<br/>

## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)

<br/>

## Installation
${data.installation}

<br/>

## Usage
${data.usage}

<br/>

## License
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}

<br/>

## Tests
${data.tests}

<br/>

## Questions
Contact Information:
* [GitHub](${data.gitHub})
* [Email](mailto:${data.email})
`;
}

module.exports = {generateMarkdown, licenses};
