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
          <Link to={`/triviaQuestions/${question.id}`}>
            {question.question}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <h1>All Trivia Questions</h1>
        <h3>Create a New Trivia Question</h3>
        <form onSubmit={this.props.addTrivia}>
          <input type="text" name="question" />
          <input type="text" name="answer1" />
          <input type="text" name="answer2" />
          <input type="text" name="answer3" />
          <input type="text" name="answer4" />
          <input type="number" name="correctAnswer" />
          <input type="number" name="categoryId" />
          <input type="submit" value="Add Trivia Question" />
        </form>
        {<ol>{allTrivia}</ol>}
      </div>
    );
  }
}

export default AllTrivia;
