import { defineComponent as p, inject as l, ref as S, openBlock as f, createElementBlock as m, mergeProps as y, provide as g, renderSlot as $ } from "vue";
var u = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, b = {}, w = {};
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
  function s(t, r, o) {
    var a = n(r, o), d = c(a, o), _ = d === "" ? "" : t.includes("?") ? "&" : "?";
    return "".concat(t).concat(_).concat(d);
  }
  e.build_IE_url = s;
  function n(t, r) {
    return Object.entries(t).reduce(function(o, a) {
      var d = a[0], _ = a[1];
      return o + i(d, _, r);
    }, "");
  }
  e.build_IE_directives = n;
  function c(t, r) {
    return t && t !== "" ? "imgeng=".concat(t) : (r && console.warn("build_IE_query_string called with an empty directives_string."), "");
  }
  e.build_IE_query_string = c;
  function i(t, r, o) {
    var a = e.OBJECT_TO_DIRECTIVES_MAP[t];
    return a && (r || r === 0) ? "/".concat(a, "_").concat(r) : a ? (o && console.warn("Directive '".concat(t, "' has an invalid value ").concat(r, ".")), "") : (o && console.warn("Directive '".concat(t, "' isn't recognized and won't be applied to the image.")), "");
  }
  e.maybe_create_directive = i;
})(w);
var E = {};
Object.defineProperty(E, "__esModule", { value: !0 });
(function(e) {
  var s = u && u.__createBinding || (Object.create ? function(c, i, t, r) {
    r === void 0 && (r = t);
    var o = Object.getOwnPropertyDescriptor(i, t);
    (!o || ("get" in o ? !i.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return i[t];
    } }), Object.defineProperty(c, r, o);
  } : function(c, i, t, r) {
    r === void 0 && (r = t), c[r] = i[t];
  }), n = u && u.__exportStar || function(c, i) {
    for (var t in c)
      t !== "default" && !Object.prototype.hasOwnProperty.call(i, t) && s(i, c, t);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), n(w, e), n(E, e);
})(b);
function I(e, s) {
  return b.build_IE_url(e, s, !0);
}
function O(e, s) {
  return e.reduce((n, { src: c, width: i, directives: t }) => {
    const r = {
      width: Number(i.replace("w", ""))
    }, a = `${I(
      s + c,
      t ? {
        ...t,
        ...r
      } : r
    )} ${i},
`;
    return n += a, n;
  }, "");
}
const v = [
  "png",
  "gif",
  "jpg",
  "jpeg",
  "bmp",
  "webp",
  "jp2",
  "svg",
  "mp4",
  "jxr",
  "avif",
  "jxl",
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
    const s = l("deliveryAddress"), n = l("stripFromSrc");
    return {
      count: S(0),
      deliveryAddress: s,
      stripFromSrc: n
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
      return this.srcSet && O(this.srcSet, this.deliveryAddress);
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
    v.includes(
      this.imageExtension.toLowerCase()
    ) || console.warn(
      `The following image's extension doesn't match any of the allowed types and won't be optimized: ${this.src}.`,
      `List of supported extensions: ${v.join(", ")}.`
    );
  }
}), h = (e, s) => {
  const n = e.__vccOpts || e;
  for (const [c, i] of s)
    n[c] = i;
  return n;
}, A = ["src", "srcSet"];
function T(e, s, n, c, i, t) {
  return f(), m("img", y({
    src: e.computedDirectives,
    srcSet: e.srcSetString
  }, e.attributes), null, 16, A);
}
const B = /* @__PURE__ */ h(j, [["render", T]]), P = p({
  setup() {
    const e = l("deliveryAddress"), s = l("stripFromSrc");
    return {
      count: S(0),
      deliveryAddress: e,
      stripFromSrc: s
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
      return O(
        this.stripFromSrc ? this.srcSet.map((e) => ({
          ...e,
          src: e.src.replace(this.stripFromSrc, "")
        })) : this.srcSet,
        this.deliveryAddress
      );
    }
  }
}), F = ["srcSet"];
function D(e, s, n, c, i, t) {
  return f(), m("source", y({ srcSet: e.srcSetString }, e.attributes), null, 16, F);
}
const U = /* @__PURE__ */ h(P, [["render", D]]), q = p({
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
function M(e, s, n, c, i, t) {
  return f(), m("div", null, [
    $(e.$slots, "default")
  ]);
}
const z = /* @__PURE__ */ h(q, [["render", M]]);
export {
  B as Image,
  z as ImageEngineProvider,
  U as Source
};
