$(document).ready(function(){

    ////웹, 모바일버전 연결////
    let tmp = navigator.userAgent.toLowerCase();
    let array = ["android", "iphone", "ipad"];
    for(let i = 0; i < array.length; i++) {
        if(tmp.match(array[i])) {
            location.replace("main_mobile.html");
            // location = "file:///D:/coupang_ver2/main_mobile.html"; // 자기가 알아서 돌아오는 걸 막음
        }
    } 

    //// 레이어팝업 ////
    function slide(index_no){
        let pop_s_img = document.getElementsByClassName('pop_s_img');
            
        for(let i = 0; i < pop_s_img.length; i++) {
            pop_s_img[i].style.zIndex = 1;
        }

        pop_s_img[index_no].style.zIndex = 9;
        pop_s_img[index_no].style.left = 0;
        
        setTimeout(function(){
            for(let i = 0; i < pop_s_img.length; i++) {
                if(index_no != i) {
                    pop_s_img[i].style.left = "100%";
                }
            }
        }, 500)

        const btn_item = document.getElementsByClassName('btn_item');

        for(let i = 0; i < btn_item.length; i++) {
            btn_item[i].addEventListener('click', function(){slide(i)});     
        }
    }

    const btn_item = document.getElementsByClassName('btn_item');

        for(let i = 0; i < btn_item.length; i++) {
            btn_item[i].addEventListener('click', function(){slide(i)});     
        }

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

})
  



