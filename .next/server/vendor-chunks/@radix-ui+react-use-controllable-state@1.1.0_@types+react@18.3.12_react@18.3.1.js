"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.12_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.12_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useControllableState: () => (/* binding */ useControllableState)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\");\n// packages/react/use-controllable-state/src/useControllableState.tsx\n\n\nfunction useControllableState({\n  prop,\n  defaultProp,\n  onChange = () => {\n  }\n}) {\n  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });\n  const isControlled = prop !== void 0;\n  const value = isControlled ? prop : uncontrolledProp;\n  const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);\n  const setValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(\n    (nextValue) => {\n      if (isControlled) {\n        const setter = nextValue;\n        const value2 = typeof nextValue === \"function\" ? setter(prop) : nextValue;\n        if (value2 !== prop) handleChange(value2);\n      } else {\n        setUncontrolledProp(nextValue);\n      }\n    },\n    [isControlled, prop, setUncontrolledProp, handleChange]\n  );\n  return [value, setValue];\n}\nfunction useUncontrolledState({\n  defaultProp,\n  onChange\n}) {\n  const uncontrolledState = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);\n  const [value] = uncontrolledState;\n  const prevValueRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);\n  const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n    if (prevValueRef.current !== value) {\n      handleChange(value);\n      prevValueRef.current = value;\n    }\n  }, [value, prevValueRef, handleChange]);\n  return uncontrolledState;\n}\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVAMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjMuMTJfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUMrQjtBQUNtQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHlFQUF5RSx1QkFBdUI7QUFDaEc7QUFDQTtBQUNBLHVCQUF1QixnRkFBYztBQUNyQyxtQkFBbUIsOENBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw0QkFBNEIsMkNBQWM7QUFDMUM7QUFDQSx1QkFBdUIseUNBQVk7QUFDbkMsdUJBQXVCLGdGQUFjO0FBQ3JDLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc3RhcnRlci1raXQvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVAMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjMuMTJfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9kaXN0L2luZGV4Lm1qcz82ZTE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2VzL3JlYWN0L3VzZS1jb250cm9sbGFibGUtc3RhdGUvc3JjL3VzZUNvbnRyb2xsYWJsZVN0YXRlLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFja1JlZiB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZlwiO1xuZnVuY3Rpb24gdXNlQ29udHJvbGxhYmxlU3RhdGUoe1xuICBwcm9wLFxuICBkZWZhdWx0UHJvcCxcbiAgb25DaGFuZ2UgPSAoKSA9PiB7XG4gIH1cbn0pIHtcbiAgY29uc3QgW3VuY29udHJvbGxlZFByb3AsIHNldFVuY29udHJvbGxlZFByb3BdID0gdXNlVW5jb250cm9sbGVkU3RhdGUoeyBkZWZhdWx0UHJvcCwgb25DaGFuZ2UgfSk7XG4gIGNvbnN0IGlzQ29udHJvbGxlZCA9IHByb3AgIT09IHZvaWQgMDtcbiAgY29uc3QgdmFsdWUgPSBpc0NvbnRyb2xsZWQgPyBwcm9wIDogdW5jb250cm9sbGVkUHJvcDtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2tSZWYob25DaGFuZ2UpO1xuICBjb25zdCBzZXRWYWx1ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChuZXh0VmFsdWUpID0+IHtcbiAgICAgIGlmIChpc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgY29uc3Qgc2V0dGVyID0gbmV4dFZhbHVlO1xuICAgICAgICBjb25zdCB2YWx1ZTIgPSB0eXBlb2YgbmV4dFZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzZXR0ZXIocHJvcCkgOiBuZXh0VmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZTIgIT09IHByb3ApIGhhbmRsZUNoYW5nZSh2YWx1ZTIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VW5jb250cm9sbGVkUHJvcChuZXh0VmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2lzQ29udHJvbGxlZCwgcHJvcCwgc2V0VW5jb250cm9sbGVkUHJvcCwgaGFuZGxlQ2hhbmdlXVxuICApO1xuICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG5mdW5jdGlvbiB1c2VVbmNvbnRyb2xsZWRTdGF0ZSh7XG4gIGRlZmF1bHRQcm9wLFxuICBvbkNoYW5nZVxufSkge1xuICBjb25zdCB1bmNvbnRyb2xsZWRTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRQcm9wKTtcbiAgY29uc3QgW3ZhbHVlXSA9IHVuY29udHJvbGxlZFN0YXRlO1xuICBjb25zdCBwcmV2VmFsdWVSZWYgPSBSZWFjdC51c2VSZWYodmFsdWUpO1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFja1JlZihvbkNoYW5nZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZWYWx1ZVJlZi5jdXJyZW50ICE9PSB2YWx1ZSkge1xuICAgICAgaGFuZGxlQ2hhbmdlKHZhbHVlKTtcbiAgICAgIHByZXZWYWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfVxuICB9LCBbdmFsdWUsIHByZXZWYWx1ZVJlZiwgaGFuZGxlQ2hhbmdlXSk7XG4gIHJldHVybiB1bmNvbnRyb2xsZWRTdGF0ZTtcbn1cbmV4cG9ydCB7XG4gIHVzZUNvbnRyb2xsYWJsZVN0YXRlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs\n");

/***/ })

};
;