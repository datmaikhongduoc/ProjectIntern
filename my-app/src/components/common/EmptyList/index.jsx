import React from 'react';
import './styles.css';
import {HiOutlineEmojiSad} from "react-icons/hi"
const EmptyList = ({ searchKey }) => (
  <div className='emptyList-wrap'>
        <p>Search : {searchKey} </p>
        <h1>No result <HiOutlineEmojiSad/> </h1>
        <p>We coundn't find any posts with the keyword "{searchKey}". Please try another keyword </p>
  </div>
);

export default EmptyList;
