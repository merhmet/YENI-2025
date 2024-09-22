function processAjaxData(result, urlPath, changePushState) {
    $("#orta").html(result);
    window.scrollTo(0, 0);
    if (!changePushState != null && changePushState == false) { return; }
    window.history.pushState({ "html": result, "pageTitle": "fener" }, "", urlPath);
}


var cityNameForUrl = ""; // şehir ismine farklı js dosyalarından çekilmesi için buraya eklendi.
var iServer; // js dosyalarında assetpathv1 değerini set eder.
var cookieExists = false;
function SendData() {
    var username = '';
    var comment = '';
    if (cookieExists) {
        var cookie = $.cookie('.AuthDecr');
        username = cookie.split('|')[0]; // UserName
    }
    else {
        username = $("#txtUserName").val(); // UserName
    }
    comment = encodeURI($("#userComment").val());


    var data = 'yorum=' + comment + '&userName=' + username;
    //if (comment == '') { 
    //    ShowDialogAndButton('Lütfen yorum yazınız');
    //}
    //else if ((username == '' || username == undefined || username == 'isminiz') && cookieExists == false /*&& isGuestCommentSite == true*/) {
    //    ShowDialogAndButton('Lütfen rumuz yazınız');
    //}
    //else {
    $.ajaxSetup({
        scriptCharset: "utf-8",
        contentType: "application/json; charset=utf-8"
    });

    var mainCommentId = '32dae64c-9a88-4117-9879-211b5cb99cf9';

    var commentObj = new Object();
    var url = "/commentarticle/03216B75-0F3F-4296-8037-D83B125E97E6?mainCommentId=" + mainCommentId;
    $.ajax({
        data: data,
        type: "POST",
        url: url,
        timeout: 20000,
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        dataType: 'json',
        success: function (data) {
            if (data.Success == true) {
                $(".headline-form-name").val('');
                $("#userComment").val('');
                $('#liveMessage i').html(data.Message);
                $('#liveMessage').show();

                /*alert(data.Message);*/

            }
            else {
                $('#liveMessage i').html(data.Message);
                $('#liveMessage').show();
                //alert(data.Message);
            }
        },
        error: function () {
            $('#liveMessage i').html(data.Message);
            $('#liveMessage').show();
            //alert("Hata oluştu.");
        }
    });
    //}
}

//Yayin - Akisi START

var day;
var tabId = '';

