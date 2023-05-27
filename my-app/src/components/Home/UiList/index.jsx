import React, { useState } from 'react';
import UiItem from './UiItem';
// import '../../../scss/components/Home/uiListStyle.scss';

const UiList = ({ UiData}) => {
  const [isUiListVisible, setIsUiListVisible] = useState(true);

  const handleUiItemClick = () => {
    setIsUiListVisible(false);
  };

  return (
   
    <div className='ui-list-wrap'>
      {isUiListVisible &&
        UiData.map((item) => (
          <UiItem
            key={item.id}
            UiData={item}
            handleUiItemClick={handleUiItemClick}
          />
        ))}
    </div>
  );
};

export default UiList;
