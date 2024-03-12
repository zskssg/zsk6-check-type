/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CheckType: () => (/* binding */ CheckType),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ \"./src/type.ts\");\n\nconst CheckType = _type__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    CheckType: _type__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n\n//# sourceURL=webpack://zsk6-check-type/./src/index.ts?");

/***/ }),

/***/ "./src/type.ts":
/*!*********************!*\
  !*** ./src/type.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkType)\n/* harmony export */ });\n/*\n * @Date: 2024-03-11 16:36:29\n * @LastEditors: zhangsk\n * @LastEditTime: 2024-03-11 17:39:32\n * @FilePath: \\zsk6-check-type\\src\\type.ts\n * @Label: Do not edit\n */\nfunction checkType(value) {\n    if (value === null) {\n        return \"null\";\n    }\n    const baseType = typeof value;\n    // 基本类型\n    if (![\"object\", \"function\"].includes(baseType)) {\n        return baseType;\n    }\n    // Symbol.toStringTag 通常指定对象类的“display name”\n    // 它在 Object.prototype.toString() 中使用。\n    const tag = value[Symbol.toStringTag];\n    if (typeof tag === \"string\") {\n        return tag;\n    }\n    // 如果它是一个函数，其源代码以 \"class\" 关键字开头\n    if (baseType === \"function\" &&\n        Function.prototype.toString.call(value).startsWith(\"class\")) {\n        return \"class\";\n    }\n    // 构造函数的名称；例如 `Array`、`GeneratorFunction`、`Number`、`String`、`Boolean` 或 `MyCustomClass`\n    const className = value.constructor.name;\n    if (typeof className === \"string\" && className !== \"\") {\n        return className;\n    }\n    // 在这一点上，没有合适的方法来获取值的类型，因此我们使用基本实现。\n    return baseType;\n}\n\n\n//# sourceURL=webpack://zsk6-check-type/./src/type.ts?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ var __webpack_exports__CheckType = __webpack_exports__.CheckType;
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__CheckType as CheckType, __webpack_exports__default as default };
/******/ 
