import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { uilist } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
// import "../../scss/pages/UiDesign/styles.scss";
import { Link } from 'react-router-dom';

const UiDesign = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = uilist.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='ui-go-back' to='/trangchu'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='ui-container'>
          <header>
            <div className='ui-date'> UI DESIGN  <li>{blog.createdAt}</li> </div>
            <h1>{blog.title}</h1>
          </header>
          <footer>
            <div className='ui-item-author'>
              <img src={blog.authorAvatar} alt='avatar' />
              <div>
                <h6>{blog.authorName}</h6>
                <p>{blog.tagName}</p>
              </div>
            </div>
          </footer>
          <img src={blog.cover} alt='cover' />
          <p className='ui-desc'>{blog.description}</p>
          
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default UiDesign;
