import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <div className='blog-date'> UI DESIGN  <li>{blog.createdAt}</li> </div>
            <h1>{blog.title}</h1>
          </header>
          <footer>
            <div className='blogItem-author'>
              <img src={blog.authorAvatar} alt='avatar' />
              <div>
                <h6>{blog.authorName}</h6>
                <p>{blog.tagName}</p>
              </div>
            </div>
        </footer>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
          
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
