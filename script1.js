const h1 = document.querySelector("h1");
const formulario = document.getElementById("form");
const input1 = document.querySelector("#numero1");
const input2 = document.querySelector("#numero2");
const boton = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

//PARA QUE LO SIGUIETE FUCIONE SE DEBE ESPECIFICAR EL TIPO DEL BOTON EN EL HTML (TYPE="BUTTON")
// boton.addEventListener("click", btnOnClick);

// function btnOnClick() {
//   //console.log("click en el boton");
//   const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
//   pResult.innerHTML = "Resultado: " + sumaInputs;
// }

formulario.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  event.preventDefault();
  const sumaInputs = parseFloat(input1.value) + parseFloat(input2.value);
  pResult.innerHTML = "Resultado: " + sumaInputs;
}
