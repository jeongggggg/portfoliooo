$(document).ready(function(){

    $('.nav_product_title').text(page_title[cate_no]);
    
    for(let i = 0; i < ITEM_LIST[cate_no].length; i++){

// console.log("i: " + i+", " + ITEM_LIST[cate_no][i].item_no)
        
    let list ="";
            list+= '<div class="product_item">'
            list+= '    <a href="item_mobile.html?cate_no='+cate_no+'&item_no='+ITEM_LIST[cate_no][i].item_no+'">'
            list+= '    <div class="product_item_img">'
            list+= '        <img src="./img_ft/product/'+ITEM_LIST[cate_no][i].src+'" alt="상품 이미지">'
            list+= '    </div>'
            list+= '    <div class="product_item_title">'
            list+= '        '+ITEM_LIST[cate_no][i].title+''
            list+= '    </div>'
            list+= '    <div class="product_item_line">'
            list+= '        <div class="product_item_line2"></div>'
            list+= '    </div>'
            list+= '    <div class="product_item_desc">'
            list+= '    '+ITEM_LIST[cate_no][i].desc+''
            list+= '    </div>'
            list+= '    <div class="product_item_o_price">'
            list+= '        <del>'+add_comma(ITEM_LIST[cate_no][i].o_price)+'원</del>'
            list+= '    </div>'
            list+= '    <div class="product_item_s_price">'
            list+= '        '+add_comma(ITEM_LIST[cate_no][i].s_price)+'원'
            list+= '    </div>'
            list+= '    <div class="color_box">'
            list+= '        <div class="red_box"></div>'
            list+= '        <div class="White _box"></div>'
            list+= '        <div class="gray_box"></div>'
            list+= '        <div class="black_box"></div>'
            list+= '    </div>'
            list+= '    <div class="event_box">'
            list+= '        <div class="sale_img"></div>'
            list+= '        <div class="best_img"></div>'
            list+= '    </div>'
            list+= '      </a>'
            list+= ' </div>'

            $('.product_sec').append(list);


    }

       ///// 분류 탭 /////
       $('.product_type_li').click(function(){

        $('.product_type_li').removeClass('product_type_active');
        $('.product_type_li').eq($(this).index()).addClass('product_type_active');
    })


})