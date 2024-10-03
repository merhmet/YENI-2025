
// A $( document ).ready() block.
$( document ).ready(function() {



var reklamalani = document.getElementsByClassName('reklamalani');

if (reklamalani["length"] > 0) {
    reklamiBaslat();
} else {
    console.log('REKLAM KAPALI');
}
/** Evil Video Önü Reklam **/
function reklamiBaslat() {
    console.log('reklamı başlat');

    let sure = document.getElementById("gerisayim").getAttribute("data-sure");
console.log(sure);
    timeleft = sure;
    let reklamTimer = setInterval(function () {
        //console.log(timeleft);
        if (timeleft == 0) {
            document.getElementById("gerisayim").innerHTML = "Reklamı Geçebilirsiniz";
            $('.gec').show();
        } else if (timeleft < 0) {
            //console.log('BOŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞŞ');
            //clearInterval(reklamTimer);
        } else {
            document.getElementById("gerisayim").innerHTML = timeleft + " saniye kaldı";
            $('#gerisayim').show();
            $('.gec').hide();
        }
        timeleft -= 1;
    }, 1000);

    let box = document.querySelector('.live-video-player');
    //let width = box.clientWidth;
    let height = box.clientHeight;

    $('.videoalani').each(function () {
        var reklamAlani = $(this).find('.reklamalani');
        var gecButonu = $(this).find('.gec');
        playerReklam.currentTime = 0;
        reklamAlani.show();
        playerReklam.play();

        gecButonu.on('click', function () {
            playerReklam.pause();
            reklamAlani.hide();
        });
    });

    document.getElementById("playerReklam").style.height = height + 'px';

    //document.getElementById("gerisayim").innerHTML = timeleft + " saniye kaldı";

    /*
    var reklamTimer = setInterval(function() {
        if (timeleft <= 0) {
            clearInterval(reklamTimer);
            document.getElementById("gerisayim").innerHTML = "Reklamı Geçebilirsiniz";
            $('.gec').show();
        } else {
            document.getElementById("gerisayim").innerHTML = timeleft + " saniye kaldı";
            $('#gerisayim').show();
        }
        timeleft -= 1;
    }, 1000);*/
};

});