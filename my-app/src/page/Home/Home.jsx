import React, { useState } from 'react';
import BlogList from '../../components/Home/UiList';
import { blogList } from '../../config/data';
import { Link } from 'react-router-dom';
import "./style.css"

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const filteredData = blogList.filter((item) => item.category === 'development');
  const maxDescriptionLength = 150;
  return (
    <div>
      {filteredData.map((item) => (
        <div className='blogItem-wrap-home'>
          <div>
            <img className='blogItem-cover blogItem-cover-home' src={item.cover} alt='cover' />
          </div>

          <div className='blog-item-content'>
            <div className='blogItem-info'>{item.category} <li>{item.createdAt}</li></div>
            <h3>{item.title}</h3>
            <p className='blogItem-desc'>
            {item.description.length > maxDescriptionLength
              ? `${item.description.slice(0, maxDescriptionLength)}`
              : item.description}.
              </p>
            <footer className='home-footer'>
              <div className='blogItem-author-home'>
                <img src={item.authorAvatar} alt='avatar' />
                <div>
                  <h6>{item.authorName}</h6>
                  <p>{item.tagName}</p>
                </div>
              </div>
              <Link className='blogItem-link' to={`/template/${item.id}`}>
                ➝
              </Link>
            </footer>
          </div>
       
      </div>
      ))}
      
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
