window.onload = function () {

  // Вложенное меню
  function submenu() {
    let item = $('.header__has-children');
    let submenu = $('.header__submenu');
    item.on('click', function (e) {
      e.preventDefault();
      let itemCurrent = $(this);
      let submenuCurrent = itemCurrent.find('.header__submenu');
      if ($(window).width() < 1050) {
        if (!$(this).hasClass('active')) {
          item.removeClass('active');
          itemCurrent.addClass('active');
          submenu.stop().slideUp().removeClass('open');
          submenuCurrent.stop().slideDown().addClass('open');
        }else {
          itemCurrent.removeClass('active');
          submenuCurrent.stop().slideUp().removeClass('open');
        }
      }
    })
    hideSubmenu();
    $(window).resize(function () {
      hideSubmenu();
    });
    function hideSubmenu() {
      if ($(window).width() >= 1050) {
        item.removeClass('active');
        submenu.removeClass('open').attr('style','');
      }
    }
  }
  submenu();

  // Липкое меню.
  function stikyMenu(header) {
    let headerTop = header.offset().top;
    headerToggleClass();
    $(window).scroll(function () {
      headerToggleClass();
    });
    function headerToggleClass() {
      if ($(window).scrollTop() > headerTop + 200) {
        header.addClass('sticky');
      } else if ($(window).scrollTop() <= headerTop) {
        header.removeClass('sticky');
      }
    }
  };
  stikyMenu($('#headerSticky'));

  // Swiper | Слайдер в блоке "бани"
  if ($('#bathhouseSlider').length) {
    const bathhouseSlider = new Swiper('#bathhouseSlider', {
      slidesPerView: 1,
      spaceBetween: 20,
      // threshold: 10,
      // allowTouchMove: true,
      simulateTouch: false,
      navigation: {
        nextEl: '.bathhouse__arrow--next',
        prevEl: '.bathhouse__arrow--prev',
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
          // allowTouchMove: false,
        },
        1050: {
          slidesPerView: 3,
          // allowTouchMove: false,
        }
      }
    });
  }

  // Swiper | Слайдер "акции"
  if ($('#salesSlider').length) {
    const salesSlider = new Swiper('#salesSlider', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.sales__pagination',
        clickable: true,
      },
    });
  }

  // Swiper | Слайдер "выбрать баню"
  if ($('#selectBathhouseSlider').length) {
    const selectBathhouseSlider = new Swiper('#selectBathhouseSlider', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      speed: 1000,
      pagination: {
        el: '.select-bathhouse__pagination',
        clickable: true,
      },
    });
  }

  // Swiper | Слайдер "добавить услуги"
  if ($('#selectServicesSlider').length) {
    const selectServicesSlider = new Swiper('#selectServicesSlider', {
      slidesPerView: 1,
      spaceBetween: 20,
      // threshold: 10,
      simulateTouch: false,
      navigation: {
        nextEl: '.select-services__arrow--next',
        prevEl: '.select-services__arrow--prev',
      },
      // allowTouchMove: true,
      mousewheel: true,
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          // allowTouchMove: false,
        },
        1050: {
          slidesPerView: 4,
          // allowTouchMove: false,
        }
      }
    });
  }

  // Air Datepicker | Календарь
  new AirDatepicker('#calendar', {
    inline: true,
    prevHtml: `<?xml version="1.0" encoding="UTF-8"?>
      <svg viewBox="0 0 60 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>long-arrow-right</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="page002" transform="translate(-1280.000000, -1608.000000)" fill="#554639" fill-rule="nonzero">
                  <g id="long-arrow-right" transform="translate(1310.000000, 1617.841607) scale(-1, 1) translate(-1310.000000, -1617.841607) translate(1280.000000, 1608.000000)">
                      <path d="M49.2598112,1.38326784 C50.8385783,2.66334925 52.1186597,4.24211633 53.5267493,5.73554464 C54.2094594,6.46092411 54.8921694,7.18630358 55.7028877,7.7836749 C56.4709365,8.38104623 57.4096629,8.85040941 58.0497036,9.57578888 C58.3910586,10.0024827 58.9457606,10.2158296 59.5004625,10.0024827 C59.9271563,9.83180516 60.1831726,9.27710322 59.8418176,8.89307879 C59.1164381,8.08236056 58.2203811,7.52765862 57.3669935,6.88761791 C56.5136059,6.24757721 55.7882264,5.52219774 55.062847,4.75414889 C53.6547574,3.26072058 52.3320066,1.59661474 50.7105702,0.316533326 C50.3265457,0.017847663 49.686505,-0.152829859 49.2171419,0.188525185 C48.8331174,0.529880228 48.8757868,1.08458217 49.2598112,1.38326784 L49.2598112,1.38326784 Z"></path>
                      <path d="M57.8790261,9.02108693 C55.062847,12.4346374 50.7105702,14.2694207 48.2357461,17.9816568 C47.7237135,18.7497057 49.1744725,20.2858034 49.7718438,19.4324158 C52.2466679,15.7201797 56.5989447,13.8427269 59.4151238,10.4718459 C59.9698257,9.78913578 58.5617362,8.21036871 57.8790261,9.02108693 L57.8790261,9.02108693 Z"></path>
                      <path d="M51.7773047,8.55172375 C38.2937805,8.59439313 24.8529256,8.80774003 11.3694014,9.19176446 C7.61449593,9.3197726 3.85959046,9.40511136 0.104684979,9.57578888 C-0.194000684,9.57578888 0.23269312,10.258499 0.318031881,10.3438377 C0.446040022,10.5571846 0.915403207,11.3252335 1.21408887,11.3252335 C14.6549437,10.8558703 28.1384679,10.5145152 41.6219921,10.3865071 C45.3768976,10.3438377 49.1318031,10.3438377 52.8867086,10.3011683 C53.1853942,10.3011683 52.7587004,9.61845826 52.6733617,9.5331195 C52.5026841,9.27710322 52.0759903,8.55172375 51.7773047,8.55172375 L51.7773047,8.55172375 Z"></path>
                  </g>
              </g>
          </g>
      </svg>`,
    nextHtml: `<?xml version="1.0" encoding="UTF-8"?>
      <svg viewBox="0 0 60 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>long-arrow-right</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="page002" transform="translate(-1277.000000, -1548.000000)" fill="#554639" fill-rule="nonzero">
                  <g id="long-arrow-right" transform="translate(1277.000000, 1548.000000)">
                      <path d="M49.2598112,1.38326784 C50.8385783,2.66334925 52.1186597,4.24211633 53.5267493,5.73554464 C54.2094594,6.46092411 54.8921694,7.18630358 55.7028877,7.7836749 C56.4709365,8.38104623 57.4096629,8.85040941 58.0497036,9.57578888 C58.3910586,10.0024827 58.9457606,10.2158296 59.5004625,10.0024827 C59.9271563,9.83180516 60.1831726,9.27710322 59.8418176,8.89307879 C59.1164381,8.08236056 58.2203811,7.52765862 57.3669935,6.88761791 C56.5136059,6.24757721 55.7882264,5.52219774 55.062847,4.75414889 C53.6547574,3.26072058 52.3320066,1.59661474 50.7105702,0.316533326 C50.3265457,0.017847663 49.686505,-0.152829859 49.2171419,0.188525185 C48.8331174,0.529880228 48.8757868,1.08458217 49.2598112,1.38326784 L49.2598112,1.38326784 Z"></path>
                      <path d="M57.8790261,9.02108693 C55.062847,12.4346374 50.7105702,14.2694207 48.2357461,17.9816568 C47.7237135,18.7497057 49.1744725,20.2858034 49.7718438,19.4324158 C52.2466679,15.7201797 56.5989447,13.8427269 59.4151238,10.4718459 C59.9698257,9.78913578 58.5617362,8.21036871 57.8790261,9.02108693 L57.8790261,9.02108693 Z"></path>
                      <path d="M51.7773047,8.55172375 C38.2937805,8.59439313 24.8529256,8.80774003 11.3694014,9.19176446 C7.61449593,9.3197726 3.85959046,9.40511136 0.104684979,9.57578888 C-0.194000684,9.57578888 0.23269312,10.258499 0.318031881,10.3438377 C0.446040022,10.5571846 0.915403207,11.3252335 1.21408887,11.3252335 C14.6549437,10.8558703 28.1384679,10.5145152 41.6219921,10.3865071 C45.3768976,10.3438377 49.1318031,10.3438377 52.8867086,10.3011683 C53.1853942,10.3011683 52.7587004,9.61845826 52.6733617,9.5331195 C52.5026841,9.27710322 52.0759903,8.55172375 51.7773047,8.55172375 L51.7773047,8.55172375 Z"></path>
                  </g>
              </g>
          </g>
      </svg>`
  });

  // Изменение количества товара (плюс минус)
  function counter(block) {
    const counter = document.querySelectorAll(block);
    if (counter) {
      counter.forEach(element => {
        const minus = element.querySelector('.js-counter-minus');
        const plus = element.querySelector('.js-counter-plus');
        const inputWrap = element.querySelector('.js-counter-input');
        const input = inputWrap.querySelector('input');
        plus.addEventListener('click', () => {
          if (Number(input.value) < 999) {
            input.value = Number(input.value) + 1;
          }
        })
        minus.addEventListener('click', () => {
          if (Number(input.value) > 1) {
            input.value = Number(input.value) - 1;
          }
        })
        input.addEventListener('keyup', () => {
          input.value = input.value.replace(/[^\d]/g, '');
        })
        input.addEventListener('blur', () => {
          if (input.value == '' || input.value == 0) {
            input.value = 1;
          }
        })
      });
    }
  }
  counter('.js-counter');

  // Выпадайки при клике по кнопке
  // Задать блокам выпадайкам айдишник совпадающий с data-drop="" в кнопке для этого блока
  // Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
  function dropBlock(btn, lock = false) {
    let $this = undefined,
        drop = undefined,
        close = $('.js-drop-close'),
        body = $('body'),
        header= $('header');
    btn.on('click', function (e) {
      e.preventDefault();
      let $this = $(this);
      let drop = $('#' + $this.data('drop'));
      let scrollWidth = (window.innerWidth - $(window).width());
      if (!$this.hasClass('is-active')) {
        $this.addClass('is-active');
        drop.addClass('open');
        if (lock) {
          body.toggleClass('lock');
          body.css('padding-right', scrollWidth);
          header.css('padding-right', scrollWidth);
        }
      } else {
        $this.removeClass('is-active');
        drop.removeClass('open');
        body.removeClass('lock');
        body.css('padding-right', 0);
        header.css('padding-right', 0);
      }
      $(document).mouseup(function (e) {
        if (!$this.is(e.target)
          && $this.has(e.target).length === 0
          && !drop.is(e.target)
          && drop.has(e.target).length === 0) {
          $this.removeClass('is-active');
          drop.removeClass('open');
          body.removeClass('lock');
          body.css('padding-right', 0);
          header.css('padding-right', 0);
        }
      });
    })
    close.on('click', function () {
      $('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
      $('#' + $(this).data('drop')).removeClass('open');
      body.removeClass('lock');
      body.css('padding-right', 0);
      header.css('padding-right', 0);
    })
  }
  dropBlock($('.js-drop-btn'));
  dropBlock($('.js-drop-menu'), true);

  // Inputmask | Маска ввода телефона в поле
  if ($('input[name="tel"]').length) {
    $('input[name="tel"]').inputmask({
      mask: '+7 999 999 99 99',
      placeholder: ' ',
      showMaskOnHover: false,
      showMaskOnFocus: false,
    });
  }

  // Видео youtube для страницы
  function uploadYoutubeVideo() {
    if ($(".js-youtube")) {

      $(".js-youtube").each(function () {
        // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
        // $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
        $(this).append($('<img src="img/play.svg" alt="" class="video__play">'));

      });

      $('.video__play, .video__prev').on('click', function () {
        // создаем iframe со включенной опцией autoplay
        let wrapp = $(this).closest('.js-youtube'),
          videoId = wrapp.attr('id'),
          iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

        if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

        // Высота и ширина iframe должны быть такими же, как и у родительского блока
        let iframe = $('<iframe/>', {
          'frameborder': '0',
          'src': iframe_url,
          'allow': "autoplay"
        })

        // Заменяем миниатюру HTML5 плеером с YouTube
        wrapp.append(iframe);

      });
    }
  };
  uploadYoutubeVideo();
  
  // Яндекс карты
  setTimeout(() => {
    var script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    document.getElementsByTagName('body')[0].appendChild(script);
    if ($('#contactMap').length) {
      setTimeout(() => {
        initAndSettingsMap();
      }, 3000);
    }
    // Инициализация и настройки карты
    function initAndSettingsMap() {
      var point = $('#contactMap').data('point');
      ymaps.ready(function () {
        var myMap;
        myMap = new ymaps.Map("contactMap", {
          center: point, // Центер карты
          zoom: 15, // Коэффициент масштаба карты
          controls: [ // Элементы управления
            'zoomControl',
            'geolocationControl'
          ]
        });
        // Добавление метки
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Бани "Три богатыря"',
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/mark-map.webp',
          iconImageSize: [30, 40],
          iconImageOffset: [-15, -40]
        }),
          myMap.geoObjects
            .add(myPlacemark);
        // Отключить изменение масштаба колесом мыши
        myMap.behaviors.disable('scrollZoom');
      });
    };
  }, 3000);

  // Плавное появление блоков при скролле
  AOS.init({
    once: true,
  });

  // Изменение цены в блоке с банями
  function togglePriceBathhouse() {
    let item = $('.bathhouse__item');
    item.each(function () {
      let itemCurrent = $(this);
      let btn = itemCurrent.find('.bathhouse__time-btn input');
      let price = itemCurrent.find('.bathhouse__price');
      btn.on('change', function () {
        let data = $(this).data('price');
        let priceCurrent = itemCurrent.find($('[data-price="' + data + '"]'));
        price.removeClass('active');
        priceCurrent.addClass('active');
      })
    })
  };
  togglePriceBathhouse();

}