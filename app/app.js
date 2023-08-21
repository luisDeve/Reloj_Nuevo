function actualizar() {
  let hora = new Date();
  let horas = hora.getHours();
  let minutos = hora.getMinutes();
  let segundos = hora.getSeconds();
  let horaFinal = `${horas}:${minutos}:${segundos}`;
  document.getElementById("prueba").innerHTML = horaFinal;
  fecha(hora);
}

setInterval(actualizar, 1000);
function fecha(hora) {
  let mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let dia = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  let fecha = `${
    dia[hora.getDay()] +
    " " +
    hora.getDate() +
    " de " +
    mes[hora.getMonth()] +
    " de " + " "+
    hora.getFullYear()
  }`;
  document.querySelector(".fecha").innerHTML = fecha;
}


const toggleButton = document.querySelector("#toggle-btn");
const body = document.body;

const switchTheme = () => {
  body.classList.toggle("dark");
};
toggleButton.addEventListener("click", switchTheme);