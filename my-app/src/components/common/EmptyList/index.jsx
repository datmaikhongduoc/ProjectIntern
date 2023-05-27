import React, { useEffect, useState } from 'react';
// import '../../../scss/components/common/styles.scss';
import {HiOutlineEmojiSad} from "react-icons/hi"
const EmptyList = ({ searchKey }) => 
{
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  useEffect(() => {
    setIsSearchEmpty(searchKey === '');
  }, [searchKey]);
  return(
  <div className='empty-list'>
    <div className='empty-list-container'>
        <p>Search : {searchKey ? searchKey : 'Bạn hãy nhập thông tin cần tìm kiếm'} </p>
        <div className='h1-icon'><h1>No result</h1> <HiOutlineEmojiSad className='icon-sad'/> </div>
        <p>We coundn't find any posts with the keyword "{searchKey}". Please try another keyword </p>
    </div>
       
  </div>
)
};

export default EmptyList;
