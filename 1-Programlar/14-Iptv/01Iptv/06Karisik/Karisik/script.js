var player = new Playerjs({
  dashsettings: {
    setProtectionData: {
      "com.widevine.alpha": {
        serverURL:""
        
      },
      "com.microsoft.playready": {
        serverURL:""
      },
      "org.w3.clearkey": {
        clearkeys: {}
      }
    },
    abr: {
      enabled: true
    },
    streaming: {
      buffer: {
        fastSwitchEnabled: true
      }
    }
  },
  id: "player",
  file: [
    {
      title: "TRT 1",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://ddc75c8a6akqr.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-1/master.m3u8"
    },
    {
      title: "Show Tv",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://ciner-live.daioncdn.net/showtv/showtv_1080p.m3u8"
    },
    {
      title: "Kanal D",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://demiroren.daioncdn.net/kanald/kanald_1080p.m3u8?app=da2109ea-5dfe-4107-89ab-23593336ed61&ce=3"
    },
    {
      title: "Kanal 7",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://ecanlitv4.etvserver.com:8081/kanal7.m3u8?tkn=jNRYPBt90ETb7gTxiaQXMQ&tms=1681524785"
    },
    {
      title: "Star Tv",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://dogus-live.daioncdn.net/startv/startv.m3u8"
    },
    {
      title: "360 Tv",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://turkmedya-live.ercdn.net/tv360/tv360_720p.m3u8"
    },
    {
      title: "TV 8",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://tv8.daioncdn.net/tv8/tv8_1080p.m3u8?&app=7ddc255a-ef47-4e81-ab14-c0e5f2949788&ce=3"
    },
    {
      title: "Trt 2",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://tv-trt2.medya.trt.com.tr/master_720.m3u8"
    },
    {
      title: "Trt Müzik",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8"
    },
    {
      title: "Trt Türk",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://tv-trtturk.medya.trt.com.tr/master_720.m3u8"
    },
    {
      title: "Trt 4K",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://ddc75c8a6akqr.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-1/master.m3u8"
    },
    {
      title: "Trt Hd",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://ddc75c8a6akqr.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-1/master.m3u8"
    },
    {
      title: "One 4 Tv",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://edge1.socialsmart.tv/on4/bant1/chunks.m3u8"
    },
    {
      title: "Tgrt Eu",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://tv.ensonhaber.com/tv/tr/tgrteu/index.m3u8"
    },
    {
      title: "Kanal Pati",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://59cba4d34b678.streamlock.net/live/kanalpati/playlist.m3u8"
    },
    {
      title: "Kanal 19",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://vdo.digitalbox.xyz:3644/live/kanal19tvlive.m3u8"
    },
    {
      title: "Cnn Türk",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://live.duhnet.tv/S2/HLS_LIVE/cnnturknp/playlist.m3u8"
    },
    {
      title: "Haber Türk",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://ecanlitv3.etvserver.com/live_sd/haberturk/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8xNS8yMDIzIDEyOjEzOjEwIEFNJmhhc2hfdmFsdWU9TnFEQjJaZHhZWC9va243THQ1YVJBdz09JnZhbGlkbWludXRlcz0xMA=="
    },
    {
      title: "A Haber",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://ecanlitv3.etvserver.com:8081/ahaber.m3u8?tkn=aq32PFz1BW_JDGbS8d_UJA&tms=1681524790"
    },
    
    {
      title: "Trt Haber",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://ecanlitv3.etvserver.com/live_sd/trthaber/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9NC8xNS8yMDIzIDEyOjEzOjEwIEFNJmhhc2hfdmFsdWU9TnFEQjJaZHhZWC9va243THQ1YVJBdz09JnZhbGlkbWludXRlcz0xMA=="
    }, 
    {
      title: "Global Tv",
      poster: "https://od.lk/s/OTFfMjc4NTU3OTRf/Yeniiii-removebg-preview.png",
      type: "application/dash+xml",
      file:
        "https://tv.ensonhaber.com/tv/tr/haberglobal/index.m3u8"
    }
  ]
});

