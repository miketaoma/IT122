const movies = [
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, director: "Peter Jackson", genre: "Fantasy", id: 1 },
  { title: "Ratatouille", year: 2007, director: "Brad Bird", genre: "Animation", id: 2 },
  { title: "Chinatown", year: 1974, director: "Roman Polanski", genre: "Mystery", id: 3 },
  { title: "Crouching Tiger, Hidden Dragon", year: 2000, director: "Ang Lee", genre: "Action", id: 4 },
  { title: "Spirited Away" , year: 2001, director: "Hayao Miyazaki", genre: "Animation", id: 5 }
]

const getAll = () => {
  return movies;
}

const getItem = () => {
  let movie = movies.find(movie => movie.id == req.params.id);
  return movie;
}

export { getAll, getItem };