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
      name:" Çilekeş ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/440ce6d459b1683e4acdd9e71a65c50a.mp3 ",
      duration:""
    },

    {
      name:" ♫ Kalmadı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e3da6275177ea91467423b2d73547b92.mp3 ",
      duration:""
    },
    {
      name:" ♫ Suçum Ne Benim  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/266acc7fec079f88d781a66a6309b453.mp3  ",
      duration:""
    },
    {
      name:"  ♫ Sende Unut ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/73d52da609751777ef893d21da582ca2.mp3 ",
      duration:""
    },
    {
      name:"♫ Neredeydin  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c3700f1ed61dc30c28a174af0ccaa45c.mp3  ",
      duration:""
    },
    {
      name:"  ♫ Ciddimisin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/deae77a863e5c363972ef73583927a0c.mp3 ",
      duration:""
    },
    {
      name:" ♫ Mahkum  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/04a99626964f49942b5567cf769a6951.mp3  ",
      duration:""
    },
    {
      name:"  ♫ Aynur ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4136feb7a5e023464d9a06a760560639.mp3 ",
      duration:""
    },
    {
      name:" ♫ Deli Gönül ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6d95df090570adca6975e36916edaead.mp3 ",
      duration:""
    },
    {
      name:" ♫ Yakarım Bu Günü ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/40a08109adf107542171057eb463005d.mp3  ",
      duration:""
    },
    {
      name:" ♫ El Ne Karışır ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ee7428d8726bde5abe864a4d770fdf45.mp3  ",
      duration:""
    },
    {
      name:"  ♫ Hoyrat ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6ba564dd6eecba9ffb8c7ab948704cfe.mp3 ",
      duration:""
    },
   {
      name:" ♫ Gül Yarim ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/d52cbcde1d6f4b3db68547f671a8d0b3.mp3  ",
      duration:""
    },

    {
      name:" ♫  Mahkumum ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/46b9881f321530deb77a5efa66c3f9c8.mp3   ",
      duration:""
    },

    {
      name:"  ♫ Ne Gördüm Ne Yaşadım ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/d3ed83781b341889accac315e5b5a33c.mp3   ",
      duration:""
    },

    {
      name:"  ♫ Sensizlik Ölüm Gibi ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/76558da02d8e924d202089fbcab7f737.mp3   ",
      duration:""
    },

    {
      name:" ♫ Ye Ye Dünyayı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c1b59a2fc99914aac06469912f6b2ce4.mp3    ",
      duration:""
    },

    {
      name:" ♫ Arsız Gönül ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/452f3f2179e400a1740a3099a9a918cb.mp3    ",
      duration:""
    },

    {
      name:"  ♫ Gam Yüküm Çiledir ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c772d481189033a60cf9f53a7b1e1870.mp3    ",
      duration:""
    },

    {
      name:" ♫ Yakarım Dünyayı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1115ccea86cf55f595987e3a95ce966b.mp3    ",
      duration:""
    },

    {
      name:" ♫ Gurbet Eller Ne Yaptınız ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7ea3a71c826d6782ee0c47c0fbfba8fc.mp3    ",
      duration:""
    },

    {
      name:"  ♫ Ölecek Bu ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/00bf01bf15fc706b2ba3d4a0b6212ae8.mp3   ",
      duration:""
    },

    {
      name:"  ♫ Arada Bir Sor Halimi ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/d1fdc03d2f80706af7a5d80b342a7a6e.mp3  ",
      duration:""
    },

    {
      name:"  ♫ Bir Mektup Yaz ki ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/fe88eeb037a4692ab5a4babc04578331.mp3   ",
      duration:""
    },

    {
      name:"  ♫ Çok Bekledim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/24039ecb9d803e44551e79de791bd665.mp3  ",
      duration:""
    },

    {
      name:"  ♫ Yaralar Beni ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/1219ca0ec2ea34584e5dd297541df004.mp3   ",
      duration:""
    },

    {
      name:"  ♫ Seçilesice ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/fbb25b435af708d29edf24e339c8b265.mp3   ",
      duration:""
    },

    {
      name:"   ♫ Sultanım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fed6ce9d783062c6fbb8489292c2369c.mp3    ",
      duration:""
    },

    {
      name:"  ♫  Şu Yalan Dünyaya Geldim ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/e5b935a3292b9a14457b625ca6933819.mp3   ",
      duration:""
    },

    {
      name:"  ♫ Sakın Üzülme ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/2eec5dbff0d8f3da40ea9e4851764e9c.mp3   ",
      duration:""
    },

    {
      name:" ♫ Gül Yanakların ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/adac98be486ed16402fc1755e6ec2a57.mp3    ",
      duration:""
    },

    {
      name:"  ♫ Çekemez ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5cae30639241c55b1bca4f0bd9d0451a.mp3    ",
      duration:""
    },

    {
      name:" ♫ Makbuldür ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6865bd17433f0e6b736630f3daa8e13b.mp3    ",
      duration:""
    },







    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },


    {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫ ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫   ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫   ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫   ",
      file:" ",
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