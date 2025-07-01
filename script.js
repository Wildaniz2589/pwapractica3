const contenedor = document.getElementById("productos");
const totalElemento = document.getElementById("total");
let total = 0;

productos.forEach(producto => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p><strong>Precio: $${producto.precio}.00</strong></p>
    <button>Agregar al carrito</button>
  `;
  const boton = div.querySelector("button");
  boton.addEventListener("click", () => {
    total += producto.precio;
    totalElemento.textContent = `$${total.toFixed(2)}`;
  });
  contenedor.appendChild(div);
});