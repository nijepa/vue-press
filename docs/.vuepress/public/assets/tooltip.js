import {
  useCssVars as M,
  ref as o,
  computed as P,
  onMounted as W,
  openBlock as g,
  createBlock as H,
  Transition as V,
  withCtx as Y,
  createElementBlock as S,
  normalizeClass as b,
  unref as x,
  createElementVNode as _,
  toDisplayString as q,
  renderSlot as R,
  createCommentVNode as D,
  nextTick as I,
  defineCustomElement as K,
} from "vue";
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) n(t);
  new MutationObserver((t) => {
    for (const a of t)
      if (a.type === "childList")
        for (const d of a.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && n(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(t) {
    const a = {};
    return (
      t.integrity && (a.integrity = t.integrity),
      t.referrerpolicy && (a.referrerPolicy = t.referrerpolicy),
      t.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : t.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function n(t) {
    if (t.ep) return;
    t.ep = !0;
    const a = r(t);
    fetch(t.href, a);
  }
})();
const j = `.not-active{display:none}.cadooz-tooltip{position:fixed;pointer-events:none;border-radius:var(--72bc4d7c);color:var(--059b6cb3);text-align:center;line-height:1.3;letter-spacing:normal;text-transform:none;font-family:var(--c5d23602);font-size:var(--8594bcc0);font-weight:var(--4ce71857);top:var(--57fe5b4b);left:var(--b06d765e)}.cadooz-tooltip.has-shadow{box-shadow:0 0 3px #000000bf;filter:drop-shadow(rgba(0,0,0,.3) 0 2px 7px)}.cadooz-tooltip.is-small{max-width:100px}.cadooz-tooltip.is-medium{max-width:200px}.cadooz-tooltip.is-large{max-width:300px}.cadooz-tooltip__arrow{z-index:90;position:absolute}.cadooz-tooltip__arrow rect{fill:var(--2945e9de)}.cadooz-tooltip__arrow.has-shadow{box-shadow:0 0 3px #000000bf}.cadooz-tooltip__arrow.is-right,.cadooz-tooltip__arrow.is-left{top:calc(50% - 5px)}.cadooz-tooltip__arrow.is-right{left:calc(0% - 5px);transform:rotate(135deg) skew(20deg,20deg)}.cadooz-tooltip__arrow.is-left{left:calc(100% - 5px);transform:rotate(-45deg) skew(20deg,20deg)}.cadooz-tooltip__arrow.is-bottom,.cadooz-tooltip__arrow.is-top{left:calc(50% - 5px)}.cadooz-tooltip__arrow.is-bottom{top:calc(0% - 5px);transform:rotate(-135deg) skew(20deg,20deg)}.cadooz-tooltip__arrow.is-top{top:calc(100% - 5px);transform:rotate(45deg) skew(20deg,20deg)}.cadooz-tooltip__text{position:relative;z-index:100;padding:.75em .5em;background:var(--2945e9de);border-radius:var(--72bc4d7c);word-break:break-word}.vertical-enter-active{animation:verticals .4s ease}.vertical-leave-active{animation:verticals .2s reverse}.horizontal-enter-active{animation:horizontals .4s ease}.horizontal-leave-active{animation:horizontals .2s reverse}@keyframes verticals{0%{transform:translateY(var(--b5aa4fac));opacity:0;visibility:hidden}to{transform:translateY(0);opacity:1;visibility:visible}}@keyframes horizontals{0%{transform:translate(var(--b5aa4fac));opacity:0;visibility:hidden}to{transform:translateY(0);opacity:1;visibility:visible}}
`,
  G = (s, e) => {
    const r = s.__vccOpts || s;
    for (const [n, t] of e) r[n] = t;
    return r;
  },
  J = { class: "text" },
  Q = _("rect", { width: "10", height: "10" }, null, -1),
  U = [Q],
  X = {
    __name: "Custom-Tooltip.ce",
    props: {
      active: { type: Boolean, default: !1 },
      label: { type: String, default: "" },
      position: {
        type: String,
        default: "is-top",
        validator(s) {
          return ["is-top", "is-bottom", "is-left", "is-right"].indexOf(s) > -1;
        },
      },
      size: {
        type: String,
        default: "is-medium",
        validator(s) {
          return ["is-small", "is-medium", "is-large"].indexOf(s) > -1;
        },
      },
      background: { type: String, default: "#000" },
      color: { type: String, default: "#fff" },
      font: { type: String, default: "'Open Sans', sans-serif" },
      fontsize: { type: String, default: "1em" },
      fontweight: { type: Number, default: 400 },
      radius: { type: String, default: "4px" },
      shadow: { type: Boolean, default: !0 },
    },
    setup(s) {
      const e = s;
      M((l) => ({
        "059b6cb3": w.value,
        "2945e9de": d.value,
        "72bc4d7c": O.value,
        "4ce71857": C.value,
        b5aa4fac: z.value,
        c5d23602: E.value,
        "8594bcc0": A.value,
        "57fe5b4b": p.value,
        b06d765e: f.value,
      }));
      const r = o(e.active),
        n = o(e.label || null),
        t = o(e.position || "is-top"),
        a = o(e.size || "is-medium"),
        d = o(e.background),
        w = o(e.color),
        E = o(e.font),
        A = o(e.fontsize),
        C = o(e.fontweight),
        O = o(e.radius),
        p = o(0),
        f = o(0),
        y = o("vertical"),
        z = o("25px"),
        u = o(null),
        c = o(null),
        h = P(() => (e.shadow === "false" ? "" : "has-shadow")),
        $ = () => {
          (n.value = c.value.getAttribute("data-label") || e.label),
            (a.value = c.value.getAttribute("size") || e.size),
            (t.value = c.value.getAttribute("position") || e.position),
            (d.value = c.value.getAttribute("background") || e.background),
            (w.value = c.value.getAttribute("color") || e.color),
            L();
        },
        k = new Map([
          ["is-top", { dir: "vertical", px: "25px" }],
          ["is-bottom", { dir: "vertical", px: "-25px" }],
          ["is-left", { dir: "horizontal", px: "25px" }],
          ["is-right", { dir: "horizontal", px: "-25px" }],
        ]),
        L = () => {
          (y.value = k.get(t.value).dir), (z.value = k.get(t.value).px);
        },
        i = () => {
          const l = c.value.getBoundingClientRect();
          return {
            left: l.left,
            top: l.top,
            right: l.right,
            bottom: l.bottom,
            width: l.width,
            height: l.height,
          };
        },
        B = new Map([
          ["is-medium", 200],
          ["is-small", 100],
          ["is-large", 300],
        ]),
        N = {
          "is-top": () => {
            (p.value = `${i().top - u.value.offsetHeight - 10}px`),
              (f.value = `${
                i().left + i().width / 2 - u.value.offsetWidth / 2
              }px`);
          },
          "is-bottom": () => {
            (p.value = `${i().bottom + 10}px`),
              (f.value = `${
                i().left + i().width / 2 - u.value.offsetWidth / 2
              }px`);
          },
          "is-left": () => {
            (p.value = `${
              i().top + i().height / 2 - u.value.offsetHeight / 2
            }px`),
              (f.value = `${i().left - B.get(a.value) - 10}px`);
          },
          "is-right": () => {
            (p.value = `${
              i().top + i().height / 2 - u.value.clientHeight / 2
            }px`),
              (f.value = `${i().left + i().width + 10}px`);
          },
        },
        T = () => {
          (r.value = !0),
            $(),
            I(() => {
              i(), N[t.value]();
            });
        },
        F = () => {
          r.value = !1;
        };
      return (
        W(() => {
          let l = document.querySelectorAll("[cadooz-tooltip]");
          window.addEventListener("scroll", i),
            l.forEach((v) => {
              ["mouseover", "touchstart"].forEach((m) =>
                v.addEventListener(m, () => {
                  (c.value = v), T();
                })
              ),
                ["mouseleave", "touchleave"].forEach((m) =>
                  v.addEventListener(m, () => {
                    F();
                  })
                );
            });
        }),
        (l, v) => (
          g(),
          H(
            V,
            { name: y.value, appear: "", mode: "in-out" },
            {
              default: Y(() => [
                r.value
                  ? (g(),
                    S(
                      "div",
                      {
                        key: 0,
                        ref_key: "tooltip",
                        ref: u,
                        class: b([
                          t.value,
                          a.value,
                          x(h),
                          { "cadooz-tooltip": r.value && n.value },
                        ]),
                      },
                      [
                        _(
                          "div",
                          { class: b(["cadooz-tooltip__text", x(h)]) },
                          [_("span", J, q(n.value), 1)],
                          2
                        ),
                        R(l.$slots, "default"),
                        (g(),
                        S(
                          "svg",
                          {
                            width: "10",
                            height: "10",
                            class: b([
                              [
                                t.value,
                                x(h),
                                { "not-active": !r.value || !n.value },
                              ],
                              "cadooz-tooltip__arrow",
                            ]),
                          },
                          U,
                          2
                        )),
                      ],
                      2
                    ))
                  : D("", !0),
              ]),
              _: 3,
            },
            8,
            ["name"]
          )
        )
      );
    },
  },
  Z = G(X, [["styles", [j]]]),
  tt = K(Z);
customElements.define("custom-tooltip", tt);
