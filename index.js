const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDegrees = ((seconds/60) * 360);
  const minuteDegrees = ((minute/60) * 360);
  const hourDegrees = ((hour/12) * 360);

  secondHand.style.transform = 'rotate('+secondDegrees+'deg)' ;//`rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = 'rotate('+minuteDegrees+'deg)' ;
  hourHand.style.transform = 'rotate('+hourDegrees+'deg)' ;//`rotate(${secondDegrees}deg)`;


}

setInterval(setDate, 1000);
