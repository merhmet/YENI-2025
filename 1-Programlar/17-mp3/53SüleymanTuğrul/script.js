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
      name:"♫ Ağlama",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a0a553f850fa17b90eef7f1548001088.mp3",
      duration:""
    },

    {
      name:"♫ Aklımdasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2499011c228860d410e7f8bf9235bdb3.mp3 ",
      duration:""
    },

 {
      name:"♫ Gitme Baba",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e2e7cf4addb7aae7b6412e8d37b3a08f.mp3 ",
      duration:""
    },

 {
      name:"♫ Evlat Acısı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3a5842536e80fdcbf529773adbda284b.mp3 ",
      duration:""
    },

    {
      name:"♫ Anam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8fe480a2631b44ee5d7397f487c04025.mp3 ",
      duration:""
    },
 {
      name:"♫ Huma Kuşu Yavru Yavru",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9b5028f03bf6c8a3832002209aac23ee.mp3 ",
      duration:""
    },

 {
      name:"♫ Ay Buluta Girmiş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7c24ce3a5a63a5e194b6a26d39adcbc9.mp3 ",
      duration:""
    },
 {
      name:"♫ Babam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fbbfd997e20008804af421d6d41f4347.mp3 ",
      duration:""
    },
 {
      name:"♫ Bahtı Karam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bc26415afcc008cb8eb7fd4ac60abc60.mp3",
      duration:""
    },
 {
      name:"♫ Benim Bu Köylerde Çok Alacağım Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f620ef3c73684017143062cc35c7b6ef.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Tanem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bir-tanem-alLWi7J91B-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Tek Günüm Yok",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bir-tek-gunum-yok-fxJ7HnvGVP-0.mp3",
      duration:""
    },
 {
      name:"♫ Bizim Oğlan",
      file:" https://cdn.muzikmp3indir.com/mp3_files/da19ed6b28921c47179b450e8bb753fa.mp3",
      duration:""
    },
 {
      name:"♫ Bu Ne Zulüm",
      file:" https://cdn.muzikmp3indir.com/mp3_files/149306b20239fc43c535c59af52d6f46.mp3",
      duration:""
    },
 {
      name:"♫ Bundan Sonra",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37c92b34bb172e4e9ea0a7825c8735da.mp3 ",
      duration:""
    },
 {
      name:"♫ Deli Gönül",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b32249e6ab4666d3696f8b388d215e3d.mp3",
      duration:""
    },
 {
      name:"♫ Elaziz Gaggoş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fa009f77b7ce115b2c050ae1b687c336.mp3 ",
      duration:""
    },
 {
      name:"♫ Eller Aldı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e2a230fb3a24255b937275842bf96666.mp3 ",
      duration:""
    },
 {
      name:"♫ Evlat Acısı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3a5842536e80fdcbf529773adbda284b.mp3 ",
      duration:""
    },
 {
      name:"♫ Gamzedeler",
      file:" https://cdn.muzikmp3indir.com/mp3_files/142124cce9a8d5ca84ac4e42c67fc8b3.mp3",
      duration:""
    },
 {
      name:"♫ Gardaş",
      file:" https://cdn.muzikmp3indir.com/mp3_files/93eb038b53bc3a97c252f10e29dc3a08.mp3",
      duration:""
    },
 {
      name:"♫ Geçti Benden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/76b0033a80e041be785949b44972a123.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelmedin Yar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/gelmedin-yar-pUNlPfERam-0.mp3",
      duration:""
    },
 {
      name:"♫ Gidirem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/gidirem-HygtCEwsq1-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Gitme Baba",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e2e7cf4addb7aae7b6412e8d37b3a08f.mp3 ",
      duration:""
    },
 {
      name:"♫ Gülmedi Yüzüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/234344c850306325b1fc5202c05c6d40.mp3 ",
      duration:""
    },
 {
      name:"♫ Gurbet",
      file:"https://cdn.muzikmp3indir.com/mp3_files/394a48362a11cff36edfeb883e73f235.mp3 ",
      duration:""
    },
 {
      name:"♫ Gurbet Yolcusu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d37f99b7c53583e78325170e7590c952.mp3 ",
      duration:""
    },
 {
      name:"♫ Haram Olsun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6c24196acf090d489e33c7a474004347.mp3 ",
      duration:""
    },
 {
      name:"♫ Her Şeyin Yalan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/her-seyin-yalan-pWjYxcZTLR-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Hesap Sorulacak",
      file:"https://cdn.muzikmp3indir.com/mp3_files/hesap-sorulacak-KaDcArqlzu-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Huma Kuşu Yavru Yavru",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9b5028f03bf6c8a3832002209aac23ee.mp3 ",
      duration:""
    },
 {
      name:"♫ Layla Layla",
      file:"https://cdn.muzikmp3indir.com/mp3_files/layla-layla-bVRKxeYB9Z-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Leylam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/231e0509d3103dc5bb4742798e936448.mp3 ",
      duration:""
    },
 {
      name:"♫ Leyli Leyli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/28c0d8020572af835e9032cc8d72cfcc.mp3 ",
      duration:""
    },
 {
      name:"♫ Muradın Olsun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/382776198ba9a14e119d2448735c8af2.mp3 ",
      duration:""
    },
 {
      name:"♫ Neler Olmuş",
      file:" https://cdn.muzikmp3indir.com/mp3_files/634e1f850e1d9147ed1b486e39e4fb2e.mp3",
      duration:""
    },
 {
      name:"♫ Nerdesin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7ef04d109ed021a9ddb560b9293ea1c8.mp3",
      duration:""
    },
 {
      name:"♫ Nerede O Günler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/303a0327530feb39a0f29a20a80fa3d4.mp3 ",
      duration:""
    },

 {
      name:"♫ Neyine Güvenem",
      file:" https://cdn.muzikmp3indir.com/mp3_files/57839983382ac043a255d60ebc89ed9e.mp3",
      duration:""
    },
 {
      name:"♫ Neyleyim Sensiz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/27984376388abbc35afc106a1571cc6a.mp3 ",
      duration:""
    },
 {
      name:"♫ Ölürüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/olurum-Q4p1nxhE3w-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Ölürüm Ben",
      file:"https://cdn.muzikmp3indir.com/mp3_files/325e5d27a1a84be99dbe371da6d9f469.mp3 ",
      duration:""
    },
 {
      name:"♫ Ondandır Ondan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/72df458ff032d53c241b4b7a5a29e474.mp3 ",
      duration:""
    },

 {
      name:"♫ Oy Felek Oy",
      file:"https://cdn.muzikmp3indir.com/mp3_files/oy-felek-oy-g5E4CcYHAz-0.mp3 ",
      duration:""
    },
{
      name:"♫ Ruhumda Bir Sıkıntı Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bda81d4efc86460df8beef2f52d6ecb2.mp3 ",
      duration:""
    },
{
      name:"♫ Sakın Dağlar Gibi Yüceyim Deme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/20576c0b7de6fbf3da29d261dfbaf24c.mp3 ",
      duration:""
    },

