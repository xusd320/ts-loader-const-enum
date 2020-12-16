(() => {
  'use strict';
  var t = {
      425: (t, e) => {
        console.log({ name: 'test.txt', type: 0 });
      },
    },
    e = {};
  !(function r(o) {
    if (e[o]) return e[o].exports;
    var s = (e[o] = { exports: {} });
    return t[o](s, s.exports, r), s.exports;
  })(425);
})();
