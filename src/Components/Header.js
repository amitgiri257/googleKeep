import React from 'react'
// import SettingsIcon from '@mui/icons-material/Settings';
import { IoSettingsSharp } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";

import './Header.css'
const Header = () => {
  return (
    <>
    <div className='head'>
        <div id='h1'>
        <svg id='svg' focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        <img className="gb_Hc" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"/>
        <span id='keep'  >Keep</span>
        </div>
        <div>
            <input placeholder='Search'></input>
        </div>
        <div id='h2'>
        <VscDebugRestart />
        <IoSettingsSharp />
        
            <img src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"  /> </div>
        </div>
    <div className='line'></div>
    </>
  )
}

export default Header