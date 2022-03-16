(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./modules/global_variables.js");

require("./modules/menu_trigger.js");

require("./modules/main_nav.js");

require("./modules/scroll_event.js");

require("./modules/flickity.js");

require("./modules/currentyear.js");

require("./modules/filter.js");

},{"./modules/currentyear.js":2,"./modules/filter.js":3,"./modules/flickity.js":4,"./modules/global_variables.js":5,"./modules/main_nav.js":6,"./modules/menu_trigger.js":7,"./modules/scroll_event.js":8}],2:[function(require,module,exports){
"use strict";

var elem = document.querySelector('.js-year');
var currentYear = new Date().getFullYear();
elem.textContent = currentYear;

},{}],3:[function(require,module,exports){
"use strict";

var elem = document.querySelector('.js-filter-select input');

if (elem) {
  elem.addEventListener('focus', function (i) {
    elem.closest('.filter__pill').classList.add('focus');
  });
}

},{}],4:[function(require,module,exports){
"use strict";

var flickityelem = document.querySelectorAll('.js__flickity');

function flickity(x, elem) {
  if (elem !== null) {
    var flickityinner = elem.querySelector('.flickity-carousel');
    var flickitychildren = flickityinner.childElementCount;

    if (flickitychildren > 2 && x.matches) {
      new Flickity(flickityinner, {
        autoPlay: 5000,
        pageDots: false,
        prevNextButtons: false,
        freeScroll: false,
        cellAlign: 'left',
        setGallerySize: true,
        wrapAround: true
      });
      var contentsection = jQuery(flickityinner).closest('.content-section__item');
      contentsection[0].classList.add('content-section__item--flickable');
    } else {
      if (flickityinner.classList.contains('flickity-carousel--2x')) {
        flickityinner.className = "";
        flickityinner.classList.add('post-list', 'post-list--2x');
      } else if (flickityinner.classList.contains('flickity-carousel--3x')) {
        flickityinner.className = "";
        flickityinner.classList.add('post-list', 'post-list--3x');
      }
    }
  }

  ;
}

flickityelem.forEach(function (elem) {
  var x = window.matchMedia("(max-width: 700px)");
  flickity(x, elem);
});

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mq_tablet = exports.mq_small = void 0;
var mq_small = window.matchMedia("(max-width:560px)");
exports.mq_small = mq_small;
var mq_tablet = window.matchMedia("(max-width:700px)");
exports.mq_tablet = mq_tablet;

},{}],6:[function(require,module,exports){
"use strict";

var header = document.querySelector('header');
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

},{}],7:[function(require,module,exports){
"use strict";

// menu trigger -------------------------------------------------
var triggermenu = document.querySelector('.trigger-menu');
var menu = document.querySelector('.mobile-menu');
var body = document.getElementsByTagName("BODY")[0];
var isopen = false;

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

},{}],8:[function(require,module,exports){
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

},{"./global_variables.js":5}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9tYWluLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9jdXJyZW50eWVhci5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvZmlsdGVyLmpzIiwiYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlja2l0eS5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvZ2xvYmFsX3ZhcmlhYmxlcy5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWFpbl9uYXYuanMiLCJhc3NldHMvc2NyaXB0cy9tb2R1bGVzL21lbnVfdHJpZ2dlci5qcyIsImFzc2V0cy9zY3JpcHRzL21vZHVsZXMvc2Nyb2xsX2V2ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7QUNOQSxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixDQUFiO0FBQ0EsSUFBTSxXQUFXLEdBQUUsSUFBSSxJQUFKLEdBQVcsV0FBWCxFQUFuQjtBQUNBLElBQUksQ0FBQyxXQUFMLEdBQW1CLFdBQW5COzs7OztBQ0ZBLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHlCQUF2QixDQUFiOztBQUNBLElBQUksSUFBSixFQUFVO0FBQ04sRUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBOEIsVUFBUyxDQUFULEVBQVc7QUFDckMsSUFBQSxJQUFJLENBQUMsT0FBTCxDQUFhLGVBQWIsRUFBOEIsU0FBOUIsQ0FBd0MsR0FBeEMsQ0FBNEMsT0FBNUM7QUFDSCxHQUZEO0FBR0g7Ozs7O0FDSkQsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLGVBQTFCLENBQXJCOztBQUdBLFNBQVMsUUFBVCxDQUFrQixD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bEJEOztBQW9CQSxRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0ICcuL21vZHVsZXMvZ2xvYmFsX3ZhcmlhYmxlcy5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9tZW51X3RyaWdnZXIuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvbWFpbl9uYXYuanMnO1xuaW1wb3J0ICcuL21vZHVsZXMvc2Nyb2xsX2V2ZW50LmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL2ZsaWNraXR5LmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL2N1cnJlbnR5ZWFyLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL2ZpbHRlci5qcyc7IiwiY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy15ZWFyJyk7XG5jb25zdCBjdXJyZW50WWVhcj0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuZWxlbS50ZXh0Q29udGVudCA9IGN1cnJlbnRZZWFyO1xuIiwiY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1maWx0ZXItc2VsZWN0IGlucHV0Jyk7XG5pZiAoZWxlbSkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLGZ1bmN0aW9uKGkpe1xuICAgICAgICBlbGVtLmNsb3Nlc3QoJy5maWx0ZXJfX3BpbGwnKS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgIH0pXG59XG4iLCJcbmNvbnN0IGZsaWNraXR5ZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qc19fZmxpY2tpdHknKTtcblxuXG5mdW5jdGlvbiBmbGlja2l0eSh4LCBlbGVtKXtcblxuICBpZiAoZWxlbSAhPT0gbnVsbCl7XG4gICAgbGV0IGZsaWNraXR5aW5uZXIgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5mbGlja2l0eS1jYXJvdXNlbCcpO1xuICAgIGxldCBmbGlja2l0eWNoaWxkcmVuID0gZmxpY2tpdHlpbm5lci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICBpZiAoZmxpY2tpdHljaGlsZHJlbiA+IDIgJiYgeC5tYXRjaGVzKXtcbiAgICAgIG5ldyBGbGlja2l0eSggZmxpY2tpdHlpbm5lciwge1xuICAgICAgICBhdXRvUGxheTogNTAwMCxcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxuICAgICAgICBmcmVlU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgY2VsbEFsaWduOiAnbGVmdCcsXG4gICAgICAgIHNldEdhbGxlcnlTaXplOiB0cnVlLFxuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGxldCBjb250ZW50c2VjdGlvbiA9IGpRdWVyeShmbGlja2l0eWlubmVyKS5jbG9zZXN0KCcuY29udGVudC1zZWN0aW9uX19pdGVtJyk7XG4gICAgICBjb250ZW50c2VjdGlvblswXS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXNlY3Rpb25fX2l0ZW0tLWZsaWNrYWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZmxpY2tpdHlpbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsaWNraXR5LWNhcm91c2VsLS0yeCcpKXtcbiAgICAgICAgZmxpY2tpdHlpbm5lci5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICBmbGlja2l0eWlubmVyLmNsYXNzTGlzdC5hZGQoJ3Bvc3QtbGlzdCcsICdwb3N0LWxpc3QtLTJ4Jyk7XG4gICAgICB9IGVsc2UgaWYgKGZsaWNraXR5aW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlja2l0eS1jYXJvdXNlbC0tM3gnKSkge1xuICAgICAgICBmbGlja2l0eWlubmVyLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgIGZsaWNraXR5aW5uZXIuY2xhc3NMaXN0LmFkZCgncG9zdC1saXN0JywgJ3Bvc3QtbGlzdC0tM3gnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbn1cblxuXG5mbGlja2l0eWVsZW0uZm9yRWFjaChmdW5jdGlvbihlbGVtKXtcbiAgdmFyIHggPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDcwMHB4KVwiKVxuICBmbGlja2l0eSh4LCBlbGVtKTtcbn0pOyIsImV4cG9ydCBjb25zdCBtcV9zbWFsbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDo1NjBweClcIik7XG5leHBvcnQgY29uc3QgbXFfdGFibGV0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOjcwMHB4KVwiKTsiLCJjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1tYWluJyk7XG5jb25zdCBtZW51SXRlbXMgPSBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX21lbnVfX2l0ZW0nKTtcbm1lbnVJdGVtcy5mb3JFYWNoKCAoaSkgPT4ge1xuICAgIGxldCBtZW51aXRlbSA9IGk7XG4gICAgbGV0IG1haW5saW5rID0gaS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51X19pdGVtX19saW5rJyk7XG4gICAgbGV0IGRkID0gaS5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcbiAgICBtZW51aXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKSA9PiB7XG4gICAgICAgIG1lbnVpdGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmstYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgbWVudWl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCkgPT4ge1xuICAgICAgICBtZW51aXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdsaW5rLWFjdGl2ZScpO1xuICAgIH0pO1xufSApOyIsIi8vIG1lbnUgdHJpZ2dlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IHRyaWdnZXJtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaWdnZXItbWVudScpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudScpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXTtcbnZhciBpc29wZW4gPSBmYWxzZTtcblxuY29uc3QgbWVudV9vcGVuID0gKCkgPT4ge1xuICBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyx0cnVlKTtcbiAgaXNvcGVuID0gdHJ1ZTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2UnKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrZWQnKTtcbiAgdHJpZ2dlcm1lbnUuY2xhc3NMaXN0LmFkZCgndHJpZ2dlci1vcGVuJyk7XG4gIHRyaWdnZXJtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3RyaWdnZXItY2xvc2UnKTtcbn1cbmNvbnN0IG1lbnVfY2xvc2UgPSAoKSA9PiB7XG4gIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLGZhbHNlKTtcbiAgaXNvcGVuID0gZmFsc2U7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9ja2VkJyk7XG4gIHRyaWdnZXJtZW51LmNsYXNzTGlzdC5hZGQoJ3RyaWdnZXItY2xvc2UnKTtcbiAgdHJpZ2dlcm1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndHJpZ2dlci1vcGVuJyk7XG59XG5cbnRyaWdnZXJtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICBpc29wZW4gPyBtZW51X2Nsb3NlKCkgOiBtZW51X29wZW4oKTtcbn0pO1xuXG50cmlnZ2VybWVudS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsZnVuY3Rpb24oZSl7XG4gIGlmKCBlLmtleSA9PSAnRXNjYXBlJyAmJiBpc29wZW4gPT0gdHJ1ZSApe1xuICAgIG1lbnVfY2xvc2UoKTtcbiAgfVxufSk7IiwiLy8gc2Nyb2xsIGV2ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuaW1wb3J0ICogYXMgZ3YgZnJvbSAnLi9nbG9iYWxfdmFyaWFibGVzLmpzJztcblxuY29uc3QgYmFja3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrdG9wJyk7XG5jb25zdCBiYWNrdG9waW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja3RvcF9faW5uZXInKTtcbmNvbnN0IGNvbnRlbnRzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IGNvbnRlbnRvZmZzZXQgPSBjb250ZW50c3RhcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgcGFnZVlPZmZzZXQ7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBhbGxlbGVtcyA9IFtiYWNrdG9wXTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgc2Nyb2xsZGVsYXk7XG52YXIgaXNpdGRvd247XG5cbmNvbnN0IGJhY2t0b3BmdW5jID0gKCkgPT4ge1xuICBpZiAoaXNpdGRvd24pe1xuICAgIGZhZGVpbigpO1xuICAgIGlzaXRkb3duID0gZmFsc2U7XG4gIH1cbiAgY2xlYXJUaW1lb3V0KHNjcm9sbGRlbGF5KTtcbiAgc2Nyb2xsZGVsYXkgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgZmFkZW91dCgpO1xuICAgIGlzaXRkb3duID0gdHJ1ZTtcbiAgfSwxNTAwKTtcbn1cblxuY29uc3QgZmFkZW91dCA9ICgpID0+IHtcbiAgYmFja3RvcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGVvdXQnKTtcbiAgYmFja3RvcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVpbicpO1xufTtcbmNvbnN0IGZhZGVpbiA9ICgpID0+IHtcbiAgYmFja3RvcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVvdXQnKTtcbiAgYmFja3RvcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGVpbicpO1xufTtcblxuY29uc3QgaGlkZXNob3cgPSBmdW5jdGlvbigpe1xuICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPCBjb250ZW50b2Zmc2V0ICl7XG4gICAgICAgIGFsbGVsZW1zLmZvckVhY2goIChlKSA9PiB7XG4gICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLS1zaGFsbG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxsZWxlbXMuZm9yRWFjaCggKGUpID0+IHtcbiAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItLXNoYWxsb3cnKTtcbiAgICB9XG4gICAgaWYoZ3YubXFfdGFibGV0Lm1hdGNoZXMpe1xuICAgIH1cbiAgfVxufTtcblxuaGlkZXNob3coKTsiXX0=
