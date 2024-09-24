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
      name:"♫ Abisi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9214952af47a4b41282c22e040f304dc.mp3 ",
      duration:""
    },

    {
      name:"♫ Az Değilsin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c9da8d8006331743a3e488c649916f44.mp3",
      duration:""
    },


    {
      name:"♫ Canikom",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bbf2c1636bc0135368c14d025e581060.mp3",
      duration:""
    },
 {
      name:"♫ Yaktılar Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/217990d52214cfb5138d04a186d58afc.mp3 ",
      duration:""
    },
 {
      name:"♫ Hadi Gel Barışalım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/11b8d730da5f703473495f940731beec.mp3",
      duration:""
    },
 {
      name:"♫ Yar Ağlar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6523224fb7287b86b6d162f435e678d0.mp3",
      duration:""
    },
 {
      name:"♫ Mehmedim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5708433f0c648fd78a6c62edd4a75d40.mp3",
      duration:""
    },
 {
      name:"♫ Farkında Oldum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9a9163e46b8398b5d860204e4219ce25.mp3 ",
      duration:""
    },
 {
      name:"♫ Hiç Niyetim Yok",
      file:" https://cdn.muzikmp3indir.com/mp3_files/78b50fbc7aeed842e7b5f0223a8d225b.mp3",
      duration:""
    },
 {
      name:"♫ İftira",
      file:"https://cdn.muzikmp3indir.com/mp3_files/962848876d37fdfd7ae3720d5a21e71b.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalancı Seni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9a22dd3c21721d81bdaad2075eb8c30c.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Nerdeysen Ben Ordayım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/230806558c2ccb9eb9218a60197a8e1a.mp3 ",
      duration:""
    },
 {
      name:"♫ Efendim İşitmedim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fcc34d93dab858683c6c183568e20694.mp3",
      duration:""
    },
 {
      name:"♫ Celladim Ol",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8bdea994817971c74f5d0418a53b24d6.mp3 ",
      duration:""
    },
 {
      name:"♫ Sensiz Olmaz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7412a86849e66fb6b55ffadaff708ada.mp3",
      duration:""
    },
 {
      name:"♫ Ufak At Biraz Civcivler Yesin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/18bc8efcc16a913cf73805c759666fba.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Yoksun Diye",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7fbbc793d6ff2b9c586fec5b54fc154c.mp3 ",
      duration:""
    },
 {
      name:"♫ Eyvah Babam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d7eb9288bc009dcdbe8b45d1098b1e87.mp3 ",
      duration:""
    },
 {
      name:"♫ Balmısın Şekermisin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ccc23b9be6ce30fc4c7096bd65bf4f91.mp3 ",
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