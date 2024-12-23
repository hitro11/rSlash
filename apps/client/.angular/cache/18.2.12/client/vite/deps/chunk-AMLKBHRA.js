import {
  __commonJS
} from "./chunk-3OV72XIM.js";

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/windowHandler/defaultImplementation.js
var require_defaultImplementation = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/windowHandler/defaultImplementation.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defaultWindowHandlerImplementation = void 0;
    function getWindowOrThrow() {
      if (typeof window === "undefined") {
        throw Error("If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined.");
      }
      return window;
    }
    var defaultLocalStorageHandler = {
      key: function(index) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().localStorage.key(index)];
          });
        });
      },
      clear: function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().localStorage.clear()];
          });
        });
      },
      getItem: function(key) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().localStorage.getItem(key)];
          });
        });
      },
      removeItem: function(key) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().localStorage.removeItem(key)];
          });
        });
      },
      setItem: function(key, value) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().localStorage.setItem(key, value)];
          });
        });
      },
      keySync: function(index) {
        return getWindowOrThrow().localStorage.key(index);
      },
      clearSync: function() {
        return getWindowOrThrow().localStorage.clear();
      },
      getItemSync: function(key) {
        return getWindowOrThrow().localStorage.getItem(key);
      },
      removeItemSync: function(key) {
        return getWindowOrThrow().localStorage.removeItem(key);
      },
      setItemSync: function(key, value) {
        return getWindowOrThrow().localStorage.setItem(key, value);
      }
    };
    var defaultSessionStorageHandler = {
      key: function(index) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().sessionStorage.key(index)];
          });
        });
      },
      clear: function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().sessionStorage.clear()];
          });
        });
      },
      getItem: function(key) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().sessionStorage.getItem(key)];
          });
        });
      },
      removeItem: function(key) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().sessionStorage.removeItem(key)];
          });
        });
      },
      setItem: function(key, value) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, getWindowOrThrow().sessionStorage.setItem(key, value)];
          });
        });
      },
      keySync: function(index) {
        return getWindowOrThrow().sessionStorage.key(index);
      },
      clearSync: function() {
        return getWindowOrThrow().sessionStorage.clear();
      },
      getItemSync: function(key) {
        return getWindowOrThrow().sessionStorage.getItem(key);
      },
      removeItemSync: function(key) {
        return getWindowOrThrow().sessionStorage.removeItem(key);
      },
      setItemSync: function(key, value) {
        return getWindowOrThrow().sessionStorage.setItem(key, value);
      }
    };
    exports.defaultWindowHandlerImplementation = {
      history: {
        replaceState: function(data, unused, url) {
          return getWindowOrThrow().history.replaceState(data, unused, url);
        },
        getState: function() {
          return getWindowOrThrow().history.state;
        }
      },
      location: {
        getHref: function() {
          return getWindowOrThrow().location.href;
        },
        setHref: function(href) {
          getWindowOrThrow().location.href = href;
        },
        getSearch: function() {
          return getWindowOrThrow().location.search;
        },
        getHash: function() {
          return getWindowOrThrow().location.hash;
        },
        getPathName: function() {
          return getWindowOrThrow().location.pathname;
        },
        assign: function(url) {
          getWindowOrThrow().location.assign(url);
        },
        getHostName: function() {
          return getWindowOrThrow().location.hostname;
        },
        getHost: function() {
          return getWindowOrThrow().location.host;
        },
        getOrigin: function() {
          return getWindowOrThrow().location.origin;
        }
      },
      getDocument: function() {
        return getWindowOrThrow().document;
      },
      getWindowUnsafe: function() {
        return getWindowOrThrow().window;
      },
      localStorage: defaultLocalStorageHandler,
      sessionStorage: defaultSessionStorageHandler
    };
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/windowHandler/index.js
var require_windowHandler = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/windowHandler/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WindowHandlerReference = void 0;
    var defaultImplementation_1 = require_defaultImplementation();
    var WindowHandlerReference = (
      /** @class */
      function() {
        function WindowHandlerReference2(windowHandlerInput) {
          var windowHandlerFunc = function(original) {
            return original;
          };
          if (windowHandlerInput !== void 0) {
            windowHandlerFunc = windowHandlerInput;
          }
          this.windowHandler = windowHandlerFunc(defaultImplementation_1.defaultWindowHandlerImplementation);
        }
        WindowHandlerReference2.init = function(windowHandlerInput) {
          if (WindowHandlerReference2.instance !== void 0) {
            return;
          }
          WindowHandlerReference2.instance = new WindowHandlerReference2(windowHandlerInput);
        };
        WindowHandlerReference2.getReferenceOrThrow = function() {
          if (WindowHandlerReference2.instance === void 0) {
            throw new Error("SuperTokensWindowHandler must be initialized before calling this method.");
          }
          return WindowHandlerReference2.instance;
        };
        return WindowHandlerReference2;
      }()
    );
    exports.WindowHandlerReference = WindowHandlerReference;
    exports.default = WindowHandlerReference;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/utils/windowHandler/index.js
var require_windowHandler2 = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/utils/windowHandler/index.js"(exports) {
    "use strict";
    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    exports.__esModule = true;
    __export(require_windowHandler());
  }
});

// ../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/windowHandler/index.js
var require_windowHandler3 = __commonJS({
  "../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/windowHandler/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WindowHandlerReference = void 0;
    var windowHandler_1 = require_windowHandler2();
    Object.defineProperty(exports, "WindowHandlerReference", {
      enumerable: true,
      get: function() {
        return windowHandler_1.WindowHandlerReference;
      }
    });
  }
});

// ../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SSR_ERROR = exports.DEFAULT_API_BASE_PATH = void 0;
    exports.DEFAULT_API_BASE_PATH = "/auth";
    exports.SSR_ERROR = "\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook.";
  }
});

// ../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/normalisedURLDomain.js
var require_normalisedURLDomain = __commonJS({
  "../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/normalisedURLDomain.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NormalisedURLDomain = (
      /** @class */
      /* @__PURE__ */ function() {
        function NormalisedURLDomain2(url) {
          var _this = this;
          this.getAsStringDangerous = function() {
            return _this.value;
          };
          this.value = normaliseURLDomainOrThrowError(url);
        }
        return NormalisedURLDomain2;
      }()
    );
    exports.default = NormalisedURLDomain;
    function normaliseURLDomainOrThrowError(input, ignoreProtocol) {
      if (ignoreProtocol === void 0) {
        ignoreProtocol = false;
      }
      function isAnIpAddress(ipaddress) {
        return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress);
      }
      input = input.trim();
      try {
        if (!input.startsWith("http://") && !input.startsWith("https://")) {
          throw new Error("Error converting to proper URL");
        }
        var urlObj = new URL(input);
        if (ignoreProtocol) {
          if (urlObj.hostname.startsWith("localhost") || isAnIpAddress(urlObj.hostname)) {
            input = "http://" + urlObj.host;
          } else {
            input = "https://" + urlObj.host;
          }
        } else {
          input = urlObj.protocol + "//" + urlObj.host;
        }
        return input;
      } catch (err) {
      }
      if (input.startsWith("/")) {
        throw new Error("Please provide a valid domain name");
      }
      if (input.indexOf(".") === 0) {
        input = input.substr(1);
      }
      if ((input.indexOf(".") !== -1 || input.startsWith("localhost")) && !input.startsWith("http://") && !input.startsWith("https://")) {
        input = "https://" + input;
        try {
          new URL(input);
          return normaliseURLDomainOrThrowError(input, true);
        } catch (err) {
        }
      }
      throw new Error("Please provide a valid domain name");
    }
  }
});

// ../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/normalisedURLPath.js
var require_normalisedURLPath = __commonJS({
  "../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/normalisedURLPath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NormalisedURLPath = (
      /** @class */
      /* @__PURE__ */ function() {
        function NormalisedURLPath2(url) {
          var _this = this;
          this.startsWith = function(other) {
            return _this.value.startsWith(other.value);
          };
          this.appendPath = function(other) {
            return new NormalisedURLPath2(_this.value + other.value);
          };
          this.getAsStringDangerous = function() {
            return _this.value;
          };
          this.value = normaliseURLPathOrThrowError(url);
        }
        return NormalisedURLPath2;
      }()
    );
    exports.default = NormalisedURLPath;
    function normaliseURLPathOrThrowError(input) {
      input = input.trim();
      try {
        if (!input.startsWith("http://") && !input.startsWith("https://")) {
          throw new Error("Error converting to proper URL");
        }
        var urlObj = new URL(input);
        input = urlObj.pathname;
        if (input.charAt(input.length - 1) === "/") {
          return input.substr(0, input.length - 1);
        }
        return input;
      } catch (err) {
      }
      if ((domainGiven(input) || input.startsWith("localhost")) && !input.startsWith("http://") && !input.startsWith("https://")) {
        input = "http://" + input;
        return normaliseURLPathOrThrowError(input);
      }
      if (input.charAt(0) !== "/") {
        input = "/" + input;
      }
      try {
        new URL("http://example.com" + input);
        return normaliseURLPathOrThrowError("http://example.com" + input);
      } catch (err) {
        throw new Error("Please provide a valid URL path");
      }
    }
    function domainGiven(input) {
      if (input.indexOf(".") === -1 || input.startsWith("/")) {
        return false;
      }
      try {
        var url = new URL(input);
        return url.hostname.indexOf(".") !== -1;
      } catch (e) {
      }
      try {
        var url = new URL("http://" + input);
        return url.hostname.indexOf(".") !== -1;
      } catch (e) {
      }
      return false;
    }
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/normalisedURLDomain.js
var require_normalisedURLDomain2 = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/normalisedURLDomain.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isAnIpAddress = void 0;
    function isAnIpAddress(ipaddress) {
      return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress);
    }
    exports.isAnIpAddress = isAnIpAddress;
    var NormalisedURLDomain = (
      /** @class */
      /* @__PURE__ */ function() {
        function NormalisedURLDomain2(url) {
          var _this = this;
          this.getAsStringDangerous = function() {
            return _this.value;
          };
          this.value = normaliseURLDomainOrThrowError(url);
        }
        return NormalisedURLDomain2;
      }()
    );
    exports.default = NormalisedURLDomain;
    function normaliseURLDomainOrThrowError(input, ignoreProtocol) {
      if (ignoreProtocol === void 0) {
        ignoreProtocol = false;
      }
      input = input.trim();
      try {
        if (!input.startsWith("http://") && !input.startsWith("https://")) {
          throw new Error("converting to proper URL");
        }
        var urlObj = new URL(input);
        if (ignoreProtocol) {
          if (urlObj.hostname.startsWith("localhost") || isAnIpAddress(urlObj.hostname)) {
            input = "http://" + urlObj.host;
          } else {
            input = "https://" + urlObj.host;
          }
        } else {
          input = urlObj.protocol + "//" + urlObj.host;
        }
        return input;
      } catch (err) {
      }
      if (input.startsWith("/")) {
        throw new Error("Please provide a valid domain name");
      }
      if (input.indexOf(".") === 0) {
        input = input.substr(1);
      }
      if ((input.indexOf(".") !== -1 || input.startsWith("localhost")) && !input.startsWith("http://") && !input.startsWith("https://")) {
        input = "https://" + input;
        try {
          new URL(input);
          return normaliseURLDomainOrThrowError(input, true);
        } catch (err) {
        }
      }
      throw new Error("Please provide a valid domain name");
    }
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/normalisedURLPath.js
var require_normalisedURLPath2 = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/normalisedURLPath.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NormalisedURLPath = (
      /** @class */
      /* @__PURE__ */ function() {
        function NormalisedURLPath2(url) {
          var _this = this;
          this.startsWith = function(other) {
            return _this.value.startsWith(other.value);
          };
          this.appendPath = function(other) {
            return new NormalisedURLPath2(_this.value + other.value);
          };
          this.getAsStringDangerous = function() {
            return _this.value;
          };
          this.value = normaliseURLPathOrThrowError(url);
        }
        return NormalisedURLPath2;
      }()
    );
    exports.default = NormalisedURLPath;
    function normaliseURLPathOrThrowError(input) {
      input = input.trim();
      try {
        if (!input.startsWith("http://") && !input.startsWith("https://")) {
          throw new Error("converting to proper URL");
        }
        var urlObj = new URL(input);
        input = urlObj.pathname;
        if (input.charAt(input.length - 1) === "/") {
          return input.substr(0, input.length - 1);
        }
        return input;
      } catch (err) {
      }
      if ((domainGiven(input) || input.startsWith("localhost")) && !input.startsWith("http://") && !input.startsWith("https://")) {
        input = "http://" + input;
        return normaliseURLPathOrThrowError(input);
      }
      if (input.charAt(0) !== "/") {
        input = "/" + input;
      }
      try {
        new URL("http://example.com" + input);
        return normaliseURLPathOrThrowError("http://example.com" + input);
      } catch (err) {
        throw new Error("Please provide a valid URL path");
      }
    }
    function domainGiven(input) {
      if (input.indexOf(".") === -1 || input.startsWith("/")) {
        return false;
      }
      try {
        var url = new URL(input);
        return url.hostname.indexOf(".") !== -1;
      } catch (e) {
      }
      try {
        var url = new URL("http://" + input);
        return url.hostname.indexOf(".") !== -1;
      } catch (e) {
      }
      return false;
    }
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/index.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/index.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.matchesDomainOrSubdomain = exports.getNormalisedUserContext = exports.validateAndNormaliseInputOrThrowError = exports.normaliseSessionScopeOrThrowError = exports.normaliseURLPathOrThrowError = exports.normaliseURLDomainOrThrowError = void 0;
    var normalisedURLDomain_1 = require_normalisedURLDomain2();
    var normalisedURLPath_1 = require_normalisedURLPath2();
    var windowHandler_1 = require_windowHandler();
    function normaliseURLDomainOrThrowError(input) {
      var str = new normalisedURLDomain_1.default(input).getAsStringDangerous();
      return str;
    }
    exports.normaliseURLDomainOrThrowError = normaliseURLDomainOrThrowError;
    function normaliseURLPathOrThrowError(input) {
      return new normalisedURLPath_1.default(input).getAsStringDangerous();
    }
    exports.normaliseURLPathOrThrowError = normaliseURLPathOrThrowError;
    function normaliseSessionScopeOrThrowError(sessionScope) {
      function helper(sessionScope2) {
        sessionScope2 = sessionScope2.trim().toLowerCase();
        if (sessionScope2.startsWith(".")) {
          sessionScope2 = sessionScope2.substr(1);
        }
        if (!sessionScope2.startsWith("http://") && !sessionScope2.startsWith("https://")) {
          sessionScope2 = "http://" + sessionScope2;
        }
        try {
          var urlObj = new URL(sessionScope2);
          sessionScope2 = urlObj.hostname;
          return sessionScope2;
        } catch (err) {
          throw new Error("Please provide a valid sessionScope");
        }
      }
      var noDotNormalised = helper(sessionScope);
      if (noDotNormalised === "localhost" || (0, normalisedURLDomain_1.isAnIpAddress)(noDotNormalised)) {
        return noDotNormalised;
      }
      if (sessionScope.startsWith(".")) {
        return "." + noDotNormalised;
      }
      return noDotNormalised;
    }
    exports.normaliseSessionScopeOrThrowError = normaliseSessionScopeOrThrowError;
    function validateAndNormaliseInputOrThrowError(options) {
      var _this = this;
      var apiDomain = normaliseURLDomainOrThrowError(options.apiDomain);
      var apiBasePath = normaliseURLPathOrThrowError("/auth");
      if (options.apiBasePath !== void 0) {
        apiBasePath = normaliseURLPathOrThrowError(options.apiBasePath);
      }
      var defaultSessionScope = windowHandler_1.default.getReferenceOrThrow().windowHandler.location.getHostName();
      var sessionTokenFrontendDomain = normaliseSessionScopeOrThrowError(options !== void 0 && options.sessionTokenFrontendDomain !== void 0 ? options.sessionTokenFrontendDomain : defaultSessionScope);
      var sessionExpiredStatusCode = 401;
      if (options.sessionExpiredStatusCode !== void 0) {
        sessionExpiredStatusCode = options.sessionExpiredStatusCode;
      }
      var invalidClaimStatusCode = 403;
      if (options.invalidClaimStatusCode !== void 0) {
        invalidClaimStatusCode = options.invalidClaimStatusCode;
      }
      if (sessionExpiredStatusCode === invalidClaimStatusCode) {
        throw new Error("sessionExpiredStatusCode and invalidClaimStatusCode cannot be the same.");
      }
      var autoAddCredentials = true;
      if (options.autoAddCredentials !== void 0) {
        autoAddCredentials = options.autoAddCredentials;
      }
      var isInIframe = false;
      if (options.isInIframe !== void 0) {
        isInIframe = options.isInIframe;
      }
      var sessionTokenBackendDomain = void 0;
      if (options.sessionTokenBackendDomain !== void 0) {
        sessionTokenBackendDomain = normaliseSessionScopeOrThrowError(options.sessionTokenBackendDomain);
      }
      var maxRetryAttemptsForSessionRefresh = 10;
      if (options.maxRetryAttemptsForSessionRefresh !== void 0) {
        if (options.maxRetryAttemptsForSessionRefresh < 0) {
          throw new Error("maxRetryAttemptsForSessionRefresh must be greater than or equal to 0.");
        }
        maxRetryAttemptsForSessionRefresh = options.maxRetryAttemptsForSessionRefresh;
      }
      var preAPIHook = function(context) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, {
              url: context.url,
              requestInit: context.requestInit
            }];
          });
        });
      };
      if (options.preAPIHook !== void 0) {
        preAPIHook = options.preAPIHook;
      }
      var postAPIHook = function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [
              2
              /*return*/
            ];
          });
        });
      };
      if (options.postAPIHook !== void 0) {
        postAPIHook = options.postAPIHook;
      }
      var onHandleEvent = function() {
      };
      if (options.onHandleEvent !== void 0) {
        onHandleEvent = options.onHandleEvent;
      }
      var override = __assign({
        functions: function(oI) {
          return oI;
        }
      }, options.override);
      return {
        apiDomain,
        apiBasePath,
        sessionTokenFrontendDomain,
        sessionExpiredStatusCode,
        invalidClaimStatusCode,
        autoAddCredentials,
        isInIframe,
        tokenTransferMethod: options.tokenTransferMethod !== void 0 ? options.tokenTransferMethod : "cookie",
        sessionTokenBackendDomain,
        maxRetryAttemptsForSessionRefresh,
        preAPIHook,
        postAPIHook,
        onHandleEvent,
        override
      };
    }
    exports.validateAndNormaliseInputOrThrowError = validateAndNormaliseInputOrThrowError;
    function getNormalisedUserContext(userContext) {
      if (userContext === void 0) {
        return {};
      }
      return userContext;
    }
    exports.getNormalisedUserContext = getNormalisedUserContext;
    function matchesDomainOrSubdomain(hostname, str) {
      var parts = hostname.split(".");
      for (var i = 0; i < parts.length; i++) {
        var subdomainCandidate = parts.slice(i).join(".");
        if (subdomainCandidate === str || ".".concat(subdomainCandidate) === str) {
          return true;
        }
      }
      return false;
    }
    exports.matchesDomainOrSubdomain = matchesDomainOrSubdomain;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/processState.js
var require_processState = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/processState.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ProcessState = exports.PROCESS_STATE = void 0;
    var PROCESS_STATE;
    (function(PROCESS_STATE2) {
      PROCESS_STATE2[PROCESS_STATE2["CALLING_INTERCEPTION_REQUEST"] = 0] = "CALLING_INTERCEPTION_REQUEST";
      PROCESS_STATE2[PROCESS_STATE2["CALLING_INTERCEPTION_RESPONSE"] = 1] = "CALLING_INTERCEPTION_RESPONSE";
    })(PROCESS_STATE = exports.PROCESS_STATE || (exports.PROCESS_STATE = {}));
    var ProcessState = (
      /** @class */
      function() {
        function ProcessState2() {
          var _this = this;
          this.history = [];
          this.addState = function(state) {
            try {
              if (process !== void 0 && process.env !== void 0 && process.env.TEST_MODE === "testing") {
                _this.history.push(state);
              }
            } catch (ignored) {
            }
          };
          this.getEventByLastEventByName = function(state) {
            for (var i = _this.history.length - 1; i >= 0; i--) {
              if (_this.history[i] == state) {
                return _this.history[i];
              }
            }
            return void 0;
          };
          this.reset = function() {
            _this.history = [];
          };
          this.waitForEvent = function(state, timeInMS) {
            if (timeInMS === void 0) {
              timeInMS = 7e3;
            }
            return __awaiter(_this, void 0, void 0, function() {
              var startTime;
              var _this2 = this;
              return __generator(this, function(_a) {
                startTime = Date.now();
                return [2, new Promise(function(resolve) {
                  var actualThis = _this2;
                  function tryAndGet() {
                    var result = actualThis.getEventByLastEventByName(state);
                    if (result === void 0) {
                      if (Date.now() - startTime > timeInMS) {
                        resolve(void 0);
                      } else {
                        setTimeout(tryAndGet, 1e3);
                      }
                    } else {
                      resolve(result);
                    }
                  }
                  tryAndGet();
                })];
              });
            });
          };
        }
        ProcessState2.getInstance = function() {
          if (ProcessState2.instance == void 0) {
            ProcessState2.instance = new ProcessState2();
          }
          return ProcessState2.instance;
        };
        return ProcessState2;
      }()
    );
    exports.ProcessState = ProcessState;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/version.js
var require_version = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.supported_fdi = exports.package_version = void 0;
    exports.package_version = "20.1.5";
    exports.supported_fdi = ["1.16", "1.17", "1.18", "1.19", "2.0", "3.0", "3.1", "4.0"];
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/cookieHandler/defaultImplementation.js
var require_defaultImplementation2 = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/cookieHandler/defaultImplementation.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defaultCookieHandlerImplementation = void 0;
    var windowHandler_1 = require_windowHandler();
    exports.defaultCookieHandlerImplementation = {
      getCookie: function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, windowHandler_1.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie];
          });
        });
      },
      setCookie: function(cookieString) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            windowHandler_1.default.getReferenceOrThrow().windowHandler.getWindowUnsafe().document.cookie = cookieString;
            return [
              2
              /*return*/
            ];
          });
        });
      }
    };
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/cookieHandler/index.js
var require_cookieHandler = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/cookieHandler/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CookieHandlerReference = void 0;
    var defaultImplementation_1 = require_defaultImplementation2();
    var CookieHandlerReference = (
      /** @class */
      function() {
        function CookieHandlerReference2(cookieHandlerInput) {
          var cookieHandlerFunc = function(original) {
            return original;
          };
          if (cookieHandlerInput !== void 0) {
            cookieHandlerFunc = cookieHandlerInput;
          }
          this.cookieHandler = cookieHandlerFunc(defaultImplementation_1.defaultCookieHandlerImplementation);
        }
        CookieHandlerReference2.init = function(cookieHandlerInput) {
          if (CookieHandlerReference2.instance !== void 0) {
            return;
          }
          CookieHandlerReference2.instance = new CookieHandlerReference2(cookieHandlerInput);
        };
        CookieHandlerReference2.getReferenceOrThrow = function() {
          if (CookieHandlerReference2.instance === void 0) {
            throw new Error("SuperTokensCookieHandler must be initialized before calling this method.");
          }
          return CookieHandlerReference2.instance;
        };
        return CookieHandlerReference2;
      }()
    );
    exports.CookieHandlerReference = CookieHandlerReference;
    exports.default = CookieHandlerReference;
  }
});

