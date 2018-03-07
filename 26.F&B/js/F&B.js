$(function(){//시작
  var $deWidth;
  var $limitSize=767;

  $(window).resize(function(){
    $devWidth=

  // 상품 갤러리 슬라이드
    productSlide=new Swiper('.product-slide',{
      navigation:{
        nextEl:'.product-slide .swiper-button-next',
        prevEl:'.product-slide .swiper-button-prev',
      },
      slidesPerView:4,
      loop:true,
    });
  })

  // 로그인팝업
  $('.login-hover').on('click',function(){
    // console.log('로그인팝업열기')
    $('.popup-login, .popup-bg').stop().show();//css로적용시킨것
      // 로그인팝업닫기
      $('.popup-login').on('mouseleave',function(){
        // console.log('로그인팝업닫기')
        //열려있는 팝업을 닫고 팝업백그라운드 제거
        $('.popup-login').stop().slideUp(function(){$('.popup-bg').hide()});
        // alert('닫기');
      })
  })

  //쇼핑백 팝업
  $('.icon-shop').on('click',function(){
    // console.log('쇼핑백팝업열기')
    $('.popup-icon-shop, .popup-bg').stop().show();//css로적용시킨것

      //쇼핑백 팝업닫기
      $('.popup-hover').on('mouseleave',function(){
        // console.log('쇼핑백팝업닫기')
        $('.popup-icon-shop').stop().slideUp(function(){$('.popup-bg').hide()});
      })
  })

  //로그인/회원가입 -> My page 로그아웃 (text바꾸기)
  $('.black').on('click',function(){
    $('.textchange').text('My page 로그아웃');
    alert('로그아웃');
  })

  //슬라이드 메인이미지
  var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});.resize();





})//종료
