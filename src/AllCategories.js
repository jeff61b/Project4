import React, { Component } from "react";
import { Link } from "react-router-dom";

//console.log(this.props.categories);
class AllCategories extends Component {
  render() {
    const allCategories = this.props.categories.map((category) => {
      return (
        <li key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </li>
      );
    });

    return (
      <div>
        <h1>All Trivia Categories</h1>
        {/* <h3>Create a New Trivia Question</h3>
        <form onSubmit={this.props.addTrivia}>
          <label htmlFor="question">Question:</label>
          <input type="text" name="question" /> <br />
          <label htmlFor="answer1">Answer 1:</label>
          <input type="text" name="answer1" /> <br />
          <label htmlFor="answer2">Answer 2:</label>
          <input type="text" name="answer2" /> <br />
          <label htmlFor="answer3">Answer 3:</label>
          <input type="text" name="answer3" /> <br />
          <label htmlFor="answer4">Answer 4:</label>
          <input type="text" name="answer4" /> <br />
          <label htmlFor="correctAnswer">Correct Answer #:</label>
          <input type="number" name="correctAnswer" />
          <label htmlFor="categoryId">Category ID:</label>
          <input type="number" name="categoryId" /> <br />
          <input type="submit" value="Add Trivia Question" />
        </form> */}
        {<ol>{allCategories}</ol>}
      </div>
    );
  }
}

export default AllCategories;