// ../../node_modules/.pnpm/browser-tabs-lock@1.3.0/node_modules/browser-tabs-lock/processLock.js
var require_processLock = __commonJS({
  "../../node_modules/.pnpm/browser-tabs-lock@1.3.0/node_modules/browser-tabs-lock/processLock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ProcessLocking = (
      /** @class */
      function() {
        function ProcessLocking2() {
          var _this = this;
          this.locked = /* @__PURE__ */ new Map();
          this.addToLocked = function(key, toAdd) {
            var callbacks = _this.locked.get(key);
            if (callbacks === void 0) {
              if (toAdd === void 0) {
                _this.locked.set(key, []);
              } else {
                _this.locked.set(key, [toAdd]);
              }
            } else {
              if (toAdd !== void 0) {
                callbacks.unshift(toAdd);
                _this.locked.set(key, callbacks);
              }
            }
          };
          this.isLocked = function(key) {
            return _this.locked.has(key);
          };
          this.lock = function(key) {
            return new Promise(function(resolve, reject) {
              if (_this.isLocked(key)) {
                _this.addToLocked(key, resolve);
              } else {
                _this.addToLocked(key);
                resolve();
              }
            });
          };
          this.unlock = function(key) {
            var callbacks = _this.locked.get(key);
            if (callbacks === void 0 || callbacks.length === 0) {
              _this.locked.delete(key);
              return;
            }
            var toCall = callbacks.pop();
            _this.locked.set(key, callbacks);
            if (toCall !== void 0) {
              setTimeout(toCall, 0);
            }
          };
        }
        ProcessLocking2.getInstance = function() {
          if (ProcessLocking2.instance === void 0) {
            ProcessLocking2.instance = new ProcessLocking2();
          }
          return ProcessLocking2.instance;
        };
        return ProcessLocking2;
      }()
    );
    function getLock() {
      return ProcessLocking.getInstance();
    }
    exports.default = getLock;
  }
});

