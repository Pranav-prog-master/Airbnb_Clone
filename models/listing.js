import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  country: String,
  image: String,
});

const Listing = mongoose.model("Listing", userSchema);
export default Listing;
