/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module1.js":
/*!************************!*\
  !*** ./src/module1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "age": () => (/* binding */ age),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "niccals": () => (/* binding */ surname),
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
var name = 'Murdock';
var surname = 'Niccals';
var age = 54;
function sum(a, b) {
  return a + b;
}


/***/ }),

/***/ "./src/module2.js":
/*!************************!*\
  !*** ./src/module2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Person": () => (/* binding */ Person),
/* harmony export */   "age": () => (/* binding */ age),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "noodle": () => (/* binding */ noodle),
/* harmony export */   "surname": () => (/* binding */ surname)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var noodle = 'Noodle';
var surname = '???';
var age = 30;
function multiply(a, b) {
  return a * b;
}
var Person = /*#__PURE__*/_createClass(function Person(name, surname, age) {
  _classCallCheck(this, Person);
  this.name = name;
  this.surname = surname;
  this.age = age;
});

/***/ }),

/***/ "./src/module3.js":
/*!************************!*\
  !*** ./src/module3.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (name, surname, age) {
  return {
    name: name,
    surname: surname,
    age: age,
    showDetails: function showDetails() {
      console.log("Nome: ".concat(this.name, "\nSobrenome: ").concat(this.surname, "\nIdade: ").concat(this.age));
    }
  };
});

/* 
export default function createGorillazMember(name, surname, age) {
    return {
        name: name,
        surname: surname,
        age: age,

        showDetails() {
            console.log(`Nome: ${this.name}\nSobrenome: ${this.surname}\nIdade: ${this.age}`);
        }
    }
}
*/

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ "./src/module1.js");
/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2 */ "./src/module2.js");
/* harmony import */ var _module3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module3 */ "./src/module3.js");



var name = _module2__WEBPACK_IMPORTED_MODULE_1__.noodle;
var person = new _module2__WEBPACK_IMPORTED_MODULE_1__.Person(name, _module2__WEBPACK_IMPORTED_MODULE_1__.surname, _module2__WEBPACK_IMPORTED_MODULE_1__.age);
(0,_module1__WEBPACK_IMPORTED_MODULE_0__.sum)(2, 3);
console.log("Nome: ".concat(_module1__WEBPACK_IMPORTED_MODULE_0__.name, "\nSobrenome: ").concat(_module1__WEBPACK_IMPORTED_MODULE_0__.niccals, "\nIdade: ").concat(_module1__WEBPACK_IMPORTED_MODULE_0__.age));
console.log("Nome: ".concat(person.name, "\nSobrenome: ").concat(person.surname, "\nIdade: ").concat(person.age));
(0,_module3__WEBPACK_IMPORTED_MODULE_2__["default"])('Stuart (2D)', 'Harold Pot', 44).showDetails();

/* 
import { name, surname, age, sum } from './module1';

// const name = '2-D'; => Error: Identifier 'name' has already been declared

console.log(name, surname, age); => surname === undefined
console.log(sum(2, 3)); 
*/
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map