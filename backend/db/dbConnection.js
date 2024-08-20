import mongoose from "mongoose";
import config from "../config.js";

export default () => {
  mongoose
    .connect(config.connectionstring)
    .then(() => {
      console.log("Database connection established");
    })
    .catch((error) => {
      console.log("Database connection failed: ", error);
    });
};
