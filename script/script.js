$(document).ready(() => {
    // Header logic
    $(window).click(e => {
        const target = e.target;
        if (!target.closest('#menu-btn') && !target.closest('.menubox') && $(".menubox").css("visibility") == "visible") { 
            $("#menu-toggle").prop('checked', false);
            $('.menubox').toggleClass('active');
        }
    });
    $(".menu-item").click(function () {
        $("#menu-toggle").prop('checked', false);
        $('.menubox').toggleClass('active');
    });
    $('.menu-btn').click(function () {
        $('.menubox').toggleClass('active');
    });
    $('#close_menu').click(() => {
        $("#menu-toggle").prop('checked', false);
        $('.menubox').toggleClass('active');
    });
    headerChange();
    burgerChange();
    $(window).scroll(headerChange);
    $(window).resize(() => {
        headerChange();
        burgerChange();
        if ($(window).width() >= 1050 || $(window).width() < 500) {
            $('.topic_theme').removeAttr('style');
        }
    });
    function headerChange() {
        if ($(window).width() >= 601) {
            $('header').removeAttr('style');
            $('.logo').removeAttr('style');
            if ($(window).scrollTop() > 0) {
                $('header').css({
                    'opacity':'1',
                    'background-color': '#fff',
                    'position': 'fixed',
                    'filter': 'drop-shadow(0px 6px 21px rgba(0, 0, 0, 0.15))',
                });
                $('.logo').css({ 
                    'margin-left': '12.5vw',
                    'margin-right': '10px'
                });
                $('.logo_name').css({
                    'color':'black'
                });
                $('.links li a').css({
                    'color':'black',
                    'text-shadow':'unset'
                });
                $('.menu-btn').addClass('menuDown');
                $('.links').css({ 'margin-left': '50px' });
            } else {
                $('.menu-btn').removeClass('menuDown');
                $('header').removeAttr('style');
                $('.logo_name').removeAttr('style');
                $('.links li a').removeAttr('style');
                if ($(".burger-menu").css('display') != 'block') {
                    $('.links').removeAttr('style');
                }
            }
        }
        else {
            $('.logo_name').css({
                'color':'black'
            });
            $('.links li a').css({
                'color':'black',
                'text-shadow':'unset'
            });
            $('.menu-btn').addClass('menuDown');
            $('header').css({
                'background-color': '#fff',
                'position': 'fixed',
                'filter': 'drop-shadow(0px 6px 21px rgba(0, 0, 0, 0.15))',
            });
            $('.logo').css({ 
                'margin-left': '12.5vw',
                'margin-right': '10px'
            });
            $('.links').css({ 'margin-left': '50px' });
        }
        document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
        // $('.menubox').css({'padding-top': '125px', 'z-index': 5});
    }
    // -----------------------------------

    // Burger-Menu
    function burgerChange() {
        if ($(window).width() <= 1103) {
            $(".burger-menu").css('display', 'block');
            $(".links").css('display', 'none');
        } else {
            $(".burger-menu").css('display', 'none');
            $(".links").css('display', 'flex');
        }
    }
    // ----------------------------------
});