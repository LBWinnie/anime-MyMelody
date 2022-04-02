// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".head {\n    border: 2px solid #937056;\n    background-color: #f9bbbe;\n    width: 220px;\n    height: 150px;\n    border-radius: 50% 50% 45% 45%;\n  }\n  .face {\n    border: 2px solid #937056;\n    background-color: #fff;\n    width: 130px;\n    height: 80px;\n    border-radius: 50%;\n  }\n  .nose {\n    border: 2px solid #937056;\n    background-color: #fdf9d1;\n    width: 16px;\n    height: 12px;\n    border-radius: 50%;\n  }\n  .eye {\n    background-color: #937056;\n    width: 24px;\n    height: 17px;\n  }\n  .eye.left {\n    border-radius: 40% 60% 50% 50%;\n    transform: rotate(-80deg);\n  }\n  .eye.right {\n    border-radius: 60% 40% 50% 50%;\n    transform: rotate(80deg);\n  }\n  .cheek {\n    background: #fbdbe0;\n    width: 20px;\n    height: 12px;\n    border-radius: 50%;\n  }\n  .ear {\n    border: 2px solid #937056;\n    background-color: #f9bbbe;\n    width: 130px;\n    height: 70px;\n  }\n  .ear.left {\n    border-radius: 40% 50% 50% 50%;\n    transform: rotate(-60deg);\n  }\n  .ear.right {\n    border-radius: 50% 40% 50% 50%;\n    transform: rotate(60deg);\n  }\n  .bowknot {\n    border: 2px solid #937056;\n    background-color: #c7edf4;\n  }\n  .bowknot.middle {\n    width: 20px;\n    height: 28px;\n    border-radius: 50%;\n  }\n  .bowknot.left1 {\n    width: 70px;\n    height: 100px;\n    border-radius: 50%;\n    transform: rotate(-70deg);\n  }\n  .bowknot.right1 {\n    width: 70px;\n    height: 100px;\n    border-radius: 50%;\n    transform: rotate(70deg);\n  }\n  .bowknot.left2 {\n    width: 54px;\n    height: 90px;\n    border-radius: 50%;\n    transform: rotate(70deg);\n  }\n  .bowknot.right2 {\n    width: 54px;\n    height: 90px;\n    border-radius: 50%;\n    transform: rotate(-70deg);\n  }\n  .hand {\n    border: 2px solid #937056;\n    background: #fff;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border-bottom-color: transparent;\n  }\n  .hand.left {\n    transform: rotate(15deg);\n  }\n  .hand.right {\n    transform: rotate(-15deg);\n  }\n  .arm {\n    border: 2px solid #937056;\n    background: #fff;\n    width: 30px;\n    height: 40px;\n    border-radius: 50%;\n    border-top-color: transparent;\n  }\n  .arm.left {\n    border-left-color: transparent;\n    transform: rotate(40deg);\n  }\n  .arm.right {\n    border-right-color: transparent;\n    transform: rotate(-45deg);\n  }\n  .cloth {\n    border: 2px solid #937056;\n    background: #f9bbbe;\n    width: 40px;\n    height: 20px;\n    border-radius: 0 0 40px 40px;\n  }\n  .cloth.left {\n   transform: rotate(35deg);\n  }\n  .cloth.right {\n   transform: rotate(-35deg);\n  }\n  .meloBody {\n    border: 2px solid #937056;\n    background: #fff;\n    width: 80px;\n    height: 75px;\n    border-radius: 80% 40% 50% 40%;\n    border-bottom: 0;\n  }\n  .tail {\n    border: 2px solid #937056;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n  }\n  .leg {\n    border: 2px solid #937056;\n    background: #fff;\n    border-radius: 30%;\n  }\n  .leg.right {\n    width: 35px;\n    height: 30px;\n  }\n  .leg.left {\n    width: 30px;\n    height: 30px;\n  }\n  .line {\n    border: 2px solid #937056;\n    border-radius: 30%;\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0;\n\n  }\n  .line.L {\n    width: 18px;\n    height: 18px;\n  }\n  .line.R {\n    width: 15px;\n    height: 15px;\n  }\n  .heart.one > .left {\n    background: #f9bbbe;\n    transform: rotate(45deg) translateX(35px);\n    border-radius: 50% 0 0 50%;\n  }\n  .heart.one > .right {\n    background: #f9bbbe;\n    border-radius: 50%;\n    transform: rotate(45deg) translateY(35px);\n    border-radius: 50% 50% 0 0;\n  }\n  .heart.one > .bottom {\n    background: #f9bbbe;\n    width: 18px;\n    height: 18px;\n    border-radius: 10%;\n    transform: rotate(45deg);\n  }\n  .heart.two > .left {\n    background: #f9bbbe;\n    transform: rotate(45deg) translateX(35px);\n    border-radius: 50% 0 0 50%;\n  }\n  .heart.two > .right {\n    background: #f9bbbe;\n    border-radius: 50%;\n    transform: rotate(45deg) translateY(35px);\n    border-radius: 50% 50% 0 0;\n  }\n  .heart.two > .bottom {\n    background: #f9bbbe;\n    border-radius: 10%;\n    transform: rotate(45deg);\n  }\n  ";
var _default = string;
exports.default = _default;
},{}],"1QTT":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    codeText: document.querySelector("#codeText"),
    codeHtml: document.querySelector("#codeHtml")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.codeText.innerText = _css.default.substring(0, player.n);
    player.ui.codeHtml.innerHTML = _css.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.codeText.innerText = _css.default.substring(0, player.n);
    player.ui.codeHtml.innerHTML = _css.default.substring(0, player.n);
    player.ui.codeText.scrollTop = player.ui.codeText.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["1QTT"], null)
//# sourceMappingURL=show.8efb9e35.js.map