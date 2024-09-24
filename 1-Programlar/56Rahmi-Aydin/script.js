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
      name:"♫  Zalimler",
      file:"https://cs1.mp3.pm/listen/107608724/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwWnU2ODFVNDVVVmc0Z2RYTHBCMVBqR3FyNTBET1VvdzlyaEZQMmgzWmpRL3FVRUdvOVhPRkl2SXZWK0lhVTdhazgwSHNZS25yZGdCNVIxQ3hzOURzN1E/Rahmi_Ayd_n_feat._Ercan_Ayd_n_Saffet_Arslan_Ayhan_Toprak_Habibe_Bozk_r_Murat_Aldemir_eyda_Kara_(mp3.pm).mp3 ",
      duration:""
    },



    {
      name:"♫ Yıllara Sor",
      file:"https://cs1.mp3.pm/listen/140464805/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwWSthTTFVMzhZZHluR1VjTHJLZHduV3ZmNGJHRTJOMEF0VmlJSStKa3piTC92MmNwYXgzbjV3ODhNNTNUaHJGSVdrQlpNODVud01SWklra1VkUW9xRVE/Rahmi_Ayd_n_-_Ezanlar_Bizim_in_(mp3.pm).mp3  ",
      duration:""
    },

    {
      name:"♫ Ezanlar Bizim İçin",
      file:"https://cs1.mp3.pm/listen/140464805/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwWSthTTFVMzhZZHluR1VjTHJLZHduV3ZmNGJHRTJOMEF0VmlJSStKa3piTC92MmNwYXgzbjV3ODhNNTNUaHJGSVdrQlpNODVud01SWklra1VkUW9xRVE/Rahmi_Ayd_n_-_Ezanlar_Bizim_in_(mp3.pm).mp3  ",
      duration:""
    },


    {
      name:"♫ Dünya",
      file:"https://cs1.mp3.pm/listen/144349740/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYStCNXlpNmgwS29BTEpsOVgvL3QzSmJYS0ZrRXZRdE9yZnN2U3B1QW55aENNbGk1N2Y4TzBnRTk0V3EzdHhNRGhBazdGZmcvc2N0QlJLbVVLMU1aV3U/Rahmi_Ayd_n_-_D_nya_(mp3.pm).mp3  ",
      duration:""
    },
 {
      name:"♫  Gizli Gizli",
      file:" https://cs1.mp3.pm/listen/144349742/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYStCNXlpNmgwS29BTEpsOVgvL3QzSkFFcEpXZXFkMlo1KzE1ZkZFWmJvL1VsZ1Y1RW9CSmE1VGNaeXZwemtBWUxTRm5DeWFaV0FFQ0IzOGR0b0dwdjg/Rahmi_Ayd_n_-_Gizli_Gizli_(mp3.pm).mp3 ",
      duration:""
    },
 {
      name:"♫ Bülbülüm",
      file:" https://cs1.mp3.pm/listen/144349743/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYStCNXlpNmgwS29BTEpsOVgvL3QzSkJrNnVxMm9NL0cvUlJnUlFTYnBkVVUxblkvRndLRGlJTGV6V2tVdHpGL1E0bzc0c0ZqMzBZdXdZczRRTTNKb1M/Rahmi_Ayd_n_-_B_lb_l_m_(mp3.pm).mp3 ",
      duration:""
    },
 {
      name:"♫ Hasretim ",
      file:"https://cs1.mp3.pm/listen/144349744/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYStCNXlpNmgwS29BTEpsOVgvL3QzSi90MW00akR1Q1NQSFdtZFQ5SGIwVU5qcVBaUkdLNmcrMk55cU9nS2tTb05oaHE4eFcyK0puK2o1LzdYOTFnQ3g/Rahmi_Ayd_n_-_Hasretim_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Karanfilim ",
      file:"  https://cs1.mp3.pm/listen/144349745/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYStCNXlpNmgwS29BTEpsOVgvL3QzSm9VSkdqVkZydW1rZzBiWVhSUmxhVTJ6V1NweE9qMEIxTEpzeEZ2REVNOW5SL1duRElpYkJzTHgzSURoOUVFdTQ/Rahmi_Ayd_n_-_Karanfilim_(mp3.pm).mp3 ",
      duration:""
    },


 {
      name:"♫ Gurbet ",
      file:"   https://cs1.mp3.pm/listen/144349746/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYStCNXlpNmgwS29BTEpsOVgvL3QzSnI5bTV3Syt3T1BKUUttVlExNG9qeXc0OStpN2dQOVFCVGF6cmlwVlJaNGJDV0N0SWFmV091T0k1bGk5dkhJYmE/Rahmi_Ayd_n_-_Gurbet_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Geziyorum",
      file:"   https://cs1.mp3.pm/listen/144349747/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYStCNXlpNmgwS29BTEpsOVgvL3QzSm5nMnppeXVRVnl2ZEhSd0VXdXhUVGJvblJCcXc0ZFQvYlZ1R1l4NzB4M0tGeUdMeGFVWDFLbmhJQlpDVUhJczY/Rahmi_Ayd_n_-_Geziyorum_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Mahkumum ",
      file:"  https://cs1.mp3.pm/listen/144349748/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYStCNXlpNmgwS29BTEpsOVgvL3QzSkpYUS84WEtiRW5MYzBORTNzL29EN3FnV25sSXlrdHpRamlXYTRBdzZ4TndmcDg0ZFVabXgrNnJCQkJaNVlCT2M/Rahmi_Ayd_n_-_Mahkumum_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Ezanlar Bizim İçin ",
      file:"  https://cs1.mp3.pm/listen/156634311/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYk1WYUN1SkVRYTVoTnhrUkNqdm5Gd21KRmJTcUVaMzdyS05Kc1dleFdqZGRBUS9tYlFBcGVidnF5MzV2SFZnZGs2K3A4cWJZRTVYMEFydGRGdlQxcUo/Rahmi_Ayd_n_-_Ezanlar_Bizim_in_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Yol Kenarı ",
      file:"   https://cs1.mp3.pm/listen/157642180/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYWZFOWFORVZrdGoya2RMZW5yZ0ozczhxcTROZ0EwdVJOVm0xVlNXTkc5N1ZTNEdGT0ZER3luSVY5SUprRkVTRm9sNjBDMk5hOERaRStkcjVnWGFPZXk/Rahmi_Ayd_n_-_Yol_Kenar_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Kıyamam Sana Ben ",
      file:"   https://cs1.mp3.pm/listen/162274470/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYUtsZUpKenBveEdqQnZucFY4RnpWZGd2QTg1cVBuVnhiTlIxOEFmQitCUnBrc3FScUtsT2lFbWZJZm1taEVDNzBYeFRlN1RCc3lraVVhOGh3WmlnMWg/Rahmi_Ayd_n_-_K_yamam_Sana_Ben_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ İşte Ben Gidiyorum ",
      file:"   https://cs1.mp3.pm/listen/208317485/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYW52SUc4RmluMy9yOFZqTUExMzVMei9POHQ4ZjJKbUliOTBmZG9EdnF4bTlmQjZVK0s1MVUwL3Y0enZNSU05ZDZjQndteTlwYjcwRDJ6MUY5OUExOEY/Rahmi_Ayd_n_-_te_Ben_Gidiyorum_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Sen Uyurken Gideceğim ",
      file:"   https://cs1.mp3.pm/listen/211642204/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYmtNY2RDVE15dWxxU2VxNmkvSWNlTUdPQTBQYXhNN2Z0Z3RIenFBbHZkRUZxU3p0MzJ5eVU3MnEvSWpROEFYd2o5dmxaOEtZVm9qdk5JbExPKzl3bW8/rahmi_ayd_n_-_sen_uyurken_gidece_im_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Son Mektup ",
      file:"   https://cs1.mp3.pm/listen/214376703/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwWkYzSU9LZkhha1pBQWplUURSM2RQcWZaRUZ3RWJnYjArTWd2TjJjUCtqcURhZkRoN1BDRzVMSjNuT04xOFkrY3JqZGpRd3FtaWNHckNVYjkwNnpnSks/Rahmi_Ayd_n_-_Son_Mektup_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Badı Sabah ",
      file:"   https://cs1.mp3.pm/listen/215862871/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYUZKdjJZbzBnM1d3dU9aOFBXMWhRZzA1dCtCRStzSVJMZUZMS3o2N2pHcDNxNm9zZ01nMTRoMDBhYzZ2Mkc0RWRxMjFaUi9ZTXcvQ0N4RERleUF3bDk/Rahmi_Ayd_n_-_Bad_Sabah_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Gurbettiyim Gurbet ",
      file:"   https://cs1.mp3.pm/listen/216831128/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwWVp6RFAweHJwa0xnZmx2NGhvUG11aTZkUkcvTUhWcUU0dExxcXM4TW9sRE9Eb21WRFg3N0llOENDblZwUVI2ZnhtVHdQZ29UeEZDOTNWMWNOeGg4c1I/Rahmi_Ayd_n_-_Gurbettiyim_Gurbet_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Adını Sen Koy ",
      file:"   https://cs1.mp3.pm/listen/218209120/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYkIvQ28yNDRPWXFSUDBpNjlvaG8ySXJ4eGw0VTlCM21KYVNWWlliVi9NdkpBYjI3alZkNXBjcE5mVVUwNjlZaC9FL2tHbGNNRG5PN0VsSDMwWkxidXU/Rahmi_Ayd_n_-_Ad_n_Sen_Koy_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Ela Gözlüm ",
      file:"   https://cs1.mp3.pm/listen/218828509/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwWXV6d2JNSENycGIvWTJnVURQVEJnNDJoZTNINVNMOUNPdWFscE5UWWh4ellKMXdTNU9DNWN3Q2czSDZjSUhtcW91L1JxOEdJK2sxMFdlZld1c21jMzc/Rahmi_Ayd_n_-_Ela_G_zl_m_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Badı Sabah ",
      file:"   https://cs1.mp3.pm/listen/220811874/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYXRCTlJVaUs3cU0rWVBiVGVPS05WcHRNeEtVT0pieTIzSC9oVTk2VVlqbXJoaXZldGwvUEFKWENGRG1tMEZzZWFCY1VCYm8rUVRxUldwQ09WMWI1cjI/Rahmi_Ayd_n_-_Bad_Sabah_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Yalan ",
      file:"   https://cs1.mp3.pm/listen/222792472/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYWpJeUMvcUFVbmJ4Umx6T3I0aVJuUkFubi9kdXV0dlhaR010bzI3OUVGQXRRMFJ5cDU5Y0FpZkkzOE1UR1FteXVUbXowUjF1MVBHQnd6K3M5bnozK2w/Rahmi_Ayd_n_-_Yalan_(mp3.pm).mp3  ",
      duration:""
    },

 {
      name:"♫ Burulk Olur Geceleri Gurbetin ",
      file:"   https://cs1.mp3.pm/listen/223322971/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwYVVXZEEzc0lrMEx2NlIxSyswYlBvMHowYkdHbFRDYlp5NFhTalRyNmtXMW5qZDJlZ1Y0SG1iYk1mMnRXT1RrL2Yzem1NOHNScmlyelJpbTNrZy9tQ0k/Rahmi_Ayd_n_-_Burulk_Olur_Geceleri_Gurbetin_(mp3.pm).mp3  ",
      duration:""
    },


 {
      name:"♫   Ben Ne İnsanlar Gördüm",
      file:" https://cs1.mp3.pm/listen/220297041/Q1BQZWQyTHhNME5DeVB0SGdDSk82UTZQcWN5cmFVdmRCRlI5TjZwYWMwWWMyaER4RStZVXJLVUpza3BoZDJCQ0R3SXNQYW5oUSswVHEvcG9xUzg5RTFUcGcwNmJ0MTB3c3dHUFFrTS9LbDdmOVBlUjU1OUMvR3BRbnRjcTRieTM/Rahmi_Ayd_n_-_Ben_Ne_nsanlar_G_rd_m_(mp3.pm).mp3'}",
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