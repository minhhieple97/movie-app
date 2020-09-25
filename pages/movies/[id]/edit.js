import React, { Component } from "react";
import { getMovieById } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

export default class edit extends Component {
  state = {
    movie: {
      name: "",
      releaseYear: "",
      description: "",
      rating: "",
      genre: "",
      image: "",
      cover: "",
      longDesc: "",
    },
  };
  static getInitialProps({ query }) {
    return { ...query };
  }
  componentDidMount() {
    const { id } = this.props;
    getMovieById(id).then((movie) => {
      this.setState({ movie });
    });
  }

  render() {
    const { movie } = this.state;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm initialData={movie} />
      </div>
    );
  }
}
