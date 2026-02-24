"use strict"

document.addEventListener('click', documentActions);

function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('.shanti__icon')) {
      document.documentElement.toggleAttribute('data-menu-open');
   }
}