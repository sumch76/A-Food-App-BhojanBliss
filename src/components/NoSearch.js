import React, { useContext } from 'react';
import userContext from '../context/userContext';

const NoSearch = () => {
    const {searchText}=useContext(userContext);
    console.log(searchText);
  
  return (
    <div className='no-search'>
      <p>No search results found {searchText} 😪</p>
    </div>
  );
}

export default NoSearch;
