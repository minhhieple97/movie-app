import Head from "next/head";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies, getCategories } from "../actions";
import { useState } from "react";
export default function Home(props) {
  const [filter, setFilter] = useState({});
  const [movies, setMovies] = useState(props.movies);
  const { images, categories } = props;
  const changeCategory = async (category) => {
    setFilter(category);
    const moviesUpdate = await getMovies(category.name);
    setMovies(moviesUpdate);
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Navbar />
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                activeCategory={filter}
                changeCategory={changeCategory}
                categories={categories}
              />
            </div>
            <div className="col-lg-9">
              <Carousel images={images}></Carousel>
              <h1>Displaying {filter.name || "All"} movies</h1>
              <div className="row">
                <MovieList movies={movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Home.getInitialProps = async () => {
  try {
    const [movies, categories] = await Promise.all([
      getMovies(),
      getCategories(),
    ]);
    const images = movies.map((el) => ({
      id: `image-${el.id}`,
      url: el.image,
      name: el.name,
      cover: el.cover,
    }));
    return { movies, images, categories };
  } catch (error) {
    console.log(error);
  }
};
