const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  locales: {
    '/ru/': {
      lang: 'ru-RU',
      title: 'Keitaro',
      description: ''
    },
    '/en/': {
      lang: 'en-US',
      title: 'Keitaro',
      description: ''
    }
  },
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      '/ru/': {
        sidebar: {
          '/ru/guide/': [
            {
              title: 'Гайд',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        },
        nav: [
          {
            text: 'Guide',
            link: '/ru/guide/',
          },
          {
            text: 'Config',
            link: '/config/'
          },
          {
            text: 'VuePress',
            link: 'https://v1.vuepress.vuejs.org'
          }
        ],
      },
      '/en/': {
        sidebar: {
          '/en/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        },
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/',
          },
          {
            text: 'Config',
            link: '/config/'
          },
          {
            text: 'VuePress',
            link: 'https://v1.vuepress.vuejs.org'
          }
        ],
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    require.resolve('../../../')
  ]
}
