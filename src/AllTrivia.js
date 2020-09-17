import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllTrivia extends Component {
  render() {
    console.log("AllTrivia");
    const allTrivia = this.props.triviaQuestions.map((question) => {
      return (
        <li className="triviaList" key={question.id}>
          <Link className="triviaList" to={`/trivia/${question.id}`}>
            {question.question}
          </Link>
        </li>
      );
    });

    return (
      <div className="triviaBackground">
        <h1>Trivia Database</h1>
        <h3 className="new-trivia">Create a New Trivia Question</h3>
        <form className="new-trivia" onSubmit={this.props.addTrivia}>
          <label className="labels" htmlFor="question">
            Question:
          </label>
          <input id="questionAnswers" type="text" name="question" /> <br />
          <label className="labels" htmlFor="answer1">
            Answer 1:
          </label>
          <input id="questionAnswers" type="text" name="answer1" /> <br />
          <label className="labels" htmlFor="answer2">
            Answer 2:
          </label>
          <input id="questionAnswers" type="text" name="answer2" /> <br />
          <label className="labels" htmlFor="answer3">
            Answer 3:
          </label>
          <input id="questionAnswers" type="text" name="answer3" /> <br />
          <label className="labels" htmlFor="answer4">
            Answer 4:
          </label>
          <input id="questionAnswers" type="text" name="answer4" /> <br />
          <label className="labels" htmlFor="correctAnswer">
            Correct Answer #:
          </label>
          <input className="numbers" type="number" name="correctAnswer" />
          <label className="labels" htmlFor="categoryId">
            Category ID:
          </label>
          <input className="numbers" type="number" name="categoryId" /> <br />
          <input id="clickButton" type="submit" value="Add Trivia Question" />
        </form>
        {<ol className="triviaList">{allTrivia}</ol>}
      </div>
    );
  }
}

export default AllTrivia;
