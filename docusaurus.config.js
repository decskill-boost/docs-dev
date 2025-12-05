// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Decskill Hub",
  tagline: "Developer Knowledge Center - Best Practices, Innovation & Community",
  favicon: "img/favicon-32x32.png",
  url: "https://decskill-boost.github.io",
  baseUrl: "/docs-dev/",
  organizationName: "decskill-boost",
  projectName: "docs-dev",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

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
          editUrl: "https://github.com/decskill-boost/docs-dev/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/decskill-boost/docs-dev/tree/main/",
          blogTitle: "Decskill Hub Blog",
          blogDescription: "Latest updates, tutorials, and insights from the Decskill developer community",
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
      image: "img/decskill-hub-social.png",
      metadata: [
        { name: "keywords", content: "decskill, hub, documentation, best practices, development, cloud, azure, aws, innovation" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      navbar: {
        logo: {
          alt: "Decskill Hub Logo",
          src: "img/logodec.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "/docs/best-practices",
            label: "Best Practices",
            position: "left",
          },
          {
            to: "/innovation",
            label: "Innovation",
            position: "left",
          },
          {
            to: "/forum",
            label: "Forum",
            position: "left",
          },
          {
            to: "/news",
            label: "News",
            position: "left",
          },
          {
            href: "https://github.com/decskill-boost",
            label: "GitHub",
            position: "right",
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
            title: "Documentation",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/decskill-boost",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About Decskill",
                href: "https://www.decskill.com",
              },
              {
                label: "Careers",
                href: "https://www.decskill.com/careers",
              },
              {
                label: "Contact",
                href: "https://www.decskill.com/contact",
              },
            ],
          },
        ],
        logo: {
          alt: "Decskill Logo",
          src: "img/logodec.png",
          href: "https://www.decskill.com",
          width: 100,
        },
        copyright: `<div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(0, 102, 255, 0.15);">
          <strong>Decskill Hub</strong> - Developer Knowledge Center<br/>
          Copyright © ${new Date().getFullYear()} Decskill. All rights reserved.<br/>
          <span style="color: #627d98; font-size: 0.8rem;">Built with Docusaurus</span>
        </div>`,
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
          "csharp",
          "java",
          "python",
          "go",
          "rust",
          "sql",
          "graphql",
        ],
      },
      announcementBar: {
        id: "announcement",
        content:
          '🚀 Welcome to <strong>Decskill Hub</strong>! Explore our new developer resources and best practices.',
        backgroundColor: "linear-gradient(135deg, #0066ff 0%, #0052cc 100%)",
        textColor: "#ffffff",
        isCloseable: true,
      },
    }),
};

module.exports = config;
