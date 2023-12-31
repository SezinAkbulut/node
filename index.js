const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

console.log("my_secret_key");
console.log(process.env.API_KEY);
//dotenv.config

//const port = 3000;
const app = express();

app.use(express.json());

const recipes = [
  {
    id: 1,
    name: "Baked Potato Soup",
    img: "https://www.allrecipes.com/thmb/JdeZHt9jQjZct4AS0oP9kssDv8I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5867379-361fd5f1eb254d38b7913e0abfaee07a.jpg",
    prepareTime: "40 min",
    ingredients: [
      "Bacon",
      "Butter",
      "Flour",
      "Baked Potatoes",
      "Milk",
      "Green Onions",
      "Seasonings",
      "Cheese",
      "Sour Cream",
    ],
    steps: [
      "Cook the bacon.",
      "Melt the butter, then whisk in the flour and milk.",
      "Add the potatoes and onions and bring to a boil.",
      "Reduce to a simmer, then stir in the remaining ingridients.",
      "Cook until the cheese is melted.",
    ],
  },
  {
    id: 2,
    name: "Baked Potato Soup 2",
    img: "https://www.allrecipes.com/thmb/JdeZHt9jQjZct4AS0oP9kssDv8I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5867379-361fd5f1eb254d38b7913e0abfaee07a.jpg",
    prepareTime: "40 min",
    ingredients: [
      "Bacon",
      "Butter",
      "Flour",
      "Baked Potatoes",
      "Milk",
      "Green Onions",
      "Seasonings",
      "Cheese",
      "Sour Cream",
    ],
    steps: [
      "Cook the bacon.",
      "Melt the butter, then whisk in the flour and milk.",
      "Add the potatoes and onions and bring to a boil.",
      "Reduce to a simmer, then stir in the remaining ingridients.",
      "Cook until the cheese is melted.",
    ],
  },
  {
    id: 3,
    name: "Baked Potato Soup 3",
    img: "https://www.allrecipes.com/thmb/JdeZHt9jQjZct4AS0oP9kssDv8I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5867379-361fd5f1eb254d38b7913e0abfaee07a.jpg",
    prepareTime: "40 min",
    ingredients: [
      "Bacon",
      "Butter",
      "Flour",
      "Baked Potatoes",
      "Milk",
      "Green Onions",
      "Seasonings",
      "Cheese",
      "Sour Cream",
    ],
    steps: [
      "Cook the bacon.",
      "Melt the butter, then whisk in the flour and milk.",
      "Add the potatoes and onions and bring to a boil.",
      "Reduce to a simmer, then stir in the remaining ingridients.",
      "Cook until the cheese is melted.",
    ],
  },
];

// This is a request listener, just like in "vanilla Node"
//main page
app.get("/", (req, res) => {
  res.sendFile("./client/index.html", { root: __dirname });
});

//about page
app.get("/about", (req, res) => {
  res.sendFile("./client/about/index.html", { root: __dirname });
});

app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//contact page
app.get("/contact", (req, res) => {
  res.sendFile("./client/contact/index.html", { root: __dirname });
});

//blog page
app.get("/blog", (req, res) => {
  res.sendFile("./client/blog/index.html", { root: __dirname });
});

//recipes page
app.get("/api/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/api", (req, res) => {
  res.json({
    text: "my api!",
  });
});

//POST login
app.post("/api/login", (req, res) => {
  //auth user
  const user = { id: 3 };
  const token = jwt.sign({ user }, "my_secret_key");
  res.json({
    token: token,
    user: user,
  });
});

//GET protected
app.get("/api/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, "my_secret_key", function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: "this is protected",
        data: data,
      });
    }
  });
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split("");
    const bearerToken = bearer[1];
    reqitoken = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

//GET API req
app.get("/api/recipes/:id", (req, res) => {
  // res.send(req.params.id);
  //console.log(req.params.id);
  const recipe = recipes.find((c) => c.id === parseInt(req.params.id));
  if (!recipe)
    res.status(404).send("The recipe with the given ID was not found!");
  res.send(recipe);
});

//POST API
app.post("/api/recipes", (req, res) => {
  const user = { id: 3 };
  const token = jwt.sign({ user }, "my_secret_key");
  res.json({
    token: token,
  });
  //Input Validation
  if (!req.body.name || req.body.name.length < 3) {
    //4004 Bad Request
    res
      .status(400)
      .send("Name is required and should be minimum 3 characters.");
    return;
  }

  const recipe = {
    id: recipes.length + 1,
    name: req.body.name,
    img: req.body.img,
    prepareTime: req.body.prepareTime,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
  };
  recipes.push(recipe);
  res.send(recipe);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server started: http://localhost:${port}/`)
);

app.use((req, res) => {
  res.sendFile("./client/404.html", { root: __dirname });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});
