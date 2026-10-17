# Samuel Alexander — Portfolio

Personal portfolio for backend and AI engineering, built with React. Includes VideoDB internship experience, selected project case studies, a searchable archive of 33 projects, dark/light themes, and the latest resume PDF.

## Run locally

```sh
npm ci
npm start
```

## Build and test

```sh
npm run build
npm test -- --watchAll=false --runInBand
```

Deploy the generated `build/` directory. No API keys or backend services are required.

## Updating content

- `src/projects.js`: internship and independent project inventory.
- `src/content.js`: detailed case studies, contributions, technologies, measurements, and links.
- `src/App.js` and `src/App.css`: portfolio layout and interactions.
- `src/index.css`: Public Sans and theme tokens.
- `public/resume.pdf`: current resume compiled from the LaTeX source.
- `public/projects/`: authentic project evidence images.

The dashboard image captures the Archetype review application. The hand image is an actual MediaPipe annotation output; its confidence labels are detector confidence, not benchmark accuracy. Project descriptions distinguish personal contributions from company-wide ownership.

## Design credit

Visual direction inspired by [Brittany Chiang v4](https://v4.brittanychiang.com/), credited in the portfolio footer. The implementation and content are tailored to Samuel's work.
