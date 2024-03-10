$(document).ready(function(){

    ///////////// 스크롤 하면 헤더 따라다니게 ///////////

    $(window).scroll(function(){
        let nav_top = $(window).scrollTop();

        if(nav_top > 200){
            $('.header_bot').css({
                position: 'fixed',
                top: 0,
                background: 'rgba(255,255,255,0.7)',
                transition: 'background 0.5s'

            })

            $('.h_bot_li > a').css({
                color : '#000'
            })

            $('.nav_sub_item').css({
                top : 120
            })
        }

        else{
            $('.header_bot').css({
                position: "absolute",
                top: 30,
                background: 'transparent'
            })

            $('.h_bot_li > a').css({
                color : '#fff'
            })

            $('.nav_sub_item').css({
                top : 90
            })
        }
    })

    ///////////////// 네비 판 //////////////////

 
    //// 마우스 들어감 ////
    $('.add_pan, .nav_box').mouseover(function(){ 
        $('.nav_box').addClass('nav_box_active');
        $('.sub_item').addClass('sub_item_active');
        
        /// 원 커짐 ///
        $('.nav_inner').css({
            transform : 'scale(10)'
        })


        // setTimeout(function(){
        // },300)


        // setTimeout(function(){
            // $('.sub_item').addClass('sub_item_active')
        // },300)

    });

     //// 마우스 나감 /////
    $('.nav_box').mouseleave(function(){
        $('.nav_box').removeClass('nav_box_active');
        $('.sub_item').removeClass('sub_item_active');


        $('.nav_inner').css({
            transform : 'scale(0)', 
        })
    });

    //// nav 뒤에 3개에 마우스 들어가면 그냥 닫히게 /////
    $('.clear_pan').mouseover(function(){
        $('.nav_box').removeClass('nav_box_active');

        $('.nav_inner').css({
            transform : 'scale(0)',
            transition : 'all 1s'
        })
    })

    ///// 해당하는 판 보이게 ///////////

    $('.h_bot_li').mouseenter(function(){
        $('.nav_sub_item').removeClass('nav_sub_item_active');
        $('.nav_sub_item').eq($(this).index()).addClass('nav_sub_item_active');
    });


    /////////////// CELEB 이름 호버하면 써클 생기게 /////////////

    $('.artist').mouseover(function(){
        $('.color_circle').eq($(this).index()).css({
            transform : 'scale(1)'
        })
    })

    $('.artist').mouseout(function(){
        $('.color_circle').css({
            transform : 'scale(0)'
        })
    })

    /////////////// CELEB 이름 호버하면 그거에 맞는 앨범 나오게 /////////////

    $('.artist').mouseover(function(){

        $('.artist_album').removeClass('artist_album_active');
        $('.artist_album').eq($(this).index()).addClass('artist_album_active');

        $('.artist_album_title').removeClass('artist_album_title_active');
        $('.artist_album_title').eq($(this).index()).addClass('artist_album_title_active');
    });

})