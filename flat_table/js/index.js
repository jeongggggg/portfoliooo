$(document).ready(function(){

     ////웹, 모바일버전 연결////
     let tmp_info="";
     if(location.href.split("?").length > 1) {
         tmp_info="?"+location.href.split("?")[1]
     }
 
     let tmp = navigator.userAgent.toLowerCase();
     let array = ["android", "iphone", "ipad"];
     for(let i = 0; i < array.length; i++) {
         if(tmp.match(array[i])) {
         location.replace("index_mobile.html"+tmp_info);
         
         }
     }

    if(navigator.maxTouchPoints > 1) {
        location.replace("index_mobile.html"+tmp_info); // 모바일
    }
    // else {
    //    location.replace("index.html"+tmp_info) //데스크탑
    // } 

    // document.write(navigator.userAgent) 


    ////////////// 메인배너 버튼 클릭시 슬라이드 //////////

    let index_no = 0;
    let m_b = $('.m_b');
    let m_b_count = m_b.length;

    ////첫번째 메인배너 고정 ////
    $('.m_b').eq(0).find('.m_b_desc').css({
        // transform: "translateX('0px')",
        left: '-100px',
        opacity: 0,
        transition: 'all 0s'
    });
    setTimeout(function(){
        $('.m_b').eq(0).find('.m_b_desc').css({
            // transform: "translateX('0px')",
            left: '100px',
            opacity: 1,
            transition: 'all 0.5s'
        });
    }, 200);

    //// 오른쪽 버튼 ////
    $('#mb_slide_btn_R').click(function(){
        mb_btn_init();

        // 들어올판
        m_b.eq((index_no + 1) % m_b_count).fadeIn(100);

        // 나갈판
        m_b.eq((index_no) % m_b_count).fadeOut(100);


        // if(index_no == 4){
            $('.m_b').eq((index_no + 1) % m_b_count).find('.m_b_desc').css({
                // transform: "translateX('0px')",
                left: '-100px',
                opacity: 0,
                transition: 'all 0s'
            });
            setTimeout(function(){
                $('.m_b').eq((index_no) % m_b_count).find('.m_b_desc').css({
                    // transform: "translateX('0px')",
                    left: '100px',
                    opacity: 1,
                    transition: 'all 0.5s'
                });
            }, 200);
        // }

        // console.log(index_no)

        index_no+=1; 

        ///// 인디케이터 색깔 변경 /////
        $('.indi').eq((index_no - 1) % m_b_count).removeClass('indi_active');
        $('.indi').eq((index_no) % m_b_count).addClass('indi_active');

    });
    
    //// 왼쪽 버튼 ////
    $('#mb_slide_btn_L').click(function(){
        mb_btn_init();
        // 들어올판
        m_b.eq((index_no - 1) % 4).fadeIn(100);
        // 나갈판
        m_b.eq((index_no) % 4).fadeOut(100);

        index_no-=1;

        $('.indi').eq((index_no + 1) % m_b_count).removeClass('indi_active');
        $('.indi').eq((index_no) % m_b_count).addClass('indi_active');
    });

    //// 메인배너 자동슬라이드 ////

    function mb_interval_start() {
        mb_interval = setInterval(function(){
            $('#mb_slide_btn_R').trigger('click')
        }, 3000);
    }

    mb_interval_start()

      //// 호버시 자동 슬라이드 멈춤 ////
      $('.main_banner').hover(function(){
        clearInterval(mb_interval);
    }, function(){
        mb_interval_start();
    })

    //// 버튼 막기 ////

    function mb_btn_init() {
        $('.mb_btn_slide').css('pointerEvents' , 'none');
        setTimeout(function(){
            $('.mb_btn_slide').css('pointerEvents' , 'auto');
        }, 1000)
    }

    //// 인디케이터 클릭 ////

    $('.indi').click(function(){   
        mb_btn_init(); // 



        console.log($(this).index());
        let ttt = $(this).index();

        if($('.indi.indi_active').index() > ttt) {
            // 들어올 판
            m_b.stop().fadeOut(100);
            m_b.eq(ttt).stop().fadeIn(100);

            index_no=ttt+1; 

        }

        else{
            // 나갈 판
            m_b.fadeOut(100);
            m_b.eq(ttt).fadeIn(100);

            index_no=ttt-1; 

        
        }

            // 들어올 문구
        $('.m_b').eq(ttt).find('.m_b_desc').css({
            left: '-100px',
            opacity: 0,
            transition: 'all 0s'
        });

        setTimeout(function(){
            $('.m_b').eq(ttt).find('.m_b_desc').css({
                // transform: "translateX('0px')",
                left: '100px',
                opacity: 1,
                transition: 'all 0.5s'
            });
        }, 200);

        
        $('.indi').removeClass('indi_active');
        $('.indi').eq(ttt).addClass('indi_active');
    })

        // console.log(index_no)

    ///////////////////////////////////////////////////////////////////////
    /////////sec1 오른쪽 슬라이드 /////////////////

    //// 슬라이드 포지션 함수 ////
    $('.sec1_item_R_pan').eq(0).css({left: 0})
    function slide(coming_i, coming_pos, outing_i, outing_pos) {
        // 들어올판 
        $('.sec1_item_R_pan').eq( coming_i ).css({left: coming_pos}).animate({
            left: 0
        }, 300);

        // 나갈판 
        $('.sec1_item_R_pan').eq( outing_i ).animate({
            left: outing_pos
        }, 300);
    }

    //// 자동슬라이드 ////
    function sec1_interval_start() {
        sec1_interval = setInterval(function(){
            $('#sec1_slide_btn_R').trigger('click')
        }, 3000);
    }

    //// 버튼 막기 ////
    function sec1_btn_init() {
        $('.sec1_btn_slide').css('pointerEvents' , 'none');
        setTimeout(function(){
            $('.sec1_btn_slide').css('pointerEvents' , 'auto');
        }, 300)
    }

    let sec1_index_no = 1;

    //// 왼쪽 버튼 ////
        $('#sec1_slide_btn_L').click(function(){
        sec1_btn_init();
        sec1_index_no-=1;
        slide((sec1_index_no - 1) % 3, '-100%', sec1_index_no % 3, '100%');
    });

    //// 오른쪽 버튼 ////
    $('#sec1_slide_btn_R').click(function(){
        sec1_btn_init();
        slide(sec1_index_no % 3, '100%', (sec1_index_no - 1) % 3, '-100%'); 
        sec1_index_no+=1; 
    });

    //// 호버시 자동 슬라이드 멈춤 ////
    $('.sec1_item_R').hover(function(){
        clearInterval(sec1_interval);
    }, function(){
        sec1_interval_start();
    })

    sec1_interval_start();

    /////////////////////// sec2 ////////////////////////////////
    
    /// 탭 페이드인 페이드 아웃 +  자동슬라이드 ///
    let sec2_index_no = 1;
    let sec2_btn_count = $('.sec2_btn').length;
    let sec2_interval;
    
    function auto_slide() {
        sec2_interval= setInterval(function(){
       
            $('.sec2_btn').removeClass('sec2_btn_active');
            $('.carrot').removeClass('carrot_active');
            $('.sec2_tab').removeClass('sec2_tab_active');
    
            $('.sec2_btn').eq(sec2_index_no % sec2_btn_count).addClass('sec2_btn_active');
            $('.sec2_btn').eq(sec2_index_no % sec2_btn_count).find('.carrot').addClass('carrot_active');
            $('.sec2_tab').eq(sec2_index_no % sec2_btn_count).addClass('sec2_tab_active');
    
            sec2_index_no++;
        }, 1500)
    }
    auto_slide()
    $('.sec2_btn, .sec2_tab_box ').hover(function(){
        clearInterval(sec2_interval)
    }, function(){
        auto_slide()
    })

    $('.sec2_btn').click(function(){

		$('.sec2_btn').removeClass('sec2_btn_active');
        $('.carrot').removeClass('carrot_active');
        $('.sec2_tab').removeClass('sec2_tab_active');

		$(this).addClass('sec2_btn_active');
        $(this).find('.carrot').addClass('carrot_active');
        $('.sec2_tab').eq($(this).index()).addClass('sec2_tab_active');

	})

    //////////////////// mid 배너 자동슬라이드 ///////////////////////

    let mid_timer = 1200;
    let mid_interval = ""
    let mid_count = $('.mid_b').length;
    let mid_index_no = 1;

    function mid_slide_auto(){
        mid_interval = setInterval(function(){

            $('.mid_b').eq(mid_index_no % mid_count).css({
                left : '100%'
            }).animate({
                left : 0
            },mid_timer, 'linear')

            $('.mid_b').eq((mid_index_no -1) % mid_count).animate({
                left : '-100%'
            },mid_timer, 'linear')

            $('.mid_b').eq((mid_index_no + 1) % mid_count).children('.mid_b_desc').css({
                top : 52,
                opacity : 0,
                transition: 'all 0s'
            })
            setTimeout(function(){
                $('.mid_b').eq(mid_index_no % mid_count).children('.mid_b_desc').css({
                    top : 82,
                    opacity : 1,
                    transition: 'all 0.5s'
                })
            },200)

            //// 인디 ////
            $('.mid_indi').eq(mid_index_no % mid_count).addClass('mid_indi_active');
            $('.mid_indi').eq((mid_index_no-1) % mid_count).removeClass('mid_indi_active');

            mid_index_no+=1

        },mid_timer + 3000)
    }

    $('.mid_b , .mid_indi').hover(function(){
        clearInterval(mid_interval);
    }, function(){
        mid_slide_auto();
    })


    mid_slide_auto();

    ///// 인디케이터 클릭 //////////

    $('.mid_indi').click(function(){

        if($('.mid_indi.mid_indi_active').index() > $(this).index()){

            $('.mid_b').eq($(this).index()).css({
                left : "-100%"
            }).animate({
                left : 0
            },500)

            $('.mid_b').eq($('.mid_indi.mid_indi_active').index()).animate({
                left : "100%"
            }, 500)

            mid_index_no = $(this).index()+1;


            // console.log(mid_index_no)
        }

        else if($('.mid_indi.mid_indi_active').index() < $(this).index()){
            $('.mid_b').eq($(this).index()).css({
                left : "100%"
            }).animate({
                left : 0
            },500)

            $('.mid_b').eq($('.mid_indi.mid_indi_active').index()).animate({
                left : "-100%"
            }, 500)

            mid_index_no = $(this).index()-1;
        }

        $('.mid_indi').removeClass('mid_indi_active');
        $('.mid_indi').eq($(this).index()).addClass('mid_indi_active');

    })


    ///////// 스크롤 이벤트 /////////////

    ////sec2////
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let sec2_item = $('.sec2_container');

        // console.log(s_top)



        if(s_top >= 1100){

            for(let i=0; i<sec2_item.length; i++){

                (function(tmp_i){
                    setTimeout(function(){

                        sec2_item.eq(tmp_i).addClass('scroll_item_active');

                        tmp_i++;

                    },500 * tmp_i + 1)
                })(i)
            }
        };

    });

    ////sec3////

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let sec3_item = $('.sec3_item');

        // console.log(s_top)



        if(s_top >= 2100){

            for(let i=0; i<sec3_item.length; i++){
                (function(tmp_i){
                    setTimeout(function(){

                        sec3_item.eq(tmp_i).addClass('scroll_item_active');

                        tmp_i++;

                    },200 * tmp_i + 1)
                })(i)
            }
        };

    });

    /////sec4////

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let sec4_item = $('.sec4_item');

        if(s_top >= 3800){

            for(let i=0; i<sec4_item.length; i++){

                (function(tmp_i){
                    setTimeout(function(){

                        sec4_item.eq(tmp_i).addClass('scroll_item_active');

                        tmp_i++;

                    },150 * tmp_i + 1)
                })(i)
            }
        };

    });

})