// ../../node_modules/.pnpm/browser-tabs-lock@1.3.0/node_modules/browser-tabs-lock/index.js
var require_browser_tabs_lock = __commonJS({
  "../../node_modules/.pnpm/browser-tabs-lock@1.3.0/node_modules/browser-tabs-lock/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve2) {
            resolve2(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var _this = exports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var processLock_1 = require_processLock();
    var LOCK_STORAGE_KEY = "browser-tabs-lock-key";
    var DEFAULT_STORAGE_HANDLER = {
      key: function(index) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            throw new Error("Unsupported");
          });
        });
      },
      getItem: function(key) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            throw new Error("Unsupported");
          });
        });
      },
      clear: function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [2, window.localStorage.clear()];
          });
        });
      },
      removeItem: function(key) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            throw new Error("Unsupported");
          });
        });
      },
      setItem: function(key, value) {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            throw new Error("Unsupported");
          });
        });
      },
      keySync: function(index) {
        return window.localStorage.key(index);
      },
      getItemSync: function(key) {
        return window.localStorage.getItem(key);
      },
      clearSync: function() {
        return window.localStorage.clear();
      },
      removeItemSync: function(key) {
        return window.localStorage.removeItem(key);
      },
      setItemSync: function(key, value) {
        return window.localStorage.setItem(key, value);
      }
    };
    function delay(milliseconds) {
      return new Promise(function(resolve) {
        return setTimeout(resolve, milliseconds);
      });
    }
    function generateRandomString(length) {
      var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      var randomstring = "";
      for (var i = 0; i < length; i++) {
        var INDEX = Math.floor(Math.random() * CHARS.length);
        randomstring += CHARS[INDEX];
      }
      return randomstring;
    }
    function getLockId() {
      return Date.now().toString() + generateRandomString(15);
    }
    var SuperTokensLock = (
      /** @class */
      function() {
        function SuperTokensLock2(storageHandler) {
          this.acquiredIatSet = /* @__PURE__ */ new Set();
          this.storageHandler = void 0;
          this.id = getLockId();
          this.acquireLock = this.acquireLock.bind(this);
          this.releaseLock = this.releaseLock.bind(this);
          this.releaseLock__private__ = this.releaseLock__private__.bind(this);
          this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this);
          this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this);
          this.storageHandler = storageHandler;
          if (SuperTokensLock2.waiters === void 0) {
            SuperTokensLock2.waiters = [];
          }
        }
        SuperTokensLock2.prototype.acquireLock = function(lockKey, timeout) {
          if (timeout === void 0) {
            timeout = 5e3;
          }
          return __awaiter(this, void 0, void 0, function() {
            var iat, MAX_TIME, STORAGE_KEY, STORAGE, lockObj, TIMEOUT_KEY, lockObjPostDelay, parsedLockObjPostDelay;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  iat = Date.now() + generateRandomString(4);
                  MAX_TIME = Date.now() + timeout;
                  STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                  STORAGE = this.storageHandler === void 0 ? DEFAULT_STORAGE_HANDLER : this.storageHandler;
                  _a.label = 1;
                case 1:
                  if (!(Date.now() < MAX_TIME)) return [3, 8];
                  return [4, delay(30)];
                case 2:
                  _a.sent();
                  lockObj = STORAGE.getItemSync(STORAGE_KEY);
                  if (!(lockObj === null)) return [3, 5];
                  TIMEOUT_KEY = this.id + "-" + lockKey + "-" + iat;
                  return [4, delay(Math.floor(Math.random() * 25))];
                case 3:
                  _a.sent();
                  STORAGE.setItemSync(STORAGE_KEY, JSON.stringify({
                    id: this.id,
                    iat,
                    timeoutKey: TIMEOUT_KEY,
                    timeAcquired: Date.now(),
                    timeRefreshed: Date.now()
                  }));
                  return [4, delay(30)];
                case 4:
                  _a.sent();
                  lockObjPostDelay = STORAGE.getItemSync(STORAGE_KEY);
                  if (lockObjPostDelay !== null) {
                    parsedLockObjPostDelay = JSON.parse(lockObjPostDelay);
                    if (parsedLockObjPostDelay.id === this.id && parsedLockObjPostDelay.iat === iat) {
                      this.acquiredIatSet.add(iat);
                      this.refreshLockWhileAcquired(STORAGE_KEY, iat);
                      return [2, true];
                    }
                  }
                  return [3, 7];
                case 5:
                  SuperTokensLock2.lockCorrector(this.storageHandler === void 0 ? DEFAULT_STORAGE_HANDLER : this.storageHandler);
                  return [4, this.waitForSomethingToChange(MAX_TIME)];
                case 6:
                  _a.sent();
                  _a.label = 7;
                case 7:
                  iat = Date.now() + generateRandomString(4);
                  return [3, 1];
                case 8:
                  return [2, false];
              }
            });
          });
        };
        SuperTokensLock2.prototype.refreshLockWhileAcquired = function(storageKey, iat) {
          return __awaiter(this, void 0, void 0, function() {
            var _this2 = this;
            return __generator(this, function(_a) {
              setTimeout(function() {
                return __awaiter(_this2, void 0, void 0, function() {
                  var STORAGE, lockObj, parsedLockObj;
                  return __generator(this, function(_a2) {
                    switch (_a2.label) {
                      case 0:
                        return [4, processLock_1.default().lock(iat)];
                      case 1:
                        _a2.sent();
                        if (!this.acquiredIatSet.has(iat)) {
                          processLock_1.default().unlock(iat);
                          return [
                            2
                            /*return*/
                          ];
                        }
                        STORAGE = this.storageHandler === void 0 ? DEFAULT_STORAGE_HANDLER : this.storageHandler;
                        lockObj = STORAGE.getItemSync(storageKey);
                        if (lockObj !== null) {
                          parsedLockObj = JSON.parse(lockObj);
                          parsedLockObj.timeRefreshed = Date.now();
                          STORAGE.setItemSync(storageKey, JSON.stringify(parsedLockObj));
                          processLock_1.default().unlock(iat);
                        } else {
                          processLock_1.default().unlock(iat);
                          return [
                            2
                            /*return*/
                          ];
                        }
                        this.refreshLockWhileAcquired(storageKey, iat);
                        return [
                          2
                          /*return*/
                        ];
                    }
                  });
                });
              }, 1e3);
              return [
                2
                /*return*/
              ];
            });
          });
        };
        SuperTokensLock2.prototype.waitForSomethingToChange = function(MAX_TIME) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, new Promise(function(resolve) {
                    var resolvedCalled = false;
                    var startedAt = Date.now();
                    var MIN_TIME_TO_WAIT = 50;
                    var removedListeners = false;
                    function stopWaiting() {
                      if (!removedListeners) {
                        window.removeEventListener("storage", stopWaiting);
                        SuperTokensLock2.removeFromWaiting(stopWaiting);
                        clearTimeout(timeOutId);
                        removedListeners = true;
                      }
                      if (!resolvedCalled) {
                        resolvedCalled = true;
                        var timeToWait = MIN_TIME_TO_WAIT - (Date.now() - startedAt);
                        if (timeToWait > 0) {
                          setTimeout(resolve, timeToWait);
                        } else {
                          resolve(null);
                        }
                      }
                    }
                    window.addEventListener("storage", stopWaiting);
                    SuperTokensLock2.addToWaiting(stopWaiting);
                    var timeOutId = setTimeout(stopWaiting, Math.max(0, MAX_TIME - Date.now()));
                  })];
                case 1:
                  _a.sent();
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        SuperTokensLock2.addToWaiting = function(func) {
          this.removeFromWaiting(func);
          if (SuperTokensLock2.waiters === void 0) {
            return;
          }
          SuperTokensLock2.waiters.push(func);
        };
        SuperTokensLock2.removeFromWaiting = function(func) {
          if (SuperTokensLock2.waiters === void 0) {
            return;
          }
          SuperTokensLock2.waiters = SuperTokensLock2.waiters.filter(function(i) {
            return i !== func;
          });
        };
        SuperTokensLock2.notifyWaiters = function() {
          if (SuperTokensLock2.waiters === void 0) {
            return;
          }
          var waiters = SuperTokensLock2.waiters.slice();
          waiters.forEach(function(i) {
            return i();
          });
        };
        SuperTokensLock2.prototype.releaseLock = function(lockKey) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, this.releaseLock__private__(lockKey)];
                case 1:
                  return [2, _a.sent()];
              }
            });
          });
        };
        SuperTokensLock2.prototype.releaseLock__private__ = function(lockKey) {
          return __awaiter(this, void 0, void 0, function() {
            var STORAGE, STORAGE_KEY, lockObj, parsedlockObj;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  STORAGE = this.storageHandler === void 0 ? DEFAULT_STORAGE_HANDLER : this.storageHandler;
                  STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                  lockObj = STORAGE.getItemSync(STORAGE_KEY);
                  if (lockObj === null) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                  parsedlockObj = JSON.parse(lockObj);
                  if (!(parsedlockObj.id === this.id)) return [3, 2];
                  return [4, processLock_1.default().lock(parsedlockObj.iat)];
                case 1:
                  _a.sent();
                  this.acquiredIatSet.delete(parsedlockObj.iat);
                  STORAGE.removeItemSync(STORAGE_KEY);
                  processLock_1.default().unlock(parsedlockObj.iat);
                  SuperTokensLock2.notifyWaiters();
                  _a.label = 2;
                case 2:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        SuperTokensLock2.lockCorrector = function(storageHandler) {
          var MIN_ALLOWED_TIME = Date.now() - 5e3;
          var STORAGE = storageHandler;
          var KEYS = [];
          var currIndex = 0;
          while (true) {
            var key = STORAGE.keySync(currIndex);
            if (key === null) {
              break;
            }
            KEYS.push(key);
            currIndex++;
          }
          var notifyWaiters = false;
          for (var i = 0; i < KEYS.length; i++) {
            var LOCK_KEY = KEYS[i];
            if (LOCK_KEY.includes(LOCK_STORAGE_KEY)) {
              var lockObj = STORAGE.getItemSync(LOCK_KEY);
              if (lockObj !== null) {
                var parsedlockObj = JSON.parse(lockObj);
                if (parsedlockObj.timeRefreshed === void 0 && parsedlockObj.timeAcquired < MIN_ALLOWED_TIME || parsedlockObj.timeRefreshed !== void 0 && parsedlockObj.timeRefreshed < MIN_ALLOWED_TIME) {
                  STORAGE.removeItemSync(LOCK_KEY);
                  notifyWaiters = true;
                }
              }
            }
          }
          if (notifyWaiters) {
            SuperTokensLock2.notifyWaiters();
          }
        };
        SuperTokensLock2.waiters = void 0;
        return SuperTokensLock2;
      }()
    );
    exports.default = SuperTokensLock;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/lockFactory/index.js
var require_lockFactory = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/lockFactory/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LockFactoryReference = void 0;
    var browser_tabs_lock_1 = require_browser_tabs_lock();
    var defaultFactory = function(storageHandler) {
      return function() {
        return Promise.resolve(new browser_tabs_lock_1.default(storageHandler));
      };
    };
    var LockFactoryReference = (
      /** @class */
      function() {
        function LockFactoryReference2(lockFactory) {
          this.lockFactory = lockFactory;
        }
        LockFactoryReference2.init = function(lockFactory, storageHandler) {
          if (this.instance !== void 0) {
            return;
          }
          this.instance = new LockFactoryReference2(lockFactory !== null && lockFactory !== void 0 ? lockFactory : defaultFactory(storageHandler));
        };
        LockFactoryReference2.getReferenceOrThrow = function() {
          if (LockFactoryReference2.instance === void 0) {
            throw new Error("SuperTokensLockReference must be initialized before calling this method.");
          }
          return LockFactoryReference2.instance;
        };
        return LockFactoryReference2;
      }()
    );
    exports.LockFactoryReference = LockFactoryReference;
    exports.default = LockFactoryReference;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/logger.js
var require_logger = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/logger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.logDebugMessage = exports.disableLogging = exports.enableLogging = void 0;
    var version_1 = require_version();
    var SUPERTOKENS_DEBUG_NAMESPACE = "com.supertokens";
    var __supertokensWebsiteLogging = false;
    function enableLogging() {
      __supertokensWebsiteLogging = true;
    }
    exports.enableLogging = enableLogging;
    function disableLogging() {
      __supertokensWebsiteLogging = false;
    }
    exports.disableLogging = disableLogging;
    function logDebugMessage(message) {
      if (__supertokensWebsiteLogging) {
        console.log("".concat(SUPERTOKENS_DEBUG_NAMESPACE, ' {t: "').concat((/* @__PURE__ */ new Date()).toISOString(), '", message: "').concat(message, '", supertokens-website-ver: "').concat(version_1.package_version, '"}'));
      }
    }
    exports.logDebugMessage = logDebugMessage;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/dateProvider/defaultImplementation.js
var require_defaultImplementation3 = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/dateProvider/defaultImplementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DateProvider = void 0;
    var windowHandler_1 = require_windowHandler();
    var DateProvider = (
      /** @class */
      function() {
        function DateProvider2() {
          this.clockSkewInMillis = 0;
          this.thresholdInSeconds = 7;
        }
        DateProvider2.init = function() {
          if (DateProvider2.instance !== void 0) {
            return;
          }
          DateProvider2.instance = new DateProvider2();
          var localStorage = windowHandler_1.default.getReferenceOrThrow().windowHandler.localStorage;
          var stored = localStorage.getItemSync(DateProvider2.CLOCK_SKEW_KEY);
          var clockSkewInMillis = stored !== null ? parseInt(stored, 10) : 0;
          DateProvider2.instance.setClientClockSkewInMillis(clockSkewInMillis);
        };
        DateProvider2.getReferenceOrThrow = function() {
          if (DateProvider2.instance === void 0) {
            throw new Error("DateProvider must be initialized before calling this method.");
          }
          return DateProvider2.instance;
        };
        DateProvider2.prototype.getThresholdInSeconds = function() {
          return this.thresholdInSeconds;
        };
        DateProvider2.prototype.setThresholdInSeconds = function(thresholdInSeconds) {
          this.thresholdInSeconds = thresholdInSeconds;
        };
        DateProvider2.prototype.setClientClockSkewInMillis = function(clockSkewInMillis) {
          this.clockSkewInMillis = Math.abs(clockSkewInMillis) >= this.thresholdInSeconds * 1e3 ? clockSkewInMillis : 0;
          var localStorage = windowHandler_1.default.getReferenceOrThrow().windowHandler.localStorage;
          localStorage.setItemSync(DateProvider2.CLOCK_SKEW_KEY, String(clockSkewInMillis));
        };
        DateProvider2.prototype.getClientClockSkewInMillis = function() {
          return this.clockSkewInMillis;
        };
        DateProvider2.prototype.now = function() {
          return Date.now() + this.getClientClockSkewInMillis();
        };
        DateProvider2.CLOCK_SKEW_KEY = "__st_clockSkewInMillis";
        return DateProvider2;
      }()
    );
    exports.DateProvider = DateProvider;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/dateProvider/index.js
var require_dateProvider = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/dateProvider/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DateProviderReference = void 0;
    var defaultImplementation_1 = require_defaultImplementation3();
    var DateProviderReference = (
      /** @class */
      function() {
        function DateProviderReference2(dateProviderInput) {
          if (dateProviderInput !== void 0) {
            this.dateProvider = dateProviderInput();
          } else {
            defaultImplementation_1.DateProvider.init();
            this.dateProvider = defaultImplementation_1.DateProvider.getReferenceOrThrow();
          }
        }
        DateProviderReference2.init = function(dateProviderInput) {
          if (DateProviderReference2.instance !== void 0) {
            return;
          }
          DateProviderReference2.instance = new DateProviderReference2(dateProviderInput);
        };
        DateProviderReference2.getReferenceOrThrow = function() {
          if (DateProviderReference2.instance === void 0) {
            throw new Error("SuperTokensDateProvider must be initialized before calling this method.");
          }
          return DateProviderReference2.instance;
        };
        return DateProviderReference2;
      }()
    );
    exports.DateProviderReference = DateProviderReference;
    exports.default = DateProviderReference;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/fetch.js
var require_fetch = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/fetch.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.updateClockSkewUsingFrontToken = exports.fireSessionUpdateEventsIfNecessary = exports.setFrontToken = exports.getFrontToken = exports.setAntiCSRF = exports.saveLastAccessTokenUpdate = exports.getTokenForHeaderAuth = exports.setToken = exports.getStorageNameForToken = exports.getLocalSessionState = exports.onInvalidClaimResponse = exports.onTokenUpdate = exports.onUnauthorisedResponse = exports.FrontToken = exports.AntiCsrfToken = void 0;
    var processState_1 = require_processState();
    var version_1 = require_version();
    var cookieHandler_1 = require_cookieHandler();
    var windowHandler_1 = require_windowHandler();
    var lockFactory_1 = require_lockFactory();
    var logger_1 = require_logger();
    var dateProvider_1 = require_dateProvider();
    var AntiCsrfToken = (
      /** @class */
      function() {
        function AntiCsrfToken2() {
        }
        AntiCsrfToken2.getToken = function(associatedAccessTokenUpdate) {
          return __awaiter(this, void 0, void 0, function() {
            var antiCsrf;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  (0, logger_1.logDebugMessage)("AntiCsrfToken.getToken: called");
                  if (associatedAccessTokenUpdate === void 0) {
                    AntiCsrfToken2.tokenInfo = void 0;
                    (0, logger_1.logDebugMessage)("AntiCsrfToken.getToken: returning undefined");
                    return [2, void 0];
                  }
                  if (!(AntiCsrfToken2.tokenInfo === void 0)) return [3, 2];
                  return [4, getAntiCSRFToken()];
                case 1:
                  antiCsrf = _a.sent();
                  if (antiCsrf === null) {
                    (0, logger_1.logDebugMessage)("AntiCsrfToken.getToken: returning undefined");
                    return [2, void 0];
                  }
                  AntiCsrfToken2.tokenInfo = {
                    antiCsrf,
                    associatedAccessTokenUpdate
                  };
                  return [3, 4];
                case 2:
                  if (!(AntiCsrfToken2.tokenInfo.associatedAccessTokenUpdate !== associatedAccessTokenUpdate)) return [3, 4];
                  AntiCsrfToken2.tokenInfo = void 0;
                  return [4, AntiCsrfToken2.getToken(associatedAccessTokenUpdate)];
                case 3:
                  return [2, _a.sent()];
                case 4:
                  (0, logger_1.logDebugMessage)("AntiCsrfToken.getToken: returning: " + AntiCsrfToken2.tokenInfo.antiCsrf);
                  return [2, AntiCsrfToken2.tokenInfo.antiCsrf];
              }
            });
          });
        };
        AntiCsrfToken2.removeToken = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  (0, logger_1.logDebugMessage)("AntiCsrfToken.removeToken: called");
                  AntiCsrfToken2.tokenInfo = void 0;
                  return [4, setAntiCSRF(void 0)];
                case 1:
                  _a.sent();
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        AntiCsrfToken2.setItem = function(associatedAccessTokenUpdate, antiCsrf) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (associatedAccessTokenUpdate === void 0) {
                    AntiCsrfToken2.tokenInfo = void 0;
                    return [
                      2
                      /*return*/
                    ];
                  }
                  (0, logger_1.logDebugMessage)("AntiCsrfToken.setItem: called");
                  return [4, setAntiCSRF(antiCsrf)];
                case 1:
                  _a.sent();
                  AntiCsrfToken2.tokenInfo = {
                    antiCsrf,
                    associatedAccessTokenUpdate
                  };
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        return AntiCsrfToken2;
      }()
    );
    exports.AntiCsrfToken = AntiCsrfToken;
    var FrontToken = (
      /** @class */
      function() {
        function FrontToken2() {
        }
        FrontToken2.getTokenInfo = function() {
          return __awaiter(this, void 0, void 0, function() {
            var frontToken, response;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  (0, logger_1.logDebugMessage)("FrontToken.getTokenInfo: called");
                  return [4, getFrontToken()];
                case 1:
                  frontToken = _a.sent();
                  if (!(frontToken === null)) return [3, 5];
                  return [4, getLocalSessionState(false)];
                case 2:
                  if (!(_a.sent().status === "EXISTS")) return [3, 4];
                  return [4, new Promise(function(resolve) {
                    FrontToken2.waiters.push(resolve);
                  })];
                case 3:
                  _a.sent();
                  return [2, FrontToken2.getTokenInfo()];
                case 4:
                  return [2, void 0];
                case 5:
                  response = parseFrontToken(frontToken);
                  (0, logger_1.logDebugMessage)("FrontToken.getTokenInfo: returning ate: " + response.ate);
                  (0, logger_1.logDebugMessage)("FrontToken.getTokenInfo: returning uid: " + response.uid);
                  (0, logger_1.logDebugMessage)("FrontToken.getTokenInfo: returning up: " + response.up);
                  return [2, response];
              }
            });
          });
        };
        FrontToken2.removeToken = function() {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  (0, logger_1.logDebugMessage)("FrontToken.removeToken: called");
                  return [4, setFrontToken(void 0)];
                case 1:
                  _a.sent();
                  return [4, setToken("access", "")];
                case 2:
                  _a.sent();
                  return [4, setToken("refresh", "")];
                case 3:
                  _a.sent();
                  return [4, AntiCsrfToken.removeToken()];
                case 4:
                  _a.sent();
                  FrontToken2.waiters.forEach(function(f) {
                    return f(void 0);
                  });
                  FrontToken2.waiters = [];
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        FrontToken2.setItem = function(frontToken) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, saveLastAccessTokenUpdate()];
                case 1:
                  _a.sent();
                  if (frontToken === "remove") {
                    return [2, FrontToken2.removeToken()];
                  }
                  (0, logger_1.logDebugMessage)("FrontToken.setItem: called");
                  return [4, setFrontToken(frontToken)];
                case 2:
                  _a.sent();
                  FrontToken2.waiters.forEach(function(f) {
                    return f(void 0);
                  });
                  FrontToken2.waiters = [];
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        FrontToken2.doesTokenExists = function() {
          return __awaiter(this, void 0, void 0, function() {
            var frontToken;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  return [4, getFrontTokenFromCookie()];
                case 1:
                  frontToken = _a.sent();
                  return [2, frontToken !== null];
              }
            });
          });
        };
        FrontToken2.waiters = [];
        return FrontToken2;
      }()
    );
    exports.FrontToken = FrontToken;
    var AuthHttpRequest = (
      /** @class */
      function() {
        function AuthHttpRequest2() {
        }
        AuthHttpRequest2.init = function(config, recipeImpl) {
          (0, logger_1.logDebugMessage)("init: called");
          (0, logger_1.logDebugMessage)("init: Input apiBasePath: " + config.apiBasePath);
          (0, logger_1.logDebugMessage)("init: Input apiDomain: " + config.apiDomain);
          (0, logger_1.logDebugMessage)("init: Input autoAddCredentials: " + config.autoAddCredentials);
          (0, logger_1.logDebugMessage)("init: Input sessionTokenBackendDomain: " + config.sessionTokenBackendDomain);
          (0, logger_1.logDebugMessage)("init: Input isInIframe: " + config.isInIframe);
          (0, logger_1.logDebugMessage)("init: Input sessionExpiredStatusCode: " + config.sessionExpiredStatusCode);
          (0, logger_1.logDebugMessage)("init: Input sessionTokenFrontendDomain: " + config.sessionTokenFrontendDomain);
          (0, logger_1.logDebugMessage)("init: Input tokenTransferMethod: " + config.tokenTransferMethod);
          var fetchedWindow = windowHandler_1.default.getReferenceOrThrow().windowHandler.getWindowUnsafe();
          AuthHttpRequest2.env = fetchedWindow === void 0 || fetchedWindow.fetch === void 0 ? global : fetchedWindow;
          AuthHttpRequest2.refreshTokenUrl = config.apiDomain + config.apiBasePath + "/session/refresh";
          AuthHttpRequest2.signOutUrl = config.apiDomain + config.apiBasePath + "/signout";
          AuthHttpRequest2.rid = "session";
          AuthHttpRequest2.config = config;
          if (AuthHttpRequest2.env.__supertokensOriginalFetch === void 0) {
            (0, logger_1.logDebugMessage)("init: __supertokensOriginalFetch is undefined");
            AuthHttpRequest2.env.__supertokensOriginalFetch = AuthHttpRequest2.env.fetch.bind(AuthHttpRequest2.env);
            AuthHttpRequest2.env.__supertokensSessionRecipe = recipeImpl;
            AuthHttpRequest2.env.fetch = AuthHttpRequest2.env.__supertokensSessionRecipe.addFetchInterceptorsAndReturnModifiedFetch({
              originalFetch: AuthHttpRequest2.env.__supertokensOriginalFetch,
              userContext: {}
            });
            AuthHttpRequest2.env.__supertokensSessionRecipe.addXMLHttpRequestInterceptor({
              userContext: {}
            });
          }
          AuthHttpRequest2.recipeImpl = AuthHttpRequest2.env.__supertokensSessionRecipe;
          AuthHttpRequest2.initCalled = true;
        };
        var _a;
        _a = AuthHttpRequest2;
        AuthHttpRequest2.initCalled = false;
        AuthHttpRequest2.doRequest = function(httpCall, config, url) {
          return __awaiter(void 0, void 0, void 0, function() {
            var doNotDoInterception, finalURL, origHeaders, accessToken, refreshToken, sessionRefreshAttempts, returnObj, preRequestLSS, clonedHeaders, configWithAntiCsrf, antiCsrfToken, transferMethod, response, errorMessage, retry;
            return __generator(_a, function(_b) {
              switch (_b.label) {
                case 0:
                  if (!AuthHttpRequest2.initCalled) {
                    throw Error("init function not called");
                  }
                  (0, logger_1.logDebugMessage)("doRequest: start of fetch interception");
                  doNotDoInterception = false;
                  try {
                    finalURL = void 0;
                    if (typeof url === "string") {
                      finalURL = url;
                    } else if (typeof url === "object") {
                      if (typeof url.url === "string") {
                        finalURL = url.url;
                      } else if (typeof url.href === "string") {
                        finalURL = url.href;
                      }
                    }
                    doNotDoInterception = !AuthHttpRequest2.recipeImpl.shouldDoInterceptionBasedOnUrl(finalURL, AuthHttpRequest2.config.apiDomain, AuthHttpRequest2.config.sessionTokenBackendDomain);
                  } catch (err) {
                    if (err.message === "Please provide a valid domain name") {
                      (0, logger_1.logDebugMessage)("doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin");
                      doNotDoInterception = !AuthHttpRequest2.recipeImpl.shouldDoInterceptionBasedOnUrl(windowHandler_1.default.getReferenceOrThrow().windowHandler.location.getOrigin(), AuthHttpRequest2.config.apiDomain, AuthHttpRequest2.config.sessionTokenBackendDomain);
                    } else {
                      throw err;
                    }
                  }
                  (0, logger_1.logDebugMessage)("doRequest: Value of doNotDoInterception: " + doNotDoInterception);
                  if (!doNotDoInterception) return [3, 2];
                  (0, logger_1.logDebugMessage)("doRequest: Returning without interception");
                  return [4, httpCall(config)];
                case 1:
                  return [2, _b.sent()];
                case 2:
                  origHeaders = new Headers(config !== void 0 && config.headers !== void 0 ? config.headers : url.headers);
                  if (!origHeaders.has("Authorization")) return [3, 5];
                  return [4, getTokenForHeaderAuth("access")];
                case 3:
                  accessToken = _b.sent();
                  return [4, getTokenForHeaderAuth("refresh")];
                case 4:
                  refreshToken = _b.sent();
                  if (accessToken !== void 0 && refreshToken !== void 0 && origHeaders.get("Authorization") === "Bearer ".concat(accessToken)) {
                    (0, logger_1.logDebugMessage)("doRequest: Removing Authorization from user provided headers because it contains our access token");
                    origHeaders.delete("Authorization");
                  }
                  _b.label = 5;
                case 5:
                  (0, logger_1.logDebugMessage)("doRequest: Interception started");
                  processState_1.ProcessState.getInstance().addState(processState_1.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST);
                  sessionRefreshAttempts = 0;
                  returnObj = void 0;
                  _b.label = 6;
                case 6:
                  if (false) return [3, 18];
                  return [4, getLocalSessionState(true)];
                case 7:
                  preRequestLSS = _b.sent();
                  clonedHeaders = new Headers(origHeaders);
                  configWithAntiCsrf = __assign(__assign({}, config), {
                    headers: clonedHeaders
                  });
                  if (!(preRequestLSS.status === "EXISTS")) return [3, 9];
                  return [4, AntiCsrfToken.getToken(preRequestLSS.lastAccessTokenUpdate)];
                case 8:
                  antiCsrfToken = _b.sent();
                  if (antiCsrfToken !== void 0) {
                    (0, logger_1.logDebugMessage)("doRequest: Adding anti-csrf token to request");
                    clonedHeaders.set("anti-csrf", antiCsrfToken);
                  }
                  _b.label = 9;
                case 9:
                  if (AuthHttpRequest2.config.autoAddCredentials) {
                    (0, logger_1.logDebugMessage)("doRequest: Adding credentials include");
                    if (configWithAntiCsrf === void 0) {
                      configWithAntiCsrf = {
                        credentials: "include"
                      };
                    } else if (configWithAntiCsrf.credentials === void 0) {
                      configWithAntiCsrf = __assign(__assign({}, configWithAntiCsrf), {
                        credentials: "include"
                      });
                    }
                  }
                  if (!clonedHeaders.has("rid")) {
                    (0, logger_1.logDebugMessage)("doRequest: Adding rid header: anti-csrf");
                    clonedHeaders.set("rid", "anti-csrf");
                  } else {
                    (0, logger_1.logDebugMessage)("doRequest: rid header was already there in request");
                  }
                  transferMethod = AuthHttpRequest2.config.tokenTransferMethod;
                  (0, logger_1.logDebugMessage)("doRequest: Adding st-auth-mode header: " + transferMethod);
                  clonedHeaders.set("st-auth-mode", transferMethod);
                  return [4, setAuthorizationHeaderIfRequired(clonedHeaders)];
                case 10:
                  _b.sent();
                  (0, logger_1.logDebugMessage)("doRequest: Making user's http call");
                  return [4, httpCall(configWithAntiCsrf)];
                case 11:
                  response = _b.sent();
                  (0, logger_1.logDebugMessage)("doRequest: User's http call ended");
                  return [4, saveTokensFromHeaders(response)];
                case 12:
                  _b.sent();
                  fireSessionUpdateEventsIfNecessary(preRequestLSS.status === "EXISTS", response.status, response.headers.get("front-token"));
                  if (!(response.status === AuthHttpRequest2.config.sessionExpiredStatusCode)) return [3, 14];
                  (0, logger_1.logDebugMessage)("doRequest: Status code is: " + response.status);
                  if (sessionRefreshAttempts >= AuthHttpRequest2.config.maxRetryAttemptsForSessionRefresh) {
                    (0, logger_1.logDebugMessage)("doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(sessionRefreshAttempts, ", maxRetryAttemptsForSessionRefresh: ").concat(AuthHttpRequest2.config.maxRetryAttemptsForSessionRefresh));
                    errorMessage = "Received a 401 response from ".concat(url, ". Attempted to refresh the session and retry the request with the updated session tokens ").concat(AuthHttpRequest2.config.maxRetryAttemptsForSessionRefresh, " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config.");
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  return [4, onUnauthorisedResponse(preRequestLSS)];
                case 13:
                  retry = _b.sent();
                  sessionRefreshAttempts++;
                  (0, logger_1.logDebugMessage)("doRequest: sessionRefreshAttempts: " + sessionRefreshAttempts);
                  if (retry.result !== "RETRY") {
                    (0, logger_1.logDebugMessage)("doRequest: Not retrying original request");
                    if (retry.error !== void 0) {
                      if (retry.error instanceof Response) {
                        returnObj = retry.error;
                      } else {
                        throw retry.error;
                      }
                    } else {
                      returnObj = response;
                    }
                    return [3, 18];
                  }
                  (0, logger_1.logDebugMessage)("doRequest: Retrying original request");
                  return [3, 17];
                case 14:
                  if (!(response.status === AuthHttpRequest2.config.invalidClaimStatusCode)) return [3, 16];
                  return [4, onInvalidClaimResponse(response)];
                case 15:
                  _b.sent();
                  _b.label = 16;
                case 16:
                  return [2, response];
                case 17:
                  return [3, 6];
                case 18:
                  return [2, returnObj];
              }
            });
          });
        };
        AuthHttpRequest2.attemptRefreshingSession = function() {
          return __awaiter(void 0, void 0, void 0, function() {
            var preRequestLSS, refresh;
            return __generator(_a, function(_b) {
              switch (_b.label) {
                case 0:
                  if (!AuthHttpRequest2.initCalled) {
                    throw Error("init function not called");
                  }
                  return [4, getLocalSessionState(false)];
                case 1:
                  preRequestLSS = _b.sent();
                  return [4, onUnauthorisedResponse(preRequestLSS)];
                case 2:
                  refresh = _b.sent();
                  if (refresh.result === "API_ERROR") {
                    throw refresh.error;
                  }
                  return [2, refresh.result === "RETRY"];
              }
            });
          });
        };
        return AuthHttpRequest2;
      }()
    );
    exports.default = AuthHttpRequest;
    var LAST_ACCESS_TOKEN_UPDATE = "st-last-access-token-update";
    var REFRESH_TOKEN_NAME = "st-refresh-token";
    var ACCESS_TOKEN_NAME = "st-access-token";
    var ANTI_CSRF_NAME = "sAntiCsrf";
    var FRONT_TOKEN_NAME = "sFrontToken";
    function onUnauthorisedResponse(preRequestLSS) {
      return __awaiter(this, void 0, void 0, function() {
        var lock, postLockLSS, postLockSessionExists, preRequestSessionExists, sessionStatusChanged, accessTokenTimestampChanged, headers, antiCsrfToken, transferMethod, preAPIResult, response, isUnauthorised, errorMessage, error_1, postRequestLSS;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, lockFactory_1.default.getReferenceOrThrow().lockFactory()];
            case 1:
              lock = _b.sent();
              _b.label = 2;
            case 2:
              if (false) return [3, 23];
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: trying to acquire lock");
              return [4, lock.acquireLock("REFRESH_TOKEN_USE", 1e3)];
            case 3:
              if (!_b.sent()) return [3, 21];
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: lock acquired");
              _b.label = 4;
            case 4:
              _b.trys.push([4, 17, 19, 21]);
              return [4, getLocalSessionState(false)];
            case 5:
              postLockLSS = _b.sent();
              if (postLockLSS.status === "NOT_EXISTS") {
                (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Not refreshing because local session state is NOT_EXISTS");
                AuthHttpRequest.config.onHandleEvent({
                  action: "UNAUTHORISED",
                  sessionExpiredOrRevoked: false,
                  userContext: {}
                });
                return [2, {
                  result: "SESSION_EXPIRED"
                }];
              }
              postLockSessionExists = postLockLSS.status === "EXISTS";
              preRequestSessionExists = preRequestLSS.status === "EXISTS";
              sessionStatusChanged = postLockLSS.status !== preRequestLSS.status;
              accessTokenTimestampChanged = "lastAccessTokenUpdate" in postLockLSS && "lastAccessTokenUpdate" in preRequestLSS && postLockLSS.lastAccessTokenUpdate !== preRequestLSS.lastAccessTokenUpdate;
              if (sessionStatusChanged && postLockSessionExists) {
                (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Retrying early because session status has changed and postLockLSS.status is EXISTS");
                return [2, {
                  result: "RETRY"
                }];
              }
              if (postLockSessionExists && preRequestSessionExists && accessTokenTimestampChanged) {
                (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Retrying early because pre and post lastAccessTokenUpdate don't match");
                return [2, {
                  result: "RETRY"
                }];
              }
              headers = new Headers();
              if (!(preRequestLSS.status === "EXISTS")) return [3, 7];
              return [4, AntiCsrfToken.getToken(preRequestLSS.lastAccessTokenUpdate)];
            case 6:
              antiCsrfToken = _b.sent();
              if (antiCsrfToken !== void 0) {
                (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Adding anti-csrf token to refresh API call");
                headers.set("anti-csrf", antiCsrfToken);
              }
              _b.label = 7;
            case 7:
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Adding rid and fdi-versions to refresh call header");
              headers.set("rid", AuthHttpRequest.rid);
              headers.set("fdi-version", version_1.supported_fdi.join(","));
              transferMethod = AuthHttpRequest.config.tokenTransferMethod;
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Adding st-auth-mode header: " + transferMethod);
              headers.set("st-auth-mode", transferMethod);
              return [4, setAuthorizationHeaderIfRequired(headers, true)];
            case 8:
              _b.sent();
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Calling refresh pre API hook");
              return [4, AuthHttpRequest.config.preAPIHook({
                action: "REFRESH_SESSION",
                requestInit: {
                  method: "post",
                  credentials: "include",
                  headers
                },
                url: AuthHttpRequest.refreshTokenUrl,
                userContext: {}
              })];
            case 9:
              preAPIResult = _b.sent();
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Making refresh call");
              return [4, AuthHttpRequest.env.__supertokensOriginalFetch(preAPIResult.url, preAPIResult.requestInit)];
            case 10:
              response = _b.sent();
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Refresh call ended");
              return [4, saveTokensFromHeaders(response)];
            case 11:
              _b.sent();
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Refresh status code is: " + response.status);
              isUnauthorised = response.status === AuthHttpRequest.config.sessionExpiredStatusCode;
              if (!(response.headers.get("front-token") === null)) return [3, 14];
              if (!isUnauthorised) return [3, 13];
              return [4, FrontToken.setItem("remove")];
            case 12:
              _b.sent();
              return [3, 14];
            case 13:
              if (response.status === 200) {
                errorMessage = "The 'front-token' header is missing from a successful refresh-session response. The most likely causes are proxy settings (e.g.: 'front-token' missing from 'access-control-expose-headers' or a proxy stripping this header). Please investigate your API.";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              _b.label = 14;
            case 14:
              fireSessionUpdateEventsIfNecessary(preRequestLSS.status === "EXISTS", response.status, isUnauthorised && response.headers.get("front-token") === null ? "remove" : response.headers.get("front-token"));
              if (response.status >= 300) {
                throw response;
              }
              return [4, AuthHttpRequest.config.postAPIHook({
                action: "REFRESH_SESSION",
                fetchResponse: response.clone(),
                requestInit: preAPIResult.requestInit,
                url: preAPIResult.url,
                userContext: {}
              })];
            case 15:
              _b.sent();
              return [4, getLocalSessionState(false)];
            case 16:
              if (_b.sent().status === "NOT_EXISTS") {
                (0, logger_1.logDebugMessage)("onUnauthorisedResponse: local session doesn't exist, so returning session expired");
                return [2, {
                  result: "SESSION_EXPIRED"
                }];
              }
              AuthHttpRequest.config.onHandleEvent({
                action: "REFRESH_SESSION",
                userContext: {}
              });
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Sending RETRY signal");
              return [2, {
                result: "RETRY"
              }];
            case 17:
              error_1 = _b.sent();
              return [4, getLocalSessionState(false)];
            case 18:
              if (_b.sent().status === "NOT_EXISTS") {
                (0, logger_1.logDebugMessage)("onUnauthorisedResponse: local session doesn't exist, so returning session expired");
                return [2, {
                  result: "SESSION_EXPIRED",
                  error: error_1
                }];
              }
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: sending API_ERROR");
              return [2, {
                result: "API_ERROR",
                error: error_1
              }];
            case 19:
              return [4, lock.releaseLock("REFRESH_TOKEN_USE")];
            case 20:
              _b.sent();
              (0, logger_1.logDebugMessage)("onUnauthorisedResponse: Released lock");
              return [
                7
                /*endfinally*/
              ];
            case 21:
              return [4, getLocalSessionState(false)];
            case 22:
              postRequestLSS = _b.sent();
              if (postRequestLSS.status === "NOT_EXISTS") {
                (0, logger_1.logDebugMessage)("onUnauthorisedResponse: lock acquired failed and local session doesn't exist, so sending SESSION_EXPIRED");
                return [2, {
                  result: "SESSION_EXPIRED"
                }];
              } else {
                if (postRequestLSS.status !== preRequestLSS.status || postRequestLSS.status === "EXISTS" && preRequestLSS.status === "EXISTS" && postRequestLSS.lastAccessTokenUpdate !== preRequestLSS.lastAccessTokenUpdate) {
                  (0, logger_1.logDebugMessage)("onUnauthorisedResponse: lock acquired failed and retrying early because pre and post lastAccessTokenUpdate don't match");
                  return [2, {
                    result: "RETRY"
                  }];
                }
              }
              return [3, 2];
            case 23:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    exports.onUnauthorisedResponse = onUnauthorisedResponse;
    function onTokenUpdate() {
      (0, logger_1.logDebugMessage)("onTokenUpdate: firing ACCESS_TOKEN_PAYLOAD_UPDATED event");
      AuthHttpRequest.config.onHandleEvent({
        action: "ACCESS_TOKEN_PAYLOAD_UPDATED",
        userContext: {}
      });
    }
    exports.onTokenUpdate = onTokenUpdate;
    function onInvalidClaimResponse(response) {
      return __awaiter(this, void 0, void 0, function() {
        var claimValidationErrors, _b;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              _c.trys.push([0, 2, , 3]);
              return [4, AuthHttpRequest.recipeImpl.getInvalidClaimsFromResponse({
                response,
                userContext: {}
              })];
            case 1:
              claimValidationErrors = _c.sent();
              if (claimValidationErrors) {
                AuthHttpRequest.config.onHandleEvent({
                  action: "API_INVALID_CLAIM",
                  claimValidationErrors,
                  userContext: {}
                });
              }
              return [3, 3];
            case 2:
              _b = _c.sent();
              return [3, 3];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    exports.onInvalidClaimResponse = onInvalidClaimResponse;
    function getLocalSessionState(tryRefresh) {
      return __awaiter(this, void 0, void 0, function() {
        var lastAccessTokenUpdate, frontTokenExists, response, res, lastAccessTokenUpdate_1, frontTokenExists_1, errorMessage;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("getLocalSessionState: called");
              return [4, getFromCookies(LAST_ACCESS_TOKEN_UPDATE)];
            case 1:
              lastAccessTokenUpdate = _b.sent();
              return [4, FrontToken.doesTokenExists()];
            case 2:
              frontTokenExists = _b.sent();
              if (!(frontTokenExists && lastAccessTokenUpdate !== void 0)) return [3, 3];
              (0, logger_1.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists");
              return [2, {
                status: "EXISTS",
                lastAccessTokenUpdate
              }];
            case 3:
              if (!lastAccessTokenUpdate) return [3, 4];
              (0, logger_1.logDebugMessage)("getLocalSessionState: returning NOT_EXISTS since frontToken was cleared but lastAccessTokenUpdate exists");
              return [2, {
                status: "NOT_EXISTS"
              }];
            case 4:
              response = {
                status: "MAY_EXIST"
              };
              if (!tryRefresh) return [3, 8];
              (0, logger_1.logDebugMessage)("getLocalSessionState: trying to refresh");
              return [4, onUnauthorisedResponse(response)];
            case 5:
              res = _b.sent();
              if (res.result !== "RETRY") {
                (0, logger_1.logDebugMessage)("getLocalSessionState: return NOT_EXISTS in case error from backend" + res.result);
                return [2, {
                  status: "NOT_EXISTS"
                }];
              }
              return [4, getFromCookies(LAST_ACCESS_TOKEN_UPDATE)];
            case 6:
              lastAccessTokenUpdate_1 = _b.sent();
              return [4, FrontToken.doesTokenExists()];
            case 7:
              frontTokenExists_1 = _b.sent();
              if (!frontTokenExists_1 || lastAccessTokenUpdate_1 === void 0) {
                errorMessage = "Failed to retrieve local session state from cookies after a successful session refresh. This indicates a configuration error or that the browser is preventing cookie writes.";
                console.error(errorMessage);
                throw new Error(errorMessage);
              }
              (0, logger_1.logDebugMessage)("getLocalSessionState: returning EXISTS since both frontToken and lastAccessTokenUpdate exists post refresh");
              return [2, {
                status: "EXISTS",
                lastAccessTokenUpdate: lastAccessTokenUpdate_1
              }];
            case 8:
              (0, logger_1.logDebugMessage)("getLocalSessionState: returning: " + response.status);
              return [2, response];
          }
        });
      });
    }
    exports.getLocalSessionState = getLocalSessionState;
    function getStorageNameForToken(tokenType) {
      switch (tokenType) {
        case "access":
          return ACCESS_TOKEN_NAME;
        case "refresh":
          return REFRESH_TOKEN_NAME;
      }
    }
    exports.getStorageNameForToken = getStorageNameForToken;
    function setToken(tokenType, value) {
      var name = getStorageNameForToken(tokenType);
      if (value !== "") {
        (0, logger_1.logDebugMessage)("setToken: saved ".concat(tokenType, " token into cookies"));
        return storeInCookies(name, value, Date.now() + 31536e5);
      } else {
        (0, logger_1.logDebugMessage)("setToken: cleared ".concat(tokenType, " token from cookies"));
        return storeInCookies(name, value, 0);
      }
    }
    exports.setToken = setToken;
    function storeInCookies(name, value, expiry) {
      var expires = "Fri, 31 Dec 9999 23:59:59 GMT";
      if (expiry !== Number.MAX_SAFE_INTEGER) {
        expires = new Date(expiry).toUTCString();
      }
      var domain = AuthHttpRequest.config.sessionTokenFrontendDomain;
      if (domain === "localhost" || domain === windowHandler_1.default.getReferenceOrThrow().windowHandler.location.getHostName()) {
        return cookieHandler_1.default.getReferenceOrThrow().cookieHandler.setCookie("".concat(name, "=").concat(value, ";expires=").concat(expires, ";path=/;samesite=").concat(AuthHttpRequest.config.isInIframe ? "none;secure" : "lax"));
      } else {
        return cookieHandler_1.default.getReferenceOrThrow().cookieHandler.setCookie("".concat(name, "=").concat(value, ";expires=").concat(expires, ";domain=").concat(domain, ";path=/;samesite=").concat(AuthHttpRequest.config.isInIframe ? "none;secure" : "lax"));
      }
    }
    function getTokenForHeaderAuth(tokenType) {
      return __awaiter(this, void 0, void 0, function() {
        var name;
        return __generator(this, function(_b) {
          name = getStorageNameForToken(tokenType);
          return [2, getFromCookies(name)];
        });
      });
    }
    exports.getTokenForHeaderAuth = getTokenForHeaderAuth;
    function getFromCookies(name) {
      return __awaiter(this, void 0, void 0, function() {
        var value, _b, parts, last;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              _b = "; ";
              return [4, cookieHandler_1.default.getReferenceOrThrow().cookieHandler.getCookie()];
            case 1:
              value = _b + _c.sent();
              parts = value.split("; " + name + "=");
              if (parts.length >= 2) {
                last = parts.pop();
                if (last !== void 0) {
                  return [2, last.split(";").shift()];
                }
              }
              return [2, void 0];
          }
        });
      });
    }
    function setAuthorizationHeaderIfRequired(clonedHeaders, addRefreshToken) {
      if (addRefreshToken === void 0) {
        addRefreshToken = false;
      }
      return __awaiter(this, void 0, void 0, function() {
        var accessToken, refreshToken;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("setTokenHeaders: adding existing tokens as header");
              return [4, getTokenForHeaderAuth("access")];
            case 1:
              accessToken = _b.sent();
              return [4, getTokenForHeaderAuth("refresh")];
            case 2:
              refreshToken = _b.sent();
              if ((addRefreshToken || accessToken !== void 0) && refreshToken !== void 0) {
                if (clonedHeaders.has("Authorization")) {
                  (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding");
                } else {
                  (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: added authorization header");
                  clonedHeaders.set("Authorization", "Bearer ".concat(addRefreshToken ? refreshToken : accessToken));
                }
              } else {
                (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: token for header based auth not found");
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function saveTokensFromHeaders(response) {
      return __awaiter(this, void 0, void 0, function() {
        var refreshToken, accessToken, frontToken, antiCsrfToken, tok;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response headers");
              refreshToken = response.headers.get("st-refresh-token");
              if (!(refreshToken !== null)) return [3, 2];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: saving new refresh token");
              return [4, setToken("refresh", refreshToken)];
            case 1:
              _b.sent();
              _b.label = 2;
            case 2:
              accessToken = response.headers.get("st-access-token");
              if (!(accessToken !== null)) return [3, 4];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: saving new access token");
              return [4, setToken("access", accessToken)];
            case 3:
              _b.sent();
              _b.label = 4;
            case 4:
              frontToken = response.headers.get("front-token");
              if (!(frontToken !== null)) return [3, 6];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + frontToken);
              return [4, FrontToken.setItem(frontToken)];
            case 5:
              _b.sent();
              (0, exports.updateClockSkewUsingFrontToken)({
                frontToken,
                responseHeaders: response.headers
              });
              _b.label = 6;
            case 6:
              antiCsrfToken = response.headers.get("anti-csrf");
              if (!(antiCsrfToken !== null)) return [3, 9];
              return [4, getLocalSessionState(false)];
            case 7:
              tok = _b.sent();
              if (!(tok.status === "EXISTS")) return [3, 9];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token");
              return [4, AntiCsrfToken.setItem(tok.lastAccessTokenUpdate, antiCsrfToken)];
            case 8:
              _b.sent();
              _b.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    var successfullySavedToCookies = void 0;
    function saveLastAccessTokenUpdate() {
      return __awaiter(this, void 0, void 0, function() {
        var now;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("saveLastAccessTokenUpdate: called");
              now = Date.now().toString();
              (0, logger_1.logDebugMessage)("saveLastAccessTokenUpdate: setting " + now);
              return [4, storeInCookies(LAST_ACCESS_TOKEN_UPDATE, now, Number.MAX_SAFE_INTEGER)];
            case 1:
              _b.sent();
              if (!(successfullySavedToCookies === void 0)) return [3, 3];
              return [4, getFromCookies(LAST_ACCESS_TOKEN_UPDATE)];
            case 2:
              successfullySavedToCookies = _b.sent() === now;
              _b.label = 3;
            case 3:
              if (successfullySavedToCookies === false) {
                console.warn("Saving to cookies was not successful, this indicates a configuration error or the browser preventing us from writing the cookies.");
              }
              return [4, storeInCookies("sIRTFrontend", "", 0)];
            case 4:
              _b.sent();
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    exports.saveLastAccessTokenUpdate = saveLastAccessTokenUpdate;
    function getAntiCSRFToken() {
      return __awaiter(this, void 0, void 0, function() {
        function getAntiCSRFromCookie() {
          return __awaiter(this, void 0, void 0, function() {
            var value, _b, parts, last, temp;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _b = "; ";
                  return [4, cookieHandler_1.default.getReferenceOrThrow().cookieHandler.getCookie()];
                case 1:
                  value = _b + _c.sent();
                  parts = value.split("; " + ANTI_CSRF_NAME + "=");
                  if (parts.length >= 2) {
                    last = parts.pop();
                    if (last !== void 0) {
                      temp = last.split(";").shift();
                      if (temp === void 0) {
                        return [2, null];
                      }
                      return [2, temp];
                    }
                  }
                  return [2, null];
              }
            });
          });
        }
        var fromCookie;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("getAntiCSRFToken: called");
              return [4, getLocalSessionState(true)];
            case 1:
              if (!(_b.sent().status === "EXISTS")) {
                (0, logger_1.logDebugMessage)("getAntiCSRFToken: Returning because local session state != EXISTS");
                return [2, null];
              }
              return [4, getAntiCSRFromCookie()];
            case 2:
              fromCookie = _b.sent();
              (0, logger_1.logDebugMessage)("getAntiCSRFToken: returning: " + fromCookie);
              return [2, fromCookie];
          }
        });
      });
    }
    function setAntiCSRF(antiCSRFToken) {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("setAntiCSRF: called: " + antiCSRFToken);
              if (!(antiCSRFToken !== void 0)) return [3, 2];
              return [4, storeInCookies(ANTI_CSRF_NAME, antiCSRFToken, Number.MAX_SAFE_INTEGER)];
            case 1:
              _b.sent();
              return [3, 4];
            case 2:
              return [4, storeInCookies(ANTI_CSRF_NAME, "", 0)];
            case 3:
              _b.sent();
              _b.label = 4;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    exports.setAntiCSRF = setAntiCSRF;
    function getFrontTokenFromCookie() {
      return __awaiter(this, void 0, void 0, function() {
        var val;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("getFrontTokenFromCookie: called");
              return [4, getFromCookies(FRONT_TOKEN_NAME)];
            case 1:
              val = _b.sent();
              return [2, val === void 0 ? null : val];
          }
        });
      });
    }
    function parseFrontToken(frontToken) {
      return JSON.parse(decodeURIComponent(escape(atob(frontToken))));
    }
    function getFrontToken() {
      return __awaiter(this, void 0, void 0, function() {
        var fromCookie;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("getFrontToken: called");
              return [4, getLocalSessionState(true)];
            case 1:
              if (!(_b.sent().status === "EXISTS")) {
                (0, logger_1.logDebugMessage)("getFrontToken: Returning because sIRTFrontend != EXISTS");
                return [2, null];
              }
              return [4, getFrontTokenFromCookie()];
            case 2:
              fromCookie = _b.sent();
              (0, logger_1.logDebugMessage)("getFrontToken: returning: " + fromCookie);
              return [2, fromCookie];
          }
        });
      });
    }
    exports.getFrontToken = getFrontToken;
    function setFrontToken(frontToken) {
      return __awaiter(this, void 0, void 0, function() {
        var oldToken, oldPayload, newPayload;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("setFrontToken: called");
              return [4, getFrontTokenFromCookie()];
            case 1:
              oldToken = _b.sent();
              if (oldToken !== null && frontToken !== void 0) {
                oldPayload = parseFrontToken(oldToken).up;
                newPayload = parseFrontToken(frontToken).up;
                if (JSON.stringify(oldPayload) !== JSON.stringify(newPayload)) {
                  onTokenUpdate();
                }
              }
              if (!(frontToken === void 0)) return [3, 3];
              return [4, storeInCookies(FRONT_TOKEN_NAME, "", 0)];
            case 2:
              _b.sent();
              return [3, 5];
            case 3:
              return [4, storeInCookies(FRONT_TOKEN_NAME, frontToken, Number.MAX_SAFE_INTEGER)];
            case 4:
              _b.sent();
              _b.label = 5;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    exports.setFrontToken = setFrontToken;
    function fireSessionUpdateEventsIfNecessary(wasLoggedIn, status, frontTokenHeaderFromResponse) {
      if (frontTokenHeaderFromResponse === void 0 || frontTokenHeaderFromResponse === null) {
        (0, logger_1.logDebugMessage)("fireSessionUpdateEventsIfNecessary returning early because the front token was not updated");
        return;
      }
      var frontTokenExistsAfter = frontTokenHeaderFromResponse !== "remove";
      (0, logger_1.logDebugMessage)("fireSessionUpdateEventsIfNecessary wasLoggedIn: ".concat(wasLoggedIn, " frontTokenExistsAfter: ").concat(frontTokenExistsAfter, " status: ").concat(status));
      if (wasLoggedIn) {
        if (!frontTokenExistsAfter) {
          if (status === AuthHttpRequest.config.sessionExpiredStatusCode) {
            (0, logger_1.logDebugMessage)("onUnauthorisedResponse: firing UNAUTHORISED event");
            AuthHttpRequest.config.onHandleEvent({
              action: "UNAUTHORISED",
              sessionExpiredOrRevoked: true,
              userContext: {}
            });
          } else {
            (0, logger_1.logDebugMessage)("onUnauthorisedResponse: firing SIGN_OUT event");
            AuthHttpRequest.config.onHandleEvent({
              action: "SIGN_OUT",
              userContext: {}
            });
          }
        }
      } else if (frontTokenExistsAfter) {
        (0, logger_1.logDebugMessage)("onUnauthorisedResponse: firing SESSION_CREATED event");
        AuthHttpRequest.config.onHandleEvent({
          action: "SESSION_CREATED",
          userContext: {}
        });
      }
    }
    exports.fireSessionUpdateEventsIfNecessary = fireSessionUpdateEventsIfNecessary;
    var updateClockSkewUsingFrontToken = function(_b) {
      var frontToken = _b.frontToken, responseHeaders = _b.responseHeaders;
      (0, logger_1.logDebugMessage)("updateClockSkewUsingFrontToken: frontToken: " + frontToken);
      if (frontToken === null || frontToken === void 0 || frontToken === "remove") {
        (0, logger_1.logDebugMessage)("updateClockSkewUsingFrontToken: the access token payload wasn't updated or is being removed, skipping clock skew update");
        return;
      }
      var frontTokenPayload = parseFrontToken(frontToken);
      var clockSkewInMillis = AuthHttpRequest.recipeImpl.calculateClockSkewInMillis({
        accessTokenPayload: frontTokenPayload.up,
        responseHeaders
      });
      dateProvider_1.default.getReferenceOrThrow().dateProvider.setClientClockSkewInMillis(clockSkewInMillis);
      (0, logger_1.logDebugMessage)("updateClockSkewUsingFrontToken: Client clock synchronized successfully");
    };
    exports.updateClockSkewUsingFrontToken = updateClockSkewUsingFrontToken;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/sessionClaimValidatorStore.js
var require_sessionClaimValidatorStore = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/sessionClaimValidatorStore.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SessionClaimValidatorStore = void 0;
    var SessionClaimValidatorStore = (
      /** @class */
      function() {
        function SessionClaimValidatorStore2() {
        }
        SessionClaimValidatorStore2.claimValidatorsAddedByOtherRecipes = [];
        SessionClaimValidatorStore2.addClaimValidatorFromOtherRecipe = function(builder) {
          SessionClaimValidatorStore2.claimValidatorsAddedByOtherRecipes.push(builder);
        };
        SessionClaimValidatorStore2.getClaimValidatorsAddedByOtherRecipes = function() {
          return SessionClaimValidatorStore2.claimValidatorsAddedByOtherRecipes;
        };
        return SessionClaimValidatorStore2;
      }()
    );
    exports.SessionClaimValidatorStore = SessionClaimValidatorStore;
    exports.default = SessionClaimValidatorStore;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/globalClaimValidators.js
var require_globalClaimValidators = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/utils/globalClaimValidators.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getGlobalClaimValidators = void 0;
    var _1 = require_utils();
    var fetch_1 = require_fetch();
    var sessionClaimValidatorStore_1 = require_sessionClaimValidatorStore();
    function getGlobalClaimValidators(overrideGlobalClaimValidators, userContext) {
      var normalisedUserContext = (0, _1.getNormalisedUserContext)(userContext);
      var claimValidatorsAddedByOtherRecipes = sessionClaimValidatorStore_1.default.getClaimValidatorsAddedByOtherRecipes();
      var globalClaimValidators = fetch_1.default.recipeImpl.getGlobalClaimValidators({
        claimValidatorsAddedByOtherRecipes,
        userContext: normalisedUserContext
      });
      var claimValidators = overrideGlobalClaimValidators !== void 0 ? overrideGlobalClaimValidators(globalClaimValidators, normalisedUserContext) : globalClaimValidators;
      return claimValidators;
    }
    exports.getGlobalClaimValidators = getGlobalClaimValidators;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/utils/globalClaimValidators/index.js
var require_globalClaimValidators2 = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/utils/globalClaimValidators/index.js"(exports) {
    "use strict";
    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    exports.__esModule = true;
    __export(require_globalClaimValidators());
  }
});

// ../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normaliseUser = exports.normaliseUserResponse = exports.getGlobalClaimValidators = exports.getHashFromLocation = exports.getNormalisedUserContext = exports.checkForSSRErrorAndAppendIfNeeded = exports.getAllQueryParams = exports.getQueryParams = exports.isTest = exports.normaliseInputAppInfoOrThrowError = exports.appendQueryParamsToURL = void 0;
    var windowHandler_1 = require_windowHandler3();
    var constants_1 = require_constants();
    var normalisedURLDomain_1 = require_normalisedURLDomain();
    var normalisedURLPath_1 = require_normalisedURLPath();
    var globalClaimValidators_1 = require_globalClaimValidators2();
    function appendQueryParamsToURL(stringUrl, queryParams) {
      if (queryParams === void 0) {
        return stringUrl;
      }
      try {
        var url_1 = new URL(stringUrl);
        Object.entries(queryParams).forEach(function(_a) {
          var key = _a[0], value = _a[1];
          url_1.searchParams.set(key, value);
        });
        return url_1.href;
      } catch (e) {
        var fakeDomain = stringUrl.startsWith("/") ? "http:localhost" : "http://localhost/";
        var url_2 = new URL("".concat(fakeDomain).concat(stringUrl));
        Object.entries(queryParams).forEach(function(_a) {
          var key = _a[0], value = _a[1];
          url_2.searchParams.set(key, value);
        });
        return "".concat(url_2.pathname).concat(url_2.search);
      }
    }
    exports.appendQueryParamsToURL = appendQueryParamsToURL;
    function getNormalisedURLPathOrDefault(defaultPath, path) {
      if (path !== void 0) {
        return new normalisedURLPath_1.default(path);
      } else {
        return new normalisedURLPath_1.default(defaultPath);
      }
    }
    function normaliseInputAppInfoOrThrowError(appInfo) {
      if (appInfo === void 0) {
        throw new Error("Please provide the appInfo object when calling supertokens.init");
      }
      if (appInfo.apiDomain === void 0) {
        throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");
      }
      if (appInfo.appName === void 0) {
        throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");
      }
      var apiGatewayPath = new normalisedURLPath_1.default("");
      if (appInfo.apiGatewayPath !== void 0) {
        apiGatewayPath = new normalisedURLPath_1.default(appInfo.apiGatewayPath);
      }
      return {
        appName: appInfo.appName,
        apiDomain: new normalisedURLDomain_1.default(appInfo.apiDomain),
        apiBasePath: apiGatewayPath.appendPath(getNormalisedURLPathOrDefault(constants_1.DEFAULT_API_BASE_PATH, appInfo.apiBasePath))
      };
    }
    exports.normaliseInputAppInfoOrThrowError = normaliseInputAppInfoOrThrowError;
    function isTest() {
      try {
        return process.env.TEST_MODE === "testing";
      } catch (err) {
        return false;
      }
    }
    exports.isTest = isTest;
    function getQueryParams(param) {
      var urlParams = new URLSearchParams(windowHandler_1.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch());
      var queryParam = urlParams.get(param);
      if (queryParam === null) {
        return void 0;
      }
      return queryParam;
    }
    exports.getQueryParams = getQueryParams;
    function getAllQueryParams() {
      return new URLSearchParams(windowHandler_1.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch());
    }
    exports.getAllQueryParams = getAllQueryParams;
    function checkForSSRErrorAndAppendIfNeeded(error) {
      if (typeof window === "undefined") {
        error = error + constants_1.SSR_ERROR;
      }
      return error;
    }
    exports.checkForSSRErrorAndAppendIfNeeded = checkForSSRErrorAndAppendIfNeeded;
    function getNormalisedUserContext(userContext) {
      return userContext === void 0 ? {} : userContext;
    }
    exports.getNormalisedUserContext = getNormalisedUserContext;
    function getHashFromLocation() {
      return windowHandler_1.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1);
    }
    exports.getHashFromLocation = getHashFromLocation;
    function getGlobalClaimValidators(_a) {
      var overrideGlobalClaimValidators = _a.overrideGlobalClaimValidators, userContext = _a.userContext;
      return (0, globalClaimValidators_1.getGlobalClaimValidators)(overrideGlobalClaimValidators, userContext);
    }
    exports.getGlobalClaimValidators = getGlobalClaimValidators;
    function normaliseUserResponse(recipeId, response) {
      if ("createdNewRecipeUser" in response) {
        return response;
      }
      return {
        createdNewRecipeUser: response.createdNewUser,
        user: normaliseUser(recipeId, response.user)
      };
    }
    exports.normaliseUserResponse = normaliseUserResponse;
    function normaliseUser(recipeId, responseUser) {
      if ("loginMethods" in responseUser) {
        return responseUser;
      }
      var emails = responseUser.email !== void 0 ? [responseUser.email] : [];
      var phoneNumbers = responseUser.phoneNumber !== void 0 ? [responseUser.phoneNumber] : [];
      var thirdParty = responseUser.thirdParty !== void 0 ? [responseUser.thirdParty] : [];
      return {
        id: responseUser.id,
        emails,
        phoneNumbers,
        thirdParty,
        isPrimaryUser: false,
        tenantIds: responseUser.tenantIds,
        timeJoined: responseUser.timeJoined,
        loginMethods: [{
          recipeId,
          recipeUserId: responseUser.id,
          timeJoined: responseUser.timeJoined,
          tenantIds: responseUser.tenantIds,
          email: responseUser.email,
          phoneNumber: responseUser.email
        }]
      };
    }
    exports.normaliseUser = normaliseUser;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/axiosError.js
var require_axiosError = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/axiosError.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createAxiosErrorFromFetchResp = void 0;
    function enhanceAxiosError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code
        };
      };
      return error;
    }
    function createAxiosErrorFromFetchResp(responseOrError) {
      return __awaiter(this, void 0, void 0, function() {
        var config, isResponse, axiosResponse, contentType, data, _a;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              config = {
                url: responseOrError.url,
                headers: responseOrError.headers
              };
              isResponse = "status" in responseOrError;
              if (!isResponse) return [3, 12];
              contentType = responseOrError.headers.get("content-type");
              data = void 0;
              if (!(contentType === null)) return [3, 5];
              _b.label = 1;
            case 1:
              _b.trys.push([1, 3, , 4]);
              return [4, responseOrError.text()];
            case 2:
              data = _b.sent();
              return [3, 4];
            case 3:
              _a = _b.sent();
              data = "";
              return [3, 4];
            case 4:
              return [3, 11];
            case 5:
              if (!contentType.includes("application/json")) return [3, 7];
              return [4, responseOrError.json()];
            case 6:
              data = _b.sent();
              return [3, 11];
            case 7:
              if (!contentType.includes("text/")) return [3, 9];
              return [4, responseOrError.text()];
            case 8:
              data = _b.sent();
              return [3, 11];
            case 9:
              return [4, responseOrError.blob()];
            case 10:
              data = _b.sent();
              _b.label = 11;
            case 11:
              axiosResponse = {
                data,
                status: responseOrError.status,
                statusText: responseOrError.statusText,
                headers: responseOrError.headers,
                config,
                request: void 0
              };
              _b.label = 12;
            case 12:
              return [2, enhanceAxiosError(isResponse ? new Error("Request failed with status code " + responseOrError.status) : responseOrError, config, responseOrError.code, void 0, axiosResponse)];
          }
        });
      });
    }
    exports.createAxiosErrorFromFetchResp = createAxiosErrorFromFetchResp;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/axios.js
var require_axios = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/axios.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.responseErrorInterceptor = exports.responseInterceptor = exports.interceptorFunctionRequestFulfilled = void 0;
    var axiosError_1 = require_axiosError();
    var fetch_1 = require_fetch();
    var processState_1 = require_processState();
    var windowHandler_1 = require_windowHandler();
    var logger_1 = require_logger();
    function incrementSessionRefreshAttemptCount(config) {
      if (config.__supertokensSessionRefreshAttempts === void 0) {
        config.__supertokensSessionRefreshAttempts = 0;
      }
      config.__supertokensSessionRefreshAttempts++;
    }
    function hasExceededMaxSessionRefreshAttempts(config) {
      if (config.__supertokensSessionRefreshAttempts === void 0) {
        config.__supertokensSessionRefreshAttempts = 0;
      }
      return config.__supertokensSessionRefreshAttempts >= fetch_1.default.config.maxRetryAttemptsForSessionRefresh;
    }
    function getUrlFromConfig(config) {
      var url = config.url === void 0 ? "" : config.url;
      var baseURL = config.baseURL;
      if (baseURL !== void 0) {
        if (url.charAt(0) === "/" && baseURL.charAt(baseURL.length - 1) === "/") {
          url = baseURL + url.substr(1);
        } else if (url.charAt(0) !== "/" && baseURL.charAt(baseURL.length - 1) !== "/") {
          url = baseURL + "/" + url;
        } else {
          url = baseURL + url;
        }
      }
      return url;
    }
    function interceptorFunctionRequestFulfilled(config) {
      return __awaiter(this, void 0, void 0, function() {
        var url, doNotDoInterception, preRequestLSS, configWithAntiCsrf, antiCsrfToken, transferMethod;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: started axios interception");
              url = getUrlFromConfig(config);
              doNotDoInterception = false;
              try {
                doNotDoInterception = typeof url === "string" && !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(url, fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain);
              } catch (err) {
                if (err.message === "Please provide a valid domain name") {
                  (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: Trying shouldDoInterceptionBasedOnUrl with location.origin");
                  doNotDoInterception = !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(windowHandler_1.default.getReferenceOrThrow().windowHandler.location.getOrigin(), fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain);
                } else {
                  throw err;
                }
              }
              (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: Value of doNotDoInterception: " + doNotDoInterception);
              if (doNotDoInterception) {
                (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: Returning config unchanged");
                return [2, config];
              }
              (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: Modifying config");
              processState_1.ProcessState.getInstance().addState(processState_1.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST);
              return [4, (0, fetch_1.getLocalSessionState)(true)];
            case 1:
              preRequestLSS = _a.sent();
              configWithAntiCsrf = config;
              if (!(preRequestLSS.status === "EXISTS")) return [3, 3];
              return [4, fetch_1.AntiCsrfToken.getToken(preRequestLSS.lastAccessTokenUpdate)];
            case 2:
              antiCsrfToken = _a.sent();
              if (antiCsrfToken !== void 0) {
                (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding anti-csrf token to request");
                configWithAntiCsrf = __assign(__assign({}, configWithAntiCsrf), {
                  headers: configWithAntiCsrf === void 0 ? {
                    "anti-csrf": antiCsrfToken
                  } : __assign(__assign({}, configWithAntiCsrf.headers), {
                    "anti-csrf": antiCsrfToken
                  })
                });
              }
              _a.label = 3;
            case 3:
              if (fetch_1.default.config.autoAddCredentials && configWithAntiCsrf.withCredentials === void 0) {
                (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding credentials include");
                configWithAntiCsrf = __assign(__assign({}, configWithAntiCsrf), {
                  withCredentials: true
                });
              }
              (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding rid header: anti-csrf (it may be overriden by the user's provided rid)");
              configWithAntiCsrf = __assign(__assign({}, configWithAntiCsrf), {
                headers: configWithAntiCsrf === void 0 ? {
                  rid: "anti-csrf"
                } : __assign({
                  rid: "anti-csrf"
                }, configWithAntiCsrf.headers)
              });
              transferMethod = fetch_1.default.config.tokenTransferMethod;
              (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: Adding st-auth-mode header: " + transferMethod);
              configWithAntiCsrf.headers["st-auth-mode"] = transferMethod;
              return [4, removeAuthHeaderIfMatchesLocalToken(configWithAntiCsrf)];
            case 4:
              configWithAntiCsrf = _a.sent();
              return [4, setAuthorizationHeaderIfRequired(configWithAntiCsrf)];
            case 5:
              _a.sent();
              (0, logger_1.logDebugMessage)("interceptorFunctionRequestFulfilled: returning modified config");
              return [2, configWithAntiCsrf];
          }
        });
      });
    }
    exports.interceptorFunctionRequestFulfilled = interceptorFunctionRequestFulfilled;
    function responseInterceptor(axiosInstance) {
      var _this = this;
      return function(response) {
        return __awaiter(_this, void 0, void 0, function() {
          var doNotDoInterception, url, preRequestLSS, config;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                doNotDoInterception = false;
                if (!fetch_1.default.initCalled) {
                  throw new Error("init function not called");
                }
                (0, logger_1.logDebugMessage)("responseInterceptor: started");
                (0, logger_1.logDebugMessage)("responseInterceptor: already intercepted: " + response.headers["x-supertokens-xhr-intercepted"]);
                url = getUrlFromConfig(response.config);
                try {
                  doNotDoInterception = typeof url === "string" && !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(url, fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain) || !!response.headers["x-supertokens-xhr-intercepted"];
                } catch (err) {
                  if (err.message === "Please provide a valid domain name") {
                    (0, logger_1.logDebugMessage)("responseInterceptor: Trying shouldDoInterceptionBasedOnUrl with location.origin");
                    doNotDoInterception = !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(windowHandler_1.default.getReferenceOrThrow().windowHandler.location.getOrigin(), fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain) || !!response.headers["x-supertokens-xhr-intercepted"];
                  } else {
                    throw err;
                  }
                }
                (0, logger_1.logDebugMessage)("responseInterceptor: Value of doNotDoInterception: " + doNotDoInterception);
                if (doNotDoInterception) {
                  (0, logger_1.logDebugMessage)("responseInterceptor: Returning without interception");
                  return [2, response];
                }
                (0, logger_1.logDebugMessage)("responseInterceptor: Interception started");
                processState_1.ProcessState.getInstance().addState(processState_1.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE);
                return [4, (0, fetch_1.getLocalSessionState)(false)];
              case 1:
                preRequestLSS = _a.sent();
                return [4, saveTokensFromHeaders(response)];
              case 2:
                _a.sent();
                (0, fetch_1.fireSessionUpdateEventsIfNecessary)(preRequestLSS.status === "EXISTS", response.status, response.headers["front-token"]);
                if (!(response.status === fetch_1.default.config.sessionExpiredStatusCode)) return [3, 3];
                (0, logger_1.logDebugMessage)("responseInterceptor: Status code is: " + response.status);
                config = response.config;
                return [2, AuthHttpRequest.doRequest(function(config2) {
                  return axiosInstance(config2);
                }, config, url, response, void 0, true)];
              case 3:
                if (!(response.status === fetch_1.default.config.invalidClaimStatusCode)) return [3, 5];
                return [4, (0, fetch_1.onInvalidClaimResponse)(response)];
              case 4:
                _a.sent();
                _a.label = 5;
              case 5:
                return [2, response];
            }
          });
        });
      };
    }
    exports.responseInterceptor = responseInterceptor;
    function responseErrorInterceptor(axiosInstance) {
      var _this = this;
      return function(error) {
        return __awaiter(_this, void 0, void 0, function() {
          var config;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                (0, logger_1.logDebugMessage)("responseErrorInterceptor: called");
                (0, logger_1.logDebugMessage)("responseErrorInterceptor: already intercepted: " + (error.response && error.response.headers["x-supertokens-xhr-intercepted"]));
                if (error.response === void 0 || error.response.headers["x-supertokens-xhr-intercepted"]) {
                  throw error;
                }
                if (!(error.response !== void 0 && error.response.status === fetch_1.default.config.sessionExpiredStatusCode)) return [3, 1];
                (0, logger_1.logDebugMessage)("responseErrorInterceptor: Status code is: " + error.response.status);
                config = error.config;
                return [2, AuthHttpRequest.doRequest(function(config2) {
                  return axiosInstance(config2);
                }, config, getUrlFromConfig(config), void 0, error, true)];
              case 1:
                if (!(error.response !== void 0 && error.response.status === fetch_1.default.config.invalidClaimStatusCode)) return [3, 3];
                return [4, (0, fetch_1.onInvalidClaimResponse)(error.response)];
              case 2:
                _a.sent();
                _a.label = 3;
              case 3:
                throw error;
            }
          });
        });
      };
    }
    exports.responseErrorInterceptor = responseErrorInterceptor;
    var AuthHttpRequest = (
      /** @class */
      function() {
        function AuthHttpRequest2() {
        }
        var _a;
        _a = AuthHttpRequest2;
        AuthHttpRequest2.doRequest = function(httpCall, config, url, prevResponse, prevError, viaInterceptor) {
          if (viaInterceptor === void 0) {
            viaInterceptor = false;
          }
          return __awaiter(void 0, void 0, void 0, function() {
            var doNotDoInterception, returnObj, preRequestLSS, configWithAntiCsrf, antiCsrfToken, transferMethod, localPrevError, localPrevResponse, response, _b, err_1, response, errorMessage, refreshResult, _c;
            return __generator(_a, function(_d) {
              switch (_d.label) {
                case 0:
                  if (!fetch_1.default.initCalled) {
                    throw Error("init function not called");
                  }
                  (0, logger_1.logDebugMessage)("doRequest: called");
                  doNotDoInterception = false;
                  try {
                    doNotDoInterception = typeof url === "string" && !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(url, fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain) && viaInterceptor;
                  } catch (err) {
                    if (err.message === "Please provide a valid domain name") {
                      (0, logger_1.logDebugMessage)("doRequest: Trying shouldDoInterceptionBasedOnUrl with location.origin");
                      doNotDoInterception = !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(windowHandler_1.default.getReferenceOrThrow().windowHandler.location.getOrigin(), fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain) && viaInterceptor;
                    } else {
                      throw err;
                    }
                  }
                  (0, logger_1.logDebugMessage)("doRequest: Value of doNotDoInterception: " + doNotDoInterception);
                  if (!doNotDoInterception) return [3, 2];
                  (0, logger_1.logDebugMessage)("doRequest: Returning without interception");
                  if (prevError !== void 0) {
                    throw prevError;
                  } else if (prevResponse !== void 0) {
                    return [2, prevResponse];
                  }
                  return [4, httpCall(config)];
                case 1:
                  return [2, _d.sent()];
                case 2:
                  (0, logger_1.logDebugMessage)("doRequest: Interception started");
                  return [4, removeAuthHeaderIfMatchesLocalToken(config)];
                case 3:
                  config = _d.sent();
                  returnObj = void 0;
                  _d.label = 4;
                case 4:
                  if (false) return [3, 28];
                  return [4, (0, fetch_1.getLocalSessionState)(true)];
                case 5:
                  preRequestLSS = _d.sent();
                  configWithAntiCsrf = config;
                  if (!(preRequestLSS.status === "EXISTS")) return [3, 7];
                  return [4, fetch_1.AntiCsrfToken.getToken(preRequestLSS.lastAccessTokenUpdate)];
                case 6:
                  antiCsrfToken = _d.sent();
                  if (antiCsrfToken !== void 0) {
                    (0, logger_1.logDebugMessage)("doRequest: Adding anti-csrf token to request");
                    configWithAntiCsrf = __assign(__assign({}, configWithAntiCsrf), {
                      headers: configWithAntiCsrf === void 0 ? {
                        "anti-csrf": antiCsrfToken
                      } : __assign(__assign({}, configWithAntiCsrf.headers), {
                        "anti-csrf": antiCsrfToken
                      })
                    });
                  }
                  _d.label = 7;
                case 7:
                  if (fetch_1.default.config.autoAddCredentials && configWithAntiCsrf.withCredentials === void 0) {
                    (0, logger_1.logDebugMessage)("doRequest: Adding credentials include");
                    configWithAntiCsrf = __assign(__assign({}, configWithAntiCsrf), {
                      withCredentials: true
                    });
                  }
                  (0, logger_1.logDebugMessage)("doRequest: Adding rid header: anti-csrf (May get overriden by user's rid)");
                  configWithAntiCsrf = __assign(__assign({}, configWithAntiCsrf), {
                    headers: configWithAntiCsrf === void 0 ? {
                      rid: "anti-csrf"
                    } : __assign({
                      rid: "anti-csrf"
                    }, configWithAntiCsrf.headers)
                  });
                  transferMethod = fetch_1.default.config.tokenTransferMethod;
                  (0, logger_1.logDebugMessage)("doRequest: Adding st-auth-mode header: " + transferMethod);
                  configWithAntiCsrf.headers["st-auth-mode"] = transferMethod;
                  return [4, setAuthorizationHeaderIfRequired(configWithAntiCsrf)];
                case 8:
                  _d.sent();
                  _d.label = 9;
                case 9:
                  _d.trys.push([9, 14, , 27]);
                  localPrevError = prevError;
                  localPrevResponse = prevResponse;
                  prevError = void 0;
                  prevResponse = void 0;
                  if (localPrevError !== void 0) {
                    (0, logger_1.logDebugMessage)("doRequest: Not making call because localPrevError is not undefined");
                    throw localPrevError;
                  }
                  if (localPrevResponse !== void 0) {
                    (0, logger_1.logDebugMessage)("doRequest: Not making call because localPrevResponse is not undefined");
                  } else {
                    (0, logger_1.logDebugMessage)("doRequest: Making user's http call");
                  }
                  if (!(localPrevResponse === void 0)) return [3, 11];
                  return [4, httpCall(configWithAntiCsrf)];
                case 10:
                  _b = _d.sent();
                  return [3, 12];
                case 11:
                  _b = localPrevResponse;
                  _d.label = 12;
                case 12:
                  response = _b;
                  (0, logger_1.logDebugMessage)("doRequest: User's http call ended");
                  return [4, saveTokensFromHeaders(response)];
                case 13:
                  _d.sent();
                  (0, fetch_1.fireSessionUpdateEventsIfNecessary)(preRequestLSS.status === "EXISTS", response.status, response.headers["front-token"]);
                  return [2, response];
                case 14:
                  err_1 = _d.sent();
                  response = err_1.response;
                  if (!(response !== void 0)) return [3, 25];
                  return [4, saveTokensFromHeaders(response)];
                case 15:
                  _d.sent();
                  (0, fetch_1.fireSessionUpdateEventsIfNecessary)(preRequestLSS.status === "EXISTS", response.status, response.headers["front-token"]);
                  if (!(response.status === fetch_1.default.config.sessionExpiredStatusCode)) return [3, 21];
                  (0, logger_1.logDebugMessage)("doRequest: Status code is: " + response.status);
                  if (hasExceededMaxSessionRefreshAttempts(config)) {
                    (0, logger_1.logDebugMessage)("doRequest: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(config.__supertokensSessionRefreshAttempts, ", maxRetryAttemptsForSessionRefresh: ").concat(fetch_1.default.config.maxRetryAttemptsForSessionRefresh));
                    errorMessage = "Received a 401 response from ".concat(url, ". Attempted to refresh the session and retry the request with the updated session tokens ").concat(fetch_1.default.config.maxRetryAttemptsForSessionRefresh, " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config.");
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  return [4, (0, fetch_1.onUnauthorisedResponse)(preRequestLSS)];
                case 16:
                  refreshResult = _d.sent();
                  incrementSessionRefreshAttemptCount(config);
                  (0, logger_1.logDebugMessage)("doRequest: sessionRefreshAttempts: " + config.__supertokensSessionRefreshAttempts);
                  if (!(refreshResult.result !== "RETRY")) return [3, 20];
                  (0, logger_1.logDebugMessage)("doRequest: Not retrying original request");
                  if (!(refreshResult.error !== void 0)) return [3, 18];
                  return [4, (0, axiosError_1.createAxiosErrorFromFetchResp)(refreshResult.error)];
                case 17:
                  _c = _d.sent();
                  return [3, 19];
                case 18:
                  _c = err_1;
                  _d.label = 19;
                case 19:
                  returnObj = _c;
                  return [3, 28];
                case 20:
                  (0, logger_1.logDebugMessage)("doRequest: Retrying original request");
                  return [3, 24];
                case 21:
                  if (!(response.status === fetch_1.default.config.invalidClaimStatusCode)) return [3, 23];
                  return [4, (0, fetch_1.onInvalidClaimResponse)(response)];
                case 22:
                  _d.sent();
                  _d.label = 23;
                case 23:
                  throw err_1;
                case 24:
                  return [3, 26];
                case 25:
                  throw err_1;
                case 26:
                  return [3, 27];
                case 27:
                  return [3, 4];
                case 28:
                  throw returnObj;
              }
            });
          });
        };
        return AuthHttpRequest2;
      }()
    );
    exports.default = AuthHttpRequest;
    function setAuthorizationHeaderIfRequired(requestConfig) {
      return __awaiter(this, void 0, void 0, function() {
        var accessToken, refreshToken;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              if (requestConfig.headers === void 0) {
                requestConfig.headers = {};
              }
              (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header");
              return [4, (0, fetch_1.getTokenForHeaderAuth)("access")];
            case 1:
              accessToken = _b.sent();
              return [4, (0, fetch_1.getTokenForHeaderAuth)("refresh")];
            case 2:
              refreshToken = _b.sent();
              if (accessToken !== void 0 && refreshToken !== void 0) {
                if (requestConfig.headers["Authorization"] !== void 0 || requestConfig.headers["authorization"] !== void 0) {
                  (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding");
                } else {
                  (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: added authorization header");
                  requestConfig.headers = __assign(__assign({}, requestConfig.headers), {
                    Authorization: "Bearer ".concat(accessToken)
                  });
                  requestConfig.__supertokensAddedAuthHeader = true;
                }
              } else {
                (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: token for header based auth not found");
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function saveTokensFromHeaders(response) {
      return __awaiter(this, void 0, void 0, function() {
        var refreshToken, accessToken, frontToken, responseHeaders_1, antiCsrfToken, tok;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response");
              refreshToken = response.headers["st-refresh-token"];
              if (!(refreshToken !== void 0)) return [3, 2];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: saving new refresh token");
              return [4, (0, fetch_1.setToken)("refresh", refreshToken)];
            case 1:
              _b.sent();
              _b.label = 2;
            case 2:
              accessToken = response.headers["st-access-token"];
              if (!(accessToken !== void 0)) return [3, 4];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: saving new access token");
              return [4, (0, fetch_1.setToken)("access", accessToken)];
            case 3:
              _b.sent();
              _b.label = 4;
            case 4:
              frontToken = response.headers["front-token"];
              if (!(frontToken !== void 0)) return [3, 6];
              (0, logger_1.logDebugMessage)("doRequest: Setting sFrontToken: " + frontToken);
              return [4, fetch_1.FrontToken.setItem(frontToken)];
            case 5:
              _b.sent();
              responseHeaders_1 = new Headers();
              Object.entries(response.headers).forEach(function(_b2) {
                var key = _b2[0], value = _b2[1];
                Array.isArray(value) ? value.forEach(function(item) {
                  return responseHeaders_1.append(key, item);
                }) : responseHeaders_1.append(key, value);
              });
              (0, fetch_1.updateClockSkewUsingFrontToken)({
                frontToken,
                responseHeaders: responseHeaders_1
              });
              _b.label = 6;
            case 6:
              antiCsrfToken = response.headers["anti-csrf"];
              if (!(antiCsrfToken !== void 0)) return [3, 9];
              return [4, (0, fetch_1.getLocalSessionState)(false)];
            case 7:
              tok = _b.sent();
              if (!(tok.status === "EXISTS")) return [3, 9];
              (0, logger_1.logDebugMessage)("doRequest: Setting anti-csrf token");
              return [4, fetch_1.AntiCsrfToken.setItem(tok.lastAccessTokenUpdate, antiCsrfToken)];
            case 8:
              _b.sent();
              _b.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function removeAuthHeaderIfMatchesLocalToken(config) {
      return __awaiter(this, void 0, void 0, function() {
        var accessToken, refreshToken, authHeader, res;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              return [4, (0, fetch_1.getTokenForHeaderAuth)("access")];
            case 1:
              accessToken = _b.sent();
              return [4, (0, fetch_1.getTokenForHeaderAuth)("refresh")];
            case 2:
              refreshToken = _b.sent();
              authHeader = config.headers.Authorization || config.headers.authorization;
              if (accessToken !== void 0 && refreshToken !== void 0) {
                if (authHeader === "Bearer ".concat(accessToken) || "__supertokensAddedAuthHeader" in config) {
                  (0, logger_1.logDebugMessage)("removeAuthHeaderIfMatchesLocalToken: Removing Authorization from user provided headers because it contains our access token");
                  res = __assign(__assign({}, config), {
                    headers: __assign({}, config.headers)
                  });
                  delete res.headers.authorization;
                  delete res.headers.Authorization;
                  return [2, res];
                }
              }
              return [2, config];
          }
        });
      });
    }
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/error.js
var require_error = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/error.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.STGeneralError = void 0;
    var STGeneralError = (
      /** @class */
      function(_super) {
        __extends(STGeneralError2, _super);
        function STGeneralError2(message) {
          var _this = _super.call(this, message) || this;
          _this.isSuperTokensGeneralError = true;
          return _this;
        }
        STGeneralError2.isThisError = function(err) {
          return err.isSuperTokensGeneralError === true;
        };
        return STGeneralError2;
      }(Error)
    );
    exports.STGeneralError = STGeneralError;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/xmlhttprequest.js
var require_xmlhttprequest = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/xmlhttprequest.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addInterceptorsToXMLHttpRequest = void 0;
    var fetch_1 = require_fetch();
    var logger_1 = require_logger();
    var windowHandler_1 = require_windowHandler();
    var processState_1 = require_processState();
    var XHR_EVENTS = ["readystatechange", "abort", "error", "load", "loadend", "loadstart", "progress", "timeout"];
    function addInterceptorsToXMLHttpRequest() {
      var firstEventLoopDone = new Promise(function(res) {
        return setTimeout(res, 0);
      });
      var oldXMLHttpRequest = XMLHttpRequest;
      (0, logger_1.logDebugMessage)("addInterceptorsToXMLHttpRequest called");
      XMLHttpRequest = function() {
        var actual = new oldXMLHttpRequest();
        var self = this;
        var listOfFunctionCallsInProxy = [];
        var requestHeaders = [];
        var customGetterValues = {};
        var customResponseHeaders;
        var eventHandlers = /* @__PURE__ */ new Map();
        var delayedQueue = firstEventLoopDone;
        function delayIfNecessary(cb) {
          delayedQueue = delayedQueue.finally(function() {
            var _a;
            return (_a = cb()) === null || _a === void 0 ? void 0 : _a.catch(function(err) {
              var ev = new ProgressEvent("error");
              ev.error = err;
              if (self.onerror !== void 0 && self.onerror !== null) {
                self.onerror(ev);
              }
              redispatchEvent("error", ev);
            });
          });
        }
        var url = "";
        var doNotDoInterception = false;
        var preRequestLSS = void 0;
        var body;
        var sessionRefreshAttempts = 0;
        self.onload = null;
        self.onreadystatechange = null;
        self.onloadend = null;
        self.addEventListener = function(type, listener, _options) {
          var handlers = eventHandlers.get(type);
          if (handlers === void 0) {
            handlers = /* @__PURE__ */ new Set();
            eventHandlers.set(type, handlers);
          }
          handlers.add(listener);
        };
        self.removeEventListener = function(type, listener) {
          var handlers = eventHandlers.get(type);
          if (handlers === void 0) {
            handlers = /* @__PURE__ */ new Set();
            eventHandlers.set(type, handlers);
          }
          handlers.delete(listener);
        };
        function redispatchEvent(name, ev) {
          var handlers = eventHandlers.get(name);
          (0, logger_1.logDebugMessage)("XHRInterceptor dispatching ".concat(ev.type, " to ").concat(handlers ? handlers.size : 0, " listeners"));
          if (handlers) {
            Array.from(handlers).forEach(function(handler) {
              return handler.apply(self, [ev]);
            });
          }
        }
        function handleRetryPostRefreshing() {
          return __awaiter(this, void 0, void 0, function() {
            var errorMessage, refreshResult, retryXhr;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (preRequestLSS === void 0) {
                    throw new Error("Should never come here..");
                  }
                  (0, logger_1.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: preRequestLSS " + preRequestLSS.status);
                  if (sessionRefreshAttempts >= fetch_1.default.config.maxRetryAttemptsForSessionRefresh) {
                    (0, logger_1.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Maximum session refresh attempts reached. sessionRefreshAttempts: ".concat(sessionRefreshAttempts, ", maxRetryAttemptsForSessionRefresh: ").concat(fetch_1.default.config.maxRetryAttemptsForSessionRefresh));
                    customGetterValues["status"] = 0;
                    customGetterValues["statusText"] = "";
                    customGetterValues["responseType"] = "";
                    errorMessage = "Received a 401 response from ".concat(url, ". Attempted to refresh the session and retry the request with the updated session tokens ").concat(fetch_1.default.config.maxRetryAttemptsForSessionRefresh, " times, but each attempt resulted in a 401 error. The maximum session refresh limit has been reached. Please investigate your API. To increase the session refresh attempts, update maxRetryAttemptsForSessionRefresh in the config.");
                    console.error(errorMessage);
                    throw new Error(errorMessage);
                  }
                  return [4, (0, fetch_1.onUnauthorisedResponse)(preRequestLSS)];
                case 1:
                  refreshResult = _a.sent();
                  sessionRefreshAttempts++;
                  (0, logger_1.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: sessionRefreshAttempts: " + sessionRefreshAttempts);
                  if (refreshResult.result !== "RETRY") {
                    (0, logger_1.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Not retrying original request " + !!refreshResult.error);
                    if (refreshResult.error !== void 0) {
                      throw refreshResult.error;
                    }
                    return [2, true];
                  }
                  (0, logger_1.logDebugMessage)("XHRInterceptor.handleRetryPostRefreshing: Retrying original request");
                  retryXhr = new oldXMLHttpRequest();
                  setUpXHR(self, retryXhr, true);
                  listOfFunctionCallsInProxy.forEach(function(i) {
                    i(retryXhr);
                  });
                  sendXHR(retryXhr, body);
                  return [2, false];
              }
            });
          });
        }
        function handleResponse(xhr) {
          return __awaiter(this, void 0, void 0, function() {
            var status_1, headers, err_1, resp, ev;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (doNotDoInterception) {
                    (0, logger_1.logDebugMessage)("XHRInterceptor.handleResponse: Returning without interception");
                    return [2, true];
                  }
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 7, , 11]);
                  (0, logger_1.logDebugMessage)("XHRInterceptor.handleResponse: Interception started");
                  processState_1.ProcessState.getInstance().addState(processState_1.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE);
                  status_1 = xhr.status;
                  headers = getResponseHeadersFromXHR(xhr);
                  return [4, saveTokensFromHeaders(headers)];
                case 2:
                  _a.sent();
                  (0, fetch_1.fireSessionUpdateEventsIfNecessary)(preRequestLSS.status === "EXISTS", status_1, headers.get("front-token"));
                  if (!(status_1 === fetch_1.default.config.sessionExpiredStatusCode)) return [3, 4];
                  (0, logger_1.logDebugMessage)("responseInterceptor: Status code is: " + status_1);
                  return [4, handleRetryPostRefreshing()];
                case 3:
                  return [2, _a.sent()];
                case 4:
                  if (!(status_1 === fetch_1.default.config.invalidClaimStatusCode)) return [3, 6];
                  return [4, (0, fetch_1.onInvalidClaimResponse)({
                    data: xhr.responseText
                  })];
                case 5:
                  _a.sent();
                  _a.label = 6;
                case 6:
                  return [2, true];
                case 7:
                  err_1 = _a.sent();
                  (0, logger_1.logDebugMessage)("XHRInterceptor.handleResponse: caught error");
                  if (!(err_1.status !== void 0)) return [3, 9];
                  return [4, getXMLHttpStatusAndResponseTextFromFetchResponse(err_1)];
                case 8:
                  resp = _a.sent();
                  customGetterValues["status"] = resp.status;
                  customGetterValues["statusText"] = resp.statusText;
                  customGetterValues["responseType"] = resp.responseType;
                  customResponseHeaders = resp.headers;
                  if (resp.responseType === "json") {
                    try {
                      customGetterValues["response"] = JSON.parse(resp.responseText);
                    } catch (_b) {
                      customGetterValues["response"] = resp.responseText;
                    }
                  } else {
                    customGetterValues["response"] = resp.responseText;
                  }
                  customGetterValues["responseText"] = resp.responseText;
                  return [3, 10];
                case 9:
                  ev = new ProgressEvent("error");
                  ev.error = err_1;
                  if (self.onerror !== void 0 && self.onerror !== null) {
                    self.onerror(ev);
                  }
                  redispatchEvent("error", ev);
                  _a.label = 10;
                case 10:
                  return [2, true];
                case 11:
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        }
        self.open = function(_, u) {
          (0, logger_1.logDebugMessage)("XHRInterceptor.open called");
          var args = arguments;
          url = u;
          try {
            doNotDoInterception = typeof url === "string" && !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(url, fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain) || typeof url !== "string" && !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(url.toString(), fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain);
          } catch (err) {
            if (err.message === "Please provide a valid domain name") {
              (0, logger_1.logDebugMessage)("XHRInterceptor.open: Trying shouldDoInterceptionBasedOnUrl with location.origin");
              doNotDoInterception = !fetch_1.default.recipeImpl.shouldDoInterceptionBasedOnUrl(windowHandler_1.default.getReferenceOrThrow().windowHandler.location.getOrigin(), fetch_1.default.config.apiDomain, fetch_1.default.config.sessionTokenBackendDomain);
            } else {
              throw err;
            }
          }
          delayIfNecessary(function() {
            listOfFunctionCallsInProxy.push(function(xhr) {
              xhr.open.apply(xhr, args);
            });
            actual.open.apply(actual, args);
          });
        };
        self.send = function(inputBody) {
          body = inputBody;
          sendXHR(actual, body);
        };
        self.setRequestHeader = function(name, value) {
          var _this = this;
          (0, logger_1.logDebugMessage)("XHRInterceptor.setRequestHeader: Called with ".concat(name));
          if (doNotDoInterception) {
            delayIfNecessary(function() {
              return actual.setRequestHeader(name, value);
            });
            return;
          }
          if (name === "anti-csrf") {
            return;
          }
          delayIfNecessary(function() {
            return __awaiter(_this, void 0, void 0, function() {
              var accessToken, refreshToken;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    if (!(name.toLowerCase() === "authorization")) return [3, 3];
                    (0, logger_1.logDebugMessage)("XHRInterceptor.setRequestHeader: checking if user provided auth header matches local token");
                    return [4, (0, fetch_1.getTokenForHeaderAuth)("access")];
                  case 1:
                    accessToken = _a.sent();
                    return [4, (0, fetch_1.getTokenForHeaderAuth)("refresh")];
                  case 2:
                    refreshToken = _a.sent();
                    if (accessToken !== void 0 && refreshToken !== void 0 && value === "Bearer ".concat(accessToken)) {
                      (0, logger_1.logDebugMessage)("XHRInterceptor.setRequestHeader: skipping Authorization from user provided headers because it contains our access token");
                      return [
                        2
                        /*return*/
                      ];
                    }
                    _a.label = 3;
                  case 3:
                    listOfFunctionCallsInProxy.push(function(xhr) {
                      xhr.setRequestHeader(name, value);
                    });
                    requestHeaders.push({
                      name,
                      value
                    });
                    actual.setRequestHeader(name, value);
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            });
          });
        };
        var copiedProps = void 0;
        setUpXHR(self, actual, false);
        function setUpXHR(self2, xhr, isRetry) {
          var responseProcessed;
          var delayedEvents = ["load", "loadend", "readystatechange"];
          (0, logger_1.logDebugMessage)("XHRInterceptor.setUpXHR called");
          var _loop_1 = function(name_12) {
            (0, logger_1.logDebugMessage)("XHRInterceptor added listener for event ".concat(name_12));
            xhr.addEventListener(name_12, function(ev) {
              (0, logger_1.logDebugMessage)("XHRInterceptor got event ".concat(name_12));
              if (!delayedEvents.includes(name_12)) {
                redispatchEvent(name_12, ev);
              }
            });
          };
          for (var _i = 0, XHR_EVENTS_1 = XHR_EVENTS; _i < XHR_EVENTS_1.length; _i++) {
            var name_1 = XHR_EVENTS_1[_i];
            _loop_1(name_1);
          }
          xhr.onload = function(ev) {
            if (responseProcessed === void 0) {
              responseProcessed = handleResponse(xhr);
            }
            responseProcessed.then(function(callself) {
              if (!callself) {
                return;
              }
              if (self2.onload) {
                self2.onload(ev);
              }
              redispatchEvent("load", ev);
            });
          };
          xhr.onreadystatechange = function(ev) {
            if (xhr.readyState === oldXMLHttpRequest.DONE) {
              if (responseProcessed === void 0) {
                responseProcessed = handleResponse(xhr);
              }
              responseProcessed.then(function(callself) {
                if (!callself) {
                  return;
                }
                if (self2.onreadystatechange) self2.onreadystatechange(ev);
                redispatchEvent("readystatechange", ev);
              });
            } else {
              if (self2.onreadystatechange) {
                self2.onreadystatechange(ev);
              }
              redispatchEvent("readystatechange", ev);
            }
          };
          xhr.onloadend = function(ev) {
            if (responseProcessed === void 0) {
              responseProcessed = handleResponse(xhr);
            }
            responseProcessed.then(function(callself) {
              if (!callself) {
                return;
              }
              if (self2.onloadend) {
                self2.onloadend(ev);
              }
              redispatchEvent("loadend", ev);
            });
          };
          self2.getAllResponseHeaders = function() {
            var headersString;
            if (customResponseHeaders) {
              headersString = "";
              customResponseHeaders.forEach(function(v, k) {
                return headersString += "".concat(k, ": ").concat(v, "\r\n");
              });
            } else {
              headersString = xhr.getAllResponseHeaders();
            }
            return headersString + "x-supertokens-xhr-intercepted: true\r\n";
          };
          self2.getResponseHeader = function(name) {
            if (name === "x-supertokens-xhr-intercepted") {
              return "true";
            }
            if (customResponseHeaders) {
              return customResponseHeaders.get(name);
            }
            return xhr.getResponseHeader(name);
          };
          if (copiedProps === void 0) {
            copiedProps = [];
            for (var prop in xhr) {
              if (!(prop in self2)) {
                copiedProps.push(prop);
              }
            }
          }
          var _loop_2 = function(prop2) {
            if (typeof xhr[prop2] === "function") {
              Object.defineProperty(self2, prop2, {
                configurable: true,
                value: function() {
                  var args = arguments;
                  if (!isRetry) {
                    listOfFunctionCallsInProxy.push(function(xhr2) {
                      xhr2[prop2].apply(xhr2, args);
                    });
                  }
                  return xhr[prop2].apply(xhr, args);
                }
              });
            } else {
              Object.defineProperty(self2, prop2, {
                configurable: true,
                get: function() {
                  if (customGetterValues[prop2] !== void 0) {
                    return customGetterValues[prop2];
                  }
                  return xhr[prop2];
                },
                set: function(val) {
                  if (!isRetry) {
                    listOfFunctionCallsInProxy.push(function(xhr2) {
                      xhr2[prop2] = val;
                    });
                  }
                  (0, logger_1.logDebugMessage)("XHRInterceptor.set[".concat(prop2, "] = ").concat(val));
                  xhr[prop2] = val;
                }
              });
            }
          };
          for (var _a = 0, copiedProps_1 = copiedProps; _a < copiedProps_1.length; _a++) {
            var prop = copiedProps_1[_a];
            _loop_2(prop);
          }
        }
        function sendXHR(xhr, body2) {
          var _this = this;
          (0, logger_1.logDebugMessage)("XHRInterceptor.send: called");
          (0, logger_1.logDebugMessage)("XHRInterceptor.send: Value of doNotDoInterception: " + doNotDoInterception);
          if (doNotDoInterception) {
            (0, logger_1.logDebugMessage)("XHRInterceptor.send: Returning without interception");
            delayIfNecessary(function() {
              return xhr.send(body2);
            });
            return;
          }
          (0, logger_1.logDebugMessage)("XHRInterceptor.send: Interception started");
          processState_1.ProcessState.getInstance().addState(processState_1.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST);
          delayIfNecessary(function() {
            return __awaiter(_this, void 0, void 0, function() {
              var antiCsrfToken, transferMethod;
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4, (0, fetch_1.getLocalSessionState)(true)];
                  case 1:
                    preRequestLSS = _a.sent();
                    if (!(preRequestLSS.status === "EXISTS")) return [3, 3];
                    return [4, fetch_1.AntiCsrfToken.getToken(preRequestLSS.lastAccessTokenUpdate)];
                  case 2:
                    antiCsrfToken = _a.sent();
                    if (antiCsrfToken !== void 0) {
                      (0, logger_1.logDebugMessage)("XHRInterceptor.send: Adding anti-csrf token to request");
                      xhr.setRequestHeader("anti-csrf", antiCsrfToken);
                    }
                    _a.label = 3;
                  case 3:
                    if (fetch_1.default.config.autoAddCredentials) {
                      (0, logger_1.logDebugMessage)("XHRInterceptor.send: Adding credentials include");
                      self.withCredentials = true;
                    }
                    if (!requestHeaders.some(function(i) {
                      return i.name === "rid";
                    })) {
                      (0, logger_1.logDebugMessage)("XHRInterceptor.send: Adding rid header: anti-csrf");
                      xhr.setRequestHeader("rid", "anti-csrf");
                    } else {
                      (0, logger_1.logDebugMessage)("XHRInterceptor.send: rid header was already there in request");
                    }
                    transferMethod = fetch_1.default.config.tokenTransferMethod;
                    if (!requestHeaders.some(function(i) {
                      return i.name === "st-auth-mode";
                    })) {
                      (0, logger_1.logDebugMessage)("XHRInterceptor.send: Adding st-auth-mode header: " + transferMethod);
                      xhr.setRequestHeader("st-auth-mode", transferMethod);
                    } else {
                      (0, logger_1.logDebugMessage)("XHRInterceptor.send: st-auth-mode header was already there in request");
                    }
                    return [4, setAuthorizationHeaderIfRequired(xhr, requestHeaders)];
                  case 4:
                    _a.sent();
                    (0, logger_1.logDebugMessage)("XHRInterceptor.send: Making user's http call");
                    return [2, xhr.send(body2)];
                }
              });
            });
          });
        }
      };
      XMLHttpRequest.__interceptedBySuperTokens = true;
      XMLHttpRequest.__original = oldXMLHttpRequest;
    }
    exports.addInterceptorsToXMLHttpRequest = addInterceptorsToXMLHttpRequest;
    function getXMLHttpStatusAndResponseTextFromFetchResponse(response) {
      return __awaiter(this, void 0, void 0, function() {
        var contentType, data, responseType, _a, _b, _c;
        return __generator(this, function(_d) {
          switch (_d.label) {
            case 0:
              contentType = response.headers.get("content-type");
              data = "";
              responseType = "text";
              if (!(contentType === null)) return [3, 5];
              _d.label = 1;
            case 1:
              _d.trys.push([1, 3, , 4]);
              return [4, response.text()];
            case 2:
              data = _d.sent();
              return [3, 4];
            case 3:
              _a = _d.sent();
              data = "";
              return [3, 4];
            case 4:
              return [3, 9];
            case 5:
              if (!contentType.includes("application/json")) return [3, 7];
              responseType = "json";
              _c = (_b = JSON).stringify;
              return [4, response.json()];
            case 6:
              data = _c.apply(_b, [_d.sent()]);
              return [3, 9];
            case 7:
              if (!contentType.includes("text/")) return [3, 9];
              return [4, response.text()];
            case 8:
              data = _d.sent();
              _d.label = 9;
            case 9:
              return [2, {
                status: response.status,
                responseText: data,
                statusText: response.statusText,
                responseType,
                headers: response.headers
              }];
          }
        });
      });
    }
    function setAuthorizationHeaderIfRequired(xhr, requestHeaders) {
      return __awaiter(this, void 0, void 0, function() {
        var accessToken, refreshToken;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: adding existing tokens as header");
              return [4, (0, fetch_1.getTokenForHeaderAuth)("access")];
            case 1:
              accessToken = _a.sent();
              return [4, (0, fetch_1.getTokenForHeaderAuth)("refresh")];
            case 2:
              refreshToken = _a.sent();
              if (accessToken !== void 0 && refreshToken !== void 0) {
                if (requestHeaders.some(function(_a2) {
                  var name = _a2.name;
                  return name.toLowerCase() === "authorization";
                })) {
                  (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: Authorization header defined by the user, not adding");
                } else {
                  if (accessToken !== void 0) {
                    (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: added authorization header");
                    xhr.setRequestHeader("Authorization", "Bearer ".concat(accessToken));
                  }
                }
              } else {
                (0, logger_1.logDebugMessage)("setAuthorizationHeaderIfRequired: token for header based auth not found");
              }
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function saveTokensFromHeaders(headers) {
      return __awaiter(this, void 0, void 0, function() {
        var refreshToken, accessToken, frontToken, antiCsrfToken, tok;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: Saving updated tokens from the response");
              refreshToken = headers.get("st-refresh-token");
              if (!(refreshToken !== null)) return [3, 2];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: saving new refresh token");
              return [4, (0, fetch_1.setToken)("refresh", refreshToken)];
            case 1:
              _a.sent();
              _a.label = 2;
            case 2:
              accessToken = headers.get("st-access-token");
              if (!(accessToken !== null)) return [3, 4];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: saving new access token");
              return [4, (0, fetch_1.setToken)("access", accessToken)];
            case 3:
              _a.sent();
              _a.label = 4;
            case 4:
              frontToken = headers.get("front-token");
              if (!(frontToken !== null)) return [3, 6];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: Setting sFrontToken: " + frontToken);
              return [4, fetch_1.FrontToken.setItem(frontToken)];
            case 5:
              _a.sent();
              (0, fetch_1.updateClockSkewUsingFrontToken)({
                frontToken,
                responseHeaders: headers
              });
              _a.label = 6;
            case 6:
              antiCsrfToken = headers.get("anti-csrf");
              if (!(antiCsrfToken !== null)) return [3, 9];
              return [4, (0, fetch_1.getLocalSessionState)(false)];
            case 7:
              tok = _a.sent();
              if (!(tok.status === "EXISTS")) return [3, 9];
              (0, logger_1.logDebugMessage)("saveTokensFromHeaders: Setting anti-csrf token");
              return [4, fetch_1.AntiCsrfToken.setItem(tok.lastAccessTokenUpdate, antiCsrfToken)];
            case 8:
              _a.sent();
              _a.label = 9;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function getResponseHeadersFromXHR(xhr) {
      return new Headers(xhr.getAllResponseHeaders().split("\r\n").map(function(line) {
        var sep = line.indexOf(": ");
        if (sep === -1) {
          return ["", ""];
        }
        return [line.slice(0, sep), line.slice(sep + 2)];
      }).filter(function(e) {
        return e[0].length !== 0;
      }));
    }
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/recipeImplementation.js
var require_recipeImplementation = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/recipeImplementation.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var fetch_1 = require_fetch();
    var axios_1 = require_axios();
    var version_1 = require_version();
    var logger_1 = require_logger();
    var error_1 = require_error();
    var xmlhttprequest_1 = require_xmlhttprequest();
    var utils_1 = require_utils();
    var dateProvider_1 = require_dateProvider();
    var lockFactory_1 = require_lockFactory();
    var MAX_REFRESH_LOCK_TRY_COUNT = 100;
    var CLAIM_REFRESH_LOCK_NAME = "CLAIM_REFRESH_LOCK";
    function RecipeImplementation(recipeImplInput) {
      return {
        addXMLHttpRequestInterceptor: function(_) {
          (0, logger_1.logDebugMessage)("addXMLHttpRequestInterceptorAndReturnModified: called");
          (0, xmlhttprequest_1.addInterceptorsToXMLHttpRequest)();
        },
        addFetchInterceptorsAndReturnModifiedFetch: function(input) {
          (0, logger_1.logDebugMessage)("addFetchInterceptorsAndReturnModifiedFetch: called");
          return function(url, config) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                switch (_a.label) {
                  case 0:
                    return [4, fetch_1.default.doRequest(function(config2) {
                      return input.originalFetch(typeof url === "object" && "clone" in url ? url.clone() : url, __assign({}, config2));
                    }, config, url)];
                  case 1:
                    return [2, _a.sent()];
                }
              });
            });
          };
        },
        addAxiosInterceptors: function(input) {
          (0, logger_1.logDebugMessage)("addAxiosInterceptors: called");
          if (XMLHttpRequest.__interceptedBySuperTokens) {
            console.warn("Not adding axios interceptor since XMLHttpRequest is already added. This is just a warning.");
            console.warn("Our axios and XMLHttpRequest interceptors cannot be used at the same time.");
            console.warn("Since XMLHttpRequest is added automatically and supports axios by default, you can just remove addAxiosInterceptors from your code.");
            console.warn("If you want to continue using our axios interceptor, you can override addXMLHttpRequestInterceptor with an empty function.");
            (0, logger_1.logDebugMessage)("addAxiosInterceptors: not adding, because XHR interceptors are already in place");
            return;
          }
          var requestInterceptors = input.axiosInstance.interceptors.request;
          for (var i = 0; i < requestInterceptors.handlers.length; i++) {
            if (requestInterceptors.handlers[i].fulfilled === axios_1.interceptorFunctionRequestFulfilled) {
              (0, logger_1.logDebugMessage)("addAxiosInterceptors: not adding because already added on this instance");
              return;
            }
          }
          input.axiosInstance.interceptors.request.use(axios_1.interceptorFunctionRequestFulfilled, function(error) {
            return __awaiter(this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                throw error;
              });
            });
          });
          input.axiosInstance.interceptors.response.use((0, axios_1.responseInterceptor)(input.axiosInstance), (0, axios_1.responseErrorInterceptor)(input.axiosInstance));
        },
        getUserId: function(_) {
          return __awaiter(this, void 0, void 0, function() {
            var tokenInfo;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  (0, logger_1.logDebugMessage)("getUserId: called");
                  return [4, fetch_1.FrontToken.getTokenInfo()];
                case 1:
                  tokenInfo = _a.sent();
                  if (tokenInfo === void 0) {
                    throw new Error("No session exists");
                  }
                  (0, logger_1.logDebugMessage)("getUserId: returning: " + tokenInfo.uid);
                  return [2, tokenInfo.uid];
              }
            });
          });
        },
        getAccessTokenPayloadSecurely: function(input) {
          return __awaiter(this, void 0, void 0, function() {
            var tokenInfo, retry;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  (0, logger_1.logDebugMessage)("getAccessTokenPayloadSecurely: called");
                  return [4, fetch_1.FrontToken.getTokenInfo()];
                case 1:
                  tokenInfo = _a.sent();
                  if (tokenInfo === void 0) {
                    throw new Error("No session exists");
                  }
                  if (!(tokenInfo.ate < dateProvider_1.default.getReferenceOrThrow().dateProvider.now())) return [3, 5];
                  (0, logger_1.logDebugMessage)("getAccessTokenPayloadSecurely: access token expired. Refreshing session");
                  return [4, fetch_1.default.attemptRefreshingSession()];
                case 2:
                  retry = _a.sent();
                  if (!retry) return [3, 4];
                  return [4, this.getAccessTokenPayloadSecurely({
                    userContext: input.userContext
                  })];
                case 3:
                  return [2, _a.sent()];
                case 4:
                  throw new Error("Could not refresh session");
                case 5:
                  (0, logger_1.logDebugMessage)("getAccessTokenPayloadSecurely: returning: " + JSON.stringify(tokenInfo.up));
                  return [2, tokenInfo.up];
              }
            });
          });
        },
        doesSessionExist: function(_) {
          return __awaiter(this, void 0, void 0, function() {
            var tokenInfo, preRequestLSS, refresh;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  (0, logger_1.logDebugMessage)("doesSessionExist: called");
                  return [4, fetch_1.FrontToken.getTokenInfo()];
                case 1:
                  tokenInfo = _a.sent();
                  if (tokenInfo === void 0) {
                    (0, logger_1.logDebugMessage)("doesSessionExist: access token does not exist locally");
                    return [2, false];
                  }
                  if (!(tokenInfo.ate < dateProvider_1.default.getReferenceOrThrow().dateProvider.now())) return [3, 4];
                  (0, logger_1.logDebugMessage)("doesSessionExist: access token expired. Refreshing session");
                  return [4, (0, fetch_1.getLocalSessionState)(false)];
                case 2:
                  preRequestLSS = _a.sent();
                  return [4, (0, fetch_1.onUnauthorisedResponse)(preRequestLSS)];
                case 3:
                  refresh = _a.sent();
                  return [2, refresh.result === "RETRY"];
                case 4:
                  return [2, true];
              }
            });
          });
        },
        signOut: function(input) {
          return __awaiter(this, void 0, void 0, function() {
            var preAPIResult, resp, responseJson, message;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  (0, logger_1.logDebugMessage)("signOut: called");
                  return [4, this.doesSessionExist(input)];
                case 1:
                  if (!_a.sent()) {
                    (0, logger_1.logDebugMessage)("signOut: exiting early because session does not exist");
                    (0, logger_1.logDebugMessage)("signOut: firing SIGN_OUT event");
                    recipeImplInput.onHandleEvent({
                      action: "SIGN_OUT",
                      userContext: input.userContext
                    });
                    return [
                      2
                      /*return*/
                    ];
                  }
                  (0, logger_1.logDebugMessage)("signOut: Calling refresh pre API hook");
                  return [4, recipeImplInput.preAPIHook({
                    action: "SIGN_OUT",
                    requestInit: {
                      method: "post",
                      headers: {
                        "fdi-version": version_1.supported_fdi.join(","),
                        rid: fetch_1.default.rid
                      }
                    },
                    url: fetch_1.default.signOutUrl,
                    userContext: input.userContext
                  })];
                case 2:
                  preAPIResult = _a.sent();
                  (0, logger_1.logDebugMessage)("signOut: Calling API");
                  return [4, fetch(preAPIResult.url, preAPIResult.requestInit)];
                case 3:
                  resp = _a.sent();
                  (0, logger_1.logDebugMessage)("signOut: API ended");
                  (0, logger_1.logDebugMessage)("signOut: API responded with status code: " + resp.status);
                  if (resp.status === recipeImplInput.sessionExpiredStatusCode) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                  if (resp.status >= 300) {
                    throw resp;
                  }
                  return [4, recipeImplInput.postAPIHook({
                    action: "SIGN_OUT",
                    requestInit: preAPIResult.requestInit,
                    url: preAPIResult.url,
                    fetchResponse: resp.clone(),
                    userContext: input.userContext
                  })];
                case 4:
                  _a.sent();
                  return [4, resp.clone().json()];
                case 5:
                  responseJson = _a.sent();
                  if (responseJson.status === "GENERAL_ERROR") {
                    (0, logger_1.logDebugMessage)("doRequest: Throwing general error");
                    message = responseJson.message === void 0 ? "No Error Message Provided" : responseJson.message;
                    throw new error_1.STGeneralError(message);
                  }
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        },
        getInvalidClaimsFromResponse: function(input) {
          return __awaiter(this, void 0, void 0, function() {
            var body;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!("body" in input.response)) return [3, 2];
                  return [4, input.response.clone().json()];
                case 1:
                  body = _a.sent();
                  return [3, 3];
                case 2:
                  if (typeof input.response.data === "string") {
                    body = JSON.parse(input.response.data);
                  } else {
                    body = input.response.data;
                  }
                  _a.label = 3;
                case 3:
                  return [2, body.claimValidationErrors];
              }
            });
          });
        },
        getGlobalClaimValidators: function(input) {
          return input.claimValidatorsAddedByOtherRecipes;
        },
        validateClaims: function(input) {
          return __awaiter(this, void 0, void 0, function() {
            var accessTokenPayload, tryCount, lockFactory, claimRefreshLock, _i, _a, validator, err_1, errors, _b, _c, validator, validationRes;
            return __generator(this, function(_d) {
              switch (_d.label) {
                case 0:
                  tryCount = 0;
                  _d.label = 1;
                case 1:
                  if (!(++tryCount < MAX_REFRESH_LOCK_TRY_COUNT)) return [3, 20];
                  return [4, lockFactory_1.default.getReferenceOrThrow().lockFactory()];
                case 2:
                  lockFactory = _d.sent();
                  (0, logger_1.logDebugMessage)("validateClaims: trying to acquire claim refresh lock");
                  return [4, lockFactory.acquireLock(CLAIM_REFRESH_LOCK_NAME)];
                case 3:
                  claimRefreshLock = _d.sent();
                  if (!claimRefreshLock) return [3, 18];
                  _d.label = 4;
                case 4:
                  _d.trys.push([4, , 15, 17]);
                  return [4, this.getAccessTokenPayloadSecurely({
                    userContext: input.userContext
                  })];
                case 5:
                  accessTokenPayload = _d.sent();
                  (0, logger_1.logDebugMessage)("validateClaims: claim refresh lock acquired");
                  _i = 0, _a = input.claimValidators;
                  _d.label = 6;
                case 6:
                  if (!(_i < _a.length)) return [3, 14];
                  validator = _a[_i];
                  return [4, validator.shouldRefresh(accessTokenPayload, input.userContext)];
                case 7:
                  if (!_d.sent()) return [3, 13];
                  _d.label = 8;
                case 8:
                  _d.trys.push([8, 10, , 11]);
                  return [4, validator.refresh(input.userContext)];
                case 9:
                  _d.sent();
                  return [3, 11];
                case 10:
                  err_1 = _d.sent();
                  console.error("Encountered an error while refreshing validator ".concat(validator.id), err_1);
                  return [3, 11];
                case 11:
                  return [4, this.getAccessTokenPayloadSecurely({
                    userContext: input.userContext
                  })];
                case 12:
                  accessTokenPayload = _d.sent();
                  _d.label = 13;
                case 13:
                  _i++;
                  return [3, 6];
                case 14:
                  return [3, 17];
                case 15:
                  (0, logger_1.logDebugMessage)("validateClaims: releasing claim refresh lock");
                  return [4, lockFactory.releaseLock(CLAIM_REFRESH_LOCK_NAME)];
                case 16:
                  _d.sent();
                  return [
                    7
                    /*endfinally*/
                  ];
                case 17:
                  return [3, 20];
                case 18:
                  (0, logger_1.logDebugMessage)("validateClaims: Retrying refresh lock ".concat(tryCount, "/").concat(MAX_REFRESH_LOCK_TRY_COUNT));
                  _d.label = 19;
                case 19:
                  return [3, 1];
                case 20:
                  if (!(tryCount === MAX_REFRESH_LOCK_TRY_COUNT)) return [3, 22];
                  (0, logger_1.logDebugMessage)("validateClaims: ran out of retries while trying to acquire claim refresh lock");
                  return [4, this.getAccessTokenPayloadSecurely({
                    userContext: input.userContext
                  })];
                case 21:
                  accessTokenPayload = _d.sent();
                  _d.label = 22;
                case 22:
                  errors = [];
                  _b = 0, _c = input.claimValidators;
                  _d.label = 23;
                case 23:
                  if (!(_b < _c.length)) return [3, 26];
                  validator = _c[_b];
                  return [4, validator.validate(accessTokenPayload, input.userContext)];
                case 24:
                  validationRes = _d.sent();
                  if (!validationRes.isValid) {
                    errors.push({
                      id: validator.id,
                      reason: validationRes.reason
                    });
                  }
                  _d.label = 25;
                case 25:
                  _b++;
                  return [3, 23];
                case 26:
                  return [2, errors];
              }
            });
          });
        },
        shouldDoInterceptionBasedOnUrl: function(toCheckUrl, apiDomain, sessionTokenBackendDomain) {
          (0, logger_1.logDebugMessage)("shouldDoInterceptionBasedOnUrl: toCheckUrl: " + toCheckUrl + " apiDomain: " + apiDomain + " sessionTokenBackendDomain: " + sessionTokenBackendDomain);
          if (toCheckUrl.includes("superTokensDoNotDoInterception")) {
            return false;
          }
          toCheckUrl = (0, utils_1.normaliseURLDomainOrThrowError)(toCheckUrl);
          var urlObj = new URL(toCheckUrl);
          var domain = urlObj.hostname;
          var apiDomainAndInputDomainMatch = false;
          if (apiDomain !== "") {
            apiDomain = (0, utils_1.normaliseURLDomainOrThrowError)(apiDomain);
            var apiUrlObj = new URL(apiDomain);
            apiDomainAndInputDomainMatch = domain === apiUrlObj.hostname;
          }
          if (sessionTokenBackendDomain === void 0 || apiDomainAndInputDomainMatch) {
            return apiDomainAndInputDomainMatch;
          } else {
            var normalisedsessionDomain = (0, utils_1.normaliseSessionScopeOrThrowError)(sessionTokenBackendDomain);
            return (0, utils_1.matchesDomainOrSubdomain)(domain, normalisedsessionDomain);
          }
        },
        calculateClockSkewInMillis: function(_a) {
          var accessTokenPayload = _a.accessTokenPayload;
          (0, logger_1.logDebugMessage)("calculateClockSkewInMillis: called");
          var tokenIssuedAt = accessTokenPayload === null || accessTokenPayload === void 0 ? void 0 : accessTokenPayload.iat;
          if (tokenIssuedAt === void 0 || typeof tokenIssuedAt !== "number") {
            (0, logger_1.logDebugMessage)("calculateClockSkewInMillis: payload iat is undefined or not a number. This may happen due to an unsupported backend sdk. Returning 0");
            return 0;
          }
          var estimatedServerTimeNow = tokenIssuedAt * 1e3;
          var clockSkewInMillis = estimatedServerTimeNow - Date.now();
          (0, logger_1.logDebugMessage)("calculateClockSkewInMillis: returning " + clockSkewInMillis);
          return clockSkewInMillis;
        }
      };
    }
    exports.default = RecipeImplementation;
  }
});

