import React, { useState } from 'react'
import { uilist } from '../../config/data';
// import "../../scss/pages/uiDesign.scss"
import UiList from './../../components/Home/UiList/index';
const UiDesign = () => {
    const [blogs, setblogs] = useState(uilist);
    
  return (
    <div className='UI-Design'>
        <h1>UI Design</h1>
        <UiList  UiData={blogs}/>
    </div>
    
  )
}

export default UiDesign