import mongoose from 'mongoose';
const { Schema } = mongoose;
import { connectionString } from "../src/lib/credentials.js";

mongoose.connect(connectionString, {
    dbName: 'sccprojects',
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const movieSchema = new Schema({
 title: { type: String, required: true },
 director: String,
 year: Number,
 genre: String,
 opinion: String
});

export const Movie = mongoose.model('Movie', movieSchema);