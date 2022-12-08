import {useContext, createContext, useState} from "react"

const Context = createContext()

export const StateContext = ({children}) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [itemQuantity, setItemQuanity] = useState(1);
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart)
    }


    const updateItemQuantity = (action) => {
        // will use this funtion for dynamic pages
        switch (action) {
            case "increase":
                setItemQuanity(previous => previous+1)
                break;
            case "decrease":
                if(itemQuantity===1){
                    return
                }else{
                    setItemQuanity(previous => previous--)
                }
                break;
        
            default:
                return
                break;
        }
    }

    const changeCartQuantity = (item, action, index) => {
        const newArr = cartItems.filter(item)
        if(action==="increase"){
            item.quantity++
        }else{
            if (item.quantity===1) {
                removeCartItem(index)
                return
            }
            item.quantity--
        }
        setCartItems((previous) => [...previous, item])
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
        <Context.Provider value={{
            items,
            cartItems,
            searchText,
            searchQuery,
            category,
            subtotal,
            itemQuantity,
            showCart,
            showCart,
            toggleCart,
            updateItemQuantity,
            changeCartQuantity,
            getSearchText,
            search,
            chooseCategory,
            addCartItem,
            removeCartItem,
            updateItemQuantity,
            getSubtotal
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
