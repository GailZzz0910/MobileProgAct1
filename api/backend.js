import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./Database/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json()); //para ma parse ang incoming request thorugh the req.body
app.use("/api/auth", authRoutes); 

//app.get("/", (req, res) => {
//  res.send("mo gana sha");
//});


app.listen(PORT, () => {
  connectDB();
  console.log(`Connected sha sa port ${PORT}`);
});
