var segundos = document.getElementById("segundos");
var minutos = document.getElementById("minutos");
var horas = document.getElementById("horas");
var milesimos = document.getElementById("milesimos");

var atual_milesimos = 00;
var atual_minutos = 00;
var atual_segundos = 00;
var atual_horas = 00;

//bloco para inicializar o contador
var start = function () {
  interval = setInterval(() => {
    atual_milesimos++;
    milesimos.innerText = atual_milesimos;
    if (atual_milesimos == 60) {
      atual_milesimos =0;
      atual_segundos++;
      segundos.innerText = atual_segundos;
      if (atual_segundos == 60) {
        atual_segundos = 0;
        atual_minutos++;
        minutos.innerText = atual_minutos;
        if (atual_minutos == 60) {
          atual_minutos = 0;
          atual_horas++;
          horas.innerText = atual_horas;
          if (atual_horas == 12) {
            atual_horas = 0;
          }
        }
      }
    }
  }, 3);
};

var pause = function () {
  clearInterval(interval);
};

var reset = function () {
  milesimos.innerText = "00";
  segundos.innerText = "00";
  minutos.innterText = "00";
  horas.atual_horas = "00";
};
