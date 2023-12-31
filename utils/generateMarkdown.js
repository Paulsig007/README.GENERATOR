// TODO: Create a function that returns a license badge based on which license is passed in
const licenseArr = ["MIT", "Apache 2.0", "ISC", "N/A"];
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === licenseArr[1]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === licenseArr[2]) {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`;
  } else if (license === licenseArr[1]) {
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === licenseArr[2]) {
    return `[${licenseArr[2]}](https://opensource.org/licenses/ISC)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]) {
    return `Read more about ${licenseArr[0]} here:`;
  } else if (license === licenseArr[1]) {
    return `Read more about ${licenseArr[1]} here:`;
  } else if (license === licenseArr[2]) {
    return `Read more about ${licenseArr[2]} here:`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions?](#questions)

  
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}
module.exports = generateMarkdown;
