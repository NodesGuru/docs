const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nym Docs',
  tagline: '',
  url: 'https://nymtech.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/docs/FAVICON.png',
  organizationName: 'nymtech', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nym',
      logo: {
        alt: 'Nym Logo',
        src: 'img/docs/FAVICON.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {to: '/docs/overview/index', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/nymtech',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          // title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://nymtech.net/'
            },
            {
              label: 'Keybase',
              href: 'https://keybase.io/team/nymtech.friends',
            },
          ],
        },
        {
          items: [
            {
              href: 'https://github.com/nymtech',
              label: 'GitHub',
              position: 'right',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/nymchan',
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
        {
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/nymproject/',
            },
            {
              label: 'Blog',
              href: 'https://medium.com/nymtech',
            },
          ]
        },
      ],
      copyright: `© ${new Date().getFullYear()} Nym Technologies SA, all rights reserved`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          // sidebarCollapsible: true,
          // sidebarCollapsed: false,
          // homePageId: "/"
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};


// module.exports = {
//   plugins: [
//     [
//       '@docusaurus/plugin-content-docs',
//       {
//         /**
//          * Path to data on filesystem relative to site dir.
//          */
//         path: 'docs',
//         /**
//          * Base url to edit your site.
//          * Docusaurus will compute the final editUrl with "editUrl + relativeDocPath"
//          * Omitting this variable entirely will disable edit links.
//          */
//         editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
//         /**
//          * For advanced cases, compute the edit url for each Markdown file yourself.
//          */
//         editUrl: function ({
//           locale,
//           version,
//           versionDocsDirPath,
//           docPath,
//           permalink,
//         }) {
//           return `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`;
//         },
//         /**
//          * Useful if you commit localized files to git.
//          * When Markdown files are localized, the edit url will target the localized file,
//          * instead of the original unlocalized file.
//          * Note: this option is ignored when editUrl is a function
//          */
//         editLocalizedFiles: false,
//         /**
//          * Useful if you don't want users to submit doc pull-requests to older versions.
//          * When docs are versioned, the edit url will link to the doc
//          * in current version, instead of the versioned doc.
//          * Note: this option is ignored when editUrl is a function
//          */
//         editCurrentVersion: false,
//         /**
//          * URL route for the docs section of your site.
//          * *DO NOT* include a trailing slash.
//          * INFO: It is possible to set just `/` for shipping docs without base path.
//          */
//         routeBasePath: 'docs',
//         include: ['**/*.md', '**/*.mdx'], // Extensions to include.
//         /**
//          * No route will be created for matching files
//          */
//         exclude: [
//           '**/_*.{js,jsx,ts,tsx,md,mdx}',
//           '**/_*/**',
//           '**/*.test.{js,jsx,ts,tsx}',
//           '**/__tests__/**',
//         ],
//         /**
//          * Path to sidebar configuration for showing a list of markdown pages.
//          */
//         sidebarPath: 'sidebars.js',
//         /**
//          * By default, all sidebar categories will be collapsible.
//          * This can be overriden per-category.
//          */
//         sidebarCollapsible: true,
//         /**
//          * By default, all sidebar categories will be initialized in a collapsed state.
//          * This can be overriden per-category.
//          */
//         sidebarCollapsed: false,
//         /**
//          * Function used to replace the sidebar items of type "autogenerated"
//          * by real sidebar items (docs, categories, links...)
//          */
//         sidebarItemsGenerator: async function ({
//           defaultSidebarItemsGenerator, // useful to re-use/enhance default sidebar generation logic from Docusaurus
//           numberPrefixParser, // numberPrefixParser configured for this plugin
//           item, // the sidebar item with type "autogenerated"
//           version, // the current version
//           docs, // all the docs of that version (unfiltered)
//         }) {
//           // Use the provided data to generate a custom sidebar slice
//           return [
//             {type: 'doc', id: 'intro'},
//             {
//               type: 'category',
//               label: 'Tutorials',
//               items: [
//                 {type: 'doc', id: 'tutorial1'},
//                 {type: 'doc', id: 'tutorial2'},
//               ],
//             },
//           ];
//         },
//         /**
//          * The Docs plugin supports number prefixes like "01-My Folder/02.My Doc.md".
//          * Number prefixes are extracted and used as position to order autogenerated sidebar items.
//          * For conveniency, number prefixes are automatically removed from the default doc id, name, title.
//          * This parsing logic is configurable to allow all possible usecases and filename patterns.
//          * Use "false" to disable this behavior and leave the docs untouched.
//          */
//         numberPrefixParser: function (filename) {
//           // Implement your own logic to extract a potential number prefix
//           const numberPrefix = findNumberPrefix(filename);
//           // Prefix found: return it with the cleaned filename
//           if (numberPrefix) {
//             return {
//               numberPrefix,
//               filename: filename.replace(prefix, ''),
//             };
//           }
//           // No number prefix found
//           return {numberPrefix: undefined, filename};
//         },
//         /**
//          * Theme components used by the docs pages
//          */
//         docLayoutComponent: '@theme/DocPage',
//         docItemComponent: '@theme/DocItem',
//         /**
//          * Remark and Rehype plugins passed to MDX
//          */
//         remarkPlugins: [
//           /* require('remark-math') */
//         ],
//         rehypePlugins: [],
//         /**
//          * Custom Remark and Rehype plugins passed to MDX before
//          * the default Docusaurus Remark and Rehype plugins.
//          */
//         beforeDefaultRemarkPlugins: [],
//         beforeDefaultRehypePlugins: [],
//         /**
//          * Whether to display the author who last updated the doc.
//          */
//         showLastUpdateAuthor: false,
//         /**
//          * Whether to display the last date the doc was updated.
//          */
//         showLastUpdateTime: false,
//         /**
//          * By default, versioning is enabled on versioned sites.
//          * This is a way to explicitly disable the versioning feature.
//          * This will only include the "current" version (the `/docs` directory)
//          */
//         disableVersioning: false,
//         /**
//          * Include the "current" version of your docs (the `/docs` directory)
//          * Tip: turn it off if the current version is a work-in-progress, not ready to be published
//          */
//         includeCurrentVersion: true,
//         /**
//          * The last version is the one we navigate to in priority on versioned sites
//          * It is the one displayed by default in docs navbar items
//          * By default, the last version is the first one to appear in versions.json
//          * By default, the last version is at the "root" (docs have path=/docs/myDoc)
//          * Note: it is possible to configure the path and label of the last version
//          * Tip: using lastVersion: 'current' make sense in many cases
//          */
//         lastVersion: undefined,
//         /**
//          * The docusaurus versioning defaults don't make sense for all projects
//          * This gives the ability customize the properties of each version independantly
//          * - label: the label of the version
//          * - path: the route path of the version
//          * - banner: the banner to show at the top of a doc of that version: "none" | "unreleased" | "unmaintained"
//          */
//         versions: {
//           /*
//           Example configuration:
//           current: {
//             label: 'Android SDK v2.0.0 (WIP)',
//             path: 'android-2.0.0',
//             banner: 'none',
//           },
//           '1.0.0': {
//             label: 'Android SDK v1.0.0',
//             path: 'android-1.0.0',
//             banner: 'unmaintained',
//           },
//           */
//         },
//         /**
//          * Sometimes you only want to include a subset of all available versions.
//          * Tip: limit to 2 or 3 versions to improve startup and build time in dev and deploy previews
//          */
//         onlyIncludeVersions: undefined, // ex: ["current", "1.0.0", "2.0.0"]
//       },
//     ],
//   ],
// };