/*
document.addEventListener("DOMContentLoaded", () => {
  let playingInstance = null;
  const players = document.querySelectorAll("#player");
 
  players.forEach((player) => {
    const playList = ({ 
      title:"", 
      poster:"", 
      source: "https://dce-fs-live-dazn-cdn.dazn.com/dashdrm/dazn-linear-039/stream.mpd", 
      shakaConfiguration: {
        drm: {
          clearKeys: {
            "82f8e2a17dac44c0a18f660479349c59":"1b144f73e6fefe91cd05f850e2b589d0"
          }
        }
      }, 

      // source: player.getAttribute("src"),
      //poster: player.getAttribute("poster"),//
      autoPlay: player.getAttribute("auto"),
      height: "215",
      //position: "center",
      width: "100%",
      plugins: [DashShakaPlayback, LevelSelector],
      levelSelectorConfig: {
        title: "Quality",
        labels: {
          3: "HD", // 700kbps
          2: "High", // 500kbps
          1: "Med", // 240kbps
          0: "Low" // 120kbps
        },
        labelCallback: function (playbackLevel, customLabel) {
          return customLabel + playbackLevel.level.height + "p"; // High 720p
        }
      },
      watermark:
        "https://raw.githubusercontent.com/murid-nakal/scout/master/wlogo.png",
      position: "bottom-left",

      shakaOnBeforeLoad: function (shaka_player) {
        // shaka_player.getNetworkingEngine().registerRequestFilter() ...
      }
    });

    const clappr = new Clappr.Player(playList);

    clappr.attachTo(player);
    clappr.on(Clappr.Events.PLAYER_PLAY, function () {});

    //var mediaOnPage = Array.prototype.slice.apply(
      //document.querySelectorAll("audio, video"));

    //mediaOnPage.forEach(function (mediumOnPage) {
      //mediumOnPage.addEventListener("play", function (event) {
        //mediaOnPage.forEach(function (mediumOnPage) {
          //if (event.target != mediumOnPage) {
            //mediumOnPage.pause();
          //}
        //});
      //});
    //});
  });
});
*/
//**********************************//
/*
var player = new Playerjs({
  
  dashsettings: {
    abr: {
      enabled: true
    },
    streaming: {
      buffer: {
        fastSwitchEnabled: true
      }
    }
  },

  id: "player",
  file: [
    {
      title:
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7Y1oGFXTo0hSgeVLje-uvOvZX0d90dpwJw&usqp=CAU' class='playlist-img'></div>",
      poster:
        "",
      file:
        "https://bcovlive-a.akamaihd.net/r2d2c4ca5bf57456fb1d16255c1a535c8/eu-west-1/eu-west-1/6058004203001/profile_1/chunklist.m3u8"
    },
    {
      title:
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3M82Y8YcqtSXtuHDW4Pf2k4KnhvBscSW3BQ&usqp=CAU' class='playlist-img'></div>",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3M82Y8YcqtSXtuHDW4Pf2k4KnhvBscSW3BQ&usqp=CAU",
      file:
        "https://rmtv.akamaized.net/hls/live/2043153/rmtv-es-web/master.m3u8"
    },
    {
      title:
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGcuauuUzQfU3A54rE9w3UUE9phoh4uyhRQ&usqp=CAU' class='playlist-img'></div>",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGcuauuUzQfU3A54rE9w3UUE9phoh4uyhRQ&usqp=CAU",
      type: "application/dash+xml",
      file:
        "https://d14a5mi0m64mw7.cloudfront.net/out/v1/8a240d2e8a64453da6288810ede90a60/index.mpd"
    },
    {
      title:
        "DrM Test",
      poster:
        "",

      type: "application/dash+xml",
      file:
        "https://dce-fs-live-dazn-cdn.dazn.com/dashdrm/dazn-linear-039/stream.mpd", 
      drm: {
            clearkeys: {keyId:"82f8e2a17dac44c0a18f660479349c59", key:"1b144f73e6fefe91cd05f850e2b589d0"}
          },
      
   //serverURL:"https://drmwidevine.nontonbola.my.id/https://mrpw.ptmnc01.verspective.net/?deviceId=YzM0NDA0MTItMGYyMC0zNGQ0LTliMjMtNDY4MjE1ZjA5NmZj"
                    }
         
    
    
    /*
    {
      title: "BEIN SPORT 🇬🇧",
      poster: "",
      file:
        "https://do3-sv3.gdplayer.to/playlist/RWJ2dzAxaU55YU5UVmx6U3ErTmpFaXdjZjFXa295YUpaTlU1Ti95SnFHZWU4Rng3Y1k5aXExMjRKcVVjb0dVdE9xcjlmMHFxWlRRcDV5NkdxeXBSZnc9PQ,,/master.m3u8?token=QklxMXNDcDBraXdIQ3YrTjVHb0tJRXkzcTB5anNCWUN0Y0NCVU5SZno2L0dpMk1lTlNHMmpUbUJzTWhsYU00aTJoTnJNbC9vQVVRcHlqT1lhK1FtRmc9PQ,,"
    }, 
    {
      title: "BEIN SPORT 1 🇬🇧",
      poster: "",
      file:
        "https://do2-sv2.gdplayer.to/playlist/YlRCL0NJWmhYT1VNbk1obHNKSHZZc1lkTmM2dTJnejAzbndWcWpqb2dwOHNVQUQwcUdzWWJIakc1MC9RNXhFWmppUkd5WkNJYk9DV0RrcHF5STBEWlE9PQ,,/master.m3u8?token=Z2V4QkZacmc3NE1sS1pVazdLL1NoVTJ4NTAwWGlvTGRMWHNtOTBRNUVmNE5XVmxYZUYxWDUzOXZSVjdoekxCcGlJVWRHZmVJV3Nja2RTbG5tdTJRZ1E9PQ,,"
    }, 
    
    {
      title: "BEIN SPORT 2 🇬🇧",
      poster: "",
      file:
        "https://do2-sv1.gdplayer.to/playlist/UFNrcy9JeFQrWWlOMFA2ZnJGYzlrVGxNY3dVb0J4RXlXVlVONTBhdVJISGovUDRuK3YxWXYyTFNjT2dxNlNhekJYRHk1RzFTcVVsZE1yRWd5dEM2VG1vTE5vcWEyNk12MjdkbU9QRmlobXM9/ddy1/premium90/tracks-v1a1/mono.m3u8?data=Q3JiYlVoSVdBTjVxdVNQbkROSXBvSkduTWhnZkxWTUxzVkpYOFdmSGgzblhaVkFsMTRRWkVKNUFxV2l3MUVNZ3NTK25zaXZvMEh6K2ZMOXBhczFWVW5ma0N0MStncFRkMkxveUtzQkpkUjA9&live=true&token=a2pwbWg3MWVzWVVZdm9mZUlYaFc1cEZ6OWN2ZVcxcWZwOWlNK2ZFK1pqNUZOT2hTc1lUbjNaME1FblMxR25VaS9hcTdTYWw3VnRCRDlibUV5M1pTeFE9PQ,,"
    }, 
    {
      title: "BEIN SPORT 3 🇬🇧",
      poster: "",
      file:
        "https://do2-sv2.gdplayer.to/playlist/dmVDTlp1dXh2QkJqN3BYME9rNEtrNWxFVUZ6dTNUbzhndXlOZlZSMXBoR0F4L0NaZUhpRjJCTTJIN2p0YVV4ZzZEaWxIUGdrNE53RFl0Y1BSM1dIMEE9PQ,,/master.m3u8?token=Z2V4QkZacmc3NE1sS1pVazdLL1NoVTJ4NTAwWGlvTGRMWHNtOTBRNUVmNE5XVmxYZUYxWDUzOXZSVjdoekxCcGlJVWRHZmVJV3Nja2RTbG5tdTJRZ1E9PQ,,"
    }*/