{
      name:"♫ Sevdiğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9649690cc613bec9144540b1edb8dbff.mp3 ",
      duration:""
    },

{
      name:"♫ Soranım Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1880a7fbfb53f978178afd600aa3e8d0.mp3 ",
      duration:""
    },

{
      name:"♫ Viran Olmuş Köyüm",
      file:" https://cdn.muzikmp3indir.com/mp3_files/814c0446d5ebe123b91d4a5fdfde4cde.mp3",
      duration:""
    },

{
      name:"♫ Yarası Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/yarasi-var-o9k7G1VsBS-0.mp3 ",
      duration:""
    },

{
      name:"♫ Yaş Destanı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7f0707f5d3a580f51448fe993b785836.mp3 ",
      duration:""
    },

{
      name:"♫ Yaşamak Denirse",
      file:"https://cdn.muzikmp3indir.com/mp3_files/yasamak-denirse-8hlySYg9Wz-0.mp3 ",
      duration:""
    },

{
      name:"♫ Yıllarımı Geri Ver",
      file:"https://cdn.muzikmp3indir.com/mp3_files/yillarimi-geri-ver-zc1BlDIk8C-0.mp3 ",
      duration:""
    },

{
      name:"♫ Yüce Dağ Başı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e15cc90b20e790fcca9556180088c03e.mp3",
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