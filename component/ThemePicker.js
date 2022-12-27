import React from 'react';
import {MdBrush, MdClose} from 'react-icons/md'
import { useStateContext } from '../context/useStateContext'
import {BsSunFill, BsMoonFill} from 'react-icons/bs'

const ThemeBoard =  () => {
 const {togglePicker, themes, setThemeColors, toggleDarkMode} = useStateContext()
    return(
        <div className="theme-board">
            <div className="dark-light-mode">
                <BsSunFill className='light-mode' onClick={toggleDarkMode}/>
                <BsMoonFill className='dark-mode' onClick={toggleDarkMode}/>
            </div>
    <MdClose className='close-picker' onClick={togglePicker}/>
    <h5>Theme color</h5>
    <div className="theme-colors">        
        {themes.colors.map((el, i) => <div className="colors" key={i} style={{width:30, height:30, backgroundColor:el, border:"1px solid black"}} onClick={(e) => setThemeColors(el, 'theme')} ></div>)}
    </div>
    <h5>Secondary color</h5>
    <div className="theme-colors">        
        {themes.scolors.map((el, i) => <div className="colors" key={i} style={{width:30, height:30, backgroundColor:el, border:"1px solid black"}} onClick={(e) => setThemeColors(el, 'secondary')} ></div>)}
    </div>
    <h5>Font color</h5>
    <div className="font-colors">
        {themes.fonts.map((el, i) => <div className="colors" key={i} style={{width:30, height:30, backgroundColor:el, border:"1px solid black"}} onClick={(e) => setThemeColors(el, 'font')}></div>)}        
    </div>
    <h5>Cart color</h5>
    <div className="font-colors">
        {themes.cart.map((el, i) => <div className="colors" key={i} style={{width:30, height:30, backgroundColor:el, border:"1px solid black"}} onClick={(e) => setThemeColors(el, 'cart')}></div>)}        
    </div>
</div>
    )
}

const ThemePicker = () => {
    const {showPicker, togglePicker} = useStateContext()
    return (
     <>
        {showPicker?<ThemeBoard/>:<MdBrush className="theme-icon" onClick={togglePicker}/>}
                
     </>   
    );
};

export default ThemePicker;