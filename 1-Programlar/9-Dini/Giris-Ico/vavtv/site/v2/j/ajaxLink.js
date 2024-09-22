function lnkHaberler(channelName) {
    HideMenu();
    var url = channelName != "" ? "/" + channelName + "/haberler" : "/haberler"
    $.pjax({ url: url, container: '#orta', timeout: 10000 });
}

function lnkIslam(channelName) {
    HideMenu();
    var url = channelName != "" ? "/" + channelName : "/islam"
    $.pjax({ url: url, container: '#orta', timeout: 10000 });
}

function breadCrumpOnClick(categoryNameForUrl, channelName) {
    switch (categoryNameForUrl) {
        case "kultur-sanat": lnkKulturSanat(); break;
        case "islam": lnkIslam(); break;
        default: lnkHaberler(channelName); break;
    }
}

function lnkKulturSanat() {
    $.pjax({ url: "/kultur-sanat", container: '#orta', timeout: 10000 });
}

function lnkHaber(url) {
    $.pjax({ url: url, container: '#orta', timeout: 10000 });
}

function lnkVideo(channelName) {
    HideMenu();
    var url = channelName != "" ? "/" + channelName + "/video" : "/video"
    $.pjax({ url: url, container: '#orta', timeout: 10000 });
}

function lnkRoportajlar(channelName, changePushState) {
    HideMenu();
    process = false; // infinite için 
    loaderPage = 1; // infinite için

    var pageUrl = "/roportajlar";
    $.pjax({ url: pageUrl, container: "#orta", timeout: 10000 });
}

function lnkNewImsakiye(channelName, changePushState) {
    HideMenu();
    process = false; // infinite için 
    loaderPage = 1; // infinite için

    var pageUrl = "/imsakiye/istanbul";
    $.pjax({ url: pageUrl, container: "#orta", timeout: 10000 });
}
function lnkYeniAlbumler(channelName, changePushState) {
    HideMenu();
    process = false; // infinite için 
    loaderPage = 1; // infinite için

    var pageUrl = "/yeni-albumler";
    $.pjax({ url: pageUrl, container: "#orta", timeout: 10000 });
}

function lnkTumHaberler(channelName, nameForUrl, changePushState) {
    HideMenu();
    if (channelName == "ahaberradyo" || channelName == "asporradyo" || channelName == "anewsradyo") {
        return;
    }
    var pageUrl = "/" + channelName + "/tum-haberler";
    if (nameForUrl == 'roportajlar' || nameForUrl == 'yeni-albumler') { pageUrl = "/" + nameForUrl }
    $.pjax({ url: pageUrl, container: '#orta', timeout: 10000 });
}

function lnkKulturSanatHaberleri(channelName, changePushState) {
    HideMenu();
    process = false; // infinite için
    loaderPage = 1; // infinite için

    //    if (channelName == "ahaberradyo" || channelName == "asporradyo" || channelName == "anewsradyo") {
    //        return;
    //    }
    //    var pageUrl = "/" + channelName + "/kultursanat-haberleri"; //  burası routeconfig de tanımlanmalı
    var pageUrl = "/kultursanat-haberleri"; //  burası routeconfig de tanımlanmalı
    $.pjax({ url: pageUrl, container: '#orta', timeout: 10000 });
}

function lnkPodCastler() {
    HideMenu();
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    $.pjax({ url: "/podcast", container: '#orta', timeout: 10000 });
}

function lnkToplist(channelName, listName) {
    var pageUrl = "/" + channelName + "/" + listName;
    $.pjax({ url: pageUrl, container: '#orta', timeout: 10000 });
}

function lnkAnasayfa() {
    currentCategory = "anasayfa";
    HideMenu();
    $.pjax({ url: "/", container: '#orta', timeout: 10000 });
    //$('#orta')
    //    .on('pjax:start', function () { })
    //    .on('pjax:end', function () { $.pjax({ url: "/ajax/right/" + currentCategory, container: '#sag', timeout: 10000, push: false }); })
}

