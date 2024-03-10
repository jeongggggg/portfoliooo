$(document).ready(function(){
    ////웹, 모바일버전 연결////
    let tmp = navigator.userAgent.toLowerCase();
    let array = ["android", "iphone", "ipad"];
    for(let i = 0; i < array.length; i++) {
        if(tmp.match(array[i])) {
            location.replace("product_mobile.html");
            // location = "file:///D:/coupang_ver2/product_mobile.html"; // 자기가 알아서 돌아오는 걸 막음
        }
    } 

    //// 사이드 메뉴 ////
    let con_o_top=0;
    let con_o_left=0;
    let con_o_width=0;
    let s_top = 0;
    

    function init_menu() {
        con_o_top = $('.item_container').eq(0).offset().top;
        con_o_left = $('.item_container').eq(0).offset().left;
        con_o_width = $('.item_container').eq(0).width();

        // console.log(con_o_top)

        if(con_o_top >= 483) {
            $('.side').css({
                top: s_top,
                // left: con_o_width + 10,
                transition : 'all 0.5s'
            }) 
        }
        else {
            $('.side').css({
                top: s_top,
                // left: con_o_width + 10
            }) 
        }
    }
    
    init_menu();

    $(window).resize(function(){
        init_menu()
    });
    $(window).scroll(function(){
        s_top = $(window).scrollTop();
        let s_height = $(window).height();
        let s_bot = s_top + s_height
        let con_height = $('.item_container').height();
        let con_bot = con_height + con_o_top
        let side_top = $('.side').offset().top;
        let side_height = $('.side').height();
        let side_bot = side_top + side_height

        console.log(con_bot,s_bot,s_top)

        // console.log(s_top)
        if(con_o_top <= s_top) {
            $('.side').css({
                top: s_top - 100
            })
        }


        if(con_bot <= side_bot){
           $('.side').css({
               top : 600
           })
        }

        if(s_bot <= con_bot){
            s_top = 0
            $('.side').css({
                top: s_top
            })
        }

        $(window).resize(function(){
            init_menu()
        });

    });

})