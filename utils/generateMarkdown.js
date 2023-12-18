// function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # ${data.projectTitle}
   ${data.description}
  # ${data.installation}
  # ${data.usage}
  # ${data.license}
  # ${data.contributing}
  # ${data.tests}
  # ${data.ghUserName}
  # ${data.email}

`;
}

module.exports = generateMarkdown;
