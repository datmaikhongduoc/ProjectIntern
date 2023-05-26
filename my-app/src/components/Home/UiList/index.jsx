import React from 'react';
import UiItem from './UiItem';
import './styles.scss';

const UiList = ({ UiData }) => {
  return (
    <div className='ui-list-wrap'>
      {UiData.map((item) => (
        <UiItem UiData={item} />
      ))}
    </div>
  );
};

export default UiList;
