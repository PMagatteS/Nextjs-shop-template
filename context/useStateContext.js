import {useContext, createContext, useState} from "react"

const Context = createContext()

export const StateContext = ({children}) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [cardQuantity, setCardQuanity] = useState(1);
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart)
    }

    const changeCardQuantity = () => {

    }

    const changeCartQuantity = (item) => {

    }

    const getSearchText = (e) => {
        setSearchText(e.target.value)
    }

    const search = (e) => {
        e.preventDefault(); 
        setSearchQuery(searchText)

    }
    const chooseCategory = (e) => {
        setCategory(e.target.value)
    }

    const addCartItem = (item) => {
        setItems((previous) => [item, ...previous])        
    }

    const removeCartItem = (index) => {
        const newArr = cartItems.filter((_, i) => i !== index);
        setCartItems(newArr)        
    }

    const getSubtotal = () => {
         
    }


    return(
        <Context.Provider value={
            items

        }>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
