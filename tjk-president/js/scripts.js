$(function(){
  $('.search-btn').on('click', function(){
    $('#header-search-form.search-block').slideToggle();
  });
});

$( document ).ready(function( $ ) {
  $( '#news-slider' ).sliderPro({
    width: 800,
    height: 500,
    orientation: 'horizontal',
    loop: false,
    arrows: true,
    buttons: false,
    thumbnailsPosition: 'right',
    thumbnailPointer: true,
    thumbnailWidth: 350,
    thumbnailHeight: 97,
    breakpoints: {
      800: {
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 380,
        thumbnailHeight: 100
      },
      700: {
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 350,
      },
      500: {
        thumbnailsPosition: 'bottom',
        thumbnailWidth: 400,
        thumbnailHeight: 100
      }
    }
  });
});

$(document).ready(function(){
  $('.post-carousel').owlCarousel({
    loop: true,
    responsiveClass: 700,
    dots: false,
    nav: true,
    navText: ["<",">"],
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });
});

$(function(){
		var data = [
			{ "date": "2017-04-21 10:15:20", "title": "Событие 1", "description": "Lorem Ipsum dolor set", "url": "http://www.event3.com/" },
			{ "date": "2017-04-18 10:15:20", "title": "Событие 2", "description": "Lorem Ipsum dolor set", "url": "" },
			{ "date": "2017-04-01 10:15:20", "title": "Событие 3", "description": "Lorem Ipsum dolor set", "url": "http://www.event3.com/" },
			{ "date": "2017-04-25 10:15:20", "title": "Событие 4", "description": "Lorem Ipsum dolor set", "url": "http://www.event3.com/" },
		];
		$('#eventCalendar').eventCalendar({
			jsonData: data,
			eventsjson: 'data.json',
			jsonDateFormat: 'human',
			startWeekOnMonday: false,
			openEventInNewWindow: true,
			dateFormat: 'DD-MM-YYYY',
			showDescription: false,
			locales: {
				locale: "ru",
				txt_noEvents: "События отсутствуют",
				txt_SpecificEvents_prev: "",
				txt_SpecificEvents_after: "события:",
				txt_NextEvents: "Следующие события:",
				txt_GoToEventUrl: "Смотреть",
				moment: {
					"months" : [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
					"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
					"monthsShort" : [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
					"Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
					"weekdays" : [ "Воскресенье", "Понедельник","Вторник","Среда","Четверг",
					"Пятница","Суббота" ],
					"weekdaysShort" : [ "Вс","Пн","Вт","Ср","Чт",
					"Пт","Сб" ],
					"weekdaysMin" : [ "Вс","Пн","Вт","Ср","Чт",
					"Пт","Сб" ]
				}
			}
		});
	});