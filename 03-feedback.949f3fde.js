function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function T(t){return c=t,a=setTimeout(x,e),l?b(t):u}function E(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=i}function x(){var t=p();if(E(t))return j(t);a=setTimeout(x,function(t){var n=e-(t-f);return s?v(n,i-(t-c)):n}(t))}function j(t){return a=void 0,g&&o?b(t):(o=r=void 0,u)}function O(){var t=p(),n=E(t);if(o=arguments,r=this,f=t,n){if(void 0===a)return T(f);if(s)return a=setTimeout(x,e),b(f)}return void 0===a&&(a=setTimeout(x,e)),u}return e=y(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},O.flush=function(){return void 0===a?u:j(p())},O}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea")};b.form.addEventListener("submit",(function(t){t.preventDefault(),console.log("Отправляем форму"),t.currentTarget.reset(),localStorage.removeItem("STORAGE_REY")})),b.textarea.addEventListener("input",t(e)((function(t){const e=t.target.value;console.log(e),localStorage.setItem("STORAGE_REY",e)}),500)),function(){const t=localStorage.getItem("STORAGE_REY");t&&(console.log(t),b.textarea.value=t)}();
//# sourceMappingURL=03-feedback.949f3fde.js.map
