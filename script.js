const botonesPedido = document.querySelectorAll('.producto .boton, .hero button');
const select = document.querySelector('.productos'); // contenedor de productos
const formulario = document.getElementById('contenedor'); // formulario
const vela = document.getElementById('vela-tipo');
const inicio = document.getElementById('inicio');
const productos = document.getElementById('productos'); // botón para scroll

formulario.style.display = 'none';

botonesPedido.forEach(boton => {
  boton.addEventListener('click', () => {
    const todasTarjetas = document.querySelectorAll('.producto, .hero');
    todasTarjetas.forEach(tarjeta => {
      tarjeta.style.display = 'none';
    });

    const producto = boton.dataset.boton;
    vela.value = " vela olor a " + producto;

    select.style.display = 'none';
    formulario.style.display = 'flex';

    formulario.scrollIntoView({behavior: "smooth"});
  });
});

productos.addEventListener('click', () => {
  const todasTarjetas = document.querySelectorAll('.producto, .hero');
  todasTarjetas.forEach(tarjeta => {
    tarjeta.style.display = '';
  });

  select.style.display = 'flex';
  formulario.style.display = 'none';
  
  select.scrollIntoView({behavior: "smooth", block: "center"});
});

inicio.addEventListener('click', () => {
  const todasTarjetas = document.querySelectorAll('.producto, .hero');
  todasTarjetas.forEach(tarjeta => {
    tarjeta.style.display = '';
  });

  select.style.display = 'flex';
  formulario.style.display = 'none';
});