// ../../node_modules/.pnpm/supertokens-js-override@0.0.4/node_modules/supertokens-js-override/lib/build/getProxyObject.js
var require_getProxyObject = __commonJS({
  "../../node_modules/.pnpm/supertokens-js-override@0.0.4/node_modules/supertokens-js-override/lib/build/getProxyObject.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getProxyObject = void 0;
    function getProxyObject(orig) {
      var ret = __assign(__assign({}, orig), {
        _call: function(_, __) {
          throw new Error("This function should only be called through the recipe object");
        }
      });
      var keys = Object.keys(ret);
      var _loop_1 = function(k2) {
        if (k2 !== "_call") {
          ret[k2] = function() {
            var args = [];
            for (var _i2 = 0; _i2 < arguments.length; _i2++) {
              args[_i2] = arguments[_i2];
            }
            return this._call(k2, args);
          };
        }
      };
      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        _loop_1(k);
      }
      return ret;
    }
    exports.getProxyObject = getProxyObject;
  }
});

// ../../node_modules/.pnpm/supertokens-js-override@0.0.4/node_modules/supertokens-js-override/lib/build/index.js
var require_build = __commonJS({
  "../../node_modules/.pnpm/supertokens-js-override@0.0.4/node_modules/supertokens-js-override/lib/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OverrideableBuilder = void 0;
    var getProxyObject_1 = require_getProxyObject();
    var OverrideableBuilder = (
      /** @class */
      function() {
        function OverrideableBuilder2(originalImplementation) {
          this.layers = [originalImplementation];
          this.proxies = [];
        }
        OverrideableBuilder2.prototype.override = function(overrideFunc) {
          var proxy = (0, getProxyObject_1.getProxyObject)(this.layers[0]);
          var layer = overrideFunc(proxy, this);
          for (var _i = 0, _a = Object.keys(this.layers[0]); _i < _a.length; _i++) {
            var key = _a[_i];
            if (layer[key] === proxy[key] || key === "_call") {
              delete layer[key];
            } else if (layer[key] === void 0) {
              layer[key] = null;
            }
          }
          this.layers.push(layer);
          this.proxies.push(proxy);
          return this;
        };
        OverrideableBuilder2.prototype.build = function() {
          var _this = this;
          if (this.result) {
            return this.result;
          }
          this.result = {};
          for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            for (var _b = 0, _c = Object.keys(layer); _b < _c.length; _b++) {
              var key = _c[_b];
              var override = layer[key];
              if (override !== void 0) {
                if (override === null) {
                  this.result[key] = void 0;
                } else if (typeof override === "function") {
                  this.result[key] = override.bind(this.result);
                } else {
                  this.result[key] = override;
                }
              }
            }
          }
          var _loop_1 = function(proxyInd2) {
            var proxy = this_1.proxies[proxyInd2];
            proxy._call = function(fname, args) {
              for (var i = proxyInd2; i >= 0; --i) {
                var func = _this.layers[i][fname];
                if (func !== void 0 && func !== null) {
                  return func.bind(_this.result).apply(void 0, args);
                }
              }
            };
          };
          var this_1 = this;
          for (var proxyInd = 0; proxyInd < this.proxies.length; ++proxyInd) {
            _loop_1(proxyInd);
          }
          return this.result;
        };
        return OverrideableBuilder2;
      }()
    );
    exports.OverrideableBuilder = OverrideableBuilder;
    exports.default = OverrideableBuilder;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/claims/primitiveClaim.js
var require_primitiveClaim = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/claims/primitiveClaim.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PrimitiveClaim = void 0;
    var dateProvider_1 = require_dateProvider();
    var PrimitiveClaim = (
      /** @class */
      function() {
        function PrimitiveClaim2(config) {
          var _this = this;
          this.validators = {
            hasValue: function(val, maxAgeInSeconds, id) {
              if (maxAgeInSeconds === void 0) {
                maxAgeInSeconds = _this.defaultMaxAgeInSeconds;
              }
              var DateProvider = dateProvider_1.default.getReferenceOrThrow().dateProvider;
              return {
                id: id !== void 0 ? id : _this.id,
                refresh: function(ctx) {
                  return _this.refresh(ctx);
                },
                shouldRefresh: function(payload, ctx) {
                  if (maxAgeInSeconds !== void 0 && maxAgeInSeconds < DateProvider.getThresholdInSeconds()) {
                    throw new Error("maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(DateProvider.getThresholdInSeconds()));
                  }
                  return _this.getValueFromPayload(payload, ctx) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                  maxAgeInSeconds !== void 0 && payload[_this.id].t < DateProvider.now() - maxAgeInSeconds * 1e3;
                },
                validate: function(payload, ctx) {
                  var claimVal = _this.getValueFromPayload(payload, ctx);
                  if (claimVal === void 0) {
                    return {
                      isValid: false,
                      reason: {
                        message: "value does not exist",
                        expectedValue: val,
                        actualValue: claimVal
                      }
                    };
                  }
                  var ageInSeconds = (DateProvider.now() - _this.getLastFetchedTime(payload, ctx)) / 1e3;
                  if (maxAgeInSeconds !== void 0 && ageInSeconds > maxAgeInSeconds) {
                    return {
                      isValid: false,
                      reason: {
                        message: "expired",
                        ageInSeconds,
                        maxAgeInSeconds
                      }
                    };
                  }
                  if (claimVal !== val) {
                    return {
                      isValid: false,
                      reason: {
                        message: "wrong value",
                        expectedValue: val,
                        actualValue: claimVal
                      }
                    };
                  }
                  return {
                    isValid: true
                  };
                }
              };
            }
          };
          this.id = config.id;
          this.refresh = config.refresh;
          this.defaultMaxAgeInSeconds = config.defaultMaxAgeInSeconds;
        }
        PrimitiveClaim2.prototype.getValueFromPayload = function(payload, _userContext) {
          return payload[this.id] !== void 0 ? payload[this.id].v : void 0;
        };
        PrimitiveClaim2.prototype.getLastFetchedTime = function(payload, _userContext) {
          return payload[this.id] !== void 0 ? payload[this.id].t : void 0;
        };
        return PrimitiveClaim2;
      }()
    );
    exports.PrimitiveClaim = PrimitiveClaim;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/claims/primitiveArrayClaim.js
var require_primitiveArrayClaim = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/claims/primitiveArrayClaim.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PrimitiveArrayClaim = void 0;
    var dateProvider_1 = require_dateProvider();
    var PrimitiveArrayClaim = (
      /** @class */
      function() {
        function PrimitiveArrayClaim2(config) {
          var _this = this;
          this.validators = {
            includes: function(val, maxAgeInSeconds, id) {
              if (maxAgeInSeconds === void 0) {
                maxAgeInSeconds = _this.defaultMaxAgeInSeconds;
              }
              var DateProvider = dateProvider_1.default.getReferenceOrThrow().dateProvider;
              return {
                id: id !== void 0 ? id : _this.id,
                refresh: function(ctx) {
                  return _this.refresh(ctx);
                },
                shouldRefresh: function(payload, ctx) {
                  if (maxAgeInSeconds !== void 0 && maxAgeInSeconds < DateProvider.getThresholdInSeconds()) {
                    throw new Error("maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(DateProvider.getThresholdInSeconds()));
                  }
                  return _this.getValueFromPayload(payload, ctx) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                  maxAgeInSeconds !== void 0 && payload[_this.id].t < DateProvider.now() - maxAgeInSeconds * 1e3;
                },
                validate: function(payload, ctx) {
                  return __awaiter(_this, void 0, void 0, function() {
                    var claimVal, ageInSeconds;
                    return __generator(this, function(_a) {
                      claimVal = this.getValueFromPayload(payload, ctx);
                      if (claimVal === void 0) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "value does not exist",
                            expectedToInclude: val,
                            actualValue: claimVal
                          }
                        }];
                      }
                      ageInSeconds = (DateProvider.now() - this.getLastFetchedTime(payload, ctx)) / 1e3;
                      if (maxAgeInSeconds !== void 0 && ageInSeconds > maxAgeInSeconds) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "expired",
                            ageInSeconds,
                            maxAgeInSeconds
                          }
                        }];
                      }
                      if (!claimVal.includes(val)) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "wrong value",
                            expectedToInclude: val,
                            actualValue: claimVal
                          }
                        }];
                      }
                      return [2, {
                        isValid: true
                      }];
                    });
                  });
                }
              };
            },
            excludes: function(val, maxAgeInSeconds, id) {
              if (maxAgeInSeconds === void 0) {
                maxAgeInSeconds = _this.defaultMaxAgeInSeconds;
              }
              var DateProvider = dateProvider_1.default.getReferenceOrThrow().dateProvider;
              return {
                id: id !== void 0 ? id : _this.id,
                refresh: function(ctx) {
                  return _this.refresh(ctx);
                },
                shouldRefresh: function(payload, ctx) {
                  if (maxAgeInSeconds !== void 0 && maxAgeInSeconds < DateProvider.getThresholdInSeconds()) {
                    throw new Error("maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(DateProvider.getThresholdInSeconds()));
                  }
                  return _this.getValueFromPayload(payload, ctx) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                  maxAgeInSeconds !== void 0 && payload[_this.id].t < DateProvider.now() - maxAgeInSeconds * 1e3;
                },
                validate: function(payload, ctx) {
                  return __awaiter(_this, void 0, void 0, function() {
                    var claimVal, ageInSeconds;
                    return __generator(this, function(_a) {
                      claimVal = this.getValueFromPayload(payload, ctx);
                      if (claimVal === void 0) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "value does not exist",
                            expectedToNotInclude: val,
                            actualValue: claimVal
                          }
                        }];
                      }
                      ageInSeconds = (DateProvider.now() - this.getLastFetchedTime(payload, ctx)) / 1e3;
                      if (maxAgeInSeconds !== void 0 && ageInSeconds > maxAgeInSeconds) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "expired",
                            ageInSeconds,
                            maxAgeInSeconds
                          }
                        }];
                      }
                      if (claimVal.includes(val)) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "wrong value",
                            expectedToNotInclude: val,
                            actualValue: claimVal
                          }
                        }];
                      }
                      return [2, {
                        isValid: true
                      }];
                    });
                  });
                }
              };
            },
            includesAll: function(val, maxAgeInSeconds, id) {
              if (maxAgeInSeconds === void 0) {
                maxAgeInSeconds = _this.defaultMaxAgeInSeconds;
              }
              var DateProvider = dateProvider_1.default.getReferenceOrThrow().dateProvider;
              return {
                id: id !== void 0 ? id : _this.id,
                refresh: function(ctx) {
                  return _this.refresh(ctx);
                },
                shouldRefresh: function(payload, ctx) {
                  if (maxAgeInSeconds !== void 0 && maxAgeInSeconds < DateProvider.getThresholdInSeconds()) {
                    throw new Error("maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(DateProvider.getThresholdInSeconds()));
                  }
                  return _this.getValueFromPayload(payload, ctx) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                  maxAgeInSeconds !== void 0 && payload[_this.id].t < DateProvider.now() - maxAgeInSeconds * 1e3;
                },
                validate: function(payload, ctx) {
                  return __awaiter(_this, void 0, void 0, function() {
                    var claimVal, ageInSeconds, claimSet, isValid;
                    return __generator(this, function(_a) {
                      claimVal = this.getValueFromPayload(payload, ctx);
                      if (claimVal === void 0) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "value does not exist",
                            expectedToInclude: val,
                            actualValue: claimVal
                          }
                        }];
                      }
                      ageInSeconds = (DateProvider.now() - this.getLastFetchedTime(payload, ctx)) / 1e3;
                      if (maxAgeInSeconds !== void 0 && ageInSeconds > maxAgeInSeconds) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "expired",
                            ageInSeconds,
                            maxAgeInSeconds
                          }
                        }];
                      }
                      claimSet = new Set(claimVal);
                      isValid = val.every(function(v) {
                        return claimSet.has(v);
                      });
                      return [2, isValid ? {
                        isValid
                      } : {
                        isValid,
                        reason: {
                          message: "wrong value",
                          expectedToInclude: val,
                          actualValue: claimVal
                        }
                      }];
                    });
                  });
                }
              };
            },
            includesAny: function(val, maxAgeInSeconds, id) {
              if (maxAgeInSeconds === void 0) {
                maxAgeInSeconds = _this.defaultMaxAgeInSeconds;
              }
              var DateProvider = dateProvider_1.default.getReferenceOrThrow().dateProvider;
              return {
                id: id !== void 0 ? id : _this.id,
                refresh: function(ctx) {
                  return _this.refresh(ctx);
                },
                shouldRefresh: function(payload, ctx) {
                  if (maxAgeInSeconds !== void 0 && maxAgeInSeconds < DateProvider.getThresholdInSeconds()) {
                    throw new Error("maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(DateProvider.getThresholdInSeconds()));
                  }
                  return _this.getValueFromPayload(payload, ctx) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                  maxAgeInSeconds !== void 0 && payload[_this.id].t < DateProvider.now() - maxAgeInSeconds * 1e3;
                },
                validate: function(payload, ctx) {
                  return __awaiter(_this, void 0, void 0, function() {
                    var claimVal, ageInSeconds, claimSet, isValid;
                    return __generator(this, function(_a) {
                      claimVal = this.getValueFromPayload(payload, ctx);
                      if (claimVal === void 0) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "value does not exist",
                            expectedToInclude: val,
                            actualValue: claimVal
                          }
                        }];
                      }
                      ageInSeconds = (DateProvider.now() - this.getLastFetchedTime(payload, ctx)) / 1e3;
                      if (maxAgeInSeconds !== void 0 && ageInSeconds > maxAgeInSeconds) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "expired",
                            ageInSeconds,
                            maxAgeInSeconds
                          }
                        }];
                      }
                      claimSet = new Set(claimVal);
                      isValid = val.some(function(v) {
                        return claimSet.has(v);
                      });
                      return [2, isValid ? {
                        isValid
                      } : {
                        isValid,
                        reason: {
                          message: "wrong value",
                          expectedToIncludeAtLeastOneOf: val,
                          actualValue: claimVal
                        }
                      }];
                    });
                  });
                }
              };
            },
            excludesAll: function(val, maxAgeInSeconds, id) {
              if (maxAgeInSeconds === void 0) {
                maxAgeInSeconds = _this.defaultMaxAgeInSeconds;
              }
              var DateProvider = dateProvider_1.default.getReferenceOrThrow().dateProvider;
              return {
                id: id !== void 0 ? id : _this.id,
                refresh: function(ctx) {
                  return _this.refresh(ctx);
                },
                shouldRefresh: function(payload, ctx) {
                  if (maxAgeInSeconds !== void 0 && maxAgeInSeconds < DateProvider.getThresholdInSeconds()) {
                    throw new Error("maxAgeInSeconds must be greater than or equal to the DateProvider threshold value -> ".concat(DateProvider.getThresholdInSeconds()));
                  }
                  return _this.getValueFromPayload(payload, ctx) === void 0 || // We know payload[this.id] is defined since the value is not undefined in this branch
                  maxAgeInSeconds !== void 0 && payload[_this.id].t < DateProvider.now() - maxAgeInSeconds * 1e3;
                },
                validate: function(payload, ctx) {
                  return __awaiter(_this, void 0, void 0, function() {
                    var claimVal, ageInSeconds, claimSet, isValid;
                    return __generator(this, function(_a) {
                      claimVal = this.getValueFromPayload(payload, ctx);
                      if (claimVal === void 0) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "value does not exist",
                            expectedToNotInclude: val,
                            actualValue: claimVal
                          }
                        }];
                      }
                      ageInSeconds = (DateProvider.now() - this.getLastFetchedTime(payload, ctx)) / 1e3;
                      if (maxAgeInSeconds !== void 0 && ageInSeconds > maxAgeInSeconds) {
                        return [2, {
                          isValid: false,
                          reason: {
                            message: "expired",
                            ageInSeconds,
                            maxAgeInSeconds
                          }
                        }];
                      }
                      claimSet = new Set(claimVal);
                      isValid = val.every(function(v) {
                        return !claimSet.has(v);
                      });
                      return [2, isValid ? {
                        isValid
                      } : {
                        isValid,
                        reason: {
                          message: "wrong value",
                          expectedToNotInclude: val,
                          actualValue: claimVal
                        }
                      }];
                    });
                  });
                }
              };
            }
          };
          this.id = config.id;
          this.refresh = config.refresh;
          this.defaultMaxAgeInSeconds = config.defaultMaxAgeInSeconds;
        }
        PrimitiveArrayClaim2.prototype.getValueFromPayload = function(payload, _userContext) {
          return payload[this.id] !== void 0 ? payload[this.id].v : void 0;
        };
        PrimitiveArrayClaim2.prototype.getLastFetchedTime = function(payload, _userContext) {
          return payload[this.id] !== void 0 ? payload[this.id].t : void 0;
        };
        return PrimitiveArrayClaim2;
      }()
    );
    exports.PrimitiveArrayClaim = PrimitiveArrayClaim;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/claims/booleanClaim.js
