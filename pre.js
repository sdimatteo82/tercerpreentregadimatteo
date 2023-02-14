let carrito = [];
let carrito_guardado = localStorage.getItem("carrito");
if (carrito_guardado) {
  carrito = JSON.parse(carrito_guardado);
}

function agregar_al_carrito(e) {
  console.log("SE CLICKEO EL BOTON:", e.target);
  let hijo = e.target;
  let padre = hijo.parentNode;
  let abuelo = padre.parentNode;

  let nombre_producto = padre.querySelector("h2").textContent;
  let precio_producto = padre.querySelector("h3").textContent;
  let img_producto = padre.querySelector("img").src;

  console.log(nombre_producto);
  console.log(precio_producto);
  console.log(img_producto);

  let producto = {
    nombre: nombre_producto,
    precio: precio_producto,
    img: img_producto,
    cantidad: 1,
  };

  let producto_existente = carrito.find((p) => p.nombre === nombre_producto);
  if (producto_existente) {
    producto_existente.cantidad += 1;
  } else {
    carrito.push(producto);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrar_carrito();
}

function mostrar_carrito() {
  let table = document.getElementById("tbody");
  table.innerHTML = "";
  for (let producto of carrito) {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${producto.nombre}</td>
  <td>${producto.cantidad}</td>
  <td>${producto.precio}</td>
  <td><img src="${producto.img}"></td>
 
  <td><button class= "borrar_elemento"> Borrar </button></td>`;

    let table = document.getElementById("tbody");
    table.append(fila);
  }

  let btn_borrar = document.querySelectorAll(".borrar_elemento");
  console.log(btn_borrar);
  for (let boton of btn_borrar) {
    boton.addEventListener("click", borrar_elemento);
  }
}

function borrar_elemento(e) {
  let producto_nombre =
    e.target.parentNode.parentNode.querySelector("td").textContent;
  let producto = carrito.find((p) => p.nombre === producto_nombre);
  if (producto.cantidad > 1) {
    producto.cantidad -= 1;
  } else {
    carrito = carrito.filter((p) => p.nombre != producto_nombre);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrar_carrito();
}

let btn_compra = document.querySelectorAll(".compraBoton");
console.log(btn_compra);

for (let boton of btn_compra) {
  boton.addEventListener("click", agregar_al_carrito);
}

let btn_carrito = document.getElementById("mostrar_carrito");
btn_carrito.addEventListener("click", function () {
  let carrito = document.getElementById("carro");
  if (carrito.style.display != "block") {
    carrito.style.display = "block";
  } else {
    carrito.style.display = "none";
  }
});
