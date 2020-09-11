import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { getMovieById, deleteMovie } from "../../../actions"
export default function Movie(props) {
  const router = useRouter()
  const { movie } = props
  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push("/")
    })
  }
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg mr-1 "
            href="#"
            role="button"
          >
            Learn more
          </button>
          <button
            onClick={handleDeleteMovie.bind(null, movie.id)}
            className="btn btn-danger btn-lg"
            href="#"
            role="button"
          >
            Delete
          </button>
        </p>
      </div>
      <p className="desc-text">{movie.longDesc}</p>
      <style jsx>
        {`
          .desc-text {
            font-size: 21px;
          }
        `}
      </style>
    </div>
  )
}
Movie.getInitialProps = async (context) => {
  const { id } = context.query
  const movie = await getMovieById(id)
  return { movie }
}
