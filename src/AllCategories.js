import React, { Component } from "react";
import { Link } from "react-router-dom";

//console.log(this.props.categories);
class AllCategories extends Component {
  render() {
    const allCategories = this.props.categories.map((category) => {
      return (
        <li className="categoryList" key={category.id}>
          <Link className="categoryList" to={`/category/${category.id}`}>
            {category.name}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <br></br>
        <h1>All Trivia Categories</h1>
        <br></br>

        {<ul className="categoryList">{allCategories}</ul>}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default AllCategories;
