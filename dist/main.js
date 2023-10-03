import { defineComponent as p, inject as l, ref as v, openBlock as f, createElementBlock as m, mergeProps as y, provide as g, renderSlot as O } from "vue";
var u = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, b = {}, E = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.maybe_create_directive = e.build_IE_query_string = e.build_IE_directives = e.build_IE_url = e.OBJECT_TO_DIRECTIVES_MAP = void 0, e.OBJECT_TO_DIRECTIVES_MAP = {
    width: "w",
    height: "h",
    autoWidthWithFallback: "w_auto",
    auto_width_fallback: "w_auto",
    scaleToScreenWidth: "pc",
    scale_to_screen_width: "pc",
    crop: "cr",
    outputFormat: "f",
    format: "f",
    fitMethod: "m",
    fit: "m",
    compression: "cmpr",
    sharpness: "s",
    rotate: "r",
    inline: "in",
    keepMeta: "meta",
    keep_meta: "meta",
    noOptimization: "pass",
    no_optimization: "pass",
    force_download: "dl",
    max_device_pixel_ratio: "maxdpr",
    maxDevicePixelRatio: "maxdpr"
  };
  function c(r, t, d) {
    var o = i(t, d), a = n(o, d), _ = a === "" ? "" : r.includes("?") ? "&" : "?";
    return "" + r + _ + a;
  }
  e.build_IE_url = c;
  function i(r, t) {
    return Object.entries(r).reduce(function(d, o) {
      var a = o[0], _ = o[1];
      return d + s(a, _, t);
    }, "");
  }
  e.build_IE_directives = i;
  function n(r, t) {
    return r && r !== "" ? "imgeng=" + r : (t && console.warn("build_IE_query_string called with an empty directives_string."), "");
  }
  e.build_IE_query_string = n;
  function s(r, t, d) {
    var o = e.OBJECT_TO_DIRECTIVES_MAP[r];
    return o && (t || t === 0) ? "/" + o + "_" + t : o ? (d && console.warn("Directive '" + r + "' has an invalid value " + t + "."), "") : (d && console.warn("Directive '" + r + "' isn't recognized and won't be applied to the image."), "");
  }
  e.maybe_create_directive = s;
})(E);
var w = {};
Object.defineProperty(w, "__esModule", { value: !0 });
(function(e) {
  var c = u && u.__createBinding || (Object.create ? function(n, s, r, t) {
    t === void 0 && (t = r), Object.defineProperty(n, t, { enumerable: !0, get: function() {
      return s[r];
    } });
  } : function(n, s, r, t) {
    t === void 0 && (t = r), n[t] = s[r];
  }), i = u && u.__exportStar || function(n, s) {
    for (var r in n)
      r !== "default" && !Object.prototype.hasOwnProperty.call(s, r) && c(s, n, r);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), i(E, e), i(w, e);
})(b);
function I(e, c) {
  return b.build_IE_url(e, c, !0);
}
function $(e, c) {
  return e.reduce((i, { src: n, width: s, directives: r }) => {
    const t = {
      width: Number(s.replace("w", ""))
    }, o = `${I(
      c + n,
      r ? {
        ...r,
        ...t
      } : t
    )} ${s},
`;
    return i += o, i;
  }, "");
}
const S = [
  "png",
  "gif",
  "jpg",
  "jpeg",
  "bmp",
  "webp",
  "jp2",
  "svg",
  "tif"
], j = p({
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: "Image",
  props: {
    src: {
      type: String,
      required: !0
    },
    directives: {
      type: Object,
      default: null
    },
    srcSet: {
      type: Array,
      default: null
    },
    attributes: {
      type: Object
    }
  },
  setup(e) {
    if (!e.src)
      throw new Error(
        "Please ensure that the image component has an 'src' prop."
      );
    const c = l("deliveryAddress"), i = l("stripFromSrc");
    return {
      count: v(0),
      deliveryAddress: c,
      stripFromSrc: i
    };
  },
  computed: {
    computedDirectives() {
      return this.directives ? this.srcString : this.imageUrl;
    },
    srcString() {
      return I(this.imageUrl, this.directives);
    },
    srcSetString() {
      return this.srcSet && $(this.srcSet, this.deliveryAddress);
    },
    imageUrl() {
      return this.deliveryAddress + (this.stripFromSrc ? this.src.replace(this.stripFromSrc, "") : this.src);
    },
    imageExtension() {
      const e = this.src.split(".").slice(-1);
      return e.length > 0 ? e[e.length - 1] : "";
    }
  },
  created() {
    S.includes(
      this.imageExtension.toLowerCase()
    ) || console.warn(
      `The following image's extension doesn't match any of the allowed types and won't be optimized: ${this.src}.`,
      `List of supported extensions: ${S.join(", ")}.`
    );
  }
}), h = (e, c) => {
  const i = e.__vccOpts || e;
  for (const [n, s] of c)
    i[n] = s;
  return i;
}, A = ["src", "srcSet"];
function T(e, c, i, n, s, r) {
  return f(), m("img", y({
    src: e.computedDirectives,
    srcSet: e.srcSetString
  }, e.attributes), null, 16, A);
}
const B = /* @__PURE__ */ h(j, [["render", T]]), F = p({
  setup() {
    const e = l("deliveryAddress"), c = l("stripFromSrc");
    return {
      count: v(0),
      deliveryAddress: e,
      stripFromSrc: c
    };
  },
  props: {
    srcSet: {
      type: Array,
      required: !0
    },
    attributes: {
      type: Object
    }
  },
  computed: {
    srcSetString() {
      return $(
        this.stripFromSrc ? this.srcSet.map((e) => ({
          ...e,
          src: e.src.replace(this.stripFromSrc, "")
        })) : this.srcSet,
        this.deliveryAddress
      );
    }
  }
}), P = ["srcSet"];
function D(e, c, i, n, s, r) {
  return f(), m("source", y({ srcSet: e.srcSetString }, e.attributes), null, 16, P);
}
const U = /* @__PURE__ */ h(F, [["render", D]]), q = p({
  props: {
    deliveryAddress: {
      type: String,
      required: !0
    },
    stripFromSrc: {
      type: String
    }
  },
  setup(e) {
    g("deliveryAddress", e.deliveryAddress), g("stripFromSrc", e.stripFromSrc);
  }
});
function C(e, c, i, n, s, r) {
  return f(), m("div", null, [
    O(e.$slots, "default")
  ]);
}
const z = /* @__PURE__ */ h(q, [["render", C]]);
export {
  B as Image,
  z as ImageEngineProvider,
  U as Source
};
