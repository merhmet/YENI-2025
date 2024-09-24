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
      name:"♫ Tutku",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50de1772af4e829f72ffd9d02db8d90e.mp3 ",
      duration:""
    },

    {
      name:"♫ Unutamadım Seni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/adeb48e04d8f28e5d2e137ccc28db80b.mp3 ",
      duration:""
    },


    {
      name:"♫ Anlatamam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/681dbe0209a0a2b454f884d0ce7b0a0e.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Şans Daha",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3f49877b6a4e547430c2aa7983f48390.mp3 ",
      duration:""
    },
 {
      name:"♫ Ellere Düş",
      file:" https://cdn.muzikmp3indir.com/mp3_files/561ac0b04feca0009c5adeb2a3959cb7.mp3",
      duration:""
    },
 {
      name:"♫ Bir Güzel Sevdim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f53be0d66f3f6465a121674f835205e.mp3 ",
      duration:""
    },
 {
      name:"♫ Sadede Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f52e893ffd951078ce3888d45ac3b6a0.mp3 ",
      duration:""
    },
 {
      name:"♫ Canımın İçi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/81fcfe953fb95be15cbfa31180a99ccb.mp3",
      duration:""
    },
 {
      name:"♫ Varmayın Üstüme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a67035c8ceff81b0a1835461af3cca84.mp3",
      duration:""
    },
 {
      name:"♫ Aklımdasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/55ec2240cfc5d69314678623d795bd6d.mp3 ",
      duration:""
    },
 {
      name:"♫ Ah Şu Bekarlık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bc3a9a0abb7d95182bb19f4d93602eb9.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Akşam Üstü",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f448aea5a31f4b0998db2f22da7c2df4.mp3",
      duration:""
    },
 {
      name:"♫ Sevdalı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e65c6f487f323fb9638af2e4b13fb78e.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalnız Olmuyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/480e43ad459ab963e42acc4e972f64e4.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevmesende Olur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a8606927ea10ea910db7c37659cb7ea0.mp3 ",
      duration:""
    },
 {
      name:"♫ Ateşime Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9a31539d68de18555e115caf6a753b6a.mp3 ",
      duration:""
    },
 {
      name:"♫ İnsafsız",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1ad3d17656a3f9ecb99f43b50d790505.mp3",
      duration:""
    },
 {
      name:"♫ Geç Onu Değiştir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2b96e13956555812b0a127155becf500.mp3 ",
      duration:""
    },
 {
      name:"♫ Ahlı Vahlı Şarkım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0a4fccf40c488a9baf4f9f9b10866559.mp3 ",
      duration:""
    },
 {
      name:"♫ Takıl Bana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/212b51af1f3d120ef9f2d1038a3af9a0.mp3 ",
      duration:""
    },
 {
      name:"♫ Sende Ağlarsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3ce68af33195aaa00de949b1ae6c5124.mp3 ",
      duration:""
    },
 {
      name:"♫ A Bebeğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/43829fdf5c1c7857f1f5033d7fe6d30c.mp3 ",
      duration:""
    },
 {
      name:"♫ Küçüğüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b5876fea33b4ed4973ce56e0af453c5b.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalnızım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/yalnizim-fuFRjJmqHG-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Benimle Dans",
      file:"https://cdn.muzikmp3indir.com/mp3_files/995abbb734c74e84ff66adff0c06dd4e.mp3 ",
      duration:""
    },
 {
      name:"♫ Yollar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a4f9cfddb14b507eca6586fb61a72feb.mp3 ",
      duration:""
    },
 {
      name:"♫ Gözüm İstanbul",
      file:"https://cdn.muzikmp3indir.com/mp3_files/501ab6d7a1be78339c0efed9c642ee89.mp3 ",
      duration:""
    },
 {
      name:"♫ Adam Gibi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5b7cae09f40395faddaaa6125f5286c6.mp3 ",
      duration:""
    },
 {
      name:"♫ Bende isterem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7486c5efa73b12c0a1123c0d8b5132f2.mp3 ",
      duration:""
    },
 {
      name:"♫ Unutmayacağım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/37ccf85246ac26fbc24773cb20278846.mp3",
      duration:""
    },
 {
      name:"♫ Erzuruma Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/83253a7210d96b9263f99b57ceb6aa8a.mp3 ",
      duration:""
    },
 {
      name:"♫ Er Meydanı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc2707983907bd2ebfe3c061c4839a31.mp3 ",
      duration:""
    },
 {
      name:"♫ Canısı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d0ffa0760a14dea8fe13177bd97d72aa.mp3 ",
      duration:""
    },
 {
      name:"♫ Sırılsıklam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c4757c65a9c3400aa24f19e31541ac83.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Aldırma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ff97d787203dbd7171b75756f34a76d9.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşkım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ccfb2689fe33d5d9bb8567f9b1647e4e.mp3 ",
      duration:""
    },
 {
      name:"♫ Yazık Bana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8c9ab105d75404bc9d533b640058634b.mp3 ",
      duration:""
    },
 {
      name:"♫ Gavurun Kızı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/83ba995cd889878c7ef876f82245250e.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşk",
      file:"https://cdn.muzikmp3indir.com/mp3_files/74603e6bc6173c5caa10efe065856a6b.mp3 ",
      duration:""
    },
 {
      name:"♫ Aslanlar Gibi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b3fa19b6cd4af0c505d785de9ecec46b.mp3 ",
      duration:""
    },
 {
      name:"♫ Dönemem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/af7f094afc02bf8b29685b77221d3c67.mp3 ",
      duration:""
    },
 {
      name:"♫ A Kuzum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f5f5ee3094c4dee1d22987f142e66c2d.mp3 ",
      duration:""
    },
 {
      name:"♫ Güllere Küstüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4daa980c8a5e3c63459c75be514cbcee.mp3 ",
      duration:""
    },
 {
      name:"♫ Vıdı Vıdı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2545fae6a38f622c635c4beaf918f5b2.mp3 ",
      duration:""
    },
 {
      name:"♫ Kır Çiçeğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c9c0c34d241ee1860825f58ad59aa729.mp3 ",
      duration:""
    },
 {
      name:"♫ De Get Yalan Dünya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ecd85586c07cc5dbee6836fb27210bc0.mp3 ",
      duration:""
    },
 {
      name:"♫ Alem Bozulmuş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b70a9e47e8e1320515cd94282bb86bca.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşk Bebegim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0c6f3241fdf7235694ca6fe7e62323b6.mp3 ",
      duration:""
    },
 {
      name:"♫ Büyük Yalnızlık",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a71d2e31c7c3b39dbc4096625a84b30d.mp3",
      duration:""
    },
 {
      name:"♫ Hele Dadaş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6350b06d30ce44f76582e74fb1b60d22.mp3 ",
      duration:""
    },
 {
      name:"♫ Nasıl Sevmiştim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/591382c7791e4b87d34839b575067e1a.mp3 ",
      duration:""
    },
 {
      name:"♫ Sabır",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c349f87d7a963e6f78ee7a1f910a0464.mp3 ",
      duration:""
    },
 {
      name:"♫ Sarı Gelin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/59b2b0b2c79cc591f94bb9f150060f73.mp3",
      duration:""
    },
 {
      name:"♫ Sevin Gönül",
      file:"https://cdn.muzikmp3indir.com/mp3_files/127c23234544306210075ebe143057c5.mp3 ",
      duration:""
    },
 {
      name:"♫ Seviyorum Mu Ne",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d41143d1c4d30237a37df0cdf854aa2c.mp3 ",
      duration:""
    },
 {
      name:"♫ Tut nefesini",
      file:" https://cdn.muzikmp3indir.com/mp3_files/707ee73370baede40c73ba147ec393e2.mp3",
      duration:""
    },
 {
      name:"♫ Üzdüler Beni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f5bf989895d7319df5719e434343c8e2.mp3",
      duration:""
    },
 {
      name:"♫ Yazılıyorum Sana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/98d05c45817a61a90dbe93f1224e1e49.mp3 ",
      duration:""
    },
 {
      name:"♫ Evleniyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/94160427e2b84299eaa7fe62d03df691.mp3 ",
      duration:""
    },
 {
      name:"♫ Vazgeçemedim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/76bb1cf67b2a45e7d48ac40692eb0de8.mp3 ",
      duration:""
    },
 {
      name:"♫ Bunu Saymıyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fba6c929f6c3df4a49c416d599bb7315.mp3 ",
      duration:""
    },
 {
      name:"♫ Anlarsın Zamanla",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50782ae95bd5f60dad21cda1e748a7fe.mp3 ",
      duration:""
    },
 {
      name:"♫ Var Mısın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/111d288bd694f1be32772f776cfa3e3e.mp3",
      duration:""
    },
 {
      name:"♫ Güzelleşelim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/36232f58b009b62fd2054478901c09fa.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaşıyor İnsan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f3472c7a7a6f721720f2c49c4c1138f.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşkından Yanayım Mı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7ffd5c516ed8a583896ef46d19e25a04.mp3",
      duration:""
    },
 {
      name:"♫ Daha Ne",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7ac3698ff998ffccd5746d3d516a901b.mp3 ",
      duration:""
    },
 {
      name:"♫ Balam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d76919e36824de9733ee58930fc66810.mp3 ",
      duration:""
    },
 {
      name:"♫ Tutam Yar Elinden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/72a1ab08321ddd56beeb922fbdefe49a.mp3",
      duration:""
    },
 {
      name:"♫ Çileli Başım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13c141e7d3e388c4b2cb20d0e6b1275d.mp3 ",
      duration:""
    },
 {
      name:"♫ Su Gibi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/65ea1a6625282a833d69fae9d4e547c6.mp3 ",
      duration:""
    },
 {
      name:"♫ Usta",
      file:" https://cdn.muzikmp3indir.com/mp3_files/457394147838e552828c008b92cce958.mp3",
      duration:""
    },
 {
      name:"♫ Ağla Gözlerim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8fb7c73c34b1dcbf64792a2b5e7beba9.mp3 ",
      duration:""
    },
 {
      name:"♫ Nereye Kadar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9f0cfe03ca7ef6be4de0023868ceee18.mp3 ",
      duration:""
    },
 {
      name:"♫ Unutulurmuş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/911dfa1b3b3d232f5abbe67186f10707.mp3 ",
      duration:""
    },

 {
      name:"♫ İki Yarısıyız",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f9504e278ef680ab28dffde91f5ca269.mp3",
      duration:""
    },
 {
      name:"♫ Aşkım Aşkım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/641b19dac399a1fd4621e711557f117b.mp3 ",
      duration:""
    },
 {
      name:"♫ Kaldırım Taşları",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5a9f356fa46749368777fe94e6651421.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4e31b9b37a61052b988d2979eb687252.mp3 ",
      duration:""
    },
 {
      name:"♫ İyi Hatun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2090adf148f1c3f12ee9c7136632a7a8.mp3 ",
      duration:""
    },
 {
      name:"♫ Yağmur Yağar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ac40619fac097c8c4a2a281b78aea037.mp3 ",
      duration:""
    },
 {
      name:"♫ Defter Hanım Ve Kalem Bey",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a2cb3912cc5167b399b891b6a1eb7288.mp3 ",
      duration:""
    },

 {
      name:"♫ Akşam Olanda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/80c97616a0e2478b2c4a625f58cf7e9d.mp3 ",
      duration:""
    },
 {
      name:"♫ Gönül Limanı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8141d5439b5ad7b82d857faebede1cee.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevdim Ya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/04112bd94930bf327501b7b4169cb15b.mp3 ",
      duration:""
    },
 {
      name:"♫ Can Feda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/af1a530dc3266ede804a1e95761fc896.mp3 ",
      duration:""
    },
 {
      name:"♫ Dut Gibi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ba4826620508483cedf3aac6d7c1d96e.mp3 ",
      duration:""
    },
 {
      name:"♫ Yandım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2b5ea53ad708d50e591710e52507cb36.mp3 ",
      duration:""
    },
 {
      name:"♫ Tıpış Tıpış",
      file:"https://cdn.muzikmp3indir.com/mp3_files/77f17117d2fb5df5c6bbf6646a47acce.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Dadaş",
      file:" https://cdn.muzikmp3indir.com/mp3_files/efb6bf353e1e678f399d50c5668f5ea8.mp3",
      duration:""
    },
 {
      name:"♫ Kızma Birader",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7b632ddcd45d63ba947ae998327ae281.mp3 ",
      duration:""
    },
 {
      name:"♫ Taze Taze",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e2c9c73d29ea3bc94a27a344028d9afc.mp3 ",
      duration:""
    },
 {
      name:"♫ Güle Güle Bebeğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ad2c6a2face1acb7f344798edb98d032.mp3 ",
      duration:""
    },
 {
      name:"♫ Bizim Esrarımız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ef23cb0e0e3a155313d24122dc806090.mp3 ",
      duration:""
    },
 {
      name:"♫ Lemide",
      file:"https://cdn.muzikmp3indir.com/mp3_files/47ed5609795df51ff7b782999dddf32b.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşktan Kaçılmaz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d2b5d0f7fb9c9e473f148079b7d5e854.mp3 ",
      duration:""
    },
 {
      name:"♫ Avuçlarımda Tutamadım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5647bc511552c8c1e4a34e717ff2277e.mp3 ",
      duration:""
    },
 {
      name:"♫ Belli Mi Olur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13d4b7c49ccc24a2ea9f614ab274c897.mp3 ",
      duration:""
    },
 {
      name:"♫ Birlik Türküsü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7cc0804caa1eb6891b537954f6784e18.mp3 ",
      duration:""
    },
 {
      name:"♫ Cümbüş",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8717e67ffd72404ee03e5871ee3056c5.mp3",
      duration:""
    },
 {
      name:"♫ Erzurum Uzak Şehir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9068325fa54fb7776961ab5735eeeef6.mp3 ",
      duration:""
    },
 {
      name:"♫ Gönül Çiçeğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2cff202cc506f3a7671fff27a053b62e.mp3 ",
      duration:""
    },
 {
      name:"♫ Gülüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/66b6367955e5019fc93450d3e0d1c7b0.mp3 ",
      duration:""
    },
 {
      name:"♫ Naylon Dünya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8660b380ad86cb4a40eb0221ff89fec9.mp3 ",
      duration:""
    },
 {
      name:"♫ Palandöken",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed8c34c2d326595dd77e932f7c837511.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalnız Ağaç",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c60db7b648ca485ac358c458da610411.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalnız Ağaç",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c60db7b648ca485ac358c458da610411.mp3",
      duration:""
    },
 {
      name:"♫ Yüreğinden Öpüyorum",
      file:" https://cdn.muzikmp3indir.com/mp3_files/913fa6c92c0d6d8118e76ef7f72490c7.mp3",
      duration:""
    },
 {
      name:"♫ Kurtuldum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/46cb85f6da29f1ea85c83bc9c8cbf377.mp3 ",
      duration:""
    },
 {
      name:"♫ Sana Değer",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b33812d61bc563cb4276ad145d6e78b1.mp3 ",
      duration:""
    },
 {
      name:"♫ Tutmayın Beni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/62969895a1feccde1b3b7aaffe29cd9a.mp3",
      duration:""
    },
 {
      name:"♫ Var Gün Dostları",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c755a50cd2ef2a7944a0fb0de08971c2.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Bana Lazımsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b98b013de47d98719838fb84099e501c.mp3 ",
      duration:""
    },
 {
      name:"♫ Seni Aradım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/00d834535aa87bd6a7e8dfbb970d703b.mp3",
      duration:""
    },
 {
      name:"♫ Kralda Ben Sultanda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/42bbc6f91a1d4b464f1e153f125e9008.mp3 ",
      duration:""
    },
 {
      name:"♫ Çıkrık Benim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c0863c054d2af6a0a1de0cf26accc360.mp3 ",
      duration:""
    },
 {
      name:"♫ Nenni Nenni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7bfd6e2aefc8010c952ec718aa8c6955.mp3",
      duration:""
    },
 {
      name:"♫ Seni Veren Allaha",
      file:"https://cdn.muzikmp3indir.com/mp3_files/516c750223d8c406d7b24bef7db47f8f.mp3 ",
      duration:""
    },
 {
      name:"♫ Ömrüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a4a0ac9d7eaf9d9a5f193f0cd44d4e6f.mp3 ",
      duration:""
    },
 {
      name:"♫ Onu Benim Gibi Sevme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b3e506e6f4507736f60b5a491da87560.mp3",
      duration:""
    },
 {
      name:"♫ Bir Sana Yandım Ben",
      file:"https://cdn.muzikmp3indir.com/mp3_files/19537960072a7323dc562f5796ba80f8.mp3 ",
      duration:""
    },
 {
      name:"♫ Burnumda Tütüyorsun",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d3391f5468eda1857bb03c891b23d2e7.mp3",
      duration:""
    },
 {
      name:"♫ Olamadım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/daece6db756c733dbea958145bce49ce.mp3 ",
      duration:""
    },
 {
      name:"♫ Nasılda Akıyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e68e12e031bfae50ab5992f281298c8c.mp3 ",
      duration:""
    },
 {
      name:"♫ Taksit Taksit",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3cccd0be4be7af65b9681e68de19a7cd.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Ne Anlarsın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a19a95bd3a0bb7c714a262783b637f84.mp3",
      duration:""
    },
 {
      name:"♫ Seni Nasıl Severim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0a9a49a5507828c195c41c1b29ef54e1.mp3 ",
      duration:""
    },
 {
      name:"♫ Tak Sepeti Koluna",
      file:" https://cdn.muzikmp3indir.com/mp3_files/597e24d73bdcd363d81a549a6d8d3534.mp3",
      duration:""
    },
 {
      name:"♫ Haydi Güzelim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/db172f875d2b5963e0b91ef0c884707a.mp3",
      duration:""
    },
 {
      name:"♫ Gittin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/107dcb93bc5d2d46dcaeef4e2937f6ad.mp3 ",
      duration:""
    },
 {
      name:"♫ Üç Kuruş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ddacfeb2bbe280a6919e5429b45e586a.mp3 ",
      duration:""
    },
 {
      name:"♫ Unutulanlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c35e74018330b22d06a83def45134bd3.mp3 ",
      duration:""
    },
 {
      name:"♫ Körfezde Buluşalım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d1ec89f114c73bfceeeef5da0a347841.mp3 ",
      duration:""
    },
 {
      name:"♫ Vur Dibine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/64995c8c1b54109cfa171d4a1701cf04.mp3 ",
      duration:""
    },
 {
      name:"♫ Gülüm Nanay",
      file:" https://cdn.muzikmp3indir.com/mp3_files/abd64cfc16dddbe519d26eba1699121f.mp3",
      duration:""
    },
 {
      name:"♫ Şapkam Düştü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7509b9a354c18850e6512d1e0925ab22.mp3 ",
      duration:""
    },
 {
      name:"♫ Sev Beni Sevdim Seni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fd24fd0ec08a2c9da126e25a66827359.mp3",
      duration:""
    },
 {
      name:"♫ Çileli Başım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9243153b7d7606170654061b2827024c.mp3",
      duration:""
    },
 {
      name:"♫ Bugün Hava Erzurum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f0fef69c1acd9a4d16fe22ae74ca6d40.mp3 ",
      duration:""
    },




 {
      name:"♫ Taze Taze (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/984b4ce6f7b26c75f34bd8c23c3b66bd.mp3 ",
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