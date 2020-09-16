import React, { Component } from "react";
import { Link } from "react-router-dom";
import TriviaDetail from "./TriviaDetail";

class UpdateTrivia extends Component {
  render() {
    console.log("Update");
    const editTrivia = this.props.triviaQuestions.find((question) => {
      return question.id === this.props.match.params.id;
    });
    console.log(editTrivia);
    return (
      <div>
        <h1> Edit Trivia Record</h1>
        <form>
          Question:{" "}
          <input type="text" name="question" value={editTrivia.question} />
        </form>
      </div>
    );
  }
}

export default UpdateTrivia;