$(document).ready(function () {
    var classValue = $('body').attr('class');
    getPage();
    var selectedtab = GetParameterByName("channelname");
    if (selectedtab != null) {
        $("#turkuvaz" + selectedtab).addClass("selected");
        getPageYayinAkisi("/yayin-akisi?channelname=" + selectedtab, day);
    }

    //$(window).on('focus', function () {
    //    jwplayer("jwplayer1").pause();
    //});
    /*
    var PrayTimeCounter = function (nameForUrl) {
        try {
            var _template = "";
            //_template += "<a href=\"/{CITYNAMEFORURL}-namaz-vakitleri\" target=\"_blank\">";
            //_template += "  <span class=\"frame\">";
            //_template += "      <strong>{TITLE}</strong>";
            //_template += "      <span>{HH}:{mm}:{ss}</span>";
            //_template += "  </span>";
            //_template += "</a>";

            _template += "  <span>{TITLE}</span>";
            _template += " <span>{HH}:{mm}:{ss}</span>";

            $("[data-praytimes-counter] span").next("span.pr-text").tmdPrayerCounter({
                prayerTimes: {
                    IMSAK: 'İmsak\'a',
                    GUNES: 'Güneşe',
                    OGLE: 'Öğlene',
                    IKINDI: 'İkindiye',
                    AKSAM: 'Akşama',
                    YATSI: 'Yatsıya'
                },
                template: _template,
                cityNameForUrl: nameForUrl
            });

            setTimeout(function () {
                $(".timer #imgKatilim").attr("href", "http://pubads.g.doubleclick.net/gampad/clk?id=5663555731&iu=/31110078/sabah/desktop_web/anasayfa/advertorial_manset_click");
            }, 1000);

            // İmsakiye sayacı
            if ($("[data-ramadan-counter]").length) {
                $("[data-ramadan-counter]").tmdPrayerCounter({
                    prayerTimes: {
                        IMSAK: ' İMSAK\'A NE KADAR KALDI?',
                        AKSAM: ' İFTARA NE KADAR KALDI?'
                    },
                    cityNameForUrl: nameForUrl,
                    getDataByJson: true,
                    onGetDataByJson: function (data) {
                        $("[data-ramadan-counter] [data-rc-link]").attr("href", "/imsakiye/" + data.CityNameForUrl).attr("target", "_blank");
                        $("[data-ramadan-counter] [data-rc-text]").html(data.CityName + data.Title);
                        $("[data-ramadan-counter] [data-rc-counter]").html("<span><strong>" + data.Hours + "</strong></span><span><strong>" + data.Mins + "</strong></span><span><strong>" + data.Secs + "</strong></span>");
                    }
                });
            }


            if ($("[data-ramadan-counter-co]").length) {
                const Cities = ["izmir", "istanbul", "ankara", "bursa", "antalya", "trabzon"];
                for (let i = 0; i < Cities.length; i++) {
                    setPrayTimesCo(Cities[i]);
                }
            }



        } catch (e) {

        }
    };


    function setPrayTimesCo(CityNameForUrl) {
        $("[data-ramadan-counter-co]").tmdPrayerCounter({
            prayerTimes: {
                IMSAK: 'İMSAK\'A NE KADAR KALDI?',
                AKSAM: 'İFTARA NE KADAR KALDI?'
            },
            cityNameForUrl: CityNameForUrl,
            getDataByJson: true,
            onGetDataByJson: function (data) {
                $("[data-city-co = " + CityNameForUrl + "]").html(data.UpcomingTimeString);
                if (CityNameForUrl == "izmir" && data.Title == "İFTARA NE KADAR KALDI?") {
                    $("[data-rc-text-title]").html("<span>ile </span>İFTAR VAKTİ");
                }
                else if (CityNameForUrl == "izmir") {
                    $("[data-rc-text-title]").html("<span>ile </span>SAHUR VAKTİ");
                }

            }
        });
    }*/


    var GetWeather = (function () {
        var _clientInfo = {};
        var _selectBoxContainer = $('#city');

        var hd_typesArr = new Array();
        var hdArr = new Array();


        var setLocationSettings = function (clientInfo) {
            if (!$("option", _selectBoxContainer).length) return;
            var _plateNo = parseInt(clientInfo.SubDivisionCode);

            if ($("option[data-plate='" + _plateNo + "']", _selectBoxContainer).val()) {
                try {

                    var _nameForUrl = $(_selectBoxContainer).val();

                    // Start - Weather Station
                    var _weatherStation = $.grep(hdArr, function (x) { return $.inArray(_nameForUrl, x) > -1 });
                    if (_weatherStation.length > 0) {
                        var _weatherTemperature = _weatherStation[0][3];
                        var _weatherIcon = hd_typesArr[_weatherStation[0][1]][0];
                        /* + "°C"*/
                        $(".weather-area span.icon").attr("class", "icon weather-icon weather-flaticon-" + _weatherIcon);
                        $(".weather-area span.weat").text(_weatherTemperature);
                        // End - Weather Station
                    }

                    $(_selectBoxContainer).val(_nameForUrl);


                    // Start - Namaz Vakti ve Imsakiye  
                    PrayTimeCounter(clientInfo.CityNameForUrl);
                    // End - Namaz Vakti 

                    //$(".weather-area a").attr("href", "/hava-durumu/" + _nameForUrl).attr("target", "_blank");
                    //$(".prayer-time a").attr("href", "/" + _nameForUrl + "-namaz-vakitleri").attr("target", "_blank");
                }
                catch (e) {
                    //console.log(e);
                }
            }
        }
        var loadLocationData = function (currentDate) {
            $.ajax({
                type: "GET",
                dataType: "text",
                url: "https://i.tmgrup.com.tr/staticfiles/havadurumu/guncelhava.js?" + currentDate,
                success: function (result) {
                    eval(result);

                    try {
                        hd_typesArr = hd_types;
                        hdArr = hd;
                    } catch (e) {
                        hdArr = null;
                        /* $(".iconDiv").hide();*/
                    }

                    // Aktif şehir selected yapılır
                    $("option[data-plate='" + _clientInfo.SubDivisionCode + "']", $(_selectBoxContainer)).prop("selected", true);
                    /*   $(_selectBoxContainer).select2();*/

                    // Kullanıcının tespit edilen şehrine göre değerler atanır ve bilgiler çağırılır
                    var selectedText = $("option:selected", $(_selectBoxContainer)).text();
                    _clientInfo.CityNameForUrl = $(_selectBoxContainer).val();
                    _clientInfo.CityName = selectedText.charAt(0) + selectedText.slice(1).toLocaleLowerCase("tr");
                    setLocationSettings(_clientInfo);

                    // Select change eventi
                    $(_selectBoxContainer).select()
                        .on("change", function (e) {
                            var _selectedItem = $("option:selected", this);

                            var _nameForUrl = $(_selectedItem).val();

                            if (_nameForUrl != "Şehir Seçiniz") {
                                var _plateNo = $(_selectedItem).data("plate");

                                _clientInfo.SubDivisionCode = _plateNo;
                                _clientInfo.CityNameForUrl = _nameForUrl;
                                _clientInfo.CityName = $(_selectedItem).text();

                                setLocationSettings(_clientInfo);
                            }
                        })
                        .addClass('overflow');

                    // Loading iconu kaldırılması
                    /*  $('.userPrivate').addClass('show');*/
                },
                error: function (request, status, error) {
                    if (console)
                        console.log(request.responseText);
                }
            });
        }

        var getCity = function () {
            $.getJSON("https://ipcheck.tmgrup.com.tr/ipcheck/getcity", function (data) {
                _clientInfo = data;
                _clientInfo.CityNameForUrl = "";
                _clientInfo.SubDivisionCode = parseInt(data.SubDivisionCode || "34").toString();

                if (!_clientInfo.Status || _clientInfo.CountryCode != "TR") {
                    _clientInfo.SubDivisionCode = "34";
                    _clientInfo.CityNameForUrl = "istanbul";
                    _clientInfo.CityName = "İstanbul";
                }
            })
                .fail(function () {
                    _clientInfo.SubDivisionCode = "6";
                    _clientInfo.CityNameForUrl = "ankara";
                    _clientInfo.CityName = "Ankara";
                    _clientInfo.CurrentDate = new Date().valueOf();
                })
                .done(function () {

                    var _date = new Date(_clientInfo.CurrentDate),
                        _period = Math.ceil(_date.getMinutes() / 15); // 1 saati 15'er dakikalık 4 periyoda bölüyoruz

                    _period = _period == 0 ? 1 : _period;

                    var _dateCurrent = _date.toISOString().replace(/-/g, "").slice(0, 8) + _date.getHours() + _period;

                    loadLocationData(_dateCurrent);
                });
        }

        var init = function () {
            getCity();

        };

        return { Init: init }
    }());

    GetWeather.Init();

});

