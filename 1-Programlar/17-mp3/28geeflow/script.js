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
      name:"♫ Misal-Ya Rahman",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cb3abd78746827b5c567227c8df8c51b.mp3 ",
      duration:""
    },
 {
      name:"♫ Hasbi Rabbi ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a54a95d208ac7919a141da6cebcb8331.mp3",
      duration:""
    },
 {
      name:"♫ Düşünce Kalkmalısın ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d4d2db77e8c85c076d5730d7ea7be345.mp3",
      duration:""
    },
 {
      name:"♫ Istanbul Hareketi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0fd7e9656a7bd8f062c4f235ed91bfd1.mp3 ",
      duration:""
    },
    {
      name:"♫ Salla Gitsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cbf8caa42322d02cc37032b39dd7fcd6.mp3 ",
      duration:""
    },
 {
      name:"♫ Hepimiz Mehmediz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/205b404fab83ebbeef1a5e296c2b1d7d.mp3 ",
      duration:""
    },
    {
      name:"♫ 571 ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/442f731707a6b13df24a0e593087c3a6.mp3 ",
      duration:""
    },
 {
      name:"♫ Acizim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/19023e15283c59d77b8f640091c29ee4.mp3 ",
      duration:""
    },
 {
      name:"♫ Affet Ya Rab ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/95584b3cce57de1bd11a2f5d7bead6b4.mp3 ",
      duration:""
    },
 {
      name:"♫ Ağladum ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/06ddefacb6d3bd92f41a54e7b100a611.mp3",
      duration:""
    },
 {
      name:"♫ Annem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/916629725a2e2efe0dcfc5770bef29eb.mp3 ",
      duration:""
    },
 {
      name:"♫ Araf Sahili ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a3d9643fae0ad5214dc951944323c5e1.mp3 ",
      duration:""
    },
 {
      name:"♫ Ayasofya ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/78d9f14c1c7db490c462dd882775c404.mp3 ",
      duration:""
    },
 {
      name:"♫ Barış Pınarı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dbbda88fa6625ec4dbeeba8ae327fb81.mp3 ",
      duration:""
    },
 {
      name:"♫ Benim Babam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4fea9779fe71d18f7c089ef141162b96.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Ölür Bir Doğarız ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13f06ae2f9f48570cbf5d6bcf5e050dc.mp3 ",
      duration:""
    },
 {
      name:"♫ Bugün Bensem ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed5dfc957589f090e6726d3d6e74facc.mp3 ",
      duration:""
    },
 {
      name:"♫ Cevap Ver",
      file:"https://cdn.muzikmp3indir.com/mp3_files/90a02fa7d9489efc07a478d279f9acae.mp3 ",
      duration:""
    },
 {
      name:"♫ Cihan Dönüyor ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/47ce770e8463ed68fa2884b2cd23b3b7.mp3 ",
      duration:""
    },
 {
      name:"♫ Çok Yoruldum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6bbe384dc78d7af7e6722c49d6d6cf2b.mp3 ",
      duration:""
    },
 {
      name:"♫ Def2gee ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/552e8741adb56dd5c82670a118bf8723.mp3 ",
      duration:""
    },
 {
      name:"♫ Değil ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d433627c909f5149d3f4d2b6e33f720c.mp3 ",
      duration:""
    },
 {
      name:"♫ Diriliş 15 Temmuz ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4b0e46ea74f79898754811aacf795650.mp3 ",
      duration:""
    },
 {
      name:"♫ Düet",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a3ec563e4963b79a71f5285d9d45596c.mp3 ",
      duration:""
    },
 {
      name:"♫ Dünya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/28773b67d5bc6c1896c37dd2a42232b9.mp3 ",
      duration:""
    },

 {
      name:"♫ Elbet Bir Vakit",
      file:" https://cdn.muzikmp3indir.com/mp3_files/29c70c709ed99c52da3b845ee7f7b1a6.mp3",
      duration:""
    },
 {
      name:"♫ Elif Cüzü ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5290d8638e36615343a94b6b3852fc8d.mp3 ",
      duration:""
    },
 {
      name:"♫ Engel Yok ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c039bfbce6a315c2c092453a894910eb.mp3 ",
      duration:""
    },
 {
      name:"♫ Eskidendi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/99e3281777f25d8ec5c98d008e522acc.mp3 ",
      duration:""
    },
 {
      name:"♫ Evde Ka",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f0f6c034bb0262a733b578dfc582b060.mp3 ",
      duration:""
    },
 {
      name:"♫ Ey Resul",
      file:"https://cdn.muzikmp3indir.com/mp3_files/609d4025e97616f0c45c17389574aa0d.mp3 ",
      duration:""
    },
 {
      name:"♫ Vatan Sağolsun ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a273c563470ea724cb631c4e6f448a4.mp3 ",
      duration:""
    },
 {
      name:"♫ Asır-Uçurum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ff543b50a445cc83a19f2317037feec4.mp3 ",
      duration:""
    },
 {
      name:"♫ Defkhan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/877efb7e4790f0789985625252e3fc36.mp3 ",
      duration:""
    },
 {
      name:"♫ Esselamu Aleyke ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e76919aa7d86a376c9b84a687db5aff7.mp3 ",
      duration:""
    },
 {
      name:"♫ Empati ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/efc843286491a6c9e8c07fce31a5eb45.mp3 ",
      duration:""
    },
 {
      name:"♫ Bizden Değil ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/af51ec35905b2f385817ca0dbc7ddea3.mp3 ",
      duration:""
    },
 {
      name:"♫ Ya Rahman ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8ee4699603d4bba0bf46b0f71a96c2ac.mp3 ",
      duration:""
    },
 {
      name:"♫ Sakal-Falaka ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6b71a27c7a43ec80f141e0afe9b48bcf.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaşadığımı Fark Edeyim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dac20970efd74e5855eecec50fabd275.mp3 ",
      duration:""
    },
 {
      name:"♫ Ölümüne ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2282bec20d6890292ca17587f49b9f1e.mp3 ",
      duration:""
    },
 {
      name:"♫ Memlekete Dönelim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/afdca537e4692397cb9d3de2ce0e6cf1.mp3 ",
      duration:""
    },
 {
      name:"♫ Geldim Aydan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/55979cc7e5b33a154db5cb9cf3f2e36a.mp3 ",
      duration:""
    },
 {
      name:"♫ Elbet Bitecek ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/48e287b1e4ac6f9ba32724ed8751a87d.mp3 ",
      duration:""
    },
 {
      name:"♫ Bitecek Bütün Bu Dertler",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c414bb7a41eba01b3b62b5fc8bbc36b7.mp3",
      duration:""
    },
 {
      name:"♫ Gam Yok ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/165aa7dd5655a996d028305217d9a047.mp3 ",
      duration:""
    },
 {
      name:"♫ Gel Hele ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a1b3c928b91c5328efa083bd2017f71e.mp3 ",
      duration:""
    },
 {
      name:"♫ HasbinAllah ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d7cca79ac9444e067d990592a4f66b24.mp3",
      duration:""
    },
 {
      name:"♫ Hayalet ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/98e1d47cae5376d7ec04ea9cc7663670.mp3 ",
      duration:""
    },
 {
      name:"♫ Kefenimi Yırttım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/kefenimi-yirttim-dgzLyaEbA2-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Mektup ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fa946516dbb031a83d5f2fc2c653eb8f.mp3 ",
      duration:""
    },
 {
      name:"♫ Mektup 2 ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9d44dea59bd146fb6f673e6ef1d7ea6f.mp3 ",
      duration:""
    },
 {
      name:"♫ Milletin Payitaht ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ef86298520561b96b4cee0b7f42c6bd2.mp3 ",
      duration:""
    },
 {
      name:"♫ Nasib Ettin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c3bd39ba3a322422cd3cda77b4592ced.mp3 ",
      duration:""
    },
 {
      name:"♫ Ölen Hep İhtiyar mı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a237887b66d5b309f9a714092d57bbf5.mp3 ",
      duration:""
    },
 {
      name:"♫ Salavat ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/52bf8c6669c1f3b46ebaa7a9851d4c53.mp3 ",
      duration:""
    },
 {
      name:"♫ Ya Rasulallah ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/sefaat-ya-rasulallah-dIXKt4oEjV-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Susmayalım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b46f00ca2d4b29782f4f777709e0478d.mp3 ",
      duration:""
    },
 {
      name:"♫ Vatan Sağolsun ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/22107f70ccd3fe7241022399b00e9540.mp3 ",
      duration:""
    },
 {
      name:"♫ Zeytin Dalı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4355a068977f0e4b98da5870b6c403cc.mp3 ",
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