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
      name:"♫  Aman Tertip Can Tertip ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b4691b38c93cca8c7bc2ca72a397107b.mp3  ",
      duration:""
    },

    {
      name:"♫ Beni Muhammede Götürün",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8202c5af3cadbf67975e99f1b70a51df.mp3  ",
      duration:""
    },


    {
      name:"♫ Bir Ayrılık Bir Yoksulluk Bir Ölüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d7f294198025f8fd30442fd3ec62f610.mp3  ",
      duration:""
    },
 {
      name:"♫ Bugün Bana Yarın Sana",
      file:" https://cdn.muzikmp3indir.com/mp3_files/366c6982c9af77e384ae08b1a0fde2c6.mp3 ",
      duration:""
    },
 {
      name:"♫ Çalın Davulları",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9c2763695bd6f2b5668d5b652b7bb056.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağlar Seni Delik Delik Delerim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f3acf832124182e614a35443da3256f5.mp3 ",
      duration:""
    },
 {
      name:"♫ Dere Boyu Kavaklar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9fd1cb3a08e350493491086c63218126.mp3  ",
      duration:""
    },
 {
      name:"♫  Dostlar Beni Hatırlasın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/857e80b35d2002b17971dd3d5e960cae.mp3 ",
      duration:""
    },
 {
      name:"♫ Eklemedir Koca Konak ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/04969072b93387ae5d3ec77f004818a6.mp3 ",
      duration:""
    },
 {
      name:"♫  Garip Gönlüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5ccc2f9a9eca4f7e56b41aa49392668c.mp3  ",
      duration:""
    },
 {
      name:"♫ Geçmiyor Günler",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d0201d1f3f216cabadd154e9f25bce43.mp3 ",
      duration:""
    },
 {
      name:"♫ Güneşe Dön Çiçeğim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/41541634094931d65abf41bf3d2f7866.mp3  ",
      duration:""
    },
 {
      name:"♫ Kirpiklerin Ok Eyle ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6fef6ab77ce9d44a197f6a74dcf5a5c2.mp3 ",
      duration:""
    },
 {
      name:"♫ Kozan Dağı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8e467eb40e17b85a285b865dabc556b5.mp3  ",
      duration:""
    },
 {
      name:"♫ Nalına Da Vur ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e189e3d174b4360ebec9ca49e34b69fa.mp3 ",
      duration:""
    },
 {
      name:"♫  Niye Çattın Kaşlarını",
      file:"https://cdn.muzikmp3indir.com/mp3_files/23fef19bca977514236023dd82a28227.mp3  ",
      duration:""
    },
 {
      name:"♫ Ömür Biter Yollar Bitmez ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/57eddae2d180f6bc969aec7f17f1c305.mp3 ",
      duration:""
    },
 {
      name:"♫ Paşa Gönlün Bilir",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8daafdfad4c329829e9504f27c60a053.mp3 ",
      duration:""
    },
 {
      name:"♫ Polis Haydar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/451240b6b7b1c20a860b7d85e3ca6a11.mp3'}",
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