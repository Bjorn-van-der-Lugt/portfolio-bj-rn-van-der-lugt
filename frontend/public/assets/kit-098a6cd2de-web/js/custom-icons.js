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
    
    "express": [512,512,[],"e007","M512 396.5a32.6 32.6 0 0 1 -40.4-15.4l-73.6-101.8-10.7-14.2-85.4 116.1a31.3 31.3 0 0 1 -38.4 15.1l110-147.6-102.4-133.4a34 34 0 0 1 40.5 14.2l76.3 103 76.7-102.6a30.6 30.6 0 0 1 38.1-14.3l-39.7 52.7-53.8 70a14.2 14.2 0 0 0 0 21.2l102.5 136.8zM0 247l9-44.3c24.6-87.5 125-123.9 194-69.8c40.4 31.8 50.5 76.7 48.5 127.4H23.8C20.1 350.9 85.4 405.5 169 377.6a87 87 0 0 0 55.1-61.4c4.4-14.2 11.7-16.6 25-12.5A115.6 115.6 0 0 1 193.9 388.1 133.8 133.8 0 0 1 38 368.2 140.3 140.3 0 0 1 3 285.9c0-5-1.7-9.7-2.9-14.2A1884.4 1884.4 0 0 1 0 247zm24-6.1h206c-1.3-65.6-42.7-112.2-97.9-112.6c-61.5-.9-105.5 44.7-108.2 112.3z"],
    "icons8-chatgpt": [512,512,[],"e00a","M237.5 21.7c-5.6-.3-11.3-.2-17 .3c-47.5 4.3-85.4 37.6-100.9 80.8c-36.5 7.6-67.7 31.7-84 66.9c-20 43.2-10.1 92.7 19.5 127.7c-11.7 35.5-6.4 74.5 15.9 106.2c27.4 39 75.2 55.1 120.4 46.9c24.9 27.9 61.3 42.9 100 39.4c47.5-4.3 85.4-37.6 100.9-80.8c36.5-7.6 67.7-31.7 84-66.9c20-43.2 10.1-92.7-19.5-127.7c11.7-35.4 6.4-74.5-15.9-106.2c-27.4-39-75.2-55.1-120.4-46.9c-21.2-23.7-50.7-38.2-83-39.7zm-2.3 31.9c19.1 .8 36.9 7.7 51.3 19.4c-2.4 1.2-4.9 2-7.3 3.4l-85.6 49.4c-6.5 3.8-10.6 10.7-10.7 18.3l-1.3 117L144 238.7l0-94c0-45.6 33.2-86.2 78.6-90.8c4.3-.4 8.5-.5 12.6-.4zM344 90.8c27.2 .2 53.7 12.1 70.3 35.3c13.9 19.4 19 42.5 15.5 64.8c-2.2-1.5-4.2-3.3-6.6-4.6l-85.6-49.4c-6.5-3.8-14.6-3.8-21.1-.1l-102 57.5 .5-43.8 81.4-47c14.8-8.5 31.4-12.7 47.7-12.6zM112.7 138.1c-.2 2.7-.7 5.3-.7 8l0 98.8c0 7.5 4 14.5 10.5 18.3l100.8 59.7L185 344.4l-81.4-47c-39.5-22.8-58.1-71.9-39.3-113.5c9.9-21.8 27.3-37.7 48.3-45.8zM327 167.6l81.4 47c39.5 22.8 58.1 71.9 39.3 113.5c-9.9 21.8-27.3 37.7-48.4 45.8c.2-2.7 .7-5.3 .7-8l0-98.8c0-7.6-4-14.5-10.5-18.4L288.8 189.1 327 167.6zm-70.4 39.5l42 24.9-.6 48.8-42.5 23.9-42-24.9 .5-48.8 42.5-23.9zm73.8 43.8L368 273.3l0 94c0 45.6-33.2 86.2-78.6 90.8c-23.8 2.4-46.4-4.8-64-19c2.4-1.2 4.9-2 7.3-3.4l85.6-49.4c6.5-3.8 10.6-10.7 10.7-18.3l1.3-117zm-32.8 66.9l-.5 43.8-81.4 47c-39.5 22.8-91.4 14.4-117.9-22.7c-13.9-19.4-19-42.5-15.5-64.8c2.2 1.5 4.2 3.3 6.6 4.6l85.6 49.4c6.5 3.8 14.6 3.8 21.1 .1l102-57.5z"],
    "jquery": [512,512,[],"e000","M499.2 364.6s-63.6 171.4-282.4 131.5c-3.4-.6-6.7-1.8-10.1-2.8c-.8-.2-1.6-.5-2.4-.7c-3.3-1-6.5-2.1-9.8-3.2c-.4-.1-.7-.3-1.1-.4c-2.9-1-5.9-2.1-8.8-3.2c-.8-.3-1.5-.6-2.3-.9c-3.1-1.2-6.2-2.5-9.3-3.9c-.6-.2-1.1-.5-1.7-.8c-2.7-1.2-5.3-2.4-8-3.7c-.7-.3-1.4-.7-2.1-1c-.4-.2-.8-.4-1.2-.6c-1.7-.8-3.4-1.7-5-2.6c-1.3-.7-2.6-1.3-3.9-2c-2.4-1.3-4.7-2.6-7-3.9c-.9-.5-1.7-1-2.6-1.5c-3.2-1.9-6.3-3.8-9.3-5.7c-.9-.6-1.7-1.1-2.6-1.7c-2-1.3-4-2.6-6-4c-.2-.1-.4-.3-.6-.4c-.8-.5-1.5-1-2.2-1.6c-2.1-1.4-4.1-2.9-6.2-4.4c-1-.7-2-1.5-2.9-2.2c-1.8-1.4-3.7-2.8-5.5-4.3c-.9-.7-1.8-1.4-2.7-2.2c-2.2-1.8-4.4-3.7-6.6-5.5c-.4-.4-.8-.7-1.3-1.1c0 0-.1-.1-.1-.1c-2.4-2.1-4.9-4.3-7.2-6.6c-.7-.7-1.4-1.4-2.2-2.1c-1.8-1.7-3.5-3.4-5.3-5.2c-.7-.7-1.4-1.4-2.1-2.1c-2.2-2.3-4.5-4.6-6.6-7c-.1-.1-.2-.2-.3-.3c0 0-.1-.1-.1-.1c-2.2-2.4-4.4-4.9-6.5-7.4c-.6-.7-1.2-1.4-1.8-2.1c-1.6-1.9-3.1-3.8-4.7-5.7c-.6-.8-1.3-1.6-1.9-2.4c-1.7-2.2-3.4-4.5-5.1-6.7c-.3-.4-.6-.8-.9-1.3c-.1-.1-.1-.1-.2-.2c-1.9-2.6-3.7-5.3-5.5-8c-.6-.8-1.1-1.7-1.6-2.5c-1.3-2-2.6-4-3.8-6c-.6-1-1.3-2.1-1.9-3.1c-1.1-1.9-2.2-3.8-3.3-5.7c-.6-1.1-1.2-2.1-1.8-3.2c-.3-.6-.7-1.2-1-1.8c-.6-1-1.1-2.1-1.6-3.1c-.8-1.6-1.7-3.3-2.5-4.9c-34.6-69.1-40.2-153.7 5-218.7l35.3-44.8c-39.8 77-21.9 170.8 27.9 238.8c1.8 2.5 3.6 4.9 5.5 7.4c.6 .7 1.2 1.5 1.8 2.2c1.6 2 3.2 4 4.8 5.9c.6 .7 1.2 1.4 1.7 2.1c2.2 2.6 4.4 5.1 6.6 7.6c.1 .1 .2 .2 .3 .3c2.1 2.3 4.3 4.7 6.6 6.9c.7 .7 1.4 1.4 2.1 2.1c1.7 1.8 3.5 3.5 5.3 5.2c.7 .7 1.4 1.3 2.1 2c2.4 2.3 4.9 4.5 7.4 6.8c.3 .2 .5 .4 .8 .7c2.3 2 4.7 4 7.1 6c.8 .7 1.7 1.4 2.5 2c1.9 1.5 3.8 3 5.7 4.4c.9 .7 1.8 1.4 2.8 2.1c2.1 1.5 4.2 3.1 6.3 4.6c.7 .5 1.4 1 2.1 1.5c2.2 1.5 4.4 3 6.7 4.4c.8 .6 1.7 1.1 2.5 1.7c3.1 2 6.2 3.9 9.4 5.7c.8 .5 1.6 .9 2.4 1.4c2.4 1.4 4.8 2.7 7.2 4c1.3 .7 2.7 1.4 4 2.1c2 1 4 2.1 6 3c.8 .4 1.5 .7 2.2 1.1c2.6 1.2 5.1 2.4 7.7 3.6c.6 .3 1.2 .5 1.8 .8c3 1.3 6.1 2.6 9.2 3.8c.8 .3 1.6 .6 2.4 .9c2.8 1.1 5.6 2.1 8.5 3.2c.4 .2 .9 .3 1.3 .5c3.2 1.1 6.4 2.1 9.6 3.1c.8 .3 1.7 .5 2.5 .8c3.3 1 6.6 2 10 2.8c89.8 20.4 184.5 2.1 237.9-67.5zM182.4 254.8c4.9 7 10.3 15.4 16.8 21c2.4 2.6 4.8 5.1 7.3 7.6c.6 .6 1.3 1.3 1.9 1.9c2.4 2.4 4.9 4.7 7.5 7c.1 .1 .2 .2 .3 .3c0 0 .1 0 .1 .1c2.8 2.5 5.8 4.9 8.8 7.2c.7 .5 1.3 1 2 1.6c3 2.3 6 4.5 9.2 6.7c.1 .1 .2 .1 .3 .2c1.4 1 2.8 1.8 4.2 2.8c.7 .4 1.3 .9 2 1.3c2.2 1.4 4.5 2.8 6.8 4.2c.3 .2 .6 .4 1 .6c2 1.1 4 2.3 6 3.4c.7 .4 1.4 .7 2.1 1.1c1.4 .7 2.8 1.5 4.2 2.2c.2 .1 .4 .2 .6 .3c2.9 1.4 5.8 2.8 8.8 4.1c.6 .3 1.3 .5 1.9 .8c2.4 1 4.8 2 7.2 2.9c1 .4 2.1 .8 3.1 1.1c2.2 .8 4.4 1.6 6.6 2.3c1 .3 2 .6 3 1c3.1 1 6.3 2.2 9.5 2.8c168.9 28 207.9-102.1 207.9-102.1c-35.2 50.6-103.2 74.8-175.9 55.9c-3.2-.8-6.4-1.8-9.6-2.8c-1-.3-1.9-.6-2.9-.9c-2.2-.7-4.5-1.5-6.7-2.3c-1-.4-2-.7-3-1.1c-2.4-.9-4.8-1.9-7.2-2.9c-.7-.3-1.3-.5-1.9-.8c-3-1.3-5.9-2.7-8.8-4.1c-1.5-.7-3-1.5-4.4-2.3c-.8-.4-1.7-.9-2.5-1.3c-1.9-1-3.8-2.1-5.6-3.2c-.4-.3-.9-.5-1.3-.8c-2.3-1.3-4.5-2.7-6.8-4.1c-.7-.4-1.4-.9-2-1.4c-1.5-1-2.9-1.9-4.4-2.9c-3.1-2.1-6.1-4.4-9.1-6.7c-.7-.5-1.4-1.1-2.1-1.6c-31.8-25.1-57-59.4-69-98.3C175.7 115 178.4 69.7 200.1 33l-26.7 37.7c-32.7 47.1-30.9 110.1-5.4 159.9c4.3 8.3 9.1 16.4 14.5 24.2zm178.1-58.3c1.4 .5 2.8 1 4.2 1.5c.6 .2 1.2 .4 1.9 .6c2 .6 4 1.4 6 1.7c93.3 18 118.6-47.9 125.3-57.6c-22.2 31.9-59.4 39.6-105.1 28.5c-3.6-.9-7.6-2.2-11.1-3.4c-4.5-1.6-8.8-3.4-13.1-5.5c-8.1-3.9-15.8-8.6-23-14c-40.9-31-66.3-90.2-39.6-138.4L291.5 29.8c-19.3 28.4-21.2 63.6-7.8 95c14.1 33.3 43 59.4 76.8 71.8z"],
    "mongodb": [512,512,[],"e002","M364.8 233c-1.1-12.4-3.3-24.7-6.5-36.8c-10-37.9-26.7-74.2-50.1-105.6c-6.4-8.6-13.3-16.8-20.7-24.5c-7.6-8-16.1-15.3-21.4-25.2c-3.4-6.3-6.6-12.7-9.8-19c0 2-.2 4-.2 5.9c0-2 .1-4 .2-6c-.6-1.5-1.2-3.1-2.1-5.2c-.4 1.2-.6 1.6-.6 2.1c-.3 10.3-6.1 17.3-13.4 23.9c-8.2 7.4-15.8 15.3-23.7 23.1c.3 .4 .6 .7 .9 1.1c-.3-.4-.6-.7-.9-1.1c-23.4 30.8-44 63.7-56.2 100.6c-3.5 10.8-6.3 21.7-8.3 32.9c-4.1 23.7-6.1 46.7-4.7 70.7c.7 13.3 3.1 26.3 6.5 39.2c12.6 46.7 38.1 85.4 72.9 118.3c6.5 6.1 13.5 11.7 20.2 17.5c0-.1 0-.1 0-.2c0 .1 0 .1 0 .2c1 3.4 2 6.8 3 10.3c.9 5.3 1.9 10.6 2.8 15.9c.4 5.5 .9 11.1 1.3 16.6c0 3.4-.2 6.8 0 10.1c0 .9 1.2 1.7 1.8 2.5c0 0 0-.1 .1-.1c0 0 0 .1-.1 .1c1.9 .7 3.8 1.3 5.6 2c1.7 .7 3.4 1.3 5.9 2.3c-.4-5.5-.7-10.2-1-14.8c0-4.8 0-9.7 0-14.6c-.1 .1-.2 .2-.3 .3c.1-.1 .2-.2 .3-.3c.7-7.4 1.4-14.8 2-22.2c.5-1.6 1-3.2 1.5-4.8c1.4-2.5 2.8-5 4.2-7.5c5.2-4.2 10.8-8 15.5-12.6c8.6-8.4 17.1-17 24.8-26.2c10-12 18.5-25 25.4-39.1c19.6-39.9 28.6-84.3 25-128.6c0-.4-.1-.8-.1-1.2z"],
    "redux": [512,512,[],"e001","M359.2 342.9c18.3-1.8 32.5-17.1 32.5-35.8c0-.7 0-1.5-.1-2.2v.1c-1-19.7-17.1-35.3-36.9-35.6h-1.3c-19.8 .7-35.6 17-35.6 36.9c0 .5 0 .9 0 1.4v-.1c.5 9.7 4.5 18.4 10.7 24.9l0 0c-24.3 45.3-61.5 81.1-106.6 103l-1.4 .6c-24.4 13.5-53.5 21.5-84.5 21.5c-7.8 0-15.6-.5-23.1-1.5l.9 .1c-27.9-2.7-51.9-17.3-67.1-38.6l-.2-.3c-11-15.5-17.6-34.7-17.6-55.5c0-17.1 4.5-33.2 12.3-47.2l-.2 .5c11.2-21.2 26.5-38.9 44.9-52.5l.4-.3c-3.5-9.3-6.6-20.5-8.8-31.9l-.2-1.4c-95.9 68.6-86.2 162.4-57.1 206.7c25.5 32.5 64.7 53.2 108.8 53.2c2 0 4 0 6-.1h-.3c.7 0 1.6 0 2.4 0c13.3 0 26.1-1.5 38.5-4.4l-1.1 .2c82.1-15 149.3-67.9 183.8-139.6l.7-1.5zm115.5-80.8c-49.2-56.1-121-91.3-201.1-91.3c-2.4 0-4.9 0-7.3 .1h.4-11c-5.8-11.6-17.6-19.5-31.3-19.5c-.4 0-.8 0-1.2 0h.1-.8c-19.8 .3-35.7 16.4-35.7 36.2c0 .6 0 1.2 0 1.7v-.1c.9 19.7 17 35.4 36.9 35.6h1.6c14.6-.6 27-9.7 32.3-22.4l.1-.2h12c52.3 .1 100.8 16.1 141 43.6l-.9-.6c31.4 20.1 55.6 48.9 69.5 83l.4 1.2c5.3 11.1 8.4 24.1 8.4 37.9c0 14.5-3.5 28.3-9.6 40.4l.2-.5c-15.9 32.5-48.7 54.4-86.7 54.4c-1.4 0-2.8 0-4.1-.1h.2c-23.3-.5-45.3-5.6-65.2-14.5l1.1 .4c-7.8 6.5-20.7 17.1-30.1 23.6c24.9 12.2 54 19.6 84.8 20.4h.2c1.2 0 2.6 .1 4 .1c52.3 0 98-27.8 123.4-69.3l.4-.6c7-16.6 11.1-35.9 11.1-56.2c0-40.6-16.3-77.3-42.7-104l0 0-.3 .7zM140.2 354.6c.9 19.7 17.1 35.5 36.9 35.6h1.3c19.8-.7 35.7-16.9 35.7-36.9c0-20.3-16.4-36.7-36.6-36.9h-1.4c-.2 0-.5 0-.7 0c-1.5 0-2.9 .2-4.3 .7l.1 0c-21.9-35.7-34.9-78.8-34.9-125.1c0-7.5 .3-14.8 1-22.1l-.1 .9c1.9-39 16.2-74.4 39.1-102.5l-.2 .3c20.3-21.9 48.9-35.9 80.8-36.9h.2c69.9-1.3 99 85.8 101.3 120.4l32.4 9.7C383.2 55.7 317.2 0 254.1 0C190 3.3 136.7 46.5 118.5 105.1l-.3 1.1c-9 25.8-14.2 55.6-14.2 86.6c0 53 15.2 102.5 41.4 144.3l-.7-1.1c-2.9 4.4-4.7 9.9-4.7 15.7c0 1.1 .1 2.2 .2 3.2l0-.1z"],
    "sass": [512,512,[],"e006","M256 42.7A213.3 213.3 0 1 1 42.7 256 213.3 213.3 0 0 1 256 42.7M213.3 327a54.4 54.4 0 0 1 0 32c0 1.1 0 2.1-1.3 3.6s0 1.5-1.5 2.6a53.3 53.3 0 0 1 -9.8 14.3c-12.4 13.7-30.1 18.8-37.1 14.5s-3.6-23.9 10.5-39a147.4 147.4 0 0 1 37.5-26.9h0l1.7-1.1m176.4-192c-9.6-38-72.5-50.3-131.8-29.2a298.7 298.7 0 0 0 -101.3 57c-32.6 30.7-38 57.4-35.8 68.5c7.3 39.3 61.4 65.1 83.6 84.1h0c-6.4 3.2-54.2 27.3-65.7 52.1a34.6 34.6 0 0 0 10.7 47.6 67.4 67.4 0 0 0 72.7-29.4 73.4 73.4 0 0 0 7.3-65.5 92.6 92.6 0 0 1 32.6-1.7c37.5 4.5 44.8 27.7 42.7 37.5a24.7 24.7 0 0 1 -11.7 16.9c-2.6 1.5-3.4 2.1-3.2 3.4s1.5 1.7 3.6 1.3a29 29 0 0 0 21.3-26c0-23-21.3-48.6-59.9-48a103.3 103.3 0 0 0 -33.3 4.7l-1.7-1.9c-24.1-25.6-68.5-42.7-66.6-78.3c0-12.6 4.9-45.4 85.3-85.3c65.7-32.9 118.4-23.9 128-3.6c13 28.4-28.2 81.5-96.4 89.2a52.1 52.1 0 0 1 -42.7-10.9c-3.6-3.6-4.1-4.3-5.3-3.6s0 4.9 0 7a42.7 42.7 0 0 0 24.5 19.4 131.8 131.8 0 0 0 80.2-7.9c40.1-16.2 72.5-61.4 62.9-98.1z"]

  };
  var prefixes = [null    ,'fak',
    ,'fa-kit'
];
  bunker(() => {
    for (const prefix of prefixes) {
      if (!prefix) continue;
      defineIcons(prefix, icons);
    }
  });

}());
