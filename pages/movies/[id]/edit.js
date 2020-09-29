import React, { Component } from "react";
import { getMovieById, updateMovie } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";
import Router from "next/router";
export default class edit extends Component {
  static async getInitialProps({ query }) {
    // Hàm này sẽ chuẩn bị dữ liệu (pre) cho component để show ra trong lần đầu tiên trình duyệt request hàm này phải chạy xong thì component mới bắt đầu lifeCycle, sẽ được invoked ở phía server
    const movie = await getMovieById(query.id);
    return { movie };
  }
  handleUpdateMovie = (movie) => {
    updateMovie(movie).then((data) => {
      Router.push("/movies/[id]", `/movies/${data.id}`);
    });
  };
  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm
          submitButton="Update"
          initialData={movie}
          handleUpdateCreateMovie={this.handleUpdateMovie}
        />
      </div>
    );
  }
}
