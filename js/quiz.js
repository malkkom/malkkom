$(function(){
    $('.btn li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        let result = $(this).attr('data-alt');

        $('.quiz-desc').removeClass('active smooth')
        $('.quiz-img').removeClass('active smooth')
        $('#' + result).addClass('active smooth')
        $('.' + result).addClass('active smooth')

    })
})