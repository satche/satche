#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import open from "open";
import { select } from "@inquirer/prompts";

// Content settings
const links = {
  website: "https://thomas-robert.com",
  github: "https://github.com/satche",
  linkedin: "https://linkedin.com/in/thomas-robert-dev",
  email: "info@thomas-robert.com",
};

const welcomeContent = `
I'm ${chalk.green("Thomas Robert")}, ${chalk.gray(
  "aka Satche",
)}, a Swiss Army knife made of ink and pixels. A jack of all trades, and a master of ${chalk.strikethrough("none")} some!`;

const aboutContent = `
${chalk.bold.blueBright("Current Position:")}
Traveling around the world

${chalk.bold.blueBright("Experience")}
${chalk.blueBright("2022‑2025")} Innovation specialist, Nestlé
${chalk.blueBright("2023‑2025")} Teacher, CPNE
${chalk.blueBright("2017‑2019")} Front-end developer, 8bitstudio

${chalk.bold.blueBright("Education")}
${chalk.blueBright("2022‑2025")} MSc Computer Science at HES-SO
${chalk.blueBright("2023‑2025")} BSc Media Engineering at HEIG-VD
${chalk.blueBright("2017‑2019")} Interactive Media Designer at ERACOM
`;

// Box settings
const boxSettings = {
  title: "Hello, world!",
  titleAlignment: "center",
  width: 60,
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
};

const welcomeBox = boxen(welcomeContent, boxSettings);
const aboutBox = boxen(aboutContent, {
  ...boxSettings,
  title: "About me",
  borderColor: "blueBright",
});

console.log(welcomeBox);

async function main() {
  // List choices
  const choice = await select({
    message: `${chalk.gray("Select an option:")}`,
    theme: { prefix: " ", helpMode: "never" },
    choices: [
      {
        name: `About me \t${chalk.blueBright("Academic and profesional background")}`,
        value: "about_me",
      },
      {
        name: `Email \t${chalk.blue.underline(links.email)}`,
        value: `mailto:${links.email}`,
      },
      {
        name: `Website \t${chalk.blue.underline(links.website)}`,
        value: `${links.website}`,
      },
      {
        name: `Github \t${chalk.blue.underline(links.github)}`,
        value: `${links.github}`,
      },
      {
        name: `Linkedin \t${chalk.blue.underline(links.linkedin)}`,
        value: `${links.linkedin}`,
      },
      {
        name: chalk.red("Exit"),
        value: chalk.gray("  Thanks for visiting! Bye!"),
      },
    ],
  });

  // Handle user inputs
  if (choice.startsWith("http") | choice.startsWith("mailto")) {
    open(choice);
    main();
  } else if (choice === "about_me") {
    console.log(aboutBox);
    main();
  } else {
    console.log(choice);
  }
}

main();
