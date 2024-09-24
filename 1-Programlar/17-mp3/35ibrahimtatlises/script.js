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
      name:"♫ Yaylalar (Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/yaylalar-remix-viB6kJlDN1-0.mp3",
      duration:""
    },
   {
      name:"♫ Yaylalar (Clup Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/yaylalar-clup-remix-qSk3pOou6Z-0.mp3 ",
      duration:""
    },
   {
      name:"♫ Gelmesin (Burak Yılmaz Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aae815a07fe0033b0d03a87d49e1718c.mp3 ",
      duration:""
    },
   {
      name:"♫ Gelmesin (Fatih Yılmaz Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c410c1929ff1b4594cbe694373862d30.mp3 ",
      duration:""
    },
   {
      name:"♫ Gelmesin (İlkan Göksu Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fe4f6111e4366b753d89941d4b23fa4b.mp3",
      duration:""
    },
   {
      name:"♫ Gelmesin (Baran Yağmurlu Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/776ef77ff1f889a2ddbe5cf16b88775c.mp3",
      duration:""
    },
   {
      name:"♫ Gelmesin (Erdem Düzgün Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dbd05b5c8e3dc85b8aad3e64ea6cd63b.mp3 ",
      duration:""
    },
   {
      name:"♫ Tren Gelir Hoş Gelir (Uğur Yılmaz Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6434437e3ebb3ebc6867b46620ea8473.mp3",
      duration:""
    },
   {
      name:"♫ Tren Gelir Hoş Gelir (Samet Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0083def9fbdce9940d20f068be9cbfa8.mp3 ",
      duration:""
    },
   {
      name:"♫ Yalanmış (Ufuk Kaplan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0627f30c86b11ec9a1dbb7d2d3c29d84.mp3 ",
      duration:""
    },
   {
      name:"♫ Senin Papucun Dama (Furkan Demir Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8e303710f9bf5184a5721931eb6a3262.mp3 ",
      duration:""
    },
   {
      name:"♫ Medineye Varamadım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5d24e1bfd52087aa97eee753340358f9.mp3 ",
      duration:""
    },
   {
      name:"♫ Yalan (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3c9c1e687b39d6823902627171508cfa.mp3 ",
      duration:""
    },
   {
      name:"♫ Mutlu Ol Yeter (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f49bbd549d99cb00a2f07246b93961b1.mp3 ",
      duration:""
    },
   {
      name:"♫ Bu Nasıl Sevmek (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9c3e384b72b656e7369e49410c2476c1.mp3 ",
      duration:""
    },
   {
      name:"♫ Allah Allah (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1d0e5889fe3db0a547e7b4c720a2f416.mp3 ",
      duration:""
    },
   {
      name:"♫ Nankör Kedi (Y. U. Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ec517ba5793c6520b8c0e3e74a5aeb73.mp3",
      duration:""
    },

   {
      name:"♫ Nankör Kedi, Mavişim (feat İdo Tatlıses)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/04e3573174db46bc12a4459ffc6ab6d0.mp3 ",
      duration:""
    },

   {
      name:"♫ Mutlu Ol Yeter (HCY Trap Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2479598f376675f6dc2033804b27e096.mp3",
      duration:""
    },

   {
      name:"♫ Allah Allah (Moombahton Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/00f89a33480a81b5405e4351107a0aa8.mp3",
      duration:""
    },

   {
      name:"♫ Leylim Ley (Selçuk Şahin Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/030cee55c73bac74895dcfd6cbcec790.mp3 ",
      duration:""
    },

   {
      name:"♫ Ağrı Dağı (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6304c7bbb893e8cc98f4f25c26e6df84.mp3 ",
      duration:""
    },

   {
      name:"♫ Biz Ne Ayrılıklar Görmüş Adamız (Turkish Trap Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e3ec2d72ba5c9ae787f481bac96d0300.mp3",
      duration:""
    },

   {
      name:"♫ Bugün Yine Bana Bana Ayrılmak Düşer (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2e4d883796d8c5fc029360489a42fc67.mp3 ",
      duration:""
    },

   {
      name:"♫ Aramam (Hakan Keleş Remix",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3ccf505a7a207ba797a162830aa662f9.mp3",
      duration:""
    },

   {
      name:"♫ Gelmezsen Gelme (Dj Tolga Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/462e8a7d019e5ee5973c0837ee733e9a.mp3 ",
      duration:""
    },
   {
      name:"♫ Vur Gitsin (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cebe73e1eeed2ceebfa9c61b91aecbca.mp3 ",
      duration:""
    },

   {
      name:"♫ Aramam (Dance Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e174a5be32f3d2ac61ef4975ae34b54d.mp3 ",
      duration:""
    },

   {
      name:"♫ Senden İnsaf Diler Yarın (Samet Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9dce79a6753b700eb1d910fd9e37cfeb.mp3 ",
      duration:""
    },

   {
      name:"♫ Ne Sevdalar Yaşadım (Trap Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8ea726a0962d05ce2a3c6879a12b00da.mp3 ",
      duration:""
    },

   {
      name:"♫ Kurşuna Gerek Yok (Allegro Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a97c55c238b5ad0ce545853729aa11a5.mp3 ",
      duration:""
    },

   {
      name:"♫ Neye Yarar (Trap Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b14326652a7d2e9b177fe974a7f719d6.mp3 ",
      duration:""
    },

   {
      name:"♫ Sen Yoksan Her Şey Eksik (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/22478d76994c6ea42db6a7f9ab803115.mp3 ",
      duration:""
    },

   {
      name:"♫ Yalan (Eren Özkaya Trap Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0239c0d39b48120d729958004103865d.mp3 ",
      duration:""
    },

   {
      name:"♫ Yalnızım Dostlarım (Trap Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eddb509f258d95a06f8e71f48e03a3f0.mp3 ",
      duration:""
    },

   {
      name:"♫ Kız Ben Seni Vurmazmıyam (Arabesk Trap Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/76cf7e83068837950be694b735a4e22f.mp3",
      duration:""
    },

   {
      name:"♫ Nankör Kedi (Trap Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a3e25915582fc3f018a449fc3b48cf3b.mp3",
      duration:""
    },

   {
      name:"♫ Bulamadım (Enz Trap Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4b65233c990d9682b4ffdfc737885bf4.mp3 ",
      duration:""
    },

   {
      name:"♫ Akşamdan Akşama (Ferit Candan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2094493b4394f63dc19f5428e44cad89.mp3 ",
      duration:""
    },

   {
      name:"♫ Antebin Kalesi (Arabic Trap Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d4eeb223e28ec1c3cf16b223a50f04d0.mp3",
      duration:""
    },

   {
      name:"♫ Ah Keşkem (Engin Özkan Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9f3f5f9f1f8eef6677375db37758d7ce.mp3",
      duration:""
    },

   {
      name:"♫ Gelmezsen Gelme (Halil Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fb558897722e2cb5f3cfd85fc57e6316.mp3 ",
      duration:""
    },

   {
      name:"♫ Aramam (Halil Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f8e44db618ee5753ae11dfbf27591e64.mp3 ",
      duration:""
    },

   {
      name:"♫ Senden İnsaf Diler Yarın (Halil Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7a49d1ba0970a254f81c8183ee4e582a.mp3 ",
      duration:""
    },

   {
      name:"♫ Haydi Söyle (Halil Yıldırım Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/95fdf9012ab5e31ac194c9effb2cc791.mp3",
      duration:""
    },

   {
      name:"♫ Rolling in the Deep (feat Adele)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/19916fdb8e52c5e5584fc789ecd86150.mp3 ",
      duration:""
    },

   {
      name:"♫ Ağrı Dağı (Engin Özkan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/528f99a4f9d6439185f0019720c824ed.mp3 ",
      duration:""
    },

   {
      name:"♫ Ne Sevdalar Yaşadım (Halil Yıldırım Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e34fd771cd0b7546d41e819f087a91d6.mp3",
      duration:""
    },

   {
      name:"♫ Mavişim (Furkan Kılınç Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e37285282bc2c1ea18e2fb74d0f3ff44.mp3",
      duration:""
    },

   {
      name:"♫ Dom Dom Kurşunu (Furkan Demir Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/199d3646a86b593101c0b744d6540c12.mp3 ",
      duration:""
    },

   {
      name:"♫ Tosuno (Samet Yıldırım Remix)",
      file:"ttps://cdn.muzikmp3indir.com/mp3_files/5a67c3849cbf0c590ec4300b31e99067.mp3 ",
      duration:""
    },

   {
      name:"♫ Tomurcuk (Engin Özkan Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ac16811e1cf8d2fbe23318673d158ad7.mp3",
      duration:""
    },

   {
      name:"♫ Mavişim (Adele Mix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9999c03489b07ee4cccdf08a5a494497.mp3 ",
      duration:""
    },

   {
      name:"♫ Leylim Ley (Batuhan Keskin Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4e4a8b142cdd5a07a3a77bda101157c9.mp3 ",
      duration:""
    },

   {
      name:"♫ Dönmüyor Geri (Engin Özkan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/98257d90996afcb0335b79cfe2bb0aee.mp3 ",
      duration:""
    },

   {
      name:"♫ Gelmezsen Gelme (Ufuk Kaplan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/878387d130c56d3877d56823c0ea6f68.mp3 ",
      duration:""
    },

   {
      name:"♫ Tren Gelir Hoş Gelir (Batuhan Kesikn Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/247ae98f21ced4f2f261a94da5e02ad5.mp3 ",
      duration:""
    },

   {
      name:"♫ Bir Kulunu Çok Sevdim (Tarık İster Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/22bd709422a23711e0a26d656b4af105.mp3",
      duration:""
    },

   {
      name:"♫ Dom Dom Kurşunu (feat Dua Lipa)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3c131eb1ebd0efe44c5f1d2054d6efe7.mp3 ",
      duration:""
    },

   {
      name:"♫ Tren Gelir Hoş Gelir (Ufuk Kaplan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/01e6194f1431cb1c595b56e0f5768a3a.mp3 ",
      duration:""
    },

   {
      name:"♫ Kız Ben Seni Vurmaz Mıyım (Erkan Kılıç Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/51122b2721fd566b3fd378464b60d3f8.mp3 ",
      duration:""
    },

   {
      name:"♫ Dom Dom Kurşunu (EK Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f41d007f3734a07f8d02fa13cb9844c2.mp3",
      duration:""
    },

   {
      name:"♫ Esmersen Güzelsin (Halil Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9ddcd3548969749f3cdef8631560e947.mp3 ",
      duration:""
    },

   {
      name:"♫ Gelmesin (Samet Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9cd52b747dbd670f88ecdb0108147630.mp3 ",
      duration:""
    },

   {
      name:"♫ Vay Vay Zara (Samet Yıldırım Hakan Keleş Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/010f4d03f0fcd59d7f07612ec9086703.mp3 ",
      duration:""
    },

   {
      name:"♫ Ben Ne İnsanlar Gördüm (Engin Özkan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/52c0a669be8bc2d68416dec127b510cf.mp3 ",
      duration:""
    },

   {
      name:"♫ Urfa Sana Küsmüş (Halil Yıldırım Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8408cbebde32d277ceef2fe7d70095db.mp3",
      duration:""
    },

   {
      name:"♫ Ley (Ufuk Kaplan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5d0b262b58b4e5ec6a703f133ff09d83.mp3 ",
      duration:""
    },

   {
      name:"♫ Fesupanallah (Engin Özkan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3d94d8592d460c6e3967af55cf70d0e2.mp3 ",
      duration:""
    },

   {
      name:"♫ Tamam Aşkım (Furkan Demir, Fatih Yılmaz Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d8672b2262d4723d6688856ab31ed116.mp3 ",
      duration:""
    },

   {
      name:"♫ Bir Ayrılık Şarkısı Seç (Halil Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a752889c536609480e7c419deacf192.mp3 ",
      duration:""
    },

   {
      name:"♫ Neden (Halil Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/467693d70b415326ac2331d713580184.mp3 ",
      duration:""
    },

   {
      name:"♫ Yalan (Ufuk Kaplan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0c6e7768c5c35b8b2bf66756962af61c.mp3 ",
      duration:""
    },

   {
      name:"♫ Beni Benden Alırsan (Ufuk Kaplan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/44024f1c1b8f84bb441dde1097bfc6ca.mp3 ",
      duration:""
    },

   {
      name:"♫ Tamam Aşkım (Engin Özkan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6b2898b75b339af5c1bbd2581cbd208d.mp3 ",
      duration:""
    },

   {
      name:"♫ Ah Keşkem (Samet Yıldırım Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/31ecdcb5d331f3e4c2cfd0f7c79f1f31.mp3 ",
      duration:""
    },

   {
      name:"♫ Ayşem (Engin Özkan Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d0b39524a0a858253a7a772a70167c61.mp3",
      duration:""
    },

   {
      name:"♫ Gideceğim (Remix)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/30e05a8fe9a0f9b8d549712797c0387c.mp3",
      duration:""
    },

   {
      name:"♫ Papucun Dama (feat Cejn Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6215a23ad514e147ecafec04c354475e.mp3 ",
      duration:""
    },

   {
      name:"♫ Bütün Asklar Yalanmış (Engin Özkan Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a094813e42c62f13846f8de4fed47ed2.mp3 ",
      duration:""
    },

   {
      name:"♫ Eşarbını Yan Bağlama (Furkan Demir, Kadir Koca Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9223e3d28842301dff0fa4beb278b6e3.mp3 ",
      duration:""
    },

   {
      name:"♫ Ağamda Şimdi Gelir (Erdem Düzgün Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/317d147cded09ff2f7e08f538e6275db.mp3 ",
      duration:""
    },

   {
      name:"♫ Aramam (Furkan Demir Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8d148822a4ac8051f8df2832a2cb1e86.mp3 ",
      duration:""
    },

   {
      name:"♫ Leblebi Koydum Tasa (Samet Ervas Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/07fd5e7f55bef076952e4806fde97bea.mp3 ",
      duration:""
    },

   {
      name:"♫ Çakmak Çakmağa Geldik (Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/48a31ede3f17defc0d61f9c49ad604ad.mp3 ",
      duration:""
    },

   {
      name:"♫ Eyvah Neye Yarar (Furkan Demir Remix)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/57e6eff976bb2a0113f178c298f88c03.mp3 ",
      duration:""
    },

    {
      name:"♫ Sevdim de Sevilmedim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5fefdf62543a56a36aa8070fdf3104f7.mp3 ",
      duration:""
    },

    {
      name:"♫ Ne Talihsiz Biriymişim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5d9b02dca28d152cac0ddbe70d84c5cd.mp3 ",
      duration:""
    },


    {
      name:"♫ Ararken Izdırap Buldum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1ea4ad0b0343479a967fb84561c8f97f.mp3 ",
      duration:""
    },
 {
      name:"♫ Yazık Oldu Gençliğime ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dc099ca6323495a328da757437dca749.mp3 ",
      duration:""
    },
 {
      name:"♫ Züleyha ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a6e462513be399d3b142fe72639bb168.mp3 ",
      duration:""
    },
 {
      name:"♫ Niye Çattın Kaşlarını  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/42b3b8ad9108b3aa4ba7447d9dca0104.mp3 ",
      duration:""
    },
 {
      name:"♫ Yeter Allahım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9f1e3ed0a0e8f07acf263a396cf804e7.mp3 ",
      duration:""
    },
 {
      name:"♫ Sivastan Çıktım Yola ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13b85d6d4d245366481ae9f0e1b8bf57.mp3 ",
      duration:""
    },
    {
      name:"♫ Nar Tanesi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4c98529a0ccab5391abd3b231c6c8f47.mp3 ",
      duration:""
    },
    {
      name:"♫ Asker Mektubu ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5b351ece20b5de7c591f8d993b3532f1.mp3",
      duration:""
    },
    {
      name:"♫ Aşkın Beni Deleyledi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b00d0f4e6ed225345552991881eeda94.mp3 ",
      duration:""
    },
    {
      name:"♫ Ah Edip Ağlama Zülfü Siyahım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b232a5c25e16b9ed7fdc4a47483bbf02.mp3 ",
      duration:""
    },
    {
      name:"♫ Tatlı Dile Güler Yüze ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5bd1bc6087054d4f708c78358c86f7fa.mp3 ",
      duration:""
    },
    {
      name:"♫ Karnı Büyük Koca Dünya ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/99a2df0179c60fea80fc2d80878709fb.mp3 ",
      duration:""
    },
    {
      name:"♫ Eller Kına Gözler Sürme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/99380ba93223c8b8438bf263aa663a82.mp3 ",
      duration:""
    },
    {
      name:"♫ Ayağında Kundura ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c384dff98be43c583cc79f4dcf7472f0.mp3 ",
      duration:""
    },
    {
      name:"♫ Ruhumda Bir Sıkıntı Var ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed2e7655bb6d7b0f5b359f366eb80f69.mp3 ",
      duration:""
    },
    {
      name:"♫ Bari Bari ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eb1f6fc4c8f6b85c3ae7a06596f0f1cd.mp3 ",
      duration:""
    },
    {
      name:"♫ Erzurum Dağında ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bba31a74f3066b72bffe7984f45a322d.mp3 ",
      duration:""
    },
    {
      name:"♫ Kara Yazı Yazmadım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a953130a644a6ccf2018a94d76e1ecb8.mp3 ",
      duration:""
    },
    {
      name:"♫ Seven Bahtiyar Olmaz ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/564fa61555c293f6934a7b35868ca85a.mp3",
      duration:""
    },
    {
      name:"♫ Dam Üstünde Un Eler ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fbea69b3bd47a3882ecc632fc2a2cdf1.mp3 ",
      duration:""
    },
    {
      name:"♫ Bayramın Mübarek Ola ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/996ff8989d497f5bfad22188857d98b5.mp3 ",
      duration:""
    },
    {
      name:"♫ Düşenin Dostu Yoğumuş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8b2a2ef8813f667b8280f94848c09357.mp3 ",
      duration:""
    },
    {
      name:"♫ Doldur Gardaş İçelim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d7e59fe9ae71882b5dcd0694e933b0c8.mp3 ",
      duration:""
    },
    {
      name:"♫ Doy Doy ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/92329f20e82e4a900d260777ada196f4.mp3 ",
      duration:""
    },
    {
      name:"♫ Dünya Böyle Kurulmuş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/17a7cf1a025fca2b1ff767944e565a4e.mp3 ",
      duration:""
    },
    {
      name:"♫ Aman Eşref",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bd1ec0025e6b3170e021a6f70ad6b51e.mp3 ",
      duration:""
    },
    {
      name:"♫ Veremli Kız ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1a18322ebeda05cab49e19e26c0e2320.mp3 ",
      duration:""
    },
    {
      name:"♫ Alıştım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9f2aaaae1d9525bcba0a96d3d0c2d23b.mp3 ",
      duration:""
    },
    {
      name:"♫ Ben Köylüyüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/28e3ac84bc66cca13c8676ff3943f3ef.mp3 ",
      duration:""
    },
    {
      name:"♫ Gurbet Garipleri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/abab458c5216c1ed74aee005890f94bd.mp3 ",
      duration:""
    },
    {
      name:"♫ Gördükçe Seni ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fba5629a323f10c3bc75493383fbf65f.mp3 ",
      duration:""
    },
    {
      name:"♫ Neden Saçların Beyazlanmış",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e31a48056b8e88c8da99bd672ff6264a.mp3",
      duration:""
    },
    {
      name:"♫ Batsın Bu Dünya",
      file:"ttps://cdn.muzikmp3indir.com/mp3_files/f3a75c0397d26231ac35f5ce926551ff.mp3 ",
      duration:""
    },   
    {
      name:"♫ Beterin Beteri Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a6ced75e164c25c2cf6185871e2b78d0.mp3",
      duration:""
    },
    {
      name:"♫ Zühtü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ea945db871d3dc5e99902306a451d2a4.mp3 ",
      duration:""
    },
    {
      name:"♫ Çeşme ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7a1d1049ef6c42984a3d8c6c2e64f396.mp3 ",
      duration:""
    },
    {
      name:"♫ Bırak Şu Gurbeti",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3f4d9bb9c833796d5ec6ea0636f657ce.mp3 ",
      duration:""
    },
    {
      name:"♫ Tükendi Nakdi Ömrüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5e53250c62337259715f472c808ee3b1.mp3 ",
      duration:""
    },
    {
      name:"♫ Huzurum Kalmadı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/db57afe6027956dfdedd003dbab63404.mp3",
      duration:""
    },
    {
      name:"♫ Saçların Öremedim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2e5a6b02e3681b665abf2a8fc510b752.mp3 ",
      duration:""
    },
    {
      name:"♫ Dememişem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2ce27929025665340abc0305da033d74.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu Gelen Abalıdır",
      file:"https://cdn.muzikmp3indir.com/mp3_files/88df2fc5993a23fdcd666256ca4ab5fd.mp3 ",
      duration:""
    },
    {
      name:"♫ Baba Bu Gün Gam Yarı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc2ba3be367e49d2734151d1289dbda6.mp3 ",
      duration:""
    },
    {
      name:"♫  Varlığın Tiryakisi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/df80c41eba265aa0f3160bb05bc5a727.mp3 ",
      duration:""
    },
    {
      name:"♫ Aynalar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/97e4a90000efb5ac309fa860427c730f.mp3",
      duration:""
    },
    {
      name:"♫ Hele Yar Zalim Yar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/53e95be9b33f295ba1c407b13f17939e.mp3 ",
      duration:""
    },
    {
      name:"♫ Kendi Utansın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2b44dabded6bcd00f28796f72e3209b9.mp3",
      duration:""
    },
    {
      name:"♫ 365 Gün Yandı Ha Yandı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/841455ffce9f53157dd1deabdb6357e7.mp3 ",
      duration:""
    },
    {
      name:"♫ Maden Dağı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5ca69ed646b44adcc34ade3d454ba492.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Görüşte Aşık Oldum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a0d92dd5f842d70a14f36aa444e885ac.mp3 ",
      duration:""
    },
    {
      name:"♫ Can Hatice",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5869052d5e389c53c6c81da6a568ce16.mp3 ",
      duration:""
    },
    {
      name:"♫ Sana Eyvallah",
      file:"ttps://cdn.muzikmp3indir.com/mp3_files/b6bf5ca1120dacac84f02a300681b9fe.mp3 ",
      duration:""
    },
    {
      name:"♫ Olam O Kaşı Karaya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e0c50d3d417c58af0717655f3343afd1.mp3 ",
      duration:""
    },
    {
      name:"♫ Toprağın Oğlu Sabuha ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2649105546d607a76e58925918535c8a.mp3 ",
      duration:""
    },
    {
      name:"♫ Karaçadırın Kızı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d73377dc3d48f3dbfb98ed92661d2f4b.mp3 ",
      duration:""
    },
    {
      name:"♫  Lolo",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f1a33b9fdd847c3f854c728ba99a896e.mp3 ",
      duration:""
    },
    {
      name:"♫ Daracık Sokakta ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/26ab97e0897330b9a8eb23afb418eab0.mp3 ",
      duration:""
    },
    {
      name:"♫ Kara Yemeni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/787bd56f3e811c8779d04fa870c08f4f.mp3 ",
      duration:""
    },
    {
      name:"♫ Garip Bir Kuştur Gönlüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8b195a1231e9c5f6814889e5d789d134.mp3 ",
      duration:""
    },
    {
      name:"♫ Seherde Uyanırsan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e69acf583abfad19d8ed2fe612c7192e.mp3 ",
      duration:""
    },
    {
      name:"♫ Karaçadır Düzdedir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/23a79fb17e579073ad3e4f52e717527c.mp3 ",
      duration:""
    },
    {
      name:"♫ Ceylan Uzun Hava",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1eb65955a378c2b2fa8949473b68429d.mp3",
      duration:""
    },
    {
      name:"♫ Ölürsem Kabrime Gelme İstemem",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fe5dd49420818b193b4fa9a175b1e26e.mp3",
      duration:""
    },
    {
      name:"♫  Acı Gerçekler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4963dfb01de1cd8953043662f0773373.mp3 ",
      duration:""
    },
    {
      name:"♫ Emine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/94799778470e23ffbe2798f9f636e90b.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu İşi Anlamadım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6a72b2af745d2171f478b466b42eaf4b.mp3",
      duration:""
    },
    {
      name:"♫ Seni Yakacaklar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b48367f936368db43d220b670ea99735.mp3 ",
      duration:""
    },
    {
      name:"♫ Hiç Kimseye Sözüm Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a6176fdd80d16551c4ab8d583a11ef24.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu Da Geçer",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d494a2d374350c2a5f95bcf55e2ffd9a.mp3 ",
      duration:""
    },
    {
      name:"♫ Yalelli",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5caed6ce94d5a9f92c9b0aa393f0c6e0.mp3",
      duration:""
    },
    {
      name:"♫ Gülmemiz Gerek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3da5854e956b082bac3aa98a0d0cd353.mp3 ",
      duration:""
    },
    {
      name:"♫  Aman Kardaşım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/11a332c8d0c26d1fb0410f4c9086d572.mp3 ",
      duration:""
    },
    {
      name:"♫ Çay İçinde Adalar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ea2329b1412e972e7ebbda84008c4726.mp3 ",
      duration:""
    },
    {
      name:"♫ Gönlümde Tek Sen Varsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0f184ca888f8a0f4be5fa373d9e4e06e.mp3 ",
      duration:""
    },
    {
      name:"♫  Çoban Kızı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5437e9e4681f3b1f29e606dd61d3a7a1.mp3 ",
      duration:""
    },
    {
      name:"♫ Yalan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e6836a6d1362159a9ebbafb77da5fffd.mp3 ",
      duration:""
    },
    {
      name:"♫ Sarışınsın Sarısın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c741ebaad609a232269318778f23f710.mp3 ",
      duration:""
    },
    {
      name:"♫ Gurbet Treni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a5b773e72ee33f13932d2b81c7bcfe4e.mp3 ",
      duration:""
    },
    {
      name:"♫ Dost Nasihati ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/430fc175d4610d69fdd640cb4c7e3610.mp3 ",
      duration:""
    },
    {
      name:"♫ Kerpiç Kerpiç Üstüne ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0f0d579679cb6d9f72491b0787d40188.mp3 ",
      duration:""
    },
    {
      name:"♫ Nanay",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9486fdd28b64f4d5e1c9335a2bd96606.mp3",
      duration:""
    },
    {
      name:"♫ Yaktı Beni Kara Göz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/41cecf038fa71d0d714b927786575dec.mp3 ",
      duration:""
    },
    {
      name:"♫ Cemil ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f78e144687630d3a849c756f0ec6dadc.mp3 ",
      duration:""
    },
    {
      name:"♫ Güzeller Hastasıyım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bb6dfb1f1e817240f9e6d3885068eacf.mp3 ",
      duration:""
    },
    {
      name:"♫ Leylim Ley ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1fa47428016d1eaeead4e5ffe7a9c114.mp3 ",
      duration:""
    },
    {
      name:"♫ Mavi Mavi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8c937cd4003f0e47684250eaf9df4628.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevmek ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2f5432e4828e906e2d8be399abdb0bd0.mp3 ",
      duration:""
    },
    {
      name:"♫ Yallah Şöför ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6a2f7126187734a8705b4fe9a6d86eef.mp3 ",
      duration:""
    },
    {
      name:"♫ Güneş Yarın Doğmayacak ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/dc102a4383cfbdf95a57aaa02c4e4101.mp3",
      duration:""
    },
    {
      name:"♫  Yalnızım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b6c3d7e0010edd56952299fc5cf4633f.mp3",
      duration:""
    },
    {
      name:"♫  Gel De Yaşa",
      file:" https://cdn.muzikmp3indir.com/mp3_files/48d57ccb9a96d2bf59dd67b05fa1a904.mp3",
      duration:""
    },
    {
      name:"♫ Dere Kenarından Geçtim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/00d48af9660a914a4ee47cdc0b656d76.mp3",
      duration:""
    },
    {
      name:"♫  Evlerinin Önü",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ae09ec64704d0b0fefdb81ac8eb1ff4a.mp3",
      duration:""
    },
    {
      name:"♫  Eli Develi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed8f7f8198ac27c5cf2fb6d8fce9f049.mp3 ",
      duration:""
    },
    {
      name:"♫  Aşk Kalbimde Yer Almış",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3dfb22a3c11ffbc152ef15e4c4e6c378.mp3",
      duration:""
    },
    {
      name:"♫  Ben İnsan Değil Miyim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/623d0583a75b556bed6b25a6d896d85a.mp3 ",
      duration:""
    },
    {
      name:"♫ Yarab Al Canimi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50db8a12818d5fbabc229e7e6f0cd471.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Dilim Beyaz Peynir ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/90630589a6d75a45e2cee4b9bcf7ce8e.mp3 ",
      duration:""
    },
    {
      name:"♫ Yağmur ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d0d00857ba330f1f4c73edaa1157c52c.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu Kadar İşkence ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6452cbe3adf939bc3d462d3d818b34ba.mp3 ",
      duration:""
    },
    {
      name:"♫  Urfalıyam Ezelden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0c9024d5c391758fac375fcb1c195ec8.mp3 ",
      duration:""
    },
    {
      name:"♫  Tükenmeyen Efkarım Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f9ef3cb5e7050dc7b7ce9415929281b4.mp3 ",
      duration:""
    },
    {
      name:"♫ Urfaya Paşa Geldi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ebab87d1852a18cf5b4ae2dd19a6f364.mp3",
      duration:""
    },
    {
      name:"♫  Söz Namustur",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1a93f1704a208c863d8cce927801f857.mp3",
      duration:""
    },
    {
      name:"♫  Karadır Kaşların",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e02a1600529ee6493c842b619ebc4f1b.mp3 ",
      duration:""
    },
    {
      name:"♫  Aman Hoca",
      file:"https://cdn.muzikmp3indir.com/mp3_files/52b290ddc2198b0317c0d57978cede10.mp3 ",
      duration:""
    },
    {
      name:"♫  Allah Allah",
      file:" https://cdn.muzikmp3indir.com/mp3_files/26759ef4509cb7e663fb01d3e641940d.mp3",
      duration:""
    },
    {
      name:"♫  Sarışınım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2b3aaa44d906fd49f4caf9ae937945eb.mp3 ",
      duration:""
    },
    {
      name:"♫  Her Demet",
      file:"https://cdn.muzikmp3indir.com/mp3_files/her-demet-bDNk52mi3O-0.mp3 ",
      duration:""
    },
    {
      name:"♫  Hülya",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c1d82440eb555cd311d030f1e6f8d67b.mp3",
      duration:""
    },
    {
      name:"♫  Şıp Sevdi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50590cf71066fe108c1763c7b0841315.mp3 ",
      duration:""
    },
    {
      name:"♫  Allah Yalanı Sevmez",
      file:"https://cdn.muzikmp3indir.com/mp3_files/02d6720c5e89ba753f848185afb210e4.mp3 ",
      duration:""
    },
    {
      name:"♫  Biliyem Yar Biliyem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/118aebae2343bb2ad23477a78e90767d.mp3 ",
      duration:""
    },
    {
      name:"♫  Ellere Var Bize Yok Mu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d63507df6b6076520f9fb61e5d2de82c.mp3",
      duration:""
    },
    {
      name:"♫  Taksi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f251fd562e5c46455a72f2e69368c1be.mp3",
      duration:""
    },
    {
      name:"♫  Sevdalıyım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/220df9133207dcd30924c6efc04bd8ee.mp3",
      duration:""
    },
    {
      name:"♫  Sürme Çekmiş Gözlerine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0e63aed0b5a7e11887c1642869f79b90.mp3 ",
      duration:""
    },
    {
      name:"♫  Yıkılmışım Ben",
      file:"https://cdn.muzikmp3indir.com/mp3_files/63a1898b4efe892d270a4403941c0d0f.mp3 ",
      duration:""
    },
    {
      name:"♫  Kara Zindan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5f661b74eb94edcee0814d8d39f97019.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Kulum İşte ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/551dc26c89f96ac317b9ee621e85d263.mp3 ",
      duration:""
    },
    {
      name:"♫  Duydunuz Mu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0ff4c521f7ba868ae9e5bb6f98f01447.mp3",
      duration:""
    },
    {
      name:"♫ Bu Gün Derdin Yarın Derdin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3a1a55e4a45715a171ffd6365c12e58d.mp3 ",
      duration:""
    },
    {
      name:"♫ Bebeklerin Bebeğidir ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6c7e64bd31839e3ec3d831538a1cdbf5.mp3",
      duration:""
    },
    {
      name:"♫  Dönmem Asla",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8bb8024acdca8fc080bfdf876b8f7c37.mp3 ",
      duration:""
    },
    {
      name:"♫  Nuranım Nuran",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a111a071014bb152322344886282fc54.mp3",
      duration:""
    },
    {
      name:"♫  Kafama Taktım Seni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/af21cf4d151341233a0d7443a311061e.mp3 ",
      duration:""
    },
    {
      name:"♫ Tren Gelir Hoş Gelir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4d518ab52aafb28c64802a904cad54c8.mp3 ",
      duration:""
    },
    {
      name:"♫ İnsanlar ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/707f877066c690ca77099a2f17b39b85.mp3",
      duration:""
    },
    {
      name:"♫ Ben Ne Biçim Serseriyim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/052537dbeb6806cfd293401a4404526e.mp3",
      duration:""
    },
    {
      name:"♫ Yandım Televizyon",
      file:" https://cdn.muzikmp3indir.com/mp3_files/03dada70b02d223870347dec4fefbdb8.mp3",
      duration:""
    },
    {
      name:"♫ Şükürler Olsun",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c3b2181a90e0f32dcb9681fb93667a49.mp3",
      duration:""
    },
    {
      name:"♫ Özledim Seni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/16b070ba88186238de8fbbb865272967.mp3 ",
      duration:""
    },
    {
      name:"♫  Seni Tazelenir Sanki Hayatım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f57712b14a3ec2764083bec7d0c39cbb.mp3 ",
      duration:""
    },
    {
      name:"♫  Şımarik Sevgilim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cd3d1b329a5f96e8f25558c5b778ed25.mp3",
      duration:""
    },
    {
      name:"♫ Bile Bile",
      file:"https://cdn.muzikmp3indir.com/mp3_files/66ccfd55677396088755b62c71d89575.mp3 ",
      duration:""
    },
    {
      name:"♫ Tövbeler Olsun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ade2e5bd7075e53d940e1d03a86bd2fb.mp3 ",
      duration:""
    },
    {
      name:"♫ Gazel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5047687f14da673c3c4646964239e322.mp3 ",
      duration:""
    },
    {
      name:"♫  Kızlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/28fb198c068cb030ea84f0688563ea83.mp3 ",
      duration:""
    },
    {
      name:"♫ Ne Faydası Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/def49104d51ff99ce61fb3bbb48828a9.mp3 ",
      duration:""
    },
    {
      name:"♫  Söylim Mi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eb26095f2cef1cc8de497478fec1464f.mp3 ",
      duration:""
    },
    {
      name:"♫ Yaradan Var ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a4f659212f01d5ff5cf63b340eaf7d7d.mp3",
      duration:""
    },
    {
      name:"♫  Lele Canım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/06bc84cb062dd74fa0461c5aed76df43.mp3 ",
      duration:""
    },
    {
      name:"♫ Ne Güzel Gözlerin Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8da1a72b67c48eab444a3cb7c391b5af.mp3 ",
      duration:""
    },

    {
      name:"♫ Gideceğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aa2b49ae511298e0459591bb73c4d5a3.mp3 ",
      duration:""
    },
    {
      name:"♫ Cane Cane",
      file:" https://cdn.muzikmp3indir.com/mp3_files/386492dbe8b5cca85c6e9278804e1ea2.mp3",
      duration:""
    },
    {
      name:"♫  Ayez Hanım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cfab1cc7c92765ba8941964bf7fa8733.mp3 ",
      duration:""
    },
    {
      name:"♫  Gül Ali",
      file:"https://cdn.muzikmp3indir.com/mp3_files/62ea1eeeda3a80509c0df86c796f53f1.mp3 ",
      duration:""
    },
    {
      name:"♫ Perşembe Gününde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f143045d79d92566540b6255e6c9905b.mp3 ",
      duration:""
    },
    {
      name:"♫ Benim Naylon Tarağım Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b0f1bc8d630d83d7c70e60ff0a12ed00.mp3 ",
      duration:""
    },
    {
      name:"♫ Türkmen Gelini",
      file:"https://cdn.muzikmp3indir.com/mp3_files/665b9b3fdef16ec22e5e9f3208b0b061.mp3 ",
      duration:""
    },
    {
      name:"♫ Mutlu Ol Yeter",
      file:"https://cdn.muzikmp3indir.com/mp3_files/248f97bfa2593dbdc840979329a06848.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Kulunu Çok Sevdim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0346d5e33ef4eb6faaca18542b4de464.mp3",
      duration:""
    },
    {
      name:"♫ Dert Sayanım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a18c771158e0ced5157336de64304da6.mp3",
      duration:""
    },
    {
      name:"♫  İsyan Etmek Boşuna",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f61a0d3e85bcca11ad2b9009013e4ede.mp3 ",
      duration:""
    },
    {
      name:"♫  Çimene Bak Çimene",
      file:"https://cdn.muzikmp3indir.com/mp3_files/62767efbae015e9b554a7d09c6ab24c7.mp3 ",
      duration:""
    },
    {
      name:"♫ Gönül Senin Elinden",
      file:" https://cdn.muzikmp3indir.com/mp3_files/efeade4dbbf3d8d61a9f9bf854141237.mp3",
      duration:""
    },
    {
      name:"♫ Yaz Gelsinde Gidelim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8d5d02d11ca7eb350a71c156105aadfd.mp3 ",
      duration:""
    },
    {
      name:"♫ Daldalanım Dalım Yok",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0dc84f3fbb2b992171c6b30661553218.mp3",
      duration:""
    },
    {
      name:"♫ Yoğurt Koydum Dolaba",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aad9f1e171dcea15a9be319be06c0c53.mp3 ",
      duration:""
    },
    {
      name:"♫ Buda Geçer",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b1fdf8482853f8772ebe38352acf2044.mp3 ",
      duration:""
    },
    {
      name:"♫ Silerde Geçer",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bc2d6ebc0f0dc0ad750e05a2ff09ef84.mp3 ",
      duration:""
    },
    {
      name:"♫ Gülüm Seni Koparmışlar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6cb25cedd1246575da0ded2a5611e4b4.mp3",
      duration:""
    },
    {
      name:"♫ Yolun Sonu Görünüyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/18934db79371311bd4c8741578096a17.mp3 ",
      duration:""
    },
    {
      name:"♫ Oy Emine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed3bdfe4651cdd4c4b24c14225a6376f.mp3 ",
      duration:""
    },
    {
      name:"♫ Yaram Sızlar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f571fd7f60ec5ea5ef6a6e98dd5cf64c.mp3",
      duration:""
    },
    {
      name:"♫ Ah Keşkem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/79e10ccd890458d78c8b37cca5f5f0bf.mp3 ",
      duration:""
    },
    {
      name:"♫ Saygımız Vardır",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e7bb28c443f9b50d1be7d0ebf58ca69c.mp3",
      duration:""
    },
    {
      name:"♫ İmkanı Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/52dec36133483ae30445066b5919a601.mp3 ",
      duration:""
    },
    {
      name:"♫ Sensiz Geceler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d35620020edf5e87771fe6baf686d2a1.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevde Gör",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b69780394773cbaf3d1694e478372ad2.mp3 ",
      duration:""
    },
    {
      name:"♫ Aklıma Gelmeyen Başıma Geldi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/22c4022ed59fb43c1ad521c019479ff8.mp3 ",
      duration:""
    },
    {
      name:"♫ İki Gözüm İki Çeşme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/95b3d88a6cb7d6379881df9d68c42d6a.mp3 ",
      duration:""
    },
    {
      name:"♫ Kimde Var",
      file:" https://cdn.muzikmp3indir.com/mp3_files/591e22598f1263d2de0b262318ff9c5d.mp3",
      duration:""
    },
    {
      name:"♫ Ateşli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/de5c8823d75b747838a87810b8170763.mp3 ",
      duration:""
    },
    {
      name:"♫ Vara Vara Vardım Urfalımısan",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6fa41593f70c93d47f2e20a00270b269.mp3",
      duration:""
    },
    {
      name:"♫ Yar Diline",
      file:"https://cdn.muzikmp3indir.com/mp3_files/57f36ef0f6ee64e587dc1cb5b62ecd5d.mp3 ",
      duration:""
    },
    {
      name:"♫ Kurşuna Gerek Yok",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0e1f09015221565393d5e7e7ef0e1dad.mp3",
      duration:""
    },
    {
      name:"♫ Arabesk",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1a9e34860a327233d2b849491b2240d3.mp3",
      duration:""
    },
    {
      name:"♫ Yemin Ettim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8d90203f7deab80a1cab65923e15bd9c.mp3",
      duration:""
    },
    {
      name:"♫ Özlüyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d2812039c56348880e81a8868da526cc.mp3 ",
      duration:""
    },
    {
      name:"♫ Vur Gitsin Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/119bf38182eab550d667ccc314a6103b.mp3 ",
      duration:""
    },
    {
      name:"♫ Mavi Yelek",
      file:" https://cdn.muzikmp3indir.com/mp3_files/de7259288f7b533a1dd2a3313bde0671.mp3",
      duration:""
    },
    {
      name:"♫ Vay Bana Vaylar Bana",
      file:" https://cdn.muzikmp3indir.com/mp3_files/67e3e4793af9424b33890712a4cfcaef.mp3",
      duration:""
    },
    {
      name:"♫ Tükendi Nakti Ömrüm",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4a4b153430b628289c4915ad6b3a1751.mp3",
      duration:""
    },
    {
      name:"♫ Siverek Asmasıyam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7d1357cf9f609bcbba868366ef7a2ab7.mp3 ",
      duration:""
    },
    {
      name:"♫ Çilli Kiz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d1bec1597d6f26f4c7e7e1aa5c215ea9.mp3 ",
      duration:""
    },
    {
      name:"♫ Kuma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/56a3391d0b9e5fb2fff0655da61c2c49.mp3 ",
      duration:""
    },
    {
      name:"♫ Eyvah Neye Yarar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/04aa591e325bdef330a71ffd2962f0ce.mp3 ",
      duration:""
    },
    {
      name:"♫ Ağlama Gözlerim Mevlam Kerimdir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/233775ebf41b60050643895c5396c44a.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Taş Attım Pencereye",
      file:"https://cdn.muzikmp3indir.com/mp3_files/afa4bc2196e3c22f8441b8d9015baad6.mp3 ",
      duration:""
    },
    {
      name:"♫ Terk Etmek Ne Kadar Kolay",
      file:"https://cdn.muzikmp3indir.com/mp3_files/65b08214f0b7438de8389aef7ac527cb.mp3 ",
      duration:""
    },
    {
      name:"♫ Gül Geç Derdine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b3b229e972666afc12f7e0b8bdaac44e.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevmeyi Dene",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bea4902b6e34202ff75da79e1eee8ffa.mp3",
      duration:""
    },
    {
      name:"♫ Haydi Söyle",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7487ad612a8ca1ccebe3af5d0d1ff261.mp3 ",
      duration:""
    },
    {
      name:"♫ Sen Yoksun",
      file:" https://cdn.muzikmp3indir.com/mp3_files/36a8bf740eae8a7ad35619cc053632c6.mp3",
      duration:""
    },
    {
      name:"♫ Nankör Kedi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/nankor-kedi-BlFOtCRG0P-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Hasret Kaldım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/97f8ca19762da6a6365c3401d8bf9e31.mp3 ",
      duration:""
    },
    {
      name:"♫ Yetiş Sevgilim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ef64c7cb1e8300158cfc44358bbb7825.mp3 ",
      duration:""
    },
    {
      name:"♫ Kurban Olduğum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c3d3725831375f6d07775cca2f9f1203.mp3 ",
      duration:""
    },
    {
      name:"♫ Saza Niye Gelmedin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7d7e4f6cd66d8b1353f397ba858c75cf.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevdiğime Pişman Ettin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/11b8ad9d252fe1423e0e65dee5c98cb1.mp3 ",
      duration:""
    },
    {
      name:"♫ Bugün Bize Pir Geldi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/af0e317e10af8ec9584609bac75c901d.mp3 ",
      duration:""
    },
    {
      name:"♫ Maraş Maraş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a52fe86c2060680b52ba6652e252ef77.mp3 ",
      duration:""
    },
    {
      name:"♫ Omuzumda Sevda Yükü",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ba2f906987ff6c422e70cefab396a0b2.mp3",
      duration:""
    },
    {
      name:"♫ Yemen Türküsü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4bd50a26f5e300671b805e531181f065.mp3 ",
      duration:""
    },
    {
      name:"♫ Tombul Tombul",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b812740ce42e08528a7bcacca982a23c.mp3",
      duration:""
    },
    {
      name:"♫ Yalnızım Dostlarım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d9d76012ddcb8c32c266244039a2efbd.mp3",
      duration:""
    },
    {
      name:"♫ Kim Bu Gözlerindeki Yabancı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/kim-bu-gozlerindeki-yabanci-bheK4ZTX1N-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Vur Gitsin Beni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/vur-gitsin-beni-yeni-ver-N2tBdLqlmX-0.mp3",
      duration:""
    },
    {
      name:"♫ Dom Dom Kurşunu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1ffb3153d125ed6b4950d7464c8d1352.mp3 ",
      duration:""
    },
    {
      name:"♫ Dayanmaya Gücüm Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/506a101c2d019e52816f1829180a38cb.mp3 ",
      duration:""
    },
    {
      name:"♫ Urfanın Seher Vakti",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3d601522d6804f2f9634cbddf17d8b27.mp3",
      duration:""
    },
    {
      name:"♫ Dallam",
      file:"ttps://cdn.muzikmp3indir.com/mp3_files/3b42fc44327d75b42ceba7bc046f05e2.mp3 ",
      duration:""
    },
    {
      name:"♫ Evlerinin Önü Boyalı Direk",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8497a6b281fc0d4f248b8330086d0de2.mp3",
      duration:""
    },
    {
      name:"♫ Adana Köprü Başı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ca330c96f9160b13a0eeb9e81bfc09f5.mp3 ",
      duration:""
    },
    {
      name:"♫ Emmine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1fd1dd9a673b332897dc8983d3a89e31.mp3 ",
      duration:""
    },
    {
      name:"♫ Yanağı Gamze",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fbe250f63999ac04dbacffbecfac36f1.mp3 ",
      duration:""
    },
    {
      name:"♫ Allahim Neydi Günahım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cf7cc96c8b116bda84981c94696dec52.mp3 ",
      duration:""
    },
    {
      name:"♫ Başı Belalım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0eb3df5d5ec717137b37497817765dfc.mp3 ",
      duration:""
    },
    {
      name:"♫ Nerelere Gidem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8bceb9aae912c154e1daedcb51d88aa1.mp3 ",
      duration:""
    },
    {
      name:"♫ Yakamoz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fe9e575c6017f8ebfa93f8cf56a7110c.mp3 ",
      duration:""
    },
    {
      name:"♫ Ben De İsterem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a677de91ca4a0f2c8ca18d55ef2d7e32.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu Gece",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1b28dccb13e361ca7e2268866b588484.mp3 ",
      duration:""
    },
    {
      name:"♫ Sormadın Beni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/69e8529dc5a0050c0fd89d1251415a8f.mp3",
      duration:""
    },
    {
      name:"♫ Fırat",
      file:"https://cdn.muzikmp3indir.com/mp3_files/999a05f5f34591085445d51cf960797f.mp3 ",
      duration:""
    },
    {
      name:"♫ Çoban",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0adf21293eebced50419952741c66552.mp3 ",
      duration:""
    },
    {
      name:"♫ Hor Görme Garibi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/96c9236fbee24158452dcb0f7a3a18c5.mp3 ",
      duration:""
    },
    {
      name:"♫ Yol Ver Dağlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f2f23a22014ec73775e4e409d832f4e1.mp3 ",
      duration:""
    },
    {
      name:"♫ Ormancı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/41e17a924ee0c90151507995c4492eda.mp3 ",
      duration:""
    },
    {
      name:"♫ At Gitsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/33cf169f8a1b21e75774d495b2718f80.mp3 ",
      duration:""
    },
    {
      name:"♫ Zamanlaman Harikaydı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/be15291415506903e7391c71aed6b0c4.mp3 ",
      duration:""
    },
    {
      name:"♫ Erkekler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/de88b58b73a37d8e40fa4648f0af7fd8.mp3 ",
      duration:""
    },
    {
      name:"♫ Yaş Altmışbeş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/yas-altmisbes-HlBqXip7Tt-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Bi Tanem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9ae2673feb05ee1cd16a4cdb42890ac3.mp3 ",
      duration:""
    },
    {
      name:"♫ Ağlıyorum Kahrımdan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/agliyorum-kahrimdan-jAuKIVYCsm-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Akdeniz Akşamları",
      file:" https://cdn.muzikmp3indir.com/mp3_files/akdeniz-aksamlari-iGCLeDabmV-0.mp3",
      duration:""
    },
    {
      name:"♫ Allah Cezanı Verecek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/23f5bbf62df24f7c8996f28f226ef0e3.mp3 ",
      duration:""
    },
    {
      name:"♫ Eyvah",
      file:"https://cdn.muzikmp3indir.com/mp3_files/df52d108f6ed6b89bf02bd00c44f1beb.mp3 ",
      duration:""
    },
    {
      name:"♫ Rakı İçtim Şarap İçtim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/824ac8e2e94dd98ecd574636e1d068ca.mp3 ",
      duration:""
    },
    {
      name:"♫ Güneş Doğmuyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1eb2538e83301c31b63f01a27d49a526.mp3 ",
      duration:""
    },
    {
      name:"♫ Odalarda Işıksızım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/93c7b3a2d9f6de8fd6f499dec259fe8a.mp3 ",
      duration:""
    },
    {
      name:"♫ Anam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b9bdf3bfffb4bc6b3f903b147c0ee069.mp3 ",
      duration:""
    },
    {
      name:"♫ Yetiş ya Muhammed Yetiş ya Ali",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a4970f08cec0fb48533488b3c1094a53.mp3 ",
      duration:""
    },
    {
      name:"♫ Gel Canım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/03df2a5b82eac08fefdb92fe5e2f38e0.mp3 ",
      duration:""
    },
    {
      name:"♫ Vay Halıma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cc83e0a024c54b4405fa14dec28cac89.mp3 ",
      duration:""
    },
    {
      name:"♫ Muradı Böyle",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a0ebb4298a711bbddf168cb7dca01b93.mp3",
      duration:""
    },
    {
      name:"♫ Kardaş Dala Konaram",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a079c25c8424006eb14a901553c57755.mp3 ",
      duration:""
    },
    {
      name:"♫ Kötü Zaman",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9a0968b3237cd050b068f54b56c9ab45.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Allahım Var Birde Sen",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f7040aaf19088052921643381fcd4456.mp3 ",
      duration:""
    },
    {
      name:"♫ İki İki Dört Eder",
      file:" https://cdn.muzikmp3indir.com/mp3_files/67ee439b7f9d73f3fdcde563a8adab83.mp3",
      duration:""
    },
    {
      name:"♫ Zelo",
      file:"https://cdn.muzikmp3indir.com/mp3_files/83123b84ba0847f236fcfdc6112b5425.mp3 ",
      duration:""
    },
    {
      name:"♫ Saza Gelmezsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/05aa489f1b7465d29c24df099b766ce2.mp3 ",
      duration:""
    },
    {
      name:"♫ Gidecegim Bu Ellerden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7c889b0578abf3994741615e50993aad.mp3 ",
      duration:""
    },
    {
      name:"♫ Yorgun",
      file:" https://cdn.muzikmp3indir.com/mp3_files/af32b306ab8e304d22362b2441775e64.mp3",
      duration:""
    },
    {
      name:"♫ Bırakın Gitsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b2ddd2a44d451090d7b2eb1d036d9456.mp3 ",
      duration:""
    },
    {
      name:"♫ Hesabım Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eded39f469e191822f92167912246bba.mp3 ",
      duration:""
    },
    {
      name:"♫ Gel Gel Gumlegel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/47b0cc554c62b3b215c9e41c8c053b66.mp3 ",
      duration:""
    },
    {
      name:"♫ Allah'ım Bu Nasıl Güzel",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f86a0784c93042142f66dd45b89340df.mp3",
      duration:""
    },
    {
      name:"♫ Bileydim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6b884ab6f60b5538bb41849cb48ec157.mp3 ",
      duration:""
    },
    {
      name:"♫ Vay Halıma Gule",
      file:"https://cdn.muzikmp3indir.com/mp3_files/vay-halima-gule-Oa3ZqLlh0S-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Ben Aşk İçin Ölürüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/95d9f215841430c3112662c9eed59f2d.mp3 ",
      duration:""
    },
    {
      name:"♫ Güneş Doğmayacak",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8a0bced9a46ac00352295d1a1c45e1ff.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevdalandım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f87e3bdf805f9aecffd38305cbe91201.mp3",
      duration:""
    },
    {
      name:"♫ Benim Hayatım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/benim-hayatim-7GFEjopAbk-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Derdimi Kimlere Desem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/54775a31fcd542bc3f0eb64d0049947d.mp3 ",
      duration:""
    },
    {
      name:"♫ Dost Nasihatı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/78a411a161ebdbd1cb519f479760a3bb.mp3",
      duration:""
    },

 {
      name:"♫ Her Sevgide Bin Ah Ettim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a4a00ce36fd1cf4b1f35350c0d20c151.mp3 ",
      duration:""
    },
 {
      name:"♫ Gözlerim Yaşlı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3fd8508285553149297f188083307c3f.mp3",
      duration:""
    },
 {
      name:"♫ Bebeğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/35e2755e1c6c044714ebe6ccd4e8a305.mp3 ",
      duration:""
    },
 {
      name:"♫ Pala Remzi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d22d32c9f2cf99168e1858a168786e55.mp3 ",
      duration:""
    },
 {
      name:"♫ Perişanım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bbaee23fb01618a96ef5c1e6091f6d22.mp3",
      duration:""
    },
 {
      name:"♫ Keskin Bıçak",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c085e90a989fe85478aa16b851b3639d.mp3",
      duration:""
    },
 {
      name:"♫ Dağlar Alsın Ağrını",
      file:" https://cdn.muzikmp3indir.com/mp3_files/20e080b5af46ecb903f65ab52010a60c.mp3",
      duration:""
    },
 {
      name:"♫ Ağlama",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7b0474b8a0fdf809b7e7e1f4578f569f.mp3",
      duration:""
    },
 {
      name:"♫ Namert Olayım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7c3d0dffac716c4b0489d4bfb0396e0f.mp3 ",
      duration:""
    },
 {
      name:"♫ Mavişim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3920f38284033ab52c6bf7db0cbbf09d.mp3",
      duration:""
    },
 {
      name:"♫ Deryalım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f0aa1a6fa0b8bd49e11502cb635e323.mp3 ",
      duration:""
    },
 {
      name:"♫ Ayrılamam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f974b10d26901f4c566a4901e2436024.mp3",
      duration:""
    },
 {
      name:"♫ Bir Murada Eremedim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/efed8086d957dc7d5321f7c1c701c9f5.mp3",
      duration:""
    },
 {
      name:"♫ Zurnacı İbo Dayı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/241857a94cc3f721378669def437d162.mp3",
      duration:""
    },
 {
      name:"♫ Yuh Yuh",
      file:"https://cdn.muzikmp3indir.com/mp3_files/19158593e3ccaad89a03a1cd0e651a79.mp3 ",
      duration:""
    },
 {
      name:"♫ Urfanın Etrafı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eba952aff03b3942efc9ce1dd5899681.mp3 ",
      duration:""
    },
 {
      name:"♫ Yetmez Mi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a37035d6729373d93cb8f95e4fce9cd6.mp3",
      duration:""
    },
 {
      name:"♫ Yanarim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c54f9914b79da641cad8d55126ac3168.mp3 ",
      duration:""
    },
 {
      name:"♫ Sarhoş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f3f6aea6ba82e0772844aa37b0d8ecd.mp3 ",
      duration:""
    },
 {
      name:"♫ Tek Tek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0e81d713c8f1dfc9ce4caf60d06da227.mp3 ",
      duration:""
    },
 {
      name:"♫ Tabi Tabi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f1c33375544f4d3e4dedad1590177202.mp3 ",
      duration:""
    },
 {
      name:"♫ Ne Sevdalar Yaşadim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b8f02e29ba5f1d664b05651b952965e1.mp3 ",
      duration:""
    },
 {
      name:"♫ Su Ver Leylam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2b0d582b9214ad758c25dfbcd8054c61.mp3",
      duration:""
    },
 {
      name:"♫ Usta",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ae9e1933102e8f723b0bf184fe3585a3.mp3",
      duration:""
    },
 {
      name:"♫ Al Al Al",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2716a7dfd5e25f0cf8385df82881f395.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Oda Yaptırdım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/31122649706378e7fb55272d926c9096.mp3 ",
      duration:""
    },
 {
      name:"♫ Seni Sana Bırakmam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/83ff70e99cf94a2910b37e0807d47b27.mp3 ",
      duration:""
    },
 {
      name:"♫ Adım İbrahim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4c4d74204ca5653a0966ce37582f922f.mp3",
      duration:""
    },
 {
      name:"♫ Haram",
      file:"https://cdn.muzikmp3indir.com/mp3_files/680ad5ce8a94437c7ca7296ea842dfe5.mp3 ",
      duration:""
    },
 {
      name:"♫ Süryani",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2c3b45ba52da13fc9627303f26eefd52.mp3 ",
      duration:""
    },
 {
      name:"♫ Ben de İnsanım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e8cea8a8c7d1f4417d67479e85df44c5.mp3",
      duration:""
    },
 {
      name:"♫ Aramam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37883d23be5bab3e65a21d874ef3ede3.mp3 ",
      duration:""
    },
 {
      name:"♫ Dedi Ki Nişanlıyam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ce7aa6340bd42aeec04fc5537b5367a2.mp3",
      duration:""
    },
 {
      name:"♫ Barışmam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ef621a14754475e889d99a37c0be91f5.mp3 ",
      duration:""
    },
 {
      name:"♫ Kal Benim İçin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5ddd5937d2a3523b23882bc9cf59bcff.mp3",
      duration:""
    },
 {
      name:"♫ Kız Ben Seni Vurmazmıyım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/912a8167f100cb52cc146cded2a29779.mp3 ",
      duration:""
    },
 {
      name:"♫ Beyaz Mendi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4cdd39ca22a4c9b6b1736f7b0a6815a8.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaz Geldi ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bfe7acd5309e916c1b852367eb665d42.mp3",
      duration:""
    },
 {
      name:"♫ Rojin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/195fab77526e1762be1100e7d930fb48.mp3 ",
      duration:""
    },
 {
      name:"♫ Neden Saçların Beyazlamış",
      file:"https://cdn.muzikmp3indir.com/mp3_files/51877e95f9e9a5d087f49f5bc59c7aad.mp3 ",
      duration:""
    },
 {
      name:"♫ Tamam Aşkım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/07bb205df92f6daba57f03457c084d0b.mp3 ",
      duration:""
    },
 {
      name:"♫ Kavur Balıkları",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d085572bae82553e697e525f35a212a6.mp3 ",
      duration:""
    },
 {
      name:"♫ Tak Beni Takmam Seni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c2f9b981f1ad09c02869afe3fade1b13.mp3",
      duration:""
    },
 {
      name:"♫ Rındamın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5e2d7c387edb24887e7d3a6d7ba6c360.mp3",
      duration:""
    },
 {
      name:"♫ Nasıl İsyan Etmem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b1701805c431393aceb6db860050b597.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaşamak Bu Değil",
      file:"https://cdn.muzikmp3indir.com/mp3_files/47db35d7b0e8e57026dabc7eeb07fc44.mp3 ",
      duration:""
    },
 {
      name:"♫ Hepsi Geçer",
      file:"https://cdn.muzikmp3indir.com/mp3_files/254196bf4f8f4f4163867b9997ae41fc.mp3 ",
      duration:""
    },
 {
      name:"♫ Aşk Yolları",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fed525bf523ad1ae3fd06f4134e6da86.mp3 ",
      duration:""
    },
 {
      name:"♫ Cemo",
      file:" https://cdn.muzikmp3indir.com/mp3_files/18e9482ac5634d89a1ee9a6319447ac7.mp3",
      duration:""
    },
 {
      name:"♫ Bir Mumdur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dfdd17c59741bf876f7cb629040b127b.mp3 ",
      duration:""
    },
 {
      name:"♫ Çağırın Hakkoyu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4913ffe7c10833e5faed4f871a81cd0f.mp3 ",
      duration:""
    },
 {
      name:"♫ Arap Atı Gibi Sallar Başını",
      file:"https://cdn.muzikmp3indir.com/mp3_files/26d2b3404a92d6cc425d1bfcb608932b.mp3 ",
      duration:""
    },
 {
      name:"♫ Fadile",
      file:" https://cdn.muzikmp3indir.com/mp3_files/07e13a9baba83f2d83689c879215a646.mp3",
      duration:""
    },
 {
      name:"♫ Ayağına Giymiş Kara Yemeni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2e432aa9ec17ce69ac6a55ddea3a6151.mp3",
      duration:""
    },
 {
      name:"♫ Bulamadım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/85dd5b987f0c835a8d2b19bf101750af.mp3 ",
      duration:""
    },
 {
      name:"♫ Yok Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4c8cf792896d0d50e35ad7d669e2c478.mp3 ",
      duration:""
    },
 {
      name:"♫ Ayazdır Geceler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fbf1c8249264c2ee08fed4a4e27eebb8.mp3 ",
      duration:""
    },
 {
      name:"♫ Sen Al Canımı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c5e076e7e0ca1153da2433897d6caaab.mp3 ",
      duration:""
    },
 {
      name:"♫ Senin Pabucun Dama",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fd0df37adcaebf537bb3bc82a6b9a0f0.mp3 ",
      duration:""
    },
 {
      name:"♫ Saki",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a900076de1c9c18b16bcbd63d52d105e.mp3",
      duration:""
    },
 {
      name:"♫ Mavi Çala",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3edac39af98936486b3e7509cb9553cf.mp3 ",
      duration:""
    },
 {
      name:"♫ Yetim Cemo",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3eea6b649a26d75f862a88ae9d1b4d47.mp3",
      duration:""
    },
 {
      name:"♫ Ağrı Dağı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3f83b424fd0d69d4d87fb359fae72d87.mp3 ",
      duration:""
    },
 {
      name:"♫ Türlü Türlü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/76aa5cc65b2848282f4202b45be7e231.mp3 ",
      duration:""
    },
 {
      name:"♫ Urfa Sana Küsmüş",
      file:" https://cdn.muzikmp3indir.com/mp3_files/16f339501b12e7da90873c22eeb85f33.mp3",
      duration:""
    },
 {
      name:"♫ Eşarbını Yan Bağlama",
      file:" https://cdn.muzikmp3indir.com/mp3_files/464a14bc91121709ca6a494ac82340c0.mp3",
      duration:""
    },
 {
      name:"♫ Etek Sarı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/45e950f37095d8a04f354a0f37cd481a.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Ayrılık Şarkısı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/53ab2ab7e19a656cd3f101d4a31c2179.mp3",
      duration:""
    },
 {
      name:"♫ Neden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/263cc9e82aeb497d4f4e3db22594ec7d.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelmezsen Gelme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7085d7bf79135b42c3bf4c290847b94b.mp3 ",
      duration:""
    },
 {
      name:"♫ Layık Değilsin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/09e273943b104204a4aecabbd297a93c.mp3",
      duration:""
    },
 {
      name:"♫ Arguvanlım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7d867bdc579bdc2b056b85dcc77afc15.mp3 ",
      duration:""
    },
 {
      name:"♫ Kop Gel Günahlarından",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9de25ba822b281b54eb56e19dd487988.mp3 ",
      duration:""
    },
 {
      name:"♫ Hadi Hadi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0a1b1e6fbf87668004c1f9a009adb586.mp3 ",
      duration:""
    },
 {
      name:"♫ Tosuno",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ce8e2d2896aa83caf340634bed2a41db.mp3 ",
      duration:""
    },
 {
      name:"♫ Sözum yok artık",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d28e32a2c152ddadd78bbde6f4bd4f0d.mp3",
      duration:""
    },
 {
      name:"♫ Eşik Taşı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/738c383c3a237fce2001775c0d43408d.mp3",
      duration:""
    },
 {
      name:"♫ Senden Insaf Diler Yarin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/64379294d96d49f4c8a876694878414b.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Yıldız Kaydı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d70f83a57210f4768b47b7bac0a5aa14.mp3 ",
      duration:""
    },
 {
      name:"♫ Pusat",
      file:" https://cdn.muzikmp3indir.com/mp3_files/aa5168111cb79d2b4be87b20a73612a9.mp3",
      duration:""
    },
 {
      name:"♫ Neler Gördüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/50de3778d227aa087b79c608772f76ce.mp3 ",
      duration:""
    },
 {
      name:"♫ Davacı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1e29c897d85d68547a32aa14c5dff9b5.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalanmış",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f0c2613c7c662a314d9fc94008a60ff6.mp3",
      duration:""
    },
 {
      name:"♫ Şimdi Gelir",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3e0b07c1f686f9b19dc415c91c2fec1f.mp3",
      duration:""
    },
 {
      name:"♫ Nideyim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2ae160a7b6c5ef45e558f8341df6c92f.mp3",
      duration:""
    },
 {
      name:"♫ Yağmurla Gelen Kadın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d483cba45fea1127c0113a9dd1dfa805.mp3 ",
      duration:""
    },
 {
      name:"♫ Kara Bulutları Kaldır Aradan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ec11e5e2f954829977fa7e0b3308ffc3.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağlar Dağlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/43eb1950a6a470f3bc532eee2518c2b0.mp3 ",
      duration:""
    },
 {
      name:"♫ Yara Bende",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3f0a9a738c303b1a11ddbd92c4d3751a.mp3",
      duration:""
    },
 {
      name:"♫ Kolbastı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f2ec42055ec0680a1b737ef077b01fd6.mp3",
      duration:""
    },
 {
      name:"♫ Yağmur Duası",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a8d04233de605f7d535409914d1d24a0.mp3",
      duration:""
    },
 {
      name:"♫ Şemmamme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2b047028d54657a142dc748205c375c1.mp3 ",
      duration:""
    },
 {
      name:"♫ Antebin Kalesine",
      file:"https://cdn.muzikmp3indir.com/mp3_files/antebin-kalesine-byECAfmhRs-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Hani Gelecektin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bd785c2c7e47e9edad68fe38ebfb9ab0.mp3 ",
      duration:""
    },
 {
      name:"♫ Garip",
      file:"https://cdn.muzikmp3indir.com/mp3_files/89c5b9ae44e39671a9669bda7232b443.mp3 ",
      duration:""
    },
 {
      name:"♫ Yağmur Duası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1894eaa3ab3f0b8edf180449115c529e.mp3 ",
      duration:""
    },
 {
      name:"♫ Derdine Yan Tamam mı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9f6708a1f4d61421ebe6b480c8ad7021.mp3",
      duration:""
    },
 {
      name:"♫ Sen olsan içmez misin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cfea3edf4aa5645feda56c511a5fa80b.mp3",
      duration:""
    },
 {
      name:"♫ Kime Ne",
      file:"https://cdn.muzikmp3indir.com/mp3_files/677d77f753dff9edbe3ca1c0c42c0289.mp3",
      duration:""
    },

 {
      name:"♫ Biz Ne Ayrılıklar Görmüş Adamız",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5ad5919895055393734cea058084aa3a.mp3",
      duration:""
    },
 {
      name:"♫ Vay Vay Zara",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e54f35dad5112b3e4069a35b524feb98.mp3 ",
      duration:""
    },
 {
      name:"♫ Yıkılırım Ellerimi Bırakma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bca07cfbb973978a944d476a19978aa0.mp3 ",
      duration:""
    },
 {
      name:"♫ Le Daye",
      file:" https://cdn.muzikmp3indir.com/mp3_files/061af1b7ac8c66f73292b989eed05ef2.mp3",
      duration:""
    },
 {
      name:"♫ Biz Türküz Biz Kürdüz",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1c5e4adcdc4f788cafe9c04d7468351e.mp3",
      duration:""
    },
 {
      name:"♫ Pembe Tenlim Ela Gözlüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/054051a452c881ecea9bf614b66d28cc.mp3 ",
      duration:""
    },
 {
      name:"♫ Aldırma Sen Benim Yalnızlığıma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1fbbb9d194cb6c11373f7c895d56adce.mp3 ",
      duration:""
    },
 {
      name:"♫ Benim Derdim Sende Olsa",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e3131235d2ed89003d70fd94c0b2c88d.mp3 ",
      duration:""
    },
 {
      name:"♫ Oy Cana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/13de92d882a61bf3647e3884b91ca3e2.mp3 ",
      duration:""
    },
 {
      name:"♫ Sabır",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b5ad45fe10c9a8069b6496e330564f90.mp3 ",
      duration:""
    },
 {
      name:"♫ Haketmedim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a7f80775d912ce91b98887142b96804c.mp3 ",
      duration:""
    },
 {
      name:"♫ Nerdesin Sevgi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ec6a3dc818aa5d2df60f38102e06a021.mp3 ",
      duration:""
    },
 {
      name:"♫ Hain Gönül Yıktın Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/925327d34d05a11f94d09f290d965e85.mp3 ",
      duration:""
    },
 {
      name:"♫ Yaylalar",
      file:"ttps://cdn.muzikmp3indir.com/mp3_files/yaylalar-X9i7TqJBQD-0.mp3 ",
      duration:""
    },
 {
      name:"♫ Gelmesin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8086c24b0ed8cbce343e46c7615db782.mp3 ",
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