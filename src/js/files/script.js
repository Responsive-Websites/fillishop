// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.querySelector('.top-header__close').addEventListener('click', function (e) {
  document.querySelector('.header__top').classList.add('_close');
});
