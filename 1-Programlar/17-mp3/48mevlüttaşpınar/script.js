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
      name:"♫ Adamda Değilsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/adamda-degilsin-C0dgsjtYm8-0.mp3 ",
      duration:""
    },

    {
      name:"♫ Afyon Sallaması",
      file:" https://cdn.muzikmp3indir.com/mp3_files/be35534552c7b37cfa90e98db6b0ed0b.mp3",
      duration:""
    },
    {
      name:"♫ Asıl Ama İş Olma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/71d2c81cfac1cd1d9a04d638af199ad6.mp3 ",
      duration:""
    },
 {
      name:"♫ Ayrılamam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/36b8235297e2ddca00755e08d646da3e.mp3",
      duration:""
    },
 {
      name:"♫ Gel Nurten Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ayten-gel-nurten-gel-EdJfDti42Q-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Bana Zehir Olmuş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8906bce9a3cb493807d965c9ceb8d4ff.mp3 ",
      duration:""
    },
 {
      name:"♫ Beyoğlunda Gezersin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4dd270ec1fa04862ae0413488df0d0db.mp3 ",
      duration:""
    },
 {
      name:"♫ Çiftetelli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ciftetelli-AnZQpE9ORH-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Dahdiri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b947350d8786bc9ce2a10a617eabcd63.mp3 ",
      duration:""
    },
 {
      name:"♫ Derdime Dermansın Dağlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/056770c81ab4fc0305e907c02cd3a2da.mp3",
      duration:""
    },
 {
      name:"♫ Erik Dalı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a0120bc950c7db9f4c47cd4103f1b8cc.mp3 ",
      duration:""
    },
 {
      name:"♫ Gönül Hırsız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/674e22213b35be55b3c7a5c55f37333a.mp3 ",
      duration:""
    },
 {
      name:"♫ İkile",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60eca8fc288c98a2461683bf80aea38f.mp3 ",
      duration:""
    },
  
 {
      name:"♫ İnli Kasabası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/97007bc5c3cea581399f2fcad80c9fb6.mp3 ",
      duration:""
 
    },
 {
      name:"♫ Kaval Havası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/kaval-havasi-lO3AIaUkMZ-0.mp3 ",
      duration:""
  
    },
 {
      name:"♫ Kendim Düştüm Kalkabilirim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a2e1e2ceadda3bec4cdb2cadc445eac9.mp3 ",
      duration:""
    },
 
 {
      name:"♫ Kiraz Dalı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/978a52b0bf3166f5859234214a14a901.mp3 ",
      duration:""
    },
 
 {
      name:"♫ Kırık Hava",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eed2313788033ea905bb45ed43a37ffd.mp3 ",
      duration:""
    },
   
 {
      name:"♫ Manitalar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc6ecbbda6c51902156cfbb086341193.mp3 ",
      duration:""
    },
   
 {
      name:"♫ Mevlam Bir Çok Dert Vermiş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a0f3aa23014c155868a140a3fa8df671.mp3 ",
      duration:""
    },
  
 {
      name:"♫ Meylere Sor",
      file:" https://cdn.muzikmp3indir.com/mp3_files/664e06d7468b94582daf6e492354aee9.mp3",
      duration:""
    },
 
 {
      name:"♫ Mor Beyaz Afyonspor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/97ae707b855a0b16c7854d6458d454b3.mp3 ",
      duration:""
    },
  
 {
      name:"♫ Mor Koyun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/caef54ee03d3f521f267ff644173d066.mp3 ",
      duration:""
    },
  
 {
      name:"♫ Muhtarın Eşşeği",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aac5af2aff86391cfe901b4aecaf23a2.mp3 ",
      duration:""
    },
  
 {
      name:"♫ Mürselin Eşşeği",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fb4543dcc1c4e61a17ffa033a395afb3.mp3 ",
      duration:""
    },
   
 {
      name:"♫ Naynini Naynini Naynino",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a0874c639f136bf9086065090416c1cf.mp3 ",
      duration:""
    },
 
 {
      name:"♫ Neriman",
      file:"https://cdn.muzikmp3indir.com/mp3_files/231720d1238d15cac24bfc007fbf45fe.mp3 ",
      duration:""
    },
 
 {
      name:"♫ Ömrüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d2ba1b9e029a98cf31d6fec3a73548d3.mp3 ",
      duration:""
    },
  
 {
      name:"♫ Oy Eminem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2da242272d3b39d34fb3360f9b5606d0.mp3 ",
      duration:""
    },
 
 {
      name:"♫ Oynar Dede Torunu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/oynar-dede-torunu-lpRV8vQJet-0.mp3 ",
      duration:""
    },
 
 {
      name:"♫ Potpori Oyun Havası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8eb058627c3758f0997e37fd4d6929eb.mp3 ",
      duration:""
    },
   
 {
      name:"♫ Seni Unutmaya Ömrüm Yeter mi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/378a9f8c222f0ccedb4ae974672598df.mp3 ",
      duration:""
    },
  
 {
      name:"♫ Sevda Mevsimi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6d0c762297e3724436e00ab37b1271b7.mp3 ",
      duration:""
    },

 {
      name:"♫ Şişeler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0fdeba54879f01554398a0c264d678f9.mp3 ",
      duration:""
    },

 {
      name:"♫ Şişeler Naynini Ha Babam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a4c6d59c1a46d9a1e2e9b16d78464d35.mp3 ",
      duration:""
    },
 
 {
      name:"♫ Söm Söm Yarim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a0c7f265215cbe2201446bb0f51379c.mp3 ",
      duration:""
    },
 
 {
      name:"♫ Tak Zilleri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d8815e5e6c625cccc67f7e7100c91504.mp3 ",
      duration:""
    },

 {
      name:"♫ Vur Oynasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/55d4005cc7056953813fa5fe200d131a.mp3 ",
      duration:""
    },

 {
      name:"♫ Yandan Halimem",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c15c5a0a38a82c5025234a87fb7ca521.mp3",
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