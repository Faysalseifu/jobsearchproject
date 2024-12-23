import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
    return (
      <div className="searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]">
        <form action="">
          <div className="firstDiv flex   
   justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
            <div className="flex gap-2 items-center">
              <AiOutlineSearch className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search Job Here..."   
  
              />
            </div>
          </div>   
  
        </form>
      </div>
    );
  };
  
  export default Search;