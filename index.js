history.scrollRestoration = "manual";

window.onload = function () {
  if (window.location.href.includes('#')) {
    window.location.href = window.location.href.split('#')[0];
  }
  window._days = document.querySelector(`.days`);
  window._hours = document.querySelector(`.hours`);
  window._mins = document.querySelector(`.minutes`);
  window._secs = document.querySelector(`.seconds`);

  updateTimer();
  setInterval('updateTimer()', 1000);
  document.querySelector(`#linksContainer`).addEventListener('click', () => {
    if (window.innerWidth < 768) {
      document.querySelector(`#theHeader`).classList.remove('nav-open');
      document.querySelector(`.wrapper-menu`).classList.remove('open');
    }
  });

  if (!!window.sessionStorage) {
    if (window.sessionStorage.getItem('hasScrolled') !== 'true') {
      window._hasScrolledInterval = setInterval('checkScrolled()', 1000);
    } else {
      document.querySelector(`#scroll-me`).classList.add('d-none');
    }
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  return;
}

function menuToggle() {
  document.querySelector(`#theHeader`).classList.toggle('nav-open');
  document.querySelector(`.wrapper-menu`).classList.toggle('open');
}

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

  window._days.innerHTML = d;
  window._hours.innerHTML = h;
  window._mins.innerHTML = m;
  window._secs.innerHTML = s;
}

function checkScrolled() {
  if (window.scrollY > 450) {
    clearInterval(window._hasScrolledInterval);
    document.querySelector(`#scroll-me`).classList.add('d-none');
    window.sessionStorage.setItem('hasScrolled', 'true');
  }
}
