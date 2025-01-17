import { app } from "./app";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Connected to Mongo`);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});