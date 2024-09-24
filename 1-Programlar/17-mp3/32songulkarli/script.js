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
      name:"♫ Derman Sendedir ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8c3d3e1a79498e54bd5644cf1fc33ecf.mp3 ",
      duration:""
    },

    {
      name:"♫ Demmi Demmi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/184a4737e689aa44c521cb531fd98082.mp3 ",
      duration:""
    },


    {
      name:"♫ Mendil ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d12f1c5307e6ee5e1a0ddfefb6d6801a.mp3 ",
      duration:""
    },
 {
      name:"♫ Oy Dağlar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d675c231c0c5473377e397efb06acd22.mp3 ",
      duration:""
    },
 {
      name:"♫ Yandırdın Kalbimi ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9ab12a87a212cfd344126b2395f5de75.mp3",
      duration:""
    },
 {
      name:"♫ Al Fadimem ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/89f9e835a8c393ffe59f3dabb41565e8.mp3 ",
      duration:""
    },
 {
      name:"♫ Böyle Olur mu ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/41669cfac68babbcde10db756f106285.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağlara Gel Dağlara ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b91a1b7fd67f1449e3de844b0d014508.mp3 ",
      duration:""
    },
 {
      name:"♫ Yazın Yağar Kar Başıma ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/21738e0c6d735cebbf866515f9beb597.mp3 ",
      duration:""
    },
 {
      name:"♫ Naz Naz Eyleme ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d5a7e0f3c0cd163cb98b73978b505cfc.mp3 ",
      duration:""
    },
 {
      name:"♫ Az Bana Gönder ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/44b1e678a707a72993e5e19edb91aa0c.mp3 ",
      duration:""
    },
 {
      name:"♫ Ezel Bahar Olmayınca ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8f891922a35507a9b93c36e3c58e84e9.mp3 ",
      duration:""
    },
 {
      name:"♫ Ötme Bülbül ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/889bdbcf916e1c1a94f60969feda1d7b.mp3",
      duration:""
    },
 {
      name:"♫ Deniz Üstü Köpürü ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f917de75a3c27334e18400746cf310a8.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaralar Beni Beni ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1bef2a09cdc36ba93bbe9739903c0c77.mp3 ",
      duration:""
    },
 {
      name:"♫ Sıla ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/238b7108edc90f571e01cf7872e03df9.mp3 ",
      duration:""
    },
 {
      name:"♫ Oralıyam Ben ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/11e772bf9d8ce3addc1243e343c82a36.mp3 ",
      duration:""
    },
 {
      name:"♫ Şeker Almaya Geldim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/25f0e52b6f643da03ef6f5e4f898af33.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Nasıl Sevdaymış ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13891239999368f948c26410a0cb103d.mp3 ",
      duration:""
    },
 {
      name:"♫ Cemalini Görmesem ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c422a0489c87a9850acebb82117c296e.mp3 ",
      duration:""
    },
 {
      name:"♫ Al Yanaklım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/299b97cf91944cc43fb06df62494e11e.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağlar Hey ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b3d0284940a4a37826ba72d12b6367ba.mp3 ",
      duration:""
    },
 {
      name:"♫ Ekilir Birgün ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8fc36b76cf68304b15eefe40233ef0bd.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağ Çiçeğim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8ada324cf267a5b0e8f63b417bff06c6.mp3",
      duration:""
    },
 {
      name:"♫ Sözümüz Burda Kalsın ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1d2bb5d4b79fd281787b792a3787c933.mp3 ",
      duration:""
    },
 {
      name:"♫ Mey Açıs ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/858c20e8fa4ad3ae215ff264405f2696.mp3 ",
      duration:""
    },
 {
      name:"♫ Geceler Ay Geceler ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/696a20df59d47a223ae9b10855bdf0b6.mp3 ",
      duration:""
    },
 {
      name:"♫ Dal Boylum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/83967bc17ce353adcb5a61de1b61be66.mp3",
      duration:""
    },
 {
      name:"♫ Dost Senmi Geldin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9b9dc97700159c154952e84bf9bfa0e1.mp3 ",
      duration:""
    },
 {
      name:"♫ Uzun Hava ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8b95886415cd5438c4334ff85b076645.mp3",
      duration:""
    },
 {
      name:"♫ Seni Çok Özledim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b3a5b70c75fd67ab0128e8377e019451.mp3 ",
      duration:""
    },
 {
      name:"♫ Gül İster Benden ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a19b709d4fe34d157a9cef65a7a13ef7.mp3 ",
      duration:""
    },
 {
      name:"♫ Güzeller Sahini Gördüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/72875d8f7e46d577fa3e9e13be84d516.mp3 ",
      duration:""
    },
 {
      name:"♫ Deli Gönlüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc3534747ff53adf077f12e6fb5ca158.mp3 ",
      duration:""
    },
 {
      name:"♫ Dokunsalar Ağlayacağım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0ee370412c11f35d0b7612c66756c8f9.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşkına Düştüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/59b6bedae7f6a14637f47be8862a4242.mp3 ",
      duration:""
    },
 {
      name:"♫ Adı Güzelmiş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eaf4a2572dcca18de10f589dc05dd601.mp3 ",
      duration:""
    },
 {
      name:"♫ Toprak ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8ed7d5f9da4c5c1dbfb141df51b683e2.mp3 ",
      duration:""
    },
 {
      name:"♫ Yol Ver Dağlar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/00dc977346452b65a057a215ca3e0f98.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevda Var ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3404f72ddfe2c153922bfd9d31c666ce.mp3 ",
      duration:""
    },
 {
      name:"♫ Söyle Sevdin mi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bee67a72eefe15505ea4ee3708ad5b37.mp3 ",
      duration:""
    },
 {
      name:"♫ Yollar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/71c60db426d2666a221efb4497ba559f.mp3 ",
      duration:""
    },
 {
      name:"♫ Şansıma ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cfb05a98b2430130120692ec8d5edb03.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaylanın Soğuk Suyu ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5ef5bb7664fed20b20baa4e77059c818.mp3 ",
      duration:""
    },
 {
      name:"♫ Ay Gibi Yar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f779c0b745b873ace2a6c51624b97806.mp3 ",
      duration:""
    },
 {
      name:"♫ Gönlüm Hoş Değil ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c99a2fd8f74528f26e3d56070c35868e.mp3 ",
      duration:""
    },
 {
      name:"♫ Sıla Hasreti ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/046aabb0a4eb001eacbfccf348a18256.mp3 ",
      duration:""
    },
 {
      name:"♫ Harputun Yokuşuna ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d24eb68735ff4f18147e530edab7ca74.mp3 ",
      duration:""
    },
 {
      name:"♫ Deniz Kuşum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2880c649a275b0623922c8c9156af7f3.mp3 ",
      duration:""
    },
 {
      name:"♫ Çoban Çesmesi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/35df629f64d480275f11e01863db87a0.mp3 ",
      duration:""
    },
 {
      name:"♫ Yemen Türküsü ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8d8fd22a943bac9413debf03fa050650.mp3 ",
      duration:""
    },
 {
      name:"♫ Yola Çevirdiler Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cacc046b7f86e4eed1496b0bbb69f937.mp3 ",
      duration:""
    },
 {
      name:"♫ Pazarlik Edelim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d96285d487b9c0cca9d06617e1f67edc.mp3 ",
      duration:""
    },
 {
      name:"♫ Taze Karlar Yağmı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/727d2e8300439ddb5746e552fdec5b1a.mp3 ",
      duration:""
    },
 {
      name:"♫ Omuz Omuza ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/95660528cac9bed6827087bf1267d9fd.mp3 ",
      duration:""
    },
 {
      name:"♫ Kirvem",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7e8ce69d37e5ec6efbd315f01f0c2230.mp3",
      duration:""
    },
 {
      name:"♫ Özge Yar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2c9187082d8708a531762b19c46466e3.mp3 ",
      duration:""
    },
 {
      name:"♫ Ağlasam mı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8f3fdb90b60f5028771184e080374f6f.mp3",
      duration:""
    },
 {
      name:"♫ Hamsi Gözlüm ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8a8e440f6db680faa9d57ed3aee195fd.mp3",
      duration:""
    },
 {
      name:"♫ Can Sevdiğim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/873e6aeeb01d411447a90407b9e3709d.mp3 ",
      duration:""
    },
 {
      name:"♫ Koca Dünya ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/680658d9217c43b0cc3325cec6d768d5.mp3",
      duration:""
    },
 {
      name:"♫ Yalan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/639eaa04bed440f78b4f189db00a6c6e.mp3 ",
      duration:""
    },
 {
      name:"♫ Sağım Yalan Solum Yalan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/505d7cfd2c4fab099c5ba0701c4f36cf.mp3",
      duration:""
    },
 {
      name:"♫ Halımız Budur Gardaş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c8fb08a49cc6fa24cca73af175c03d2a.mp3 ",
      duration:""
    },
 {
      name:"♫ Turna ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9be2f1be51535936b8437324966cb82f.mp3 ",
      duration:""
    },
 {
      name:"♫ Gece Sabaha Kadar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0e3e439d772705758e889126ac3288c9.mp3 ",
      duration:""
    },
 {
      name:"♫ Derdim Çoktur ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ccccf6e5aecddfd7784b985d80419d3b.mp3 ",
      duration:""
    },
 {
      name:"♫ Güzel ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/12048fa410a620f80b14bbe56cd1b19d.mp3 ",
      duration:""
    },
 {
      name:"♫ Kan Gider ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9e0363ea9935c8ab92a3c38cc8302363.mp3",
      duration:""
    },
 {
      name:"♫ Mihribanım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0d82d61e10ded8766dbaf4f27a83a792.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelde İşte ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e5de8326c8b5c58cdca89064feb36a78.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Yana ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f29429a897635f2807fe859e300522a5.mp3 ",
      duration:""
    },
 {
      name:"♫ Turnalar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5883332b6030cc4752377d58c617df4f.mp3 ",
      duration:""
    },
 {
      name:"♫ Bunca Gamı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0c1f8f388f2436a5bd7c1ae3b7bb1f30.mp3 ",
      duration:""
    },
 {
      name:"♫ Ey Dost ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9cc62775269be951c89225a7ef92e91c.mp3 ",
      duration:""
    },
 {
      name:"♫ Anam Ağla ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/85aeb188bf2157cdb3c2af52248e6455.mp3",
      duration:""
    },
 {
      name:"♫ Kamber Ağa ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/62caa75645a56cb1a5eceba989d43bcd.mp3 ",
      duration:""
    },
 {
      name:"♫ Neler Ettin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a0a024da204129c274082b91e8a51e66.mp3 ",
      duration:""
    },
 {
      name:"♫ Deli Yiğidim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ae5ce28857809e01503f774d55747b70.mp3",
      duration:""
    },
 {
      name:"♫ Nazlana ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6396aca02f211873089a9bd566434d5f.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalan Yar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c5ced93a2f15b64e9d4348d2881cb6be.mp3 ",
      duration:""
    },
 {
      name:"♫ Benim Yarim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6c45b5984aaa581b7ef54cd68a785f43.mp3 ",
      duration:""
    },
 {
      name:"♫ Dört Duvar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/889040eff8679a2b2a27fd65ab048e24.mp3",
      duration:""
    },
 {
      name:"♫ Birer Birer ",
      file:" ttps://cdn.muzikmp3indir.com/mp3_files/6b846600a99b58ae55a049baba14975e.mp3",
      duration:""
    },
 {
      name:"♫ Hazello ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/565294b735d12e3971fafae510ad9f66.mp3 ",
      duration:""
    },
 {
      name:"♫ Muhabbetimiz Var ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/57b588f2fbf0024dddd5f44f91535803.mp3 ",
      duration:""
    },
 {
      name:"♫ Babamın Kızıyam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/300e46e4bcc9824a110e4a35d1872003.mp3 ",
      duration:""
    },
 {
      name:"♫ Yar Yar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4157a6710ff37196ff4fb704882be4df.mp3",
      duration:""
    },
 {
      name:"♫ Koca Dünya ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a690bcded4e84606ca3f03d840f4592e.mp3 ",
      duration:""
    },
 {
      name:"♫ Zannetmeki Unutamam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50d33056a644b62239a928fe0a36b47a.mp3 ",
      duration:""
    },
 {
      name:"♫ Zannetmeki Unutamam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50d33056a644b62239a928fe0a36b47a.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayat Bir Gün ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/00c46db08ecd77d06e9ae5288607308d.mp3 ",
      duration:""
    },
 {
      name:"♫ Ellik ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ellik-J6pHNRM2AB-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Şu Dağlarda Kar Olsaydım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4d3a13e0d928a668cdf446f798a6fe15.mp3 ",
      duration:""
    },
 {
      name:"♫ Dallarımı Kırdılar ",
      file:"ttps://cdn.muzikmp3indir.com/mp3_files/c72c83b691d3d54e5526f5ceadd33488.mp3 ",
      duration:""
    },
 {
      name:"♫ Şansıma ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d5d21c5c8235eac78999f359587507bc.mp3 ",
      duration:""
    },
 {
      name:"♫ Siyah Saçlarına Kurban Olduğum",
      file:" https://cdn.muzikmp3indir.com/mp3_files/419189f7b69fe0de4961288bcc489e66.mp3",
      duration:""
    },
 {
      name:"♫ Seni Gidi Gidi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f808c594138a93c83ef4b1ff6eae9fca.mp3 ",
      duration:""
    },
 {
      name:"♫ Deli Gibi Yüreğime Zorsun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/11ddcbdd0c2691b37443e947de529347.mp3 ",
      duration:""
    },
 {
      name:"♫ Alim Alim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8a1f6cb80c1ed4ad4257e5132e51788f.mp3 ",
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