var require_booleanClaim = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/claims/booleanClaim.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BooleanClaim = void 0;
    var primitiveClaim_1 = require_primitiveClaim();
    var BooleanClaim = (
      /** @class */
      function(_super) {
        __extends(BooleanClaim2, _super);
        function BooleanClaim2(config) {
          var _this = _super.call(this, config) || this;
          _this.validators = __assign(__assign({}, _this.validators), {
            isTrue: function(maxAge) {
              return _this.validators.hasValue(true, maxAge);
            },
            isFalse: function(maxAge) {
              return _this.validators.hasValue(false, maxAge);
            }
          });
          return _this;
        }
        return BooleanClaim2;
      }(primitiveClaim_1.PrimitiveClaim)
    );
    exports.BooleanClaim = BooleanClaim;
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/index.js
var require_build2 = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/lib/build/index.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BooleanClaim = exports.PrimitiveArrayClaim = exports.PrimitiveClaim = exports.getInvalidClaimsFromResponse = exports.getClaimValue = exports.validateClaims = exports.signOut = exports.addAxiosInterceptors = exports.doesSessionExist = exports.attemptRefreshingSession = exports.getAccessToken = exports.getAccessTokenPayloadSecurely = exports.getUserId = exports.init = void 0;
    var fetch_1 = require_fetch();
    var recipeImplementation_1 = require_recipeImplementation();
    var supertokens_js_override_1 = require_build();
    var utils_1 = require_utils();
    var cookieHandler_1 = require_cookieHandler();
    var windowHandler_1 = require_windowHandler();
    var lockFactory_1 = require_lockFactory();
    var sessionClaimValidatorStore_1 = require_sessionClaimValidatorStore();
    var logger_1 = require_logger();
    var dateProvider_1 = require_dateProvider();
    var AuthHttpRequest = (
      /** @class */
      function() {
        function AuthHttpRequest2() {
        }
        AuthHttpRequest2.init = function(options) {
          cookieHandler_1.default.init(options.cookieHandler);
          windowHandler_1.default.init(options.windowHandler);
          dateProvider_1.default.init(options.dateProvider);
          lockFactory_1.default.init(options.lockFactory, windowHandler_1.default.getReferenceOrThrow().windowHandler.localStorage);
          var config = (0, utils_1.validateAndNormaliseInputOrThrowError)(options);
          if (options.enableDebugLogs !== void 0 && options.enableDebugLogs) {
            (0, logger_1.enableLogging)();
          }
          var recipeImpl = new supertokens_js_override_1.default((0, recipeImplementation_1.default)({
            onHandleEvent: config.onHandleEvent,
            preAPIHook: config.preAPIHook,
            postAPIHook: config.postAPIHook,
            sessionExpiredStatusCode: config.sessionExpiredStatusCode
          })).override(config.override.functions).build();
          fetch_1.default.init(config, recipeImpl);
          AuthHttpRequest2.axiosInterceptorQueue.forEach(function(f) {
            f();
          });
          AuthHttpRequest2.axiosInterceptorQueue = [];
        };
        AuthHttpRequest2.getUserId = function(input) {
          return fetch_1.default.recipeImpl.getUserId({
            userContext: (0, utils_1.getNormalisedUserContext)(input === void 0 ? void 0 : input.userContext)
          });
        };
        AuthHttpRequest2.getAccessTokenPayloadSecurely = function(input) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_b) {
              return [2, fetch_1.default.recipeImpl.getAccessTokenPayloadSecurely({
                userContext: (0, utils_1.getNormalisedUserContext)(input === void 0 ? void 0 : input.userContext)
              })];
            });
          });
        };
        var _a;
        _a = AuthHttpRequest2;
        AuthHttpRequest2.axiosInterceptorQueue = [];
        AuthHttpRequest2.attemptRefreshingSession = function() {
          return __awaiter(void 0, void 0, void 0, function() {
            return __generator(_a, function(_b) {
              return [2, fetch_1.default.attemptRefreshingSession()];
            });
          });
        };
        AuthHttpRequest2.doesSessionExist = function(input) {
          return fetch_1.default.recipeImpl.doesSessionExist({
            userContext: (0, utils_1.getNormalisedUserContext)(input === void 0 ? void 0 : input.userContext)
          });
        };
        AuthHttpRequest2.addAxiosInterceptors = function(axiosInstance, userContext) {
          if (!fetch_1.default.initCalled) {
            AuthHttpRequest2.axiosInterceptorQueue.push(function() {
              fetch_1.default.recipeImpl.addAxiosInterceptors({
                axiosInstance,
                userContext: (0, utils_1.getNormalisedUserContext)(userContext)
              });
            });
          } else {
            fetch_1.default.recipeImpl.addAxiosInterceptors({
              axiosInstance,
              userContext: (0, utils_1.getNormalisedUserContext)(userContext)
            });
          }
        };
        AuthHttpRequest2.signOut = function(input) {
          return fetch_1.default.recipeImpl.signOut({
            userContext: (0, utils_1.getNormalisedUserContext)(input === void 0 ? void 0 : input.userContext)
          });
        };
        AuthHttpRequest2.getInvalidClaimsFromResponse = function(input) {
          return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_b) {
              return [2, fetch_1.default.recipeImpl.getInvalidClaimsFromResponse({
                response: input.response,
                userContext: (0, utils_1.getNormalisedUserContext)(input.userContext)
              })];
            });
          });
        };
        AuthHttpRequest2.getClaimValue = function(input) {
          return __awaiter(this, void 0, void 0, function() {
            var userContext, accessTokenPayload;
            return __generator(this, function(_b) {
              switch (_b.label) {
                case 0:
                  userContext = (0, utils_1.getNormalisedUserContext)(input === void 0 ? void 0 : input.userContext);
                  return [4, AuthHttpRequest2.getAccessTokenPayloadSecurely({
                    userContext
                  })];
                case 1:
                  accessTokenPayload = _b.sent();
                  return [2, input.claim.getValueFromPayload(accessTokenPayload, userContext)];
              }
            });
          });
        };
        AuthHttpRequest2.validateClaims = function(overrideGlobalClaimValidators, userContext) {
          var normalisedUserContext = (0, utils_1.getNormalisedUserContext)(userContext);
          var claimValidatorsAddedByOtherRecipes = sessionClaimValidatorStore_1.SessionClaimValidatorStore.getClaimValidatorsAddedByOtherRecipes();
          var globalClaimValidators = fetch_1.default.recipeImpl.getGlobalClaimValidators({
            claimValidatorsAddedByOtherRecipes,
            userContext: normalisedUserContext
          });
          var claimValidators = overrideGlobalClaimValidators !== void 0 ? overrideGlobalClaimValidators(globalClaimValidators, normalisedUserContext) : globalClaimValidators;
          if (claimValidators.length === 0) {
            return [];
          }
          return fetch_1.default.recipeImpl.validateClaims({
            claimValidators,
            userContext: (0, utils_1.getNormalisedUserContext)(userContext)
          });
        };
        AuthHttpRequest2.getAccessToken = function(input) {
          return __awaiter(void 0, void 0, void 0, function() {
            return __generator(_a, function(_b) {
              switch (_b.label) {
                case 0:
                  return [4, fetch_1.default.recipeImpl.doesSessionExist({
                    userContext: (0, utils_1.getNormalisedUserContext)(input === void 0 ? void 0 : input.userContext)
                  })];
                case 1:
                  if (_b.sent()) {
                    return [2, (0, fetch_1.getTokenForHeaderAuth)("access")];
                  }
                  return [2, void 0];
              }
            });
          });
        };
        return AuthHttpRequest2;
      }()
    );
    exports.default = AuthHttpRequest;
    exports.init = AuthHttpRequest.init;
    exports.getUserId = AuthHttpRequest.getUserId;
    exports.getAccessTokenPayloadSecurely = AuthHttpRequest.getAccessTokenPayloadSecurely;
    exports.getAccessToken = AuthHttpRequest.getAccessToken;
    exports.attemptRefreshingSession = AuthHttpRequest.attemptRefreshingSession;
    exports.doesSessionExist = AuthHttpRequest.doesSessionExist;
    exports.addAxiosInterceptors = AuthHttpRequest.addAxiosInterceptors;
    exports.signOut = AuthHttpRequest.signOut;
    exports.validateClaims = AuthHttpRequest.validateClaims;
    exports.getClaimValue = AuthHttpRequest.getClaimValue;
    exports.getInvalidClaimsFromResponse = AuthHttpRequest.getInvalidClaimsFromResponse;
    var primitiveClaim_1 = require_primitiveClaim();
    Object.defineProperty(exports, "PrimitiveClaim", {
      enumerable: true,
      get: function() {
        return primitiveClaim_1.PrimitiveClaim;
      }
    });
    var primitiveArrayClaim_1 = require_primitiveArrayClaim();
    Object.defineProperty(exports, "PrimitiveArrayClaim", {
      enumerable: true,
      get: function() {
        return primitiveArrayClaim_1.PrimitiveArrayClaim;
      }
    });
    var booleanClaim_1 = require_booleanClaim();
    Object.defineProperty(exports, "BooleanClaim", {
      enumerable: true,
      get: function() {
        return booleanClaim_1.BooleanClaim;
      }
    });
  }
});

