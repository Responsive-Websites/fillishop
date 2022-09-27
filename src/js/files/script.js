// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

document.querySelector('.top-header__close').addEventListener('click', function (e) {
  document.querySelector('.header__top').classList.add('_close');
});

export function searchInit() {
  if (document.querySelector('.main-middle-header__search')) {
    document.addEventListener('click', function (e) {
      if (e.target.closest('.top-middle-header__search')) {
        document.querySelector('.main-middle-header__search').classList.toggle('search-open');
        if (document.querySelector('.main-middle-header__search').classList.contains('search-open')) {
          document.querySelector('.main-middle-header__input').focus();
        }
      } else if (
        !e.target.closest('.top-middle-header__search') &&
        !e.target.closest('.main-middle-header__search')
      ) {
        if (document.querySelector('.main-middle-header__search').classList.contains('search-open')) {
          document.querySelector('.main-middle-header__search').classList.remove('search-open');
        }
      }
    });
  }
}
searchInit();

function bottomContentShowInit() {
  if (document.querySelector('.header__bottom-menu')) {
    let buttonsContent = document.querySelectorAll('.bottom-header__item');
    let itemsContent = document.querySelectorAll('.bottom-menu__item');

    if (buttonsContent && itemsContent) {
      document.addEventListener('click', (e) => {
        let dataContentValue = e.target.dataset.content;
        if (e.target.closest('.bottom-header__item')) {
          itemsContent.forEach((item) => {
            item.dataset.content == dataContentValue
              ? item.classList.toggle('open-item')
              : item.classList.remove('open-item');
          });
        } else if (!e.target.closest('.bottom-header__item') && !e.target.closest('.bottom-menu__item')) {
          itemsContent.forEach((item) => {
            if (item.classList.contains('open-item')) {
              item.classList.remove('open-item');
            }
          });
        } else if (e.target.closest('.bottom-menu__back')) {
          itemsContent.forEach((item) => {
            if (item.classList.contains('open-item')) {
              item.classList.remove('open-item');
            }
          });
        }
      });
    }
  }
}
bottomContentShowInit();

document.querySelector('.menu__catalog-button').addEventListener('click', function (e) {
  document.querySelector('.bottom-header__inner').classList.add('open-items');
  document.documentElement.classList.add('lock');
});

window.addEventListener('resize', function (e) {
  let itemsContent = document.querySelectorAll('.bottom-menu__item');
  if (window.innerWidth <= 991) {
    itemsContent.forEach((item) => {
      item.classList.remove('open-item');
    });
  }
});

document.addEventListener('click', function (e) {
  if (
    e.target.closest('.bottom-header__back') &&
    document.querySelector('.bottom-header__inner').classList.contains('open-items')
  ) {
    document.querySelector('.bottom-header__inner').classList.remove('open-items');
  }
});
