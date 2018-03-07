// swiper.min.js 파일이 있어야 한다.

$(function(){
  var $deWidth;
  var $limitSize=767;

  $(window).resize(function(){
    $devWidth=

  // 멤버쉽 슬라이드
    membershipSlide=new Swiper('.membership-slide',{
      navigation:{
        nextEl:'.membership-slide .swiper-button-next',
        prevEl:'.membership-slide .swiper-button-prev',
      },
      slidesPerView:3,/*한 슬라이드 안에 아이콘을 3개 보여주겟다.*/
      loop:true,
    });


    //이벤트 슬라이드
    eventSlide=new Swiper('.event-slide',{
      navigation:{
        nextEl:'.event-slide .swiper-button-next',
        prevEl:'.event-slide .swiper-button-prev',
      }
    });
  }).resize();/*윈도우 리사이즈 :보고있는 화면 넓이를 재측정해서 적용한다. */

  // 네비게이션
  // 모바일일 때 실행 안된다.
    $('.gnb-nav').on('mouseenter focusin',function(){
      if($devWidth < $limitSize) return false;
      $('.gnb-nav li ul').stop().fadeIn(500);
      $('header').addClass('on');
    }).on('mouseleave focusout',function(){
      if($devWidth < $limitSize) return false;
      $('.gnb-nav li ul').stop().fadeOut(200);
      $('header').removeClass('on');
    })

    // 통합검색창
    // if구문을 먼저 실행하고 flag를 읽는다
    // 교차되어서 진행이 되게끔 처리한다.
    // icon-search가 x로 바뀌고 form이 열려야한다
    // 홈페이지를 다시 새로고침하면 form이 초기화되게한다.
    // val(); 을 써줘서 input을 출력한다(새로운 값을 얻어온다.)
    var searchFlag=true;
    $('#btn-search-open').on('click',function(){
      if(searchFlag){
        $(this).find('span').text('통합검색창닫기');
        searchFlag=false;
      }else{
        $(this).find('span').text('통합검색창열기');
        $('.search-form input').val('');
        searchFlag=true;
      }
      $(this).toggleClass('icon-search icon-cancel');
      $('.search-form').toggle();
    })

    // 공지사항 롤링
    // 3초마다 위에있는 리스트를 숨기고 마지막 위치에 다시 붙이는 작업을 반복 수정
    // 선언함수를 생략하고 notiveRolling을 써준다.
    // 첫번째 li를 slideup해서 없애준다.
    // 부모요소ul의 마지막위치에 - 첫번째 잇던 요소가 마지막요소가 되어(appendTo) 계속 돌아간다.
    notice=setInterval(noticeRolling,3000);
    function noticeRolling(){
      $('.notice li').first().slideUp(function(){
        $(this).appendTo($('.notice ul')).slideDown();
      })
    }

    //마우스를 공지사항 내용에 올렸을 때 롤링 멈추기
    $('.notice li').on('mouseenter',function(){
      //notice라는 이름을 호출해서 롤링작업을 멈추기
      clearInterval(notice);
    }).on('mouseleave',function(){
      //다시 수행하도록 호출
      notice=setInterval(noticeRolling,3000);
    })

    // 매장검색===============================================

    // 배열[]:위치값으로 뭔가를 저장한다./ 객체{}
    // 위치값으로 텍스트,이미지를 불러오기 위해 storeInfo에 써준다.
    // 불러올 서비스 아이콘을 써준다. '<i><><></i>'+''
    // 테스트를 하고 싶다면 전체(시작과끝 }])를 console 상에 복붙해서
    // storeInfo[0].lat 이나 storeInfo[0].lng 등등 center
    // [0]번째는 1호점을 말한다.

    // 1호점
    storeInfo=[{
    name:'신촌 1호점',
    addr:'서울 서대문구 신촌로1',
    open:'10:00~23:00 <p>주말 및 공휴일에는 변경될 수 있음.</p>',
    tel:'02-1234-1234',
    parking:'1시간 무료 주차',
    way:'지하철 2호선 3번출구에서 100m직진',
    service:'<li><i class="sprite s-wifi"></i><span class="skip">wifi</span></li>'
            +'<li><i class="sprite s-dt"></i><span class="skip">DT</span></li>'
            +'<li><i class="sprite s-food"></i><span class="skip">식사</span></li>',
    image:['images/store1.jpg', 'images/store2.jpg', 'images/store3.jpg'],
    lat:37.556133,
    lng:126.939037,
  },{//2호점
    name:'신촌 2호점',
    addr:'서울 서대문구 신촌로2',
    open:'24시간 운영',
    tel:'02-1234-5678',
    parking:'주차불가',
    way:'지하철 2호선 1번출구 바로앞',
    service:'<li><i class="sprite s-24"></i><span class="skip">24</span></li>'
            +'<li><i class="sprite s-terrace"></i><span class="skip">terrace</span></li>'
            +'<li><i class="sprite s-smoking"></i><span class="skip">흡연시설</span></li>'
            +'<li><i class="sprite s-outlet"></i><span class="skip">콘센트</span></li>',
    image:['images/store4.jpg', 'images/store5.jpg'],
    lat:37.555538,
    lng:126.936382,
    }];//객체불러오기

    // active를 활용해서 매장리스트 선택시 활성화 처리한다
    // 선택한 리스트의 순서를 구한다.
    // 내가 선택한 리스트가 index의 몇번째인가 ===> index();
    // 클릭할 때마다 index값이 달라지도록 처리한다.

    // callback=iniMap을 써줬으므로 iniMap을 활용한다

    selectIndex=0;
    //매장리스트 선택시 활성화처리, 선택한 리스트의 순서를 구한다.
    $('.store-select li').on('click',function(){
      $('.store-select li').removeClass('active');
      $(this).addClass('active');
      selectIndex=$(this).index();
      console.log('선택한리스트',selectIndex);//테스트 호출
      iniMap(storeInfo[selectIndex].lat, storeInfo[selectIndex].lng);//selectIndex를 클릭할 때 객체 호출
      // 구글지도의 iniMap으로 가서 정보를 전달한다.
    })

    //매장상세팝업 슬라이드
    storeSlide=new Swiper('.store-slide',{
      navigation:{
        nextEl:'.store-slide .swiper-button-next',
        prevEl:'.store-slide .swiper-button-prev',
      }
    });

    })
    //document.ready end

    // 매장상세팝업
    function popupStore(){
      //기존의 정보를 (초기화)비워준다.
      $('popup-store .swiper-wrapper, .store-info, .service-icon').empty();
      //storeInfo[selectIndex].name (위에서 설정한 객체들 중 name)
      $('popup-store h1').text(storeInfo[selectIndex].name);
      // 슬라이드 컨텐츠에 내용 담기 // 이미지 1씩 증가시킨다.
      // 해당 매장의 매장사진을 갯수만큼 돌려서 저장한다
      // +=  ====>  기존의 정보에 추가한다.
      // =   ====>  기존의 정보에 덮어쓰기한다.
      // 안에 "" 가 들어갔기 때문에 크게 ''를 써준다. 개체속성은 '+    +'로 연결해 써준다.

      // 선택한 요소의 마지막 위치에 새로운 요소를 붙여준다 : append
      // 매장사진을 붙여준다
      // 매장정보를 붙여준다
      // 매장의 서비스항목을 붙여준다

      function popupStore(){
  //정보를 초기화(비워준다.)
  $('.popup-store .swiper-wrapper, .store-info, .service-icon').empty();
  $('.popup-store h1').text(storeInfo[selectIndex].name);
  imageLength=storeInfo[selectIndex].image.length;
  slideContents='';
  //해당매장의 매장사진을 갯수만큼 돌려서 저장
  for(var i=0; i<imageLength; i++){
    slideContents+='<div class="swiper-slide">'
                +'<img src="'+storeInfo[selectIndex].image[i]+'" alt="매장사진">'
                +'</div>';
  }//for문 end
  //매장사진을 붙여준다.
  $('.popup-store .swiper-wrapper').append(slideContents);
  //매장정보를 붙여준다.
  $('.store-info').append(
    '<dl>'
    +'  <dt>매장주소</dt>'
    +'  <dd>'+storeInfo[selectIndex].addr+'</dd>'
    +'  <dt>영업시간</dt>'
    +'  <dd>'+storeInfo[selectIndex].open+'</dd>'
    +'  <dt>전화번호</dt>'
    +'  <dd>'+storeInfo[selectIndex].tel+'</dd>'
    +'  <dt>주차정보</dt>'
    +'  <dd>'+storeInfo[selectIndex].parking+'</dd>'
    +'</dl>'
    +'<dl>'
    +'  <dt>오시는길</dt>'
    +'  <dd>'+storeInfo[selectIndex].way+'</dd>'
    +'</dl>'
  );
  //매장의 서비스항목을 붙여준다.
  $('.service-icon').append(storeInfo[selectIndex].service);
  //매장상세팝업을 연다.
  $('.popup-store').slideDown(function(){
    //매장상세팝업 슬라이드설정
    storeSlide=new Swiper('.store-slide',{
      navigation:{
        nextEl:'.store-slide .swiper-button-next',
        prevEl:'.store-slide .swiper-button-prev',
      }
    });
  });
  //팝업 백그라운드를 깔아준다.
  $('body').append('<div class="popup-bg"></div>');
}//매장상세팝업 end





    //구글 지도
    function initMap(latVal, lngVal) {
      console.log('구글지도위치값:',latVal, lngVal);
      //위도경도의 값이 정의되지 않았을 때 기본값을 저장하도록 설정
      // 클릭하지 않았을  때 기본 지도 위치값을 설정해준다.
      if(latVal==undefined && lngVal==undefined){
        latVal=37.556133;
        lngVal=126.939037;
      }

    var uluru = {lat: latVal, lng: lngVal};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });

    //마커를 클릭했을 때
    marker.addListener('click', function() {
        popupStore();
        //console.log('마커를 클릭함');
      });
    }

    //매장상세팝업 슬라이드
    storeSlide=new Swiper('.store-slide',{/*맞춰준다.*/
      navigation:{
        nextEl:'.stroe-slide .swiper-button-next',/*마크업과 비교한다.*/
        prevEl:'.stroe-slide .swiper-button-prev',
      }
    });

  })//구글지도 종료
