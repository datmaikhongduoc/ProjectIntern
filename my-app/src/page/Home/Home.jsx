import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "../../scss/pages/home.scss"
import "../../scss/main.scss";
import UiList from './../../components/Home/UiList/index';
import { uilist } from './../../config/data';

const Home = () => {
  const [lists, setLists] = useState(uilist);
  const [showContent, setShowContent] = useState(true);
  const filteredData = uilist.filter((item) => item.category === 'development');
  const maxDescriptionLength = 150;
  return (
    <div>
      {filteredData.map((item) => (
        <div className='home-container'>
          <div>
            <img src={item.cover} alt='cover' />
          </div>

          <div className='home-item-content'>
            <div className='home-item-info'>{item.category} <li>{item.createdAt}</li></div>
            <h3>{item.title}</h3>
            <p className='home-item-desc'>
            {item.description.length > maxDescriptionLength
              ? `${item.description.slice(0, maxDescriptionLength)}`
              : item.description}.
              </p>
            <footer className='home-item-footer'>
              <div className='home-item-author'>
                <img src={item.authorAvatar} alt='avatar' />
                <div>
                  <h6>{item.authorName}</h6>
                  <p>{item.tagName}</p>
                </div>
              </div>
              <Link className='home-item-link' to={`/template/${item.id}`}>
                ➝
              </Link>
            </footer>
          </div>
       
      </div>
      ))}
      
      {/* <UiList UiData={lists} /> */}
      {showContent && <UiList UiData={lists} />}
    </div>
  );
};

export default Home;
