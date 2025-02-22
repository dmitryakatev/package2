(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Package2"] = factory();
	else
		root["Package2"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/package1/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/package1/dist/index.js ***!
  \*********************************************/
/***/ (() => {

var Package1;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calc.ts":
/*!*********************!*\
  !*** ./src/calc.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_273__) => {

__nested_webpack_require_273__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_273__.d(__nested_webpack_exports__, {
/* harmony export */   Calc: () => (/* binding */ Calc)
/* harmony export */ });
class Calc {
    constructor(options) {
        this.value = options.value;
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    calc() {
        return this.items.reduce((acc, item) => acc + item.calc(), this.value);
    }
}


/***/ }),

/***/ "./src/item.ts":
/*!*********************!*\
  !*** ./src/item.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_922__) => {

__nested_webpack_require_922__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_922__.d(__nested_webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
class Item {
    constructor(options) {
        this.value1 = options.value1;
        this.value2 = options.value2;
    }
    calc() {
        return this.value1 + this.value2;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1556__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_1556__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_1556__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_1556__.o(definition, key) && !__nested_webpack_require_1556__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_1556__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_1556__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__nested_webpack_require_1556__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_1556__.d(__nested_webpack_exports__, {
/* harmony export */   Calc: () => (/* reexport safe */ _calc__WEBPACK_IMPORTED_MODULE_0__.Calc),
/* harmony export */   Item: () => (/* reexport safe */ _item__WEBPACK_IMPORTED_MODULE_1__.Item)
/* harmony export */ });
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_1556__(/*! ./calc */ "./src/calc.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_1556__(/*! ./item */ "./src/item.ts");



})();

Package1 = __nested_webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/calc-sub.ts":
/*!*************************!*\
  !*** ./src/calc-sub.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcSub: () => (/* binding */ CalcSub)
/* harmony export */ });
/* harmony import */ var package1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! package1 */ "./node_modules/package1/dist/index.js");
/* harmony import */ var package1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(package1__WEBPACK_IMPORTED_MODULE_0__);

class CalcSub {
    constructor(options) {
        this.value1 = options.value1;
        this.calc1 = new package1__WEBPACK_IMPORTED_MODULE_0__.Calc({ value: options.value2 });
    }
    calc() {
        return this.value1 - this.calc1.calc();
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalcSub: () => (/* reexport safe */ _calc_sub__WEBPACK_IMPORTED_MODULE_0__.CalcSub)
/* harmony export */ });
/* harmony import */ var _calc_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-sub */ "./src/calc-sub.ts");


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map