const express = require("express");
const morgan = require("morgan");
const path = require("path");

const globalRouter = require("./Routers/globalRouter");

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use("/static", express.static(path.join(__dirname, "/static")));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", globalRouter);

app.listen(PORT, () => {
    console.log("SERVER START")
});