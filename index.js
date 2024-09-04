import boxen from "boxen";
import chalk from "chalk";
import open from "open";
import { select } from "@inquirer/prompts";

/********************************
 * Links settings
 ********************************/
const links = {
  website: "https://thomas-robert.com",
  github: "https://github.com/satche",
  linkedin: "https://linkedin.com/in/thomas-robert-dev",
  email: "info@thomas-robert.com"
};

/********************************
 * Box settings
 ********************************/
const boxContent = `
I'm ${chalk.green("Thomas Robert")}, ${chalk.gray(
  "aka Satche"
)}, a Swiss Army knife of new technologies sharpened by creativity.

I'm a Media Engineer currently studying to get my Master's degree in Computer Science.
`;

const boxSettings = {
  title: "Hello, world!",
  titleAlignment: "center",
  width: 60,
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
};

const box = boxen(boxContent, boxSettings);
console.log(box);

/********************************
 * Main function
 ********************************/
async function main() {
  const choice = await select({
    message: `${chalk.green("Want to know more? Contact me!")}`,
    theme: {
      prefix: " ",
      helpMode: "never",
    },
    choices: [
      {
        name: `Github \t${chalk.blue.underline(links.github)}`,
        value: `${links.github}`,
      },
      {
        name: `Linkedin \t${chalk.blue.underline(links.linkedin)}`,
        value: `${links.linkedin}`,
      },
      {
        name: `Website \t${chalk.blue.underline(links.website)}`,
        value: `${links.website}`,
      },
      {
        name: `Email \t${chalk.blue.underline(links.email)}`,
        value: `mailto:${links.email}`,
      },
      {
        name: chalk.red("Exit"),
        value: chalk.gray("  Thanks for visiting! Bye!"),
      },
    ],
  });

  if (choice.startsWith("http") | choice.startsWith("mailto")) {
    open(choice);
    main();
  }

  console.log(choice);
}

main();