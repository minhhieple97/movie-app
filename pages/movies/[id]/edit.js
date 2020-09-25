import React, { Component } from "react";
import { getMovieById } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

export default class edit extends Component {
  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id);
    return { movie };
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm initialData={movie} />
      </div>
    );
  }
}
