import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';
dinamicAdaptive();
//* ----------------------------------------------------------------------------
import { userMenu } from "./layouts/layouts.js";
userMenu();
//* ----------------------------------------------------------------------------
const toggleWrap = document.querySelector('.toggle-button');
const sidebarMenu = document.querySelector('.sidebar-menu');
toggleWrap.addEventListener('click', addClassOpen);
const menuPageSide = document.querySelector('.toggle-button__toggle-menu');
function addClassOpen() {
	menuPageSide.classList.toggle('_open');
	sidebarMenu.classList.toggle('_opened-menu');;
}

//* ----------------------------------------------------------------------------
console.log("%c РОССИЯ ", "background: blue; color: yellow; font-size: x-large; border-left: 5px solid black; border-top: 30px solid white; border-right: 2px solid black; border-bottom: 30px solid red;");
//* ----------------------------------------------------------------------------
