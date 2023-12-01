// 自行加入的JS請寫在這裡
$(function () {
  //sticky sidebar
  if ($('.stickySidebar').length > 0) {
    var stickySidebar = new StickySidebar('.stickySidebar', {
      containerSelector: '.main',
      topSpacing: 93,
      bottomSpacing: 0,
      minWidth: 768,
      resizeSensor: true,
    });
  }
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });

  // 後分類
  var _sortlist = $('.searchresults_block .sortlist');
  var i = 5; //不隱藏的個數

  _sortlist.each(function () {
    var _slideItem = $(this).find('li').slice(i);
    var _more = $(this).find('.more>a');
    var moreText = _more.text();
    var altText = '顯示收合';

    _more.click(function () {
      if (_slideItem.is(':hidden')) {
        _slideItem.slideDown();
        _more.text(altText);
        _more.addClass('close');
      } else {
        _slideItem.slideUp();
        _more.text(moreText);
        _more.removeClass('close');
      }
    });
  });

  //顯示隱藏查詢條件

  $('.searchquery_btn button').click(function () {
    if ($('.searchgroup').is(':hidden')) {
      $('.searchgroup').slideDown();
      $('.searchquery_btn button span').text('隱藏查詢');
      $('.searchquery_btn button').addClass('close');
    } else {
      $('.searchgroup').slideUp();
      $('.searchquery_btn button span').text('顯示查詢');
      $('.searchquery_btn button').removeClass('close');
    }
  });

  //
  $('.narrowquery_btn').click(function () {
    $('.searchresults_block .leftblock');
  });
  //  後分類整個 左右收合
  $('.narrowquery_btn>a').click(function () {
    $('.searchresults_block .leftblock').stop().toggleClass('open');
    $(this).stop().toggleClass('open');
  });
  // 新聞報刊瀏覽
  $('.newspaperSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  // 內文收合
  var _collapsebtn = $('.fullmark_outdiv .table_list .article .collapsebtn');
  _collapsebtn.click(function () {
    if ($(this).parents('.article').hasClass('close')) {
      $(this).find('a').text('收合全文');
      $(this).parents('.article').removeClass('close');
    } else {
      $(this).find('a').text('查看全文');
      $(this).parents('.article').addClass('close');
    }
  });
});
// 內文收合
// var _collapsebtn = $('.fullmark_outdiv .table_list .article .collapsebtn');
// var _article = $('.fullmark_outdiv .table_list .article');
// // var hPartial = _article.height();
// // _article.each(function () {
// // var _this = $(this);
// // var hFull;
// // });
// _collapsebtn.click(function () {
// if (_article.hasClass('close')) {
// $(this).find('a').text('收合全文');
// $(this).parent('.article').removeClass('close');
// // hFull = _this.innerHeight();
// // _this.animate({ height: hFull }, 500, function () {
// // $(this).find('a').text('收合全文');
// // _this.removeClass('close');
// // });
// } else {
// $(this).find('a').text('查看全文');
// $(this).parent('.article').addClass('close');
// // _this.animate({ height: hPartial }, 500, function () {
// // $(this).find('a').text('查看全文');
// // _this.addClass('close');
// // });
// }
// });
