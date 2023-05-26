import React, { useState } from 'react'
import { blogList } from '../../config/data';
import BlogList from '../../components/Home/UiList';
import "./style.css"
const UiDesign = () => {
    const [blogs, setblogs] = useState(blogList);
    
  return (
    <div className='UI-Design'>
        <h1>UI Design</h1>
        <BlogList  blogs={blogs}/>
    </div>
    
  )
}

export default UiDesign