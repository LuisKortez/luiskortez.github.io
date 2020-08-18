jQuery(document).ready(function () {
    setTimeout(function () {
        jQuery('.insale').fadeIn(300).addClass('opened');
    }, 5000);

    setTimeout(function () {
        jQuery('.insale').fadeOut(300).addClass('opened');
    }, 9000);

    jQuery(document).mouseleave(function () {
        if (!jQuery('.insale').hasClass('opened')) {
            jQuery('.insale').fadeIn('fast').addClass('opened');
        }
    });

    jQuery('.insale .exit').on('click', function (e) {
        e.preventDefault();
        jQuery(this).closest('.insale').fadeOut(300);
    });

    jQuery('.insale a').on('click', function (e) {
        e.preventDefault();
        jQuery(this).closest('.insale').fadeOut(300);
        jQuery('.pop').fadeIn(300);
        jQuery('.pop input[name="game"]').val("Скидка");
        jQuery('.pop input[type="submit"]').val("Получить Скидку");
        jQuery('.pop input[type="submit"]').val("Получить Скидку");
        jQuery('#overflow').fadeIn(200);
    });

    var corp_vac = $("#corp_vac");
    corp_vac.owlCarousel(
        {
            loop: true,
            margin: 0,
            nav: false,
            items: 1,
            dots: true,
            autoplay: 200,
        }
    );

    $('.sectionfour .to-right').click(function () {
        corp_vac.trigger('next.owl.carousel');
    });

    $('.sectionfour .to-left').click(function () {
        corp_vac.trigger('prev.owl.carousel', [300]);
    });

    var photoSlider = $('#photoSlider0');
    photoSlider.owlCarousel({
        center: true,
        items: 3,
        loop: true,
        autoplay: 2000,
        margin: -65,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                center: false,
            },
            991: {
                items: 3,
                margin: -54,
            },
            1199: {
                items: 3,
                margin: -65,
            },
        }
    });

    var ph = jQuery('#photoSlider0 .owl-stage-outer').height();
    ph = -(ph / 2 + 77);
    jQuery('.sectionfive .nav-arrows i').css('top', ph);

    $('.sectionfive .to-right').click(function () {
        photoSlider.trigger('next.owl.carousel');
    });

    $('.sectionfive .to-left').click(function () {
        photoSlider.trigger('prev.owl.carousel', [300]);
    });

    $('#hashSlider').owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        autoplay: 2000,
    });

    var report = jQuery('#report');
    report.owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 65,
        autoplay: 2000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 30,
                center: false,
            },
            991: {
                items: 3,
            },
        }
    });

    var reviewh = jQuery('#report .owl-stage-outer .center img').height();
    reviewh = -(reviewh / 2 + 350);
    jQuery('.sectionnine .nav-arrows i').css('top', reviewh);

    $('.sectionnine .to-right').click(function () {
        report.trigger('next.owl.carousel');
    });

    $('.sectionnine .to-left').click(function () {
        report.trigger('prev.owl.carousel', [300]);
    });

    jQuery("#form").submit(function (e) {
        e.preventDefault();
        var data_f = $(this).serialize();
        console.log('form test');
        $.ajax({
            type: "POST",
            url: "send_tg.php",
            data: data_f,
            beforeSend: function () {
                jQuery('#form img').fadeIn();
            },
            success: function () {
                jQuery('#form  img').fadeOut();
                jQuery('#form .succes').fadeIn();
            },
        });
    });

    jQuery(".pop form").submit(function (e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "send_tg.php",
            data: form_data,
            beforeSend: function () {
                jQuery('.pop form img').fadeIn();
            },
            success: function () {
                jQuery('.pop form img').fadeOut();
                jQuery('.pop form .succes').fadeIn();
            },
        });
    });

    jQuery('.adress').on('click', function (e) {
        e.preventDefault();
        var hill = jQuery('body').height() - 300;
        $('body,html').animate({scrollTop: hill}, 1000);
    });

    jQuery('.get_pop.work').on('click', function (e) {
        e.preventDefault();
        jQuery('.pop input[name="game"]').val(jQuery(this).attr('data-kind'));
        jQuery('.pop').fadeIn(300);
        jQuery('#overflow').fadeIn(200);
    });

    jQuery('#overflow').on('click', function (e) {
        e.preventDefault();
        jQuery('.pop').fadeOut(300);
        jQuery('.pop input[name="game"]').val('');
        jQuery('.pop input[name="tel"]').val('');
        jQuery('.pop input[name="player"]').val('');
        jQuery(this).fadeOut(200);
        jQuery('.pop form .succes').fadeOut();
    });


    if (jQuery(window).width() > 1300) {
        $("[data-paroller-factor]").paroller();
    }

    $('#video-gallery').lightGallery({
        loadYoutubeThumbnail: true,
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0
        },
        vimeoPlayerParams: {
            byline: 0,
            portrait: 0,
            color: 'A90707'
        }
    });

});