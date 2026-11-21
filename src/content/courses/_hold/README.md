# Courses on hold

These pages are built but not published: they are not routed, not in the course list or sitemap, and their placeholders do not block the build.

- See what is live / held: `npm run course:list`
- Bring pages back: `npm run course:release -- <slug>`
- Hold pages: `npm run course:hold -- <slug>`
- Match the "Need" list: `npm run course:launch` (list lives in scripts/launch-list.json)

Links from live pages to a held page are removed when it is held; add them back by hand after releasing.
