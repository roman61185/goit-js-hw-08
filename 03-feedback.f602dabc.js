var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,f,u,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),l?b(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=r}function T(){var e=m();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return g?d(n,r-(e-c)):n}(e))}function h(e){return f=void 0,y&&i?b(e):(i=o=void 0,a)}function w(){var e=m(),n=S(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(g)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,r=(g="maxWait"in n)?s(p(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=o=f=void 0},w.flush=function(){return void 0===f?a:h(m())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),b=y.querySelector('input[name="email"]'),j=y.querySelector('textarea[name="message"]');let S={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(b.value=t.email||"",j.value=t.message||"",S.email=t.email||"",S.message=t.message||"")}(),y.addEventListener("input",t((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S)),console.log(S)}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),console.log(S)}));
//# sourceMappingURL=03-feedback.f602dabc.js.map