# Simple Universal React App with React Router & Express.js

*Published August 12, 2017* 

This repository is a sample code of the very, very simple Universal React Application, using [React Router](https://github.com/ReactTraining/react-router) version 4 and Express.js.

The official tutorial is available at https://www.mokuji.me/article/universal-app-react-router.

## Motivation
1. **Centralized Routes**

	With the support of [React Router Config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config), all routes are managed in `src/routes.js`, and the rendering code was optimized. This also enables us to render data components on the server.
2. **Server-side Rendering with Fetch Data**

	Rather than the data are pre-defined as a variable inside Javascript file, the app fetches `books` data which is saved as in JSON file and renders data component on both front and server side.

## Pages
The application has the following pages.
- Home [/]
- Book [/book]
	- List of Books [/book]
	- Book Detail [/book/:slug]
- Movie (Redirect to Book) [/movie]
- 404 [/foo]

## Scripts
This project was initialized with [create-react-app](https://github.com/facebookincubator/create-react-app). However, some modifications have been done in order to make it universal.

- **build**: Build the production files based on the client-side app. In addition to the default `react-scripts` task, this generates an `index.ejs` based on the `index.html`.

- **watch**: Build non-hashed Javascript and CSS files, watching the file changes.

- **server**: Run the production app.

- **server-dev**: Run the development app, serving the `index.ejs` from `view` directory. Non-hashed files must be built with `watch` before the initial run.

- **server-dev:watch**: Run the development app with generating non-hashed files as watching file changes. Usually this script is to be used instead of `watch` and `server-dev` when you develop the server-side application.

## Use
Clone the repo and change the working directory:
```bash
$ git clone https://github.com/zacfukuda/universal-app-react-router
$ cd universal-app-react-router
```
Install the packages:
```bash
$ yarn
// Or if you use npm:
$ npm install
```

### Client-side Single Page App
To develop as a client-side single-page app:
```bash
$ yarn start
```
The command will open the browser navigating to [localhost:3000](http://localhost:3000) and the browser will be refreshed  every time you modify the files under `src` directory.

### Universal App
Build & run the app:
```bash
$ yarn build
$ yarn server
```

Visit [localhost:3000](http://localhost:3000) and the source of the home page or [the books page](http://localhost:3000/books). You’ll see the all contents are rendered on the server.

### Server-side Development
Build & watch file changes:
```bash
$ yarn watch
```

Run the app in the development mode:
```bash
$ yarn server-dev
```

Run the two command above in parallel:
```bash
$ yarn server-dev:watch
```
Most of the cases, `server-dev:watch` is sufficient.

## Reference
### Doc & Repo
- [React Router on Github](https://github.com/ReactTraining/react-router)
- [React Training / Router Router](https://reacttraining.com/react-router/)
- [Create React App](https://github.com/facebookincubator/create-react-app) (react-script)
- [React Official Document](https://facebook.github.io/react/)
- [React on Github](https://github.com/facebook/react)
- [Express.js Official Document](https://expressjs.com/)
- [Express.js on Github](https://github.com/expressjs/express)
- [isomorphic-fetch on Github](https://github.com/matthew-andrews/isomorphic-fetch)

### Tutorial & Sample Code
- [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
- [React on the Server for Beginners: Build a Universal React and Node App](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app)
- [Universal JavaScript Apps with React Router 4](https://ebaytech.berlin/universal-web-apps-with-react-router-4-15002bb30ccb)
- [Using create-react-app with React Router + Express.js](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
- [Server Side Rendering with React Router — We must React](https://medium.com/@foxhound87/server-side-rendering-with-react-router-we-must-react-ep-04-ad03b6b9e05d)
- [React, routing, and data fetching](https://medium.com/@taion/react-routing-and-data-fetching-ec519428135c)
- [Server Rendering](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md)
- [React Server Side Rendering With Node And Express](https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/)
- [Example Node Server w/ Babel](https://github.com/babel/example-node-server)