var animationManager=function(){function n(n){for(var t=0,e=n.target;t<F;)w[t].animation===e&&(w.splice(t,1),t-=1,F-=1,e.isPaused||a()),t+=1}function t(n,t){if(!n)return null;for(var e=0;e<F;){if(w[e].elem==n&&null!==w[e].elem)return w[e].animation;e+=1}var a=new AnimationItem;return a.setData(n,t),i(a,n),a}function e(){q+=1,P()}function a(){q-=1,0===q&&(T=!0)}function i(t,i){t.addEventListener("destroy",n),t.addEventListener("_active",e),t.addEventListener("_idle",a),w.push({elem:i,animation:t}),F+=1}function o(n){var t=new AnimationItem;return i(t,null),t.setParams(n),t}function r(n,t){var e;for(e=0;e<F;e+=1)w[e].animation.setSpeed(n,t)}function m(n,t){var e;for(e=0;e<F;e+=1)w[e].animation.setDirection(n,t)}function u(n){var t;for(t=0;t<F;t+=1)w[t].animation.play(n)}function s(n,t){E=Date.now();var e;for(e=0;e<F;e+=1)w[e].animation.moveFrame(n,t)}function f(n){var t,e=n-E;for(t=0;t<F;t+=1)w[t].animation.advanceTime(e);E=n,T||requestAnimationFrame(f)}function c(n){E=n,requestAnimationFrame(f)}function v(n){var t;for(t=0;t<F;t+=1)w[t].animation.pause(n)}function d(n,t,e){var a;for(a=0;a<F;a+=1)w[a].animation.goToAndStop(n,t,e)}function l(n){var t;for(t=0;t<F;t+=1)w[t].animation.stop(n)}function p(n){var t;for(t=0;t<F;t+=1)w[t].animation.togglePause(n)}function g(n){var t;for(t=0;t<F;t+=1)w[t].animation.destroy(n)}function y(n,e,a){var i,o=document.getElementsByClassName("bodymovin"),r=o.length;for(i=0;i<r;i+=1)a&&o[i].setAttribute("data-bm-type",a),t(o[i],n);if(e&&0===r){a||(a="svg");var m=document.getElementsByTagName("body")[0];m.innerHTML="";var u=document.createElement("div");u.style.width="100%",u.style.height="100%",u.setAttribute("data-bm-type",a),m.appendChild(u),t(u,n)}}function A(){var n;for(n=0;n<F;n+=1)w[n].animation.resize()}function h(){requestAnimationFrame(c)}function P(){T&&(T=!1,Performance&&Performance.now?c(Performance.now):requestAnimationFrame(c))}var b={},w=[],E=0,F=0,T=!0,q=0;return setTimeout(h,0),b.registerAnimation=t,b.loadAnimation=o,b.setSpeed=r,b.setDirection=m,b.play=u,b.moveFrame=s,b.pause=v,b.stop=l,b.togglePause=p,b.searchAnimations=y,b.resize=A,b.start=h,b.goToAndStop=d,b.destroy=g,b}();