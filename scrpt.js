// Data do Primeiro Beijo: 18 de Novembro de 2023 às 11:30
// Nota: O mês em JavaScript começa do 0 (Novembro = 10)
const primeiroBeijoDate = new Date(2023, 10, 18, 11, 30, 0);

// Data em que Começaram o Caso: 30 de Novembro de 2023 às 00:00
const inicioCasoDate = new Date(2023, 10, 30, 0, 0, 0);

function calcDiff(startDate) {
  const now = new Date();
  const diffTime = Math.abs(now - startDate);

  let seconds = Math.floor(diffTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  let years = Math.floor(days / 365);
  let months = Math.floor((days % 365) / 30);

  return {
    years: years,
    months: months,
    days: (days % 365) % 30,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
}

function updateTimers() {
  // Atualiza contador do Primeiro Beijo
  const beijo = calcDiff(primeiroBeijoDate);
  document.getElementById('beijo-years').innerText = beijo.years;
  document.getElementById('beijo-months').innerText = beijo.months;
  document.getElementById('beijo-days').innerText = beijo.days;
  document.getElementById('beijo-hours').innerText = beijo.hours;
  document.getElementById('beijo-minutes').innerText = beijo.minutes;
  document.getElementById('beijo-seconds').innerText = beijo.seconds;

  // Atualiza contador do Início do Caso
  const caso = calcDiff(inicioCasoDate);
  document.getElementById('caso-years').innerText = caso.years;
  document.getElementById('caso-months').innerText = caso.months;
  document.getElementById('caso-days').innerText = caso.days;
  document.getElementById('caso-hours').innerText = caso.hours;
  document.getElementById('caso-minutes').innerText = caso.minutes;
  document.getElementById('caso-seconds').innerText = caso.seconds;
}

setInterval(updateTimers, 1000);
updateTimers();
