const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

var cors = require("cors");
// app.use(cors());
// app.use(express.json());

app.use(
  cors({
    origin: "https://blog-project-rust-zeta.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    preflightContinue: false,
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./config/dbConnection");
connectDB();

const blog = require("./routes/blog");
app.use("/blog", blog);

const user = require("./routes/user");
app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
