import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";
import { useRouter } from "next/router";
const SideMenu = (props) => {
  const { categories, changeCategory, activeCategory } = props;
  const router = useRouter();
  let modal = null;
  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      modal.closeModal();
      router.push("/");
    });
  };
  return (
    <div>
      <Modal ref={(elm) => (modal = elm)} hasSubmit={false}>
        {() => (
          <MovieCreateForm
            submitButton="Create"
            handleUpdateCreateMovie={handleCreateMovie}
          />
        )}
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map((el) => {
          return (
            <a
              onClick={changeCategory.bind(null, el)}
              key={el.id}
              href="#"
              className={`list-group-item ${
                activeCategory.id === el.id ? "active" : null
              }`}
            >
              {el.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
