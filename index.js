const canvas1 = document.getElementById('tutorial1');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx1 = canvas1.getContext('2d');

ctx1.fillStyle = 'pink';
ctx1.strokeStyle = 'orange';
ctx1.lineWidth = 15;
ctx1.lineCap = 'round';
ctx1.lineJoin = 'round';

ctx1.strokeRect(200, 30, 100, 100);

ctx1.strokeStyle = 'red';
ctx1.beginPath();
ctx1.moveTo(350, 150);
ctx1.lineTo(350, 250);
ctx1.stroke();

ctx1.beginPath();
ctx1.moveTo(-5, 200);
ctx1.lineTo(35, 240);
ctx1.lineTo(75, 200);
ctx1.lineTo(115, 240);
ctx1.lineTo(155, 200);
ctx1.stroke();

ctx1.beginPath();
ctx1.lineCap = 'butt';
ctx1.setLineDash([15, 10]);
ctx1.moveTo(280, 180);
ctx1.lineTo(280, 280);
ctx1.stroke();

// ----------------------------------------------------------

const canvas2 = document.getElementById('tutorial2');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx2 = canvas2.getContext('2d');

ctx2.fillRect(25, 25, 100, 100);
ctx2.strokeRect(150, 150, 50, 50);
ctx2.clearRect(50, 50, 30, 30);

ctx2.beginPath();
ctx2.moveTo(25, 25);
ctx2.lineTo(105, 25);
ctx2.lineTo(25, 105);
ctx2.fill();

ctx2.beginPath();
ctx2.moveTo(125, 125);
ctx2.lineTo(125, 45);
ctx2.lineTo(45, 125);
ctx2.closePath();
ctx2.stroke();

const calculateRadians = (degrees) => (Math.PI / 180) * degrees;

ctx2.beginPath();
const start1 = calculateRadians(0);
const end1 = calculateRadians(360);
ctx2.arc(100, 100, 60, start1, end1);
ctx2.fill();

ctx2.beginPath();
const start2 = calculateRadians(30);
const end2 = calculateRadians(240);
ctx2.arc(100, 250, 60, start2, end2);
ctx2.stroke();

ctx2.beginPath();
const start3 = calculateRadians(40);
const end3 = calculateRadians(260);
ctx2.arc(250, 250, 60, start3, end3, true);
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(75, 25);
ctx2.quadraticCurveTo(25, 25, 25, 62.5);
ctx2.quadraticCurveTo(25, 100, 50, 100);
ctx2.quadraticCurveTo(50, 120, 30, 125);
ctx2.quadraticCurveTo(60, 120, 65, 100);
ctx2.quadraticCurveTo(125, 100, 125, 62.5);
ctx2.quadraticCurveTo(125, 25, 75, 25);
ctx2.stroke();

ctx2.beginPath();
ctx2.moveTo(75, 40);
ctx2.bezierCurveTo(75, 37, 70, 25, 50, 25);
ctx2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
ctx2.bezierCurveTo(20, 80, 40, 102, 75, 120);
ctx2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
ctx2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
ctx2.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx2.fill();

// ----------------------------------------------------------

const canvas3 = document.getElementById('tutorial3');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx3 = canvas3.getContext('2d');

const linegrad = ctx3.createLinearGradient(0, 0, 150, 150);
linegrad.addColorStop(0, 'white');
linegrad.addColorStop(0.5, 'yellow');
linegrad.addColorStop(1, 'red');
ctx3.fillStyle = linegrad;
ctx3.fillRect(0, 0, 150, 150);

const radgrad = ctx3.createRadialGradient(105, 105, 20, 112, 120, 50);
radgrad.addColorStop(0, '#FF5F98');
radgrad.addColorStop(0.75, '#FF0188');
radgrad.addColorStop(1, 'rgba(255,1,136,0)');
ctx3.fillStyle = radgrad;
ctx3.fillRect(0, 0, 150, 150);

const image1 = new Image();
image1.src = './images/good.png';
image1.addEventListener('load', () => {
  const pattern = ctx3.createPattern(image1, 'repeat');
  ctx3.fillStyle = pattern;
  ctx3.fillRect(250, 0, 150, 150);
});

// ctx3.shadowOffsetX = 10;
// ctx3.shadowOffsetY = 10;
// ctx3.shadowBlur = 20;
// ctx3.shadowColor = 'black';
ctx3.fillStyle = 'blue';
ctx3.fillRect(10, 200, 150, 150);

ctx3.font = '60px Arial';
ctx3.strokeText('Hello World', 0, 200);

// ----------------------------------------------------------

const canvas4 = document.getElementById('tutorial4');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx4 = canvas4.getContext('2d');
const image2 = new Image();
image2.src = './images/cat1.jpg';
image2.addEventListener('load', () => {
  ctx4.drawImage(image2, 0, 0);
});

const canvas5 = document.getElementById('tutorial5');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx5 = canvas5.getContext('2d');
const image3 = new Image();
image3.src = './images/cat2.jpg';
image3.addEventListener('load', () => {
  ctx5.drawImage(image3, 50, 0, 300, 300, 50, 50, 300, 300);
});

const canvas6 = document.getElementById('tutorial6');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx6 = canvas6.getContext('2d');

ctx6.fillStyle = 'red';
ctx6.fillRect(0, 0, 150, 150);
ctx6.save();

ctx6.fillStyle = 'blue';
ctx6.fillRect(15, 15, 120, 120);
ctx6.save();

ctx6.fillStyle = 'green';
ctx6.fillRect(30, 30, 90, 90);

ctx6.restore();
ctx6.fillRect(45, 45, 60, 60);

ctx6.restore();
ctx6.fillRect(60, 60, 30, 30);

const canvas7 = document.getElementById('tutorial7');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx7 = canvas7.getContext('2d');

ctx7.fillStyle = 'red';
ctx7.fillRect(20, 20, 300, 200);

ctx7.globalCompositeOperation = 'destination-over';
// ctx7.globalCompositeOperation = 'source-out';

ctx7.translate(50, 50);
ctx7.rotate(calculateRadians(25));
ctx7.scale(1.3, 1.3);

ctx7.fillStyle = 'blue';
ctx7.fillRect(20, 20, 300, 200);

const canvas8 = document.getElementById('tutorial8');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx8 = canvas8.getContext('2d');

ctx8.beginPath();
ctx8.arc(250, 250, 150, calculateRadians(0), calculateRadians(360));
ctx8.clip();

const image4 = new Image();
image4.src = './images/cat1.jpg';
image4.addEventListener('load', () => {
  ctx8.drawImage(image4, 0, 0);
});

const canvas9 = document.getElementById('tutorial9');
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx9 = canvas9.getContext('2d');

let x1 = 0;
let y1 = 150;
let speed = 1;

const draw = () => {
  if (x1 === ctx9.canvas.width) return;

  window.requestAnimationFrame(draw);
  ctx9.clearRect(0, 0, ctx9.canvas.width, ctx9.canvas.height);

  ctx9.fillStyle = 'black';
  ctx9.fillRect(0, 0, ctx9.canvas.width, ctx9.canvas.height);
  ctx9.fillStyle = 'pink';
  ctx9.fillRect(x1, y1, 200, 100);
  x1 += speed;
};

draw();
