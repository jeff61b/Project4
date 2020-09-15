import React, { Component } from "react";
import { Link } from "react-router-dom";

// Muse react app conversion to Trivia react app
// artist => question
// artists => triviaQuestions
// AllArtists => AllTrivia
// allArtists => allTrivia
// ArtistDetail => TriviaDetail

class AllTrivia extends Component {
  render() {
    const allTrivia = this.props.triviaQuestions.map((question) => {
      return (
        <li key={question.id}>
          <Link to={`/trivia/${question.id}`}>{question.question}</Link>
        </li>
      );
    });

    return (
      <div>
        <h1>All Trivia Questions</h1>
        <h3>Create a New Trivia Question</h3>
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
        </form>
        {<ol>{allTrivia}</ol>}
      </div>
    );
  }
}

export default AllTrivia;
