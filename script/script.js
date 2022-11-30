$(window).scroll(e => {
    $(':root').css({
        '--scrollTop': `${this.scrollY}px`
    })
})
document.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    $('.main-article_content').css({
        'transform': 'translate3d(-'+x*10+'px, -'+y*10+'px, 0)'
    })
})
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
            if ($(window).scrollTop() > 0) {
                $('header').removeAttr('style');
                $('.logo').removeAttr('style');
                $('header').css({
                    'opacity':'1',
                    'filter': 'brightness()',
                    'background-color': '#fff',
                    'position': 'fixed',
                    'filter': 'drop-shadow(0px calc(var(--index) / 15) calc(var(--index) / 1.5) rgba(0, 0, 0, 0.15))',
                });
                $('.logo_name').css({
                    'color':'black',
                });
                $('.links li a').css({
                    'color':'black',
                    'text-shadow':'unset'
                });
                $('.links li a:hover').css({
                    'color': '#a5a5a5'
                });
                $( ".links li a" ).mouseover(function() {
                    $(this).css({'color': '#a5a5a5'});
                }).mouseout(function() {
                    $(this).css({'color': 'black'});
                });
                $('.menu-btn').addClass('menuDown');
                $('.links').css({ 'margin-left': '50px' });
            } else {
                $('.menu-btn').removeClass('menuDown');
                $('header').removeAttr('style');
                $('.logo_name').removeAttr('style');
                $('.links li a').removeAttr('style');
                $( ".links li a" ).mouseover(function() {
                    $(this).css({'color': '#a5a5a5'});
                }).mouseout(function() {
                    $(this).css({'color': 'white'});
                });
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
            $('.links').css({ 'margin-left': '50px' });
        }
        // $('.menubox').css({'padding-top': '125px', 'z-index': 5});
    }
    // -----------------------------------

    // Burger-Menu
    function burgerChange() {
        if ($(window).width() <= 803) {
            $(".burger-menu").css('display', 'block');
            $(".links").css('display', 'none');
        } else {
            $(".burger-menu").css('display', 'none');
            $(".links").css('display', 'flex');
        }
    }
    // ----------------------------------

    // about animation FadeIn
    function animateFrom(elem) {
        var x = 0,
            y = 100;
        if(elem.classList.contains("gs_reveal_fromLeft")) {
          x = -10;
          y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
          x = 10;
          y = 0;
        }
        elem.style.transform = "translate(" + x + "%, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
          duration: 2.5, 
          x: 0,
          y: 0, 
          autoAlpha: 1, 
          ease: "expo", 
          overwrite: "auto"
        });
    }
      
    function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
    }
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(ScrollSmoother);
    // ScrollSmoother.create({
    //     wrapper: "body",
    //     content: 'main'
    // })
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view
        ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
    // ----------------------------------
});
  