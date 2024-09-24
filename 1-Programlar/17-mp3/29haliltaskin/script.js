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
      name:"♫ Aşığım Seviyorum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a61bff4a2357bd577b930e6ae413ea13.mp3 ",
      duration:""
    },

    {
      name:"♫ Ayrılık İsteme Benden ",
      file:"ttps://cdn.muzikmp3indir.com/mp3_files/8e50ebab3445eb629c4a9ccd6dd493a0.mp3 ",
      duration:""
    },


    {
      name:"♫ Ben Kendime Gurbet Oldum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/98e0a5ecd6b107a09ee8bd7ec8123a81.mp3 ",
      duration:""
    },
 {
      name:"♫ Beni Ona Götürün ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ac5f71fd73cd3e23859b1a8500364cf3.mp3",
      duration:""
    },
 {
      name:"♫ Bir İnsan Yok mu ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d820fb6d3aa799f79fb5a6fe8df4b1bd.mp3",
      duration:""
    },
 {
      name:"♫ Diyar Diyar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f00f4c1134e94c22a98343b8e8387f7d.mp3",
      duration:""
    },
 {
      name:"♫ Efkar Bastı Gönlümü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/595e0aa07881adfecb4e9838fbd76bbb.mp3 ",
      duration:""
    },
 {
      name:"♫ Feryat ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/28e0acd7e862d05d7b0c852550aa4a5a.mp3",
      duration:""
    },
 {
      name:"♫ Geceler ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f9367578971ce58a00863f695066fcf7.mp3 ",
      duration:""
    },
 {
      name:"♫ Geçmiyor Günler ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d4ba5f1a533fe8aa8e147233bd742d49.mp3 ",
      duration:""
    },
 {
      name:"♫ Gurbet ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bf0f4f9782828f6ee3c7163eab1fa9d6.mp3 ",
      duration:""
    },
 {
      name:"♫ Hatıran Yeter ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d065391f923d994cd7143208544d694c.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayatımı Yaşayacağım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1c2a8fdda9aac9cbd487dc7b5f7e70aa.mp3",
      duration:""
    },
 {
      name:"♫  Kaderimin Oyunu ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/61c0a4687052495080ce38476fde3d78.mp3 ",
      duration:""
    },
 {
      name:"♫ Kim Vurduya Gitt ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b89d2e8c5813f5846b4ea189bd824935.mp3 ",
      duration:""
    },
 {
      name:"♫ Kumralım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/753680e6ef4e5486c60d079f0142c959.mp3 ",
      duration:""
    },
 {
      name:"♫ Kurtar Yarab ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d1f243ae7c82394e84f61d375d8ce231.mp3 ",
      duration:""
    },
 {
      name:"♫ Layık Değilsin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0a6973af227b1905d727db4bc6e65e60.mp3",
      duration:""
    },
 {
      name:"♫ Mavi Gözler ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/41f6314b4eb5ccd8629d371efaa0a470.mp3 ",
      duration:""
    },
 {
      name:"♫ Meyhaneci ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d424b48c35b8e3e41d2ba4aa5fcfb118.mp3 ",
      duration:""
    },
 {
      name:"♫ Neden ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4aef8be5e1014a431ec5db1212f88446.mp3 ",
      duration:""
    },
 {
      name:"♫ Özledim Demiş ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cd27ec80c9fd1da4667108298c4167bf.mp3",
      duration:""
    },
 {
      name:"♫ Saçıma Kar Yağdı Yaz Bekledikçe",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9fbedd684f36dd7999edf8f7d6304e0f.mp3 ",
      duration:""
    },
 {
      name:"♫ Saki ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7589f1c893aaeeacdf0c8bdc10e10c37.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Değilmisin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a42407999e624c61888d4fcf1b3905c.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevda Gözlüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a0669b28e34a318dcadadbf6f424b4dd.mp3 ",
      duration:""
    },
 {
      name:"♫ Tükenmeyen Efkarım Var ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/45ed04719651033efe56bbfd140013c4.mp3",
      duration:""
    },
 {
      name:"♫ Unutamadım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fd69c7bacebe701b6915c0f178f6b7d4.mp3 ",
      duration:""
    },
 {
      name:"♫ Vay Be ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8c8e694f8140589942f88db81ce83913.mp3 ",
      duration:""
    },
 {
      name:"♫ Yeminim var ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0ec5c60035d05e0e90983fba7582717d.mp3 ",
      duration:""
    },
 {
      name:"♫ Yeter ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/42f50137b9de04c23b1dab188ddcea03.mp3",
      duration:""
    },
 {
      name:"♫ Yıllar Utansın ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0d88825ad619685fd6698f640672f831.mp3 ",
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