// ../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/index.js
var require_supertokens_website = __commonJS({
  "../../node_modules/.pnpm/supertokens-website@20.1.5/node_modules/supertokens-website/index.js"(exports) {
    "use strict";
    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    exports.__esModule = true;
    __export(require_build2());
  }
});

// ../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/recipe/recipeModule/index.js
var require_recipeModule = __commonJS({
  "../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/recipe/recipeModule/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RecipeModule = (
      /** @class */
      /* @__PURE__ */ function() {
        function RecipeModule2(config) {
          this.config = config;
        }
        return RecipeModule2;
      }()
    );
    exports.default = RecipeModule;
  }
});

// ../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/recipe/emailverification/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/recipe/emailverification/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EMAILVERIFICATION_CLAIM_ID = void 0;
    exports.EMAILVERIFICATION_CLAIM_ID = "st-ev";
  }
});

// ../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/recipe/session/recipe.js
var require_recipe = __commonJS({
  "../../node_modules/.pnpm/supertokens-web-js@0.14.0/node_modules/supertokens-web-js/lib/build/recipe/session/recipe.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Recipe = void 0;
    var recipeModule_1 = require_recipeModule();
    var supertokens_website_1 = require_supertokens_website();
    var utils_1 = require_utils2();
    var constants_1 = require_constants2();
    var priorityValidatorIds = [constants_1.EMAILVERIFICATION_CLAIM_ID];
    var Recipe = (
      /** @class */
      function(_super) {
        __extends(Recipe2, _super);
        function Recipe2(config) {
          var _this = _super.call(this, config) || this;
          _this.getUserId = function(input) {
            return supertokens_website_1.default.getUserId({
              userContext: input.userContext
            });
          };
          _this.getAccessToken = function(input) {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                return [2, supertokens_website_1.default.getAccessToken({
                  userContext: input.userContext
                })];
              });
            });
          };
          _this.getAccessTokenPayloadSecurely = function(input) {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                return [2, supertokens_website_1.default.getAccessTokenPayloadSecurely({
                  userContext: input.userContext
                })];
              });
            });
          };
          _this.doesSessionExist = function(input) {
            return supertokens_website_1.default.doesSessionExist({
              userContext: input.userContext
            });
          };
          _this.signOut = function(input) {
            return supertokens_website_1.default.signOut({
              userContext: input.userContext
            });
          };
          _this.attemptRefreshingSession = function() {
            return __awaiter(_this, void 0, void 0, function() {
              return __generator(this, function(_a) {
                return [2, supertokens_website_1.default.attemptRefreshingSession()];
              });
            });
          };
          _this.validateClaims = function(input) {
            return supertokens_website_1.default.validateClaims(input.overrideGlobalClaimValidators, input.userContext);
          };
          supertokens_website_1.default.init(__assign(__assign({}, config), {
            override: {
              functions: function(originalImpl, builder) {
                var _a;
                builder.override(function(oI) {
                  return __assign(__assign({}, oI), {
                    getGlobalClaimValidators: function(input) {
                      var res = oI.getGlobalClaimValidators(input);
                      return __spreadArray(__spreadArray([], res.filter(function(x) {
                        return priorityValidatorIds.includes(x.id);
                      }), true), res.filter(function(x) {
                        return !priorityValidatorIds.includes(x.id);
                      }), true);
                    }
                  });
                });
                if ((_a = config.override) === null || _a === void 0 ? void 0 : _a.functions) {
                  builder.override(config.override.functions);
                }
                return originalImpl;
              }
            },
            preAPIHook: function(context) {
              return __awaiter(_this, void 0, void 0, function() {
                var headers, response;
                return __generator(this, function(_a) {
                  headers = new Headers(context.requestInit.headers);
                  headers.set("rid", config.recipeId);
                  response = __assign(__assign({}, context), {
                    requestInit: __assign(__assign({}, context.requestInit), {
                      headers
                    })
                  });
                  if (config.preAPIHook === void 0) {
                    return [2, response];
                  } else {
                    return [2, config.preAPIHook(context)];
                  }
                  return [
                    2
                    /*return*/
                  ];
                });
              });
            },
            apiDomain: config.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: config.appInfo.apiBasePath.getAsStringDangerous()
          }));
          return _this;
        }
        Recipe2.init = function(config) {
          return function(appInfo, _, enableDebugLogs) {
            Recipe2.instance = new Recipe2(__assign(__assign({}, config), {
              appInfo,
              recipeId: Recipe2.RECIPE_ID,
              enableDebugLogs
            }));
            return Recipe2.instance;
          };
        };
        Recipe2.prototype.getClaimValue = function(input) {
          return supertokens_website_1.default.getClaimValue(input);
        };
        Recipe2.prototype.getInvalidClaimsFromResponse = function(input) {
          return supertokens_website_1.default.getInvalidClaimsFromResponse(input);
        };
        Recipe2.addAxiosInterceptors = function(axiosInstance, userContext) {
          return supertokens_website_1.default.addAxiosInterceptors(axiosInstance, userContext);
        };
        Recipe2.getInstanceOrThrow = function() {
          if (Recipe2.instance === void 0) {
            var error = "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
            error = (0, utils_1.checkForSSRErrorAndAppendIfNeeded)(error);
            throw Error(error);
          }
          return Recipe2.instance;
        };
        Recipe2.reset = function() {
          if (!(0, utils_1.isTest)()) {
            return;
          }
          Recipe2.instance = void 0;
          return;
        };
        Recipe2.RECIPE_ID = "session";
        return Recipe2;
      }(recipeModule_1.default)
    );
    exports.Recipe = Recipe;
    exports.default = Recipe;
  }
});

export {
  require_windowHandler3 as require_windowHandler,
  require_normalisedURLPath,
  require_cookieHandler,
  require_dateProvider,
  require_sessionClaimValidatorStore,
  require_utils2 as require_utils,
  require_build,
  require_error,
  require_recipeModule,
  require_supertokens_website,
  require_constants2 as require_constants,
  require_recipe
};
//# sourceMappingURL=chunk-AMLKBHRA.js.map
