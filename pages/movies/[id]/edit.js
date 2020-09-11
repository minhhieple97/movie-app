import React, { Component } from "react"
import MovieCreateForm from "../../../components/movieCreateForm"

export default class edit extends Component {
  render() {
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm></MovieCreateForm>
      </div>
    )
  }
}
