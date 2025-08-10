---
title: Writing Content
description: Adding new pages, blog posts and projects to Nordlys
publishedDate: 2024-10-06
tags:
  - documentation
---

Adding content to Nordlys is as easy as creating a new Markdown (or [MDX](https://docs.astro.build/en/guides/integrations-guide/mdx/)) file and starting to write. For projects and blog posts, `src/content/config.ts` contains the schema definitions, so it defines what properties are needed and can be set in the frontmatter.

## Adding a New Page

To add a new page to Nordlys, navigate to `src/pages` and create a new Markdown file. You'll most likely want the page to use the default layout, so set it in the frontmatter. After that, you can start writing your content.

```markdown src/pages/faq.md
---
layout: '@/layouts/PageLayout.astro'
title: FAQ
---

## How can I contact you?

You can contact me at ...
```

Go to `localhost:4321/faq` in your browser, and now you'll see your newly created FAQ page! A page's frontmatter is defined as follows.

```ts
// properties not set default to the properties configured in the theme
type PageFrontmatter = {
  title?: string // tab title
  author?: string // meta
  description?: string // meta
  canonicalURL?: string // meta
  openGraphImage?: string | ImageMetadata // relative URL to image in public folder or local asset
  publishedDate?: Date // meta
  scrollProgress?: boolean // bar indicating scroll location at top of page
  activeHeaderLink?: string // title or href of active header link
  scrollToTop?: boolean // "Back to top" button when scrolled far down
}
```

## Writing a Blog Post

Writing a blog post is essentially the same as adding a new page, with slightly different frontmatter. You can follow the same procedure, except you'll create the file in the `src/content/posts` directory.

```markdown src/content/posts/learned-today.md
---
title: I learned something today
description: A quick update on the new things I learned
publishedDate: 2024-10-06
tags:
  - programming
  - HAP
---

So today, I started learning a new programming language. It's really cool because ...
```

Navigate to `localhost:4321/posts`, and your new post will appear there. Clicking on it will show the content you wrote, elegantly rendered as text! A post's frontmatter is defined as follows.

```ts
type PostFrontmatter = {
  title: string
  author?: string // defaults to author set in theme config
  description: string
  publishedDate: Date
  draft?: boolean // defaults to false
  canonicalURL?: string // meta
  openGraphImage?: string | ImageMetadata // either URL to image in public folder or local asset
  tags?: string[] // defaults to []
  showToC?: boolean // show a Table of Contents, defaults to true
}
```

## Adding a New Project

To add a new project in Nordlys, simply create a file in the `src/content/projects` directory. Set the project's properties, write a short description, and you're done!

```markdown src/content/projects/amazing-app.md
---
title: Amazing App
startDate: 2023-10-06
endDate: 2024-10-06
tags:
  - HTML
  - CSS
  - TypeScript
---

I developed an amazing app, using `HTML`, `CSS` and `TypeScript`! The app can ...
```

Take a look at `localhost:4321/projects`, and your new project should be listed there! A project's frontmatter is defined as follows.

```ts
type ProjectFrontmatter = {
  title: string
  url?: string // can be relative or absolute
  startDate?: Date // if omitted, endDate will be ignored, even if set, and project will be sorted to end of list
  endDate?: Date // shows "Now" if not set
  tags?: string[] // defaults to []
  previewImage: ImageMetadata // local asset
}
```

Note that projects don't generate a dedicated page, they're only listed on the `/projects` page.
