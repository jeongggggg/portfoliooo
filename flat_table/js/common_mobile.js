 $(document).ready(function(){

    ///// X 버튼 클릭하면 탑배너 위로 올라가면서 사라지게 /////

 $(document).on('click', '.close_btn', function(){
    $('.top_banner').slideUp(100)
    // $('.top_banner').css({
    //     display:'none'
    // })
    $('.header').css({
        height : 129,
        top: 0,
        transition : 'all 0.2s'
    })

    $('.main').css({
        paddingTop : 130,
        transition : 'all 0.2s'
    })
})

/////////////////햄버거 버튼 //////////////////
let ham_chk = true;

$('.header_hamberg').click(function(){

    if(ham_chk == true){
        $('.ham_pan').css({
        opacity : 1,
        left: -20,
        position : 'fixed',
        left :0,
        top:0,
        zIndex:999999999999
        })
    } 
    ham_chk = !ham_chk

})
$('#ham_close').click(function(){
    event.stopPropagation();
    
     $('.ham_pan').css({
         opacity : 0,
         left: -350
     })
     ham_chk = !ham_chk
})

//////////////////스크롤시 nav 따라오게 ///////////////

$(window).scroll(function(){
    let s_top = $(window).scrollTop();

        if(s_top > 100) {
            $('.header').css({
                height: 60,
                top:0,
                transition: 'all 0.3s'
            })

            $('.header_bot').css({
                // height: 0,
                display:'none',
                overflow:'hidden',
                transition: 'all 0.3s'
            })

            $('.top_banner').css({
                // display: 'none',
                height: 0,
                top:0,
                transition: 'all 0.3s'
            })


        }
        else {
            $('.header').css({
                height: 166,
                transition: 'all 0.3s',
                top: 0
            })

            $('.header_bot').css({
                // height: 135
                display:'block'
            })

            $('.top_banner').css({
                // display: 'none',
                height: 45,
                top:0,
                transition: 'all 0.3s'
            })
        }

});



///////////////////////////////////////

$(document).on('click', '.logout', function(){
    $.ajax({
        url: './php/logout.php',
        type: 'POST',
        dataType: 'JSON',
        data: {  },
        success:function(data){
            console.log("로그아웃");
            // location.replace('index_mobile.html')
            // console.log(location.href)
            location.replace(location.href)
            
        },
        error:function(request, error){
            alert("code:" + request.status +", error: " + error)
        }
    })
});


 })