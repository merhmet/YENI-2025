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
      name:"♫ Candan Sevmeli ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/75fc50127cf6a1a3fff9513ce5e6fe8d.mp3",
      duration:""
    },

    {
      name:"♫ Yaralı ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1e7380781b5735b639a12cfe5faa0e44.mp3",
      duration:""
    },

    {
      name:"♫ Islanmışsın Arkadaş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/30760d7d2553966620673aa86591648f.mp3 ",
      duration:""
    },

    {
      name:"♫ Neyleyim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2bf8e5768c3b7e0c281859a52dd4fde0.mp3 ",
      duration:""
    },

    {
      name:"♫ Dinleyin Dostlarım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/77f93bcb0eb6c84a90e87de840de9747.mp3 ",
      duration:""
    },

    {
      name:"♫ Cemo ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a78537d131ea79a26fdcc1fb0aa285ba.mp3",
      duration:""
    },

    {
      name:"♫ Dilom ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6d19aa114934dca7cd58ec116e1b1ed3.mp3",
      duration:""
    },

    {
      name:"♫ Şak Şak ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c17934a7d73ac42f3e7f3e50ec1e3b6a.mp3 ",
      duration:""
    },

    {
      name:"♫ Komşumuzun Oğlu ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/31d7a4b185220c6a0bf6e47332c1844f.mp3 ",
      duration:""
    },

    {
      name:"♫ Gönül ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/gonul-q6Kpd3SAkf-0.mp3",
      duration:""
    },

    {
      name:"♫ Lorke ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/008124c538d4231b7e9ac303506548a9.mp3 ",
      duration:""
    },

    {
      name:"♫ Biçare ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7a1bac525d74f1cf4e2e644125a45083.mp3 ",
      duration:""
    },

    {
      name:"♫ Ayrılığı Sen İstedin ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b222cc49a2d6b1e0980ae43e46dc595d.mp3",
      duration:""
    },

    {
      name:"♫ Kırmızı Gül ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9d7a4fcd64f7db1b35c8d4ec8db0b0b3.mp3 ",
      duration:""
    },

    {
      name:"♫ Dünya Benim Olurdu ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d19ee1e916decfe67788d55f30411b3f.mp3",
      duration:""
    },

    {
      name:"♫ Boynu Bükükler ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/72b05a8de1b9b624a948e63d5b292a3b.mp3",
      duration:""
    },

    {
      name:"♫ Kız Milleti ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/93262232fe28de32ea5dce16ba17b5c5.mp3 ",
      duration:""
    },

    {
      name:"♫ Çekilin Başımdan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9316aacf53fa359c9688e6ef4fbf85c9.mp3 ",
      duration:""
    },

    {
      name:"♫ Sen Affetsen Ben Affetmem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a71cfd22318e61fc6e93084f8d92383.mp3 ",
      duration:""
    },

    {
      name:"♫ Sevgilim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/857d86ea4e70f389f98f37d5ce51ab4e.mp3 ",
      duration:""
    },

    {
      name:"♫ Acıların Çocuğu ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3ecb8db634da34472a349c53e7513cce.mp3",
      duration:""
    },

    {
      name:"♫ Lele Hamşi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/810902636a399f86c0154d53da1b975c.mp3 ",
      duration:""
    },

    {
      name:"♫ Yürüdüm Yavaş Yavaş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a3c6cfbd51c54b49d4b399573ce46259.mp3 ",
      duration:""
    },

    {
      name:"♫ Kurban Olsun ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b37aa5966689d0af180dcf18bdfb50fb.mp3 ",
      duration:""
    },

    {
      name:"♫ Diyarbakır Düzüne ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/401820b093eb14d28780305a79eaa9c7.mp3 ",
      duration:""
    },

    {
      name:"♫ Ben Feleğe Neylemişem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f1c7748e0b17f1baccaaf2c7e8dba76d.mp3 ",
      duration:""
    },

    {
      name:"♫ Kızın Adı Perişan ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6dfa135f15bdb6380fb9ad9f0b8635a0.mp3 ",
      duration:""
    },

    {
      name:"♫ Nedendir ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f0e145659cd0090a0a2891b802dac04b.mp3 ",
      duration:""
    },

    {
      name:"♫ Bal Mısın Arı Mısın",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a74e75025055b1877b94ffe29e0e9854.mp3",
      duration:""
    },

    {
      name:"♫ Neşeliyim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/76f100515983c2e89fde2bcb4fc09ec8.mp3 ",
      duration:""
    },

    {
      name:"♫ Odam Kireçtir Benim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4f833ccd3031267b26769ec0a1aa83e9.mp3 ",
      duration:""
    },

    {
      name:"♫ Severim Seni ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6359e34553bdfc2a76177f9e4a1a0d42.mp3 ",
      duration:""
    },

    {
      name:"♫ Güzel Diyarım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7db073129cb743683c91b012ca1c318a.mp3 ",
      duration:""
    },

    {
      name:"♫ Es Deli Rüzgar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/254fd7510d0653e890209dc43aa7d453.mp3 ",
      duration:""
    },

    {
      name:"♫ Hayırsız Yarim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/872f6c40668b499b02c5431c12820e22.mp3 ",
      duration:""
    },

    {
      name:"♫ Hadi Sen Git İşine ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8fdab91e08643892d50d9e89d1fe3933.mp3",
      duration:""
    },

    {
      name:"♫ Dön Sevgilim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3422437be924e35abc5c04b4f2981827.mp3 ",
      duration:""
    },

    {
      name:"♫ Melik Ahmet Güzeli ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c5233f79950f40c36a2bd777544da712.mp3 ",
      duration:""
    },

    {
      name:"♫ Hayal de Gör ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7f2a35edf41dade3ee488314b19fccc1.mp3 ",
      duration:""
    },

    {
      name:"♫ Vurup Durmayın ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/031644b9d8f2ce11cdec154958507c33.mp3 ",
      duration:""
    },

    {
      name:"♫ Garip Anam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/04ea2ff482e0bf816ed0222286c5b95c.mp3 ",
      duration:""
    },

    {
      name:"♫ İyi Düşün Öyle Sev ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a607073bbca12e2a551fb92f7fa3c850.mp3",
      duration:""
    },

    {
      name:"♫ Kara Sevdanın Gözü Kör ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a7edf0f9005d920347177039055160c.mp3 ",
      duration:""
    },

    {
      name:"♫ Hoşgeldin Gülüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e3ad6e454d71f953f7dd02c0bb77b129.mp3 ",
      duration:""
    },

    {
      name:"♫ Mutluluklar Sana ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a9ed0ec63a821071087f6543623fd78f.mp3",
      duration:""
    },

    {
      name:"♫ Seviyorum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/67b9c934a21ff9e0b8f8726513b0c18e.mp3 ",
      duration:""
    },

    {
      name:"♫ Çocukluk Düşlerim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60992ecd1df3dc7423dd23730c40d181.mp3 ",
      duration:""
    },

    {
      name:"♫ Oynama Yorulursun ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3b05f0fa1922f0e0914cd76864025b3b.mp3 ",
      duration:""
    },

    {
      name:"♫ Hayırdır İnşallah ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9a8c314883451bf129626b4a26401817.mp3",
      duration:""
    },

    {
      name:"♫ Kara Kız ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/023f8564aa462ff352283c0837cc0365.mp3 ",
      duration:""
    },

    {
      name:"♫ Çocuklar ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a7de8806477d7bb3af5deee3a66a48e3.mp3 ",
      duration:""
    },

    {
      name:"♫ Mecbur Kaldım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/71d5a0b26f8383298bd65d4be49ec1e8.mp3 ",
      duration:""
    },

    {
      name:"♫ Bizim Düğün ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/922bf2a14bfa8480809bf7802ceeca11.mp3 ",
      duration:""
    },

    {
      name:"♫ Nazlı Bebeğim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1315cf8503662f43a8e4d2ada88d6057.mp3 ",
      duration:""
    },

    {
      name:"♫ Kan Çiçekleri ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a756611547b7a1c3f4ebf83b782ed70b.mp3",
      duration:""
    },

    {
      name:"♫ Dilber Hanım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d22f41d76923f87d854f655992943788.mp3 ",
      duration:""
    },

    {
      name:"♫ Sen Gülünce ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/08a81cb7e83e4a725e0dfbf2c0d674cb.mp3 ",
      duration:""
    },

    {
      name:"♫  İki Gözüm İki Çeşme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3ca071f5d6847bb69bf830df5625098c.mp3 ",
      duration:""
    },

    {
      name:"♫ Ağlamak İstiyorum ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4f06227ed6166f4401be954a7cd9efbd.mp3 ",
      duration:""
    },

    {
      name:"♫ Ayrılmam Senden ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc82dfe4510059dcd21d25361c8a0c63.mp3 ",
      duration:""
    },

    {
      name:"♫ Mavi Melek ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/82d290acd865618d392ec5fea3476283.mp3 ",
      duration:""
    },

    {
      name:"♫ İhtiyacım Var ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5255c2831ff1672af6d78809257bb24d.mp3 ",
      duration:""
    },

    {
      name:"♫ Gel De Sevme Böylesini ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/134f51b1bdee2ae8079f650760d1ebdd.mp3 ",
      duration:""
    },

    {
      name:"♫ Yar Diline ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/69ab77cda3446b4a97d24979cbe2f28e.mp3 ",
      duration:""
    },

    {
      name:"♫ Sensizim şimdi  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d63dffe93ef0a04c75f20203d0361d79.mp3 ",
      duration:""
    },

    {
      name:"♫ Milyar Bana Çıksaydı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3650861eabc99af995c3977640a69e1a.mp3 ",
      duration:""
    },

    {
      name:"♫ Di Gel Kız Gel ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f9354076c2c8688558971f823793fd38.mp3",
      duration:""
    },

    {
      name:"♫ Gülom ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/58bf8d05e01315bbd99274973fbbbe9c.mp3 ",
      duration:""
    },

    {
      name:"♫ Kısmetini Kendin Ara ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6f3302237dc72feab05bb220bb46e6c5.mp3 ",
      duration:""
    },

    {
      name:"♫ Sevgilim Ol ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0e4aa0f6e53ceeb9e503b7e06f569df7.mp3 ",
      duration:""
    },

    {
      name:"♫ Haydi Şimdi Gel ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a9d314ff9a0e3c0e1c87249d78cdb7a9.mp3",
      duration:""
    },

    {
      name:"♫ Bizi Kimse Ayıramaz ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1c794f0e5995476e22818207361e9ec4.mp3 ",
      duration:""
    },

    {
      name:"♫ Zor Gelir ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bbcdd4a2ad5848131b038b5cc62816c3.mp3",
      duration:""
    },

    {
      name:"♫ Yüreğimde Bir Ateş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/20c2110d534bc0c89a27f04804b93ad8.mp3 ",
      duration:""
    },

    {
      name:"♫ Töre ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1a1a481f1bbea7408c5c2da46f283f5b.mp3 ",
      duration:""
    },

    {
      name:"♫ Di Gel Kiz Gel ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dcce9a1d442aab4ebecd228f64241dfb.mp3 ",
      duration:""
    },

    {
      name:"♫ Ye Kürküm  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8f801c31e8405ff60058234c597198cc.mp3 ",
      duration:""
    },

    {
      name:"♫ Tik Tak ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5b2fcf069252590c1a9ffcfc21368e78.mp3 ",
      duration:""
    },

    {
      name:"♫ Gitme Sevgilim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ddfb28e0fe78ee83c833b285f584d4fe.mp3 ",
      duration:""
    },

    {
      name:"♫ Yaz Gazeteci ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/716aef032b26fe5be9b324e954897b49.mp3 ",
      duration:""
    },

    {
      name:"♫ Haram Geceler ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ab1b881ee1859a233b3247893d1b4623.mp3 ",
      duration:""
    },

    {
      name:"♫ Ayrılamam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/30e774ddfe8fe1e0c9d26cb443bde7d5.mp3 ",
      duration:""
    },

    {
      name:"♫ Baharda Dost Bilinmez ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0de319615388bdb5260f4e9a710e1982.mp3 ",
      duration:""
    },

    {
      name:"♫ Bal Dudaklım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dd6f0c6775cc436502b63fdfd098cf95.mp3 ",
      duration:""
    },

    {
      name:"♫ Ya Habibi ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a002c26fe0e0673c68820b3294b7dd17.mp3",
      duration:""
    },

    {
      name:"♫ Sevdim Mi Tam Severim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2129d51aeaeaf77691c9a28ce8ee8bd3.mp3 ",
      duration:""
    },

    {
      name:"♫ Ağlarsam Kızma Anne ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a11ba48a833565195e198b80458ab5e9.mp3",
      duration:""
    },

    {
      name:"♫ Haydi Düğüne ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e5d86b933bd93ee0d05e9f805db13a1a.mp3",
      duration:""
    },

    {
      name:"♫ Hayırlı İşler ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c409415762728510819112c858b41029.mp3 ",
      duration:""
    },

    {
      name:"♫ Hasret Yağar Dağlara  ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/888bcf71128b0e7c00e20debc21be24d.mp3",
      duration:""
    },

    {
      name:"♫ Taksi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/be4d6d17725dcfe223c4b652abaafc76.mp3 ",
      duration:""
    },

    {
      name:"♫ Yasaksın Bana ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/yasaksin-bana-Qe0M2WvGSc-0.mp3 ",
      duration:""
    },

    {
      name:"♫ Delilo ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a1724ade8c837fc5ea28356d74b06162.mp3 ",
      duration:""
    },

    {
      name:"♫ Acılardayım ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed721b688f793d44a1d78a4beed8cb3d.mp3 ",
      duration:""
    },

    {
      name:"♫  Narin Yarim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/62ce054d3fba58c536dc46b943a033c8.mp3 ",
      duration:""
    },

    {
      name:"♫ Götür Beni Gittiğin Yere",
      file:"https://cdn.muzikmp3indir.com/mp3_files/gotur-beni-gittigin-yere-4ZVLURjHmG-0.mp3 ",
      duration:""
    },

    {
      name:"♫ Ben Nasıl ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ea02b9ad9a29797df1362e28aee07669.mp3",
      duration:""
    },

    {
      name:"♫ Kaybolma Gözlerimden ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f3056e7af12bf584c8e7be4c4f9ae59a.mp3 ",
      duration:""
    },

    {
      name:"♫ Baba ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/10ece5f3f21219f2e844ba8fd42a8517.mp3 ",
      duration:""
    },

    {
      name:"♫ Bizim Çocuklarımız ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60ab1b5289746c869e9f50354d651c25.mp3 ",
      duration:""
    },

    {
      name:"♫ Yara Benim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c99da5f92fa2e5f4228077dab94f6796.mp3 ",
      duration:""
    },

    {
      name:"♫ Öldüren Sevda ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/191512dd8cb8c02bf1cf8305826ece7a.mp3 ",
      duration:""
    },

    {
      name:"♫ Güneşten Önce ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ddad26dc520f3bc4af43d775894ccc42.mp3",
      duration:""
    },

    {
      name:"♫ Neden Benim  ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/85ff654bc8fe5868e8e60ebf44c8f288.mp3 ",
      duration:""
    },

    {
      name:"♫ Unutabilsem ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/870a99b40ca47b307609a600c00b97b6.mp3 ",
      duration:""
    },

    {
      name:"♫ Dura Dura ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/de794fc8ef700a6746b2d3ef73afd14f.mp3 ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },


    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },

    {
      name:"♫  ",
      file:" ",
      duration:""
    },


    {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫ ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫   ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫   ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫  ",
      file:" ",
      duration:""
    },
 {
      name:"♫   ",
      file:" ",
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