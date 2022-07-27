import { Schema, model } from "mongoose";

export const meetupScheme = new Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});
export const Meetup = model("Meetup", meetupScheme);
