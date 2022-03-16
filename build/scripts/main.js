(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./modules/global_variables.js");

require("./modules/menu_trigger.js");

require("./modules/main_nav.js");

require("./modules/scroll_event.js");

require("./modules/currentyear.js");

},{"./modules/currentyear.js":2,"./modules/global_variables.js":3,"./modules/main_nav.js":4,"./modules/menu_trigger.js":5,"./modules/scroll_event.js":6}],2:[function(require,module,exports){
"use strict";

var elem_year = document.querySelector('.js-year');

if (elem_year) {
  var currentYear = new Date().getFullYear();
  elem.textContent = currentYear;
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mq_tablet = exports.mq_small = void 0;
var mq_small = window.matchMedia("(max-width:560px)");
exports.mq_small = mq_small;
var mq_tablet = window.matchMedia("(max-width:700px)");
exports.mq_tablet = mq_tablet;

},{}],4:[function(require,module,exports){
"use strict";

var header = document.querySelector('header');

if (header) {
  var menu = document.getElementById('menu-main');
  var menuItems = menu.querySelectorAll('.header__menu__item');
  menuItems.forEach(function (i) {
    var menuitem = i;
    var mainlink = i.querySelector('.header__menu__item__link');
    var dd = i.querySelector('.dropdown');
    menuitem.addEventListener('mouseenter', function () {
      menuitem.classList.add('link-active');
    });
    menuitem.addEventListener('mouseleave', function () {
      menuitem.classList.remove('link-active');
    });
  });
}

},{}],5:[function(require,module,exports){
"use strict";

// menu trigger -------------------------------------------------
var triggermenu = document.querySelector('.trigger-menu');
var menu = document.querySelector('.mobile-menu');
var body = document.getElementsByTagName("BODY")[0];
var isopen = false;

if (triggermenu) {
  var menu_open = function menu_open() {
    menu.setAttribute('aria-pressed', true);
    isopen = true;
    menu.classList.add('open');
    menu.classList.remove('close');
    body.classList.add('locked');
    triggermenu.classList.add('trigger-open');
    triggermenu.classList.remove('trigger-close');
  };

  var menu_close = function menu_close() {
    menu.setAttribute('aria-pressed', false);
    isopen = false;
    menu.classList.add('close');
    menu.classList.remove('open');
    body.classList.remove('locked');
    triggermenu.classList.add('trigger-close');
    triggermenu.classList.remove('trigger-open');
  };

  triggermenu.addEventListener('click', function () {
    isopen ? menu_close() : menu_open();
  });
  triggermenu.addEventListener('keyup', function (e) {
    if (e.key == 'Escape' && isopen == true) {
      menu_close();
    }
  });
}

;

},{}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var gv = _interopRequireWildcard(require("./global_variables.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// scroll event ---------------------------------------------
var backtop = document.querySelector('.backtop');
var backtopinner = document.querySelector('.backtop__inner');
var contentstart = document.querySelector('main');
var contentoffset = contentstart.getBoundingClientRect().top + pageYOffset;
var header = document.querySelector('.header');
var allelems = [backtop];
var body = document.querySelector('body');
var scrolldelay;
var isitdown;

var backtopfunc = function backtopfunc() {
  if (isitdown) {
    fadein();
    isitdown = false;
  }

  clearTimeout(scrolldelay);
  scrolldelay = setTimeout(function () {
    fadeout();
    isitdown = true;
  }, 1500);
};

var fadeout = function fadeout() {
  backtopinner.classList.add('fadeout');
  backtopinner.classList.remove('fadein');
};

var fadein = function fadein() {
  backtopinner.classList.remove('fadeout');
  backtopinner.classList.add('fadein');
};

var hideshow = function hideshow() {
  window.onscroll = function () {
    if (window.pageYOffset < contentoffset) {
      allelems.forEach(function (e) {
        e.classList.remove('visible');
        e.classList.add('hidden');
      });
      header.classList.remove('header--shallow');
    } else {
      allelems.forEach(function (e) {
        e.classList.add('visible');
        e.classList.remove('hidden');
      });
      header.classList.add('header--shallow');
    }

    if (gv.mq_tablet.matches) {}
  };
};

hideshow();

},{"./global_variables.js":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9tYWluLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9jdXJyZW50eWVhci5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsX3ZhcmlhYmxlcy5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWFpbl9uYXYuanMiLCJhc3NldHMvc2NyaXB0cy9tb2R1bGVzL21lbnVfdHJpZ2dlci5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvc2Nyb2xsX2V2ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7QUNKQSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixDQUFsQjs7QUFFQSxJQUFHLFNBQUgsRUFBYTtBQUNULE1BQU0sV0FBVyxHQUFFLElBQUksSUFBSixHQUFXLFdBQVgsRUFBbkI7QUFDQSxFQUFBLElBQUksQ0FBQyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0g7Ozs7Ozs7OztBQ0xNLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFQLENBQWtCLG1CQUFsQixDQUFqQjs7QUFDQSxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBUCxDQUFrQixtQkFBbEIsQ0FBbEI7Ozs7OztBQ0RQLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQWY7O0FBQ0EsSUFBSSxNQUFKLEVBQVc7QUFDUCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFiO0FBQ0EsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFMLENBQXNCLHFCQUF0QixDQUFsQjtBQUNBLEVBQUEsU0FBUyxDQUFDLE9BQVYsQ0FBbUIsVUFBQyxDQUFELEVBQU87QUFDdEIsUUFB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QyxDQUFDLFNBQUYsQ0FBWSxNQUFaLENBQW1CLFNBQW5CO0FBQ0EsUUFBQSxDQUFDLENBQUMsU0FBRixDQUFZLEdBQVosQ0FBZ0IsUUFBaEI7QUFDRCxPQUhEO0FBSUYsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixpQkFBeEI7QUFDRCxLQU5ELE1BTU87QUFDSCxNQUFBLFFBQVEsQ0FBQyxPQUFULENBQWtCLFVBQUMsQ0FBRCxFQUFPO0FBQ3ZCLFFBQUEsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxHQUFaLENBQWdCLFNBQWhCO0FBQ0EsUUFBQSxDQUFDLENBQUMsU0FBRixDQUFZLE1BQVosQ0FBbUIsUUFBbkI7QUFDRCxPQUhEO0FBSUYsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixpQkFBckI7QUFDRDs7QUFDRCxRQUFHLEVBQUUsQ0FBQyxTQUFILENBQWEsT0FBaEIsRUFBd0IsQ0FDdkI7QUFDRixHQWhCRDtBQWlCRCxDQWxCRDs7QUFvQkEsUUFBUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCAnLi9tb2R1bGVzL2dsb2JhbF92YXJpYWJsZXMuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvbWVudV90cmlnZ2VyLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL21haW5fbmF2LmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL3Njcm9sbF9ldmVudC5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9jdXJyZW50eWVhci5qcyc7IiwiY29uc3QgZWxlbV95ZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXllYXInKTtcblxuaWYoZWxlbV95ZWFyKXtcbiAgICBjb25zdCBjdXJyZW50WWVhcj0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGVsZW0udGV4dENvbnRlbnQgPSBjdXJyZW50WWVhcjtcbn0iLCJleHBvcnQgY29uc3QgbXFfc21hbGwgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6NTYwcHgpXCIpO1xuZXhwb3J0IGNvbnN0IG1xX3RhYmxldCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDo3MDBweClcIik7IiwiY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5pZiAoaGVhZGVyKXtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbWFpbicpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fbWVudV9faXRlbScpO1xuICAgIG1lbnVJdGVtcy5mb3JFYWNoKCAoaSkgPT4ge1xuICAgICAgICBsZXQgbWVudWl0ZW0gPSBpO1xuICAgICAgICBsZXQgbWFpbmxpbmsgPSBpLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnVfX2l0ZW1fX2xpbmsnKTtcbiAgICAgICAgbGV0IGRkID0gaS5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICAgICAgbWVudWl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCkgPT4ge1xuICAgICAgICAgICAgbWVudWl0ZW0uY2xhc3NMaXN0LmFkZCgnbGluay1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1lbnVpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpID0+IHtcbiAgICAgICAgICAgIG1lbnVpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmstYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0gKTtcbn0iLCIvLyBtZW51IHRyaWdnZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCB0cmlnZ2VybWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlnZ2VyLW1lbnUnKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XG52YXIgaXNvcGVuID0gZmFsc2U7XG5cbmlmKHRyaWdnZXJtZW51KXtcblxuICBjb25zdCBtZW51X29wZW4gPSAoKSA9PiB7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsdHJ1ZSk7XG4gICAgaXNvcGVuID0gdHJ1ZTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrZWQnKTtcbiAgICB0cmlnZ2VybWVudS5jbGFzc0xpc3QuYWRkKCd0cmlnZ2VyLW9wZW4nKTtcbiAgICB0cmlnZ2VybWVudS5jbGFzc0xpc3QucmVtb3ZlKCd0cmlnZ2VyLWNsb3NlJyk7XG4gIH1cbiAgY29uc3QgbWVudV9jbG9zZSA9ICgpID0+IHtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyxmYWxzZSk7XG4gICAgaXNvcGVuID0gZmFsc2U7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9ja2VkJyk7XG4gICAgdHJpZ2dlcm1lbnUuY2xhc3NMaXN0LmFkZCgndHJpZ2dlci1jbG9zZScpO1xuICAgIHRyaWdnZXJtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3RyaWdnZXItb3BlbicpO1xuICB9XG5cbiAgdHJpZ2dlcm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgaXNvcGVuID8gbWVudV9jbG9zZSgpIDogbWVudV9vcGVuKCk7XG4gIH0pO1xuXG4gIHRyaWdnZXJtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxmdW5jdGlvbihlKXtcbiAgICBpZiggZS5rZXkgPT0gJ0VzY2FwZScgJiYgaXNvcGVuID09IHRydWUgKXtcbiAgICAgIG1lbnVfY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xuXG59OyIsIi8vIHNjcm9sbCBldmVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCAqIGFzIGd2IGZyb20gJy4vZ2xvYmFsX3ZhcmlhYmxlcy5qcyc7XG5cbmNvbnN0IGJhY2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja3RvcCcpO1xuY29uc3QgYmFja3RvcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2t0b3BfX2lubmVyJyk7XG5jb25zdCBjb250ZW50c3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBjb250ZW50b2Zmc2V0ID0gY29udGVudHN0YXJ0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHBhZ2VZT2Zmc2V0O1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgYWxsZWxlbXMgPSBbYmFja3RvcF07XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IHNjcm9sbGRlbGF5O1xudmFyIGlzaXRkb3duO1xuXG5jb25zdCBiYWNrdG9wZnVuYyA9ICgpID0+IHtcbiAgaWYgKGlzaXRkb3duKXtcbiAgICBmYWRlaW4oKTtcbiAgICBpc2l0ZG93biA9IGZhbHNlO1xuICB9XG4gIGNsZWFyVGltZW91dChzY3JvbGxkZWxheSk7XG4gIHNjcm9sbGRlbGF5ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgIGZhZGVvdXQoKTtcbiAgICBpc2l0ZG93biA9IHRydWU7XG4gIH0sMTUwMCk7XG59XG5cbmNvbnN0IGZhZGVvdXQgPSAoKSA9PiB7XG4gIGJhY2t0b3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdmYWRlb3V0Jyk7XG4gIGJhY2t0b3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlaW4nKTtcbn07XG5jb25zdCBmYWRlaW4gPSAoKSA9PiB7XG4gIGJhY2t0b3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlb3V0Jyk7XG4gIGJhY2t0b3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdmYWRlaW4nKTtcbn07XG5cbmNvbnN0IGhpZGVzaG93ID0gZnVuY3Rpb24oKXtcbiAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0IDwgY29udGVudG9mZnNldCApe1xuICAgICAgICBhbGxlbGVtcy5mb3JFYWNoKCAoZSkgPT4ge1xuICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tc2hhbGxvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbGVsZW1zLmZvckVhY2goIChlKSA9PiB7XG4gICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLS1zaGFsbG93Jyk7XG4gICAgfVxuICAgIGlmKGd2Lm1xX3RhYmxldC5tYXRjaGVzKXtcbiAgICB9XG4gIH1cbn07XG5cbmhpZGVzaG93KCk7Il19
