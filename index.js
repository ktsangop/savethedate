function updateTimer() {
  future = Date.parse("Jul 30, 2022 18:00:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer").innerHTML = `
    <span>${d}</span> <span>Days</span>
    <span>${h}</span> <span>Hours</span>
    <span>${m}</span> <span>Minutes</span>
    <span>${s}</span> <span>Seconds</span>
  `;
}

window.onload = function () {
  setInterval('updateTimer()', 1000);
  document.querySelector(`#linksContainer`).addEventListener('click', () => {
    if (window.innerWidth < 768) {
      document.querySelector(`#theHeader`).classList.remove('nav-open');
      document.querySelector(`.wrapper-menu`).classList.remove('open');
    }
  });
}

function menuToggle() {
  document.querySelector(`#theHeader`).classList.toggle('nav-open');
  document.querySelector(`.wrapper-menu`).classList.toggle('open');
}
