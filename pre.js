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

  mostrar_carrito(producto);
}

function mostrar_carrito(producto) {
  let fila = document.createElement("tr");
  fila.innerHTML = `<td><img src="${producto.img}"></td>
  <td>${producto.nombre}</td>
  <td>${producto.cantidad}</td>
  <td>${producto.precio}</td>
  <td><button class: "borrar_elemento"> Borrar </button></td>`;

  let table = document.getElementById("tbody");
  table.append(fila);

  let btn_borrar = document.querySelectorAll(".borrar_elemento");
  console.log(btn_borrar);
  for (let boton of btn_borrar) {
    boton.addEventListener("click", borrar_elemento);
  }
}

function borrar_producto(e) {
  e.target.parentNode.parentNode.remove();
}

let btn_compra = document.querySelectorAll(".compraBoton");
console.log(btn_compra);

for (let boton of btn_compra) {
  boton.addEventListener("click", agregar_al_carrito);
}
