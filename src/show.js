import string from "./css.js";

const player = {
  id: undefined,
  time: 100,
  ui: {
    codeText: document.querySelector("#codeText"),
    codeHtml: document.querySelector("#codeHtml"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  n: 1,
  init: () => {
    player.ui.codeText.innerText = string.substring(0, player.n);
    player.ui.codeHtml.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.codeText.innerText = string.substring(0, player.n);
    player.ui.codeHtml.innerHTML = string.substring(0, player.n);
    player.ui.codeText.scrollTop = player.ui.codeText.scrollHeight;
  },
  play: () => {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
