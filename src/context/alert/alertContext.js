/*
    Create a Context object. When React renders a component that subscribes 
    to this Context object it will read the current context value from the 
    closest matching Provider above it in the tree.
*/

import { createContext } from 'react';
const alertContext = createContext();
export default alertContext;
