import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import TriviaDetail from "./TriviaDetail.js";
import AllTrivia from "./AllTrivia.js";
import UpdateTrivia from "./UpdateTrivia.js";
import AllCategories from "./AllCategories.js";

import Axios from "axios";
const backendUrl = process.env.BACKEND_URL || "http://localhost:3000/api";
//const backendUrl =
//  process.env.REACT_APP_BACKEND_URL || "https://muse-backend.herokuapp.com/api";

// Muse react app conversion to Trivia react app
// artist => question
// artists => triviaQuestions
// AllArtists => AllTrivia
// ArtistDetail => TriviaDetail
//

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      triviaQuestions: [],
      categories: [],
    };
  }

  // This is successfully getting all artists from the backend application
  componentDidMount() {
    Axios.get(`${backendUrl}/trivia`).then((response) => {
      console.log(response.data);
      this.setState({
        triviaQuestions: response.data.triviaQuestions,
      });
      console.log(this.state.triviaQuestions);
      console.log(response);
    });
    Axios.get(`${backendUrl}/category`).then((response) => {
      console.log(response.data.categoryAll);

      this.setState({
        categories: response.data.categoryAll,
      });
      console.log(this.state.categories);
      console.log(response);
      console.log(response.data.categoryAll.name);
    });
  }

  // From the trivia detail page, when the user clicks the "Delete
  // this Question" button, the program passes the id of that question
  // to this method and deletes the record from the database.
  deleteTrivia = (event) => {
    console.log("delete Trivia");
    console.log(event.target.triviaId.value);
    event.preventDefault();
    let deleteId = event.target.triviaId.value;
    Axios.delete(`${backendUrl}/trivia/${deleteId}`).then((response) => {
      console.log(response);
      let tempArray = this.state.triviaQuestions;
      const index = tempArray.indexOf(deleteId);
      if (index > -1) {
        tempArray.splice(index, 1);
        this.setState({
          triviaQuestions: tempArray,
        });
      }
    });
    console.log(this.state.triviaQuestions);
    this.componentDidMount();
  };

  // When a user clicks the Add Trivia button, the trivia data they
  // entered is passed to this method and written to the database.
  // Add the new question and answers to tempArray and copy tempArray
  // back to this.state.triviaQuestions.
  addTrivia = (event) => {
    if (event.target.categoryId.value == 0) {
      event.target.categoryId.value = 5;
    }
    console.log("addTrivia");
    event.preventDefault();
    console.log(event.target.question.value);
    console.log(event.target.categoryId.value);

    Axios.post(`${backendUrl}/trivia`, {
      question: event.target.question.value,
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      answer4: event.target.answer4.value,
      correctAnswer: event.target.correctAnswer.value,
      categoryId: event.target.categoryId.value,
    }).then((response) => {
      console.log(response);
      let tempArray = this.state.triviaQuestions;
      tempArray.push(response.data.newQuestion);
      this.setState({
        triviaQuestions: tempArray,
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <nav id="navigation">
          <Link className="linkText" to="/trivia">
            All Trivia{" "}
          </Link>
          <Link className="linkText" to="/category">
            {" "}
            Trivia Categories
          </Link>
        </nav>
        <main id="main">
          <Switch>
            <Route
              exact
              path="/trivia"
              component={() => (
                <AllTrivia
                  triviaQuestions={this.state.triviaQuestions}
                  addTrivia={this.addTrivia}
                />
              )}
            />
            <Route
              exact
              path="/category"
              component={() => (
                <AllCategories categories={this.state.categories} />
              )}
            />
            <Route
              path="/trivia/:id"
              component={(routerProps) => (
                <TriviaDetail
                  {...routerProps}
                  triviaQuestions={this.state.triviaQuestions}
                  deleteTrivia={this.deleteTrivia}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
