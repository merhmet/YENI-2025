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
      name:"♫ Osman Gökcek ",
      file:" https://od.lk/s/OTFfMjc3ODIyODNf/osman-gokcek-den-recep-tayyip-erdogan-a-tugef-konusmasi-tuyler-diken-d.mp3 ",
      duration:""
    },

    {
      name:"♫ Ey Oğul Şiiri",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3974f7093ed19e72e268a7e8a9dec717.mp3 ",
      duration:""
    },


    {
      name:"♫ Diriliş Şiiri ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4535d146766bdc8887b6249fbb0e5b46.mp3 ",
      duration:""
    },
 {
      name:"♫ Bizi Sensiz Bırakma ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6a8cebc4ef6be703a9e0c4280a543a28.mp3  ",
      duration:""
    },
 {
      name:"♫ Bil Oğlum",
      file:" https://cdn.muzikmp3indir.com/mp3_files/708891216e0014a38d9a8fe93f6e8906.mp3 ",
      duration:""
    },
 {
      name:"♫  Şarkımız Bizim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c2778115b2df78789218688cec0fda47.mp3 ",
      duration:""
    },
 {
      name:"♫  Bizim de Yaşadığımız Hayattır",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f9ad19a55c4d9441872403425bfcdfff.mp3 ",
      duration:""
    },
 {
      name:"♫  Göklerden Gelen Karar Vardır",
      file:" https://cdn.muzikmp3indir.com/mp3_files/220ec872a91dac99f7da455b3cf62dcb.mp3 ",
      duration:""
    },
 {
      name:"♫ Zindandan Mehmete Mektup ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a9d5c58168d1e32819e4668ae06a2809.mp3  ",
      duration:""
    },
 {
      name:"♫ Filistin Şiiri ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9e6fda3f63b8d8218f88040f6e9f9ecd.mp3 ",
      duration:""
    },
 {
      name:"♫ Ben Bitti Demeden Bitmez Üzülmeyin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4671746e620b5a83021796e52f6a8d5f.mp3  ",
      duration:""
    },
 {
      name:"♫ 15 Temmuz Şiiri",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c8c0d6d55d4820a4bdf37e5f993966c4.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Vatan Senin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f9f56ef94cd6986591f613336cd22a22.mp3  ",
      duration:""
    },
 {
      name:"♫ Sürgün Şiiri ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bcaf60c7ea5c6523b5717daefda77e55.mp3 ",
      duration:""
    },
 {
      name:"♫ İncitme Gönül",
      file:"https://cdn.muzikmp3indir.com/mp3_files/485b67028c8ff342b62593c5f3dc9b79.mp3  ",
      duration:""
    },
 {
      name:"♫ Sevgili Ey Sevgili",
      file:" https://cdn.muzikmp3indir.com/mp3_files/18f0aa985b7edd030186227decc2bf04.mp3 ",
      duration:""
    },
 {
      name:"♫ Biz Kısık Sesleriz ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/728e646a0e98ebc6779558223c307a82.mp3  ",
      duration:""
    },
 {
      name:"♫ Alışkınım Fırtınaya",
      file:" https://cdn.muzikmp3indir.com/mp3_files/eac9f7c519f0999d8bf720c585e26323.mp3 ",
      duration:""
    },
 {
      name:"♫ ümrüdü Anka ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9c80e3e811cf0a9aebe6971ced79195f.mp3 ",
      duration:""
    },
 {
      name:"♫ Vakit Türkiye Vakti ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37f4a8a6d51c9dc2984000387fbb0c36.mp3'} ",
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