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
      name:"♫ Mahşerde Kavuşacağız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/834ee44d8092230d94883a00091d930a.mp3 ",
      duration:""
    },

    {
      name:"♫ Git Başımdan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c213aac6794a6e364bd255076b031bbc.mp3 ",
      duration:""
    },


    {
      name:"♫ Hasrete Son Ver",
      file:" https://cdn.muzikmp3indir.com/mp3_files/eb0f487adce2a428e8cbedd8cecd4e54.mp3",
      duration:""
    },
 {
      name:"♫ Şimdi Yaktım Çıranı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2d4cd3201446913a10e12fb7e73f35cc.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelen Vurur Giden Vurur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6a6db3fe9585e65eaae9be93970edcc2.mp3 ",
      duration:""
    },
 {
      name:"♫ Canım Sevgilim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/25c5e411e118eda890217cb58d78f3f1.mp3 ",
      duration:""
    },
 {
      name:"♫ Hani Aşkımız Nerd",
      file:"https://cdn.muzikmp3indir.com/mp3_files/27afa485714519ba126f24a3fa5f5ccf.mp3 ",
      duration:""
    },
 {
      name:"♫ Çingenem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5854d45dd1d1568f589510923d0ed52c.mp3 ",
      duration:""
    },
 {
      name:"♫ Boyu Posu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0b055c806771596e470fd85c9448ef51.mp3 ",
      duration:""
    },
 {
      name:"♫ Şu Gurbet Canıma Yetti",
      file:"https://cdn.muzikmp3indir.com/mp3_files/12a0f031d58f65d625ca7d0aeebb9b82.mp3 ",
      duration:""
    },
 {
      name:"♫ Söz Namustur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/762b5ab37f706bdc4c2d4ade90cea5e0.mp3 ",
      duration:""
    },
 {
      name:"♫ Çocukluk Sevgilim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9b8c596cb47411c91f9e738593254672.mp3",
      duration:""
    },
 {
      name:"♫ Eden Sensin Ben Değilim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6e1c5d0dd428eab4f460428e1e70e6ba.mp3 ",
      duration:""
    },
 {
      name:"♫ Seni De Seven Ölecek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ecafa69b5a2c6e52b68691752342342a.mp3 ",
      duration:""
    },
 {
      name:"♫ Vurur Ha Vurur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9d97ef8ca730ce94836e10b28631ec84.mp3 ",
      duration:""
    },
 {
      name:"♫ Mektubunu Okuyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6a0122812c0ec2274b6ef17471f8c792.mp3 ",
      duration:""
    },
 {
      name:"♫ Gözün Yüksekte Senin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0f0a1c989fa221f62425037f3d48da50.mp3 ",
      duration:""
    },
 {
      name:"♫ Hasret Vurur Akşamları",
      file:"https://cdn.muzikmp3indir.com/mp3_files/128b922235671ec39efa16efe86c2187.mp3 ",
      duration:""
    },
 {
      name:"♫ Zalim Felek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bfd4c66657411378517cbdeefeb9e220.mp3 ",
      duration:""
    },
 {
      name:"♫ Dermana Geldim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f2e22f7450975db7bcbd272743720b2b.mp3 ",
      duration:""
    },
 {
      name:"♫ Beklerim Selamın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7659ff34290ec4b5b18963f2b77eaeae.mp3",
      duration:""
    },
 {
      name:"♫ Yanarsın Kızım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1d6fa164bb1763b051f6ea94e74efd58.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevda Yüklü Kervanlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fba2c039b19b89e0b1d249304df27cd2.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevgilim Olurmusun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2cc5bf5b7890a5ff0db5c6bceace4d36.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağlarım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a1da24e4b543bcd11d53db307c5dd41e.mp3 ",
      duration:""
    },
 {
      name:"♫ Uyuma Yar Uyuma",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a00dfb54e985109171d87604f9103cfa.mp3",
      duration:""
    },
 {
      name:"♫ Acı Izdırap",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a048e46a6e5543fafbc7c5e9ad7716bf.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelin Olma Evde Kal",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5204db936963443bc585c3819b7ddfa5.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Demirden Taştanmısın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/017f3288df5749405b6eb988daaec99d.mp3 ",
      duration:""
    },
 {
      name:"♫ Vurma Gurbet",
      file:" https://cdn.muzikmp3indir.com/mp3_files/37a907019c39b3e86aa4123d47c42fda.mp3",
      duration:""
    },
 {
      name:"♫ Haram Olasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d8e5949b6a337063bbe41fa41db1f117.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşk Yarası",
      file:" https://cdn.muzikmp3indir.com/mp3_files/daaa81eaca446fc44cf0097c8978d910.mp3",
      duration:""
    },
 {
      name:"♫ Vayle",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b8fcf67adb42fcc7301f8560426a4ea0.mp3",
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