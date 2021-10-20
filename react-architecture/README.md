<h1 align="center">
  <br>
  <a><img src=".github/architecture.png" alt="logo" width="100%"></a>
  <br>
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vinniciusgomes/react-architecture">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vinniciusgomes/react-architecture">

  <a href="https://github.com/vinniciusgomes/react-architecture/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vinniciusgomes/react-architecture">
  </areact-architecture

  <a href="https://github.com/vinniciusgomes/react-architecture/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/vinniciusgomes/react-architecture.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
   <a href="https://github.com/vinniciusgomes/react-architecture/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/vinniciusgomes/react-architecture?style=social">
  </a>
</p>

# React with Typescript reference architecture

### How to run

`npm install`
`npm start`
<br />
`yarn`
`yarn start`

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
   |-- mocks
   |-- stories
   |-- styles
   |-- utils
|-- components
|-- hooks
|-- pages
|-- routes
|-- services
|-- Bootstrap.tsx
|-- index.tsx
...
```

**This is your component structure:**

```
...
components
|-- YourComponent
   |-- YourComponent.tsx
   |-- YourComponent.stories.tsx
   |-- YourComponent.spec.ts
   |-- interfaces.ts
   |-- styles.ts
   |-- index.tsx
...
```

**This is your page structure:**

```
...
pages
|-- YourPage
   |-- components/
   |-- YourPage.tsx
   |-- YourPage.stories.tsx
   |-- YourPage.spec.ts
   |-- interfaces.ts
   |-- styles.ts
   |-- index.tsx
...
```

**These are the folders and their functions:**

`./common`

Here are all the project assets that will be used by the application such as global styles, images, fonts, mocks, stories, reusable functions, among others

`./components`

Components are presentational only elements, grouping UI items

`./hooks`

Hooks are functions that allow you to “plug in” to React's state and lifecycle features from functional components

`./pages`

Pages are mapped in routes and have all the containers needed to implement a functionality

`./routes`

Routes contains the `react-router-dom` implementation to map the project's routes to the respective pages

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
- Story Book
- Husky

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

You can learn more web develop tools [web.dev](https://web.dev/)


### Main dependecies

- [axios](https://www.npmjs.com/package/axios)
- [date-fns](https://date-fns.org/)
- [react](https://reactjs.org/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
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
