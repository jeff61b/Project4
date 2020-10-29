import React, { Component } from "react";

class CategoryDetail extends Component {
  render() {
    const categoryDetail = this.props.categories.find((category) => {
      return category.id == this.props.match.params.id;
    });

    console.log(categoryDetail);

    return (
      <div id="categoryRecord">
        <br></br>
        <h1>Category Detail Page</h1>
        <form onSubmit={this.props.updateCategory}>
          <label className="labels" htmlFor="category">
            Category :{" "}
          </label>
          <input
            id="updCategory"
            type="text"
            name="category"
            defaultValue={categoryDetail.name}
          />
          <br />
          <input type="hidden" name="categoryId" value={categoryDetail.id} />
          <br />
          <input id="clickButton" type="submit" value="Update This Category" />
        </form>
        <br />

        <form onSubmit={this.props.deleteCategory}>
          <input type="hidden" name="categoryId" value={categoryDetail.id} />
          <input id="clickButton" type="submit" value="Delete This Category" />
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default CategoryDetail;
