# CAPY WEB UI
User management, analytics, event planning, and more!

## Cloning the Repo
There are 2 options:
### HTTPS
```
git clone https://github.com/CAPY-RPI/webui.git
```
### SSH
```
git clone git@github.com:CAPY-RPI/webui.git
```

## Prerequisites
- Node.js (v18 or newer)
- npm (comes bundled with Node.js)

## Running Locally
_From the root level of the repository_
### Install Dependencies
```
npm install
```
### Run the Site
```
npm run dev
```
This starts the development server with Hot Module Replacement. Any changes you make will be instantly displayed without reloading!

## Environment Variables
Coming soon!

## Linting / Formatting
Currently, we use Stylelint (CSS), ESLint (JS), and Prettier (All File Formatting).
### Running Stylelint (optional --fix)
```
npx stylelint "**/*.css" --fix
```
### Running ESLint
```
npx eslint . --fix
```
### Running Prettier
#### Check:
```
npx prettier . --check
```
#### Write:
```
npx prettier . --write
```
### The Lint Script
_Runs all 3 linters._
#### Check:
```
npm run lint-check
```
#### Fix:
```
npm run lint-fix
```