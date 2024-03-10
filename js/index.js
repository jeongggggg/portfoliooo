$(document).ready(function(){
    let s_top = $(window).scrollTop();
    /////////////////////////////sec1 canvas 모음/////////////////////////////

    const canvas1 = document.getElementById('canvas_L_bot'); // 왼쪽 아래 물결
    const ctx1 = canvas1.getContext('2d');

    ctx1.fillStyle = "#febd01";

    ctx1.beginPath();

    ctx1.moveTo(0,100);
    ctx1.bezierCurveTo(90,120,150,150,180,250);

    ctx1.moveTo(180,250);
    ctx1.bezierCurveTo(250,600,800,100,500,1000);

    ctx1.lineTo(0,500);
    ctx1.lineTo(0,100);
    
    ctx1.fill();
     
//     let posX1=90;
//     let posY1=120;
//     let ttt = setInterval(function(){
//         posX1++;
//         posY1++;
// console.log(posX1, posY1)
//         ctx1.clearRect(0,0, canvas1.width, canvas1.height);
//         ctx1.beginPath();
//         ctx1.moveTo(0,100);

//         if(posY1 >=250) {
// clearInterval(ttt)

//             posX1--;
//             posY1--;
// console.log(90,120,0,posY1,180,250);            
//         }

//         ctx1.bezierCurveTo(posX1,posY1,150,150,180,250);

//         ctx1.moveTo(180,250);
//         ctx1.bezierCurveTo(250,600,800,100,500,1000);

//         ctx1.lineTo(0,500);
//         ctx1.lineTo(0,100);
        
//         ctx1.fill();
    // }, 10);

    ///////////////////////////////////////////////////////////////

    const canvas2 = document.getElementById('canvas_R_top');  /// 오른쪽 위 물결
    const ctx2 = canvas2.getContext('2d');

    ctx2.fillStyle = "#0079ba";

    ctx2.beginPath();

    ctx2.moveTo(0,0);
    ctx2.bezierCurveTo(10,190,200,100,270,150); 

    ctx2.moveTo(270,150);
    ctx2.bezierCurveTo(340,180,390,600,900,500); 

    ctx2.lineTo(600,0);
    ctx2.lineTo(0,0);

    ctx2.fill();

    ///////////////////////////////////////////////////////////////

    const canvas3 = document.getElementById('canvas_square');  //// 왼쪽 위 사각형
    const ctx3 = canvas3.getContext('2d');

    ctx3.fillStyle = "#ff6e59";

    ctx3.beginPath();

    ctx3.fillRect(0,0,500,25);

    
    ///////////////////////////////////////////////////////////////

    const canvas4 = document.getElementById('canvas_L_f_circle');  //// 왼쪽 채워진 원
    const ctx4 = canvas4.getContext('2d');

    ctx4.fillStyle = "#febd01";

    ctx4.beginPath();

    ctx4.arc(50, 50, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    ctx4.fill();

    ///////////////////////////////////////////////////////////////

    const canvas5 = document.getElementById('canvas_L_s_circle');  //// 왼쪽 선만 있는 원
    const ctx5 = canvas5.getContext('2d');

    // ctx5.strokeStyle = "#0165b0";
    // ctx5.lineWidth = "3"

    // ctx5.beginPath();

    // ctx5.arc(52, 52, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    // ctx5.stroke();

    ///// 왼쪽 선만 있는 원 그려지게 /////
    
    let inter2 = setInterval(function(){
        ctx5.beginPath();
        ctx5.arc(52, 52, 50, pi * -90, pi * count++, false);

        // -90이 캔버스 시작점인 3시 방향에서 90도를 빼서 거기부터(12시) 시작하겠다는 거임 

        ctx5.lineCap="round";
        ctx5.strokeStyle = "#0165b0";
        ctx5.lineWidth = "3"

        ctx5.stroke();

        if(count > 360) {
            clearInterval(inter2)
        }
    }, 0.5)

    ///////////////////////////////////////////////////////////////

    const canvas6 = document.getElementById('canvas_R_f_circle');  //// 오른쪽 채워진 원
    const ctx6 = canvas6.getContext('2d');

    ctx6.fillStyle = "#ff6e59";

    ctx6.beginPath();

    ctx6.arc(100, 120, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    ctx6.fill();

    ///////////////////////////////////////////////////////////////

    const canvas7 = document.getElementById('canvas_R_s_circle');  ///// 오른쪽 선만 있는 원
    const ctx7 = canvas7.getContext('2d');

    // ctx7.strokeStyle = "#0165b0";
    // ctx7.lineWidth = "3"

    // ctx7.beginPath();

    // ctx7.arc(102, 102, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);

    // ctx7.stroke();

    ///// 오른쪽 선만 있는 원 그려지게 /////
    let count = -90;
    let pi = (Math.PI / 180);
    let inter = setInterval(function(){
        ctx7.beginPath();
        ctx7.arc(102, 102, 100, pi * -90, pi * count++, false);

        // -90이 캔버스 시작점인 3시 방향에서 90도를 빼서 거기부터(12시) 시작하겠다는 거임 

        ctx7.lineCap="round";
        ctx7.strokeStyle = "#0165b0";
        ctx7.lineWidth = "3"

        ctx7.stroke();

        if(count > 360) {
            clearInterval(inter)
        }
    }, 0.5)

    
    /////////////// sec2 왼쪽 위 물결모양 canvas /////////

    const canvas8 = document.getElementById('sec2_L_top');
    const ctx8 = canvas8.getContext('2d');

        ctx8.fillStyle = "#ff6e59";

        ctx8.beginPath();

        ctx8.moveTo(572,0);
        ctx8.bezierCurveTo(572,150,80,10,300,300);

        ctx8.moveTo(300,300);
        ctx8.bezierCurveTo(500,500,0,400,0,400);

        ctx8.lineTo(0,0);
        ctx8.lineTo(572,0);

        ctx8.fill();

     /////////////////////스킬 게이지///////////////////////
     let inter_gauge = [];
     
     function gauge(gauge, score_num, bg_color, index, score){
        let count = 0;
        let tmp_index = index;

        clearInterval(inter_gauge[tmp_index] )
        inter_gauge[tmp_index] = setInterval(function(){    

            // 게이지 높이 변경
            $(gauge).css({
                height : 600 /100 * count ,
                background : bg_color
            })
            // 숫자 변경
            $(score_num).text(count + '%');

            $('.skills_html_box').eq(tmp_index).find('.num  ').css({
                // height : 600 /100 * count ,
                position: 'absolute',
                bottom: 600 /100 * count + 50,
                left: '50%',
                transform: 'translateX(-50%)'
            })

            count++;

            if(count > score) {
                clearInterval(inter_gauge[tmp_index])
            }

        }, 10)

        // console.log(gauge,score_num)
    }

        let scroll_chk = true;
     $(window).scroll(function(){
        let ss_top = $(window).scrollTop();


        if(scroll_chk && ss_top >= $('.sec3_container').offset().top - 200){
            scroll_chk=false;
            
            gauge('.f1','.num1','#e44d26', 0, 95);
            gauge('.f2','.num2','#016cb4', 1, 98);
            gauge('.f3','.num3','#cdb600', 2, 80);
            gauge('.f4','.num4','#0055a5', 3, 90);
            gauge('.f5','.num5','#383c79', 4, 60);
            gauge('.f6','.num6','#42b242', 5, 60);
            gauge('.f7','.num7','#14c0f7', 6, 85);
            gauge('.f8','.num8','#f37e0b', 7, 70);
    
        }
        
    })  
     //////////도형들 나타내기/////////
 
        if(s_top >= 0){
    
            setTimeout(function(){

                $('#canvas_L_f_circle').css({
                    transform: 'scale(1)',
                    transition : 'all 1s'
                })

                $('#canvas_R_f_circle').css({
                    transform: 'translateY(0)',
                    opacity : 1,
                    transition : 'all 1s'
                })

                $('#canvas_square').css({
                    transform : 'rotate(0)',
                    transition : 'all 1s',
                    opacity : 1
                })

                $('#canvas_L_bot').css({
                    transform : 'translate(0)',
                    transition : 'all 1s'
                })

                $('#canvas_R_top').css({
                    transform : 'translateY(0)',
                    transition : 'all 1s',
                    opacity : 1
                })

            })
        };

    /////////// 글자 하나씩 올라오게 ///////////

    let pb_span = $('.pb_span');
    let t_name = $('.t_name');
    let port_span = $('.port_span');
    let about = $('.about')

    if(s_top >= 0){

        for(let i=0; i<pb_span.length; i++){ //// 퍼블리셔

            (function(tmp_i){
                setTimeout(function(){
                    pb_span.eq(tmp_i).addClass('publisher_active');

                    tmp_i++;

                },100 * tmp_i + 1)

            })(i)
        }

        for(let i=0; i<t_name.length; i++){  //// 이름

            (function(tmp_i){
                setTimeout(function(){
                    t_name.eq(tmp_i).addClass('t_name_active');

                    tmp_i++;

                },100 * tmp_i + 1)

            })(i)
        }

        for(let i=0; i<port_span.length; i++){ //// 포트폴리오

            
            (function(tmp_i){
                setTimeout(function(){
                    port_span.eq(tmp_i).addClass('port_span_active');

                    tmp_i++;

                    // console.log(pu_p.eq(tmp_i))

                },100 * tmp_i + 1)

            })(i)
        }
    };


    ////// sec2 title///////

    $(window).scroll(function(){
        if(s_top = $('.sec2_container').offset().top){
            $('.sec2_title > p').css({
                transform : 'translateY(0)',
                transition : 'all 0.5s'
            })
    
            $('#sec2_L_top').css({
                transform : 'translateX(0)'
            })
    
            for(let i=0; i<about.length; i++){ //// sec2 about me
    
                
                (function(tmp_i){
                    setTimeout(function(){
                        about.eq(tmp_i).addClass('about_active');
    
                        tmp_i++;
    
                    },100 * tmp_i + 1)
    
                })(i)
            }
            
        }

        if(s_top >900){
            $('.profile_name > p:nth-child(2)').css({
                transform : 'translateY(0)',
                transition : 'all 1s'
            })

            $('.profile_birth > p:nth-child(2)').css({
                transform : 'translateY(19%)',
                transition : 'all 1s'
            })

            $('.profile_address > p:nth-child(2)').css({
                transform : 'translateY(0)',
                transition : 'all 1s'
            })
        }
    })

    // /////////스크롤 휠////////

    // let chk_slide = true;
    // $('.sec').on('mousewheel DOMMouseScroll', function(){
    //     // console.log(event.wheelDelta / 120);
    //     // console.log($(this).next().length)
    //     event.preventDefault();
    //     // 자스는 유연하게 뒤에 -가 있으면 앞이랑 뒤에 문자랑 숫자가 있으면 숫자로 인식해서 계산해줌 +는 안됨

    //     if(chk_slide) {
    //         chk_slide = false;
    //         setTimeout(function(){
    //             chk_slide = true;
    //         }, 1000)

    //         let dir = event.wheelDelta;
    //         let pos;
    //         if(dir < 0) { // 휠 내림
    //             if($(this).next().length > 0) {
    //                 pos = $(this).next().offset().top
    //             }
    //         }
    //         else if(dir > 0) { // 휠 올림
    //             if($(this).prev().length > 0) {
    //                 pos = $(this).prev().offset().top
    //             }
    //         } 
    //         $('html, body').stop().animate({
    //             scrollTop: pos
    //         }, 1000)
    //     }
    // });

    ////////// 네비 인디 이동 /////////

    $(document).on('click','.indi', function(){
        event.preventDefault();

        // href로 해당 섹션 o_top 이용
        let href = $(this).attr('href'); // #sec1, #sec2, #sec3
        let o_top = $(href).offset().top;
        
        $('html,body').animate({
            scrollTop: o_top
        }, 500)

    });

    // indi의 사이즈 변경
            let sec1_o_top = $('#sec1').offset().top;
            let sec2_o_top = $('#sec2').offset().top;
            let sec3_o_top = $('#sec3').offset().top;
            let sec4_o_top = $('#sec4').offset().top;
            let sec5_o_top = $('#sec5').offset().top;
            let sec6_o_top = $('#sec6').offset().top;
            let sec7_o_top = $('#sec7').offset().top;

            let sec1_o_bot = sec1_o_top + $('#sec1').height();
            let sec2_o_bot = sec2_o_top + $('#sec2').height();
            let sec3_o_bot = sec3_o_top + $('#sec3').height();
            let sec4_o_bot = sec4_o_top + $('#sec4').height();
            let sec5_o_bot = sec5_o_top + $('#sec5').height();
            let sec6_o_bot = sec6_o_top + $('#sec6').height();
            let sec7_o_bot = sec7_o_top + $('#sec7').height();

            $(window).scroll(function(){
                let s_top = $(window).scrollTop() + 100;

                if(sec1_o_top <= s_top && s_top < sec1_o_bot) {
                    $('.indi').removeClass('indi_active').eq(0).addClass('indi_active')
                }
                else if(sec2_o_top <= s_top && s_top < sec2_o_bot) {
                    $('.indi').removeClass('indi_active').eq(1).addClass('indi_active')
                }
                else if(sec3_o_top <= s_top && s_top < sec3_o_bot) {
                    $('.indi').removeClass('indi_active').eq(2).addClass('indi_active')
                }

                else if(sec4_o_top <= s_top && s_top < sec4_o_bot) {
                    $('.indi').removeClass('indi_active').eq(3).addClass('indi_active')
                }

                else if(sec5_o_top <= s_top && s_top < sec5_o_bot) {
                    $('.indi').removeClass('indi_active').eq(4).addClass('indi_active')
                }

                else if(sec6_o_top <= s_top && s_top < sec6_o_bot) {
                    $('.indi').removeClass('indi_active').eq(5).addClass('indi_active')
                }

                else if(sec7_o_top <= s_top && s_top < sec7_o_bot) {
                    $('.indi').removeClass('indi_active').eq(6).addClass('indi_active')
                }
            
            });


    /////////////// sec4_title /////////////
    $(window).scroll(function(){

        let sec4_s_top = $(window).scrollTop();
        let sec4_span = $('.sec4_span')
        // console.log(sec4_s_top)
        if(sec4_s_top > 2000){
            for(let i=0; i<sec4_span.length; i++){ 

                (function(tmp_i){
                    setTimeout(function(){
                        sec4_span.eq(tmp_i).addClass('sec4_span_active');
    
                        tmp_i++;
    
                    },50 * tmp_i + 1)
    
                })(i)
            }
            
        }

    })

    /////// 햄버거 버튼 /////////

    let ham_btn_chk = true;


    $('.hamberg_btn_box').click(function(){
        let timer = 0.3;

    if(ham_btn_chk == true){
        $('.pan').addClass('pan_active')

        $('.line').css({
            margin : '3px 0'
        })

        //line_top

        $('#line_top').css({
            transform: 'translateY(8px)',
            transition: 'all 0.3s'
            });
            
            setTimeout(function(){
                $('#line_top').css({
                    transform: 'translateY(8px) rotate(225deg)', 
                    background : '#fff'
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
                    transition: 'all 0.3s',
                    background : '#fff'
                }); 
            }, timer * 1000)
        }

    else{
            
            $('.line').css({
            margin : '8px 0'
            })

            $('.pan').removeClass('pan_active')

            //line_top
            $('#line_top').css({
                transform: 'translateY(10px) rotate(0deg)', 
                // transition: 'all '+ timer +'s'
            });
            setTimeout(function(){
                $('#line_top').css({
                    transform: 'translateY(0px)',
                    background : '#0079ba'
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
                    background : '#ff6e59'
                }); 
            }, timer * 1000)
        }
    ham_btn_chk = !ham_btn_chk
    })

    //////////////// sec5 나타나는 효과 //////////////
    $(window).scroll(function(){
        let sec5_s_top = $(window).scrollTop();
    
        if(sec5_s_top >= $('.sec5_container').offset().top - 500){
            $('.sec5_img_box').css({
                transform : 'translateX(0)',
                opacity : 1,
                transition : 'all 1.5s'
            })
            $('.sec5_desc').css({
                transform : 'translateX(0)',
                opacity : 1,
                transition : 'all 1.5s'
            })
        }
    })

     //////////////// sec6 나타나는 효과 //////////////
     $(window).scroll(function(){
        let sec6_s_top = $(window).scrollTop();
    
        if(sec6_s_top >= $('.sec6_container').offset().top - 500){
            $('.sec6_img_box').css({
                transform : 'translateX(0)',
                opacity : 1,
                transition : 'all 1.5s'
            })
            $('.sec6_desc').css({
                transform : 'translateX(0)',
                opacity : 1,
                transition : 'all 1.5s'
            })
        }
    })

         //////////////// sec8(smtown&store) 나타나는 효과 //////////////
         $(window).scroll(function(){
            let sec8_s_top = $(window).scrollTop();
        
            if(sec8_s_top >= $('.sec8_container').offset().top - 500){
                $('.sec8_img_box').css({
                    transform : 'translateX(0)',
                    opacity : 1,
                    transition : 'all 1.5s'
                })
                $('.sec8_desc').css({
                    transform : 'translateX(0)',
                    opacity : 1,
                    transition : 'all 1.5s'
                })
            }
        })



    ////////////////sec7 타이틀 한 글자씩 내려오게 //////////

    $(window).scroll(function(){
        let contact = $('.contact');
        let sec7_s_top = $(window).scrollTop();
    
        if(sec7_s_top >= $('.sec7_container').offset().top - 500){
    
            for(let i=0; i<contact.length; i++){ //// 퍼블리셔
    
                (function(tmp_i){
                    setTimeout(function(){
                        contact.eq(tmp_i).addClass('contact_active');
    
                        tmp_i++;
    
                    },100 * tmp_i + 1)
    
                })(i)
            }
        }
    })

       //////////////// sec7 아이콘 나타나는 효과 //////////////
       $(window).scroll(function(){
        let sec7_s_top = $(window).scrollTop();
    
        if(sec7_s_top >= $('.sec7_container').offset().top - 500){
            $('.icon').css({
                transform : 'rotateY(0deg)',
                opacity : 1
            })
        }
    })
});

// ctx2.moveTo(0,0);
// ctx2.bezierCurveTo(10,190,200,100,270,150); 

// ctx2.moveTo(270,150);
// ctx2.bezierCurveTo(340,180,390,600,900,500); 

////////////////////////////////////////////////

// ctx2.moveTo(0,0);
// ctx2.bezierCurveTo(60,300,300,100,600,200); 

// ctx2.moveTo(300,100);
// ctx2.bezierCurveTo(540,195,420,600,900,500); 