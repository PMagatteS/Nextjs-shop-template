import {useContext, createContext, useState, useEffect} from "react"

const Context = createContext()

export const StateContext = ({children}) => {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([])
    const [subtotal, setSubtotal] = useState(0);
    const [itemQuantity, setItemQuantity] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [filterBy, setFilterBy] = useState("")

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
                return null
        }
    }

    const getSearchText = (e) => {
        setSearchText(e.target.value)
    }

    const search = (e) => {
        e.preventDefault(); 
        setSearchQuery(searchText)

    }

    const getCategories = () => {
        const values = []
        items.map((el) => {
            if(!values.includes(el.category)){
                values.push(el.category)
            }
        })
        return setCategories(values)
    }

    const chooseCategory = (e) => {
        setCategory(e.target.value)
    }

    const addCartItem = (e=null,item, qty, reset) => {
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
        if(e){
         cardAnimation(e) 
        }
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

    const filter = (e) => {
        setFilterBy(e.target.value)
    }

    const cardAnimation = (e) => {
        const top = e.target.offsetParent.offsetTop;
        const left = e.target.offsetParent.offsetLeft;
        const bodyWidth = document.body.offsetWidth;
        const root = document.documentElement;
        const cardWidth = e.target.offsetParent.offsetWidth;
        root.style.setProperty("--top-card", top + "px");
        root.style.setProperty("--left-card", left + "px");
        root.style.setProperty("--destination", bodyWidth - cardWidth + "px");
        e.target.parentElement.classList.add("buyed");
        setTimeout(() => e.target.parentElement.classList.remove("buyed"), 500);
    }

    useEffect(() => {
        getCategories()
     
      }, [items]);

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
            categories,
            filterBy,
            filter,
            setItems,
            setItemQuantity,
            toggleCart,
            updateItemQuantity,
            getSearchText,
            search,
            chooseCategory,
            getCategories,
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
