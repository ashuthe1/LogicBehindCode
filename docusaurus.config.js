// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LogicBehindCode</>',
  tagline: 'Summarising my Coding Journey',
  url: 'https://ashutoshgautam.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://ashutoshgautam.dev/static/media/pf3.90874d7910affe4198b6.png',

  // GitHub pages deployment config.
  // If you aren't using kGitHub pages, you don't need these.
  organizationName: 'ashuthe1', // Usually your GitHub org/user name.
  projectName: 'AshutoshBlogs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ashuthe1/LogicBehindCode/tree/main/',
          routeBasePath: '/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ashuthe1/LogicBehindCode/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'LogicBehindCode</>',
        logo: {
          alt: 'LogicBehindCode Logo',
          src: 'https://ashutoshgautam.dev/static/media/pf3.90874d7910affe4198b6.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'algorithms/intro',
            position: 'left',
            label: 'Algorithms',
          },
          {
            type: 'doc',
            docId: 'data-structures/intro',
            position: 'left',
            label: 'Data Structures',
          },
          {
            type: 'doc',
            docId: 'standard-problems/Blind75',
            position: 'left',
            label: 'Standard Problems',
          },
          {
            type: 'doc',
            docId: 'web-development/mongodb',
            position: 'left',
            label: 'Web Development',
          },
          {
            href: 'https://github.com/ashuthe1',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/ashuthe1/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://ashutoshgautam.dev',
            label: 'Portfolio',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Coding Profiles',
            items: [
              {
                label: 'LeetCode',
                href: 'https://leetcode.com/ashuthe1/',
              },
              {
                label: 'CodeChef',
                href: 'https://www.codechef.com/users/ashuthe1x',
              },
              {
                label: 'Codeforces',
                href: 'https://codeforces.com/profile/ashutosh_gautam',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://leetcode.com/ashuthe1/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ashuthe1',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ashuthe1x',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@LogicBehindCode',
              },
              {
                label: 'PortFolio',
                href: 'https://ashutoshgautam.dev',
              },
              {
                label: 'All my Links!',
                href: 'https://ashuthe1.bio.link/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - ${new Date().getFullYear() + 1} Ashutosh Gautam, All Right Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [ 'solidity' ],
      },
    }),
};

module.exports = config;
