## File Organization

Following content is not "rules" but "advice": you're free to apply none, all or some of these.
Keep in mind that I'm not a "React expert", merely organization obsessed ! Implementing all of this would probably slow you down at first !

- Most components must be reusable _ad nauseam_: I should be able to call them multiple times on multiple pages
  - Their props list must be coherent and contain everything needed for display
  - Their style must be independant of any other component
  - They shouldn't call API or do complex calculation on mounting (will cause perf issues if called too often/quickly)
- All components don't need to go firectly under `src/components` ! You can create as many folders as you need, here are some examples:
  - Components responsible of displaying something from DB can go in `src/entities`
  - Components called via `react-router` can go in `src/pages`
  - "UI" components (Button, List, Card, Img, ...) could go in `src/ui` (it'll facilitate their reusing in other projects, too)
- "Pages" components called via `react-router` in the `<Switch>`
  - Are responsible for "initial" Axios calls (We'll never call a lot of them at once, so it'll limit lags)
- In every folder, the main file is called `index.jsx` to shorten `import` statements
- In folders containing only other folders ("folderception" ? :thinking:), create an `index.js` file which sole role will be to import everything within children folders, and reexporting everything at once. It'll allow to import more things easily in other files.
- All style files should
  - Be in their component's folder
  - Be called `style.jsx`

## Todo

- Charte graphique (theming ?)
- Redux
- API centralization
