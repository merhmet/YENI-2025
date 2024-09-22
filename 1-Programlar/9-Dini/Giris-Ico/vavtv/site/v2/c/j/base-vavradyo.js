/* ========[ lazysizes config ]============ */
//https://github.com/aFarkas/lazysizes
//------------------------------------
window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.loadMode = 0; // default 2 // 1 - 3
window.lazySizesConfig.expand = 200; // default 370 - 500 // 0 - 100
window.lazySizesConfig.expFactor = 1.5; // default 1.5 // 1 - 4
window.lazySizesConfig.hFac = 0; // default 0.8 // 0.4 - 1.5


/* ========[ setup progressbar function ]============ */

var sliderBar = 20; //demo icin deger girildi. S�f�rlanacak

$('#progressBar').slider({
    value: sliderBar,
    orientation: 'horizontal',
    range: 'min',
    animate: true
});

$('#mobileprogressBar').slider({
    value: sliderBar,
    orientation: 'horizontal',
    range: 'min',
    animate: true
});

/* ========[ header-top-middle-play setup volume function ]============ */
var vol = _vol = 50, // ses baslangic_duzeyi
    $volumePlayer = $('#volumePlayer'),
    $volumeControl = $('.volumeControl .volume');

$('.volumeControl .volume').click(function () {
    $(this).is('.active')
        ? $volumePlayer.slider({ value: _vol })
        : $volumePlayer.slider({ value: 0 });

    volSetUp($volumePlayer.slider('value'));
    $(this).toggleClass('active');

    if (volCtrl) {
        jwplayer().setMute(true);
        volCtrl = false;
    } else {
        jwplayer().setMute(false);
        volCtrl = true;
    }
});
$volumePlayer.slider({
    value: vol,
    orientation: 'horizontal',
    range: 'min',
    animate: true,
    slide: function (event, ui) {
        //console.log(ui['value']);
        volSetUp(ui['value']);
        _vol = ui['value'];
    }

     
});



function volSetUp(v) {
    $volumeControl.find('i').removeAttr('class');
    if (v == 0) $volumeControl.find('i').addClass('volume-icon').addClass('volume-icon-off');
    else if (v <= vol) $volumeControl.find('i').addClass('volume-icon').addClass('volume-icon-down');
    else if (v > vol) $volumeControl.find('i').addClass('volume-icon').addClass('volume-icon-up');

    /* canlı dosyasında aktif */
    
    if (jwplayer().getContainer != null) {
        jwplayer().setVolume(v);
    }

    


  
}

volSetUp(vol);

/* ========[ mobilePlayer setup volume function ]============ */
var vol_m = _vol_m = 50, // ses baslangic_duzeyi
    $volumePlayerMobile = $('#volumePlayerMobile');

$('.volumeControl .volumeMobile').click(function () {
    $(this).is('.active')
        ? $volumePlayerMobile.slider({ value: _vol_m })
        : $volumePlayerMobile.slider({ value: 0 });

    volSetUp($volumePlayerMobile.slider('value'));
    $(this).toggleClass('active');
});

$volumePlayerMobile.slider({
    value: vol_m,
    orientation: 'horizontal',
    range: 'min',
    animate: true,
    slide: function (event, ui) {
        //console.log(ui['value']);
        volSetUp(ui['value']);
        _vol_m = ui['value'];
    }
});



$(function () {
    $('.marquee').mouseover(function () {
        $(this).attr('scrollamount', 0);
    }).mouseout(function () {
        $(this).attr('scrollamount', 5);
    });
});

$('.on-status').click(function () {
    $(this).toggleClass('pause')

});




$('.hamburger-menu').click(function () {
    $('body').toggleClass('menu-active')
    $(this).toggleClass('active')
});

$('.social-share-area').click(function () {

    $(this).closest('div').toggleClass('share-active')
});



$('.share-button').click(function () {
    $('.podcast-share').toggleClass('active')
})



var init = true;
var isReload = false;

function resizedTop() {
    if (window.innerWidth >= 768) {
        if (!init) {
            init = true;


        }
    } else if (init) {
        $(document).mouseup(function (e) {
            var container = $(".header-block");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('body').removeClass('menu-active')
                $('.hamburger-menu').removeClass('active')
            }
        });
        $('.player-wrapper > *:not(.header-top-middle-play),.vav-radyo-live').click(function (e) {
            if (!isReload) {
                e.preventDefault();
                console.log("debug -1");
                $('body').toggleClass('mobile-player-active')
                $('.header-top-middle-play .on-status').insertAfter('.prev-icon')
                $('.header-top-left-title').insertBefore('#mobilePlayer .item.progressBar')
                isReload = true;
            }

        });
        $('.close-icon a').click(function (e) {
            e.preventDefault();
            $('body').removeClass('mobile-player-active')

            console.log("debug -2");
            if (!$('body').hasClass('mobile-player-active')) {
                $($('#mobilePlayer .on-status')).insertBefore('#player')
                $('.header-top-left-title').insertBefore('.header-top-middle-play')

                isReload = false;
            }
        });



    }


}
resizedTop();

window.addEventListener("resize", resizedTop);


var btn = $('.jump-btn');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '600');
});


$(window).on("scroll touchmove", function () {
    $('.homepage').toggleClass('nav-scroll', $(document).scrollTop() > 50);
});



if (window.innerWidth < 1024) {
    var marquee = document.getElementById("song");
    marquee.scrollAmount = 2; // kayma h�z�
    marquee.scrollDelay = 50; // kayma aral���

    marquee.addEventListener("mouseenter", function () {
        marquee.style.animationPlayState = "paused"; // fare �zerine geldi�inde animasyon durduruluyor
    });

    marquee.addEventListener("mouseleave", function () {
        marquee.style.animationPlayState = "running"; // fare �ekildi�inde animasyon tekrar ba�lat�l�yor
    });
}

const sharingButton = document.querySelector('.ux-sharing-button');
const uxSharing = document.querySelector('.ux-sharing');

sharingButton.addEventListener('click', function () {
    uxSharing.classList.toggle('active');
});
