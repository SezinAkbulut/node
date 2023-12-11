console.log("Hello Wold");
console.log("This is a console log from my server.js file");

const path = require("path");
// Concatenate paths
console.log(path.join(__dirname, "test", "server.js", "utf-8"));

const fs = require("fs");

// Read file
try {
  const fileContent = fs.readFileSync(
    path.join(__dirname, "server.js", "utf-8")
  );

  console.log(fileContent);
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

//client folder within index.html
try {
  const filePath = path.join(__dirname, "client", "index.html");

  fs.writeFileSync(
    filePath,
    "<!DOCTYPE html><html lang'en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'> <link rel='stylesheet' href='./style.css'><title>Document</title> </head><body><h1></h1></body></html>"
  );
  //fs.appendFileSync(filePath, "<h1></h1>");
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

//client folder within style.css
try {
  const filePath = path.join(__dirname, "client", "style.css");

  fs.writeFileSync(filePath, "body {background-color: blue;}");
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

//contact folder
try {
  fs.mkdirSync(path.join(__dirname, "./client/contact"));
} catch (err) {
  console.error("Error code :", err.code);
  console.error(err.message);
}

// index.html files within contact folder
try {
  const filePath = path.join(__dirname, "./client/contact", "index.html");

  fs.writeFileSync(
    filePath,
    "<!DOCTYPE html><html lang'en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'> <link rel='stylesheet' href='./style.css'><title>Document</title> </head><body><h1></h1></body></html>"
  );
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

//contact folder within style.css
try {
  const filePath = path.join(__dirname, "./client/contact", "style.css");

  fs.writeFileSync(filePath, "body {background-color: green;}");
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

//about folder
try {
  fs.mkdirSync(path.join(__dirname, "./client/about"));
} catch (err) {
  console.error("Error code :", err.code);
  console.error(err.message);
}

// index.html files within about folder
try {
  const filePath = path.join(__dirname, "./client/about", "index.html");

  fs.writeFileSync(
    filePath,
    "<!DOCTYPE html><html lang'en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'> <link rel='stylesheet' href='./style.css'><title>Document</title> </head><body><h1></h1></body></html>"
  );
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

//about folder within style.css
try {
  const filePath = path.join(__dirname, "./client/about", "style.css");

  fs.writeFileSync(filePath, "body {background-color: red;}");
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}
