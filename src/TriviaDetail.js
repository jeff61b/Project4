import React, { Component } from "react";

class TriviaDetail extends Component {
  render() {
    const triviaDetail = this.props.triviaQuestions.find((question) => {
      return question.id == this.props.match.params.id;
    });
    // const triviaAnswer1 = this.props.triviaQuestions.find((answer1) => {
    //   return answer1.id == this.props.match.params.id;
    // });
    console.log(triviaDetail);
    // if (triviaDetail.categoryId === null) {
    //   triviaDetail.categoryId = 5;
    //   triviaDetail.Category = "Entertainment";
    // }

    return (
      <div id="detailRecord">
        <br></br>
        <h1>Trivia Detail Page</h1>
        <div id="detailQuestion">
          <form onSubmit={this.props.updateTrivia}>
            <label className="labels" htmlFor="question">
              Question :{" "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="question"
              defaultValue={triviaDetail.question}
            />
            <br />
            <label className="labels" htmlFor="answer1">
              Answer 1 :{" "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="answer1"
              defaultValue={triviaDetail.answer1}
            />
            <br />
            <label className="labels" htmlFor="answer2">
              Answer 2 :{" "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="answer2"
              defaultValue={triviaDetail.answer2}
            />
            <br />
            <label className="labels" htmlFor="answer3">
              Answer 3 :{"  "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="answer3"
              defaultValue={triviaDetail.answer3}
            />
            <br />
            <label className="labels" htmlFor="answer4">
              Answer 4 :{"  "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="answer4"
              defaultValue={triviaDetail.answer4}
            />
            <br />
            <input type="hidden" name="triviaId" value={triviaDetail.id} />
            <br />
            <section id="numSection">
              <label className="labels" htmlFor="correctAnswer">
                Correct Answer :{" "}
              </label>
              <input
                className="numbers"
                type="text"
                name="correctAnswer"
                defaultValue={triviaDetail.correctAnswer}
              />
              <br />
              {/* <section id="categorySection"> */}
              <label className="labels" htmlFor="categoryId">
                Category ID :{" "}
              </label>
              <input
                className="numbers"
                type="number"
                name="categoryId"
                defaultValue={triviaDetail.categoryId}
              />
            </section>
            <p id="categoryName">Category: {triviaDetail.Category.name}</p>
            {/* </section> */}
            <input
              id="clickButton"
              type="submit"
              value="Update This Question"
            />
          </form>
        </div>

        {/* <h2>trivia id: {triviaDetail.id}</h2> */}
        <div id="editButtons">
          <form onSubmit={this.props.deleteTrivia}>
            <input type="hidden" name="triviaId" value={triviaDetail.id} />
            <input
              id="clickButton"
              type="submit"
              value="Delete This Question"
            />
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default TriviaDetail;
