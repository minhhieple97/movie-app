const MOVIES_DATA = [
  {
    id: "1",
    name: "The Shawshank Redemption",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: 4.8,
    genre: "drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg",
    cover:
      "https://images.unsplash.com/photo-1585531263717-5ebd8114dac3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus lectus, placerat et elementum a, euismod quis diam. Suspendisse potenti. Ut dignissim nulla a bibendum tincidunt. Nulla nibh urna, tempus id tincidunt sit amet, euismod at ipsum. Maecenas quis elit cursus, iaculis augue aliquet, ultrices enim. Phasellus quis pellentesque lorem. Phasellus pharetra pulvinar est. Aenean fermentum lacus eu mi mattis efficitur. Nam efficitur lorem ac quam bibendum, fringilla scelerisque nisl volutpat. Praesent sodales justo sed porta feugiat. Nunc ultrices, mauris sit amet laoreet finibus, odio erat blandit risus, non dignissim mauris libero vitae erat. Nulla suscipit neque nisi, varius sollicitudin dui blandit a. Mauris vitae rutrum nisi. Sed lacus purus, aliquam ac dictum fermentum, ullamcorper id dolor.",
  },

  {
    id: "2",
    name: "The Dark Knight",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rating: 4.7,
    genre: "action, crime, drama",
    image:
      "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600",
    cover:
      "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus lectus, placerat et elementum a, euismod quis diam. Suspendisse potenti. Ut dignissim nulla a bibendum tincidunt. Nulla nibh urna, tempus id tincidunt sit amet, euismod at ipsum. Maecenas quis elit cursus, iaculis augue aliquet, ultrices enim. Phasellus quis pellentesque lorem. Phasellus pharetra pulvinar est. Aenean fermentum lacus eu mi mattis efficitur. Nam efficitur lorem ac quam bibendum, fringilla scelerisque nisl volutpat. Praesent sodales justo sed porta feugiat. Nunc ultrices, mauris sit amet laoreet finibus, odio erat blandit risus, non dignissim mauris libero vitae erat. Nulla suscipit neque nisi, varius sollicitudin dui blandit a. Mauris vitae rutrum nisi. Sed lacus purus, aliquam ac dictum fermentum, ullamcorper id dolor.",
  },
  {
    id: "3",
    name: "Lord of the Rings",
    releaseYear: 2004,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    rating: 4.9,
    genre: "adventure, drama, fantasy",
    image:
      "https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600",
    cover:
      "https://images.unsplash.com/photo-1547438688-bc005987deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus lectus, placerat et elementum a, euismod quis diam. Suspendisse potenti. Ut dignissim nulla a bibendum tincidunt. Nulla nibh urna, tempus id tincidunt sit amet, euismod at ipsum. Maecenas quis elit cursus, iaculis augue aliquet, ultrices enim. Phasellus quis pellentesque lorem. Phasellus pharetra pulvinar est. Aenean fermentum lacus eu mi mattis efficitur. Nam efficitur lorem ac quam bibendum, fringilla scelerisque nisl volutpat. Praesent sodales justo sed porta feugiat. Nunc ultrices, mauris sit amet laoreet finibus, odio erat blandit risus, non dignissim mauris libero vitae erat. Nulla suscipit neque nisi, varius sollicitudin dui blandit a. Mauris vitae rutrum nisi. Sed lacus purus, aliquam ac dictum fermentum, ullamcorper id dolor.",
  },
]
const CATEGORY_DATA = [
  { id: "1", name: "drama" },
  { id: "2", name: "action" },
  { id: "3", name: "adventure" },
  { id: "4", name: "fantasy" },
  { id: "5", name: "historical" },
]
export const getMovies = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 2000, MOVIES_DATA)
  })
}

export const getCategories = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 2000, CATEGORY_DATA)
  })
}

export const getMovieById = (id) => {
  return new Promise((res, rej) => {
    const movieIndex = MOVIES_DATA.findIndex((el) => el.id === id)
    const movie = MOVIES_DATA[movieIndex]
    setTimeout(res, 1000, movie)
  })
}
