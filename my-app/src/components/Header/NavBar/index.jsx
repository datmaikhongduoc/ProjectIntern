
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './styles.scss';
import {BsChevronDown} from "react-icons/bs"
import SearchBar from '../SearchBar';
import { uilist } from '../../../config/data';
import EmptyList from '../../common/EmptyList';
import UiList from '../../Home/UiList/index';


const Header = () => {
    const [lists, setLists] = useState(uilist);
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
      const allBlogs = uilist;
      const filteredBlogs = allBlogs.filter((lists) =>
        lists.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setLists(filteredBlogs);

      if (filteredBlogs.length === 0) {
       
        navigate(`/empty-list?searchKey=${searchKey}`);
      }else {
        // Navigate to SearchResults page with search results
        navigate(`/search-results?searchKey=${searchKey}`);
      }
    };
  
    
    const handleClearSearch = () => {
      setLists(uilist);
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
                <li className="menu-item lainnaya-item">
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
   
    {showContent && (!lists.length ? <EmptyList searchKey={searchKey}  /> : <UiList UiData={lists} />)}
   
    </>
    )
};

export default Header;
