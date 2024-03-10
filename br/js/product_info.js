$(document).ready(function(){
    const cate_no = get_url_info("cate_no");
    const item_no = get_url_info("item_no");
    const img_url = ['ice_cream', 'cake', 'drink', 'coffee', 'desert']


    let ITEM;
    for(let i = 0 ; i < ITEM_LIST[cate_no].length; i++) {
    
        if(ITEM_LIST[cate_no][i].item_no == item_no) {
            ITEM = ITEM_LIST[cate_no][i];
            break;
        }
    }

    let list = ""
    list += '<div class="item_info_spon"></div>'
    list += '<div class="item_info_title">'
    list += ITEM.title
    list += '</div>'
    list += '<div class="item_info_desc">'
    list += ITEM.desc
    list += '</div>'
    list += '<div class="item_info_img">'
    list += '<img src="./img_br/product/'+img_url[cate_no]+'/'+(ITEM.item_no)+'.png" alt="상품이미지">'
    list += '</div>'
    list += '<div class="item_buy">'
    list += '구매하기'
    list += '</div>'

    $('.item_info_container').append(list)

    ///////////////////스크롤시 nav 따라오게///////////////////

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
    
        if(s_top > 200) {

            $('.nav').css({
                position : 'fixed',
                left : 0,
                top : 0,
                zIndex : 123456,
                background: '#fff',
                transition: 'all 0.5s'
            })


        }
        else {
            $('.nav').css({
                position: 'relative'
            })
        }
    
    });

/////////// 상품 이미지 회전 /////////////////

    let s_top = $(window).scrollTop();
    let item = $('.item_info_img');

    if(s_top >= 0){

        setTimeout(function(){

            $(item).css({
                transform: 'rotateY(0)',
            })

        })
    };


////////////// 하단 슬라이드 ///////////////////


////// 아이스크림 사이즈 /////

    // item 기본 자리 세팅
    let item_width = $('.item').eq(0).outerWidth();
    let item_count = $('.item').length;

    for(let i=0; i<item_count; i++) {
        $('.item').eq(i).css({left: item_width * i})    
    } 

    let index_no = 0;
    let timer = 500;

    $('#btn_R').click(function(){

        $('.item').animate({
            left: '-='+item_width
        }, timer, 'linear');

        $('.item').eq(index_no % item_count).animate({

            left: item_width * (item_count - 1)
        }, 0, 'linear')
        index_no += 1;

    
    });
    $('#btn_L').click(function(){ 
        index_no -= 1;

        $('.item').eq(index_no % item_count).animate({

            left: -item_width
        }, 0, 'linear')
        

        $('.item').animate({
            left: '+='+item_width
        }, timer, 'linear');
    });

////// 핫커피 ///////

    // item 기본 자리 세팅
    let item_width1 = $('.item1').eq(0).outerWidth();
    let item_count1 = $('.item1').length;

    for(let i=0; i<item_count1; i++) {
        $('.item1').eq(i).css({left: item_width1 * i})    
    } 

    let index_no1 = 0;
    let timer1 = 500;

    $('#btn_R1').click(function(){
        // 각각의 칸(item)의 현재 위치에서 -200 하기
        $('.item1').animate({
            left: '-='+item_width1
        }, timer1, 'linear');

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.item1').eq(index_no1 % item_count1).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: item_width1 * (item_count1 - 1)
        }, 0, 'linear')
        index_no1 += 1;


    });
    $('#btn_L1').click(function(){ 
        index_no1 -= 1;

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.item1').eq(index_no1 % item_count1).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: -item_width1
        }, 0, 'linear')
        
        // 각각의 칸(item)의 현재 위치에서 -200 하기
        $('.item1').animate({
            left: '+='+item_width1
        }, timer1, 'linear');
    });

////// 아이스 커피 ///////

    // item 기본 자리 세팅
    let item_width2 = $('.item2').eq(0).outerWidth();
    let item_count2 = $('.item2').length;

    for(let i=0; i<item_count2; i++) {
        $('.item2').eq(i).css({left: item_width2 * i})    
    } 

    let index_no2 = 0;
    let timer2 = 500;

    $('#btn_R2').click(function(){
        // 각각의 칸(item)의 현재 위치에서 -200 하기
        $('.item2').animate({
            left: '-='+item_width2
        }, timer2, 'linear');

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.item2').eq(index_no2 % item_count2).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: item_width2 * (item_count2 - 1)
        }, 0, 'linear')
        index_no2 += 1;


    });
    $('#btn_L2').click(function(){ 
        index_no2 -= 1;

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.item2').eq(index_no2 % item_count2).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: -item_width2
        }, 0, 'linear')
        
        // 각각의 칸(item)의 현재 위치에서 -200 하기
        $('.item2').animate({
            left: '+='+item_width2
        }, timer2, 'linear');
    });

 

 



})