import React, { Component } from "react";

// Muse react app conversion to Trivia react app
// artist => question
// artists => triviaQuestions
// AllArtists => AllTrivia
// allArtists => allTrivia
// ArtistDetail => TriviaDetail
// artistDetail => triviaDetail

class TriviaDetail extends Component {
  render() {
    const triviaDetail = this.props.triviaQuestions.find((question) => {
      return question.id == this.props.match.params.id;
    });
    // const triviaAnswer1 = this.props.triviaQuestions.find((answer1) => {
    //   return answer1.id == this.props.match.params.id;
    // });
    console.log(triviaDetail);
    if (triviaDetail.categoryId === null) {
      triviaDetail.categoryId = 5;
      triviaDetail.Category = "Entertainment";
    }
    console.log(this.props.deleteId);

    // console.log(triviaDetail.id);
    // if (this.props.deleteId === 0) {
    //   this.setState({
    //     deleteId: triviaDetail.id,
    //   });
    //   console.log(this.props.deleteId);
    // }
    // if (this.props.deleteId === null) {
    //   this.setState({
    //     deleteId: triviaDetail.id,
    //   });
    //   console.log(this.props.deleteId);
    // }

    return (
      <div id="detailRecord">
        <br></br>
        <h1>Trivia Detail Page</h1>
        <div id="detailQuestion">
          <form>
            <label className="labels" htmlFor="question">
              Question :{" "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="question"
              value={triviaDetail.question}
            />
            <br />
            <label className="labels" htmlFor="answer1">
              Answer 1 :{" "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="answer1"
              value={triviaDetail.answer1}
            />
            <br />
            <label className="labels" htmlFor="answer2">
              Answer 2 :{" "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="answer2"
              value={triviaDetail.answer2}
            />
            <br />
            <label className="labels" htmlFor="answer3">
              Answer 3 :{" "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="answer3"
              value={triviaDetail.answer3}
            />
            <br />
            <label className="labels" htmlFor="answer4">
              Answer 4 :{" "}
            </label>
            <input
              id="questionAnswers"
              type="text"
              name="answer4"
              value={triviaDetail.answer4}
            />
            <br />
            <label className="labels" htmlFor="correctAnswer">
              Correct Answer :{" "}
            </label>
            <input
              className="numbers"
              type="text"
              name="correctAnswer"
              value={triviaDetail.correctAnswer}
            />
            <br />
            <label className="labels" htmlFor="categoryId">
              Category ID :{" "}
            </label>
            <input
              className="numbers"
              type="text"
              name="categoryId"
              value={triviaDetail.categoryId}
            />
            <br />
            <h2>Category: {triviaDetail.Category.name}</h2>
          </form>
          {/* <h2 class="leftPrompt">Question : </h2>
          <h2> {triviaDetail.question}</h2> */}
        </div>
        {/* <div id="detailQuestion">
          <h2 class="leftPrompt">Answer 1 : </h2>
          <h2>{triviaDetail.answer1}</h2>
        </div>
        <div id="detailQuestion">
          <h2 class="leftPrompt">Answer 2 : </h2>
          <h2>{triviaDetail.answer2}</h2>
        </div>

        <div id="detailQuestion">
          <h2 class="leftPrompt">Answer 3 : </h2>
          <h2>{triviaDetail.answer3}</h2>
        </div>

        <div id="detailQuestion">
          <h2 class="leftPrompt">Answer 4 : </h2>
          <h2>{triviaDetail.answer4}</h2>
        </div> */}

        {/* <h2>Correct Answer : {triviaDetail.correctAnswer}</h2> */}
        {/* <h3>Category: {triviaDetail.categoryId}</h3> */}
        {/* <h2>Trivia Category: {triviaDetail.Category.name}</h2> */}
        <h2>trivia id: {triviaDetail.id}</h2>
        <div id="editButtons">
          <form onSubmit={this.props.deleteTrivia}>
            <input type="hidden" name="triviaId" value={triviaDetail.id} />
            <input
              id="clickButton"
              type="submit"
              value="Delete This Question"
            />
          </form>
          <form onSubmit={this.props.updateTrivia}>
            <input type="hidden" name="triviaId" value={triviaDetail.id} />
            <input
              id="clickButton"
              type="submit"
              value="Update This Question"
            />
          </form>
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
