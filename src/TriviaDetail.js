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
    //console.log(artistDetail);
    return (
      <div>
        <h3>{triviaDetail.question}</h3>
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
