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
      name:"♫ Saplar Geçerim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/39988abc8ef7f92f98327c0bca82f9b8.mp3 ",
      duration:""
    },

    {
      name:"♫ Sarı Kız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ae329fe049a8d84a1a591703549b38d5.mp3 ",
      duration:""
    },

    {
      name:"♫ Seveceksen Böyle Sev",
      file:"https://cdn.muzikmp3indir.com/mp3_files/522a849589b854f161a9558bd77909ae.mp3 ",
      duration:""
    },

    {
      name:"♫ Umrumda Değil",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8c91e618f2908e84321d836782db659f.mp3",
      duration:""
    },

    {
      name:"♫ Atım Arap, Develi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b9981b6d60c73a1e436ca157ebe7c742.mp3 ",
      duration:""
    },

    {
      name:"♫ Paslı Bıçak",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a291d6337ea2596f63e457b6274b8265.mp3 ",
      duration:""
    },

    {
      name:"♫ Eliminen Dayı Eliminen ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/56290474c15e7d81634a53d3a61d5325.mp3 ",
      duration:""
    },

    {
      name:"♫ Takvim Yaprağı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/98d71ea704fece382165fd0f5201f908.mp3 ",
      duration:""
    },

    {
      name:"♫ Bende Böyle",
      file:"https://cdn.muzikmp3indir.com/mp3_files/42deec0a1b89d197356c0c55857b7826.mp3 ",
      duration:""
    },

    {
      name:"♫ Yerle Bir Oldumda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d8fb39ad664ae5ddf270c752a9af55f9.mp3 ",
      duration:""
    },

    {
      name:"♫ Bana mı Yürüyon",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2b862b075f5ad60bad7a3f888a880f03.mp3 ",
      duration:""
    },

    {
      name:"♫ Satmışım Anasını",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7d40610f024da8dffe54b3d6aca9023c.mp3 ",
      duration:""
    },

    {
      name:"♫ Satmışım Anasını (Vur Dibine)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e56190188e442e46645d160515e08fe7.mp3 ",
      duration:""
    },

    {
      name:"♫ Hopla Gel, Ölem Ben",
      file:"https://cdn.muzikmp3indir.com/mp3_files/840182c7e47ee83151a570beea047a47.mp3 ",
      duration:""
    },

    {
      name:"♫ Bundan Sanane",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b3518c0f96d7bed8985100cb07bdda21.mp3 ",
      duration:""
    },

    {
      name:"♫ Son Tren",
      file:"https://cdn.muzikmp3indir.com/mp3_files/683ed461d08fbe16c5408d3f090ec6d0.mp3 ",
      duration:""
    },

    {
      name:"♫ Zabaha Kadar Burdayız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/174d9a7bb9580f9252dd53a79059100b.mp3 ",
      duration:""
    },

    {
      name:"♫ Alırım Dedim mi Alırım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d6262ffb0149221f28984f6d2217a8cf.mp3 ",
      duration:""
    },

    {
      name:"♫ Parçala Beni Hayvan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/57f5f0e7c4653d1b6602daffbb8961c1.mp3 ",
      duration:""
    },

    {
      name:"♫ Tiktokla Vur Dibine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e76e9e15b5b428268f4f8bd308d2b992.mp3 ",
      duration:""
    },

    {
      name:"♫ Alırım Dedimmi Alırım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/df521744c5f6aa369ec12c7b0ceb4922.mp3",
      duration:""
    },

    {
      name:"♫ Saracaksan Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/05ca7b23188563d127a8deef1771ba37.mp3 ",
      duration:""
    },

    {
      name:"♫ Küseceksen Oynamayak",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4ebc18e77077b4df55eb39739a8791bf.mp3 ",
      duration:""
    },

    {
      name:"♫ İlle de Aşk",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ff2cfa192ccc0c1b346ef429f7d2ee70.mp3 ",
      duration:""
    },

    {
      name:"♫ Sen Delisin Ben Manyak",
      file:"https://cdn.muzikmp3indir.com/mp3_files/22996a301e3ddabdf31569853c8a0e79.mp3 ",
      duration:""
    },

    {
      name:"♫ Adaletin Bumu Dünya",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f8346890fe72e441f2f5359af1b3488a.mp3",
      duration:""
    },

    {
      name:"♫ Yırtıl Dedim Yırtıl",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9cb2ff6f77358c1103c80eeb95ffd936.mp3 ",
      duration:""
    },

    {
      name:"♫ Bunalıyom Dayı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5de294e6777a9887d96fe295d8295054.mp3 ",
      duration:""
    },

    {
      name:"♫ Ekime Kadar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/74de69ba3c5a136687fd17f1fe888969.mp3 ",
      duration:""
    },

    {
      name:"♫ Bana mı Yürüyon",
      file:"https://cdn.muzikmp3indir.com/mp3_files/77f8722d1dc4a245eef9d115e9e0b915.mp3 ",
      duration:""
    },

    {
      name:"♫ Titrettin Beni Titrettin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/titrettin-beni-titrettin-QTZjAafpzs-0.mp3 ",
      duration:""
    },

    {
      name:"♫ Hastasıyız Dede",
      file:"https://cdn.muzikmp3indir.com/mp3_files/59e2fa898d8b5d7b061e2313a7327652.mp3 ",
      duration:""
    },

    {
      name:"♫ Bahar Gördüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a02a29db8245d7454ee3566efe53707b.mp3 ",
      duration:""
    },

    {
      name:"♫ Emmioğlu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3b3f88e06f6af57956145329a37b6aa3.mp3",
      duration:""
    },

    {
      name:"♫ İkile İkile",
      file:"https://cdn.muzikmp3indir.com/mp3_files/55af7d00b996de1815e99fa6f617bed3.mp3 ",
      duration:""
    },

    {
      name:"♫ Tosun",
      file:" https://cdn.muzikmp3indir.com/mp3_files/438c3a62de6d90094ed1dbbf37e2ddf4.mp3",
      duration:""
    },

    {
      name:"♫ Anne Sevdim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1d27d95108bbba6707ccf89dacc54930.mp3 ",
      duration:""
    },

    {
      name:"♫ Adana Yollarında",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f2d7cdc2f9cbb2a1f61c0b757351edbd.mp3 ",
      duration:""
    },

    {
      name:"♫ Yazım Kışa Döndü",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0054735ec38ab4e91b396499a3dcbd62.mp3",
      duration:""
    },

    {
      name:"♫ Bahçede Hurma Yarim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9543668a2c0870dc73afb23646452aec.mp3 ",
      duration:""
    },

    {
      name:"♫ Burası Yavrum Ankara",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a335b4274426eea53e3a6402384d8b41.mp3 ",
      duration:""
    },

    {
      name:"♫ Yaktı Yandırdı Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bcebe1b9043d2bb0f3e6fa60437927b2.mp3 ",
      duration:""
    },

    {
      name:"♫ Perişan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9ad3d8ec408023c7e230484203cd529b.mp3 ",
      duration:""
    },

    {
      name:"♫ Ankaragücü Koçları",
      file:"https://cdn.muzikmp3indir.com/mp3_files/23d5489f422609a3ee7e0a3874ec753c.mp3 ",
      duration:""
    },

    {
      name:"♫ İçeceğim Sabahlara",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5216f801a6c412b80b0d83574c88b7d9.mp3 ",
      duration:""
    },

    {
      name:"♫ Sevdalıyım Sevdalı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b26ab768b126c52a32f3de193bbaf51c.mp3 ",
      duration:""
    },

    {
      name:"♫ Al Bohçanı Kaçıver",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4ccf79424b1ddc356ef0cca292c62c31.mp3 ",
      duration:""
    },

    {
      name:"♫ Bana Sarhoş Diyorlarmış",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6b419d6a3080b9d80c8df07151423c2e.mp3",
      duration:""
    },

    {
      name:"♫ Usul Boylarına",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5dfed4a5e2b196f4d34a069703f08fe6.mp3",
      duration:""
    },


    {
      name:"♫ Bırak Dağınık Kalsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bcce3ef933f1e3612ba7bce10cb36e86.mp3 ",
      duration:""
    },
 {
      name:"♫ Felek Kapımı Çaldı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/26e4728c229e86f19bd15fe3568a5844.mp3 ",
      duration:""
    },
 {
      name:"♫ Tiridine Bandım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ec2bfb72dd4c0572f25e0c84f38f0475.mp3",
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