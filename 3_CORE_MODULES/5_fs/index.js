// const http = require("http");
// const fs = require("fs");

// const port = 3000;

// const server = http.createServer((req, res) => {
//   fs.readFile("mensagem.html", function (err, data) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     return res.end();
//   });
// });

// server.listen(port, () => {
//   console.log(`Servidor rodando na porta: ${port}`);
// });

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const filePath = path.join(__dirname, "mensagem.html");

const server = http.createServer((req, res) => {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.error("Error reading file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write('Internal Server Error');
      return res.end();
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
