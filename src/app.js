import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const palos = [
    { nombre: 'spade', simbolo: '♠' },
    { nombre: 'club', simbolo: '♣' },
    { nombre: 'heart', simbolo: '♥' },
    { nombre: 'diamond', simbolo: '♦' }
  ];
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let cartasHTML = ''


  
    const randomPalo = palos[Math.floor(Math.random() * palos.length)];
    const randomValor = valores[Math.floor(Math.random() * valores.length)];

    cartasHTML = ` 
 <div class="card ${randomPalo.nombre}">
      <div class="top-left">${randomValor}</div>
      <div class="center">${randomPalo.simbolo}</div>
       <div class="bottom-right">${randomValor}</div>
</div>
`;

  

  document.getElementById("carta").innerHTML = cartasHTML;
}

// window.onload = generarCarta;
// document.getElementById("generarCarta").addEventListener("click",generarCarta);
