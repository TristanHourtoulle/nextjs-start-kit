"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-focus-guards@1.1.1_@types+react@18.3.12_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-focus-guards@1.1.1_@types+react@18.3.12_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.1_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.1_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FocusGuards: () => (/* binding */ FocusGuards),\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   useFocusGuards: () => (/* binding */ useFocusGuards)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.16_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ FocusGuards,Root,useFocusGuards auto */ // packages/react/focus-guards/src/FocusGuards.tsx\n\nvar count = 0;\nfunction FocusGuards(props) {\n    useFocusGuards();\n    return props.children;\n}\nfunction useFocusGuards() {\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        const edgeGuards = document.querySelectorAll(\"[data-radix-focus-guard]\");\n        document.body.insertAdjacentElement(\"afterbegin\", edgeGuards[0] ?? createFocusGuard());\n        document.body.insertAdjacentElement(\"beforeend\", edgeGuards[1] ?? createFocusGuard());\n        count++;\n        return ()=>{\n            if (count === 1) {\n                document.querySelectorAll(\"[data-radix-focus-guard]\").forEach((node)=>node.remove());\n            }\n            count--;\n        };\n    }, []);\n}\nfunction createFocusGuard() {\n    const element = document.createElement(\"span\");\n    element.setAttribute(\"data-radix-focus-guard\", \"\");\n    element.tabIndex = 0;\n    element.style.outline = \"none\";\n    element.style.opacity = \"0\";\n    element.style.position = \"fixed\";\n    element.style.pointerEvents = \"none\";\n    return element;\n}\nvar Root = FocusGuards;\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWZvY3VzLWd1YXJkc0AxLjEuMV9AdHlwZXMrcmVhY3RAMTguMy4xMl9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1mb2N1cy1ndWFyZHMvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUI7QUFHdkIsSUFBSUMsUUFBUTtBQUVaLFNBQVNDLFlBQVlDLEtBQUE7SUFDbkJDO0lBQ0EsT0FBT0QsTUFBTUUsUUFBQTtBQUNmO0FBTUEsU0FBU0Q7SUFDREosNENBQUEsQ0FBVTtRQUNkLE1BQU1PLGFBQWFDLFNBQVNDLGdCQUFBLENBQWlCO1FBQzdDRCxTQUFTRSxJQUFBLENBQUtDLHFCQUFBLENBQXNCLGNBQWNKLFVBQUEsQ0FBVyxFQUFDLElBQUtLO1FBQ25FSixTQUFTRSxJQUFBLENBQUtDLHFCQUFBLENBQXNCLGFBQWFKLFVBQUEsQ0FBVyxFQUFDLElBQUtLO1FBQ2xFWDtRQUVBLE9BQU87WUFDTCxJQUFJQSxVQUFVLEdBQUc7Z0JBQ2ZPLFNBQVNDLGdCQUFBLENBQWlCLDRCQUE0QkksT0FBQSxDQUFRLENBQUNDLE9BQVNBLEtBQUtDLE1BQUE7WUFDL0U7WUFDQWQ7UUFDRjtJQUNGLEdBQUcsRUFBRTtBQUNQO0FBRUEsU0FBU1c7SUFDUCxNQUFNSSxVQUFVUixTQUFTUyxhQUFBLENBQWM7SUFDdkNELFFBQVFFLFlBQUEsQ0FBYSwwQkFBMEI7SUFDL0NGLFFBQVFHLFFBQUEsR0FBVztJQUNuQkgsUUFBUUksS0FBQSxDQUFNQyxPQUFBLEdBQVU7SUFDeEJMLFFBQVFJLEtBQUEsQ0FBTUUsT0FBQSxHQUFVO0lBQ3hCTixRQUFRSSxLQUFBLENBQU1HLFFBQUEsR0FBVztJQUN6QlAsUUFBUUksS0FBQSxDQUFNSSxhQUFBLEdBQWdCO0lBQzlCLE9BQU9SO0FBQ1Q7QUFFQSxJQUFNUyxPQUFPdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc3RhcnRlci1raXQvLi4vc3JjL0ZvY3VzR3VhcmRzLnRzeD9kNThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqIE51bWJlciBvZiBjb21wb25lbnRzIHdoaWNoIGhhdmUgcmVxdWVzdGVkIGludGVyZXN0IHRvIGhhdmUgZm9jdXMgZ3VhcmRzICovXG5sZXQgY291bnQgPSAwO1xuXG5mdW5jdGlvbiBGb2N1c0d1YXJkcyhwcm9wczogYW55KSB7XG4gIHVzZUZvY3VzR3VhcmRzKCk7XG4gIHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbn1cblxuLyoqXG4gKiBJbmplY3RzIGEgcGFpciBvZiBmb2N1cyBndWFyZHMgYXQgdGhlIGVkZ2VzIG9mIHRoZSB3aG9sZSBET00gdHJlZVxuICogdG8gZW5zdXJlIGBmb2N1c2luYCAmIGBmb2N1c291dGAgZXZlbnRzIGNhbiBiZSBjYXVnaHQgY29uc2lzdGVudGx5LlxuICovXG5mdW5jdGlvbiB1c2VGb2N1c0d1YXJkcygpIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlZGdlR3VhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmFkaXgtZm9jdXMtZ3VhcmRdJyk7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBlZGdlR3VhcmRzWzBdID8/IGNyZWF0ZUZvY3VzR3VhcmQoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVkZ2VHdWFyZHNbMV0gPz8gY3JlYXRlRm9jdXNHdWFyZCgpKTtcbiAgICBjb3VudCsrO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yYWRpeC1mb2N1cy1ndWFyZF0nKS5mb3JFYWNoKChub2RlKSA9PiBub2RlLnJlbW92ZSgpKTtcbiAgICAgIH1cbiAgICAgIGNvdW50LS07XG4gICAgfTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb2N1c0d1YXJkKCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1yYWRpeC1mb2N1cy1ndWFyZCcsICcnKTtcbiAgZWxlbWVudC50YWJJbmRleCA9IDA7XG4gIGVsZW1lbnQuc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUm9vdCA9IEZvY3VzR3VhcmRzO1xuXG5leHBvcnQge1xuICBGb2N1c0d1YXJkcyxcbiAgLy9cbiAgUm9vdCxcbiAgLy9cbiAgdXNlRm9jdXNHdWFyZHMsXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY291bnQiLCJGb2N1c0d1YXJkcyIsInByb3BzIiwidXNlRm9jdXNHdWFyZHMiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsImVkZ2VHdWFyZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5IiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiY3JlYXRlRm9jdXNHdWFyZCIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0YWJJbmRleCIsInN0eWxlIiwib3V0bGluZSIsIm9wYWNpdHkiLCJwb3NpdGlvbiIsInBvaW50ZXJFdmVudHMiLCJSb290Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.1_@types+react@18.3.12_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs\n");

/***/ })

};
;