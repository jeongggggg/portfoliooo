$(document).ready(function(){
    /*
        offset().~  : 문서의 왼쪽 최상단 기준
        position().~ : 부모의 왼쪽 상단 기준
    */
        // 0번 sec의 box 위치 
        let box = $('.box');
        let box0_o_top = box.eq(0).offset().top; // 100

        box.eq(1).offset({ // 문서 기준 top에 0번 박스의 위치를 적용한다.(둘이 같은 위치에 배치한다.)
            top: box0_o_top
        })
        box.eq(2).offset({ // 문서 기준 top에 0번 박스의 위치를 적용한다.(둘이 같은 위치에 배치한다.)
            top: box0_o_top
        })
        box.eq(3).offset({ // 문서 기준 top에 0번 박스의 위치를 적용한다.(둘이 같은 위치에 배치한다.)
            top: box0_o_top
        })

        let sec0_o_top = $('.main > .sec').first().offset().top; // 밖에다 두면 리사이즈 할 때 다시 한번 더 구하기 
        $(window).scroll(function(){
            s_top = $(window).scrollTop();
            s_bot = s_top + $(window).height();
            if(s_bot > $('.footer').offset().top) {
                footer_chk = false;
                // box.eq(3).css({
                //     display: 'none'
                // })
                
                // $('.ice_cream4').offset({
                //     top: 'auto',
                //     bottom: 0
                // })
            }
            else if(s_bot <= $('.footer').offset().top) {
                footer_chk = true; 

                // box.eq(3).css({
                //     display: 'block'
                // })
            }  
            
            // console.log(s_top + box0_o_top);

            console.log("footer_chk: " + footer_chk);

            if(s_top >= sec0_o_top && footer_chk) {
                box.eq(0).offset({
                    top: s_top + box0_o_top - sec0_o_top
                })
                box.eq(1).offset({
                    top: s_top + box0_o_top - sec0_o_top
                })
                box.eq(2).offset({
                    top: s_top + box0_o_top - sec0_o_top
                })
                box.eq(3).offset({
                    top: s_top + box0_o_top - sec0_o_top
                }) 
            }

            if(!footer_chk) {
                box.eq(3).offset({
                    top: $('.footer').offset().top - box.eq(3).height(),
                })
            }
        })

    //// nav 따라오지 않게 //////
    let s_top = 0;
    let s_bot = $(window).height();

    $(window).scroll(function(){
        // s_top = $(window).scrollTop();
    
        // if(s_top2 > 200) {

        //     $('.nav').css({
        //         display : 'none'
        //     })
        //     // $('.nav').fadeOut(0)

        // }
        // else {
        //     $('.nav').css({
        //         display : 'block'
        //     })
        //     // $('.nav').fadeIn(0)
        // }
    
    });

    ///////////휠 한번에 sec 이동 ///////

    let chk_slide = true;
    let footer_chk = true; // 안보일때는 true 
    $('.sec').on('mousewheel DOMMouseScroll', function(){
        event.preventDefault();

        console.log(s_top,  $('.main > .sec').eq(0).offset().top);
        if(chk_slide) {
            chk_slide = false;
            setTimeout(function(){
                chk_slide = true;
            }, 800)

            let wheel = event.wheelDelta;
            let pos;
            if(wheel < 0) { //// 휠 내림
                // 헤더가 보이는 상태일때
                if(s_top < $('.main > .sec').eq(0).offset().top-1) {
                    pos = $('.main > .sec').eq(0).offset().top
                    
                }
                else {
                    // 다음꺼가 있는 경우
                    if($(this).next().length > 0) {
                        pos = $(this).next().offset().top;

                    }
                    // 다음꺼 없는 경우
                    else {
                        pos = $('.footer').offset().top;
                        footer_chk = false; // 푸터 보고있다!
                    }
                }
                
            }
            else if(wheel > 0) { //// 휠 올림
                console.log($('.main > .sec').last().offset().top);
                pos = 0

                if(!footer_chk) {
                    pos = $('.main > .sec').last().offset().top
                    footer_chk = true;
                }

                else if($(this).prev().length > 0) {
                    pos = $(this).prev().offset().top
                }  


            } 



            $('html, body').stop().animate({
                scrollTop: pos
            }, 800)


            // console.log(pos)
        }
    });

    $(window).scroll(function(){
    //     s_top = $(window).scrollTop();
    //     let sec2_o_top = $('.sec2').offset().top;

    //     if(s_top >= sec2_o_top) {
    //         $('.sec2_icon1').animate({
    //             left: '30%'
    //         }, 500, 'linear')
    //     }
    });

 
    // let posx_start = 0;
    // let posy_start = 0;
    // let posx_end = 0;
    // let posy_end = 0;
    // let sec_o_array = [];
    // let sec_length = $('.sec').length
    // $(document).on('touchstart', function(){ 
    //     // $('.sec').off('mousewheel DOMMouseScroll')
    //     $('.sec').off('scroll touchmove mousewheel');


    //     posx_start = event.touches[0].screenX;
    //     posy_start = event.touches[0].screenY;

    //     for(let i=0;i<sec_length; i++) {
    //         sec_o_array[i] = $('.sec').eq(i).offset().top
    //     }
        
    //     // console.log(posx_start , posy_start)
        
    // }); 
    // $(document).on('touchmove', function(){
        
    //     posx_end = event.touches[0].screenX;
    //     posy_end = event.touches[0].screenY;

    //     // console.log(posx_end , posy_end)
    // })

    // $(document).on('touchend', function(){




    //     // [150, 781, 1412, 2043]

    //     // 손가락 위로, 화면 아래로
    //     if(posy_start -  posy_end > 0) {
    //         // console.log("위")

    //         // console.log(s_top) // 191
    //         let tmp_next_pos=0
    //         console.log(s_top , sec_o_array[sec_length-1]);
    //         if(s_top >= sec_o_array[sec_length-1]) {
    //             tmp_next_pos = $('.footer').offset().top
    //         }
    //         else {
    //             for(let i=0;i<sec_length; i++) {
    //                 if(s_top < sec_o_array[i]) {
    //                     tmp_next_pos = sec_o_array[i];
    //                     break;
    //                 }
    //             }
            
    //         }
            
    //         $('html, body').animate({
    //             scrollTop: tmp_next_pos
    //         })
            
    //     }
    //     // 손가락 아래로, 화면 위로
    //     else if(posy_start -  posy_end < 0) {
    //         let tmp_next_pos=0;
    //         // console.log(s_top , sec_o_array[sec_length-1]);
    //         // if(s_top >= sec_o_array[sec_length-1]) {
    //         //     tmp_next_pos = $('footer').offset().top
    //         // }
    //         // else {
    //             // console.log("아래")
    //             for(let i=0;i<sec_length; i++) {
    //                 console.log(s_top , sec_o_array[i]);
    //                 if(s_top > sec_o_array[i]) {
    //                     tmp_next_pos = sec_o_array[i]; 
    //                 } 
    //             }
            
    //             $('html, body').animate({
    //                 scrollTop: tmp_next_pos
    //             })
    //         // }
    //     }
    //     console.log(sec_o_array)

    //     // console.log(posx_start -  posx_end, posy_start -  posy_end)
    // })

});