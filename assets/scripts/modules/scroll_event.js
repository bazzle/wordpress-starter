// scroll event ---------------------------------------------
import * as gv from './global_variables.js';

const backtop = document.querySelector('.backtop');
const backtopinner = document.querySelector('.backtop__inner');
const contentstart = document.querySelector('main');
const contentoffset = contentstart.getBoundingClientRect().top + pageYOffset;
const header = document.querySelector('.header');
const allelems = [backtop];
const body = document.querySelector('body');
let scrolldelay;
var isitdown;

const backtopfunc = () => {
  if (isitdown){
    fadein();
    isitdown = false;
  }
  clearTimeout(scrolldelay);
  scrolldelay = setTimeout(function(){
    fadeout();
    isitdown = true;
  },1500);
}

const fadeout = () => {
  backtopinner.classList.add('fadeout');
  backtopinner.classList.remove('fadein');
};
const fadein = () => {
  backtopinner.classList.remove('fadeout');
  backtopinner.classList.add('fadein');
};

const hideshow = function(){
  window.onscroll = () => {
    if ( window.pageYOffset < contentoffset ){
        allelems.forEach( (e) => {
          e.classList.remove('visible');
          e.classList.add('hidden');
        });
      header.classList.remove('header--shallow');
    } else {
        allelems.forEach( (e) => {
          e.classList.add('visible');
          e.classList.remove('hidden');
        });
      header.classList.add('header--shallow');
    }
    if(gv.mq_tablet.matches){
    }
  }
};

hideshow();