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
      name:"♫ Ninenin Mektubu 4 Meram Bağları ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/600adedd12b7a2ce2c781ef4dd4ed6c1.mp3 ",
      duration:""
    },
 {
      name:"♫  Ninemin Mektubu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/99c70ee2f42dddc264a9d177a634ef23.mp3",
      duration:""
    },
 {
      name:"♫ Asker Mektubu ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bed677a98f8317902b3762582581214d.mp3 ",
      duration:""
    },
 {
   
 
      name:"♫ Ninenin Mektubu Çil Horoz ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/57a2554a4264fb59bb8395151f0a9049.mp3 ",
      duration:""
    },
{
      name:"♫  Almanya Mektubu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/529fce1b9c01ec396aa39e2590cf2521.mp3",
      duration:""
    },
 {
   


      name:"♫ Ninenin Mektubu Çöz de Al ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e559a5f617ea0e6be7cb2b1a5aec6a18.mp3 ",
      duration:""
    },
{
      name:"♫ Ninenin Mektubu Noel ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a3231cbf21ca66de82385f65791aca18.mp3",
      duration:""
    },
 {
      name:"♫  Nineye Mektup Dudu Kız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d31d7e509c6a92f8219f9b99d9ec42ed.mp3 ",
      duration:""
    },
 {
      name:"♫  Asmam Çardaktan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ac7c0d2b5df723751b80f2e8d6490643.mp3 ",
      duration:""
    },
{

 
      name:"♫  Ninenin Mektubu 3 Ayşe Gız ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f2c17436d2b45f49439689d318b58c65.mp3 ",
      duration:""
    },
 {
  
      name:"♫ Evlerinin Önü Mersin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f65b3227dba1ac84bd3dd29cd8bf1049.mp3 ",
      duration:""
    },
 {
      name:"♫  İki Keklik",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8e85417e9a353348bac652e9e3063117.mp3",
      duration:""
    },
 {
      name:"♫ Çökertme ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/13b9a1d9e89cde0a06302ebc3e43468d.mp3",
      duration:""
    },
 {
      name:"♫ Tahtacı Semahı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6749bc7ddcd573f2584fc85119787a8d.mp3",
      duration:""
    },
 {
      name:"♫  Çökertme ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13b9a1d9e89cde0a06302ebc3e43468d.mp3 ",
      duration:""
    },
 {
      name:"♫  Asker Mektubu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bed677a98f8317902b3762582581214d.mp3",
      duration:""
    },
 {
      name:"♫  Hıkkıdık Tuttu Beni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2a03ad3bc3952b4424ae9a538c7b3541.mp3",
      duration:""
    },
 {
      name:"♫ Kara Üzüm Salkımı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f63d9651ab025d2e88a8dd48c25b2bc1.mp3",
      duration:""
    },
 {
      name:"♫ Arabaya Taş Koydum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/432959989f4bfc4388bc9ae66f35e3ff.mp3 ",
      duration:""
    },
 {
      name:"♫ Gımıldanıver  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b4101b45174f5c6b623daf62ae857058.mp3",
      duration:""
    },
 {
      name:"♫ Elindedir Bağlama ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0d43f33243cf5fb4d940a4fd861ea982.mp3 ",
      duration:""
    },
 {
      name:"♫ Gıcır Gıcır Gelir Yarin Kağnısı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6f1acc535bf96878d452dee3a87c2359.mp3 ",
      duration:""
    },
 {
      name:"♫ Evlerinin Önü Bulgur Kazanı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/19e8b82166ec4086f1f3103773f22cc3.mp3 ",
      duration:""
    },
 {
      name:"♫  Dağların Başındayım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/435d009320c54a1e33a22e81872c85ab.mp3 ",
      duration:""
    },
 {
      name:"♫ Seherde Bir Bağa Girdim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/565af10cbed6cf5f8c3fff03b05e50f0.mp3",
      duration:""
    },
 {
      name:"♫ Gençlik Heyecanı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/633b2e948575a86d3cec1eadd0a02d76.mp3 ",
      duration:""
    },
 {
      name:"♫ Manisayla Bergamnın Arası ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/71a561c35dc673c881f51f32872c6b7b.mp3",
      duration:""
    },
 {
      name:"♫  Ört Üstüne Yorganı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0d3a6ffa2de4ff84bfe10af96ccf6ee0.mp3",
      duration:""
    },
 {
      name:"♫  Karahisar Kalesi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5292571df86158fe8bc9dd7a23043ea3.mp3 ",
      duration:""
    },
 {
      name:"♫ Elif Dedim Be Dedim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dc24fcc2a54cfd8f02edec95a0b0f76a.mp3 ",
      duration:""
    },
 {
      name:"♫ Hatçam Çıkmış Gül Dalına ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f43ce8b7bfc5ad52386ed0bef672cd92.mp3",
      duration:""
    },
 {
      name:"♫ Dumanı da Vardır Şu Dağların Başında ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e76bd3f282397aac9381fde024d0efd3.mp3 ",
      duration:""
    },
 {
      name:"♫  Çıkma Dışarlara",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7caacd883d62cb1eaf5aba2e51944f21.mp3 ",
      duration:""
    },

 {
      name:"♫ Yüce Dağ Başında Bir Koyun ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/56002a349742dba90fc71020977e11ad.mp3 ",
      duration:""
    },
 {
      name:"♫ Benim Ustam Olmadı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/28a3bb360fa815eed259f128f82bddad.mp3",
      duration:""
    },
 {
      name:"♫ Cemilenin Gezdiği Dağlar Meşeli ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e93d40b4d5805b1ca4a12391c3f07bdc.mp3",
      duration:""
    },

 {
      name:"♫ Sultan Seccadesi ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/15fec6b561fd6972a9505cc31e3668a5.mp3",
      duration:""
    },
 {
      name:"♫ Öyledir Ey Öyledir Beyler ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8ad7bf233b3e642c4d8e97356147ce59.mp3",
      duration:""
    },
 {
      name:"♫ Boğaz Havası Kıvrak Zeybek ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/da3d699e047900ce3d6de43a55334d5a.mp3",
      duration:""
    },
 {
      name:"♫ Sobalarında Kuru da Meşe Yanıyor ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/53a83405f7d71d8a69bea7b0f440f223.mp3",
      duration:""
    },
 {
      name:"♫  Ninenin Mektubu 3 Ayşe Gız ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f2c17436d2b45f49439689d318b58c65.mp3 ",
      duration:""
    },
 {
      name:"♫ Sobalarında Kuru da Meşe Yanıyor ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/53a83405f7d71d8a69bea7b0f440f223.mp3 ",
      duration:""
    },
 {
      name:"♫ On İkidir Şu Burdurun Dermeni ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4598026c6bd458b384e954873be327ee.mp3 ",
      duration:""
    },
 {
      name:"♫ Topal Koşma Bir Yayla İsterim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b338275a509845e95f366a5fab25180a.mp3 ",
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