//*********************************//
/*
    {
      title: "BeinSport Xtra 1",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWa7Mq9IBkWgqiNMBPLXnXuCDt9jfghN_ZsQ&usqp=CAU",
      file: "https://siloh.pluto.tv/lilo/production/bein/1/master_3.m3u8"
    },
    {
      title: "BeinSport Xtra 2",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWa7Mq9IBkWgqiNMBPLXnXuCDt9jfghN_ZsQ&usqp=CAU",
      file:
        "https://siloh.pluto.tv/lilo/production/bein/b1121710f0b14c1146591b65168004e6/master.m3u8"
    },
    {
      title: "BEIN SPORTS 1 EN",
      poster: "",
      file:
        "https://cors.deno.dev/http://62.182.82.104/L_1_ENGLISH/index.m3u8?token=test&v=697229347"
    },
    {
      title: "BEIN SPORTS 1 QA",
      poster: "",
      file:
        "https://cors.deno.dev/http://88.99.216.157:5080/WebRTCApp/streams/Bein1.m3u8"
    },

    {
      title: "FOX SPORT1",
      poster: "",
      file:
        "https://dizf8i52j4sep.cloudfront.net/out/v1/148af6c03e6d48b0a725611fae5ed3a7/index.mpd"
    },
    {
      title: "FOX SPORT2",
      poster: "",
      file:
        "https://d17lgdx4t7a4od.cloudfront.net/out/v1/bca3f8d654aa4cb293e4e9801468a5a3/index.mpd"
    },
    {
      title: "ESPN 2",
      poster: "",
      file:
        "https://cors.deno.dev/http://rn2yfxko.tvclub.xyz/iptv/WP3PZRYBCGTFUB/19155/index.m3u8"
    },
    {
      title: "FOX SPORT3",
      poster: "",
      file:
        "https://d14a5mi0m64mw7.cloudfront.net/out/v1/8a240d2e8a64453da6288810ede90a60/index.mpd"
    },
    {
      title: "DAZN 1",
      poster: "",
      file:
        "https://cors.deno.dev/http://51.178.36.235:49214/DAZN_1/hls/playlist.m3u8"
    },
    {
      title: "DAZN 2",
      poster: "",
      file:
        "https://cors.deno.dev/http://51.178.36.235:49214/DAZN_2/hls/playlist.m3u8"
    },
    {
      title: "DAZN 3",
      poster: "",
      file:
        "https://cors.deno.dev/http://51.178.36.235:49214/DAZN_3/hls/playlist.m3u8"
    },
    {
      title: "DAZN 4",
      poster: "",
      file:
        "https://cors.deno.dev/http://51.178.36.235:49214/DAZN_4/hls/playlist.m3u8"
    },
    {
      title: "BEIN SPORTS 1 EN",
      poster: "",
      file:
        "https://cors.deno.dev/http://62.182.82.104/L_1_ENGLISH/index.m3u8?token=test&v=1673204766768"
    },

    {
      title: "SKY SPORT MAIN EVEN",
      poster: "",
      file:
        "https://cors.deno.dev/http://he11o.akadatel.com/iptv/NSZN5B863V6Z9K/7337/index.m3u8"
    } */
