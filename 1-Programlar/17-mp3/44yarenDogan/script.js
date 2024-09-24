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
      name:"♫ Karagözlüm Ölesim var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/48e5988de394b926e7f96a9808623f5c.mp3 ",
      duration:""
    },

    {
      name:"♫ Gel Hayalim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5f574ff94d795152b35cf1dfaa83f3fc.mp3 ",
      duration:""
    },
    {
      name:"♫ Has Gelin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9cb7d2699a2f1a2e223ac49c79ce837e.mp3 ",
      duration:""
    },
    {
      name:"♫ Ziyan Zebil",
      file:" https://cdn.muzikmp3indir.com/mp3_files/089ac19cd3ec531291f15694e9ba6790.mp3",
      duration:""
    },
    {
      name:"♫ Gel Hayalim (Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8fd6756ea436fcfaa9d7d8855e74caa1.mp3",
      duration:""
    },
    {
      name:"♫ Yemen Türküsü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/354835a80e87653ec03d0cf1d0db9b6d.mp3 ",
      duration:""
    },
    {
      name:"♫ Türlü Türlü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bec5679df70ad1b9d5ce2e512a1aa035.mp3 ",
      duration:""
    },
    {
      name:"♫ Susma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cf280f9e268fe4f48586c840000593bd.mp3 ",
      duration:""
    },
    {
      name:"♫ Diz Dize",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ac444c751f9e25584cfa86f9eecb87f8.mp3 ",
      duration:""
    },
    {
      name:"♫ Dön Bebeğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/07d14e76450a613e7e76102848a9f96a.mp3 ",
      duration:""
    },
    {
      name:"♫ Hasretinle Yandı Gönlüm",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b2c73ce26419c4e8e580ca93f64567eb.mp3",
      duration:""
    },
    {
      name:"♫ Aykırı Yollarına",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ac5c160b87646dfd058dadca7c1f7c99.mp3 ",
      duration:""
    },
    {
      name:"♫ Biz İki Aşık Kafaları Karışık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b95291ad8bb02f9261994772c99ea314.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu Benim Öyküm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/355b4fe5093ceb63eca17605ffa0e26a.mp3 ",
      duration:""
    },
    {
      name:"♫ Sende Anlarsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c2fbd5a09f8627d2700c8f4b68def4ff.mp3 ",
      duration:""
    },
    {
      name:"♫ Kopardılar Seni Benden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9b42b153d177c361900870e8d0f520b4.mp3 ",
      duration:""
    },
    {
      name:"♫ Gazele",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8ca3262f16e35ae37b29f702cb29e3e1.mp3 ",
      duration:""
    },
    {
      name:"♫ Yalancısın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4eccfcdff508fbef363dd6a8fa871c8a.mp3",
      duration:""
    },
    {
      name:"♫ Yalancısın (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b1aae0e31a170acd01bc1925dce1777d.mp3 ",
      duration:""
    },
    {
      name:"♫ Kül Oldum Yandım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8080cbeca751815d65e7f1dcec22ed46.mp3 ",
      duration:""
    },
    {
      name:"♫ Kül Oldum Yandım (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d96324c51396203b9211bf879cc15be1.mp3 ",
      duration:""
    },
    {
      name:"♫ Dallarımı Kırdılar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0eaadf73694a2a732618325e56292454.mp3 ",
      duration:""
    },
    {
      name:"♫ Bi Çare Özlemime",
      file:" https://cdn.muzikmp3indir.com/mp3_files/459280d11104d281059fa92a5a5c6a31.mp3",
      duration:""
    },
    {
      name:"♫ Bi Çare Özlemime (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/044f02e7f0343db58b8bb0231057dac1.mp3 ",
      duration:""
    },
    {
      name:"♫ Unutamam Senli Günleri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dccfc31f0a674b94ec477132c55bd60d.mp3 ",
      duration:""
    },
    {
      name:"♫ Unutamam Senli Günleri (Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5a4ee842825089f9c1fc648507b8d86b.mp3",
      duration:""
    },
    {
      name:"♫ Unutamam Senli Günleri (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9c99406c30af4ccec4cbc60ff29d7f45.mp3 ",
      duration:""
    },
    {
      name:"♫ Unutamam Senli Günleri (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9bdca6eafd1f902f325e43d3467437a1.mp3 ",
      duration:""
    },
    {
      name:"♫ Unutamam Senli Günleri (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/14bd58aa49a35247392d99e01c4129d5.mp3 ",
      duration:""
    },
    {
      name:"♫ Yandım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/727385ea0efd99da92da9e12971a1956.mp3 ",
      duration:""
    },
    {
      name:"♫ Kaktüs",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3e8b97191e193eb346d2be73acd9b437.mp3 ",
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