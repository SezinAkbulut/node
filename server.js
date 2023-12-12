/*console.log("Hello Wold");
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

//blog folder
try {
  fs.mkdirSync(path.join(__dirname, "./client/blog"));
} catch (err) {
  console.error("Error code :", err.code);
  console.error(err.message);
}

// index.html files within blog folder
try {
  const filePath = path.join(__dirname, "./client/blog", "index.html");

  fs.writeFileSync(
    filePath,
    "<!DOCTYPE html><html lang'en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'> <link rel='stylesheet' href='./style.css'><title>Document</title> </head><body><h1></h1></body></html>"
  );
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

//blog folder within style.css
try {
  const filePath = path.join(__dirname, "./client/blog", "style.css");

  fs.writeFileSync(filePath, "body {background-color: orange;}");
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

const os = require("node:os");
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

//OS folder
try {
  const filePath = path.join(__dirname, "client", "info.txt");

  fs.writeFileSync(filePath, "This is being run on a Darwin computer!");
} catch (err) {
  console.error(err.code);
  console.error(err.message);
}

*/

const http = require("http");
const fs = require("fs");

// The server object
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  /*
  res.write("<head><link rel='stylesheet' href='#'></head>");
  res.write("<p>hello, ninjas</p>");
  res.write("<p>hello again, ninjas</p>");

  res.end();
  */
  res.setHeader("Content-type", "text/html");

  let path = "./client/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about/index.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = "301";
      res.setHeader("location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
    case "/blog":
      path += "/blog/index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path += "/contact/index.html";
      res.statusCode = 200;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 404;
      res.end();
    } else {
      //res.write(data);
      res.statusCode = 200;
      res.end(data);
    }
  });
});

// The port listener
server.listen(3000, "localhost", () => {
  console.log("Server started on http://127.0.0.1:3000");
});

/* 
server.on
// The event watcher
("request",

if (req.url === "/") {
    res.statusCode = 200;
  } else {
    res.statusCode(404);
  }
  */