function lnkHomePage() {
    HideMenu();
   
    // $.pjax({ url: "/", container: '#orta', timeout: 10000 });
    var _url = "/";

    try {
        if (counter != null) {
            counter.clearTimer();
            counter = null;
        }
    } catch (e) {
        console.log(e);
    }
    getPageState(_url, function () {
        $("body").addClass('homepage bg-white');

        if ($(".header-block.view-20").length > 0) {
            $(".header-block.view-20").removeClass("view-20");
        }

        if ($("#headMosqueControl")[0] != undefined) {
            $("#headMosqueControl").addClass('d-none');
        }
        $("#footerSlideControl").addClass('d-none');

        $(".header-block").removeClass("view-md-20"); $(".footer-top").show();

        $("title").text(`Vav TV – Gerçek Bilgi Doğru Yorum`);
        $('meta[name="Description"]').attr('content', `Gerçek Bilgi Doğru Yorum için VAV TV izleyin.`);
    });
}
function lnkProgramlar() {
    HideMenu();
    getPageState("/programlar", function () {
        $("body").removeClass('bg-white');
        scrollTop();
        closeMobileMenu();
        $(".header-top").removeAttr("style");
        if ($('#btnMobileVavRadio').hasClass('d-none')) {
            $('#btnMobileVavRadio').removeClass('d-none');
        }
    });
    //$.pjax({ url: "/programlar", container: '#orta', timeout: 10000 });
}

function lnkLiveBroadcast() {
    getPageState("/canli-yayin", function () {
        HideMenu();
        $("body").removeClass("homepage");
        $("body").removeClass("bg-white");

        $(window).on('focus', function () {
            document.querySelector('video[hola-pid="1"]').pause();
        });

        var isFirstPlay = true;
        if ($(".onlyVolume")[0] != undefined && window.innerWidth <= 768) {
            $(".onlyVolume").removeClass("onlyVolume")
        }
        jwplayer("jwplayer1").pause();
    });
}


