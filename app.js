const express = require("express");

const PORT = 3000;
const app = express();

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

app.listen(PORT, () =>
  console.log(`Server started: http://localhost:${PORT}/`)
);

app.use((req, res) => {
  res.sendFile("./client/404.html", { root: __dirname });
});
