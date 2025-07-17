#Further Steps

- Learn Config Driven UI

# Two ways of export and import:

-1st: export default component;
-2nd: export const component (or variable); - import {component} from "file path";

# React Hooks:

Main - useState() & useEffect()

UI layer will be in sync with Data layer.

useState() definition: Whenever state variable updates, react re-render its component on UI.

Why React is Fast?
React is very good at efficient DOM Manipulation or Operations (because it has virtual DOM) and re-rendering the component on the UI, this is the reason developers prefer react.

# Monolith & Microservices architecture.

(Load -> Render with Shimmer UI -> API Call -> Re-render UI)
useEffect()

Fetch live API

CORS

Optional Chaining

Shimmer UI

# 2 types of routing

- Client side routing- Used in react - Each components already present in our app by initial rendering, we are just rendering the components already present on client side using routing

- Server side routing- using anchor tag, the whole page gets refreshed, and it will bring e.g. /contact.html page from server.

# React Class base Components:

# lifecycle of class base components in react

# React Lifecycle methods,

# React custom hook ( make our code more modular, maintainable, following single responsibility principal of software engineering)

# For large react application with large amount of components, it is not feasible to bundle all the components into single javascript file, it will increase the memory size and it will cause slow loading and rendering the application, to avoid this we use code splitting methods in order to reduce initial bundle size.

- It has different names as follows:

  - Code Splitting
  - Chunking
  - Lazy Loading
  - On Demand Loading
  - Dynamic Bundling
  - Dynamic Import

- React has lazy() method and Suspense component inside 'react' which we need to use in order to chunk/code split.
