$(document).ready(function(){

    //// 탑버튼 ////
    $('.btn_top').click(function(){
        event.preventDefault();

        let href = $('.btn_top').attr('href');
        let timer = ""
        let s_top = $(href).offset().top;

        if(href == "#wrap") {
            timer = 400
        }

        $('html, body').animate({
            scrollTop:s_top
        }, timer )

    })

    ////카테고리 메뉴 ////
    let c_chk = true;
    $('.category').click(function(){
        if(c_chk){
            c_chk = false;
            $('.category_click').css({
                display : 'block'
            })
            $('.category').css({
                backgroundColor : '#2d518d'
            })
        }

        else{
            c_chk = true;
            $('.category_click').css({
                display : 'none'
            })
            $('.category').css({
                backgroundColor : '#4285f4'
            })
        }
    })
})