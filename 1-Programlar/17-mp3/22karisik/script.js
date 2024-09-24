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
      name:"♫ Türkiye'nin Aslanları",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/261546508ce219796b657a2b3cb56c5e.mp3    ",
      duration:""
    },
  {
      name:"♫ Hızır Mehmet Merç TikTok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/40a2cd5541e2a6b92d1e6bb72ae5623c.mp3",
      duration:""
    },
 {
      name:"♫ Baston Havası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d8c367fb3d5b1d3eb69f9d46d5b6f446.mp3",
      duration:""
    },
 {
      name:"♫ Çokta Deli Oynuyon",
      file:"https://cdn.muzikmp3indir.com/mp3_files/92d14ac47c6eb3ea9d98c4e2e70502e0.mp3",
      duration:""
    },
 {
      name:"♫ Hatça Kız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/33cd1819175b84c75e8eec095cfd27f0.mp3",
      duration:""
    },




  {
      name:"♫ Konum At",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2e488dcfe64a1f498f9ef35adfe24c08.mp3",
      duration:""
    },



    {
      name:"♫ Yuh Yuh",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/f802082ec207071b5c59ea57b84bd757.mp3    ",
      duration:""
    },



 
{
      name:" ♫ Anam Seni Çok Özledim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0f41094ea6d68096a3228df3da7f6ca8.mp3  ",
      duration:""
    },

    {
      name:"   ♫ Babam ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3d10f771e08a448eafa5d890a17274d4.mp3    ",
      duration:""
    },


    {
      name:"  ♫ Turis",
      file:" https://cdn.muzikmp3indir.com/mp3_files/895eda8019d9dfc8ffca2d931e754f49.mp3       ",
      duration:""
    },
 {
      name:"  ♫ Geceler ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/77bc1b9a5077d26ed812bd6c27ec1913.mp3    ",
      duration:""
    },
 {
      name:"♫ Ağrı ",
      file:" Dağıhttps://cdn.muzikmp3indir.com/mp3_files/07fc01378086ade3b8f5133735a75519.mp3   ",
      duration:""
    },
 {
      name:"♫ Kim Bilir ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1993efdd5a527dcb929797d267e92116.mp3     ",
      duration:""
    },
 {
      name:"♫ Angara ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/360bc7e968f629add4abdce57085f146.mp3    ",
      duration:""
    },
 {
      name:" ♫ Külhanlı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c695202a258c41e0a86acaf58025686a.mp3     ",
      duration:""
    },
 {
      name:"  ♫ Fesuphanallah",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3aa30b428e0b977f1b83f7abea378b6f.mp3     ",
      duration:""
    },
 {
      name:" ♫ Derdin Derdin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0eb3b84102be9198329580afd826ef86.mp3    ",
      duration:""
    },
 {
      name:" ♫ Oyun Havası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/75df6d4446ad00e6895c0213981f0b74.mp3    ",
      duration:""
    },
 {
      name:" ♫ Çay Var Mı Çay",
      file:" https://cdn.muzikmp3indir.com/mp3_files/15e61a50b32a15d2e5950405da26936e.mp3    ",
      duration:""
    },
 {
      name:"♫ Son Bakış ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/36b52797538b0478c025fa300e7335fb.mp3    ",
      duration:""
    },
 {
      name:" ♫ Derdin Derdin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0eb3b84102be9198329580afd826ef86.mp3      ",
      duration:""
    },
 {
      name:"♫ Kurban Olduğum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/220b2b2bffe9c8168dbc851dd6bf168c.mp3      ",
      duration:""
    },
 {
      name:"♫ Romanika",
      file:"https://cdn.muzikmp3indir.com/mp3_files/83fb160cdda327d6e17b7bdc08dc4f08.mp3     ",
      duration:""
    },
 {
      name:"  ♫ Neden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4aef8be5e1014a431ec5db1212f88446.mp3    ",
      duration:""
    },
 {
      name:" ♫ Kar Yağdı Yaz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9fbedd684f36dd7999edf8f7d6304e0f.mp3    ",
      duration:""
    },
 {
      name:"♫ Saki  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7589f1c893aaeeacdf0c8bdc10e10c37.mp3    ",
      duration:""
    },
 {
      name:" ♫ Gurbet ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bf0f4f9782828f6ee3c7163eab1fa9d6.mp3    ",
      duration:""
    },
 {
      name:"♫ Ben Kendime ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/98e0a5ecd6b107a09ee8bd7ec8123a81.mp3     ",
      duration:""
    },
 {
      name:"♫ Efkar Bastı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/595e0aa07881adfecb4e9838fbd76bbb.mp3      ",
      duration:""
    },
 {
      name:" ♫ Kimsem Yok Benim  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/46997191315d135cdb4c10c1b5ddfb14.mp3   ",
      duration:""
    },
 {
      name:"♫ Şu Tokatın Kızları ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aef6cbbfa19bef8282da8e02cff9e365.mp3     ",
      duration:""
    },
 {
      name:"♫ Zaman Kötü ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3bd8a53e5e9754101cc54e59ea32c85a.mp3     ",
      duration:""
    },
 {
      name:"♫ Yaramsın ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e9b70caae9172911fbfba91add84da03.mp3    ",
      duration:""
    },
 {
      name:"  ♫ Şerefsiz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/77bd987365cdfdbceb54153a4c153740.mp3    ",
      duration:""
    },
 {
      name:" ♫ Çay Var mı Çay  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aaea26298141da2bf090ec8da79ce9a7.mp3    ",
      duration:""
    },
{
      name:"♫ Sen Yanlış Yaptın   ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/d254182442cbe9933e987fa191048862.mp3     ",
      duration:""
    },
{
      name:" ♫ Babama Selam Söyle",
      file:" https://cdn.muzikmp3indir.com/mp3_files/df1bcfaf6750917284406d3c1da10acc.mp3      ",
      duration:""
    },
{
      name:" ♫ Hastane Önünde İncir Ağacı  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/d3607bf08c6f69739f2c3f9bc56708fd.mp3     ",
      duration:""
    },
{
      name:"♫ Gitme Turnam   ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/479935479b950be1f7605d8502307259.mp3     ",
      duration:""
    },
{
      name:" ♫ Gitme Turnam  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/73a67bdc851e5b18f6d81f6f842f8281.mp3     ",
      duration:""
    },
{
      name:" ♫ Haydi Halaya  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b49832a9567993b34ed9f93d4f8daf59.mp3     ",
      duration:""
    },
{
      name:" ♫ Aç Kapıyı Gardiyan ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/0fd27803a0eb9639b3e7c80f2791cfcb.mp3  ",
      duration:""
    },

{
      name:" ♫ Acı Çekiyorum Acı ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/c809128dfc2914ac9892eccd42a77740.mp3 ",
      duration:""
    },

{
      name:" ♫ Arabım Fellahi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4173c9c48cb9c003cc8ffc43f21dd4c4.mp3",
      duration:""
    },

{
      name:" ♫ Aynalı Körük",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0a20dd3c975114d00d7ee403a30d77d4.mp3",
      duration:""
    },



{
      name:" ♫ Düşenin Dostu   ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/fc7144e086419c03d6c10796dcef2c1e.mp3'}  ",
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