const http = require("http");
const fs = require("fs");
const port = 3333;
const renderHTML = (path, res) => {
  fs.readFile(path, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Error: file no found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const url = req.url;

    //cara switch
    switch (url) {
      case "/about.html":
        renderHTML("./about.html", res);
        break;
      case "/contact.html":
        renderHTML("./contact.html", res);
        break;
      default:
        renderHTML("./index.html", res);
        break;
    }

    //cara if else
    // if (url === "/about.html") {
    //   renderHTML("./about.html", res);
    // } else if (url === "/contact.html") {
    //   renderHTML("./contact.html", res);
    // } else {
    //   renderHTML("./index.html", res);
    // }
  })
  .listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
