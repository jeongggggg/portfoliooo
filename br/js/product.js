$(document).ready(function(){
    
/////item 가져오기 ///////

for(let i = 0; i < ITEM_LIST[cate_no].length; i++){

            
        let list ="";
            list += '<div class="item">'
            list += ' <a href="product_info.html?cate_no='+cate_no+'&item_no='+ITEM_LIST[cate_no][i].item_no+'">'
            list += '<div class="item_img">'
            list += '<img src="./img_br/product/'+img_url[cate_no]+'/'+ITEM_LIST[cate_no][i].src+'" alt="상품이미지">'
            list += '<div class="item_spon">'
            list += '<img src="./img_br/icon_logo/spon.png" alt="핑크스푼이미지">'
            list += '</div>'
            list += '</div>'
            list += '<div class="item_title">'
            list +=  ITEM_LIST[cate_no][i].title
            list += '</div>'
            list += '<div class="item_tag">'
            list += ITEM_LIST[cate_no][i].tag
            list += '</div>'
            list += '<div class="item_buy">'
            list += '구매하기'
            list += '</div>'
            list+= '</a>'
            list += '</div>'
    
            $('.product_container').append(list);
    
    
        }
    
    if(cate_no == 1){
        $('.item_spon').css({
            display : 'none'
        })

    }

    else if(cate_no == 2){
        $('.item_spon').css({
            display : 'none'
        })
    }

    else if(cate_no == 3){
        $('.item_spon').css({
            display : 'none'
        })
    }

    else if(cate_no == 4){
        $('.item_spon').css({
            display : 'none'
        })
    }

    //////////////// 메뉴 배너 svg ////////////////

        let paths = $('#Layer_1').find('path');

        paths.each(function(i, path){
            // 각각의 패스 길이(length)를 구한다
            let total_length = path.getTotalLength();
            // console.log(total_length);

            // stroke_dasharray - 라인(점선)의 길이
            path.style.strokeDasharray = total_length;

            // strokeDashoffse - 시작 위치 결정
            path.style.strokeDashoffset = total_length;

            $(path).animate({
                strokeDashoffset: 0
            }, 1500)
        })

        let paths2 = $('#Layer_2').find('path');

        paths2.each(function(i, path){

            let total_length2 = path.getTotalLength();
            // console.log(total_length2);

            path.style.strokeDasharray = total_length2;

            path.style.strokeDashoffset = total_length2;

            $(path).animate({
                strokeDashoffset: 0
            }, 1500)
        })

        let paths3 = $('#Layer_3').find('path');

        paths3.each(function(i, path){

            let total_length3 = path.getTotalLength();
            // console.log(total_length3);

            path.style.strokeDasharray = total_length3;

            path.style.strokeDashoffset = total_length3;

            $(path).animate({
                strokeDashoffset: 0
            }, 1500)
        })

        let paths4 = $('#Layer_4').find('path');

        paths4.each(function(i, path){

            let total_length4 = path.getTotalLength();
            // console.log(total_length4);

            path.style.strokeDasharray = total_length4;

            path.style.strokeDashoffset = total_length4;

            $(path).animate({
                strokeDashoffset: 0
            }, 1500)
        })

        let paths5 = $('#Layer_5').find('path');

        paths5.each(function(i, path){

            let total_length5 = path.getTotalLength();
            // console.log(total_length5);

            path.style.strokeDasharray = total_length5;

            path.style.strokeDashoffset = total_length5;

            $(path).animate({
                strokeDashoffset: 0
            }, 1500)
        })

    ////////////// 해당 하는 svg만 보이게 ////////

    if(cate_no == 0){
        $('#Layer_1').addClass('svg_title_active');
    }

    else if(cate_no == 1){
        $('#Layer_2').addClass('svg_title_active');
    }

    else if(cate_no == 2){
        $('#Layer_3').addClass('svg_title_active');
    }

    else if(cate_no == 3){
        $('#Layer_4').addClass('svg_title_active');
    }

    else if(cate_no == 4){
        $('#Layer_5').addClass('svg_title_active');
    }


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


})