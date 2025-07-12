#Further Steps

- Learn Config Driven UI

-<AppLayout> -<Header>
-logo
-navbar
-image

<Header/> 
-<body>
-Search & button
-restaurantCards -<Cards/>
<body/> 
-<Footer>
-copyright
-contact us
-links
<Footer/>
<AppLayout/>

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
