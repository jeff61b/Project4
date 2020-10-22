import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

//console.log(this.props.categories);
class AllCategories extends Component {
  render() {
    const allCategories = this.props.categories.map((category) => {
      return (
        // <li className="categoryList" key={category.id} {...category.name}></li>
        <div>
          <li className="categoryList" key={category.id}>
            <Link className="categoryList" to={`/category/${category.id}`}>
              {category.id} {category.name}
            </Link>
          </li>
        </div>
      );
    });
    console.log(allCategories);
    // console.log(allCategories.props);

    return (
      <div>
        <br></br>
        <h1>All Trivia Categories</h1>
        <br></br>
        {/* <h3 className="new-trivia">Add a New Trivia Category</h3> */}
        <form className="new-trivia" onSubmit={this.props.newCategory}>
          <label className="labels" htmlFor="category">
            Enter a New Category:{" "}
          </label>
          <input id="newCategory" type="text" name="category" />
          {"    "}
          <input id="clickButton" type="submit" value="Add Category" />
        </form>

        {<ul className="categoryList">{allCategories}</ul>}
        <br></br>
        {/* <nav>
          <h2>Add Category</h2>
          <link to="/category/new">Add Category </link>
        </nav> */}
        {/* <main>
          <Switch>
            <Route
              exact
              path="/category/new"
              component={() => <NewCategory newCategory={this.newCategory} />}
            />
          </Switch>
        </main> */}
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
