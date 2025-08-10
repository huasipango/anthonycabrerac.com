import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://anthonycabrerac.com',
  title: 'Anthony Cabrera',
  description:
    'Cloud engineer helping teams build reliable products on AWS. Read the blog, explore projects, and reach out for collaborations.',
  author: 'Anthony Cabrera',
  navbarItems: [
    { label: 'Blog', href: '/posts/' },
    { label: 'Proyectos', href: '/projects/' },
    { label: 'Etiquetas', href: '/tags/' },
    { label: 'Acerca de', href: '/about/' }
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
      label: 'GitHub'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'Feed RSS'
    }
  ],

  // optional settings
  locale: 'es',
  mode: 'light',
  modeToggle: true,
  colorScheme: 'scheme-icecream-cherry',
  openGraphImage: '/web-app-manifest-192x192.png',
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
