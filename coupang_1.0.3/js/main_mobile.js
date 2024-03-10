 $(document).ready(function(){

      //// 레이어 팝업 ////
      $('#close_today, #close').click(function(){
          $('.pop_up').css({
              display : 'none'
          })
      })

     //// 메인배너 슬라이드 ////
    let b_timer = 1500;
    let b_interval = ""
    let b_count = $('.m_banner').length;
    let b_index_no = 1;

    function btn_init() { 
        $('.btn_slide').css({pointerEvents: 'none'});
        setTimeout(function(){
        $('.btn_slide').css({pointerEvents: 'auto'});
        }, b_timer)
    }

    $('#btn_slide_R').click(function(){

        btn_init();

        $('.m_banner').eq(b_index_no % b_count).css({
            left : '100%'
        }).animate({
            left : 0
        },b_timer, 'linear')

        $('.circle').eq(b_index_no % b_count).addClass('c_active');

        $('.m_banner').eq((b_index_no -1) % b_count).animate({
            left : '-100%'
        },b_timer, 'linear')

        $('.circle').eq((b_index_no-1) % b_count).removeClass('c_active');

        b_index_no+=1
        
    });

    // 자동슬라이드, 인디케이터 //
    function b_slide_auto(){
        b_interval = setInterval(function(){

            $('.m_banner').eq(b_index_no % b_count).css({
                left : '100%'
            }).animate({
                left : 0
            },b_timer, 'linear')

            $('.circle').eq(b_index_no % b_count).addClass('c_active');

            $('.m_banner').eq((b_index_no -1) % b_count).animate({
                left : '-100%'
            },b_timer, 'linear')

            $('.circle').eq((b_index_no-1) % b_count).removeClass('c_active');

            b_index_no+=1

        },b_timer + 4000)

        
    }

    b_slide_auto();

    // 슬라이드 호버 멈춤 //
    $('.m_banner').hover(function(){
        clearInterval(b_interval)
    }, function(){
        b_slide_auto();
    })

    //// 카테고리별 추천상품_탭 ////

    $('.tab4').eq(0).addClass('show_tab4');

    $('.tab_btn > div').click(function(){

		$('.tab_btn > div').removeClass('t_checked');
        $('.tab4').removeClass('show_tab4')

		$(this).addClass('t_checked');
        $('.tab4').eq($(this).index()).addClass('show_tab4')

	})

})