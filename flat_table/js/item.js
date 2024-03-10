$(document).ready(function(){

     ////웹, 모바일버전 연결////
    let tmp_info="";
    if(location.href.split("?").length > 1) {
        tmp_info="?"+location.href.split("?")[1]
    }

    let tmp = navigator.userAgent.toLowerCase();
    let array = ["android", "iphone", "ipad"];
    for(let i = 0; i < array.length; i++) {
        if(tmp.match(array[i])) {
        location.replace("item_mobile.html"+tmp_info);
        
        }
    }

    if(navigator.maxTouchPoints > 1) {
        location.replace("item_mobile.html"+tmp_info); // 모바일
    }
    // else {
    //     location.replace("item.html"+tmp_info) //데스크탑
    // }

    // document.write(navigator.userAgent) 

    

//////////////////////////////////////////////////

const cate_no = get_url_info("cate_no");
const item_no = get_url_info("item_no");

// const ITEM = ITEM_LIST[cate_no][item_no];

// console.log(ITEM_LIST[cate_no][item_no-1], cate_no, item_no);
let ITEM;
for(let i =0 ; i < ITEM_LIST[cate_no].length; i++) {
   
    if(ITEM_LIST[cate_no][i].item_no == item_no) {
        ITEM = ITEM_LIST[cate_no][i];
        break;
    }
}

// console.log(item)


    let list = ""
list+=   '<div class="item_img">'
list+=   '<img src="./img_ft/b_product/'+(ITEM.item_no)+'.png" alt="상품이미지">'
list+=   '<div class="magnifier"></div>'
list+=   '</div>'
list+= '<div class="item_desc">'
list+= '<div class="tltle">'
list+= ITEM.title
list+= '</div>'
list+= '<div class="item_desc_info">'
list+= '</div>'
list+= '<table class="item_table">'
list+= '<tr>'
list+= '<td>소비자가</td>'
list+= '<td><del>'+(add_comma(ITEM.o_price))+'원</del></td>'
list+= '</tr>'
list+= '<tr class="table_line">'
list+= '<td>판매가</td>'
list+= '<td>'+(add_comma(ITEM.s_price))+'원</td>'
list+= '</tr>'
list+= '</table>'
list+= '<div class="op_box">'
list+= '<div class="item_desc_color">'
list+= '<div class="item_desc_color_L">'
list+= '컬러'
list+= '</div>'
list+= '<div class="item_desc_color_R">'
list+= '<div class="color">'
list+= '<div class="red">'
list+= '<span>레드</span>'
list+= '</div>'
list+= '</div>'
list+= '<div class="color">'
list+= '<div class="white">'
list+= '<span>화이트</span>'
list+= '</div>'
list+= '</div>'
list+= '<div class="color">'
list+= '<div class="gray">'
list+= '<span>그레이</span>'
list+= '</div>'
list+= '</div>'
list+= '<div class="color">'
list+= '<div class="black">'
list+= '<span>블랙</span>'
list+= '</div>'
list+= '</div>'
list+= '<div class="color_opt">[필수]옵션을 선택해주세요</div>'
list+= '</div>'
list+= '</div>'
list+= '<div class="item_opt_size">'
list+= '<div class="item_opt_size_L">'
list+= '사이즈'
list+= '</div>'
list+= '<div class="item_opt_size_R">'
list+= '<div class="size size_disabled">'
list+= '<span class="s_size">S</span>'
list+= '</div>'
list+= '<div class="size size_disabled">'
list+= '<span class="m_size">M</span>'
list+= '</div>'
list+= '<div class="size size_disabled">'
list+= '<span class="L_size">L</span>'
list+= '</div>'
list+= '<div class="size size_disabled">'
list+= '<span class="XL_size">XL</span>'
list+= '</div>'
list+= '<div class="size_opt">[필수]옵션을 선택해주세요</div>'
list+= '</div>'
list+= '</div>'
list+= '</div>'
list+= '<div class="min_buy">(최소주문수량 1개 이상)</div>'
list+= '<div class="select_opt"></div>'
list+= '<div class="opt_container">'
list+= '</div>'
list+= '<div class="total_box">'
list+= '<span class="total">'
list+= '총 상품금액'
list+= '<span class="number">'
list+= '0원'
list+= '</span>'
list+= '</span>'
list+= '</div>'
list+= '<div class="buy">'
list+= 'BUY IT NOW'
list+= '</div>'
list+= '<div class="to_cart">'
list+= 'ADD TO CART'
list+= '</div>'
list+= '<div class="wish_list">'
list+= 'WISH LIST'
list+= '</div>'
list+= '</div>'

    $('#main').append(list)

    setTimeout(function() {
       
        let img_w= $('.item_img').width();
        let img_h= $('.item_img').height();

        $('.magnifier').css({
            backgroundImage: 'url(./img_ft/b_product/'+ITEM.item_no+'.png)',
            backgroundSize: img_w+"px " + img_h+"px", 
        })
    }, 50);

    //////////////////////////////////////
    let opt_color_chk = [];
    let opt_size_chk = [];
    for(let i=0; i<$('.color').length; i++) {
        opt_color_chk[i]=true;
        opt_size_chk[i]=true;

        // console.log(opt_color_chk)
    }

    // 색상 옵션 클릭시 opt_container에 자식으로 옵션 생김 ////////
    $('.color').click(function(){

        if(opt_color_chk[$(this).index()]) {
 

            $('.color').removeClass('opt_selected');
            $(this).addClass('opt_selected')

            $('.size').removeClass('size_disabled');

        }
        else {
            alert("선택된 옵션이 존재합니다")
        }
    });

    $('.size').click(function(){
        // opt_color_chk[$(this).index()] = false;
        // opt_size_chk[$(this).index()] = false;

        let tmp_color = $('.color.opt_selected').find('span').text();
        let tmp_size = $(this).find('span').text();
        let tmp_list_chk = true;
        // console.log($('.opt_box').length);
        for(let i=0; i<$('.opt_box').length; i++) {

            // console.log($('.chk_color').eq(i).text(), $('.chk_size').eq(i).text())

            if($('.chk_color').eq(i).text()==tmp_color && $('.chk_size').eq(i).text() == tmp_size) {
                alert("이미 선택된 옵션입니다.")
                tmp_list_chk = false;
            }
        }


        if(tmp_list_chk){
            let list = ""
            list += '<table class="opt_box">'
            list += '<tr>'
            list += '<td class="opt_name">'
            list += ' <div>컬러 : <span class="chk_color">'+ tmp_color +'</span></div>'
            list += ' <div>사이즈 : <span class="chk_size">'+ tmp_size +'</span></div>'
            list += '</td>'
            list += '<td class="opt_qty">'
            list += '  <input type="button" value="-" class="btn_qty btn_qty_minus">'
            list += ' <input type="text" value="1" class="txt_qty">'
            list += ' <input type="button" value="+" class="btn_qty btn_qty_plus">'
            list += ' <img src="./img_ft/icon_logo/btn_price_delete.gif" alt="구매취소버튼" class="opt_close">'
            list += ' </td>'
            list += ' <td class="opt_price">'
            list += '  <div>'+add_comma(ITEM.s_price)+'원</div>'
            list += '  <div>(적립 10,000원)</div>'
            list += ' </td>'
            list += ' </tr>'
            list += ' </table>'

            // console.log($('.opt_box'))
            // console.log(list);

            $('.opt_container').append(list);

            total_price();
        }
    });

    ///// 수량 줄이는 버튼 /////
    $(document).on('click','.btn_qty_minus', function(){
        if($(this).next('.txt_qty').val() > 1)
            $(this).next('.txt_qty').val(Number($(this).next('.txt_qty').val()) - 1);

        else {
            alert("최소 구매 수량은 1개 입니다.");
        }

        total_price();
    });

    ///// 수량 추가 버튼 /////
    $(document).on('click','.btn_qty_plus', function(){
        $(this).prev('.txt_qty').val(Number($(this).prev('.txt_qty').val()) + 1);
        
        total_price();
    });

    //// 수량 취소 버튼 //////
    $(document).on('click','.opt_close', function(){
        // $(this).parents('.opt_box').remove();

        $(this).parent().parent().parent().parent('.opt_box').remove();

        total_price();
    });
    

    // 최종금액 계산
    function total_price() {
        let total_price = 0;
        let total_qty=0;
        for(let i=0; i<$('.opt_box').length; i++) {
            total_price += Number($('.txt_qty').eq(i).val()) * ITEM.s_price;
            total_qty += Number($('.txt_qty').eq(i).val())
        }

        $('.number').text(add_comma(total_price)+"원");
        $('.final_qty').text(total_qty+"개");

    }

    ///////////////// 하단 탭 4개 ////////////////////////

    
    $('.show_in').eq(0).addClass('show_info1');

    $('.m_bot_btn > div').click(function(){

		$('.m_bot_btn > div').removeClass('b_click');
        $('.show_in').removeClass('show_info1')

		$(this).addClass('b_click');
        $('.show_in').eq($(this).index()).addClass('show_info1')

	}) 


    //////////////// 돋보기 ////////////////////////

    $('.item_img').mousemove(function(event){

        // item_bit_img 영역 안에서의 마우스 좌표 구하기
        // 334번 파일에 변수로 분리해놨었음.
        let mouse_x = (event.pageX - $('.item_img').offset().left) - ($('.magnifier').width() / 2);
        let mouse_y = (event.pageY - $('.item_img').offset().top) - ($('.magnifier').height() / 2);


        $('.magnifier').css({
            left: mouse_x,
            top: mouse_y,
            backgroundPosition: -mouse_x+"px " + -mouse_y+"px "
        })
    });
    
    $('.item_img').hover(function(){
        $('.magnifier').stop().fadeIn(100);

    }, function(){
        $('.magnifier').stop().fadeOut(100);
    })
})