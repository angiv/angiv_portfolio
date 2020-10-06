import React, { useState } from 'react';

const WorksSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={onSubmit} className="">
        <div className="search-bar-grid">
           <i className="fas fa-search search-bar-grid__icon"></i>
            <input onChange={e => setText(e.target.value)} className="form-search-bar search-bar-grid__input" type="text" placeholder="Search works for..." />

      </div>
      </form>
	</div>
  )
}

export default WorksSearch;