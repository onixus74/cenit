!function (e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
        return window.hljs
    }))
}(function (e) {
    function n(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function t(e) {
        return e.nodeName.toLowerCase()
    }

    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 == t.index
    }

    function a(e) {
        var n = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/);
        return n = n.map(function (e) {
            return e.replace(/^lang(uage)?-/, "")
        }), n.filter(function (e) {
            return N(e) || /no(-?)highlight|plain|text/.test(e)
        })[0]
    }

    function i(e, n) {
        var t, r = {};
        for (t in e)r[t] = e[t];
        if (n)for (t in n)r[t] = n[t];
        return r
    }

    function o(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling)3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (n.push({event: "start", offset: a, node: i}), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({event: "stop", offset: a, node: i}));
            return a
        }(e, 0), n
    }

    function u(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
        }

        function o(e) {
            function r(e) {
                return" " + e.nodeName + '="' + n(e.value) + '"'
            }

            l += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
        }

        function u(e) {
            l += "</" + t(e) + ">"
        }

        function c(e) {
            ("start" == e.event ? o : u)(e.node)
        }

        for (var s = 0, l = "", f = []; e.length || r.length;) {
            var g = i();
            if (l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
                f.reverse().forEach(u);
                do c(g.splice(0, 1)[0]), g = i(); while (g == e && g.length && g[0].offset == s);
                f.reverse().forEach(o)
            } else"start" == g[0].event ? f.push(g[0].node) : f.pop(), c(g.splice(0, 1)[0])
        }
        return l + n(a.substr(s))
    }

    function c(e) {
        function n(e) {
            return e && e.source || e
        }

        function t(t, r) {
            return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }

        function r(a, o) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var u = {}, c = function (n, t) {
                        e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function (e) {
                            var t = e.split("|");
                            u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(function (e) {
                        c(e, a.k[e])
                    }), a.k = u
                }
                a.lR = t(a.l || /\b\w+\b/, !0), o && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && o.tE && (a.tE += (a.e ? "|" : "") + o.tE)), a.i && (a.iR = t(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
                var s = [];
                a.c.forEach(function (e) {
                    e.v ? e.v.forEach(function (n) {
                        s.push(i(e, n))
                    }) : s.push("self" == e ? a : e)
                }), a.c = s, a.c.forEach(function (e) {
                    r(e, a)
                }), a.starts && r(a.starts, o);
                var l = a.c.map(function (e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = l.length ? t(l.join("|"), !0) : {exec: function () {
                    return null
                }}
            }
        }

        r(e)
    }

    function s(e, t, a, i) {
        function o(e, n) {
            for (var t = 0; t < n.c.length; t++)if (r(n.c[t].bR, e))return n.c[t]
        }

        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent;)e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }

        function f(e, n) {
            return!a && r(n.iR, e)
        }

        function g(e, n) {
            var t = E.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }

        function p(e, n, t, r) {
            var a = r ? "" : x.classPrefix, i = '<span class="' + a, o = t ? "" : "</span>";
            return i += e + '">', i + n + o
        }

        function d() {
            if (!L.k)return n(y);
            var e = "", t = 0;
            L.lR.lastIndex = 0;
            for (var r = L.lR.exec(y); r;) {
                e += n(y.substr(t, r.index - t));
                var a = g(L, r);
                a ? (B += a[1], e += p(a[0], n(r[0]))) : e += n(r[0]), t = L.lR.lastIndex, r = L.lR.exec(y)
            }
            return e + n(y.substr(t))
        }

        function h() {
            if (L.sL && !w[L.sL])return n(y);
            var e = L.sL ? s(L.sL, y, !0, M[L.sL]) : l(y);
            return L.r > 0 && (B += e.r), "continuous" == L.subLanguageMode && (M[L.sL] = e.top), p(e.language, e.value, !1, !0)
        }

        function b() {
            return void 0 !== L.sL ? h() : d()
        }

        function v(e, t) {
            var r = e.cN ? p(e.cN, "", !0) : "";
            e.rB ? (k += r, y = "") : e.eB ? (k += n(t) + r, y = "") : (k += r, y = t), L = Object.create(e, {parent: {value: L}})
        }

        function m(e, t) {
            if (y += e, void 0 === t)return k += b(), 0;
            var r = o(t, L);
            if (r)return k += b(), v(r, t), r.rB ? 0 : t.length;
            var a = u(L, t);
            if (a) {
                var i = L;
                i.rE || i.eE || (y += t), k += b();
                do L.cN && (k += "</span>"), B += L.r, L = L.parent; while (L != a.parent);
                return i.eE && (k += n(t)), y = "", a.starts && v(a.starts, ""), i.rE ? 0 : t.length
            }
            if (f(t, L))throw new Error('Illegal lexeme "' + t + '" for mode "' + (L.cN || "<unnamed>") + '"');
            return y += t, t.length || 1
        }

        var E = N(e);
        if (!E)throw new Error('Unknown language: "' + e + '"');
        c(E);
        var R, L = i || E, M = {}, k = "";
        for (R = L; R != E; R = R.parent)R.cN && (k = p(R.cN, "", !0) + k);
        var y = "", B = 0;
        try {
            for (var C, j, I = 0; ;) {
                if (L.t.lastIndex = I, C = L.t.exec(t), !C)break;
                j = m(t.substr(I, C.index - I), C[0]), I = C.index + j
            }
            for (m(t.substr(I)), R = L; R.parent; R = R.parent)R.cN && (k += "</span>");
            return{r: B, value: k, language: e, top: L}
        } catch (S) {
            if (-1 != S.message.indexOf("Illegal"))return{r: 0, value: n(t)};
            throw S
        }
    }

    function l(e, t) {
        t = t || x.languages || Object.keys(w);
        var r = {r: 0, value: n(e)}, a = r;
        return t.forEach(function (n) {
            if (N(n)) {
                var t = s(n, e, !1);
                t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
            }
        }), a.language && (r.second_best = a), r
    }

    function f(e) {
        return x.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, n) {
            return n.replace(/\t/g, x.tabReplace)
        })), x.useBR && (e = e.replace(/\n/g, "<br>")), e
    }

    function g(e, n, t) {
        var r = n ? E[n] : t, a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
    }

    function p(e) {
        var n = a(e);
        if (!/no(-?)highlight|plain|text/.test(n)) {
            var t;
            x.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
            var r = t.textContent, i = n ? s(n, r, !0) : l(r), c = o(t);
            if (c.length) {
                var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                p.innerHTML = i.value, i.value = u(c, o(p), r)
            }
            i.value = f(i.value), e.innerHTML = i.value, e.className = g(e.className, n, i.language), e.result = {language: i.language, re: i.r}, i.second_best && (e.second_best = {language: i.second_best.language, re: i.second_best.r})
        }
    }

    function d(e) {
        x = i(x, e)
    }

    function h() {
        if (!h.called) {
            h.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, p)
        }
    }

    function b() {
        addEventListener("DOMContentLoaded", h, !1), addEventListener("load", h, !1)
    }

    function v(n, t) {
        var r = w[n] = t(e);
        r.aliases && r.aliases.forEach(function (e) {
            E[e] = n
        })
    }

    function m() {
        return Object.keys(w)
    }

    function N(e) {
        return w[e] || w[E[e]]
    }

    var x = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0}, w = {}, E = {};
    return e.highlight = s, e.highlightAuto = l, e.fixMarkup = f, e.highlightBlock = p, e.configure = d, e.initHighlighting = h, e.initHighlightingOnLoad = b, e.registerLanguage = v, e.listLanguages = m, e.getLanguage = N, e.inherit = i, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {b: "\\\\[\\s\\S]", r: 0}, e.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE]}, e.QSM = {cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE]}, e.PWM = {b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/}, e.C = function (n, t, r) {
        var a = e.inherit({cN: "comment", b: n, e: t, c: []}, r || {});
        return a.c.push(e.PWM), a
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {cN: "number", b: e.NR, r: 0}, e.CNM = {cN: "number", b: e.CNR, r: 0}, e.BNM = {cN: "number", b: e.BNR, r: 0}, e.CSSNM = {cN: "number", b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", r: 0}, e.RM = {cN: "regexp", b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, {b: /\[/, e: /\]/, r: 0, c: [e.BE]}]}, e.TM = {cN: "title", b: e.IR, r: 0}, e.UTM = {cN: "title", b: e.UIR, r: 0}, e
});
hljs.registerLanguage("xml", function (t) {
    var e = "[A-Za-z0-9\\._:-]+", s = {b: /<\?(php)?(?!\w)/, e: /\?>/, sL: "php", subLanguageMode: "continuous"}, c = {eW: !0, i: /</, r: 0, c: [s, {cN: "attribute", b: e, r: 0}, {b: "=", r: 0, c: [
        {cN: "value", c: [s], v: [
            {b: /"/, e: /"/},
            {b: /'/, e: /'/},
            {b: /[^\s\/>]+/}
        ]}
    ]}]};
    return{aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"], cI: !0, c: [
        {cN: "doctype", b: "<!DOCTYPE", e: ">", r: 10, c: [
            {b: "\\[", e: "\\]"}
        ]},
        t.C("<!--", "-->", {r: 10}),
        {cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10},
        {cN: "tag", b: "<style(?=\\s|>|$)", e: ">", k: {title: "style"}, c: [c], starts: {e: "</style>", rE: !0, sL: "css"}},
        {cN: "tag", b: "<script(?=\\s|>|$)", e: ">", k: {title: "script"}, c: [c], starts: {e: "</script>", rE: !0, sL: ""}},
        s,
        {cN: "pi", b: /<\?\w+/, e: /\?>/, r: 10},
        {cN: "tag", b: "</?", e: "/?>", c: [
            {cN: "title", b: /[^ \/><\n\t]+/, r: 0},
            c
        ]}
    ]}
});
hljs.registerLanguage("ruby", function (e) {
    var c = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", r = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", b = {cN: "yardoctag", b: "@[A-Za-z]+"}, a = {cN: "value", b: "#<", e: ">"}, n = [e.C("#", "$", {c: [b]}), e.C("^\\=begin", "^\\=end", {c: [b], r: 10}), e.C("^__END__", "\\n$")], s = {cN: "subst", b: "#\\{", e: "}", k: r}, t = {cN: "string", c: [e.BE, s], v: [
        {b: /'/, e: /'/},
        {b: /"/, e: /"/},
        {b: /`/, e: /`/},
        {b: "%[qQwWx]?\\(", e: "\\)"},
        {b: "%[qQwWx]?\\[", e: "\\]"},
        {b: "%[qQwWx]?{", e: "}"},
        {b: "%[qQwWx]?<", e: ">"},
        {b: "%[qQwWx]?/", e: "/"},
        {b: "%[qQwWx]?%", e: "%"},
        {b: "%[qQwWx]?-", e: "-"},
        {b: "%[qQwWx]?\\|", e: "\\|"},
        {b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}
    ]}, i = {cN: "params", b: "\\(", e: "\\)", k: r}, d = [t, a, {cN: "class", bK: "class module", e: "$|;", i: /=/, c: [e.inherit(e.TM, {b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}), {cN: "inheritance", b: "<\\s*", c: [
        {cN: "parent", b: "(" + e.IR + "::)?" + e.IR}
    ]}].concat(n)}, {cN: "function", bK: "def", e: " |$|;", r: 0, c: [e.inherit(e.TM, {b: c}), i].concat(n)}, {cN: "constant", b: "(::)?(\\b[A-Z]\\w*(::)?)+", r: 0}, {cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0}, {cN: "symbol", b: ":", c: [t, {b: c}], r: 0}, {cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0}, {cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {b: "(" + e.RSR + ")\\s*", c: [a, {cN: "regexp", c: [e.BE, s], i: /\n/, v: [
        {b: "/", e: "/[a-z]*"},
        {b: "%r{", e: "}[a-z]*"},
        {b: "%r\\(", e: "\\)[a-z]*"},
        {b: "%r!", e: "![a-z]*"},
        {b: "%r\\[", e: "\\][a-z]*"}
    ]}].concat(n), r: 0}].concat(n);
    s.c = d, i.c = d;
    var o = "[>?]>", l = "[\\w#]+\\(\\w+\\):\\d+:\\d+>", u = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>", N = [
        {b: /^\s*=>/, cN: "status", starts: {e: "$", c: d}},
        {cN: "prompt", b: "^(" + o + "|" + l + "|" + u + ")", starts: {e: "$", c: d}}
    ];
    return{aliases: ["rb", "gemspec", "podspec", "thor", "irb"], k: r, c: n.concat(N).concat(d)}
});
hljs.registerLanguage("http", function (t) {
    return{aliases: ["https"], i: "\\S", c: [
        {cN: "status", b: "^HTTP/[0-9\\.]+", e: "$", c: [
            {cN: "number", b: "\\b\\d{3}\\b"}
        ]},
        {cN: "request", b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$", rB: !0, e: "$", c: [
            {cN: "string", b: " ", e: " ", eB: !0, eE: !0}
        ]},
        {cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: {cN: "string", e: "$"}},
        {b: "\\n\\n", starts: {sL: "", eW: !0}}
    ]}
});
hljs.registerLanguage("javascript", function (e) {
    return{aliases: ["js"], k: {keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await", literal: "true false null undefined NaN Infinity", built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"}, c: [
        {cN: "pi", r: 10, v: [
            {b: /^\s*('|")use strict('|")/},
            {b: /^\s*('|")use asm('|")/}
        ]},
        e.ASM,
        e.QSM,
        {cN: "string", b: "`", e: "`", c: [e.BE, {cN: "subst", b: "\\$\\{", e: "\\}"}]},
        e.CLCM,
        e.CBCM,
        {cN: "number", b: "\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", r: 0},
        {b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*", k: "return throw case", c: [e.CLCM, e.CBCM, e.RM, {b: /</, e: />\s*[);\]]/, r: 0, sL: "xml"}], r: 0},
        {cN: "function", bK: "function", e: /\{/, eE: !0, c: [e.inherit(e.TM, {b: /[A-Za-z$_][0-9A-Za-z$_]*/}), {cN: "params", b: /\(/, e: /\)/, c: [e.CLCM, e.CBCM], i: /["'\(]/}], i: /\[|%/},
        {b: /\$[(.]/},
        {b: "\\." + e.IR, r: 0},
        {bK: "import", e: "[;$]", k: "import from as", c: [e.ASM, e.QSM]},
        {cN: "class", bK: "class", e: /[{;=]/, eE: !0, i: /[:"\[\]]/, c: [
            {bK: "extends"},
            e.UTM
        ]}
    ]}
});
hljs.registerLanguage("python", function (e) {
    var r = {cN: "prompt", b: /^(>>>|\.\.\.) /}, b = {cN: "string", c: [e.BE], v: [
        {b: /(u|b)?r?'''/, e: /'''/, c: [r], r: 10},
        {b: /(u|b)?r?"""/, e: /"""/, c: [r], r: 10},
        {b: /(u|r|ur)'/, e: /'/, r: 10},
        {b: /(u|r|ur)"/, e: /"/, r: 10},
        {b: /(b|br)'/, e: /'/},
        {b: /(b|br)"/, e: /"/},
        e.ASM,
        e.QSM
    ]}, l = {cN: "number", r: 0, v: [
        {b: e.BNR + "[lLjJ]?"},
        {b: "\\b(0o[0-7]+)[lLjJ]?"},
        {b: e.CNR + "[lLjJ]?"}
    ]}, c = {cN: "params", b: /\(/, e: /\)/, c: ["self", r, l, b]};
    return{aliases: ["py", "gyp"], k: {keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False", built_in: "Ellipsis NotImplemented"}, i: /(<\/|->|\?)/, c: [r, l, b, e.HCM, {v: [
        {cN: "function", bK: "def", r: 10},
        {cN: "class", bK: "class"}
    ], e: /:/, i: /[${=;\n,]/, c: [e.UTM, c]}, {cN: "decorator", b: /@/, e: /$/}, {b: /\b(print|exec)\(/}]}
});
hljs.registerLanguage("markdown", function (e) {
    return{aliases: ["md", "mkdown", "mkd"], c: [
        {cN: "header", v: [
            {b: "^#{1,6}", e: "$"},
            {b: "^.+?\\n[=-]{2,}$"}
        ]},
        {b: "<", e: ">", sL: "xml", r: 0},
        {cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+"},
        {cN: "strong", b: "[*_]{2}.+?[*_]{2}"},
        {cN: "emphasis", v: [
            {b: "\\*.+?\\*"},
            {b: "_.+?_", r: 0}
        ]},
        {cN: "blockquote", b: "^>\\s+", e: "$"},
        {cN: "code", v: [
            {b: "`.+?`"},
            {b: "^( {4}|	)", e: "$", r: 0}
        ]},
        {cN: "horizontal_rule", b: "^[-\\*]{3,}", e: "$"},
        {b: "\\[.+?\\][\\(\\[].*?[\\)\\]]", rB: !0, c: [
            {cN: "link_label", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0},
            {cN: "link_url", b: "\\]\\(", e: "\\)", eB: !0, eE: !0},
            {cN: "link_reference", b: "\\]\\[", e: "\\]", eB: !0, eE: !0}
        ], r: 10},
        {b: "^\\[.+\\]:", rB: !0, c: [
            {cN: "link_reference", b: "\\[", e: "\\]:", eB: !0, eE: !0, starts: {cN: "link_url", e: "$"}}
        ]}
    ]}
});
hljs.registerLanguage("json", function (e) {
    var t = {literal: "true false null"}, i = [e.QSM, e.CNM], l = {cN: "value", e: ",", eW: !0, eE: !0, c: i, k: t}, c = {b: "{", e: "}", c: [
        {cN: "attribute", b: '\\s*"', e: '"\\s*:\\s*', eB: !0, eE: !0, c: [e.BE], i: "\\n", starts: l}
    ], i: "\\S"}, n = {b: "\\[", e: "\\]", c: [e.inherit(l, {cN: null})], i: "\\S"};
    return i.splice(i.length, 0, c, n), {c: i, k: t, i: "\\S"}
});
hljs.registerLanguage("haml", function (s) {
    return{cI: !0, c: [
        {cN: "doctype", b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$", r: 10},
        s.C("^\\s*(!=#|=#|-#|/).*$", !1, {r: 0}),
        {b: "^\\s*(-|=|!=)(?!#)", starts: {e: "\\n", sL: "ruby"}},
        {cN: "tag", b: "^\\s*%", c: [
            {cN: "title", b: "\\w+"},
            {cN: "value", b: "[#\\.]\\w+"},
            {b: "{\\s*", e: "\\s*}", eE: !0, c: [
                {b: ":\\w+\\s*=>", e: ",\\s+", rB: !0, eW: !0, c: [
                    {cN: "symbol", b: ":\\w+"},
                    {cN: "string", b: '"', e: '"'},
                    {cN: "string", b: "'", e: "'"},
                    {b: "\\w+", r: 0}
                ]}
            ]},
            {b: "\\(\\s*", e: "\\s*\\)", eE: !0, c: [
                {b: "\\w+\\s*=", e: "\\s+", rB: !0, eW: !0, c: [
                    {cN: "attribute", b: "\\w+", r: 0},
                    {cN: "string", b: '"', e: '"'},
                    {cN: "string", b: "'", e: "'"},
                    {b: "\\w+", r: 0}
                ]}
            ]}
        ]},
        {cN: "bullet", b: "^\\s*[=~]\\s*", r: 0},
        {b: "#{",starts:{e:"}", sL: "ruby"}}
    ]
}
})
;
hljs.registerLanguage("coffeescript", function (e) {
    var c = {keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not", literal: "true false null undefined yes no on off", reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf", built_in: "npm require console print module global window document"}, n = "[A-Za-z$_][0-9A-Za-z$_]*", t = {cN: "subst", b: /#\{/, e: /}/, k: c}, r = [e.BNM, e.inherit(e.CNM, {starts: {e: "(\\s*/)?", r: 0}}), {cN: "string", v: [
        {b: /'''/, e: /'''/, c: [e.BE]},
        {b: /'/, e: /'/, c: [e.BE]},
        {b: /"""/, e: /"""/, c: [e.BE, t]},
        {b: /"/, e: /"/, c: [e.BE, t]}
    ]}, {cN: "regexp", v: [
        {b: "///", e: "///", c: [t, e.HCM]},
        {b: "//[gim]*", r: 0},
        {b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}
    ]}, {cN: "property", b: "@" + n}, {b: "`", e: "`", eB: !0, eE: !0, sL: "javascript"}];
    t.c = r;
    var i = e.inherit(e.TM, {b: n}), s = "(\\(.*\\))?\\s*\\B[-=]>", o = {cN: "params", b: "\\([^\\(]", rB: !0, c: [
        {b: /\(/, e: /\)/, k: c, c: ["self"].concat(r)}
    ]};
    return{aliases: ["coffee", "cson", "iced"], k: c, i: /\/\*/, c: r.concat([e.C("###", "###"), e.HCM, {cN: "function", b: "^\\s*" + n + "\\s*=\\s*" + s, e: "[-=]>", rB: !0, c: [i, o]}, {b: /[:\(,=]\s*/, r: 0, c: [
        {cN: "function", b: s, e: "[-=]>", rB: !0, c: [o]}
    ]}, {cN: "class", bK: "class", e: "$", i: /[:="\[\]]/, c: [
        {bK: "extends", eW: !0, i: /[:="\[\]]/, c: [i]},
        i
    ]}, {cN: "attribute", b: n + ":", e: ":", rB: !0, rE: !0, r: 0}])}
});
hljs.registerLanguage("java", function (e) {
    var a = e.UIR + "(<" + e.UIR + ">)?", t = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private", c = "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?", r = {cN: "number", b: c, r: 0};
    return{aliases: ["jsp"], k: t, i: /<\//, c: [
        {cN: "javadoc", b: "/\\*\\*", e: "\\*/", r: 0, c: [
            {cN: "javadoctag", b: "(^|\\s)@[A-Za-z]+"}
        ]},
        e.CLCM,
        e.CBCM,
        e.ASM,
        e.QSM,
        {cN: "class", bK: "class interface", e: /[{;=]/, eE: !0, k: "class interface", i: /[:"\[\]]/, c: [
            {bK: "extends implements"},
            e.UTM
        ]},
        {bK: "new throw return", r: 0},
        {cN: "function", b: "(" + a + "\\s+)+" + e.UIR + "\\s*\\(", rB: !0, e: /[{;=]/, eE: !0, k: t, c: [
            {b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM]},
            {cN: "params", b: /\(/, e: /\)/, k: t, r: 0, c: [e.ASM, e.QSM, e.CNM, e.CBCM]},
            e.CLCM,
            e.CBCM
        ]},
        r,
        {cN: "annotation", b: "@[A-Za-z]+"}
    ]}
});
hljs.registerLanguage("css", function (e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*", a = {cN: "function", b: c + "\\(", rB: !0, eE: !0, e: "\\("}, r = {cN: "rule", b: /[A-Z\_\.\-]+\s*:/, rB: !0, e: ";", eW: !0, c: [
        {cN: "attribute", b: /\S/, e: ":", eE: !0, starts: {cN: "value", eW: !0, eE: !0, c: [a, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "hexcolor", b: "#[0-9A-Fa-f]+"}, {cN: "important", b: "!important"}]}}
    ]};
    return{cI: !0, i: /[=\/|']/, c: [e.CBCM, r, {cN: "id", b: /\#[A-Za-z0-9_-]+/}, {cN: "class", b: /\.[A-Za-z0-9_-]+/, r: 0}, {cN: "attr_selector", b: /\[/, e: /\]/, i: "$"}, {cN: "pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/}, {cN: "at_rule", b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {cN: "at_rule", b: "@", e: "[{;]", c: [
        {cN: "keyword", b: /\S+/},
        {b: /\s/, eW: !0, eE: !0, r: 0, c: [a, e.ASM, e.QSM, e.CSSNM]}
    ]}, {cN: "tag", b: c, r: 0}, {cN: "rules", b: "{", e: "}", i: /\S/, r: 0, c: [e.CBCM, r]}]}
});