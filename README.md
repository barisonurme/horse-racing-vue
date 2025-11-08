# About the Horse-Racing Game 0.0.1-rc

## Installation

Install dependencies
```bash
pnpm install
```

Start development server
```bash
pnpm run dev
```

Run E2E Test
```bash
pnpm run test:e2e
```

Build for production
```bash
pnpm run build
```


## Game Overview

- Up to **20 horses** with unique colors and condition scores.  
- **6 rounds** per race, ranging from **1200m to 2200m**.  
- Animated horse movement with **live results** per round.  

---

## Technologies Used

- **Vue 3** (Composition API)  
- **Vuex**  
- **Vite**  
- **Naive UI**  

---

## How It Works

1. Click **Generate Program** to create horses and the race schedule.  
2. Click **Start** to begin the laps.  
3. Watch live animations and see results update in real time.  

---

## Notes

- The project is structured for **scalability**.  
- Game logic is managed in the **Vuex store**, while each component focuses on **UI and interactivity**.  

---

## Commands
| Command              | Description                                        |
| -------------------- | -------------------------------------------------- |
| `npm run dev`        | Start the development server using Vite            |
| `npm run build`      | Build the project with type checking               |
| `npm run preview`    | Preview the production build                       |
| `npm run test:e2e`   | Run end-to-end tests with Playwright               |
| `npm run build-only` | Build the project without type checking            |
| `npm run type-check` | Run TypeScript type checks                         |
| `npm run lint`       | Lint code and auto-fix issues with ESLint          |
| `npm run format`     | Format code in the `src/` directory using Prettier |