// YAYIN AKISI SAYFASI START 

$(document).on('click', '.grandInner ol li', function () {
    //e.preventDefault();
    day = $(this).attr('value');
    var i = new Date().getDay() == parseInt(0) ? 7 : new Date().getDay();
    var dayDiff = (parseInt(i) - parseInt(day));
    //var url = getUrl('/yayin-akisi/', dayDiff) + '/' + $(this).parents().parents().attr('value');
    var url = '/yayin-akisi?channelname=' + $(this).parents().parents().attr('value');
    getSelected('', day);
    lnkYayinAkisi2(url, day, false);

    //return false;
});

$(document).on('click', '.grandInner .tabs li', function () {
    $('.grandInner .tabs li').removeClass('selected');
    //$(this).addClass('selected');
    var tabClass = $(this).attr('info-tab');
    var day = new Date().getDay() == parseInt(0) ? 7 : new Date().getDay();
    var i = new Date().getDay() == parseInt(0) ? 7 : new Date().getDay();
    var dayDiff = (parseInt(i) - parseInt(day));
    $('.streaming').addClass(tabClass);
    $('.grandInner [class*="list"]').hide();
    $('.list.' + tabClass).show();
    getSelected('', day);
    //var url = getUrl('/yayin-akisi/', dayDiff) + '/' + tabClass.replace('turkuvaz', '');
    var url = '/yayin-akisi?channelname=' + tabClass.replace('turkuvaz', '');
    lnkYayinAkisi2(url, day, true);
});

function GetParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// YAYIN AKISI SAYFASI END 

// 3 lü widget START 
var selectedDay;
$(document).on('click', '#streamingWidgetMain .radioDays li', function () {
    //e.preventDefault();
    day = $(this).attr('value');
    var i = new Date().getDay();
    i = i != 0 ? i : 7;
    var dayDiff = (parseInt(i) - parseInt(day));
    var url = getUrl('', dayDiff);
    $('#hdnYayinAkisiWidget').val(url);
    $('#hdnWidgetDay').val(day);
    selectedDay = day;
    tabId = $(this).parents().attr('value');
    //getSelected(day);
    $('#hdnChannelName').val($(this).parents().attr('value'));
    $('#frmYayinAkisiWidget').submit();

    //return false;
});

$(document).on('click', '#streamingWidgetMain .tabs li', function () {
    $('.tabs li').removeClass('selected');
    $(this).addClass('selected');
    var listId = tabId = $(this).attr('value');
    $('#streamingWidgetMain .list').hide();
    $('#' + listId + 'list').show();
    $('#hdnChannelName').val(listId);
    var day = new Date().getDay() == parseInt(0) ? 7 : new Date().getDay();
    $('#hdnWidgetDay').val(day);
    selectedDay = day;
    $('#frmYayinAkisiWidget').submit();
});

