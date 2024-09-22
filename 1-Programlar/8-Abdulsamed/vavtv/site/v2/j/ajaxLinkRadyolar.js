
var currentMedia = 0;
var lastPodcast = "";
var sayac = 0;

//podcast next-prev controls
var aTagsArray = [];
var currentPodcastElement = "";
var currentPodcastElementIndex = "";
var isPlayed = false;
function CheckProgressBarForTimeDurationStyle() {
    if (currentMedia == 2 && sayac != 1) {
        $('#progressBarForTimeDuration').show();
        if (isMobile)
            $('#mobileProgressBarForTimeDuration').show();
        /*    $(".on-status").click();*/
        $(".on-status").addClass("pause");
        sayac++;
        return;
    }
    if (sayac == 1)
        sayac = 0;
    $('#progressBarForTimeDuration').hide();
    if (isMobile)
        $('#mobileProgressBarForTimeDuration').hide();

}








function lnk_Podcast_Selection(media, name, title, iserver, detailPodcast, url = "", isQuranPage, isLiveBroadcast = false) {    //  BİR PODCASTE TIKLANDIĞINDA

    //
    $('#radioSharing li a').attr('data-title', title);
    $('#radioSharing li a').attr('data-url', "/" + url);


  



    const ulElement = document.querySelector('#article-frame');
    // ul elementi içindeki tüm 'a' taglerini seç
    if (ulElement) {
        const aTags = ulElement.querySelectorAll('li a');

        aTagsArray = Array.from(aTags);
  }
        currentPodcastElement = aTagsArray.find(item => item.getAttribute("onclick").includes(media));
        currentPodcastElementIndex = aTagsArray.indexOf(currentPodcastElement);


    detailPodcast = detailPodcast == true ? detailPodcast : false;
    var isPlay = IsPlay();
    $(".mobile-player-area").removeClass('out-podcast-player')

    if ($("#mobileprogressBar")[0] != undefined || $("#progressBarForTimeDuration")[0] != undefined) {

        $("#volumePlayerMobile").addClass('d-none');
    }
    else {
        $("#volumePlayerMobile").removeClass('d-none');
    }

    if (isPlay && detailPodcast && lastPodcast == media && currentMedia == 2) {
        isPlay = false;
        jwplayer().pause();
        /*        $(".on-status").click();*/
        $(".on-status").removeClass("pause");


        return;
    }
    else if (!isPlay && detailPodcast && lastPodcast == media && currentMedia == 2 && !isLiveBroadcast) {
        isPlay = true;
        jwplayer().play();
        $(".on-status").addClass("pause");
        return;
    }

    if (isPlay && currentMedia == 1)
        isPlay = false;

    if (isPlay && lastPodcast != media)
        isPlay = false;

    if (!isPlay) {
        if (currentMedia == 0 || currentMedia == 1 || lastPodcast != media) {
            LoadPlayer(media, isLiveBroadcast);
            lastPodcast = media;
        }
        else if (!isLiveBroadcast) {
            jwplayer().play();
        }

        currentMedia = 2; //     currentMedia podcast oldu.
        // $(".vavradyo-live").css("display", "none");
        $('#singer').text(name.replace("pod", ""));
        $('#song').text(title);
        previousCode = previousCode + currentMedia;
        if (title == '' && isQuranPage) {
            $('#song').text("");
        }

        if (!isQuranPage) {

            $('.item.trackWrapper img').remove();
            $('.item.trackWrapper').prepend('<img id="channelImg" src="' + iserver + '/c/i/player-thumb/vav-radyo.png" class="img">')
        }
    }
    CheckProgressBarForTimeDurationStyle();


    if (base.isDb) {
        //media, name, title, iserver, detailPodcast,isQuranPage
        var obj = {
            media: media,
            name: name,
            title: title,
            iserver: iserver,
            detailPodcast: detailPodcast,
            isQuranPage: isQuranPage
        };

        sessionStorage.setItem("podcastDb", JSON.stringify(obj));
    }




    document.addEventListener("visibilitychange", function () {
        var documentUrl = window.location.href;
    


        if (document.hidden) {

            jwplayer().pause();

        } else if (!(documentUrl.includes("podcast") && documentUrl.split("/").length > 5)) {

            if ($(".on-status").hasClass("pause")) {
                jwplayer().play();
            }


        }
    })

}

function HideMenu() { // for mobile sizes
    if (typeof isMobile != "undefined" && isMobile) {
        $('body').removeClass('menu-active');
        $('.hamburger-menu').removeClass('active');
        $('.menu-container.active').removeClass("active");
        $('.mobilMask.active').removeClass("active");
        //            $find('.navobile').$('.fas.fa-times').removeClass("fa-times").addClass("fa-bars");
        $('.fas.fa-times').removeClass("fa-times").addClass("fa-bars");
    }
}
// Header menüsünden radyo sayfası seçildiğinde player etkileşimi
function lnk_Header_RadioSelection(radio) {
    lastPodcast = "";
    SetRadioInfo();
    $(".podcastDetailList li a.actionPlay").each(function () {
        if ($(this).find("i").hasClass("fa-pause")) {
            $(this).find("i").removeClass("fa-pause");
            $(this).find("i").addClass("fa-play");
        }
    });
}

function goToNextPodcast() {

    if (aTagsArray && currentPodcastElement && aTagsArray[currentPodcastElementIndex + 1])
        aTagsArray[currentPodcastElementIndex + 1].click();
}

function goToPreviousPodcast() {
    if (aTagsArray && aTagsArray[currentPodcastElementIndex - 1])
        aTagsArray[currentPodcastElementIndex - 1].click();
}