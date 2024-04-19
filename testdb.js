import { Movie } from "./models/Movie.js";

// return all records
Movie.find({}).lean()
  .then((movies) => {
    console.log(movies);
  })
  .catch(err => console.log(err));