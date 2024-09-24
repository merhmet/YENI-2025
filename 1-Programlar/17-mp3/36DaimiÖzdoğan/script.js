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
      name:"♫ Ağlıyor Zavallım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d641373f0429068adb6e16a8ed9ae43a.mp3 ",
      duration:""
    },

    {
      name:"♫ Arkadaş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8d79b088c10b0c114fe37a7d887ff9a5.mp3 ",
      duration:""
    },


    {
      name:"♫ Ben Ne Yaptım Sana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1ff105e26888a07d609af2e9588be170.mp3 ",
      duration:""
    },
 {
      name:"♫ Divane Gönlüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dc14facfb0476f88b60f49ffc50ef0b0.mp3 ",
      duration:""
    },
 {
      name:"♫ Dokunsalar Ağlayacağım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/77e300b0acf5b7050faf7260c0d1532e.mp3 ",
      duration:""
    },
 {
      name:"♫ Gibiyim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fa815a77130241564feb2e8e1303292a.mp3 ",
      duration:""
    },
 {
      name:"♫ Git Allah Belanı Versin Sürünesin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/378241955a9424204a38dd5029fa0f51.mp3 ",
      duration:""
    },
 {
      name:"♫ Gizli Kalsın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cfa88a6146d8e6fbe6a1d6d849e251e7.mp3",
      duration:""
    },
 {
      name:"♫ Gönlüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e292925fc6e1fac50ab2caf138516914.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Nasıl Sevdaymış",
      file:"https://cdn.muzikmp3indir.com/mp3_files/380ef012f30992d99acff97825040ebb.mp3 ",
      duration:""
    },
 {
      name:"♫ Güzel İnsan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/daa5c6116e2260b90f3615f3d3a80885.mp3 ",
      duration:""
    },
 {
      name:"♫ Huyun Batsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/huyun-batsin-N61KQlGavq-0.mp3 ",
      duration:""
    },
 {
      name:"♫ İçsende Olmuyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4341db1efb921390511a89de74f5670f.mp3 ",
      duration:""
    },
 {
      name:"♫ Kim Ağlatmış Yarim Seni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0c0688b0df83dd2c159b94bb9bfc60fe.mp3 ",
      duration:""
    },
 {
      name:"♫ Kötü Kader",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6a5de0a1b5a4901b287f555fc73f5079.mp3 ",
      duration:""
    },
 {
      name:"♫ Leyla leyla",
      file:" https://cdn.muzikmp3indir.com/mp3_files/20c207006dec6b528c0e95dd888f4f34.mp3",
      duration:""
    },
 {
      name:"♫ Nazın Çekilmiyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7b2e92a9def07c65e4d6d836452a83b7.mp3 ",
      duration:""
    },
 {
      name:"♫ Öldüm Öldüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ead9a00a46a87531323e68959bedea4e.mp3 ",
      duration:""
    },
 {
      name:"♫ Sadece Sustum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ae7479970ea63ac6da783041d490ba7a.mp3 ",
      duration:""
    },
 {
      name:"♫ Vaybe",
      file:" https://cdn.muzikmp3indir.com/mp3_files/910251e0493aaf111a7c6ee5e96c09b9.mp3",
      duration:""
    },
 {
      name:"♫ Yere Batsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/010a6630b4a1aab158d0f13019255da6.mp3 ",
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