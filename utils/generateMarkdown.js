// function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  
  # ${data.projectTitle}

  <img src="https://img.shields.io/github/license/${data.ghUserName}/${data.repoName}">

   ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${data.license} license

  ## How to Contribute
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Questions
  
  If you have questions about this Project or further development suggestions please reach me at the following

  <a href="https://github.com/${data.ghUserName}">GitHub</a>

  <a href="mailto:${data.email}">Send Email</a>

`;
}

module.exports = generateMarkdown;
