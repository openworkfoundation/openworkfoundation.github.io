import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Open Work Foundation',
  description: 'Open infrastructure for work in the AI era.',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Manifesto', link: '/manifesto' },
          { text: 'Initiatives', link: '/initiatives' },
          { text: 'Sources', link: '/sources' },
          { text: 'Contribute', link: 'https://github.com/openworkfoundation/openworkfoundation.github.io/blob/main/CONTRIBUTING.md' }
        ],
        sidebar: [
          { text: 'Manifesto', link: '/manifesto' },
          { text: 'Initiatives', link: '/initiatives' },
          { text: 'Sources', link: '/sources' }
        ]
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        nav: [
          { text: 'Manifiesto', link: '/es/manifesto' },
          { text: 'Iniciativas', link: '/es/initiatives' },
          { text: 'Fuentes', link: '/es/sources' },
          { text: 'Contribuir', link: 'https://github.com/openworkfoundation/openworkfoundation.github.io/blob/main/CONTRIBUTING.md' }
        ],
        sidebar: [
          { text: 'Manifiesto', link: '/es/manifesto' },
          { text: 'Iniciativas', link: '/es/initiatives' },
          { text: 'Fuentes', link: '/es/sources' }
        ]
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/openworkfoundation' }
    ]
  }
})
