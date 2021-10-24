<h1 align="center">
  <br>
  <a><img src=".github/architecture.png" alt="logo" width="100%"></a>
  <br>
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vinniciusgomes/nextjs-architecture">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vinniciusgomes/nextjs-architecture">

  <a href="https://github.com/vinniciusgomes/nextjs-architecture/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vinniciusgomes/nextjs-architecture">
  </a>

  <a href="https://github.com/vinniciusgomes/nextjs-architecture/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/vinniciusgomes/nextjs-architecture.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/vinniciusgomes/nextjs-architecture/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/vinniciusgomes/nextjs-architecture?style=social">
  </a>
</p>

# Next.js with Typescript reference architecture

### How to run

`npm install`
`npm dev`
<br />
`yarn`
`yarn dev`

### How to build

`npm run build`
<br />
`yarn build`

### How to tests

`npm test`
<br />
`yarn test`

# File structure

**This is your source code tree:**

```
src
|-- common
   |-- assets
   |-- helpers
   |-- mocks
   |-- styles
      |-- pages
   |-- utils
|-- components
|-- config
|-- container
|-- hooks
|-- pages
   |-- api
   |-- _app.tsx
   |-- _document.tsx
   |-- index.tsx
|-- services
...
```

**This is your component structure:**

```
...
components
|-- YourComponent
   |-- YourComponent.tsx
   |-- YourComponent.spec.ts
   |-- interfaces.ts
   |-- styles.ts
   |-- index.tsx
...
```

**These are the folders and their functions:**

`./common`

Here are all the project assets that will be used by the application such as global styles, images, fonts, mocks, reusable functions, among others

`./components`

Components are presentational only elements, grouping UI items

`./configs`

Configs are our application's global settings files

`./containers`

Containers are responsible for handling dependency injection, decoupling the application from the library

`./hooks`

Hooks are functions that allow you to “plug in” to React's state and lifecycle features from functional components

`./pages`

Pages are mapped in routes and have all the containers needed to implement a functionality

`./services`

Contains all the files responsible for consuming external services, such as the axios configuration file for consuming RestFul APIs.

### More utils commands

Analyzer your build bundle
`npm run analyze`
`yarn analyze`

Find and fix Javascrit and TypeScript problems according to pre-defined rules
`npm run lint`
`yarn lint`

Find and fix code formatted
`npm run prettier`
`yarn prettier`

# Advantages of using this react project template

The project is already configured with:

- React
- Typescript
- Jest
- Unit testing example
- Eslint
- Prettier
- Styled
- Husky

### Main dependecies

- [axios](https://www.npmjs.com/package/axios)
- [date-fns](https://date-fns.org/)
- [react](https://reactjs.org/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [styled-components](https://styled-components.com/)

### Main dev dependecies

- [testing-library](https://testing-library.com/)
- [eslint](https://eslint.org/)
- [husky](https://www.npmjs.com/package/husky)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [prettier](https://prettier.io/)
- [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)
- [typescript](https://www.typescriptlang.org/)
- [web-vitals](https://web.dev/vitals/)
