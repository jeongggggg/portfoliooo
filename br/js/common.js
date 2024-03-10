$(document).ready(function(){
    ///////////////////////////// 헤더 /////////////////////////////

    ///////////////// 네비 호버시 100% ///////////////////

    $('.nav_li, .pan').mouseenter(function(){
        $('.pan').addClass('pan_active');
    });

    $('.nav_li, .pan').mouseleave(function(){
        $('.pan').removeClass('pan_active')
    });

    ///////////////// 서치 버튼 ///////////////////
    let chk = false;
    $('.search_btn_box').click(function(){
        if(chk == false){
            chk = true;

            // console.log(chk)

            $(".search_btn_b").css({
                display : 'none'
             })
     
             $(".search_btn").css({
                 transform : 'scale(1)',
                 transition : 'all 0.2s'
              })

              $(".search_modal").css({
                display : 'block'
            })
    
            $(".search_pan").css({
                width: 400,
                height: 400
            })
    
             $(".search_pan").css({
                transform : 'scale(3)'
            })
        }

        else{
            chk = false;
        }

        $(".search_modal").click(function(){
            chk = false;
            $(".search_modal").css({
                display : 'none'
            })
    
            $(".search_btn").css({
                transform : 'scale(1)',
                // zIndex : 999999,
                transition : 'all 0.5s'
            })
    
            $(".search_btn > img").css({
                transform : 'scale(1)',
                zIndex : 999999,
                transition : 'all 0.5s'
            })
    
            $(".search_pan").css({
                width: 0,
                height: 0
            })
    
            $('.search_btn_b').css({
                display : 'block'
            })
    
        })
        

    })

    
    ///////////////////스크롤시 nav 따라오게///////////////////

    // $(window).scroll(function(){
    //     let s_top = $(window).scrollTop();
    
    //     if(s_top > 200) {

    //         $('.nav').css({
    //             position : 'fixed',
    //             left : 0,
    //             top : 0,
    //             zIndex : 123456,
    //             background: '#fff',
    //             transition: 'all 0.5s'
    //         })


    //     }
    //     else {
    //         $('.nav').css({
    //             position: 'relative'
    //         })
    //     }
    
    // });

    ////////////////////// 햄버거 버튼 ///////////////////////
    /////////////////////////////////////////////////////////
    let ham_btn_chk = true;


   $('.ham_btn_box').click(function(){

       if(ham_btn_chk == true){
           $('.ham_pan').css({
               left: 0
           })
        }

       else{
            $('.ham_pan').css({
                left : '-100%'
            })
        }
       ham_btn_chk = !ham_btn_chk
    })

    $('.close_btn').click(function(){
        if(ham_btn_chk == false){
            $('.ham_pan').css({
                left: '-100%'
            })
         }
 
        else{
             $('.ham_pan').css({
                 left : 0
             })
         }
        ham_btn_chk = !ham_btn_chk
    })

    /////////////////////////////////////////////////////////

    ////////////햄버거 안에 아코디언 //////////////////////

    $('.acdion_title').click(function(){
        // $('.acdion_desc').removeClass('acdion_active');
        // $('.acdion_desc').eq($(this).index()).addClass('acdion_active');

        // $('.acdion_desc').stop().slideUp(500)
        // $('.acdion_desc').eq($(this).index()).slideDown(500);

        $('.acdion_desc').stop().slideUp();
        $(this).find('.acdion_desc').stop().slideDown();
    });


})