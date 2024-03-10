$(document).ready(function(){

    //// 메인 하단에 탭 4개 ////

    $('.show_in').eq(0).addClass('show_info1');

    $('.m_bot_btn > div').click(function(){

		$('.m_bot_btn > div').removeClass('b_click');
        $('.show_in').removeClass('show_info1')

		$(this).addClass('b_click');
        $('.show_in').eq($(this).index()).addClass('show_info1')

	}) 
})