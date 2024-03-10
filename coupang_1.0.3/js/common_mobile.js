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
})