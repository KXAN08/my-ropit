import { useContext, useReducer, createContext } from "react";

const Context = createContext()

export const ContextProvider = ({children, initialState, reducer}) => {
    const store = useReducer(reducer, initialState)
    return <Context.Provider value={store}>{children}</Context.Provider>
}

export const useStateValue = () => useContext(Context)