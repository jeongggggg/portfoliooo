$(document).ready(function(){

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

    ///////////////main_banner///////////////////////////
    // 판 움직이는 함수
    function slide(coming_i, coming_pos, outing_i, outing_pos) {

        // 들어올판 
        $('.m_b').eq( coming_i ).css({left: coming_pos}).animate({
            left: 0
        }, 1000);

        // 나갈판 
        $('.m_b').eq( outing_i ).animate({
            left: outing_pos
        }, 1000);

        $('.indi').eq(outing_i).removeClass('indi_active');
        $('.indi').eq(coming_i).addClass('indi_active');
    }

    // 버튼 막기 함수
    function btn_init() {
        $('.m_b_btn').css('pointerEvents' , 'none');
        setTimeout(function(){
            $('.m_b_btn').css('pointerEvents' , 'auto');
        }, 1000)
    }

    // 판 자동으로 움직이기
    function start_interval() {
        interval = setInterval(function(){
            $('#m_b_btn_L').trigger('click')
        }, 2000);
    }


    $('.m_b').eq(0).css({left: 0}) // 0번 자리 초기화

    
    let index_no = 1;
    let b_length = $('.m_b').length;
    
    $('.indi').click(function(){   
        btn_init();
        if($('.indi.indi_active').index() > $(this).index()) {
            //왼쪽에서 들어오게
            slide($(this).index(), '-100%', $('.indi.indi_active').index() , '100%'); 
        }
        else {
            // 오른쪽에서 들어오게
            slide($(this).index(), '100%', (index_no - 1) % b_length, '-100%'); 
        }
        index_no = $(this).index() + 1;

    });

    $('#m_b_btn_L').click(function(){
        btn_init();
        slide(index_no % b_length, '100%', (index_no - 1) % b_length, '-100%'); 
        index_no+=1; 
    });

    $('#m_b_btn_R').click(function(){
        btn_init();
        index_no-=1;
        slide((index_no - 1) % b_length, '-100%', index_no % b_length, '100%');
    }); 

    let interval; // setInterval 저장할 변수
    start_interval()

    $('.m_b_box').hover(function(){
        // 인터벌 멈춤
        clearInterval(interval)
    }, function(){
        start_interval()
    })
    
    ////////////// sec1 //////////////////////
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let item = $('.sec1_item');

        // console.log(s_top)


        if(s_top >= 500){

            for(let i=0; i<item.length; i++){

                (function(tmp_i){
                    setTimeout(function(){

                        item.eq(tmp_i).css({
                            transform: 'rotateY(0)',
                            opacity: 1
                        })
    
                        tmp_i++;
        
                    },200 * tmp_i + 1)
                })(i)
            }
        };

    });

    ///////////sec2 호버 기능 ////////////////

    $('.sec2_item').mouseover(function(){
        $('.sec2_p').removeClass('sec2_p_active');
        $('.sec2_p').eq($(this).index()-3).addClass('sec2_p_active');
    });

    $('.sec2_item').mouseout(function(){
        $('.sec2_p').removeClass('sec2_p_active');
    })

    /////////////// sec2 스크롤 기능 ////////

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let item = $('.sec2_item');

        // console.log(s_top)

        if($(window).width() > 1200 && s_top >= 1300) { 
            // if(s_top >= 1300){

                for(let i=0; i<item.length; i++){

                    (function(tmp_i){

                        let sec2_scroll = setTimeout(function(){

                            item.eq(tmp_i).css({
                                transform: 'translateY(73%)',
                                opacity: 1
                            })
    
    
                        tmp_i++;
    
    
                        },100 * tmp_i + 1)
    
                        if($(window).width() < 1300) { 
                            clearTimeout(sec2_scroll)
                        }


                    })(i)

                    
                }
            // }
        }

        $('.sec2_item').mouseover(function(){
                $('.sec2_container').css({
                    background: 'url(./img_br/sec2_bg/bg2.jpg) no-repeat center / cover fixed'
                })

                $('.sec2_item').eq($(this).index()-3).css({
                    transform : 'translateY(25%)',
                    transition : 'all 0.5s'
                })

                $('.sec2_title').css({
                    color: '#fff'
                })

                $('.sec2_title_mini').css({
                    color: '#ece1e1'
                })

        })

        $('.sec2_item').mouseout(function(){
            $('.sec2_item').css({
                transform : 'translateY(73%)'
            })
            $('.sec2_container').css({
                background: 'url(./img_br/sec2_bg/bg.jpg) no-repeat center / cover fixed',
                transition: 'all 0.3s'
            })

            $('.sec2_title').css({
                color: '#010101'
            })

            $('.sec2_title_mini').css({
                color: '#888'
            })
        })

    });

    //////////// sec3 스크롤 기능 /////////////

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let item = $('.sec3_item');

        // console.log(s_top)

        if(s_top >= 1650){

            for(let i=0; i<item.length; i++){

                (function(tmp_i){
                    
                    setTimeout(function(){

                        item.eq(tmp_i).css({
                            transform: 'translateY(0)',
                            opacity: 1
                        })


                        tmp_i++;

                    },200 * tmp_i + 1)
                })(i)

            }
        }

    });

    ////////////////// sec3 의 현재 시간 /////////////////

    setInterval(function(){
        let dt = new Date();
        let hour = dt.getHours();
        let min = dt.getMinutes();
        let sec = dt.getSeconds()

        // ampm 결정(12를 포함한 경우)
        let ampm = "AM";
        if(hour >= 12) {
            ampm = "PM"
        }

        // 12시간제로 변경(12를 포함 안함. 13부터)
        if(hour > 12) {
            hour = hour - 12;
        }
    
        // document.write(add_zero(hour) + ":" + add_zero(min) +":"+ add_zero(sec) +", " + ampm+"<br>");

        document.getElementById('br_time').innerText = ampm + " " + add_zero(hour) + ":" + add_zero(min) +":"+ add_zero(sec)
    }, 1000)

    function add_zero(num) {
        if(num < 10) {
            num = "0"+num;
        }
        return num;
    }

    //////////// sec4 이벤트 ////////////////

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        initialSlide: 4, // 새로 고침 후 기본으로 잡아주는 값
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }, 
        pagination: {
          el: ".swiper-pagination",
        },
      });

// depth	number	100	
// Depth offset in px (slides translate in Z axis)

// modifier	number	1	
// Effect multiplier

// rotate	number	50	
// Slide rotate in degrees

// slideShadows	boolean	true	
// Enables slides shadows

// stretch	number	0	
// Stretch space between slides (in px)
})