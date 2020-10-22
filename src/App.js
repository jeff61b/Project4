import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import TriviaDetail from "./TriviaDetail.js";
import AllTrivia from "./AllTrivia.js";
//import UpdateTrivia from "./UpdateTrivia.js";
import AllCategories from "./AllCategories.js";

import Axios from "axios";
const backendUrl = process.env.BACKEND_URL || "http://localhost:3000/api";

//const backendUrl =   process.env.REACT_APP_BACKEND_URL || "https://trivia-backend-app.herokuapp.com/api";
const myUrl = window.location.href;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      triviaQuestions: [],
      categories: [],
      currentUrl: myUrl,
    };
  }

  // This is successfully getting all artists from the backend application
  componentDidMount() {
    Axios.get(`${backendUrl}/trivia`).then((response) => {
      console.log(response.data);
      this.setState({
        triviaQuestions: response.data.triviaQuestions,
      });
    });
    Axios.get(`${backendUrl}/category`).then((response) => {
      console.log(response.data.categoryAll);
      this.setState({
        categories: response.data.categoryAll,
      });
      console.log(this.state.categories);
      console.log(response.data);
    });
    const myUrl = window.location.href;
    this.setState({
      currentUrl: myUrl,
    });
    console.log(myUrl);
    // If "trivia" is not at the end of the url, then add "trivia"
    // so the AllTrivia page will display first.
    if (myUrl.substring(myUrl.length - 6, myUrl.length) !== "trivia") {
      window.location.replace(myUrl + "trivia");
      console.log("update myurl with trivia ");
      return;
    }
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
    setTimeout(console.log(this.state.triviaQuestions), 1000);
    window.location.assign(this.state.currentUrl);
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
    setTimeout(console.log(this.state.triviaQuestions), 1000);
    window.location.assign(this.state.currentUrl);
    // this.componentDidMount();
  };

  // When a user clicks the Update Trivia button, the trivia data they
  // edited is passed to this method and rewritten to the database.
  // if no category was entered the category of 5 is the default.
  updateTrivia = (event) => {
    if (event.target.categoryId.value == 0) {
      event.target.categoryId.value = 5;
    }
    event.preventDefault();
    console.log("updateTrivia");
    console.log(event);

    let updateId = parseInt(event.target.triviaId.value);
    console.log(updateId);
    //   console.log(event.target.categoryId.value);

    Axios.put(`${backendUrl}/trivia/${updateId}`, {
      question: event.target.question.value,
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value,
      answer4: event.target.answer4.value,
      correctAnswer: event.target.correctAnswer.value,
      categoryId: event.target.categoryId.value,
      id: updateId,
    }).then((response) => {
      console.log(response);
      console.log(response.data.triviaQuestion);
      let tempArray = this.state.triviaQuestions;
      tempArray.push(response.data.triviaQuestion);
      console.log(tempArray);
      this.setState({
        triviaQuestions: tempArray,
      });
    });
    setTimeout(console.log(this.state.triviaQuestions), 1000);
    setTimeout(window.location.assign(this.state.currentUrl), 1000);
  };

  newCategory = (event) => {
    console.log("newCategory logic here");
    event.preventDefault();
    console.log(event.target.category.value);
    Axios.post(`${backendUrl}/category`, {
      name: event.target.category.value,
    }).then((response) => {
      console.log(response);
      let tempCategories = this.state.categories;
      tempCategories.push(response.data.newCategory);
      this.setState({
        categories: tempCategories,
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
                <AllCategories
                  categories={this.state.categories}
                  newCategory={this.newCategory}
                />
              )}
            />
            <Route
              path="/trivia/:id"
              component={(routerProps) => (
                <TriviaDetail
                  {...routerProps}
                  triviaQuestions={this.state.triviaQuestions}
                  deleteTrivia={this.deleteTrivia}
                  updateTrivia={this.updateTrivia}
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
