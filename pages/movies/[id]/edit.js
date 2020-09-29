import React, { Component } from "react";
import { getMovieById } from "../../../actions";
import MovieCreateForm from "../../../components/movieCreateForm";

export default class edit extends Component {
  static async getInitialProps({ query }) {
    // Hàm này sẽ chuẩn bị dữ liệu (pre) cho component để show ra trong lần đầu tiên trình duyệt request hàm này phải chạy xong thì component mới bắt đầu lifeCycle, sẽ được invoked ở phía server
    console.log("[Edit getInitialProps...]");
    const movie = await getMovieById(query.id);
    return { movie };
  }
  constructor(props) {
    super(props);
    console.log("[Edit constructor running...]");
  }
  componentWillMount() {
    console.log("[Edit componentWillMount running...]");
  }

  render() {
    console.log("[Edit component render...]");
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm initialData={movie} />
      </div>
    );
  }
}
