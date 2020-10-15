//Setup Data Layer
// Need to track the Basket

import React, { createContext, useContext, useReducer } from "react";

//This is the Data Layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
