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
      name:"♫ Kahpe Felek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e78dec8bb190e746bfde7de6da828b90.mp3 ",
      duration:""
    },
    {
      name:"♫ Ah Yavrum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/594b1672bb07be79cbc8d86e353c7895.mp3 ",
      duration:""
    },
    {
      name:"♫ Garip Yavrum",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4c3bb0ee7b3da5c5be76bf6cc570a566.mp3",
      duration:""
    },

    {
      name:"♫ Dost Kervanı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3218bd5f1792da5ad38a70205ea9f678.mp3",
      duration:""
    },
    {
      name:"♫ Suya Gider Allı Gelin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cb72d8775bf04a3a3e311c2c3a8fcfb2.mp3 ",
      duration:""
    },
    {
      name:"♫ Anam Ağlar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f62f86f957468634aad43439b0b14514.mp3",
      duration:""
    },
    {
      name:"♫ Çeke Çeke",
      file:"https://cdn.muzikmp3indir.com/mp3_files/65d861a6d59cd221656defeb484ff6bd.mp3 ",
      duration:""
    },
    {
      name:"♫ Gesi Bağları",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3929537921124f2c9a0c8304ec2284b7.mp3 ",
      duration:""
    },
    {
      name:"♫ Zannetme Ki Unutamam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2aee2c01f7e99cb464f3586d71b48e77.mp3",
      duration:""
    },
    {
      name:"♫ Dağlarına Dargınım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c4b52789f61a3d74620be5d650bc46cb.mp3 ",
      duration:""
    },
    {
      name:"♫ Dönemem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13fb5433b5da3765b705437f28ae2866.mp3 ",
      duration:""
    },
    {
      name:"♫ Türkülere Sor Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cbcc1c349bf1e1e7253540416f031d65.mp3 ",
      duration:""
    },
    {
      name:"♫ Nazlı Canandan Ayrıldım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13ba18352e723f20156b595a46691d88.mp3 ",
      duration:""
    },
    {
      name:"♫ Türküler Ağlar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/22b3355fbd14a4a255d875509c22f893.mp3",
      duration:""
    },
    {
      name:"♫ Dağların Ardından Kuzum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a8e9bc6d7e6ad91a1a2096e891eccfd7.mp3 ",
      duration:""
    },
    {
      name:"♫ Çoban Yıldızı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c4efe12914a05dcbc7ade57ad7fd6961.mp3 ",
      duration:""
    },
    {
      name:"♫ Hasret Yarası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a0cecdc2fc7768afecb512c982330da3.mp3 ",
      duration:""
    },

    {
      name:"♫ İdik Uyardılar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4b6cd42387b72b096a963f30dac9a491.mp3 ",
      duration:""
    },
    {
      name:"♫ Ser Çeşme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e55b3e2b2f9bc285eccb397db9103cfb.mp3",
      duration:""
    },
    {
      name:"♫ Yalan Dünya",
      file:" https://cdn.muzikmp3indir.com/mp3_files/085f1d4a0099bcf84337cac735862c7d.mp3",
      duration:""
    },
    {
      name:"♫ Utanmaz",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3c79c4b9f93e35fdb7ceaa1153ff4e68.mp3",
      duration:""
    },
    {
      name:"♫ Tut Ellerimden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c1d8b406635ffcabe08b6336f4dbfa65.mp3 ",
      duration:""
    },
    {
      name:"♫ Helvacı Helva",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b646ca4ceef4f2cd277435476eab5b4f.mp3 ",
      duration:""
    },
    {
      name:"♫ Kenarında Geçtim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37a42783b5ab9c4b1b06e9e0ee8061bd.mp3 ",
      duration:""
    },

    {
      name:"♫ Aşk Kitabı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2d378817916e09b1938e6016be48c55e.mp3 ",
      duration:""
    },
    {
      name:"♫ Pınarbaşından Bulanır",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c5eb2cb881aca2380092ae40fee33ddc.mp3 ",
      duration:""
    },
    {
      name:"♫ Habudiyar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/615dc4915ebb7d4ef87f96228ceeca11.mp3 ",
      duration:""
    },
    {
      name:"♫ Hoptereleylim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7e1b5631970718eb15fcc5b70df5f9d1.mp3 ",
      duration:""
    },
    {
      name:"♫ Sende Yurdun Kokusu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/49a822ac88be780e0583079048219822.mp3 ",
      duration:""
    },
    {
      name:"♫ Adalara Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0f94c46bc863ca24c94c3ce3ae3f22bf.mp3 ",
      duration:""
    },
    {
      name:"♫ Geceler Uykusuz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c17bc28b087a0a4e355f147d0b39378f.mp3 ",
      duration:""
    },
    {
      name:"♫ Gülüm Nanay",
      file:"https://cdn.muzikmp3indir.com/mp3_files/686bbcd30dd3345b2e29e725c993d823.mp3 ",
      duration:""
    },
    {
      name:"♫ Hele Dadaş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d9178af541dc2dd87fcc29d1e1ebd328.mp3 ",
      duration:""
    },
    {
      name:"♫ Havar Lele",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3636d91653b5f696d30ea66ec825ef9e.mp3 ",
      duration:""
    },
    {
      name:"♫ Gizli Sevda",
      file:" https://cdn.muzikmp3indir.com/mp3_files/151bb1febb5e3bbd3453d2a8c67ba532.mp3",
      duration:""
    },
    {
      name:"♫ Yağmur Yağdı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2e7cf503da9f3949d6471ccf32cea539.mp3 ",
      duration:""
    },
    {
      name:"♫ Uzaklardasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2bffbaa9d3c0bae0fa59f4a628986081.mp3 ",
      duration:""
    },
    {
      name:"♫ Şiire Gazele",
      file:" https://cdn.muzikmp3indir.com/mp3_files/75de88d6b2f3d87067f8557486630035.mp3",
      duration:""
    },
    {
      name:"♫ Sebebi Sensin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8e843b55cf48a9fa381ba6457aa149d3.mp3 ",
      duration:""
    },
    {
      name:"♫ Neredesin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/452f455dec0334fce5a889e883b241ed.mp3 ",
      duration:""
    },
    {
      name:"♫ Zalım Zalım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3b35c6ee8006f3bf9342ed0ad5561518.mp3 ",
      duration:""
    },
    {
      name:"♫ Yollarına Kar Mı Yağdı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/71bf883b4f0452e2adcc65f728392dce.mp3 ",
      duration:""
    },
    {
      name:"♫ Halaylar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b09abfa1caf89821d6289119be61712a.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevemedim Senden Başka",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ec3af56c51c8f98eff75f19101aeb9ce.mp3 ",
      duration:""
    },
    {
      name:"♫ Erzincan Güzeli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dc7a5d8f8412b5b760d08508c04649d5.mp3 ",
      duration:""
    },
    {
      name:"♫ Al Yazmalım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6d158a70a8064fdb1d97eef475605cdf.mp3",
      duration:""
    },
    {
      name:"♫ Devlerin Aşkı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1d31d366fab1c55bc0ea5e1398ea343b.mp3",
      duration:""
    },
    {
      name:"♫ Eyvah Gönül",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2992537bed0c42243bb9e02778ee1832.mp3",
      duration:""
    },
    {
      name:"♫ Yeter Ey Cananım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1a4ada99884987995a7cce2a6933e80c.mp3",
      duration:""
    },
    {
      name:"♫ Mapusun İçinde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/93a63abf3368598e6aae803d02894370.mp3 ",
      duration:""
    },
    {
      name:"♫ Ötme Bülbül",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5fb10b74c297e96392dea9cb5870b8e0.mp3 ",
      duration:""
    },
    {
      name:"♫ Sarı Gelin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b5352fec474232220fa8c41411dc3120.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Dost Bir Post Yeter Bana",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0dc1f8040dd57ff79f58453d03cf5247.mp3",
      duration:""
    },
    {
      name:"♫ Hızır Paşa",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0eaf8a96dd41280afd3663c06d4bc5ef.mp3 ",
      duration:""
    },

    {
      name:"♫ Bir Selam Sal",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cce2e5db80b457e998d0399845f1af37.mp3 ",
      duration:""
    },

    {
      name:"♫ Bu Tepe Pullu Tepe",
      file:" https://cdn.muzikmp3indir.com/mp3_files/09736f8e69cf3c9275ebf08c98747eb8.mp3",
      duration:""
    },
    {
      name:"♫ Deniz Üstü Köpürür",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0e085bd5be8277a3033cc4cfab61f0f2.mp3 ",
      duration:""
    },
    {
      name:"♫ Efe Gelevera Deresi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/dcdef11f758441e995965c80ea14dd1e.mp3",
      duration:""
    },
    {
      name:"♫ Keklik Gibi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6cbbeba12a550679bc95cb003154657d.mp3",
      duration:""
    },
    {
      name:"♫ Dağlarına Dargınım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a2648c7dff6e4800811f734446b7a2f.mp3 ",
      duration:""
    },
    {
      name:"♫ Olur Karanlığa Kalırsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/27acf547c51ddf44d0cdd516efc36624.mp3 ",
      duration:""
    },
    {
      name:"♫ Altın Yüzüğüm Kırıldı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b8ed2098b3732f37bafb0120a74fb826.mp3 ",
      duration:""
    },
    {
      name:"♫ Deriko",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a07e9c52d2c383cc0521ca2834f6e660.mp3",
      duration:""
    },
    {
      name:"♫ Beyaz Giyme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4cce6dbb301f40c8a9f3d10930454c9c.mp3 ",
      duration:""
    },
    {
      name:"♫ Çarşambayı Sel Aldı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b389c188125c1ed6aff52d9252b8257b.mp3 ",
      duration:""
    },
    {
      name:"♫ O Yar Gelir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3223f8c35b1bd95f0fef0af0880fcc16.mp3 ",
      duration:""
    },
    {
      name:"♫ Minnet Eylemem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9cf7a694d2b894430fb9d108d9dc6fab.mp3 ",
      duration:""
    },
    {
      name:"♫ Sivas Ellerinde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1aeb7d7cf75d893e6ad0e0d8a1e3db34.mp3 ",
      duration:""
    },
    {
      name:"♫ Oynama Yorulursun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e5038876695a8773108a9ce16694c5fb.mp3 ",
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