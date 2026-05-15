const http = require("http");//mengambil fungsi http atau berhubungan dengan server memalui core module
const fs = require("fs");//mengmabil fungsi mengelolah file system di core module
const port = 3333;
//bertujuan untuk membuat template agar lebih mudah dalam membuat satu page web
const renderHTML = (path, res) => {
  fs.readFile(path, (error, data) => {
    //pertama di baca dulu file yang di isi
    //setelah itu meliha kondisi jika error maka ini aktif
    if (error) {
      res.writeHead(404);
      res.write("Error: file no found");
      //jika tidak ini aktif
    } else {
        //cara agar web dapat menampil kan data yang diberikan
      res.write(data);
    }
    //memberi tau server atau web bahwa semua nya sudah selesia atau siap
    res.end();
  });
};
//membuat server local
http
//dimana memiliki dua parameter yaitu req apa yang user atau server terima
//dan res apa yang server berikan
  .createServer((req, res) => {
    //memberi tau status serta jenis data
    res.writeHead(200, {
      "content-type": "text/html",
    });
    //menerima nilai yang di berikan user
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
  //untu menjalankan servernnya
  .listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
