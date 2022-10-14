import React from "react";

const Categories = ({ filter, category }) => {
  return (
    <div className="btn-container">
      {category.map((cate, index) => (
        <button key={index} onClick={() => filter(cate)} className="filter-btn">
          {cate}
        </button>
      ))}
    </div>
  );
};

export default Categories;
