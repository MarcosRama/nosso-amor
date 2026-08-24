// Datas dos marcos
const primeiroBeijoDate = new Date('2023-11-18T11:30:00');
const inicioCasoDate = new Date('2023-11-30T00:00:00');

function calculateExactTime(startDate) {
  const now = new Date();
  
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds };
}

function updateTimers() {
  // Primeiro Beijo
  const beijo = calculateExactTime(primeiroBeijoDate);
  document.getElementById('beijo-years').innerText = beijo.years;
  document.getElementById('beijo-months').innerText = beijo.months;
  document.getElementById('beijo-days').innerText = beijo.days;
  document.getElementById('beijo-hours').innerText = beijo.hours;
  document.getElementById('beijo-minutes').innerText = beijo.minutes;
  document.getElementById('beijo-seconds').innerText = beijo.seconds;

  // Início do Caso
  const caso = calculateExactTime(inicioCasoDate);
  document.getElementById('caso-years').innerText = caso.years;
  document.getElementById('caso-months').innerText = caso.months;
  document.getElementById('caso-days').innerText = caso.days;
  document.getElementById('caso-hours').innerText = caso.hours;
  document.getElementById('caso-minutes').innerText = caso.minutes;
  document.getElementById('caso-seconds').innerText = caso.seconds;
}

// Atualiza a cada 1 segundo
setInterval(updateTimers, 1000);
updateTimers();
