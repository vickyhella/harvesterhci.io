// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title:
    "The open source hyperconverged infrastructure (HCI) solution for a cloud native world",
  tagline: "",
  url: "https://harvesterhci.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "harvester", // Usually your GitHub org/user name.
  projectName: "harvesterhci.io", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "简体中文",
      },
    },
  },
  themes: ["docusaurus-theme-openapi-docs"],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/harvester/harvesterhci.io/edit/main/",
            docLayoutComponent: "@theme/DocPage",
            docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          lastVersion: "current",
          versions: {
            current: {
              label: "v1.0",
              banner: "none",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: 'UA-56382716-11',
          anonymizeIP: true,
        },
      },
    ],
  ],

  themeConfig: {
    docs: {
        sidebar: {
          hideable: true,
        },
      },
    navbar: {
      logo: {
        alt: "Harvester Logo",
        src: "img/logo_horizontal.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Docs",
          className: "navbar__docs",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://www.suse.com/c/?s=harvester",
          position: "right",
          label: "Blog",
          className: "navbar__blog",
        },
        {
          to: "kb",
          position: "right",
          label: "Knowledge Base",
          className: "navbar__kb",
        },
        {
          href: "https://github.com/harvester/harvester",
          label: "GitHub",
          position: "right",
          className: "navbar__github btn btn-secondary icon-github",
        },
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} harvesterhci.io`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  customFields: {
    title: "Harvester - Open-source hyperconverged infrastructure",
    description:
      "An open-source hyperconverged infrastructure (HCI) software for a cloud-native world",
  },
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "kb",
        path: "./kb",
        showReadingTime: true,
        // Please change this to your repo.
        editUrl: "https://github.com/harvester/harvesterhci.io/edit/main/kb/",
        blogTitle: "Harvester HCI knowledge base",
        routeBasePath: "kb",
        include: ["**/*.{md,mdx}"],
        postsPerPage: 10,
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          petstore: { // Note: petstore key is treated as the <id> and can be used to specify an API doc instance when using CLI commands
            specPath: "api/api.json", // Path to designated spec file
            outputDir: "docs/reference/", // Output directory for generated .mdx docs
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        }
      },
    ]
  ],
};

module.exports = config;
