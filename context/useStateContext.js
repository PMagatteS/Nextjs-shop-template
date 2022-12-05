import {useContext, createContext, useState} from "react"

const Context = createContext()

export const StateContext = ({children}) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([])
    const [searchText, setSearchText] = useState("")
    const [category, setCategory] = useState("")
    const [subtotal, setSubtotal] = useState(0)
    const [cardQuantity, setCardQuanity] = useState(1)
    const [showCart, setShowCart] = useState(false)
    return(
        <Context.Provider value={
            items

        }>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
