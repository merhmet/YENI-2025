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
      name:"♫ Ayvacı ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ee31c1f2cdc334e8e8d82a392b51fe89.mp3 ",
      duration:""
    },

    {
      name:"♫ Ateş Yanar Köz Olur ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3e54d3aa7de06b292ba01cbdb8b74c19.mp3 ",
      duration:""
    },


    {
      name:"♫ Gine Gam Yükü ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5730aaa81dbc6099732c3eba7e496490.mp3 ",
      duration:""
    },
 {
      name:"♫ Al Kırmızı Yeleğim ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e9a858d33ddd0ea3e1b179d1dcc07d83.mp3 ",
      duration:""
    },
 {
      name:"♫ Vur Bir Daha ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4d66a823a4e3a56d1ee583e274c1cc38.mp3 ",
      duration:""
    },
 {
      name:"♫ Garip Bir Kuş ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2785715973b51a9c7a8beb3207c00a0c.mp3 ",
      duration:""
    },
 {
      name:"♫ Gurban Olum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ba47ee30ef6c712a5cd4748fd0219668.mp3 ",
      duration:""
    },
 {
      name:"♫ Benim Ağam ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bac38be9ff636948e74b57e4e3c7dabb.mp3",
      duration:""
    },
 {
      name:"♫ Fırat ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6440349e28a4f5c9b87b26c5783e6ed5.mp3 ",
      duration:""
    },
 {
      name:"♫ Kara Üzüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9e81f369a14a32a4c98209aebd677c5d.mp3 ",
      duration:""
    },
 {
      name:"♫ Vur Sineme ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f413a43cefbc73eca79e910afeaa0809.mp3 ",
      duration:""
    },
 {
      name:"♫ Geceler Yarim Oldu ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2a7dccc2e307bea8175bc42c54087d31.mp3 ",
      duration:""
    },
 {
      name:"♫ Tükendi Nahtı Ömrüm ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/88dd6c073982d5ecb970a1e39a7104d9.mp3 ",
      duration:""
    },
 {
      name:"♫ Vur Eller Oynasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dc09250f32f8753494168f34132e767d.mp3",
      duration:""
    },
 {
      name:"♫ Pencereden El Eder ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9e9d3580f33f3eb31dee0f53dfd7fd20.mp3 ",
      duration:""
    },
 {
      name:"♫ Asker Yolu Beklerim ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/339267d4926fa85dd1691a98fcc3cd55.mp3",
      duration:""
    },
 {
      name:"♫ Şu Dağlarda Kar Olsaydım ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7115674ab2b31500b35de5fc5d2aa322.mp3",
      duration:""
    },
 {
      name:"♫ Bir Güzel'in Aşığıyam ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6e85c54aef442bec5ba711ab4e85a8c8.mp3 ",
      duration:""
    },
 {
      name:"♫ Dersim Dört Dağ İçinde ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/216056994cf14224a52ef0bc6a54579f.mp3 ",
      duration:""
    },
 {
      name:"♫ Gül Endam ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b112241afe9decd163fdfb224324f136.mp3",
      duration:""
    },
 {
      name:"♫ Seher Yeli ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3ca34096ad99859d71c8257aa82536fa.mp3 ",
      duration:""
    },
 {
      name:"♫ Boyu Posu Olsun ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/532423f3565f7310d21e1cdb8158adea.mp3 ",
      duration:""
    },
 {
      name:"♫ Ah Ayrılık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c82b6a2f5650738c3dcfd33201d11c55.mp3 ",
      duration:""
    },
 {
      name:"♫ Antep Güzeli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b74cce6667c4ed3451e077f47a7bd778.mp3 ",
      duration:""
    },
 {
      name:"♫ İmam Ali ",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b16ec32b8e0a2f67671be0dfb2ae1b74.mp3",
      duration:""
    },
 {
      name:"♫ Şalvarında Şişesi ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0a5807b3eb87b37353e1b841c4cfe2ea.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Yudum Su ",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6929ffa5ff971baf96a8f26084eed683.mp3 ",
      duration:""
    },
 {
      name:"♫ Hangi Bağın Bağısan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/38ef976bab070e3eedef376548839836.mp3 ",
      duration:""
    },
 {
      name:"♫ Nesine Yandım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6c44df29d8dfd19bcd2af2d761dc9d5d.mp3 ",
      duration:""
    },
 {
      name:"♫ Al Mendili",
      file:" https://cdn.muzikmp3indir.com/mp3_files/295a4d3a1786c53a78b615d3a67f3958.mp3 ",
      duration:""
    },
 {
      name:"♫ Çoğu Bitti Azı Kaldı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b2d85cc891ec17de0e3d35c2d4349315.mp3 ",
      duration:""
    },
 {
      name:"♫ Sabret Gönül",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6a8c3a73a0ae1a10bb1c4a1ac58a8858.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağlarım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/62ef4acc571fe44361463e90c776e1e0.mp3 ",
      duration:""
    },
 {
      name:"♫ Gül İsterim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b9873b0221475e83844371097a0ec4ee.mp3  ",
      duration:""
    },
 {
      name:"♫ Taşa Verdim Yanımı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8673362506a684f8cbd06558941b6bba.mp3 ",
      duration:""
    },
 {
      name:"♫ Ah Neyleyim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f8a0c1ec8a6b77f8e82a49a824b1a38d.mp3 ",
      duration:""
    },
 {
      name:"♫ Elinde Orak",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ca729c18f1484ecac6fbf88010939c53.mp3 ",
      duration:""
    },
 {
      name:"♫ Güller Arasında",
      file:" https://cdn.muzikmp3indir.com/mp3_files/086d4b7d7c717783b78f97339802d26d.mp3 ",
      duration:""
    },
 {
      name:"♫ Bulguruma Yanam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/da032e0e2e2585bc0ee232426a6d88ec.mp3  ",
      duration:""
    },
 {
      name:"♫ Potbori Halay",
      file:" https://cdn.muzikmp3indir.com/mp3_files/4de91643e0e5027c252f35bd89512cf8.mp3 ",
      duration:""
    },
 {
      name:"♫ Nerelere Gidem",
      file:" https://cdn.muzikmp3indir.com/mp3_files/96a483fa923ba5db32bd08e5f4cab31d.mp3 ",
      duration:""
    },
 {
      name:"♫ Zalim Yar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0495d0bc395bf6e5051a0e3974996d64.mp3 ",
      duration:""
    },
 {
      name:"♫ Gücüm Kalmadı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fe5e7f459047798cbd2ffe232ea71fab.mp3 ",
      duration:""
    },
 {
      name:"♫ Gurbette Ömrüm Geçecek",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0851e9d791b795640ef2eb91f11f6c57.mp3 ",
      duration:""
    },
 {
      name:"♫ Karakaş Gözlerin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/588ebec73121fbcb9d4aa3a74ee44df2.mp3 ",
      duration:""
    },
 {
      name:"♫ Fırat Kenarında",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ae9836effd650325f8ba6a0ad3f6f23d.mp3 ",
      duration:""
    },
 {
      name:"♫ Yeşilim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ed959979c317c25f2eec0a674a186d5e.mp3 ",
      duration:""
    },
 {
      name:"♫ Of Çeksem Karşıki Dağlar Yıkılır",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6b6f0dcdcec2117d04608ca6aade7621.mp3 ",
      duration:""
    },
 {
      name:"♫ Sabah İle",
      file:" https://cdn.muzikmp3indir.com/mp3_files/84bf73f0fd6e26d9661d69372d10cf91.mp3 ",
      duration:""
    },
 {
      name:"♫ Maraba",
      file:" https://cdn.muzikmp3indir.com/mp3_files/04e90448346a45e2d964828e2aa040ef.mp3 ",
      duration:""
    },
 {
      name:"♫ Çok Özledim Dersim Seni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/264c3db94487ea493a31b2dcf71845c0.mp3 ",
      duration:""
    },
 {
      name:"♫ Yalan Dünya",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ba552c9158418018241564ac9fd8267f.mp3 ",
      duration:""
    },
 {
      name:"♫ Munzur Dağı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f52637590f57aaa1823156607a4f35e2.mp3 ",
      duration:""
    },
 {
      name:"♫ Lo Dilo",
      file:" https://cdn.muzikmp3indir.com/mp3_files/02e863ea9f7cc132f1029ad16e99c9b7.mp3 ",
      duration:""
    },
 {
      name:"♫ Dostu Sildim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f870a449591e7f47ebacd6984d35e49b.mp3 ",
      duration:""
    },
 {
      name:"♫ Zeyno",
      file:" https://cdn.muzikmp3indir.com/mp3_files/aeabc490b2598bdd2b2b8f65d667189a.mp3 ",
      duration:""
    },
 {
      name:"♫ Nerelere Gidem",
      file:" https://cdn.muzikmp3indir.com/mp3_files/28efb90c88bf07c0a96b78d1be2e4b76.mp3 ",
      duration:""
    },
 {
      name:"♫ Allı Turnam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f0de5643eda0ae32d40879188dfd8a00.mp3 ",
      duration:""
    },
 {  
      name:"♫ Day Walla Nabe",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f820dc2d223672e7311ec3fa0371c264.mp3  ",
      duration:""
    },
 {
      name:"♫ Çok Özledim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b4c9295de89b3d5ada97711bd8e7ba3a.mp3 ",
      duration:""
    },
 {
      name:"♫ Dardayım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e8cc627251292d7201964551f9bf1498.mp3 ",
      duration:""
    },
 {
      name:"♫ Hımhıme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/941f20075ff30a28878ce30c7f787fa9.mp3 ",
      duration:""
    },
 {
      name:"♫ Ne Gezer",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6b7167d22d875023cfb6076b68ebceae.mp3 ",
      duration:""
    },
 {
      name:"♫ Yollarına Güller Dökem",
      file:" https://cdn.muzikmp3indir.com/mp3_files/063d7d78f53c4778cca5d42570235994.mp3 ",
      duration:""
    },
 {
      name:"♫ Narım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/42ca3714b0906e79025072d9ff48c03c.mp3 ",
      duration:""
    },
 {
      name:"♫ Yeli Nazıl Yare",
      file:" https://cdn.muzikmp3indir.com/mp3_files/613e3082828fe715a5ddbba3dc3c3270.mp3 ",
      duration:""
    },
 {
      name:"♫ Beritan",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c93bcb84ef3438427909faddbd36780f.mp3 ",
      duration:""
    },
 {
      name:"♫ Havar Bu Sene",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8808354ecefb2fd9b931fb808dc473cb.mp3 ",
      duration:""
    },
 {
      name:"♫ Hak Can İçinde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/064205484d09916ab4da02f963119040.mp3  ",
      duration:""
    },
 {
      name:"♫ Yolcuyum Bu Dağlarda",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9a39473a0a3f5fb8cc12b2201b303c9b.mp3 ",
      duration:""
    },
 {
      name:"♫ Mavi Yelek",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2669b65697c498173214abbb437ee8ec.mp3 ",
      duration:""
    },
 {
      name:"♫ Eyvah",
      file:" https://cdn.muzikmp3indir.com/mp3_files/357e1121eb4ef35d731fb12475933b99.mp3 ",
      duration:""
    },
 {
      name:"♫ Bin Derdim Var İdi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7ac3dbebd58dc456f95e028771a33d78.mp3 ",
      duration:""
    },
 {
      name:"♫ Oy Havar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/746206b09e7ca64a80a498c7d294350f.mp3 ",
      duration:""
    },
 {
      name:"♫ Mamko (Amca Kızı)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/90acb16bdc9dcb58ae6ab986f71c23de.mp3 ",
      duration:""
    },
 {
      name:"♫ Daye",
      file:" https://cdn.muzikmp3indir.com/mp3_files/86507d802886b0f267f5ee82de2a1a82.mp3 ",
      duration:""
    },
 {
      name:"♫ Haram Olsun İster Al",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2e3af7d0b5b4dc9541dd99c1ff212f12.mp3 ",
      duration:""
    },
 {
      name:"♫ Lele",
      file:" https://cdn.muzikmp3indir.com/mp3_files/2117399c9f583a036a50e19c50d07a1b.mp3 ",
      duration:""
    },
 {
      name:"♫ Hakka Gider",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cba8aa42be16148a6a41ecd5db38d8f7.mp3 ",
      duration:""
    },
 {
      name:"♫ Taş Duvarlar",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c3dac855e04ef3bbd158d75e000ad7d4.mp3 ",
      duration:""
    },
 {
      name:"♫ Şemmame",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6e98aa7daf8eefc17338b93112c84fcf.mp3 ",
      duration:""
    },
 {
      name:"♫ Sewe",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f7ff6eddff16a7cbe568351c44c4d81.mp3  ",
      duration:""
    },
 {
      name:"♫ Le Hazalım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0b1e31518236eebf17305df20029269a.mp3 ",
      duration:""
    },
 {
      name:"♫ Yıkılası Karlı Dağlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/700cbce7e378ef1ff86a2260558ce037.mp3  ",
      duration:""
    },
 {
      name:"♫ Ayvacı Geliyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/291fa34db9e4510b324236331efa9d16.mp3  ",
      duration:""
    },
 {
      name:"♫ Daye (Anne)",
      file:" https://cdn.muzikmp3indir.com/mp3_files/0718bb8b07361edeac8b5db47c23883b.mp3 ",
      duration:""
    },
 {
      name:"♫ Ben Anayım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/655673a4f1ee10c21e99755bc653f300.mp3 ",
      duration:""
    },
 {
      name:"♫ Dokunma Keyfine",
      file:" https://cdn.muzikmp3indir.com/mp3_files/7b749eee4e6ba806866a2bc6b866f6ed.mp3 ",
      duration:""
    },
 {
      name:"♫ Çepki",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f1c301710928e18f5114279f753355af.mp3  ",
      duration:""
    },
 {
      name:"♫ Hazalım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/412b31dc5658f07e8fba508818a8e49a.mp3 ",
      duration:""
    },
 {
      name:"♫ Ağlaram",
      file:" https://cdn.muzikmp3indir.com/mp3_files/827aac4261fa95416a3b141eb8450569.mp3 ",
      duration:""
    },
 {
      name:"♫ Gülümse",
      file:" https://cdn.muzikmp3indir.com/mp3_files/5287047e60510cac1933dd1cf832c94d.mp3 ",
      duration:""
    },
 {
      name:"♫ Çit Lele",
      file:" https://cdn.muzikmp3indir.com/mp3_files/44690b4c3dc4a50b5cd6ee138f6faa97.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Seher Vakti",
      file:" https://cdn.muzikmp3indir.com/mp3_files/42ef77bfd4f304bbcef25f99e93cc965.mp3 ",
      duration:""
    },
 {
      name:"♫ Bahçasına Bir Hoyrat Girmiş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4724c0cd572e433992967e2a3b268ebd.mp3  ",
      duration:""
    },
 {
      name:"♫ Bayramın Olsun",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c96ff317664eacb97589436b7e1e12d9.mp3 ",
      duration:""
    },
 {
      name:"♫ Dağların Karı Yetmez",
      file:" https://cdn.muzikmp3indir.com/mp3_files/6289a2c9253d6871a1d7c6bf83530a31.mp3 ",
      duration:""
    },
 {
      name:"♫ Ayrılık Kokulu Yarim",
      file:" https://cdn.muzikmp3indir.com/mp3_files/fac3b0c0657a3ecd4fbae0879d4f067c.mp3 ",
      duration:""
    },
 {
      name:"♫ Fit Dediler",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c2a687c9039cdd29758f4e94fc89472a.mp3 ",
      duration:""
    },
 {
      name:"♫ Ma Ne Olmiş",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f33c1eaeeb452db4d55c4bcb1871369c.mp3 ",
      duration:""
    },
 {
      name:"♫ Giydim Çarıklarımı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/69f1923ef30ee7bbc3a90ca976542b38.mp3 ",
      duration:""
    },
 {
      name:"♫ Deme Deme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8d775088d85a085d0383b434685d00bf.mp3 ",
      duration:""
    },
 {
      name:"♫ Ay Oğlan",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cc75311ef9f59cc07206c82e1367cc20.mp3 ",
      duration:""
    },
 {
      name:"♫ Şu Karşıki Dağda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0886d020ee888b3489572d07637c885f.mp3  ",
      duration:""
    },
 {
      name:"♫ Değme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/ea47f375e401489d115392af337de1f3.mp3 ",
      duration:""
    },
 {
      name:"♫ Muhtaç Etme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9c3a91d60729607fb2f7d29fabaa6c2b.mp3 ",
      duration:""
    },
 {
      name:"♫ Nurhak Semahı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/01c92f84938aedd531e174b0844c6e9f.mp3 ",
      duration:""
    },
 {
      name:"♫ Kaleden Kaleye",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bfcf24e6c462f02019380332a2011629.mp3 ",
      duration:""
    },
 {
      name:"♫ Tadım Tuzum",
      file:" https://cdn.muzikmp3indir.com/mp3_files/9a789caf620699fd972d947a4e4131de.mp3 ",
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