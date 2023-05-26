import React, { useState } from 'react'
import { blogList, uilist } from '../../config/data';
import "./styles.scss"
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