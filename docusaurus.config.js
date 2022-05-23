// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: '美',
  tagline: '',
  url: 'https://github.com/iamjoel',
  baseUrl: '/beauty/build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'iamjoel', // Usually your GitHub org/user name.
  projectName: 'beauty',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/iamjoel/beauty',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/iamjoel/beauty',
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
        title: '美',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'nature/readme',
            position: 'left',
            label: '自然',
          },
          {
            type: 'doc',
            docId: 'city/readme',
            position: 'left',
            label: '城市',
          },
          {
            type: 'doc',
            docId: 'word/intro',
            position: 'left',
            label: '文',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/iamjoel/beauty',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Beauty, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
