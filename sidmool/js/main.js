var $devWidth;      //웹 브라우저의 창 너비
var $limitSize=768; //태블릿 디바이스의 너비(최소 768)
//$(document).ready(function(){
$(function(){
  //header 네비게이션 ======================================================
  //디바이스 사이즈 체크하기
  $(window).resize(function(){
    $devWidth=$('body').width();
    //console.log('안쪽에서 출력',$devWidth);
  }).resize();

  //1depth메뉴에 마우스를 올리거나 포커스가 발생했을 때
  $('.gnblist > li > a').on('mouseover focus', function(){
    //웹브라우저의 너비가 태블릿보다 작으면(모바일환경이면)
    if($devWidth <  $limitSize) return false;//다음에 나오는 코드를 실행시키지 않는다.
    //위의 조건에 맞지 않으면(태블릿이상이면) 아래의 코드를 실행한다.
    //2depth메뉴를 모두 숨기고
    $('.gnblist ul').hide();
    //선택한 1depth메뉴의 2depth메뉴를 보여준다.
    $(this).next().show();

    //1depth메뉴의 스타일을 변경
    $('.gnblist > li > a').css({
      'height':'29px',
      'background':'none'
    })

    //내가 선택한 1depth메뉴 스타일을 변경
    $(this).css({
      'height':'32px',
      'background':'url(images/over_icon.gif) no-repeat center bottom'
    })
  })//메뉴 보이기 end

  //네비게이션으로부터 벗어났을 때
  $('#gnb').mouseleave(function(){
    if($devWidth <  $limitSize) return false;
    $('.gnblist ul').stop().slideUp(50);
    $('.gnblist > li > a').css({
      'height':'29px',
      'background':'none'
    })
  })//네비게이션벗어나기 end

  //전체메뉴 열기
  $('.allmenu_view a').click(function(e){
    e.preventDefault();
    $('.allmenu_view').slideUp(10, function(){//전체메뉴버튼이 숨겨지고 난뒤
      $('#allMenu_box').slideDown('slow');//전체메뉴가 천천히 보여짐.
    })
  })

  //전체메뉴 닫기
  $('.all_close').click(function(e){
    e.preventDefault();
    $('#allMenu_box').slideUp('slow', function(){//전체메뉴가 천천히 접히고 난뒤
      $('.allmenu_view').slideDown(50);//전체메뉴버튼을 빨리 보여준다.
    })
  })

  //section 슬라이드 ======================================================
  //초기 인덱스 설정(최초에 한번만 읽힌다.)
  var $bnnNum=0;
  //이전버튼을 눌렀을 때
  $('.prev').click(function(){
    //현재 슬라이드가 2개 존재하므로 인덱스는 0,1만 나와야함.
    //인덱스가 0보다 작거나 같으면 다음에 나오는 코드를 읽지 않고 종료.
    if($bnnNum<=0)return false;
    $bnnNum--;//인덱스 1씩 감소처리
    $book_w=$('#recomm_book').width();//슬랄이드의 넓이 구하기
    $('#bookWrap').animate({
      left:-$book_w*$bnnNum
    },300,function(){//슬라이드넓이*인덱스값만큼 0.3초동안 이동처리 후
      //페이지네이션을 모두 비활성화 상태로 만들고
      $('#book_roll img').attr('src','images/state_out.png');
      //현재 보여주고 있는 슬라이드 순서에 해당되는 페이징만 활성화 처리
      $('#book_roll img').eq($bnnNum).attr('src','images/state_over.png');
    })
  })

  //다음버튼을 눌렀을 때
  $('.next').click(function(){
    //인덱스가 1보다 크거나 같을 경우
    if($bnnNum>=1)return false;//아래 코드를 읽지 않는다.
    $bnnNum++;//인덱스 1씩 증가처리
    $book_w=$('#recomm_book').width();
    $('#bookWrap').animate({
      left:-$book_w
    },300,function(){
      $('#book_roll img').attr('src','images/state_out.png');
      $('#book_roll img').eq($bnnNum).attr('src','images/state_over.png');
    })
  })

  //터치이벤트 처리
  $('#recomm_book').on('swipeleft',function(){
    $('.next').click();
  })
  $('#recomm_book').on('swiperight',function(){
    $('.prev').trigger('click');
  })

  //모바일 환경에서 화면이 가로,세로로 바뀔때마다
  //슬라이드 폭을 다시 체크해서 애니메이션 처리
  $(window).on('orientationchange',function(){
    $book_w=$('#recomm_book').width();
    $('#bookWrap').animate({left:-$book_w*$bnnNum},300);
  })

  //content 탭 ======================================================
  //탭메뉴를 클릭하거나 포커스가 발생되면
  $('.t1 a, .t2 a').on('focus click',function(e){
    e.preventDefault();
    // 컨텐츠를 모두 숨기고
    $('.item1, .item2').hide();
    //내가 클릭한 a의 부모인 h2의 바로 다음에 오는 items를 보여준다.
    $(this).parent().next().show();

    //탭의 이미지에 각각(each)접근해서 이미지의 값을 변경한다.
    //replace('바꿀대상', '새로운값')는 해당 문자열을 찾아 다른 값으로 변경할 때 사용.
    $('#newbooks-news h2 img').each(function(){
      $(this).attr('src',$(this).attr('src').replace('-1.jpg','.gif'));
    })

    //this는 내가 선택한 a를 가리킨다. a의 자식 img를 선택해서 변수로 가지고 있는다.
    $btnImg=$(this).children('img');
    $btnImg.attr('src',$btnImg.attr('src').replace('.gif','-1.jpg'));
  })

})
