# Personal Finance Tracker

Standalone local-first web app for tracking monthly income/expenses, budgets, and cashflow trends.

## Features

- Add income/expense transactions with categories and notes
- Monthly and category filtering
- Budget targets per category with over-limit indicators
- Cashflow trend chart for selected month
- JSON and CSV export
- Local storage persistence (no backend required)

## Project Files

- `index.html` - app shell and UI layout
- `styles.css` - visual design system
- `app.js` - state management, rendering, and persistence

## Run Standalone

Serve this folder with any static file server, then open `index.html`.

Example with Python:

```bash
python -m http.server 8080
```

Then visit:

`http://localhost:8080/`

## Notes

This folder can be copied directly into its own GitHub repository as an independent project.
