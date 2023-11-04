let canvas = document.getElementById("sandbox") ,
context = canvas.getContext("2d"),
line = new Path2D();

line.moveTo(0, 0);
line.lineTo(300, 300);

context.lineWidth = 5;
context.stroke(line);

context.fillStyle = "red";
context.fillRect(O, 0, 200, 200);

/* Красный: 07,, зелёный: 100%,
синий: 0%, прозрачность: 507,. */
context.fillStyle = "rgba(0, 255, 0, 0.5)";
context.fillRect(100, 100, 300, 300);