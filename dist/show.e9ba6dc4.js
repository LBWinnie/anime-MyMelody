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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".head {\n    border: 2px solid #937056;\n    background-color: #f9bbbe;\n    width: 220px;\n    height: 150px;\n    border-radius: 50% 50% 45% 45%;\n  }\n  .face {\n    border: 2px solid #937056;\n    background-color: #fff;\n    width: 130px;\n    height: 80px;\n    border-radius: 50%;\n  }\n  .nose {\n    border: 2px solid #937056;\n    background-color: #fdf9d1;\n    width: 16px;\n    height: 12px;\n    border-radius: 50%;\n  }\n  .eye {\n    background-color: #937056;\n    width: 24px;\n    height: 17px;\n  }\n  .eye.left {\n    border-radius: 40% 60% 50% 50%;\n    transform: rotate(-80deg);\n  }\n  .eye.right {\n    border-radius: 60% 40% 50% 50%;\n    transform: rotate(80deg);\n  }\n  .cheek {\n    background: #fbdbe0;\n    width: 20px;\n    height: 12px;\n    border-radius: 50%;\n  }\n  .ear {\n    border: 2px solid #937056;\n    background-color: #f9bbbe;\n    width: 130px;\n    height: 70px;\n  }\n  .ear.left {\n    border-radius: 40% 50% 50% 50%;\n    transform: rotate(-60deg);\n  }\n  .ear.right {\n    border-radius: 50% 40% 50% 50%;\n    transform: rotate(60deg);\n  }\n  .bowknot {\n    border: 2px solid #937056;\n    background-color: #c7edf4;\n  }\n  .bowknot.middle {\n    width: 20px;\n    height: 28px;\n    border-radius: 50%;\n  }\n  .bowknot.left1 {\n    width: 70px;\n    height: 100px;\n    border-radius: 50%;\n    transform: rotate(-70deg);\n  }\n  .bowknot.right1 {\n    width: 70px;\n    height: 100px;\n    border-radius: 50%;\n    transform: rotate(70deg);\n  }\n  .bowknot.left2 {\n    width: 54px;\n    height: 90px;\n    border-radius: 50%;\n    transform: rotate(70deg);\n  }\n  .bowknot.right2 {\n    width: 54px;\n    height: 90px;\n    border-radius: 50%;\n    transform: rotate(-70deg);\n  }\n  .hand {\n    border: 2px solid #937056;\n    background: #fff;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border-bottom-color: transparent;\n  }\n  .hand.left {\n    transform: rotate(15deg);\n  }\n  .hand.right {\n    transform: rotate(-15deg);\n  }\n  .arm {\n    border: 2px solid #937056;\n    background: #fff;\n    width: 30px;\n    height: 40px;\n    border-radius: 50%;\n    border-top-color: transparent;\n  }\n  .arm.left {\n    border-left-color: transparent;\n    transform: rotate(40deg);\n  }\n  .arm.right {\n    border-right-color: transparent;\n    transform: rotate(-45deg);\n  }\n  .cloth {\n    border: 2px solid #937056;\n    background: #f9bbbe;\n    width: 40px;\n    height: 20px;\n    border-radius: 0 0 40px 40px;\n  }\n  .cloth.left {\n   transform: rotate(35deg);\n  }\n  .cloth.right {\n   transform: rotate(-35deg);\n  }\n  .meloBody {\n    border: 2px solid #937056;\n    background: #fff;\n    width: 80px;\n    height: 75px;\n    border-radius: 80% 40% 50% 40%;\n    border-bottom: 0;\n  }\n  .tail {\n    border: 2px solid #937056;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n  }\n  .leg {\n    border: 2px solid #937056;\n    background: #fff;\n    border-radius: 30%;\n  }\n  .leg.right {\n    width: 35px;\n    height: 30px;\n  }\n  .leg.left {\n    width: 30px;\n    height: 30px;\n  }\n  .line {\n    border: 2px solid #937056;\n    border-radius: 30%;\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0;\n\n  }\n  .line.L {\n    width: 18px;\n    height: 18px;\n  }\n  .line.R {\n    width: 15px;\n    height: 15px;\n  }\n  .heart.one > .left {\n    background: #f9bbbe;\n    transform: rotate(45deg) translateX(35px);\n    border-radius: 50% 0 0 50%;\n  }\n  .heart.one > .right {\n    background: #f9bbbe;\n    border-radius: 50%;\n    transform: rotate(45deg) translateY(35px);\n    border-radius: 50% 50% 0 0;\n  }\n  .heart.one > .bottom {\n    background: #f9bbbe;\n    width: 18px;\n    height: 18px;\n    border-radius: 10%;\n    transform: rotate(45deg);\n  }\n  .heart.two > .left {\n    background: #f9bbbe;\n    transform: rotate(45deg) translateX(35px);\n    border-radius: 50% 0 0 50%;\n  }\n  .heart.two > .right {\n    background: #f9bbbe;\n    border-radius: 50%;\n    transform: rotate(45deg) translateY(35px);\n    border-radius: 50% 50% 0 0;\n  }\n  .heart.two > .bottom {\n    background: #f9bbbe;\n    border-radius: 10%;\n    transform: rotate(45deg);\n  }\n  ";
var _default = string;
exports.default = _default;
},{}],"show.js":[function(require,module,exports) {
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
},{"./css.js":"css.js"}],"C:/Users/Lenovo/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55247" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Lenovo/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","show.js"], null)
//# sourceMappingURL=/show.e9ba6dc4.js.map