/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.swiper')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.swiper-block__slider ', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 0,
      autoHeight: true,
      speed: 900,
      autoplay: {
        delay: 4000,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next',
      // },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        390: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 3,
        },
        1268: {
          slidesPerView: 4,
        },
      },

      // События
      on: {},
    });

    const productTbumbs = new Swiper('.thumbs-images__slider ', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay, Thumbs],
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 11,
      direction: 'vertical',
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      navigation: {
        prevEl: '.thumbs-images__slider-next',
        nextEl: '.thumbs-images__slider-prev',
      },

      // Брейкпоинты

      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //   },
      //   390: {
      //     slidesPerView: 2,
      //   },

      //   992: {
      //     slidesPerView: 3,
      //   },
      //   1268: {
      //     slidesPerView: 4,
      //   },
      // },

      // События
      on: {},
    });
    const productPreviewSlider = new Swiper('.main-preview__slider ', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay, Thumbs],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 14,
      thumbs: {
        swiper: productTbumbs,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next',
      // },

      // Брейкпоинты

      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //   },
      //   390: {
      //     slidesPerView: 2,
      //   },

      //   992: {
      //     slidesPerView: 3,
      //   },
      //   1268: {
      //     slidesPerView: 4,
      //   },
      // },

      // События
      on: {},
    });
    new Swiper('.thumbs-videos__slider ', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 14,
      direction: 'vertical',
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      navigation: {
        prevEl: '.thumbs-videos__slider-next ',
        nextEl: '.thumbs-videos__slider-prev',
      },

      // Брейкпоинты

      // breakpoints: {
      //   320: {
      //     slidesPerView: 1,
      //   },
      //   390: {
      //     slidesPerView: 2,
      //   },

      //   992: {
      //     slidesPerView: 3,
      //   },
      //   1268: {
      //     slidesPerView: 4,
      //   },
      // },

      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
