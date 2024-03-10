$(document).ready(function(){
    
    ////웹, 모바일버전 연결////
    let tmp = navigator.userAgent.toLowerCase();
    let array = ["android", "iphone", "ipad"];
    for(let i = 0; i < array.length; i++) {
        if(tmp.match(array[i])) {
            location.replace("product_information_mobile.html");
            // location = "file:///D:/coupang_ver2/product_information_mobile.html"; // 자기가 알아서 돌아오는 걸 막음
        }
    } 

    //// 메인 하단에 탭 4개 ////

    $('.show_in').eq(0).addClass('show_info1');

    $('.m_bot_btn > div').click(function(){

		$('.m_bot_btn > div').removeClass('b_click');
        $('.show_in').removeClass('show_info1')

		$(this).addClass('b_click');
        $('.show_in').eq($(this).index()).addClass('show_info1')

	}) 

    ///// 제품 사진 자세히 보기 ////
    $('.m_img').click(function(){
        $('.big_').removeClass('z_img');
        $('.big_').eq($(this).index()).addClass('z_img');
    });

    ///// 사이드 메뉴 ////

    let con_o_top=0;
    let con_o_left=0;
    let con_o_width=0;
    let s_top = 0;
    

    function init_menu() {
        con_o_top = $('.w_1020').eq(0).offset().top;
        con_o_left = $('.w_1020').eq(0).offset().left;
        con_o_width = $('.w_1020').eq(0).width();

        console.log(con_o_top)

        if(con_o_top >= 700) {
            $('.side').css({
                top: 230,
                // left: con_o_width + 10,
                transition : 'all 0.5s'
            }) 
        }
        else {
            $('.side').css({
                top: 230,
                // left: con_o_width + 10
                transition : 'all 0.5s'
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

        let mid_top = $('.main_mid').offset().top;
        let mid_height = $('.main_mid').height();
        let mid_bot = mid_top + mid_height;

        let con_height = $('.w_1020').height();
        let con_bot = con_height + con_o_top

        let side_top = $('.side').offset().top;
        let side_height = $('.side').height();
        let side_bot = side_top + side_height

        console.log(con_bot,s_bot,s_top)

        // console.log(s_top)
        if(con_o_top <= s_top) {
            $('.side').css({
                top: s_top + 200
            })
        }


        if(mid_bot <= side_bot){
           $('.side').css({
               top : 230
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


    //// 수량선택 /////

    // function plus() {

    //     let item_q = document.getElementById('item_q');
    //     let tmp_qty = Number(item_q.value) + 1;
 
    //     item_q.value = tmp_qty; 
       
    // }

    // function minus() { 
    //     let item_q = document.getElementById('item_q');
    //     let tmp_qty = Number(item_q.value) - 1;

    //     item_q.value = tmp_qty;  
    // }
})