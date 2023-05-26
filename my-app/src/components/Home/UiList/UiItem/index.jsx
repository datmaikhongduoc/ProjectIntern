import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BlogItem = ({
  blog: {
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
}) => {
    const truncatedDescription = description.substring(0, 120);
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <div className='blogItem-info'>{category} <li>{createdAt}</li></div>
      <h3>{title}</h3>
      <p className='blogItem-desc'>{truncatedDescription}.</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{tagName}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/template/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
