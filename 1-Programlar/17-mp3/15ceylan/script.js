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
      name:"♫  Sen Affetsen Ben Affetmem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4f32d226a7d43e78c7b61ec055249de8.mp3 ",
      duration:""
    },

    {
      name:"♫  Yansın Ankara",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3b45905b4f07a510164001808667490c.mp3 ",
      duration:""
    },


    {
      name:"♫  Vana Gel Muşa Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e17f9cd335b403701cd8796a8fe52d9b.mp3 ",
      duration:""
    },
 {
      name:"♫ Ne Sayarsan Say ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fbc65e837d9d7378aff7e14308168169.mp3",
      duration:""
    },
 {
      name:"♫  Pişmanlıklar Diliyorum (feat Devran Şengümüş)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aac7ba8a3701d688099d84e353b4e901.mp3 ",
      duration:""
    },
 {
      name:"♫ Ne Gelirse Sevdadan Gelir ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2887c55e51a362c95dee65c31ea70a28.mp3 ",
      duration:""
    },
 {
      name:"♫ Islanmış Kirpiklerin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/88f8171ac02ec081197bf4f62675c1e2.mp3",
      duration:""
    },
 {
      name:"♫  Birileri Kandırmış",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e814f4b9a8d22387f7deb8de15a8e1c5.mp3 ",
      duration:""
    },
 {
      name:"♫ Medet ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c86f9158e51aefad1d3bbb20377d4308.mp3 ",
      duration:""
    },
 {
      name:"♫ Senin Kadar Hiç Kimseyi Sevmedim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2864d1ff4b7e4143faef76643cc46690.mp3 ",
      duration:""
    },
 {
      name:"♫  Eski Tadım Yok Artık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9f35e7ef1c5522ba2a22440d170319ba.mp3 ",
      duration:""
    },
 {
      name:"♫ İlle de Sen ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/dea15c886616ed682a5d49f562748ef1.mp3",
      duration:""
    },
 {
      name:"♫  Ne Feryad Edersin Divane Bülbül",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5cb052545ee7f51e0aca594610201f6b.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Sivaslı Uğruna ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6f72eac78d1a847590665b52be10256f.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayret Nasıl Yaşıyorum (feat Taladro) ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8204f352ea12231ac366a0a315ec7aa3.mp3 ",
      duration:""
    },
 {
      name:"♫  Cennetim Ol",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cennetim-ol-9lqsEKT3jC-0.mp3",
      duration:""
    },
 {
      name:"♫ Melodi-Severim Ama Güvenemem ki ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4cfece54882d63d1f2ac8cb20c10e621.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Başka Severdi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0570bfca8ab2474d6e77858969a24277.mp3 ",
      duration:""
    },
 {
      name:"♫  Tillillo",
      file:" https://cdn.muzikmp3indir.com/mp3_files/tillillo-priuPJFMXU-0.mp3",
      duration:""
    },
 {
      name:"♫  Gözlerine Bakınca Senin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/gozlerine-bakinca-senin-ocz5D31XGB-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Kendimi Sordum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/55cd2f94cbce31f9fc26c9e1f6d176df.mp3 ",
      duration:""
    },
 {
      name:"♫  Sonsuz Aşkım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/71de7086e6e8d0b092af046c50d83365.mp3 ",
      duration:""
    },
 {
      name:"♫  Ceylan feat İlyas Keçeci-Sustum Artık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/501d43bf879cae87e1607f7c54ac5894.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Daha Çıkma Karşıma ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cf893bdbcd222b8030abdebbf261b526.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Nasıl Sevme ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e09d4bfa8a1b7d838717047ac5a24efc.mp3 ",
      duration:""
    },
 {
      name:"♫ Ölmedim Gülüm ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c711e2b8137b95486f41383344e9edcd.mp3",
      duration:""
    },
 {
      name:"♫ Sanma Gidince ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/10d71c9c28ebcc6448f41450049f844d.mp3 ",
      duration:""
    },
 {
      name:"♫ Hep Ezildim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc61dfc2c45c60ee5698c4624bc85d97.mp3 ",
      duration:""
    },
 {
      name:"♫  Doğum Günüm",
      file:" https://cdn.muzikmp3indir.com/mp3_files/98e1e464790b0ab2b84add22cba2a2ab.mp3",
      duration:""
    },
 {
      name:"♫  Ahım Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bd273836e4fd80d1226584496e7eacd4.mp3 ",
      duration:""
    },
 {
      name:"♫ Anam Yokki Derdim Bilsin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/67bef437e5d20b83d07588e330865a93.mp3 ",
      duration:""
    },
 {
      name:"♫ Eledim Eledim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/009eecf828601dca7c3e0d1377022715.mp3",
      duration:""
    },
 {
      name:"♫ Zor Kirve Zor ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b5552e020d27118978035f16b43109bf.mp3 ",
      duration:""
    },
 {
      name:"♫  Kime Suçlu Diyeyim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d59b9b7ab30210cc0f4c8d29f83134bb.mp3",
      duration:""
    },
 {
      name:"♫  Bu Gözler Neler Gördü",
      file:" https://cdn.muzikmp3indir.com/mp3_files/64555869e53550649b704515c4859a39.mp3",
      duration:""
    },
 {
      name:"♫  Aşkını Kalbimden Silemediler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5590142a583259be44bc3f6f53098664.mp3 ",
      duration:""
    },

 {
      name:"♫ Bırakmam Seni ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8fcac271bd6c0e0ef37d5ef93bb47d38.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayret Nasıl Yaşıyorum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2c41b61f6687515e2fd03a8ee623f844.mp3 ",
      duration:""
    },
 {
      name:"♫ Hayatımı Yaşayacağım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/838ca934b964265eac9fb7ac12692c6e.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Gün Bana Döneceksin ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/da025cf95b7fc70e1e531f0519bc65a2.mp3 ",
      duration:""
    },
 {
      name:"♫ Şantaj Montaj ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c1e49941a44619349327faa04b5b6061.mp3 ",
      duration:""
    },
 {
      name:"♫ Bugün Bana Dokunmayın ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c6e61aed754ce02679869b5f2a31d465.mp3",
      duration:""
    },
 {
      name:"♫  Yuvasızlar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7a52a03e57a8c2034c59d7a211a5986f.mp3",
      duration:""
    },
 {
      name:"♫  Mavi Gözler O Biçim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9d20f6523803ad1429e9c0316084641a.mp3 ",
      duration:""
    },
 {
      name:"♫ Güneş Yine Doğacak ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e0088c234957151cfe53257b05a14f96.mp3 ",
      duration:""
    },
 {
      name:"♫ Ceylan Gözlüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e85193b92b35312fb09be8e35ef0a911.mp3 ",
      duration:""
    },
 {
      name:"♫ Garip Anam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/35d439d40e9d3c60cb89e814b27edc95.mp3 ",
      duration:""
    },
 {
      name:"♫ Beni Bende Bitirdiler ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c1318f03b83f7a05b97c57b9dfcdadc5.mp3",
      duration:""
    },
 {
      name:"♫ Sana Söz ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b8ab7ad6fae740b7b6d0b345dbce4055.mp3 ",
      duration:""
    },
 {
      name:"♫ Çeker Giderim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/42b8ef43909ee5b76e3f6e9fede07018.mp3 ",
      duration:""
    },
 {
      name:"♫  Suçum Ne Benim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0c55260e90967291b8bde20c033b610b.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevesim Var ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2b739d0b7b61500b1f515fee79931325.mp3",
      duration:""
    },
 {
      name:"♫  Ana Kucağı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1fc829c738ab6c49974cc0cde6de0fb1.mp3",
      duration:""
    },
 {
      name:"♫ Aşkımız İçin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7cb489006b048522cfa156abf2b14f9f.mp3",
      duration:""
    },
 {
      name:"♫ Sabır Ver ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/42739acbde02b855374f43f587f95484.mp3",
      duration:""
    },
 {
      name:"♫ Kimsem Yok Benim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/66de739f7b01a2d99504f30bda4db8ff.mp3 ",
      duration:""
    },
 {
      name:"♫  Götürün Karşımdan",
      file:" https://cdn.muzikmp3indir.com/mp3_files/56c1ec1835956c624c478721f7d9664e.mp3",
      duration:""
    },
 {
      name:"♫ KaderinTuzakları ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9391ebbae37f7cec2cff3b0045ad3c15.mp3 ",
      duration:""
    },
 {
      name:"♫ Ayrılmam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2068a31ef1894da4f62325099033f8a8.mp3 ",
      duration:""
    },
 {
      name:"♫ Davacıyım Kadere ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/06e0b340bdc1da823afa44c8850c0f13.mp3",
      duration:""
    },
 {
      name:"♫  Koptum Bu Gece",
      file:" https://cdn.muzikmp3indir.com/mp3_files/342b324ecdd93d4d7eeea75935c08712.mp3",
      duration:""
    },
 {
      name:"♫  Karakız Kurbanın Olim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fe682e9000400c30c54295c5fecd907b.mp3",
      duration:""
    },
 {
      name:"♫  Bana Bir Şey Söyle",
      file:"https://cdn.muzikmp3indir.com/mp3_files/97c902b86096c2c4b3a402861aa7c8ad.mp3 ",
      duration:""
    },

 {
      name:"♫ Tam Bir Ay Oldu ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5c7b3fba11d361a5dc49a3c727e58d6f.mp3",
      duration:""
    },
 {
      name:"♫  Bir Bilebilsen",
      file:"https://cdn.muzikmp3indir.com/mp3_files/983173a43388e94bb708f4fa241cdd06.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelemez misin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a40aa0d801a184ec2be1efac9a6f031c.mp3",
      duration:""
    },
 {
      name:"♫  İki Kadersiz Sevdalı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/913579fa669cb5753a0883fba39748b7.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Şehirde İnsan Bitmiş ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a493ab1860d17e0ff1d9fe7be7388fc3.mp3",
      duration:""
    },
 {
      name:"♫ Oy Gülüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8a8308464ec562d8ba1876bb10ff53eb.mp3 ",
      duration:""
    },
 {
      name:"♫ Nice Yıllara ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1c5e4880d59328e362c79f40b48eac75.mp3 ",
      duration:""
    },
 {
      name:"♫ Sevmeyi Dene ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2f4307a4baddb79cb7da921424994014.mp3 ",
      duration:""
    },
 {
      name:"♫ Ağlasam ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a67295e9977f70cdde045f00165aba26.mp3",
      duration:""
    },
 {
      name:"♫  Helalleşelim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3d7814b2b49eeb7272b14c9d25071f45.mp3",
      duration:""
    },
 {
      name:"♫  Sen Sivas'ı Seyret",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f86c318978a31ce6bff8b49e929fcfd6.mp3 ",
      duration:""
    },
 {
      name:"♫ Yanaram Aşkına ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ace90dc72fcd194d6033dd5822342969.mp3",
      duration:""
    },
 {
      name:"♫ Berzi ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a4cef179e7f5f60713b13a18aa930798.mp3",
      duration:""
    },
 {
      name:"♫  Nerelisen",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0e3c553e897bdcdad22a68ce83f444c8.mp3",
      duration:""
    },
 {
      name:"♫ Le Çavraşamın ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/74b9cb6aa91428ed19819b6ccf21dd00.mp3",
      duration:""
    },
 {
      name:"♫  Ağam Ağam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/135f166b206827de0c25373a24f9998a.mp3 ",
      duration:""
    },
 {
      name:"♫ Çiftetelli ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4f24e129b955efc2dce07ec54e9899d0.mp3 ",
      duration:""
    },
 {
      name:"♫  Entarisi Dım Dım Yar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9f174cb3ed0d9fe0d52c3468ed5da805.mp3",
      duration:""
    },
 {
      name:"♫  Kendisi Lazım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a7d68d23f62110a0d0c032caba772aa5.mp3 ",
      duration:""
    },
 {
      name:"♫ Oy Derdo ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9a69d14226379c04ac7f4472ecd77bdc.mp3 ",
      duration:""
    },
 {
      name:"♫ Le Le Yare ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fb61efbf7c0042a6a38259e97f93b33d.mp3 ",
      duration:""
    },

 {
      name:"♫  Seninle Yolumuz Ayrıldı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7b393da501598b498a96e56abfd2a937.mp3 ",
      duration:""
    },

 {
      name:"♫  Öf Öf",
      file:"https://cdn.muzikmp3indir.com/mp3_files/36d5373241d760f0bcfdc1ce76ffb78d.mp3 ",
      duration:""
    },

 {
      name:"♫ Potpori ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f0aec295fc9fb33f52cad18c91b1fde4.mp3 ",
      duration:""
    },

 {
      name:"♫ Toycular ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f76ab5975bed149730d74606af614f2b.mp3 ",
      duration:""
    },

 {
      name:"♫  Bitlis'in Önünde Bağlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50b28437266682e1b96bdd896fdf070a.mp3 ",
      duration:""
    },

 {
      name:"♫ Naze ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bf1edfe9c0d8f53bf02d1c8253cb291e.mp3",
      duration:""
    },

 {
      name:"♫  Barak Söylerim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e19bb27cd05bb9a98f8e2bb9706d924c.mp3",
      duration:""
    },

 {
      name:"♫ Xezal ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/22f720f1ac2c4e84d5f1fc6dcb531b32.mp3 ",
      duration:""
    },

 {
      name:"♫ Gelinmi Sandın ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f2a0804a9f7c6321216d451b94f20440.mp3 ",
      duration:""
    },

 {
      name:"♫ Kizim Seni Ali'ye Vereyim Mi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b4e2c142bf36cba66516f1759905102b.mp3 ",
      duration:""
    },

 {
      name:"♫  Kader Sen Mi Kaldın Bana Gülecek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e76249f4c56ad8ca96a98032881503ca.mp3 ",
      duration:""
    },

 {
      name:"♫ Mesele ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c4084902d4e6ce78d6a8f785ba404dbb.mp3 ",
      duration:""
    },

 {
      name:"♫ Git Güle Güle ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/af98f9d9027c77c1e5c37912c3e293e7.mp3 ",
      duration:""
    },

 {
      name:"♫ Bu Da Geçer ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7f85ce0a820810434a08875961fd7039.mp3",
      duration:""
    },

 {
      name:"♫ Bana Mı Düşer ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e0db380b09cc1c7b1d5952da08292893.mp3 ",
      duration:""
    },

 {
      name:"♫  Islanmışsın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/30e60b9ae92b3019edb5b74bb169450d.mp3",
      duration:""
    },

 {
      name:"♫ Delikanlı Değilsin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/43aefe11c0aa7681105967e8338a27a3.mp3",
      duration:""
    },

 {
      name:"♫ Merak Etme Sen ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/63959570176ecdcd25a0945160b0b186.mp3",
      duration:""
    },

 {
      name:"♫ Sevmeyelim Artık ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/afb63e3c6b59d4906b328d3f7206f32f.mp3 ",
      duration:""
    },

 {
      name:"♫ Sustum Artık ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8456f188c19a2e50d8377d88c3fa3622.mp3 ",
      duration:""
    },

 {
      name:"♫ Hala Seni Seviyorum ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/42ea06db4bee9582c565aaad7a1a5f1a.mp3",
      duration:""
    },

 {
      name:"♫  Sende Ayrılıktansın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5a387a63422080d6995dd539e80100fc.mp3 ",
      duration:""
    },

 {
      name:"♫ Benim Hayatım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fe7bea8f98bdd6536a070fe3d269d034.mp3 ",
      duration:""
    },

 {
      name:"♫ Uykudamısın ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a9468c900730cb61c313e38accee08ab.mp3",
      duration:""
    },

 {
      name:"♫ Sor İstedim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c5bf5a3a95a4ce1e09e90ec77e993f5f.mp3 ",
      duration:""
    },

 {
      name:"♫ Diyarbekir ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5d2b402f89f93af9d830cf6fe2bb5182.mp3 ",
      duration:""
    },

 {
      name:"♫ Arguvana Gidemem ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bbdc0a442947c3a42854506d6c2c1830.mp3 ",
      duration:""
    },

 {
      name:"♫ Mardine ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d5a829257bfa6e5385742f576b19321e.mp3",
      duration:""
    },

 {
      name:"♫ Dünya ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3cbf4e9306b1d9da5fa96a132934c11d.mp3",
      duration:""
    },

 {
      name:"♫  Kader Bize Gülecekmiş Ne Zaman",
      file:"https://cdn.muzikmp3indir.com/mp3_files/805836c6a766dcc30f7efe5eca1489d7.mp3 ",
      duration:""
    },

 {
      name:"♫ Şilele (Kürtçe) ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d2d42840b9f0466ed4b2f555e8a09c7d.mp3",
      duration:""
    },

 {
      name:"♫  Saçımın Akına Bakma Sultanım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e0542f4df99e280a073d007c9b7a2d31.mp3",
      duration:""
    },

 {
      name:"♫ Ki Zava ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/79d50f4dbcd94bf525fdb03954fad6c9.mp3 ",
      duration:""
    },

 {
      name:"♫ Doymadım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e6707df85f515798421310a7106ef682.mp3",
      duration:""
    },

 {
      name:"♫  Aramasın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/53ae1fbd89c278495e7f981b251e40c4.mp3",
      duration:""
    },

 {
      name:"♫ Yetiş ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/942806c349622d2f30a86869a8571861.mp3",
      duration:""
    },

 {
      name:"♫ Yeminim Var ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/529c62bc74b16e1bf0a80d0566a6b9cd.mp3 ",
      duration:""
    },

 {
      name:"♫  Zorundamıyım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/63fc41626da6db48ebd35b856fac5aeb.mp3",
      duration:""
    },

 {
      name:"♫ Hazal ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/01739b00f2f0fc40d0ec8d2f66fecbc4.mp3 ",
      duration:""
    },

 {
      name:"♫ Bir Daha Mı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1a716d467187955c8fe5bee8622497fc.mp3 ",
      duration:""
    },

 {
      name:"♫ Güzeller İçinden ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b968fdee9bf0bb224f69b9b81abc35e8.mp3 ",
      duration:""
    },

 {
      name:"♫  Sivaslıymış",
      file:"https://cdn.muzikmp3indir.com/mp3_files/393a68c1bac70e6939b5c7b4ccd3f013.mp3 ",
      duration:""
    },

 {
      name:"♫ Anam Ağla ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8a73f26a5f0b0a7119877e6322d0bee0.mp3",
      duration:""
    },

 {
      name:"♫ Bayburt ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7fcc3252ff56b3758f8618006606a613.mp3 ",
      duration:""
    },

 {
      name:"♫ Kalleşin Biri ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4254765600e4638ea757eedbf10890c1.mp3 ",
      duration:""
    },

 {
      name:"♫ Gözün Aydın ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0cd5bac942147b908e37762399ee55fe.mp3 ",
      duration:""
    },

 {
      name:"♫  Gül Kundam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7337ff530720656021579f8ebf8fb12e.mp3 ",
      duration:""
    },

 {
      name:"♫  Sevmem Anamdan Başka",
      file:"https://cdn.muzikmp3indir.com/mp3_files/548450da558bbe337216d90f6d7e3a19.mp3 ",
      duration:""
    },

 {
      name:"♫ Helal Et ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/47ef057471b3b9a817a1ede881144cde.mp3",
      duration:""
    },

 {
      name:"♫ Açma Bugün Perdeleri ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/18c24c7e1e39713c761069baffb2f5da.mp3",
      duration:""
    },

 {
      name:"♫ Seven Ölür Yar İçin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/af0ab1510f4de31994c532818b839cdf.mp3",
      duration:""
    },

 {
      name:"♫ Unutamadım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d3d6139611e8d58ff82d6db06a2a8810.mp3 ",
      duration:""
    },

 {
      name:"♫ Sürgün Sevdam ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1693778354ead20bacd8e0b2f6267699.mp3",
      duration:""
    },

 {
      name:"♫ Ağlaram ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/adf5f230b6fb18248cb92edd55e4e88a.mp3 ",
      duration:""
    },

 {
      name:"♫ Düşenin Dünyada Dostu Yok İmiş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/506f1608b41839f15adcaf41bbb6d365.mp3 ",
      duration:""
    },

 {
      name:"♫  Su Getir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c223322bd900c9bbec82df9f5fc84d0a.mp3 ",
      duration:""
    },

 {
      name:"♫ Dertli Dertli ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/401848c3414d7814e7def0542992fbb4.mp3",
      duration:""
    },

 {
      name:"♫  Zaza",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4ba7dd3c0f32e9b44ddbad6d1f654178.mp3 ",
      duration:""
    },

 {
      name:"♫ Zavallı Ömrüm ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2efd6591dafffdc5f924da4861621877.mp3",
      duration:""
    },

 {
      name:"♫ Munzur ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d4f6261f79e1078f00f208cb93c192e5.mp3 ",
      duration:""
    },

 {
      name:"♫ Şev (Akşam) ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/251ab94abe5b59e119aad1fa27d54cfa.mp3",
      duration:""
    },

 {
      name:"♫  Yaram İçerden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f0d9c20bde7cb24d60558c02d4bfa8c8.mp3 ",
      duration:""
    },

 {
      name:"♫ Yaram İçerden ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f0d9c20bde7cb24d60558c02d4bfa8c8.mp3",
      duration:""
    },

 {
      name:"♫ Arguvanlım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/89d949072aaf3bf59281cca40c23a98f.mp3",
      duration:""
    },

 {
      name:"♫  Memir Ha Memir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b0a5dd99845e8084efadc248e7332857.mp3 ",
      duration:""
    },

 {
      name:"♫  Lanet Olsun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1209d6fadf8d1d111868432054c05140.mp3 ",
      duration:""
    },

 {
      name:"♫ Antebin Hamamları ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/antebin-hamamlari-R7B6DZMcAs-0.mp3 ",
      duration:""
    },

 {
      name:"♫ Ah Gönlüm ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5321df956563508246af47dae364a37a.mp3",
      duration:""
    },

 {
      name:"♫  Gel Gör Aney",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6e610f5a6598325358f20345c0361699.mp3",
      duration:""
    },

 {
      name:"♫ Düş Kötüye ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8467b45a5397c3832a5d3913305d7226.mp3 ",
      duration:""
    },

 {
      name:"♫ Sunam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e0c111f6f4b44078e07959abf6c93c3c.mp3 ",
      duration:""
    },


 {
      name:"♫ Aralarda ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/616362f6dabd219ad989b3e8795300b2.mp3",
      duration:""
    },
 {
      name:"♫ Yarim Seni Benden Ayıramazlar  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/05bd8f5442fdd12021c3ca669f8e2298.mp3 ",
      duration:""
    },
 {
      name:"♫   Sevim Yıkılsın Evim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/97336f97bec54cd8fc1a60a83ec4b5ba.mp3 ",
      duration:""
    },
 {
      name:"♫ Alvarada Deli Gönül  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/57e7e50fa85170a66539f4ea1be261af.mp3  ",
      duration:""
    },
 {
      name:"♫  Yar Yemman ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b3c7447b398f76a5ae7183014aee79f2.mp3 ",
      duration:""
    },
 {
      name:"♫  Haberim Yok ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/787d4b8e8b07669cd3205150a2f5bbbe.mp3 ",
      duration:""
    },
 {
      name:"♫  Hey Nare ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/678c8182721922cadbca5ee7c2d0a92e.mp3 ",
      duration:""
    },
 {
      name:"♫ Ateş Düştüğü Yeri Yakar  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fd6a2591ceca3822a029ee86b855cd58.mp3 ",
      duration:""
    },
 {
      name:"♫  Birde Sen Beni Ara ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fcb881d127c53748f99fc640f78ce47c.mp3  ",
      duration:""
    },
 {
      name:"♫ Emmi  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/64e51b9981f236d4710c30a82c8e84ff.mp3 ",
      duration:""
    },
 {
      name:"♫  Gelsene ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/25f08f2cdf7b493538c79f027f6e43f1.mp3 ",
      duration:""
    },
 {
      name:"♫  Dertli ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8dfb3cdf7b66d5245777e9553bdb449f.mp3 ",
      duration:""
    },
 {
      name:"♫ Küstüm  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c81780878141c83e65362771be580c0f.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalan Oldu Ömrüm Benim  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/862726e59951016567f5de3d63c31086.mp3 ",
      duration:""
    },
 {
      name:"♫  Yemman  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d2a6d3dbbcd2749fc041474231c4341a.mp3 ",
      duration:""
    },
 {
      name:"♫  Gel Gör Aney ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5133b6d1568dd2882c92defd5d30bb66.mp3  ",
      duration:""
    },
 {
      name:"♫  Kar Yağmış Başıma Benim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0cb618a734ee831fd381164f7f529d8b.mp3 ",
      duration:""
    },
 {
      name:"♫  Yiğit Kirvem ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/86ed27d13573a36022ace4da611f7674.mp3 ",
      duration:""
    },
 {
      name:"♫  Vay Lele ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fd99c46b960e9a1b1e6cedff1c728953.mp3 ",
      duration:""
    },
 {
      name:"♫ Meyro  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cc79aea1803229c1d9565987135cf9a9.mp3 ",
      duration:""
    },
 {
      name:"♫  Terketmedi Sevdan Ben ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/98365fd495749a0a2bf44b2521052324.mp3 ",
      duration:""
    },
 {
      name:"♫ Mor Dağlar  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3ba18b08a34653c6ce2ea3aa50b5c589.mp3 ",
      duration:""
    },
 {
      name:"♫  Menşure Hanım ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/428a8ba2990b74f6420b4cb45518c7b5.mp3",
      duration:""
    },
 {
      name:"♫  Vur Da Git ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/246121989025be4d87425b87ae7bddd2.mp3  ",
      duration:""
    },
 {
      name:"♫ Oy Havar  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/16a0f045e40477c9af68b287669e3f38.mp3 ",
      duration:""
    },
 {
      name:"♫  Etek Sarı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fe2a483e2771e59e53194d5ebf5fdc2b.mp3 ",
      duration:""
    },
 {
      name:"♫ Bu Muydu  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5ac17ce533bb3ca2bb83da5377cf5bcf.mp3 ",
      duration:""
    },
 {
      name:"♫ Narini  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7bd5791dac87360d0056c956df0b2c02.mp3 ",
      duration:""
    },
 {
      name:"♫ Hezalle  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/930b18c961d5c3fc4348d1ca80ee8b45.mp3  ",
      duration:""
    },
 {
      name:"♫ Seher Yıldızı  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f7f983c0219742ab556328955b5869f6.mp3  ",
      duration:""
    },
 {
      name:"♫  Pirimi Ararım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9ec1c2df443ce8b28d52a1bbbde7bce4.mp3 ",
      duration:""
    },
 {
      name:"♫  Lele Kirvo ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4795387c66be16d1382ef474893c0096.mp3  ",
      duration:""
    },
 {
      name:"♫ Sivas Ellerinde Sazım Çalınır  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/09c500fee7520a6adea7e67863af5aa3.mp3 ",
      duration:""
    },
 {
      name:"♫  Gönlüme ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7eee6eb1daac65580d6d64db25b9df1d.mp3 ",
      duration:""
    },
 {
      name:"♫ Halay  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1b03eaca9f1926dd9fd6a6fda4b7cec4.mp3 ",
      duration:""
    },
 {
      name:"♫ Oy Dağlar  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fa7706cbf93733427ae9652ac4ef8431.mp3 ",
      duration:""
    },
 {
      name:"♫  Ataşına Düştüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f16d1141e26cc945a17689559337e8d5.mp3  ",
      duration:""
    },
 {
      name:"♫  Nare ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3b58cf8febfd19875b68e4b556190477.mp3  ",
      duration:""
    },
 {
      name:"♫  Ceylanım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/88b62219cc785fa7b2ad15e391310636.mp3 ",
      duration:""
    },
 {
      name:"♫  Belli Belli ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3b7220348d87878465a9ac2d73cb39bf.mp3 ",
      duration:""
    },
 {
      name:"♫  Can Cana ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7256d35b92389b83f9b5c63b9c1bed24.mp3 ",
      duration:""
    },
 {
      name:"♫  Söyle Kirvem ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/cddecc414e9d4ec1c3582028fd18b24e.mp3",
      duration:""
    },
 {
      name:"♫  Yanmışam ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1ec0338fc569c7f37ac7f76c898e89c5.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşkına Düştüm  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/40428baa0953981b3d9c61d64fc1880d.mp3 ",
      duration:""
    },
 {
      name:"♫  Beter Olmuşum ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/244db9e803e652df94b93a9ea9e21de3.mp3 ",
      duration:""
    }, {
      name:"♫  Niye Gönül ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9474d0e9d4026fb7db2b92ca238f938c.mp3 ",
      duration:""
    },

 {
      name:"♫  Zeyno ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/86c7f26b5db8e0d295221424f2e67d5b.mp3  ",
      duration:""
    },
 {
      name:"♫  Sevdigim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/779d9b16e2efe5ef7fedecd9a24513c1.mp3 ",
      duration:""
    },


 {
      name:"♫  Mamudo ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2829f4665d088d1a869150c0005e44f8.mp3 ",
      duration:""
    },
 {
      name:"♫  İmam Hüseyin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6d68a7cb35d62f38a5eac88f0e3cef6e.mp3 ",
      duration:""
    },


 {
      name:"♫  Deli Fırat ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/153441d5faf47a93927646550b6ab72b.mp3 ",
      duration:""
    },
 {
      name:"♫  Dersimo ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/6b57f63e7d36b78c932cbd112594f6ff.mp3",
      duration:""
    },
 {
      name:"♫  Dayanamirem ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/6aacd0a6c97fcb51ba0851914bb57c4b.mp3",
      duration:""
    },
 {
      name:"♫ Dön Maralım  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1a777076f84ad941d2644c8441ea6c9a.mp3 ",
      duration:""
    },

 {
      name:"♫  Hay Gidi ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d14cfac60222209537d89cf224e4e051.mp3 ",
      duration:""
    },
 {
      name:"♫  Yazık Ettiniz ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d847d97699bfb9284d91c2da90a3018a.mp3 ",
      duration:""
    },
 {
      name:"♫ Kar Yağmış Başıma  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5423a30e63f951e21b31a66a292b0883.mp3  ",
      duration:""
    },
 {
      name:"♫  Ağlayı Ağlayı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5f9e570d5f29a4fa7ad4b1003de958d4.mp3 ",
      duration:""
    },

 {
      name:"♫ Oy Dağlar  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bcf47468d7a4d63dd9260b118224a92b.mp3 ",
      duration:""
    },
 {
      name:"♫  Gitme Turnam  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/479935479b950be1f7605d8502307259.mp3 ",
      duration:""
    },
 {
      name:"♫  Le Le Kirvo ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aaf4ec3cd9bc8f53c2168351900bc5c9.mp3  ",
      duration:""
    },
 {
      name:"♫ Değirmen Başında  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ec4ae21e6ec480bd560ddd0eb7e9b64c.mp3 ",
      duration:""
    },

 {
      name:"♫ Kestane ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7b439d5d6e6c36aef5235f1b8a59f64a.mp3  ",
      duration:""
    },
 {
      name:"♫  Hezalım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/851b3206d9632cb758fbedc66d7d7300.mp3 ",
      duration:""
    },
 {
      name:"♫  Hadi Leylim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1ab3d4c6a9f928b5ecbf27c90a01572b.mp3 ",
      duration:""
    },
 {
      name:"♫  Zamanıyım Ben ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e66177d2edf89fdbf8eb773af730b0ec.mp3 ",
      duration:""
    },


 {
      name:"♫  Kara Erik Cağala ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bcf25522a0c6111989a01f77e8a5e3cc.mp3 ",
      duration:""
    },
 {
      name:"♫ Bundan Sonra  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e50bc189cf92270464e3b83b4e636155.mp3 ",
      duration:""
    },
 {
      name:"♫  Meyhaneci  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6d6be068f948d67ba3a72d35c380f3c4.mp3  ",
      duration:""
    },
 {
      name:"♫ Yaktım Çıranı  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/be563063c1d7d3e30405adecf913bef7.mp3 ",
      duration:""
    },


 {
      name:"♫   Ya Herro Ya Merro",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f8f1771029486ef09736e7e7c4332953.mp3 ",
      duration:""
    },
 {
      name:"♫ Kritik Etme Beni  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ccc999bd7da2fac4832b0faa1e77e2a4.mp3 ",
      duration:""
    },
 {
      name:"♫ Hamamcı Teyze  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e66f135656b4952fd91d0fdfbc438e19.mp3  ",
      duration:""
    },


 {
      name:"♫ Gülüm Odur ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/926c9b4ed4ada281b0dfd3637aa5881f.mp3 ",
      duration:""
    },
 {
      name:"♫ Ey Kara Gözlü Yar  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/395b73a72be3069d8ed6ac607098740d.mp3  ",
      duration:""
    },
 {
      name:"♫  Handan ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d3592d1eaab6ef17400aec572c823d00.mp3  ",
      duration:""
    },
 {
      name:"♫ Eyvah  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fa2c4bbad272de684c09744de99c85f7.mp3  ",
      duration:""
    },


 {
      name:"♫  Geri Dön ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/2b563b9b8a28e3f73a11a8715ba9bd02.mp3 ",
      duration:""
    },
 {
      name:"♫  Postacı ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/51995b35f421c7d358e876d8f66d850e.mp3 ",
      duration:""
    },
 {
      name:"♫ Geri Ver Beni  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/d21c1feaeb6d80d64a49d2c22862cbe1.mp3 ",
      duration:""
    },
 {
      name:"♫  Seven Olmaz Ki ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cffc66a743299a9a297e4ed16db65944.mp3   ",
      duration:""
    },


 {
      name:"♫ Özür Dilerim  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/be77f7d79c26058ecbbfe40e6ebf1f95.mp3 ",
      duration:""
    },
 {
      name:"♫ Gecenin Bir Yarısı  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/35fcc24a3323d090f40e55037755b7c1.mp3 ",
      duration:""
    },
 {
      name:"♫  Unutmak Yalan ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/2517a9df8467ac0daf28b9479fe78d91.mp3 ",
      duration:""
    },
 {
      name:"♫  Düğünümüz Var ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/744ca1bcdee1f2b7c623d7d74ac5c6d8.mp3  ",
      duration:""
    },



 {
      name:"♫  Hayat ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/85f81b6a50fd3c772300d9c4503b28f6.mp3 ",
      duration:""
    },
 {
      name:"♫  Git Yoluna ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5a91e8853f210f94b3a35cfc5bf328e5.mp3  ",
      duration:""
    },
 {
      name:"♫   Aldır Beni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5ad8126e2f05efa109c01ecfc210c959.mp3  ",
      duration:""
    },
 {
      name:"♫  Bana Biraz Zaman Lazım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a39a84d2ac34471ddb032573f6a41898.mp3  ",
      duration:""
    },
 {
      name:"♫  Hastayım Sana ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/40176c22b0c656e44c8048ea31d69c19.mp3 ",
      duration:""
    },
 {
      name:"♫  Sonsuz Aşkım  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e484abd7140242ff08bcd4c7a162f604.mp3  ",
      duration:""
    },

 {
      name:"♫  Gelsene ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/0cdde304accc9ccb873c53c6f4b3fb36.mp3 ",
      duration:""
    },
 {
      name:"♫  Gönül Yarası ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ac3fe4b3158a55e02d23d780e72c901a.mp3  ",
      duration:""
    },
 {
      name:"♫ Diyarbekiri Görmeyesen  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/f4757990665a92335b663883698e0b35.mp3 ",
      duration:""
    },
 {
      name:"♫  Kal Benim İçin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f2e22d915ca64f15d607a6d736329b76.mp3  ",
      duration:""
    },

 {
      name:"♫ Mahkeme  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/6386bd1cb9b697be51f8ccd302692f53.mp3 ",
      duration:""
    },
 {
      name:"♫  Adaletsiz Seçim ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/82e1fe82e4923bb8dfbc037d259b4903.mp3 ",
      duration:""
    },
 {
      name:"♫ Sende Kaldı Yüreğim  ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/c7dff51761834977014a4f87ea003904.mp3 ",
      duration:""
    },
 {
      name:"♫  Minnoş ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/acbc8e13165e3567cd60c008e29b87e5.mp3  ",
      duration:""
    },
 {
      name:"♫  Minnoş - Remix ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b87e0362c20a27134bef42f7bcca9ed2.mp3  ",
      duration:""
    },







 {
      name:"♫  Kiremitte Buz Musun ",
      file:"  https://cdn.muzikmp3indir.com/mp3_files/df3030d7990382646fc7662fe5a60934.mp3 ",
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