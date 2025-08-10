import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://anthonycabrerac.com',
  title: 'Anthony Cabrera',
  description: 'Software Engineer',
  author: 'Anthony Cabrera',
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Tags', href: '/tags/' },
    { label: 'About', href: '/about/' }
    // {
    //   label: 'Other pages',
    //   children: [
    //     { label: 'Landing page', href: '/' },
    //     { label: '404 page', href: '/404' },
    //     { label: 'Author: FjellOverflow', href: '/authors/FjellOverflow/' },
    //     { label: 'Tag: documentation', href: '/tags/documentation/' }
    //   ]
    // }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-linkedin',
      href: 'https://www.linkedin.com/in/ianthoro/',
      label: 'LinkedIn'
    },
    {
      icon: 'tabler--brand-instagram',
      href: 'https://www.instagram.com/ianthoro',
      label: 'Instagram'
    },
    {
      icon: 'tabler--brand-facebook',
      href: 'https://www.facebook.com/ianthoro',
      label: 'Facebook'
    },
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/huasipango',
      label: 'Github'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'light',
  modeToggle: true,
  colorScheme: 'scheme-aurora',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
