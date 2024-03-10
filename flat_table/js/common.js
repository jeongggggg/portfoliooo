$(document).ready(function(){

    ///// X 버튼 클릭하면 탑배너 위로 올라가면서 사라지게 /////

    $(document).on('click', '.close_btn', function(){
        $('.top_banner').slideUp(400)
        // $('.top_banner').css({
        //     display:'none'
        // })
        $('.header').css({
            top: 0
        })

        $('.main').css({
            paddingTop : 236
        })
    })

    ///////////////// 오른쪽 햄버거 버튼 //////////////////
    let ham_chk = true;

    $('.ham').click(function(){

        if(ham_chk == true){
            $('.r_quick_ham').css({
            marginRight: 0,
            transition: 'all 0.5s',
            // background: 'url(../img_ft/icon_logo/q_btn_off.png)'
            })

            $('.ham').css({
                background: 'url(./img_ft/icon_logo/q_btn_off.png)'
            })
            // ham_chk = false;
        }

        else{
            $('.r_quick_ham').css({
                marginRight: -120,
                transition: 'all 0.5s',
            })

            $('.ham').css({
                background: 'url(./img_ft/icon_logo/q_btn_on.png)',
                transition: 'all 0.5s'
            })
        }

        $('.r_quick_ham').toggleClass('ham_active')
        ham_chk = !ham_chk

        // console.log(ham_chk)
    })

    //////////////// 탑버튼,바텀버튼 /////////////////////////

    //// 탑버튼 ////
    $('.top_btn').click(function(){
        event.preventDefault();

        let href_t = $('.top_btn').attr('href');
        let timer = ""
        let s_top = $('#wrap').offset().top;
        // let s_bot = s_top + $('#wrap').height();

        if(href_t == "#wrap") {
            timer = 400
        }

        $('html, body').animate({
            scrollTop:s_top
        }, timer )

    })

    //// 바텀버튼 ////
    $(".bot_btn").click(function() {
        $('html, body').animate({scrollTop : ($('.footer').offset().top)}, 400);
    });


    ///////////////// 네비 호버시 100% ///////////////////

    // $('.nav_li, .pan').mouseenter(function(){
    //     $('.pan').addClass('pan_active');
    // });

    // $('.nav_li, .pan').mouseleave(function(){
    //     $('.pan').removeClass('pan_active')
    // });

    ////////////햄버거 버튼 클릭시 하위메뉴 100% ////////////

    let ham_btn_chk = true;


    $('.hamberg_btn_box').click(function(){
        let timer = 0.3;

    if(ham_btn_chk == true){
        $('.pan').addClass('pan_active')

        //line_top

        $('#line_top').css({
            transform: 'translateY(8px)',
            transition: 'all 0.3s'
            });
            
            setTimeout(function(){
                $('#line_top').css({
                    transform: 'translateY(8px) rotate(225deg)', 
                }); 
            }, timer * 1000)
            
            //line_mid
            setTimeout(function(){
                $('#line_mid').css({
                    transform: 'scale(0)',
                    transition: 'all 0.3s'
                })
            }, timer * 1000)

            //line_bot
            $('#line_bot').css({
                transform: 'translateY(-8px)',
                // transition: 'all '+ timer +'s'
            });
            setTimeout(function(){
                $('#line_bot').css({
                    transform: 'translateY(-8px) rotate(-225deg)', 
                    transition: 'all 0.3s'
                }); 
            }, timer * 1000)
        }

    else{
            $('.pan').removeClass('pan_active')

            //line_top
            $('#line_top').css({
                transform: 'translateY(10px) rotate(0deg)', 
                // transition: 'all '+ timer +'s'
            });
            setTimeout(function(){
                $('#line_top').css({
                    transform: 'translateY(0px)',
                }); 
            }, timer * 1000)

            //line_mid
            setTimeout(function(){
                $('#line_mid').css({
                    transform: 'scale(1)',
                    // transition: 'all '+ timer +'s'
                })
            }, timer * 1000)

            
            //line_bot
            $('#line_bot').css({
                transform: 'translateY(-10px) rotate(0deg)', 
                // transition: 'all '+ timer +'s'
            });
            setTimeout(function(){
                $('#line_bot').css({
                    transform: 'translateY(0px)',
                }); 
            }, timer * 1000)
        }
    ham_btn_chk = !ham_btn_chk
    })
    ////////////////헤더 탑에 랭킹 자동 슬라이드 //////////////

    //     let timer = 1000;
    //     let index_no1 = 0;
    //     let lank_count = $('.lank_box').length;
    //     let interval1 = ''

    //     interval1 =  setInterval(function(){

    //     $('.lank_box').eq(index_no1 % lank_count).css({ // 들어올 거
    //         top:'100PX'
    //     }).animate({
    //         top:"0"
    //     },timer / 2)

    //     $('.lank_box').eq((index_no1 - 1) % lank_count).animate({ // 나갈 거 
    //         top:'-40px'
    //     },timer / 2)

    //     index_no1+=1; // 움직인 이후에 다음방 잡기

    //     console.log(index_no1)

    // },timer)

    //////////////////스크롤시 nav 따라오게 ///////////////
    $(window).scroll(function(){
    let s_top = $(window).scrollTop();

            if(s_top > 200) {

                $('.nav').css({
                    position : 'fixed',
                    left : 0,
                    top : 0,
                    zIndex : 999999999
                })


            }
            else {

                $('.nav').css({

                    position: 'relative',
                })
            }

    });

    $(document).on('click', '.logout', function(){
        $.ajax({
            url: './php/logout.php',
            type: 'POST',
            dataType: 'JSON',
            data: {  },
            success:function(data){
                console.log("로그아웃");
                location.replace('index.html')
                
            },
            error:function(request, error){
                alert("code:" + request.status +", error: " + error)
            }
        })
    });


});

