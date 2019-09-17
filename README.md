# github-finder

This project is part of the Udemy course [React Front To Back 2019](https://www.udemy.com/modern-react-front-to-back).

## Skills Practiced

- Replace class components with functional components
- Replace component state with `useState`
- Replace component methods with `useEffect`
- Replace `useState`, `useEffect` hooks with Context provider

## Using the Context Provider

### Directory Structure

- src/context/domain/domainContext.js
- src/context/domain/domainReducer.js
- src/context/domain/DomainState.js

#### domainContext.js

- Initialize Context provider

#### domainReducer.js

- Import action type constants, then define return values for each action
- Copy current state with spread operator (...state)
- action.payload contains data from the API api call made in the ContextState file

#### domainState.js

- Define initial state and actions
- Results from actions are dispatched to the Reduer to change global state

## Making a Progressive Web App

You need to [read this](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