function getPageState(url, callBack = {}, timeout = 10000) {
    var redirectUrl = url.includes("?") ? url + "&_pjax=false" : url + "?_pjax=false";

    $.ajax({
        url: redirectUrl,
        type: "GET",
        dataType: "html",
        timeout: timeout,
        success: function (data) {
            window.history.pushState(null, "null", url);
            /*if (url != "/") {
                    $("[data-pray-timer]").countdown('pause');
            }*/
            $("#orta").html(data);

            closeMobileMenu();
            if (!url.includes('canli-yayin') && $("body").hasClass("livetv-page") && $(".header-top").css("display") === "none") {
                $("body").removeClass("livetv-page");
                $(".header-top").css("display", "");
                if ($('#btnMobileVavRadio').hasClass('d-none')) {
                    $('#btnMobileVavRadio').removeClass('d-none');
                }
            }

            if (url.includes('yayin-akisi')) {
                if (url.includes("vavtv") && $("#vavRadioHead") != undefined && $("#vavTvHead") != undefined) {
                    $("#vavRadioHead").removeClass('selected');
                    $("#vavTvHead").addClass('selected');
                }
                else {
                    $("#vavTvHead").removeClass('selected');
                    $("#vavRadioHead").addClass('selected');
                }
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("throwEx:", thrownError)
        },
        complete: callBack
    });
}

function closeMobileMenu() {
    if ($("body").hasClass("menu-active")) {
        $("body").removeClass("menu-active");
    }

    if ($("#mobileMenu").hasClass("active")) {
        $("#mobileMenu").removeClass("active");
    }
}

function lnkFrekanslar() {
    $.getScript(iServer + "/c/j/datatables.min.js", function () { });

    HideMenu();
    //$.pjax({ url: "/frekanslar", container: '#orta', timeout: 10000 });
    var _url = "/frekanslar";
    getPageState(_url, function () {
        $("body").removeClass('homepage');
        $("body").removeClass('bg-white');
        $(".header-top").removeAttr("style");
        if ($('#btnMobileVavRadio').hasClass('d-none')) {
            $('#btnMobileVavRadio').removeClass('d-none');
        }
    });

    if ($("#headMosqueControl")[0] != undefined && $("#headMosqueControl").hasClass('d-none')) {
        $("#headMosqueControl").removeClass('d-none');
    }
    closeMobileMenu();
    $("#footerSlideControl").removeClass('d-none');
    $(".header-block").removeClass("view-md-20");
    $(".footer-top").show();
    scrollTop();
    /* frekanslar view loadunda hallettik
    $('#orta').on('pjax:end', function () {
            SetDataTable();
    }); */
}


function lnkRadyolar() {
    HideMenu();
    $.pjax({ url: "/radyolar", container: '#orta', timeout: 10000 });
}

function SetDataTable() { // frekanslar için
    /* data table */

    $('#dataTable').dataTable({
        "pageLength": 15,
        "bPaginate": false,
        "columnDefs": [
            {
                'targets': [0], // column index (start from 0)
                'orderable': false, // set orderable false for selected columns
            }
        ],
        "language": {
            "url": "/content/v2/c/j/Turkish.json"
        }
    });
}

function lnkPodcast() {//Anasayfa
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    $.pjax({ url: "/podcast", container: '#orta', timeout: 10000 });
}
function lnkPodcastOnlyChannelName(channelName) {
   
    //Kategori sayfası
    HideMenu();
    channelName = channelName.indexOf('/', 0) == 0 ? channelName.substring(1) : channelName;

    var url = channelName != "" ? "/" + channelName : "/podcast";
    //$.pjax({ url: url, container: '#orta', timeout: 100000 });
    getPageState(url, function () {

        $("body").removeClass("homepage");

        if (!channelName.includes("kunye")) {
            $("body").removeClass("bg-white");
        }

        switch (window.location.pathname) {
            case "/podcast":
            default:
                $("title").text(`Podcast Dinle - Kur'an-ı Kerim, Meal, Hatim Ve Cüz Dinle`);
                $('meta[name="Description"]').attr('content', `Kur'an-ı Kerim'de yer alan tüm cüz ve surelerin dinlemek için doğru adrestesiniz. Vavtv'nin podcast dinle sayfasından birçok seçeneğe ulaşabilirsiniz.`);
                break;
            case "/podcast/cuz":
                $("title").text(`Cüz Dinle - Kur'an-ı Kerim Cüz Cüz Sesli Dinle`);
                $('meta[name="Description"]').attr('content', `Kur'an-ı Kerim'de yer alan tüm cüzleri sesli olarak dinleyebilirsiniz. Cüz dinlemek için bu sayfadan dilediğiniz cüzü seçip dinlemeye başlayabilirsiniz.`);
                break;
            case "/podcast/meal":
                $("title").text(`Kur'an-ı Kerim Meali Dinle - Surelerin Mealleri Sesli Dinle`);
                $('meta[name="Description"]').attr('content', `Kur'an-ı Kerim'de yer alan surelerin mealleri dinle! Meal dinle sayfamızda tüm surelerin mealini dinleyebilirsiniz.`);
                break;
            case "/podcast/sure":
                $("title").text(`Sure Dinle - Kur'an-ı Kerim'de Yer Alan Sureler Dinle`);
                $('meta[name="Description"]').attr('content', `Kur'an-ı Kerim'de yer alan sureleri tecvitli olarak dinleyebilirsiniz. Kur'an sureleri okunuşu ve sesli dinleme seçeneği vavtv.com.tr'de.`);
                break;
            case "/podcast/meal-sure":
                $("title").text(`Sure Mealleri Dinle - Surelerin Türkçe Meali Dinle`);
                $('meta[name="Description"]').attr('content', `Surelerin mealini dinlemek için doğru yerdesiniz. Tüm surelerin Türkçe meali vavtv.com.tr'den dinleyebilirsiniz.`);
                break;
            case "/podcast/asri-serif":
                $("title").text(`Asr-ı Şerif Dinle - Asr-ı Şerif Podcast Listesi`);
                $('meta[name="Description"]').attr('content', `Asr-ı Şerif dinlemek için tıklayın. Vavtv.com.tr'den Asr-ı Şerif dinleyebilirsiniz. İşte, Asr-ı Şerif podcast listesi`);
                break;
        }

        if ($("#headMosqueControl")[0] != undefined && $("#headMosqueControl").hasClass('d-none')) {
            $("#headMosqueControl").removeClass('d-none');
        }

        $("#footerSlideControl").removeClass('d-none');
        $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
        $(".header-top").removeAttr("style");
        if ($('#btnMobileVavRadio').hasClass('d-none')) {
            $('#btnMobileVavRadio').removeClass('d-none');
        }

        scrollTop();
        setTimeout(function () {
            closeMobileMenu();
        }, 100);
    }, 100000);
}

function lnkSearchResources(type, query) {
    $("body").addClass('bg-white');
    var url = (type == "tumu" ? "/kaynaklarda-ara" : "/kaynaklarda-ara/" + type) + "?query=" + query;
    $.pjax({ url: url, container: '#orta', timeout: 10000 });
}

function lnkPodcast(channelName) { //Kategori sayfası 
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    var url = channelName != "" ? "/podcast/" + channelName : "/podcast"
    $.pjax({ url: url, container: '#orta', timeout: 10000 });
}
function lnkPodcast(channelName, modul) { //Detay sayfası 
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    var url = channelName != "" ? "/podcast/" + channelName + "/" + modul : "/podcast"
    $.pjax({ url: url, container: '#orta', timeout: 10000 });
}
function lnkHakkimizda(channelName) {
    $("body").addClass('bg-white');
    channelName = channelName == null ? "vavradyo" : channelName == "hakkimizda" ? null : channelName;
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    $.pjax({ url: "/hakkimizda" + (channelName == null ? "" : "/" + channelName), container: '#orta', timeout: 10000 });
}
function lnkVeriPolitikasi() {
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    $.pjax({ url: "/veri-politikasi", container: '#orta', timeout: 10000 });
}
function lnkUygulamalar() {
    HideMenu();
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    $.pjax({ url: "/uygulamalar", container: '#orta', timeout: 10000 });
}
function lnkKunye(channelName) {
    $("body").addClass('bg-white');
    channelName = channelName == null ? "vavradyo" : channelName;
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    $.pjax({ url: "/kunye/" + channelName, container: '#orta', timeout: 10000 });
}
function lnkProgramlar(url) {


    if ($("#headMosqueControl")[0] != undefined && $("#headMosqueControl").hasClass('d-none')) {
        $("#headMosqueControl").removeClass('d-none');
    }

    getPageState(url, function () {
        $("#footerSlideControl").removeClass('d-none');
        $("body").removeClass('homepage');
        $("body").removeClass('bg-white');
        $(".header-block").removeClass("view-md-20");
        $(".footer-top").show();
        scrollTop();
    });

    //$.pjax({ url: url, container: '#orta', timeout: 10000 });

}
function lnkNewPodCast() {
    HideMenu();
    // $.pjax({ url: "/podcast", container: '#orta', timeout: 10000 });
    var _url = "/podcast";
    getPageState(_url, function () {

        $("title").text(`Podcast Dinle - Kur'an-ı Kerim, Meal, Hatim Ve Cüz Dinle`);
        $('meta[name="Description"]').attr('content', `Kur'an-ı Kerim'de yer alan tüm cüz ve surelerin dinlemek için doğru adrestesiniz. Vavtv'nin podcast dinle sayfasından birçok seçeneğe ulaşabilirsiniz.`);


        $(".header-top").removeAttr("style");
        if ($('#btnMobileVavRadio').hasClass('d-none')) {
            $('#btnMobileVavRadio').removeClass('d-none');
        }
        $("body").removeClass('homepage');
        $("body").removeClass("bg-white");
    });

    if ($("#headMosqueControl")[0] != undefined && $("#headMosqueControl").hasClass('d-none')) {
        $("#headMosqueControl").removeClass('d-none');
    }
    closeMobileMenu();
    $("#footerSlideControl").removeClass('d-none');
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    scrollTop();
}
function lnkNewQuran() {
    HideMenu();
    $('body').removeClass('homepage');
    /* $.pjax({ url: "/kurani-kerim", container: '#orta', timeout: 10000 });*/
    var url = "/kurani-kerim";
    getPageState(url, function () {
        if ($("#headMosqueControl")[0] != undefined && $("#headMosqueControl").hasClass('d-none')) {
            $("#headMosqueControl").removeClass('d-none');
        }
        $("#footerSlideControl").removeClass('d-none');
        $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
        $(".header-top").removeAttr("style");
        if ($('#btnMobileVavRadio').hasClass('d-none')) {
            $('#btnMobileVavRadio').removeClass('d-none');
        }

        closeMobileMenu();
        scrollTop();
    });

}

function ProgramciTriger(interval) {
    setTimeout(function () {
        GetProgramci();
        ProgramciTriger(60 * 1000);
    }, interval);
}

var CurrentRadio;
function GetProgramci() {

    if (currentMedia != 2) {
        console.log(currentCategory);
        if (!isMobile && currentCategory.includes("pod") && currentCategory != "podcast") {
            CurrentRadio = currentCategory.replace("pod", "");
        }

        if (CurrentRadio == null)
            CurrentRadio = currentCategory;

        HideMenu();

        //var day = new Date();
        //var _day = day.getDate();
        //var _year = day.getFullYear();
        //var _month = day.getMonth() + 1;
        //var _url = "/programci/" + _year + "/" + _month + "/" + _day + "/" + CurrentRadio; // currentCategory; // currentCategory
        //// $.pjax({ url: _url, container: '#playingTitle', timeout: 2000, push: false});
        ////alert("ajax request url:" + _url);
        //$.ajax({
        //    type: "GET",
        //    url: _url,
        //    dataType: "html",
        //    success: function (data) {
        //        $("#song").html(data);
        //    },
        //    error: function (xhr, ajaxOptions, thrownError) {
        //    }
        //});
    }
}


function lnkYayinAkisi(changePushState) {
    HideMenu();
    lnkYayinAkisiWithDateNChannel(new Date(), currentCategory, changePushState);
    if ($("#headMosqueControl")[0] != undefined && $("#headMosqueControl").hasClass('d-none')) {
        $("#headMosqueControl").removeClass('d-none');
    }
    $("#footerSlideControl").removeClass('d-none');
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();

}

function getPreviousDateIfBefore6AM(date) {
    if (date.getHours() < 6) {
        var previousDate = new Date(date.getTime() - 24 * 60 * 60 * 1000); // Bir önceki günü hesaplamak için 24 saatlik bir süre (24 * 60 * 60 * 1000 ms) çıkarıyoruz
        return previousDate;
    }

    return date;
}


function lnkYayinAkisiWithChannel(_channel) {
    HideMenu();


    var currentDate = new Date(); // Şu anki tarih ve saat
    var previousDate = getPreviousDateIfBefore6AM(currentDate);

    lnkYayinAkisiWithDateNChannel(previousDate, _channel);
    if ($("#headMosqueControl")[0] != undefined && $("#headMosqueControl").hasClass('d-none')) {
        $("#headMosqueControl").removeClass('d-none');
    }

    closeMobileMenu();
    $("#footerSlideControl").removeClass('d-none');
    $(".header-block").removeClass("view-md-20"); $(".footer-top").show();
    $(".header-top").removeAttr("style");
    if ($('#btnMobileVavRadio').hasClass('d-none')) {
        $('#btnMobileVavRadio').removeClass('d-none');
    }
}

function lnkYayinAkisiWithDateNChannel(day, _channel, changePushState) {
    var _day = day.getDate();
    var _year = day.getFullYear();
    var _month = day.getMonth() + 1;
    lnkYayinAkisiWithFullParms(_day, _month, _year, _channel, changePushState);
}

function lnkYayinAkisiWithFullParms(_day, _month, _year, _channel, changePushState) {
    var _url = "/yayin-akisi/" + _year + "/" + _month + "/" + _day + "/" + _channel;
    getPageState(_url, function () {
        $("body").removeClass('homepage');
        $("body").removeClass('bg-white');
        $.getScript(iServer + "/c/j/focus.js", function () { });
    });
    //$.pjax({ url: "/yayin-akisi/" + _year + "/" + _month + "/" + _day + "/vavradyo" , container: '#orta', timeout: 10000 });
}
currentCategory = "radyoturkuvaz";

function lnkYayinAkisi2(url, day, changePushState) {
    $.pjax({ url: url + _year + "/" + _month + "/" + _day + "/" + _channel, container: '#orta', timeout: 10000 });
}

//*******************************************************************

function selectedDay() {
    var day = new Date().getDay() == parseInt(0) ? 7 : new Date().getDay();
    getSelected('', day);
}

var currentChannel = '';// kullanılmayacak. eski radyo programından gelen kodlarda var. Yeni adı currentCategory
var pageNumber = 1;

function shareOnFacebook(url, title) {
    if (url == null || url == '') {
        url = window.location.href;
    }

    window.open('https://www.facebook.com/sharer.php?u=' + url + '&quote=' + title + 'facebook-share-dialog', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400')
}
function tweet(url, title) {
    if (url == null || url == '') {
        url = window.location.href;
    }
    window.open("https://twitter.com/intent/tweet?text=" + title + "&url=" + url + "&original_referer=" + url, "twitter-share-dialog", "width=626, height=436");
}
function instagram(url, title) {
    if (url == null || url == '') {
        url = window.location.href;
    }
    window.open("https://www.instagram.com/accounts/login");
}
function youtube(url, title) {
    if (url == null || url == '') {
        url = window.location.href;
    }
    window.open("https://www.youtube.com/vavradyo");
}
function whatsapp(url, title) {
    if (url == null || url == '') {
        url = window.location.href;
    }
    var whatsappUrl = "https://api.whatsapp.com/send/?text=" + encodeURIComponent(title + " " + url);

    window.open(whatsappUrl, '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400');
}

function SocialMediaShare(e) {
    var type = $(e).data("type");
    var url = "https://www.vavtv.com.tr" + $(e).data("url");
    var title = $(e).data("title");
    var windowUrl, redirectUrl;

    if (type == "facebook") {
        windowUrl = "https://www.facebook.com/sharer/sharer.php?s=100&u=" + url + encodeURIComponent("?f=sm&utm_source=facebook.com");
    }
    else if (type == "twitter") {
        var newUrl = url + encodeURIComponent("?f=sm&utm_source=twitter.com");
        windowUrl = "https://twitter.com/intent/tweet?text=" + title + "&url=" + newUrl + "&original_referer=" + url;
    }
    else if (type == "whatsapp") {
        redirectUrl = "https://api.whatsapp.com/send/?text=" + encodeURIComponent(title + " " + url);
    }

    if (redirectUrl) {
        if (redirectUrl.substring(0, 4).indexOf("http") > -1)
            window.open(redirectUrl)
        else
            window.location.href = redirectUrl;
    }
    else if (windowUrl) {
        window.open(windowUrl, type + "-share-dialog", "width=626, height=436");
    }
    else
        return false;
}

function getStreamingPageLinkForLiveBroadcast() {

    var currentDate = new Date(); // Şu anki tarih ve saat
    var day = getPreviousDateIfBefore6AM(currentDate);

    var _day = day.getDate();
    var _year = day.getFullYear();
    var _month = day.getMonth() + 1;
    window.location = "/yayin-akisi/" + _year + "/" + _month + "/" + _day + "/vavradyo";
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {
    }
    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
    }, function (err) {
    });
}


function CopyShare(e) {
    var url = "https://www.vavtv.com.tr" + $(e).data("url");
    var tempInput = document.createElement("input");
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}