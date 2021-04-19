(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./client/services/highlight.ts":
/*!**************************************!*\
  !*** ./client/services/highlight.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/lib/languages/css.js");
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/json */ "./node_modules/highlight.js/lib/languages/json.js");
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4__);





highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('html', highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1___default.a);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('css', highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2___default.a);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('json', highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3___default.a);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4___default.a);
/* harmony default export */ __webpack_exports__["default"] = (highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/highlight.js/lib/core.js":
/*!***********************************************!*\
  !*** ./node_modules/highlight.js/lib/core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function deepFreeze(obj) {
    if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function () {
            throw new Error('map is read-only');
        };
    } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function () {
            throw new Error('set is read-only');
        };
    }

    // Freeze self
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });

    return obj;
}

var deepFreezeEs6 = deepFreeze;
var _default = deepFreeze;
deepFreezeEs6.default = _default;

/** @implements CallbackResponse */
class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
    this.isMatchIgnored = false;
  }

  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{kind?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  return !!node.kind;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    let className = node.kind;
    if (!node.sublanguage) {
      className = `${this.classPrefix}${className}`;
    }
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */
/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */
/**  */

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} kind */
  openNode(kind) {
    /** @type Node */
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addKeyword(text, kind)
  - addText(text)
  - addSublanguage(emitter, subLanguageName)
  - finalize()
  - openNode(kind)
  - closeNode()
  - closeAllNodes()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   * @param {string} kind
   */
  addKeyword(text, kind) {
    if (text === "") { return; }

    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */
function escape(value) {
  return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {string} separator
 * @returns {string}
 */
function join(regexps, separator = "|") {
  let numCaptures = 0;

  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = '';

    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        out += '\\' + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    return out;
  }).map(re => `(${re})`).join(separator);
}

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit({
    className: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  className: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  className: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit(
    {
      className: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push(PHRASAL_WORDS_MODE);
  mode.contains.push({
    className: 'doctag',
    begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
    relevance: 0
  });
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  className: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  className: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const CSS_NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE + '(' +
    '%|em|ex|ch|rem' +
    '|vw|vh|vmin|vmax' +
    '|cm|mm|in|pt|pc|px' +
    '|deg|grad|rad|turn' +
    '|s|ms' +
    '|Hz|kHz' +
    '|dpi|dpcm|dppx' +
    ')?',
  relevance: 0
};
const REGEXP_MODE = {
  // this outer rule makes sure we actually have a WHOLE regex and not simply
  // an expression such as:
  //
  //     3 / something
  //
  // (which will then blow up when regex's `illegal` sees the newline)
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    className: 'regexp',
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  className: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  className: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: MATCH_NOTHING_RE,
    IDENT_RE: IDENT_RE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    NUMBER_RE: NUMBER_RE,
    C_NUMBER_RE: C_NUMBER_RE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    APOS_STRING_MODE: APOS_STRING_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    COMMENT: COMMENT,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    NUMBER_MODE: NUMBER_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    CSS_NUMBER_MODE: CSS_NUMBER_MODE,
    REGEXP_MODE: REGEXP_MODE,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
    METHOD_GUARD: METHOD_GUARD,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfhasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}


/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfhasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_CLASSNAME = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, className = DEFAULT_KEYWORD_CLASSNAME) {
  /** @type KeywordDict */
  const compiledKeywords = {};

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing className (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(className, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(className, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(className) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[className], caseInsensitive, className)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} className
   * @param {Array<string>} keywordList
   */
  function compileList(className, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @param {{plugins: HLJSPlugin[]}} opts
 * @returns {CompiledLanguage}
 */
function compileLanguage(language, { plugins }) {
  /**
   * Builds a regex with the case sensativility of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(join(terminators), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.isCompiled) return cmode;

    [
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.isCompiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object") {
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    // both are not allowed
    if (mode.lexemes && keywordPattern) {
      throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
    }

    // `mode.lexemes` was the old standard before we added and now recommend
    // using `keywords.$pattern` to pass the keyword pattern
    keywordPattern = keywordPattern || mode.lexemes || /\w+/;
    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(mode.begin);
      if (mode.endSameAsBegin) mode.end = mode.begin;
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(mode.end);
      cmode.terminatorEnd = source(mode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "10.7.2";

// @ts-nocheck

function hasValueOrEmptyAttribute(value) {
  return Boolean(value || value === "");
}

function BuildVuePlugin(hljs) {
  const Component = {
    props: ["language", "code", "autodetect"],
    data: function() {
      return {
        detectedLanguage: "",
        unknownLanguage: false
      };
    },
    computed: {
      className() {
        if (this.unknownLanguage) return "";

        return "hljs " + this.detectedLanguage;
      },
      highlighted() {
        // no idea what language to use, return raw code
        if (!this.autoDetect && !hljs.getLanguage(this.language)) {
          console.warn(`The language "${this.language}" you specified could not be found.`);
          this.unknownLanguage = true;
          return escapeHTML(this.code);
        }

        let result = {};
        if (this.autoDetect) {
          result = hljs.highlightAuto(this.code);
          this.detectedLanguage = result.language;
        } else {
          result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
          this.detectedLanguage = this.language;
        }
        return result.value;
      },
      autoDetect() {
        return !this.language || hasValueOrEmptyAttribute(this.autodetect);
      },
      ignoreIllegals() {
        return true;
      }
    },
    // this avoids needing to use a whole Vue compilation pipeline just
    // to build Highlight.js
    render(createElement) {
      return createElement("pre", {}, [
        createElement("code", {
          class: this.className,
          domProps: { innerHTML: this.highlighted }
        })
      ]);
    }
    // template: `<pre><code :class="className" v-html="highlighted"></code></pre>`
  };

  const VuePlugin = {
    install(Vue) {
      Vue.component('highlightjs', Component);
    }
  };

  return { Component, VuePlugin };
}

/* plugin itself */

/** @type {HLJSPlugin} */
const mergeHTMLPlugin = {
  "after:highlightElement": ({ el, result, text }) => {
    const originalStream = nodeStream(el);
    if (!originalStream.length) return;

    const resultNode = document.createElement('div');
    resultNode.innerHTML = result.value;
    result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
  }
};

/* Stream merging support functions */

/**
 * @typedef Event
 * @property {'start'|'stop'} event
 * @property {number} offset
 * @property {Node} node
 */

/**
 * @param {Node} node
 */
function tag(node) {
  return node.nodeName.toLowerCase();
}

/**
 * @param {Node} node
 */
function nodeStream(node) {
  /** @type Event[] */
  const result = [];
  (function _nodeStream(node, offset) {
    for (let child = node.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3) {
        offset += child.nodeValue.length;
      } else if (child.nodeType === 1) {
        result.push({
          event: 'start',
          offset: offset,
          node: child
        });
        offset = _nodeStream(child, offset);
        // Prevent void elements from having an end tag that would actually
        // double them in the output. There are more void elements in HTML
        // but we list only those realistically expected in code display.
        if (!tag(child).match(/br|hr|img|input/)) {
          result.push({
            event: 'stop',
            offset: offset,
            node: child
          });
        }
      }
    }
    return offset;
  })(node, 0);
  return result;
}

/**
 * @param {any} original - the original stream
 * @param {any} highlighted - stream of the highlighted source
 * @param {string} value - the original source itself
 */
function mergeStreams(original, highlighted, value) {
  let processed = 0;
  let result = '';
  const nodeStack = [];

  function selectStream() {
    if (!original.length || !highlighted.length) {
      return original.length ? original : highlighted;
    }
    if (original[0].offset !== highlighted[0].offset) {
      return (original[0].offset < highlighted[0].offset) ? original : highlighted;
    }

    /*
    To avoid starting the stream just before it should stop the order is
    ensured that original always starts first and closes last:

    if (event1 == 'start' && event2 == 'start')
      return original;
    if (event1 == 'start' && event2 == 'stop')
      return highlighted;
    if (event1 == 'stop' && event2 == 'start')
      return original;
    if (event1 == 'stop' && event2 == 'stop')
      return highlighted;

    ... which is collapsed to:
    */
    return highlighted[0].event === 'start' ? original : highlighted;
  }

  /**
   * @param {Node} node
   */
  function open(node) {
    /** @param {Attr} attr */
    function attributeString(attr) {
      return ' ' + attr.nodeName + '="' + escapeHTML(attr.value) + '"';
    }
    // @ts-ignore
    result += '<' + tag(node) + [].map.call(node.attributes, attributeString).join('') + '>';
  }

  /**
   * @param {Node} node
   */
  function close(node) {
    result += '</' + tag(node) + '>';
  }

  /**
   * @param {Event} event
   */
  function render(event) {
    (event.event === 'start' ? open : close)(event.node);
  }

  while (original.length || highlighted.length) {
    let stream = selectStream();
    result += escapeHTML(value.substring(processed, stream[0].offset));
    processed = stream[0].offset;
    if (stream === original) {
      /*
      On any opening or closing tag of the original markup we first close
      the entire highlighted node stack, then render the original tag along
      with all the following original tags at the same offset and then
      reopen all the tags on the highlighted stack.
      */
      nodeStack.reverse().forEach(close);
      do {
        render(stream.splice(0, 1)[0]);
        stream = selectStream();
      } while (stream === original && stream.length && stream[0].offset === processed);
      nodeStack.reverse().forEach(open);
    } else {
      if (stream[0].event === 'start') {
        nodeStack.push(stream[0].node);
      } else {
        nodeStack.pop();
      }
      render(stream.splice(0, 1)[0]);
    }
  }
  return result + escapeHTML(value.substr(processed));
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @type {Record<string, boolean>}
 */
const seenDeprecations = {};

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  if (seenDeprecations[`${version}/${message}`]) return;

  console.log(`Deprecated as of ${version}. ${message}`);
  seenDeprecations[`${version}/${message}`] = true;
};

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

const escape$1 = escapeHTML;
const inherit$1 = inherit;
const NO_MATCH = Symbol("nomatch");

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const fixMarkupRe = /(^(<[^>]+>|\t|)+|\n)/gm;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrlanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode} [continuation] - current continuation mode, if any
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(codeOrlanguageName, optionsOrCode, ignoreIllegals, continuation) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrlanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
      // continuation not supported at all via the new API
      // eslint-disable-next-line no-undefined
      continuation = undefined;
    } else {
      // old API
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrlanguageName;
      code = optionsOrCode;
    }

    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals, continuation);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {RegExpMatchArray} match - regexp match data
     * @returns {KeywordData | false}
     */
    function keywordData(mode, match) {
      const matchText = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return Object.prototype.hasOwnProperty.call(mode.keywords, matchText) && mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const data = keywordData(top, match);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            // _ implied for relevance only, do not highlight
            // by applying a class name
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitter.addKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substr(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result.top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.addSublanguage(result.emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {Mode} mode - new mode to start
     */
    function startNewMode(mode) {
      if (mode.className) {
        emitter.openNode(language.classNameAliases[mode.className] || mode.className);
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexs to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }

      if (newMode && newMode.endSameAsBegin) {
        newMode.endRe = escape(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode);
      // if (mode["after:begin"]) {
      //   let resp = new Response(mode);
      //   mode["after:begin"](match, resp);
      // }
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substr(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.className) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        if (endMode.endSameAsBegin) {
          endMode.starts.endRe = endMode.endRe;
        }
        startNewMode(endMode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.className) {
          list.unshift(current.className);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceeding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error('0 width match regex');
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language, { plugins });
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      top.matcher.considerAll();

      for (;;) {
        iterations++;
        if (resumeScanAtSamePosition) {
          // only regexes not matched previously will now be
          // considered for a potential match
          resumeScanAtSamePosition = false;
        } else {
          top.matcher.considerAll();
        }
        top.matcher.lastIndex = index;

        const match = top.matcher.exec(codeToHighlight);
        // console.log("match", match[0], match.rule && match.rule.begin)

        if (!match) break;

        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substr(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();

      return {
        // avoid possible breakage with v10 clients expecting
        // this to always be an integer
        relevance: Math.floor(relevance),
        value: result,
        language: languageName,
        illegal: false,
        emitter: emitter,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          illegal: true,
          illegalBy: {
            msg: err.message,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode
          },
          sofar: result,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          illegal: false,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter,
          language: languageName,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      relevance: 0,
      emitter: new options.__emitter(options),
      value: escape$1(code),
      illegal: false,
      top: PLAINTEXT_LANGUAGE
    };
    result.emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.second_best = secondBest;

    return result;
  }

  /**
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

    @param {string} html
    @returns {string}
  */
  function fixMarkup(html) {
    if (!(options.tabReplace || options.useBR)) {
      return html;
    }

    return html.replace(fixMarkupRe, match => {
      if (match === '\n') {
        return options.useBR ? '<br>' : match;
      } else if (options.tabReplace) {
        return match.replace(/\t/g, options.tabReplace);
      }
      return match;
    });
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = currentLang ? aliases[currentLang] : resultLang;

    element.classList.add("hljs");
    if (language) element.classList.add(language);
  }

  /** @type {HLJSPlugin} */
  const brPlugin = {
    "before:highlightElement": ({ el }) => {
      if (options.useBR) {
        el.innerHTML = el.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n');
      }
    },
    "after:highlightElement": ({ result }) => {
      if (options.useBR) {
        result.value = result.value.replace(/\n/g, "<br>");
      }
    }
  };

  const TAB_REPLACE_RE = /^(<[^>]+>|\t)+/gm;
  /** @type {HLJSPlugin} */
  const tabReplacePlugin = {
    "after:highlightElement": ({ result }) => {
      if (options.tabReplace) {
        result.value = result.value.replace(TAB_REPLACE_RE, (m) =>
          m.replace(/\t/g, options.tabReplace)
        );
      }
    }
  };

  /**
   * Applies highlighting to a DOM node containing code. Accepts a DOM node and
   * two optional parameters for fixMarkup.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightElement(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    // support for v10 API
    fire("before:highlightElement",
      { el: element, language: language });

    node = element;
    const text = node.textContent;
    const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);

    // support for v10 API
    fire("after:highlightElement", { el: element, result, text });

    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relavance: result.relevance
    };
    if (result.second_best) {
      element.second_best = {
        language: result.second_best.language,
        // TODO: remove with version 11.0
        re: result.second_best.relevance,
        relavance: result.second_best.relevance
      };
    }
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    if (userOptions.useBR) {
      deprecated("10.3.0", "'useBR' will be removed entirely in v11.0");
      deprecated("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
    }
    options = inherit$1(options, userOptions);
  }

  /**
   * Highlights to all <pre><code> blocks on a page
   *
   * @type {Function & {called?: boolean}}
   */
  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    deprecated("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead.");

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightElement);
  };

  // Higlights all when DOMContentLoaded fires
  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    deprecated("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.");
    wantsHighlight = true;
  }

  let wantsHighlight = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightElement);
  }

  function boot() {
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.

    @param {string} name - name of the language to fetch/require
    @returns {Language | never}
  */
  function requireLanguage(name) {
    deprecated("10.4.0", "requireLanguage will be removed entirely in v11.");
    deprecated("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");

    const lang = getLanguage(name);
    if (lang) { return lang; }

    const err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
    throw err;
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */
  function upgradePluginAPI(plugin) {
    // TODO: remove with v12
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
  Note: fixMarkup is deprecated and will be removed entirely in v11

  @param {string} arg
  @returns {string}
  */
  function deprecateFixMarkup(arg) {
    deprecated("10.2.0", "fixMarkup will be removed entirely in v11.0");
    deprecated("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534");

    return fixMarkup(arg);
  }

  /**
   *
   * @param {HighlightedHTMLElement} el
   */
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");

    return highlightElement(el);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    fixMarkup: deprecateFixMarkup,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    requireLanguage,
    autoDetection,
    inherit: inherit$1,
    addPlugin,
    // plugins for frameworks
    vuePlugin: BuildVuePlugin(hljs).VuePlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreezeEs6(MODES[key]);
    }
  }

  // merge all the modes/regexs into our main object
  Object.assign(hljs, MODES);

  // built-in plugins, likely to be moved out of core in the future
  hljs.addPlugin(brPlugin); // slated to be removed in v11
  hljs.addPlugin(mergeHTMLPlugin);
  hljs.addPlugin(tabReplacePlugin);
  return hljs;
};

// export an "instance" of the highlighter
var highlight = HLJS({});

module.exports = highlight;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/css.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/css.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const MODES = (hljs) => {
  return {
    IMPORTANT: {
      className: 'meta',
      begin: '!important'
    },
    HEXCOLOR: {
      className: 'number',
      begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
    },
    ATTRIBUTE_SELECTOR_MODE: {
      className: 'selector-attr',
      begin: /\[/,
      end: /\]/,
      illegal: '$',
      contains: [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    }
  };
};

const TAGS = [
  'a',
  'abbr',
  'address',
  'article',
  'aside',
  'audio',
  'b',
  'blockquote',
  'body',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'main',
  'mark',
  'menu',
  'nav',
  'object',
  'ol',
  'p',
  'q',
  'quote',
  'samp',
  'section',
  'span',
  'strong',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'ul',
  'var',
  'video'
];

const MEDIA_FEATURES = [
  'any-hover',
  'any-pointer',
  'aspect-ratio',
  'color',
  'color-gamut',
  'color-index',
  'device-aspect-ratio',
  'device-height',
  'device-width',
  'display-mode',
  'forced-colors',
  'grid',
  'height',
  'hover',
  'inverted-colors',
  'monochrome',
  'orientation',
  'overflow-block',
  'overflow-inline',
  'pointer',
  'prefers-color-scheme',
  'prefers-contrast',
  'prefers-reduced-motion',
  'prefers-reduced-transparency',
  'resolution',
  'scan',
  'scripting',
  'update',
  'width',
  // TODO: find a better solution?
  'min-width',
  'max-width',
  'min-height',
  'max-height'
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
const PSEUDO_CLASSES = [
  'active',
  'any-link',
  'blank',
  'checked',
  'current',
  'default',
  'defined',
  'dir', // dir()
  'disabled',
  'drop',
  'empty',
  'enabled',
  'first',
  'first-child',
  'first-of-type',
  'fullscreen',
  'future',
  'focus',
  'focus-visible',
  'focus-within',
  'has', // has()
  'host', // host or host()
  'host-context', // host-context()
  'hover',
  'indeterminate',
  'in-range',
  'invalid',
  'is', // is()
  'lang', // lang()
  'last-child',
  'last-of-type',
  'left',
  'link',
  'local-link',
  'not', // not()
  'nth-child', // nth-child()
  'nth-col', // nth-col()
  'nth-last-child', // nth-last-child()
  'nth-last-col', // nth-last-col()
  'nth-last-of-type', //nth-last-of-type()
  'nth-of-type', //nth-of-type()
  'only-child',
  'only-of-type',
  'optional',
  'out-of-range',
  'past',
  'placeholder-shown',
  'read-only',
  'read-write',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'target-within',
  'user-invalid',
  'valid',
  'visited',
  'where' // where()
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
const PSEUDO_ELEMENTS = [
  'after',
  'backdrop',
  'before',
  'cue',
  'cue-region',
  'first-letter',
  'first-line',
  'grammar-error',
  'marker',
  'part',
  'placeholder',
  'selection',
  'slotted',
  'spelling-error'
];

const ATTRIBUTES = [
  'align-content',
  'align-items',
  'align-self',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'auto',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-decoration-break',
  'box-shadow',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'clear',
  'clip',
  'clip-path',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'content',
  'counter-increment',
  'counter-reset',
  'cursor',
  'direction',
  'display',
  'empty-cells',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'font',
  'font-display',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-size',
  'font-size-adjust',
  'font-smoothing',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-variant-ligatures',
  'font-variation-settings',
  'font-weight',
  'height',
  'hyphens',
  'icon',
  'image-orientation',
  'image-rendering',
  'image-resolution',
  'ime-mode',
  'inherit',
  'initial',
  'justify-content',
  'left',
  'letter-spacing',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'marks',
  'mask',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'nav-down',
  'nav-index',
  'nav-left',
  'nav-right',
  'nav-up',
  'none',
  'normal',
  'object-fit',
  'object-position',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-wrap',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'perspective',
  'perspective-origin',
  'pointer-events',
  'position',
  'quotes',
  'resize',
  'right',
  'src', // @font-face
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-indent',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-transform',
  'text-underline-position',
  'top',
  'transform',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'unicode-bidi',
  'vertical-align',
  'visibility',
  'white-space',
  'widows',
  'width',
  'word-break',
  'word-spacing',
  'word-wrap',
  'z-index'
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: CSS
Category: common, css
Website: https://developer.mozilla.org/en-US/docs/Web/CSS
*/

/** @type LanguageFn */
function css(hljs) {
  const modes = MODES(hljs);
  const FUNCTION_DISPATCH = {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  };
  const VENDOR_PREFIX = {
    begin: /-(webkit|moz|ms|o)-(?=[a-z])/
  };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/; // @-webkit-keyframes
  const IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];

  return {
    name: 'CSS',
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: {
      keyframePosition: "from to"
    },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      hljs.CSS_NUMBER_MODE,
      {
        className: 'selector-id',
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: 'selector-class',
        begin: '\\.' + IDENT_RE,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-pseudo',
        variants: [
          {
            begin: ':(' + PSEUDO_CLASSES.join('|') + ')'
          },
          {
            begin: '::(' + PSEUDO_ELEMENTS.join('|') + ')'
          }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b'
      },
      // attribute values
      {
        begin: ':',
        end: '[;}]',
        contains: [
          modes.HEXCOLOR,
          modes.IMPORTANT,
          hljs.CSS_NUMBER_MODE,
          ...STRINGS,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0, // from keywords
            keywords: {
              built_in: "url data-uri"
            },
            contains: [
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          FUNCTION_DISPATCH
        ]
      },
      {
        begin: lookahead(/@/),
        end: '[{;]',
        relevance: 0,
        illegal: /:/, // break on Less variables @var: ...
        contains: [
          {
            className: 'keyword',
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              hljs.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: 'selector-tag',
        begin: '\\b(' + TAGS.join('|') + ')\\b'
      }
    ]
  };
}

module.exports = css;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/javascript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/javascript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
const KEYWORDS = [
  "as", // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];

const TYPES = [
  "Intl",
  "DataView",
  "Number",
  "Math",
  "Date",
  "String",
  "RegExp",
  "Object",
  "Function",
  "Boolean",
  "Error",
  "Symbol",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "Proxy",
  "Reflect",
  "JSON",
  "Promise",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Float32Array",
  "Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "ArrayBuffer",
  "BigInt64Array",
  "BigUint64Array",
  "BigInt"
];

const ERROR_TYPES = [
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];

const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",

  "require",
  "exports",

  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global" // Node.js
];

const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  BUILT_IN_VARIABLES,
  TYPES,
  ERROR_TYPES
);

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/

/** @type LanguageFn */
function javascript(hljs) {
  /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };

  const IDENT_RE$1 = IDENT_RE;
  const FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      // nested type?
      // HTML should not include another raw `<` inside a tag
      // But a type might: `<Array<Array<number>>`, etc.
      if (nextChar === "<") {
        response.ignoreMatch();
        return;
      }
      // <something>
      // This is now either a tag or a type.
      if (nextChar === ">") {
        // if we cannot find a matching closing tag, then we
        // will ignore it
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS
  };

  // https://tc39.es/ecma262/#sec-literals-numeric-literals
  const decimalDigits = '[0-9](_?[0-9])*';
  const frac = `\\.(${decimalDigits})`;
  // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
  // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: 'number',
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` +
        `[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },

      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },

      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },

      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" },
    ],
    relevance: 0
  };

  const SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS$1,
    contains: [] // defined later
  };
  const HTML_TEMPLATE = {
    begin: 'html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml'
    }
  };
  const CSS_TEMPLATE = {
    begin: 'css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css'
    }
  };
  const TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    '\\*/',
    {
      relevance: 0,
      contains: [
        {
          className: 'doctag',
          begin: '@[A-Za-z]+',
          contains: [
            {
              className: 'type',
              begin: '\\{',
              end: '\\}',
              relevance: 0
            },
            {
              className: 'variable',
              begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS
    .concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };

  return {
    name: 'Javascript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      {
        label: "use_strict",
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      NUMBER,
      { // object attr container
        begin: concat(/[{,\n]\s*/,
          // we need to look ahead to make sure that we actually have an
          // attribute coming up so we don't steal a comma from a potential
          // "value" container
          //
          // NOTE: this might not work how you think.  We don't actually always
          // enter this mode and stay.  Instead it might merely match `,
          // <comments up next>` and then immediately end after the , because it
          // fails to find any actual attrs. But this still does the job because
          // it prevents the value contain rule from grabbing this instead and
          // prevening this rule from firing when we actually DO have keys.
          lookahead(concat(
            // we also need to allow for multiple possible comments inbetween
            // the first key:value pairing
            /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
            IDENT_RE$1 + '\\s*:'))),
        relevance: 0,
        contains: [
          {
            className: 'attr',
            begin: IDENT_RE$1 + lookahead('\\s*:'),
            relevance: 0
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: '(\\(' +
            '[^()]*(\\(' +
            '[^()]*(\\(' +
            '[^()]*' +
            '\\)[^()]*)*' +
            '\\)[^()]*)*' +
            '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>',
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // could be a comma delimited list of params to a function call
            begin: /,/, relevance: 0
          },
          {
            className: '',
            begin: /\s/,
            end: /\s*/,
            skip: true
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ['self']
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function',
        end: /[{;]/,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: [
          'self',
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          PARAMS
        ],
        illegal: /%/
      },
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        className: 'function',
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: hljs.UNDERSCORE_IDENT_RE +
          '\\(' + // first parens
          '[^()]*(\\(' +
            '[^()]*(\\(' +
              '[^()]*' +
            '\\)[^()]*)*' +
          '\\)[^()]*)*' +
          '\\)\\s*\\{', // end parens
        returnBegin:true,
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
        ]
      },
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        variants: [
          { begin: '\\.' + IDENT_RE$1 },
          { begin: '\\$' + IDENT_RE$1 }
        ],
        relevance: 0
      },
      { // ES6 class
        className: 'class',
        beginKeywords: 'class',
        end: /[{;=]/,
        excludeEnd: true,
        illegal: /[:"[\]]/,
        contains: [
          { beginKeywords: 'extends' },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        begin: /\b(?=constructor)/,
        end: /[{;]/,
        excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          'self',
          PARAMS
        ]
      },
      {
        begin: '(get|set)\\s+(?=' + IDENT_RE$1 + '\\()',
        end: /\{/,
        keywords: "get set",
        contains: [
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1 }),
          { begin: /\(\)/ }, // eat to avoid empty params
          PARAMS
        ]
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}

module.exports = javascript;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/json.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: JSON
Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: http://www.json.org
Category: common, protocols
*/

function json(hljs) {
  const LITERALS = {
    literal: 'true false null'
  };
  const ALLOWED_COMMENTS = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE
  ];
  const TYPES = [
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
  ];
  const VALUE_CONTAINER = {
    end: ',',
    endsWithParent: true,
    excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  const OBJECT = {
    begin: /\{/,
    end: /\}/,
    contains: [
      {
        className: 'attr',
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n'
      },
      hljs.inherit(VALUE_CONTAINER, {
        begin: /:/
      })
    ].concat(ALLOWED_COMMENTS),
    illegal: '\\S'
  };
  const ARRAY = {
    begin: '\\[',
    end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.push(OBJECT, ARRAY);
  ALLOWED_COMMENTS.forEach(function(rule) {
    TYPES.push(rule);
  });
  return {
    name: 'JSON',
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
}

module.exports = json;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/xml.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
Language: HTML, XML
Website: https://www.w3.org/XML/
Category: common
Audit: 2020
*/

/** @type LanguageFn */
function xml(hljs) {
  // Element names can contain letters, digits, hyphens, underscores, and periods
  const TAG_NAME_RE = concat(/[A-Z_]/, optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/);
  const XML_IDENT_RE = /[A-Za-z0-9._:-]+/;
  const XML_ENTITIES = {
    className: 'symbol',
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: 'meta-keyword',
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
    className: 'meta-string'
  });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    className: 'meta-string'
  });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [ XML_ENTITIES ]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [ XML_ENTITIES ]
              },
              {
                begin: /[^\s"'=<>`]+/
              }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: 'HTML, XML',
    aliases: [
      'html',
      'xhtml',
      'rss',
      'atom',
      'xjb',
      'xsd',
      'xsl',
      'plist',
      'wsf',
      'svg'
    ],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        {
          relevance: 10
        }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      {
        className: 'meta',
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: 'style'
        },
        contains: [ TAG_INTERNALS ],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            'css',
            'xml'
          ]
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: 'script'
        },
        contains: [ TAG_INTERNALS ],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            'javascript',
            'handlebars',
            'xml'
          ]
        }
      },
      // we need this for now for jSX
      {
        className: 'tag',
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: 'tag',
        begin: concat(
          /</,
          lookahead(concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: 'name',
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: 'tag',
        begin: concat(
          /<\//,
          lookahead(concat(
            TAG_NAME_RE, />/
          ))
        ),
        contains: [
          {
            className: 'name',
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}

module.exports = xml;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L3NlcnZpY2VzL2hpZ2hsaWdodC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvY29yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveG1sLmpzIl0sIm5hbWVzIjpbImhpZ2hsaWdodCIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJobGpzWE1MIiwiaGxqc0NTUyIsImhsanNKU09OIiwiaGxqc0phdmFTY3JpcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSw0REFBUyxDQUFDQyxnQkFBVixDQUEyQixNQUEzQixFQUFtQ0MscUVBQW5DO0FBQ0FGLDREQUFTLENBQUNDLGdCQUFWLENBQTJCLEtBQTNCLEVBQWtDRSxxRUFBbEM7QUFDQUgsNERBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsTUFBM0IsRUFBbUNHLHNFQUFuQztBQUNBSiw0REFBUyxDQUFDQyxnQkFBVixDQUEyQixZQUEzQixFQUF5Q0ksNEVBQXpDO0FBRWVMLDJIQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxxQkFBcUI7QUFDaEMsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLEVBQUU7QUFDdEI7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyx1QkFBdUI7QUFDckMsY0FBYyxxQkFBcUI7QUFDbkMsY0FBYyxxQkFBcUI7QUFDbkMsY0FBYyxhQUFhO0FBQzNCOztBQUVBLGVBQWUsc0NBQXNDO0FBQ3JELGVBQWUsNkJBQTZCO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCLEVBQUUsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0M7QUFDQTs7QUFFQSxlQUFlLHVEQUF1RCxVQUFVO0FBQ2hGLGVBQWUsdURBQXVELEVBQUU7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsc0JBQXNCOztBQUVwQyxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBOztBQUVBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxQ0FBcUM7QUFDcEQsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLHNCQUFzQixRQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFdBQVcsZ0JBQWdCO0FBQ3hDLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnQkFBZ0IsR0FBRztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGO0FBQzdGLHdDQUF3QztBQUN4QywrRUFBK0Usc0RBQXNEOztBQUVySTtBQUNBLFVBQVUsa0JBQWtCLHlCQUF5QixFQUFFO0FBQ3ZEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixXQUFXLGdCQUFnQjtBQUMzQixXQUFXLFVBQVU7QUFDckIsYUFBYTtBQUNiO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUIsZ0NBQWdDLDhCQUE4QixFQUFFO0FBQ2hFLGlCQUFpQixhQUFhO0FBQzlCLDhCQUE4Qix3REFBd0Q7QUFDdEYsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0RBQXdEO0FBQ25FLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsWUFBWSx1QkFBdUI7QUFDbkMsYUFBYTtBQUNiO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCw0QkFBNEI7O0FBRXRGO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBLGdDQUFnQyxrQkFBa0I7QUFDbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsYUFBYSxvQkFBb0I7QUFDakMsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUNBQXVDLDJDQUEyQyxFQUFFOztBQUVwRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUVBQXFFOztBQUVyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0MsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFvRDtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBOztBQUVBLFdBQVcsV0FBVztBQUN0QjtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0IsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsS0FBSztBQUNuQjs7QUFFQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLFdBQVcsSUFBSTtBQUNmLFdBQVcsSUFBSTtBQUNmLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsSUFBSTtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBLDBCQUEwQixRQUFRLEdBQUcsUUFBUTs7QUFFN0Msa0NBQWtDLFFBQVEsSUFBSSxRQUFRO0FBQ3RELHNCQUFzQixRQUFRLEdBQUcsUUFBUTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLElBQUk7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBLGFBQWEsYUFBYTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RCxhQUFhLFNBQVM7QUFDdEIsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsYUFBYTtBQUMxQjtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixhQUFhO0FBQzdCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxjQUFjO0FBQzNCLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsaUJBQWlCO0FBQ2hDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsYUFBYTtBQUNqRSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxhQUFhLEVBQUU7QUFDMUQ7QUFDQTs7QUFFQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGlCQUFpQjtBQUNoQyxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixnREFBZ0Q7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksT0FBTztBQUNuQixZQUFZLGNBQWM7QUFDMUIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLFdBQVc7QUFDeEI7QUFDQSxpQ0FBaUMsS0FBSztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxrQ0FBa0M7O0FBRXpDO0FBQ0E7QUFDQSwrQ0FBK0MsaUNBQWlDOztBQUVoRjtBQUNBLG9DQUFvQyw0QkFBNEI7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdDQUF3Qyx1Q0FBdUM7QUFDL0U7QUFDQSx1QkFBdUIsZUFBZSxFQUFFLE9BQU8sZ0JBQWdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGVBQWU7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxhQUFhOztBQUU1QixtQ0FBbUMscURBQXFEO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0EsdUNBQXVDLGVBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDZDQUE2QyxFQUFFO0FBQy9FOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSxVQUFVLE9BQU87QUFDakIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0JBQStCLG1CQUFtQjtBQUNsRCw4QkFBOEIsa0JBQWtCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7O0FBRXZCOzs7Ozs7Ozs7Ozs7QUNwOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0QixFQUFFLGFBQWEsRUFBRTtBQUM3QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQy9sQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCLGNBQWMsY0FBYztBQUM1QjtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGlnaGxpZ2h0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XHJcbmltcG9ydCBobGpzWE1MIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbCc7XHJcbmltcG9ydCBobGpzQ1NTIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nzcyc7XHJcbmltcG9ydCBobGpzSlNPTiBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uJztcclxuaW1wb3J0IGhsanNKYXZhU2NyaXB0IGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnO1xyXG5cclxuaGlnaGxpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2h0bWwnLCBobGpzWE1MKTtcclxuaGlnaGxpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NzcycsIGhsanNDU1MpO1xyXG5oaWdobGlnaHQucmVnaXN0ZXJMYW5ndWFnZSgnanNvbicsIGhsanNKU09OKTtcclxuaGlnaGxpZ2h0LnJlZ2lzdGVyTGFuZ3VhZ2UoJ2phdmFzY3JpcHQnLCBobGpzSmF2YVNjcmlwdCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoaWdobGlnaHQ7XHJcbiIsImZ1bmN0aW9uIGRlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gb2JqLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWFwIGlzIHJlYWQtb25seScpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgIG9iai5hZGQgPSBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXQgaXMgcmVhZC1vbmx5Jyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRnJlZXplIHNlbGZcbiAgICBPYmplY3QuZnJlZXplKG9iaik7XG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIHByb3AgPSBvYmpbbmFtZV07XG5cbiAgICAgICAgLy8gRnJlZXplIHByb3AgaWYgaXQgaXMgYW4gb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PSAnb2JqZWN0JyAmJiAhT2JqZWN0LmlzRnJvemVuKHByb3ApKSB7XG4gICAgICAgICAgICBkZWVwRnJlZXplKHByb3ApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG52YXIgZGVlcEZyZWV6ZUVzNiA9IGRlZXBGcmVlemU7XG52YXIgX2RlZmF1bHQgPSBkZWVwRnJlZXplO1xuZGVlcEZyZWV6ZUVzNi5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8qKiBAaW1wbGVtZW50cyBDYWxsYmFja1Jlc3BvbnNlICovXG5jbGFzcyBSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZX0gbW9kZVxuICAgKi9cbiAgY29uc3RydWN0b3IobW9kZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgICBpZiAobW9kZS5kYXRhID09PSB1bmRlZmluZWQpIG1vZGUuZGF0YSA9IHt9O1xuXG4gICAgdGhpcy5kYXRhID0gbW9kZS5kYXRhO1xuICAgIHRoaXMuaXNNYXRjaElnbm9yZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlnbm9yZU1hdGNoKCkge1xuICAgIHRoaXMuaXNNYXRjaElnbm9yZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVIVE1MKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjeDI3OycpO1xufVxuXG4vKipcbiAqIHBlcmZvcm1zIGEgc2hhbGxvdyBtZXJnZSBvZiBtdWx0aXBsZSBvYmplY3RzIGludG8gb25lXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gb3JpZ2luYWxcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZyxhbnk+W119IG9iamVjdHNcbiAqIEByZXR1cm5zIHtUfSBhIHNpbmdsZSBuZXcgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluaGVyaXQob3JpZ2luYWwsIC4uLm9iamVjdHMpIHtcbiAgLyoqIEB0eXBlIFJlY29yZDxzdHJpbmcsYW55PiAqL1xuICBjb25zdCByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGZvciAoY29uc3Qga2V5IGluIG9yaWdpbmFsKSB7XG4gICAgcmVzdWx0W2tleV0gPSBvcmlnaW5hbFtrZXldO1xuICB9XG4gIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7VH0gKi8gKHJlc3VsdCk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVuZGVyZXJcbiAqIEBwcm9wZXJ0eSB7KHRleHQ6IHN0cmluZykgPT4gdm9pZH0gYWRkVGV4dFxuICogQHByb3BlcnR5IHsobm9kZTogTm9kZSkgPT4gdm9pZH0gb3Blbk5vZGVcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IE5vZGUpID0+IHZvaWR9IGNsb3NlTm9kZVxuICogQHByb3BlcnR5IHsoKSA9PiBzdHJpbmd9IHZhbHVlXG4gKi9cblxuLyoqIEB0eXBlZGVmIHt7a2luZD86IHN0cmluZywgc3VibGFuZ3VhZ2U/OiBib29sZWFufX0gTm9kZSAqL1xuLyoqIEB0eXBlZGVmIHt7d2FsazogKHI6IFJlbmRlcmVyKSA9PiB2b2lkfX0gVHJlZSAqL1xuLyoqICovXG5cbmNvbnN0IFNQQU5fQ0xPU0UgPSAnPC9zcGFuPic7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIG5vZGUgbmVlZHMgdG8gYmUgd3JhcHBlZCBpbiA8c3Bhbj5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgKi9cbmNvbnN0IGVtaXRzV3JhcHBpbmdUYWdzID0gKG5vZGUpID0+IHtcbiAgcmV0dXJuICEhbm9kZS5raW5kO1xufTtcblxuLyoqIEB0eXBlIHtSZW5kZXJlcn0gKi9cbmNsYXNzIEhUTUxSZW5kZXJlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEhUTUxSZW5kZXJlclxuICAgKlxuICAgKiBAcGFyYW0ge1RyZWV9IHBhcnNlVHJlZSAtIHRoZSBwYXJzZSB0cmVlIChtdXN0IHN1cHBvcnQgYHdhbGtgIEFQSSlcbiAgICogQHBhcmFtIHt7Y2xhc3NQcmVmaXg6IHN0cmluZ319IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcnNlVHJlZSwgb3B0aW9ucykge1xuICAgIHRoaXMuYnVmZmVyID0gXCJcIjtcbiAgICB0aGlzLmNsYXNzUHJlZml4ID0gb3B0aW9ucy5jbGFzc1ByZWZpeDtcbiAgICBwYXJzZVRyZWUud2Fsayh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRleHRzIHRvIHRoZSBvdXRwdXQgc3RyZWFtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0ICovXG4gIGFkZFRleHQodGV4dCkge1xuICAgIHRoaXMuYnVmZmVyICs9IGVzY2FwZUhUTUwodGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5vZGUgb3BlbiB0byB0aGUgb3V0cHV0IHN0cmVhbSAoaWYgbmVlZGVkKVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgKi9cbiAgb3Blbk5vZGUobm9kZSkge1xuICAgIGlmICghZW1pdHNXcmFwcGluZ1RhZ3Mobm9kZSkpIHJldHVybjtcblxuICAgIGxldCBjbGFzc05hbWUgPSBub2RlLmtpbmQ7XG4gICAgaWYgKCFub2RlLnN1Ymxhbmd1YWdlKSB7XG4gICAgICBjbGFzc05hbWUgPSBgJHt0aGlzLmNsYXNzUHJlZml4fSR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuICAgIHRoaXMuc3BhbihjbGFzc05hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBub2RlIGNsb3NlIHRvIHRoZSBvdXRwdXQgc3RyZWFtIChpZiBuZWVkZWQpXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAqL1xuICBjbG9zZU5vZGUobm9kZSkge1xuICAgIGlmICghZW1pdHNXcmFwcGluZ1RhZ3Mobm9kZSkpIHJldHVybjtcblxuICAgIHRoaXMuYnVmZmVyICs9IFNQQU5fQ0xPU0U7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgYnVmZmVyXG4gICovXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgfVxuXG4gIC8vIGhlbHBlcnNcblxuICAvKipcbiAgICogQnVpbGRzIGEgc3BhbiBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgc3BhbihjbGFzc05hbWUpIHtcbiAgICB0aGlzLmJ1ZmZlciArPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj5gO1xuICB9XG59XG5cbi8qKiBAdHlwZWRlZiB7e2tpbmQ/OiBzdHJpbmcsIHN1Ymxhbmd1YWdlPzogYm9vbGVhbiwgY2hpbGRyZW46IE5vZGVbXX0gfCBzdHJpbmd9IE5vZGUgKi9cbi8qKiBAdHlwZWRlZiB7e2tpbmQ/OiBzdHJpbmcsIHN1Ymxhbmd1YWdlPzogYm9vbGVhbiwgY2hpbGRyZW46IE5vZGVbXX0gfSBEYXRhTm9kZSAqL1xuLyoqICAqL1xuXG5jbGFzcyBUb2tlblRyZWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgRGF0YU5vZGUgKi9cbiAgICB0aGlzLnJvb3ROb2RlID0geyBjaGlsZHJlbjogW10gfTtcbiAgICB0aGlzLnN0YWNrID0gW3RoaXMucm9vdE5vZGVdO1xuICB9XG5cbiAgZ2V0IHRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IHJvb3QoKSB7IHJldHVybiB0aGlzLnJvb3ROb2RlOyB9XG5cbiAgLyoqIEBwYXJhbSB7Tm9kZX0gbm9kZSAqL1xuICBhZGQobm9kZSkge1xuICAgIHRoaXMudG9wLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGtpbmQgKi9cbiAgb3Blbk5vZGUoa2luZCkge1xuICAgIC8qKiBAdHlwZSBOb2RlICovXG4gICAgY29uc3Qgbm9kZSA9IHsga2luZCwgY2hpbGRyZW46IFtdIH07XG4gICAgdGhpcy5hZGQobm9kZSk7XG4gICAgdGhpcy5zdGFjay5wdXNoKG5vZGUpO1xuICB9XG5cbiAgY2xvc2VOb2RlKCkge1xuICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YWNrLnBvcCgpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNsb3NlQWxsTm9kZXMoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2xvc2VOb2RlKCkpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3ROb2RlLCBudWxsLCA0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7IGltcG9ydChcIi4vaHRtbF9yZW5kZXJlclwiKS5SZW5kZXJlciB9IFJlbmRlcmVyXG4gICAqIEBwYXJhbSB7UmVuZGVyZXJ9IGJ1aWxkZXJcbiAgICovXG4gIHdhbGsoYnVpbGRlcikge1xuICAgIC8vIHRoaXMgZG9lcyBub3RcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5fd2FsayhidWlsZGVyLCB0aGlzLnJvb3ROb2RlKTtcbiAgICAvLyB0aGlzIHdvcmtzXG4gICAgLy8gcmV0dXJuIFRva2VuVHJlZS5fd2FsayhidWlsZGVyLCB0aGlzLnJvb3ROb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1JlbmRlcmVyfSBidWlsZGVyXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKi9cbiAgc3RhdGljIF93YWxrKGJ1aWxkZXIsIG5vZGUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGJ1aWxkZXIuYWRkVGV4dChub2RlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGJ1aWxkZXIub3Blbk5vZGUobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLl93YWxrKGJ1aWxkZXIsIGNoaWxkKSk7XG4gICAgICBidWlsZGVyLmNsb3NlTm9kZShub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1aWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBzdGF0aWMgX2NvbGxhcHNlKG5vZGUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIHJldHVybjtcblxuICAgIGlmIChub2RlLmNoaWxkcmVuLmV2ZXJ5KGVsID0+IHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgIC8vIG5vZGUudGV4dCA9IG5vZGUuY2hpbGRyZW4uam9pbihcIlwiKTtcbiAgICAgIC8vIGRlbGV0ZSBub2RlLmNoaWxkcmVuO1xuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtub2RlLmNoaWxkcmVuLmpvaW4oXCJcIildO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIFRva2VuVHJlZS5fY29sbGFwc2UoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICBDdXJyZW50bHkgdGhpcyBpcyBhbGwgcHJpdmF0ZSBBUEksIGJ1dCB0aGlzIGlzIHRoZSBtaW5pbWFsIEFQSSBuZWNlc3NhcnlcbiAgdGhhdCBhbiBFbWl0dGVyIG11c3QgaW1wbGVtZW50IHRvIGZ1bGx5IHN1cHBvcnQgdGhlIHBhcnNlci5cblxuICBNaW5pbWFsIGludGVyZmFjZTpcblxuICAtIGFkZEtleXdvcmQodGV4dCwga2luZClcbiAgLSBhZGRUZXh0KHRleHQpXG4gIC0gYWRkU3VibGFuZ3VhZ2UoZW1pdHRlciwgc3ViTGFuZ3VhZ2VOYW1lKVxuICAtIGZpbmFsaXplKClcbiAgLSBvcGVuTm9kZShraW5kKVxuICAtIGNsb3NlTm9kZSgpXG4gIC0gY2xvc2VBbGxOb2RlcygpXG4gIC0gdG9IVE1MKClcblxuKi9cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7RW1pdHRlcn1cbiAqL1xuY2xhc3MgVG9rZW5UcmVlRW1pdHRlciBleHRlbmRzIFRva2VuVHJlZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtpbmRcbiAgICovXG4gIGFkZEtleXdvcmQodGV4dCwga2luZCkge1xuICAgIGlmICh0ZXh0ID09PSBcIlwiKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5vcGVuTm9kZShraW5kKTtcbiAgICB0aGlzLmFkZFRleHQodGV4dCk7XG4gICAgdGhpcy5jbG9zZU5vZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKi9cbiAgYWRkVGV4dCh0ZXh0KSB7XG4gICAgaWYgKHRleHQgPT09IFwiXCIpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLmFkZCh0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VtaXR0ZXIgJiB7cm9vdDogRGF0YU5vZGV9fSBlbWl0dGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBhZGRTdWJsYW5ndWFnZShlbWl0dGVyLCBuYW1lKSB7XG4gICAgLyoqIEB0eXBlIERhdGFOb2RlICovXG4gICAgY29uc3Qgbm9kZSA9IGVtaXR0ZXIucm9vdDtcbiAgICBub2RlLmtpbmQgPSBuYW1lO1xuICAgIG5vZGUuc3VibGFuZ3VhZ2UgPSB0cnVlO1xuICAgIHRoaXMuYWRkKG5vZGUpO1xuICB9XG5cbiAgdG9IVE1MKCkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IEhUTUxSZW5kZXJlcih0aGlzLCB0aGlzLm9wdGlvbnMpO1xuICAgIHJldHVybiByZW5kZXJlci52YWx1ZSgpO1xuICB9XG5cbiAgZmluYWxpemUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuZnVuY3Rpb24gZXNjYXBlKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKHZhbHVlLnJlcGxhY2UoL1stL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKSwgJ20nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKipcbiAqIEFueSBvZiB0aGUgcGFzc2VkIGV4cHJlc3NzaW9ucyBtYXkgbWF0Y2hcbiAqXG4gKiBDcmVhdGVzIGEgaHVnZSB0aGlzIHwgdGhpcyB8IHRoYXQgfCB0aGF0IG1hdGNoXG4gKiBAcGFyYW0geyhSZWdFeHAgfCBzdHJpbmcpW10gfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlaXRoZXIoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSAnKCcgKyBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwifFwiKSArIFwiKVwiO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwfSByZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY291bnRNYXRjaEdyb3VwcyhyZSkge1xuICByZXR1cm4gKG5ldyBSZWdFeHAocmUudG9TdHJpbmcoKSArICd8JykpLmV4ZWMoJycpLmxlbmd0aCAtIDE7XG59XG5cbi8qKlxuICogRG9lcyBsZXhlbWUgc3RhcnQgd2l0aCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaCBhdCB0aGUgYmVnaW5uaW5nXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXhlbWVcbiAqL1xuZnVuY3Rpb24gc3RhcnRzV2l0aChyZSwgbGV4ZW1lKSB7XG4gIGNvbnN0IG1hdGNoID0gcmUgJiYgcmUuZXhlYyhsZXhlbWUpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2guaW5kZXggPT09IDA7XG59XG5cbi8vIEJBQ0tSRUZfUkUgbWF0Y2hlcyBhbiBvcGVuIHBhcmVudGhlc2lzIG9yIGJhY2tyZWZlcmVuY2UuIFRvIGF2b2lkXG4vLyBhbiBpbmNvcnJlY3QgcGFyc2UsIGl0IGFkZGl0aW9uYWxseSBtYXRjaGVzIHRoZSBmb2xsb3dpbmc6XG4vLyAtIFsuLi5dIGVsZW1lbnRzLCB3aGVyZSB0aGUgbWVhbmluZyBvZiBwYXJlbnRoZXNlcyBhbmQgZXNjYXBlcyBjaGFuZ2Vcbi8vIC0gb3RoZXIgZXNjYXBlIHNlcXVlbmNlcywgc28gd2UgZG8gbm90IG1pc3BhcnNlIGVzY2FwZSBzZXF1ZW5jZXMgYXNcbi8vICAgaW50ZXJlc3RpbmcgZWxlbWVudHNcbi8vIC0gbm9uLW1hdGNoaW5nIG9yIGxvb2thaGVhZCBwYXJlbnRoZXNlcywgd2hpY2ggZG8gbm90IGNhcHR1cmUuIFRoZXNlXG4vLyAgIGZvbGxvdyB0aGUgJygnIHdpdGggYSAnPycuXG5jb25zdCBCQUNLUkVGX1JFID0gL1xcWyg/OlteXFxcXFxcXV18XFxcXC4pKlxcXXxcXChcXD8/fFxcXFwoWzEtOV1bMC05XSopfFxcXFwuLztcblxuLy8gam9pbiBsb2dpY2FsbHkgY29tcHV0ZXMgcmVnZXhwcy5qb2luKHNlcGFyYXRvciksIGJ1dCBmaXhlcyB0aGVcbi8vIGJhY2tyZWZlcmVuY2VzIHNvIHRoZXkgY29udGludWUgdG8gbWF0Y2guXG4vLyBpdCBhbHNvIHBsYWNlcyBlYWNoIGluZGl2aWR1YWwgcmVndWxhciBleHByZXNzaW9uIGludG8gaXQncyBvd25cbi8vIG1hdGNoIGdyb3VwLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBzZXF1ZW5jaW5nIG9mIHRob3NlIG1hdGNoIGdyb3Vwc1xuLy8gaXMgY3VycmVudGx5IGFuIGV4ZXJjaXNlIGZvciB0aGUgY2FsbGVyLiA6LSlcbi8qKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgUmVnRXhwKVtdfSByZWdleHBzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luKHJlZ2V4cHMsIHNlcGFyYXRvciA9IFwifFwiKSB7XG4gIGxldCBudW1DYXB0dXJlcyA9IDA7XG5cbiAgcmV0dXJuIHJlZ2V4cHMubWFwKChyZWdleCkgPT4ge1xuICAgIG51bUNhcHR1cmVzICs9IDE7XG4gICAgY29uc3Qgb2Zmc2V0ID0gbnVtQ2FwdHVyZXM7XG4gICAgbGV0IHJlID0gc291cmNlKHJlZ2V4KTtcbiAgICBsZXQgb3V0ID0gJyc7XG5cbiAgICB3aGlsZSAocmUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbWF0Y2ggPSBCQUNLUkVGX1JFLmV4ZWMocmUpO1xuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICBvdXQgKz0gcmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgb3V0ICs9IHJlLnN1YnN0cmluZygwLCBtYXRjaC5pbmRleCk7XG4gICAgICByZSA9IHJlLnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICBpZiAobWF0Y2hbMF1bMF0gPT09ICdcXFxcJyAmJiBtYXRjaFsxXSkge1xuICAgICAgICAvLyBBZGp1c3QgdGhlIGJhY2tyZWZlcmVuY2UuXG4gICAgICAgIG91dCArPSAnXFxcXCcgKyBTdHJpbmcoTnVtYmVyKG1hdGNoWzFdKSArIG9mZnNldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXQgKz0gbWF0Y2hbMF07XG4gICAgICAgIGlmIChtYXRjaFswXSA9PT0gJygnKSB7XG4gICAgICAgICAgbnVtQ2FwdHVyZXMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9KS5tYXAocmUgPT4gYCgke3JlfSlgKS5qb2luKHNlcGFyYXRvcik7XG59XG5cbi8vIENvbW1vbiByZWdleHBzXG5jb25zdCBNQVRDSF9OT1RISU5HX1JFID0gL1xcYlxcQi87XG5jb25zdCBJREVOVF9SRSA9ICdbYS16QS1aXVxcXFx3Kic7XG5jb25zdCBVTkRFUlNDT1JFX0lERU5UX1JFID0gJ1thLXpBLVpfXVxcXFx3Kic7XG5jb25zdCBOVU1CRVJfUkUgPSAnXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspPyc7XG5jb25zdCBDX05VTUJFUl9SRSA9ICcoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05XSt8KFxcXFxiXFxcXGQrKFxcXFwuXFxcXGQqKT98XFxcXC5cXFxcZCspKFtlRV1bLStdP1xcXFxkKyk/KSc7IC8vIDB4Li4uLCAwLi4uLCBkZWNpbWFsLCBmbG9hdFxuY29uc3QgQklOQVJZX05VTUJFUl9SRSA9ICdcXFxcYigwYlswMV0rKSc7IC8vIDBiLi4uXG5jb25zdCBSRV9TVEFSVEVSU19SRSA9ICchfCE9fCE9PXwlfCU9fCZ8JiZ8Jj18XFxcXCp8XFxcXCo9fFxcXFwrfFxcXFwrPXwsfC18LT18Lz18L3w6fDt8PDx8PDw9fDw9fDx8PT09fD09fD18Pj4+PXw+Pj18Pj18Pj4+fD4+fD58XFxcXD98XFxcXFt8XFxcXHt8XFxcXCh8XFxcXF58XFxcXF49fFxcXFx8fFxcXFx8PXxcXFxcfFxcXFx8fH4nO1xuXG4vKipcbiogQHBhcmFtIHsgUGFydGlhbDxNb2RlPiAmIHtiaW5hcnk/OiBzdHJpbmcgfCBSZWdFeHB9IH0gb3B0c1xuKi9cbmNvbnN0IFNIRUJBTkcgPSAob3B0cyA9IHt9KSA9PiB7XG4gIGNvbnN0IGJlZ2luU2hlYmFuZyA9IC9eIyFbIF0qXFwvLztcbiAgaWYgKG9wdHMuYmluYXJ5KSB7XG4gICAgb3B0cy5iZWdpbiA9IGNvbmNhdChcbiAgICAgIGJlZ2luU2hlYmFuZyxcbiAgICAgIC8uKlxcYi8sXG4gICAgICBvcHRzLmJpbmFyeSxcbiAgICAgIC9cXGIuKi8pO1xuICB9XG4gIHJldHVybiBpbmhlcml0KHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogYmVnaW5TaGViYW5nLFxuICAgIGVuZDogLyQvLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICAvKiogQHR5cGUge01vZGVDYWxsYmFja30gKi9cbiAgICBcIm9uOmJlZ2luXCI6IChtLCByZXNwKSA9PiB7XG4gICAgICBpZiAobS5pbmRleCAhPT0gMCkgcmVzcC5pZ25vcmVNYXRjaCgpO1xuICAgIH1cbiAgfSwgb3B0cyk7XG59O1xuXG4vLyBDb21tb24gbW9kZXNcbmNvbnN0IEJBQ0tTTEFTSF9FU0NBUEUgPSB7XG4gIGJlZ2luOiAnXFxcXFxcXFxbXFxcXHNcXFxcU10nLCByZWxldmFuY2U6IDBcbn07XG5jb25zdCBBUE9TX1NUUklOR19NT0RFID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBiZWdpbjogJ1xcJycsXG4gIGVuZDogJ1xcJycsXG4gIGlsbGVnYWw6ICdcXFxcbicsXG4gIGNvbnRhaW5zOiBbQkFDS1NMQVNIX0VTQ0FQRV1cbn07XG5jb25zdCBRVU9URV9TVFJJTkdfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgYmVnaW46ICdcIicsXG4gIGVuZDogJ1wiJyxcbiAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgY29udGFpbnM6IFtCQUNLU0xBU0hfRVNDQVBFXVxufTtcbmNvbnN0IFBIUkFTQUxfV09SRFNfTU9ERSA9IHtcbiAgYmVnaW46IC9cXGIoYXxhbnx0aGV8YXJlfEknbXxpc24ndHxkb24ndHxkb2Vzbid0fHdvbid0fGJ1dHxqdXN0fHNob3VsZHxwcmV0dHl8c2ltcGx5fGVub3VnaHxnb25uYXxnb2luZ3x3dGZ8c298c3VjaHx3aWxsfHlvdXx5b3VyfHRoZXl8bGlrZXxtb3JlKVxcYi9cbn07XG4vKipcbiAqIENyZWF0ZXMgYSBjb21tZW50IG1vZGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IFJlZ0V4cH0gYmVnaW5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgUmVnRXhwfSBlbmRcbiAqIEBwYXJhbSB7TW9kZSB8IHt9fSBbbW9kZU9wdGlvbnNdXG4gKiBAcmV0dXJucyB7UGFydGlhbDxNb2RlPn1cbiAqL1xuY29uc3QgQ09NTUVOVCA9IGZ1bmN0aW9uKGJlZ2luLCBlbmQsIG1vZGVPcHRpb25zID0ge30pIHtcbiAgY29uc3QgbW9kZSA9IGluaGVyaXQoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICBiZWdpbixcbiAgICAgIGVuZCxcbiAgICAgIGNvbnRhaW5zOiBbXVxuICAgIH0sXG4gICAgbW9kZU9wdGlvbnNcbiAgKTtcbiAgbW9kZS5jb250YWlucy5wdXNoKFBIUkFTQUxfV09SRFNfTU9ERSk7XG4gIG1vZGUuY29udGFpbnMucHVzaCh7XG4gICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICBiZWdpbjogJyg/OlRPRE98RklYTUV8Tk9URXxCVUd8T1BUSU1JWkV8SEFDS3xYWFgpOicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH0pO1xuICByZXR1cm4gbW9kZTtcbn07XG5jb25zdCBDX0xJTkVfQ09NTUVOVF9NT0RFID0gQ09NTUVOVCgnLy8nLCAnJCcpO1xuY29uc3QgQ19CTE9DS19DT01NRU5UX01PREUgPSBDT01NRU5UKCcvXFxcXConLCAnXFxcXCovJyk7XG5jb25zdCBIQVNIX0NPTU1FTlRfTU9ERSA9IENPTU1FTlQoJyMnLCAnJCcpO1xuY29uc3QgTlVNQkVSX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIGJlZ2luOiBOVU1CRVJfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IENfTlVNQkVSX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIGJlZ2luOiBDX05VTUJFUl9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgQklOQVJZX05VTUJFUl9NT0RFID0ge1xuICBjbGFzc05hbWU6ICdudW1iZXInLFxuICBiZWdpbjogQklOQVJZX05VTUJFUl9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgQ1NTX05VTUJFUl9NT0RFID0ge1xuICBjbGFzc05hbWU6ICdudW1iZXInLFxuICBiZWdpbjogTlVNQkVSX1JFICsgJygnICtcbiAgICAnJXxlbXxleHxjaHxyZW0nICtcbiAgICAnfHZ3fHZofHZtaW58dm1heCcgK1xuICAgICd8Y218bW18aW58cHR8cGN8cHgnICtcbiAgICAnfGRlZ3xncmFkfHJhZHx0dXJuJyArXG4gICAgJ3xzfG1zJyArXG4gICAgJ3xIenxrSHonICtcbiAgICAnfGRwaXxkcGNtfGRwcHgnICtcbiAgICAnKT8nLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBSRUdFWFBfTU9ERSA9IHtcbiAgLy8gdGhpcyBvdXRlciBydWxlIG1ha2VzIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSBhIFdIT0xFIHJlZ2V4IGFuZCBub3Qgc2ltcGx5XG4gIC8vIGFuIGV4cHJlc3Npb24gc3VjaCBhczpcbiAgLy9cbiAgLy8gICAgIDMgLyBzb21ldGhpbmdcbiAgLy9cbiAgLy8gKHdoaWNoIHdpbGwgdGhlbiBibG93IHVwIHdoZW4gcmVnZXgncyBgaWxsZWdhbGAgc2VlcyB0aGUgbmV3bGluZSlcbiAgYmVnaW46IC8oPz1cXC9bXi9cXG5dKlxcLykvLFxuICBjb250YWluczogW3tcbiAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgIGJlZ2luOiAvXFwvLyxcbiAgICBlbmQ6IC9cXC9bZ2ltdXldKi8sXG4gICAgaWxsZWdhbDogL1xcbi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgZW5kOiAvXFxdLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW0JBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9XG4gICAgXVxuICB9XVxufTtcbmNvbnN0IFRJVExFX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgYmVnaW46IElERU5UX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBVTkRFUlNDT1JFX1RJVExFX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgYmVnaW46IFVOREVSU0NPUkVfSURFTlRfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IE1FVEhPRF9HVUFSRCA9IHtcbiAgLy8gZXhjbHVkZXMgbWV0aG9kIG5hbWVzIGZyb20ga2V5d29yZCBwcm9jZXNzaW5nXG4gIGJlZ2luOiAnXFxcXC5cXFxccyonICsgVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuXG4vKipcbiAqIEFkZHMgZW5kIHNhbWUgYXMgYmVnaW4gbWVjaGFuaWNzIHRvIGEgbW9kZVxuICpcbiAqIFlvdXIgbW9kZSBtdXN0IGluY2x1ZGUgYXQgbGVhc3QgYSBzaW5nbGUgKCkgbWF0Y2ggZ3JvdXAgYXMgdGhhdCBmaXJzdCBtYXRjaFxuICogZ3JvdXAgaXMgd2hhdCBpcyB1c2VkIGZvciBjb21wYXJpc29uXG4gKiBAcGFyYW0ge1BhcnRpYWw8TW9kZT59IG1vZGVcbiAqL1xuY29uc3QgRU5EX1NBTUVfQVNfQkVHSU4gPSBmdW5jdGlvbihtb2RlKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG1vZGUsXG4gICAge1xuICAgICAgLyoqIEB0eXBlIHtNb2RlQ2FsbGJhY2t9ICovXG4gICAgICAnb246YmVnaW4nOiAobSwgcmVzcCkgPT4geyByZXNwLmRhdGEuX2JlZ2luTWF0Y2ggPSBtWzFdOyB9LFxuICAgICAgLyoqIEB0eXBlIHtNb2RlQ2FsbGJhY2t9ICovXG4gICAgICAnb246ZW5kJzogKG0sIHJlc3ApID0+IHsgaWYgKHJlc3AuZGF0YS5fYmVnaW5NYXRjaCAhPT0gbVsxXSkgcmVzcC5pZ25vcmVNYXRjaCgpOyB9XG4gICAgfSk7XG59O1xuXG52YXIgTU9ERVMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIE1BVENIX05PVEhJTkdfUkU6IE1BVENIX05PVEhJTkdfUkUsXG4gICAgSURFTlRfUkU6IElERU5UX1JFLFxuICAgIFVOREVSU0NPUkVfSURFTlRfUkU6IFVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgTlVNQkVSX1JFOiBOVU1CRVJfUkUsXG4gICAgQ19OVU1CRVJfUkU6IENfTlVNQkVSX1JFLFxuICAgIEJJTkFSWV9OVU1CRVJfUkU6IEJJTkFSWV9OVU1CRVJfUkUsXG4gICAgUkVfU1RBUlRFUlNfUkU6IFJFX1NUQVJURVJTX1JFLFxuICAgIFNIRUJBTkc6IFNIRUJBTkcsXG4gICAgQkFDS1NMQVNIX0VTQ0FQRTogQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICBBUE9TX1NUUklOR19NT0RFOiBBUE9TX1NUUklOR19NT0RFLFxuICAgIFFVT1RFX1NUUklOR19NT0RFOiBRVU9URV9TVFJJTkdfTU9ERSxcbiAgICBQSFJBU0FMX1dPUkRTX01PREU6IFBIUkFTQUxfV09SRFNfTU9ERSxcbiAgICBDT01NRU5UOiBDT01NRU5ULFxuICAgIENfTElORV9DT01NRU5UX01PREU6IENfTElORV9DT01NRU5UX01PREUsXG4gICAgQ19CTE9DS19DT01NRU5UX01PREU6IENfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIEhBU0hfQ09NTUVOVF9NT0RFOiBIQVNIX0NPTU1FTlRfTU9ERSxcbiAgICBOVU1CRVJfTU9ERTogTlVNQkVSX01PREUsXG4gICAgQ19OVU1CRVJfTU9ERTogQ19OVU1CRVJfTU9ERSxcbiAgICBCSU5BUllfTlVNQkVSX01PREU6IEJJTkFSWV9OVU1CRVJfTU9ERSxcbiAgICBDU1NfTlVNQkVSX01PREU6IENTU19OVU1CRVJfTU9ERSxcbiAgICBSRUdFWFBfTU9ERTogUkVHRVhQX01PREUsXG4gICAgVElUTEVfTU9ERTogVElUTEVfTU9ERSxcbiAgICBVTkRFUlNDT1JFX1RJVExFX01PREU6IFVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICBNRVRIT0RfR1VBUkQ6IE1FVEhPRF9HVUFSRCxcbiAgICBFTkRfU0FNRV9BU19CRUdJTjogRU5EX1NBTUVfQVNfQkVHSU5cbn0pO1xuXG4vLyBHcmFtbWFyIGV4dGVuc2lvbnMgLyBwbHVnaW5zXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzI4MzNcblxuLy8gR3JhbW1hciBleHRlbnNpb25zIGFsbG93IFwic3ludGFjdGljIHN1Z2FyXCIgdG8gYmUgYWRkZWQgdG8gdGhlIGdyYW1tYXIgbW9kZXNcbi8vIHdpdGhvdXQgcmVxdWlyaW5nIGFueSB1bmRlcmx5aW5nIGNoYW5nZXMgdG8gdGhlIGNvbXBpbGVyIGludGVybmFscy5cblxuLy8gYGNvbXBpbGVNYXRjaGAgYmVpbmcgdGhlIHBlcmZlY3Qgc21hbGwgZXhhbXBsZSBvZiBub3cgYWxsb3dpbmcgYSBncmFtbWFyXG4vLyBhdXRob3IgdG8gd3JpdGUgYG1hdGNoYCB3aGVuIHRoZXkgZGVzaXJlIHRvIG1hdGNoIGEgc2luZ2xlIGV4cHJlc3Npb24gcmF0aGVyXG4vLyB0aGFuIGJlaW5nIGZvcmNlZCB0byB1c2UgYGJlZ2luYC4gIFRoZSBleHRlbnNpb24gdGhlbiBqdXN0IG1vdmVzIGBtYXRjaGAgaW50b1xuLy8gYGJlZ2luYCB3aGVuIGl0IHJ1bnMuICBJZSwgbm8gZmVhdHVyZXMgaGF2ZSBiZWVuIGFkZGVkLCBidXQgd2UndmUganVzdCBtYWRlXG4vLyB0aGUgZXhwZXJpZW5jZSBvZiB3cml0aW5nIChhbmQgcmVhZGluZyBncmFtbWFycykgYSBsaXR0bGUgYml0IG5pY2VyLlxuXG4vLyAtLS0tLS1cblxuLy8gVE9ETzogV2UgbmVlZCBuZWdhdGl2ZSBsb29rLWJlaGluZCBzdXBwb3J0IHRvIGRvIHRoaXMgcHJvcGVybHlcbi8qKlxuICogU2tpcCBhIG1hdGNoIGlmIGl0IGhhcyBhIHByZWNlZGluZyBkb3RcbiAqXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGBiZWdpbktleXdvcmRzYCB0byBwcmV2ZW50IG1hdGNoaW5nIGV4cHJlc3Npb25zIHN1Y2ggYXNcbiAqIGBib2Iua2V5d29yZC5kbygpYC4gVGhlIG1vZGUgY29tcGlsZXIgYXV0b21hdGljYWxseSB3aXJlcyB0aGlzIHVwIGFzIGFcbiAqIHNwZWNpYWwgX2ludGVybmFsXyAnb246YmVnaW4nIGNhbGxiYWNrIGZvciBtb2RlcyB3aXRoIGBiZWdpbktleXdvcmRzYFxuICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaFxuICogQHBhcmFtIHtDYWxsYmFja1Jlc3BvbnNlfSByZXNwb25zZVxuICovXG5mdW5jdGlvbiBza2lwSWZoYXNQcmVjZWRpbmdEb3QobWF0Y2gsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IGJlZm9yZSA9IG1hdGNoLmlucHV0W21hdGNoLmluZGV4IC0gMV07XG4gIGlmIChiZWZvcmUgPT09IFwiLlwiKSB7XG4gICAgcmVzcG9uc2UuaWdub3JlTWF0Y2goKTtcbiAgfVxufVxuXG5cbi8qKlxuICogYGJlZ2luS2V5d29yZHNgIHN5bnRhY3RpYyBzdWdhclxuICogQHR5cGUge0NvbXBpbGVyRXh0fVxuICovXG5mdW5jdGlvbiBiZWdpbktleXdvcmRzKG1vZGUsIHBhcmVudCkge1xuICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuICBpZiAoIW1vZGUuYmVnaW5LZXl3b3JkcykgcmV0dXJuO1xuXG4gIC8vIGZvciBsYW5ndWFnZXMgd2l0aCBrZXl3b3JkcyB0aGF0IGluY2x1ZGUgbm9uLXdvcmQgY2hhcmFjdGVycyBjaGVja2luZyBmb3JcbiAgLy8gYSB3b3JkIGJvdW5kYXJ5IGlzIG5vdCBzdWZmaWNpZW50LCBzbyBpbnN0ZWFkIHdlIGNoZWNrIGZvciBhIHdvcmQgYm91bmRhcnlcbiAgLy8gb3Igd2hpdGVzcGFjZSAtIHRoaXMgZG9lcyBubyBoYXJtIGluIGFueSBjYXNlIHNpbmNlIG91ciBrZXl3b3JkIGVuZ2luZVxuICAvLyBkb2Vzbid0IGFsbG93IHNwYWNlcyBpbiBrZXl3b3JkcyBhbnl3YXlzIGFuZCB3ZSBzdGlsbCBjaGVjayBmb3IgdGhlIGJvdW5kYXJ5XG4gIC8vIGZpcnN0XG4gIG1vZGUuYmVnaW4gPSAnXFxcXGIoJyArIG1vZGUuYmVnaW5LZXl3b3Jkcy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpKD8hXFxcXC4pKD89XFxcXGJ8XFxcXHMpJztcbiAgbW9kZS5fX2JlZm9yZUJlZ2luID0gc2tpcElmaGFzUHJlY2VkaW5nRG90O1xuICBtb2RlLmtleXdvcmRzID0gbW9kZS5rZXl3b3JkcyB8fCBtb2RlLmJlZ2luS2V5d29yZHM7XG4gIGRlbGV0ZSBtb2RlLmJlZ2luS2V5d29yZHM7XG5cbiAgLy8gcHJldmVudHMgZG91YmxlIHJlbGV2YW5jZSwgdGhlIGtleXdvcmRzIHRoZW1zZWx2ZXMgcHJvdmlkZVxuICAvLyByZWxldmFuY2UsIHRoZSBtb2RlIGRvZXNuJ3QgbmVlZCB0byBkb3VibGUgaXRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICBpZiAobW9kZS5yZWxldmFuY2UgPT09IHVuZGVmaW5lZCkgbW9kZS5yZWxldmFuY2UgPSAwO1xufVxuXG4vKipcbiAqIEFsbG93IGBpbGxlZ2FsYCB0byBjb250YWluIGFuIGFycmF5IG9mIGlsbGVnYWwgdmFsdWVzXG4gKiBAdHlwZSB7Q29tcGlsZXJFeHR9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVJbGxlZ2FsKG1vZGUsIF9wYXJlbnQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGUuaWxsZWdhbCkpIHJldHVybjtcblxuICBtb2RlLmlsbGVnYWwgPSBlaXRoZXIoLi4ubW9kZS5pbGxlZ2FsKTtcbn1cblxuLyoqXG4gKiBgbWF0Y2hgIHRvIG1hdGNoIGEgc2luZ2xlIGV4cHJlc3Npb24gZm9yIHJlYWRhYmlsaXR5XG4gKiBAdHlwZSB7Q29tcGlsZXJFeHR9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVNYXRjaChtb2RlLCBfcGFyZW50KSB7XG4gIGlmICghbW9kZS5tYXRjaCkgcmV0dXJuO1xuICBpZiAobW9kZS5iZWdpbiB8fCBtb2RlLmVuZCkgdGhyb3cgbmV3IEVycm9yKFwiYmVnaW4gJiBlbmQgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCBtYXRjaFwiKTtcblxuICBtb2RlLmJlZ2luID0gbW9kZS5tYXRjaDtcbiAgZGVsZXRlIG1vZGUubWF0Y2g7XG59XG5cbi8qKlxuICogcHJvdmlkZXMgdGhlIGRlZmF1bHQgMSByZWxldmFuY2UgdG8gYWxsIG1vZGVzXG4gKiBAdHlwZSB7Q29tcGlsZXJFeHR9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVSZWxldmFuY2UobW9kZSwgX3BhcmVudCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gIGlmIChtb2RlLnJlbGV2YW5jZSA9PT0gdW5kZWZpbmVkKSBtb2RlLnJlbGV2YW5jZSA9IDE7XG59XG5cbi8vIGtleXdvcmRzIHRoYXQgc2hvdWxkIGhhdmUgbm8gZGVmYXVsdCByZWxldmFuY2UgdmFsdWVcbmNvbnN0IENPTU1PTl9LRVlXT1JEUyA9IFtcbiAgJ29mJyxcbiAgJ2FuZCcsXG4gICdmb3InLFxuICAnaW4nLFxuICAnbm90JyxcbiAgJ29yJyxcbiAgJ2lmJyxcbiAgJ3RoZW4nLFxuICAncGFyZW50JywgLy8gY29tbW9uIHZhcmlhYmxlIG5hbWVcbiAgJ2xpc3QnLCAvLyBjb21tb24gdmFyaWFibGUgbmFtZVxuICAndmFsdWUnIC8vIGNvbW1vbiB2YXJpYWJsZSBuYW1lXG5dO1xuXG5jb25zdCBERUZBVUxUX0tFWVdPUkRfQ0xBU1NOQU1FID0gXCJrZXl3b3JkXCI7XG5cbi8qKlxuICogR2l2ZW4gcmF3IGtleXdvcmRzIGZyb20gYSBsYW5ndWFnZSBkZWZpbml0aW9uLCBjb21waWxlIHRoZW0uXG4gKlxuICogQHBhcmFtIHtzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLHN0cmluZ3xzdHJpbmdbXT4gfCBBcnJheTxzdHJpbmc+fSByYXdLZXl3b3Jkc1xuICogQHBhcmFtIHtib29sZWFufSBjYXNlSW5zZW5zaXRpdmVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUtleXdvcmRzKHJhd0tleXdvcmRzLCBjYXNlSW5zZW5zaXRpdmUsIGNsYXNzTmFtZSA9IERFRkFVTFRfS0VZV09SRF9DTEFTU05BTUUpIHtcbiAgLyoqIEB0eXBlIEtleXdvcmREaWN0ICovXG4gIGNvbnN0IGNvbXBpbGVkS2V5d29yZHMgPSB7fTtcblxuICAvLyBpbnB1dCBjYW4gYmUgYSBzdHJpbmcgb2Yga2V5d29yZHMsIGFuIGFycmF5IG9mIGtleXdvcmRzLCBvciBhIG9iamVjdCB3aXRoXG4gIC8vIG5hbWVkIGtleXMgcmVwcmVzZW50aW5nIGNsYXNzTmFtZSAod2hpY2ggY2FuIHRoZW4gcG9pbnQgdG8gYSBzdHJpbmcgb3IgYXJyYXkpXG4gIGlmICh0eXBlb2YgcmF3S2V5d29yZHMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29tcGlsZUxpc3QoY2xhc3NOYW1lLCByYXdLZXl3b3Jkcy5zcGxpdChcIiBcIikpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmF3S2V5d29yZHMpKSB7XG4gICAgY29tcGlsZUxpc3QoY2xhc3NOYW1lLCByYXdLZXl3b3Jkcyk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocmF3S2V5d29yZHMpLmZvckVhY2goZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgICAvLyBjb2xsYXBzZSBhbGwgb3VyIG9iamVjdHMgYmFjayBpbnRvIHRoZSBwYXJlbnQgb2JqZWN0XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICBjb21waWxlZEtleXdvcmRzLFxuICAgICAgICBjb21waWxlS2V5d29yZHMocmF3S2V5d29yZHNbY2xhc3NOYW1lXSwgY2FzZUluc2Vuc2l0aXZlLCBjbGFzc05hbWUpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjb21waWxlZEtleXdvcmRzO1xuXG4gIC8vIC0tLVxuXG4gIC8qKlxuICAgKiBDb21waWxlcyBhbiBpbmRpdmlkdWFsIGxpc3Qgb2Yga2V5d29yZHNcbiAgICpcbiAgICogRXg6IFwiZm9yIGlmIHdoZW4gd2hpbGV8NVwiXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBrZXl3b3JkTGlzdFxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGlsZUxpc3QoY2xhc3NOYW1lLCBrZXl3b3JkTGlzdCkge1xuICAgIGlmIChjYXNlSW5zZW5zaXRpdmUpIHtcbiAgICAgIGtleXdvcmRMaXN0ID0ga2V5d29yZExpc3QubWFwKHggPT4geC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAga2V5d29yZExpc3QuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICBjb25zdCBwYWlyID0ga2V5d29yZC5zcGxpdCgnfCcpO1xuICAgICAgY29tcGlsZWRLZXl3b3Jkc1twYWlyWzBdXSA9IFtjbGFzc05hbWUsIHNjb3JlRm9yS2V5d29yZChwYWlyWzBdLCBwYWlyWzFdKV07XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwcm9wZXIgc2NvcmUgZm9yIGEgZ2l2ZW4ga2V5d29yZFxuICpcbiAqIEFsc28gdGFrZXMgaW50byBhY2NvdW50IGNvbW1lbnQga2V5d29yZHMsIHdoaWNoIHdpbGwgYmUgc2NvcmVkIDAgVU5MRVNTXG4gKiBhbm90aGVyIHNjb3JlIGhhcyBiZWVuIG1hbnVhbGx5IGFzc2lnbmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleXdvcmRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvdmlkZWRTY29yZV1cbiAqL1xuZnVuY3Rpb24gc2NvcmVGb3JLZXl3b3JkKGtleXdvcmQsIHByb3ZpZGVkU2NvcmUpIHtcbiAgLy8gbWFudWFsIHNjb3JlcyBhbHdheXMgd2luIG92ZXIgY29tbW9uIGtleXdvcmRzXG4gIC8vIHNvIHlvdSBjYW4gZm9yY2UgYSBzY29yZSBvZiAxIGlmIHlvdSByZWFsbHkgaW5zaXN0XG4gIGlmIChwcm92aWRlZFNjb3JlKSB7XG4gICAgcmV0dXJuIE51bWJlcihwcm92aWRlZFNjb3JlKTtcbiAgfVxuXG4gIHJldHVybiBjb21tb25LZXl3b3JkKGtleXdvcmQpID8gMCA6IDE7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIGdpdmVuIGtleXdvcmQgaXMgY29tbW9uIG9yIG5vdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkICovXG5mdW5jdGlvbiBjb21tb25LZXl3b3JkKGtleXdvcmQpIHtcbiAgcmV0dXJuIENPTU1PTl9LRVlXT1JEUy5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpO1xufVxuXG4vLyBjb21waWxhdGlvblxuXG4vKipcbiAqIENvbXBpbGVzIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiByZXN1bHRcbiAqXG4gKiBHaXZlbiB0aGUgcmF3IHJlc3VsdCBvZiBhIGxhbmd1YWdlIGRlZmluaXRpb24gKExhbmd1YWdlKSwgY29tcGlsZXMgdGhpcyBzb1xuICogdGhhdCBpdCBpcyByZWFkeSBmb3IgaGlnaGxpZ2h0aW5nIGNvZGUuXG4gKiBAcGFyYW0ge0xhbmd1YWdlfSBsYW5ndWFnZVxuICogQHBhcmFtIHt7cGx1Z2luczogSExKU1BsdWdpbltdfX0gb3B0c1xuICogQHJldHVybnMge0NvbXBpbGVkTGFuZ3VhZ2V9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVMYW5ndWFnZShsYW5ndWFnZSwgeyBwbHVnaW5zIH0pIHtcbiAgLyoqXG4gICAqIEJ1aWxkcyBhIHJlZ2V4IHdpdGggdGhlIGNhc2Ugc2Vuc2F0aXZpbGl0eSBvZiB0aGUgY3VycmVudCBsYW5ndWFnZVxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZ2xvYmFsXVxuICAgKi9cbiAgZnVuY3Rpb24gbGFuZ1JlKHZhbHVlLCBnbG9iYWwpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgIHNvdXJjZSh2YWx1ZSksXG4gICAgICAnbScgKyAobGFuZ3VhZ2UuY2FzZV9pbnNlbnNpdGl2ZSA/ICdpJyA6ICcnKSArIChnbG9iYWwgPyAnZycgOiAnJylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAgU3RvcmVzIG11bHRpcGxlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgYW5kIGFsbG93cyB5b3UgdG8gcXVpY2tseSBzZWFyY2ggZm9yXG4gICAgdGhlbSBhbGwgaW4gYSBzdHJpbmcgc2ltdWx0YW5lb3VzbHkgLSByZXR1cm5pbmcgdGhlIGZpcnN0IG1hdGNoLiAgSXQgZG9lc1xuICAgIHRoaXMgYnkgY3JlYXRpbmcgYSBodWdlIChhfGJ8YykgcmVnZXggLSBlYWNoIGluZGl2aWR1YWwgaXRlbSB3cmFwcGVkIHdpdGggKClcbiAgICBhbmQgam9pbmVkIGJ5IGB8YCAtIHVzaW5nIG1hdGNoIGdyb3VwcyB0byB0cmFjayBwb3NpdGlvbi4gIFdoZW4gYSBtYXRjaCBpc1xuICAgIGZvdW5kIGNoZWNraW5nIHdoaWNoIHBvc2l0aW9uIGluIHRoZSBhcnJheSBoYXMgY29udGVudCBhbGxvd3MgdXMgdG8gZmlndXJlXG4gICAgb3V0IHdoaWNoIG9mIHRoZSBvcmlnaW5hbCByZWdleGVzIC8gbWF0Y2ggZ3JvdXBzIHRyaWdnZXJlZCB0aGUgbWF0Y2guXG5cbiAgICBUaGUgbWF0Y2ggb2JqZWN0IGl0c2VsZiAodGhlIHJlc3VsdCBvZiBgUmVnZXguZXhlY2ApIGlzIHJldHVybmVkIGJ1dCBhbHNvXG4gICAgZW5oYW5jZWQgYnkgbWVyZ2luZyBpbiBhbnkgbWV0YS1kYXRhIHRoYXQgd2FzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcmVnZXguXG4gICAgVGhpcyBpcyBob3cgd2Uga2VlcCB0cmFjayBvZiB3aGljaCBtb2RlIG1hdGNoZWQsIGFuZCB3aGF0IHR5cGUgb2YgcnVsZVxuICAgIChgaWxsZWdhbGAsIGBiZWdpbmAsIGVuZCwgZXRjKS5cbiAgKi9cbiAgY2xhc3MgTXVsdGlSZWdleCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLm1hdGNoSW5kZXhlcyA9IHt9O1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5yZWdleGVzID0gW107XG4gICAgICB0aGlzLm1hdGNoQXQgPSAxO1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGFkZFJ1bGUocmUsIG9wdHMpIHtcbiAgICAgIG9wdHMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLm1hdGNoSW5kZXhlc1t0aGlzLm1hdGNoQXRdID0gb3B0cztcbiAgICAgIHRoaXMucmVnZXhlcy5wdXNoKFtvcHRzLCByZV0pO1xuICAgICAgdGhpcy5tYXRjaEF0ICs9IGNvdW50TWF0Y2hHcm91cHMocmUpICsgMTtcbiAgICB9XG5cbiAgICBjb21waWxlKCkge1xuICAgICAgaWYgKHRoaXMucmVnZXhlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gYXZvaWRzIHRoZSBuZWVkIHRvIGNoZWNrIGxlbmd0aCBldmVyeSB0aW1lIGV4ZWMgaXMgY2FsbGVkXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5leGVjID0gKCkgPT4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlcm1pbmF0b3JzID0gdGhpcy5yZWdleGVzLm1hcChlbCA9PiBlbFsxXSk7XG4gICAgICB0aGlzLm1hdGNoZXJSZSA9IGxhbmdSZShqb2luKHRlcm1pbmF0b3JzKSwgdHJ1ZSk7XG4gICAgICB0aGlzLmxhc3RJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLyoqIEBwYXJhbSB7c3RyaW5nfSBzICovXG4gICAgZXhlYyhzKSB7XG4gICAgICB0aGlzLm1hdGNoZXJSZS5sYXN0SW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5tYXRjaGVyUmUuZXhlYyhzKTtcbiAgICAgIGlmICghbWF0Y2gpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICAgICAgY29uc3QgaSA9IG1hdGNoLmZpbmRJbmRleCgoZWwsIGkpID0+IGkgPiAwICYmIGVsICE9PSB1bmRlZmluZWQpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgbWF0Y2hEYXRhID0gdGhpcy5tYXRjaEluZGV4ZXNbaV07XG4gICAgICAvLyB0cmltIG9mZiBhbnkgZWFybGllciBub24tcmVsZXZhbnQgbWF0Y2ggZ3JvdXBzIChpZSwgdGhlIG90aGVyIHJlZ2V4XG4gICAgICAvLyBtYXRjaCBncm91cHMgdGhhdCBtYWtlIHVwIHRoZSBtdWx0aS1tYXRjaGVyKVxuICAgICAgbWF0Y2guc3BsaWNlKDAsIGkpO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihtYXRjaCwgbWF0Y2hEYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIENyZWF0ZWQgdG8gc29sdmUgdGhlIGtleSBkZWZpY2llbnRseSB3aXRoIE11bHRpUmVnZXggLSB0aGVyZSBpcyBubyB3YXkgdG9cbiAgICB0ZXN0IGZvciBtdWx0aXBsZSBtYXRjaGVzIGF0IGEgc2luZ2xlIGxvY2F0aW9uLiAgV2h5IHdvdWxkIHdlIG5lZWQgdG8gZG9cbiAgICB0aGF0PyAgSW4gdGhlIGZ1dHVyZSBhIG1vcmUgZHluYW1pYyBlbmdpbmUgd2lsbCBhbGxvdyBjZXJ0YWluIG1hdGNoZXMgdG8gYmVcbiAgICBpZ25vcmVkLiAgQW4gZXhhbXBsZTogaWYgd2UgbWF0Y2hlZCBzYXkgdGhlIDNyZCByZWdleCBpbiBhIGxhcmdlIGdyb3VwIGJ1dFxuICAgIGRlY2lkZWQgdG8gaWdub3JlIGl0IC0gd2UnZCBuZWVkIHRvIHN0YXJ0ZWQgdGVzdGluZyBhZ2FpbiBhdCB0aGUgNHRoXG4gICAgcmVnZXguLi4gYnV0IE11bHRpUmVnZXggaXRzZWxmIGdpdmVzIHVzIG5vIHJlYWwgd2F5IHRvIGRvIHRoYXQuXG5cbiAgICBTbyB3aGF0IHRoaXMgY2xhc3MgY3JlYXRlcyBNdWx0aVJlZ2V4cyBvbiB0aGUgZmx5IGZvciB3aGF0ZXZlciBzZWFyY2hcbiAgICBwb3NpdGlvbiB0aGV5IGFyZSBuZWVkZWQuXG5cbiAgICBOT1RFOiBUaGVzZSBhZGRpdGlvbmFsIE11bHRpUmVnZXggb2JqZWN0cyBhcmUgY3JlYXRlZCBkeW5hbWljYWxseS4gIEZvciBtb3N0XG4gICAgZ3JhbW1hcnMgbW9zdCBvZiB0aGUgdGltZSB3ZSB3aWxsIG5ldmVyIGFjdHVhbGx5IG5lZWQgYW55dGhpbmcgbW9yZSB0aGFuIHRoZVxuICAgIGZpcnN0IE11bHRpUmVnZXggLSBzbyB0aGlzIHNob3VsZG4ndCBoYXZlIHRvbyBtdWNoIG92ZXJoZWFkLlxuXG4gICAgU2F5IHRoaXMgaXMgb3VyIHNlYXJjaCBncm91cCwgYW5kIHdlIG1hdGNoIHJlZ2V4MywgYnV0IHdpc2ggdG8gaWdub3JlIGl0LlxuXG4gICAgICByZWdleDEgfCByZWdleDIgfCByZWdleDMgfCByZWdleDQgfCByZWdleDUgICAgJyBpZSwgc3RhcnRBdCA9IDBcblxuICAgIFdoYXQgd2UgbmVlZCBpcyBhIG5ldyBNdWx0aVJlZ2V4IHRoYXQgb25seSBpbmNsdWRlcyB0aGUgcmVtYWluaW5nXG4gICAgcG9zc2liaWxpdGllczpcblxuICAgICAgcmVnZXg0IHwgcmVnZXg1ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgaWUsIHN0YXJ0QXQgPSAzXG5cbiAgICBUaGlzIGNsYXNzIHdyYXBzIGFsbCB0aGF0IGNvbXBsZXhpdHkgdXAgaW4gYSBzaW1wbGUgQVBJLi4uIGBzdGFydEF0YCBkZWNpZGVzXG4gICAgd2hlcmUgaW4gdGhlIGFycmF5IG9mIGV4cHJlc3Npb25zIHRvIHN0YXJ0IGRvaW5nIHRoZSBtYXRjaGluZy4gSXRcbiAgICBhdXRvLWluY3JlbWVudHMsIHNvIGlmIGEgbWF0Y2ggaXMgZm91bmQgYXQgcG9zaXRpb24gMiwgdGhlbiBzdGFydEF0IHdpbGwgYmVcbiAgICBzZXQgdG8gMy4gIElmIHRoZSBlbmQgaXMgcmVhY2hlZCBzdGFydEF0IHdpbGwgcmV0dXJuIHRvIDAuXG5cbiAgICBNT1NUIG9mIHRoZSB0aW1lIHRoZSBwYXJzZXIgd2lsbCBiZSBzZXR0aW5nIHN0YXJ0QXQgbWFudWFsbHkgdG8gMC5cbiAgKi9cbiAgY2xhc3MgUmVzdW1hYmxlTXVsdGlSZWdleCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLm11bHRpUmVnZXhlcyA9IFtdO1xuICAgICAgdGhpcy5jb3VudCA9IDA7XG5cbiAgICAgIHRoaXMubGFzdEluZGV4ID0gMDtcbiAgICAgIHRoaXMucmVnZXhJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdldE1hdGNoZXIoaW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLm11bHRpUmVnZXhlc1tpbmRleF0pIHJldHVybiB0aGlzLm11bHRpUmVnZXhlc1tpbmRleF07XG5cbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBuZXcgTXVsdGlSZWdleCgpO1xuICAgICAgdGhpcy5ydWxlcy5zbGljZShpbmRleCkuZm9yRWFjaCgoW3JlLCBvcHRzXSkgPT4gbWF0Y2hlci5hZGRSdWxlKHJlLCBvcHRzKSk7XG4gICAgICBtYXRjaGVyLmNvbXBpbGUoKTtcbiAgICAgIHRoaXMubXVsdGlSZWdleGVzW2luZGV4XSA9IG1hdGNoZXI7XG4gICAgICByZXR1cm4gbWF0Y2hlcjtcbiAgICB9XG5cbiAgICByZXN1bWluZ1NjYW5BdFNhbWVQb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2V4SW5kZXggIT09IDA7XG4gICAgfVxuXG4gICAgY29uc2lkZXJBbGwoKSB7XG4gICAgICB0aGlzLnJlZ2V4SW5kZXggPSAwO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBhZGRSdWxlKHJlLCBvcHRzKSB7XG4gICAgICB0aGlzLnJ1bGVzLnB1c2goW3JlLCBvcHRzXSk7XG4gICAgICBpZiAob3B0cy50eXBlID09PSBcImJlZ2luXCIpIHRoaXMuY291bnQrKztcbiAgICB9XG5cbiAgICAvKiogQHBhcmFtIHtzdHJpbmd9IHMgKi9cbiAgICBleGVjKHMpIHtcbiAgICAgIGNvbnN0IG0gPSB0aGlzLmdldE1hdGNoZXIodGhpcy5yZWdleEluZGV4KTtcbiAgICAgIG0ubGFzdEluZGV4ID0gdGhpcy5sYXN0SW5kZXg7XG4gICAgICBsZXQgcmVzdWx0ID0gbS5leGVjKHMpO1xuXG4gICAgICAvLyBUaGUgZm9sbG93aW5nIGlzIGJlY2F1c2Ugd2UgaGF2ZSBubyBlYXN5IHdheSB0byBzYXkgXCJyZXN1bWUgc2Nhbm5pbmcgYXQgdGhlXG4gICAgICAvLyBleGlzdGluZyBwb3NpdGlvbiBidXQgYWxzbyBza2lwIHRoZSBjdXJyZW50IHJ1bGUgT05MWVwiLiBXaGF0IGhhcHBlbnMgaXNcbiAgICAgIC8vIGFsbCBwcmlvciBydWxlcyBhcmUgYWxzbyBza2lwcGVkIHdoaWNoIGNhbiByZXN1bHQgaW4gbWF0Y2hpbmcgdGhlIHdyb25nXG4gICAgICAvLyB0aGluZy4gRXhhbXBsZSBvZiBtYXRjaGluZyBcImJvb2dlclwiOlxuXG4gICAgICAvLyBvdXIgbWF0Y2hlciBpcyBbc3RyaW5nLCBcImJvb2dlclwiLCBudW1iZXJdXG4gICAgICAvL1xuICAgICAgLy8gLi4uLmJvb2dlci4uLi5cblxuICAgICAgLy8gaWYgXCJib29nZXJcIiBpcyBpZ25vcmVkIHRoZW4gd2UnZCByZWFsbHkgbmVlZCBhIHJlZ2V4IHRvIHNjYW4gZnJvbSB0aGVcbiAgICAgIC8vIFNBTUUgcG9zaXRpb24gZm9yIG9ubHk6IFtzdHJpbmcsIG51bWJlcl0gYnV0IGlnbm9yaW5nIFwiYm9vZ2VyXCIgKGlmIGl0XG4gICAgICAvLyB3YXMgdGhlIGZpcnN0IG1hdGNoKSwgYSBzaW1wbGUgcmVzdW1lIHdvdWxkIHNjYW4gYWhlYWQgd2hvIGtub3dzIGhvd1xuICAgICAgLy8gZmFyIGxvb2tpbmcgb25seSBmb3IgXCJudW1iZXJcIiwgaWdub3JpbmcgcG90ZW50aWFsIHN0cmluZyBtYXRjaGVzIChvclxuICAgICAgLy8gZnV0dXJlIFwiYm9vZ2VyXCIgbWF0Y2hlcyB0aGF0IG1pZ2h0IGJlIHZhbGlkLilcblxuICAgICAgLy8gU28gd2hhdCB3ZSBkbzogV2UgZXhlY3V0ZSB0d28gbWF0Y2hlcnMsIG9uZSByZXN1bWluZyBhdCB0aGUgc2FtZVxuICAgICAgLy8gcG9zaXRpb24sIGJ1dCB0aGUgc2Vjb25kIGZ1bGwgbWF0Y2hlciBzdGFydGluZyBhdCB0aGUgcG9zaXRpb24gYWZ0ZXI6XG5cbiAgICAgIC8vICAgICAvLS0tIHJlc3VtZSBmaXJzdCByZWdleCBtYXRjaCBoZXJlIChmb3IgW251bWJlcl0pXG4gICAgICAvLyAgICAgfC8tLS0tIGZ1bGwgbWF0Y2ggaGVyZSBmb3IgW3N0cmluZywgXCJib29nZXJcIiwgbnVtYmVyXVxuICAgICAgLy8gICAgIHZ2XG4gICAgICAvLyAuLi4uYm9vZ2VyLi4uLlxuXG4gICAgICAvLyBXaGljaCBldmVyIHJlc3VsdHMgaW4gYSBtYXRjaCBmaXJzdCBpcyB0aGVuIHVzZWQuIFNvIHRoaXMgMy00IHN0ZXBcbiAgICAgIC8vIHByb2Nlc3MgZXNzZW50aWFsbHkgYWxsb3dzIHVzIHRvIHNheSBcIm1hdGNoIGF0IHRoaXMgcG9zaXRpb24sIGV4Y2x1ZGluZ1xuICAgICAgLy8gYSBwcmlvciBydWxlIHRoYXQgd2FzIGlnbm9yZWRcIi5cbiAgICAgIC8vXG4gICAgICAvLyAxLiBNYXRjaCBcImJvb2dlclwiIGZpcnN0LCBpZ25vcmUuIEFsc28gcHJvdmVzIHRoYXQgW3N0cmluZ10gZG9lcyBub24gbWF0Y2guXG4gICAgICAvLyAyLiBSZXN1bWUgbWF0Y2hpbmcgZm9yIFtudW1iZXJdXG4gICAgICAvLyAzLiBNYXRjaCBhdCBpbmRleCArIDEgZm9yIFtzdHJpbmcsIFwiYm9vZ2VyXCIsIG51bWJlcl1cbiAgICAgIC8vIDQuIElmICMyIGFuZCAjMyByZXN1bHQgaW4gbWF0Y2hlcywgd2hpY2ggY2FtZSBmaXJzdD9cbiAgICAgIGlmICh0aGlzLnJlc3VtaW5nU2NhbkF0U2FtZVBvc2l0aW9uKCkpIHtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaW5kZXggPT09IHRoaXMubGFzdEluZGV4KSA7IGVsc2UgeyAvLyB1c2UgdGhlIHNlY29uZCBtYXRjaGVyIHJlc3VsdFxuICAgICAgICAgIGNvbnN0IG0yID0gdGhpcy5nZXRNYXRjaGVyKDApO1xuICAgICAgICAgIG0yLmxhc3RJbmRleCA9IHRoaXMubGFzdEluZGV4ICsgMTtcbiAgICAgICAgICByZXN1bHQgPSBtMi5leGVjKHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5yZWdleEluZGV4ICs9IHJlc3VsdC5wb3NpdGlvbiArIDE7XG4gICAgICAgIGlmICh0aGlzLnJlZ2V4SW5kZXggPT09IHRoaXMuY291bnQpIHtcbiAgICAgICAgICAvLyB3cmFwLWFyb3VuZCB0byBjb25zaWRlcmluZyBhbGwgbWF0Y2hlcyBhZ2FpblxuICAgICAgICAgIHRoaXMuY29uc2lkZXJBbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIG1vZGUsIGJ1aWxkcyBhIGh1Z2UgUmVzdW1hYmxlTXVsdGlSZWdleCB0aGF0IGNhbiBiZSB1c2VkIHRvIHdhbGtcbiAgICogdGhlIGNvbnRlbnQgYW5kIGZpbmQgbWF0Y2hlcy5cbiAgICpcbiAgICogQHBhcmFtIHtDb21waWxlZE1vZGV9IG1vZGVcbiAgICogQHJldHVybnMge1Jlc3VtYWJsZU11bHRpUmVnZXh9XG4gICAqL1xuICBmdW5jdGlvbiBidWlsZE1vZGVSZWdleChtb2RlKSB7XG4gICAgY29uc3QgbW0gPSBuZXcgUmVzdW1hYmxlTXVsdGlSZWdleCgpO1xuXG4gICAgbW9kZS5jb250YWlucy5mb3JFYWNoKHRlcm0gPT4gbW0uYWRkUnVsZSh0ZXJtLmJlZ2luLCB7IHJ1bGU6IHRlcm0sIHR5cGU6IFwiYmVnaW5cIiB9KSk7XG5cbiAgICBpZiAobW9kZS50ZXJtaW5hdG9yRW5kKSB7XG4gICAgICBtbS5hZGRSdWxlKG1vZGUudGVybWluYXRvckVuZCwgeyB0eXBlOiBcImVuZFwiIH0pO1xuICAgIH1cbiAgICBpZiAobW9kZS5pbGxlZ2FsKSB7XG4gICAgICBtbS5hZGRSdWxlKG1vZGUuaWxsZWdhbCwgeyB0eXBlOiBcImlsbGVnYWxcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW07XG4gIH1cblxuICAvKiogc2tpcCB2cyBhYm9ydCB2cyBpZ25vcmVcbiAgICpcbiAgICogQHNraXAgICAtIFRoZSBtb2RlIGlzIHN0aWxsIGVudGVyZWQgYW5kIGV4aXRlZCBub3JtYWxseSAoYW5kIGNvbnRhaW5zIHJ1bGVzIGFwcGx5KSxcbiAgICogICAgICAgICAgIGJ1dCBhbGwgY29udGVudCBpcyBoZWxkIGFuZCBhZGRlZCB0byB0aGUgcGFyZW50IGJ1ZmZlciByYXRoZXIgdGhhbiBiZWluZ1xuICAgKiAgICAgICAgICAgb3V0cHV0IHdoZW4gdGhlIG1vZGUgZW5kcy4gIE1vc3RseSB1c2VkIHdpdGggYHN1Ymxhbmd1YWdlYCB0byBidWlsZCB1cFxuICAgKiAgICAgICAgICAgYSBzaW5nbGUgbGFyZ2UgYnVmZmVyIHRoYW4gY2FuIGJlIHBhcnNlZCBieSBzdWJsYW5ndWFnZS5cbiAgICpcbiAgICogICAgICAgICAgICAgLSBUaGUgbW9kZSBiZWdpbiBhbmRzIGVuZHMgbm9ybWFsbHkuXG4gICAqICAgICAgICAgICAgIC0gQ29udGVudCBtYXRjaGVkIGlzIGFkZGVkIHRvIHRoZSBwYXJlbnQgbW9kZSBidWZmZXIuXG4gICAqICAgICAgICAgICAgIC0gVGhlIHBhcnNlciBjdXJzb3IgaXMgbW92ZWQgZm9yd2FyZCBub3JtYWxseS5cbiAgICpcbiAgICogQGFib3J0ICAtIEEgaGFjayBwbGFjZWhvbGRlciB1bnRpbCB3ZSBoYXZlIGlnbm9yZS4gIEFib3J0cyB0aGUgbW9kZSAoYXMgaWYgaXRcbiAgICogICAgICAgICAgIG5ldmVyIG1hdGNoZWQpIGJ1dCBET0VTIE5PVCBjb250aW51ZSB0byBtYXRjaCBzdWJzZXF1ZW50IGBjb250YWluc2BcbiAgICogICAgICAgICAgIG1vZGVzLiAgQWJvcnQgaXMgYmFkL3N1Ym9wdGltYWwgYmVjYXVzZSBpdCBjYW4gcmVzdWx0IGluIG1vZGVzXG4gICAqICAgICAgICAgICBmYXJ0aGVyIGRvd24gbm90IGdldHRpbmcgYXBwbGllZCBiZWNhdXNlIGFuIGVhcmxpZXIgcnVsZSBlYXRzIHRoZVxuICAgKiAgICAgICAgICAgY29udGVudCBidXQgdGhlbiBhYm9ydHMuXG4gICAqXG4gICAqICAgICAgICAgICAgIC0gVGhlIG1vZGUgZG9lcyBub3QgYmVnaW4uXG4gICAqICAgICAgICAgICAgIC0gQ29udGVudCBtYXRjaGVkIGJ5IGBiZWdpbmAgaXMgYWRkZWQgdG8gdGhlIG1vZGUgYnVmZmVyLlxuICAgKiAgICAgICAgICAgICAtIFRoZSBwYXJzZXIgY3Vyc29yIGlzIG1vdmVkIGZvcndhcmQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBpZ25vcmUgLSBJZ25vcmVzIHRoZSBtb2RlIChhcyBpZiBpdCBuZXZlciBtYXRjaGVkKSBhbmQgY29udGludWVzIHRvIG1hdGNoIGFueVxuICAgKiAgICAgICAgICAgc3Vic2VxdWVudCBgY29udGFpbnNgIG1vZGVzLiAgSWdub3JlIGlzbid0IHRlY2huaWNhbGx5IHBvc3NpYmxlIHdpdGhcbiAgICogICAgICAgICAgIHRoZSBjdXJyZW50IHBhcnNlciBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogICAgICAgICAgICAgLSBUaGUgbW9kZSBkb2VzIG5vdCBiZWdpbi5cbiAgICogICAgICAgICAgICAgLSBDb250ZW50IG1hdGNoZWQgYnkgYGJlZ2luYCBpcyBpZ25vcmVkLlxuICAgKiAgICAgICAgICAgICAtIFRoZSBwYXJzZXIgY3Vyc29yIGlzIG5vdCBtb3ZlZCBmb3J3YXJkLlxuICAgKi9cblxuICAvKipcbiAgICogQ29tcGlsZXMgYW4gaW5kaXZpZHVhbCBtb2RlXG4gICAqXG4gICAqIFRoaXMgY2FuIHJhaXNlIGFuIGVycm9yIGlmIHRoZSBtb2RlIGNvbnRhaW5zIGNlcnRhaW4gZGV0ZWN0YWJsZSBrbm93biBsb2dpY1xuICAgKiBpc3N1ZXMuXG4gICAqIEBwYXJhbSB7TW9kZX0gbW9kZVxuICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZSB8IG51bGx9IFtwYXJlbnRdXG4gICAqIEByZXR1cm5zIHtDb21waWxlZE1vZGUgfCBuZXZlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBpbGVNb2RlKG1vZGUsIHBhcmVudCkge1xuICAgIGNvbnN0IGNtb2RlID0gLyoqIEB0eXBlIENvbXBpbGVkTW9kZSAqLyAobW9kZSk7XG4gICAgaWYgKG1vZGUuaXNDb21waWxlZCkgcmV0dXJuIGNtb2RlO1xuXG4gICAgW1xuICAgICAgLy8gZG8gdGhpcyBlYXJseSBzbyBjb21waWxlciBleHRlbnNpb25zIGdlbmVyYWxseSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0XG4gICAgICAvLyB0aGUgZGlzdGluY3Rpb24gYmV0d2VlbiBtYXRjaC9iZWdpblxuICAgICAgY29tcGlsZU1hdGNoXG4gICAgXS5mb3JFYWNoKGV4dCA9PiBleHQobW9kZSwgcGFyZW50KSk7XG5cbiAgICBsYW5ndWFnZS5jb21waWxlckV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4gZXh0KG1vZGUsIHBhcmVudCkpO1xuXG4gICAgLy8gX19iZWZvcmVCZWdpbiBpcyBjb25zaWRlcmVkIHByaXZhdGUgQVBJLCBpbnRlcm5hbCB1c2Ugb25seVxuICAgIG1vZGUuX19iZWZvcmVCZWdpbiA9IG51bGw7XG5cbiAgICBbXG4gICAgICBiZWdpbktleXdvcmRzLFxuICAgICAgLy8gZG8gdGhpcyBsYXRlciBzbyBjb21waWxlciBleHRlbnNpb25zIHRoYXQgY29tZSBlYXJsaWVyIGhhdmUgYWNjZXNzIHRvIHRoZVxuICAgICAgLy8gcmF3IGFycmF5IGlmIHRoZXkgd2FudGVkIHRvIHBlcmhhcHMgbWFuaXB1bGF0ZSBpdCwgZXRjLlxuICAgICAgY29tcGlsZUlsbGVnYWwsXG4gICAgICAvLyBkZWZhdWx0IHRvIDEgcmVsZXZhbmNlIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAgIGNvbXBpbGVSZWxldmFuY2VcbiAgICBdLmZvckVhY2goZXh0ID0+IGV4dChtb2RlLCBwYXJlbnQpKTtcblxuICAgIG1vZGUuaXNDb21waWxlZCA9IHRydWU7XG5cbiAgICBsZXQga2V5d29yZFBhdHRlcm4gPSBudWxsO1xuICAgIGlmICh0eXBlb2YgbW9kZS5rZXl3b3JkcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAga2V5d29yZFBhdHRlcm4gPSBtb2RlLmtleXdvcmRzLiRwYXR0ZXJuO1xuICAgICAgZGVsZXRlIG1vZGUua2V5d29yZHMuJHBhdHRlcm47XG4gICAgfVxuXG4gICAgaWYgKG1vZGUua2V5d29yZHMpIHtcbiAgICAgIG1vZGUua2V5d29yZHMgPSBjb21waWxlS2V5d29yZHMobW9kZS5rZXl3b3JkcywgbGFuZ3VhZ2UuY2FzZV9pbnNlbnNpdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gYm90aCBhcmUgbm90IGFsbG93ZWRcbiAgICBpZiAobW9kZS5sZXhlbWVzICYmIGtleXdvcmRQYXR0ZXJuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFUlI6IFByZWZlciBga2V5d29yZHMuJHBhdHRlcm5gIHRvIGBtb2RlLmxleGVtZXNgLCBCT1RIIGFyZSBub3QgYWxsb3dlZC4gKHNlZSBtb2RlIHJlZmVyZW5jZSkgXCIpO1xuICAgIH1cblxuICAgIC8vIGBtb2RlLmxleGVtZXNgIHdhcyB0aGUgb2xkIHN0YW5kYXJkIGJlZm9yZSB3ZSBhZGRlZCBhbmQgbm93IHJlY29tbWVuZFxuICAgIC8vIHVzaW5nIGBrZXl3b3Jkcy4kcGF0dGVybmAgdG8gcGFzcyB0aGUga2V5d29yZCBwYXR0ZXJuXG4gICAga2V5d29yZFBhdHRlcm4gPSBrZXl3b3JkUGF0dGVybiB8fCBtb2RlLmxleGVtZXMgfHwgL1xcdysvO1xuICAgIGNtb2RlLmtleXdvcmRQYXR0ZXJuUmUgPSBsYW5nUmUoa2V5d29yZFBhdHRlcm4sIHRydWUpO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKCFtb2RlLmJlZ2luKSBtb2RlLmJlZ2luID0gL1xcQnxcXGIvO1xuICAgICAgY21vZGUuYmVnaW5SZSA9IGxhbmdSZShtb2RlLmJlZ2luKTtcbiAgICAgIGlmIChtb2RlLmVuZFNhbWVBc0JlZ2luKSBtb2RlLmVuZCA9IG1vZGUuYmVnaW47XG4gICAgICBpZiAoIW1vZGUuZW5kICYmICFtb2RlLmVuZHNXaXRoUGFyZW50KSBtb2RlLmVuZCA9IC9cXEJ8XFxiLztcbiAgICAgIGlmIChtb2RlLmVuZCkgY21vZGUuZW5kUmUgPSBsYW5nUmUobW9kZS5lbmQpO1xuICAgICAgY21vZGUudGVybWluYXRvckVuZCA9IHNvdXJjZShtb2RlLmVuZCkgfHwgJyc7XG4gICAgICBpZiAobW9kZS5lbmRzV2l0aFBhcmVudCAmJiBwYXJlbnQudGVybWluYXRvckVuZCkge1xuICAgICAgICBjbW9kZS50ZXJtaW5hdG9yRW5kICs9IChtb2RlLmVuZCA/ICd8JyA6ICcnKSArIHBhcmVudC50ZXJtaW5hdG9yRW5kO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobW9kZS5pbGxlZ2FsKSBjbW9kZS5pbGxlZ2FsUmUgPSBsYW5nUmUoLyoqIEB0eXBlIHtSZWdFeHAgfCBzdHJpbmd9ICovIChtb2RlLmlsbGVnYWwpKTtcbiAgICBpZiAoIW1vZGUuY29udGFpbnMpIG1vZGUuY29udGFpbnMgPSBbXTtcblxuICAgIG1vZGUuY29udGFpbnMgPSBbXS5jb25jYXQoLi4ubW9kZS5jb250YWlucy5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGV4cGFuZE9yQ2xvbmVNb2RlKGMgPT09ICdzZWxmJyA/IG1vZGUgOiBjKTtcbiAgICB9KSk7XG4gICAgbW9kZS5jb250YWlucy5mb3JFYWNoKGZ1bmN0aW9uKGMpIHsgY29tcGlsZU1vZGUoLyoqIEB0eXBlIE1vZGUgKi8gKGMpLCBjbW9kZSk7IH0pO1xuXG4gICAgaWYgKG1vZGUuc3RhcnRzKSB7XG4gICAgICBjb21waWxlTW9kZShtb2RlLnN0YXJ0cywgcGFyZW50KTtcbiAgICB9XG5cbiAgICBjbW9kZS5tYXRjaGVyID0gYnVpbGRNb2RlUmVnZXgoY21vZGUpO1xuICAgIHJldHVybiBjbW9kZTtcbiAgfVxuXG4gIGlmICghbGFuZ3VhZ2UuY29tcGlsZXJFeHRlbnNpb25zKSBsYW5ndWFnZS5jb21waWxlckV4dGVuc2lvbnMgPSBbXTtcblxuICAvLyBzZWxmIGlzIG5vdCB2YWxpZCBhdCB0aGUgdG9wLWxldmVsXG4gIGlmIChsYW5ndWFnZS5jb250YWlucyAmJiBsYW5ndWFnZS5jb250YWlucy5pbmNsdWRlcygnc2VsZicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRVJSOiBjb250YWlucyBgc2VsZmAgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGUgdG9wLWxldmVsIG9mIGEgbGFuZ3VhZ2UuICBTZWUgZG9jdW1lbnRhdGlvbi5cIik7XG4gIH1cblxuICAvLyB3ZSBuZWVkIGEgbnVsbCBvYmplY3QsIHdoaWNoIGluaGVyaXQgd2lsbCBndWFyYW50ZWVcbiAgbGFuZ3VhZ2UuY2xhc3NOYW1lQWxpYXNlcyA9IGluaGVyaXQobGFuZ3VhZ2UuY2xhc3NOYW1lQWxpYXNlcyB8fCB7fSk7XG5cbiAgcmV0dXJuIGNvbXBpbGVNb2RlKC8qKiBAdHlwZSBNb2RlICovIChsYW5ndWFnZSkpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSBtb2RlIGhhcyBhIGRlcGVuZGVuY3kgb24gaXQncyBwYXJlbnQgb3Igbm90XG4gKlxuICogSWYgYSBtb2RlIGRvZXMgaGF2ZSBhIHBhcmVudCBkZXBlbmRlbmN5IHRoZW4gb2Z0ZW4gd2UgbmVlZCB0byBjbG9uZSBpdCBpZlxuICogaXQncyB1c2VkIGluIG11bHRpcGxlIHBsYWNlcyBzbyB0aGF0IGVhY2ggY29weSBwb2ludHMgdG8gdGhlIGNvcnJlY3QgcGFyZW50LFxuICogd2hlcmUtYXMgbW9kZXMgd2l0aG91dCBhIHBhcmVudCBjYW4gb2Z0ZW4gc2FmZWx5IGJlIHJlLXVzZWQgYXQgdGhlIGJvdHRvbSBvZlxuICogYSBtb2RlIGNoYWluLlxuICpcbiAqIEBwYXJhbSB7TW9kZSB8IG51bGx9IG1vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIGlzIHRoZXJlIGEgZGVwZW5kZW5jeSBvbiB0aGUgcGFyZW50P1xuICogKi9cbmZ1bmN0aW9uIGRlcGVuZGVuY3lPblBhcmVudChtb2RlKSB7XG4gIGlmICghbW9kZSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiBtb2RlLmVuZHNXaXRoUGFyZW50IHx8IGRlcGVuZGVuY3lPblBhcmVudChtb2RlLnN0YXJ0cyk7XG59XG5cbi8qKlxuICogRXhwYW5kcyBhIG1vZGUgb3IgY2xvbmVzIGl0IGlmIG5lY2Vzc2FyeVxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBtb2RlcyB3aXRoIHBhcmVudGFsIGRlcGVuZGVuY2VpcyAoc2VlIG5vdGVzIG9uXG4gKiBgZGVwZW5kZW5jeU9uUGFyZW50YCkgYW5kIGZvciBub2RlcyB0aGF0IGhhdmUgYHZhcmlhbnRzYCAtIHdoaWNoIG11c3QgdGhlbiBiZVxuICogZXhwbG9kZWQgaW50byB0aGVpciBvd24gaW5kaXZpZHVhbCBtb2RlcyBhdCBjb21waWxlIHRpbWUuXG4gKlxuICogQHBhcmFtIHtNb2RlfSBtb2RlXG4gKiBAcmV0dXJucyB7TW9kZSB8IE1vZGVbXX1cbiAqICovXG5mdW5jdGlvbiBleHBhbmRPckNsb25lTW9kZShtb2RlKSB7XG4gIGlmIChtb2RlLnZhcmlhbnRzICYmICFtb2RlLmNhY2hlZFZhcmlhbnRzKSB7XG4gICAgbW9kZS5jYWNoZWRWYXJpYW50cyA9IG1vZGUudmFyaWFudHMubWFwKGZ1bmN0aW9uKHZhcmlhbnQpIHtcbiAgICAgIHJldHVybiBpbmhlcml0KG1vZGUsIHsgdmFyaWFudHM6IG51bGwgfSwgdmFyaWFudCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBFWFBBTkRcbiAgLy8gaWYgd2UgaGF2ZSB2YXJpYW50cyB0aGVuIGVzc2VudGlhbGx5IFwicmVwbGFjZVwiIHRoZSBtb2RlIHdpdGggdGhlIHZhcmlhbnRzXG4gIC8vIHRoaXMgaGFwcGVucyBpbiBjb21waWxlTW9kZSwgd2hlcmUgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbVxuICBpZiAobW9kZS5jYWNoZWRWYXJpYW50cykge1xuICAgIHJldHVybiBtb2RlLmNhY2hlZFZhcmlhbnRzO1xuICB9XG5cbiAgLy8gQ0xPTkVcbiAgLy8gaWYgd2UgaGF2ZSBkZXBlbmRlbmNpZXMgb24gcGFyZW50cyB0aGVuIHdlIG5lZWQgYSB1bmlxdWVcbiAgLy8gaW5zdGFuY2Ugb2Ygb3Vyc2VsdmVzLCBzbyB3ZSBjYW4gYmUgcmV1c2VkIHdpdGggbWFueVxuICAvLyBkaWZmZXJlbnQgcGFyZW50cyB3aXRob3V0IGlzc3VlXG4gIGlmIChkZXBlbmRlbmN5T25QYXJlbnQobW9kZSkpIHtcbiAgICByZXR1cm4gaW5oZXJpdChtb2RlLCB7IHN0YXJ0czogbW9kZS5zdGFydHMgPyBpbmhlcml0KG1vZGUuc3RhcnRzKSA6IG51bGwgfSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmlzRnJvemVuKG1vZGUpKSB7XG4gICAgcmV0dXJuIGluaGVyaXQobW9kZSk7XG4gIH1cblxuICAvLyBubyBzcGVjaWFsIGRlcGVuZGVuY3kgaXNzdWVzLCBqdXN0IHJldHVybiBvdXJzZWx2ZXNcbiAgcmV0dXJuIG1vZGU7XG59XG5cbnZhciB2ZXJzaW9uID0gXCIxMC43LjJcIjtcblxuLy8gQHRzLW5vY2hlY2tcblxuZnVuY3Rpb24gaGFzVmFsdWVPckVtcHR5QXR0cmlidXRlKHZhbHVlKSB7XG4gIHJldHVybiBCb29sZWFuKHZhbHVlIHx8IHZhbHVlID09PSBcIlwiKTtcbn1cblxuZnVuY3Rpb24gQnVpbGRWdWVQbHVnaW4oaGxqcykge1xuICBjb25zdCBDb21wb25lbnQgPSB7XG4gICAgcHJvcHM6IFtcImxhbmd1YWdlXCIsIFwiY29kZVwiLCBcImF1dG9kZXRlY3RcIl0sXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXRlY3RlZExhbmd1YWdlOiBcIlwiLFxuICAgICAgICB1bmtub3duTGFuZ3VhZ2U6IGZhbHNlXG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudW5rbm93bkxhbmd1YWdlKSByZXR1cm4gXCJcIjtcblxuICAgICAgICByZXR1cm4gXCJobGpzIFwiICsgdGhpcy5kZXRlY3RlZExhbmd1YWdlO1xuICAgICAgfSxcbiAgICAgIGhpZ2hsaWdodGVkKCkge1xuICAgICAgICAvLyBubyBpZGVhIHdoYXQgbGFuZ3VhZ2UgdG8gdXNlLCByZXR1cm4gcmF3IGNvZGVcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9EZXRlY3QgJiYgIWhsanMuZ2V0TGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBsYW5ndWFnZSBcIiR7dGhpcy5sYW5ndWFnZX1cIiB5b3Ugc3BlY2lmaWVkIGNvdWxkIG5vdCBiZSBmb3VuZC5gKTtcbiAgICAgICAgICB0aGlzLnVua25vd25MYW5ndWFnZSA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGVzY2FwZUhUTUwodGhpcy5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0RldGVjdCkge1xuICAgICAgICAgIHJlc3VsdCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0ZWRMYW5ndWFnZSA9IHJlc3VsdC5sYW5ndWFnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBobGpzLmhpZ2hsaWdodCh0aGlzLmxhbmd1YWdlLCB0aGlzLmNvZGUsIHRoaXMuaWdub3JlSWxsZWdhbHMpO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0ZWRMYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBhdXRvRGV0ZWN0KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGFuZ3VhZ2UgfHwgaGFzVmFsdWVPckVtcHR5QXR0cmlidXRlKHRoaXMuYXV0b2RldGVjdCk7XG4gICAgICB9LFxuICAgICAgaWdub3JlSWxsZWdhbHMoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gdGhpcyBhdm9pZHMgbmVlZGluZyB0byB1c2UgYSB3aG9sZSBWdWUgY29tcGlsYXRpb24gcGlwZWxpbmUganVzdFxuICAgIC8vIHRvIGJ1aWxkIEhpZ2hsaWdodC5qc1xuICAgIHJlbmRlcihjcmVhdGVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcInByZVwiLCB7fSwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lLFxuICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogdGhpcy5oaWdobGlnaHRlZCB9XG4gICAgICAgIH0pXG4gICAgICBdKTtcbiAgICB9XG4gICAgLy8gdGVtcGxhdGU6IGA8cHJlPjxjb2RlIDpjbGFzcz1cImNsYXNzTmFtZVwiIHYtaHRtbD1cImhpZ2hsaWdodGVkXCI+PC9jb2RlPjwvcHJlPmBcbiAgfTtcblxuICBjb25zdCBWdWVQbHVnaW4gPSB7XG4gICAgaW5zdGFsbChWdWUpIHtcbiAgICAgIFZ1ZS5jb21wb25lbnQoJ2hpZ2hsaWdodGpzJywgQ29tcG9uZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgQ29tcG9uZW50LCBWdWVQbHVnaW4gfTtcbn1cblxuLyogcGx1Z2luIGl0c2VsZiAqL1xuXG4vKiogQHR5cGUge0hMSlNQbHVnaW59ICovXG5jb25zdCBtZXJnZUhUTUxQbHVnaW4gPSB7XG4gIFwiYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudFwiOiAoeyBlbCwgcmVzdWx0LCB0ZXh0IH0pID0+IHtcbiAgICBjb25zdCBvcmlnaW5hbFN0cmVhbSA9IG5vZGVTdHJlYW0oZWwpO1xuICAgIGlmICghb3JpZ2luYWxTdHJlYW0ubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCByZXN1bHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdWx0Tm9kZS5pbm5lckhUTUwgPSByZXN1bHQudmFsdWU7XG4gICAgcmVzdWx0LnZhbHVlID0gbWVyZ2VTdHJlYW1zKG9yaWdpbmFsU3RyZWFtLCBub2RlU3RyZWFtKHJlc3VsdE5vZGUpLCB0ZXh0KTtcbiAgfVxufTtcblxuLyogU3RyZWFtIG1lcmdpbmcgc3VwcG9ydCBmdW5jdGlvbnMgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBFdmVudFxuICogQHByb3BlcnR5IHsnc3RhcnQnfCdzdG9wJ30gZXZlbnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwcm9wZXJ0eSB7Tm9kZX0gbm9kZVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKi9cbmZ1bmN0aW9uIHRhZyhub2RlKSB7XG4gIHJldHVybiBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKi9cbmZ1bmN0aW9uIG5vZGVTdHJlYW0obm9kZSkge1xuICAvKiogQHR5cGUgRXZlbnRbXSAqL1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgKGZ1bmN0aW9uIF9ub2RlU3RyZWFtKG5vZGUsIG9mZnNldCkge1xuICAgIGZvciAobGV0IGNoaWxkID0gbm9kZS5maXJzdENoaWxkOyBjaGlsZDsgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZykge1xuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIG9mZnNldCArPSBjaGlsZC5ub2RlVmFsdWUubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdGFydCcsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgbm9kZTogY2hpbGRcbiAgICAgICAgfSk7XG4gICAgICAgIG9mZnNldCA9IF9ub2RlU3RyZWFtKGNoaWxkLCBvZmZzZXQpO1xuICAgICAgICAvLyBQcmV2ZW50IHZvaWQgZWxlbWVudHMgZnJvbSBoYXZpbmcgYW4gZW5kIHRhZyB0aGF0IHdvdWxkIGFjdHVhbGx5XG4gICAgICAgIC8vIGRvdWJsZSB0aGVtIGluIHRoZSBvdXRwdXQuIFRoZXJlIGFyZSBtb3JlIHZvaWQgZWxlbWVudHMgaW4gSFRNTFxuICAgICAgICAvLyBidXQgd2UgbGlzdCBvbmx5IHRob3NlIHJlYWxpc3RpY2FsbHkgZXhwZWN0ZWQgaW4gY29kZSBkaXNwbGF5LlxuICAgICAgICBpZiAoIXRhZyhjaGlsZCkubWF0Y2goL2JyfGhyfGltZ3xpbnB1dC8pKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6ICdzdG9wJyxcbiAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgbm9kZTogY2hpbGRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9KShub2RlLCAwKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb3JpZ2luYWwgLSB0aGUgb3JpZ2luYWwgc3RyZWFtXG4gKiBAcGFyYW0ge2FueX0gaGlnaGxpZ2h0ZWQgLSBzdHJlYW0gb2YgdGhlIGhpZ2hsaWdodGVkIHNvdXJjZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gdGhlIG9yaWdpbmFsIHNvdXJjZSBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTdHJlYW1zKG9yaWdpbmFsLCBoaWdobGlnaHRlZCwgdmFsdWUpIHtcbiAgbGV0IHByb2Nlc3NlZCA9IDA7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgY29uc3Qgbm9kZVN0YWNrID0gW107XG5cbiAgZnVuY3Rpb24gc2VsZWN0U3RyZWFtKCkge1xuICAgIGlmICghb3JpZ2luYWwubGVuZ3RoIHx8ICFoaWdobGlnaHRlZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5sZW5ndGggPyBvcmlnaW5hbCA6IGhpZ2hsaWdodGVkO1xuICAgIH1cbiAgICBpZiAob3JpZ2luYWxbMF0ub2Zmc2V0ICE9PSBoaWdobGlnaHRlZFswXS5vZmZzZXQpIHtcbiAgICAgIHJldHVybiAob3JpZ2luYWxbMF0ub2Zmc2V0IDwgaGlnaGxpZ2h0ZWRbMF0ub2Zmc2V0KSA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICBUbyBhdm9pZCBzdGFydGluZyB0aGUgc3RyZWFtIGp1c3QgYmVmb3JlIGl0IHNob3VsZCBzdG9wIHRoZSBvcmRlciBpc1xuICAgIGVuc3VyZWQgdGhhdCBvcmlnaW5hbCBhbHdheXMgc3RhcnRzIGZpcnN0IGFuZCBjbG9zZXMgbGFzdDpcblxuICAgIGlmIChldmVudDEgPT0gJ3N0YXJ0JyAmJiBldmVudDIgPT0gJ3N0YXJ0JylcbiAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICBpZiAoZXZlbnQxID09ICdzdGFydCcgJiYgZXZlbnQyID09ICdzdG9wJylcbiAgICAgIHJldHVybiBoaWdobGlnaHRlZDtcbiAgICBpZiAoZXZlbnQxID09ICdzdG9wJyAmJiBldmVudDIgPT0gJ3N0YXJ0JylcbiAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICBpZiAoZXZlbnQxID09ICdzdG9wJyAmJiBldmVudDIgPT0gJ3N0b3AnKVxuICAgICAgcmV0dXJuIGhpZ2hsaWdodGVkO1xuXG4gICAgLi4uIHdoaWNoIGlzIGNvbGxhcHNlZCB0bzpcbiAgICAqL1xuICAgIHJldHVybiBoaWdobGlnaHRlZFswXS5ldmVudCA9PT0gJ3N0YXJ0JyA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBmdW5jdGlvbiBvcGVuKG5vZGUpIHtcbiAgICAvKiogQHBhcmFtIHtBdHRyfSBhdHRyICovXG4gICAgZnVuY3Rpb24gYXR0cmlidXRlU3RyaW5nKGF0dHIpIHtcbiAgICAgIHJldHVybiAnICcgKyBhdHRyLm5vZGVOYW1lICsgJz1cIicgKyBlc2NhcGVIVE1MKGF0dHIudmFsdWUpICsgJ1wiJztcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJlc3VsdCArPSAnPCcgKyB0YWcobm9kZSkgKyBbXS5tYXAuY2FsbChub2RlLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZVN0cmluZykuam9pbignJykgKyAnPic7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBmdW5jdGlvbiBjbG9zZShub2RlKSB7XG4gICAgcmVzdWx0ICs9ICc8LycgKyB0YWcobm9kZSkgKyAnPic7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlcihldmVudCkge1xuICAgIChldmVudC5ldmVudCA9PT0gJ3N0YXJ0JyA/IG9wZW4gOiBjbG9zZSkoZXZlbnQubm9kZSk7XG4gIH1cblxuICB3aGlsZSAob3JpZ2luYWwubGVuZ3RoIHx8IGhpZ2hsaWdodGVkLmxlbmd0aCkge1xuICAgIGxldCBzdHJlYW0gPSBzZWxlY3RTdHJlYW0oKTtcbiAgICByZXN1bHQgKz0gZXNjYXBlSFRNTCh2YWx1ZS5zdWJzdHJpbmcocHJvY2Vzc2VkLCBzdHJlYW1bMF0ub2Zmc2V0KSk7XG4gICAgcHJvY2Vzc2VkID0gc3RyZWFtWzBdLm9mZnNldDtcbiAgICBpZiAoc3RyZWFtID09PSBvcmlnaW5hbCkge1xuICAgICAgLypcbiAgICAgIE9uIGFueSBvcGVuaW5nIG9yIGNsb3NpbmcgdGFnIG9mIHRoZSBvcmlnaW5hbCBtYXJrdXAgd2UgZmlyc3QgY2xvc2VcbiAgICAgIHRoZSBlbnRpcmUgaGlnaGxpZ2h0ZWQgbm9kZSBzdGFjaywgdGhlbiByZW5kZXIgdGhlIG9yaWdpbmFsIHRhZyBhbG9uZ1xuICAgICAgd2l0aCBhbGwgdGhlIGZvbGxvd2luZyBvcmlnaW5hbCB0YWdzIGF0IHRoZSBzYW1lIG9mZnNldCBhbmQgdGhlblxuICAgICAgcmVvcGVuIGFsbCB0aGUgdGFncyBvbiB0aGUgaGlnaGxpZ2h0ZWQgc3RhY2suXG4gICAgICAqL1xuICAgICAgbm9kZVN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKGNsb3NlKTtcbiAgICAgIGRvIHtcbiAgICAgICAgcmVuZGVyKHN0cmVhbS5zcGxpY2UoMCwgMSlbMF0pO1xuICAgICAgICBzdHJlYW0gPSBzZWxlY3RTdHJlYW0oKTtcbiAgICAgIH0gd2hpbGUgKHN0cmVhbSA9PT0gb3JpZ2luYWwgJiYgc3RyZWFtLmxlbmd0aCAmJiBzdHJlYW1bMF0ub2Zmc2V0ID09PSBwcm9jZXNzZWQpO1xuICAgICAgbm9kZVN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKG9wZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RyZWFtWzBdLmV2ZW50ID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG5vZGVTdGFjay5wdXNoKHN0cmVhbVswXS5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVTdGFjay5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJlbmRlcihzdHJlYW0uc3BsaWNlKDAsIDEpWzBdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCArIGVzY2FwZUhUTUwodmFsdWUuc3Vic3RyKHByb2Nlc3NlZCkpO1xufVxuXG4vKlxuXG5Gb3IgdGhlIHJlYXNvbmluZyBiZWhpbmQgdGhpcyBwbGVhc2Ugc2VlOlxuaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjg4MCNpc3N1ZWNvbW1lbnQtNzQ3Mjc1NDE5XG5cbiovXG5cbi8qKlxuICogQHR5cGUge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4+fVxuICovXG5jb25zdCBzZWVuRGVwcmVjYXRpb25zID0ge307XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHthbnl9IGFyZ3NcbiAqL1xuY29uc3Qgd2FybiA9IChtZXNzYWdlLCAuLi5hcmdzKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBXQVJOOiAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5jb25zdCBkZXByZWNhdGVkID0gKHZlcnNpb24sIG1lc3NhZ2UpID0+IHtcbiAgaWYgKHNlZW5EZXByZWNhdGlvbnNbYCR7dmVyc2lvbn0vJHttZXNzYWdlfWBdKSByZXR1cm47XG5cbiAgY29uc29sZS5sb2coYERlcHJlY2F0ZWQgYXMgb2YgJHt2ZXJzaW9ufS4gJHttZXNzYWdlfWApO1xuICBzZWVuRGVwcmVjYXRpb25zW2Ake3ZlcnNpb259LyR7bWVzc2FnZX1gXSA9IHRydWU7XG59O1xuXG4vKlxuU3ludGF4IGhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGF1dG9kZXRlY3Rpb24uXG5odHRwczovL2hpZ2hsaWdodGpzLm9yZy9cbiovXG5cbmNvbnN0IGVzY2FwZSQxID0gZXNjYXBlSFRNTDtcbmNvbnN0IGluaGVyaXQkMSA9IGluaGVyaXQ7XG5jb25zdCBOT19NQVRDSCA9IFN5bWJvbChcIm5vbWF0Y2hcIik7XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGhsanMgLSBvYmplY3QgdGhhdCBpcyBleHRlbmRlZCAobGVnYWN5KVxuICogQHJldHVybnMge0hMSlNBcGl9XG4gKi9cbmNvbnN0IEhMSlMgPSBmdW5jdGlvbihobGpzKSB7XG4gIC8vIEdsb2JhbCBpbnRlcm5hbCB2YXJpYWJsZXMgdXNlZCB3aXRoaW4gdGhlIGhpZ2hsaWdodC5qcyBsaWJyYXJ5LlxuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIExhbmd1YWdlPn0gKi9cbiAgY29uc3QgbGFuZ3VhZ2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSAqL1xuICBjb25zdCBhbGlhc2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLyoqIEB0eXBlIHtITEpTUGx1Z2luW119ICovXG4gIGNvbnN0IHBsdWdpbnMgPSBbXTtcblxuICAvLyBzYWZlL3Byb2R1Y3Rpb24gbW9kZSAtIHN3YWxsb3dzIG1vcmUgZXJyb3JzLCB0cmllcyB0byBrZWVwIHJ1bm5pbmdcbiAgLy8gZXZlbiBpZiBhIHNpbmdsZSBzeW50YXggb3IgcGFyc2UgaGl0cyBhIGZhdGFsIGVycm9yXG4gIGxldCBTQUZFX01PREUgPSB0cnVlO1xuICBjb25zdCBmaXhNYXJrdXBSZSA9IC8oXig8W14+XSs+fFxcdHwpK3xcXG4pL2dtO1xuICBjb25zdCBMQU5HVUFHRV9OT1RfRk9VTkQgPSBcIkNvdWxkIG5vdCBmaW5kIHRoZSBsYW5ndWFnZSAne30nLCBkaWQgeW91IGZvcmdldCB0byBsb2FkL2luY2x1ZGUgYSBsYW5ndWFnZSBtb2R1bGU/XCI7XG4gIC8qKiBAdHlwZSB7TGFuZ3VhZ2V9ICovXG4gIGNvbnN0IFBMQUlOVEVYVF9MQU5HVUFHRSA9IHsgZGlzYWJsZUF1dG9kZXRlY3Q6IHRydWUsIG5hbWU6ICdQbGFpbiB0ZXh0JywgY29udGFpbnM6IFtdIH07XG5cbiAgLy8gR2xvYmFsIG9wdGlvbnMgdXNlZCB3aGVuIHdpdGhpbiBleHRlcm5hbCBBUElzLiBUaGlzIGlzIG1vZGlmaWVkIHdoZW5cbiAgLy8gY2FsbGluZyB0aGUgYGhsanMuY29uZmlndXJlYCBmdW5jdGlvbi5cbiAgLyoqIEB0eXBlIEhMSlNPcHRpb25zICovXG4gIGxldCBvcHRpb25zID0ge1xuICAgIG5vSGlnaGxpZ2h0UmU6IC9eKG5vLT9oaWdobGlnaHQpJC9pLFxuICAgIGxhbmd1YWdlRGV0ZWN0UmU6IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pLFxuICAgIGNsYXNzUHJlZml4OiAnaGxqcy0nLFxuICAgIHRhYlJlcGxhY2U6IG51bGwsXG4gICAgdXNlQlI6IGZhbHNlLFxuICAgIGxhbmd1YWdlczogbnVsbCxcbiAgICAvLyBiZXRhIGNvbmZpZ3VyYXRpb24gb3B0aW9ucywgc3ViamVjdCB0byBjaGFuZ2UsIHdlbGNvbWUgdG8gZGlzY3Vzc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzEwODZcbiAgICBfX2VtaXR0ZXI6IFRva2VuVHJlZUVtaXR0ZXJcbiAgfTtcblxuICAvKiBVdGlsaXR5IGZ1bmN0aW9ucyAqL1xuXG4gIC8qKlxuICAgKiBUZXN0cyBhIGxhbmd1YWdlIG5hbWUgdG8gc2VlIGlmIGhpZ2hsaWdodGluZyBzaG91bGQgYmUgc2tpcHBlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBzaG91bGROb3RIaWdobGlnaHQobGFuZ3VhZ2VOYW1lKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubm9IaWdobGlnaHRSZS50ZXN0KGxhbmd1YWdlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIaWdobGlnaHRlZEhUTUxFbGVtZW50fSBibG9jayAtIHRoZSBIVE1MIGVsZW1lbnQgdG8gZGV0ZXJtaW5lIGxhbmd1YWdlIGZvclxuICAgKi9cbiAgZnVuY3Rpb24gYmxvY2tMYW5ndWFnZShibG9jaykge1xuICAgIGxldCBjbGFzc2VzID0gYmxvY2suY2xhc3NOYW1lICsgJyAnO1xuXG4gICAgY2xhc3NlcyArPSBibG9jay5wYXJlbnROb2RlID8gYmxvY2sucGFyZW50Tm9kZS5jbGFzc05hbWUgOiAnJztcblxuICAgIC8vIGxhbmd1YWdlLSogdGFrZXMgcHJlY2VkZW5jZSBvdmVyIG5vbi1wcmVmaXhlZCBjbGFzcyBuYW1lcy5cbiAgICBjb25zdCBtYXRjaCA9IG9wdGlvbnMubGFuZ3VhZ2VEZXRlY3RSZS5leGVjKGNsYXNzZXMpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZShtYXRjaFsxXSk7XG4gICAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICAgIHdhcm4oTEFOR1VBR0VfTk9UX0ZPVU5ELnJlcGxhY2UoXCJ7fVwiLCBtYXRjaFsxXSkpO1xuICAgICAgICB3YXJuKFwiRmFsbGluZyBiYWNrIHRvIG5vLWhpZ2hsaWdodCBtb2RlIGZvciB0aGlzIGJsb2NrLlwiLCBibG9jayk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZ3VhZ2UgPyBtYXRjaFsxXSA6ICduby1oaWdobGlnaHQnO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgLmZpbmQoKF9jbGFzcykgPT4gc2hvdWxkTm90SGlnaGxpZ2h0KF9jbGFzcykgfHwgZ2V0TGFuZ3VhZ2UoX2NsYXNzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29yZSBoaWdobGlnaHRpbmcgZnVuY3Rpb24uXG4gICAqXG4gICAqIE9MRCBBUElcbiAgICogaGlnaGxpZ2h0KGxhbmcsIGNvZGUsIGlnbm9yZUlsbGVnYWxzLCBjb250aW51YXRpb24pXG4gICAqXG4gICAqIE5FVyBBUElcbiAgICogaGlnaGxpZ2h0KGNvZGUsIHtsYW5nLCBpZ25vcmVJbGxlZ2Fsc30pXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlT3JsYW5ndWFnZU5hbWUgLSB0aGUgbGFuZ3VhZ2UgdG8gdXNlIGZvciBoaWdobGlnaHRpbmdcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBIaWdobGlnaHRPcHRpb25zfSBvcHRpb25zT3JDb2RlIC0gdGhlIGNvZGUgdG8gaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZUlsbGVnYWxzXSAtIHdoZXRoZXIgdG8gaWdub3JlIGlsbGVnYWwgbWF0Y2hlcywgZGVmYXVsdCBpcyB0byBiYWlsXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlfSBbY29udGludWF0aW9uXSAtIGN1cnJlbnQgY29udGludWF0aW9uIG1vZGUsIGlmIGFueVxuICAgKlxuICAgKiBAcmV0dXJucyB7SGlnaGxpZ2h0UmVzdWx0fSBSZXN1bHQgLSBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSByZXN1bHRcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGxhbmd1YWdlIC0gdGhlIGxhbmd1YWdlIG5hbWVcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IHJlbGV2YW5jZSAtIHRoZSByZWxldmFuY2Ugc2NvcmVcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHZhbHVlIC0gdGhlIGhpZ2hsaWdodGVkIEhUTUwgY29kZVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29kZSAtIHRoZSBvcmlnaW5hbCByYXcgY29kZVxuICAgKiBAcHJvcGVydHkge0NvbXBpbGVkTW9kZX0gdG9wIC0gdG9wIG9mIHRoZSBjdXJyZW50IG1vZGUgc3RhY2tcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBpbGxlZ2FsIC0gaW5kaWNhdGVzIHdoZXRoZXIgYW55IGlsbGVnYWwgbWF0Y2hlcyB3ZXJlIGZvdW5kXG4gICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodChjb2RlT3JsYW5ndWFnZU5hbWUsIG9wdGlvbnNPckNvZGUsIGlnbm9yZUlsbGVnYWxzLCBjb250aW51YXRpb24pIHtcbiAgICBsZXQgY29kZSA9IFwiXCI7XG4gICAgbGV0IGxhbmd1YWdlTmFtZSA9IFwiXCI7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zT3JDb2RlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb2RlID0gY29kZU9ybGFuZ3VhZ2VOYW1lO1xuICAgICAgaWdub3JlSWxsZWdhbHMgPSBvcHRpb25zT3JDb2RlLmlnbm9yZUlsbGVnYWxzO1xuICAgICAgbGFuZ3VhZ2VOYW1lID0gb3B0aW9uc09yQ29kZS5sYW5ndWFnZTtcbiAgICAgIC8vIGNvbnRpbnVhdGlvbiBub3Qgc3VwcG9ydGVkIGF0IGFsbCB2aWEgdGhlIG5ldyBBUElcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgICAgIGNvbnRpbnVhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb2xkIEFQSVxuICAgICAgZGVwcmVjYXRlZChcIjEwLjcuMFwiLCBcImhpZ2hsaWdodChsYW5nLCBjb2RlLCAuLi5hcmdzKSBoYXMgYmVlbiBkZXByZWNhdGVkLlwiKTtcbiAgICAgIGRlcHJlY2F0ZWQoXCIxMC43LjBcIiwgXCJQbGVhc2UgdXNlIGhpZ2hsaWdodChjb2RlLCBvcHRpb25zKSBpbnN0ZWFkLlxcbmh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzIyNzdcIik7XG4gICAgICBsYW5ndWFnZU5hbWUgPSBjb2RlT3JsYW5ndWFnZU5hbWU7XG4gICAgICBjb2RlID0gb3B0aW9uc09yQ29kZTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge0JlZm9yZUhpZ2hsaWdodENvbnRleHR9ICovXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIGNvZGUsXG4gICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VOYW1lXG4gICAgfTtcbiAgICAvLyB0aGUgcGx1Z2luIGNhbiBjaGFuZ2UgdGhlIGRlc2lyZWQgbGFuZ3VhZ2Ugb3IgdGhlIGNvZGUgdG8gYmUgaGlnaGxpZ2h0ZWRcbiAgICAvLyBqdXN0IGJlIGNoYW5naW5nIHRoZSBvYmplY3QgaXQgd2FzIHBhc3NlZFxuICAgIGZpcmUoXCJiZWZvcmU6aGlnaGxpZ2h0XCIsIGNvbnRleHQpO1xuXG4gICAgLy8gYSBiZWZvcmUgcGx1Z2luIGNhbiB1c3VycCB0aGUgcmVzdWx0IGNvbXBsZXRlbHkgYnkgcHJvdmlkaW5nIGl0J3Mgb3duXG4gICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBldmVuIG5lZWQgdG8gY2FsbCBoaWdobGlnaHRcbiAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LnJlc3VsdFxuICAgICAgPyBjb250ZXh0LnJlc3VsdFxuICAgICAgOiBfaGlnaGxpZ2h0KGNvbnRleHQubGFuZ3VhZ2UsIGNvbnRleHQuY29kZSwgaWdub3JlSWxsZWdhbHMsIGNvbnRpbnVhdGlvbik7XG5cbiAgICByZXN1bHQuY29kZSA9IGNvbnRleHQuY29kZTtcbiAgICAvLyB0aGUgcGx1Z2luIGNhbiBjaGFuZ2UgYW55dGhpbmcgaW4gcmVzdWx0IHRvIHN1aXRlIGl0XG4gICAgZmlyZShcImFmdGVyOmhpZ2hsaWdodFwiLCByZXN1bHQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcml2YXRlIGhpZ2hsaWdodCB0aGF0J3MgdXNlZCBpbnRlcm5hbGx5IGFuZCBkb2VzIG5vdCBmaXJlIGNhbGxiYWNrc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VOYW1lIC0gdGhlIGxhbmd1YWdlIHRvIHVzZSBmb3IgaGlnaGxpZ2h0aW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlVG9IaWdobGlnaHQgLSB0aGUgY29kZSB0byBoaWdobGlnaHRcbiAgICogQHBhcmFtIHtib29sZWFuP30gW2lnbm9yZUlsbGVnYWxzXSAtIHdoZXRoZXIgdG8gaWdub3JlIGlsbGVnYWwgbWF0Y2hlcywgZGVmYXVsdCBpcyB0byBiYWlsXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlP30gW2NvbnRpbnVhdGlvbl0gLSBjdXJyZW50IGNvbnRpbnVhdGlvbiBtb2RlLCBpZiBhbnlcbiAgICogQHJldHVybnMge0hpZ2hsaWdodFJlc3VsdH0gLSByZXN1bHQgb2YgdGhlIGhpZ2hsaWdodCBvcGVyYXRpb25cbiAgKi9cbiAgZnVuY3Rpb24gX2hpZ2hsaWdodChsYW5ndWFnZU5hbWUsIGNvZGVUb0hpZ2hsaWdodCwgaWdub3JlSWxsZWdhbHMsIGNvbnRpbnVhdGlvbikge1xuICAgIC8qKlxuICAgICAqIFJldHVybiBrZXl3b3JkIGRhdGEgaWYgYSBtYXRjaCBpcyBhIGtleXdvcmRcbiAgICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZX0gbW9kZSAtIGN1cnJlbnQgbW9kZVxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2ggLSByZWdleHAgbWF0Y2ggZGF0YVxuICAgICAqIEByZXR1cm5zIHtLZXl3b3JkRGF0YSB8IGZhbHNlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGtleXdvcmREYXRhKG1vZGUsIG1hdGNoKSB7XG4gICAgICBjb25zdCBtYXRjaFRleHQgPSBsYW5ndWFnZS5jYXNlX2luc2Vuc2l0aXZlID8gbWF0Y2hbMF0udG9Mb3dlckNhc2UoKSA6IG1hdGNoWzBdO1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2RlLmtleXdvcmRzLCBtYXRjaFRleHQpICYmIG1vZGUua2V5d29yZHNbbWF0Y2hUZXh0XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzS2V5d29yZHMoKSB7XG4gICAgICBpZiAoIXRvcC5rZXl3b3Jkcykge1xuICAgICAgICBlbWl0dGVyLmFkZFRleHQobW9kZUJ1ZmZlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICB0b3Aua2V5d29yZFBhdHRlcm5SZS5sYXN0SW5kZXggPSAwO1xuICAgICAgbGV0IG1hdGNoID0gdG9wLmtleXdvcmRQYXR0ZXJuUmUuZXhlYyhtb2RlQnVmZmVyKTtcbiAgICAgIGxldCBidWYgPSBcIlwiO1xuXG4gICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgYnVmICs9IG1vZGVCdWZmZXIuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBkYXRhID0ga2V5d29yZERhdGEodG9wLCBtYXRjaCk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgY29uc3QgW2tpbmQsIGtleXdvcmRSZWxldmFuY2VdID0gZGF0YTtcbiAgICAgICAgICBlbWl0dGVyLmFkZFRleHQoYnVmKTtcbiAgICAgICAgICBidWYgPSBcIlwiO1xuXG4gICAgICAgICAgcmVsZXZhbmNlICs9IGtleXdvcmRSZWxldmFuY2U7XG4gICAgICAgICAgaWYgKGtpbmQuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgICAgIC8vIF8gaW1wbGllZCBmb3IgcmVsZXZhbmNlIG9ubHksIGRvIG5vdCBoaWdobGlnaHRcbiAgICAgICAgICAgIC8vIGJ5IGFwcGx5aW5nIGEgY2xhc3MgbmFtZVxuICAgICAgICAgICAgYnVmICs9IG1hdGNoWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzcyA9IGxhbmd1YWdlLmNsYXNzTmFtZUFsaWFzZXNba2luZF0gfHwga2luZDtcbiAgICAgICAgICAgIGVtaXR0ZXIuYWRkS2V5d29yZChtYXRjaFswXSwgY3NzQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidWYgKz0gbWF0Y2hbMF07XG4gICAgICAgIH1cbiAgICAgICAgbGFzdEluZGV4ID0gdG9wLmtleXdvcmRQYXR0ZXJuUmUubGFzdEluZGV4O1xuICAgICAgICBtYXRjaCA9IHRvcC5rZXl3b3JkUGF0dGVyblJlLmV4ZWMobW9kZUJ1ZmZlcik7XG4gICAgICB9XG4gICAgICBidWYgKz0gbW9kZUJ1ZmZlci5zdWJzdHIobGFzdEluZGV4KTtcbiAgICAgIGVtaXR0ZXIuYWRkVGV4dChidWYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NTdWJMYW5ndWFnZSgpIHtcbiAgICAgIGlmIChtb2RlQnVmZmVyID09PSBcIlwiKSByZXR1cm47XG4gICAgICAvKiogQHR5cGUgSGlnaGxpZ2h0UmVzdWx0ICovXG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiB0b3Auc3ViTGFuZ3VhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzW3RvcC5zdWJMYW5ndWFnZV0pIHtcbiAgICAgICAgICBlbWl0dGVyLmFkZFRleHQobW9kZUJ1ZmZlcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IF9oaWdobGlnaHQodG9wLnN1Ykxhbmd1YWdlLCBtb2RlQnVmZmVyLCB0cnVlLCBjb250aW51YXRpb25zW3RvcC5zdWJMYW5ndWFnZV0pO1xuICAgICAgICBjb250aW51YXRpb25zW3RvcC5zdWJMYW5ndWFnZV0gPSAvKiogQHR5cGUge0NvbXBpbGVkTW9kZX0gKi8gKHJlc3VsdC50b3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gaGlnaGxpZ2h0QXV0byhtb2RlQnVmZmVyLCB0b3Auc3ViTGFuZ3VhZ2UubGVuZ3RoID8gdG9wLnN1Ykxhbmd1YWdlIDogbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvdW50aW5nIGVtYmVkZGVkIGxhbmd1YWdlIHNjb3JlIHRvd2FyZHMgdGhlIGhvc3QgbGFuZ3VhZ2UgbWF5IGJlIGRpc2FibGVkXG4gICAgICAvLyB3aXRoIHplcm9pbmcgdGhlIGNvbnRhaW5pbmcgbW9kZSByZWxldmFuY2UuIFVzZSBjYXNlIGluIHBvaW50IGlzIE1hcmtkb3duIHRoYXRcbiAgICAgIC8vIGFsbG93cyBYTUwgZXZlcnl3aGVyZSBhbmQgbWFrZXMgZXZlcnkgWE1MIHNuaXBwZXQgdG8gaGF2ZSBhIG11Y2ggbGFyZ2VyIE1hcmtkb3duXG4gICAgICAvLyBzY29yZS5cbiAgICAgIGlmICh0b3AucmVsZXZhbmNlID4gMCkge1xuICAgICAgICByZWxldmFuY2UgKz0gcmVzdWx0LnJlbGV2YW5jZTtcbiAgICAgIH1cbiAgICAgIGVtaXR0ZXIuYWRkU3VibGFuZ3VhZ2UocmVzdWx0LmVtaXR0ZXIsIHJlc3VsdC5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0J1ZmZlcigpIHtcbiAgICAgIGlmICh0b3Auc3ViTGFuZ3VhZ2UgIT0gbnVsbCkge1xuICAgICAgICBwcm9jZXNzU3ViTGFuZ3VhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3NLZXl3b3JkcygpO1xuICAgICAgfVxuICAgICAgbW9kZUJ1ZmZlciA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW9kZX0gbW9kZSAtIG5ldyBtb2RlIHRvIHN0YXJ0XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RhcnROZXdNb2RlKG1vZGUpIHtcbiAgICAgIGlmIChtb2RlLmNsYXNzTmFtZSkge1xuICAgICAgICBlbWl0dGVyLm9wZW5Ob2RlKGxhbmd1YWdlLmNsYXNzTmFtZUFsaWFzZXNbbW9kZS5jbGFzc05hbWVdIHx8IG1vZGUuY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICAgIHRvcCA9IE9iamVjdC5jcmVhdGUobW9kZSwgeyBwYXJlbnQ6IHsgdmFsdWU6IHRvcCB9IH0pO1xuICAgICAgcmV0dXJuIHRvcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZSB9IG1vZGUgLSB0aGUgbW9kZSB0byBwb3RlbnRpYWxseSBlbmRcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cE1hdGNoQXJyYXl9IG1hdGNoIC0gdGhlIGxhdGVzdCBtYXRjaFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaFBsdXNSZW1haW5kZXIgLSBtYXRjaCBwbHVzIHJlbWFpbmRlciBvZiBjb250ZW50XG4gICAgICogQHJldHVybnMge0NvbXBpbGVkTW9kZSB8IHZvaWR9IC0gdGhlIG5leHQgbW9kZSwgb3IgaWYgdm9pZCBjb250aW51ZSBvbiBpbiBjdXJyZW50IG1vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlbmRPZk1vZGUobW9kZSwgbWF0Y2gsIG1hdGNoUGx1c1JlbWFpbmRlcikge1xuICAgICAgbGV0IG1hdGNoZWQgPSBzdGFydHNXaXRoKG1vZGUuZW5kUmUsIG1hdGNoUGx1c1JlbWFpbmRlcik7XG5cbiAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgIGlmIChtb2RlW1wib246ZW5kXCJdKSB7XG4gICAgICAgICAgY29uc3QgcmVzcCA9IG5ldyBSZXNwb25zZShtb2RlKTtcbiAgICAgICAgICBtb2RlW1wib246ZW5kXCJdKG1hdGNoLCByZXNwKTtcbiAgICAgICAgICBpZiAocmVzcC5pc01hdGNoSWdub3JlZCkgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICB3aGlsZSAobW9kZS5lbmRzUGFyZW50ICYmIG1vZGUucGFyZW50KSB7XG4gICAgICAgICAgICBtb2RlID0gbW9kZS5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBldmVuIGlmIG9uOmVuZCBmaXJlcyBhbiBgaWdub3JlYCBpdCdzIHN0aWxsIHBvc3NpYmxlXG4gICAgICAvLyB0aGF0IHdlIG1pZ2h0IHRyaWdnZXIgdGhlIGVuZCBub2RlIGJlY2F1c2Ugb2YgYSBwYXJlbnQgbW9kZVxuICAgICAgaWYgKG1vZGUuZW5kc1dpdGhQYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIGVuZE9mTW9kZShtb2RlLnBhcmVudCwgbWF0Y2gsIG1hdGNoUGx1c1JlbWFpbmRlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIG1hdGNoaW5nIGJ1dCB0aGVuIGlnbm9yaW5nIGEgc2VxdWVuY2Ugb2YgdGV4dFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxleGVtZSAtIHN0cmluZyBjb250YWluaW5nIGZ1bGwgbWF0Y2ggdGV4dFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvSWdub3JlKGxleGVtZSkge1xuICAgICAgaWYgKHRvcC5tYXRjaGVyLnJlZ2V4SW5kZXggPT09IDApIHtcbiAgICAgICAgLy8gbm8gbW9yZSByZWdleHMgdG8gcG90ZW50aWFsbHkgbWF0Y2ggaGVyZSwgc28gd2UgbW92ZSB0aGUgY3Vyc29yIGZvcndhcmQgb25lXG4gICAgICAgIC8vIHNwYWNlXG4gICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lWzBdO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIG5lZWQgdG8gbW92ZSB0aGUgY3Vyc29yLCB3ZSBzdGlsbCBoYXZlIGFkZGl0aW9uYWwgcmVnZXhlcyB0byB0cnkgYW5kXG4gICAgICAgIC8vIG1hdGNoIGF0IHRoaXMgdmVyeSBzcG90XG4gICAgICAgIHJlc3VtZVNjYW5BdFNhbWVQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgc3RhcnQgb2YgYSBuZXcgcG90ZW50aWFsIG1vZGUgbWF0Y2hcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RW5oYW5jZWRNYXRjaH0gbWF0Y2ggLSB0aGUgY3VycmVudCBtYXRjaFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGhvdyBmYXIgdG8gYWR2YW5jZSB0aGUgcGFyc2UgY3Vyc29yXG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9CZWdpbk1hdGNoKG1hdGNoKSB7XG4gICAgICBjb25zdCBsZXhlbWUgPSBtYXRjaFswXTtcbiAgICAgIGNvbnN0IG5ld01vZGUgPSBtYXRjaC5ydWxlO1xuXG4gICAgICBjb25zdCByZXNwID0gbmV3IFJlc3BvbnNlKG5ld01vZGUpO1xuICAgICAgLy8gZmlyc3QgaW50ZXJuYWwgYmVmb3JlIGNhbGxiYWNrcywgdGhlbiB0aGUgcHVibGljIG9uZXNcbiAgICAgIGNvbnN0IGJlZm9yZUNhbGxiYWNrcyA9IFtuZXdNb2RlLl9fYmVmb3JlQmVnaW4sIG5ld01vZGVbXCJvbjpiZWdpblwiXV07XG4gICAgICBmb3IgKGNvbnN0IGNiIG9mIGJlZm9yZUNhbGxiYWNrcykge1xuICAgICAgICBpZiAoIWNiKSBjb250aW51ZTtcbiAgICAgICAgY2IobWF0Y2gsIHJlc3ApO1xuICAgICAgICBpZiAocmVzcC5pc01hdGNoSWdub3JlZCkgcmV0dXJuIGRvSWdub3JlKGxleGVtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdNb2RlICYmIG5ld01vZGUuZW5kU2FtZUFzQmVnaW4pIHtcbiAgICAgICAgbmV3TW9kZS5lbmRSZSA9IGVzY2FwZShsZXhlbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3TW9kZS5za2lwKSB7XG4gICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5ld01vZGUuZXhjbHVkZUJlZ2luKSB7XG4gICAgICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICBpZiAoIW5ld01vZGUucmV0dXJuQmVnaW4gJiYgIW5ld01vZGUuZXhjbHVkZUJlZ2luKSB7XG4gICAgICAgICAgbW9kZUJ1ZmZlciA9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RhcnROZXdNb2RlKG5ld01vZGUpO1xuICAgICAgLy8gaWYgKG1vZGVbXCJhZnRlcjpiZWdpblwiXSkge1xuICAgICAgLy8gICBsZXQgcmVzcCA9IG5ldyBSZXNwb25zZShtb2RlKTtcbiAgICAgIC8vICAgbW9kZVtcImFmdGVyOmJlZ2luXCJdKG1hdGNoLCByZXNwKTtcbiAgICAgIC8vIH1cbiAgICAgIHJldHVybiBuZXdNb2RlLnJldHVybkJlZ2luID8gMCA6IGxleGVtZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBwb3RlbnRpYWwgZW5kIG9mIG1vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2ggLSB0aGUgY3VycmVudCBtYXRjaFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvRW5kTWF0Y2gobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxleGVtZSA9IG1hdGNoWzBdO1xuICAgICAgY29uc3QgbWF0Y2hQbHVzUmVtYWluZGVyID0gY29kZVRvSGlnaGxpZ2h0LnN1YnN0cihtYXRjaC5pbmRleCk7XG5cbiAgICAgIGNvbnN0IGVuZE1vZGUgPSBlbmRPZk1vZGUodG9wLCBtYXRjaCwgbWF0Y2hQbHVzUmVtYWluZGVyKTtcbiAgICAgIGlmICghZW5kTW9kZSkgeyByZXR1cm4gTk9fTUFUQ0g7IH1cblxuICAgICAgY29uc3Qgb3JpZ2luID0gdG9wO1xuICAgICAgaWYgKG9yaWdpbi5za2lwKSB7XG4gICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEob3JpZ2luLnJldHVybkVuZCB8fCBvcmlnaW4uZXhjbHVkZUVuZCkpIHtcbiAgICAgICAgICBtb2RlQnVmZmVyICs9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzQnVmZmVyKCk7XG4gICAgICAgIGlmIChvcmlnaW4uZXhjbHVkZUVuZCkge1xuICAgICAgICAgIG1vZGVCdWZmZXIgPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHRvcC5jbGFzc05hbWUpIHtcbiAgICAgICAgICBlbWl0dGVyLmNsb3NlTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdG9wLnNraXAgJiYgIXRvcC5zdWJMYW5ndWFnZSkge1xuICAgICAgICAgIHJlbGV2YW5jZSArPSB0b3AucmVsZXZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRvcCA9IHRvcC5wYXJlbnQ7XG4gICAgICB9IHdoaWxlICh0b3AgIT09IGVuZE1vZGUucGFyZW50KTtcbiAgICAgIGlmIChlbmRNb2RlLnN0YXJ0cykge1xuICAgICAgICBpZiAoZW5kTW9kZS5lbmRTYW1lQXNCZWdpbikge1xuICAgICAgICAgIGVuZE1vZGUuc3RhcnRzLmVuZFJlID0gZW5kTW9kZS5lbmRSZTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydE5ld01vZGUoZW5kTW9kZS5zdGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdpbi5yZXR1cm5FbmQgPyAwIDogbGV4ZW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQ29udGludWF0aW9ucygpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGN1cnJlbnQgPSB0b3A7IGN1cnJlbnQgIT09IGxhbmd1YWdlOyBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgbGlzdC51bnNoaWZ0KGN1cnJlbnQuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gZW1pdHRlci5vcGVuTm9kZShpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHt7dHlwZT86IE1hdGNoVHlwZSwgaW5kZXg/OiBudW1iZXIsIHJ1bGU/OiBNb2RlfX19ICovXG4gICAgbGV0IGxhc3RNYXRjaCA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogIFByb2Nlc3MgYW4gaW5kaXZpZHVhbCBtYXRjaFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRCZWZvcmVNYXRjaCAtIHRleHQgcHJlY2VlZGluZyB0aGUgbWF0Y2ggKHNpbmNlIHRoZSBsYXN0IG1hdGNoKVxuICAgICAqIEBwYXJhbSB7RW5oYW5jZWRNYXRjaH0gW21hdGNoXSAtIHRoZSBtYXRjaCBpdHNlbGZcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9jZXNzTGV4ZW1lKHRleHRCZWZvcmVNYXRjaCwgbWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxleGVtZSA9IG1hdGNoICYmIG1hdGNoWzBdO1xuXG4gICAgICAvLyBhZGQgbm9uLW1hdGNoZWQgdGV4dCB0byB0aGUgY3VycmVudCBtb2RlIGJ1ZmZlclxuICAgICAgbW9kZUJ1ZmZlciArPSB0ZXh0QmVmb3JlTWF0Y2g7XG5cbiAgICAgIGlmIChsZXhlbWUgPT0gbnVsbCkge1xuICAgICAgICBwcm9jZXNzQnVmZmVyKCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSd2ZSBmb3VuZCBhIDAgd2lkdGggbWF0Y2ggYW5kIHdlJ3JlIHN0dWNrLCBzbyB3ZSBuZWVkIHRvIGFkdmFuY2VcbiAgICAgIC8vIHRoaXMgaGFwcGVucyB3aGVuIHdlIGhhdmUgYmFkbHkgYmVoYXZlZCBydWxlcyB0aGF0IGhhdmUgb3B0aW9uYWwgbWF0Y2hlcnMgdG8gdGhlIGRlZ3JlZSB0aGF0XG4gICAgICAvLyBzb21ldGltZXMgdGhleSBjYW4gZW5kIHVwIG1hdGNoaW5nIG5vdGhpbmcgYXQgYWxsXG4gICAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzIxNDBcbiAgICAgIGlmIChsYXN0TWF0Y2gudHlwZSA9PT0gXCJiZWdpblwiICYmIG1hdGNoLnR5cGUgPT09IFwiZW5kXCIgJiYgbGFzdE1hdGNoLmluZGV4ID09PSBtYXRjaC5pbmRleCAmJiBsZXhlbWUgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gc3BpdCB0aGUgXCJza2lwcGVkXCIgY2hhcmFjdGVyIHRoYXQgb3VyIHJlZ2V4IGNob2tlZCBvbiBiYWNrIGludG8gdGhlIG91dHB1dCBzZXF1ZW5jZVxuICAgICAgICBtb2RlQnVmZmVyICs9IGNvZGVUb0hpZ2hsaWdodC5zbGljZShtYXRjaC5pbmRleCwgbWF0Y2guaW5kZXggKyAxKTtcbiAgICAgICAgaWYgKCFTQUZFX01PREUpIHtcbiAgICAgICAgICAvKiogQHR5cGUge0Fubm90YXRlZEVycm9yfSAqL1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignMCB3aWR0aCBtYXRjaCByZWdleCcpO1xuICAgICAgICAgIGVyci5sYW5ndWFnZU5hbWUgPSBsYW5ndWFnZU5hbWU7XG4gICAgICAgICAgZXJyLmJhZFJ1bGUgPSBsYXN0TWF0Y2gucnVsZTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBsYXN0TWF0Y2ggPSBtYXRjaDtcblxuICAgICAgaWYgKG1hdGNoLnR5cGUgPT09IFwiYmVnaW5cIikge1xuICAgICAgICByZXR1cm4gZG9CZWdpbk1hdGNoKG1hdGNoKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gudHlwZSA9PT0gXCJpbGxlZ2FsXCIgJiYgIWlnbm9yZUlsbGVnYWxzKSB7XG4gICAgICAgIC8vIGlsbGVnYWwgbWF0Y2gsIHdlIGRvIG5vdCBjb250aW51ZSBwcm9jZXNzaW5nXG4gICAgICAgIC8qKiBAdHlwZSB7QW5ub3RhdGVkRXJyb3J9ICovXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignSWxsZWdhbCBsZXhlbWUgXCInICsgbGV4ZW1lICsgJ1wiIGZvciBtb2RlIFwiJyArICh0b3AuY2xhc3NOYW1lIHx8ICc8dW5uYW1lZD4nKSArICdcIicpO1xuICAgICAgICBlcnIubW9kZSA9IHRvcDtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC50eXBlID09PSBcImVuZFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGRvRW5kTWF0Y2gobWF0Y2gpO1xuICAgICAgICBpZiAocHJvY2Vzc2VkICE9PSBOT19NQVRDSCkge1xuICAgICAgICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZWRnZSBjYXNlIGZvciB3aGVuIGlsbGVnYWwgbWF0Y2hlcyAkIChlbmQgb2YgbGluZSkgd2hpY2ggaXMgdGVjaG5pY2FsbHlcbiAgICAgIC8vIGEgMCB3aWR0aCBtYXRjaCBidXQgbm90IGEgYmVnaW4vZW5kIG1hdGNoIHNvIGl0J3Mgbm90IGNhdWdodCBieSB0aGVcbiAgICAgIC8vIGZpcnN0IGhhbmRsZXIgKHdoZW4gaWdub3JlSWxsZWdhbHMgaXMgdHJ1ZSlcbiAgICAgIGlmIChtYXRjaC50eXBlID09PSBcImlsbGVnYWxcIiAmJiBsZXhlbWUgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gYWR2YW5jZSBzbyB3ZSBhcmVuJ3Qgc3R1Y2sgaW4gYW4gaW5maW5pdGUgbG9vcFxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgLy8gaW5maW5pdGUgbG9vcHMgYXJlIEJBRCwgdGhpcyBpcyBhIGxhc3QgZGl0Y2ggY2F0Y2ggYWxsLiBpZiB3ZSBoYXZlIGFcbiAgICAgIC8vIGRlY2VudCBudW1iZXIgb2YgaXRlcmF0aW9ucyB5ZXQgb3VyIGluZGV4IChjdXJzb3IgcG9zaXRpb24gaW4gb3VyXG4gICAgICAvLyBwYXJzaW5nKSBzdGlsbCAzeCBiZWhpbmQgb3VyIGluZGV4IHRoZW4gc29tZXRoaW5nIGlzIHZlcnkgd3JvbmdcbiAgICAgIC8vIHNvIHdlIGJhaWxcbiAgICAgIGlmIChpdGVyYXRpb25zID4gMTAwMDAwICYmIGl0ZXJhdGlvbnMgPiBtYXRjaC5pbmRleCAqIDMpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdwb3RlbnRpYWwgaW5maW5pdGUgbG9vcCwgd2F5IG1vcmUgaXRlcmF0aW9ucyB0aGFuIG1hdGNoZXMnKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgV2h5IG1pZ2h0IGJlIGZpbmQgb3Vyc2VsdmVzIGhlcmU/ICBPbmx5IG9uZSBvY2Nhc2lvbiBub3cuICBBbiBlbmQgbWF0Y2ggdGhhdCB3YXNcbiAgICAgIHRyaWdnZXJlZCBidXQgY291bGQgbm90IGJlIGNvbXBsZXRlZC4gIFdoZW4gbWlnaHQgdGhpcyBoYXBwZW4/ICBXaGVuIGFuIGBlbmRTYW1lYXNCZWdpbmBcbiAgICAgIHJ1bGUgc2V0cyB0aGUgZW5kIHJ1bGUgdG8gYSBzcGVjaWZpYyBtYXRjaC4gIFNpbmNlIHRoZSBvdmVyYWxsIG1vZGUgdGVybWluYXRpb24gcnVsZSB0aGF0J3NcbiAgICAgIGJlaW5nIHVzZWQgdG8gc2NhbiB0aGUgdGV4dCBpc24ndCByZWNvbXBpbGVkIHRoYXQgbWVhbnMgdGhhdCBhbnkgbWF0Y2ggdGhhdCBMT09LUyBsaWtlXG4gICAgICB0aGUgZW5kIChidXQgaXMgbm90LCBiZWNhdXNlIGl0IGlzIG5vdCBhbiBleGFjdCBtYXRjaCB0byB0aGUgYmVnaW5uaW5nKSB3aWxsXG4gICAgICBlbmQgdXAgaGVyZS4gIEEgZGVmaW5pdGUgZW5kIG1hdGNoLCBidXQgd2hlbiBgZG9FbmRNYXRjaGAgdHJpZXMgdG8gXCJyZWFwcGx5XCJcbiAgICAgIHRoZSBlbmQgcnVsZSBhbmQgZmFpbHMgdG8gbWF0Y2gsIHdlIHdpbmQgdXAgaGVyZSwgYW5kIGp1c3Qgc2lsZW50bHkgaWdub3JlIHRoZSBlbmQuXG5cbiAgICAgIFRoaXMgY2F1c2VzIG5vIHJlYWwgaGFybSBvdGhlciB0aGFuIHN0b3BwaW5nIGEgZmV3IHRpbWVzIHRvbyBtYW55LlxuICAgICAgKi9cblxuICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICByZXR1cm4gbGV4ZW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCBsYW5ndWFnZSA9IGdldExhbmd1YWdlKGxhbmd1YWdlTmFtZSk7XG4gICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgZXJyb3IoTEFOR1VBR0VfTk9UX0ZPVU5ELnJlcGxhY2UoXCJ7fVwiLCBsYW5ndWFnZU5hbWUpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsYW5ndWFnZTogXCInICsgbGFuZ3VhZ2VOYW1lICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWQgPSBjb21waWxlTGFuZ3VhZ2UobGFuZ3VhZ2UsIHsgcGx1Z2lucyB9KTtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgLyoqIEB0eXBlIHtDb21waWxlZE1vZGV9ICovXG4gICAgbGV0IHRvcCA9IGNvbnRpbnVhdGlvbiB8fCBtZDtcbiAgICAvKiogQHR5cGUgUmVjb3JkPHN0cmluZyxDb21waWxlZE1vZGU+ICovXG4gICAgY29uc3QgY29udGludWF0aW9ucyA9IHt9OyAvLyBrZWVwIGNvbnRpbnVhdGlvbnMgZm9yIHN1Yi1sYW5ndWFnZXNcbiAgICBjb25zdCBlbWl0dGVyID0gbmV3IG9wdGlvbnMuX19lbWl0dGVyKG9wdGlvbnMpO1xuICAgIHByb2Nlc3NDb250aW51YXRpb25zKCk7XG4gICAgbGV0IG1vZGVCdWZmZXIgPSAnJztcbiAgICBsZXQgcmVsZXZhbmNlID0gMDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBpdGVyYXRpb25zID0gMDtcbiAgICBsZXQgcmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgdG9wLm1hdGNoZXIuY29uc2lkZXJBbGwoKTtcblxuICAgICAgZm9yICg7Oykge1xuICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIGlmIChyZXN1bWVTY2FuQXRTYW1lUG9zaXRpb24pIHtcbiAgICAgICAgICAvLyBvbmx5IHJlZ2V4ZXMgbm90IG1hdGNoZWQgcHJldmlvdXNseSB3aWxsIG5vdyBiZVxuICAgICAgICAgIC8vIGNvbnNpZGVyZWQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXG4gICAgICAgICAgcmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wLm1hdGNoZXIuY29uc2lkZXJBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0b3AubWF0Y2hlci5sYXN0SW5kZXggPSBpbmRleDtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHRvcC5tYXRjaGVyLmV4ZWMoY29kZVRvSGlnaGxpZ2h0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXRjaFwiLCBtYXRjaFswXSwgbWF0Y2gucnVsZSAmJiBtYXRjaC5ydWxlLmJlZ2luKVxuXG4gICAgICAgIGlmICghbWF0Y2gpIGJyZWFrO1xuXG4gICAgICAgIGNvbnN0IGJlZm9yZU1hdGNoID0gY29kZVRvSGlnaGxpZ2h0LnN1YnN0cmluZyhpbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRDb3VudCA9IHByb2Nlc3NMZXhlbWUoYmVmb3JlTWF0Y2gsIG1hdGNoKTtcbiAgICAgICAgaW5kZXggPSBtYXRjaC5pbmRleCArIHByb2Nlc3NlZENvdW50O1xuICAgICAgfVxuICAgICAgcHJvY2Vzc0xleGVtZShjb2RlVG9IaWdobGlnaHQuc3Vic3RyKGluZGV4KSk7XG4gICAgICBlbWl0dGVyLmNsb3NlQWxsTm9kZXMoKTtcbiAgICAgIGVtaXR0ZXIuZmluYWxpemUoKTtcbiAgICAgIHJlc3VsdCA9IGVtaXR0ZXIudG9IVE1MKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIGF2b2lkIHBvc3NpYmxlIGJyZWFrYWdlIHdpdGggdjEwIGNsaWVudHMgZXhwZWN0aW5nXG4gICAgICAgIC8vIHRoaXMgdG8gYWx3YXlzIGJlIGFuIGludGVnZXJcbiAgICAgICAgcmVsZXZhbmNlOiBNYXRoLmZsb29yKHJlbGV2YW5jZSksXG4gICAgICAgIHZhbHVlOiByZXN1bHQsXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWUsXG4gICAgICAgIGlsbGVnYWw6IGZhbHNlLFxuICAgICAgICBlbWl0dGVyOiBlbWl0dGVyLFxuICAgICAgICB0b3A6IHRvcFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSAmJiBlcnIubWVzc2FnZS5pbmNsdWRlcygnSWxsZWdhbCcpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWxsZWdhbDogdHJ1ZSxcbiAgICAgICAgICBpbGxlZ2FsQnk6IHtcbiAgICAgICAgICAgIG1zZzogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICBjb250ZXh0OiBjb2RlVG9IaWdobGlnaHQuc2xpY2UoaW5kZXggLSAxMDAsIGluZGV4ICsgMTAwKSxcbiAgICAgICAgICAgIG1vZGU6IGVyci5tb2RlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb2ZhcjogcmVzdWx0LFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YWx1ZTogZXNjYXBlJDEoY29kZVRvSGlnaGxpZ2h0KSxcbiAgICAgICAgICBlbWl0dGVyOiBlbWl0dGVyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKFNBRkVfTU9ERSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlsbGVnYWw6IGZhbHNlLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YWx1ZTogZXNjYXBlJDEoY29kZVRvSGlnaGxpZ2h0KSxcbiAgICAgICAgICBlbWl0dGVyOiBlbWl0dGVyLFxuICAgICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWUsXG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgZXJyb3JSYWlzZWQ6IGVyclxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGEgdmFsaWQgaGlnaGxpZ2h0IHJlc3VsdCwgd2l0aG91dCBhY3R1YWxseSBkb2luZyBhbnkgYWN0dWFsIHdvcmssXG4gICAqIGF1dG8gaGlnaGxpZ2h0IHN0YXJ0cyB3aXRoIHRoaXMgYW5kIGl0J3MgcG9zc2libGUgZm9yIHNtYWxsIHNuaXBwZXRzIHRoYXRcbiAgICogYXV0by1kZXRlY3Rpb24gbWF5IG5vdCBmaW5kIGEgYmV0dGVyIG1hdGNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gICAqIEByZXR1cm5zIHtIaWdobGlnaHRSZXN1bHR9XG4gICAqL1xuICBmdW5jdGlvbiBqdXN0VGV4dEhpZ2hsaWdodFJlc3VsdChjb2RlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgZW1pdHRlcjogbmV3IG9wdGlvbnMuX19lbWl0dGVyKG9wdGlvbnMpLFxuICAgICAgdmFsdWU6IGVzY2FwZSQxKGNvZGUpLFxuICAgICAgaWxsZWdhbDogZmFsc2UsXG4gICAgICB0b3A6IFBMQUlOVEVYVF9MQU5HVUFHRVxuICAgIH07XG4gICAgcmVzdWx0LmVtaXR0ZXIuYWRkVGV4dChjb2RlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gIEhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGRldGVjdGlvbi4gQWNjZXB0cyBhIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvXG4gIGhpZ2hsaWdodC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cbiAgLSBsYW5ndWFnZSAoZGV0ZWN0ZWQgbGFuZ3VhZ2UpXG4gIC0gcmVsZXZhbmNlIChpbnQpXG4gIC0gdmFsdWUgKGFuIEhUTUwgc3RyaW5nIHdpdGggaGlnaGxpZ2h0aW5nIG1hcmt1cClcbiAgLSBzZWNvbmRfYmVzdCAob2JqZWN0IHdpdGggdGhlIHNhbWUgc3RydWN0dXJlIGZvciBzZWNvbmQtYmVzdCBoZXVyaXN0aWNhbGx5XG4gICAgZGV0ZWN0ZWQgbGFuZ3VhZ2UsIG1heSBiZSBhYnNlbnQpXG5cbiAgICBAcGFyYW0ge3N0cmluZ30gY29kZVxuICAgIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW2xhbmd1YWdlU3Vic2V0XVxuICAgIEByZXR1cm5zIHtBdXRvSGlnaGxpZ2h0UmVzdWx0fVxuICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHRBdXRvKGNvZGUsIGxhbmd1YWdlU3Vic2V0KSB7XG4gICAgbGFuZ3VhZ2VTdWJzZXQgPSBsYW5ndWFnZVN1YnNldCB8fCBvcHRpb25zLmxhbmd1YWdlcyB8fCBPYmplY3Qua2V5cyhsYW5ndWFnZXMpO1xuICAgIGNvbnN0IHBsYWludGV4dCA9IGp1c3RUZXh0SGlnaGxpZ2h0UmVzdWx0KGNvZGUpO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IGxhbmd1YWdlU3Vic2V0LmZpbHRlcihnZXRMYW5ndWFnZSkuZmlsdGVyKGF1dG9EZXRlY3Rpb24pLm1hcChuYW1lID0+XG4gICAgICBfaGlnaGxpZ2h0KG5hbWUsIGNvZGUsIGZhbHNlKVxuICAgICk7XG4gICAgcmVzdWx0cy51bnNoaWZ0KHBsYWludGV4dCk7IC8vIHBsYWludGV4dCBpcyBhbHdheXMgYW4gb3B0aW9uXG5cbiAgICBjb25zdCBzb3J0ZWQgPSByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIC8vIHNvcnQgYmFzZSBvbiByZWxldmFuY2VcbiAgICAgIGlmIChhLnJlbGV2YW5jZSAhPT0gYi5yZWxldmFuY2UpIHJldHVybiBiLnJlbGV2YW5jZSAtIGEucmVsZXZhbmNlO1xuXG4gICAgICAvLyBhbHdheXMgYXdhcmQgdGhlIHRpZSB0byB0aGUgYmFzZSBsYW5ndWFnZVxuICAgICAgLy8gaWUgaWYgQysrIGFuZCBBcmR1aW5vIGFyZSB0aWVkLCBpdCdzIG1vcmUgbGlrZWx5IHRvIGJlIEMrK1xuICAgICAgaWYgKGEubGFuZ3VhZ2UgJiYgYi5sYW5ndWFnZSkge1xuICAgICAgICBpZiAoZ2V0TGFuZ3VhZ2UoYS5sYW5ndWFnZSkuc3VwZXJzZXRPZiA9PT0gYi5sYW5ndWFnZSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGdldExhbmd1YWdlKGIubGFuZ3VhZ2UpLnN1cGVyc2V0T2YgPT09IGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlIHNheSB0aGV5IGFyZSBlcXVhbCwgd2hpY2ggaGFzIHRoZSBlZmZlY3Qgb2Ygc29ydGluZyBvblxuICAgICAgLy8gcmVsZXZhbmNlIHdoaWxlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIG9yZGVyaW5nIC0gd2hpY2ggaXMgaG93IHRpZXNcbiAgICAgIC8vIGhhdmUgaGlzdG9yaWNhbGx5IGJlZW4gc2V0dGxlZCwgaWUgdGhlIGxhbmd1YWdlIHRoYXQgY29tZXMgZmlyc3QgYWx3YXlzXG4gICAgICAvLyB3aW5zIGluIHRoZSBjYXNlIG9mIGEgdGllXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIGNvbnN0IFtiZXN0LCBzZWNvbmRCZXN0XSA9IHNvcnRlZDtcblxuICAgIC8qKiBAdHlwZSB7QXV0b0hpZ2hsaWdodFJlc3VsdH0gKi9cbiAgICBjb25zdCByZXN1bHQgPSBiZXN0O1xuICAgIHJlc3VsdC5zZWNvbmRfYmVzdCA9IHNlY29uZEJlc3Q7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gIFBvc3QtcHJvY2Vzc2luZyBvZiB0aGUgaGlnaGxpZ2h0ZWQgbWFya3VwOlxuXG4gIC0gcmVwbGFjZSBUQUJzIHdpdGggc29tZXRoaW5nIG1vcmUgdXNlZnVsXG4gIC0gcmVwbGFjZSByZWFsIGxpbmUtYnJlYWtzIHdpdGggJzxicj4nIGZvciBub24tcHJlIGNvbnRhaW5lcnNcblxuICAgIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gICAgQHJldHVybnMge3N0cmluZ31cbiAgKi9cbiAgZnVuY3Rpb24gZml4TWFya3VwKGh0bWwpIHtcbiAgICBpZiAoIShvcHRpb25zLnRhYlJlcGxhY2UgfHwgb3B0aW9ucy51c2VCUikpIHtcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoZml4TWFya3VwUmUsIG1hdGNoID0+IHtcbiAgICAgIGlmIChtYXRjaCA9PT0gJ1xcbicpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudXNlQlIgPyAnPGJyPicgOiBtYXRjaDtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50YWJSZXBsYWNlKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC5yZXBsYWNlKC9cXHQvZywgb3B0aW9ucy50YWJSZXBsYWNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgbmV3IGNsYXNzIG5hbWUgZm9yIGJsb2NrIGdpdmVuIHRoZSBsYW5ndWFnZSBuYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjdXJyZW50TGFuZ11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXN1bHRMYW5nXVxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIGN1cnJlbnRMYW5nLCByZXN1bHRMYW5nKSB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBjdXJyZW50TGFuZyA/IGFsaWFzZXNbY3VycmVudExhbmddIDogcmVzdWx0TGFuZztcblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhsanNcIik7XG4gICAgaWYgKGxhbmd1YWdlKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQobGFuZ3VhZ2UpO1xuICB9XG5cbiAgLyoqIEB0eXBlIHtITEpTUGx1Z2lufSAqL1xuICBjb25zdCBiclBsdWdpbiA9IHtcbiAgICBcImJlZm9yZTpoaWdobGlnaHRFbGVtZW50XCI6ICh7IGVsIH0pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnVzZUJSKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGVsLmlubmVySFRNTC5yZXBsYWNlKC9cXG4vZywgJycpLnJlcGxhY2UoLzxiclsgL10qPi9nLCAnXFxuJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIjogKHsgcmVzdWx0IH0pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnVzZUJSKSB7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdC52YWx1ZS5yZXBsYWNlKC9cXG4vZywgXCI8YnI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBUQUJfUkVQTEFDRV9SRSA9IC9eKDxbXj5dKz58XFx0KSsvZ207XG4gIC8qKiBAdHlwZSB7SExKU1BsdWdpbn0gKi9cbiAgY29uc3QgdGFiUmVwbGFjZVBsdWdpbiA9IHtcbiAgICBcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIjogKHsgcmVzdWx0IH0pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnRhYlJlcGxhY2UpIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnJlcGxhY2UoVEFCX1JFUExBQ0VfUkUsIChtKSA9PlxuICAgICAgICAgIG0ucmVwbGFjZSgvXFx0L2csIG9wdGlvbnMudGFiUmVwbGFjZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgaGlnaGxpZ2h0aW5nIHRvIGEgRE9NIG5vZGUgY29udGFpbmluZyBjb2RlLiBBY2NlcHRzIGEgRE9NIG5vZGUgYW5kXG4gICAqIHR3byBvcHRpb25hbCBwYXJhbWV0ZXJzIGZvciBmaXhNYXJrdXAuXG4gICAqXG4gICAqIEBwYXJhbSB7SGlnaGxpZ2h0ZWRIVE1MRWxlbWVudH0gZWxlbWVudCAtIHRoZSBIVE1MIGVsZW1lbnQgdG8gaGlnaGxpZ2h0XG4gICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudCkge1xuICAgIC8qKiBAdHlwZSBIVE1MRWxlbWVudCAqL1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGJsb2NrTGFuZ3VhZ2UoZWxlbWVudCk7XG5cbiAgICBpZiAoc2hvdWxkTm90SGlnaGxpZ2h0KGxhbmd1YWdlKSkgcmV0dXJuO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgdjEwIEFQSVxuICAgIGZpcmUoXCJiZWZvcmU6aGlnaGxpZ2h0RWxlbWVudFwiLFxuICAgICAgeyBlbDogZWxlbWVudCwgbGFuZ3VhZ2U6IGxhbmd1YWdlIH0pO1xuXG4gICAgbm9kZSA9IGVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcmVzdWx0ID0gbGFuZ3VhZ2UgPyBoaWdobGlnaHQodGV4dCwgeyBsYW5ndWFnZSwgaWdub3JlSWxsZWdhbHM6IHRydWUgfSkgOiBoaWdobGlnaHRBdXRvKHRleHQpO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgdjEwIEFQSVxuICAgIGZpcmUoXCJhZnRlcjpoaWdobGlnaHRFbGVtZW50XCIsIHsgZWw6IGVsZW1lbnQsIHJlc3VsdCwgdGV4dCB9KTtcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVzdWx0LnZhbHVlO1xuICAgIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCBsYW5ndWFnZSwgcmVzdWx0Lmxhbmd1YWdlKTtcbiAgICBlbGVtZW50LnJlc3VsdCA9IHtcbiAgICAgIGxhbmd1YWdlOiByZXN1bHQubGFuZ3VhZ2UsXG4gICAgICAvLyBUT0RPOiByZW1vdmUgd2l0aCB2ZXJzaW9uIDExLjBcbiAgICAgIHJlOiByZXN1bHQucmVsZXZhbmNlLFxuICAgICAgcmVsYXZhbmNlOiByZXN1bHQucmVsZXZhbmNlXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnNlY29uZF9iZXN0KSB7XG4gICAgICBlbGVtZW50LnNlY29uZF9iZXN0ID0ge1xuICAgICAgICBsYW5ndWFnZTogcmVzdWx0LnNlY29uZF9iZXN0Lmxhbmd1YWdlLFxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgd2l0aCB2ZXJzaW9uIDExLjBcbiAgICAgICAgcmU6IHJlc3VsdC5zZWNvbmRfYmVzdC5yZWxldmFuY2UsXG4gICAgICAgIHJlbGF2YW5jZTogcmVzdWx0LnNlY29uZF9iZXN0LnJlbGV2YW5jZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBoaWdobGlnaHQuanMgZ2xvYmFsIG9wdGlvbnMgd2l0aCB0aGUgcGFzc2VkIG9wdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIHtQYXJ0aWFsPEhMSlNPcHRpb25zPn0gdXNlck9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZSh1c2VyT3B0aW9ucykge1xuICAgIGlmICh1c2VyT3B0aW9ucy51c2VCUikge1xuICAgICAgZGVwcmVjYXRlZChcIjEwLjMuMFwiLCBcIid1c2VCUicgd2lsbCBiZSByZW1vdmVkIGVudGlyZWx5IGluIHYxMS4wXCIpO1xuICAgICAgZGVwcmVjYXRlZChcIjEwLjMuMFwiLCBcIlBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjU1OVwiKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IGluaGVyaXQkMShvcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogSGlnaGxpZ2h0cyB0byBhbGwgPHByZT48Y29kZT4gYmxvY2tzIG9uIGEgcGFnZVxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gJiB7Y2FsbGVkPzogYm9vbGVhbn19XG4gICAqL1xuICAvLyBUT0RPOiByZW1vdmUgdjEyLCBkZXByZWNhdGVkXG4gIGNvbnN0IGluaXRIaWdobGlnaHRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKGluaXRIaWdobGlnaHRpbmcuY2FsbGVkKSByZXR1cm47XG4gICAgaW5pdEhpZ2hsaWdodGluZy5jYWxsZWQgPSB0cnVlO1xuXG4gICAgZGVwcmVjYXRlZChcIjEwLjYuMFwiLCBcImluaXRIaWdobGlnaHRpbmcoKSBpcyBkZXByZWNhdGVkLiAgVXNlIGhpZ2hsaWdodEFsbCgpIGluc3RlYWQuXCIpO1xuXG4gICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGUnKTtcbiAgICBibG9ja3MuZm9yRWFjaChoaWdobGlnaHRFbGVtZW50KTtcbiAgfTtcblxuICAvLyBIaWdsaWdodHMgYWxsIHdoZW4gRE9NQ29udGVudExvYWRlZCBmaXJlc1xuICAvLyBUT0RPOiByZW1vdmUgdjEyLCBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIGluaXRIaWdobGlnaHRpbmdPbkxvYWQoKSB7XG4gICAgZGVwcmVjYXRlZChcIjEwLjYuMFwiLCBcImluaXRIaWdobGlnaHRpbmdPbkxvYWQoKSBpcyBkZXByZWNhdGVkLiAgVXNlIGhpZ2hsaWdodEFsbCgpIGluc3RlYWQuXCIpO1xuICAgIHdhbnRzSGlnaGxpZ2h0ID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCB3YW50c0hpZ2hsaWdodCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBhdXRvLWhpZ2hsaWdodHMgYWxsIHByZT5jb2RlIGVsZW1lbnRzIG9uIHRoZSBwYWdlXG4gICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHRBbGwoKSB7XG4gICAgLy8gaWYgd2UgYXJlIGNhbGxlZCB0b28gZWFybHkgaW4gdGhlIGxvYWRpbmcgcHJvY2Vzc1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgd2FudHNIaWdobGlnaHQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlJyk7XG4gICAgYmxvY2tzLmZvckVhY2goaGlnaGxpZ2h0RWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBib290KCkge1xuICAgIC8vIGlmIGEgaGlnaGxpZ2h0IHdhcyByZXF1ZXN0ZWQgYmVmb3JlIERPTSB3YXMgbG9hZGVkLCBkbyBub3dcbiAgICBpZiAod2FudHNIaWdobGlnaHQpIGhpZ2hsaWdodEFsbCgpO1xuICB9XG5cbiAgLy8gbWFrZSBzdXJlIHdlIGFyZSBpbiB0aGUgYnJvd3NlciBlbnZpcm9ubWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGJvb3QsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxhbmd1YWdlIGdyYW1tYXIgbW9kdWxlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZU5hbWVcbiAgICogQHBhcmFtIHtMYW5ndWFnZUZufSBsYW5ndWFnZURlZmluaXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyTGFuZ3VhZ2UobGFuZ3VhZ2VOYW1lLCBsYW5ndWFnZURlZmluaXRpb24pIHtcbiAgICBsZXQgbGFuZyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGxhbmcgPSBsYW5ndWFnZURlZmluaXRpb24oaGxqcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IkMSkge1xuICAgICAgZXJyb3IoXCJMYW5ndWFnZSBkZWZpbml0aW9uIGZvciAne30nIGNvdWxkIG5vdCBiZSByZWdpc3RlcmVkLlwiLnJlcGxhY2UoXCJ7fVwiLCBsYW5ndWFnZU5hbWUpKTtcbiAgICAgIC8vIGhhcmQgb3Igc29mdCBlcnJvclxuICAgICAgaWYgKCFTQUZFX01PREUpIHsgdGhyb3cgZXJyb3IkMTsgfSBlbHNlIHsgZXJyb3IoZXJyb3IkMSk7IH1cbiAgICAgIC8vIGxhbmd1YWdlcyB0aGF0IGhhdmUgc2VyaW91cyBlcnJvcnMgYXJlIHJlcGxhY2VkIHdpdGggZXNzZW50aWFsbHkgYVxuICAgICAgLy8gXCJwbGFpbnRleHRcIiBzdGFuZC1pbiBzbyB0aGF0IHRoZSBjb2RlIGJsb2NrcyB3aWxsIHN0aWxsIGdldCBub3JtYWxcbiAgICAgIC8vIGNzcyBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlbSAtIGFuZCBvbmUgYmFkIGxhbmd1YWdlIHdvbid0IGJyZWFrIHRoZVxuICAgICAgLy8gZW50aXJlIGhpZ2hsaWdodGVyXG4gICAgICBsYW5nID0gUExBSU5URVhUX0xBTkdVQUdFO1xuICAgIH1cbiAgICAvLyBnaXZlIGl0IGEgdGVtcG9yYXJ5IG5hbWUgaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBpbiB0aGUgbWV0YS1kYXRhXG4gICAgaWYgKCFsYW5nLm5hbWUpIGxhbmcubmFtZSA9IGxhbmd1YWdlTmFtZTtcbiAgICBsYW5ndWFnZXNbbGFuZ3VhZ2VOYW1lXSA9IGxhbmc7XG4gICAgbGFuZy5yYXdEZWZpbml0aW9uID0gbGFuZ3VhZ2VEZWZpbml0aW9uLmJpbmQobnVsbCwgaGxqcyk7XG5cbiAgICBpZiAobGFuZy5hbGlhc2VzKSB7XG4gICAgICByZWdpc3RlckFsaWFzZXMobGFuZy5hbGlhc2VzLCB7IGxhbmd1YWdlTmFtZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgbGFuZ3VhZ2UgZ3JhbW1hciBtb2R1bGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gdW5yZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlTmFtZSkge1xuICAgIGRlbGV0ZSBsYW5ndWFnZXNbbGFuZ3VhZ2VOYW1lXTtcbiAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIE9iamVjdC5rZXlzKGFsaWFzZXMpKSB7XG4gICAgICBpZiAoYWxpYXNlc1thbGlhc10gPT09IGxhbmd1YWdlTmFtZSkge1xuICAgICAgICBkZWxldGUgYWxpYXNlc1thbGlhc107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gTGlzdCBvZiBsYW5ndWFnZSBpbnRlcm5hbCBuYW1lc1xuICAgKi9cbiAgZnVuY3Rpb24gbGlzdExhbmd1YWdlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGFuZ3VhZ2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgIGludGVuZGVkIHVzYWdlOiBXaGVuIG9uZSBsYW5ndWFnZSB0cnVseSByZXF1aXJlcyBhbm90aGVyXG5cbiAgICBVbmxpa2UgYGdldExhbmd1YWdlYCwgdGhpcyB3aWxsIHRocm93IHdoZW4gdGhlIHJlcXVlc3RlZCBsYW5ndWFnZVxuICAgIGlzIG5vdCBhdmFpbGFibGUuXG5cbiAgICBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGxhbmd1YWdlIHRvIGZldGNoL3JlcXVpcmVcbiAgICBAcmV0dXJucyB7TGFuZ3VhZ2UgfCBuZXZlcn1cbiAgKi9cbiAgZnVuY3Rpb24gcmVxdWlyZUxhbmd1YWdlKG5hbWUpIHtcbiAgICBkZXByZWNhdGVkKFwiMTAuNC4wXCIsIFwicmVxdWlyZUxhbmd1YWdlIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTEuXCIpO1xuICAgIGRlcHJlY2F0ZWQoXCIxMC40LjBcIiwgXCJQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvcHVsbC8yODQ0XCIpO1xuXG4gICAgY29uc3QgbGFuZyA9IGdldExhbmd1YWdlKG5hbWUpO1xuICAgIGlmIChsYW5nKSB7IHJldHVybiBsYW5nOyB9XG5cbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ1RoZSBcXCd7fVxcJyBsYW5ndWFnZSBpcyByZXF1aXJlZCwgYnV0IG5vdCBsb2FkZWQuJy5yZXBsYWNlKCd7fScsIG5hbWUpKTtcbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBsYW5ndWFnZSB0byByZXRyaWV2ZVxuICAgKiBAcmV0dXJucyB7TGFuZ3VhZ2UgfCB1bmRlZmluZWR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRMYW5ndWFnZShuYW1lKSB7XG4gICAgbmFtZSA9IChuYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBsYW5ndWFnZXNbbmFtZV0gfHwgbGFuZ3VhZ2VzW2FsaWFzZXNbbmFtZV1dO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBhbGlhc0xpc3QgLSBzaW5nbGUgYWxpYXMgb3IgbGlzdCBvZiBhbGlhc2VzXG4gICAqIEBwYXJhbSB7e2xhbmd1YWdlTmFtZTogc3RyaW5nfX0gb3B0c1xuICAgKi9cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBbGlhc2VzKGFsaWFzTGlzdCwgeyBsYW5ndWFnZU5hbWUgfSkge1xuICAgIGlmICh0eXBlb2YgYWxpYXNMaXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgYWxpYXNMaXN0ID0gW2FsaWFzTGlzdF07XG4gICAgfVxuICAgIGFsaWFzTGlzdC5mb3JFYWNoKGFsaWFzID0+IHsgYWxpYXNlc1thbGlhcy50b0xvd2VyQ2FzZSgpXSA9IGxhbmd1YWdlTmFtZTsgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBhIGdpdmVuIGxhbmd1YWdlIGhhcyBhdXRvLWRldGVjdGlvbiBlbmFibGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgbGFuZ3VhZ2VcbiAgICovXG4gIGZ1bmN0aW9uIGF1dG9EZXRlY3Rpb24obmFtZSkge1xuICAgIGNvbnN0IGxhbmcgPSBnZXRMYW5ndWFnZShuYW1lKTtcbiAgICByZXR1cm4gbGFuZyAmJiAhbGFuZy5kaXNhYmxlQXV0b2RldGVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyB0aGUgb2xkIGhpZ2hsaWdodEJsb2NrIHBsdWdpbnMgdG8gdGhlIG5ld1xuICAgKiBoaWdobGlnaHRFbGVtZW50IEFQSVxuICAgKiBAcGFyYW0ge0hMSlNQbHVnaW59IHBsdWdpblxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZVBsdWdpbkFQSShwbHVnaW4pIHtcbiAgICAvLyBUT0RPOiByZW1vdmUgd2l0aCB2MTJcbiAgICBpZiAocGx1Z2luW1wiYmVmb3JlOmhpZ2hsaWdodEJsb2NrXCJdICYmICFwbHVnaW5bXCJiZWZvcmU6aGlnaGxpZ2h0RWxlbWVudFwiXSkge1xuICAgICAgcGx1Z2luW1wiYmVmb3JlOmhpZ2hsaWdodEVsZW1lbnRcIl0gPSAoZGF0YSkgPT4ge1xuICAgICAgICBwbHVnaW5bXCJiZWZvcmU6aGlnaGxpZ2h0QmxvY2tcIl0oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7IGJsb2NrOiBkYXRhLmVsIH0sIGRhdGEpXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAocGx1Z2luW1wiYWZ0ZXI6aGlnaGxpZ2h0QmxvY2tcIl0gJiYgIXBsdWdpbltcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIl0pIHtcbiAgICAgIHBsdWdpbltcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIl0gPSAoZGF0YSkgPT4ge1xuICAgICAgICBwbHVnaW5bXCJhZnRlcjpoaWdobGlnaHRCbG9ja1wiXShcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHsgYmxvY2s6IGRhdGEuZWwgfSwgZGF0YSlcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SExKU1BsdWdpbn0gcGx1Z2luXG4gICAqL1xuICBmdW5jdGlvbiBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgdXBncmFkZVBsdWdpbkFQSShwbHVnaW4pO1xuICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7UGx1Z2luRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7YW55fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBmaXJlKGV2ZW50LCBhcmdzKSB7XG4gICAgY29uc3QgY2IgPSBldmVudDtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICBpZiAocGx1Z2luW2NiXSkge1xuICAgICAgICBwbHVnaW5bY2JdKGFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gIE5vdGU6IGZpeE1hcmt1cCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExXG5cbiAgQHBhcmFtIHtzdHJpbmd9IGFyZ1xuICBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuICBmdW5jdGlvbiBkZXByZWNhdGVGaXhNYXJrdXAoYXJnKSB7XG4gICAgZGVwcmVjYXRlZChcIjEwLjIuMFwiLCBcImZpeE1hcmt1cCB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExLjBcIik7XG4gICAgZGVwcmVjYXRlZChcIjEwLjIuMFwiLCBcIlBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjUzNFwiKTtcblxuICAgIHJldHVybiBmaXhNYXJrdXAoYXJnKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0hpZ2hsaWdodGVkSFRNTEVsZW1lbnR9IGVsXG4gICAqL1xuICBmdW5jdGlvbiBkZXByZWNhdGVIaWdobGlnaHRCbG9jayhlbCkge1xuICAgIGRlcHJlY2F0ZWQoXCIxMC43LjBcIiwgXCJoaWdobGlnaHRCbG9jayB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjEyLjBcIik7XG4gICAgZGVwcmVjYXRlZChcIjEwLjcuMFwiLCBcIlBsZWFzZSB1c2UgaGlnaGxpZ2h0RWxlbWVudCBub3cuXCIpO1xuXG4gICAgcmV0dXJuIGhpZ2hsaWdodEVsZW1lbnQoZWwpO1xuICB9XG5cbiAgLyogSW50ZXJmYWNlIGRlZmluaXRpb24gKi9cbiAgT2JqZWN0LmFzc2lnbihobGpzLCB7XG4gICAgaGlnaGxpZ2h0LFxuICAgIGhpZ2hsaWdodEF1dG8sXG4gICAgaGlnaGxpZ2h0QWxsLFxuICAgIGZpeE1hcmt1cDogZGVwcmVjYXRlRml4TWFya3VwLFxuICAgIGhpZ2hsaWdodEVsZW1lbnQsXG4gICAgLy8gVE9ETzogUmVtb3ZlIHdpdGggdjEyIEFQSVxuICAgIGhpZ2hsaWdodEJsb2NrOiBkZXByZWNhdGVIaWdobGlnaHRCbG9jayxcbiAgICBjb25maWd1cmUsXG4gICAgaW5pdEhpZ2hsaWdodGluZyxcbiAgICBpbml0SGlnaGxpZ2h0aW5nT25Mb2FkLFxuICAgIHJlZ2lzdGVyTGFuZ3VhZ2UsXG4gICAgdW5yZWdpc3Rlckxhbmd1YWdlLFxuICAgIGxpc3RMYW5ndWFnZXMsXG4gICAgZ2V0TGFuZ3VhZ2UsXG4gICAgcmVnaXN0ZXJBbGlhc2VzLFxuICAgIHJlcXVpcmVMYW5ndWFnZSxcbiAgICBhdXRvRGV0ZWN0aW9uLFxuICAgIGluaGVyaXQ6IGluaGVyaXQkMSxcbiAgICBhZGRQbHVnaW4sXG4gICAgLy8gcGx1Z2lucyBmb3IgZnJhbWV3b3Jrc1xuICAgIHZ1ZVBsdWdpbjogQnVpbGRWdWVQbHVnaW4oaGxqcykuVnVlUGx1Z2luXG4gIH0pO1xuXG4gIGhsanMuZGVidWdNb2RlID0gZnVuY3Rpb24oKSB7IFNBRkVfTU9ERSA9IGZhbHNlOyB9O1xuICBobGpzLnNhZmVNb2RlID0gZnVuY3Rpb24oKSB7IFNBRkVfTU9ERSA9IHRydWU7IH07XG4gIGhsanMudmVyc2lvblN0cmluZyA9IHZlcnNpb247XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gTU9ERVMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHR5cGVvZiBNT0RFU1trZXldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBkZWVwRnJlZXplRXM2KE1PREVTW2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1lcmdlIGFsbCB0aGUgbW9kZXMvcmVnZXhzIGludG8gb3VyIG1haW4gb2JqZWN0XG4gIE9iamVjdC5hc3NpZ24oaGxqcywgTU9ERVMpO1xuXG4gIC8vIGJ1aWx0LWluIHBsdWdpbnMsIGxpa2VseSB0byBiZSBtb3ZlZCBvdXQgb2YgY29yZSBpbiB0aGUgZnV0dXJlXG4gIGhsanMuYWRkUGx1Z2luKGJyUGx1Z2luKTsgLy8gc2xhdGVkIHRvIGJlIHJlbW92ZWQgaW4gdjExXG4gIGhsanMuYWRkUGx1Z2luKG1lcmdlSFRNTFBsdWdpbik7XG4gIGhsanMuYWRkUGx1Z2luKHRhYlJlcGxhY2VQbHVnaW4pO1xuICByZXR1cm4gaGxqcztcbn07XG5cbi8vIGV4cG9ydCBhbiBcImluc3RhbmNlXCIgb2YgdGhlIGhpZ2hsaWdodGVyXG52YXIgaGlnaGxpZ2h0ID0gSExKUyh7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gaGlnaGxpZ2h0O1xuIiwiY29uc3QgTU9ERVMgPSAoaGxqcykgPT4ge1xuICByZXR1cm4ge1xuICAgIElNUE9SVEFOVDoge1xuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogJyFpbXBvcnRhbnQnXG4gICAgfSxcbiAgICBIRVhDT0xPUjoge1xuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiAnIyhbYS1mQS1GMC05XXs2fXxbYS1mQS1GMC05XXszfSknXG4gICAgfSxcbiAgICBBVFRSSUJVVEVfU0VMRUNUT1JfTU9ERToge1xuICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItYXR0cicsXG4gICAgICBiZWdpbjogL1xcWy8sXG4gICAgICBlbmQ6IC9cXF0vLFxuICAgICAgaWxsZWdhbDogJyQnLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICBdXG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgVEFHUyA9IFtcbiAgJ2EnLFxuICAnYWJicicsXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYXVkaW8nLFxuICAnYicsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnYnV0dG9uJyxcbiAgJ2NhbnZhcycsXG4gICdjYXB0aW9uJyxcbiAgJ2NpdGUnLFxuICAnY29kZScsXG4gICdkZCcsXG4gICdkZWwnLFxuICAnZGV0YWlscycsXG4gICdkZm4nLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2VtJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHRtbCcsXG4gICdpJyxcbiAgJ2lmcmFtZScsXG4gICdpbWcnLFxuICAnaW5wdXQnLFxuICAnaW5zJyxcbiAgJ2tiZCcsXG4gICdsYWJlbCcsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbWFpbicsXG4gICdtYXJrJyxcbiAgJ21lbnUnLFxuICAnbmF2JyxcbiAgJ29iamVjdCcsXG4gICdvbCcsXG4gICdwJyxcbiAgJ3EnLFxuICAncXVvdGUnLFxuICAnc2FtcCcsXG4gICdzZWN0aW9uJyxcbiAgJ3NwYW4nLFxuICAnc3Ryb25nJyxcbiAgJ3N1bW1hcnknLFxuICAnc3VwJyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RoZWFkJyxcbiAgJ3RpbWUnLFxuICAndHInLFxuICAndWwnLFxuICAndmFyJyxcbiAgJ3ZpZGVvJ1xuXTtcblxuY29uc3QgTUVESUFfRkVBVFVSRVMgPSBbXG4gICdhbnktaG92ZXInLFxuICAnYW55LXBvaW50ZXInLFxuICAnYXNwZWN0LXJhdGlvJyxcbiAgJ2NvbG9yJyxcbiAgJ2NvbG9yLWdhbXV0JyxcbiAgJ2NvbG9yLWluZGV4JyxcbiAgJ2RldmljZS1hc3BlY3QtcmF0aW8nLFxuICAnZGV2aWNlLWhlaWdodCcsXG4gICdkZXZpY2Utd2lkdGgnLFxuICAnZGlzcGxheS1tb2RlJyxcbiAgJ2ZvcmNlZC1jb2xvcnMnLFxuICAnZ3JpZCcsXG4gICdoZWlnaHQnLFxuICAnaG92ZXInLFxuICAnaW52ZXJ0ZWQtY29sb3JzJyxcbiAgJ21vbm9jaHJvbWUnLFxuICAnb3JpZW50YXRpb24nLFxuICAnb3ZlcmZsb3ctYmxvY2snLFxuICAnb3ZlcmZsb3ctaW5saW5lJyxcbiAgJ3BvaW50ZXInLFxuICAncHJlZmVycy1jb2xvci1zY2hlbWUnLFxuICAncHJlZmVycy1jb250cmFzdCcsXG4gICdwcmVmZXJzLXJlZHVjZWQtbW90aW9uJyxcbiAgJ3ByZWZlcnMtcmVkdWNlZC10cmFuc3BhcmVuY3knLFxuICAncmVzb2x1dGlvbicsXG4gICdzY2FuJyxcbiAgJ3NjcmlwdGluZycsXG4gICd1cGRhdGUnLFxuICAnd2lkdGgnLFxuICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHNvbHV0aW9uP1xuICAnbWluLXdpZHRoJyxcbiAgJ21heC13aWR0aCcsXG4gICdtaW4taGVpZ2h0JyxcbiAgJ21heC1oZWlnaHQnXG5dO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWNsYXNzZXNcbmNvbnN0IFBTRVVET19DTEFTU0VTID0gW1xuICAnYWN0aXZlJyxcbiAgJ2FueS1saW5rJyxcbiAgJ2JsYW5rJyxcbiAgJ2NoZWNrZWQnLFxuICAnY3VycmVudCcsXG4gICdkZWZhdWx0JyxcbiAgJ2RlZmluZWQnLFxuICAnZGlyJywgLy8gZGlyKClcbiAgJ2Rpc2FibGVkJyxcbiAgJ2Ryb3AnLFxuICAnZW1wdHknLFxuICAnZW5hYmxlZCcsXG4gICdmaXJzdCcsXG4gICdmaXJzdC1jaGlsZCcsXG4gICdmaXJzdC1vZi10eXBlJyxcbiAgJ2Z1bGxzY3JlZW4nLFxuICAnZnV0dXJlJyxcbiAgJ2ZvY3VzJyxcbiAgJ2ZvY3VzLXZpc2libGUnLFxuICAnZm9jdXMtd2l0aGluJyxcbiAgJ2hhcycsIC8vIGhhcygpXG4gICdob3N0JywgLy8gaG9zdCBvciBob3N0KClcbiAgJ2hvc3QtY29udGV4dCcsIC8vIGhvc3QtY29udGV4dCgpXG4gICdob3ZlcicsXG4gICdpbmRldGVybWluYXRlJyxcbiAgJ2luLXJhbmdlJyxcbiAgJ2ludmFsaWQnLFxuICAnaXMnLCAvLyBpcygpXG4gICdsYW5nJywgLy8gbGFuZygpXG4gICdsYXN0LWNoaWxkJyxcbiAgJ2xhc3Qtb2YtdHlwZScsXG4gICdsZWZ0JyxcbiAgJ2xpbmsnLFxuICAnbG9jYWwtbGluaycsXG4gICdub3QnLCAvLyBub3QoKVxuICAnbnRoLWNoaWxkJywgLy8gbnRoLWNoaWxkKClcbiAgJ250aC1jb2wnLCAvLyBudGgtY29sKClcbiAgJ250aC1sYXN0LWNoaWxkJywgLy8gbnRoLWxhc3QtY2hpbGQoKVxuICAnbnRoLWxhc3QtY29sJywgLy8gbnRoLWxhc3QtY29sKClcbiAgJ250aC1sYXN0LW9mLXR5cGUnLCAvL250aC1sYXN0LW9mLXR5cGUoKVxuICAnbnRoLW9mLXR5cGUnLCAvL250aC1vZi10eXBlKClcbiAgJ29ubHktY2hpbGQnLFxuICAnb25seS1vZi10eXBlJyxcbiAgJ29wdGlvbmFsJyxcbiAgJ291dC1vZi1yYW5nZScsXG4gICdwYXN0JyxcbiAgJ3BsYWNlaG9sZGVyLXNob3duJyxcbiAgJ3JlYWQtb25seScsXG4gICdyZWFkLXdyaXRlJyxcbiAgJ3JlcXVpcmVkJyxcbiAgJ3JpZ2h0JyxcbiAgJ3Jvb3QnLFxuICAnc2NvcGUnLFxuICAndGFyZ2V0JyxcbiAgJ3RhcmdldC13aXRoaW4nLFxuICAndXNlci1pbnZhbGlkJyxcbiAgJ3ZhbGlkJyxcbiAgJ3Zpc2l0ZWQnLFxuICAnd2hlcmUnIC8vIHdoZXJlKClcbl07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbmNvbnN0IFBTRVVET19FTEVNRU5UUyA9IFtcbiAgJ2FmdGVyJyxcbiAgJ2JhY2tkcm9wJyxcbiAgJ2JlZm9yZScsXG4gICdjdWUnLFxuICAnY3VlLXJlZ2lvbicsXG4gICdmaXJzdC1sZXR0ZXInLFxuICAnZmlyc3QtbGluZScsXG4gICdncmFtbWFyLWVycm9yJyxcbiAgJ21hcmtlcicsXG4gICdwYXJ0JyxcbiAgJ3BsYWNlaG9sZGVyJyxcbiAgJ3NlbGVjdGlvbicsXG4gICdzbG90dGVkJyxcbiAgJ3NwZWxsaW5nLWVycm9yJ1xuXTtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtcbiAgJ2FsaWduLWNvbnRlbnQnLFxuICAnYWxpZ24taXRlbXMnLFxuICAnYWxpZ24tc2VsZicsXG4gICdhbmltYXRpb24nLFxuICAnYW5pbWF0aW9uLWRlbGF5JyxcbiAgJ2FuaW1hdGlvbi1kaXJlY3Rpb24nLFxuICAnYW5pbWF0aW9uLWR1cmF0aW9uJyxcbiAgJ2FuaW1hdGlvbi1maWxsLW1vZGUnLFxuICAnYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCcsXG4gICdhbmltYXRpb24tbmFtZScsXG4gICdhbmltYXRpb24tcGxheS1zdGF0ZScsXG4gICdhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgJ2F1dG8nLFxuICAnYmFja2ZhY2UtdmlzaWJpbGl0eScsXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2JhY2tncm91bmQtYXR0YWNobWVudCcsXG4gICdiYWNrZ3JvdW5kLWNsaXAnLFxuICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICdiYWNrZ3JvdW5kLWltYWdlJyxcbiAgJ2JhY2tncm91bmQtb3JpZ2luJyxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24nLFxuICAnYmFja2dyb3VuZC1yZXBlYXQnLFxuICAnYmFja2dyb3VuZC1zaXplJyxcbiAgJ2JvcmRlcicsXG4gICdib3JkZXItYm90dG9tJyxcbiAgJ2JvcmRlci1ib3R0b20tY29sb3InLFxuICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsXG4gICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsXG4gICdib3JkZXItYm90dG9tLXN0eWxlJyxcbiAgJ2JvcmRlci1ib3R0b20td2lkdGgnLFxuICAnYm9yZGVyLWNvbGxhcHNlJyxcbiAgJ2JvcmRlci1jb2xvcicsXG4gICdib3JkZXItaW1hZ2UnLFxuICAnYm9yZGVyLWltYWdlLW91dHNldCcsXG4gICdib3JkZXItaW1hZ2UtcmVwZWF0JyxcbiAgJ2JvcmRlci1pbWFnZS1zbGljZScsXG4gICdib3JkZXItaW1hZ2Utc291cmNlJyxcbiAgJ2JvcmRlci1pbWFnZS13aWR0aCcsXG4gICdib3JkZXItbGVmdCcsXG4gICdib3JkZXItbGVmdC1jb2xvcicsXG4gICdib3JkZXItbGVmdC1zdHlsZScsXG4gICdib3JkZXItbGVmdC13aWR0aCcsXG4gICdib3JkZXItcmFkaXVzJyxcbiAgJ2JvcmRlci1yaWdodCcsXG4gICdib3JkZXItcmlnaHQtY29sb3InLFxuICAnYm9yZGVyLXJpZ2h0LXN0eWxlJyxcbiAgJ2JvcmRlci1yaWdodC13aWR0aCcsXG4gICdib3JkZXItc3BhY2luZycsXG4gICdib3JkZXItc3R5bGUnLFxuICAnYm9yZGVyLXRvcCcsXG4gICdib3JkZXItdG9wLWNvbG9yJyxcbiAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLFxuICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLFxuICAnYm9yZGVyLXRvcC1zdHlsZScsXG4gICdib3JkZXItdG9wLXdpZHRoJyxcbiAgJ2JvcmRlci13aWR0aCcsXG4gICdib3R0b20nLFxuICAnYm94LWRlY29yYXRpb24tYnJlYWsnLFxuICAnYm94LXNoYWRvdycsXG4gICdib3gtc2l6aW5nJyxcbiAgJ2JyZWFrLWFmdGVyJyxcbiAgJ2JyZWFrLWJlZm9yZScsXG4gICdicmVhay1pbnNpZGUnLFxuICAnY2FwdGlvbi1zaWRlJyxcbiAgJ2NsZWFyJyxcbiAgJ2NsaXAnLFxuICAnY2xpcC1wYXRoJyxcbiAgJ2NvbG9yJyxcbiAgJ2NvbHVtbi1jb3VudCcsXG4gICdjb2x1bW4tZmlsbCcsXG4gICdjb2x1bW4tZ2FwJyxcbiAgJ2NvbHVtbi1ydWxlJyxcbiAgJ2NvbHVtbi1ydWxlLWNvbG9yJyxcbiAgJ2NvbHVtbi1ydWxlLXN0eWxlJyxcbiAgJ2NvbHVtbi1ydWxlLXdpZHRoJyxcbiAgJ2NvbHVtbi1zcGFuJyxcbiAgJ2NvbHVtbi13aWR0aCcsXG4gICdjb2x1bW5zJyxcbiAgJ2NvbnRlbnQnLFxuICAnY291bnRlci1pbmNyZW1lbnQnLFxuICAnY291bnRlci1yZXNldCcsXG4gICdjdXJzb3InLFxuICAnZGlyZWN0aW9uJyxcbiAgJ2Rpc3BsYXknLFxuICAnZW1wdHktY2VsbHMnLFxuICAnZmlsdGVyJyxcbiAgJ2ZsZXgnLFxuICAnZmxleC1iYXNpcycsXG4gICdmbGV4LWRpcmVjdGlvbicsXG4gICdmbGV4LWZsb3cnLFxuICAnZmxleC1ncm93JyxcbiAgJ2ZsZXgtc2hyaW5rJyxcbiAgJ2ZsZXgtd3JhcCcsXG4gICdmbG9hdCcsXG4gICdmb250JyxcbiAgJ2ZvbnQtZGlzcGxheScsXG4gICdmb250LWZhbWlseScsXG4gICdmb250LWZlYXR1cmUtc2V0dGluZ3MnLFxuICAnZm9udC1rZXJuaW5nJyxcbiAgJ2ZvbnQtbGFuZ3VhZ2Utb3ZlcnJpZGUnLFxuICAnZm9udC1zaXplJyxcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAnZm9udC1zbW9vdGhpbmcnLFxuICAnZm9udC1zdHJldGNoJyxcbiAgJ2ZvbnQtc3R5bGUnLFxuICAnZm9udC12YXJpYW50JyxcbiAgJ2ZvbnQtdmFyaWFudC1saWdhdHVyZXMnLFxuICAnZm9udC12YXJpYXRpb24tc2V0dGluZ3MnLFxuICAnZm9udC13ZWlnaHQnLFxuICAnaGVpZ2h0JyxcbiAgJ2h5cGhlbnMnLFxuICAnaWNvbicsXG4gICdpbWFnZS1vcmllbnRhdGlvbicsXG4gICdpbWFnZS1yZW5kZXJpbmcnLFxuICAnaW1hZ2UtcmVzb2x1dGlvbicsXG4gICdpbWUtbW9kZScsXG4gICdpbmhlcml0JyxcbiAgJ2luaXRpYWwnLFxuICAnanVzdGlmeS1jb250ZW50JyxcbiAgJ2xlZnQnLFxuICAnbGV0dGVyLXNwYWNpbmcnLFxuICAnbGluZS1oZWlnaHQnLFxuICAnbGlzdC1zdHlsZScsXG4gICdsaXN0LXN0eWxlLWltYWdlJyxcbiAgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nLFxuICAnbGlzdC1zdHlsZS10eXBlJyxcbiAgJ21hcmdpbicsXG4gICdtYXJnaW4tYm90dG9tJyxcbiAgJ21hcmdpbi1sZWZ0JyxcbiAgJ21hcmdpbi1yaWdodCcsXG4gICdtYXJnaW4tdG9wJyxcbiAgJ21hcmtzJyxcbiAgJ21hc2snLFxuICAnbWF4LWhlaWdodCcsXG4gICdtYXgtd2lkdGgnLFxuICAnbWluLWhlaWdodCcsXG4gICdtaW4td2lkdGgnLFxuICAnbmF2LWRvd24nLFxuICAnbmF2LWluZGV4JyxcbiAgJ25hdi1sZWZ0JyxcbiAgJ25hdi1yaWdodCcsXG4gICduYXYtdXAnLFxuICAnbm9uZScsXG4gICdub3JtYWwnLFxuICAnb2JqZWN0LWZpdCcsXG4gICdvYmplY3QtcG9zaXRpb24nLFxuICAnb3BhY2l0eScsXG4gICdvcmRlcicsXG4gICdvcnBoYW5zJyxcbiAgJ291dGxpbmUnLFxuICAnb3V0bGluZS1jb2xvcicsXG4gICdvdXRsaW5lLW9mZnNldCcsXG4gICdvdXRsaW5lLXN0eWxlJyxcbiAgJ291dGxpbmUtd2lkdGgnLFxuICAnb3ZlcmZsb3cnLFxuICAnb3ZlcmZsb3ctd3JhcCcsXG4gICdvdmVyZmxvdy14JyxcbiAgJ292ZXJmbG93LXknLFxuICAncGFkZGluZycsXG4gICdwYWRkaW5nLWJvdHRvbScsXG4gICdwYWRkaW5nLWxlZnQnLFxuICAncGFkZGluZy1yaWdodCcsXG4gICdwYWRkaW5nLXRvcCcsXG4gICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgJ3BhZ2UtYnJlYWstYmVmb3JlJyxcbiAgJ3BhZ2UtYnJlYWstaW5zaWRlJyxcbiAgJ3BlcnNwZWN0aXZlJyxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbicsXG4gICdwb2ludGVyLWV2ZW50cycsXG4gICdwb3NpdGlvbicsXG4gICdxdW90ZXMnLFxuICAncmVzaXplJyxcbiAgJ3JpZ2h0JyxcbiAgJ3NyYycsIC8vIEBmb250LWZhY2VcbiAgJ3RhYi1zaXplJyxcbiAgJ3RhYmxlLWxheW91dCcsXG4gICd0ZXh0LWFsaWduJyxcbiAgJ3RleHQtYWxpZ24tbGFzdCcsXG4gICd0ZXh0LWRlY29yYXRpb24nLFxuICAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1saW5lJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1zdHlsZScsXG4gICd0ZXh0LWluZGVudCcsXG4gICd0ZXh0LW92ZXJmbG93JyxcbiAgJ3RleHQtcmVuZGVyaW5nJyxcbiAgJ3RleHQtc2hhZG93JyxcbiAgJ3RleHQtdHJhbnNmb3JtJyxcbiAgJ3RleHQtdW5kZXJsaW5lLXBvc2l0aW9uJyxcbiAgJ3RvcCcsXG4gICd0cmFuc2Zvcm0nLFxuICAndHJhbnNmb3JtLW9yaWdpbicsXG4gICd0cmFuc2Zvcm0tc3R5bGUnLFxuICAndHJhbnNpdGlvbicsXG4gICd0cmFuc2l0aW9uLWRlbGF5JyxcbiAgJ3RyYW5zaXRpb24tZHVyYXRpb24nLFxuICAndHJhbnNpdGlvbi1wcm9wZXJ0eScsXG4gICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICd1bmljb2RlLWJpZGknLFxuICAndmVydGljYWwtYWxpZ24nLFxuICAndmlzaWJpbGl0eScsXG4gICd3aGl0ZS1zcGFjZScsXG4gICd3aWRvd3MnLFxuICAnd2lkdGgnLFxuICAnd29yZC1icmVhaycsXG4gICd3b3JkLXNwYWNpbmcnLFxuICAnd29yZC13cmFwJyxcbiAgJ3otaW5kZXgnXG4gIC8vIHJldmVyc2UgbWFrZXMgc3VyZSBsb25nZXIgYXR0cmlidXRlcyBgZm9udC13ZWlnaHRgIGFyZSBtYXRjaGVkIGZ1bGx5XG4gIC8vIGluc3RlYWQgb2YgZ2V0dGluZyBmYWxzZSBwb3NpdGl2ZXMgb24gc2F5IGBmb250YFxuXS5yZXZlcnNlKCk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2thaGVhZChyZSkge1xuICByZXR1cm4gY29uY2F0KCcoPz0nLCByZSwgJyknKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBDU1NcbkNhdGVnb3J5OiBjb21tb24sIGNzc1xuV2Vic2l0ZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY3NzKGhsanMpIHtcbiAgY29uc3QgbW9kZXMgPSBNT0RFUyhobGpzKTtcbiAgY29uc3QgRlVOQ1RJT05fRElTUEFUQ0ggPSB7XG4gICAgY2xhc3NOYW1lOiBcImJ1aWx0X2luXCIsXG4gICAgYmVnaW46IC9bXFx3LV0rKD89XFwoKS9cbiAgfTtcbiAgY29uc3QgVkVORE9SX1BSRUZJWCA9IHtcbiAgICBiZWdpbjogLy0od2Via2l0fG1venxtc3xvKS0oPz1bYS16XSkvXG4gIH07XG4gIGNvbnN0IEFUX01PRElGSUVSUyA9IFwiYW5kIG9yIG5vdCBvbmx5XCI7XG4gIGNvbnN0IEFUX1BST1BFUlRZX1JFID0gL0AtP1xcd1tcXHddKigtXFx3KykqLzsgLy8gQC13ZWJraXQta2V5ZnJhbWVzXG4gIGNvbnN0IElERU5UX1JFID0gJ1thLXpBLVotXVthLXpBLVowLTlfLV0qJztcbiAgY29uc3QgU1RSSU5HUyA9IFtcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NTUycsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvWz18J1xcJF0vLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXlmcmFtZVBvc2l0aW9uOiBcImZyb20gdG9cIlxuICAgIH0sXG4gICAgY2xhc3NOYW1lQWxpYXNlczoge1xuICAgICAgLy8gZm9yIHZpc3VhbCBjb250aW51aXR5IHdpdGggYHRhZyB7fWAgYW5kIGJlY2F1c2Ugd2VcbiAgICAgIC8vIGRvbid0IGhhdmUgYSBncmVhdCBjbGFzcyBmb3IgdGhpcz9cbiAgICAgIGtleWZyYW1lUG9zaXRpb246IFwic2VsZWN0b3ItdGFnXCJcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgVkVORE9SX1BSRUZJWCxcbiAgICAgIC8vIHRvIHJlY29nbml6ZSBrZXlmcmFtZSA0MCUgZXRjIHdoaWNoIGFyZSBvdXRzaWRlIHRoZSBzY29wZSBvZiBvdXJcbiAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZSBtb2RlXG4gICAgICBobGpzLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItaWQnLFxuICAgICAgICBiZWdpbjogLyNbQS1aYS16MC05Xy1dKy8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItY2xhc3MnLFxuICAgICAgICBiZWdpbjogJ1xcXFwuJyArIElERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBtb2Rlcy5BVFRSSUJVVEVfU0VMRUNUT1JfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJzooJyArIFBTRVVET19DTEFTU0VTLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICc6OignICsgUFNFVURPX0VMRU1FTlRTLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIHdlIG1heSBhY3R1YWxseSBuZWVkIHRoaXMgKDEyLzIwMjApXG4gICAgICAvLyB7IC8vIHBzZXVkby1zZWxlY3RvciBwYXJhbXNcbiAgICAgIC8vICAgYmVnaW46IC9cXCgvLFxuICAgICAgLy8gICBlbmQ6IC9cXCkvLFxuICAgICAgLy8gICBjb250YWluczogWyBobGpzLkNTU19OVU1CRVJfTU9ERSBdXG4gICAgICAvLyB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBBVFRSSUJVVEVTLmpvaW4oJ3wnKSArICcpXFxcXGInXG4gICAgICB9LFxuICAgICAgLy8gYXR0cmlidXRlIHZhbHVlc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJzonLFxuICAgICAgICBlbmQ6ICdbO31dJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBtb2Rlcy5IRVhDT0xPUixcbiAgICAgICAgICBtb2Rlcy5JTVBPUlRBTlQsXG4gICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgICAgLi4uU1RSSU5HUyxcbiAgICAgICAgICAvLyBuZWVkZWQgdG8gaGlnaGxpZ2h0IHRoZXNlIGFzIHN0cmluZ3MgYW5kIHRvIGF2b2lkIGlzc3VlcyB3aXRoXG4gICAgICAgICAgLy8gaWxsZWdhbCBjaGFyYWN0ZXJzIHRoYXQgbWlnaHQgYmUgaW5zaWRlIHVybHMgdGhhdCB3b3VsZCB0aWdnZXIgdGhlXG4gICAgICAgICAgLy8gbGFuZ3VhZ2VzIGlsbGVnYWwgc3RhY2tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLyh1cmx8ZGF0YS11cmkpXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsIC8vIGZyb20ga2V5d29yZHNcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgIGJ1aWx0X2luOiBcInVybCBkYXRhLXVyaVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAvLyBhbnkgY2hhcmFjdGVyIG90aGVyIHRoYW4gYClgIGFzIGluIGB1cmwoKWAgd2lsbCBiZSB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBvZiBhIHN0cmluZywgd2hpY2ggZW5kcyB3aXRoIGApYCAoZnJvbSB0aGUgcGFyZW50IG1vZGUpXG4gICAgICAgICAgICAgICAgYmVnaW46IC9bXildLyxcbiAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEZVTkNUSU9OX0RJU1BBVENIXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBsb29rYWhlYWQoL0AvKSxcbiAgICAgICAgZW5kOiAnW3s7XScsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgaWxsZWdhbDogLzovLCAvLyBicmVhayBvbiBMZXNzIHZhcmlhYmxlcyBAdmFyOiAuLi5cbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgIGJlZ2luOiBBVF9QUk9QRVJUWV9SRVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXHMvLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICAgJHBhdHRlcm46IC9bYS16LV0rLyxcbiAgICAgICAgICAgICAga2V5d29yZDogQVRfTU9ESUZJRVJTLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGU6IE1FRElBX0ZFQVRVUkVTLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvW2Etei1dKyg/PTopLyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLi4uU1RSSU5HUyxcbiAgICAgICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXRhZycsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIFRBR1Muam9pbignfCcpICsgJylcXFxcYidcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzO1xuIiwiY29uc3QgSURFTlRfUkUgPSAnW0EtWmEteiRfXVswLTlBLVphLXokX10qJztcbmNvbnN0IEtFWVdPUkRTID0gW1xuICBcImFzXCIsIC8vIGZvciBleHBvcnRzXG4gIFwiaW5cIixcbiAgXCJvZlwiLFxuICBcImlmXCIsXG4gIFwiZm9yXCIsXG4gIFwid2hpbGVcIixcbiAgXCJmaW5hbGx5XCIsXG4gIFwidmFyXCIsXG4gIFwibmV3XCIsXG4gIFwiZnVuY3Rpb25cIixcbiAgXCJkb1wiLFxuICBcInJldHVyblwiLFxuICBcInZvaWRcIixcbiAgXCJlbHNlXCIsXG4gIFwiYnJlYWtcIixcbiAgXCJjYXRjaFwiLFxuICBcImluc3RhbmNlb2ZcIixcbiAgXCJ3aXRoXCIsXG4gIFwidGhyb3dcIixcbiAgXCJjYXNlXCIsXG4gIFwiZGVmYXVsdFwiLFxuICBcInRyeVwiLFxuICBcInN3aXRjaFwiLFxuICBcImNvbnRpbnVlXCIsXG4gIFwidHlwZW9mXCIsXG4gIFwiZGVsZXRlXCIsXG4gIFwibGV0XCIsXG4gIFwieWllbGRcIixcbiAgXCJjb25zdFwiLFxuICBcImNsYXNzXCIsXG4gIC8vIEpTIGhhbmRsZXMgdGhlc2Ugd2l0aCBhIHNwZWNpYWwgcnVsZVxuICAvLyBcImdldFwiLFxuICAvLyBcInNldFwiLFxuICBcImRlYnVnZ2VyXCIsXG4gIFwiYXN5bmNcIixcbiAgXCJhd2FpdFwiLFxuICBcInN0YXRpY1wiLFxuICBcImltcG9ydFwiLFxuICBcImZyb21cIixcbiAgXCJleHBvcnRcIixcbiAgXCJleHRlbmRzXCJcbl07XG5jb25zdCBMSVRFUkFMUyA9IFtcbiAgXCJ0cnVlXCIsXG4gIFwiZmFsc2VcIixcbiAgXCJudWxsXCIsXG4gIFwidW5kZWZpbmVkXCIsXG4gIFwiTmFOXCIsXG4gIFwiSW5maW5pdHlcIlxuXTtcblxuY29uc3QgVFlQRVMgPSBbXG4gIFwiSW50bFwiLFxuICBcIkRhdGFWaWV3XCIsXG4gIFwiTnVtYmVyXCIsXG4gIFwiTWF0aFwiLFxuICBcIkRhdGVcIixcbiAgXCJTdHJpbmdcIixcbiAgXCJSZWdFeHBcIixcbiAgXCJPYmplY3RcIixcbiAgXCJGdW5jdGlvblwiLFxuICBcIkJvb2xlYW5cIixcbiAgXCJFcnJvclwiLFxuICBcIlN5bWJvbFwiLFxuICBcIlNldFwiLFxuICBcIk1hcFwiLFxuICBcIldlYWtTZXRcIixcbiAgXCJXZWFrTWFwXCIsXG4gIFwiUHJveHlcIixcbiAgXCJSZWZsZWN0XCIsXG4gIFwiSlNPTlwiLFxuICBcIlByb21pc2VcIixcbiAgXCJGbG9hdDY0QXJyYXlcIixcbiAgXCJJbnQxNkFycmF5XCIsXG4gIFwiSW50MzJBcnJheVwiLFxuICBcIkludDhBcnJheVwiLFxuICBcIlVpbnQxNkFycmF5XCIsXG4gIFwiVWludDMyQXJyYXlcIixcbiAgXCJGbG9hdDMyQXJyYXlcIixcbiAgXCJBcnJheVwiLFxuICBcIlVpbnQ4QXJyYXlcIixcbiAgXCJVaW50OENsYW1wZWRBcnJheVwiLFxuICBcIkFycmF5QnVmZmVyXCIsXG4gIFwiQmlnSW50NjRBcnJheVwiLFxuICBcIkJpZ1VpbnQ2NEFycmF5XCIsXG4gIFwiQmlnSW50XCJcbl07XG5cbmNvbnN0IEVSUk9SX1RZUEVTID0gW1xuICBcIkV2YWxFcnJvclwiLFxuICBcIkludGVybmFsRXJyb3JcIixcbiAgXCJSYW5nZUVycm9yXCIsXG4gIFwiUmVmZXJlbmNlRXJyb3JcIixcbiAgXCJTeW50YXhFcnJvclwiLFxuICBcIlR5cGVFcnJvclwiLFxuICBcIlVSSUVycm9yXCJcbl07XG5cbmNvbnN0IEJVSUxUX0lOX0dMT0JBTFMgPSBbXG4gIFwic2V0SW50ZXJ2YWxcIixcbiAgXCJzZXRUaW1lb3V0XCIsXG4gIFwiY2xlYXJJbnRlcnZhbFwiLFxuICBcImNsZWFyVGltZW91dFwiLFxuXG4gIFwicmVxdWlyZVwiLFxuICBcImV4cG9ydHNcIixcblxuICBcImV2YWxcIixcbiAgXCJpc0Zpbml0ZVwiLFxuICBcImlzTmFOXCIsXG4gIFwicGFyc2VGbG9hdFwiLFxuICBcInBhcnNlSW50XCIsXG4gIFwiZGVjb2RlVVJJXCIsXG4gIFwiZGVjb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZW5jb2RlVVJJXCIsXG4gIFwiZW5jb2RlVVJJQ29tcG9uZW50XCIsXG4gIFwiZXNjYXBlXCIsXG4gIFwidW5lc2NhcGVcIlxuXTtcblxuY29uc3QgQlVJTFRfSU5fVkFSSUFCTEVTID0gW1xuICBcImFyZ3VtZW50c1wiLFxuICBcInRoaXNcIixcbiAgXCJzdXBlclwiLFxuICBcImNvbnNvbGVcIixcbiAgXCJ3aW5kb3dcIixcbiAgXCJkb2N1bWVudFwiLFxuICBcImxvY2FsU3RvcmFnZVwiLFxuICBcIm1vZHVsZVwiLFxuICBcImdsb2JhbFwiIC8vIE5vZGUuanNcbl07XG5cbmNvbnN0IEJVSUxUX0lOUyA9IFtdLmNvbmNhdChcbiAgQlVJTFRfSU5fR0xPQkFMUyxcbiAgQlVJTFRfSU5fVkFSSUFCTEVTLFxuICBUWVBFUyxcbiAgRVJST1JfVFlQRVNcbik7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2thaGVhZChyZSkge1xuICByZXR1cm4gY29uY2F0KCcoPz0nLCByZSwgJyknKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBKYXZhU2NyaXB0XG5EZXNjcmlwdGlvbjogSmF2YVNjcmlwdCAoSlMpIGlzIGEgbGlnaHR3ZWlnaHQsIGludGVycHJldGVkLCBvciBqdXN0LWluLXRpbWUgY29tcGlsZWQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2Ugd2l0aCBmaXJzdC1jbGFzcyBmdW5jdGlvbnMuXG5DYXRlZ29yeTogY29tbW9uLCBzY3JpcHRpbmdcbldlYnNpdGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHRcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBqYXZhc2NyaXB0KGhsanMpIHtcbiAgLyoqXG4gICAqIFRha2VzIGEgc3RyaW5nIGxpa2UgXCI8Qm9vZ2VyXCIgYW5kIGNoZWNrcyB0byBzZWVcbiAgICogaWYgd2UgY2FuIGZpbmQgYSBtYXRjaGluZyBcIjwvQm9vZ2VyXCIgbGF0ZXIgaW4gdGhlXG4gICAqIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2hcbiAgICogQHBhcmFtIHt7YWZ0ZXI6bnVtYmVyfX0gcGFyYW0xXG4gICAqL1xuICBjb25zdCBoYXNDbG9zaW5nVGFnID0gKG1hdGNoLCB7IGFmdGVyIH0pID0+IHtcbiAgICBjb25zdCB0YWcgPSBcIjwvXCIgKyBtYXRjaFswXS5zbGljZSgxKTtcbiAgICBjb25zdCBwb3MgPSBtYXRjaC5pbnB1dC5pbmRleE9mKHRhZywgYWZ0ZXIpO1xuICAgIHJldHVybiBwb3MgIT09IC0xO1xuICB9O1xuXG4gIGNvbnN0IElERU5UX1JFJDEgPSBJREVOVF9SRTtcbiAgY29uc3QgRlJBR01FTlQgPSB7XG4gICAgYmVnaW46ICc8PicsXG4gICAgZW5kOiAnPC8+J1xuICB9O1xuICBjb25zdCBYTUxfVEFHID0ge1xuICAgIGJlZ2luOiAvPFtBLVphLXowLTlcXFxcLl86LV0rLyxcbiAgICBlbmQ6IC9cXC9bQS1aYS16MC05XFxcXC5fOi1dKz58XFwvPi8sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaFxuICAgICAqIEBwYXJhbSB7Q2FsbGJhY2tSZXNwb25zZX0gcmVzcG9uc2VcbiAgICAgKi9cbiAgICBpc1RydWx5T3BlbmluZ1RhZzogKG1hdGNoLCByZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgYWZ0ZXJNYXRjaEluZGV4ID0gbWF0Y2hbMF0ubGVuZ3RoICsgbWF0Y2guaW5kZXg7XG4gICAgICBjb25zdCBuZXh0Q2hhciA9IG1hdGNoLmlucHV0W2FmdGVyTWF0Y2hJbmRleF07XG4gICAgICAvLyBuZXN0ZWQgdHlwZT9cbiAgICAgIC8vIEhUTUwgc2hvdWxkIG5vdCBpbmNsdWRlIGFub3RoZXIgcmF3IGA8YCBpbnNpZGUgYSB0YWdcbiAgICAgIC8vIEJ1dCBhIHR5cGUgbWlnaHQ6IGA8QXJyYXk8QXJyYXk8bnVtYmVyPj5gLCBldGMuXG4gICAgICBpZiAobmV4dENoYXIgPT09IFwiPFwiKSB7XG4gICAgICAgIHJlc3BvbnNlLmlnbm9yZU1hdGNoKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIDxzb21ldGhpbmc+XG4gICAgICAvLyBUaGlzIGlzIG5vdyBlaXRoZXIgYSB0YWcgb3IgYSB0eXBlLlxuICAgICAgaWYgKG5leHRDaGFyID09PSBcIj5cIikge1xuICAgICAgICAvLyBpZiB3ZSBjYW5ub3QgZmluZCBhIG1hdGNoaW5nIGNsb3NpbmcgdGFnLCB0aGVuIHdlXG4gICAgICAgIC8vIHdpbGwgaWdub3JlIGl0XG4gICAgICAgIGlmICghaGFzQ2xvc2luZ1RhZyhtYXRjaCwgeyBhZnRlcjogYWZ0ZXJNYXRjaEluZGV4IH0pKSB7XG4gICAgICAgICAgcmVzcG9uc2UuaWdub3JlTWF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgS0VZV09SRFMkMSA9IHtcbiAgICAkcGF0dGVybjogSURFTlRfUkUsXG4gICAga2V5d29yZDogS0VZV09SRFMsXG4gICAgbGl0ZXJhbDogTElURVJBTFMsXG4gICAgYnVpbHRfaW46IEJVSUxUX0lOU1xuICB9O1xuXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGl0ZXJhbHMtbnVtZXJpYy1saXRlcmFsc1xuICBjb25zdCBkZWNpbWFsRGlnaXRzID0gJ1swLTldKF8/WzAtOV0pKic7XG4gIGNvbnN0IGZyYWMgPSBgXFxcXC4oJHtkZWNpbWFsRGlnaXRzfSlgO1xuICAvLyBEZWNpbWFsSW50ZWdlckxpdGVyYWwsIGluY2x1ZGluZyBBbm5leCBCIE5vbk9jdGFsRGVjaW1hbEludGVnZXJMaXRlcmFsXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYWRkaXRpb25hbC1zeW50YXgtbnVtZXJpYy1saXRlcmFsc1xuICBjb25zdCBkZWNpbWFsSW50ZWdlciA9IGAwfFsxLTldKF8/WzAtOV0pKnwwWzAtN10qWzg5XVswLTldKmA7XG4gIGNvbnN0IE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICAvLyBEZWNpbWFsTGl0ZXJhbFxuICAgICAgeyBiZWdpbjogYChcXFxcYigke2RlY2ltYWxJbnRlZ2VyfSkoKCR7ZnJhY30pfFxcXFwuKT98KCR7ZnJhY30pKWAgK1xuICAgICAgICBgW2VFXVsrLV0/KCR7ZGVjaW1hbERpZ2l0c30pXFxcXGJgIH0sXG4gICAgICB7IGJlZ2luOiBgXFxcXGIoJHtkZWNpbWFsSW50ZWdlcn0pXFxcXGIoKCR7ZnJhY30pXFxcXGJ8XFxcXC4pP3woJHtmcmFjfSlcXFxcYmAgfSxcblxuICAgICAgLy8gRGVjaW1hbEJpZ0ludGVnZXJMaXRlcmFsXG4gICAgICB7IGJlZ2luOiBgXFxcXGIoMHxbMS05XShfP1swLTldKSopblxcXFxiYCB9LFxuXG4gICAgICAvLyBOb25EZWNpbWFsSW50ZWdlckxpdGVyYWxcbiAgICAgIHsgYmVnaW46IFwiXFxcXGIwW3hYXVswLTlhLWZBLUZdKF8/WzAtOWEtZkEtRl0pKm4/XFxcXGJcIiB9LFxuICAgICAgeyBiZWdpbjogXCJcXFxcYjBbYkJdWzAtMV0oXz9bMC0xXSkqbj9cXFxcYlwiIH0sXG4gICAgICB7IGJlZ2luOiBcIlxcXFxiMFtvT11bMC03XShfP1swLTddKSpuP1xcXFxiXCIgfSxcblxuICAgICAgLy8gTGVnYWN5T2N0YWxJbnRlZ2VyTGl0ZXJhbCAoZG9lcyBub3QgaW5jbHVkZSB1bmRlcnNjb3JlIHNlcGFyYXRvcnMpXG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFkZGl0aW9uYWwtc3ludGF4LW51bWVyaWMtbGl0ZXJhbHNcbiAgICAgIHsgYmVnaW46IFwiXFxcXGIwWzAtN10rbj9cXFxcYlwiIH0sXG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICBjb25zdCBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46ICdcXFxcJFxcXFx7JyxcbiAgICBlbmQ6ICdcXFxcfScsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTJDEsXG4gICAgY29udGFpbnM6IFtdIC8vIGRlZmluZWQgbGF0ZXJcbiAgfTtcbiAgY29uc3QgSFRNTF9URU1QTEFURSA9IHtcbiAgICBiZWdpbjogJ2h0bWxgJyxcbiAgICBlbmQ6ICcnLFxuICAgIHN0YXJ0czoge1xuICAgICAgZW5kOiAnYCcsXG4gICAgICByZXR1cm5FbmQ6IGZhbHNlLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICBTVUJTVFxuICAgICAgXSxcbiAgICAgIHN1Ykxhbmd1YWdlOiAneG1sJ1xuICAgIH1cbiAgfTtcbiAgY29uc3QgQ1NTX1RFTVBMQVRFID0ge1xuICAgIGJlZ2luOiAnY3NzYCcsXG4gICAgZW5kOiAnJyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZDogJ2AnLFxuICAgICAgcmV0dXJuRW5kOiBmYWxzZSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgU1VCU1RcbiAgICAgIF0sXG4gICAgICBzdWJMYW5ndWFnZTogJ2NzcydcbiAgICB9XG4gIH07XG4gIGNvbnN0IFRFTVBMQVRFX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnYCcsXG4gICAgZW5kOiAnYCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIFNVQlNUXG4gICAgXVxuICB9O1xuICBjb25zdCBKU0RPQ19DT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgIC9cXC9cXCpcXCooPyFcXC8pLyxcbiAgICAnXFxcXCovJyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICAgICAgICBiZWdpbjogJ0BbQS1aYS16XSsnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFx7JyxcbiAgICAgICAgICAgICAgZW5kOiAnXFxcXH0nLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgYmVnaW46IElERU5UX1JFJDEgKyAnKD89XFxcXHMqKC0pfCQpJyxcbiAgICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gZWF0IHNwYWNlcyAobm90IG5ld2xpbmVzKSBzbyB3ZSBjYW4gZmluZFxuICAgICAgICAgICAgLy8gdHlwZXMgb3IgdmFyaWFibGVzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAvKD89W15cXG5dKVxccy8sXG4gICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgKTtcbiAgY29uc3QgQ09NTUVOVCA9IHtcbiAgICBjbGFzc05hbWU6IFwiY29tbWVudFwiLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICBKU0RPQ19DT01NRU5ULFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcbiAgY29uc3QgU1VCU1RfSU5URVJOQUxTID0gW1xuICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIEhUTUxfVEVNUExBVEUsXG4gICAgQ1NTX1RFTVBMQVRFLFxuICAgIFRFTVBMQVRFX1NUUklORyxcbiAgICBOVU1CRVIsXG4gICAgaGxqcy5SRUdFWFBfTU9ERVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IFNVQlNUX0lOVEVSTkFMU1xuICAgIC5jb25jYXQoe1xuICAgICAgLy8gd2UgbmVlZCB0byBwYWlyIHVwIHt9IGluc2lkZSBvdXIgc3Vic3QgdG8gcHJldmVudFxuICAgICAgLy8gaXQgZnJvbSBlbmRpbmcgdG9vIGVhcmx5IGJ5IG1hdGNoaW5nIGFub3RoZXIgfVxuICAgICAgYmVnaW46IC9cXHsvLFxuICAgICAgZW5kOiAvXFx9LyxcbiAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgXCJzZWxmXCJcbiAgICAgIF0uY29uY2F0KFNVQlNUX0lOVEVSTkFMUylcbiAgICB9KTtcbiAgY29uc3QgU1VCU1RfQU5EX0NPTU1FTlRTID0gW10uY29uY2F0KENPTU1FTlQsIFNVQlNULmNvbnRhaW5zKTtcbiAgY29uc3QgUEFSQU1TX0NPTlRBSU5TID0gU1VCU1RfQU5EX0NPTU1FTlRTLmNvbmNhdChbXG4gICAgLy8gZWF0IHJlY3Vyc2l2ZSBwYXJlbnMgaW4gc3ViIGV4cHJlc3Npb25zXG4gICAge1xuICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgZW5kOiAvXFwpLyxcbiAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgICAgY29udGFpbnM6IFtcInNlbGZcIl0uY29uY2F0KFNVQlNUX0FORF9DT01NRU5UUylcbiAgICB9XG4gIF0pO1xuICBjb25zdCBQQVJBTVMgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICBjb250YWluczogUEFSQU1TX0NPTlRBSU5TXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSmF2YXNjcmlwdCcsXG4gICAgYWxpYXNlczogWydqcycsICdqc3gnLCAnbWpzJywgJ2NqcyddLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgIC8vIHRoaXMgd2lsbCBiZSBleHRlbmRlZCBieSBUeXBlU2NyaXB0XG4gICAgZXhwb3J0czogeyBQQVJBTVNfQ09OVEFJTlMgfSxcbiAgICBpbGxlZ2FsOiAvIyg/IVskX0Etel0pLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5TSEVCQU5HKHtcbiAgICAgICAgbGFiZWw6IFwic2hlYmFuZ1wiLFxuICAgICAgICBiaW5hcnk6IFwibm9kZVwiLFxuICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJ1c2Vfc3RyaWN0XCIsXG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICBiZWdpbjogL15cXHMqWydcIl11c2UgKHN0cmljdHxhc20pWydcIl0vXG4gICAgICB9LFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIEhUTUxfVEVNUExBVEUsXG4gICAgICBDU1NfVEVNUExBVEUsXG4gICAgICBURU1QTEFURV9TVFJJTkcsXG4gICAgICBDT01NRU5ULFxuICAgICAgTlVNQkVSLFxuICAgICAgeyAvLyBvYmplY3QgYXR0ciBjb250YWluZXJcbiAgICAgICAgYmVnaW46IGNvbmNhdCgvW3ssXFxuXVxccyovLFxuICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbG9vayBhaGVhZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSBhY3R1YWxseSBoYXZlIGFuXG4gICAgICAgICAgLy8gYXR0cmlidXRlIGNvbWluZyB1cCBzbyB3ZSBkb24ndCBzdGVhbCBhIGNvbW1hIGZyb20gYSBwb3RlbnRpYWxcbiAgICAgICAgICAvLyBcInZhbHVlXCIgY29udGFpbmVyXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBOT1RFOiB0aGlzIG1pZ2h0IG5vdCB3b3JrIGhvdyB5b3UgdGhpbmsuICBXZSBkb24ndCBhY3R1YWxseSBhbHdheXNcbiAgICAgICAgICAvLyBlbnRlciB0aGlzIG1vZGUgYW5kIHN0YXkuICBJbnN0ZWFkIGl0IG1pZ2h0IG1lcmVseSBtYXRjaCBgLFxuICAgICAgICAgIC8vIDxjb21tZW50cyB1cCBuZXh0PmAgYW5kIHRoZW4gaW1tZWRpYXRlbHkgZW5kIGFmdGVyIHRoZSAsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBmYWlscyB0byBmaW5kIGFueSBhY3R1YWwgYXR0cnMuIEJ1dCB0aGlzIHN0aWxsIGRvZXMgdGhlIGpvYiBiZWNhdXNlXG4gICAgICAgICAgLy8gaXQgcHJldmVudHMgdGhlIHZhbHVlIGNvbnRhaW4gcnVsZSBmcm9tIGdyYWJiaW5nIHRoaXMgaW5zdGVhZCBhbmRcbiAgICAgICAgICAvLyBwcmV2ZW5pbmcgdGhpcyBydWxlIGZyb20gZmlyaW5nIHdoZW4gd2UgYWN0dWFsbHkgRE8gaGF2ZSBrZXlzLlxuICAgICAgICAgIGxvb2thaGVhZChjb25jYXQoXG4gICAgICAgICAgICAvLyB3ZSBhbHNvIG5lZWQgdG8gYWxsb3cgZm9yIG11bHRpcGxlIHBvc3NpYmxlIGNvbW1lbnRzIGluYmV0d2VlblxuICAgICAgICAgICAgLy8gdGhlIGZpcnN0IGtleTp2YWx1ZSBwYWlyaW5nXG4gICAgICAgICAgICAvKCgoXFwvXFwvLiokKXwoXFwvXFwqKFxcKlteL118W14qXSkqXFwqXFwvKSlcXHMqKSovLFxuICAgICAgICAgICAgSURFTlRfUkUkMSArICdcXFxccyo6JykpKSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgYmVnaW46IElERU5UX1JFJDEgKyBsb29rYWhlYWQoJ1xcXFxzKjonKSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgLy8gXCJ2YWx1ZVwiIGNvbnRhaW5lclxuICAgICAgICBiZWdpbjogJygnICsgaGxqcy5SRV9TVEFSVEVSU19SRSArICd8XFxcXGIoY2FzZXxyZXR1cm58dGhyb3cpXFxcXGIpXFxcXHMqJyxcbiAgICAgICAga2V5d29yZHM6ICdyZXR1cm4gdGhyb3cgY2FzZScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgQ09NTUVOVCxcbiAgICAgICAgICBobGpzLlJFR0VYUF9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gY291bnQgdGhlIHBhcmVucyB0byBtYWtlIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSB0aGVcbiAgICAgICAgICAgIC8vIGNvcnJlY3QgYm91bmRpbmcgKCApIGJlZm9yZSB0aGUgPT4uICBUaGVyZSBjb3VsZCBiZSBhbnkgbnVtYmVyIG9mXG4gICAgICAgICAgICAvLyBzdWItZXhwcmVzc2lvbnMgaW5zaWRlIGFsc28gc3Vycm91bmRlZCBieSBwYXJlbnMuXG4gICAgICAgICAgICBiZWdpbjogJyhcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKihcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKihcXFxcKCcgK1xuICAgICAgICAgICAgJ1teKCldKicgK1xuICAgICAgICAgICAgJ1xcXFwpW14oKV0qKSonICtcbiAgICAgICAgICAgICdcXFxcKVteKCldKikqJyArXG4gICAgICAgICAgICAnXFxcXCl8JyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICcpXFxcXHMqPT4nLFxuICAgICAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgICAgICBlbmQ6ICdcXFxccyo9PicsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXChcXHMqXFwpLyxcbiAgICAgICAgICAgICAgICAgICAgc2tpcDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXCgvLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmRzOiBLRVlXT1JEUyQxLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluczogUEFSQU1TX0NPTlRBSU5TXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIGNvdWxkIGJlIGEgY29tbWEgZGVsaW1pdGVkIGxpc3Qgb2YgcGFyYW1zIHRvIGEgZnVuY3Rpb24gY2FsbFxuICAgICAgICAgICAgYmVnaW46IC8sLywgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgYmVnaW46IC9cXHMvLFxuICAgICAgICAgICAgZW5kOiAvXFxzKi8sXG4gICAgICAgICAgICBza2lwOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IC8vIEpTWFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogRlJBR01FTlQuYmVnaW4sIGVuZDogRlJBR01FTlQuZW5kIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogWE1MX1RBRy5iZWdpbixcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYXJlZnVsbHkgY2hlY2sgdGhlIG9wZW5pbmcgdGFnIHRvIHNlZSBpZiBpdCB0cnVseVxuICAgICAgICAgICAgICAgIC8vIGlzIGEgdGFnIGFuZCBub3QgYSBmYWxzZSBwb3NpdGl2ZVxuICAgICAgICAgICAgICAgICdvbjpiZWdpbic6IFhNTF9UQUcuaXNUcnVseU9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgZW5kOiBYTUxfVEFHLmVuZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBYTUxfVEFHLmJlZ2luLFxuICAgICAgICAgICAgICAgIGVuZDogWE1MX1RBRy5lbmQsXG4gICAgICAgICAgICAgICAgc2tpcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbicsXG4gICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMkMSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwgeyBiZWdpbjogSURFTlRfUkUkMSB9KSxcbiAgICAgICAgICBQQVJBTVNcbiAgICAgICAgXSxcbiAgICAgICAgaWxsZWdhbDogLyUvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBwcmV2ZW50IHRoaXMgZnJvbSBnZXR0aW5nIHN3YWxsb3dlZCB1cCBieSBmdW5jdGlvblxuICAgICAgICAvLyBzaW5jZSB0aGV5IGFwcGVhciBcImZ1bmN0aW9uIGxpa2VcIlxuICAgICAgICBiZWdpbktleXdvcmRzOiBcIndoaWxlIGlmIHN3aXRjaCBjYXRjaCBmb3JcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIGNvdW50IHRoZSBwYXJlbnMgdG8gbWFrZSBzdXJlIHdlIGFjdHVhbGx5IGhhdmUgdGhlIGNvcnJlY3RcbiAgICAgICAgLy8gYm91bmRpbmcgKCApLiAgVGhlcmUgY291bGQgYmUgYW55IG51bWJlciBvZiBzdWItZXhwcmVzc2lvbnMgaW5zaWRlXG4gICAgICAgIC8vIGFsc28gc3Vycm91bmRlZCBieSBwYXJlbnMuXG4gICAgICAgIGJlZ2luOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUgK1xuICAgICAgICAgICdcXFxcKCcgKyAvLyBmaXJzdCBwYXJlbnNcbiAgICAgICAgICAnW14oKV0qKFxcXFwoJyArXG4gICAgICAgICAgICAnW14oKV0qKFxcXFwoJyArXG4gICAgICAgICAgICAgICdbXigpXSonICtcbiAgICAgICAgICAgICdcXFxcKVteKCldKikqJyArXG4gICAgICAgICAgJ1xcXFwpW14oKV0qKSonICtcbiAgICAgICAgICAnXFxcXClcXFxccypcXFxceycsIC8vIGVuZCBwYXJlbnNcbiAgICAgICAgcmV0dXJuQmVnaW46dHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBQQVJBTVMsXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwgeyBiZWdpbjogSURFTlRfUkUkMSB9KSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIGhhY2s6IHByZXZlbnRzIGRldGVjdGlvbiBvZiBrZXl3b3JkcyBpbiBzb21lIGNpcmN1bXN0YW5jZXNcbiAgICAgIC8vIC5rZXl3b3JkKClcbiAgICAgIC8vICRrZXl3b3JkID0geFxuICAgICAge1xuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHsgYmVnaW46ICdcXFxcLicgKyBJREVOVF9SRSQxIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFwkJyArIElERU5UX1JFJDEgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7IC8vIEVTNiBjbGFzc1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcycsXG4gICAgICAgIGVuZDogL1t7Oz1dLyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1s6XCJbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcycgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcYig/PWNvbnN0cnVjdG9yKS8sXG4gICAgICAgIGVuZDogL1t7O10vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHsgYmVnaW46IElERU5UX1JFJDEgfSksXG4gICAgICAgICAgJ3NlbGYnLFxuICAgICAgICAgIFBBUkFNU1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyhnZXR8c2V0KVxcXFxzKyg/PScgKyBJREVOVF9SRSQxICsgJ1xcXFwoKScsXG4gICAgICAgIGVuZDogL1xcey8sXG4gICAgICAgIGtleXdvcmRzOiBcImdldCBzZXRcIixcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7IGJlZ2luOiBJREVOVF9SRSQxIH0pLFxuICAgICAgICAgIHsgYmVnaW46IC9cXChcXCkvIH0sIC8vIGVhdCB0byBhdm9pZCBlbXB0eSBwYXJhbXNcbiAgICAgICAgICBQQVJBTVNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXCRbKC5dLyAvLyByZWxldmFuY2UgYm9vc3RlciBmb3IgYSBwYXR0ZXJuIGNvbW1vbiB0byBKUyBsaWJzOiBgJChzb21ldGhpbmcpYCBhbmQgYCQuc29tZXRoaW5nYFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqYXZhc2NyaXB0O1xuIiwiLypcbkxhbmd1YWdlOiBKU09OXG5EZXNjcmlwdGlvbjogSlNPTiAoSmF2YVNjcmlwdCBPYmplY3QgTm90YXRpb24pIGlzIGEgbGlnaHR3ZWlnaHQgZGF0YS1pbnRlcmNoYW5nZSBmb3JtYXQuXG5BdXRob3I6IEl2YW4gU2FnYWxhZXYgPG1hbmlhY0Bzb2Z0d2FyZW1hbmlhY3Mub3JnPlxuV2Vic2l0ZTogaHR0cDovL3d3dy5qc29uLm9yZ1xuQ2F0ZWdvcnk6IGNvbW1vbiwgcHJvdG9jb2xzXG4qL1xuXG5mdW5jdGlvbiBqc29uKGhsanMpIHtcbiAgY29uc3QgTElURVJBTFMgPSB7XG4gICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbnVsbCdcbiAgfTtcbiAgY29uc3QgQUxMT1dFRF9DT01NRU5UUyA9IFtcbiAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICBdO1xuICBjb25zdCBUWVBFUyA9IFtcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICBdO1xuICBjb25zdCBWQUxVRV9DT05UQUlORVIgPSB7XG4gICAgZW5kOiAnLCcsXG4gICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICBjb250YWluczogVFlQRVMsXG4gICAga2V5d29yZHM6IExJVEVSQUxTXG4gIH07XG4gIGNvbnN0IE9CSkVDVCA9IHtcbiAgICBiZWdpbjogL1xcey8sXG4gICAgZW5kOiAvXFx9LyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KFZBTFVFX0NPTlRBSU5FUiwge1xuICAgICAgICBiZWdpbjogLzovXG4gICAgICB9KVxuICAgIF0uY29uY2F0KEFMTE9XRURfQ09NTUVOVFMpLFxuICAgIGlsbGVnYWw6ICdcXFxcUydcbiAgfTtcbiAgY29uc3QgQVJSQVkgPSB7XG4gICAgYmVnaW46ICdcXFxcWycsXG4gICAgZW5kOiAnXFxcXF0nLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5pbmhlcml0KFZBTFVFX0NPTlRBSU5FUildLCAvLyBpbmhlcml0IGlzIGEgd29ya2Fyb3VuZCBmb3IgYSBidWcgdGhhdCBtYWtlcyBzaGFyZWQgbW9kZXMgd2l0aCBlbmRzV2l0aFBhcmVudCBjb21waWxlIG9ubHkgdGhlIGVuZGluZyBvZiBvbmUgb2YgdGhlIHBhcmVudHNcbiAgICBpbGxlZ2FsOiAnXFxcXFMnXG4gIH07XG4gIFRZUEVTLnB1c2goT0JKRUNULCBBUlJBWSk7XG4gIEFMTE9XRURfQ09NTUVOVFMuZm9yRWFjaChmdW5jdGlvbihydWxlKSB7XG4gICAgVFlQRVMucHVzaChydWxlKTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0pTT04nLFxuICAgIGNvbnRhaW5zOiBUWVBFUyxcbiAgICBrZXl3b3JkczogTElURVJBTFMsXG4gICAgaWxsZWdhbDogJ1xcXFxTJ1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGpzb247XG4iLCIvKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rYWhlYWQocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKD89JywgcmUsICcpJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb3B0aW9uYWwocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKCcsIHJlLCAnKT8nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLyoqXG4gKiBBbnkgb2YgdGhlIHBhc3NlZCBleHByZXNzc2lvbnMgbWF5IG1hdGNoXG4gKlxuICogQ3JlYXRlcyBhIGh1Z2UgdGhpcyB8IHRoaXMgfCB0aGF0IHwgdGhhdCBtYXRjaFxuICogQHBhcmFtIHsoUmVnRXhwIHwgc3RyaW5nKVtdIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZWl0aGVyKC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gJygnICsgYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcInxcIikgKyBcIilcIjtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBIVE1MLCBYTUxcbldlYnNpdGU6IGh0dHBzOi8vd3d3LnczLm9yZy9YTUwvXG5DYXRlZ29yeTogY29tbW9uXG5BdWRpdDogMjAyMFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIHhtbChobGpzKSB7XG4gIC8vIEVsZW1lbnQgbmFtZXMgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBoeXBoZW5zLCB1bmRlcnNjb3JlcywgYW5kIHBlcmlvZHNcbiAgY29uc3QgVEFHX05BTUVfUkUgPSBjb25jYXQoL1tBLVpfXS8sIG9wdGlvbmFsKC9bQS1aMC05Xy4tXSo6LyksIC9bQS1aMC05Xy4tXSovKTtcbiAgY29uc3QgWE1MX0lERU5UX1JFID0gL1tBLVphLXowLTkuXzotXSsvO1xuICBjb25zdCBYTUxfRU5USVRJRVMgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogLyZbYS16XSs7fCYjWzAtOV0rO3wmI3hbYS1mMC05XSs7L1xuICB9O1xuICBjb25zdCBYTUxfTUVUQV9LRVlXT1JEUyA9IHtcbiAgICBiZWdpbjogL1xccy8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1rZXl3b3JkJyxcbiAgICAgICAgYmVnaW46IC8jP1thLXpfXVthLXoxLTlfLV0rLyxcbiAgICAgICAgaWxsZWdhbDogL1xcbi9cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIGNvbnN0IFhNTF9NRVRBX1BBUl9LRVlXT1JEUyA9IGhsanMuaW5oZXJpdChYTUxfTUVUQV9LRVlXT1JEUywge1xuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvXG4gIH0pO1xuICBjb25zdCBBUE9TX01FVEFfU1RSSU5HX01PREUgPSBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnXG4gIH0pO1xuICBjb25zdCBRVU9URV9NRVRBX1NUUklOR19NT0RFID0gaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtcbiAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZydcbiAgfSk7XG4gIGNvbnN0IFRBR19JTlRFUk5BTFMgPSB7XG4gICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgaWxsZWdhbDogLzwvLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IFhNTF9JREVOVF9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLz1cXHMqLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICAgICAgICAgIGVuZDogL1wiLyxcbiAgICAgICAgICAgICAgICBjb250YWluczogWyBYTUxfRU5USVRJRVMgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC8nLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgICAgICAgICBjb250YWluczogWyBYTUxfRU5USVRJRVMgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9bXlxcc1wiJz08PmBdKy9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSFRNTCwgWE1MJyxcbiAgICBhbGlhc2VzOiBbXG4gICAgICAnaHRtbCcsXG4gICAgICAneGh0bWwnLFxuICAgICAgJ3JzcycsXG4gICAgICAnYXRvbScsXG4gICAgICAneGpiJyxcbiAgICAgICd4c2QnLFxuICAgICAgJ3hzbCcsXG4gICAgICAncGxpc3QnLFxuICAgICAgJ3dzZicsXG4gICAgICAnc3ZnJ1xuICAgIF0sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC88IVthLXpdLyxcbiAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgWE1MX01FVEFfS0VZV09SRFMsXG4gICAgICAgICAgUVVPVEVfTUVUQV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBBUE9TX01FVEFfU1RSSU5HX01PREUsXG4gICAgICAgICAgWE1MX01FVEFfUEFSX0tFWVdPUkRTLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgICAgIGVuZDogL1xcXS8sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICAgICAgYmVnaW46IC88IVthLXpdLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAgICAgWE1MX01FVEFfS0VZV09SRFMsXG4gICAgICAgICAgICAgICAgICBYTUxfTUVUQV9QQVJfS0VZV09SRFMsXG4gICAgICAgICAgICAgICAgICBRVU9URV9NRVRBX1NUUklOR19NT0RFLFxuICAgICAgICAgICAgICAgICAgQVBPU19NRVRBX1NUUklOR19NT0RFXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvPCEtLS8sXG4gICAgICAgIC8tLT4vLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAge1xuICAgICAgICBiZWdpbjogLzwhXFxbQ0RBVEFcXFsvLFxuICAgICAgICBlbmQ6IC9cXF1cXF0+LyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIFhNTF9FTlRJVElFUyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvPFxcP3htbC8sXG4gICAgICAgIGVuZDogL1xcPz4vLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICAvKlxuICAgICAgICBUaGUgbG9va2FoZWFkIHBhdHRlcm4gKD89Li4uKSBlbnN1cmVzIHRoYXQgJ2JlZ2luJyBvbmx5IG1hdGNoZXNcbiAgICAgICAgJzxzdHlsZScgYXMgYSBzaW5nbGUgd29yZCwgZm9sbG93ZWQgYnkgYSB3aGl0ZXNwYWNlIG9yIGFuXG4gICAgICAgIGVuZGluZyBicmFrZXQuIFRoZSAnJCcgaXMgbmVlZGVkIGZvciB0aGUgbGV4ZW1lIHRvIGJlIHJlY29nbml6ZWRcbiAgICAgICAgYnkgaGxqcy5zdWJNb2RlKCkgdGhhdCB0ZXN0cyBsZXhlbWVzIG91dHNpZGUgdGhlIHN0cmVhbS5cbiAgICAgICAgKi9cbiAgICAgICAgYmVnaW46IC88c3R5bGUoPz1cXHN8PikvLFxuICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICBuYW1lOiAnc3R5bGUnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbIFRBR19JTlRFUk5BTFMgXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvPFxcL3N0eWxlPi8sXG4gICAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiBbXG4gICAgICAgICAgICAnY3NzJyxcbiAgICAgICAgICAgICd4bWwnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICAvLyBTZWUgdGhlIGNvbW1lbnQgaW4gdGhlIDxzdHlsZSB0YWcgYWJvdXQgdGhlIGxvb2thaGVhZCBwYXR0ZXJuXG4gICAgICAgIGJlZ2luOiAvPHNjcmlwdCg/PVxcc3w+KS8sXG4gICAgICAgIGVuZDogLz4vLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgIG5hbWU6ICdzY3JpcHQnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbIFRBR19JTlRFUk5BTFMgXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvPFxcL3NjcmlwdD4vLFxuICAgICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogW1xuICAgICAgICAgICAgJ2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgJ2hhbmRsZWJhcnMnLFxuICAgICAgICAgICAgJ3htbCdcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyB3ZSBuZWVkIHRoaXMgZm9yIG5vdyBmb3IgalNYXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIGJlZ2luOiAvPD58PFxcLz4vXG4gICAgICB9LFxuICAgICAgLy8gb3BlbiB0YWdcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgYmVnaW46IGNvbmNhdChcbiAgICAgICAgICAvPC8sXG4gICAgICAgICAgbG9va2FoZWFkKGNvbmNhdChcbiAgICAgICAgICAgIFRBR19OQU1FX1JFLFxuICAgICAgICAgICAgLy8gPHRhZy8+XG4gICAgICAgICAgICAvLyA8dGFnPlxuICAgICAgICAgICAgLy8gPHRhZyAuLi5cbiAgICAgICAgICAgIGVpdGhlcigvXFwvPi8sIC8+LywgL1xccy8pXG4gICAgICAgICAgKSlcbiAgICAgICAgKSxcbiAgICAgICAgZW5kOiAvXFwvPz4vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgYmVnaW46IFRBR19OQU1FX1JFLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgc3RhcnRzOiBUQUdfSU5URVJOQUxTXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gY2xvc2UgdGFnXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIGJlZ2luOiBjb25jYXQoXG4gICAgICAgICAgLzxcXC8vLFxuICAgICAgICAgIGxvb2thaGVhZChjb25jYXQoXG4gICAgICAgICAgICBUQUdfTkFNRV9SRSwgLz4vXG4gICAgICAgICAgKSlcbiAgICAgICAgKSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIGJlZ2luOiBUQUdfTkFNRV9SRSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC8+LyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0geG1sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==