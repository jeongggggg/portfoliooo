$(document).ready(function(){

    // 메인슬라이드
    let index_no = 0;
    let m_b = $('.mb_box');
    let m_b_count = m_b.length;

    ////첫번째 메인배너 고정 ////
    $('.mb_box').eq(0).find('.mb_desc').css({
        // transform: "translateX('0px')",
        left: '-100px',
        opacity: 0,
        transition: 'all 0s'
    });
    setTimeout(function(){
        $('.mb_box').eq(0).find('.mb_desc').css({
            // transform: "translateX('0px')",
            left: '100px',
            opacity: 1,
            transition: 'all 0.5s'
        });
    }, 200);

    //// 오른쪽 버튼 ////
    $('#arrow_R').click(function(){
        mb_btn_init();

        // 들어올판
        m_b.eq((index_no + 1) % m_b_count).fadeIn(300);

        // 나갈판
        m_b.eq((index_no) % m_b_count).fadeOut(300);


        // if(index_no == 4){
            $('.mb_box').eq((index_no + 1) % m_b_count).find('.mb_desc').css({
                // transform: "translateX('0px')",
                left: '-100px',
                opacity: 0,
                transition: 'all 0s'
            });
            setTimeout(function(){
                $('.mb_box').eq((index_no) % m_b_count).find('.mb_desc').css({
                    // transform: "translateX('0px')",
                    left: '100px',
                    opacity: 1,
                    transition: 'all 0.5s'
                });
            }, 200);
        // }

        // console.log(index_no)

        index_no+=1; 

        ///// 인디케이터 색깔 변경 /////
        $('.circle').eq((index_no - 1) % m_b_count).removeClass('circle_active');
        $('.circle').eq((index_no) % m_b_count).addClass('circle_active');

    });
    
    //// 왼쪽 버튼 ////
    $('#arrow_L').click(function(){
        mb_btn_init();
        // 들어올판
        m_b.eq((index_no - 1) % m_b_count).fadeIn(100);
        // 나갈판
        m_b.eq((index_no) % m_b_count).fadeOut(100);

        index_no-=1;

        $('.circle').eq((index_no + 1) % m_b_count).removeClass('circle_active');
        $('.circle').eq((index_no) % m_b_count).addClass('circle_active');
    });

    //// 메인배너 자동슬라이드 ////

    function mb_interval_start() {
        mb_interval = setInterval(function(){
            $('#arrow_R').trigger('click')
        }, 3000);
    }

    mb_interval_start()

      //// 호버시 자동 슬라이드 멈춤 ////
      $('.mb_container').hover(function(){
        clearInterval(mb_interval);
    }, function(){
        mb_interval_start();
    })

    //// 버튼 막기 ////

    function mb_btn_init() {
        $('.btn_slide').css('pointerEvents' , 'none');
        setTimeout(function(){
            $('.btn_slide').css('pointerEvents' , 'auto');
        }, 1000)
    }

    //// 인디케이터 클릭 ////

    $('.circle').click(function(){   
        mb_btn_init(); // 



        console.log($(this).index());
        let ttt = $(this).index();

        if($('.circle.circle_active').index() > ttt) {
            // 들어올 판
            m_b.stop().fadeOut(100);
            m_b.eq(ttt).stop().fadeIn(100);

            index_no=ttt+1; 

        }

        else{
            // 나갈 판
            m_b.fadeOut(100);
            m_b.eq(ttt).fadeIn(100);

            index_no=ttt-1; 

        
        }

            // 들어올 문구
        $('.mb_box').eq(ttt).find('.mb_desc').css({
            left: '-100px',
            opacity: 0,
            transition: 'all 0s'
        });

        setTimeout(function(){
            $('.mb_box').eq(ttt).find('.mb_desc').css({
                // transform: "translateX('0px')",
                left: '100px',
                opacity: 1,
                transition: 'all 0.5s'
            });
        }, 200);

        
        $('.circle').removeClass('circle_active');
        $('.circle').eq(ttt).addClass('circle_active');
    })


    /// 아코디언

    $('.acdion_title').click(function(){

        $('.acdion_desc').stop().slideUp();
        $(this).find('.acdion_desc').stop().slideDown();
    });

     /// weekly item ///

     for(let i = 0; i < ITEM_LIST[0].length; i++){

        if(i >= 1 && i<=12){
        let list ="";
            list += '<div class="weekly_item">'
            list += ' <a href="product_info.html?cate_no='+0+'&item_no='+ITEM_LIST[0][i].item_no+'">'
            list += '<img src="../img/item_1/exo/'+ITEM_LIST[0][i].src+'" alt="weeklybest">'
            list += '<div class="week_desc">'
            list += '<p class="artist_name" >'+ITEM_LIST[0][i].artist+'</p>'
            list += '<p class="product_name">'+ITEM_LIST[0][i].title+'<img src="../img/product_page_img/p_icon/icon_201811011719302300.png" alt="장바구니">'
            list += '</p>'
            list += '<p class="product_price">'+ITEM_LIST[0][i].price+'</p>'
            list +=  '</div>'
            list += '</a>'
            list += '</div>'
    
            $('.weekly_box').append(list);
    
    
        }

    }

    ///////////////////// weekly 슬라이드 //////////////////////////

    // item 기본 자리 세팅
    let new_banner_width = $('.weekly_item').eq(0).innerWidth();
    let new_banner_count = $('.weekly_item').length;

    for(let i=0; i<new_banner_count; i++) {
        $('.weekly_item').eq(i).css({left: new_banner_width * i})
    } 

    let new_index_no = 0;
    let new_timer = 500;
    $('#weekly_btn_R').click(function(){

        // 아이템의 width만큼 - 방향으로 이동
        $('.weekly_item').animate({
            left: '-='+new_banner_width
        }, new_timer, 'linear');

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.weekly_item').eq(new_index_no % new_banner_count).animate({
            // item의 가로사이즈 * 마지막 방번호
            left: new_banner_width * (new_banner_count - 1)
        }, 0, 'linear')

        new_index_no += 1;

        // 인디케이터 색 변경
        $('.weekly_indi').removeClass('weekly_active');
        $('.weekly_indi').eq(new_index_no % new_banner_count).addClass('weekly_active');

        // 버튼&인디케이터 초기화
        $('.weekly_btn, .weekly_indi').css({pointerEvents: 'none'});
        setTimeout(function(){
            $('.weekly_btn, .weekly_indi').css({pointerEvents: 'auto'});
        }, new_timer)
    });

    $('#weekly_btn_L').click(function(){ 
        new_index_no -= 1;

        // 특정번째꺼 반대쪽 끝으로 이동
        $('.weekly_item').eq(new_index_no % new_banner_count).animate({
            // weekly_item의 가로사이즈 * 마지막 방번호
            left: -new_banner_width
        }, 0, 'linear')
        
        // 각각의 칸(weekly_item)의 현재 위치에서 -200 하기
        $('.weekly_item').animate({
            left: '+='+new_banner_width
        }, new_timer, 'linear');

        // 인디케이터 색 변경
        $('.weekly_indi').removeClass('weekly_active');
        $('.weekly_indi').eq(new_index_no % 12).addClass('weekly_active');
        
        // 버튼&인디케이터 초기화
        $('.weekly_btn, .weekly_indi').css({pointerEvents: 'none'});
        setTimeout(function(){
            $('.weekly_btn, .weekly_indi').css({pointerEvents: 'auto'});
        }, new_timer)
    });
    
    // 인디케이터 클릭시 인디의 색 변경
    $('.weekly_indi').click(function(){
        let issue_now_click = $(this).index(); // 방금 클릭한 인디
        let issue_has_color = $('.weekly_active').index(); // 클릭하는 순간에 색 칠해져 있는 인디

        let issue_gap = issue_now_click - issue_has_color;

        if(issue_now_click < issue_has_color) {
            for(let i=0; i<issue_gap * -1; i++) {

                $('#weekly_btn_L').trigger('click')
            }
        }
        else if(issue_now_click > issue_has_color) {
            for(let i=0; i<issue_gap; i++) {
                $('#weekly_btn_R').trigger('click')
            }
        }
    });



    //// all product ////

    for(let i = 0; i < ITEM_LIST[0].length; i++){

        if(i >= 12 && i<=32){
        let list ="";
            list += '<div class="product_item">'
            list += ' <a href="product_info.html?cate_no='+0+'&item_no='+ITEM_LIST[0][i].item_no+'">'
            list += '<div class="product_img">'
            list += '<img src="../img/item_1/exo/'+ITEM_LIST[0][i].src+'" alt="product">'
            list += '<div class="product_desc">'
            list += '<p class="artist_name" >'+ITEM_LIST[0][i].artist+'</p>'
            list += '<p class="product_name">'+ITEM_LIST[0][i].title+'<img src="../img/product_page_img/p_icon/icon_201811011719302300.png" alt="장바구니">'
            list += '</p>'
            list += '<p class="product_price">'+ITEM_LIST[0][i].price+'</p>'
            list +=  '</div>'
            list += '</a>'
            list += '</div>'
    
            $('.product_box').append(list);
    
    
        }

    }


    /// recommended for you ///

        // 첫번째 판
        for(let i = 0; i < ITEM_LIST[0].length; i++){

            if(i >= 33 && i<=35){
                let list ="";
                list += '<div class="recom_item">'
                list += ' <a href="product_info.html?cate_no='+0+'&item_no='+ITEM_LIST[0][i].item_no+'">'
                list += '<img src="../img/item_1/exo/'+ITEM_LIST[0][i].src+'" alt="추천상품">'
                list += '<div class="recom_desc">'
                list += '<p class="artist_name" >'+ITEM_LIST[0][i].artist+'</p>'
                list += '<p class="product_name">'+ITEM_LIST[0][i].title+'<img src="../img/product_page_img/p_icon/icon_201811011719302300.png" alt="장바구니">'
                list += '</p>'
                list += '<p class="product_price">'+ITEM_LIST[0][i].price+'</p>'
                list +=  '</div>'
                list += '</a>'
                list += '</div>'
            
                
                $('#recom_pan1').append(list);
            
        
            }
    
        }

        // 두번째 판
        for(let i = 0; i < ITEM_LIST[0].length; i++){

            if(i >= 36 && i<=38){
                let list ="";
                list += '<div class="recom_item">'
                list += ' <a href="product_info.html?cate_no='+0+'&item_no='+ITEM_LIST[0][i].item_no+'">'
                list += '<img src="../img/item_1/exo/'+ITEM_LIST[0][i].src+'" alt="추천상품">'
                list += '<div class="recom_desc">'
                list += '<p class="artist_name" >'+ITEM_LIST[0][i].artist+'</p>'
                list += '<p class="product_name">'+ITEM_LIST[0][i].title+'<img src="../img/product_page_img/p_icon/icon_201811011719302300.png" alt="장바구니">'
                list += '</p>'
                list += '<p class="product_price">'+ITEM_LIST[0][i].price+'</p>'
                list +=  '</div>'
                list += '</a>'
                list += '</div>'
            
                
                $('#recom_pan2').append(list);
            
        
            }
    
        }

        // 세번째 판
        for(let i = 0; i < ITEM_LIST[0].length; i++){

            if(i >= 39 && i<=42){
                let list ="";
                list += '<div class="recom_item">'
                list += ' <a href="product_info.html?cate_no='+0+'&item_no='+ITEM_LIST[0][i].item_no+'">'
                list += '<img src="../img/item_1/exo/'+ITEM_LIST[0][i].src+'" alt="추천상품">'
                list += '<div class="recom_desc">'
                list += '<p class="artist_name" >'+ITEM_LIST[0][i].artist+'</p>'
                list += '<p class="product_name">'+ITEM_LIST[0][i].title+'<img src="../img/product_page_img/p_icon/icon_201811011719302300.png" alt="장바구니">'
                list += '</p>'
                list += '<p class="product_price">'+ITEM_LIST[0][i].price+'</p>'
                list +=  '</div>'
                list += '</a>'
                list += '</div>'
            
                
                $('#recom_pan3').append(list);
            
        
            }
    
        }

    /////////////// recommended for you 슬라이드 /////////////////

    // 판 움직이는 함수
    function slide(coming_i, coming_pos, outing_i, outing_pos) {

        // 들어올판 
        $('.recom_pan').eq( coming_i ).css({left: coming_pos}).animate({
            left: 0
        }, 1000);

        // 나갈판 
        $('.recom_pan').eq( outing_i ).animate({
            left: outing_pos
        }, 1000);

        $('.recom_indi').eq(outing_i).removeClass('recom_active');
        $('.recom_indi').eq(coming_i).addClass('recom_active');
    }

    // 버튼 막기 함수
    function btn_init() {
        $('.recom_btn').css('pointerEvents' , 'none');
        setTimeout(function(){
            $('.recom_btn').css('pointerEvents' , 'auto');
        }, 1000)
    }


    $('.recom_pan').eq(0).css({left: 0}) // 0번 자리 초기화

    
    let r_index_no = 1;
    let r_length = $('.recom_pan').length;
    
    $('.recom_indi').click(function(){   
        btn_init();
        if($('.recom_indi.recom_active').index() > $(this).index()) {
            //왼쪽에서 들어오게
            slide($(this).index(), '-100%', $('.recom_indi.recom_active').index() , '100%'); 
        }
        else {
            // 오른쪽에서 들어오게
            slide($(this).index(), '100%', (r_index_no - 1) % r_length, '-100%'); 
        }
        r_index_no = $(this).index() + 1;

    });

    $('#recom_btn_R').click(function(){
        btn_init();
        slide(r_index_no % r_length, '100%', (r_index_no - 1) % r_length, '-100%'); 
        r_index_no+=1; 
    });

    $('#recom_btn_L').click(function(){
        btn_init();
        r_index_no-=1;
        slide((r_index_no - 1) % r_length, '-100%', r_index_no % r_length, '100%');
    }); 
    
    /// 맨 하단 배너 마우스 좌표 ///

    $('.bottom_banner').mousemove(function(){

        
        if(event.offsetX < 297){
            $('.fx_box').css({
                opacity : 1,
                transition: 'all 0.5s'
            })
        }

        else{
            $('.fx_box').css({
                opacity : 0,
                transition: 'all 0.5s'
            })
        }

        if(event.offsetX > 1300){
            $('.redvel_box').css({
                opacity : 1,
                transition: 'all 0.5s'
            })
        }

        else{
            $('.redvel_box').css({
                opacity : 0,
                transition: 'all 0.5s'
            })
        }



    })
})