/////]});*/

/*
player.configure({
  drm: {
    clearKeys: {
      // 'key-id-in-hex': 'key-in-hex',
      'deadbeefdeadbeefdeadbeefdeadbeef': '18675309186753091867530918675309',
      '02030507011013017019023029031037': '03050701302303204201080425098033'
    }
  }
});*/

/*
//https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5a74b8e1e22a61737979c6bf/master.m3u8?deviceType=samsung-tvplus&deviceMake=samsung&deviceModel=samsung&deviceVersion=unknown&appVersion=unknown&deviceLat=0&deviceLon=0&deviceDNT=%7BTARGETOPT%7D&deviceId=%7BPSID%7D&advertisingId=%7BPSID%7D&us_privacy=1YNY&samsung_app_domain=%7BAPP_DOMAIN%7D&samsung_app_name=%7BAPP_NAME%7D&profileLimit=&profileFloor=&embedPartner=samsung-tvplus foxsport1

//https://stitcher-ipv4.pluto.tv/v1/stitch/embed/hls/channel/5df975e2b27cf5000921c102livestitch/master.m3u8?deviceType=samsung-tvplus&deviceMake=samsung&deviceModel=samsung&deviceVersion=unknown&appVersion=unknown&deviceLat=0&deviceLon=0&deviceDNT=%7BTARGETOPT%7D&deviceId=%7BPSID%7D&advertisingId=%7BPSID%7D&us_privacy=1YNY&samsung_app_domain=%7BAPP_DOMAIN%7D&samsung_app_name=%7BAPP_NAME%7D&profileLimit=&profileFloor=&embedPartner=samsung-tvplus&profilesFromStream=true beinsport xtra

//http://247iptv.org:5454/live/Gwendolyn/Gwendolyn/2321.m3u8 >> https://eu2.247iptv.cc:4545/live/play/TkVzMk9HRnhTUzlhSzA5dGNtdHFWVTVzZVVSdldYUlJWV1pwU2s1aFEzazVUR2MzY0hvMUt6aGpXVDA9/2321 |skysportmainevent
*/