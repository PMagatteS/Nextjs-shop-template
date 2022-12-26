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
    const [showPicker, setShowPicker] = useState(false)
    const [filterBy, setFilterBy] = useState("");
    const themes = {
        colors: ["#180485", "#A4262C", "#CA5010", "#8F7034", "#407855", "#038387", "#0078D4", "#40587C", "#4052AB", "#854085"],
        scolors: ["#8B81C1", "#A4262C", "#CA5010", "#8F7034", "#407855", "#038387", "#0078D4", "#40587C", "#4052AB", "#854085"],
        fonts : ["#faebd7", "#FFFFFF", "#F4F4F4", "#D0D0D0", "#3C3C3C", "#9ADFE1", "#C17EFF", "#FF94A9", "#CFCA88", "#000000"],
        cart : ["#faebd7", "#FFFFFF", "#F4F4F4", "#D0D0D0"],
    }

    const toggleCart = () => {
        setShowCart(!showCart);
        document.body.classList.toggle("no-scroll");
    }

    const togglePicker = () => {
        setShowPicker(!showPicker) 
    }

    const setThemeColors = (value, action) => {
        const root = document.documentElement;
        if(action==="theme"){
            root.style.setProperty("--primary-color", value);
        }else if(action==='font') {
            root.style.setProperty("--font-color", value);
        }else if(action==='secondary') {
            root.style.setProperty("--secondary-color", value);
        }else if(action==='cart') {
            root.style.setProperty("--cart-color", value);
        }
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

    const addCartItem = (e,item, qty, reset) => {
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
        setCartItems((previous) => previous.filter((_, i) => i !== index))        
    }

    const updateCartItem = (item, action) => {

        if (action==="increase") {
            getSubtotal("increase", item.price)
            setCartItems(previous => previous.map((el) => {
                if (el.id===item.id) {
                   return {...el, quantity : el.quantity+1}                        
               }
               return el}
               ))
               
            }
             else {
                if (item.quantity===1) {
                    return
                }
                getSubtotal("decrease", item.price)
                setCartItems(previous => previous.map((el) => {
                if (el.id===item.id) {
                   return {...el, quantity : el.quantity-1}                        
               }
               return el}
               ))
            
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
            showPicker,
            themes,
            filter,
            setItems,
            setItemQuantity,
            toggleCart,
            togglePicker,
            updateItemQuantity,
            getSearchText,
            search,
            chooseCategory,
            getCategories,
            addCartItem,
            removeCartItem,
            updateItemQuantity,
            getSubtotal,
            updateCartItem,
            setThemeColors,
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)
