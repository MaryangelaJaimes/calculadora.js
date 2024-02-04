
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");
const precioSpan = document.querySelector(".precio-inicial");

let precio = 14000;
let cantidad = 1; 

precioSpan.innerHTML = precio;

const actualizarCantidadYTotal = () => {
  const total = precio * cantidad;

  cantidadSpan.innerHTML = cantidad;
  valorTotalSpan.innerHTML = total;
};

const sumaCantidad = () => {
  cantidad++;
  actualizarCantidadYTotal();
};

const restaCantidad = () => {
  if (cantidad > 0) {
    cantidad--;
    actualizarCantidadYTotal();
  }
};
