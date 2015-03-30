$(document).ready(function(){

	$('.bg-img').width($(document).width());
	$('.bg-img').height($(document).height());

	$(window).resize(function(){
        // console.log('in-resize');
		$('.bg-img').width($(window).width());
		$('.bg-img').height($(window).height());
	});

});

var highlightLink = function(){

    var path = window.location.pathname;

    $('.nav-menus a').removeClass('active-url');
        if (path.indexOf('index.html') > 0)
            $('[data-url=home]').addClass('active-url');
        else if(path.indexOf('where.html') > 0)
            $('[data-url=where]').addClass('active-url');
        else if(path.indexOf('contact.html') > 0)
            $('[data-url=contact]').addClass('active-url');
};


var showRemainingTime = function(){

    var end = new Date('04/24/2015 11:59 PM');
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

        function showRemaining() {
            var now = new Date();
            var diffrence = end - now;

            if (diffrence < 0) {
                clearInterval(timer);
                document.getElementById('countdown').innerHTML = 'MAHURATAM OVER!';
                return;
            }

            var days = Math.floor(diffrence / _day);
            var hours = Math.floor((diffrence % _day) / _hour);
            var minutes = Math.floor((diffrence % _hour) / _minute);
            var seconds = Math.floor((diffrence % _minute) / _second);

            document.getElementById('countdown').innerHTML = days + ' Days : ';
            document.getElementById('countdown').innerHTML += hours + ' Hours : ';
            document.getElementById('countdown').innerHTML += minutes + ' Mins : ';
            document.getElementById('countdown').innerHTML += seconds + ' Secs';
        }

    timer = setInterval(showRemaining, 1000);
};