const next = require("next");
const express = require("express");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");
const filePath = "./data.json";
const fs = require("fs");
const path = require("path");
const moviesData = require(filePath);
app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  // we are handing all of the request comming to out server
  server.get("/api/v1/movies", (req, res) => {
    return res.json(moviesData);
  });
  server.get("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movieIndex = moviesData.findIndex((m) => m.id === id);
    const movie = moviesData[movieIndex];
    return res.json(movie);
  });
  server.post("/api/v1/movies", (req, res) => {
    const movie = req.body;
    moviesData.push(movie);
    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json("Movie has been succesfuly added!");
    });
  });
  server.patch("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movieIndex = moviesData.findIndex((m) => m.id === id);
    const movie = moviesData[movieIndex];

    return res.json(movie);
  });
  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const newListMovie = moviesData.filter((el) => {
      return el.id !== id;
    });
    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(newListMovie, null, 2);
    fs.writeFile(pathToFile, stringifiedData, (err) => {
      if (err) return res.status(422).send(err);
      return res.json("Movie has been succesfuly deleted!");
    });
  });

  server.get("*", (req, res) => {
    // next.js is handing request and providing pages where we are navigating
    return handle(req, res);
  });
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});
