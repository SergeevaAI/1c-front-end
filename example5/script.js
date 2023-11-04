let canvas = document.getElementById("watch");
let context = canvas.getContext("2d");

let R = 300 / 2;
for (let d = 0; d < 60; ++d) {
  let angle = (d / 60) * (2 * Math.PI);
  let pX = Math.cos(angle) * R;
  let pY = -Math.sin(angle) * R;
  let qX = 0.9 * pX;
  let qY = 0.9 * pY;
  pX += R;
  pY += R;
  qX += R;
  qY += R;

  context.beginPath();
  context.moveTo(pX, pY);
  context.lineTo(qX, qY);
  context.stroke();
}

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(hours, minutes, seconds);

function drawWatch() {
  /* Очищаем холст. */
  context.clearRect(0, 0, 300, 300);

  /* Рисуем круглые часы */
  context.beginPath();
  context.arc(R, R, R, 0, 2 * Math.PI);
  context.stroke();

  /* Рисуем часовую стрелку */
  let hoursAngle = (hours / 12) * (2 * Math.PI);
  let hoursLength = R * 0.5;
  let hoursX = Math.cos(hoursAngle) * hoursLength + R;
  let hoursY = -Math.sin(hoursAngle) * hoursLength + R;
  context.beginPath();
  context.moveTo(R, R);
  context.lineTo(hoursX, hoursY);
  context.lineWidth = 3;
  context.strokeStyle = "black";
  context.stroke();

  /* Рисуем минутную стрелку */
  let minutesAngle = (minutes / 60) * (2 * Math.PI);
  let minutesLength = R * 0.7;
  let minutesX = Math.cos(minutesAngle) * minutesLength + R;
  let minutesY = -Math.sin(minutesAngle) * minutesLength + R;
  context.beginPath();
  context.moveTo(R, R);
  context.lineTo(minutesX, minutesY);
  context.lineWidth = 2;
  context.strokeStyle = "black";
  context.stroke();

  /* Рисуем секундную стрелку */
  let secondsAngle = (seconds / 60) * (2 * Math.PI);
  let secondsLength = R * 0.9;
  let secondsX = Math.cos(secondsAngle) * secondsLength + R;
  let secondsY = -Math.sin(secondsAngle) * secondsLength + R;
  context.beginPath();
  context.moveTo(R, R);
  context.lineTo(secondsX, secondsY);
  context.strokeStyle = "red";
  context.stroke();

  /* Планируем вызов функции 
  через 1000 миллисекунд. */
  setTimeout(drawWatch, 1000);
}

drawWatch();