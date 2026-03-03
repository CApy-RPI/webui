# CAPY WEB UI

[![CI](https://github.com/CApy-RPI/webui/actions/workflows/ci.yml/badge.svg)](https://github.com/CApy-RPI/webui/actions/workflows/ci.yml)

User management, analytics, event planning, and more!

## File Structure

```
webui/
├── .github/
├── cypress/    
├── public/
├── src/        
|   ├── assets/
|   ├── components/
|   ├── contexts/
|   ├── css/
|   ├── hooks/
|   ├── pages/
|   ├── types/
|   ├── utils/
|   ├── App.tsx
|   ├── main.tsx  
├── index.html
├── package.json
├── <configs>
```

## Cloning the Repo

### Using HTTPS

```bash
git clone https://github.com/CAPY-RPI/webui.git
```

### Using SSH

```bash
git clone git@github.com:CAPY-RPI/webui.git
```

## Prerequisites

- Node.js (v18 or newer)
- npm (comes bundled with Node.js)
- Docker (for running the production container locally)

## Running Locally (Development)

From the root level of the repository:

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

## Linting / Formatting

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

### Run all Linters

#### Check Lint Script

```bash
npm run lint-check
```

#### Fix Lint Script

```bash
npm run lint-fix
```

## Cypress E2E Testing
We must replicate a production environment to adequately test the UI.

```bash
docker build -t web-ui:test .
docker run -d --name webui -p 5173:80 web-ui:test
npx cypress open
```

To rebuild environment, stop and remove the previous build before following the previous steps.
```bash
docker stop webui
docker rm webui
```