$(document).on('submit', '#frmYayinAkisiWidget', function (e) {
    e.preventDefault();
    $.ajax({
        url: this.action,
        type: this.method,
        data: $(this).serialize(),
        success: function (data) {
            $("#streamingWidgetMain").html(data);
            $(".tabs li").removeClass('selected');
            $(".tabs #" + tabId).addClass('selected');
            $("#streamingWidgetMain .list").hide();
            $("#" + tabId + "list").show();
            var hdnDateValue = $("#yawDate").attr('value');
            var day;
            var weekDay = ["", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
            $.each(weekDay, function (index, value) {
                if (value == hdnDateValue)
                    day = index;
            });
            getSelected("#" + tabId + "list", selectedDay);
        }
    });

    //return false;
});

// 3 lü widget END

// tekli widget START 

$(document).on('click', '#streamingWidget .list li', function () {
    //e.preventDefault();
    day = $(this).attr('value');
    var i = new Date().getDay();
    i = i != 0 ? i : 7;
    var dayDiff = (parseInt(i) - parseInt(day));
    var url = getUrl('', dayDiff);
    $('#hdnYayinAkisi').val(url);
    getSelected('', day);
    $('#frmYayinAkisi').submit();

    //return false;
});

$(document).on('submit', '#frmYayinAkisi', function (e) {
    e.preventDefault();
    $.ajax({
        url: this.action,
        type: this.method,
        data: $(this).serialize(),
        success: function (data) {
            $("#streamingWidget").html(data);
            var hdnDateValue = $("#yaDate").attr('value');
            var day;
            var weekDay = ["", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
            $.each(weekDay, function (index, value) {
                if (value == hdnDateValue)
                    day = index;
            });
            getSelected('', day);
        }
    });

    //return false;
});

// tekli widget END

function getSelected(id, day) {
    $('.grandInner [class*="list"] ol li').removeClass('selected');
    $('#radyoturkuvaz li').removeClass('selected');
    $('#rdyturkuvaz li').removeClass('selected');
    $('#radyoturkuvazwidget li').removeClass('selected');
    $('.grandInner ol li').removeClass('selected');
    if (day != undefined && $.isNumeric(day)) {
        day = day % 7;
        $(id + ' #day_0' + day).addClass('selected');
    }
    else {
        var url = window.location.pathname;
        var lastValue = url.substring(url.lastIndexOf('/') + parseInt(1));
        if ($.isNumeric(lastValue)) {
            lastValue = lastValue % 7;
            $(id + ' #day_0' + lastValue).addClass('selected');
        }
        else
            $(id + ' #day_0' + new Date().getDay()).addClass('selected');
    }
}

function getUrl(urlLink, dayDiff) {
    d = new Date();
    var arrayList = [];
    var dateLink = '';
    var monthDay, monthDayBefore, diff;

    arrayList.push(d.toLocaleDateString().split('.')[0]);
    arrayList.push(d.toLocaleDateString().split('.')[1]);
    arrayList.push(d.toLocaleDateString().split('.')[2]);

    if ((parseInt(arrayList[0]) + parseInt(-dayDiff)) <= 0) {

        diff = parseInt(arrayList[0]) + parseInt(-dayDiff);

        if (d.getMonth() == 0) {
            monthDay = daysInMonth(12, d.getFullYear() - 1)
            arrayList[1] = 12;
            arrayList[2] = d.getFullYear() - 1;
        }

        else {
            monthDay = daysInMonth(d.getMonth(), d.getFullYear())
            arrayList[1] = d.getMonth();
            arrayList[2] = d.getFullYear();
        }

        arrayList[0] = monthDay;

        if (arrayList[1] < 10)
            dateLink = arrayList[2] + '/0' + arrayList[1] + '/' + (parseInt(arrayList[0]) + diff);
        else
            dateLink = arrayList[2] + '/' + arrayList[1] + '/' + (parseInt(arrayList[0]) + diff);
    }

    else if ((parseInt(arrayList[0]) + parseInt(-dayDiff)) > daysInMonth(d.getMonth() + 1, d.getFullYear())) {

        diff = (parseInt(arrayList[0]) + parseInt(-dayDiff)) - daysInMonth(d.getMonth() + 1, d.getFullYear());

        if (d.getMonth() == 11) {
            monthDay = daysInMonth(12, d.getFullYear() + 1)
            arrayList[1] = 01;
            arrayList[2] = d.getFullYear() + 1;
        }
        else {
            monthDay = daysInMonth(d.getMonth() + 1, d.getFullYear())
            arrayList[1] = d.getMonth() + 2;
            arrayList[2] = d.getFullYear();
        }

        arrayList[0] = monthDay;

        if (arrayList[1] < 10)
            dateLink = arrayList[2] + '/0' + arrayList[1] + '/0' + diff;
        else
            dateLink = arrayList[2] + '/' + arrayList[1] + '/0' + diff;
    }

    else if (parseInt(arrayList[0]) + parseInt(-dayDiff) < 10)
        dateLink = arrayList[2] + '/' + arrayList[1] + '/' + '0' + (parseInt(arrayList[0]) + parseInt(-dayDiff));
    else
        dateLink = arrayList[2] + '/' + arrayList[1] + '/' + (parseInt(arrayList[0]) + parseInt(-dayDiff));

    return url = urlLink + dateLink;
}

function getPage() {

    var url = document.URL;

    var day = new Date().getDay() == parseInt(0) ? 7 : new Date().getDay();

    if (url.lastIndexOf('/') != url.length - 1) {
        var lastValue = url.substr(url.lastIndexOf('/') + parseInt(1));

        if (lastValue != 'yayin-akisi' && lastValue != 'radyoturkuvaz' && lastValue != 'turkuvazromantik' && lastValue != 'turkuvazefsane') {
            $('.grandInner .tabs ul li').removeClass('selected');
            //var day = url.substr(url.lastIndexOf('/') + parseInt(-2), 2);
            var tabClass = lastValue == 'radyo' ? lastValue + 'turkuvaz' : lastValue != 'yayin-akisi' ? 'turkuvaz' + lastValue : 'radyoturkuvaz';
            //$('.grandInner .tabs ul #' + tabClass).addClass('selected');
            //$('.streaming').addClass(tabClass);
            //$('.grandInner [class*="list"]').hide();
            //$('.list.' + tabClass).show();
        }
    }
    getSelected('', day);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

//Yayin - Akisi END

function initPrayTimes() {
    if ($("#SelectedCityOption").length) {
        window.shouldbreak === true;
        var sehir = "istanbul";
        var sehirName = "";
        var prayTimesCookie = $.cookie("prayTimesCity");

        if (prayTimesCookie) {
            sehir = prayTimesCookie;
        }

        $("#SelectedCityOption option").each(function () {
            if ($(this).val() == sehir) {
                sehirName = $(this).text();
                $("#SelectedCityOption").val(sehir);
            }
        })

        var d = new Date();
        d.setDate(d.getDate() + 365);
        $('#SelectedCityOption').on('change', function () {
            getPrayTimes($(this).val());
        });
        $.ajaxSettings.cache = true;
        getPrayTimes(sehir);
    }
}

function getHoursForZone(time) {
    return new Date(time.getTime() + 180 * 60000).getUTCHours();
}

function getPrayTimes(cityname) {
    $.getJSON("/getpraytimes", { city: cityname }, function (data) {
        if (data.Success && data.List != null) {
            var imsak = new Date(parseInt(data.List.Imsak.substr(6)));
            var gunes = new Date(parseInt(data.List.Gunes.substr(6)));
            var ogle = new Date(parseInt(data.List.Ogle.substr(6)));
            var ikindi = new Date(parseInt(data.List.Ikindi.substr(6)));
            var aksam = new Date(parseInt(data.List.Aksam.substr(6)));
            var yatsi = new Date(parseInt(data.List.Yatsi.substr(6)));

            $("#imsak").html((getHoursForZone(imsak) < 10 ? '0' : '') + (getHoursForZone(imsak)) + ":" + (imsak.getUTCMinutes() < 10 ? '0' : '') + imsak.getUTCMinutes());
            $("#gunes").html((getHoursForZone(gunes) < 10 ? '0' : '') + (getHoursForZone(gunes)) + ":" + (gunes.getUTCMinutes() < 10 ? '0' : '') + gunes.getUTCMinutes());
            $("#ogle").html((getHoursForZone(ogle)) + ":" + (ogle.getUTCMinutes() < 10 ? '0' : '') + ogle.getUTCMinutes());
            $("#ikindi").html((getHoursForZone(ikindi)) + ":" + (ikindi.getUTCMinutes() < 10 ? '0' : '') + ikindi.getUTCMinutes());
            $("#aksam").html((getHoursForZone(aksam)) + ":" + (aksam.getUTCMinutes() < 10 ? '0' : '') + aksam.getUTCMinutes());
            $("#yatsi").html((getHoursForZone(yatsi)) + ":" + (yatsi.getUTCMinutes() < 10 ? '0' : '') + yatsi.getUTCMinutes());

            var currentVakit = (new Date().getHours() * 60) + new Date().getMinutes();

            $("#imsak").parent("div").addClass(currentVakit > (imsak.getHours() * 60 + imsak.getMinutes()) && currentVakit < (gunes.getHours() * 60 + gunes.getMinutes()) ? "active" : "");
            $("#gunes").parent("div").addClass(currentVakit > (gunes.getHours() * 60 + gunes.getMinutes()) && currentVakit < (ogle.getHours() * 60 + ogle.getMinutes()) ? "active" : "");
            $("#ogle").parent("div").addClass(currentVakit > (ogle.getHours() * 60 + ogle.getMinutes()) && currentVakit < (ikindi.getHours() * 60 + ikindi.getMinutes()) ? "active" : "");
            $("#ikindi").parent("div").addClass(currentVakit > (ikindi.getHours() * 60 + ikindi.getMinutes()) && currentVakit < (aksam.getHours() * 60 + aksam.getMinutes()) ? "active" : "");
            $("#aksam").parent("div").addClass(currentVakit > (aksam.getHours() * 60 + aksam.getMinutes()) && currentVakit < (yatsi.getHours() * 60 + yatsi.getMinutes()) ? "active" : "");
            $("#yatsi").parent("div").addClass(currentVakit >= (yatsi.getHours() * 60 + yatsi.getMinutes()) ? "active" : "");
            $("#imsak").removeClass("active").addClass(currentVakit > (imsak.getHours() * 60 + imsak.getMinutes()) && currentVakit < (gunes.getHours() * 60 + gunes.getMinutes()) ? "active" : "");
            $("#gunes").removeClass("active").addClass(currentVakit > (gunes.getHours() * 60 + gunes.getMinutes()) && currentVakit < (ogle.getHours() * 60 + ogle.getMinutes()) ? "active" : "");
            $("#ogle").removeClass("active").addClass(currentVakit > (ogle.getHours() * 60 + ogle.getMinutes()) && currentVakit < (ikindi.getHours() * 60 + ikindi.getMinutes()) ? "active" : "");
            $("#ikindi").removeClass("active").addClass(currentVakit > (ikindi.getHours() * 60 + ikindi.getMinutes()) && currentVakit < (aksam.getHours() * 60 + aksam.getMinutes()) ? "active" : "");
            $("#aksam").removeClass("active").addClass(currentVakit > (aksam.getHours() * 60 + aksam.getMinutes()) && currentVakit < (yatsi.getHours() * 60 + yatsi.getMinutes()) ? "active" : "");
            $("#yatsi").removeClass("active").addClass(currentVakit >= (yatsi.getHours() * 60 + yatsi.getMinutes()) ? "active" : "");
            $.cookie("prayTimesCity", null, { expires: -1, path: "/" });
            var d = new Date();
            d.setDate(d.getDate() + 365);
            $.cookie("prayTimesCity", cityname, { expires: d.toGMTString(), path: "/" });
        }
    });
}

function GetMostViewedNews(site, count) {
    $.ajax({
        url: '/getmostviewednews',
        type: 'POST',
        dataType: 'JSON',
        data: { 'webSite': site, 'count': count },
        success: function (data) {
            if (data != null) {
                if (data.Success == true
                    && data.Data != null
                    && data.Data.length > 0) {

                    var title = $($('<div/>').addClass('title'))
                        .append($('<a/>').attr('href', 'javascript:void(0)').text('TOP 5 NEWS'));

                    var list = $('<div/>').addClass('list');

                    var ul = $('<ul/>');

                    $(data.Data).each(function (index, item) {
                        var url = 'https://www.anews.com.tr' + item.Url;
                        var li = $('<li/>')
                            .append(
                                $($('<a/>').attr({ 'href': url, 'target': '_blank' }))
                                    .append($('<i/>').addClass('icon-play'))
                                    .append($('<strong/>').text(item.Title))
                            );
                        $(ul).append(li);
                    });

                    var all = $($('<div/>').addClass('all'))
                        .append($('<a/>').attr({ 'href': 'https://www.anews.com.tr', 'target': '_blank' }).text('All'))
                        .append($('<i/>').addClass('icon-down-open-big'));

                    $(list).append(ul);
                    $(list).append(all);

                    $('#topNews').append(title);
                    $('#topNews').append(list);
                    $('#topNews').slideDown();
                }
                else {
                    //alert(data.Message);
                }
            }
        },
        error: function (XMLHttpRequest, xhr, textStatus, errorThrown) {
            //alert(data.Message);
        }
    });
}

function GetMostViewedVideos(site, count) {
    $.ajax({
        url: '/getmostviewedvideos',
        type: 'POST',
        dataType: 'JSON',
        data: { 'webSite': site, 'count': count },
        success: function (data) {
            if (data != null) {
                if (data.Success == true
                    && data.Data != null
                    && data.Data.length > 0) {

                    var title = $($('<div/>').addClass('title'))
                        .append($('<a/>').attr('href', 'javascript:void(0)').text('TOP 5 VIDEOS'));

                    var list = $('<div/>').addClass('list');

                    var ul = $('<ul/>');

                    $(data.Data).each(function (index, item) {
                        var url = 'https://www.anews.com.tr' + item.Url;
                        var path = item.Path == null || item.Path == '' ? item.Path2 : item.Path;
                        var li = $('<li/>')
                            .append(
                                $($('<a/>').attr({ 'href': url, 'target': '_blank' }))
                                    .append($('<em/>').append(
                                        $('<img/>').attr({
                                            'src': path,
                                            'width': 95,
                                            'height': 48,
                                            'alt': item.Title
                                        })))
                                    .append($('<strong/>').text(item.Title)));

                        $(ul).append(li);
                    });

                    var all = $($('<div/>').addClass('all'))
                        .append($('<a/>').attr({ 'href': 'https://www.anews.com.tr/webtv', 'target': '_blank' }).text('All'))
                        .append($('<i/>').addClass('icon-down-open-big'));

                    $(list).append(ul);
                    $(list).append(all);

                    $('#topVideos').append(title);
                    $('#topVideos').append(list);
                    $('#topVideos').slideDown();
                }
                else {
                    //alert(data.Message);
                }
            }
        },
        error: function (XMLHttpRequest, xhr, textStatus, errorThrown) {
            //alert(data.Message);
        }
    });
}

window.addEventListener('popstate', function (event) {
    if (window.location.pathname == "/") {
        lnkHomePage();
    } else {
        history.replaceState(null, null, window.location.href);
    }

    if (!window.location.pathname.includes('canli-yayin') && $("body").hasClass("livetv-page")) {
        $("body").removeClass("livetv-page");
    }

    if (window.location.pathname != "canli-yayin") {
        $(".header-top").removeAttr("style");
        if ($('#btnMobileVavRadio').hasClass('d-none')) {
            $('#btnMobileVavRadio').removeClass('d-none');
        }
    }
});




function SetVavRadioStatus(isRadioLive) {
    if (isRadioLive) {
        $(".vavradyo-live a").removeAttr('onclick');
        setTimeout(function () {
            $(".vavradyo-live a").attr('data-fancybox', '');
        }, 110)

    }
    else {
        $(".vavradyo-live a").removeAttr('data-fancybox');
        $(".vavradyo-live a").attr("onclick", "StartRadio();");
    }
}

function StartRadio() {

    RadioStartProccess();
    SetVavRadioStatus(true);
}

function scrollTop() {
    $('html, body').animate({ scrollTop: 0 }, '600');
}

var base = {};
base.isDb = function () {
    var t, e = new Date;
    try {
        return sessionStorage.setItem(e, e),
            t = sessionStorage.getItem(e) == e,
            sessionStorage.removeItem(e),
            t && sessionStorage
    } catch (t) {
        return !1
    }
}


// Mobile Detect -----------
var MobileDetect = function () { var e = function () { }; e.isTablet = !1, e.isPhone = !1, e.isDesktop = !1; var o = navigator.userAgent.toLowerCase(); return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(o) ? e.isTablet = !0 : /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(o) ? e.isPhone = !0 : e.isDesktop = !0, e.prototype.phone = function () { return !!e.isPhone || null }, e.prototype.tablet = function () { return !!e.isTablet || null }, e.prototype.desktop = function () { return !!e.isDesktop || null }, e }(), md = new MobileDetect(window.navigator.userAgent); window.deviceInfo = { isMobile: null != md.phone(), isTablet: null != md.tablet() };
// -------------------------

