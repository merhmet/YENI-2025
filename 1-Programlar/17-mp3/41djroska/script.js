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
      name:"♫ Mashup",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d561e473b739374b9df396517ff71390.mp3",
      duration:""
    },

    {
      name:"♫ Mashup",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eb296524d6fc0a130e3cc21756a94ff2.mp3 ",
      duration:""
    },


    {
      name:"♫ Mashup",
      file:"https://cdn.muzikmp3indir.com/mp3_files/836ea30d9e90a8bdd1bf53d4d8f90fd6.mp3 ",
      duration:""
    },
 {
      name:"♫ Baha Bala",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6bd0cc416f8a6a2a269bd5fe8f59edfc.mp3 ",
      duration:""
    },
 {
      name:"♫ Bashqasi Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/270d0b281e415df97631e8148e90d8d3.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Gece Gelsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7b53b4cdce93302b49526e46bf6b5db5.mp3 ",
      duration:""
    },
 {
      name:"♫ Bütün Kişiler Eynidi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fea03fcb1ba6eb0b1399dc74895a2b69.mp3 ",
      duration:""
    },
 {
      name:"♫ Deep Mashup",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ba84081a02665b48a65cc597c53a2415.mp3 ",
      duration:""
    },
 {
      name:"♫ Vicdansız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/114de7bf4fccc15b11c3e97f6c61e02e.mp3 ",
      duration:""
    },
 {
      name:"♫ Ay Ay Ay",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3216d4c24a6becdff43f41c6942f1a1d.mp3 ",
      duration:""
    },
 {
      name:"♫ Qurur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a9c808c34dfef79fbe1477c4acd93acf.mp3 ",
      duration:""
    },
 {
      name:"♫ Ama Yenede",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6e4c06cbc0005175107fc0d98c0642c2.mp3",
      duration:""
    },
 {
      name:"♫ Tek Sen ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/73504fec36e396f6cd3f95725c314a3a.mp3 ",
      duration:""
    },
 {
      name:"♫ Cavadzade-Feel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/45f7bb956d175de9f04fba747ec4e177.mp3 ",
      duration:""
    },
 {
      name:"♫ Mashup 2",
      file:"https://cdn.muzikmp3indir.com/mp3_files/183f9cb77c97e5a89b978318debfdbc4.mp3 ",
      duration:""
    },
 {
      name:"♫ Mashup 4",
      file:"https://cdn.muzikmp3indir.com/mp3_files/740b83445753923386252313142075ee.mp3 ",
      duration:""
    },
 {
      name:"♫ Yollarina Guller Duzum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4737f1a006bdf15310b66c3d40caed65.mp3 ",
      duration:""
    },
 {
      name:"♫ Mashup",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3590c0aec0da3d2d65af0f30796ab4cc.mp3 ",
      duration:""
    },
 {
      name:"♫ Mashup",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1bbe2ab4850c7799f0bc35ab16a6b757.mp3",
      duration:""
    },
 {
      name:"♫ Mashup 2",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c0725a2aaa0c814baba167f5a5c9ea7b.mp3",
      duration:""
    },
 {
      name:"♫ Mashup 2022",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fccb6c0798fa9db46f95379bb5a4aae6.mp3 ",
      duration:""
    },
 {
      name:"♫ Mashup 3",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f75901066a0bae237892b5d197b011e.mp3 ",
      duration:""
    },
 {
      name:"♫ Mashup 3",
      file:"https://cdn.muzikmp3indir.com/mp3_files/217ae7bf3261a736c1ba998dd04be054.mp3 ",
      duration:""
    },
 {
      name:"♫ Zalim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c38c8dcfdc123a2f887d9f5fad6e092d.mp3 ",
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