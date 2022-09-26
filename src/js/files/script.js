// Подключение функционала "Чертогов Фрилансера"
import { ids } from 'webpack';
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

// function bottomContentShowInit() {
//   if (document.querySelector('.header__bottom-menu')) {
//     let buttonsContent = document.querySelectorAll('.bottom-header__item');
//     let itemsContent = document.querySelectorAll('.bottom-menu__item');

//     if (buttonsContent && itemsContent) {
//       // for (let index = 0; index < buttonsContent.length; index++) {
//       //   buttonsContent[index].addEventListener('click', function (e) {
//       //     let dataContentValue = e.target.dataset.content;

//       //     itemsContent.forEach((item) => {
//       //       item.dataset.content == dataContentValue
//       //         ? item.classList.toggle('open-item')
//       //         : item.classList.remove('open-item');
//       //     });
//       //   });
//       // }

//       document.addEventListener('click', (e) => {
//         if (e.target.closest('.bottom-header__item')) {
//           let dataContentValue = e.target.dataset.content;
//           console.log('yes');

//           itemsContent.forEach((item) => {
//             item.dataset.content == dataContentValue
//               ? item.classList.toggle('open-item')
//               : item.classList.remove('open-item');
//           });
//         }
//       });
//     }
//   }
// }
// bottomContentShowInit();
