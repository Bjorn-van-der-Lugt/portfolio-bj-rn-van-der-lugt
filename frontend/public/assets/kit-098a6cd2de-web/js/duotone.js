(function () {
  'use strict';

  let _WINDOW = {};
  let _DOCUMENT = {};
  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}
  const {
    userAgent = ''
  } = _WINDOW.navigator || {};
  const WINDOW = _WINDOW;
  const DOCUMENT = _DOCUMENT;
  const IS_BROWSER = !!WINDOW.document;
  const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var S = {
      classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
      },
      duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
      },
      sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
      },
      "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
      }
    };
  var s = "classic";
  var G = {
      classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
      },
      duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
      },
      sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
      },
      "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
      }
    };
  var xt = {
      classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        brands: "fab"
      },
      duotone: {
        solid: "fad",
        regular: "fadr",
        light: "fadl",
        thin: "fadt"
      },
      sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
      },
      "sharp-duotone": {
        solid: "fasds",
        regular: "fasdr",
        light: "fasdl",
        thin: "fasdt"
      }
    };
  var St = {
      kit: {
        fak: "kit",
        "fa-kit": "kit"
      },
      "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      }
    };
  var Ct = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  };
  var Wt = {
      kit: {
        fak: "fa-kit"
      },
      "kit-duotone": {
        fakd: "fa-kit-duotone"
      }
    };
  var Et = {
      kit: {
        kit: "fak"
      },
      "kit-duotone": {
        "kit-duotone": "fakd"
      }
    };

  var po = {
      classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
      },
      duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
      },
      sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
      },
      "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
      }
    },
    co = {
      classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
      },
      duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
      },
      sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
      },
      "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
      }
    };

  const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  const PRODUCTION = (() => {
    try {
      return "production" === 'production';
    } catch (e$$1) {
      return false;
    }
  })();
  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[s];
      }
    });
  }
  const _PREFIX_TO_STYLE = _objectSpread2({}, S);

  // We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
  // {'fa-duotone': 'duotone'}
  _PREFIX_TO_STYLE[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    'fa-duotone': 'duotone'
  }), S[s]), St['kit']), St['kit-duotone']);
  const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  const _STYLE_TO_PREFIX = _objectSpread2({}, xt);

  // We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
  _STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    duotone: 'fad'
  }), _STYLE_TO_PREFIX[s]), Et['kit']), Et['kit-duotone']);
  const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, co);
  _PREFIX_TO_LONG_STYLE[s] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s]), Wt['kit']);
  const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, po);
  _LONG_STYLE_TO_PREFIX[s] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s]), Ct['kit']);
  const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
  const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      fn(...args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  const w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName) => {
      const icon = icons[iconName];
      const expanded = !!icon.icon;
      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }
      return acc;
    }, {});
  }
  function defineIcons(prefix, icons) {
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      skipHooks = false
    } = params;
    const normalized = normalizeIcons(icons);
    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }

    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */
    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    
    "bars": [448,512,["navicon"],"f0c9",["M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z","M448 96c0-17.7-14.3-32-32-32L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32L32 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32z"]],
    "globe": [512,512,["127760"],"f0ac",["M0 256c0-22.1 2.8-43.5 8.1-64c41 0 82.1 0 123.1 0c-1 10.3-1.8 20.8-2.4 31.6c-.1 2.6-.2 5.3-.4 8.1c-.1 2.5-.2 5-.2 7.5l0 .6c-.1 2.6-.1 5.1-.1 7.5l0 .4c0 2.6 0 5.2-.1 7.7l0 .4c0 8.2 .2 16.4 .5 24.5c.1 2.6 .2 5.3 .3 7.9c.5 10.7 1.3 21.3 2.4 31.6L8.1 320C2.8 299.5 0 278.1 0 256zm18.6-96C48.5 86.3 111.6 29.6 189.5 8.7c-25 34.6-44.3 88-54.2 151.3c-38.9 0-77.8 0-116.6 0zm0 192l116.6 0c9.9 63.3 29.2 116.7 54.2 151.3C111.6 482.4 48.5 425.7 18.6 352zM160.5 231.4c.1-2.7 .2-5.4 .4-8.1c.6-10.7 1.4-21.1 2.5-31.4c61.8 0 123.6 0 185.3 0c2.2 20.4 3.3 41.9 3.3 64c0 22.1-1.2 43.5-3.3 64c-61.8 0-123.6 0-185.3 0c-1.1-10.2-1.9-20.7-2.5-31.4c-.3-5.4-.5-10.9-.6-16.4c-.1-2.7-.1-5.3-.2-8c0-2.6-.1-5.2-.1-7.8l0-.4c0-.1 0-.3 0-.4c0-2.8 0-5.5 .1-8.2c0-2.5 .1-5.1 .2-7.6l0-.6c.1-2.5 .2-5.1 .3-7.7zm7.2-71.4c6.1-36.7 15.5-69.2 27.1-95.5c10.5-23.8 22.2-41.2 33.6-52.1c6.8-6.5 12.8-10.2 18.1-12.2c3.2-.1 6.3-.2 9.5-.2s6.3 .1 9.5 .2c5.3 1.9 11.4 5.7 18.1 12.2c11.4 10.9 23.1 28.3 33.6 52.1c11.6 26.3 21 58.8 27.1 95.5c-58.9 0-117.8 0-176.7 0zm0 192l176.7 0c-6.1 36.7-15.5 69.2-27.1 95.5c-10.5 23.8-22.2 41.2-33.6 52.1c-6.8 6.5-12.8 10.2-18.1 12.2c-3.2 .1-6.3 .2-9.5 .2s-6.3-.1-9.5-.2c-5.3-1.9-11.4-5.7-18.1-12.2c-11.4-10.9-23.1-28.3-33.6-52.1c-11.6-26.3-21-58.8-27.1-95.5zM322.5 8.7c77.8 20.9 141 77.5 170.9 151.3c-38.9 0-77.8 0-116.6 0C366.9 96.7 347.5 43.3 322.5 8.7zm0 494.6c25-34.6 44.3-88 54.2-151.3l116.6 0c-29.8 73.7-93 130.4-170.9 151.3zM380.8 192c41 0 82.1 0 123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64c0-22-1.1-43.4-3.2-64z","M344.3 352c-6.1 36.7-15.5 69.2-27.1 95.5c-10.5 23.8-22.2 41.2-33.6 52.1c-6.8 6.5-12.8 10.2-18.1 12.2c19.7-.7 38.7-3.6 57-8.6c25-34.6 44.3-88 54.2-151.3l116.6 0c4.2-10.3 7.7-21 10.5-32l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64l123.1 0c-2.8-11-6.4-21.7-10.5-32l-116.6 0C366.9 96.7 347.5 43.3 322.5 8.7c-18.3-4.9-37.4-7.8-57-8.6c5.3 1.9 11.4 5.7 18.1 12.2c11.4 10.9 23.1 28.3 33.6 52.1c11.6 26.3 21 58.8 27.1 95.5l-176.7 0c6.1-36.7 15.5-69.2 27.1-95.5c10.5-23.8 22.2-41.2 33.6-52.1c6.8-6.5 12.8-10.2 18.1-12.2c-19.7 .7-38.7 3.6-57 8.6c-25 34.6-44.4 88-54.2 151.3L18.6 160c-4.2 10.3-7.7 21-10.5 32l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320c2.8 11 6.4 21.7 10.5 32l116.6 0c9.9 63.3 29.2 116.7 54.2 151.3c18.3 4.9 37.4 7.8 57 8.6c-5.3-1.9-11.4-5.7-18.1-12.2c-11.4-10.9-23.1-28.3-33.6-52.1c-11.6-26.3-21-58.8-27.1-95.5l176.7 0zm7.7-96c0 22.1-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.9-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.9 3.3 64z"]],
    "share-nodes": [448,512,["share-alt"],"f1e0",["M162.6 186.9c15.4 14.9 25.9 34.9 28.6 57.2l94.1-47c-15.4-14.9-25.9-34.9-28.6-57.2l-94.1 47zm0 138.2l94.1 47c2.8-22.4 13.2-42.4 28.6-57.2l-94.1-47c-2.8 22.4-13.2 42.4-28.6 57.2z","M256 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM0 256a96 96 0 1 1 192 0A96 96 0 1 1 0 256zm352 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]]

  };
  var prefixes = [null    ,'fad',
    ,'fa-duotone'
];
  bunker(() => {
    for (const prefix of prefixes) {
      if (!prefix) continue;
      defineIcons(prefix, icons);
    }
  });

}());
