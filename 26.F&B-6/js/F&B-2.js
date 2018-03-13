$(function(){//시작
  var $devWidth;
  var $limitSize=767;

  deskTopSlide=new Swiper('.desktop-slide',{
    navigation:{
      nextEl:'.desktop-slide .swiper-button-next',
      prevEl:'.desktop-slide .swiper-button-prev',
    },
    slidesPerView:3,
    loop:true,
  });

  mobileSlide1=new Swiper('.mobile-slide1',{
    navigation:{
      nextEl:'.mobile-slide1 .swiper-button-next',
      prevEl:'.mobile-slide1 .swiper-button-prev',
    },
    slidesPerView:2,
    loop:true,
  });

  mobileSlide2=new Swiper('.mobile-slide2',{
    navigation:{
      nextEl:'.mobile-slide2 .swiper-button-next',
      prevEl:'.mobile-slide2 .swiper-button-prev',
    },
    slidesPerView:2,
    loop:true,
  });

  // $(window).resize(function(){
  //   $devWidth=$('body').width();
  //   console.log($devWidth);
  //   if($devWidth<$limitSize){//모바일
  //     // 상품 갤러리 슬라이드
  //     productSlide=new Swiper('.product-slide',{
  //       navigation:{
  //         nextEl:'.product-slide .swiper-button-next',
  //         prevEl:'.product-slide .swiper-button-prev',
  //       },
  //       slidesPerColumn: 2,
  //       slidesPerView:2,
  //       loop:true,
  //     });
  //   }else{
  //     // 상품 갤러리 슬라이드
  //     productSlide=new Swiper('.product-slide',{
  //       navigation:{
  //         nextEl:'.product-slide .swiper-button-next',
  //         prevEl:'.product-slide .swiper-button-prev',
  //       },
  //       slidesPerView:3,
  //       loop:true,
  //     });
  //   }
  // }).resize();

  // 로그인팝업
  // $('.login-hover').on('click',function(){
  //   // console.log('로그인팝업열기')
  //   $('.popup-login, .popup-bg').stop().show();
  //     // 로그인팝업닫기
  //     $('.popup-login').on('mouseleave',function(){
  //       // console.log('로그인팝업닫기')
  //       //열려있는 팝업을 닫고 팝업백그라운드 제거
  //       $('.popup-login').stop().slideUp(function(){$('.popup-bg').hide()});
  //       // alert('닫기');
  //     })
  // })

  //쇼핑백 팝업
  // $('.icon-shop').on('click',function(){
  //   // console.log('쇼핑백팝업열기')
  //   $('.popup-icon-shop, .popup-bg').stop().show();//css로적용시킨것
  //
  //     //쇼핑백 팝업닫기
  //     $('.popup-hover').on('mouseleave',function(){
  //       // console.log('쇼핑백팝업닫기')
  //       $('.popup-icon-shop').stop().slideUp(function(){$('.popup-bg').hide()});
  //     })
  // })

  // 로그인 팝업 열기
  $('.textchange').on('click',function(){
    $('.popup-login-form-wrap, .icon.icon-cancel').show();
    // console.log('open');
    // $('body').append('<div class="popup-bg"></div>');
  })
  // 로그인 팝업 닫기
  $('.icon.icon-cancel').on('click',function(){
    $('.popup-login-form-wrap, .icon.icon-cancel').hide();
    // console.log('close');
    // 열려있는 팝업을 닫고 팝업백그라운드 제거
    // $('.popup').slideUp(function(){$('.popup-bg').remove()});
  })

  // 쇼핑백 팝업 열기
  $('.icon.icon-shopping-bag').on('click',function(){
    $('.popup-icon-shop, .icon.icon-cancel').show();
    console.log('open');
  })
  // 쇼핑백 팝업 닫기
  $('.icon.icon-cancel').on('click',function(){
    $('.popup-icon-shop, .icon.icon-cancel').hide();
    console.log('close');
  })





  // 로그아웃 화면
  //로그인/회원가입 -> My page 로그아웃 (text바꾸기)
  $('.black').on('click',function(){
    $('.textchange').text('My page 로그아웃');
    // alert('로그아웃');
  })

  // //네비게이션 focusin/focusout
    $('.gnb-nav li a').on('focusin',function(){
      $('.gnb-nav li ul').show();
      $('.gnb-nav .nav-bg').show();
    $('.gnb-nav li a').on('focusout',function(){
      $('.gnb-nav li ul').hide();
      $('.gnb-nav .nav-bg').hide();
    })
  })


})//종료
