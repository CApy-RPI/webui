# CAPY WEB UI

[![Continuous Integration (CI)](https://github.com/CApy-RPI/webui/actions/workflows/main.yml/badge.svg)](https://github.com/CApy-RPI/webui/actions/workflows/main.yml)


User management, analytics, event planning, and more!

## File Structure

```
webui/
├── public/
├── src/        
|   ├── assets/
|   ├── components/
|   ├── css/
│      ├── index.css     # Global CSS files
|   ├── hooks/
|   ├── pages/
|   ├── types/
|   ├── utils/
|   ├── App.tsx          # Define routes
|   ├── main.tsx         # Launch    
├── index.html
├── package.json
├── <configs>
```

## Cloning the Repo

There are 2 options:

### HTTPS

```bash
git clone https://github.com/CAPY-RPI/webui.git
```

### SSH

```bash
git clone git@github.com:CAPY-RPI/webui.git
```

## Prerequisites

- Node.js (v18 or newer)
- npm (comes bundled with Node.js)

## Running Locally

From the root level of the repository

### Install Dependencies

```bash
npm install
```

### Run the Site

```bash
npm run dev
```

This starts the development server with Hot Module Replacement. Any changes you
make will be instantly displayed without reloading!

## Environment Variables

Coming soon!

## Linting / Formatting

Currently, we use Stylelint (CSS), ESLint (JS), and Prettier (All File Formatting).

### Running Stylelint (optional --fix)

```bash
npx stylelint "**/*.css" --fix
```

### Running ESLint

```bash
npx eslint . --fix
```

### Running Prettier

#### Prettier Check

```bash
npx prettier . --check
```

#### Apply Fixes

```
npx prettier . --write
```

### The Lint Script

_Runs all 3 linters._

#### Check Lint Script

```bash
npm run lint-check
```

#### Fix Lint Script

```bash
npm run lint-fix
```
