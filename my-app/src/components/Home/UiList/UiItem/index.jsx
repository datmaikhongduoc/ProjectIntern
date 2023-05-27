import React from 'react';
import { Link } from 'react-router-dom';
// import '../../../../scss/components/Home/uiItemStyle.scss';

const UiItem = ({
  UiData: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
    tagName
  },
  handleUiItemClick
}) => {
    const truncatedDescription = description.substring(0, 120);
  
  return (
    <div className='ui-item'>
      <img className='ui-item-cover' src={cover} alt='cover' />
      <div className='ui-item-info'>{category} <li>{createdAt}</li></div>
      <h3>{title}</h3>
      <p className='ui-item-desc'>{truncatedDescription}.</p>
      <footer>
        <div className='ui-item-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{tagName}</p>
          </div>
        </div>
        <Link className='ui-item-link' to={`/template/${id}`} onClick={handleUiItemClick}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default UiItem;
