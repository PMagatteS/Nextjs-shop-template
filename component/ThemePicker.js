import React from 'react';
import {MdBrush, MdClose} from 'react-icons/md'
import { useStateContext } from '../context/useStateContext'

const ThemeBoard =  ({themes, togglePicker, setThemeColors}) => {
    return(
<div className="theme-board">
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
    const {showPicker, togglePicker, themes, setThemeColors} = useStateContext()
    return (
     <>
        {showPicker?<ThemeBoard themes={themes} togglePicker={togglePicker} setThemeColors={setThemeColors}/>:<MdBrush className="theme-icon" onClick={togglePicker}/>}
                
     </>   
    );
};

export default ThemePicker;