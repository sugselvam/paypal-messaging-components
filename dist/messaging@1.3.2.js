(window.paypal = window.paypal || {}),
    (window.paypal.Messages = (function(e) {
        var n = {};
        function t(o) {
            if (n[o]) return n[o].exports;
            var a = (n[o] = { i: o, l: !1, exports: {} });
            return e[o].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
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
                    for (var a in e)
                        t.d(
                            o,
                            a,
                            function(n) {
                                return e[n];
                            }.bind(null, a)
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
            e.exports = t(143);
        },
        function(e, n, t) {
            e.exports = t(137);
        },
        function(e, n, t) {
            e.exports = t(101);
        },
        function(e, n, t) {
            'use strict';
            var o = t(8),
                a = t(110).f,
                i = t(111),
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
                    m,
                    d,
                    p,
                    g,
                    f,
                    h,
                    y,
                    _ = e.target,
                    w = e.global,
                    x = e.stat,
                    v = e.proto,
                    b = w ? o : x ? o[_] : (o[_] || {}).prototype,
                    E = w ? r : r[_] || (r[_] = {}),
                    P = E.prototype;
                for (d in n)
                    (t = !i(w ? d : _ + (x ? '.' : '#') + d, e.forced) && b && c(b, d)),
                        (g = E[d]),
                        t && (f = e.noTargetGet ? (y = a(b, d)) && y.value : b[d]),
                        (p = t && f ? f : n[d]),
                        (t && typeof g == typeof p) ||
                            ((h =
                                e.bind && t
                                    ? s(p, o)
                                    : e.wrap && t
                                    ? u(p)
                                    : v && 'function' == typeof p
                                    ? s(Function.call, p)
                                    : p),
                            (e.sham || (p && p.sham) || (g && g.sham)) && l(h, 'sham', !0),
                            (E[d] = h),
                            v &&
                                (c(r, (m = _ + 'Prototype')) || l(r, m, {}),
                                (r[m][d] = p),
                                e.real && P && !P[d] && l(P, d, p)));
            };
        },
        function(e, n, t) {
            var o = t(8),
                a = t(32),
                i = t(48),
                r = t(115),
                s = o.Symbol,
                l = a('wks');
            e.exports = function(e) {
                return l[e] || (l[e] = (r && s[e]) || (r ? s : i)('Symbol.' + e));
            };
        },
        function(e, n, t) {
            e.exports = t(150);
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
            e.exports = t(135);
        },
        function(e, n, t) {
            var o = t(12),
                a = t(24),
                i = t(25);
            e.exports = o
                ? function(e, n, t) {
                      return a.f(e, n, i(1, t));
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
                a = Math.min;
            e.exports = function(e) {
                return e > 0 ? a(o(e), 9007199254740991) : 0;
            };
        },
        function(e, n, t) {
            e.exports = t(41);
        },
        function(e, n, t) {
            e.exports = t(139);
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
                a = t(46),
                i = t(21),
                r = t(34),
                s = Object.defineProperty;
            n.f = o
                ? s
                : function(e, n, t) {
                      if ((i(e), (n = r(n, !0)), i(t), a))
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
                a = t(7);
            e.exports = function(e) {
                return o(a(e));
            };
        },
        function(e, n) {
            var t = {}.toString;
            e.exports = function(e) {
                return t.call(e).slice(8, -1);
            };
        },
        function(e, n, t) {
            var o = t(7);
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
                a = t(107);
            (e.exports = function(e, n) {
                return a[e] || (a[e] = void 0 !== n ? n : {});
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
                var t, a;
                if (n && 'function' == typeof (t = e.toString) && !o((a = t.call(e)))) return a;
                if ('function' == typeof (t = e.valueOf) && !o((a = t.call(e)))) return a;
                if (!n && 'function' == typeof (t = e.toString) && !o((a = t.call(e)))) return a;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(e, n, t) {
            var o = t(32),
                a = t(48),
                i = o('keys');
            e.exports = function(e) {
                return i[e] || (i[e] = a(e));
            };
        },
        function(e, n) {
            e.exports = {};
        },
        function(e, n, t) {
            'use strict';
            var o = {}.propertyIsEnumerable,
                a = Object.getOwnPropertyDescriptor,
                i = a && !o.call({ 1: 2 }, 1);
            n.f = i
                ? function(e) {
                      var n = a(this, e);
                      return !!n && n.enumerable;
                  }
                : o;
        },
        function(e, n, t) {
            var o = t(13),
                a = t(27),
                i = ''.split;
            e.exports = o(function() {
                return !Object('z').propertyIsEnumerable(0);
            })
                ? function(e) {
                      return 'String' == a(e) ? i.call(e, '') : Object(e);
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
                        return function(t, o, a) {
                            return e.call(n, t, o, a);
                        };
                }
                return function() {
                    return e.apply(n, arguments);
                };
            };
        },
        function(e, n, t) {
            var o = t(118),
                a = t(52);
            e.exports =
                Object.keys ||
                function(e) {
                    return o(e, a);
                };
        },
        function(e, n, t) {
            var o = t(16),
                a = t(8),
                i = function(e) {
                    return 'function' == typeof e ? e : void 0;
                };
            e.exports = function(e, n) {
                return arguments.length < 2 ? i(o[e]) || i(a[e]) : (o[e] && o[e][n]) || (a[e] && a[e][n]);
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
            var o = t(5)('match');
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
                a = t(13),
                i = t(47);
            e.exports =
                !o &&
                !a(function() {
                    return (
                        7 !=
                        Object.defineProperty(i('div'), 'a', {
                            get: function() {
                                return 7;
                            }
                        }).a
                    );
                });
        },
        function(e, n, t) {
            var o = t(8),
                a = t(14),
                i = o.document,
                r = a(i) && a(i.createElement);
            e.exports = function(e) {
                return r ? i.createElement(e) : {};
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
                a,
                i,
                r = t(50),
                s = t(11),
                l = t(15),
                c = t(5),
                u = t(33),
                m = c('iterator'),
                d = !1;
            [].keys && ('next' in (i = [].keys()) ? (a = r(r(i))) !== Object.prototype && (o = a) : (d = !0)),
                null == o && (o = {}),
                u ||
                    l(o, m) ||
                    s(o, m, function() {
                        return this;
                    }),
                (e.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: d });
        },
        function(e, n, t) {
            var o = t(15),
                a = t(28),
                i = t(35),
                r = t(114),
                s = i('IE_PROTO'),
                l = Object.prototype;
            e.exports = r
                ? Object.getPrototypeOf
                : function(e) {
                      return (
                          (e = a(e)),
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
                a = t(17),
                i = t(119),
                r = function(e) {
                    return function(n, t, r) {
                        var s,
                            l = o(n),
                            c = a(l.length),
                            u = i(r, c);
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
                a = t(11),
                i = t(15),
                r = t(121),
                s = t(5)('toStringTag'),
                l = r !== {}.toString;
            e.exports = function(e, n, t, c) {
                if (e) {
                    var u = t ? e : e.prototype;
                    i(u, s) || o(u, s, { configurable: !0, value: n }), c && l && a(u, 'toString', r);
                }
            };
        },
        function(e, n, t) {
            var o = t(27),
                a = t(5)('toStringTag'),
                i =
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
                      })((n = Object(e)), a))
                    ? t
                    : i
                    ? o(n)
                    : 'Object' == (r = o(n)) && 'function' == typeof n.callee
                    ? 'Arguments'
                    : r;
            };
        },
        function(e, n) {
            e.exports = function() {};
        },
        function(e, n, t) {
            var o = t(12),
                a = t(40),
                i = t(26),
                r = t(37).f,
                s = function(e) {
                    return function(n) {
                        for (var t, s = i(n), l = a(s), c = l.length, u = 0, m = []; c > u; )
                            (t = l[u++]), (o && !r.call(s, t)) || m.push(e ? [t, s[t]] : s[t]);
                        return m;
                    };
                };
            e.exports = { entries: s(!0), values: s(!1) };
        },
        function(e, n, t) {
            e.exports = t(144);
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
                a = t(104),
                i = t(109),
                r = a.set,
                s = a.getterFor('String Iterator');
            i(
                String,
                'String',
                function(e) {
                    r(this, { type: 'String Iterator', string: String(e), index: 0 });
                },
                function() {
                    var e,
                        n = s(this),
                        t = n.string,
                        a = n.index;
                    return a >= t.length
                        ? { value: void 0, done: !0 }
                        : ((e = o(t, a)), (n.index += e.length), { value: e, done: !1 });
                }
            );
        },
        function(e, n, t) {
            var o = t(23),
                a = t(7),
                i = function(e) {
                    return function(n, t) {
                        var i,
                            r,
                            s = String(a(n)),
                            l = o(t),
                            c = s.length;
                        return l < 0 || l >= c
                            ? e
                                ? ''
                                : void 0
                            : (i = s.charCodeAt(l)) < 55296 ||
                              i > 56319 ||
                              l + 1 === c ||
                              (r = s.charCodeAt(l + 1)) < 56320 ||
                              r > 57343
                            ? e
                                ? s.charAt(l)
                                : i
                            : e
                            ? s.slice(l, l + 2)
                            : r - 56320 + ((i - 55296) << 10) + 65536;
                    };
                };
            e.exports = { codeAt: i(!1), charAt: i(!0) };
        },
        function(e, n, t) {
            var o,
                a,
                i,
                r = t(105),
                s = t(8),
                l = t(14),
                c = t(11),
                u = t(15),
                m = t(35),
                d = t(36);
            if (r) {
                var p = new (0, s.WeakMap)(),
                    g = p.get,
                    f = p.has,
                    h = p.set;
                (o = function(e, n) {
                    return h.call(p, e, n), n;
                }),
                    (a = function(e) {
                        return g.call(p, e) || {};
                    }),
                    (i = function(e) {
                        return f.call(p, e);
                    });
            } else {
                var y = m('state');
                (d[y] = !0),
                    (o = function(e, n) {
                        return c(e, y, n), n;
                    }),
                    (a = function(e) {
                        return u(e, y) ? e[y] : {};
                    }),
                    (i = function(e) {
                        return u(e, y);
                    });
            }
            e.exports = {
                set: o,
                get: a,
                has: i,
                enforce: function(e) {
                    return i(e) ? a(e) : o(e, {});
                },
                getterFor: function(e) {
                    return function(n) {
                        var t;
                        if (!l(n) || (t = a(n)).type !== e)
                            throw TypeError('Incompatible receiver, ' + e + ' required');
                        return t;
                    };
                }
            };
        },
        function(e, n, t) {
            var o = t(8),
                a = t(106),
                i = o.WeakMap;
            e.exports = 'function' == typeof i && /native code/.test(a.call(i));
        },
        function(e, n, t) {
            var o = t(32);
            e.exports = o('native-function-to-string', Function.toString);
        },
        function(e, n, t) {
            var o = t(8),
                a = t(108),
                i = o['__core-js_shared__'] || a('__core-js_shared__', {});
            e.exports = i;
        },
        function(e, n, t) {
            var o = t(8),
                a = t(11);
            e.exports = function(e, n) {
                try {
                    a(o, e, n);
                } catch (t) {
                    o[e] = n;
                }
                return n;
            };
        },
        function(e, n, t) {
            'use strict';
            var o = t(4),
                a = t(113),
                i = t(50),
                r = t(122),
                s = t(53),
                l = t(11),
                c = t(124),
                u = t(5),
                m = t(33),
                d = t(29),
                p = t(49),
                g = p.IteratorPrototype,
                f = p.BUGGY_SAFARI_ITERATORS,
                h = u('iterator'),
                y = function() {
                    return this;
                };
            e.exports = function(e, n, t, u, p, _, w) {
                a(t, n, u);
                var x,
                    v,
                    b,
                    E = function(e) {
                        if (e === p && T) return T;
                        if (!f && e in R) return R[e];
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
                    R = e.prototype,
                    O = R[h] || R['@@iterator'] || (p && R[p]),
                    T = (!f && O) || E(p),
                    I = ('Array' == n && R.entries) || O;
                if (
                    (I &&
                        ((x = i(I.call(new e()))),
                        g !== Object.prototype &&
                            x.next &&
                            (m || i(x) === g || (r ? r(x, g) : 'function' != typeof x[h] && l(x, h, y)),
                            s(x, P, !0, !0),
                            m && (d[P] = y))),
                    'values' == p &&
                        O &&
                        'values' !== O.name &&
                        ((A = !0),
                        (T = function() {
                            return O.call(this);
                        })),
                    (m && !w) || R[h] === T || l(R, h, T),
                    (d[n] = T),
                    p)
                )
                    if (((v = { values: E('values'), keys: _ ? T : E('keys'), entries: E('entries') }), w))
                        for (b in v) (!f && !A && b in R) || c(R, b, v[b]);
                    else o({ target: n, proto: !0, forced: f || A }, v);
                return v;
            };
        },
        function(e, n, t) {
            var o = t(12),
                a = t(37),
                i = t(25),
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
                      if (l(e, n)) return i(!a.f.call(e, n), e[n]);
                  };
        },
        function(e, n, t) {
            var o = t(13),
                a = /#|\.prototype\./,
                i = function(e, n) {
                    var t = s[r(e)];
                    return t == c || (t != l && ('function' == typeof n ? o(n) : !!n));
                },
                r = (i.normalize = function(e) {
                    return String(e)
                        .replace(a, '.')
                        .toLowerCase();
                }),
                s = (i.data = {}),
                l = (i.NATIVE = 'N'),
                c = (i.POLYFILL = 'P');
            e.exports = i;
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
                a = t(116),
                i = t(25),
                r = t(53),
                s = t(29),
                l = function() {
                    return this;
                };
            e.exports = function(e, n, t) {
                var c = n + ' Iterator';
                return (e.prototype = a(o, { next: i(1, t) })), r(e, c, !1, !0), (s[c] = l), e;
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
                a = t(117),
                i = t(52),
                r = t(36),
                s = t(120),
                l = t(47),
                c = t(35)('IE_PROTO'),
                u = function() {},
                m = function() {
                    var e,
                        n = l('iframe'),
                        t = i.length;
                    for (
                        n.style.display = 'none',
                            s.appendChild(n),
                            n.src = String('javascript:'),
                            (e = n.contentWindow.document).open(),
                            e.write('<script>document.F=Object</script>'),
                            e.close(),
                            m = e.F;
                        t--;

                    )
                        delete m.prototype[i[t]];
                    return m();
                };
            (e.exports =
                Object.create ||
                function(e, n) {
                    var t;
                    return (
                        null !== e
                            ? ((u.prototype = o(e)), (t = new u()), (u.prototype = null), (t[c] = e))
                            : (t = m()),
                        void 0 === n ? t : a(t, n)
                    );
                }),
                (r[c] = !0);
        },
        function(e, n, t) {
            var o = t(12),
                a = t(24),
                i = t(21),
                r = t(40);
            e.exports = o
                ? Object.defineProperties
                : function(e, n) {
                      i(e);
                      for (var t, o = r(n), s = o.length, l = 0; s > l; ) a.f(e, (t = o[l++]), n[t]);
                      return e;
                  };
        },
        function(e, n, t) {
            var o = t(15),
                a = t(26),
                i = t(51).indexOf,
                r = t(36);
            e.exports = function(e, n) {
                var t,
                    s = a(e),
                    l = 0,
                    c = [];
                for (t in s) !o(r, t) && o(s, t) && c.push(t);
                for (; n.length > l; ) o(s, (t = n[l++])) && (~i(c, t) || c.push(t));
                return c;
            };
        },
        function(e, n, t) {
            var o = t(23),
                a = Math.max,
                i = Math.min;
            e.exports = function(e, n) {
                var t = o(e);
                return t < 0 ? a(t + n, 0) : i(t, n);
            };
        },
        function(e, n, t) {
            var o = t(41);
            e.exports = o('document', 'documentElement');
        },
        function(e, n, t) {
            'use strict';
            var o = t(54),
                a = {};
            (a[t(5)('toStringTag')] = 'z'),
                (e.exports =
                    '[object z]' !== String(a)
                        ? function() {
                              return '[object ' + o(this) + ']';
                          }
                        : a.toString);
        },
        function(e, n, t) {
            var o = t(21),
                a = t(123);
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
                          return function(t, i) {
                              return o(t), a(i), n ? e.call(t, i) : (t.__proto__ = i), t;
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
            e.exports = function(e, n, t, a) {
                a && a.enumerable ? (e[n] = t) : o(e, n, t);
            };
        },
        function(e, n, t) {
            var o = t(4),
                a = t(126);
            o(
                {
                    target: 'Array',
                    stat: !0,
                    forced: !t(131)(function(e) {
                        Array.from(e);
                    })
                },
                { from: a }
            );
        },
        function(e, n, t) {
            'use strict';
            var o = t(39),
                a = t(28),
                i = t(127),
                r = t(128),
                s = t(17),
                l = t(129),
                c = t(130);
            e.exports = function(e) {
                var n,
                    t,
                    u,
                    m,
                    d,
                    p = a(e),
                    g = 'function' == typeof this ? this : Array,
                    f = arguments.length,
                    h = f > 1 ? arguments[1] : void 0,
                    y = void 0 !== h,
                    _ = 0,
                    w = c(p);
                if ((y && (h = o(h, f > 2 ? arguments[2] : void 0, 2)), null == w || (g == Array && r(w))))
                    for (t = new g((n = s(p.length))); n > _; _++) l(t, _, y ? h(p[_], _) : p[_]);
                else
                    for (d = (m = w.call(p)).next, t = new g(); !(u = d.call(m)).done; _++)
                        l(t, _, y ? i(m, h, [u.value, _], !0) : u.value);
                return (t.length = _), t;
            };
        },
        function(e, n, t) {
            var o = t(21);
            e.exports = function(e, n, t, a) {
                try {
                    return a ? n(o(t)[0], t[1]) : n(t);
                } catch (n) {
                    var i = e.return;
                    throw (void 0 !== i && o(i.call(e)), n);
                }
            };
        },
        function(e, n, t) {
            var o = t(5),
                a = t(29),
                i = o('iterator'),
                r = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (a.Array === e || r[i] === e);
            };
        },
        function(e, n, t) {
            'use strict';
            var o = t(34),
                a = t(24),
                i = t(25);
            e.exports = function(e, n, t) {
                var r = o(n);
                r in e ? a.f(e, r, i(0, t)) : (e[r] = t);
            };
        },
        function(e, n, t) {
            var o = t(54),
                a = t(29),
                i = t(5)('iterator');
            e.exports = function(e) {
                if (null != e) return e[i] || e['@@iterator'] || a[o(e)];
            };
        },
        function(e, n, t) {
            var o = t(5)('iterator'),
                a = !1;
            try {
                var i = 0,
                    r = {
                        next: function() {
                            return { done: !!i++ };
                        },
                        return: function() {
                            a = !0;
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
                if (!n && !a) return !1;
                var t = !1;
                try {
                    var i = {};
                    (i[o] = function() {
                        return {
                            next: function() {
                                return { done: (t = !0) };
                            }
                        };
                    }),
                        e(i);
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
            var o = t(4),
                a = t(17),
                i = t(42),
                r = t(7),
                s = t(43),
                l = ''.startsWith,
                c = Math.min;
            o(
                { target: 'String', proto: !0, forced: !s('startsWith') },
                {
                    startsWith: function(e) {
                        var n = String(r(this));
                        i(e);
                        var t = a(c(arguments.length > 1 ? arguments[1] : void 0, n.length)),
                            o = String(e);
                        return l ? l.call(n, o, t) : n.slice(t, t + o.length) === o;
                    }
                }
            );
        },
        function(e, n, t) {
            var o = t(14),
                a = t(27),
                i = t(5)('match');
            e.exports = function(e) {
                var n;
                return o(e) && (void 0 !== (n = e[i]) ? !!n : 'RegExp' == a(e));
            };
        },
        function(e, n, t) {
            t(136);
            var o = t(18);
            e.exports = o('Array', 'includes');
        },
        function(e, n, t) {
            'use strict';
            var o = t(4),
                a = t(51).includes,
                i = t(55);
            o(
                { target: 'Array', proto: !0 },
                {
                    includes: function(e) {
                        return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    }
                }
            ),
                i('includes');
        },
        function(e, n, t) {
            t(138);
            var o = t(16);
            e.exports = o.Object.entries;
        },
        function(e, n, t) {
            var o = t(4),
                a = t(56).entries;
            o(
                { target: 'Object', stat: !0 },
                {
                    entries: function(e) {
                        return a(e);
                    }
                }
            );
        },
        function(e, n, t) {
            t(140);
            var o = t(16);
            e.exports = o.Object.assign;
        },
        function(e, n, t) {
            var o = t(4),
                a = t(141);
            o({ target: 'Object', stat: !0, forced: Object.assign !== a }, { assign: a });
        },
        function(e, n, t) {
            'use strict';
            var o = t(12),
                a = t(13),
                i = t(40),
                r = t(142),
                s = t(37),
                l = t(28),
                c = t(38),
                u = Object.assign;
            e.exports =
                !u ||
                a(function() {
                    var e = {},
                        n = {},
                        t = Symbol();
                    return (
                        (e[t] = 7),
                        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
                            n[e] = e;
                        }),
                        7 != u({}, e)[t] || 'abcdefghijklmnopqrst' != i(u({}, n)).join('')
                    );
                })
                    ? function(e, n) {
                          for (var t = l(e), a = arguments.length, u = 1, m = r.f, d = s.f; a > u; )
                              for (
                                  var p, g = c(arguments[u++]), f = m ? i(g).concat(m(g)) : i(g), h = f.length, y = 0;
                                  h > y;

                              )
                                  (p = f[y++]), (o && !d.call(g, p)) || (t[p] = g[p]);
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
                        var a = (n[o] = { i: o, l: !1, exports: {} });
                        return e[o].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
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
                        var a = [],
                            i = [],
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
                        var m = (function() {
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
                                        a = void 0,
                                        i = !1,
                                        r = !1,
                                        s = !1;
                                    c();
                                    try {
                                        n(
                                            function(e) {
                                                s ? t.resolve(e) : ((i = !0), (o = e));
                                            },
                                            function(e) {
                                                s ? t.reject(e) : ((r = !0), (a = e));
                                            }
                                        );
                                    } catch (e) {
                                        return u(), void this.reject(e);
                                    }
                                    u(), (s = !0), i ? this.resolve(o) : r && this.reject(a);
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
                                                        if (-1 === a.indexOf(e)) {
                                                            a.push(e),
                                                                setTimeout(function() {
                                                                    throw e;
                                                                }, 1);
                                                            for (var t = 0; t < i.length; t++) i[t](e, n);
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
                                        a = this.handlers;
                                    if (!this.dispatching && (n || t)) {
                                        (this.dispatching = !0), c();
                                        for (
                                            var i = function(e, n) {
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
                                            r < a.length;
                                            r++
                                        ) {
                                            var s = a[r],
                                                l = s.onSuccess,
                                                m = s.onError,
                                                d = s.promise,
                                                p = void 0;
                                            if (n)
                                                try {
                                                    p = l ? l(this.value) : this.value;
                                                } catch (e) {
                                                    d.reject(e);
                                                    continue;
                                                }
                                            else if (t) {
                                                if (!m) {
                                                    d.reject(this.error);
                                                    continue;
                                                }
                                                try {
                                                    p = m(this.error);
                                                } catch (e) {
                                                    d.reject(e);
                                                    continue;
                                                }
                                            }
                                            p instanceof e && (p.resolved || p.rejected)
                                                ? (p.resolved ? d.resolve(p.value) : d.reject(p.error),
                                                  (p.errorHandled = !0))
                                                : o(p)
                                                ? p instanceof e && (p.resolved || p.rejected)
                                                    ? p.resolved
                                                        ? d.resolve(p.value)
                                                        : d.reject(p.error)
                                                    : i(p, d)
                                                : d.resolve(p);
                                        }
                                        (a.length = 0), (this.dispatching = !1), u();
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
                                        a = n.length,
                                        i = [];
                                    if (!a) return t.resolve(i), t;
                                    for (
                                        var r = function(e, n, o) {
                                                return n.then(
                                                    function(n) {
                                                        (i[e] = n), 0 == (a -= 1) && t.resolve(i);
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
                                                (i[s] = l.value), (a -= 1);
                                                continue;
                                            }
                                        } else if (!o(l)) {
                                            (i[s] = l), (a -= 1);
                                            continue;
                                        }
                                        r(s, e.resolve(l), t);
                                    }
                                    return 0 === a && t.resolve(i), t;
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
                                            i.push(e),
                                            {
                                                cancel: function() {
                                                    i.splice(i.indexOf(e), 1);
                                                }
                                            }
                                        );
                                    })(e);
                                }),
                                (e.try = function(n, t, o) {
                                    if (n && 'function' != typeof n && !n.call)
                                        throw new Error('Promise.try expected a function');
                                    var a = void 0;
                                    c();
                                    try {
                                        a = n.apply(t, o || []);
                                    } catch (n) {
                                        return u(), e.reject(n);
                                    }
                                    return u(), e.resolve(a);
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
                            return m;
                        });
                    }
                }));
        },
        function(e, n, t) {
            t(145);
            var o = t(18);
            e.exports = o('String', 'padStart');
        },
        function(e, n, t) {
            'use strict';
            var o = t(4),
                a = t(146).start;
            o(
                { target: 'String', proto: !0, forced: t(148) },
                {
                    padStart: function(e) {
                        return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    }
                }
            );
        },
        function(e, n, t) {
            var o = t(17),
                a = t(147),
                i = t(7),
                r = Math.ceil,
                s = function(e) {
                    return function(n, t, s) {
                        var l,
                            c,
                            u = String(i(n)),
                            m = u.length,
                            d = void 0 === s ? ' ' : String(s),
                            p = o(t);
                        return p <= m || '' == d
                            ? u
                            : ((c = a.call(d, r((l = p - m) / d.length))).length > l && (c = c.slice(0, l)),
                              e ? u + c : c + u);
                    };
                };
            e.exports = { start: s(!1), end: s(!0) };
        },
        function(e, n, t) {
            'use strict';
            var o = t(23),
                a = t(7);
            e.exports =
                ''.repeat ||
                function(e) {
                    var n = String(a(this)),
                        t = '',
                        i = o(e);
                    if (i < 0 || i == 1 / 0) throw RangeError('Wrong number of repetitions');
                    for (; i > 0; (i >>>= 1) && (n += n)) 1 & i && (t += n);
                    return t;
                };
        },
        function(e, n, t) {
            var o = t(149);
            e.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
        },
        function(e, n, t) {
            var o = t(41);
            e.exports = o('navigator', 'userAgent') || '';
        },
        function(e, n, t) {
            t(151);
            var o = t(18);
            e.exports = o('Array', 'find');
        },
        function(e, n, t) {
            'use strict';
            var o = t(4),
                a = t(152).find,
                i = t(55),
                r = !0;
            'find' in [] &&
                Array(1).find(function() {
                    r = !1;
                }),
                o(
                    { target: 'Array', proto: !0, forced: r },
                    {
                        find: function(e) {
                            return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
                        }
                    }
                ),
                i('find');
        },
        function(e, n, t) {
            var o = t(39),
                a = t(38),
                i = t(28),
                r = t(17),
                s = t(153),
                l = [].push,
                c = function(e) {
                    var n = 1 == e,
                        t = 2 == e,
                        c = 3 == e,
                        u = 4 == e,
                        m = 6 == e,
                        d = 5 == e || m;
                    return function(p, g, f, h) {
                        for (
                            var y,
                                _,
                                w = i(p),
                                x = a(w),
                                v = o(g, f, 3),
                                b = r(x.length),
                                E = 0,
                                P = h || s,
                                A = n ? P(p, b) : t ? P(p, 0) : void 0;
                            b > E;
                            E++
                        )
                            if ((d || E in x) && ((_ = v((y = x[E]), E, w)), e))
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
                        return m ? -1 : c || u ? u : A;
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
                a = t(154),
                i = t(5)('species');
            e.exports = function(e, n) {
                var t;
                return (
                    a(e) &&
                        ('function' != typeof (t = e.constructor) || (t !== Array && !a(t.prototype))
                            ? o(t) && null === (t = t[i]) && (t = void 0)
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
            t(156);
            var o = t(18);
            e.exports = o('String', 'includes');
        },
        function(e, n, t) {
            'use strict';
            var o = t(4),
                a = t(42),
                i = t(7);
            o(
                { target: 'String', proto: !0, forced: !t(43)('includes') },
                {
                    includes: function(e) {
                        return !!~String(i(this)).indexOf(a(e), arguments.length > 1 ? arguments[1] : void 0);
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
            var o = t(4),
                a = t(17),
                i = t(42),
                r = t(7),
                s = t(43),
                l = ''.endsWith,
                c = Math.min;
            o(
                { target: 'String', proto: !0, forced: !s('endsWith') },
                {
                    endsWith: function(e) {
                        var n = String(r(this));
                        i(e);
                        var t = arguments.length > 1 ? arguments[1] : void 0,
                            o = a(n.length),
                            s = void 0 === t ? o : c(a(t), o),
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
            var o = t(4),
                a = t(56).values;
            o(
                { target: 'Object', stat: !0 },
                {
                    values: function(e) {
                        return a(e);
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
            t(4)(
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
            var a = t(3),
                i = t.n(a),
                r = t(0),
                s = t.n(r);
            function l(e) {
                var n = new Map();
                return function() {
                    for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                    var i = JSON.stringify(o);
                    return n.has(i) || n.set(i, e.apply(void 0, o)), n.get(i);
                };
            }
            function c(e, n) {
                var t = new Map();
                return function(o, a) {
                    void 0 === a && (a = !1);
                    var i = JSON.stringify(
                        n.map(function(e) {
                            return o[e];
                        })
                    );
                    return (t.has(i) && !a) || t.set(i, e(o)), t.get(i);
                };
            }
            function u(e) {
                for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                    t[o - 1] = arguments[o];
                return function() {
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return e.apply(void 0, t.concat(o));
                };
            }
            function m(e, n) {
                return (
                    void 0 === n && (n = e.length),
                    function t() {
                        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                        return a.length < n
                            ? function() {
                                  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                                      n[o] = arguments[o];
                                  return t.apply(void 0, a.concat(n));
                              }
                            : e.apply(void 0, a);
                    }
                );
            }
            function d(e) {
                return function(n) {
                    var t = e(n);
                    return 'object' == typeof t && t.then
                        ? t.then(function() {
                              return n;
                          })
                        : n;
                };
            }
            function p() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return function(e) {
                    return n.reduce(function(e, n) {
                        return n(e);
                    }, e);
                };
            }
            var g = m(function(e, n) {
                    return n[e];
                }),
                f = m(function(e, n) {
                    var t;
                    return ((t = {})[e] = n), t;
                }),
                h = t(10),
                y = t.n(h),
                _ = t(2),
                w = t.n(_);
            function x(e) {
                return w()(e).reduce(function(e, n) {
                    var t,
                        a,
                        i,
                        r = n[0],
                        s = n[1];
                    return Array.isArray(s)
                        ? o({}, e, (((a = {})[r] = [].concat(s)), a))
                        : o({}, e, 'object' == typeof s ? (((i = {})[r] = x(s)), i) : (((t = {})[r] = s), t));
                }, {});
            }
            function v(e, n) {
                return (function e(n, t) {
                    return w()(t).reduce(function(t, a) {
                        var i,
                            r,
                            s,
                            l,
                            c = a[0],
                            u = a[1];
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
                                      : (((i = {})[c] = u), i)
                              )
                            : o({}, t, (((s = {})[c] = x(u)), s));
                    }, n);
                })(x(e), n);
            }
            function b(e, n) {
                return n.split('.').reduce(function(e, n) {
                    return 'object' == typeof e || 'function' == typeof e ? e[n] : void 0;
                }, e);
            }
            function E(e, n, t) {
                var o;
                void 0 === t && (t = '-');
                var a,
                    i = e.indexOf(t);
                if (-1 === i) return ((a = {})[e] = n), a;
                var r = e.slice(0, i),
                    s = e.slice(i + 1);
                return ((o = {})[r] = E(s, n)), o;
            }
            function P(e) {
                return 'object' == typeof HTMLElement
                    ? e instanceof HTMLElement
                    : e && 'object' == typeof e && null !== e && 1 === e.nodeType && 'string' == typeof e.nodeName;
            }
            function A(e) {
                var n = i()(e.attributes)
                    .filter(function(e) {
                        var n = e.nodeName;
                        return s()(n, 'data-pp-');
                    })
                    .reduce(function(e, n) {
                        var t = n.nodeValue;
                        return t ? v(e, E(n.nodeName.replace('data-pp-', ''), t)) : e;
                    }, {});
                if (
                    !e.firstElementChild ||
                    'SCRIPT' !== e.firstElementChild.tagName ||
                    'text/template' !== e.firstElementChild.getAttribute('type')
                )
                    return n;
                var t = e.firstElementChild.textContent.trim();
                return e.removeChild(e.firstElementChild), v(n, { style: { markup: t } });
            }
            var R = m(function(e, n, t) {
                    return n.getElementsByClassName(e + '__' + t)[0];
                }),
                O = m(function(e, n) {
                    var t = document.createElement('style');
                    (t.textContent = n), e.insertBefore(t, e.firstChild);
                }),
                T = m(function(e, n) {
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
                I = m(function(e, n) {
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
                S = m(function(e, n, t, o) {
                    if ((void 0 === t && (t = 'PayPal Credit'), 'string' == typeof n)) {
                        var a = new Image();
                        (a.alt = t),
                            (a.className = 'message__logo'),
                            (a.src = n),
                            o && (a.srcset = o),
                            e.appendChild(a);
                    } else if (Array.isArray(n)) {
                        var i = n[0],
                            r = n[1],
                            s = n[2],
                            l = new Image();
                        (l.src = i), (l.alt = t);
                        var c = document.createElement('div');
                        c.className = 'message__logo message__logo--svg';
                        var u = document.createElement('canvas');
                        (u.height = s), (u.width = r), c.appendChild(l), c.appendChild(u), e.appendChild(c);
                    } else e.parentNode.removeChild(e);
                }, 2);
            function L(e, n) {
                if (null == e) return {};
                var t,
                    o,
                    a = {},
                    i = Object.keys(e);
                for (o = 0; o < i.length; o++) n.indexOf((t = i[o])) >= 0 || (a[t] = e[t]);
                return a;
            }
            Object.create(Error.prototype);
            var N = t(19),
                C = t.n(N),
                M = t(1);
            function z(e) {
                void 0 === e && (e = {});
                var n = o({}, e);
                return [n, u(C.a, n)];
            }
            function j(e, n, t) {
                var a = void 0 === t ? {} : t,
                    i = a.data,
                    r = a.headers;
                return new M.ZalgoPromise(function(t, a) {
                    var s = new XMLHttpRequest();
                    (s.onreadystatechange = function() {
                        if (4 === s.readyState) {
                            var e = s
                                .getAllResponseHeaders()
                                .split('\n')
                                .reduce(function(e, n) {
                                    var t,
                                        a = n.trim().split(': ');
                                    return o({}, e, (((t = {})[a[0]] = a[1]), t));
                                }, {});
                            switch (s.status) {
                                case 200:
                                    t({ headers: e, data: s.responseText });
                                    break;
                                case 204:
                                    t({ headers: e });
                                    break;
                                default:
                                    a(new Error('Request failed'));
                            }
                        }
                    }),
                        s.open(e, n, !0),
                        r &&
                            w()(r).forEach(function(e) {
                                s.setRequestHeader(e[0], e[1]);
                            }),
                        s.send('object' == typeof i ? JSON.stringify(i) : i);
                });
            }
            var k = z(window.__paypal_messages_state__ || { nextId: 1, config: {} }),
                W = k[0],
                H = k[1];
            Object.defineProperty(window, '__paypal_messages_state__', {
                value: W,
                enumerable: !1,
                configurable: !0,
                writable: !1
            });
            var B = function() {
                    return H({ nextId: W.nextId + 1 }), W.nextId - 1;
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
                Y = Object({
                    __MESSAGE__: '/imadserver/upstream',
                    __MODAL__: '/upstream/assets/messaging/modal',
                    __LOGGER__: '/ppcredit/messagingLogger',
                    __TERMS__: '/ppcredit/finance/terms'
                });
            function G(e) {
                var n = '__' + 'production'.toUpperCase() + '__',
                    t = '__' + e.toUpperCase() + '__';
                return '' + ((D[t] && D[t][n]) || D[n]) + Y[t];
            }
            var F = t(57),
                U = t.n(F),
                V = t(6),
                Z = t.n(V),
                J = m(function(e, n, t) {
                    var a = e.uuid,
                        i = e.urls;
                    void 0 === t && (t = !1);
                    var r = new window.Image();
                    if ('object' == typeof n) {
                        var s = o({}, n, { uuid: t ? a + '::banner.hidden:true' : a }),
                            l = w()(s).reduce(function(e, n) {
                                var t = n[1];
                                return void 0 === t ? e : e + '&' + n[0] + '=' + t;
                            }, '');
                        r.src = (i[n.et] || i.DEFAULT) + '&bdata=' + encodeURIComponent(l.slice(1));
                    } else 'string' == typeof n && (r.src = i[n] || i.DEFAULT);
                }, 2),
                q = {
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
                K = {
                    MESSAGE_OVERFLOW: 'MESSAGE_OVERFLOW',
                    MESSAGE_HIDDEN: 'MESSAGE_HIDDEN',
                    MESSAGE_INVALID_LEGACY: 'MESSAGE_INVALID_LEGACY',
                    MESSAGE_INVALID_MARKUP: 'MESSAGE_INVALID_MARKUP',
                    MODAL_FAIL: 'MODAL_FAIL',
                    CUSTOM_TEMPLATE_FAIL: 'CUSTOM_TEMPLATE_FAIL',
                    CUSTOM_JSON_OPTIONS_FAIL: 'CUSTOM_JSON_OPTIONS_FAIL',
                    INTERNAL_FAIL: 'INTERNAL_FAIL'
                },
                $ = {
                    create: function(e) {
                        var n = e.id,
                            t = e.selector,
                            a = e.type,
                            i = z({ count: 1, account: e.account, history: [], logs: [] }),
                            r = i[0],
                            s = i[1],
                            l = {
                                start: function(e) {
                                    b(e, 'options.account') &&
                                        r.account !== e.options.account &&
                                        s({ account: e.account }),
                                        l.info(q.START, o({ t: new Date().getTime() }, e));
                                },
                                end: function(e) {
                                    l.info(q.END, o({ t: new Date().getTime() }, e)),
                                        (function() {
                                            if (!(r.count > 3)) {
                                                var e,
                                                    i = Z()(r.logs, function(e) {
                                                        var n = e.event;
                                                        return 'Create' === n || 'Update' === n;
                                                    }),
                                                    l = {
                                                        version: '1.3.2',
                                                        target: 'STANDALONE',
                                                        url: window.location.href,
                                                        selector: t,
                                                        type: a + (i ? '-' + i.event : ''),
                                                        id: n + '-' + U()(r.count, 4, '0'),
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
                                    l.info(q.ERROR, e);
                                },
                                track: J,
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
                X = t.n(Q),
                ee = l(function(e) {
                    var n,
                        t = e.markup;
                    return M.ZalgoPromise.resolve(
                        s()(t, 'https://www.paypalobjects.com')
                            ? ((n = t),
                              new M.ZalgoPromise(function(e) {
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
                ne = t(58),
                te = t.n(ne),
                oe = t(59),
                ae = t.n(oe),
                ie = t(60),
                re = t.n(ie),
                se = t(30),
                le = t.n(se),
                ce = t(9),
                ue = t.n(ce),
                me = t(61),
                de = t.n(me),
                pe = t(62),
                ge = t.n(pe),
                fe = t(44),
                he = t.n(fe),
                ye = t(63),
                _e = t.n(ye),
                we = t(64),
                xe = t.n(we),
                ve = t(65),
                be = t.n(ve),
                Ee = t(66),
                Pe = t.n(Ee),
                Ae = t(67),
                Re = t.n(Ae),
                Oe = t(68),
                Te = t.n(Oe),
                Ie = [
                    ['default', [ue.a, le.a, de.a].join('\n')],
                    ['logo.type:primary', Pe.a],
                    ['logo.type:alternative', ge.a],
                    ['logo.type:inline', he.a],
                    ['logo.type:none', [he.a, _e.a].join('\n')],
                    ['logo.position:right', xe.a],
                    ['logo.position:top', be.a],
                    ['logo.type:alternative && logo.position:top', Re.a],
                    ['text.color:white', Te.a]
                ],
                Se = t(69),
                Le = t.n(Se),
                Ne = t(70),
                Ce = t.n(Ne),
                Me = t(71),
                ze = t.n(Me),
                je = t(45),
                ke = t.n(je),
                We = t(72),
                He = t.n(We),
                Be = t(73),
                De = t.n(Be),
                Ye = t(74),
                Ge = t.n(Ye),
                Fe = t(75),
                Ue = t.n(Fe),
                Ve = t(76),
                Ze = t.n(Ve),
                Je = t(77),
                qe = t.n(Je),
                Ke = t(78),
                $e = t.n(Ke),
                Qe = t(79),
                Xe = t.n(Qe),
                en = [
                    ['default', [ue.a, le.a, Le.a].join('\n')],
                    ['ratio:1x1', Ce.a],
                    ['ratio:1x4', ze.a],
                    ['ratio:8x1', [ke.a, He.a].join('\n')],
                    ['ratio:20x1', [ke.a, De.a].join('\n')],
                    ['color:blue', Ge.a],
                    ['color:gray', Ue.a],
                    ['color:black', qe.a],
                    ['color:white', $e.a],
                    ['color:white-no-border', Xe.a],
                    ['color:blue && ratio:1x4', Ze.a]
                ],
                nn = t(80),
                tn = t.n(nn),
                on = t(81),
                an = t.n(on),
                rn = t(82),
                sn = t.n(rn),
                ln = t(83),
                cn = t.n(ln),
                un = t(84),
                mn = t.n(un),
                dn = t(85),
                pn = t.n(dn),
                gn = t(86),
                fn = t.n(gn),
                hn = t(87),
                yn = t.n(hn),
                _n = t(88),
                wn = t.n(_n),
                xn = t(89),
                vn = t.n(xn),
                bn = t(90),
                En = t.n(bn),
                Pn = t(91),
                An = t.n(Pn),
                Rn = t(92),
                On = t.n(Rn),
                Tn = t(93),
                In = t.n(Tn),
                Sn = t(94),
                Ln = t.n(Sn),
                Nn = t(95),
                Cn = t.n(Nn),
                Mn = t(96),
                zn = t.n(Mn),
                jn = t(97),
                kn = t.n(jn),
                Wn = t(98),
                Hn = t.n(Wn),
                Bn = t(99),
                Dn = {
                    x168x374: { styles: pn.a, vertical: !0 },
                    x765x60: { styles: wn.a },
                    x1000x50: { styles: vn.a, termsIcon: !0 },
                    x234x100: { styles: fn.a, reverseLogo: !0 },
                    x310x100: { styles: yn.a, reverseLogo: !0 },
                    x1000x36: { styles: En.a, termsIcon: !0 },
                    x120x90: { styles: On.a, termsIcon: !0 },
                    x234x60: { styles: In.a, reverseLogo: !0, termsIcon: !0 },
                    x250x250: { styles: Ln.a, reverseLogo: !0, vertical: !0, termsIcon: !0 },
                    x300x50: { styles: Cn.a, reverseLogo: !0 },
                    x340x60: { styles: An.a, reverseLogo: !0 },
                    x468x60: { styles: zn.a, reverseLogo: !0, termsIcon: !0 },
                    x728x90: { styles: kn.a, reverseLogo: !0 },
                    x540x200: { styles: Hn.a, reverseLogo: !0, termsIcon: !0 },
                    x170x100: { styles: t.n(Bn).a, termsIcon: !0 }
                },
                Yn = Object.keys(Dn).map(function(e) {
                    var n = Dn[e],
                        t = e.slice(1),
                        o = t.split('x'),
                        a = o[1],
                        i =
                            '\n        .message {\n            width: ' +
                            o[0] +
                            'px;\n            min-height: ' +
                            a +
                            'px;\n        }\n\n        .message__container {\n            min-height: ' +
                            a +
                            'px;\n        }\n    ';
                    return (
                        n.vertical && (i = '' + i + sn.a),
                        n.reverseLogo && (i = '' + i + an.a),
                        n.vertical && n.reverseLogo && (i = '' + i + cn.a),
                        n.termsIcon && (i = '' + i + mn.a),
                        ['size:' + t, i]
                    );
                }),
                Gn = Object.keys(Dn).map(function(e) {
                    return ['size:' + e.slice(1), Dn[e].styles];
                }),
                Fn = [['default', [ue.a, tn.a].join('\n')]].concat(Yn, Gn),
                Un = t(100),
                Vn = {
                    'layout:text': Ie,
                    'layout:flex': en,
                    'layout:legacy': Fn,
                    'layout:custom': [['default', [ue.a, t.n(Un).a].join('\n')]]
                },
                Zn = {
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
            function Jn(e) {
                return (
                    '\n    .message__headline span.multi:nth-child(2) {\n        display: none;\n    }\n\n    @media (min-width: ' +
                    e +
                    'px) {\n        .message__headline span.multi:first-child {\n            display: none;\n            \n        }\n\n        .message__headline span.multi:nth-child(2) {\n            display: inline;\n            \n        }\n    }\n'
                );
            }
            var qn = [
                    [
                        'default',
                        {
                            logo: Zn.PRIMARY.COLOR,
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
                    ['size:234x100', { logo: Zn.PRIMARY.WHITE }],
                    ['size:310x100', { logo: Zn.PRIMARY.WHITE }],
                    ['size:340x60', { logo: Zn.PRIMARY.WHITE, styles: ['.message { max-width: 100% }'] }]
                ],
                Kn = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [
                                    Jn(290),
                                    '.message__messaging { flex: 1 1 auto; }',
                                    '@media (max-width: 289px) { .message__disclaimer { display: block; } }'
                                ],
                                logo: Zn.PRIMARY.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }],
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 320] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [200, 1e3],
                                styles: [Jn(280)],
                                logo: Zn.ALT_NO_PP.COLOR,
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
                                styles: [Jn(280)],
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
                                styles: [Jn(520)],
                                logo: Zn.ALTERNATIVE.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }]
                            }
                        ],
                        ['logo.type:primary && logo.position:top', { styles: [Jn(210)] }],
                        ['logo.type:alternative && logo.position:top', { styles: [Jn(210)] }],
                        ['text.color:white && logo.type:primary', { logo: Zn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Zn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Zn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
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
                        ['color:gray', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Zn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': qn
                },
                $n = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [Jn(320)],
                                logo: Zn.PRIMARY.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'], replace: [['99+', '99+.']] }],
                                disclaimer: ['extra', 'xsmall']
                            }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 320] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [240, 1e3],
                                styles: [Jn(290)],
                                logo: Zn.ALT_NO_PP.COLOR,
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
                                styles: [Jn(290)],
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
                                styles: [Jn(570)],
                                logo: Zn.ALTERNATIVE.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'], replace: [['99+', '99+.']] }]
                            }
                        ],
                        [
                            'logo.type:alternative && logo.position:top',
                            {
                                styles: [Jn(230)],
                                messageWidth: [150, 320],
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }]
                            }
                        ],
                        ['logo.type:primary && logo.position:top', { styles: [Jn(235)] }],
                        ['text.color:white && logo.type:primary', { logo: Zn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Zn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Zn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
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
                        ['color:gray', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Zn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': qn
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
                                logo: Zn.PRIMARY.COLOR,
                                headline: { tag: 'small', br: ['months', 'APR'] },
                                disclaimer: 'xsmall.2'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: 190 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [255, 1e3], logo: Zn.ALT_NO_PP.COLOR, headline: { br: ['APR'] } }
                        ],
                        ['logo.type:none', { messageWidth: [240, 1e3], logo: !1, headline: { br: ['APR'] } }],
                        [
                            'logo.type:alternative',
                            { logo: Zn.ALTERNATIVE.COLOR, headline: { replace: [['APR', 'APR.']], br: ['APR.'] } }
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
                        ['text.color:white && logo.type:primary', { logo: Zn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Zn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Zn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
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
                        ['color:gray', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Zn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        ['default', { logo: Zn.PRIMARY.WHITE, headline: 'legacy-small', disclaimer: 'legacy-large' }],
                        ['size:1000x36', { logo: Zn.PRIMARY.COLOR }],
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
                Xn = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [
                                    '.message__headline > span:not(:nth-of-type(2)) { text-decoration: underline; color: #0076ff; font-weight: 600; }',
                                    '.message__disclaimer > span { color: #2c2e2f; text-decoration: none; }'
                                ],
                                logo: Zn.PRIMARY.COLOR,
                                headline: { tag: 'xsmall', br: ['months'] },
                                disclaimer: 'xsmall.2'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: 130 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [250, 1e3], logo: Zn.ALT_NO_PP.COLOR, headline: { br: ['months'] } }
                        ],
                        ['logo.type:none', { messageWidth: [235, 1e3], logo: !1, headline: { br: ['months'] } }],
                        [
                            'logo.type:alternative',
                            {
                                logo: Zn.ALTERNATIVE.COLOR,
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
                        ['text.color:white && logo.type:primary', { logo: Zn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Zn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Zn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
                                headline: { tag: 'small', br: ['over'] },
                                subHeadline: 'small',
                                disclaimer: ['xsmall.2', 'xsmall']
                            }
                        ],
                        [
                            'ratio:1x4',
                            { headline: { br: ['over', 'months'] }, subHeadline: { tag: 'xsmall', br: ['money'] } }
                        ],
                        ['color:gray', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Zn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        ['default', { logo: Zn.PRIMARY.WHITE, headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:1000x36', { logo: Zn.PRIMARY.COLOR }],
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
                et = {
                    'layout:text': [
                        [
                            'default',
                            { logo: Zn.PRIMARY.COLOR, headline: { tag: 'small', br: ['/mo'] }, disclaimer: 'small' }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 200] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [200, 1e3],
                                logo: Zn.ALT_NO_PP.COLOR,
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
                        ['logo.type:alternative', { messageWidth: [140, 430], logo: Zn.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: Zn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Zn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Zn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
                                headline: { tag: 'medium', br: ['low as', 'at'] },
                                subHeadline: 'small',
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['ratio:1x4', { subHeadline: { tag: 'small', br: ['money'] } }],
                        ['color:gray', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Zn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
                                headline: 'legacy-medium',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-small'
                            }
                        ],
                        ['size:1000x36', { logo: Zn.PRIMARY.COLOR, disclaimer: 'legacy-medium' }],
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
                nt = {
                    'layout:text': [
                        ['default', { logo: Zn.PRIMARY.COLOR, headline: { tag: 'xsmall' }, disclaimer: 'xsmall' }],
                        ['logo.type:primary', { messageWidth: 130 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [195, 1e3], logo: Zn.ALT_NO_PP.COLOR, headline: { br: ['/mo'] } }
                        ],
                        ['logo.type:none', { messageWidth: [175, 1e3], logo: !1, headline: { br: ['/mo'] } }],
                        ['logo.type:alternative', { logo: Zn.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: Zn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Zn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Zn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
                                headline: { tag: 'small', br: ['low as'] },
                                subHeadline: 'small',
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['ratio:1x4', { subHeadline: { tag: 'small', br: ['money'] } }],
                        ['color:gray', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Zn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
                                headline: 'legacy-xsmall',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: Zn.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1 }],
                        ['size:250x250', { disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:540x200', { styles: ['.message__messaging { padding-top: 45px; }'] }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                },
                tt = {
                    'layout:text': [
                        [
                            'default',
                            { logo: Zn.PRIMARY.COLOR, headline: { tag: 'small', br: ['/mo'] }, disclaimer: 'xsmall' }
                        ],
                        ['logo.type:primary', { messageWidth: [190, 240] }],
                        [
                            'logo.type:inline',
                            { messageWidth: [260, 1e3], logo: Zn.ALT_NO_PP.COLOR, headline: { br: ['APR'] } }
                        ],
                        ['logo.type:none', { messageWidth: [260, 1e3], logo: !1, headline: { br: ['APR'] } }],
                        ['logo.type:alternative', { logo: Zn.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: Zn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Zn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Zn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
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
                        ['color:gray', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Zn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
                                headline: 'legacy-small',
                                subHeadline: 'legacy-xlarge',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: Zn.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1, headline: 'legacy-xsmall' }],
                        ['size:234x60', { headline: 'legacy-xsmall', disclaimer: 'legacy-medium.2' }],
                        ['size:250x250', { headline: 'legacy-small.2', disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:728x90', { headline: 'legacy-xsmall' }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                },
                ot = {
                    'layout:text': [
                        ['default', { logo: Zn.PRIMARY.COLOR, headline: { tag: 'small' }, disclaimer: 'xsmall' }],
                        ['logo.type:primary', { messageWidth: [140, 210] }],
                        [
                            'logo.type:inline',
                            { messageWidth: [200, 1e3], logo: Zn.ALT_NO_PP.COLOR, headline: { br: ['/mo'] } }
                        ],
                        ['logo.type:none', { messageWidth: [200, 1e3], logo: !1, headline: { br: ['/mo'] } }],
                        ['logo.type:alternative', { logo: Zn.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: Zn.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: Zn.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: Zn.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
                                headline: { tag: 'small', br: ['of'] },
                                subHeadline: 'small',
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['ratio:1x4', { headline: { br: ['payments'] }, subHeadline: { tag: 'small', br: ['money'] } }],
                        ['color:gray', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white', { logo: Zn.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: Zn.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: Zn.PRIMARY.WHITE,
                                headline: 'legacy-xsmall',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: Zn.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1 }],
                        ['size:250x250', { disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:540x200', { styles: ['.message__messaging { padding-top: 45px; }'] }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                };
            function at(e, n) {
                var t = Z()(e, function(e) {
                    var t = e[1];
                    return y()(t, n);
                });
                if (t) return t[0];
                if (X()(n, '.')) {
                    var o = n.split('.', 1)[0];
                    if (
                        (t = Z()(e, function(e) {
                            var n = e[1];
                            return y()(n, o);
                        }))
                    )
                        return t[0];
                }
                return Z()(e, function(e) {
                    var n = e[1];
                    return y()(n, 'default');
                })[0];
            }
            var it = document.createElement('div');
            it.innerHTML = ae.a;
            var rt = document.createElement('div');
            function st(e) {
                return e
                    .reduce(function(e, n) {
                        return [].concat(e, [n, document.createTextNode(' ')]);
                    }, [])
                    .slice(0, -1);
            }
            function lt(e, n) {
                void 0 === n && (n = {});
                var t,
                    o,
                    a,
                    i = (Array.isArray(e) ? e : [e]).map(function(e) {
                        var n = document.createElement('span');
                        return (
                            Array.isArray(e) ? ((n.textContent = e[0]), (n.className = e[1])) : (n.textContent = e), n
                        );
                    });
                return (
                    n.replace &&
                        ((t = n.replace),
                        i.forEach(function(e) {
                            var n = t.reduce(function(e, n) {
                                return e.replace(n[0], n[1]);
                            }, e.textContent);
                            e.textContent = n;
                        })),
                    n.br &&
                        ((o = i),
                        (a = [].concat(n.br)),
                        o.forEach(function(e) {
                            for (var n = e.textContent, t = []; X()(n, a[0]); ) t.push(a[0]), a.shift();
                            if (0 === t.length || (1 === t.length && te()(n, t[0]))) return e.classList.add('br');
                            var o = document.createElement('span');
                            (o.textContent = n), (o.className = 'br');
                            var i = t.reduce(
                                function(e, n) {
                                    var t = (function(e, n) {
                                        var t = e.textContent,
                                            o = t.indexOf(n) + n.length,
                                            a = e.cloneNode();
                                        if (((a.textContent = t.slice(0, o).trim()), t.length !== o)) {
                                            var i = e.cloneNode();
                                            return (i.textContent = t.slice(o).trim()), [a, i];
                                        }
                                        return [a];
                                    })(e[e.length - 1], n);
                                    return [].concat(e.slice(0, -1), t);
                                },
                                [o]
                            );
                            return (
                                (e.innerHTML = ''),
                                i.forEach(function(n) {
                                    e.appendChild(n), e.appendChild(document.createTextNode(' '));
                                })
                            );
                        })),
                    st(i)
                );
            }
            rt.innerHTML = re.a;
            var ct = m(function(e, n, t) {
                    return (
                        !1 !== t &&
                        ('string' != typeof t && 'object' != typeof t
                            ? null
                            : st(
                                  (o = 'string' == typeof t ? [{ tag: t }] : Array.isArray(t) ? t : [t]).map(function(
                                      t
                                  ) {
                                      var a,
                                          i = document.createElement('span');
                                      if ((o.length > 1 && i.setAttribute('class', 'multi'), 'string' == typeof t))
                                          (a = lt(at(e[n], t))), i.classList.add('tag--' + t.split('.', 1)[0]);
                                      else {
                                          var r = t.tag,
                                              s = L(t, ['tag']);
                                          (a = lt(at(e[n], r), s)), i.classList.add('tag--' + r.split('.', 1)[0]);
                                      }
                                      return (
                                          a.forEach(function(e) {
                                              return i.appendChild(e);
                                          }),
                                          i
                                      );
                                  })
                              ))
                    );
                    var o;
                }),
                ut = m(function(e, n, t) {
                    return t.reduce(
                        function(t, o) {
                            var a = o[0],
                                i = o[1],
                                r = a.split(' && ');
                            return 'default' === a ||
                                r.every(function(n) {
                                    return y()(e, n);
                                })
                                ? n === Array
                                    ? [].concat(t, [i])
                                    : v(t, i)
                                : t;
                        },
                        n === Array ? [] : {}
                    );
                }),
                mt = {
                    getTemplateNode: l(function(e, n) {
                        var t = b(e, 'style.layout');
                        if ('custom' === t)
                            return (function(e) {
                                var n = e.data,
                                    t = e.meta,
                                    o = e.template,
                                    a = document.createElement('div'),
                                    r = t.offerType;
                                if ('' === o) return a;
                                try {
                                    var s = o.replace(/{{\s*?([^\s]+?)\s*?}}/g, function(e, t) {
                                        var o = t.split('.'),
                                            a = o[0],
                                            i = o.slice(1).join('.');
                                        if ('logo' === a) {
                                            var r = document.createElement('div');
                                            return S(r, b(Zn, i.toUpperCase()), 'PayPal Credit logo'), r.innerHTML;
                                        }
                                        return lt(at(n[a], i)).reduce(function(e, n) {
                                            return '' + e + (n.outerHTML || ' ');
                                        }, '');
                                    });
                                    (a.innerHTML = s),
                                        Z()(i()(a.children), function(e) {
                                            return 'STYLE' !== e.tagName;
                                        }).classList.add('offer--' + r.replace(/:/g, '-').toLowerCase());
                                } catch (e) {}
                                return a;
                            })(n);
                        var o = b(e, 'style._flattened'),
                            a = b(n, 'meta.offerType'),
                            r = b(n, 'data');
                        if ('legacy' === t) {
                            var s = b(e, 'style.typeNI'),
                                l = b(e, 'style.typeEZP'),
                                c = 'NI' === a.split(':')[0] ? s : l;
                            if ('image' === c)
                                return (function(e, n) {
                                    var t = n.meta,
                                        o = rt.cloneNode(!0),
                                        a = R('pp-legacy', o),
                                        i = ['link', 'pixel'].map(a),
                                        r = i[0],
                                        s = i[1],
                                        l = b(e, 'size'),
                                        c = b(e, 'color'),
                                        u = b(e, 'border');
                                    r.setAttribute('href', t.clickUrl), s.setAttribute('href', t.impressionUrl);
                                    var m = 'https://www.paypalobjects.com/upstream/assets/messaging/legacy',
                                        d = 'none' === c ? '' : '-' + c + (!0 === u ? '' : '-no-border'),
                                        p = ('none' === c ? 'v1' : 'v2') + '/' + l.replace(/x/, '-') + d,
                                        g = [1, 1.5, 2].map(function(e) {
                                            return m + '/' + p + '@' + e + 'x.png ' + e + 'x';
                                        });
                                    return S(r, m + '/' + p + '@1x.png', 'PayPal Credit Message', g.join(', ')), o;
                                })(e.style, n);
                            if (!c) throw new Error(K.MESSAGE_INVALID_LEGACY);
                        }
                        var u = ut(o),
                            m = u(
                                Object,
                                (function(e, n) {
                                    switch (e) {
                                        case 'EZP:ANY:EQZ':
                                            return Qn[n];
                                        case 'EZP:ANY:GTZ':
                                            return Xn[n];
                                        case 'PALA:MULTI:EQZ':
                                            return et[n];
                                        case 'PALA:MULTI:GTZ':
                                            return nt[n];
                                        case 'PALA:SINGLE:EQZ':
                                            return tt[n];
                                        case 'PALA:SINGLE:GTZ':
                                            return ot[n];
                                        case 'NI:NON-US':
                                            return $n[n];
                                        case 'NI':
                                        default:
                                            return Kn[n];
                                    }
                                })(a, 'layout:' + t)
                            ),
                            d = u(Array, Vn['layout:' + t]),
                            p = ct(r),
                            g = it.cloneNode(!0),
                            f = R('message', g),
                            h = ['logo-container', 'headline', 'sub-headline', 'disclaimer'].map(f),
                            y = h[0],
                            _ = h[1],
                            w = h[2],
                            x = h[3];
                        if (
                            (T(_, p('headline', m.headline)),
                            T(w, p('subHeadline', m.subHeadline)),
                            I(x, p('disclaimer', m.disclaimer)),
                            S(y, m.logo, 'PayPal Credit logo'),
                            'inline' === b(e, 'style.logo.type') && _.appendChild(y),
                            'none' === b(e, 'style.logo.type'))
                        ) {
                            var v = document.createElement('span');
                            v.textContent = 'with ';
                            var E = document.createElement('strong');
                            (E.textContent = 'PayPal Credit.'),
                                v.appendChild(E),
                                _.appendChild(document.createTextNode(' ')),
                                _.appendChild(v);
                        }
                        m.messageWidth &&
                            ('number' == typeof m.messageWidth
                                ? d.push('.message__messaging { width: ' + m.messageWidth + 'px }')
                                : Array.isArray(m.messageWidth) &&
                                  d.push(
                                      '.message__messaging { min-width: ' +
                                          m.messageWidth[0] +
                                          'px; max-width: ' +
                                          m.messageWidth[1] +
                                          'px }'
                                  ));
                        var P = function(n) {
                            return 'legacy' === t ? n.replace(/\.message/g, '[data-pp-id="' + e.id + '"] .message') : n;
                        };
                        return m.styles && O(g, P(m.styles.join(''))), O(g, P(d.join('\n'))), g;
                    })
                },
                dt = t(31),
                pt = t.n(dt),
                gt = { click: new Map(), scroll: new Map(), hover: new Map(), resize: new Map() };
            function ft(e) {
                gt.resize.has(e.target.frameElement) && gt.resize.get(e.target.frameElement)(e);
            }
            function ht(e) {
                gt.scroll.forEach(function(n) {
                    return n(e);
                });
            }
            function yt(e) {
                gt.hover.has(e.target) && gt.hover.get(e.target)(e);
            }
            function _t(e) {
                e.target.ownerDocument && gt.click.has(e.target.ownerDocument.defaultView.frameElement)
                    ? gt.click.get(e.target.ownerDocument.defaultView.frameElement)(e)
                    : gt.click.has(e.currentTarget) && e.currentTarget !== e.target && gt.click.get(e.currentTarget)(e);
            }
            function wt(e) {
                return {
                    on: function(n, t) {
                        ('IFRAME' !== e.tagName && 'resize' === n) ||
                            (function(e, n, t) {
                                if (
                                    ((function(e, n) {
                                        'scroll' === e && 0 === gt.scroll.size
                                            ? window.addEventListener('scroll', ht)
                                            : 'hover' === e && 0 === gt.hover.size
                                            ? document.addEventListener('mouseover', yt)
                                            : 'resize' !== e || gt[e].has(n)
                                            ? 'click' !== e ||
                                              gt[e].has(n) ||
                                              ('IFRAME' === n.tagName
                                                  ? n.contentWindow.document.body.addEventListener('click', _t)
                                                  : n.addEventListener('click', _t))
                                            : n.contentWindow.addEventListener('resize', ft);
                                    })(e, n),
                                    gt[e].has(n))
                                ) {
                                    var o = gt[e].get(n);
                                    gt[e].set(n, function(e) {
                                        o(e), t(e);
                                    });
                                } else gt[e].set(n, t);
                            })(n, e, t);
                    },
                    clear: function(n) {
                        gt[n].delete(e),
                            'scroll' === n && 0 === gt.scroll.size
                                ? window.removeEventListener('scroll', ht)
                                : 'hover' === n && 0 === gt.hover.size
                                ? document.removeEventListener('mouseover', yt)
                                : 'click' === n
                                ? 'IFRAME' === e.tagName
                                    ? e.contentWindow.document.body.removeEventListener('click', _t)
                                    : e.removeEventListener('click', _t)
                                : 'IFRAME' === e.tagName &&
                                  'resize' === n &&
                                  e.contentWindow.removeEventListener('resize', ft);
                    }
                };
            }
            var xt = m(function(e, n) {
                return M.ZalgoPromise.resolve(
                    'IFRAME' === e.tagName &&
                        'complete' !== e.contentWindow.document.readyState &&
                        new M.ZalgoPromise(function(n) {
                            return e.addEventListener('load', n);
                        })
                ).then(function() {
                    var t,
                        o,
                        a = 'IFRAME' === e.tagName ? e.contentWindow.document : document,
                        r =
                            'string' == typeof n
                                ? ((t = n), ((o = a.createElement('div')).innerHTML = t), o)
                                : a.importNode(n, !0),
                        s = i()(r.getElementsByTagName('img'))
                            .filter(function(e) {
                                return !e.complete;
                            })
                            .map(function(e) {
                                return new M.ZalgoPromise(function(n) {
                                    return e.addEventListener('load', n);
                                });
                            });
                    return (
                        i()(r.getElementsByTagName('style')).forEach(function(e) {
                            var n = a.createElement('style');
                            (n.textContent = e.textContent),
                                e.parentNode.insertBefore(n, e),
                                e.parentNode.removeChild(e);
                        }),
                        i()(r.getElementsByTagName('script')).forEach(function(e) {
                            var n = a.createElement('script');
                            (n.text = e.text), e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e);
                        }),
                        M.ZalgoPromise.all(s).then(function() {
                            return new M.ZalgoPromise(function(n) {
                                requestAnimationFrame(function() {
                                    for (var t = 'IFRAME' === e.tagName ? a.body : e; t.firstChild; )
                                        t.removeChild(t.firstChild);
                                    i()(r.children).forEach(function(e) {
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
            var bt = m(function(e, n) {
                    var t = n.options.amount,
                        o = n.events,
                        a = n.track,
                        i = e.getBoundingClientRect(),
                        r = {
                            et: 'CLIENT_IMPRESSION',
                            event_type: 'stats',
                            pos_x: Math.round(i.left),
                            pos_y: Math.round(i.top),
                            browser_width: window.innerWidth,
                            browser_height: window.innerHeight,
                            visible: vt(e),
                            amount: t
                        };
                    r.visible ||
                        o.on('scroll', function() {
                            vt(e) &&
                                (o.clear('scroll'), a({ et: 'CLIENT_IMPRESSION', event_type: 'scroll', visible: !0 }));
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
                            return new M.ZalgoPromise(function(t) {
                                !(function o(a) {
                                    return a <= 0
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
                                              o(a - 1);
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
                                a(r, e.hasAttribute('data-pp-message-hidden')),
                                a('MORS_IMPRESSION');
                        }),
                        o.on('click', function() {
                            a({ et: 'CLICK', event_type: 'click', link: 'Banner Wrapper' }), a('MORS_CLICK');
                        }),
                        o.on('hover', function() {
                            a({ et: 'CLIENT_IMPRESSION', event_type: 'hover' }), o.clear('hover');
                        });
                }),
                Et = {
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
            function Pt(e) {
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
            function At(e) {
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
            var Rt = m(function(e, n) {
                var t = n.wrapper,
                    o = n.options,
                    a = n.logger,
                    i = n.meta;
                if ('IFRAME' === e.tagName) {
                    var r,
                        s,
                        l = b(o, 'style.layout'),
                        c = b(o, 'style.ratio');
                    if (('flex' !== l && 'custom' !== l) || !c) {
                        var u = i.minWidth;
                        e.setAttribute('style', 'width: 100%; border: none; min-width: ' + u + 'px;'),
                            t.removeAttribute('class');
                        var m = (function(e) {
                                var n = document.createElement('div');
                                n.setAttribute('style', 'width: 100%; overflow: hidden');
                                var t = document.createElement('div');
                                t.setAttribute('style', 'width: 10000px'),
                                    n.appendChild(t),
                                    e.parentNode.appendChild(n);
                                var o = n.offsetWidth;
                                return e.parentNode.removeChild(n), o;
                            })(t),
                            d = function() {
                                e.setAttribute('height', e.contentWindow.document.body.lastChild.offsetHeight);
                            };
                        if (m < u && 'custom' !== l) {
                            if ('top' !== b(o, 'style.logo.position') || 'primary' !== b(o, 'style.logo.type'))
                                throw (a.warn(
                                    'Message Overflow. PayPal Credit Message of layout type ' +
                                        b(o, 'style.layout') +
                                        ' requires a width of at least ' +
                                        u +
                                        'px. Current container is ' +
                                        m +
                                        'px. Attempting fallback message.'
                                ),
                                (r = function() {
                                    t.parentNode.setAttribute('data-pp-style-layout', 'text'),
                                        t.parentNode.setAttribute('data-pp-style-logo-type', 'primary'),
                                        t.parentNode.setAttribute('data-pp-style-logo-position', 'top');
                                }),
                                ((s = new Error(K.MESSAGE_OVERFLOW)).onEnd = r),
                                s);
                            a.error({ name: K.MESSAGE_HIDDEN }),
                                a.warn(
                                    'Message hidden. PayPal Credit Message fallback requires minimum width of ' +
                                        u +
                                        'px. Current container is ' +
                                        m +
                                        'px. Message hidden.'
                                ),
                                e.setAttribute('data-pp-message-hidden', 'true');
                        } else d(), wt(e).on('resize', d);
                    } else
                        !(function(e, n, t) {
                            var o = [];
                            'flex' === t
                                ? (o = Et[n])
                                : Array.isArray(n)
                                ? (o = n.map(At))
                                : 'string' == typeof n && (o = [At(n)]);
                            var a = 'pp-flex--' + o.slice(-1)[0].ratio,
                                i = o.reduce(function(e, n) {
                                    var t = n.breakpoint,
                                        o = n.ratio,
                                        i = n.width;
                                    return '' === e
                                        ? '\n                .' +
                                              a +
                                              ' {\n                    display: block;\n                    width: 100%;\n                    ' +
                                              (Array.isArray(i)
                                                  ? '\n                                min-width: ' +
                                                    Pt(i[0]) +
                                                    ';\n                                max-width: ' +
                                                    Pt(i[1]) +
                                                    ';'
                                                  : '') +
                                              '\n                    box-sizing: border-box;\n                    position: relative;\n                }\n        \n                .' +
                                              a +
                                              '::before {\n                    padding-top: ' +
                                              Pt(o) +
                                              ";\n                    content: '';\n                    display: block;\n                }\n        \n                ." +
                                              a +
                                              ' iframe {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                }\n            '
                                        : t
                                        ? '\n            ' +
                                          e +
                                          '\n            @media (min-width: ' +
                                          Pt(t) +
                                          ') {\n                ' +
                                          (Array.isArray(i)
                                              ? '\n                            .' +
                                                a +
                                                ' {\n                                min-width: ' +
                                                Pt(i[0]) +
                                                ';\n                                max-width: ' +
                                                Pt(i[1]) +
                                                ';\n                            }'
                                              : '') +
                                          '\n                .' +
                                          a +
                                          '::before {\n                    padding-top: ' +
                                          Pt(o) +
                                          ';\n                }\n            }\n        '
                                        : e;
                                }, ''),
                                r = document.createElement('style');
                            (r.textContent = i), e.setAttribute('class', a), e.appendChild(r);
                        })(t, c, l),
                            e.setAttribute('style', 'width: 100%; border: none;'),
                            e.removeAttribute('height');
                }
            });
            function Ot(e) {
                var n = document.createElement(e);
                'iframe' === e &&
                    (n.setAttribute('title', 'PayPal Credit Promotion Message'),
                    n.setAttribute('style', 'width: 100%; border: none;'),
                    n.setAttribute('src', 'about:blank'),
                    n.setAttribute('height', 0));
                var t = w()({ insertMarkup: xt, setSize: Rt, runStats: bt, events: wt }).reduce(function(e, t) {
                    var a;
                    return o({}, e, (((a = {})[t[0]] = (0, t[1])(n)), a));
                }, {});
                return (
                    (t.clearEvents = function() {
                        return (function(e) {
                            pt()(gt).forEach(function(n) {
                                return n.delete(e);
                            }),
                                0 === gt.scroll.size && window.removeEventListener('scroll', ht),
                                0 === gt.hover.size && document.removeEventListener('mouseover', yt),
                                'IFRAME' === e.tagName
                                    ? (e.contentWindow.removeEventListener('resize', ft),
                                      e.contentWindow.document.body.removeEventListener('click', _t))
                                    : e.removeEventListener('click', _t);
                        })(n);
                    }),
                    [n, t]
                );
            }
            window.__PP = window.__PP || {};
            var Tt = { US: 'en_US', GB: 'en_GB', FR: 'fr_FR', DE: 'de_DE' };
            function It(e) {
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
                    throw new Error(K.MESSAGE_INVALID_MARKUP);
                }
            }
            function St(e, n) {
                var t = n.match(/^<!--([\s\S]+?)-->/);
                if (t)
                    try {
                        return JSON.parse(t[1]);
                    } catch (n) {
                        e.error({ name: K.CUSTOM_JSON_OPTIONS_FAIL });
                    }
                return {};
            }
            var Lt = function(e) {
                    var n = Ot('iframe'),
                        t = n[0],
                        o = n[1].insertMarkup;
                    return (
                        t.setAttribute('style', 'opacity: 0; width: 0; height: 0; position: absolute; left: -99999px;'),
                        document.body.appendChild(t),
                        o(e).then(function() {
                            var e = t.contentWindow.document.querySelector('.message__content'),
                                n = t.contentWindow.getComputedStyle(e),
                                o = i()(e.children),
                                a = [
                                    'margin-left',
                                    'border-left-width',
                                    'padding-left',
                                    'width',
                                    'padding-right',
                                    'border-right-width',
                                    'margin-right'
                                ],
                                r = X()(n.getPropertyValue('display'), 'flex')
                                    ? Math.round(
                                          o.reduce(function(e, n) {
                                              var o = t.contentWindow.getComputedStyle(n);
                                              return (
                                                  e +
                                                  a.reduce(function(e, n) {
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
                                                  a.reduce(function(e, t) {
                                                      return e + parseFloat(n.getPropertyValue(t));
                                                  }, 0)
                                              );
                                          })
                                      );
                            return document.body.removeChild(t), r;
                        })
                    );
                },
                Nt = c(
                    function(e) {
                        var n = e.account,
                            t = e.amount,
                            o = e.countryCode,
                            a = e.offerType,
                            i = e.style.typeEZP;
                        return new M.ZalgoPromise(function(e) {
                            var r = 'c' + Math.floor(Math.random() * Math.pow(10, 19)),
                                l = '' === i || 'NI' === a ? 'x199x99' : 'x215x80',
                                c = G('MESSAGE'),
                                u = {
                                    dimensions: l,
                                    currency_value: t,
                                    currency_code: 'USD',
                                    format: 'HTML',
                                    presentation_types: 'HTML',
                                    ch: 'UPSTREAM',
                                    call: '__PP.' + r
                                };
                            o && Tt[o] && ((u.country_code = o), (u.locale = Tt[o]));
                            var m = w()(u)
                                    .filter(function(e) {
                                        return e[1];
                                    })
                                    .reduce(
                                        function(e, n) {
                                            return e + '&' + n[0] + '=' + n[1];
                                        },
                                        s()(n, 'client-id') ? 'client_id=' + n.slice(10) : 'pub_id=' + n
                                    ),
                                d = document.createElement('script');
                            (d.async = !0),
                                j('GET', c + '?' + m).then(function(e) {
                                    (d.text = e.data), document.head.appendChild(d);
                                }),
                                (window.__PP[r] = function(n) {
                                    if ((document.head.removeChild(d), delete window.__PP[r], 'object' == typeof n))
                                        e({ markup: It(n) });
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
            function Ct(e) {
                var n = e.options,
                    t = e.logger;
                return (
                    t.info(q.FETCH_START),
                    ('custom' !== b(n, 'style.layout')
                        ? Nt(n)
                        : M.ZalgoPromise.all([Nt(n), ee(n.style)]).then(function(e) {
                              var o = e[0],
                                  a = e[1];
                              return 'object' == typeof o.markup
                                  ? ('' === a && t.error({ name: K.CUSTOM_TEMPLATE_FAIL }),
                                    (o.markup.template = a),
                                    { markup: o.markup, options: v(n, St(t, a)) })
                                  : { markup: o.markup };
                          })
                    ).then(function(e) {
                        var a = e.markup,
                            i = e.options,
                            r = void 0 === i ? {} : i;
                        t.info(q.FETCH_END);
                        var s = o({}, n, {}, r);
                        if (
                            ((s.style._flattened = (function e(n, t, o) {
                                return (
                                    void 0 === t && (t = ''),
                                    void 0 === o && (o = ':'),
                                    w()(n).reduce(function(n, a) {
                                        var i = a[0],
                                            r = a[1];
                                        switch (typeof r) {
                                            case 'object':
                                                return [].concat(n, e(r, '' + t + i + '.'));
                                            case 'string':
                                            default:
                                                return [].concat(n, ['' + t + i + o + r]);
                                        }
                                    }, [])
                                );
                            })(s.style)),
                            'object' == typeof a)
                        ) {
                            var l = mt.getTemplateNode(s, a);
                            return 'text' === b(s, 'style.layout')
                                ? Lt(l).then(function(e) {
                                      return {
                                          markup: a,
                                          options: s,
                                          template: l,
                                          meta: o({}, a.meta, { minWidth: e })
                                      };
                                  })
                                : { markup: a, options: s, template: l, meta: o({}, a.meta, { minWidth: l.minWidth }) };
                        }
                        var c = document.createElement('div');
                        return (c.innerHTML = a), { markup: a, options: s, template: c, meta: {} };
                    })
                );
            }
            var Mt = t(22),
                zt = t.n(Mt),
                jt = {
                    ANY: 'ANY',
                    STRING: 'STRING',
                    BOOLEAN: 'BOOLEAN',
                    NUMBER: 'NUMBER',
                    FUNCTION: 'FUNCTION',
                    OBJECT: 'OBJECT'
                },
                kt = { id: [jt.STRING], _legacy: [jt.BOOLEAN], onRender: [jt.FUNCTION] },
                Wt = {
                    text: {
                        logo: {
                            type: [jt.STRING, ['primary', 'alternative', 'inline', 'none']],
                            position: [jt.STRING, ['left', 'right', 'top']]
                        },
                        text: { color: [jt.STRING, ['black', 'white']] }
                    },
                    flex: {
                        color: [jt.STRING, ['blue', 'black', 'white', 'white-no-border', 'gray|grey']],
                        ratio: [jt.STRING, ['1x1', '1x4', '8x1', '20x1']]
                    },
                    legacy: {
                        typeNI: [jt.STRING, ['', 'image', 'html']],
                        typeEZP: [jt.STRING, ['', 'html']],
                        size: [jt.STRING],
                        color: [jt.STRING, ['none', 'blue', 'black', 'gray|grey', 'white']],
                        border: [jt.BOOLEAN, [!0, !1]]
                    },
                    custom: { markup: [jt.STRING], ratio: [jt.ANY] }
                },
                Ht = function(e, n, t) {
                    return e.warn('Invalid option value (' + n + '). ' + t);
                },
                Bt = function(e, n, t, o) {
                    return Ht(e, n, 'Expected type "' + t.toLowerCase() + '" but instead received "' + typeof o + '".');
                },
                Dt = function(e, n, t, o) {
                    return Ht(
                        e,
                        n,
                        'Expected one of ["' + t.join('", "').replace(/\|[\w|]+/g, '') + '"] but received "' + o + '".'
                    );
                };
            function Yt(e, n) {
                switch (e) {
                    case jt.STRING:
                        return 'string' == typeof n;
                    case jt.BOOLEAN:
                        return 'boolean' == typeof n;
                    case jt.NUMBER:
                        return 'number' == typeof n && !zt()(n);
                    case jt.FUNCTION:
                        return 'function' == typeof n;
                    case jt.OBJECT:
                        return 'object' == typeof n && null !== n;
                    case jt.ANY:
                        return !0;
                    default:
                        return !1;
                }
            }
            function Gt(e, n, t, a) {
                return (
                    void 0 === a && (a = 'style.'),
                    w()(n).reduce(function(i, r) {
                        var s,
                            l = r[0],
                            c = r[1];
                        if (Array.isArray(c)) {
                            var u,
                                m = (function(e, n, t, o) {
                                    var a = n[0],
                                        i = n[1],
                                        r = void 0 === i ? [] : i;
                                    if (void 0 === t) return r[0];
                                    if (Yt(a, t)) {
                                        if (a === jt.STRING && r.length > 0) {
                                            var s = Z()(r, function(e) {
                                                return e.split('|').some(function(e) {
                                                    return e === t;
                                                });
                                            });
                                            return void 0 === s
                                                ? (Dt(e, o, r, t), r[0].split('|')[0])
                                                : s.split('|')[0];
                                        }
                                        return t;
                                    }
                                    return Bt(e, o, a, t), r[0];
                                })(e, c, t[l], '' + a + l);
                            return void 0 === m ? i : o({}, i, (((u = {})[l] = m), u));
                        }
                        return o({}, i, (((s = {})[l] = Gt(e, n[l], t[l] || {}, '' + a + l + '.')), s));
                    }, {})
                );
            }
            function Ft(e, n) {
                return o({ layout: n.layout }, Gt(e, Wt[n.layout], n));
            }
            var Ut = m(function(e, n) {
                    var t = n.account,
                        o = n.amount,
                        a = n.countryCode,
                        i = n.style,
                        r = n.offer,
                        l = L(n, ['account', 'amount', 'countryCode', 'style', 'offer']),
                        c = Gt(e, kt, l, '');
                    if (
                        (Yt(jt.STRING, t)
                            ? 13 === t.length || 10 === t.length || s()(t, 'client-id:')
                                ? (c.account = t)
                                : Ht(e, 'account', 'Ensure the correct Merchant Account ID has been entered.')
                            : Bt(e, 'account', jt.STRING, t),
                        void 0 !== o)
                    ) {
                        var u = Number(o);
                        Yt(jt.NUMBER, u)
                            ? u < 0
                                ? Ht(e, 'amount', 'Ensure value is a positive number.')
                                : (c.amount = u)
                            : Bt(e, 'amount', jt.NUMBER, o);
                    }
                    return (
                        void 0 !== a &&
                            (Yt(jt.STRING, a)
                                ? 2 !== a.length
                                    ? Ht(e, 'countryCode', 'Country code should be 2 characters.')
                                    : (c.countryCode = a)
                                : Bt(e, 'countryCode', jt.STRING, a)),
                        void 0 !== r &&
                            (Yt(jt.STRING, r)
                                ? 'NI' !== r
                                    ? Ht(e, 'offer', 'Ensure valid offer type.')
                                    : (c.offerType = r)
                                : Bt(e, 'offer', jt.STRING, r)),
                        Yt(jt.OBJECT, i) && Yt(jt.STRING, i.layout) && Wt[i.layout]
                            ? (c.style = Ft(e, i))
                            : (Yt(jt.OBJECT, i)
                                  ? Dt(e, 'style.layout', Object.keys(Wt), i.layout)
                                  : void 0 !== i && Bt(e, 'style', jt.OBJECT, i),
                              (c.style = Ft(e, { layout: 'text' }))),
                        e.info(q.VALIDATE, { options: x(c) }),
                        c
                    );
                }),
                Vt = c(
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
                Zt = c(
                    function(e) {
                        return j(
                            'GET',
                            ((n = e),
                            (t = n.account),
                            (o = n.amount),
                            (a = G('TERMS')),
                            (i = ['json=true', s()(t, 'client-id') ? 'cid=' + t.slice(10) : 'mid=' + t]),
                            i.push('country=US'),
                            i.push('currency=USD'),
                            o && i.push('amount=' + o),
                            a + '?' + i.join('&'))
                        )
                            .then(function(e) {
                                return JSON.parse(e.data);
                            })
                            .catch(function() {
                                return { error: !0 };
                            });
                        var n, t, o, a, i;
                    },
                    ['account', 'amount']
                ),
                Jt = function(e, n) {
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
                qt = function(e) {
                    return e.max_amount !== e.default_max_amount
                        ? '<div style="text-align: center; padding-bottom: 15px; display: table; padding-top: 10px; "><span style="display: inline-block; vertical-align: middle; "><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"><path fill="none" fill-rule="evenodd" stroke="#9DA3A6" stroke-linecap="round" stroke-linejoin="round" d="M9.526 10.474v7.579c4.71-.034 8.527-3.817 8.527-8.527a8.526 8.526 0 1 0-11.834 7.862"></path></svg></span><p style="display: inline; font-size: 13px; color: #2c2e2f; padding-left: 5px; font-family: PayPalSansSmall; font-weight: 400 ">$' +
                              e.max_amount +
                              ' is the maximum amount to be eligible for Easy Payments. Enter an amount of $' +
                              e.max_amount +
                              ' or less.</p></div>'
                        : '<p style="text-align: center">No offers are available for this amount. Please enter a new amount.</p>';
                };
            function Kt(e, n) {
                var t = e.contentDocument.getElementById('content-wrapper'),
                    a = e.contentDocument.getElementById('modal__overlay'),
                    i = e.contentDocument.getElementById('close-btn'),
                    r = e.contentDocument.getElementById('header'),
                    s = e.contentDocument.getElementsByClassName('accordion'),
                    l = e.contentDocument.getElementById('modal-container'),
                    c = e.contentDocument.getElementsByClassName('modal__header-container')[0],
                    u = e.contentDocument.getElementsByTagName('a');
                return o(
                    {
                        window: e.contentWindow,
                        contentWrapper: t,
                        overlay: a,
                        closeButton: i,
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
            var $t = c(
                    function(e) {
                        var n = window.top.document.createElement('div'),
                            t = B();
                        n.setAttribute('data-pp-id', t);
                        var a = Ot('iframe'),
                            r = a[0],
                            l = a[1].insertMarkup,
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
                                var a = n.getAttribute('style');
                                return [
                                    function() {
                                        e.contains(t) && (e.removeChild(t), e.appendChild(o)),
                                            (n.style.overflow = 'hidden'),
                                            (n.style.msOverflowStyle = 'scrollbar');
                                    },
                                    function() {
                                        e.contains(o) && (e.removeChild(o), e.appendChild(t)),
                                            a ? n.setAttribute('style', a) : n.removeAttribute('style');
                                    }
                                ];
                            })(),
                            u = c[0],
                            m = c[1],
                            d = e.track,
                            f = e.clickUrl,
                            h = z({ status: 'CLOSED' }),
                            y = h[0],
                            _ = h[1],
                            w = $.create({ id: t, account: e.account, selector: '__internal__', type: 'Modal' });
                        function x() {
                            return s()(e.offerType, 'NI') ? 'NI' : 'EZP';
                        }
                        var v = function(e, n, t) {
                            return d({
                                et: 'modal-open' === e ? 'CLIENT_IMPRESSION' : 'CLICK',
                                link: n,
                                amount: t,
                                modal: x(),
                                event_type: e
                            });
                        };
                        function b() {
                            i()(y.elements.accordions).forEach(function(e) {
                                e.classList.remove('show'),
                                    e
                                        .getElementsByClassName('accordion-content')[0]
                                        .style.setProperty('max-height', null);
                            });
                        }
                        function E(e, n) {
                            var t = {
                                    'NI Tab': [y.elements.niTab, y.elements.niContent],
                                    'EZP Tab': [y.elements.ezpTab, y.elements.ezpContent]
                                },
                                o = t[e][0];
                            pt()(t).forEach(function(e) {
                                var n = e[0],
                                    t = e[1];
                                n.classList.toggle('selected', n === o), t.classList.toggle('show', n === o);
                            }),
                                n || v('modal-tab', e),
                                b();
                        }
                        function P() {
                            return y.error ? T(!0) : y.modalProm;
                        }
                        function A(e) {
                            return new M.ZalgoPromise(function(t, o) {
                                'OPEN' === y.status || 'OPENING' === y.status
                                    ? (_({ status: 'CLOSING' }),
                                      y.elements.modalContainer.classList.remove('show'),
                                      setTimeout(function() {
                                          (n.style.display = 'none'),
                                              r.blur(),
                                              _({ status: 'CLOSED' }),
                                              m(),
                                              'EZP' === x() &&
                                                  setTimeout(function() {
                                                      E('EZP Tab', !0);
                                                  }, 350),
                                              t();
                                      }, e || 0))
                                    : o();
                            });
                        }
                        function R(e) {
                            A(350), v('modal-close', e);
                        }
                        function O(n) {
                            var t = +n;
                            return (
                                zt()(t) || (y.elements.amountInput.value = t.toFixed(2)),
                                y.elements.loader.style.setProperty('opacity', 1),
                                y.elements.financeTermsTable.style.setProperty('opacity', 0.4),
                                Zt(o({}, e, { amount: n })).then(function(e) {
                                    y.elements.loader.style.setProperty('opacity', 0),
                                        y.elements.financeTermsTable.style.setProperty('opacity', 1),
                                        (y.elements.financeTermsTable.innerHTML = (function(e) {
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
                                                                return Jt(e, n);
                                                            })
                                                            .join('')
                                                      : '') +
                                                  '\n            </tbody>\n        </table>\n        ' +
                                                  (e.options && 0 !== e.options.length && 'N/A' !== e.options
                                                      ? ''
                                                      : qt(e)) +
                                                  '\n        <p id="terms-note">The monthly payment shown is an estimated amount and may not include taxes and shipping</p>\n    ';
                                        })(e));
                                })
                            );
                        }
                        function T(n) {
                            return (
                                void 0 === n && (n = !1),
                                w.start({
                                    options: {
                                        account: e.account,
                                        offerType: e.offerType,
                                        amount: e.amount,
                                        message_id: e.id
                                    }
                                }),
                                Vt(e, n)
                                    .then(p(g('markup'), l))
                                    .then(function() {
                                        _({ elements: Kt(r, x()) }),
                                            (function() {
                                                y.elements.closeButton.addEventListener('click', function() {
                                                    R('Close Button');
                                                }),
                                                    y.elements.overlay.addEventListener('click', function(e) {
                                                        var n = e.target;
                                                        (n !== y.elements.contentWrapper &&
                                                            n !== y.elements.headerContainer) ||
                                                            R('Modal Overlay');
                                                    });
                                                var e = function() {
                                                    y.elements.contentWrapper.scrollTop > 0
                                                        ? y.elements.header.classList.add('show')
                                                        : y.elements.header.classList.remove('show');
                                                };
                                                if (
                                                    (y.elements.contentWrapper.addEventListener('scroll', e),
                                                    y.elements.contentWrapper.addEventListener('touchmove', e),
                                                    i()(y.elements.accordions).forEach(function(e) {
                                                        var n = e.getElementsByTagName('h3')[0],
                                                            t = e.getElementsByClassName('accordion-content')[0];
                                                        n.addEventListener('click', function() {
                                                            var o = e.classList.toggle('show');
                                                            t.style.setProperty(
                                                                'max-height',
                                                                o ? t.scrollHeight + 'px' : null
                                                            ),
                                                                o && v('accordion-open', n.innerText);
                                                        });
                                                    }),
                                                    r.contentWindow.addEventListener('keyup', function(e) {
                                                        ('Escape' !== e.key && 'Esc' !== e.key && 27 !== e.charCode) ||
                                                            R('Escape Key');
                                                    }),
                                                    i()(y.elements.landerLinks).forEach(function(e) {
                                                        e.addEventListener('click', function() {
                                                            return v('lander-link');
                                                        });
                                                    }),
                                                    'EZP' === x())
                                                ) {
                                                    y.elements.niTab.addEventListener('click', function() {
                                                        return E('NI Tab');
                                                    }),
                                                        y.elements.ezpTab.addEventListener('click', function() {
                                                            return E('EZP Tab');
                                                        });
                                                    var n = function(e) {
                                                        var n = y.elements.amountInput.value;
                                                        v('calculate', e, n), O(n);
                                                    };
                                                    y.elements.amountInput.addEventListener('keydown', function(e) {
                                                        var t = e.key,
                                                            o = e.target;
                                                        if (t.length > 1 || e.metaKey || e.ctrlKey)
                                                            'Enter' === t && n('Enter Key');
                                                        else {
                                                            var a = o.value,
                                                                i = o.selectionStart,
                                                                r = a ? '' + a.slice(0, i) + t + a.slice(i) : t;
                                                            (function(e) {
                                                                if (zt()(Number(e))) return !1;
                                                                var n = e.split('.'),
                                                                    t = n[0],
                                                                    o = n[1];
                                                                return (
                                                                    (void 0 === t ? '' : t).length <= 5 &&
                                                                    (void 0 === o ? '' : o).length <= 2
                                                                );
                                                            })(r) && ((o.value = r), o.setSelectionRange(i + 1, i + 1)),
                                                                e.preventDefault();
                                                        }
                                                    }),
                                                        y.elements.calculateButton.addEventListener(
                                                            'click',
                                                            function() {
                                                                return n('Calculate Button');
                                                            }
                                                        );
                                                }
                                            })();
                                    })
                                    .catch(function() {
                                        w.error({ name: K.MODAL_FAIL }), _({ error: !0 });
                                    })
                                    .then(function() {
                                        return w.end();
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
                            _({ modalProm: T() }),
                            'EZP' === x() &&
                                P().then(function() {
                                    return O(e.amount);
                                }),
                            {
                                open: function(e) {
                                    e.preventDefault(),
                                        ('CLOSED' !== y.status && 'CLOSING' !== y.status) ||
                                            (_({ status: 'OPENING' }),
                                            P().then(function() {
                                                if (y.error)
                                                    return _({ status: 'CLOSED' }), void window.open(f, '_blank');
                                                (n.style.display = 'block'),
                                                    requestAnimationFrame(function() {
                                                        return requestAnimationFrame(function() {
                                                            b(),
                                                                r.contentWindow.focus(),
                                                                _({ status: 'OPEN' }),
                                                                u(),
                                                                y.elements.modalContainer.classList.add('show'),
                                                                v('modal-open');
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
                            a = e.events,
                            i = e.track;
                        if (n._legacy && s()(t.offerType, 'NI'))
                            a.on('click', function(e) {
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
                            var r = $t(o({}, n, {}, t, { track: i }));
                            a.on('click', r.open);
                        }
                    }
                },
                Xt = new Map(),
                eo = new Map();
            function no(e) {
                var n = (e.meta && e.meta.offerType) + '::' + e.options.style._flattened.sort().join('::'),
                    t = e.meta;
                return {
                    track: e.logger.track({
                        uuid: n,
                        urls: { DEFAULT: t.clickUrl, MORS_IMPRESSION: t.impressionUrl + '&idx=' + e.options.id }
                    })
                };
            }
            var to = m(function(e, n) {
                    return o({}, n, {}, e(n));
                }),
                oo = m(function(e, n) {
                    return e(n).then(function(e) {
                        return o({}, n, {}, e);
                    });
                }),
                ao = function(e) {
                    var n = e.options.onRender;
                    n && n();
                },
                io = {
                    init: function(e, n, t) {
                        eo.has(e) ||
                            eo.set(e, $.create({ id: t.id, account: t.account, selector: n, type: 'Message' }));
                        var a,
                            i = eo.get(e);
                        try {
                            Xt.has(e)
                                ? ((a = Xt.get(e)).renderProm = a.renderProm.then(function() {
                                      return i.start({ options: t }), a.update(t);
                                  }))
                                : (i.start({ options: t }),
                                  (a = (function(e, n, t) {
                                      t.info(q.CREATE);
                                      var a = z(e),
                                          i = a[0],
                                          r = a[1],
                                          s = i._legacy,
                                          l = Ot(s ? 'div' : 'iframe'),
                                          c = l[0],
                                          h = l[1],
                                          _ = h.insertMarkup,
                                          x = h.setSize,
                                          b = h.events,
                                          E = h.runStats,
                                          P = h.clearEvents,
                                          A = s ? c : document.createElement('span');
                                      A !== c && A.appendChild(c);
                                      var R = m(function(e, n, o) {
                                          return t.info(n), e(o);
                                      });
                                      function O(e) {
                                          return (
                                              t.info(q.RENDER_START),
                                              p(
                                                  Ut(t),
                                                  d(r),
                                                  f('options'),
                                                  u(C.a, { logger: t, wrapper: A, events: b }),
                                                  oo(Ct)
                                              )(e)
                                                  .then(d(R(p(g('template'), _), q.INSERT)))
                                                  .then(
                                                      p(
                                                          to(no),
                                                          d(R(Qt.init, q.MODAL)),
                                                          d(R(x, q.SIZE)),
                                                          d(R(E, q.STATS)),
                                                          R(ao, q.RENDER_END)
                                                      )
                                                  )
                                          );
                                      }
                                      return (
                                          n.appendChild(A),
                                          t.info(q.CONTAINER),
                                          s ||
                                              c.addEventListener('load', function() {
                                                  P(), O(i);
                                              }),
                                          {
                                              renderProm: O(i),
                                              wrapper: A,
                                              container: c,
                                              update: function(e) {
                                                  var n = v(i, e),
                                                      a = (function e(n, t) {
                                                          return w()(t).reduce(function(t, a) {
                                                              var i,
                                                                  r,
                                                                  s = a[0],
                                                                  l = a[1];
                                                              if (!n[s] && n[s] !== l)
                                                                  return o({}, t, (((i = {})[s] = l), i));
                                                              if ('object' != typeof l || null === l)
                                                                  return l !== n[s]
                                                                      ? o({}, t, (((r = {})[s] = l), r))
                                                                      : t;
                                                              if (Array.isArray(l)) {
                                                                  var c;
                                                                  if (Array.isArray(n[s])) {
                                                                      var u,
                                                                          m = l.filter(function(e) {
                                                                              return !y()(n[s], e);
                                                                          });
                                                                      return m.length > 0
                                                                          ? o({}, t, (((u = {})[s] = m), u))
                                                                          : t;
                                                                  }
                                                                  return o({}, t, (((c = {})[s] = l), c));
                                                              }
                                                              var d,
                                                                  p = e(n[s], l);
                                                              return Object.keys(p).length > 0
                                                                  ? o({}, t, (((d = {})[s] = p), d))
                                                                  : t;
                                                          }, {});
                                                      })(i, n),
                                                      r = Object.keys(a).length > 0;
                                                  return (
                                                      t.info(q.UPDATE, { willUpdate: r }),
                                                      r ? (P(), O(n)) : M.ZalgoPromise.resolve()
                                                  );
                                              }
                                          }
                                      );
                                  })(t, e, i)),
                                  Xt.set(e, a));
                        } catch (e) {
                            return (
                                i.error({ name: K.INTERNAL_FAIL, message: e.message }),
                                i.end(),
                                M.ZalgoPromise.resolve()
                            );
                        }
                        return (
                            (a.renderProm = a.renderProm.then(i.end).catch(function(e) {
                                var n = K[e.message] || K.INTERNAL_FAIL;
                                i.error(n === K.INTERNAL_FAIL ? { name: n, message: e.message } : { name: n }),
                                    i.end(),
                                    'function' == typeof e.onEnd && e.onEnd();
                            })),
                            a.renderProm
                        );
                    }
                };
            function ro(e, n) {
                var t, a;
                if ((void 0 === n && (n = '[data-pp-message]'), 'string' == typeof n))
                    (t = i()(document.querySelectorAll(n))), (a = n);
                else if (P(n)) (t = [n]), (a = 'HTMLElement');
                else {
                    if (!Array.isArray(n) || !n.every(P)) return $.warn('Invalid selector', n);
                    (t = [].concat(n)), (a = 'Array<HTMLElement>');
                }
                return (
                    (t = t.filter(function(n) {
                        return n.ownerDocument.body.contains(n)
                            ? !e._auto || !n.hasAttribute('data-pp-id')
                            : ($.warn('Skipping container. Must be in the document:', n), !1);
                    })),
                    M.ZalgoPromise.all(
                        t.map(function(n) {
                            var t = v(e, A(n));
                            return (
                                n.hasAttribute('data-pp-id') || n.setAttribute('data-pp-id', B()),
                                new MutationObserver(function(e) {
                                    var t = e.reduce(function(e, n) {
                                        return s()(n.attributeName, 'data-pp-')
                                            ? o(
                                                  {},
                                                  e,
                                                  {},
                                                  E(n.attributeName.slice(8), n.target.getAttribute(n.attributeName))
                                              )
                                            : e;
                                    }, {});
                                    io.init(n, a, t);
                                }).observe(n, { attributes: !0 }),
                                (t.id = n.getAttribute('data-pp-id')),
                                io.init(n, a, t)
                            );
                        })
                    )
                );
            }
            var so = function(e) {
                return {
                    render: function(n) {
                        return ro(o({}, W.config, {}, e), n);
                    }
                };
            };
            C()(so, {
                render: function(e, n) {
                    return void 0 === e && (e = {}), ro(o({}, W.config, {}, e), n);
                },
                setGlobalConfig: function(e) {
                    return void 0 === e && (e = {}), H({ config: o({}, W.config, {}, e) });
                }
            });
            var lo = so;
            t.d(n, 'Messages', function() {
                return lo;
            }),
                (function() {
                    var e = document.currentScript || document.querySelector('script[src$="messaging.js"]');
                    if (e) {
                        var n = A(e);
                        lo.setGlobalConfig(o({ account: void 0 }, n)),
                            n.namespace &&
                                ((window[n.namespace] = o({}, window[n.namespace] || {}, { Messages: lo })),
                                window.paypal && !window.paypal.version && delete window.paypal);
                    }
                    window.paypal && (window.paypal.Message = lo),
                        W.config.account &&
                            ('loading' === document.readyState
                                ? window.addEventListener('DOMContentLoaded', function() {
                                      return lo.render({ _auto: !0 });
                                  })
                                : lo.render({ _auto: !0 }));
                })();
        }
    ]).Messages);
//# sourceMappingURL=messaging@1.3.2.js.map
