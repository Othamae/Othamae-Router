# Othamae-router

A simple router for React applications, designed to work with [Vite](https://vitejs.dev/) and [vitest](https://vitest.dev/). 

## Installation

Use [npm](https://www.npmjs.com/) to install othamae-router.

```bash
npm install othamae-router
```

## Usage

To use othamae-router in your React application, import the `Router` and `Route` components:

```js
import { Router, Route } from 'othamae-router';
```

Then, wrap your application with the `Router` component and define your routes using `Route`:

```js
<Router>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
</Router>
```

You can also use `Link` to create links between your routes:

```js
import { Link } from 'othamae-router';

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

## Scripts

- `dev`: Start a development server with Vite.
- `build`: Build your application for production with Vite.
- `preview`: Serve a production build locally for preview with Vite.
- `test`: Run all tests with vitest.
- `test:ui`: Run UI tests with vitest.

## Dependencies

- `mycommandcli`: ^1.0.6
- `path-to-regexp`: 6.2.1
- `react`: ^18.2.0
- `react-dom`: ^18.2.0

## Dev Dependencies

- `@testing-library/react`: ^14.0.0
- `@types/react`: ^18.0.28
- `@types/react-dom`: ^18.0.11
- `@vitejs/plugin-react-swc`: ^3.0.0
- `@vitest/ui`: ^0.29.8
- `happy-dom`: ^8.9.0
- `standard`: ^17.0.0
- `vite`: ^4.2.0
- `vitest`: ^0.29.8

## ESLint configuration

The project extends the [Standard ESLint configuration](https://github.com/standard/eslint-config-standard).