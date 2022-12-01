const express = require("express");
const app = express();
const port = 3030;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);
app.get("/ayuda", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "ayuda.html"))
);
app.get("/carrito", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "carrito.html"))
);
app.get("/crearcuenta", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "crearcuenta.html"))
);
app.get("/ingreso", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "ingreso.html"))
);
app.get("/ofertas", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "ofertas.html"))
);
app.get("/tiendas", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "tiendas.html"))
);
app.get("/vender", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "vender.html"))
);

app.listen(port, () => {
  console.log(`Servidor arrancado en http://localhost:${port}/`);
});
