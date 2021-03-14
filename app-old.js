const http = require("http");

http
  .createServer((req, res) => {
    // res.setHeader("Content-Disposition", "attachment; filename=lita.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });
    // const persona = {
    //   id: 1,
    //   nombre: "Fernando",
    // };
    // res.write("1, Juan\n");
    // res.write("2, Pedro\n");
    // res.write("2, Esteban\n");
    res.write("Hola mundo");
    res.end();
  })
  .listen(8085);
console.log("Escuchando el puerto", 8085);
