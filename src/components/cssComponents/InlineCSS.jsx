import React from 'react'
import './style.css'
import Style from './Style.module.css';
import InlineChild from './InlineChild';

function InlineCSS() {
  let style1={color:'antiquewhite', fontSize:'42px'};
    return (
    <div>
      <p style={style1}>Inline CSS-1</p>
      <p style={style1}>Inline CSS-2nd Usage</p>

      <p className='style_2'>External CSS stylesheet used here</p>

      <InlineChild />

      <p className={Style.style_3}>Style Applied from Module Styling Sheet</p>
    </div>
  )
}

export default InlineCSS
