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
      name:"♫ Ayrılık Acısı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bcad436e1dea9db98f28ee5a8b464700.mp3 ",
      duration:""
    },

    {
      name:"♫ Yorgun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/651232bc9991c7afc3021045dd55a14c.mp3 ",
      duration:""
    },


    {
      name:"♫ Bir Kız Çocuğu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/89ac6ee2ed8a515ce38f7385aaa9c6aa.mp3",
      duration:""
    },
 {
      name:"♫ Bir Avuç Gözyaşı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/be8ac600a6d016d9825cf2c4be6bd45a.mp3 ",
      duration:""
    },
 {
      name:"♫ Bilemezsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ce3add86c51abecd3598a0e02b79789f.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayaller Kurdum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37e97853c43e7b3e13960a705495af76.mp3 ",
      duration:""
    },
 {
      name:"♫ Yine Seni Seveceğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1afdb43da0afa56b3f6e1f3543b2e895.mp3 ",
      duration:""
    },
 {
      name:"♫ Buldum Seni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d979c265c910f010c8a58319369e9961.mp3 ",
      duration:""
    },
 {
      name:"♫ Hasret Sona Erdi Bugün",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dc71141bd7fcd145ce5364319cf60821.mp3 ",
      duration:""
    },
 {
      name:"♫ Al Eline Sazın Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c36521a110d74871846ee88cae03e7cb.mp3 ",
      duration:""
    },
 {
      name:"♫ Baban Ağa Olmuş Köye",
      file:"https://cdn.muzikmp3indir.com/mp3_files/14836d610ce807bf4e0cb77d69d6595a.mp3 ",
      duration:""
    },
 {
      name:"♫ Böyle güzel Sevilmez Mi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/788cebba83a09955f62546447dc83d52.mp3",
      duration:""
    },
 {
      name:"♫ İnsanlık Ölmüş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a1e0d0b3261f5aa1879e182dbbf511de.mp3 ",
      duration:""
    },

 {
      name:"♫ Usta",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c21f02d02a002de6bd9e5c612a6ed83b.mp3",
      duration:""
    },
 {
      name:"♫ Canıya Yazık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8286474daf3c99ee8fcc8c8c5452eee9.mp3 ",
      duration:""
    },
 {
      name:"♫ Kızlar Kızlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/72caac6c4994bdb81d983b53be58688f.mp3 ",
      duration:""
    },
 {
      name:"♫ Ağlar Gözlerim Ağlar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/85d7b5cf1c8e4c0d384dfd0461e92a11.mp3",
      duration:""
    },
 {
      name:"♫ Sevmeye Zaman Mı Bıraktılar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2fb75d6fcedd66222f3ecc88c21694e3.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayat Hikayem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2fdb6aa57ad43ae711bb3cd40ff76467.mp3 ",
      duration:""
    },
 {
      name:"♫ Yüreğim Yanıyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8cd277b85e60dd1d8bbb066594e31f5a.mp3 ",
      duration:""
    },
 {
      name:"♫ Barıştan Yana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/53d0cc99aaefe70b3efd4fe0739be306.mp3",
      duration:""
    },
 {
      name:"♫ Yaralar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5d078ea4bef8684d9d5ae4b546f1b8c5.mp3 ",
      duration:""
    },
 {
      name:"♫ Anacım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/991122a4b71608a28e850b02b808c064.mp3 ",
      duration:""
    },
 {
      name:"♫ Zalim Yar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ea2cbf1cea767bbfcc1f8b45cdbbc71f.mp3",
      duration:""
    },
 {
      name:"♫ Tanımıyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5997090bce4466b74cd3a64636f1e0f4.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevmek Suçsa",
      file:"https://cdn.muzikmp3indir.com/mp3_files/sevmek-sucsa-ln6YtDh3WZ-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Düğün",
      file:"https://cdn.muzikmp3indir.com/mp3_files/591a1caf6c6135499e131247e2b92c0a.mp3 ",
      duration:""
    },
 {
      name:"♫ Şeytanımsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f1ecbe9d16c18a5969a0c28ddb4d6f7.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaşarken Öldüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0ffd874f171e39abc2ebb90ff2c479ff.mp3 ",
      duration:""
    },
 {
      name:"♫ Olmuyor Gülüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/294f94f41c42d8223f80bcf3a1c151b2.mp3 ",
      duration:""
    },
 {
      name:"♫ Kınalı Kuzum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a9d756893efa58db90c1d03e8f83f0bd.mp3 ",
      duration:""
    },
 {
      name:"♫ Helvanı Yerim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/dcd105612d2a1de2b5eada46a1027ce1.mp3",
      duration:""
    },
 {
      name:"♫ Gözlerinin Karasına",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b49db3620a69cc5ad096d9e6f4bc0606.mp3 ",
      duration:""
    },
 {
      name:"♫ Canocan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/72d8f47034ed03570627b38b518825e5.mp3 ",
      duration:""
    },
 {
      name:"♫ Gülizar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/87f76d81f13c91da313d26626cd8cb48.mp3 ",
      duration:""
    }, 
   {
      name:"♫ Hele Niye Niye",
      file:" https://cdn.muzikmp3indir.com/mp3_files/55c1bff5d5983a82372c241a2352691c.mp3",
      duration:""
    }, 
   {
      name:"♫ Ağlasana Deli Gönül",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4c97b873b7537697dd0483500aa56215.mp3 ",
      duration:""
    }, 
   {
      name:"♫ Ne Güzelsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/454f78bc01e58bb8616e8a449d5fe293.mp3 ",
      duration:""
    },
   {
      name:"♫ Dön Gel Bebeğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4c590bc3e9acd30c88cad2e0b8d01c18.mp3 ",
      duration:""
    },

   {
      name:"♫ Nere Gidisen",
      file:"https://cdn.muzikmp3indir.com/mp3_files/39c84543c7fc2655a6c7bb1bf98178b0.mp3 ",
      duration:""
    },

   {
      name:"♫ Hancı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/535aedca71c0465ba5ea569dfcbd204c.mp3 ",
      duration:""
    },

   {
      name:"♫ Zahmet Olmazsa",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c7e0ee722604c8dda9a92cb8d357bff2.mp3 ",
      duration:""
    },

   {
      name:"♫ Lo Lo",
      file:"https://cdn.muzikmp3indir.com/mp3_files/25bd5a2f866116cf7b29920a01da1beb.mp3 ",
      duration:""
    },

   {
      name:"♫ Urfanın Seher Vakti",
      file:"https://cdn.muzikmp3indir.com/mp3_files/48983bdf79c0525da27c87c2693841ab.mp3 ",
      duration:""
    },

   {
      name:"♫ Karalım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2b62ba2a766217d90efa2ff27f31e192.mp3 ",
      duration:""
    },

   {
      name:"♫ Aynalar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3df912cae0af79f696352d7d68fea3cb.mp3 ",
      duration:""
    },

   {
      name:"♫ Esirinim Yar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/00befcdca8c31522b7e4b455813de43b.mp3",
      duration:""
    },

   {
      name:"♫ Haberin Olsun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1fd14587d6fead0cdd1d9ed5ba00752b.mp3 ",
      duration:""
    },

   {
      name:"♫ Telefon",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3dcb7bf77de4ae6fc50d5eb901475f27.mp3 ",
      duration:""
    },

   {
      name:"♫ Yine Mi Sen",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2ba83370b5129d743e9f5135547f3d43.mp3 ",
      duration:""
    },

   {
      name:"♫ Ah Be Yarim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3b3a748f9777c3b305b711cf43ef62a5.mp3 ",
      duration:""
    },

   {
      name:"♫ Aklı Yok",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0fed547a3c98cbce28824153b1027872.mp3",
      duration:""
    },

   {
      name:"♫ Unut Gönlüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3724ae3683cc71aaf329ae885eba6684.mp3 ",
      duration:""
    },

   {
      name:"♫ Adana Köprü Başı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/af1b0075541a6c3adeb29dbaab921f35.mp3 ",
      duration:""
    },

   {
      name:"♫ Nerdesin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/364d1d37da901c88c57a56cf7bcf9ca2.mp3 ",
      duration:""
    },

   {
      name:"♫ Sen Olmayınca",
      file:"https://cdn.muzikmp3indir.com/mp3_files/58024c9d6a641cd9169a542ca5341d7e.mp3 ",
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