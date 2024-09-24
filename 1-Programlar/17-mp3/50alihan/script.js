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
      name:"♫ Ağlar Bana Bulutlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/082e3209ead0e1c3013f4de74833b05d.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevda Mevsimi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d0780c86094d17f40ec3488c3520c972.mp3 ",
      duration:""
    },
 {
      name:"♫ Yandım Annem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7f39620a0749073e05d0b57f6b003a2c.mp3 ",
      duration:""
    },
    {
      name:"♫ Aman Başım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c87483600c749e58ea08fb6e8efabe70.mp3 ",
      duration:""
    },
    {
      name:"♫ Anne Bayramın Nasıl Geçti",
      file:"https://cdn.muzikmp3indir.com/mp3_files/32871295c35510651b4f01e641c28760.mp3 ",
      duration:""
    },
 {
      name:"♫ Anne Hakkı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9e30291317d665d53b20f6c45c28f6db.mp3",
      duration:""
    },
 {
      name:"♫ Aşk Mahkemesi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/38da68e54006c8f91c8a4805634bfd6e.mp3 ",
      duration:""
    },
 {
      name:"♫ Asker",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0ba508530bc961c7e2402dbe383ae33c.mp3 ",
      duration:""
    },
 {
      name:"♫ Askere Armağan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6aa41ef79382212973f09d00f6a1c04c.mp3 ",
      duration:""
    },
 {
      name:"♫ Ayıp Sana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8e1476f4bd47794090be7f06b073e68d.mp3 ",
      duration:""
    },
 {
      name:"♫ Ayrıldık Sevgilimle",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60cfd8bc0ebc0ec786a6f7fc1f65ce01.mp3 ",
      duration:""
    },
 {
      name:"♫ Babalar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4f8abef1e7a2ba39c07d9b2ef98348fc.mp3 ",
      duration:""
    },
 {
      name:"♫ Bana Bitirim Derler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f63caec0d6bc934733571b7e1ac1af73.mp3 ",
      duration:""
    },
 {
      name:"♫ Bana Ondan Bahsetmeyin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/29d043726b27426dd1ec229e69556e48.mp3 ",
      duration:""
    },
 {
      name:"♫ Başımıza Neler Geldi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d9aec9f84ed08c6d2f5576a5c8fd6c65.mp3 ",
      duration:""
    },
 {
      name:"♫ Ben Bu İnsanları Anlamıyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a9aa31e5deff310bb6614eb5cbc5c58.mp3 ",
      duration:""
    },
 {
      name:"♫ Bende Sevdim Arkadaş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8f08f92f837f0453b04a92a27e5efcb9.mp3 ",
      duration:""
    },
 {
      name:"♫ Benim Aşkım Olmalısın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/75d807640b677ec0de919edfb8a7eb01.mp3 ",
      duration:""
    },
 {
      name:"♫ Benim Kadınım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/41ee4958fb65fc639480e4378042f5f7.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Allah Bilir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a4a8a2f5de7fc9eca6716531b062d7d3.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Günler De Geçecek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/67a81d790956f0e0610e80e35969df43.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Kadın Neden Ağlıyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/79e69c314ed58eb517add4bfabf04be6.mp3 ",
      duration:""
    },
 {
      name:"♫ Caydım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4dbb620081746398cdd7a02b4fd560c8.mp3 ",
      duration:""
    },
 {
      name:"♫ Çıldırdım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4696469bef5fcdf4a4ad735c3d9d9ccc.mp3",
      duration:""
    },
 {
      name:"♫ Çocuğun Adını Koyalım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b0d536ace2bfd8a2893a363a49ee8c5a.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağlarım Şimdi Karlımıdır",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8c9852c46ac549d25e62872077153011.mp3 ",
      duration:""
    },
 {
      name:"♫ Eline Düştüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8c2857a61d2a16b59b726f3b5faf67da.mp3 ",
      duration:""
    },
 {
      name:"♫ Geceleri Sevmiyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/79c2516c0f95bbc6cd7f1adb6b7c9790.mp3 ",
      duration:""
    },
 {
      name:"♫ Gel Benim Ol",
      file:"https://cdn.muzikmp3indir.com/mp3_files/28c6d19c918e613cda08bf0fe56083e4.mp3 ",
      duration:""
    },
 {
      name:"♫ Gözü Yaşlı Bir Kadın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f3240a5b389c6a401cce9b56da216f4c.mp3 ",
      duration:""
    },
 {
      name:"♫ Gül Yüzlüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e780089365cee97c1b7508a74abb82f2.mp3 ",
      duration:""
    },
 {
      name:"♫ Gurbetteyim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cdb364e941ea179c458cf23a2b24715a.mp3 ",
      duration:""
    },
 {
      name:"♫ Hançer Bakışlı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bc26d246b5e9f8315cf32d7191de2947.mp3 ",
      duration:""
    },
 {
      name:"♫ Harbi Romanım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8ba796915217e0ac5615025bb0e707eb.mp3",
      duration:""
    },
 {
      name:"♫ Hatırlarsın Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ddd8656f3c2e3c7fe39b328d22649d7e.mp3 ",
      duration:""
    },
 {
      name:"♫ Havalara Girmişsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/96a77c6650de1fc8d372bd98403b7a8e.mp3 ",
      duration:""
    },
 {
      name:"♫ Huzurundayım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b90121501176061b17e4bc28daf5dfc9.mp3 ",
      duration:""
    },
 {
      name:"♫ Kahretti Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/849386152e91a5a9822977b858a38b1b.mp3 ",
      duration:""
    },
 {
      name:"♫ Kahrettim Kendime",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c3a472ebae7e5da8d82a506935847911.mp3 ",
      duration:""
    },
 {
      name:"♫ Kalbimdesin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ba677defe2ae0f46dd03a1e265fbc421.mp3 ",
      duration:""
    },
 {
      name:"♫ Kara Bahtım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8372438bc767295cfe1d3d70715a4b41.mp3 ",
      duration:""
    },
 {
      name:"♫ Kararlıyım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1a52172118aa7bff1943748266729c90.mp3 ",
      duration:""
    },
 {
      name:"♫ Kendime Bir Kurşun Sıkabilirdim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/912f1031b088ec7ea65817862c725950.mp3 ",
      duration:""
    },
 {
      name:"♫ Kötü Yine Ben Oldum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7005d8da454dd359cd1c3288b0a75f6f.mp3 ",
      duration:""
    },
 {
      name:"♫ Melek Gibi Yar Buldum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f81623e88dec9b09a84166b458270a96.mp3 ",
      duration:""
    },
 {
      name:"♫ Nasıl Olacak Bu İş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a3a4af44a76b074309dc7f8930848769.mp3 ",
      duration:""
    },
 {
      name:"♫ Neler Neler Olacak",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3b4a594125e8b764167ac674842303a0.mp3 ",
      duration:""
    },
 {
      name:"♫ Ömrümsün",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a8e3642ef5c1eaef90e1fbfbd1caf77d.mp3 ",
      duration:""
    },
 {
      name:"♫ Önce Bana Para Lazım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/02efbf0f627a3286a64ae0e494fdceca.mp3 ",
      duration:""
    },
 {
      name:"♫ Sahte Sevgililer",
      file:"https://cdn.muzikmp3indir.com/mp3_files/63bc450646f8909adde47b5fc7141f49.mp3 ",
      duration:""
    },
 {
      name:"♫ Sana Benzettim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7da43ff06c2a3534d112d7f28915d766.mp3 ",
      duration:""
    },
 {
      name:"♫ Sana Sevdalı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c2894a352deac2f8743154f9ffcf9836.mp3 ",
      duration:""
    },
 {
      name:"♫ Sanamı Tapacaktım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a89f5f3a528ad81a820f2b38fe37bcef.mp3 ",
      duration:""
    },
 {
      name:"♫ Sanki Ben Hiç Yaşamadım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/939c99a6666f8886e48e41cea18bf72f.mp3 ",
      duration:""
    },
 {
      name:"♫ Sar Beni Sarmaşığım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/928d665a7da86a35abc476d0f8431bbc.mp3 ",
      duration:""
    },

 {
      name:"♫ Sen Geldin Aklıma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/79a05ef496662c06862ad8194775213d.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Yanacaksın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4b999489cb8424254b2114ed9c38d651.mp3 ",
      duration:""
    },
 {
      name:"♫ Seni Sevmek İçin Ölmek Mi Lazım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc1f24d8cc29f4ab0ca2254d22ca912e.mp3 ",
      duration:""
    },
 {
      name:"♫ Seninle Güzel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/479242fefda22b082d6d8f89bb84e3ce.mp3 ",
      duration:""
    },
 {
      name:"♫ Sensiz Olmuyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3275329218d7f681f03269a935924065.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevdiğimi Bilmiyorlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1976cb072b734db3ead999cc3d075bca.mp3 ",
      duration:""
    },
 {
      name:"♫ Seviyorum",
      file:" https://cdn.muzikmp3indir.com/mp3_files/81c30b128cccad8f528f1fc5c52cd6c1.mp3",
      duration:""
    },
 {
      name:"♫ Şimdi mi Geldi Aklına",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3483b6b6ac5a6d5e21597c6247cd25c4.mp3 ",
      duration:""
    },
 {
      name:"♫ Son Sevdam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/48c859d5b3cd70b286c8f00fed048c99.mp3 ",
      duration:""
    },
 {
      name:"♫ Tanımam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4c6f18b6b47c7af2ef6a5c1125804449.mp3",
      duration:""
    },
 {
      name:"♫ Taş Kalpli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f7107d1ea9386df405e47b2456bf0933.mp3 ",
      duration:""
    },
 {
      name:"♫ Teksin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1737453d94acf5360ea07395ba771501.mp3 ",
      duration:""
    },
 {
      name:"♫ Tü Tüküreyim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/557a4daf97c18125e8487ed97f9c60d2.mp3 ",
      duration:""
    },
 {
      name:"♫ Unut Sende Gülmeyi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/68a370be3e28ea87d17e730bd46d212e.mp3 ",
      duration:""
    },
 {
      name:"♫ Yağmur Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/83eea62ec5112957f3e9c80cd6d48669.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalnız Adam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/353bd2819b2ac54e485b31bc3236915b.mp3 ",
      duration:""
    },

 {
      name:"♫ Yanığım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/160b965eb0d411838f6ed24887eaed66.mp3 ",
      duration:""
    },
 {
      name:"♫ Yarim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/051fa77059f8f6946364491bdd228cde.mp3 ",
      duration:""
    },
 {
      name:"♫ Yavrucum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f46f3b6862731f68d6a309b57c6aa559.mp3 ",
      duration:""
    },
 {
      name:"♫ Yemin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/605d7ac668ee2f094ae9617ed2fa3d67.mp3 ",
      duration:""
    },
 {
      name:"♫ Yeni Bir Aşk Doğuyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3bf0a5d8d57bfbbf0368f9a0a65718b8.mp3 ",
      duration:""
    },
 {
      name:"♫ Yıkamaz Artık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37d0788ba8990fad695a253958cd7ab8.mp3 ",
      duration:""
    },
 {
      name:"♫ Yok Olasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/88cf283a5ad0906b0c79ac2df1accc78.mp3 ",
      duration:""
    },
 {
      name:"♫ Yüreğime Dövme Yaptım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d40218682eaefd922857f5b0159788df.mp3 ",
      duration:""
    },
 {
      name:"♫ Yürek Yangını",
      file:"https://cdn.muzikmp3indir.com/mp3_files/21b64b8af5628041802bf94847a3f052.mp3 ",
      duration:""
    },
 {
      name:"♫ Yürekli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d8220db022fddc0c517843ba696301f2.mp3 ",
      duration:""
    },
 {
      name:"♫ Zindanlara Mahkum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b9b9ae5f92292b3af5c223a88200093d.mp3 ",
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