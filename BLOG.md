# 5 New Features in NextJS 13.4 to Make a Marketing Site

[NextJS 13.4](https://nextjs.org/blog/next-13-4), a foundational release of NextJS, was released on May 4, 2023. I wanted to dip my hands into its fresh set of features - so I went ahead and read their [documentation](https://nextjs.org/docs) from start to finish. I also made a [marketing site](https://elevation-fitness-gym.vercel.app) to put the NextJS 13.4 theory into practice. The marketing site's source code is freely available on [Github](https://github.com/jlawcordova/elevation-fitness-gym).

Here are the 5 new features I found useful in making the marketing site.

## 1. New File Conventions

NextJS 13.4 marks a stable release for the App Router. This introduced new file conventions which offer an intuitive way to make pages, layouts, error and loading pages.

For the marketing site, I [organized the project files by feature or route](https://nextjs.org/docs/app/building-your-application/routing/colocation#split-project-files-by-feature-or-route).

```
app
├── api         // Shared
├── lib
├── components
├── (landing)   // Features
├── gyms
└── join
```

NextJS 13.4 supports server components and the new file conventions makes use of loading.tsx and error.tsx for an intuitive way of applying React Suspense.

While page.tsx is being rendered server-side, the loading.tsx will serve as a fallback.

```
app/gyms
├── loading.tsx
└── page.tsx
```

2. Server rendering
   By default, components in NextJS 13.4 are server components.

3. Built-in Caching
   Fetching data makes use of built-in caching. NextJS goes through all the details in their [documentation](https://nextjs.org/docs/app/building-your-application/caching).

4. Server Actions
   Although still experimental, Server Actions can now be used for a powerful way to submit forms.

5. Metadata
   Next.js has a Metadata API that can be used to define metadata. This improves the SEO of the marketing site, while also making it very maintainable.

   ```ts
   export const metadata: Metadata = {
     title: "Elevation Fitness Gym | Open-Air Gym in Davao",
     description:
       "We offer the most affordable gym membership in Davao City. Get access to an open-air gym facility and quality cardio and strength equipments.",
     openGraph: {
       type: "website",
       url: "https://elevation-fitness-gym.vercel.app",
       title: "Elevation Fitness Gym | Open-Air Gym in Davao",
       description:
         "We offer the most affordable gym membership in Davao City. Get access to an open-air gym facility and quality cardio and strength equipments.",
       siteName: "Elevation Fitness Gym",
     },
     twitter: {
       card: "summary_large_image",
       site: "@jlawcordova",
       creator: "@jlawcordova",
       title: "Elevation Fitness Gym | Open-Air Gym in Davao",
       description:
         "We offer the most affordable gym membership in Davao City. Get access to an open-air gym facility and quality cardio and strength equipments.",
     },
   };
   ```

   A Metadata object can be exported.
