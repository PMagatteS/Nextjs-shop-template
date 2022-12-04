import {useContext, createContext} from "react"

const Context = createContext()

const StateContext = () => {
    return(
        <Context.Provider value={}>

        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)