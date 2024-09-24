function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [
    {
      name:"♫ Heç Olmasa",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4f0108c5fa5494872f2f01292808bcaa.mp3 ",
      duration:""
    },

    {
      name:"♫ Seni Sevmekdendir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8cbc4162a0303341d0a0e4ff7298030b.mp3 ",
      duration:""
    },
    {
      name:"♫ Nefesimsen",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fbbb3b6ad78841b74e59b7f600399433.mp3",
      duration:""
    },
    {
      name:"♫ Eşq Nedir Vefa Nedir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3caf011cc7993566637c7ebf902cc5f0.mp3 ",
      duration:""
    },
    {
      name:"♫ Olum Qorxutmaz Meni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/86c997510e72c1a950fed5796b46c730.mp3 ",
      duration:""
    },
    {
      name:"♫ Getme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d9d10a378dd8f497a7ab4cdd08c0c6fa.mp3",
      duration:""
    },
    {
      name:"♫ Gelerdim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0c18d2659df92694d979408447fc67e8.mp3 ",
      duration:""
    },
    {
      name:"♫ Qadasın Alaram (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b40c0a1b37bc1d790a11ff81549412f2.mp3 ",
      duration:""
    },
    {
      name:"♫ Senin Üçün Ölürem Ömrüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b39287eae29bc646ba0ac67ee3865bf9.mp3 ",
      duration:""
    },
    {
      name:"♫ Ihtiyaci Var",
      file:" https://cdn.muzikmp3indir.com/mp3_files/eb0cac030c7bbbbc320e91c83fefc1f1.mp3",
      duration:""
    },
    {
      name:"♫ Popuri 2023",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1dd46b9a69101cd4fb8c6271ab70211a.mp3 ",
      duration:""
    },
    {
      name:"♫ Neyime Lazım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/228522805b0c570ef10baef6d35e737b.mp3 ",
      duration:""
    },
    {
      name:"♫ Üzülüb Ellerim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3cdf036a33808b066f051bb7c0fd2ff6.mp3 ",
      duration:""
    },
    {
      name:"♫ Qürur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/31b71de0101dee9f5995156785100529.mp3 ",
      duration:""
    },
    {
      name:"♫ Sensen Üreyimde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0afd13e780f27c667f2cb4314b1a60ee.mp3 ",
      duration:""
    },
    {
      name:"♫ Siyah",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e1988eb68865aeb5f83a911f505cd6b7.mp3",
      duration:""
    },
    {
      name:"♫ Sevsen Meni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/458c0ddd5b30de834f9897fba4b0a945.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevdiyim İnsan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ffad95279ff969d6b1c4ff4549025444.mp3 ",
      duration:""
    },
    {
      name:"♫ Bade",
      file:"https://cdn.muzikmp3indir.com/mp3_files/494bb3c92a9e72dd79691795806864c3.mp3 ",
      duration:""
    },
    {
      name:"♫ Qürbetdeki Yarim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/79f6c732884f8dae023cac73776d1abe.mp3 ",
      duration:""
    },
    {
      name:"♫ Olmaz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/abf155ee261e4e1e11c909a12f7ad402.mp3 ",
      duration:""
    },
    {
      name:"♫ Üreyimin Sultanı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f94aa1485e244128968ed4d57e28292c.mp3 ",
      duration:""
    },
    {
      name:"♫ Popuri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d1ef462da979c7d9f6a3e94fb91d22ac.mp3 ",
      duration:""
    },
    {
      name:"♫ Beh Beh",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8f6cbabcddefda96484026a365b0482a.mp3",
      duration:""
    },
    {
      name:"♫ Seni Sevmekdendir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cbcedf2dd6a333e624baec447db4918c.mp3 ",
      duration:""
    },
    {
      name:"♫ Üreyimden Silirem Men",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1d8b494e6883011abeb9c19209bc9da1.mp3 ",
      duration:""
    },
    {
      name:"♫ İnsafsız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e548516de700d399230a5b33610b176a.mp3 ",
      duration:""
    },
    {
      name:"♫ Şah",
      file:" https://cdn.muzikmp3indir.com/mp3_files/21847b778630884829a3d795aa343183.mp3",
      duration:""
    },
    {
      name:"♫ Ömrüme Kış Geldi Anam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/41af96a8e6e2fe70a366875f2989d7eb.mp3 ",
      duration:""
    },
    {
      name:"♫ Baldı Balam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e93b99e967cf6a812dbeb0c877ea50bd.mp3 ",
      duration:""
    },
    {
      name:"♫ Qorxuram Seni İtirmekden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0faf54904a1afacb3b49b77a8a1b33f0.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevdiyimin Şeheri Başqadır",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f5a34fc74bc1bc5fb58478275c230d2b.mp3 ",
      duration:""
    },
    {
      name:"♫ Nahidim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/580563215a2b89d8fdbe4409ee238726.mp3",
      duration:""
    },
    {
      name:"♫ Nifret",
      file:" https://cdn.muzikmp3indir.com/mp3_files/faad1b9071f1528bf56254e7c42b12b6.mp3",
      duration:""
    },
    {
      name:"♫ Ömrüm Günüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e44306e065497a4d5e105eaa4abd9d25.mp3 ",
      duration:""
    },
    {
      name:"♫ Yaqubum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8e25677453e73cfbcad4bbaee0ac994c.mp3 ",
      duration:""
    },
    {
      name:"♫ Heyat",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ef862aeb902fd81db19be0d94b7a6a7f.mp3 ",
      duration:""
    },
    {
      name:"♫ Anam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f7aa04d1fe3e68637fef113c2eeedd5f.mp3 ",
      duration:""
    },
    {
      name:"♫ Anam (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c8832f05e5d95cb7ebcd4a8ac68d7f11.mp3 ",
      duration:""
    },
    {
      name:"♫ Ay Zalim (Rap Version)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/67fca66b993b4a4cb4d6b889b2b51bed.mp3 ",
      duration:""
    },
    {
      name:"♫ Mene Qiyarsanmi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bda891a19c22d10c9bb77acce6544af3.mp3 ",
      duration:""
    },
    {
      name:"♫ Senden Uzaqlarda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c886d7b8415d3dc3e2c458b53c392ca1.mp3 ",
      duration:""
    },
    {
      name:"♫ Menali-Gelerdim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e2113c462fedb24c056877dba4a15267.mp3 ",
      duration:""
    },
    {
      name:"♫ Ömrüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f623bcb902fddf96219b0d8131c8f702.mp3 ",
      duration:""
    },
    {
      name:"♫ evmeyi Öyret Mene",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6db5d927385ae0a1367984a0a1f6d061.mp3 ",
      duration:""
    },
    {
      name:"♫ Xeberin Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8dce1db38b9f387c5879b19316d30f4d.mp3 ",
      duration:""
    },
    {
      name:"♫ Bizi Öldürdü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8909f115786e14e88bf3b5f45c0038fa.mp3 ",
      duration:""
    },
    {
      name:"♫ feat İsgence",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b2da766e6f890dee569e601544960b5a.mp3",
      duration:""
    },
    {
      name:"♫ Var Biri",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e9aeb9f4e46e56e3e4f923d01ad1e83c.mp3",
      duration:""
    },
    {
      name:"♫ Derdime Derman",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cde2e90a13c01b1ba3297a3f5ac7fc60.mp3",
      duration:""
    },
    {
      name:"♫ Qızım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1362663782e173dad727454b8b1422dd.mp3 ",
      duration:""
    },
    {
      name:"♫ Qarabağ Azərbaycandır",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1ea15b53e233b44891653afbf68b18fa.mp3 ",
      duration:""
    },
    {
      name:"♫ Nur Üzlü Şehidim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/39d14bd1a1d36e757ea29722d1f6df22.mp3 ",
      duration:""
    },
    {
      name:"♫ Unutmadinmi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6d9a8fca82a66adbe4dd35498096c0ba.mp3 ",
      duration:""
    },
    {
      name:"♫ Ey Menim Heyatim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d3b0ff8789a17174f0e3bae6537701a3.mp3 ",
      duration:""
    },
    {
      name:"♫ Unut Meni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8d575dc6f3c099a00ae11721a25350a9.mp3 ",
      duration:""
    },
    {
      name:"♫ Canimsan",
      file:" https://cdn.muzikmp3indir.com/mp3_files/529b6a02113676f7f8da3366c921fd1a.mp3",
      duration:""
    },
    {
      name:"♫ Men Hele Olmemisem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7e105c670e646775aa5f3588b195980f.mp3 ",
      duration:""
    },
    {
      name:"♫ Soel Parfum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b33f9eca744f4c00f4e536a3d74e7e73.mp3 ",
      duration:""
    },
    {
      name:"♫ Dermanım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9a5a483a81c82fa34205c8d2608f2617.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Adam Sevdim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/16f269ea4e1b72e508e9d11cae800d5a.mp3 ",
      duration:""
    },
    {
      name:"♫ Canin Sağ Olsun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/996a193287647b3c7cd2e18c573aa066.mp3 ",
      duration:""
    },
    {
      name:"♫ Anam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e7386e4193ff433e9f0580b7f492681c.mp3",
      duration:""
    },
    {
      name:"♫ Men Asiq",
      file:"https://cdn.muzikmp3indir.com/mp3_files/67129cb0ffc4591e689a2402d53ae758.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevdiyim İnsan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/efd6b62baa4b923c9a9c8c30c86214ed.mp3 ",
      duration:""
    },
    {
      name:"♫ Eli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3552e82b91d5487644e09f63b6a84354.mp3 ",
      duration:""
    },
    {
      name:"♫ Gelin (Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b04abd2e9c2d2866670b882ce17c328b.mp3",
      duration:""
    },
    {
      name:"♫ Novxani-Bimar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bc03a5e47cae5568094914b1db36b87b.mp3",
      duration:""
    },
    {
      name:"♫ Sevenler Ölmez",
      file:"https://cdn.muzikmp3indir.com/mp3_files/39ddf01a10077eeaf8d21eeddbdf61b8.mp3 ",
      duration:""
    },
    {
      name:"♫ Yar Ağladi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8d68e62385509095c8d1bf07e1794c81.mp3",
      duration:""
    },
    {
      name:"♫ Sevdiyim Adamdır",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e8c4bf0cb27d25b8358d51e1d421a6f0.mp3",
      duration:""
    },
    {
      name:"♫ Xesteyem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a3116d49828c7dffdad939d32faab5f0.mp3 ",
      duration:""
    },
    {
      name:"♫ Çanta",
      file:" https://cdn.muzikmp3indir.com/mp3_files/486bb9b03025eb68aa6655676dc34924.mp3",
      duration:""
    },
    {
      name:"♫ Tek Menim Ol",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37729e0e2b8d1925643ae6ef2a38fbe2.mp3 ",
      duration:""
    },
    {
      name:"♫ Men İndi Sevdim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8123d9939f16644e1ba85add581cb9eb.mp3 ",
      duration:""
    },
    {
      name:"♫ Gel Görüşek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4b85706ff158b2dda6bb2626f1c882f6.mp3 ",
      duration:""
    },
    {
      name:"♫ Biz Ayrılmarıq",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3ddf9dbe1434bc4e84418ab8c40ff1fc.mp3 ",
      duration:""
    },
    {
      name:"♫ Balam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d21b1539f1310aa0a2fd92c3c9626337.mp3",
      duration:""
    },
    {
      name:"♫ Hardasan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8aba4a1b0fcc1ca3419bc3a3edb09353.mp3 ",
      duration:""
    },
    {
      name:"♫ Sultanim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7a60bdd9025a0864ff6b62688296cdf0.mp3 ",
      duration:""
    },
    {
      name:"♫ Vefalım Menim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9b33646d2b1d88c919cfd3ddb162e548.mp3 ",
      duration:""
    },
    {
      name:"♫ Olsaydım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/86e282c535ba34e9185c63d782e79d77.mp3",
      duration:""
    },
    {
      name:"♫ Canım Neynim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/144edd0230996e11e10370236e834339.mp3 ",
      duration:""
    },
    {
      name:"♫ Yene Sensen Ureyimde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/51375b5ff7381bddc60aaa86376510b0.mp3 ",
      duration:""
    },
 {
      name:"♫ Narin Narin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7b3df2c0d2d6a05389b3b982c6603341.mp3",
      duration:""
    },
 {
      name:"♫ Lazım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/df061d464497654982979b90ec2b46bd.mp3 ",
      duration:""
    },
 {
      name:"♫ Qadasın Alaram",
      file:" https://cdn.muzikmp3indir.com/mp3_files/qadasin-alaram-G8tBmnOfN5-0.mp3",
      duration:""
    },
 {
      name:"♫ Serin Serin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3d21ffee79512cfbe8c27b6a4ca3eccc.mp3 ",
      duration:""
    },
 {
      name:"♫ Sus Birazda Meni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e8936cd7866642223b2bdbb54f304251.mp3 ",
      duration:""
    },
 {
      name:"♫ Balıqların Şahı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/26a91d938c0e02c3d00c42187807ed3a.mp3 ",
      duration:""
    }

  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }