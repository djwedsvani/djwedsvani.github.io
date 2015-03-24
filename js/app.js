
$(document).ready(function(){

	$('.bg-img').width($(window).width());
	$('.bg-img').height($(window).height());

	$(window).resize(function(){
        console.log('in-resize');
		$('.bg-img').width($(window).width());
		$('.bg-img').height($(window).height());
	});

});

var highlightLink = function(){
    var path = window.location.pathname;
    console.log(path);

    $('.resp-menu ul li').removeClass('active-url');

    // // if('/^\/about-us.html/'.test(path)){
    // // if(/^\/samprathi/.test(path)){
        if (path.indexOf('index.html') > 0)
            $('[data-url=home]').addClass('active-url');
        else if(path.indexOf('where.html') > 0)
            $('[data-url=where]').addClass('active-url');
    };