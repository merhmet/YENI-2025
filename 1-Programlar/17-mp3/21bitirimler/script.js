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
      name:"♫ Hovarda Şoför ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/02c6e32ab36456a6c9e4fe5487365d71.mp3",
      duration:""
    },

    {
      name:"♫ Gerdek Gecesi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9978877f5e1a2abbacbc6167902c87ef.mp3",
      duration:""
    },


    {
      name:"♫ Emmi Oğlu Emmi Kızı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/38ca6b40bfb85b13d8af5901e0b8b15a.mp3",
      duration:""
    },
 {
      name:"♫ Kari Koca Kavgasi ",
      file:" https://od.lk/s/OTFfMjc3ODY4NTVf/1111111.mp3",
      duration:""
    },
 {
      name:"♫ Gönül Çalamazsan Aşkın Sazını ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f086f89baebebc0ac970e4494581a7d6.mp3",
      duration:""
    },
 {
      name:"♫ Dertli Bülbül Gibi Ötme ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/11636ac5c70285e1e9ee95006699e4f0.mp3 ",
      duration:""
    },
 {
      name:"♫ Enişte Baldız",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7f249937ce78af53658ae2257385eb13.mp3",
      duration:""
    },
 {
      name:"♫ Hakim Bizi Boşama ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c2cca0f113f3a58c7aa8229eca5a2ca0.mp3 ",
      duration:""
    },
 {
      name:"♫  Hovarda Şoför ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/02c6e32ab36456a6c9e4fe5487365d71.mp3 ",
      duration:""
    },
 {
      name:"♫  Lambaya Püf De",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1266d73f4d81029670ad4d328cfeab00.mp3",
      duration:""
    },
 {
      name:"♫ Sangam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4f09fa4fadc480a16ea0bf39eb82e74d.mp3",
      duration:""
    },
 {
      name:"♫  Senin Baban Şekerci",
      file:"https://cdn.muzikmp3indir.com/mp3_files/448c1c4dd0b2b8cf3afff1020ea8a196.mp3 ",
      duration:""
    },
 {
      name:"♫ Şeytan mısın Sen  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/07a6157c864f734589f8226b23f08280.mp3",
      duration:""
    },
 {
      name:"♫ Yanıyorsun  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d438148d6d456188b362d3e48b06e2a9.mp3 ",
      duration:""
    },
 {
      name:"♫  Görme Gözüm",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5bc13bd08d9e9830a2d9f9b998f5ead2.mp3",
      duration:""
    },
 {
      name:"♫ Sabır ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7940ee2c6003fbaf2028cda688318347.mp3 ",
      duration:""
    },
 {
      name:"♫ Biz Adam Değil Miyiz ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7ed846b0aeaf72cd04fc4ff65a6afa9d.mp3",
      duration:""
    },
 {
      name:"♫ havyar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/402d6c075d99b3841ec84d9ddebfefe4.mp3",
      duration:""
    },
 {
      name:"♫ Hülya  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/31ae29b3699e4ce0f30d9695cc87862f.mp3",
      duration:""
    },
 {
      name:"♫ Avara Hu  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e352d9bc5912e2f52fdb99e930a006f7.mp3",
      duration:""
    },
 {
      name:"♫ Avradını ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/caa1e51655a1f7b99c18a596dc51bfa8.mp3 ",
      duration:""
    },
 {
      name:"♫ Bahçıvan ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ed0949e2c698d522ed0addfe539129b9.mp3",
      duration:""
    },
 {
      name:"♫ Cadı Karı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3b00bfc2d56b1e8ebebc418038ec4d81.mp3 ",
      duration:""
    },
 {
      name:"♫ Çağ Atlama Cezası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b56bff94e79f16ca598f3a283ab0e70d.mp3 ",
      duration:""
    },
 {
      name:"♫ Çocuğu Uyuttunm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ec3e6e390ab158eca697762f949b7e1f.mp3 ",
      duration:""
    },
 {
      name:"♫ Köfte",
      file:" https://cdn.muzikmp3indir.com/mp3_files/aa173e1c08b93fbc4e63c0635cf238e8.mp3",
      duration:""
    },
 {
      name:"♫ Patates ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/57f0e917712caa0ec42052bdc132da28.mp3",
      duration:""
    },
 {
      name:"♫ Tayyip Parodi  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/60bfdd85a7f8e5c0756ba7c516550865.mp3",
      duration:""
    },
 {
      name:"♫  Söylenmez ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60bfdd85a7f8e5c0756ba7c516550865.mp3'} ",
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