!(function(e, n) {
    for (var t in n) e[t] = n[t];
})(
    window,
    (function(e) {
        var n = {};
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = (n[o] = { i: o, l: !1, exports: {} });
            return e[o].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
        }
        return (
            (t.m = e),
            (t.c = n),
            (t.d = function(e, n, o) {
                t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
            }),
            (t.r = function(e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (t.t = function(e, n) {
                if ((1 & n && (e = t(e)), 8 & n)) return e;
                if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (
                    (t.r(o),
                    Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
                    2 & n && 'string' != typeof e)
                )
                    for (var i in e)
                        t.d(
                            o,
                            i,
                            function(n) {
                                return e[n];
                            }.bind(null, i)
                        );
                return o;
            }),
            (t.n = function(e) {
                var n =
                    e && e.__esModule
                        ? function() {
                              return e.default;
                          }
                        : function() {
                              return e;
                          };
                return t.d(n, 'a', n), n;
            }),
            (t.o = function(e, n) {
                return {}.hasOwnProperty.call(e, n);
            }),
            (t.p = ''),
            t((t.s = 163))
        );
    })([
        function(e, n, t) {
            e.exports = t(132);
        },
        function(e, n, t) {
            e.exports = t(148);
        },
        function(e, n, t) {
            e.exports = t(101);
        },
        function(e, n, t) {
            e.exports = t(135);
        },
        function(e, n, t) {
            e.exports = t(142);
        },
        function(e, n, t) {
            'use strict';
            var o = t(9),
                i = t(110).f,
                a = t(111),
                r = t(16),
                s = t(39),
                l = t(11),
                c = t(15),
                u = function(e) {
                    var n = function(n, t, o) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e();
                                case 1:
                                    return new e(n);
                                case 2:
                                    return new e(n, t);
                            }
                            return new e(n, t, o);
                        }
                        return e.apply(this, arguments);
                    };
                    return (n.prototype = e.prototype), n;
                };
            e.exports = function(e, n) {
                var t,
                    d,
                    m,
                    p,
                    g,
                    f,
                    h,
                    y,
                    _ = e.target,
                    x = e.global,
                    v = e.stat,
                    w = e.proto,
                    b = x ? o : v ? o[_] : (o[_] || {}).prototype,
                    E = x ? r : r[_] || (r[_] = {}),
                    P = E.prototype;
                for (m in n)
                    (t = !a(x ? m : _ + (v ? '.' : '#') + m, e.forced) && b && c(b, m)),
                        (g = E[m]),
                        t && (f = e.noTargetGet ? (y = i(b, m)) && y.value : b[m]),
                        (p = t && f ? f : n[m]),
                        (t && typeof g == typeof p) ||
                            ((h =
                                e.bind && t
                                    ? s(p, o)
                                    : e.wrap && t
                                    ? u(p)
                                    : w && 'function' == typeof p
                                    ? s(Function.call, p)
                                    : p),
                            (e.sham || (p && p.sham) || (g && g.sham)) && l(h, 'sham', !0),
                            (E[m] = h),
                            w &&
                                (c(r, (d = _ + 'Prototype')) || l(r, d, {}),
                                (r[d][m] = p),
                                e.real && P && !P[m] && l(P, m, p)));
            };
        },
        function(e, n, t) {
            e.exports = t(137);
        },
        function(e, n, t) {
            var o = t(9),
                i = t(32),
                a = t(48),
                r = t(115),
                s = o.Symbol,
                l = i('wks');
            e.exports = function(e) {
                return l[e] || (l[e] = (r && s[e]) || (r ? s : a)('Symbol.' + e));
            };
        },
        function(e, n) {
            e.exports = function(e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e;
            };
        },
        function(e, n) {
            var t = function(e) {
                return e && e.Math == Math && e;
            };
            e.exports =
                t('object' == typeof globalThis && globalThis) ||
                t('object' == typeof window && window) ||
                t('object' == typeof self && self) ||
                t('object' == typeof window && window) ||
                Function('return this')();
        },
        function(e, n) {
            e.exports =
                "@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 300;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 400;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.woff2')\n            format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 500;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.woff2')\n            format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 700;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 200;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 300;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 400;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 500;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 700;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n";
        },
        function(e, n, t) {
            var o = t(12),
                i = t(24),
                a = t(25);
            e.exports = o
                ? function(e, n, t) {
                      return i.f(e, n, a(1, t));
                  }
                : function(e, n, t) {
                      return (e[n] = t), e;
                  };
        },
        function(e, n, t) {
            var o = t(13);
            e.exports = !o(function() {
                return (
                    7 !=
                    Object.defineProperty({}, 'a', {
                        get: function() {
                            return 7;
                        }
                    }).a
                );
            });
        },
        function(e, n) {
            e.exports = function(e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            };
        },
        function(e, n) {
            e.exports = function(e) {
                return 'object' == typeof e ? null !== e : 'function' == typeof e;
            };
        },
        function(e, n) {
            var t = {}.hasOwnProperty;
            e.exports = function(e, n) {
                return t.call(e, n);
            };
        },
        function(e, n) {
            e.exports = {};
        },
        function(e, n, t) {
            var o = t(23),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(o(e), 9007199254740991) : 0;
            };
        },
        function(e, n, t) {
            e.exports = t(41);
        },
        function(e, n, t) {
            e.exports = t(144);
        },
        function(e, n, t) {
            e.exports = t(155);
        },
        function(e, n, t) {
            var o = t(14);
            e.exports = function(e) {
                if (!o(e)) throw TypeError(String(e) + ' is not an object');
                return e;
            };
        },
        function(e, n, t) {
            e.exports = t(161);
        },
        function(e, n) {
            var t = Math.ceil,
                o = Math.floor;
            e.exports = function(e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? o : t)(e);
            };
        },
        function(e, n, t) {
            var o = t(12),
                i = t(46),
                a = t(21),
                r = t(34),
                s = Object.defineProperty;
            n.f = o
                ? s
                : function(e, n, t) {
                      if ((a(e), (n = r(n, !0)), a(t), i))
                          try {
                              return s(e, n, t);
                          } catch (e) {}
                      if ('get' in t || 'set' in t) throw TypeError('Accessors not supported');
                      return 'value' in t && (e[n] = t.value), e;
                  };
        },
        function(e, n) {
            e.exports = function(e, n) {
                return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: n };
            };
        },
        function(e, n, t) {
            var o = t(38),
                i = t(8);
            e.exports = function(e) {
                return o(i(e));
            };
        },
        function(e, n) {
            var t = {}.toString;
            e.exports = function(e) {
                return t.call(e).slice(8, -1);
            };
        },
        function(e, n, t) {
            var o = t(8);
            e.exports = function(e) {
                return Object(o(e));
            };
        },
        function(e, n) {
            e.exports = {};
        },
        function(e, n) {
            e.exports =
                '* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    color: #2d2d2d;\n    font-family: PayPal-Sans, Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    overflow: hidden;\n}\n\nimg {\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.message__logo--svg {\n    position: relative;\n}\n\n.message__logo img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n/* IE will not properly scale a SVG element, but will scale a canvas element */\n.message__logo canvas {\n    display: block;\n    width: 100%;\n    visibility: hidden;\n}\n';
        },
        function(e, n, t) {
            e.exports = t(159);
        },
        function(e, n, t) {
            var o = t(33),
                i = t(107);
            (e.exports = function(e, n) {
                return i[e] || (i[e] = void 0 !== n ? n : {});
            })('versions', []).push({
                version: '3.4.0',
                mode: o ? 'pure' : 'global',
                copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
            });
        },
        function(e, n) {
            e.exports = !0;
        },
        function(e, n, t) {
            var o = t(14);
            e.exports = function(e, n) {
                if (!o(e)) return e;
                var t, i;
                if (n && 'function' == typeof (t = e.toString) && !o((i = t.call(e)))) return i;
                if ('function' == typeof (t = e.valueOf) && !o((i = t.call(e)))) return i;
                if (!n && 'function' == typeof (t = e.toString) && !o((i = t.call(e)))) return i;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(e, n, t) {
            var o = t(32),
                i = t(48),
                a = o('keys');
            e.exports = function(e) {
                return a[e] || (a[e] = i(e));
            };
        },
        function(e, n) {
            e.exports = {};
        },
        function(e, n, t) {
            'use strict';
            var o = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                a = i && !o.call({ 1: 2 }, 1);
            n.f = a
                ? function(e) {
                      var n = i(this, e);
                      return !!n && n.enumerable;
                  }
                : o;
        },
        function(e, n, t) {
            var o = t(13),
                i = t(27),
                a = ''.split;
            e.exports = o(function() {
                return !Object('z').propertyIsEnumerable(0);
            })
                ? function(e) {
                      return 'String' == i(e) ? a.call(e, '') : Object(e);
                  }
                : Object;
        },
        function(e, n, t) {
            var o = t(112);
            e.exports = function(e, n, t) {
                if ((o(e), void 0 === n)) return e;
                switch (t) {
                    case 0:
                        return function() {
                            return e.call(n);
                        };
                    case 1:
                        return function(t) {
                            return e.call(n, t);
                        };
                    case 2:
                        return function(t, o) {
                            return e.call(n, t, o);
                        };
                    case 3:
                        return function(t, o, i) {
                            return e.call(n, t, o, i);
                        };
                }
                return function() {
                    return e.apply(n, arguments);
                };
            };
        },
        function(e, n, t) {
            var o = t(118),
                i = t(52);
            e.exports =
                Object.keys ||
                function(e) {
                    return o(e, i);
                };
        },
        function(e, n, t) {
            var o = t(16),
                i = t(9),
                a = function(e) {
                    return 'function' == typeof e ? e : void 0;
                };
            e.exports = function(e, n) {
                return arguments.length < 2 ? a(o[e]) || a(i[e]) : (o[e] && o[e][n]) || (i[e] && i[e][n]);
            };
        },
        function(e, n, t) {
            var o = t(134);
            e.exports = function(e) {
                if (o(e)) throw TypeError("The method doesn't accept regular expressions");
                return e;
            };
        },
        function(e, n, t) {
            var o = t(7)('match');
            e.exports = function(e) {
                var n = /./;
                try {
                    '/./'[e](n);
                } catch (t) {
                    try {
                        return (n[o] = !1), '/./'[e](n);
                    } catch (e) {}
                }
                return !1;
            };
        },
        function(e, n) {
            e.exports =
                ".message__content {\n    display: inline-block;\n}\n\n.message__messaging {\n    margin: 0;\n}\n\n.message__logo-container {\n    display: inline;\n    white-space: nowrap;\n    margin: 0;\n}\n.message__logo-container::before {\n    content: 'with ';\n}\n\n.message__logo {\n    display: inline-block;\n    width: 7rem;\n    vertical-align: middle;\n}\n\n.message__headline .em {\n    display: inline-block;\n    white-space: nowrap;\n}\n\n.message__headline > span:nth-last-child(2)::after {\n    content: ' ';\n}\n";
        },
        function(e, n) {
            e.exports =
                '/* Not a valid style option ratio, but used as the mobile base for 8x1 and 20x1 */\n\n.message__content {\n    display: flex;\n    padding-right: 1rem;\n    align-items: center;\n}\n\n.message__logo-container {\n    flex: 0 0 33%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.message__logo {\n    width: 60%;\n}\n\n.message__messaging {\n    position: relative;\n    flex: 1 1 100%;\n    display: block;\n}\n\n.message__messaging > * {\n    width: 100%;\n}\n\n.message__headline {\n    font-size: 5vw;\n    line-height: 1;\n    margin-bottom: 0.2em;\n}\n\n.message__sub-headline {\n    display: none;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline span.multi:nth-of-type(2) {\n    display: none;\n}\n\n.message__disclaimer {\n    font-size: 10px;\n    line-height: 1.1;\n    display: inline;\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 400px) {\n    .message__logo-container {\n        flex: 0 0 25%;\n    }\n\n    .message__headline {\n        font-size: 4vw;\n        margin-bottom: 0.5rem;\n    }\n\n    .message__sub-headline {\n        font-size: 3vw;\n        display: inline;\n    }\n\n    .message__sub-headline > span {\n        margin-right: 1rem;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 520px) {\n    .message__logo-container {\n        flex: 0 0 25%;\n    }\n\n    .message__headline {\n        line-height: 1.1;\n    }\n\n    .message__disclaimer {\n        font-size: 0.85rem;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 640px) {\n    .message__headline {\n        font-size: 1.7rem;\n    }\n}\n';
        },
        function(e, n, t) {
            var o = t(12),
                i = t(13),
                a = t(47);
            e.exports =
                !o &&
                !i(function() {
                    return (
                        7 !=
                        Object.defineProperty(a('div'), 'a', {
                            get: function() {
                                return 7;
                            }
                        }).a
                    );
                });
        },
        function(e, n, t) {
            var o = t(9),
                i = t(14),
                a = o.document,
                r = i(a) && i(a.createElement);
            e.exports = function(e) {
                return r ? a.createElement(e) : {};
            };
        },
        function(e, n) {
            var t = 0,
                o = Math.random();
            e.exports = function(e) {
                return 'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++t + o).toString(36);
            };
        },
        function(e, n, t) {
            'use strict';
            var o,
                i,
                a,
                r = t(50),
                s = t(11),
                l = t(15),
                c = t(7),
                u = t(33),
                d = c('iterator'),
                m = !1;
            [].keys && ('next' in (a = [].keys()) ? (i = r(r(a))) !== Object.prototype && (o = i) : (m = !0)),
                null == o && (o = {}),
                u ||
                    l(o, d) ||
                    s(o, d, function() {
                        return this;
                    }),
                (e.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: m });
        },
        function(e, n, t) {
            var o = t(15),
                i = t(28),
                a = t(35),
                r = t(114),
                s = a('IE_PROTO'),
                l = Object.prototype;
            e.exports = r
                ? Object.getPrototypeOf
                : function(e) {
                      return (
                          (e = i(e)),
                          o(e, s)
                              ? e[s]
                              : 'function' == typeof e.constructor && e instanceof e.constructor
                              ? e.constructor.prototype
                              : e instanceof Object
                              ? l
                              : null
                      );
                  };
        },
        function(e, n, t) {
            var o = t(26),
                i = t(17),
                a = t(119),
                r = function(e) {
                    return function(n, t, r) {
                        var s,
                            l = o(n),
                            c = i(l.length),
                            u = a(r, c);
                        if (e && t != t) {
                            for (; c > u; ) if ((s = l[u++]) != s) return !0;
                        } else for (; c > u; u++) if ((e || u in l) && l[u] === t) return e || u || 0;
                        return !e && -1;
                    };
                };
            e.exports = { includes: r(!0), indexOf: r(!1) };
        },
        function(e, n) {
            e.exports = [
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf'
            ];
        },
        function(e, n, t) {
            var o = t(24).f,
                i = t(11),
                a = t(15),
                r = t(121),
                s = t(7)('toStringTag'),
                l = r !== {}.toString;
            e.exports = function(e, n, t, c) {
                if (e) {
                    var u = t ? e : e.prototype;
                    a(u, s) || o(u, s, { configurable: !0, value: n }), c && l && i(u, 'toString', r);
                }
            };
        },
        function(e, n, t) {
            var o = t(27),
                i = t(7)('toStringTag'),
                a =
                    'Arguments' ==
                    o(
                        (function() {
                            return arguments;
                        })()
                    );
            e.exports = function(e) {
                var n, t, r;
                return void 0 === e
                    ? 'Undefined'
                    : null === e
                    ? 'Null'
                    : 'string' ==
                      typeof (t = (function(e, n) {
                          try {
                              return e[n];
                          } catch (e) {}
                      })((n = Object(e)), i))
                    ? t
                    : a
                    ? o(n)
                    : 'Object' == (r = o(n)) && 'function' == typeof n.callee
                    ? 'Arguments'
                    : r;
            };
        },
        function(e, n, t) {
            var o = t(12),
                i = t(40),
                a = t(26),
                r = t(37).f,
                s = function(e) {
                    return function(n) {
                        for (var t, s = a(n), l = i(s), c = l.length, u = 0, d = []; c > u; )
                            (t = l[u++]), (o && !r.call(s, t)) || d.push(e ? [t, s[t]] : s[t]);
                        return d;
                    };
                };
            e.exports = { entries: s(!0), values: s(!1) };
        },
        function(e, n) {
            e.exports = function() {};
        },
        function(e, n, t) {
            e.exports = t(149);
        },
        function(e, n, t) {
            e.exports = t(157);
        },
        function(e, n) {
            e.exports =
                '<div role="button" class="message" tabindex="0" data-pp-message>\n    <div class="message__container">\n        \x3c!-- foreground layer --\x3e\n        <div class="message__foreground"></div>\n\n        \x3c!-- content layer --\x3e\n        <div class="message__content">\n            \x3c!-- PP Credit Logo --\x3e\n            <div class="message__logo-container"></div>\n            \x3c!-- Promotional Messaging --\x3e\n            <div class="message__messaging">\n                <div class="message__promo-container">\n                    <h5 class="message__headline"></h5>\n                    <h6 class="message__sub-headline"></h6>\n                </div>\n                <p class="message__disclaimer"></p>\n            </div>\n        </div>\n        \x3c!-- background layer --\x3e\n        <div class="message__background"></div>\n    </div>\n</div>\n';
        },
        function(e, n) {
            e.exports =
                '\x3c!-- Click tracking URL --\x3e\n<a class="pp-legacy__link" target="_blank" data-pp-message></a>\n\x3c!-- Impression tracking URL --\x3e\n<img class="pp-legacy__pixel" style="display:none!important" />\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    display: block;\n    width: 100%;\n    color: #2c2e2f;\n    cursor: pointer;\n}\n\n.message__container {\n    min-width: 100%;\n}\n\n.message__content {\n    display: inline-flex;\n    align-items: center;\n    min-width: 100%;\n}\n\n.message__logo-container {\n    flex: 0 0 auto;\n    width: 70px;\n    margin-right: 0.8rem;\n}\n\n.message__messaging {\n    line-height: 1.3;\n    white-space: normal;\n    margin-right: 0.8rem;\n}\n\n.message__messaging span.br {\n    white-space: nowrap;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline {\n    display: inline;\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.message__sub-headline {\n    display: none;\n}\n\n.message__disclaimer {\n    display: inline;\n    white-space: nowrap;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n}\n\n.message__disclaimer > span {\n    color: #0076ff;\n    text-decoration: underline;\n}\n\n/* For non-US NI disclaimer */\n.message__disclaimer > span.multi:first-of-type {\n    color: #2c2e2f;\n    text-decoration: none;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__messaging {\n    white-space: nowrap;\n    flex: 0 0 auto;\n}\n\n.message__logo-container {\n    width: 120px;\n}\n\n.message__headline span:only-child {\n    white-space: nowrap;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__headline > span:last-of-type {\n    display: inline-block;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__logo-container {\n    order: 2;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    display: inline-block;\n    /* IE does not like flex-direction: column;\n    flex-direction: column;\n    align-items: flex-start; */\n}\n\n.message__logo-container {\n    max-width: 120px;\n    margin: 0 0 0.2rem 0;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__messaging {\n    max-width: 375px;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__messaging {\n    white-space: normal;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    color: white;\n}\n\n.message__headline {\n    color: white;\n}\n\n.message__disclaimer span {\n    color: white;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    cursor: pointer;\n}\n\n.message .br {\n    display: inline-block;\n}\n\n.message .em {\n    font-family: PayPal-Sans-Big, PayPal-Sans;\n    font-weight: 400;\n}\n\n.message__container,\n.message__foreground,\n.message__content,\n.message__background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.message__headline,\n.message__sub-headline,\n.message__disclaimer {\n    font-family: PayPal-Sans;\n    font-weight: 300;\n}\n\n.message__headline {\n    font-family: PayPal-Sans-Big, PayPal-Sans;\n    font-weight: 400;\n}\n.message__headline .weak {\n    font-family: PayPal-Sans;\n    font-weight: 300;\n}\n\n.message__disclaimer > span:not(.multi),\n.message__disclaimer > span.multi:last-of-type {\n    font-weight: 300;\n    text-decoration: underline;\n    white-space: nowrap;\n}\n\n.message__background {\n    z-index: -1;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    padding: 7%;\n}\n\n.message__logo-container {\n    width: 50%;\n    margin-bottom: 7%;\n}\n\n.message__headline {\n    font-size: 12vw;\n    line-height: 1.1em;\n}\n\n.message__headline span.multi:nth-of-type(2) {\n    display: none;\n}\n\n.message__sub-headline {\n    display: none;\n}\n\n.message__disclaimer {\n    position: absolute;\n    width: 80%;\n    bottom: 7%;\n    font-size: 9.5px;\n}\n\n@media (min-width: 150px) {\n    .message__headline {\n        font-size: 11vw;\n        line-height: 1.2em;\n    }\n\n    .message__sub-headline {\n        font-size: 8.5vw;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        font-size: 6.5vw;\n    }\n}\n\n@media (min-width: 170px) {\n    .message__headline {\n        font-size: 8vw;\n    }\n\n    .message__sub-headline {\n        font-size: 7vw;\n        line-height: 1.3em;\n        margin-top: 3%;\n        display: block;\n    }\n\n    .message__disclaimer {\n        font-size: 5.5vw;\n    }\n}\n\n@media (min-width: 220px) {\n    .message__disclaimer {\n        font-size: 4.5vw;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    padding: 8%;\n}\n\n.message__logo-container {\n    width: 70%;\n    margin-bottom: 12%;\n}\n\n.message__headline {\n    font-size: 1.6rem;\n    line-height: 1.3em;\n    margin-bottom: 24%;\n}\n\n.message__sub-headline {\n    font-size: 1.56rem;\n    line-height: 1.3em;\n    margin-bottom: 40%;\n    margin-bottom: 24%;\n}\n\n.message__disclaimer {\n    position: absolute;\n    bottom: 4%;\n    font-size: 0.75rem;\n}\n\n@media (max-aspect-ratio: 11/40) {\n    .message__logo-container {\n        margin: 15% 0 30%;\n    }\n\n    .message__disclaimer {\n        position: static;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1) {\n        display: inline;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1).tag--xlarge {\n        margin-bottom: 40%;\n        display: block;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(2) {\n        display: block;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '@media (min-aspect-ratio: 80/11) {\n    .message__headline span.multi:nth-of-type(2),\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__messaging {\n        position: relative;\n    }\n\n    .message__disclaimer {\n        font-size: 0.625rem;\n    }\n\n    .message__logo-container {\n        flex: 0 0 22%;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 240px) {\n    .message__messaging {\n        line-height: 0.9;\n    }\n\n    .message__headline {\n        font-size: 4vw;\n        line-height: 1.1;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: inline;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 280px) {\n    .message__disclaimer {\n        padding-right: 2%;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 360px) {\n    .message__messaging {\n        line-height: 1;\n    }\n\n    .message__disclaimer {\n        font-size: 0.75rem;\n    }\n}\n\n/*IE specific*/\n@media (min-aspect-ratio: 80/11) and (-ms-high-contrast: none) and (min-width: 360px) {\n    .message__disclaimer {\n        line-height: 1;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 500px) {\n    .message__headline {\n        font-size: 3vw;\n        padding-right: 12%;\n        margin: 0 0 1% 0;\n    }\n\n    .message__sub-headline {\n        font-size: 2.5vw;\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        font-size: 0.75rem;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 600px) {\n    .message__disclaimer {\n        font-size: 0.9rem;\n    }\n}\n\n/*IE specific*/\n@media (min-aspect-ratio: 80/11) and (-ms-high-contrast: none) and (min-width: 500px) {\n    .message__disclaimer {\n        font-size: 2vw;\n        line-height: 1.6em;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '@media (min-aspect-ratio: 200/11) {\n    .message__logo-container {\n        flex: 1 0 20%;\n    }\n\n    .message__logo {\n        width: 50%;\n    }\n\n    .message__messaging {\n        flex: 1 1 85%;\n        display: flex;\n        align-items: center;\n    }\n\n    .message__headline {\n        flex: 1 1 60%;\n        font-size: 0.7rem;\n        line-height: 1;\n        margin: 0;\n        display: inline;\n    }\n\n    .message__sub-headline {\n        display: none;\n    }\n\n    .message__disclaimer {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: 12rem;\n        padding: 0;\n        font-size: 8px;\n        line-height: 1.1;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 400px) {\n    .message__headline {\n        font-size: 1rem;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 600px) {\n    .message__logo-container {\n        flex: 1 0 10%;\n    }\n\n    .message__logo {\n        width: 60%;\n    }\n\n    .message__headline {\n        font-size: 1.8vw;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        padding-right: 1rem;\n        font-size: 0.75rem;\n        line-height: 1.2;\n    }\n\n    .message__sub-headline {\n        font-size: 1.6vw;\n        line-height: 1.3em;\n        margin-left: 2vw;\n        display: inline;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 1000px) {\n    .message__disclaimer {\n        font-size: 0.9rem;\n        max-width: 14rem;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: white;\n}\n\n.message__background {\n    background: linear-gradient(-55deg, #009cde -20%, #003087 80%);\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: #0070ba;\n}\n\n.message__background {\n    background: #eaeced;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__background {\n    background: linear-gradient(-10deg, #009cde, #003087 90%);\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: white;\n}\n\n.message__background {\n    background: #2c2e2f;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: #009cde;\n    border: 1px solid #009cde;\n}\n\n.message__background {\n    background: #ffffff;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: #009cde;\n}\n\n.message__background {\n    background: #ffffff;\n}\n';
        },
        function(e, n) {
            e.exports =
                ".message {\n    overflow: hidden;\n    min-width: 150px;\n}\n\n.message * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.message__logo--svg {\n    position: relative;\n}\n\n.message__logo--svg img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n.message__logo--svg canvas {\n    display: block;\n    width: 100%;\n    visibility: hidden;\n}\n\n.message img {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.message__container {\n    border: 1px solid #003087;\n    position: relative;\n}\n\n.message__content {\n    width: auto;\n    font-family: 'HelveticaNeueW02-65Medi', 'Helvetica Neue-Thin', Helvetica, Arial, 'Lucida Grande', sans-serif;\n    overflow: hidden;\n}\n\n.message__messaging {\n    padding: 0;\n    float: right;\n    text-align: left;\n}\n\n.message__logo {\n    z-index: 1;\n    height: auto;\n    width: 80%;\n}\n\n.message__logo-container {\n    position: absolute;\n    float: left;\n    padding: 10px 5px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.message__logo-container img {\n    z-index: 1;\n}\n\n.message__headline {\n    color: #003087;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 1em;\n}\n\n.message__headline .weak {\n    font-weight: normal;\n}\n\n.message__sub-headline {\n    color: #767676;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 1em;\n}\n\n.message__disclaimer {\n    color: #767676;\n    font-size: 11px;\n    line-height: 1em;\n}\n\n.message__disclaimer .em {\n    color: #003087;\n    text-decoration: underline;\n    display: inline-block;\n    font-style: normal;\n}\n";
        },
        function(e, n) {
            e.exports =
                ".message__logo-container {\n    padding: 0 2% 0 0;\n}\n\n.message__logo-container::before,\n.message__logo-container::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    background-color: #003087;\n    transform: skewX(-9deg);\n}\n\n.message__logo-container::before {\n    height: 101%;\n    width: 105%;\n    left: -15%;\n}\n\n.message__logo-container::after {\n    height: 70%;\n    width: 160%;\n    left: -70%;\n}\n";
        },
        function(e, n) {
            e.exports =
                '.message__messaging {\n    float: none;\n}\n\n.message__logo {\n    max-width: 90%;\n}\n\n.message__logo-container {\n    width: 100%;\n    float: none;\n    position: relative;\n}\n\n.message__disclaimer .em {\n    display: block;\n    margin-left: 0;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container::before {\n    height: 120%;\n    width: 100%;\n    transform: skewY(9deg);\n    top: 0;\n    left: 0;\n    top: -30%;\n}\n';
        },
        function(e, n) {
            e.exports =
                ".message__disclaimer .em::after {\n    content: '';\n    background: transparent url(https://www.paypalobjects.com/webstatic/en_US/easypmnts/linker.jpg) no-repeat center top;\n    background-size: contain;\n    width: 15px;\n    height: 11px;\n    display: inline-block;\n    position: relative;\n    margin-bottom: -2px;\n}\n";
        },
        function(e, n) {
            e.exports =
                '.message {\n    max-width: 100%;\n    min-width: 120px;\n}\n\n.message__logo-container {\n    height: 108px;\n}\n\n.message__messaging {\n    padding: 0 8% 5%;\n}\n\n.message__headline {\n    font-size: 16px;\n    margin-bottom: 30px;\n    line-height: 1.1em;\n}\n.message__headline .em {\n    margin-right: 0;\n    display: block;\n}\n\n.message__sub-headline {\n    font-size: 15px;\n    margin-bottom: 40px;\n    color: #009cde;\n}\n\n.message__disclaimer .em {\n    color: #666666;\n    display: block;\n}\n\n@media (max-width: 160px) {\n    .message__headline {\n        margin-bottom: 16px;\n    }\n\n    .message__sub-headline {\n        margin-bottom: 16px;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    max-width: 100%;\n    min-width: 180px;\n}\n\n.message__logo-container {\n    width: 28%;\n}\n\n.message__messaging {\n    width: 70%;\n    line-height: 0;\n    padding: 0.5% 1.5% 0 1.5%;\n}\n\n.message__promo-container {\n    margin: 2px 0;\n}\n\n.message__headline {\n    display: inline;\n    font-size: 12.5px;\n    line-height: 13px;\n}\n\n.message__headline .em {\n    margin-right: 0;\n}\n\n.message__headline .weak {\n    font-weight: bold;\n}\n\n.message__sub-headline {\n    display: inline;\n    font-size: 12px;\n    color: #009cde;\n    line-height: 13px;\n}\n\n.message__disclaimer {\n    margin-bottom: 2px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    min-width: 200px;\n    max-width: 100%;\n}\n\n.message__logo-container {\n    width: 23%;\n}\n\n.message__messaging {\n    width: 74%;\n    padding: 2% 2% 0 1%;\n}\n\n.message__headline {\n    margin-bottom: 3px;\n}\n\n.message__headline .weak {\n    font-weight: bold;\n}\n\n.message__sub-headline {\n    margin-bottom: 2px;\n    color: #009cde;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    max-width: 100%;\n}\n\n.message__messaging {\n    padding: 0.5% 1% 0;\n}\n\n.message__logo {\n    max-width: unset;\n    max-height: 125%;\n}\n\n.message__logo-container {\n    width: 28%;\n    padding-right: 5%;\n}\n\n.message__messaging {\n    width: 70%;\n}\n\n.message__headline {\n    font-size: 15px;\n    margin-bottom: 6px;\n}\n\n.message__sub-headline {\n    font-size: 13px;\n    color: #009cde;\n    margin-bottom: 5px;\n}\n\n.message__disclaimer {\n    font-size: 10px;\n    margin-bottom: 3px;\n}\n\n.message__disclaimer .em {\n    color: #666666;\n}\n\n@media (max-width: 290px) {\n    .message__headline {\n        font-size: 13px;\n    }\n\n    .message__sub-headline {\n        font-size: 11px;\n    }\n\n    .message__disclaimer {\n        font-size: 9px;\n    }\n}\n\n@media (max-width: 200px) {\n    .message__logo {\n        max-width: 65%;\n    }\n\n    .message__logo-container {\n        position: relative;\n        width: 100%;\n        height: auto;\n        float: none;\n        padding-top: 5px;\n    }\n\n    .message__messaging {\n        width: 100%;\n        float: none;\n        padding: 2% 5% 5%;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    min-width: 160px;\n    max-width: 100%;\n}\n\n.message__logo {\n    max-width: 60%;\n}\n\n.message__logo-container {\n    width: 23%;\n}\n\n.message__messaging {\n    width: 77%;\n    padding: 6px 1% 0;\n    margin-bottom: 3px;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline {\n    display: block;\n    margin-bottom: 6px;\n}\n\n.message__sub-headline {\n    display: inline;\n    color: #009cde;\n}\n\n.message__disclaimer {\n    display: inline;\n}\n\n.message__disclaimer em {\n    display: inline-block;\n}\n\n@media (max-width: 570px) {\n    .message__logo {\n        max-width: 70%;\n    }\n\n    .message__headline {\n        font-size: 13px;\n        margin-bottom: 3px;\n    }\n\n    .message__sub-headline {\n        font-size: 12px;\n    }\n\n    .message__disclaimer {\n        font-size: 9px;\n    }\n\n    .message__disclaimer em::after {\n        height: 8px;\n    }\n}\n\n@media (max-width: 440px) {\n    .message__logo {\n        max-width: 75%;\n    }\n\n    .message__headline {\n        font-size: 11px;\n        margin-bottom: 2px;\n    }\n\n    .message__sub-headline {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 340px) {\n    .message__messaging {\n        padding-top: 2px;\n    }\n}\n\n@media (max-width: 250px) {\n    .message__logo {\n        max-width: 50%;\n    }\n\n    .message__logo-container {\n        float: none;\n        position: relative;\n        height: auto;\n        width: 100%;\n    }\n\n    .message__messaging {\n        float: none;\n        width: 100%;\n        padding: 5% 5% 3%;\n        margin-bottom: 6px;\n    }\n\n    .message__headline {\n        font-size: 12px;\n        margin-bottom: 6px;\n    }\n\n    .message__sub-headline {\n        font-size: 11px;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    min-width: 160px;\n    min-height: 36px;\n    max-width: 100%;\n}\n\n.message__container {\n    min-height: 36px;\n}\n\n.message__logo {\n    max-width: 80px;\n    max-height: unset;\n}\n\n.message__logo-container {\n    width: 20%;\n}\n\n.message__messaging {\n    width: 77%;\n    padding: 5px 2.5% 2px 0.5%;\n    line-height: 0;\n}\n\n.message__messaging > * {\n    line-height: 1em;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline {\n    display: inline;\n}\n\n.message__sub-headline {\n    display: inline;\n    color: #767676;\n}\n\n.message__disclaimer {\n    display: inline;\n}\n\n@media (max-width: 800px) {\n    .message__messaging {\n        padding-top: 2px;\n    }\n\n    .message__disclaimer {\n        display: inline-block;\n    }\n}\n\n@media (max-width: 570px) {\n    .message__headline {\n        font-size: 13px;\n    }\n\n    .message__sub-headline {\n        font-size: 12px;\n    }\n\n    .message__disclaimer .em::after {\n        height: 8px;\n    }\n\n    .message__disclaimer {\n        font-size: 9px;\n    }\n}\n\n@media (max-width: 440px) {\n    .message__logo {\n        max-width: 90%;\n    }\n}\n\n@media (max-width: 250px) {\n    .message__logo {\n        max-width: 50%;\n    }\n\n    .message__logo-container {\n        float: none;\n        position: relative;\n        height: auto;\n        width: 100%;\n        padding: 5px 0;\n    }\n\n    .message__messaging {\n        float: none;\n        width: 100%;\n        padding: 3% 5%;\n        margin-bottom: 6px;\n    }\n\n    .message__headline {\n        display: block;\n        font-size: 12px;\n        margin-bottom: 6px;\n    }\n\n    .message__sub-headline {\n        display: block;\n        font-size: 11px;\n        margin-bottom: 6px;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__messaging {\n    padding: 0.5% 1% 0%;\n    width: 76%;\n}\n\n.message__logo-container {\n    width: 23%;\n}\n\n.message__headline {\n    font-size: 12px;\n    margin-bottom: 5px;\n}\n\n.message__sub-headline {\n    font-size: 11px;\n    color: #009cde;\n    margin-bottom: 4px;\n}\n\n.message__disclaimer {\n    font-size: 9px;\n    margin-bottom: 2px;\n}\n\n@media (max-width: 290px) {\n    .message__messaging {\n        margin-left: 3%;\n        width: 74%;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    min-width: 118px;\n}\n\n.message__messaging {\n    padding: 5px 3px 0 3px;\n}\n\n.message__headline {\n    font-size: 10px;\n    margin-bottom: 4px;\n}\n\n.message__sub-headline {\n    font-size: 9px;\n}\n\n.message__disclaimer {\n    font-size: 8px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container {\n    width: 35%;\n}\n\n.message__messaging {\n    width: 65%;\n    padding: 2px 5px;\n    line-height: 0;\n}\n\n.message__promo-container {\n    display: inline;\n    line-height: 0;\n}\n\n.message__headline {\n    font-size: 12px;\n    margin-bottom: 4px;\n    display: block;\n}\n\n.message__sub-headline {\n    font-size: 8px;\n    display: inline;\n}\n\n.message__disclaimer {\n    font-size: 7px;\n    display: inline;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo {\n    max-width: 40%;\n}\n\n.message__logo-container {\n    height: 85px;\n}\n\n.message__logo-container::before {\n    height: 130%;\n    transform: skewY(5deg);\n}\n\n.message__messaging {\n    margin-top: 20px;\n    padding: 0 20px;\n}\n\n.message__headline {\n    font-size: 24px;\n    margin-bottom: 5px;\n}\n\n.message__sub-headline {\n    font-size: 11px;\n    line-height: 15px;\n}\n\n.message__disclaimer {\n    font-size: 8px;\n}\n\n.message__disclaimer .em {\n    display: inline;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container {\n    width: 23%;\n}\n\n.message__messaging {\n    width: 75%;\n    padding: 1px 0;\n    line-height: 0;\n}\n\n.message__promo-container {\n    display: inline;\n    line-height: 0;\n}\n\n.message__headline {\n    font-size: 10px;\n}\n\n.message__sub-headline {\n    display: inline;\n    color: #009cde;\n    font-size: 10px;\n}\n\n.message__disclaimer {\n    display: inline;\n    font-size: 9px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container {\n    width: 23%;\n}\n\n.message__messaging {\n    width: 75%;\n    padding: 4px 0;\n}\n\n.message__headline {\n    font-size: 16px;\n    margin-bottom: 2px;\n}\n\n.message__sub-headline {\n    font-size: 10px;\n}\n\n.message__disclaimer {\n    font-size: 8px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo {\n    max-width: 60%;\n}\n\n.message__logo-container {\n    width: 30%;\n    padding-right: 25px;\n}\n\n.message__messaging {\n    width: 68%;\n    padding: 6px 0;\n}\n\n.message__headline {\n    font-size: 28px;\n    margin-bottom: 8px;\n}\n\n.message__sub-headline {\n    font-size: 12px;\n    margin-bottom: 8px;\n}\n\n.message__disclaimer {\n    font-size: 9px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container {\n    width: 175px;\n}\n\n.message__messaging {\n    width: 335px;\n    padding: 30px 30px 20px 0;\n}\n\n.message__headline {\n    font-size: 26px;\n    line-height: 1.3em;\n    padding-bottom: 10px;\n}\n\n.message__sub-headline {\n    font-size: 13px;\n    line-height: 20px;\n    padding-bottom: 10px;\n}\n\n.message__disclaimer {\n    font-size: 9px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__messaging {\n    padding: 3px;\n}\n\n.message__headline {\n    font-size: 13px;\n    margin-bottom: 2px;\n}\n\n.message__sub-headline {\n    font-size: 9px;\n    line-height: 13px;\n    margin-bottom: 3px;\n}\n\n.message__disclaimer {\n    font-size: 8px;\n    line-height: 10px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.message__logo--svg {\n    position: relative;\n}\n\n.message__logo--svg img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.message__logo--svg canvas {\n    display: block;\n    width: 100%;\n    visibility: hidden;\n}\n';
        },
        function(e, n, t) {
            t(102), t(125);
            var o = t(16);
            e.exports = o.Array.from;
        },
        function(e, n, t) {
            'use strict';
            var o = t(103).charAt,
                i = t(104),
                a = t(109),
                r = i.set,
                s = i.getterFor('String Iterator');
            a(
                String,
                'String',
                function(e) {
                    r(this, { type: 'String Iterator', string: String(e), index: 0 });
                },
                function() {
                    var e,
                        n = s(this),
                        t = n.string,
                        i = n.index;
                    return i >= t.length
                        ? { value: void 0, done: !0 }
                        : ((e = o(t, i)), (n.index += e.length), { value: e, done: !1 });
                }
            );
        },
        function(e, n, t) {
            var o = t(23),
                i = t(8),
                a = function(e) {
                    return function(n, t) {
                        var a,
                            r,
                            s = String(i(n)),
                            l = o(t),
                            c = s.length;
                        return l < 0 || l >= c
                            ? e
                                ? ''
                                : void 0
                            : (a = s.charCodeAt(l)) < 55296 ||
                              a > 56319 ||
                              l + 1 === c ||
                              (r = s.charCodeAt(l + 1)) < 56320 ||
                              r > 57343
                            ? e
                                ? s.charAt(l)
                                : a
                            : e
                            ? s.slice(l, l + 2)
                            : r - 56320 + ((a - 55296) << 10) + 65536;
                    };
                };
            e.exports = { codeAt: a(!1), charAt: a(!0) };
        },
        function(e, n, t) {
            var o,
                i,
                a,
                r = t(105),
                s = t(9),
                l = t(14),
                c = t(11),
                u = t(15),
                d = t(35),
                m = t(36);
            if (r) {
                var p = new (0, s.WeakMap)(),
                    g = p.get,
                    f = p.has,
                    h = p.set;
                (o = function(e, n) {
                    return h.call(p, e, n), n;
                }),
                    (i = function(e) {
                        return g.call(p, e) || {};
                    }),
                    (a = function(e) {
                        return f.call(p, e);
                    });
            } else {
                var y = d('state');
                (m[y] = !0),
                    (o = function(e, n) {
                        return c(e, y, n), n;
                    }),
                    (i = function(e) {
                        return u(e, y) ? e[y] : {};
                    }),
                    (a = function(e) {
                        return u(e, y);
                    });
            }
            e.exports = {
                set: o,
                get: i,
                has: a,
                enforce: function(e) {
                    return a(e) ? i(e) : o(e, {});
                },
                getterFor: function(e) {
                    return function(n) {
                        var t;
                        if (!l(n) || (t = i(n)).type !== e)
                            throw TypeError('Incompatible receiver, ' + e + ' required');
                        return t;
                    };
                }
            };
        },
        function(e, n, t) {
            var o = t(9),
                i = t(106),
                a = o.WeakMap;
            e.exports = 'function' == typeof a && /native code/.test(i.call(a));
        },
        function(e, n, t) {
            var o = t(32);
            e.exports = o('native-function-to-string', Function.toString);
        },
        function(e, n, t) {
            var o = t(9),
                i = t(108),
                a = o['__core-js_shared__'] || i('__core-js_shared__', {});
            e.exports = a;
        },
        function(e, n, t) {
            var o = t(9),
                i = t(11);
            e.exports = function(e, n) {
                try {
                    i(o, e, n);
                } catch (t) {
                    o[e] = n;
                }
                return n;
            };
        },
        function(e, n, t) {
            'use strict';
            var o = t(5),
                i = t(113),
                a = t(50),
                r = t(122),
                s = t(53),
                l = t(11),
                c = t(124),
                u = t(7),
                d = t(33),
                m = t(29),
                p = t(49),
                g = p.IteratorPrototype,
                f = p.BUGGY_SAFARI_ITERATORS,
                h = u('iterator'),
                y = function() {
                    return this;
                };
            e.exports = function(e, n, t, u, p, _, x) {
                i(t, n, u);
                var v,
                    w,
                    b,
                    E = function(e) {
                        if (e === p && L) return L;
                        if (!f && e in T) return T[e];
                        switch (e) {
                            case 'keys':
                            case 'values':
                            case 'entries':
                                return function() {
                                    return new t(this, e);
                                };
                        }
                        return function() {
                            return new t(this);
                        };
                    },
                    P = n + ' Iterator',
                    A = !1,
                    T = e.prototype,
                    R = T[h] || T['@@iterator'] || (p && T[p]),
                    L = (!f && R) || E(p),
                    S = ('Array' == n && T.entries) || R;
                if (
                    (S &&
                        ((v = a(S.call(new e()))),
                        g !== Object.prototype &&
                            v.next &&
                            (d || a(v) === g || (r ? r(v, g) : 'function' != typeof v[h] && l(v, h, y)),
                            s(v, P, !0, !0),
                            d && (m[P] = y))),
                    'values' == p &&
                        R &&
                        'values' !== R.name &&
                        ((A = !0),
                        (L = function() {
                            return R.call(this);
                        })),
                    (d && !x) || T[h] === L || l(T, h, L),
                    (m[n] = L),
                    p)
                )
                    if (((w = { values: E('values'), keys: _ ? L : E('keys'), entries: E('entries') }), x))
                        for (b in w) (!f && !A && b in T) || c(T, b, w[b]);
                    else o({ target: n, proto: !0, forced: f || A }, w);
                return w;
            };
        },
        function(e, n, t) {
            var o = t(12),
                i = t(37),
                a = t(25),
                r = t(26),
                s = t(34),
                l = t(15),
                c = t(46),
                u = Object.getOwnPropertyDescriptor;
            n.f = o
                ? u
                : function(e, n) {
                      if (((e = r(e)), (n = s(n, !0)), c))
                          try {
                              return u(e, n);
                          } catch (e) {}
                      if (l(e, n)) return a(!i.f.call(e, n), e[n]);
                  };
        },
        function(e, n, t) {
            var o = t(13),
                i = /#|\.prototype\./,
                a = function(e, n) {
                    var t = s[r(e)];
                    return t == c || (t != l && ('function' == typeof n ? o(n) : !!n));
                },
                r = (a.normalize = function(e) {
                    return String(e)
                        .replace(i, '.')
                        .toLowerCase();
                }),
                s = (a.data = {}),
                l = (a.NATIVE = 'N'),
                c = (a.POLYFILL = 'P');
            e.exports = a;
        },
        function(e, n) {
            e.exports = function(e) {
                if ('function' != typeof e) throw TypeError(String(e) + ' is not a function');
                return e;
            };
        },
        function(e, n, t) {
            'use strict';
            var o = t(49).IteratorPrototype,
                i = t(116),
                a = t(25),
                r = t(53),
                s = t(29),
                l = function() {
                    return this;
                };
            e.exports = function(e, n, t) {
                var c = n + ' Iterator';
                return (e.prototype = i(o, { next: a(1, t) })), r(e, c, !1, !0), (s[c] = l), e;
            };
        },
        function(e, n, t) {
            var o = t(13);
            e.exports = !o(function() {
                function e() {}
                return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
            });
        },
        function(e, n, t) {
            var o = t(13);
            e.exports =
                !!Object.getOwnPropertySymbols &&
                !o(function() {
                    return !String(Symbol());
                });
        },
        function(e, n, t) {
            var o = t(21),
                i = t(117),
                a = t(52),
                r = t(36),
                s = t(120),
                l = t(47),
                c = t(35)('IE_PROTO'),
                u = function() {},
                d = function() {
                    var e,
                        n = l('iframe'),
                        t = a.length;
                    for (
                        n.style.display = 'none',
                            s.appendChild(n),
                            n.src = String('javascript:'),
                            (e = n.contentWindow.document).open(),
                            e.write('<script>document.F=Object</script>'),
                            e.close(),
                            d = e.F;
                        t--;

                    )
                        delete d.prototype[a[t]];
                    return d();
                };
            (e.exports =
                Object.create ||
                function(e, n) {
                    var t;
                    return (
                        null !== e
                            ? ((u.prototype = o(e)), (t = new u()), (u.prototype = null), (t[c] = e))
                            : (t = d()),
                        void 0 === n ? t : i(t, n)
                    );
                }),
                (r[c] = !0);
        },
        function(e, n, t) {
            var o = t(12),
                i = t(24),
                a = t(21),
                r = t(40);
            e.exports = o
                ? Object.defineProperties
                : function(e, n) {
                      a(e);
                      for (var t, o = r(n), s = o.length, l = 0; s > l; ) i.f(e, (t = o[l++]), n[t]);
                      return e;
                  };
        },
        function(e, n, t) {
            var o = t(15),
                i = t(26),
                a = t(51).indexOf,
                r = t(36);
            e.exports = function(e, n) {
                var t,
                    s = i(e),
                    l = 0,
                    c = [];
                for (t in s) !o(r, t) && o(s, t) && c.push(t);
                for (; n.length > l; ) o(s, (t = n[l++])) && (~a(c, t) || c.push(t));
                return c;
            };
        },
        function(e, n, t) {
            var o = t(23),
                i = Math.max,
                a = Math.min;
            e.exports = function(e, n) {
                var t = o(e);
                return t < 0 ? i(t + n, 0) : a(t, n);
            };
        },
        function(e, n, t) {
            var o = t(41);
            e.exports = o('document', 'documentElement');
        },
        function(e, n, t) {
            'use strict';
            var o = t(54),
                i = {};
            (i[t(7)('toStringTag')] = 'z'),
                (e.exports =
                    '[object z]' !== String(i)
                        ? function() {
                              return '[object ' + o(this) + ']';
                          }
                        : i.toString);
        },
        function(e, n, t) {
            var o = t(21),
                i = t(123);
            e.exports =
                Object.setPrototypeOf ||
                ('__proto__' in {}
                    ? (function() {
                          var e,
                              n = !1,
                              t = {};
                          try {
                              (e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(t, []),
                                  (n = t instanceof Array);
                          } catch (e) {}
                          return function(t, a) {
                              return o(t), i(a), n ? e.call(t, a) : (t.__proto__ = a), t;
                          };
                      })()
                    : void 0);
        },
        function(e, n, t) {
            var o = t(14);
            e.exports = function(e) {
                if (!o(e) && null !== e) throw TypeError("Can't set " + String(e) + ' as a prototype');
                return e;
            };
        },
        function(e, n, t) {
            var o = t(11);
            e.exports = function(e, n, t, i) {
                i && i.enumerable ? (e[n] = t) : o(e, n, t);
            };
        },
        function(e, n, t) {
            var o = t(5),
                i = t(126);
            o(
                {
                    target: 'Array',
                    stat: !0,
                    forced: !t(131)(function(e) {
                        Array.from(e);
                    })
                },
                { from: i }
            );
        },
        function(e, n, t) {
            'use strict';
            var o = t(39),
                i = t(28),
                a = t(127),
                r = t(128),
                s = t(17),
                l = t(129),
                c = t(130);
            e.exports = function(e) {
                var n,
                    t,
                    u,
                    d,
                    m,
                    p = i(e),
                    g = 'function' == typeof this ? this : Array,
                    f = arguments.length,
                    h = f > 1 ? arguments[1] : void 0,
                    y = void 0 !== h,
                    _ = 0,
                    x = c(p);
                if ((y && (h = o(h, f > 2 ? arguments[2] : void 0, 2)), null == x || (g == Array && r(x))))
                    for (t = new g((n = s(p.length))); n > _; _++) l(t, _, y ? h(p[_], _) : p[_]);
                else
                    for (m = (d = x.call(p)).next, t = new g(); !(u = m.call(d)).done; _++)
                        l(t, _, y ? a(d, h, [u.value, _], !0) : u.value);
                return (t.length = _), t;
            };
        },
        function(e, n, t) {
            var o = t(21);
            e.exports = function(e, n, t, i) {
                try {
                    return i ? n(o(t)[0], t[1]) : n(t);
                } catch (n) {
                    var a = e.return;
                    throw (void 0 !== a && o(a.call(e)), n);
                }
            };
        },
        function(e, n, t) {
            var o = t(7),
                i = t(29),
                a = o('iterator'),
                r = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (i.Array === e || r[a] === e);
            };
        },
        function(e, n, t) {
            'use strict';
            var o = t(34),
                i = t(24),
                a = t(25);
            e.exports = function(e, n, t) {
                var r = o(n);
                r in e ? i.f(e, r, a(0, t)) : (e[r] = t);
            };
        },
        function(e, n, t) {
            var o = t(54),
                i = t(29),
                a = t(7)('iterator');
            e.exports = function(e) {
                if (null != e) return e[a] || e['@@iterator'] || i[o(e)];
            };
        },
        function(e, n, t) {
            var o = t(7)('iterator'),
                i = !1;
            try {
                var a = 0,
                    r = {
                        next: function() {
                            return { done: !!a++ };
                        },
                        return: function() {
                            i = !0;
                        }
                    };
                (r[o] = function() {
                    return this;
                }),
                    Array.from(r, function() {
                        throw 2;
                    });
            } catch (e) {}
            e.exports = function(e, n) {
                if (!n && !i) return !1;
                var t = !1;
                try {
                    var a = {};
                    (a[o] = function() {
                        return {
                            next: function() {
                                return { done: (t = !0) };
                            }
                        };
                    }),
                        e(a);
                } catch (e) {}
                return t;
            };
        },
        function(e, n, t) {
            t(133);
            var o = t(18);
            e.exports = o('String', 'startsWith');
        },
        function(e, n, t) {
            'use strict';
            var o = t(5),
                i = t(17),
                a = t(42),
                r = t(8),
                s = t(43),
                l = ''.startsWith,
                c = Math.min;
            o(
                { target: 'String', proto: !0, forced: !s('startsWith') },
                {
                    startsWith: function(e) {
                        var n = String(r(this));
                        a(e);
                        var t = i(c(arguments.length > 1 ? arguments[1] : void 0, n.length)),
                            o = String(e);
                        return l ? l.call(n, o, t) : n.slice(t, t + o.length) === o;
                    }
                }
            );
        },
        function(e, n, t) {
            var o = t(14),
                i = t(27),
                a = t(7)('match');
            e.exports = function(e) {
                var n;
                return o(e) && (void 0 !== (n = e[a]) ? !!n : 'RegExp' == i(e));
            };
        },
        function(e, n, t) {
            t(136);
            var o = t(16);
            e.exports = o.Object.entries;
        },
        function(e, n, t) {
            var o = t(5),
                i = t(55).entries;
            o(
                { target: 'Object', stat: !0 },
                {
                    entries: function(e) {
                        return i(e);
                    }
                }
            );
        },
        function(e, n, t) {
            t(138);
            var o = t(18);
            e.exports = o('Array', 'find');
        },
        function(e, n, t) {
            'use strict';
            var o = t(5),
                i = t(139).find,
                a = t(56),
                r = !0;
            'find' in [] &&
                Array(1).find(function() {
                    r = !1;
                }),
                o(
                    { target: 'Array', proto: !0, forced: r },
                    {
                        find: function(e) {
                            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                        }
                    }
                ),
                a('find');
        },
        function(e, n, t) {
            var o = t(39),
                i = t(38),
                a = t(28),
                r = t(17),
                s = t(140),
                l = [].push,
                c = function(e) {
                    var n = 1 == e,
                        t = 2 == e,
                        c = 3 == e,
                        u = 4 == e,
                        d = 6 == e,
                        m = 5 == e || d;
                    return function(p, g, f, h) {
                        for (
                            var y,
                                _,
                                x = a(p),
                                v = i(x),
                                w = o(g, f, 3),
                                b = r(v.length),
                                E = 0,
                                P = h || s,
                                A = n ? P(p, b) : t ? P(p, 0) : void 0;
                            b > E;
                            E++
                        )
                            if ((m || E in v) && ((_ = w((y = v[E]), E, x)), e))
                                if (n) A[E] = _;
                                else if (_)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return y;
                                        case 6:
                                            return E;
                                        case 2:
                                            l.call(A, y);
                                    }
                                else if (u) return !1;
                        return d ? -1 : c || u ? u : A;
                    };
                };
            e.exports = {
                forEach: c(0),
                map: c(1),
                filter: c(2),
                some: c(3),
                every: c(4),
                find: c(5),
                findIndex: c(6)
            };
        },
        function(e, n, t) {
            var o = t(14),
                i = t(141),
                a = t(7)('species');
            e.exports = function(e, n) {
                var t;
                return (
                    i(e) &&
                        ('function' != typeof (t = e.constructor) || (t !== Array && !i(t.prototype))
                            ? o(t) && null === (t = t[a]) && (t = void 0)
                            : (t = void 0)),
                    new (void 0 === t ? Array : t)(0 === n ? 0 : n)
                );
            };
        },
        function(e, n, t) {
            var o = t(27);
            e.exports =
                Array.isArray ||
                function(e) {
                    return 'Array' == o(e);
                };
        },
        function(e, n, t) {
            t(143);
            var o = t(18);
            e.exports = o('Array', 'includes');
        },
        function(e, n, t) {
            'use strict';
            var o = t(5),
                i = t(51).includes,
                a = t(56);
            o(
                { target: 'Array', proto: !0 },
                {
                    includes: function(e) {
                        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    }
                }
            ),
                a('includes');
        },
        function(e, n, t) {
            t(145);
            var o = t(16);
            e.exports = o.Object.assign;
        },
        function(e, n, t) {
            var o = t(5),
                i = t(146);
            o({ target: 'Object', stat: !0, forced: Object.assign !== i }, { assign: i });
        },
        function(e, n, t) {
            'use strict';
            var o = t(12),
                i = t(13),
                a = t(40),
                r = t(147),
                s = t(37),
                l = t(28),
                c = t(38),
                u = Object.assign;
            e.exports =
                !u ||
                i(function() {
                    var e = {},
                        n = {},
                        t = Symbol();
                    return (
                        (e[t] = 7),
                        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
                            n[e] = e;
                        }),
                        7 != u({}, e)[t] || 'abcdefghijklmnopqrst' != a(u({}, n)).join('')
                    );
                })
                    ? function(e, n) {
                          for (var t = l(e), i = arguments.length, u = 1, d = r.f, m = s.f; i > u; )
                              for (
                                  var p, g = c(arguments[u++]), f = d ? a(g).concat(d(g)) : a(g), h = f.length, y = 0;
                                  h > y;

                              )
                                  (p = f[y++]), (o && !m.call(g, p)) || (t[p] = g[p]);
                          return t;
                      }
                    : u;
        },
        function(e, n) {
            n.f = Object.getOwnPropertySymbols;
        },
        function(e, n, t) {
            'undefined' != typeof self && self,
                (e.exports = (function(e) {
                    var n = {};
                    function t(o) {
                        if (n[o]) return n[o].exports;
                        var i = (n[o] = { i: o, l: !1, exports: {} });
                        return e[o].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
                    }
                    return (
                        (t.m = e),
                        (t.c = n),
                        (t.d = function(e, n, o) {
                            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: o });
                        }),
                        (t.n = function(e) {
                            var n =
                                e && e.__esModule
                                    ? function() {
                                          return e.default;
                                      }
                                    : function() {
                                          return e;
                                      };
                            return t.d(n, 'a', n), n;
                        }),
                        (t.o = function(e, n) {
                            return {}.hasOwnProperty.call(e, n);
                        }),
                        (t.p = ''),
                        t((t.s = './src/index.js'))
                    );
                })({
                    './src/index.js': function(e, n, t) {
                        'use strict';
                        function o(e) {
                            try {
                                if (!e) return !1;
                                if ('undefined' != typeof Promise && e instanceof Promise) return !0;
                                if (
                                    'undefined' != typeof window &&
                                    'function' == typeof window.Window &&
                                    e instanceof window.Window
                                )
                                    return !1;
                                if (
                                    'undefined' != typeof window &&
                                    'function' == typeof window.constructor &&
                                    e instanceof window.constructor
                                )
                                    return !1;
                                var n = {}.toString;
                                if (n) {
                                    var t = n.call(e);
                                    if (
                                        '[object Window]' === t ||
                                        '[object global]' === t ||
                                        '[object DOMWindow]' === t
                                    )
                                        return !1;
                                }
                                if ('function' == typeof e.then) return !0;
                            } catch (e) {
                                return !1;
                            }
                            return !1;
                        }
                        Object.defineProperty(n, '__esModule', { value: !0 });
                        var i = [],
                            a = [],
                            r = 0,
                            s = void 0;
                        function l() {
                            if (!r && s) {
                                var e = s;
                                (s = null), e.resolve();
                            }
                        }
                        function c() {
                            r += 1;
                        }
                        function u() {
                            (r -= 1), l();
                        }
                        var d = (function() {
                            function e(n) {
                                var t = this;
                                if (
                                    ((function(n, t) {
                                        if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
                                    })(this),
                                    (this.resolved = !1),
                                    (this.rejected = !1),
                                    (this.errorHandled = !1),
                                    (this.handlers = []),
                                    n)
                                ) {
                                    var o = void 0,
                                        i = void 0,
                                        a = !1,
                                        r = !1,
                                        s = !1;
                                    c();
                                    try {
                                        n(
                                            function(e) {
                                                s ? t.resolve(e) : ((a = !0), (o = e));
                                            },
                                            function(e) {
                                                s ? t.reject(e) : ((r = !0), (i = e));
                                            }
                                        );
                                    } catch (e) {
                                        return u(), void this.reject(e);
                                    }
                                    u(), (s = !0), a ? this.resolve(o) : r && this.reject(i);
                                }
                            }
                            return (
                                (e.prototype.resolve = function(e) {
                                    if (this.resolved || this.rejected) return this;
                                    if (o(e)) throw new Error('Can not resolve promise with another promise');
                                    return (this.resolved = !0), (this.value = e), this.dispatch(), this;
                                }),
                                (e.prototype.reject = function(e) {
                                    var n = this;
                                    if (this.resolved || this.rejected) return this;
                                    if (o(e)) throw new Error('Can not reject promise with another promise');
                                    if (!e) {
                                        var t =
                                            e && 'function' == typeof e.toString ? e.toString() : {}.toString.call(e);
                                        e = new Error('Expected reject to be called with Error, got ' + t);
                                    }
                                    return (
                                        (this.rejected = !0),
                                        (this.error = e),
                                        this.errorHandled ||
                                            setTimeout(function() {
                                                n.errorHandled ||
                                                    (function(e, n) {
                                                        if (-1 === i.indexOf(e)) {
                                                            i.push(e),
                                                                setTimeout(function() {
                                                                    throw e;
                                                                }, 1);
                                                            for (var t = 0; t < a.length; t++) a[t](e, n);
                                                        }
                                                    })(e, n);
                                            }, 1),
                                        this.dispatch(),
                                        this
                                    );
                                }),
                                (e.prototype.asyncReject = function(e) {
                                    return (this.errorHandled = !0), this.reject(e), this;
                                }),
                                (e.prototype.dispatch = function() {
                                    var n = this.resolved,
                                        t = this.rejected,
                                        i = this.handlers;
                                    if (!this.dispatching && (n || t)) {
                                        (this.dispatching = !0), c();
                                        for (
                                            var a = function(e, n) {
                                                    return e.then(
                                                        function(e) {
                                                            n.resolve(e);
                                                        },
                                                        function(e) {
                                                            n.reject(e);
                                                        }
                                                    );
                                                },
                                                r = 0;
                                            r < i.length;
                                            r++
                                        ) {
                                            var s = i[r],
                                                l = s.onSuccess,
                                                d = s.onError,
                                                m = s.promise,
                                                p = void 0;
                                            if (n)
                                                try {
                                                    p = l ? l(this.value) : this.value;
                                                } catch (e) {
                                                    m.reject(e);
                                                    continue;
                                                }
                                            else if (t) {
                                                if (!d) {
                                                    m.reject(this.error);
                                                    continue;
                                                }
                                                try {
                                                    p = d(this.error);
                                                } catch (e) {
                                                    m.reject(e);
                                                    continue;
                                                }
                                            }
                                            p instanceof e && (p.resolved || p.rejected)
                                                ? (p.resolved ? m.resolve(p.value) : m.reject(p.error),
                                                  (p.errorHandled = !0))
                                                : o(p)
                                                ? p instanceof e && (p.resolved || p.rejected)
                                                    ? p.resolved
                                                        ? m.resolve(p.value)
                                                        : m.reject(p.error)
                                                    : a(p, m)
                                                : m.resolve(p);
                                        }
                                        (i.length = 0), (this.dispatching = !1), u();
                                    }
                                }),
                                (e.prototype.then = function(n, t) {
                                    if (n && 'function' != typeof n && !n.call)
                                        throw new Error('Promise.then expected a function for success handler');
                                    if (t && 'function' != typeof t && !t.call)
                                        throw new Error('Promise.then expected a function for error handler');
                                    var o = new e();
                                    return (
                                        this.handlers.push({ promise: o, onSuccess: n, onError: t }),
                                        (this.errorHandled = !0),
                                        this.dispatch(),
                                        o
                                    );
                                }),
                                (e.prototype.catch = function(e) {
                                    return this.then(void 0, e);
                                }),
                                (e.prototype.finally = function(n) {
                                    if (n && 'function' != typeof n && !n.call)
                                        throw new Error('Promise.finally expected a function');
                                    return this.then(
                                        function(t) {
                                            return e.try(n).then(function() {
                                                return t;
                                            });
                                        },
                                        function(t) {
                                            return e.try(n).then(function() {
                                                throw t;
                                            });
                                        }
                                    );
                                }),
                                (e.prototype.timeout = function(e, n) {
                                    var t = this;
                                    if (this.resolved || this.rejected) return this;
                                    var o = setTimeout(function() {
                                        t.resolved ||
                                            t.rejected ||
                                            t.reject(n || new Error('Promise timed out after ' + e + 'ms'));
                                    }, e);
                                    return this.then(function(e) {
                                        return clearTimeout(o), e;
                                    });
                                }),
                                (e.prototype.toPromise = function() {
                                    if ('undefined' == typeof Promise) throw new TypeError('Could not find Promise');
                                    return Promise.resolve(this);
                                }),
                                (e.resolve = function(n) {
                                    return n instanceof e
                                        ? n
                                        : o(n)
                                        ? new e(function(e, t) {
                                              return n.then(e, t);
                                          })
                                        : new e().resolve(n);
                                }),
                                (e.reject = function(n) {
                                    return new e().reject(n);
                                }),
                                (e.asyncReject = function(n) {
                                    return new e().asyncReject(n);
                                }),
                                (e.all = function(n) {
                                    var t = new e(),
                                        i = n.length,
                                        a = [];
                                    if (!i) return t.resolve(a), t;
                                    for (
                                        var r = function(e, n, o) {
                                                return n.then(
                                                    function(n) {
                                                        (a[e] = n), 0 == (i -= 1) && t.resolve(a);
                                                    },
                                                    function(e) {
                                                        o.reject(e);
                                                    }
                                                );
                                            },
                                            s = 0;
                                        s < n.length;
                                        s++
                                    ) {
                                        var l = n[s];
                                        if (l instanceof e) {
                                            if (l.resolved) {
                                                (a[s] = l.value), (i -= 1);
                                                continue;
                                            }
                                        } else if (!o(l)) {
                                            (a[s] = l), (i -= 1);
                                            continue;
                                        }
                                        r(s, e.resolve(l), t);
                                    }
                                    return 0 === i && t.resolve(a), t;
                                }),
                                (e.hash = function(n) {
                                    var t = {};
                                    return e
                                        .all(
                                            Object.keys(n).map(function(o) {
                                                return e.resolve(n[o]).then(function(e) {
                                                    t[o] = e;
                                                });
                                            })
                                        )
                                        .then(function() {
                                            return t;
                                        });
                                }),
                                (e.map = function(n, t) {
                                    return e.all(n.map(t));
                                }),
                                (e.onPossiblyUnhandledException = function(e) {
                                    return (function(e) {
                                        return (
                                            a.push(e),
                                            {
                                                cancel: function() {
                                                    a.splice(a.indexOf(e), 1);
                                                }
                                            }
                                        );
                                    })(e);
                                }),
                                (e.try = function(n, t, o) {
                                    if (n && 'function' != typeof n && !n.call)
                                        throw new Error('Promise.try expected a function');
                                    var i = void 0;
                                    c();
                                    try {
                                        i = n.apply(t, o || []);
                                    } catch (n) {
                                        return u(), e.reject(n);
                                    }
                                    return u(), e.resolve(i);
                                }),
                                (e.delay = function(n) {
                                    return new e(function(e) {
                                        setTimeout(e, n);
                                    });
                                }),
                                (e.isPromise = function(n) {
                                    return !!(n && n instanceof e) || o(n);
                                }),
                                (e.flush = function() {
                                    return (n = s = s || new e()), l(), n;
                                    var n;
                                }),
                                e
                            );
                        })();
                        t.d(n, 'ZalgoPromise', function() {
                            return d;
                        });
                    }
                }));
        },
        function(e, n, t) {
            t(150);
            var o = t(18);
            e.exports = o('String', 'padStart');
        },
        function(e, n, t) {
            'use strict';
            var o = t(5),
                i = t(151).start;
            o(
                { target: 'String', proto: !0, forced: t(153) },
                {
                    padStart: function(e) {
                        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    }
                }
            );
        },
        function(e, n, t) {
            var o = t(17),
                i = t(152),
                a = t(8),
                r = Math.ceil,
                s = function(e) {
                    return function(n, t, s) {
                        var l,
                            c,
                            u = String(a(n)),
                            d = u.length,
                            m = void 0 === s ? ' ' : String(s),
                            p = o(t);
                        return p <= d || '' == m
                            ? u
                            : ((c = i.call(m, r((l = p - d) / m.length))).length > l && (c = c.slice(0, l)),
                              e ? u + c : c + u);
                    };
                };
            e.exports = { start: s(!1), end: s(!0) };
        },
        function(e, n, t) {
            'use strict';
            var o = t(23),
                i = t(8);
            e.exports =
                ''.repeat ||
                function(e) {
                    var n = String(i(this)),
                        t = '',
                        a = o(e);
                    if (a < 0 || a == 1 / 0) throw RangeError('Wrong number of repetitions');
                    for (; a > 0; (a >>>= 1) && (n += n)) 1 & a && (t += n);
                    return t;
                };
        },
        function(e, n, t) {
            var o = t(154);
            e.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
        },
        function(e, n, t) {
            var o = t(41);
            e.exports = o('navigator', 'userAgent') || '';
        },
        function(e, n, t) {
            t(156);
            var o = t(18);
            e.exports = o('String', 'includes');
        },
        function(e, n, t) {
            'use strict';
            var o = t(5),
                i = t(42),
                a = t(8);
            o(
                { target: 'String', proto: !0, forced: !t(43)('includes') },
                {
                    includes: function(e) {
                        return !!~String(a(this)).indexOf(i(e), arguments.length > 1 ? arguments[1] : void 0);
                    }
                }
            );
        },
        function(e, n, t) {
            t(158);
            var o = t(18);
            e.exports = o('String', 'endsWith');
        },
        function(e, n, t) {
            'use strict';
            var o = t(5),
                i = t(17),
                a = t(42),
                r = t(8),
                s = t(43),
                l = ''.endsWith,
                c = Math.min;
            o(
                { target: 'String', proto: !0, forced: !s('endsWith') },
                {
                    endsWith: function(e) {
                        var n = String(r(this));
                        a(e);
                        var t = arguments.length > 1 ? arguments[1] : void 0,
                            o = i(n.length),
                            s = void 0 === t ? o : c(i(t), o),
                            u = String(e);
                        return l ? l.call(n, u, s) : n.slice(s - u.length, s) === u;
                    }
                }
            );
        },
        function(e, n, t) {
            t(160);
            var o = t(16);
            e.exports = o.Object.values;
        },
        function(e, n, t) {
            var o = t(5),
                i = t(55).values;
            o(
                { target: 'Object', stat: !0 },
                {
                    values: function(e) {
                        return i(e);
                    }
                }
            );
        },
        function(e, n, t) {
            t(162);
            var o = t(16);
            e.exports = o.Number.isNaN;
        },
        function(e, n, t) {
            t(5)(
                { target: 'Number', stat: !0 },
                {
                    isNaN: function(e) {
                        return e != e;
                    }
                }
            );
        },
        function(e, n, t) {
            'use strict';
            function o() {
                return (o =
                    Object.assign ||
                    function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var o in t) ({}.hasOwnProperty.call(t, o) && (e[o] = t[o]));
                        }
                        return e;
                    }).apply(this, arguments);
            }
            t.r(n);
            var i = t(2),
                a = t.n(i),
                r = t(0),
                s = t.n(r),
                l = t(3),
                c = t.n(l),
                u = t(6),
                d = t.n(u),
                m = t(4),
                p = t.n(m);
            function g(e) {
                var n = new Map();
                return function() {
                    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                    var a = JSON.stringify(o);
                    return n.has(a) || n.set(a, e.apply(void 0, o)), n.get(a);
                };
            }
            function f(e, n) {
                var t = new Map();
                return function(o, i) {
                    void 0 === i && (i = !1);
                    var a = JSON.stringify(
                        n.map(function(e) {
                            return o[e];
                        })
                    );
                    return (t.has(a) && !i) || t.set(a, e(o)), t.get(a);
                };
            }
            function h(e) {
                for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                    t[o - 1] = arguments[o];
                return function() {
                    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return e.apply(void 0, t.concat(o));
                };
            }
            function y(e, n) {
                return (
                    void 0 === n && (n = e.length),
                    function t() {
                        for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                        return i.length < n
                            ? function() {
                                  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                                      n[o] = arguments[o];
                                  return t.apply(void 0, i.concat(n));
                              }
                            : e.apply(void 0, i);
                    }
                );
            }
            function _(e) {
                return function(n) {
                    var t = e(n);
                    return 'object' == typeof t && t.then
                        ? t.then(function() {
                              return n;
                          })
                        : n;
                };
            }
            function x() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return function(e) {
                    return n.reduce(function(e, n) {
                        return n(e);
                    }, e);
                };
            }
            var v = y(function(e, n) {
                    return n[e];
                }),
                w = y(function(e, n) {
                    var t;
                    return ((t = {})[e] = n), t;
                });
            function b(e) {
                return c()(e).reduce(function(e, n) {
                    var t,
                        i,
                        a,
                        r = n[0],
                        s = n[1];
                    return Array.isArray(s)
                        ? o({}, e, (((i = {})[r] = [].concat(s)), i))
                        : o({}, e, 'object' == typeof s ? (((a = {})[r] = b(s)), a) : (((t = {})[r] = s), t));
                }, {});
            }
            function E(e, n) {
                return (function e(n, t) {
                    return c()(t).reduce(function(t, i) {
                        var a,
                            r,
                            s,
                            l,
                            c = i[0],
                            u = i[1];
                        return Array.isArray(u)
                            ? o({}, t, (((r = {})[c] = [].concat(u)), r))
                            : 'object' != typeof u ||
                              null === u ||
                              (n[c] && 'object' == typeof n[c] && !Array.isArray(n[c]))
                            ? o(
                                  {},
                                  t,
                                  'object' == typeof u && null !== u
                                      ? (((l = {})[c] = e(n[c], u)), l)
                                      : (((a = {})[c] = u), a)
                              )
                            : o({}, t, (((s = {})[c] = b(u)), s));
                    }, n);
                })(b(e), n);
            }
            function P(e, n) {
                return n.split('.').reduce(function(e, n) {
                    return 'object' == typeof e || 'function' == typeof e ? e[n] : void 0;
                }, e);
            }
            function A(e, n, t) {
                var o;
                void 0 === t && (t = '-');
                var i,
                    a = e.indexOf(t);
                if (-1 === a) return ((i = {})[e] = n), i;
                var r = e.slice(0, a),
                    s = e.slice(a + 1);
                return ((o = {})[r] = A(s, n)), o;
            }
            function T(e) {
                return 'object' == typeof HTMLElement
                    ? e instanceof HTMLElement
                    : e && 'object' == typeof e && null !== e && 1 === e.nodeType && 'string' == typeof e.nodeName;
            }
            var R = y(function(e, n, t) {
                    return n.getElementsByClassName(e + '__' + t)[0];
                }),
                L = y(function(e, n) {
                    var t = document.createElement('style');
                    (t.textContent = n), e.insertBefore(t, e.firstChild);
                }),
                S = y(function(e, n) {
                    if (Array.isArray(n))
                        n.forEach(function(n) {
                            return e.appendChild(n);
                        });
                    else if (n instanceof HTMLElement) e.appendChild(n);
                    else if ('string' == typeof n) {
                        var t = document.createElement('span');
                        (t.innerHTML = n), e.appendChild(t);
                    } else !1 === n && e.parentNode.removeChild(e);
                }),
                O = y(function(e, n) {
                    if (Array.isArray(n))
                        []
                            .concat(n)
                            .reverse()
                            .forEach(function(n) {
                                return e.insertBefore(n, e.firstChild);
                            });
                    else if (n instanceof HTMLElement) e.insertBefore(n, e.firstChild);
                    else if ('string' == typeof n) {
                        var t = document.createElement('span');
                        (t.innerHTML = n), e.insertBefore(t, e.firstChild);
                    } else !1 === n && e.parentNode.removeChild(e);
                }),
                I = y(function(e, n, t, o) {
                    if ((void 0 === t && (t = 'PayPal Credit'), 'string' == typeof n)) {
                        var i = new Image();
                        (i.alt = t),
                            (i.className = 'message__logo'),
                            (i.src = n),
                            o && (i.srcset = o),
                            e.appendChild(i);
                    } else if (Array.isArray(n)) {
                        var a = n[0],
                            r = n[1],
                            s = n[2],
                            l = new Image();
                        (l.src = a), (l.alt = t);
                        var c = document.createElement('div');
                        c.className = 'message__logo message__logo--svg';
                        var u = document.createElement('canvas');
                        (u.height = s), (u.width = r), c.appendChild(l), c.appendChild(u), e.appendChild(c);
                    } else e.parentNode.removeChild(e);
                }, 2);
            function N(e, n) {
                if (null == e) return {};
                var t,
                    o,
                    i = {},
                    a = Object.keys(e);
                for (o = 0; o < a.length; o++) n.indexOf((t = a[o])) >= 0 || (i[t] = e[t]);
                return i;
            }
            Object.create(Error.prototype);
            var C = t(19),
                M = t.n(C),
                z = t(1);
            function k(e) {
                void 0 === e && (e = {});
                var n = o({}, e);
                return [n, h(M.a, n)];
            }
            function j(e, n, t) {
                var i = void 0 === t ? {} : t,
                    a = i.data,
                    r = i.headers;
                return new z.ZalgoPromise(function(t, i) {
                    var s = new XMLHttpRequest();
                    (s.onreadystatechange = function() {
                        if (4 === s.readyState) {
                            var e = s
                                .getAllResponseHeaders()
                                .split('\n')
                                .reduce(function(e, n) {
                                    var t,
                                        i = n.trim().split(': ');
                                    return o({}, e, (((t = {})[i[0]] = i[1]), t));
                                }, {});
                            switch (s.status) {
                                case 200:
                                    t({ headers: e, data: s.responseText });
                                    break;
                                case 204:
                                    t({ headers: e });
                                    break;
                                default:
                                    i(new Error('Request failed'));
                            }
                        }
                    }),
                        s.open(e, n, !0),
                        r &&
                            c()(r).forEach(function(e) {
                                s.setRequestHeader(e[0], e[1]);
                            }),
                        s.send('object' == typeof a ? JSON.stringify(a) : a);
                });
            }
            var W = k(window.__paypal_messages_state__ || { nextId: 1, config: {} }),
                H = W[0],
                B = W[1];
            Object.defineProperty(window, '__paypal_messages_state__', {
                value: H,
                enumerable: !1,
                configurable: !0,
                writable: !1
            });
            var Y = function() {
                    return B({ nextId: H.nextId + 1 }), H.nextId - 1;
                },
                D = Object({
                    __LOCAL__: 'http://localhost.paypal.com:8080',
                    __STAGE__: 'https://www.msmaster.qa.paypal.com',
                    __SANDBOX__: 'https://www.sandbox.paypal.com',
                    __PRODUCTION__: 'https://www.paypal.com',
                    __MESSAGE__: Object({ __LOCAL__: 'https://www.paypal.com' }),
                    __MODAL__: Object({
                        __LOCAL__: 'https://www.paypalobjects.com',
                        __STAGE__: 'https://www.paypalobjects.com',
                        __SANDBOX__: 'https://www.paypalobjects.com',
                        __PRODUCTION__: 'https://www.paypalobjects.com'
                    }),
                    __LOGGER__: Object({ __LOCAL__: 'https://www.paypal.com' }),
                    __TERMS__: Object({ __LOCAL__: 'https://www.paypal.com' })
                }),
                U = Object({
                    __MESSAGE__: '/imadserver/upstream',
                    __MODAL__: '/upstream/assets/messaging/modal',
                    __LOGGER__: '/ppcredit/messagingLogger',
                    __TERMS__: '/ppcredit/finance/terms'
                });
            function G(e) {
                var n = '__' + 'production'.toUpperCase() + '__',
                    t = '__' + e.toUpperCase() + '__';
                return '' + ((D[t] && D[t][n]) || D[n]) + U[t];
            }
            var F = t(57),
                V = t.n(F),
                Z = y(function(e, n, t) {
                    var i = e.uuid,
                        a = e.urls;
                    void 0 === t && (t = !1);
                    var r = new window.Image();
                    if ('object' == typeof n) {
                        var s = o({}, n, { uuid: t ? i + '::banner.hidden:true' : i }),
                            l = c()(s).reduce(function(e, n) {
                                var t = n[1];
                                return void 0 === t ? e : e + '&' + n[0] + '=' + t;
                            }, '');
                        r.src = (a[n.et] || a.DEFAULT) + '&bdata=' + encodeURIComponent(l.slice(1));
                    } else 'string' == typeof n && (r.src = a[n] || a.DEFAULT);
                }, 2),
                K = {
                    START: 'Start',
                    END: 'End',
                    RENDER_START: 'Render_Start',
                    RENDER_END: 'Render_End',
                    CREATE: 'Create',
                    CONTAINER: 'Container',
                    VALIDATE: 'Validate',
                    FETCH_START: 'Fetch_Start',
                    FETCH_END: 'Fetch_End',
                    INSERT: 'Insert',
                    MODAL: 'Modal',
                    SIZE: 'Size',
                    STATS: 'Stats',
                    UPDATE: 'Update',
                    ERROR: 'Error'
                },
                J = {
                    MESSAGE_OVERFLOW: 'MESSAGE_OVERFLOW',
                    MESSAGE_HIDDEN: 'MESSAGE_HIDDEN',
                    MESSAGE_INVALID_LEGACY: 'MESSAGE_INVALID_LEGACY',
                    MESSAGE_INVALID_MARKUP: 'MESSAGE_INVALID_MARKUP',
                    MODAL_FAIL: 'MODAL_FAIL',
                    CUSTOM_TEMPLATE_FAIL: 'CUSTOM_TEMPLATE_FAIL',
                    CUSTOM_JSON_OPTIONS_FAIL: 'CUSTOM_JSON_OPTIONS_FAIL',
                    INTERNAL_FAIL: 'INTERNAL_FAIL'
                },
                q = {
                    create: function(e) {
                        var n = e.id,
                            t = e.selector,
                            i = e.type,
                            a = k({ count: 1, account: e.account, history: [], logs: [] }),
                            r = a[0],
                            s = a[1],
                            l = {
                                start: function(e) {
                                    P(e, 'options.account') &&
                                        r.account !== e.options.account &&
                                        s({ account: e.account }),
                                        l.info(K.START, o({ t: new Date().getTime() }, e));
                                },
                                end: function(e) {
                                    l.info(K.END, o({ t: new Date().getTime() }, e)),
                                        (function() {
                                            if (!(r.count > 3)) {
                                                var e,
                                                    a = d()(r.logs, function(e) {
                                                        var n = e.event;
                                                        return 'Create' === n || 'Update' === n;
                                                    }),
                                                    l = {
                                                        version: '1.3.2',
                                                        target: 'LEGACY',
                                                        url: window.location.href,
                                                        selector: t,
                                                        type: i + (a ? '-' + a.event : ''),
                                                        id: n + '-' + V()(r.count, 4, '0'),
                                                        account: r.account,
                                                        history: r.history,
                                                        events:
                                                            ((e = r.logs),
                                                            e.map(function(e) {
                                                                var n = e.event,
                                                                    t = o({}, e);
                                                                return (
                                                                    delete t.event,
                                                                    Object.keys(t).length > 0 ? [n, t] : n
                                                                );
                                                            }))
                                                    };
                                                s({ count: r.count + 1, logs: [] });
                                                var c = [].toJSON;
                                                c && delete Array.prototype.toJSON,
                                                    j('POST', G('LOGGER'), {
                                                        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                                                        data: JSON.stringify({ data: l })
                                                    })
                                                        .then(function(e) {
                                                            var n = (e.headers['Paypal-Debug-Id'] || '').split(',');
                                                            s({ history: [].concat(r.history, [n[0]]).slice(-5) });
                                                        })
                                                        .catch(function() {}),
                                                    c && (Array.prototype.toJSON = c);
                                            }
                                        })();
                                },
                                info: function(e, n) {
                                    void 0 === n && (n = {}), s({ logs: [].concat(r.logs, [o({ event: e }, n)]) });
                                },
                                error: function(e) {
                                    l.info(K.ERROR, e);
                                },
                                track: Z,
                                warn: function() {
                                    for (var e, n = arguments.length, t = new Array(n), o = 0; o < n; o++)
                                        t[o] = arguments[o];
                                    (e = console).warn.apply(e, ['[PayPal Messages]'].concat(t));
                                }
                            };
                        return l;
                    },
                    warn: function() {
                        for (var e, n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];
                        (e = console).warn.apply(e, ['[PayPal Messages]'].concat(t));
                    }
                },
                Q = t(20),
                $ = t.n(Q),
                X = g(function(e) {
                    var n,
                        t = e.markup;
                    return z.ZalgoPromise.resolve(
                        s()(t, 'https://www.paypalobjects.com')
                            ? ((n = t),
                              new z.ZalgoPromise(function(e) {
                                  var t = new XMLHttpRequest();
                                  (t.onreadystatechange = function() {
                                      if (4 === t.readyState)
                                          switch (t.status) {
                                              case 200:
                                                  e(t.responseText);
                                                  break;
                                              default:
                                                  e('');
                                          }
                                  }),
                                      t.open('GET', n, !0),
                                      t.send();
                              }))
                            : ''
                    );
                }),
                ee = t(58),
                ne = t.n(ee),
                te = t(59),
                oe = t.n(te),
                ie = t(60),
                ae = t.n(ie),
                re = t(30),
                se = t.n(re),
                le = t(10),
                ce = t.n(le),
                ue = t(61),
                de = t.n(ue),
                me = t(62),
                pe = t.n(me),
                ge = t(44),
                fe = t.n(ge),
                he = t(63),
                ye = t.n(he),
                _e = t(64),
                xe = t.n(_e),
                ve = t(65),
                we = t.n(ve),
                be = t(66),
                Ee = t.n(be),
                Pe = t(67),
                Ae = t.n(Pe),
                Te = t(68),
                Re = t.n(Te),
                Le = [
                    ['default', [ce.a, se.a, de.a].join('\n')],
                    ['logo.type:primary', Ee.a],
                    ['logo.type:alternative', pe.a],
                    ['logo.type:inline', fe.a],
                    ['logo.type:none', [fe.a, ye.a].join('\n')],
                    ['logo.position:right', xe.a],
                    ['logo.position:top', we.a],
                    ['logo.type:alternative && logo.position:top', Ae.a],
                    ['text.color:white', Re.a]
                ],
                Se = t(69),
                Oe = t.n(Se),
                Ie = t(70),
                Ne = t.n(Ie),
                Ce = t(71),
                Me = t.n(Ce),
                ze = t(45),
                ke = t.n(ze),
                je = t(72),
                We = t.n(je),
                He = t(73),
                Be = t.n(He),
                Ye = t(74),
                De = t.n(Ye),
                Ue = t(75),
                Ge = t.n(Ue),
                Fe = t(76),
                Ve = t.n(Fe),
                Ze = t(77),
                Ke = t.n(Ze),
                Je = t(78),
                qe = t.n(Je),
                Qe = t(79),
                $e = t.n(Qe),
                Xe = [
                    ['default', [ce.a, se.a, Oe.a].join('\n')],
                    ['ratio:1x1', Ne.a],
                    ['ratio:1x4', Me.a],
                    ['ratio:8x1', [ke.a, We.a].join('\n')],
                    ['ratio:20x1', [ke.a, Be.a].join('\n')],
                    ['color:blue', De.a],
                    ['color:gray', Ge.a],
                    ['color:black', Ke.a],
                    ['color:white', qe.a],
                    ['color:white-no-border', $e.a],
                    ['color:blue && ratio:1x4', Ve.a]
                ],
                en = t(80),
                nn = t.n(en),
                tn = t(81),
                on = t.n(tn),
                an = t(82),
                rn = t.n(an),
                sn = t(83),
                ln = t.n(sn),
                cn = t(84),
                un = t.n(cn),
                dn = t(85),
                mn = t.n(dn),
                pn = t(86),
                gn = t.n(pn),
                fn = t(87),
                hn = t.n(fn),
                yn = t(88),
                _n = t.n(yn),
                xn = t(89),
                vn = t.n(xn),
                wn = t(90),
                bn = t.n(wn),
                En = t(91),
                Pn = t.n(En),
                An = t(92),
                Tn = t.n(An),
                Rn = t(93),
                Ln = t.n(Rn),
                Sn = t(94),
                On = t.n(Sn),
                In = t(95),
                Nn = t.n(In),
                Cn = t(96),
                Mn = t.n(Cn),
                zn = t(97),
                kn = t.n(zn),
                jn = t(98),
                Wn = t.n(jn),
                Hn = t(99),
                Bn = {
                    x168x374: { styles: mn.a, vertical: !0 },
                    x765x60: { styles: _n.a },
                    x1000x50: { styles: vn.a, termsIcon: !0 },
                    x234x100: { styles: gn.a, reverseLogo: !0 },
                    x310x100: { styles: hn.a, reverseLogo: !0 },
                    x1000x36: { styles: bn.a, termsIcon: !0 },
                    x120x90: { styles: Tn.a, termsIcon: !0 },
                    x234x60: { styles: Ln.a, reverseLogo: !0, termsIcon: !0 },
                    x250x250: { styles: On.a, reverseLogo: !0, vertical: !0, termsIcon: !0 },
                    x300x50: { styles: Nn.a, reverseLogo: !0 },
                    x340x60: { styles: Pn.a, reverseLogo: !0 },
                    x468x60: { styles: Mn.a, reverseLogo: !0, termsIcon: !0 },
                    x728x90: { styles: kn.a, reverseLogo: !0 },
                    x540x200: { styles: Wn.a, reverseLogo: !0, termsIcon: !0 },
                    x170x100: { styles: t.n(Hn).a, termsIcon: !0 }
                },
                Yn = Object.keys(Bn).map(function(e) {
                    var n = Bn[e],
                        t = e.slice(1),
                        o = t.split('x'),
                        i = o[1],
                        a =
                            '\n        .message {\n            width: ' +
                            o[0] +
                            'px;\n            min-height: ' +
                            i +
                            'px;\n        }\n\n        .message__container {\n            min-height: ' +
                            i +
                            'px;\n        }\n    ';
                    return (
                        n.vertical && (a = '' + a + rn.a),
                        n.reverseLogo && (a = '' + a + on.a),
                        n.vertical && n.reverseLogo && (a = '' + a + ln.a),
                        n.termsIcon && (a = '' + a + un.a),
                        ['size:' + t, a]
                    );
                }),
                Dn = Object.keys(Bn).map(function(e) {
                    return ['size:' + e.slice(1), Bn[e].styles];
                }),
                Un = [['default', [ce.a, nn.a].join('\n')]].concat(Yn, Dn),
                Gn = t(100),
                Fn = {
                    'layout:text': Le,
                    'layout:flex': Xe,
                    'layout:legacy': Un,
                    'layout:custom': [['default', [ce.a, t.n(Gn).a].join('\n')]]
                },
                Vn = {
                    PRIMARY: {
                        COLOR: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_fc_pri.svg',
                            453,
                            152
                        ],
                        WHITE: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_wh_pri.svg',
                            453,
                            152
                        ]
                    },
                    ALTERNATIVE: {
                        COLOR: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_fc_alt.svg',
                            573,
                            80
                        ],
                        WHITE: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_wh_alt.svg',
                            573,
                            80
                        ]
                    },
                    ALT_NO_PP: {
                        COLOR: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_fc_alt_noPP.svg',
                            477,
                            64
                        ],
                        WHITE: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_wh_alt_noPP.svg',
                            477,
                            64
                        ]
                    }
                };
            function Zn(e) {
                return (
                    '\n    .message__headline span.multi:nth-child(2) {\n        display: none;\n    }\n\n    @media (min-width: ' +
                    e +
                    'px) {\n        .message__headline span.multi:first-child {\n            display: none;\n            \n        }\n\n        .message__headline span.multi:nth-child(2) {\n            display: inline;\n            \n        }\n    }\n'
                );
            }
            var Kn = [
                    [
                        'default',
                        {
                            logo: Vn.PRIMARY.COLOR,
                            headline: 'medium',
                            subHeadline: 'small',
                            disclaimer: 'legacy-medium'
                        }
                    ],
                    [
                        'size:1000x36',
                        {
                            styles: [
                                '.message__sub-headline { color: #009cde }',
                                '.message__headline { display: block }'
                            ]
                        }
                    ],
                    ['size:234x100', { logo: Vn.PRIMARY.WHITE }],
                    ['size:310x100', { logo: Vn.PRIMARY.WHITE }],
                    ['size:340x60', { logo: Vn.PRIMARY.WHITE, styles: ['.message { max-width: 100% }'] }]
                ],
                Jn = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [
                                    Zn(290),
                                    '.message__messaging { flex: 1 1 auto; }',
                                    '@media (max-width: 289px) { .message__disclaimer { display: block; } }'
                                ],
                                logo: Vn.PRIMARY.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }],
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 320] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [200, 1e3],
                                styles: [Zn(280)],
                                logo: Vn.ALT_NO_PP.COLOR,
                                headline: [
                                    { tag: 'xsmall', replace: [['time.', 'time']] },
                                    { tag: 'medium', br: ['purchases'] }
                                ]
                            }
                        ],
                        [
                            'logo.type:none',
                            {
                                messageWidth: [180, 1e3],
                                styles: [Zn(280)],
                                logo: !1,
                                headline: [
                                    { tag: 'xsmall', replace: [['time.', 'time']], br: ['time'] },
                                    { tag: 'medium', br: ['purchases'] }
                                ]
                            }
                        ],
                        [
                            'logo.type:alternative',
                            {
                                styles: [Zn(520)],
                                logo: Vn.ALTERNATIVE.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }]
                            }
                        ],
                        ['logo.type:primary && logo.position:top', { styles: [Zn(210)] }],
                        ['logo.type:alternative && logo.position:top', { styles: [Zn(210)] }],
                        ['text.color:white && logo.type:primary', { logo: Vn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Vn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Vn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }],
                                disclaimer: 'xsmall'
                            }
                        ],
                        [
                            'ratio:1x1',
                            {
                                headline: ['xsmall', 'medium'],
                                styles: ['@media (min-width: 150px) { .message__headline { font-size: 8vw } }']
                            }
                        ],
                        [
                            'ratio:1x4',
                            {
                                headline: { tag: 'medium', br: ['months'] },
                                styles: [
                                    '.message__logo-container { margin-bottom: 30%; }',
                                    '.message__disclaimer span.multi:nth-of-type(1) { display: none; }',
                                    '.message__headline { font-size: 1.1rem }'
                                ],
                                disclaimer: ['xlarge', 'xsmall']
                            }
                        ],
                        ['color:gray', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Vn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': Kn
                },
                qn = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [Zn(320)],
                                logo: Vn.PRIMARY.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'], replace: [['99+', '99+.']] }],
                                disclaimer: ['extra', 'xsmall']
                            }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 320] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [240, 1e3],
                                styles: [Zn(290)],
                                logo: Vn.ALT_NO_PP.COLOR,
                                headline: [
                                    { tag: 'xsmall', replace: [['time.', 'time']], br: ['time'] },
                                    { tag: 'medium', br: ['purchases'] }
                                ]
                            }
                        ],
                        [
                            'logo.type:none',
                            {
                                messageWidth: [220, 1e3],
                                styles: [Zn(290)],
                                logo: !1,
                                headline: [
                                    { tag: 'xsmall', replace: [['time.', 'time']], br: ['time'] },
                                    { tag: 'medium', br: ['purchases'] }
                                ]
                            }
                        ],
                        [
                            'logo.type:alternative',
                            {
                                styles: [Zn(570)],
                                logo: Vn.ALTERNATIVE.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'], replace: [['99+', '99+.']] }]
                            }
                        ],
                        [
                            'logo.type:alternative && logo.position:top',
                            {
                                styles: [Zn(230)],
                                messageWidth: [150, 320],
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }]
                            }
                        ],
                        ['logo.type:primary && logo.position:top', { styles: [Zn(235)] }],
                        ['text.color:white && logo.type:primary', { logo: Vn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Vn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Vn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }],
                                disclaimer: ['extra.2', 'small']
                            }
                        ],
                        [
                            'ratio:1x1',
                            {
                                headline: ['xsmall', 'medium'],
                                styles: ['@media (min-width: 150px) { .message__headline { font-size: 8vw } }']
                            }
                        ],
                        [
                            'ratio:1x4',
                            {
                                headline: { tag: 'medium', br: ['months'] },
                                styles: [
                                    '.message__logo-container { margin-bottom: 30%; }',
                                    '.message__disclaimer span.multi:nth-of-type(1) { display: none; }',
                                    '.message__headline { font-size: 1.1rem }'
                                ],
                                disclaimer: ['xlarge', 'extra.2', 'small']
                            }
                        ],
                        ['color:gray', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Vn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': Kn
                },
                Qn = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [
                                    '.message__headline > span:first-of-type { text-decoration: underline; color: #0076ff; font-weight: 600; }',
                                    '.message__disclaimer > span { color: #2c2e2f; text-decoration: none; }'
                                ],
                                logo: Vn.PRIMARY.COLOR,
                                headline: { tag: 'small', br: ['months', 'APR'] },
                                disclaimer: 'xsmall.2'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: 190 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [255, 1e3], logo: Vn.ALT_NO_PP.COLOR, headline: { br: ['APR'] } }
                        ],
                        ['logo.type:none', { messageWidth: [240, 1e3], logo: !1, headline: { br: ['APR'] } }],
                        [
                            'logo.type:alternative',
                            { logo: Vn.ALTERNATIVE.COLOR, headline: { replace: [['APR', 'APR.']], br: ['APR.'] } }
                        ],
                        [
                            'text.color:white',
                            {
                                styles: [
                                    '.message__headline > span:first-of-type { text-decoration: underline; color: white; font-weight: 600; }',
                                    '.message__disclaimer > span { color: white; text-decoration: none; }'
                                ]
                            }
                        ],
                        ['text.color:white && logo.type:primary', { logo: Vn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Vn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Vn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: { tag: 'small', br: ['over', 'at', 'APR'] },
                                subHeadline: 'small',
                                disclaimer: ['xsmall.2', 'xsmall']
                            }
                        ],
                        [
                            'ratio:1x4',
                            { headline: { br: ['over', 'at', 'APR'] }, subHeadline: { tag: 'small', br: ['money'] } }
                        ],
                        [
                            'ratio:20x1',
                            {
                                styles: [
                                    '@media (min-aspect-ratio: 200/11) and (max-width: 475px) { .message__headline { font-size: 0.7rem; } }'
                                ]
                            }
                        ],
                        ['color:gray', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Vn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        ['default', { logo: Vn.PRIMARY.WHITE, headline: 'legacy-small', disclaimer: 'legacy-large' }],
                        ['size:1000x36', { logo: Vn.PRIMARY.COLOR }],
                        [
                            'size:120x90',
                            {
                                logo: !1,
                                styles: [
                                    '.message__disclaimer { line-height: 12px }',
                                    '.message__headline { font-size: 12px }'
                                ]
                            }
                        ],
                        [
                            'size:234x60',
                            {
                                disclaimer: 'legacy-medium',
                                styles: [
                                    '.message__disclaimer { font-size: 9px }',
                                    '.message__messaging { padding-top: 5px }'
                                ]
                            }
                        ],
                        [
                            'size:250x250',
                            {
                                disclaimer: 'legacy-medium',
                                styles: [
                                    '.message__disclaimer { font-size: 10px }',
                                    '.message__headline { margin-bottom: 20px }'
                                ]
                            }
                        ],
                        [
                            'size:300x50',
                            {
                                styles: [
                                    '.message__headline { font-size: 13px }',
                                    '.message__disclaimer { font-size: 11px }'
                                ]
                            }
                        ],
                        [
                            'size:340x60',
                            {
                                disclaimer: 'legacy-medium',
                                styles: [
                                    '.message__headline { font-size: 13px }',
                                    '.message__messaging { padding: 7px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:468x60',
                            {
                                styles: [
                                    '.message__headline { font-size: 14px; margin-bottom: 5px }',
                                    '.message__disclaimer { font-size: 10px }',
                                    '.message__messaging { padding: 14px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:728x90',
                            {
                                styles: [
                                    '.message__headline { font-size: 20px }',
                                    '.message__disclaimer { font-size: 11px }',
                                    '.message__messaging { padding: 23px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:540x200',
                            {
                                subHeadline: 'legacy-medium',
                                disclaimer: 'legacy-medium.2',
                                styles: ['.message__headline { padding-right: 40px; }']
                            }
                        ],
                        [
                            'size:170x100',
                            {
                                logo: !1,
                                styles: [
                                    '.message__disclaimer { font-size: 9px; }',
                                    '.message__headline { font-size: 15px; line-height: 1.2em; }'
                                ]
                            }
                        ]
                    ]
                },
                $n = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [
                                    '.message__headline > span:not(:nth-of-type(2)) { text-decoration: underline; color: #0076ff; font-weight: 600; }',
                                    '.message__disclaimer > span { color: #2c2e2f; text-decoration: none; }'
                                ],
                                logo: Vn.PRIMARY.COLOR,
                                headline: { tag: 'xsmall', br: ['months'] },
                                disclaimer: 'xsmall.2'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: 130 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [250, 1e3], logo: Vn.ALT_NO_PP.COLOR, headline: { br: ['months'] } }
                        ],
                        ['logo.type:none', { messageWidth: [235, 1e3], logo: !1, headline: { br: ['months'] } }],
                        [
                            'logo.type:alternative',
                            {
                                logo: Vn.ALTERNATIVE.COLOR,
                                headline: { replace: [['months', 'months.']], br: ['months.'] }
                            }
                        ],
                        [
                            'text.color:white',
                            {
                                styles: [
                                    '.message__headline > span:first-of-type { text-decoration: underline; color: white; font-weight: 600; }',
                                    '.message__disclaimer > span { color: white; text-decoration: none; }'
                                ]
                            }
                        ],
                        ['text.color:white && logo.type:primary', { logo: Vn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Vn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Vn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: { tag: 'small', br: ['over'] },
                                subHeadline: 'small',
                                disclaimer: ['xsmall.2', 'xsmall']
                            }
                        ],
                        [
                            'ratio:1x4',
                            { headline: { br: ['over', 'months'] }, subHeadline: { tag: 'xsmall', br: ['money'] } }
                        ],
                        ['color:gray', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Vn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        ['default', { logo: Vn.PRIMARY.WHITE, headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:1000x36', { logo: Vn.PRIMARY.COLOR }],
                        [
                            'size:120x90',
                            {
                                logo: !1,
                                styles: [
                                    '.message__disclaimer { line-height: 12px }',
                                    '.message__headline { font-size: 12px }'
                                ]
                            }
                        ],
                        [
                            'size:234x60',
                            {
                                disclaimer: 'legacy-medium.2',
                                styles: [
                                    '.message__disclaimer { font-size: 9px }',
                                    '.message__messaging { padding-top: 5px }'
                                ]
                            }
                        ],
                        [
                            'size:250x250',
                            {
                                styles: [
                                    '.message__disclaimer { font-size: 10px }',
                                    '.message__headline { margin-bottom: 20px }'
                                ],
                                disclaimer: 'legacy-medium.2'
                            }
                        ],
                        [
                            'size:300x50',
                            {
                                styles: [
                                    '.message__headline { font-size: 13px }',
                                    '.message__disclaimer { font-size: 11px }'
                                ]
                            }
                        ],
                        [
                            'size:340x60',
                            {
                                styles: [
                                    '.message__headline { font-size: 13px }',
                                    '.message__messaging { padding: 7px 0 }'
                                ],
                                disclaimer: 'legacy-medium.2'
                            }
                        ],
                        [
                            'size:468x60',
                            {
                                styles: [
                                    '.message__headline { font-size: 14px; margin-bottom: 5px }',
                                    '.message__disclaimer { font-size: 10px }',
                                    '.message__messaging { padding: 14px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:728x90',
                            {
                                styles: [
                                    '.message__headline { font-size: 20px }',
                                    '.message__disclaimer { font-size: 11px }',
                                    '.message__messaging { padding: 23px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:540x200',
                            {
                                subHeadline: 'legacy-medium',
                                disclaimer: 'legacy-medium.2',
                                styles: ['.message__headline { padding-right: 40px; }']
                            }
                        ],
                        [
                            'size:170x100',
                            {
                                logo: !1,
                                styles: [
                                    '.message__disclaimer { font-size: 9px; }',
                                    '.message__headline { font-size: 15px; line-height: 1.2em; }'
                                ]
                            }
                        ]
                    ]
                },
                Xn = {
                    'layout:text': [
                        [
                            'default',
                            { logo: Vn.PRIMARY.COLOR, headline: { tag: 'small', br: ['/mo'] }, disclaimer: 'small' }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 200] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [200, 1e3],
                                logo: Vn.ALT_NO_PP.COLOR,
                                headline: { br: ['APR'], replace: [['APR.', 'APR']] }
                            }
                        ],
                        [
                            'logo.type:none',
                            {
                                messageWidth: [200, 1e3],
                                logo: !1,
                                headline: { replace: [['APR.', 'APR']], br: ['APR'] }
                            }
                        ],
                        ['logo.type:alternative', { messageWidth: [140, 430], logo: Vn.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: Vn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Vn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Vn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: { tag: 'medium', br: ['low as', 'at'] },
                                subHeadline: 'small',
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['ratio:1x4', { subHeadline: { tag: 'small', br: ['money'] } }],
                        ['color:gray', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Vn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: 'legacy-medium',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-small'
                            }
                        ],
                        ['size:1000x36', { logo: Vn.PRIMARY.COLOR, disclaimer: 'legacy-medium' }],
                        ['size:120x90', { logo: !1, headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:234x60', { headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:300x50', { disclaimer: 'legacy-medium' }],
                        ['size:468x60', { disclaimer: 'legacy-medium' }],
                        ['size:250x250', { headline: 'legacy-large' }],
                        ['size:728x90', { headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:540x200', { disclaimer: 'legacy-medium' }],
                        ['size:170x100', { logo: !1, headline: 'legacy-small', disclaimer: 'legacy-medium' }]
                    ]
                },
                et = {
                    'layout:text': [
                        ['default', { logo: Vn.PRIMARY.COLOR, headline: { tag: 'xsmall' }, disclaimer: 'xsmall' }],
                        ['logo.type:primary', { messageWidth: 130 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [195, 1e3], logo: Vn.ALT_NO_PP.COLOR, headline: { br: ['/mo'] } }
                        ],
                        ['logo.type:none', { messageWidth: [175, 1e3], logo: !1, headline: { br: ['/mo'] } }],
                        ['logo.type:alternative', { logo: Vn.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: Vn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Vn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Vn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: { tag: 'small', br: ['low as'] },
                                subHeadline: 'small',
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['ratio:1x4', { subHeadline: { tag: 'small', br: ['money'] } }],
                        ['color:gray', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Vn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: 'legacy-xsmall',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: Vn.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1 }],
                        ['size:250x250', { disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:540x200', { styles: ['.message__messaging { padding-top: 45px; }'] }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                },
                nt = {
                    'layout:text': [
                        [
                            'default',
                            { logo: Vn.PRIMARY.COLOR, headline: { tag: 'small', br: ['/mo'] }, disclaimer: 'xsmall' }
                        ],
                        ['logo.type:primary', { messageWidth: [190, 240] }],
                        [
                            'logo.type:inline',
                            { messageWidth: [260, 1e3], logo: Vn.ALT_NO_PP.COLOR, headline: { br: ['APR'] } }
                        ],
                        ['logo.type:none', { messageWidth: [260, 1e3], logo: !1, headline: { br: ['APR'] } }],
                        ['logo.type:alternative', { logo: Vn.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: Vn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Vn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Vn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: { tag: 'small', br: [' of', 'at'] },
                                subHeadline: 'small',
                                disclaimer: 'xsmall'
                            }
                        ],
                        [
                            'ratio:1x4',
                            { headline: { br: ['payments', 'mo'] }, subHeadline: { tag: 'small', br: ['money'] } }
                        ],
                        [
                            'ratio:20x1',
                            {
                                styles: [
                                    '@media (min-aspect-ratio: 200/11) and (max-width: 475px) { .message__headline { font-size: 0.75rem; } }'
                                ]
                            }
                        ],
                        ['color:gray', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Vn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: 'legacy-small',
                                subHeadline: 'legacy-xlarge',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: Vn.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1, headline: 'legacy-xsmall' }],
                        ['size:234x60', { headline: 'legacy-xsmall', disclaimer: 'legacy-medium.2' }],
                        ['size:250x250', { headline: 'legacy-small.2', disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:728x90', { headline: 'legacy-xsmall' }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                },
                tt = {
                    'layout:text': [
                        ['default', { logo: Vn.PRIMARY.COLOR, headline: { tag: 'small' }, disclaimer: 'xsmall' }],
                        ['logo.type:primary', { messageWidth: [140, 210] }],
                        [
                            'logo.type:inline',
                            { messageWidth: [200, 1e3], logo: Vn.ALT_NO_PP.COLOR, headline: { br: ['/mo'] } }
                        ],
                        ['logo.type:none', { messageWidth: [200, 1e3], logo: !1, headline: { br: ['/mo'] } }],
                        ['logo.type:alternative', { logo: Vn.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: Vn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Vn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Vn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: { tag: 'small', br: ['of'] },
                                subHeadline: 'small',
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['ratio:1x4', { headline: { br: ['payments'] }, subHeadline: { tag: 'small', br: ['money'] } }],
                        ['color:gray', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white', { logo: Vn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Vn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: Vn.PRIMARY.WHITE,
                                headline: 'legacy-xsmall',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: Vn.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1 }],
                        ['size:250x250', { disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:540x200', { styles: ['.message__messaging { padding-top: 45px; }'] }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                };
            function ot(e, n) {
                var t = d()(e, function(e) {
                    var t = e[1];
                    return p()(t, n);
                });
                if (t) return t[0];
                if ($()(n, '.')) {
                    var o = n.split('.', 1)[0];
                    if (
                        (t = d()(e, function(e) {
                            var n = e[1];
                            return p()(n, o);
                        }))
                    )
                        return t[0];
                }
                return d()(e, function(e) {
                    var n = e[1];
                    return p()(n, 'default');
                })[0];
            }
            var it = document.createElement('div');
            it.innerHTML = oe.a;
            var at = document.createElement('div');
            function rt(e) {
                return e
                    .reduce(function(e, n) {
                        return [].concat(e, [n, document.createTextNode(' ')]);
                    }, [])
                    .slice(0, -1);
            }
            function st(e, n) {
                void 0 === n && (n = {});
                var t,
                    o,
                    i,
                    a = (Array.isArray(e) ? e : [e]).map(function(e) {
                        var n = document.createElement('span');
                        return (
                            Array.isArray(e) ? ((n.textContent = e[0]), (n.className = e[1])) : (n.textContent = e), n
                        );
                    });
                return (
                    n.replace &&
                        ((t = n.replace),
                        a.forEach(function(e) {
                            var n = t.reduce(function(e, n) {
                                return e.replace(n[0], n[1]);
                            }, e.textContent);
                            e.textContent = n;
                        })),
                    n.br &&
                        ((o = a),
                        (i = [].concat(n.br)),
                        o.forEach(function(e) {
                            for (var n = e.textContent, t = []; $()(n, i[0]); ) t.push(i[0]), i.shift();
                            if (0 === t.length || (1 === t.length && ne()(n, t[0]))) return e.classList.add('br');
                            var o = document.createElement('span');
                            (o.textContent = n), (o.className = 'br');
                            var a = t.reduce(
                                function(e, n) {
                                    var t = (function(e, n) {
                                        var t = e.textContent,
                                            o = t.indexOf(n) + n.length,
                                            i = e.cloneNode();
                                        if (((i.textContent = t.slice(0, o).trim()), t.length !== o)) {
                                            var a = e.cloneNode();
                                            return (a.textContent = t.slice(o).trim()), [i, a];
                                        }
                                        return [i];
                                    })(e[e.length - 1], n);
                                    return [].concat(e.slice(0, -1), t);
                                },
                                [o]
                            );
                            return (
                                (e.innerHTML = ''),
                                a.forEach(function(n) {
                                    e.appendChild(n), e.appendChild(document.createTextNode(' '));
                                })
                            );
                        })),
                    rt(a)
                );
            }
            at.innerHTML = ae.a;
            var lt = y(function(e, n, t) {
                    return (
                        !1 !== t &&
                        ('string' != typeof t && 'object' != typeof t
                            ? null
                            : rt(
                                  (o = 'string' == typeof t ? [{ tag: t }] : Array.isArray(t) ? t : [t]).map(function(
                                      t
                                  ) {
                                      var i,
                                          a = document.createElement('span');
                                      if ((o.length > 1 && a.setAttribute('class', 'multi'), 'string' == typeof t))
                                          (i = st(ot(e[n], t))), a.classList.add('tag--' + t.split('.', 1)[0]);
                                      else {
                                          var r = t.tag,
                                              s = N(t, ['tag']);
                                          (i = st(ot(e[n], r), s)), a.classList.add('tag--' + r.split('.', 1)[0]);
                                      }
                                      return (
                                          i.forEach(function(e) {
                                              return a.appendChild(e);
                                          }),
                                          a
                                      );
                                  })
                              ))
                    );
                    var o;
                }),
                ct = y(function(e, n, t) {
                    return t.reduce(
                        function(t, o) {
                            var i = o[0],
                                a = o[1],
                                r = i.split(' && ');
                            return 'default' === i ||
                                r.every(function(n) {
                                    return p()(e, n);
                                })
                                ? n === Array
                                    ? [].concat(t, [a])
                                    : E(t, a)
                                : t;
                        },
                        n === Array ? [] : {}
                    );
                }),
                ut = {
                    getTemplateNode: g(function(e, n) {
                        var t = P(e, 'style.layout');
                        if ('custom' === t)
                            return (function(e) {
                                var n = e.data,
                                    t = e.meta,
                                    o = e.template,
                                    i = document.createElement('div'),
                                    r = t.offerType;
                                if ('' === o) return i;
                                try {
                                    var s = o.replace(/{{\s*?([^\s]+?)\s*?}}/g, function(e, t) {
                                        var o = t.split('.'),
                                            i = o[0],
                                            a = o.slice(1).join('.');
                                        if ('logo' === i) {
                                            var r = document.createElement('div');
                                            return I(r, P(Vn, a.toUpperCase()), 'PayPal Credit logo'), r.innerHTML;
                                        }
                                        return st(ot(n[i], a)).reduce(function(e, n) {
                                            return '' + e + (n.outerHTML || ' ');
                                        }, '');
                                    });
                                    (i.innerHTML = s),
                                        d()(a()(i.children), function(e) {
                                            return 'STYLE' !== e.tagName;
                                        }).classList.add('offer--' + r.replace(/:/g, '-').toLowerCase());
                                } catch (e) {}
                                return i;
                            })(n);
                        var o = P(e, 'style._flattened'),
                            i = P(n, 'meta.offerType'),
                            r = P(n, 'data');
                        if ('legacy' === t) {
                            var s = P(e, 'style.typeNI'),
                                l = P(e, 'style.typeEZP'),
                                c = 'NI' === i.split(':')[0] ? s : l;
                            if ('image' === c)
                                return (function(e, n) {
                                    var t = n.meta,
                                        o = at.cloneNode(!0),
                                        i = R('pp-legacy', o),
                                        a = ['link', 'pixel'].map(i),
                                        r = a[0],
                                        s = a[1],
                                        l = P(e, 'size'),
                                        c = P(e, 'color'),
                                        u = P(e, 'border');
                                    r.setAttribute('href', t.clickUrl), s.setAttribute('href', t.impressionUrl);
                                    var d = 'https://www.paypalobjects.com/upstream/assets/messaging/legacy',
                                        m = 'none' === c ? '' : '-' + c + (!0 === u ? '' : '-no-border'),
                                        p = ('none' === c ? 'v1' : 'v2') + '/' + l.replace(/x/, '-') + m,
                                        g = [1, 1.5, 2].map(function(e) {
                                            return d + '/' + p + '@' + e + 'x.png ' + e + 'x';
                                        });
                                    return I(r, d + '/' + p + '@1x.png', 'PayPal Credit Message', g.join(', ')), o;
                                })(e.style, n);
                            if (!c) throw new Error(J.MESSAGE_INVALID_LEGACY);
                        }
                        var u = ct(o),
                            m = u(
                                Object,
                                (function(e, n) {
                                    switch (e) {
                                        case 'EZP:ANY:EQZ':
                                            return Qn[n];
                                        case 'EZP:ANY:GTZ':
                                            return $n[n];
                                        case 'PALA:MULTI:EQZ':
                                            return Xn[n];
                                        case 'PALA:MULTI:GTZ':
                                            return et[n];
                                        case 'PALA:SINGLE:EQZ':
                                            return nt[n];
                                        case 'PALA:SINGLE:GTZ':
                                            return tt[n];
                                        case 'NI:NON-US':
                                            return qn[n];
                                        case 'NI':
                                        default:
                                            return Jn[n];
                                    }
                                })(i, 'layout:' + t)
                            ),
                            p = u(Array, Fn['layout:' + t]),
                            g = lt(r),
                            f = it.cloneNode(!0),
                            h = R('message', f),
                            y = ['logo-container', 'headline', 'sub-headline', 'disclaimer'].map(h),
                            _ = y[0],
                            x = y[1],
                            v = y[2],
                            w = y[3];
                        if (
                            (S(x, g('headline', m.headline)),
                            S(v, g('subHeadline', m.subHeadline)),
                            O(w, g('disclaimer', m.disclaimer)),
                            I(_, m.logo, 'PayPal Credit logo'),
                            'inline' === P(e, 'style.logo.type') && x.appendChild(_),
                            'none' === P(e, 'style.logo.type'))
                        ) {
                            var b = document.createElement('span');
                            b.textContent = 'with ';
                            var E = document.createElement('strong');
                            (E.textContent = 'PayPal Credit.'),
                                b.appendChild(E),
                                x.appendChild(document.createTextNode(' ')),
                                x.appendChild(b);
                        }
                        m.messageWidth &&
                            ('number' == typeof m.messageWidth
                                ? p.push('.message__messaging { width: ' + m.messageWidth + 'px }')
                                : Array.isArray(m.messageWidth) &&
                                  p.push(
                                      '.message__messaging { min-width: ' +
                                          m.messageWidth[0] +
                                          'px; max-width: ' +
                                          m.messageWidth[1] +
                                          'px }'
                                  ));
                        var A = function(n) {
                            return 'legacy' === t ? n.replace(/\.message/g, '[data-pp-id="' + e.id + '"] .message') : n;
                        };
                        return m.styles && L(f, A(m.styles.join(''))), L(f, A(p.join('\n'))), f;
                    })
                },
                dt = t(31),
                mt = t.n(dt),
                pt = { click: new Map(), scroll: new Map(), hover: new Map(), resize: new Map() };
            function gt(e) {
                pt.resize.has(e.target.frameElement) && pt.resize.get(e.target.frameElement)(e);
            }
            function ft(e) {
                pt.scroll.forEach(function(n) {
                    return n(e);
                });
            }
            function ht(e) {
                pt.hover.has(e.target) && pt.hover.get(e.target)(e);
            }
            function yt(e) {
                e.target.ownerDocument && pt.click.has(e.target.ownerDocument.defaultView.frameElement)
                    ? pt.click.get(e.target.ownerDocument.defaultView.frameElement)(e)
                    : pt.click.has(e.currentTarget) && e.currentTarget !== e.target && pt.click.get(e.currentTarget)(e);
            }
            function _t(e) {
                return {
                    on: function(n, t) {
                        ('IFRAME' !== e.tagName && 'resize' === n) ||
                            (function(e, n, t) {
                                if (
                                    ((function(e, n) {
                                        'scroll' === e && 0 === pt.scroll.size
                                            ? window.addEventListener('scroll', ft)
                                            : 'hover' === e && 0 === pt.hover.size
                                            ? document.addEventListener('mouseover', ht)
                                            : 'resize' !== e || pt[e].has(n)
                                            ? 'click' !== e ||
                                              pt[e].has(n) ||
                                              ('IFRAME' === n.tagName
                                                  ? n.contentWindow.document.body.addEventListener('click', yt)
                                                  : n.addEventListener('click', yt))
                                            : n.contentWindow.addEventListener('resize', gt);
                                    })(e, n),
                                    pt[e].has(n))
                                ) {
                                    var o = pt[e].get(n);
                                    pt[e].set(n, function(e) {
                                        o(e), t(e);
                                    });
                                } else pt[e].set(n, t);
                            })(n, e, t);
                    },
                    clear: function(n) {
                        pt[n].delete(e),
                            'scroll' === n && 0 === pt.scroll.size
                                ? window.removeEventListener('scroll', ft)
                                : 'hover' === n && 0 === pt.hover.size
                                ? document.removeEventListener('mouseover', ht)
                                : 'click' === n
                                ? 'IFRAME' === e.tagName
                                    ? e.contentWindow.document.body.removeEventListener('click', yt)
                                    : e.removeEventListener('click', yt)
                                : 'IFRAME' === e.tagName &&
                                  'resize' === n &&
                                  e.contentWindow.removeEventListener('resize', gt);
                    }
                };
            }
            var xt = y(function(e, n) {
                return z.ZalgoPromise.resolve(
                    'IFRAME' === e.tagName &&
                        'complete' !== e.contentWindow.document.readyState &&
                        new z.ZalgoPromise(function(n) {
                            return e.addEventListener('load', n);
                        })
                ).then(function() {
                    var t,
                        o,
                        i = 'IFRAME' === e.tagName ? e.contentWindow.document : document,
                        r =
                            'string' == typeof n
                                ? ((t = n), ((o = i.createElement('div')).innerHTML = t), o)
                                : i.importNode(n, !0),
                        s = a()(r.getElementsByTagName('img'))
                            .filter(function(e) {
                                return !e.complete;
                            })
                            .map(function(e) {
                                return new z.ZalgoPromise(function(n) {
                                    return e.addEventListener('load', n);
                                });
                            });
                    return (
                        a()(r.getElementsByTagName('style')).forEach(function(e) {
                            var n = i.createElement('style');
                            (n.textContent = e.textContent),
                                e.parentNode.insertBefore(n, e),
                                e.parentNode.removeChild(e);
                        }),
                        a()(r.getElementsByTagName('script')).forEach(function(e) {
                            var n = i.createElement('script');
                            (n.text = e.text), e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e);
                        }),
                        z.ZalgoPromise.all(s).then(function() {
                            return new z.ZalgoPromise(function(n) {
                                requestAnimationFrame(function() {
                                    for (var t = 'IFRAME' === e.tagName ? i.body : e; t.firstChild; )
                                        t.removeChild(t.firstChild);
                                    a()(r.children).forEach(function(e) {
                                        return t.appendChild(e);
                                    }),
                                        n();
                                });
                            });
                        })
                    );
                });
            }, 2);
            function vt(e) {
                var n = e.getBoundingClientRect(),
                    t = (n.top + n.bottom) / 2,
                    o = (n.left + n.right) / 2;
                return !(t > window.innerHeight || t < 0 || o > window.innerWidth || o < 0);
            }
            var wt = y(function(e, n) {
                    var t = n.options.amount,
                        o = n.events,
                        i = n.track,
                        a = e.getBoundingClientRect(),
                        r = {
                            et: 'CLIENT_IMPRESSION',
                            event_type: 'stats',
                            pos_x: Math.round(a.left),
                            pos_y: Math.round(a.top),
                            browser_width: window.innerWidth,
                            browser_height: window.innerHeight,
                            visible: vt(e),
                            amount: t
                        };
                    r.visible ||
                        o.on('scroll', function() {
                            vt(e) &&
                                (o.clear('scroll'), i({ et: 'CLIENT_IMPRESSION', event_type: 'scroll', visible: !0 }));
                        }),
                        (function() {
                            var e = window.document.body.appendChild(window.document.createElement('div'));
                            e.setAttribute(
                                'class',
                                'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links'
                            ),
                                e.setAttribute(
                                    'style',
                                    'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
                                );
                            var n = void 0 !== window.getComputedStyle ? window.getComputedStyle(e) : void 0;
                            return new z.ZalgoPromise(function(t) {
                                !(function o(i) {
                                    return i <= 0
                                        ? (window.document.body.removeChild(e), t(!1))
                                        : null !== window.document.body.getAttribute('abp') ||
                                          (n &&
                                              ('none' === n.getPropertyValue('display') ||
                                                  'hidden' === n.getPropertyValue('visibility'))) ||
                                          null === e.offsetParent ||
                                          0 === e.offsetHeight ||
                                          0 === e.offsetLeft ||
                                          0 === e.offsetTop ||
                                          0 === e.offsetWidth ||
                                          0 === e.clientHeight ||
                                          0 === e.clientWidth
                                        ? (window.document.body.removeChild(e), t(!0))
                                        : setTimeout(function() {
                                              o(i - 1);
                                          }, 50);
                                })(5);
                            });
                        })().then(function(n) {
                            (r.adblock = n),
                                (r.blocked = (function(e) {
                                    if ('function' == typeof window.getComputedStyle) {
                                        var n = window.getComputedStyle(e);
                                        if (
                                            'none' === n.getPropertyValue('display') ||
                                            'hidden' === n.getPropertyValue('visibility') ||
                                            'auto' !== n.getPropertyValue('clip')
                                        )
                                            return !0;
                                    }
                                    var t = e.getBoundingClientRect();
                                    return (
                                        t.left > window.document.body.scrollWidth ||
                                        t.right < 0 ||
                                        t.top > window.document.body.scrollHeight ||
                                        t.bottom < 0 ||
                                        0 === e.offsetWidth ||
                                        0 === e.offsetHeight
                                    );
                                })(e)),
                                i(r, e.hasAttribute('data-pp-message-hidden')),
                                i('MORS_IMPRESSION');
                        }),
                        o.on('click', function() {
                            i({ et: 'CLICK', event_type: 'click', link: 'Banner Wrapper' }), i('MORS_CLICK');
                        }),
                        o.on('hover', function() {
                            i({ et: 'CLIENT_IMPRESSION', event_type: 'hover' }), o.clear('hover');
                        });
                }),
                bt = {
                    '1x1': [{ ratio: '1x1', width: [120, 300] }],
                    '1x4': [
                        { ratio: '1x2', width: [160, 160] },
                        { ratio: '1x4', breakpoint: 768 }
                    ],
                    '8x1': [
                        { ratio: '6x1', width: [250, 768] },
                        { ratio: '8x1', breakpoint: 768 }
                    ],
                    '20x1': [
                        { ratio: '6x1', width: [250, 768] },
                        { ratio: '20x1', width: [350, 1169], breakpoint: 768 }
                    ]
                };
            function Et(e) {
                if ('number' == typeof e) return e + 'px';
                if ('string' == typeof e) {
                    var n = e.match(/^(\d+)x(\d+)$/);
                    if (n)
                        return (
                            100 *
                                n.slice(1).reduce(function(e, n) {
                                    return +n / +e;
                                }) +
                            '%'
                        );
                }
                return e;
            }
            function Pt(e) {
                var n = e.split(/(?=[@[])/),
                    t = n[0],
                    o = n.slice(1);
                return t.match(/\d+x\d+/)
                    ? o.reduce(
                          function(e, n) {
                              return (
                                  s()(n, '@')
                                      ? (e.breakpoint = n.slice(1))
                                      : s()(n, '[') && (e.width = n.slice(1, -1).split(',')),
                                  e
                              );
                          },
                          { ratio: t }
                      )
                    : {};
            }
            var At = y(function(e, n) {
                var t = n.wrapper,
                    o = n.options,
                    i = n.logger,
                    a = n.meta;
                if ('IFRAME' === e.tagName) {
                    var r,
                        s,
                        l = P(o, 'style.layout'),
                        c = P(o, 'style.ratio');
                    if (('flex' !== l && 'custom' !== l) || !c) {
                        var u = a.minWidth;
                        e.setAttribute('style', 'width: 100%; border: none; min-width: ' + u + 'px;'),
                            t.removeAttribute('class');
                        var d = (function(e) {
                                var n = document.createElement('div');
                                n.setAttribute('style', 'width: 100%; overflow: hidden');
                                var t = document.createElement('div');
                                t.setAttribute('style', 'width: 10000px'),
                                    n.appendChild(t),
                                    e.parentNode.appendChild(n);
                                var o = n.offsetWidth;
                                return e.parentNode.removeChild(n), o;
                            })(t),
                            m = function() {
                                e.setAttribute('height', e.contentWindow.document.body.lastChild.offsetHeight);
                            };
                        if (d < u && 'custom' !== l) {
                            if ('top' !== P(o, 'style.logo.position') || 'primary' !== P(o, 'style.logo.type'))
                                throw (i.warn(
                                    'Message Overflow. PayPal Credit Message of layout type ' +
                                        P(o, 'style.layout') +
                                        ' requires a width of at least ' +
                                        u +
                                        'px. Current container is ' +
                                        d +
                                        'px. Attempting fallback message.'
                                ),
                                (r = function() {
                                    t.parentNode.setAttribute('data-pp-style-layout', 'text'),
                                        t.parentNode.setAttribute('data-pp-style-logo-type', 'primary'),
                                        t.parentNode.setAttribute('data-pp-style-logo-position', 'top');
                                }),
                                ((s = new Error(J.MESSAGE_OVERFLOW)).onEnd = r),
                                s);
                            i.error({ name: J.MESSAGE_HIDDEN }),
                                i.warn(
                                    'Message hidden. PayPal Credit Message fallback requires minimum width of ' +
                                        u +
                                        'px. Current container is ' +
                                        d +
                                        'px. Message hidden.'
                                ),
                                e.setAttribute('data-pp-message-hidden', 'true');
                        } else m(), _t(e).on('resize', m);
                    } else
                        !(function(e, n, t) {
                            var o = [];
                            'flex' === t
                                ? (o = bt[n])
                                : Array.isArray(n)
                                ? (o = n.map(Pt))
                                : 'string' == typeof n && (o = [Pt(n)]);
                            var i = 'pp-flex--' + o.slice(-1)[0].ratio,
                                a = o.reduce(function(e, n) {
                                    var t = n.breakpoint,
                                        o = n.ratio,
                                        a = n.width;
                                    return '' === e
                                        ? '\n                .' +
                                              i +
                                              ' {\n                    display: block;\n                    width: 100%;\n                    ' +
                                              (Array.isArray(a)
                                                  ? '\n                                min-width: ' +
                                                    Et(a[0]) +
                                                    ';\n                                max-width: ' +
                                                    Et(a[1]) +
                                                    ';'
                                                  : '') +
                                              '\n                    box-sizing: border-box;\n                    position: relative;\n                }\n        \n                .' +
                                              i +
                                              '::before {\n                    padding-top: ' +
                                              Et(o) +
                                              ";\n                    content: '';\n                    display: block;\n                }\n        \n                ." +
                                              i +
                                              ' iframe {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                }\n            '
                                        : t
                                        ? '\n            ' +
                                          e +
                                          '\n            @media (min-width: ' +
                                          Et(t) +
                                          ') {\n                ' +
                                          (Array.isArray(a)
                                              ? '\n                            .' +
                                                i +
                                                ' {\n                                min-width: ' +
                                                Et(a[0]) +
                                                ';\n                                max-width: ' +
                                                Et(a[1]) +
                                                ';\n                            }'
                                              : '') +
                                          '\n                .' +
                                          i +
                                          '::before {\n                    padding-top: ' +
                                          Et(o) +
                                          ';\n                }\n            }\n        '
                                        : e;
                                }, ''),
                                r = document.createElement('style');
                            (r.textContent = a), e.setAttribute('class', i), e.appendChild(r);
                        })(t, c, l),
                            e.setAttribute('style', 'width: 100%; border: none;'),
                            e.removeAttribute('height');
                }
            });
            function Tt(e) {
                var n = document.createElement(e);
                'iframe' === e &&
                    (n.setAttribute('title', 'PayPal Credit Promotion Message'),
                    n.setAttribute('style', 'width: 100%; border: none;'),
                    n.setAttribute('src', 'about:blank'),
                    n.setAttribute('height', 0));
                var t = c()({ insertMarkup: xt, setSize: At, runStats: wt, events: _t }).reduce(function(e, t) {
                    var i;
                    return o({}, e, (((i = {})[t[0]] = (0, t[1])(n)), i));
                }, {});
                return (
                    (t.clearEvents = function() {
                        return (function(e) {
                            mt()(pt).forEach(function(n) {
                                return n.delete(e);
                            }),
                                0 === pt.scroll.size && window.removeEventListener('scroll', ft),
                                0 === pt.hover.size && document.removeEventListener('mouseover', ht),
                                'IFRAME' === e.tagName
                                    ? (e.contentWindow.removeEventListener('resize', gt),
                                      e.contentWindow.document.body.removeEventListener('click', yt))
                                    : e.removeEventListener('click', yt);
                        })(n);
                    }),
                    [n, t]
                );
            }
            window.__PP = window.__PP || {};
            var Rt = { US: 'en_US', GB: 'en_GB', FR: 'fr_FR', DE: 'de_DE' };
            function Lt(e) {
                try {
                    var n = e.content.json,
                        t = e.tracking_details;
                    return {
                        data: {
                            disclaimer: JSON.parse(n.disclaimer),
                            headline: JSON.parse(n.headline),
                            subHeadline: JSON.parse(n.subHeadline)
                        },
                        meta: {
                            clickUrl: t.click_url,
                            impressionUrl: t.impression_url,
                            offerType: JSON.parse(n.meta).offerType
                        }
                    };
                } catch (e) {
                    throw new Error(J.MESSAGE_INVALID_MARKUP);
                }
            }
            function St(e, n) {
                var t = n.match(/^<!--([\s\S]+?)-->/);
                if (t)
                    try {
                        return JSON.parse(t[1]);
                    } catch (n) {
                        e.error({ name: J.CUSTOM_JSON_OPTIONS_FAIL });
                    }
                return {};
            }
            var Ot = function(e) {
                    var n = Tt('iframe'),
                        t = n[0],
                        o = n[1].insertMarkup;
                    return (
                        t.setAttribute('style', 'opacity: 0; width: 0; height: 0; position: absolute; left: -99999px;'),
                        document.body.appendChild(t),
                        o(e).then(function() {
                            var e = t.contentWindow.document.querySelector('.message__content'),
                                n = t.contentWindow.getComputedStyle(e),
                                o = a()(e.children),
                                i = [
                                    'margin-left',
                                    'border-left-width',
                                    'padding-left',
                                    'width',
                                    'padding-right',
                                    'border-right-width',
                                    'margin-right'
                                ],
                                r = $()(n.getPropertyValue('display'), 'flex')
                                    ? Math.round(
                                          o.reduce(function(e, n) {
                                              var o = t.contentWindow.getComputedStyle(n);
                                              return (
                                                  e +
                                                  i.reduce(function(e, n) {
                                                      return e + parseFloat(o.getPropertyValue(n));
                                                  }, 0)
                                              );
                                          }, 0)
                                      )
                                    : Math.max.apply(
                                          Math,
                                          o.map(function(e) {
                                              var n = t.contentWindow.getComputedStyle(e);
                                              return Math.round(
                                                  i.reduce(function(e, t) {
                                                      return e + parseFloat(n.getPropertyValue(t));
                                                  }, 0)
                                              );
                                          })
                                      );
                            return document.body.removeChild(t), r;
                        })
                    );
                },
                It = f(
                    function(e) {
                        var n = e.account,
                            t = e.amount,
                            o = e.countryCode,
                            i = e.offerType,
                            a = e.style.typeEZP;
                        return new z.ZalgoPromise(function(e) {
                            var r = 'c' + Math.floor(Math.random() * Math.pow(10, 19)),
                                l = '' === a || 'NI' === i ? 'x199x99' : 'x215x80',
                                u = G('MESSAGE'),
                                d = {
                                    dimensions: l,
                                    currency_value: t,
                                    currency_code: 'USD',
                                    format: 'HTML',
                                    presentation_types: 'HTML',
                                    ch: 'UPSTREAM',
                                    call: '__PP.' + r
                                };
                            o && Rt[o] && ((d.country_code = o), (d.locale = Rt[o]));
                            var m = c()(d)
                                    .filter(function(e) {
                                        return e[1];
                                    })
                                    .reduce(
                                        function(e, n) {
                                            return e + '&' + n[0] + '=' + n[1];
                                        },
                                        s()(n, 'client-id') ? 'client_id=' + n.slice(10) : 'pub_id=' + n
                                    ),
                                p = document.createElement('script');
                            (p.async = !0),
                                j('GET', u + '?' + m).then(function(e) {
                                    (p.text = e.data), document.head.appendChild(p);
                                }),
                                (window.__PP[r] = function(n) {
                                    if ((document.head.removeChild(p), delete window.__PP[r], 'object' == typeof n))
                                        e({ markup: Lt(n) });
                                    else
                                        try {
                                            e({ markup: JSON.parse(n.replace(/<\/?div>/g, '')) });
                                        } catch (t) {
                                            e({ markup: n });
                                        }
                                });
                        });
                    },
                    ['account', 'amount', 'offerType', 'countryCode']
                );
            function Nt(e) {
                var n = e.options,
                    t = e.logger;
                return (
                    t.info(K.FETCH_START),
                    ('custom' !== P(n, 'style.layout')
                        ? It(n)
                        : z.ZalgoPromise.all([It(n), X(n.style)]).then(function(e) {
                              var o = e[0],
                                  i = e[1];
                              return 'object' == typeof o.markup
                                  ? ('' === i && t.error({ name: J.CUSTOM_TEMPLATE_FAIL }),
                                    (o.markup.template = i),
                                    { markup: o.markup, options: E(n, St(t, i)) })
                                  : { markup: o.markup };
                          })
                    ).then(function(e) {
                        var i = e.markup,
                            a = e.options,
                            r = void 0 === a ? {} : a;
                        t.info(K.FETCH_END);
                        var s = o({}, n, {}, r);
                        if (
                            ((s.style._flattened = (function e(n, t, o) {
                                return (
                                    void 0 === t && (t = ''),
                                    void 0 === o && (o = ':'),
                                    c()(n).reduce(function(n, i) {
                                        var a = i[0],
                                            r = i[1];
                                        switch (typeof r) {
                                            case 'object':
                                                return [].concat(n, e(r, '' + t + a + '.'));
                                            case 'string':
                                            default:
                                                return [].concat(n, ['' + t + a + o + r]);
                                        }
                                    }, [])
                                );
                            })(s.style)),
                            'object' == typeof i)
                        ) {
                            var l = ut.getTemplateNode(s, i);
                            return 'text' === P(s, 'style.layout')
                                ? Ot(l).then(function(e) {
                                      return {
                                          markup: i,
                                          options: s,
                                          template: l,
                                          meta: o({}, i.meta, { minWidth: e })
                                      };
                                  })
                                : { markup: i, options: s, template: l, meta: o({}, i.meta, { minWidth: l.minWidth }) };
                        }
                        var u = document.createElement('div');
                        return (u.innerHTML = i), { markup: i, options: s, template: u, meta: {} };
                    })
                );
            }
            var Ct = t(22),
                Mt = t.n(Ct),
                zt = {
                    ANY: 'ANY',
                    STRING: 'STRING',
                    BOOLEAN: 'BOOLEAN',
                    NUMBER: 'NUMBER',
                    FUNCTION: 'FUNCTION',
                    OBJECT: 'OBJECT'
                },
                kt = { id: [zt.STRING], _legacy: [zt.BOOLEAN], onRender: [zt.FUNCTION] },
                jt = {
                    text: {
                        logo: {
                            type: [zt.STRING, ['primary', 'alternative', 'inline', 'none']],
                            position: [zt.STRING, ['left', 'right', 'top']]
                        },
                        text: { color: [zt.STRING, ['black', 'white']] }
                    },
                    flex: {
                        color: [zt.STRING, ['blue', 'black', 'white', 'white-no-border', 'gray|grey']],
                        ratio: [zt.STRING, ['1x1', '1x4', '8x1', '20x1']]
                    },
                    legacy: {
                        typeNI: [zt.STRING, ['', 'image', 'html']],
                        typeEZP: [zt.STRING, ['', 'html']],
                        size: [zt.STRING],
                        color: [zt.STRING, ['none', 'blue', 'black', 'gray|grey', 'white']],
                        border: [zt.BOOLEAN, [!0, !1]]
                    },
                    custom: { markup: [zt.STRING], ratio: [zt.ANY] }
                },
                Wt = function(e, n, t) {
                    return e.warn('Invalid option value (' + n + '). ' + t);
                },
                Ht = function(e, n, t, o) {
                    return Wt(e, n, 'Expected type "' + t.toLowerCase() + '" but instead received "' + typeof o + '".');
                },
                Bt = function(e, n, t, o) {
                    return Wt(
                        e,
                        n,
                        'Expected one of ["' + t.join('", "').replace(/\|[\w|]+/g, '') + '"] but received "' + o + '".'
                    );
                };
            function Yt(e, n) {
                switch (e) {
                    case zt.STRING:
                        return 'string' == typeof n;
                    case zt.BOOLEAN:
                        return 'boolean' == typeof n;
                    case zt.NUMBER:
                        return 'number' == typeof n && !Mt()(n);
                    case zt.FUNCTION:
                        return 'function' == typeof n;
                    case zt.OBJECT:
                        return 'object' == typeof n && null !== n;
                    case zt.ANY:
                        return !0;
                    default:
                        return !1;
                }
            }
            function Dt(e, n, t, i) {
                return (
                    void 0 === i && (i = 'style.'),
                    c()(n).reduce(function(a, r) {
                        var s,
                            l = r[0],
                            c = r[1];
                        if (Array.isArray(c)) {
                            var u,
                                m = (function(e, n, t, o) {
                                    var i = n[0],
                                        a = n[1],
                                        r = void 0 === a ? [] : a;
                                    if (void 0 === t) return r[0];
                                    if (Yt(i, t)) {
                                        if (i === zt.STRING && r.length > 0) {
                                            var s = d()(r, function(e) {
                                                return e.split('|').some(function(e) {
                                                    return e === t;
                                                });
                                            });
                                            return void 0 === s
                                                ? (Bt(e, o, r, t), r[0].split('|')[0])
                                                : s.split('|')[0];
                                        }
                                        return t;
                                    }
                                    return Ht(e, o, i, t), r[0];
                                })(e, c, t[l], '' + i + l);
                            return void 0 === m ? a : o({}, a, (((u = {})[l] = m), u));
                        }
                        return o({}, a, (((s = {})[l] = Dt(e, n[l], t[l] || {}, '' + i + l + '.')), s));
                    }, {})
                );
            }
            function Ut(e, n) {
                return o({ layout: n.layout }, Dt(e, jt[n.layout], n));
            }
            var Gt = y(function(e, n) {
                    var t = n.account,
                        o = n.amount,
                        i = n.countryCode,
                        a = n.style,
                        r = n.offer,
                        l = N(n, ['account', 'amount', 'countryCode', 'style', 'offer']),
                        c = Dt(e, kt, l, '');
                    if (
                        (Yt(zt.STRING, t)
                            ? 13 === t.length || 10 === t.length || s()(t, 'client-id:')
                                ? (c.account = t)
                                : Wt(e, 'account', 'Ensure the correct Merchant Account ID has been entered.')
                            : Ht(e, 'account', zt.STRING, t),
                        void 0 !== o)
                    ) {
                        var u = Number(o);
                        Yt(zt.NUMBER, u)
                            ? u < 0
                                ? Wt(e, 'amount', 'Ensure value is a positive number.')
                                : (c.amount = u)
                            : Ht(e, 'amount', zt.NUMBER, o);
                    }
                    return (
                        void 0 !== i &&
                            (Yt(zt.STRING, i)
                                ? 2 !== i.length
                                    ? Wt(e, 'countryCode', 'Country code should be 2 characters.')
                                    : (c.countryCode = i)
                                : Ht(e, 'countryCode', zt.STRING, i)),
                        void 0 !== r &&
                            (Yt(zt.STRING, r)
                                ? 'NI' !== r
                                    ? Wt(e, 'offer', 'Ensure valid offer type.')
                                    : (c.offerType = r)
                                : Ht(e, 'offer', zt.STRING, r)),
                        Yt(zt.OBJECT, a) && Yt(zt.STRING, a.layout) && jt[a.layout]
                            ? (c.style = Ut(e, a))
                            : (Yt(zt.OBJECT, a)
                                  ? Bt(e, 'style.layout', Object.keys(jt), a.layout)
                                  : void 0 !== a && Ht(e, 'style', zt.OBJECT, a),
                              (c.style = Ut(e, { layout: 'text' }))),
                        e.info(K.VALIDATE, { options: b(c) }),
                        c
                    );
                }),
                Ft = f(
                    function(e) {
                        return j(
                            'GET',
                            ((n = e.offerType), G('MODAL') + '/' + (s()(n, 'NI') ? 'ni' : 'ezp') + '.html')
                        ).then(function(e) {
                            return { markup: e.data };
                        });
                        var n;
                    },
                    ['offerType']
                ),
                Vt = f(
                    function(e) {
                        return j(
                            'GET',
                            ((n = e),
                            (t = n.account),
                            (o = n.amount),
                            (i = G('TERMS')),
                            (a = ['json=true', s()(t, 'client-id') ? 'cid=' + t.slice(10) : 'mid=' + t]),
                            a.push('country=US'),
                            a.push('currency=USD'),
                            o && a.push('amount=' + o),
                            i + '?' + a.join('&'))
                        )
                            .then(function(e) {
                                return JSON.parse(e.data);
                            })
                            .catch(function() {
                                return { error: !0 };
                            });
                        var n, t, o, i, a;
                    },
                    ['account', 'amount']
                ),
                Zt = function(e, n) {
                    return 'INST' === n.type
                        ? '<tr>\n            ' +
                              ('pala' === e.type
                                  ? n.monthly && !n.isNonQualified
                                      ? '<td>$' + n.monthly + '</td>'
                                      : '<td> - </td>'
                                  : '') +
                              '\n            <td>' +
                              n.term +
                              '</td>\n            <td>$' +
                              n.minValue +
                              '</td>\n            <td>' +
                              n.apr +
                              '%</td>\n            ' +
                              ('pala' === e.type
                                  ? n.total && !n.isNonQualified
                                      ? '<td>$' + n.total + '</td>'
                                      : '<td> - </td>'
                                  : '') +
                              '\n        </tr>'
                        : '';
                },
                Kt = function(e) {
                    return e.max_amount !== e.default_max_amount
                        ? '<div style="text-align: center; padding-bottom: 15px; display: table; padding-top: 10px; "><span style="display: inline-block; vertical-align: middle; "><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"><path fill="none" fill-rule="evenodd" stroke="#9DA3A6" stroke-linecap="round" stroke-linejoin="round" d="M9.526 10.474v7.579c4.71-.034 8.527-3.817 8.527-8.527a8.526 8.526 0 1 0-11.834 7.862"></path></svg></span><p style="display: inline; font-size: 13px; color: #2c2e2f; padding-left: 5px; font-family: PayPalSansSmall; font-weight: 400 ">$' +
                              e.max_amount +
                              ' is the maximum amount to be eligible for Easy Payments. Enter an amount of $' +
                              e.max_amount +
                              ' or less.</p></div>'
                        : '<p style="text-align: center">No offers are available for this amount. Please enter a new amount.</p>';
                };
            function Jt(e, n) {
                var t = e.contentDocument.getElementById('content-wrapper'),
                    i = e.contentDocument.getElementById('modal__overlay'),
                    a = e.contentDocument.getElementById('close-btn'),
                    r = e.contentDocument.getElementById('header'),
                    s = e.contentDocument.getElementsByClassName('accordion'),
                    l = e.contentDocument.getElementById('modal-container'),
                    c = e.contentDocument.getElementsByClassName('modal__header-container')[0],
                    u = e.contentDocument.getElementsByTagName('a');
                return o(
                    {
                        window: e.contentWindow,
                        contentWrapper: t,
                        overlay: i,
                        closeButton: a,
                        header: r,
                        accordions: s,
                        modalContainer: l,
                        headerContainer: c,
                        landerLinks: u
                    },
                    (function(e, n) {
                        return 'EZP' !== n
                            ? {}
                            : {
                                  ezpTab: e.contentDocument.getElementById('ezp-tab'),
                                  niTab: e.contentDocument.getElementById('ni-tab'),
                                  ezpContent: e.contentDocument.getElementById('ezp-content'),
                                  niContent: e.contentDocument.getElementById('ni-content'),
                                  calculateButton: e.contentDocument.getElementById('calculate-ezp'),
                                  amountInput: e.contentDocument.getElementById('number-input'),
                                  loader: e.contentDocument.getElementById('loading-image'),
                                  financeTermsTable: e.contentDocument.getElementById('financing-terms')
                              };
                    })(e, n)
                );
            }
            var qt = f(
                    function(e) {
                        var n = window.top.document.createElement('div'),
                            t = Y();
                        n.setAttribute('data-pp-id', t);
                        var i = Tt('iframe'),
                            r = i[0],
                            l = i[1].insertMarkup,
                            c = (function() {
                                var e = window.parent.document.head,
                                    n = window.parent.document.body,
                                    t = (function() {
                                        var t = window.parent.document.getElementsByName('viewport')[0];
                                        if (void 0 === t) {
                                            var o = document.createElement('meta');
                                            return (o.name = 'viewport'), (o.content = ''), e.appendChild(o), o;
                                        }
                                        return n.contains(t) && e.appendChild(t), t;
                                    })(),
                                    o = document.createElement('meta');
                                (o.name = 'viewport'),
                                    (o.content =
                                        'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui, shrink-to-fit=no');
                                var i = n.getAttribute('style');
                                return [
                                    function() {
                                        e.contains(t) && (e.removeChild(t), e.appendChild(o)),
                                            (n.style.overflow = 'hidden'),
                                            (n.style.msOverflowStyle = 'scrollbar');
                                    },
                                    function() {
                                        e.contains(o) && (e.removeChild(o), e.appendChild(t)),
                                            i ? n.setAttribute('style', i) : n.removeAttribute('style');
                                    }
                                ];
                            })(),
                            u = c[0],
                            d = c[1],
                            m = e.track,
                            p = e.clickUrl,
                            g = k({ status: 'CLOSED' }),
                            f = g[0],
                            h = g[1],
                            y = q.create({ id: t, account: e.account, selector: '__internal__', type: 'Modal' });
                        function _() {
                            return s()(e.offerType, 'NI') ? 'NI' : 'EZP';
                        }
                        var w = function(e, n, t) {
                            return m({
                                et: 'modal-open' === e ? 'CLIENT_IMPRESSION' : 'CLICK',
                                link: n,
                                amount: t,
                                modal: _(),
                                event_type: e
                            });
                        };
                        function b() {
                            a()(f.elements.accordions).forEach(function(e) {
                                e.classList.remove('show'),
                                    e
                                        .getElementsByClassName('accordion-content')[0]
                                        .style.setProperty('max-height', null);
                            });
                        }
                        function E(e, n) {
                            var t = {
                                    'NI Tab': [f.elements.niTab, f.elements.niContent],
                                    'EZP Tab': [f.elements.ezpTab, f.elements.ezpContent]
                                },
                                o = t[e][0];
                            mt()(t).forEach(function(e) {
                                var n = e[0],
                                    t = e[1];
                                n.classList.toggle('selected', n === o), t.classList.toggle('show', n === o);
                            }),
                                n || w('modal-tab', e),
                                b();
                        }
                        function P() {
                            return f.error ? L(!0) : f.modalProm;
                        }
                        function A(e) {
                            return new z.ZalgoPromise(function(t, o) {
                                'OPEN' === f.status || 'OPENING' === f.status
                                    ? (h({ status: 'CLOSING' }),
                                      f.elements.modalContainer.classList.remove('show'),
                                      setTimeout(function() {
                                          (n.style.display = 'none'),
                                              r.blur(),
                                              h({ status: 'CLOSED' }),
                                              d(),
                                              'EZP' === _() &&
                                                  setTimeout(function() {
                                                      E('EZP Tab', !0);
                                                  }, 350),
                                              t();
                                      }, e || 0))
                                    : o();
                            });
                        }
                        function T(e) {
                            A(350), w('modal-close', e);
                        }
                        function R(n) {
                            var t = +n;
                            return (
                                Mt()(t) || (f.elements.amountInput.value = t.toFixed(2)),
                                f.elements.loader.style.setProperty('opacity', 1),
                                f.elements.financeTermsTable.style.setProperty('opacity', 0.4),
                                Vt(o({}, e, { amount: n })).then(function(e) {
                                    f.elements.loader.style.setProperty('opacity', 0),
                                        f.elements.financeTermsTable.style.setProperty('opacity', 1),
                                        (f.elements.financeTermsTable.innerHTML = (function(e) {
                                            return e.error
                                                ? '<h3 id="terms-error"> There was an error retrieving your payment options for this purchase. Please try again later. </h3>'
                                                : +e.amount < e.min_amount && 'pala' === e.type
                                                ? '<div style="text-align: center; padding-bottom: 15px; display: table; padding-top: 10px; "><span style="display: inline-block; vertical-align: middle; "><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"><path fill="none" fill-rule="evenodd" stroke="#9DA3A6" stroke-linecap="round" stroke-linejoin="round" d="M9.526 10.474v7.579c4.71-.034 8.527-3.817 8.527-8.527a8.526 8.526 0 1 0-11.834 7.862"></path></svg></span><p style="display: inline; font-size: 13px; color: #2c2e2f; padding-left: 5px; font-family: PayPalSansSmall; font-weight: 400 ">$' +
                                                  e.min_amount +
                                                  ' is the minimum amount to be eligible for Easy Payments. Enter an amount of $' +
                                                  e.min_amount +
                                                  ' or more.</p></div>'
                                                : '\n        <table>\n            <thead>\n                <tr>\n                    ' +
                                                  ('pala' === e.type ? '<th>Monthly<br>Payments</th>' : '') +
                                                  '\n                    <th>Payments</th>\n                    <th>Minimum<br>Purchase</th>\n                    <th>APR</th>\n                    ' +
                                                  ('pala' === e.type ? '<th>Total w/<br>Interest</th>' : '') +
                                                  '\n                </tr>\n            </thead>\n            <tbody>\n            ' +
                                                  (e.options && e.options.length > 0 && 'N/A' !== e.options
                                                      ? e.options
                                                            .map(function(n) {
                                                                return Zt(e, n);
                                                            })
                                                            .join('')
                                                      : '') +
                                                  '\n            </tbody>\n        </table>\n        ' +
                                                  (e.options && 0 !== e.options.length && 'N/A' !== e.options
                                                      ? ''
                                                      : Kt(e)) +
                                                  '\n        <p id="terms-note">The monthly payment shown is an estimated amount and may not include taxes and shipping</p>\n    ';
                                        })(e));
                                })
                            );
                        }
                        function L(n) {
                            return (
                                void 0 === n && (n = !1),
                                y.start({
                                    options: {
                                        account: e.account,
                                        offerType: e.offerType,
                                        amount: e.amount,
                                        message_id: e.id
                                    }
                                }),
                                Ft(e, n)
                                    .then(x(v('markup'), l))
                                    .then(function() {
                                        h({ elements: Jt(r, _()) }),
                                            (function() {
                                                f.elements.closeButton.addEventListener('click', function() {
                                                    T('Close Button');
                                                }),
                                                    f.elements.overlay.addEventListener('click', function(e) {
                                                        var n = e.target;
                                                        (n !== f.elements.contentWrapper &&
                                                            n !== f.elements.headerContainer) ||
                                                            T('Modal Overlay');
                                                    });
                                                var e = function() {
                                                    f.elements.contentWrapper.scrollTop > 0
                                                        ? f.elements.header.classList.add('show')
                                                        : f.elements.header.classList.remove('show');
                                                };
                                                if (
                                                    (f.elements.contentWrapper.addEventListener('scroll', e),
                                                    f.elements.contentWrapper.addEventListener('touchmove', e),
                                                    a()(f.elements.accordions).forEach(function(e) {
                                                        var n = e.getElementsByTagName('h3')[0],
                                                            t = e.getElementsByClassName('accordion-content')[0];
                                                        n.addEventListener('click', function() {
                                                            var o = e.classList.toggle('show');
                                                            t.style.setProperty(
                                                                'max-height',
                                                                o ? t.scrollHeight + 'px' : null
                                                            ),
                                                                o && w('accordion-open', n.innerText);
                                                        });
                                                    }),
                                                    r.contentWindow.addEventListener('keyup', function(e) {
                                                        ('Escape' !== e.key && 'Esc' !== e.key && 27 !== e.charCode) ||
                                                            T('Escape Key');
                                                    }),
                                                    a()(f.elements.landerLinks).forEach(function(e) {
                                                        e.addEventListener('click', function() {
                                                            return w('lander-link');
                                                        });
                                                    }),
                                                    'EZP' === _())
                                                ) {
                                                    f.elements.niTab.addEventListener('click', function() {
                                                        return E('NI Tab');
                                                    }),
                                                        f.elements.ezpTab.addEventListener('click', function() {
                                                            return E('EZP Tab');
                                                        });
                                                    var n = function(e) {
                                                        var n = f.elements.amountInput.value;
                                                        w('calculate', e, n), R(n);
                                                    };
                                                    f.elements.amountInput.addEventListener('keydown', function(e) {
                                                        var t = e.key,
                                                            o = e.target;
                                                        if (t.length > 1 || e.metaKey || e.ctrlKey)
                                                            'Enter' === t && n('Enter Key');
                                                        else {
                                                            var i = o.value,
                                                                a = o.selectionStart,
                                                                r = i ? '' + i.slice(0, a) + t + i.slice(a) : t;
                                                            (function(e) {
                                                                if (Mt()(Number(e))) return !1;
                                                                var n = e.split('.'),
                                                                    t = n[0],
                                                                    o = n[1];
                                                                return (
                                                                    (void 0 === t ? '' : t).length <= 5 &&
                                                                    (void 0 === o ? '' : o).length <= 2
                                                                );
                                                            })(r) && ((o.value = r), o.setSelectionRange(a + 1, a + 1)),
                                                                e.preventDefault();
                                                        }
                                                    }),
                                                        f.elements.calculateButton.addEventListener(
                                                            'click',
                                                            function() {
                                                                return n('Calculate Button');
                                                            }
                                                        );
                                                }
                                            })();
                                    })
                                    .catch(function() {
                                        y.error({ name: J.MODAL_FAIL }), h({ error: !0 });
                                    })
                                    .then(function() {
                                        return y.end();
                                    })
                            );
                        }
                        return (
                            n.setAttribute('role', 'alertdialog'),
                            n.setAttribute('aria-label', 'PayPal Credit Promotion Modal'),
                            n.setAttribute(
                                'style',
                                'display: none; overflow: auto; -webkit-overflow-scrolling: touch; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 2147483647; margin: 0; padding: 0; border: 0;'
                            ),
                            r.setAttribute(
                                'style',
                                'position: absolute; top: 0; left: 0; overflow: hidden; width: 100%; height: 100%; margin: 0; padding: 0; border: 0; display: block;'
                            ),
                            n.appendChild(r),
                            window.top.document.body.appendChild(n),
                            h({ modalProm: L() }),
                            'EZP' === _() &&
                                P().then(function() {
                                    return R(e.amount);
                                }),
                            {
                                open: function(e) {
                                    e.preventDefault(),
                                        ('CLOSED' !== f.status && 'CLOSING' !== f.status) ||
                                            (h({ status: 'OPENING' }),
                                            P().then(function() {
                                                if (f.error)
                                                    return h({ status: 'CLOSED' }), void window.open(p, '_blank');
                                                (n.style.display = 'block'),
                                                    requestAnimationFrame(function() {
                                                        return requestAnimationFrame(function() {
                                                            b(),
                                                                r.contentWindow.focus(),
                                                                h({ status: 'OPEN' }),
                                                                u(),
                                                                f.elements.modalContainer.classList.add('show'),
                                                                w('modal-open');
                                                        });
                                                    });
                                            }));
                                },
                                close: A
                            }
                        );
                    },
                    ['account', 'amount', 'offerType']
                ),
                Qt = {
                    init: function(e) {
                        var n = e.options,
                            t = e.meta,
                            i = e.events,
                            a = e.track;
                        if (n._legacy && s()(t.offerType, 'NI'))
                            i.on('click', function(e) {
                                var n = e.target;
                                'IMG' === n.tagName && 'A' === n.parentNode.tagName
                                    ? (window.open(
                                          n.parentNode.href,
                                          'PayPal Credit Terms',
                                          'width=650,height=600,scrollbars=yes,resizable=no,location=no,toolbar=no,menubar=no,dependent=no,dialog=yes,minimizable=no'
                                      ),
                                      e.preventDefault())
                                    : window.open(t.clickUrl, '_blank');
                            });
                        else {
                            var r = qt(o({}, n, {}, t, { track: a }));
                            i.on('click', r.open);
                        }
                    }
                },
                $t = new Map(),
                Xt = new Map();
            function eo(e) {
                var n = (e.meta && e.meta.offerType) + '::' + e.options.style._flattened.sort().join('::'),
                    t = e.meta;
                return {
                    track: e.logger.track({
                        uuid: n,
                        urls: { DEFAULT: t.clickUrl, MORS_IMPRESSION: t.impressionUrl + '&idx=' + e.options.id }
                    })
                };
            }
            var no = y(function(e, n) {
                    return o({}, n, {}, e(n));
                }),
                to = y(function(e, n) {
                    return e(n).then(function(e) {
                        return o({}, n, {}, e);
                    });
                }),
                oo = function(e) {
                    var n = e.options.onRender;
                    n && n();
                },
                io = {
                    init: function(e, n, t) {
                        Xt.has(e) ||
                            Xt.set(e, q.create({ id: t.id, account: t.account, selector: n, type: 'Message' }));
                        var i,
                            a = Xt.get(e);
                        try {
                            $t.has(e)
                                ? ((i = $t.get(e)).renderProm = i.renderProm.then(function() {
                                      return a.start({ options: t }), i.update(t);
                                  }))
                                : (a.start({ options: t }),
                                  (i = (function(e, n, t) {
                                      t.info(K.CREATE);
                                      var i = k(e),
                                          a = i[0],
                                          r = i[1],
                                          s = a._legacy,
                                          l = Tt(s ? 'div' : 'iframe'),
                                          u = l[0],
                                          d = l[1],
                                          m = d.insertMarkup,
                                          g = d.setSize,
                                          f = d.events,
                                          b = d.runStats,
                                          P = d.clearEvents,
                                          A = s ? u : document.createElement('span');
                                      A !== u && A.appendChild(u);
                                      var T = y(function(e, n, o) {
                                          return t.info(n), e(o);
                                      });
                                      function R(e) {
                                          return (
                                              t.info(K.RENDER_START),
                                              x(
                                                  Gt(t),
                                                  _(r),
                                                  w('options'),
                                                  h(M.a, { logger: t, wrapper: A, events: f }),
                                                  to(Nt)
                                              )(e)
                                                  .then(_(T(x(v('template'), m), K.INSERT)))
                                                  .then(
                                                      x(
                                                          no(eo),
                                                          _(T(Qt.init, K.MODAL)),
                                                          _(T(g, K.SIZE)),
                                                          _(T(b, K.STATS)),
                                                          T(oo, K.RENDER_END)
                                                      )
                                                  )
                                          );
                                      }
                                      return (
                                          n.appendChild(A),
                                          t.info(K.CONTAINER),
                                          s ||
                                              u.addEventListener('load', function() {
                                                  P(), R(a);
                                              }),
                                          {
                                              renderProm: R(a),
                                              wrapper: A,
                                              container: u,
                                              update: function(e) {
                                                  var n = E(a, e),
                                                      i = (function e(n, t) {
                                                          return c()(t).reduce(function(t, i) {
                                                              var a,
                                                                  r,
                                                                  s = i[0],
                                                                  l = i[1];
                                                              if (!n[s] && n[s] !== l)
                                                                  return o({}, t, (((a = {})[s] = l), a));
                                                              if ('object' != typeof l || null === l)
                                                                  return l !== n[s]
                                                                      ? o({}, t, (((r = {})[s] = l), r))
                                                                      : t;
                                                              if (Array.isArray(l)) {
                                                                  var c;
                                                                  if (Array.isArray(n[s])) {
                                                                      var u,
                                                                          d = l.filter(function(e) {
                                                                              return !p()(n[s], e);
                                                                          });
                                                                      return d.length > 0
                                                                          ? o({}, t, (((u = {})[s] = d), u))
                                                                          : t;
                                                                  }
                                                                  return o({}, t, (((c = {})[s] = l), c));
                                                              }
                                                              var m,
                                                                  g = e(n[s], l);
                                                              return Object.keys(g).length > 0
                                                                  ? o({}, t, (((m = {})[s] = g), m))
                                                                  : t;
                                                          }, {});
                                                      })(a, n),
                                                      r = Object.keys(i).length > 0;
                                                  return (
                                                      t.info(K.UPDATE, { willUpdate: r }),
                                                      r ? (P(), R(n)) : z.ZalgoPromise.resolve()
                                                  );
                                              }
                                          }
                                      );
                                  })(t, e, a)),
                                  $t.set(e, i));
                        } catch (e) {
                            return (
                                a.error({ name: J.INTERNAL_FAIL, message: e.message }),
                                a.end(),
                                z.ZalgoPromise.resolve()
                            );
                        }
                        return (
                            (i.renderProm = i.renderProm.then(a.end).catch(function(e) {
                                var n = J[e.message] || J.INTERNAL_FAIL;
                                a.error(n === J.INTERNAL_FAIL ? { name: n, message: e.message } : { name: n }),
                                    a.end(),
                                    'function' == typeof e.onEnd && e.onEnd();
                            })),
                            i.renderProm
                        );
                    }
                };
            function ao(e, n) {
                var t, i;
                if ((void 0 === n && (n = '[data-pp-message]'), 'string' == typeof n))
                    (t = a()(document.querySelectorAll(n))), (i = n);
                else if (T(n)) (t = [n]), (i = 'HTMLElement');
                else {
                    if (!Array.isArray(n) || !n.every(T)) return q.warn('Invalid selector', n);
                    (t = [].concat(n)), (i = 'Array<HTMLElement>');
                }
                return (
                    (t = t.filter(function(n) {
                        return n.ownerDocument.body.contains(n)
                            ? !e._auto || !n.hasAttribute('data-pp-id')
                            : (q.warn('Skipping container. Must be in the document:', n), !1);
                    })),
                    z.ZalgoPromise.all(
                        t.map(function(n) {
                            var t = E(
                                e,
                                (function(e) {
                                    var n = a()(e.attributes)
                                        .filter(function(e) {
                                            var n = e.nodeName;
                                            return s()(n, 'data-pp-');
                                        })
                                        .reduce(function(e, n) {
                                            var t = n.nodeValue;
                                            return t ? E(e, A(n.nodeName.replace('data-pp-', ''), t)) : e;
                                        }, {});
                                    if (
                                        !e.firstElementChild ||
                                        'SCRIPT' !== e.firstElementChild.tagName ||
                                        'text/template' !== e.firstElementChild.getAttribute('type')
                                    )
                                        return n;
                                    var t = e.firstElementChild.textContent.trim();
                                    return e.removeChild(e.firstElementChild), E(n, { style: { markup: t } });
                                })(n)
                            );
                            return (
                                n.hasAttribute('data-pp-id') || n.setAttribute('data-pp-id', Y()),
                                new MutationObserver(function(e) {
                                    var t = e.reduce(function(e, n) {
                                        return s()(n.attributeName, 'data-pp-')
                                            ? o(
                                                  {},
                                                  e,
                                                  {},
                                                  A(n.attributeName.slice(8), n.target.getAttribute(n.attributeName))
                                              )
                                            : e;
                                    }, {});
                                    io.init(n, i, t);
                                }).observe(n, { attributes: !0 }),
                                (t.id = n.getAttribute('data-pp-id')),
                                io.init(n, i, t)
                            );
                        })
                    )
                );
            }
            var ro = function(e) {
                return {
                    render: function(n) {
                        return ao(o({}, H.config, {}, e), n);
                    }
                };
            };
            M()(ro, {
                render: function(e, n) {
                    return void 0 === e && (e = {}), ao(o({}, H.config, {}, e), n);
                },
                setGlobalConfig: function(e) {
                    return void 0 === e && (e = {}), B({ config: o({}, H.config, {}, e) });
                }
            });
            var so = ro,
                lo = { BLU: 'blue', BLK: 'black', GRY: 'gray', WHT: 'white' },
                co = { x180x150: '1x1', x160x600: '1x4', x728x90: '8x1', x1169x50: '20x1' },
                uo = {
                    x1169x50: ['BLKWHTYCSS', 'BLUWHTYCSS', 'WHTBLUNCSS', 'WHTBLUYCSS'],
                    x160x600: ['BLKWHTYCSS', 'BLUWHTYCSS', 'WHTBLUNCSS', 'WHTBLUYCSS'],
                    x180x150: ['BLKWHTYCSS', 'BLUWHTYCSS', 'WHTBLUNCSS', 'WHTBLUYCSS'],
                    x728x90: ['BLKWHTYCSS', 'BLUWHTYCSS', 'WHTBLUNCSS', 'WHTBLUYCSS']
                },
                mo = {
                    x1169x51: ['x1169x50', 'BLKWHTYLRG'],
                    x1169x52: ['x1169x50', 'BLUWHTYLRG'],
                    x1169x50: ['x1169x50', 'WHTBLUYLRG'],
                    x160x601: ['x160x600', 'BLKWHTYMED'],
                    x161x600: ['x160x600', 'BLUWHTYMED'],
                    x160x602: ['x160x600', 'WHTBLUYMED'],
                    x180x151: ['x180x150', 'BLKWHTYSML'],
                    x180x152: ['x180x150', 'BLUWHTYSML'],
                    x181x150: ['x180x150', 'WHTBLUYSML'],
                    x300x251: ['x300x250', 'BLKWHTYMED'],
                    x300x252: ['x300x250', 'BLUWHTYMED'],
                    x301x250: ['x300x250', 'WHTBLUYMED'],
                    x728x91: ['x728x90', 'BLUWHTYLRG'],
                    x729x90: ['x728x90', 'BLKWHTYLRG'],
                    x730x90: ['x728x90', 'WHTBLUYLRG']
                },
                po = {
                    x160x600: ['BLKWHTYMED', 'BLUWHTYMED', 'WHTBLUNMED', 'WHTBLUYMED'],
                    x180x150: ['BLKWHTYSML', 'BLUWHTYSML', 'WHTBLUNSML', 'WHTBLUYSML'],
                    x300x250: ['BLKWHTYMED', 'BLUWHTYMED', 'WHTBLUNSML', 'WHTBLUYMED'],
                    x728x90: ['BLKWHTYLRG', 'BLUWHTYLRG', 'WHTBLUNLRG', 'WHTBLUYLRG'],
                    x1169x50: ['BLKWHTYLRG', 'BLUWHTYLRG', 'WHTBLUNLRG', 'WHTBLUYLRG']
                },
                go = [
                    'x90x136',
                    'x190x50',
                    'x228x128',
                    'x240x60',
                    'x999x70',
                    'x250x52',
                    'x260x72',
                    'x274x97',
                    'x280x42',
                    'x289x110',
                    'x300x600',
                    'x184x153',
                    'x768x70',
                    'x336x280',
                    'x790x70',
                    'x338x65',
                    'x375x50',
                    'x467x58',
                    'x650x60',
                    'x678x279',
                    'x180x150',
                    'x190x100',
                    'x191x101',
                    'x234x400',
                    'x234x60',
                    'x236x61',
                    'x250x250',
                    'x280x280',
                    'x300x250',
                    'x300x50',
                    'x468x60',
                    'x540x200',
                    'x728x90',
                    'x800x66',
                    'x120x240',
                    'x120x600',
                    'x120x90',
                    'x150x100',
                    'x151x101',
                    'x160x600',
                    'x170x100'
                ],
                fo = ['x168x374', 'x340x60', 'x765x60', 'x1000x50', 'x234x100', 'x1000x36', 'x310x100'],
                ho = [
                    'x1000x36',
                    'x120x90',
                    'x234x60',
                    'x250x250',
                    'x300x50',
                    'x340x60',
                    'x468x60',
                    'x728x90',
                    'x540x200',
                    'x170x100'
                ],
                yo = [
                    ['35NBB9X6Z4UV4', 'ae448a026d'],
                    ['4P9TSD9APDTT6', '9483cfbbc4'],
                    ['A96ZUTUZAMETY', '6fd53e600b'],
                    ['GNPYYLVLCUVFY'],
                    ['HYRTLNXT9H2PG', '027d65f66e'],
                    ['KWRJULYJN7PAQ', 'e8cebeca35'],
                    ['R2AQ6GECMNWVA', '2f242b9904'],
                    ['RCNQL2J33NC54', 'df8729dd2c'],
                    ['TCE2H9EMJKVTL', 'c78836e69a']
                ],
                _o = {
                    '35NBB9X6Z4UV4': ['x728x90'],
                    '4P9TSD9APDTT6': ['x468x60'],
                    A96ZUTUZAMETY: ['x310x100'],
                    GNPYYLVLCUVFY: ['x234x100', 'x310x100'],
                    HYRTLNXT9H2PG: ['x260x72'],
                    KWRJULYJN7PAQ: ['x800x66'],
                    R2AQ6GECMNWVA: ['x468x60'],
                    RCNQL2J33NC54: ['x234x60', 'x800x66'],
                    TCE2H9EMJKVTL: ['x170x100']
                };
            window.__PP = window.__PP || {};
            var xo = 'c' + (new Date().getTime() + Math.floor(65536 * Math.random())),
                vo = [650, 600],
                wo = 0;
            function bo(e, n) {
                return function(t) {
                    return n.call(
                        e,
                        (function(e) {
                            void 0 === e && (e = window.evt);
                            var n = {};
                            return (
                                (n.target = e.target || e.srcElement),
                                3 === n.target.nodeType && (n.target = n.target.parentNode),
                                (n.preventDefault = e.preventDefault
                                    ? function() {
                                          return e.preventDefault();
                                      }
                                    : function() {
                                          e.returnValue = !1;
                                      }),
                                n
                            );
                        })(t)
                    );
                };
            }
            var Eo = {
                    goto: function(e) {
                        window.location = e;
                    },
                    popup: function(e, n, t) {
                        return window.open(e, n, t);
                    },
                    createElement: function(e) {
                        return document.createElement(e);
                    },
                    getElementsByTagName: function(e) {
                        return document.getElementsByTagName(e);
                    },
                    registerEvent: function(e, n, t, o) {
                        var i = this;
                        if (window.addEventListener) e.addEventListener(n, bo(e, t), !!o);
                        else if (window.attachEvent) e.attachEvent('on' + n, bo(e, t));
                        else {
                            var a = e['on' + n];
                            e['on' + n] = a
                                ? function() {
                                      bo(e, t).call(i), a.call(i);
                                  }
                                : t;
                        }
                    }
                },
                Po = (function() {
                    function e(e) {
                        var n = Eo.createElement('script');
                        (n.async = 'true'), (n.src = e), (this.el = n), this.attach();
                    }
                    var n = e.prototype;
                    return (
                        (n.attach = function() {
                            var e = Eo.getElementsByTagName('script')[0];
                            e.parentNode.insertBefore(this.el, e), (this.attach = function() {});
                        }),
                        (n.destroy = function() {
                            this.el.parentNode.removeChild(this.el), delete this.el;
                        }),
                        e
                    );
                })(),
                Ao = (function() {
                    function e(e) {
                        this.el = e;
                    }
                    var n = e.prototype;
                    return (
                        (n.getKVs = function() {
                            var e = this.el.attributes;
                            return a()(e).reduce(function(e, n) {
                                if (s()(n.name, 'data-pp_')) {
                                    var t = n.name.slice(8);
                                    e[t] = ('dimensions' === t ? 'x' : '') + n.value;
                                }
                                return e;
                            }, {});
                        }),
                        (n.injectAd = function(e) {
                            (this.ad = e), this.el.parentNode.insertBefore(e.container, this.el);
                        }),
                        (n.registerListeners = function() {
                            var e = this;
                            Eo.registerEvent(this.ad.container, 'click', function() {
                                var n;
                                (n = e.ad).clickHandler.apply(n, arguments);
                            });
                        }),
                        (n.destroyDom = function() {
                            this.el.parentNode.removeChild(this.el), delete this.el;
                        }),
                        e
                    );
                })(),
                To = (function() {
                    function e(e, n) {
                        n.start({ options: e }),
                            (this.logger = n),
                            (this.idx = wo += 1),
                            (this.namespace = xo + this.idx),
                            (this.kvs = e),
                            (this.variant = e && e.partner_version ? 'PARTNER' : 'MERCHANT'),
                            this.initContainer(),
                            this.initCallback(),
                            this.initQueryString();
                    }
                    var n = e.prototype;
                    return (
                        (n.initContainer = function() {
                            (this.container = Eo.createElement('span')), (this.container.style.display = 'none');
                        }),
                        (n.injectScripts = function(e) {
                            var n = this,
                                t = document.createElement('div');
                            t.innerHTML = e;
                            var o = t.getElementsByTagName('script');
                            return (
                                a()(o).forEach(function(e) {
                                    var t = document.createElement('script');
                                    (t.text = e.text), n.container.appendChild(t), e.parentNode.removeChild(e);
                                }),
                                t.innerHTML
                            );
                        }),
                        (n.setContent = function(e) {
                            if ('MERCHANT' === this.variant) {
                                var n = this.injectScripts(e);
                                (this.container.innerHTML = n), (this.container.style.display = '');
                            } else {
                                var t = Eo.createElement('iframe');
                                t.setAttribute('width', '100%'),
                                    t.setAttribute('height', '100%'),
                                    (t.style.border = 'none'),
                                    this.container.appendChild(t);
                                var o = t.contentWindow && t.contentWindow.document;
                                o.open(),
                                    o.write(
                                        '<!DOCTYPE html>\r\n<html style="width:100%; height:100%">\r\n\t<head>\r\n\t\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\r\n\t\t<style type="text/css">\r\n\t\t\timg { display: block; }\r\n\t\t</style>\r\n\t</head>\r\n\t<body style="margin:0em; padding:0em; width:100%; height:100%">'
                                    ),
                                    o.write(e),
                                    o.write('\r\n\t</body>\r\n</html>'),
                                    o.close(),
                                    (this.container.style.display = 'inline-block'),
                                    this.kvs &&
                                        this.kvs.partner_version &&
                                        +this.kvs.partner_version >= 2 &&
                                        (this.container.style.display = 'inline');
                            }
                        }),
                        (n.callback = function(e) {
                            this.logger.info(K.FETCH_END),
                                this.logger.info(K.INSERT),
                                this.setContent(e),
                                this.script.destroy(),
                                delete window.__PP[this.namespace],
                                delete this.script,
                                this.logger.end();
                        }),
                        (n.initCallback = function() {
                            var e = this;
                            (this.callbackName = '__PP.' + this.namespace),
                                (window.__PP[this.namespace] = function() {
                                    e.callback.apply(e, arguments);
                                });
                        }),
                        (n.clickHandler = function(e) {
                            var n = e.target,
                                t = this.kvs.popup,
                                o =
                                    'width=' +
                                    vo[0] +
                                    ',height=' +
                                    vo[1] +
                                    ',scrollbars=yes,resizable=no,location=no,toolbar=no,menubar=no,dependent=no,dialog=yes,minimizable=no';
                            'img' !== n.nodeName.toLowerCase() ||
                                (t && 'true' !== t) ||
                                (Eo.popup(n.parentNode.href, this.namespace, o), e.preventDefault());
                        }),
                        (n.request = function() {
                            this.logger.info(K.FETCH_START),
                                (this.script = new Po('' + G('MESSAGE') + this.queryString));
                        }),
                        (n.initQueryString = function() {
                            var e = {
                                call: this.callbackName,
                                v: 2.4,
                                vtag: 3.1,
                                rand: new Date().getTime(),
                                page: 'DefaultPage',
                                format: 'HTML',
                                presentation_types: 'HTML',
                                locale: 'en_US',
                                country_code: 'US',
                                currency_code: 'USD'
                            };
                            'MERCHANT' === this.variant && ((e.pu_type = 'ANONYMOUS'), (e.ch = 'UPSTREAM'));
                            var n = o({}, e, {}, this.kvs),
                                t = c()(n).reduce(function(e, n) {
                                    return e + '&' + n[0] + '=' + encodeURIComponent(n[1]);
                                }, '');
                            this.queryString = '?' + t.slice(1);
                        }),
                        e
                    );
                })(),
                Ro = {
                    pubid: 'pub_id',
                    payerid: 'payer_id',
                    placementtype: 'dimensions',
                    cartamt: 'currency_value',
                    style: 'style',
                    boost: 'boost',
                    popup: 'popup'
                };
            a()(document.getElementsByTagName('script')).some(function(e) {
                var n;
                (n = e),
                    a()(n.attributes).forEach(function(e) {
                        if (e.name.search(/^data_pp[_-]/) >= 0) {
                            var t = e.name.replace(/^(data)_([a-z])/, '$1-$2');
                            n.setAttribute(t, e.value), n.removeAttribute(e.name);
                        }
                        var o = e.name.match(/^data-pp-([a-z]+)/);
                        o && Ro[o[1]] && (n.setAttribute('data-pp_' + Ro[o[1]], e.value), n.removeAttribute(e.name));
                    });
                var t = e.getAttribute('data-pp_pub_id'),
                    o = e.getAttribute('data-pp_payer_id'),
                    i = e.getAttribute('data-pp_dimensions'),
                    r = o || t;
                if (r && i) {
                    var s = new Ao(e);
                    if (
                        !(function(e) {
                            var n = e.getKVs(),
                                t = n.payer_id || n.pub_id,
                                o = (function(e, n) {
                                    if (n)
                                        return po[e] && p()(po[e], n)
                                            ? ['image', '', e, n]
                                            : uo[e] && p()(uo[e], n)
                                            ? ['flex', 'flex', e, n]
                                            : [];
                                    if (mo[e]) return ['image', ''].concat(mo[e]);
                                    var t = p()(go, e),
                                        o = p()(fo, e),
                                        i = p()(ho, e) ? 'html' : '';
                                    return t ? ['image', i, e, 'none'] : o ? ['html', i, e, 'none'] : [];
                                })(n.dimensions, n.style),
                                i = o[0],
                                a = o[1],
                                r = o[2],
                                s = o[3];
                            if (r) {
                                var l = d()(yo, function(e) {
                                    return p()(e, t);
                                });
                                if (l) {
                                    var c = l[0];
                                    if (p()(_o[c], r)) return !1;
                                }
                                var u = (function(e, n, t, o) {
                                        var i = t.slice(1),
                                            a = 'none',
                                            r = !1;
                                        return (
                                            10 === o.length && ((a = lo[o.slice(0, 3)]), (r = 'Y' === o.slice(6, 7))),
                                            'flex' === e && 'flex' === n
                                                ? {
                                                      layout: 'flex',
                                                      color: 'white' !== a || r ? a : 'white-no-border',
                                                      ratio: co[t]
                                                  }
                                                : {
                                                      layout: 'legacy',
                                                      typeNI: e,
                                                      typeEZP: n,
                                                      size: i,
                                                      color: a,
                                                      border: r
                                                  }
                                        );
                                    })(i, a, r, s),
                                    m = document.createElement('span');
                                return (
                                    e.el.parentNode.insertBefore(m, e.el),
                                    setTimeout(function() {
                                        so({
                                            _legacy: 'flex' !== i && 'flex' !== a,
                                            account: t,
                                            amount: n.currency_value,
                                            style: u,
                                            countryCode: 'US'
                                        }).render(m);
                                    }, 0),
                                    e.destroyDom(),
                                    !0
                                );
                            }
                            return !1;
                        })(s)
                    ) {
                        var l = q.create({ id: Y(), account: r, selector: '__internal__', type: 'Legacy_Banner' }),
                            c = new To(s.getKVs(), l);
                        s.injectAd(c), l.info(K.CONTAINER), s.registerListeners(), s.ad.request(), s.destroyDom();
                    }
                    return !0;
                }
                return !1;
            });
        }
    ]).Messages
);
//# sourceMappingURL=merchant@1.3.2.js.map
