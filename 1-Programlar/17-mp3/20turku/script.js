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
      name:" ♫ Hayat Vefasız",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cdec5915859da109570be39395d360ac.mp3   ",
      duration:""
    },

    {
      name:"♫ Gülemedim    ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/220ad5421e1549cf8aa1cfa689545ab5.mp3   ",
      duration:""
    },


    {
      name:"♫ Yaban Gülü",
      file:" https://cdn.muzikmp3indir.com/mp3_files/yaban-gulu-GEml0wxr7D-0.mp3 ",
      duration:""
    },
 {
      name:"♫  Naze",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3b8c131976a3e6a4490bd5ac750f3859.mp3   ",
      duration:""
    },
 {
      name:"♫ Gönül Çalamazsan Aşkın Sazını ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e0932b87b4a3ed4d47086f5a9a462d8d.mp3 ",
      duration:""
    },
 {
      name:"♫  Uzun Hava",
      file:" https://cdn.muzikmp3indir.com/mp3_files/uzun-hava-VMCwOoph0r-0.mp3",
      duration:""
    },
 {
      name:" Söylenmez ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/78711df132a4068b4f92349a5df5e9fe.mp3  ",
      duration:""
    },
 {
      name:"♫ Ana ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/07f038fd48883b8a71b779fe36ec2984.mp3    ",
      duration:""
    },
 {
      name:"♫ Felek    ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fb15f34729afa59f27deb1c857747c2f.mp3    ",
      duration:""
    },
 {
      name:"♫ Keje",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1cdc5c654dc3ac3a9629e6e559154588.mp3    ",
      duration:""
    },
 {
      name:"♫ Vay Zalim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/532ed0fb103a5b85d86de46f882f0da6.mp3    ",
      duration:""
    },
 {
      name:"♫ Cemo ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d1e298191418247eb236c91cfd211634.mp3    ",
      duration:""
    },
 {
      name:"♫ Beni Beni  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/806b9d1e27f68c4dfa06001cabc1acf4.mp3    ",
      duration:""
    },
 {
      name:"♫ Beni Bana Bırak",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6a637ee920481f43eb7e325d04c93905.mp3   ",
      duration:""
    },
 {
      name:"♫ Bize Harputlu Derler",
      file:" https://cdn.muzikmp3indir.com/mp3_files/401e5293987b6625a1b5928d35060972.mp3   ",
      duration:""
    },
 {
      name:"♫ Dost",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc39be303e22d3d076b4f041973ae32f.mp3    ",
      duration:""
    },
 {
      name:"♫ Hoş Değilim Bu Günlerde ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/30a2a1fdf952a812081fedcce825da5c.mp3   ",
      duration:""
    },
 {
      name:"♫ Belli Değil ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/db56b5671596734a5c6bef7e5813b0b4.mp3    ",
      duration:""
    },
 {
      name:"♫ Cano  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4cc1bf4f26ba7c508ca9583953b8ce12.mp3   ",
      duration:""
    },
 {
      name:"♫ Felek Utansın ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0d2a798e53a2a4b8b0ba347b1d4bbeb4.mp3   ",
      duration:""
    },
 {
      name:"♫ Dilocan  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8aab218bf9a4e9b0b50bd1193dcd5935.mp3   ",
      duration:""
    },
 {
      name:"♫ Benim Cananım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b49294afb9ecaec34bb1eae2ae11657d.mp3    ",
      duration:""
    },
 {
      name:"♫  De Hele Kirve",
      file:"https://cdn.muzikmp3indir.com/mp3_files/467836b868bea6d1232e1b3e92182ec8.mp3    ",
      duration:""
    },
 {
      name:"♫ İki Dağın Arasında",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bf1871a1263655ae224098e8b9542f1d.mp3    ",
      duration:""
    },
 {
      name:"♫ Sabiha   ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/149552fe7be7d7dba781e46c57a37e8a.mp3   ",
      duration:""
    },
 {
      name:"♫  Beni Ağlatma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9207d1ad225459cc1dcdf71ab31e230d.mp3    ",
      duration:""
    },
 {
      name:"♫  Deli Gönül ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3a4b7ea0772a6018768ab34017ba5e1e.mp3    ",
      duration:""
    },
 {
      name:"♫  Halo",
      file:" https://cdn.muzikmp3indir.com/mp3_files/adf86d4f98d9a29dd671e0be6ea1ef01.mp3   ",
      duration:""
    },
 {
      name:"♫ Diyar Diyar  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/99118b4600aabe455a1b47173ec75688.mp3 ",
      duration:""
    },
 {
      name:"♫ Nure  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/0ee74d67845bb47a1e7d6bd848d28f4d.mp3  ",
      duration:""
    },
 {
      name:"♫ Mukadder ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/e4639a7e0ecf2824dcdc50dd60befcae.mp3   ",
      duration:""
    },
 {
      name:"♫ Selimo ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/bdda4bd41b6c36486dd25891761db5a6.mp3  ",
      duration:""
    },
 {
      name:"♫ Kul Ettin Beni ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/kul-ettin-beni-8TLb2CGDal-0.mp3  ",
      duration:""
    },
 {
      name:"♫ Narine ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/1609f0c3de0b23b09003b3ac5459ef98.mp3   ",
      duration:""
    },
 {
      name:"♫ Garip Anam ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/1ab5b37546d03338eb9272ba6e346088.mp3 ",
      duration:""
    },
 {
      name:"♫ Hangi Bağın",
      file:"     https://cdn.muzikmp3indir.com/mp3_files/5e421d35a3b11d55267c06298314017b.mp3",
      duration:""
    },
 {
      name:"♫ Suna Gelin ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/suna-gelin-Uzy2GRMaJw-0.mp3  ",
      duration:""
    },
 {
      name:"♫ Beni Görüp Yüzün  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/843980585bc06a96052dabd11659a43d.mp3",
      duration:""
    },
 {
      name:"♫ Dağlar ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/eecce5c8618d45717d3d4886ce6c8311.mp3  ",
      duration:""
    },
 {
      name:"♫ Hoş Değilim Bu Günlerde ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/c4ef765743bcaef225300c7672ed1c42.mp3 ",
      duration:""
    },
 {
      name:"♫ Sallana Sallana ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/dcfd47d3cd0a34975157b5f1907e7d85.mp3  ",
      duration:""
    },
 {
      name:"♫ Çirkin ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/cc46fc83f8e81d4b4694e34c4944d6bd.mp3 ",
      duration:""
    },
 {
      name:"♫ A Yar ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/ea49faed856c0c3288905ccd15364c63.mp3  ",
      duration:""
    },
 {
      name:"♫ Yetmedimi  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/307377d13cb146a3c709891858eaf7e2.mp3 ",
      duration:""
    },
 {
      name:"♫ Kime Ne  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/a8c01318fe861ab4dd4edffe8ca662ec.mp3  ",
      duration:""
    },
 {
      name:"♫ Abuzer Ağa  ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/9f39c0799b0b4fae0d8007f4b7e33ac3.mp3",
      duration:""
    },
 {
      name:"♫ Baba  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/ee14b13c61523721f3c8b655c65011a6.mp3  ",
      duration:""
    },
 {
      name:"♫ Van a Gel  ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/7362c85dcc674740e0f45909c951c559.mp3",
      duration:""
    },
 {
      name:"♫ Di Yarim  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/5c2bd69b3f19aac6502cb91e65d1a54d.mp3 ",
      duration:""
    },
 {
      name:"♫  Zannetme ki Unutamam",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/76ffed05b385c2ffb414f364b4a1bddc.mp3   ",
      duration:""
    },
 {
      name:"♫ Gidelim Şıh Bağına Gazele ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/d4eeb039c5799696bb67c9974a20cc5b.mp3   ",
      duration:""
    },
 {
      name:"♫ Bahçanıza Bir Taş Attım  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/40eb9cc111348df20c774a854a4dd49b.mp3  ",
      duration:""
    },
 {
      name:"♫ İki Kurşun ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/863eef0338f77824ef807cd48773dfe8.mp3  ",
      duration:""
    },
 {
      name:"♫ Sebebim Sen",
      file:"    ttps://cdn.muzikmp3indir.com/mp3_files/c45f776899c45fed0911f8ed58589267.mp3 ",
      duration:""
    },
 {
      name:"♫ Gönül Derdi",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/035a77159b5227841be2ac89c66c2970.mp3 ",
      duration:""
    },
 {
      name:"♫ Fadile",
      file:"     https://cdn.muzikmp3indir.com/mp3_files/fadile-bLTUeklVF0-0.mp3",
      duration:""
    },
 {
      name:"♫ İhtiyacım Var ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/c2777001e6e2ea24757c9ad7abf00328.mp3 ",
      duration:""
    },
 {
      name:"♫ Gitme ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/25fb8239f312559b5efcf93522cb225b.mp3 ",
      duration:""
    },
 {
      name:"♫  Bayram Ne Zamandır ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/90ae4968205fd47b0ae032eb99b632e6.mp3  ",
      duration:""
    },
 {
      name:"♫ Al Eyvanda Han Kalma ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/e7d5bcc1d243ea314ec75bb4615dbfb1.mp3  ",
      duration:""
    },
 {
      name:"♫  Bahtı Karalım ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/be14ea45da29d5f1e51edde819004530.mp3",
      duration:""
    },
 {
      name:"♫ Bilesin Gönlümün Ahı Var Sende ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/3108d1c8dac772e34e5c7c96d64e4f0a.mp3  ",
      duration:""
    },
 {
      name:"♫  Bir Ben Gülmedim",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/003206bff49a9a8ff11be587bd4f093e.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağlar Dağımdır Benim ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/7d9a403aafbf811cb6354468da9f309a.mp3  ",
      duration:""
    },
 {
      name:"♫ Gel Barışak ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/d388fb354634cae1f8fa71afb97e14c7.mp3  ",
      duration:""
    },
 {
      name:"♫ Nuru mu Geldi ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/cadb31383b1a7e68c8e0fb220513dd36.mp3 ",
      duration:""
    },
 {
      name:"♫  Oğul",
      file:"     https://cdn.muzikmp3indir.com/mp3_files/99e05adeba99e528c5c653f296dc1425.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevmeyi Öğretemedim  ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/983a4531360bd88c304939f4b8d30b52.mp3",
      duration:""
    },
 {
      name:"♫  Yar Meleke",
      file:"     https://cdn.muzikmp3indir.com/mp3_files/ecdc627a4850a1f3ae736ab9c8692433.mp3 ",
      duration:""
    },
 {
      name:"♫ Sana Nasıl Yar Olayım ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/sana-nasil-yar-olayim-f5SluhJeaF-0.mp3  ",
      duration:""
    },
 {
      name:"♫  Nefesin Nefesime",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/nefesin-nefesime-yMt5NqzmDf-0.mp3  ",
      duration:""
    },
 {
      name:"♫ Geldi Geçti ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/geldi-gecti-ls8zFfj4dQ-0.mp3  ",
      duration:""
    },
 {
      name:"♫ Helkeler Kolunda Suya Gidiyor ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/helkeler-kolunda-suya-gidiyor-N4SdqEJuLm-0.mp3  ",
      duration:""
    },
 {
      name:"♫ Oy Anam  ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/oy-anam-bNGLBqOY3j-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Ay Buluta Girmiş ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/ay-buluta-girmis-8LVoDaAjYg-0.mp3  ",
      duration:""
    },
 {
      name:"♫  Ağlamaya Doymayan Gözüm  ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/aglamaya-doymayan-gozum-wHFhkA1o7I-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaylalar Yaylalar ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/yaylalar-yaylalar-EcZQrtA3f6-0.mp3  ",
      duration:""
    },
 {
      name:"♫  Yaylalar Yaylalar (Remix)",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/yaylalar-yaylalar-remix-EDgFcjedYO-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevmişim ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/3b7399b483bcaefbba0754b3b6f99bca.mp3  ",
      duration:""
    },
 {
      name:"♫ Yarime Bir Haber Salın ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/5b1a9c6b4cff0524d83283d8ec06a740.mp3  ",
      duration:""
    },
 {
      name:"♫ Biri Var Diyemedin mi ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/a437934ef7a8fff874d2fc9756265243.mp3 ",
      duration:""
    },
 {
      name:"♫ A Yar ",
      file:"     https://cdn.muzikmp3indir.com/mp3_files/ea49faed856c0c3288905ccd15364c63.mp3",
      duration:""
    },
 {
      name:"♫ Abuzer Ağ ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/9f39c0799b0b4fae0d8007f4b7e33ac3.mp3   ",
      duration:""
    },
 {
      name:"♫ Ağlamaya Doymayan Gözüm ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/aglamaya-doymayan-gozum-wHFhkA1o7I-0.mp3 ",
      duration:""
    },
 {
      name:"♫  Al Eyvanda Han Kalma",
      file:"     https://cdn.muzikmp3indir.com/mp3_files/e7d5bcc1d243ea314ec75bb4615dbfb1.mp3",
      duration:""
    },
 {
      name:"♫  Ana",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/07f038fd48883b8a71b779fe36ec2984.mp3 ",
      duration:""
    },
 {
      name:"♫  Ay Buluta Girmiş",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/ay-buluta-girmis-8LVoDaAjYg-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Baba ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/ee14b13c61523721f3c8b655c65011a6.mp3",
      duration:""
    },
 {
      name:"♫ Bahçanıza Bir Taş Attım ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/40eb9cc111348df20c774a854a4dd49b.mp3  ",
      duration:""
    },
 {
      name:"♫  Bahtı Karalım ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/be14ea45da29d5f1e51edde819004530.mp3",
      duration:""
    },
 {
      name:"♫ Bayram Ne Zamandır ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/90ae4968205fd47b0ae032eb99b632e6.mp3 ",
      duration:""
    },
 {
      name:"♫ Belli Değil  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/db56b5671596734a5c6bef7e5813b0b4.mp3 ",
      duration:""
    },
 {
      name:"♫ Beni Ağlatma ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/9207d1ad225459cc1dcdf71ab31e230d.mp3 ",
      duration:""
    },
 {
      name:"♫  Beni Bana Bırak",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/6a637ee920481f43eb7e325d04c93905.mp3 ",
      duration:""
    },

 {
      name:"♫ Beni Beni ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/806b9d1e27f68c4dfa06001cabc1acf4.mp3 ",
      duration:""
    },
 {
      name:"♫ Beni Görüp Yüzün Öte Dönderme  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/843980585bc06a96052dabd11659a43d.mp3 ",
      duration:""
    },
 {
      name:"♫ Benim Cananım ",
      file:"     https://cdn.muzikmp3indir.com/mp3_files/b49294afb9ecaec34bb1eae2ae11657d.mp3",
      duration:""
    },
 {
      name:"♫  Bilemedim ",
      file:"     https://cdn.muzikmp3indir.com/mp3_files/34788c59a7ec7c642bf0a7ff08710d54.mp3 ",
      duration:""
    },
 {
      name:"♫  Bilesin Gönlümün Ahı Var Sende ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/3108d1c8dac772e34e5c7c96d64e4f0a.mp3 ",
      duration:""
    },
 {
      name:"♫  Bir Ben Gülmedim ",
      file:"   https://cdn.muzikmp3indir.com/mp3_files/003206bff49a9a8ff11be587bd4f093e.mp3  ",
      duration:""
    },
 {
      name:"♫ Bize Harputlu Derler ",
      file:"    https://cdn.muzikmp3indir.com/mp3_files/401e5293987b6625a1b5928d35060972.mp3 ",
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