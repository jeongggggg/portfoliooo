$(document).ready(function(){

    ////////////// 메인배너 /////////////

    let w_X = window.outerWidth / 2;
    let mb_pos = w_X / 2;

    // console.log(w_X)
    // console.log(mb_pos)

    $('.main_banner').css({  //// 0번 판의 기본자리
        // left: '-21%',    
        left: '-280px',
        top: '80%'

    })

    let item_count = $('.main_banner').length;
    let color_array = ['#b4b4b4','#1ececb','#508AE6', '#D5A0FB','#dfe61e','#1ececb', '#ff8570', '#c2e02a']

    for(let i=0; i<item_count; i++) {

        $('.main_banner').eq(i).css({left: w_X * i})

    } 

    let index_no = 0;
    let timer = 500;


    $('#arrow_R').click(function(){
        // 각각의 칸(item)의 현재 위치에서 -200 하기
        $('.main_banner').animate({
            left: '-='+w_X
        }, timer, 'linear');

        $('.main_banner').eq(index_no % item_count).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: w_X * (item_count - 1)
        }, 0, 'linear')

        index_no += 1;

        // 인디케이터 색 변경
        $('.circle').removeClass('circle_active');
        $('.circle').eq(index_no % item_count).addClass('circle_active');

        // 버튼&인디케이터 초기화
        $('.btn_slide, .circle').css({pointerEvents: 'none'});
        setTimeout(function(){
            $('.btn_slide, .circle').css({pointerEvents: 'auto'});
        }, timer)

         /////// 백그라운드 색변경 ////////
        $('.main_banner_container').css({
            background : color_array[index_no % item_count],
            transition : 'all 1s'
        })
    });

    $('#arrow_L').click(function(){ 

        index_no -= 1;

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.main_banner').eq(index_no % item_count).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: -w_X
        }, 0, 'linear')
        
        $('.main_banner').animate({
            left: '+='+w_X
        }, timer, 'linear');

        // 인디케이터 색 변경
        $('.circle').removeClass('circle_active');
        $('.circle').eq(index_no % item_count).addClass('circle_active');
        
        // 버튼&인디케이터 초기화
        $('.btn_slide, .circle').css({pointerEvents: 'none'});
        setTimeout(function(){
            $('.btn_slide, .circle').css({pointerEvents: 'auto'});
        }, timer)

        ///// 백그라운드 색변경 ////////

        if(index_no <0) {
            index_no=color_array.length-1;
        }

        $('.main_banner_container').css({
            background : color_array[index_no % item_count],
            transition : 'all 1s'
        })


    });

    // 인디케이터 클릭시 인디의 색 변경
    $('.circle').click(function(){
        let now_click = $(this).index(); // 방금 클릭한 인디
        let has_color = $('.circle_active').index(); // 클릭하는 순간에 색 칠해져 있는 인디

        let gap = now_click - has_color;
                    //0         2
        // console.log(gap)

        if(now_click < has_color) {
            for(let i=0; i<gap * -1; i++) {
                $('#arrow_L').trigger('click')
            }
        }
        else if(now_click > has_color) {
            for(let i=0; i<gap; i++) {
                $('#arrow_R').trigger('click')
            }
        }
    });

    // 자동 슬라이드
    let interval;
    function auto_slide() {
        interval=setInterval(function(){
            $('#arrow_R').trigger('click')
        }, timer + 1000)
    }

    auto_slide();

    $('.main_banner_box').hover(function(){
        clearInterval(interval)
    }, function(){
        auto_slide();
    });

    
    /////////////// CELEB 이름 호버하면 써클 생기게 /////////////

    // $('.for_you_circle').eq(0).css({
    //     transform : 'scale(1)'
    // })

    $('.for_you_celeb').mouseover(function(){
        $('.for_you_circle').eq($(this).index()).css({
            transform : 'scale(1)'
        })
    })

    $('.for_you_celeb').mouseout(function(){
        $('.for_you_circle').css({
            transform : 'scale(0)'
        })
        
    })

    /////////////celeb 이름 호버하면 해당하는 상품판 나오게 ////////////

    $('.for_you_celeb').mouseover(function(){

        $('.for_you_item_pan').removeClass('for_you_item_pan_active');
        $('.for_you_item_pan').eq($(this).index()).addClass('for_you_item_pan_active');

    });

    ///////////////////// new issue 슬라이드 //////////////////////////

    // item 기본 자리 세팅
    let new_banner_width = $('.new_issue_banner').eq(0).innerWidth();
    let new_banner_count = $('.new_issue_banner').length;

    for(let i=0; i<new_banner_count; i++) {
        $('.new_issue_banner').eq(i).css({left: new_banner_width * i})
    } 

    let new_index_no = 0;
    let new_timer = 500;
    $('#issue_btn_R').click(function(){

        // 아이템의 width만큼 - 방향으로 이동
        $('.new_issue_banner').animate({
            left: '-='+new_banner_width
        }, new_timer, 'linear');

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.new_issue_banner').eq(new_index_no % new_banner_count).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: new_banner_width * (new_banner_count - 1)
        }, 0, 'linear')

        new_index_no += 1;

        // 인디케이터 색 변경
        $('.issue_indi').removeClass('issue_indi_active');
        $('.issue_indi').eq(new_index_no % new_banner_count).addClass('issue_indi_active');

        // 버튼&인디케이터 초기화
        $('.issue_btn, .issue_indi').css({pointerEvents: 'none'});
        setTimeout(function(){
            $('.issue_btn, .issue_indi').css({pointerEvents: 'auto'});
        }, new_timer)
    });

    $('#issue_btn_L').click(function(){ 
        new_index_no -= 1;

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.new_issue_banner').eq(new_index_no % new_banner_count).animate({
            // new_issue_banner의 가로사이즈 * 마지막 방번호
            left: -new_banner_width
        }, 0, 'linear')
        
        // 각각의 칸(new_issue_banner)의 현재 위치에서 -200 하기
        $('.new_issue_banner').animate({
            left: '+='+new_banner_width
        }, new_timer, 'linear');

        // 인디케이터 색 변경
        $('.issue_indi').removeClass('issue_indi_active');
        $('.issue_indi').eq(new_index_no % item_count).addClass('issue_indi_active');
        
        // 버튼&인디케이터 초기화
        $('.btn_slide, .issue_indi').css({pointerEvents: 'none'});
        setTimeout(function(){
            $('.btn_slide, .issue_indi').css({pointerEvents: 'auto'});
        }, new_timer)
    });

    
    // 인디케이터 배치
    // for(let i=0; i<item_count; i++) {
    //     $('.issue_indi_box').append('<div class="issue_indi"></div>')
    // }
    // $('.issue_indi').eq(0).addClass('issue_indi_active')
    
    // 인디케이터 클릭시 인디의 색 변경
    $('.issue_indi').click(function(){
        let issue_now_click = $(this).index(); // 방금 클릭한 인디
        let issue_has_color = $('.issue_indi_active').index(); // 클릭하는 순간에 색 칠해져 있는 인디

        let issue_gap = issue_now_click - issue_has_color;

        if(issue_now_click < issue_has_color) {
            for(let i=0; i<issue_gap * -1; i++) {

                $('#issue_btn_L').trigger('click')
            }
        }
        else if(issue_now_click > issue_has_color) {
            for(let i=0; i<issue_gap; i++) {
                $('#issue_btn_R').trigger('click')
            }
        }
    });


  ////////////////////// new album 자동 슬라이드 /////////////////////////

  // item 기본 자리 세팅
  let new_album_width = $('.new_album_set').eq(0).innerWidth();
  let new_album_count = $('.new_album_set').length;

  for(let i=0; i<new_album_count; i++) {
      $('.new_album_set').eq(i).css({left: new_album_width * i})
  }

  let album_index_no = 0;
  let album_timer = 500;
  $('#album_btn_R').click(function(){

      // 아이템의 width만큼 - 방향으로 이동
      $('.new_album_set').animate({
          left: '-='+new_album_width
      }, album_timer, 'linear');

      // 특정번째꺼 반대쪽 끝으로 이동
      $('.new_album_set').eq(album_index_no % new_album_count).animate({
          // item의 가로사이즈 * 마지막 방번호
          left: new_album_width * (new_album_count - 1)
      }, 0, 'linear')
      
      
      album_index_no += 1;

      /////////// 슬라이드 될 때 가운데 있는 거에 효과 ///////////


    $('.new_album_set').children('.album_cd').removeClass('album_cd_active')
    for(let i=1; i<=8; i++) {
        let tmp = 'album_circle_active_'+i; 
        $('.new_album_set').children('.album_circle_'+i).removeClass(tmp)
    }
    setTimeout(function(){
        // cd 나오는거 
        $('.new_album_set').eq((album_index_no+2) % new_album_count).children('.album_cd').addClass('album_cd_active')

        // 동그라미들 나오는거
        for(let i=1; i<=8; i++) {
            let tmp = 'album_circle_active_'+i; 
            $('.new_album_set').children('.album_circle_'+i).removeClass(tmp)
            $('.new_album_set').eq((album_index_no+2) % new_album_count).children('.album_circle_'+i).addClass(tmp)
        }
    }, album_timer)

    //////////////////////////////////////////////////////////////
      
      // 인디케이터 색 변경
      $('.n_album_indi').removeClass('n_album_indi_active');
      $('.n_album_indi').eq(album_index_no % new_album_count).addClass('n_album_indi_active');

      // 버튼&인디케이터 초기화
      $('.album_btn, .n_album_indi').css({pointerEvents: 'none'});
      setTimeout(function(){
          $('.album_btn, .n_album_indi').css({pointerEvents: 'auto'});
      }, album_timer + 1000)



  });


  $('#album_btn_L').click(function(){ 
      album_index_no -= 1;

      // 특정번째꺼 반대쪽 끝으로 이동
      $('.new_album_set').eq(album_index_no % new_album_count).animate({
          // new_issue_banner의 가로사이즈 * 마지막 방번호
          left: -new_banner_width
      }, 0, 'linear')
      
      // 각각의 칸(new_issue_banner)의 현재 위치에서 -200 하기
      $('.new_album_set').animate({
          left: '+='+new_banner_width
      }, new_timer, 'linear');

      // 인디케이터 색 변경
      $('.n_album_indi').removeClass('n_album_indi_active');
      $('.n_album_indi').eq(album_index_no % new_album_count).addClass('n_album_indi_active');
      
      // 버튼&인디케이터 초기화
      $('.album_btn, .n_album_indi').css({pointerEvents: 'none'});
      setTimeout(function(){
          $('.album_btn, .n_album_indi').css({pointerEvents: 'auto'});
      }, new_timer)

    /////////// 슬라이드 될 때 가운데 있는 거에 효과 ///////////


    $('.new_album_set').children('.album_cd').removeClass('album_cd_active')
    for(let i=1; i<=8; i++) {
        let tmp = 'album_circle_active_'+i; 
        $('.new_album_set').children('.album_circle_'+i).removeClass(tmp)
    }
    setTimeout(function(){
        // cd 나오는거 
        $('.new_album_set').eq((album_index_no+2) % new_album_count).children('.album_cd').addClass('album_cd_active')

        // 동그라미들 나오는거
        for(let i=1; i<=8; i++) {
            let tmp = 'album_circle_active_'+i; 
            $('.new_album_set').children('.album_circle_'+i).removeClass(tmp)
            $('.new_album_set').eq((album_index_no+2) % new_album_count).children('.album_circle_'+i).addClass(tmp)
        }
    }, album_timer)
  });
  
  // 인디케이터 클릭시 인디의 색 변경
  $('.n_album_indi').click(function(){
      let album_now_click = $(this).index(); // 방금 클릭한 인디
      let album_has_color = $('.n_album_indi_active').index(); // 클릭하는 순간에 색 칠해져 있는 인디

      let album_gap = album_now_click - album_has_color;

      if(album_now_click < album_has_color) {
          for(let i=0; i<album_gap * -1; i++) {

              $('#album_btn_L').trigger('click')
          }
      }
      else if(album_now_click > album_has_color) {
          for(let i=0; i<album_gap; i++) {
              $('#album_btn_R').trigger('click')
          }
      }
  });

  // 자동 슬라이드
  let new_album_interval;
  function new_album_slide() {
    new_album_interval=setInterval(function(){
          $('#album_btn_R').trigger('click')
      }, 2500)

  }

  new_album_slide()

  $('.album_btn, .n_album_indi').hover(function(){
    clearInterval(new_album_interval);
    }, function(){
        new_album_slide();
    });



})
