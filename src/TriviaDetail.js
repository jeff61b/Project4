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
    return (
      <div>
        <h1>Trivia Detail Page</h1>
        <h2>Question: {triviaDetail.question}</h2>
        <h2>Answer 1: {triviaDetail.answer1}</h2>
        <h2>Answer 2: {triviaDetail.answer2}</h2>
        <h2>Answer 3: {triviaDetail.answer3}</h2>
        <h2>Answer 4: {triviaDetail.answer4}</h2>
        <h2>Correct Answer: {triviaDetail.correctAnswer}</h2>
        {/* <h3>Category: {triviaDetail.categoryId}</h3> */}
        <h2>Trivia Category: {triviaDetail.Category.name}</h2>

        {/* <h5>Add a New Song</h5>
        <form onSubmit={this.props.addSong}>
          <input type="hidden" name="artistId" value={artistDetail.id} />
          <input type="text" name="title" />
          <input type="submit" value="Add Song" />
        </form> */}
        {/* <ul>{artistSongs}</ul> */}
      </div>
    );
  }
}

export default TriviaDetail;
