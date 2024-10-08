// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes as prismThemes } from "prism-react-renderer";

const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: " Decskill Boost Documentation",
  tagline: "Boost yourself.",
  favicon: "img/favicon-32x32.png",
  url: "https://decskill-boost.github.io",
  baseUrl: "/docs-dev/",
  organizationName: "decskill-boost",
  projectName: "docs-dev",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/evroon/bracket/tree/master/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/evroon/bracket/tree/master/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-lunr-search")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/bracket-screenshot-design.png",
      navbar: {
        title: " ",
        logo: {
          alt: "Bracket Logo",
          src: "img/logodec.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/",
            label: "GitHub",
            position: "left",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Intro",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/",
              },
              {
                label: "License",
                href: "https://github.com/",
              },
              {
                label: "Changelog",
                href: "https://github.com/",
              },
            ],
          },
        ],
        copyright: `Decskill - Self-Hosted Documentation System.<br/> Licensed under AGPL-v3.0. Copyright © ${new Date().getFullYear()} Decskill. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
        additionalLanguages: [
          "bash",
          "diff",
          "json",
          "systemd",
          "docker",
          "toml",
          "hcl",
          "yaml",
        ],
      },
    }),
};

module.exports = config;
