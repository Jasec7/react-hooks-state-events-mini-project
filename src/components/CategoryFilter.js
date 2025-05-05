import React from "react";

function CategoryFilter({categories, selectedCategory, onCategoryClick}) {
  const categoryButton = categories.map((category) =>{
    return <button key={category} className={category === selectedCategory ? "selected" : null}
    onClick={() => onCategoryClick(category)}>
    {category}
  </button>
  })
  return (
    <div className="category">
      <h5>Category filters</h5>
         {categoryButton}
    </div>
  );
}

export default CategoryFilter;
