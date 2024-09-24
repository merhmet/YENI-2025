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
      name:"Ayırmayın Yari Benden ",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-ayirmayin-yari-benden.mp3 ",
      duration:""
    },

    {
      name:"♫ Bana Neler Vadettin",
      file:"https://mp3kulisi.mobi/indir/farah-zeynep-abdullah/bana-neler-vadettin-2022/farah-zeynep-abdullah-bana-neler-vadettin.mp3",
      duration:""
    },


    {
      name:"♫ Yalanmiş",
      file:"https://mp3kulisi.mobi/indir/Arabesk-Damar/Turkce-Damar/Arabesk-Damar-Bahar-Yalanmis.mp3",
      duration:""
    },
 {
      name:"♫ Hayırsız",
      file:"https://mp3kulisi.mobi/indir/Bahar/Annem-Askerim-2007/Bahar-Hayirsiz.mp3",
      duration:""
    },
 {
      name:"♫ Gelde Kurtar",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-gelde-kurtar.mp3",
      duration:""
    },
 {
      name:"♫ Bilmiyorum",
      file:"https://mp3kulisi.mobi/indir/bahar/yanlis-yaptin-2003/bahar-bilmiyorum.mp3",
      duration:""
    },
 {
      name:"♫ Yanlış Yaptın",
      file:"https://mp3kulisi.mobi/indir/bahar/yanlis-yaptin-2003/bahar-yanlis-yaptin.mp3",
      duration:""
    },
 {
      name:"♫  Askerde Şimdi",
      file:"https://mp3kulisi.mobi/indir/Bahar/Annem-Askerim-2007/Bahar-Askerde-Simdi.mp3",
      duration:""
    },
 {
      name:"♫ Tutkun Olurum",
      file:"https://mp3kulisi.mobi/indir/Bahar/Annem-Askerim-2007/Bahar-Tutkun-Olurum.mp3",
      duration:""
    },
 {
      name:"♫ Aman Başım",
      file:"https://mp3kulisi.mobi/indir/bahar/yanlis-yaptin-2003/bahar-aman-basim.mp3",
      duration:""
    },
 {
      name:"♫ İstemedimki",
      file:"https://mp3kulisi.mobi/indir/bahar/yanlis-yaptin-2003/bahar-istemedimki.mp3",
      duration:""
    },
 {
      name:"♫ Aman Başım",
      file:"https://mp3kulisi.mobi/indir/bahar/yanlis-yaptin-2003/bahar-aman-basim.mp3",
      duration:""
    },
 {
      name:"♫ Allah",
      file:"https://mp3kulisi.mobi/indir/bahar/yanlis-yaptin-2003/bahar-allah.mp3",
      duration:""
    },
 {
      name:"♫ Nasıl Unutayım ",
      file:"https://mp3kulisi.mobi/indir/bahar/yanlis-yaptin-2003/bahar-nasil-unutayim.mp3",
      duration:""
    },
 {
      name:"♫ Sevdalım",
      file:"https://mp3kulisi.mobi/indir/bahar/yanlis-yaptin-2003/bahar-sevdalim.mp3",
      duration:""
    },
 {
      name:"♫ Gelde Kurtar",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-gelde-kurtar.mp3",
      duration:""
    },
 {
      name:"♫ Vay Başına Gelenler",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-vay-basina-gelenler.mp3",
      duration:""
    },
 {
      name:"♫ Alışkınım Fırtınaya",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-aliskinim-firtinaya.mp3",
      duration:""
    },
 {
      name:"♫ Korktuğum Başıma Geldi",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-korktugum-basima-geldi.mp3",
      duration:""
    },
 {
      name:"♫ Eller Çaldı",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-eller-caldi-kocayi.mp3",
      duration:""
    },
 {
      name:"♫ Ayırmayın Yari Benden",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-ayirmayin-yari-benden.mp3",
      duration:""
    },
 {
      name:"♫ Oh Canıma Deysin",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-oh-canima-deysin.mp3",
      duration:""
    },
 {
      name:"♫ Askerim ",
      file:"https://mp3kulisi.mobi/indir/Bahar/Annem-Askerim-2007/Bahar-Askerim.mp3",
      duration:""
    },
 {
      name:"♫ Annem",
      file:"https://mp3kulisi.mobi/indir/Bahar/Annem-Askerim-2007/Bahar-Annem.mp3",
      duration:""
    },
 {
      name:"♫ Askerde Şimdi",
      file:"https://mp3kulisi.mobi/indir/Bahar/Annem-Askerim-2007/Bahar-Askerde-Simdi.mp3",
      duration:""
    },
 {
      name:"♫ Yalnızım Anne",
      file:"https://mp3kulisi.mobi/indir/Bahar/Annem-Askerim-2007/Bahar-Yalnizim-Anne.mp3",
      duration:""
    },
 {
      name:"♫ Yalanmış (Ufuk Kaplan Remix)",
      file:"https://mp3kulisi.mobi/indir/bahar/annem-askerim-2007/bahar-yalanmis-ufuk-kaplan-remix.mp3",
      duration:""
    },
 {
      name:"♫ Eller Çaldı Kocayı ",
      file:"https://mp3kulisi.mobi/indir/bahar/tutkun-olurum-2000/bahar-eller-caldi-kocayi.mp3",
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