import { useEffect, useState } from "react";
import { getCategories } from "../actions/index";
const MovieCreateForm = (props) => {
  const defaultFormData = {
    name: "",
    releaseYear: "",
    description: "",
    rating: "",
    genre: "",
    image: "",
    cover: "",
    longDesc: "",
  };
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);
  const [form, setForm] = useState({
    name: "",
    releaseYear: "",
    description: "",
    rating: "",
    genre: "",
    image: "",
    cover: "",
    longDesc: "",
  });
  useEffect(() => {
    if (props.initialData) {
      setForm(props.initialData);
      // setIsInitialDataLoaded(true);
    }
  }, []);
  const handleChange = (event) => {
    const target = event.target;
    setForm({ ...form, [target.name]: target.value });
  };
  const handleGenreChange = (event) => {
    const { options } = event.target;
    const value = [];
    const optionsLength = options.length;
    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setForm({
      ...form,
      genre: value.toString(),
    });
  };

  const submitForm = () => {
    props.handleUpdateCreateMovie({ ...form });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange}
          value={form.description}
          type="text"
          name="description"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          onChange={handleChange}
          value={form.rating}
          type="number"
          name="rating"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          value={form.image}
          name="image"
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          value={form.cover}
          type="text"
          name="cover"
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          onChange={handleChange}
          className="form-control"
          id="longDesc"
          name="longDesc"
          rows="3"
          value={form.longDesc}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple
          className="form-control"
          id="genre"
          name="genre"
          onChange={handleGenreChange}
        >
          {/* {props.category.map(())} */}
          <option>drama</option>
          <option>music</option>
          <option>fantasy</option>
          <option>adventure</option>
          <option>fantasy</option>
          <option>action</option>
        </select>
      </div>
      <button onClick={submitForm} type="button" className="btn btn-primary">
        {props.submitButton}
      </button>
    </form>
  );
};
// MovieCreateForm.getInitialProps = async () => {
//   const categor = await getCategories();
//   return { category };
// };
export default MovieCreateForm;
