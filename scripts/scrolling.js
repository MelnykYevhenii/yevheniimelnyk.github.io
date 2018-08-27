$(function(){
    $('a[data-target^="anchor"]').on('click', function(){
        var target = $(this).attr('href'), 
            bl_top = $(target).offset().top-50;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
    });
});