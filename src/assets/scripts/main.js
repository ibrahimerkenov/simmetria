$(function(){

	// Slider number 1

	var sliderSmall = new Swiper('#slider-small1', {
	  slidesPerView: 'auto'
	});
	var sliderLarge = new Swiper('#slider-large1', {
	  slidesPerView: 1,
	  effect: 'fade',
	  thumbs: {
	    swiper: sliderSmall
	  }
	});

	// Slider number 2

	var sliderSmall2 = new Swiper('#slider-small2', {
	  slidesPerView: 'auto'
	});
	var sliderLarge2 = new Swiper('#slider-large2', {
	  slidesPerView: 1,
	  effect: 'fade',
	  thumbs: {
	    swiper: sliderSmall2
	  }
	});

	// Slider number 3

	var sliderSmall = new Swiper('#slider-small3', {
	  slidesPerView: 'auto'
	});
	var sliderLarge = new Swiper('#slider-large3', {
	  slidesPerView: 1,
	  effect: 'fade',
	  thumbs: {
	    swiper: sliderSmall
	  }
	});

	// Slider number 4

	var sliderSmall2 = new Swiper('#slider-small4', {
	  slidesPerView: 'auto'
	});
	var sliderLarge2 = new Swiper('#slider-large4', {
	  slidesPerView: 1,
	  effect: 'fade',
	  thumbs: {
	    swiper: sliderSmall2
	  }
	});

	// Slider number 5

	var sliderSmall = new Swiper('#slider-small5', {
	  slidesPerView: 'auto'
	});
	var sliderLarge = new Swiper('#slider-large5', {
	  slidesPerView: 1,
	  effect: 'fade',
	  thumbs: {
	    swiper: sliderSmall
	  }
	});

	// Slider number 6

	var sliderSmall2 = new Swiper('#slider-small6', {
	  slidesPerView: 'auto'
	});
	var sliderLarge2 = new Swiper('#slider-large6', {
	  slidesPerView: 1,
	  effect: 'fade',
	  thumbs: {
	    swiper: sliderSmall2
	  }
	});

// Mfp 1

	$('#slider-large1').magnificPopup({
			delegate: 'a',
			gallery: {
			  enabled: true
			},
			type: 'image'
	});

// Mfp 2	

	$('#slider-large2').magnificPopup({
			delegate: 'a',
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});

// Mfp 3

	$('#slider-large3').magnificPopup({
			delegate: 'a',
			gallery: {
			  enabled: true
			},
			type: 'image'
	});

// Mfp 4

	$('#slider-large4').magnificPopup({
			delegate: 'a',
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});

// Mfp 5

	$('#slider-large5').magnificPopup({
			delegate: 'a',
			gallery: {
			  enabled: true
			},
			type: 'image'
	});

// Mfp 6

	$('#slider-large6').magnificPopup({
			delegate: 'a',
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});

// Mfp page services

	$('.our-services__turnkey-repair--mfp').magnificPopup({
			delegate: 'a',
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});

	$('.our-services__three-design--mfp').magnificPopup({
			delegate: 'a',
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});

	$('.our-services__construction-foundation--mfp').magnificPopup({
			delegate: 'a',
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});

	// Slider Scrollbar

	var swiperScrollbar = new Swiper('.slider-scrollbar', {
		speed: 800,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	  scrollbar: {
	    el: '.our-partners__swiper-scrollbar',
	    draggable: true,
	    dragSize: '68px'
	  },
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1
				},
				// when window width is >= 480px
			480: {
				slidesPerView: 2,
				freeMode: true
			},
				// when window width is >= 768px
			768: {
				slidesPerView: 3,
				slidesPerGroup: 2
			},
				// when window width is >= 992px
			992: {
				slidesPerView: 4,
				slidesPerGroup: 3
			},
				// when window width is >= 1170px
			1170: {
				slidesPerView: 5,
				slidesPerGroup: 1
			},
				// when window width is >= 1440px
			1440: {
				slidesPerView: 6
			}
		}
	});

	// Swiper Scrollbar autoplay

	if ($("section").is(".our-partners")) {

		if (window.innerWidth <= 480) {
			swiperScrollbar.autoplay.stop();
		}

		$(window).resize(function (){
				if (window.innerWidth <= 480) {
				swiperScrollbar.autoplay.stop();
			} else {
				swiperScrollbar.autoplay.start();
			}
		});

	}

	// MAPS LOAD

	//Переменная для включения/отключения индикатора загрузки
	var spinner = $('.our-contacts__maps').children('.loader');
	//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
	var check_if_load = false;
	//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
	var myMapTemp, myPlacemarkTemp;
 
	//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
	function init () {
	  var myMapTemp = new ymaps.Map("map-yandex", {
	    center: [41.311151, 69.279737], // координаты центра на карте
	    zoom: 14, // коэффициент приближения карты
	    controls: ['zoomControl', 'fullscreenControl', 
	"typeSelector" ] // выбираем только те функции, которые необходимы при использовании
	  });
	  // Отключаем масштабирование колесом мыши
	  myMapTemp.behaviors.disable('scrollZoom');

	  var myPlacemarkTemp = new ymaps.Placemark([41.311151, 69.279737], {
	      balloonContent: "г.Ташкент, улица Бектимира 28",
	  }, {
	      // Опции.
	      // Необходимо указать данный тип макета.
	      iconLayout: 'default#imageWithContent',
	      // Своё изображение иконки метки.
	      iconImageHref: '../img/map-marker.png',
	      // Размеры метки.
	      iconImageSize: [28, 28],
	      // Смещение левого верхнего угла иконки относительно
	      // её "ножки" (точки привязки).
	      iconImageOffset: [-10, -14],
	  });
	  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
	 
	  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
	  var layer = myMapTemp.layers.get(0).get(0);
	  // Решение по callback-у для определения полной загрузки карты
	  waitForTilesLoad(layer).then(function() {
	    // Скрываем индикатор загрузки после полной загрузки карты
	    spinner.removeClass('is-active');
	  });
	}
 
	// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
	function waitForTilesLoad(layer) {
	  return new ymaps.vow.Promise(function (resolve, reject) {
	    var tc = getTileContainer(layer), readyAll = true;
	    tc.tiles.each(function (tile, number) {
	      if (!tile.isReady()) {
	        readyAll = false;
	      }
	    });
	    if (readyAll) {
	      resolve();
	    } else {
	      tc.events.once("ready", function() {
	        resolve();
	      });
	    }
	  });
	}
 
	function getTileContainer(layer) {
	  for (var k in layer) {
	    if (layer.hasOwnProperty(k)) {
	      if (
	        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
	        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
	      ) {
	        return layer[k];
	      }
	    }
	  }
	  return null;
	}
 
	// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
	function loadScript(url, callback){
	  var script = document.createElement("script");
	  if (script.readyState){  // IE
	    script.onreadystatechange = function(){
	      if (script.readyState == "loaded" ||
	              script.readyState == "complete"){
	        script.onreadystatechange = null;
	        callback();
	      }
	    };
	  } else {  // Другие браузеры
	    script.onload = function(){
	      callback();
	    };
	  }
	  script.src = url;
	  document.getElementsByTagName("head")[0].appendChild(script);
	}
 
	// Основная функция, которая проверяет когда мы навели на блок с классом &#34;our-contacts__maps&#34;
	var ymap = function() {
	  $('.our-contacts__maps').mouseenter(function(){
	    if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
		  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
	        check_if_load = true; 
			// Показываем индикатор загрузки до тех пор, пока карта не загрузится
	        spinner.addClass('is-active');
			// Загружаем API Яндекс.Карт
	        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
	           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
	           ymaps.load(init);
	        });                
	      }
	    });  
		}
 
	//Запускаем основную функцию
		ymap();

	// Hamburger Menu

	var hamburger = $('.header__trigger'),
			dropdownNav = $('.header__navigation'),
			headerMenu = $('.header__menu');

	hamburger.on('click', function(){
		$(this).toggleClass('header__trigger--active');
		dropdownNav.toggleClass('header__navigation--active');
		$('body').toggleClass('scroll-hidden');
	});

// Button UP
/*var btn_top = $('.btn-top');

$(window).on('scroll', function(){
	if ($(window).scrollTop() >= 900) {
		btn_top.addClass('d-active');
	} else {
		btn_top.removeClass('d-active');
	}
});
	
btn_top.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, 700);
});*/

	// Active Page
	var location = window.location.href;

	$('.menu__link').each(function() {
		var menuLink = this.href; 
		if (location == menuLink) {
			$(this).addClass('menu__link--active');
		}
	});

	// Remove active link breadcrumbs
	$('.breadcrumbs__link').each(function() {
		var breadcrumbsLink = this.href;
		if (location == breadcrumbsLink) {
			$(this).replaceWith(function() {
				return '<span class="breadcrumbs__link">' + $(this).text() + '</span>';
			});
		}
	});

	$('.pagination__link').on('click', function(){
		$('.pagination__link').removeClass('pagination__link--active');
		$(this).addClass('pagination__link--active');
		return false;
	});

});

