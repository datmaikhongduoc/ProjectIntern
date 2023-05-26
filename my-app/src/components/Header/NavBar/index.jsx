
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './styles.css';
import {BsChevronDown} from "react-icons/bs"
import SearchBar from '../SearchBar';
import { blogList } from '../../../config/data';
import BlogList from '../../Home/UiList/index';
import EmptyList from '../../common/EmptyList';


const Header = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');
    const [showContent, setShowContent] = useState(false);
    const navigate = useNavigate();
    // Search submit
    const handleSearchBar = (e) => {
      e.preventDefault();
      handleSearchResults();
      setShowContent(true);
    };
  
    // Search for blog by category
    const handleSearchResults = () => {
      const allBlogs = blogList;
      const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setBlogs(filteredBlogs);

      if (filteredBlogs.length === 0) {
       
        navigate(`/empty-list?searchKey=${searchKey}`);
      }else {
        // Navigate to SearchResults page with search results
        navigate(`/search-results?searchKey=${searchKey}`);
      }
    };
  
    
    const handleClearSearch = () => {
      setBlogs(blogList);
      setSearchKey('');
      setShowContent(false);
    };
    return(
        <>

        
    <header className="navBar">
        <div className="logo">
            <div className="logo-text">
                <span className="logo-icon">E</span>
                <span className="logo-name">
                    <Link to="/">Epictetus</Link>
                </span>
            </div>
        </div>

        <nav className="menu">
            <ul className="menu-list">
                <li className="menu-item">
                <Link to="/ui-design">UI Design</Link>
                </li>
                <li className="menu-item">
                <Link to="/front-end">Front-end</Link>
                </li>
                <li className="menu-item">
                <Link to="/back-end">Back-end</Link>
                </li>
                <li className="menu-item item-lainnaya">
                lainnya <BsChevronDown/>
                </li>
            </ul>
        </nav>
        <div className="search">
            <SearchBar
            value={searchKey}
            clearSearch={handleClearSearch}
            formSubmit={handleSearchBar}
            handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        </div>
    </header>
   
    {showContent && (!blogs.length ? <EmptyList searchKey={searchKey}  /> : <BlogList blogs={blogs} />)}
   
    </>
    )
};

export default Header;
