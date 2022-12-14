import {useContext, createContext, useState} from "react"

const Context = createContext()

export const StateContext = ({children}) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [itemQuantity, setItemQuantity] = useState(1);
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart)
    }


    const updateItemQuantity = (action) => {
        // will use this funtion for dynamic pages
        switch (action) {
            case "increase":
                setItemQuantity(previous => previous+1)
                break;
            case "decrease":
                if(itemQuantity===1){
                    return
                }
                setItemQuantity(previous => previous-1)
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

    const addCartItem = (item, qty, reset) => {
        const check = cartItems.find((el) => el.id === item.id);
        if(check){
            setCartItems((previous) => previous.map((el) => {
                     if (el.id===item.id) {
                        return {...el, quantity : el.quantity+qty}                        
                    }}))
                    if (qty!==1) {
                        reset(1)    
                    }
                    getSubtotal("increase", item.price*qty)
                         return
        }
        item.quantity = qty
        item.added = Date.now()
        getSubtotal("increase", item.price*qty)
        setCartItems((previous) => [item, ...previous])  
        reset(1)    
    }

    const removeCartItem = (item,index) => {
        getSubtotal("decrease", item.quantity*item.price)
        const newArr = cartItems.filter((_, i) => i !== index);
        setCartItems(newArr)        
    }

    const updateCartItem = (item, action) => {
        if (action==="increase") {
            setCartItems((previous) => previous.map((el) => {
                if (el.id===item.id) {
                   return {...el, quantity : el.quantity+1}                        
               }}))
               getSubtotal("increase", item.price)
               
            } else {
                if (item.quantity===1) {
                    return
                }
                setCartItems((previous) => previous.map((el) => {
                    if (el.id===item.id) {
                        return {...el, quantity : el.quantity-1}                        
                    }}))
                    getSubtotal("decrease", item.price)
            
        }

    }

    const getSubtotal = (action, balance) => {
         if (action==="increase") {
            setSubtotal((previous) => previous+balance)
        } else {
            setSubtotal((previous) => previous-balance)            
         }
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
            setItemQuantity,
            toggleCart,
            updateItemQuantity,
            changeCartQuantity,
            getSearchText,
            search,
            chooseCategory,
            addCartItem,
            removeCartItem,
            updateItemQuantity,
            getSubtotal,
            updateCartItem
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
