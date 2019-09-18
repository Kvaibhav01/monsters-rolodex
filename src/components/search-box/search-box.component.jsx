import React from "react";
import "./search-box.styles.css";

// Functional component for the search box.
//? A functional component get some props and returns the HTML
// Make placeholder and onChange dynamic by setting it as a prop and destructuring
export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
