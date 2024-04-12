const movies = [
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, director: "Peter Jackson", genre: "Fantasy", opinion: "My favorite LOTR movie!", id: 1 },
  { title: "Ratatouille", year: 2007, director: "Brad Bird", genre: "Animation", opinion: "Who doesn't love Remy?", id: 2 },
  { title: "Chinatown", year: 1974, director: "Roman Polanski", genre: "Mystery", opinion: "What a final line!", id: 3 },
  { title: "Crouching Tiger, Hidden Dragon", year: 2000, director: "Ang Lee", genre: "Action", opinion: "My favorite kung fu movie!", id: 4 },
  { title: "Spirited Away" , year: 2001, director: "Hayao Miyazaki", genre: "Animation", opinion: "A classic whose imagery and beauty still hold up today!", id: 5 }
]

const getAll = () => {
  return movies;
}

const getItem = (id) => {
  let movie = movies.find(movie => movie.id == id);
  return movie;
}

export { getAll, getItem };