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
      name:"♫ Kim Olursan Ol",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b8ea8af122282d711a2f61db5c7b382b.mp3 ",
      duration:""
    },

    {
      name:"♫ İntizarım Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a91ae05cdb010f2c732516ea71f99cf7.mp3 ",
      duration:""
    },
    {
      name:"♫ Kul Hatasız Olmaz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/22e7435421563905442e3355868a00f0.mp3 ",
      duration:""
    },
    {
      name:"♫ Küsmeyin Aynalar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e1410a09ce0344fdbe7a29322556b73c.mp3 ",
      duration:""
    },
    {
      name:"♫ Ben Buyum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/878d8fdce44f16472255a98ac4f0edfc.mp3 ",
      duration:""
    },
    {
      name:"♫ Ben Tövbemi Geri Aldım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b71759722ffaa98039c35fdb739b9b16.mp3 ",
      duration:""
    },
    {
      name:"♫ Ağlama Küçüğüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/39d0ef1f7a5d9e485c946c32298297b9.mp3 ",
      duration:""
    },
    {
      name:"♫ İkimiz Bir Fidanın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fd4b71bd4d0a5c51eb95181cb9a7f617.mp3 ",
      duration:""
    },
    {
      name:"♫ Ben Köylüyüm",
      file:" https://cdn.muzikmp3indir.com/mp3_files/45fefea7860af379d7634ed9ea59c461.mp3",
      duration:""
    },
    {
      name:"♫ Kıskanıyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/76e5c3c150604727348d08d80f82ffa6.mp3 ",
      duration:""
    },
    {
      name:"♫ Güzel Alsın Canımı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/acdb2c17c1472c0bdc575fcc4df9db35.mp3 ",
      duration:""
    },
    {
      name:"♫ Son Mektup",
      file:"https://cdn.muzikmp3indir.com/mp3_files/78e2b33543391499f0b7db6346c34dd6.mp3 ",
      duration:""
    },
    {
      name:"♫ Küsmeyin Aynalar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/030447985f95426e40972e8f0a4b28cf.mp3 ",
      duration:""
    },

    {
      name:"♫ Bir Neden Arıyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/46309df8ec07367b4324164d3b3fe579.mp3 ",
      duration:""
    },

    {
      name:"♫ Aşk Yorgunuyum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/30fef6fe08a4741efbe36bc7464de690.mp3 ",
      duration:""
    },

    {
      name:"♫ Affettim Seni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0d3fe4767b719e435b413124b3c3b93e.mp3 ",
      duration:""
    },

    {
      name:"♫ Sevenler Zalim Olmaz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/79126a2fc349125b87851cd3bfa427aa.mp3 ",
      duration:""
    },

    {
      name:"♫ Ayırmayın Sevenleri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/59ab8bd34b40163e83750b015ab2b6c9.mp3 ",
      duration:""
    },

    {
      name:"♫ Dokunmayın Dünyama",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6c8fd73e6ec808d6f0507e32dc8e5222.mp3 ",
      duration:""
    },

    {
      name:"♫ Öleceksem Seninle",
      file:"https://cdn.muzikmp3indir.com/mp3_files/01fdadf71436b78550e2d3fad2e21be5.mp3 ",
      duration:""
    },

    {
      name:"♫ Günahkar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fbe627da3e4d3b0a5bc34fa2765e40a7.mp3 ",
      duration:""
    },

    {
      name:"♫ Pişman Değilim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/32fd8bed8bbd9e35df463f2094a38049.mp3 ",
      duration:""
    },

    {
      name:"♫ Acaba",
      file:"https://cdn.muzikmp3indir.com/mp3_files/07be3655fc09c417e08a7afbeac825f1.mp3 ",
      duration:""
    },

    {
      name:"♫ Bize Göre Değil Bu Dünya",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cce542307e4b4a8a2836568ce9e6b51e.mp3",
      duration:""
    },

    {
      name:"♫ Elveda Diyemezsin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/24383ed99dfd943503688e919b333909.mp3",
      duration:""
    },

    {
      name:"♫ Geleceksen Gel Artık",
      file:"https://cdn.muzikmp3indir.com/mp3_files/40b1f05342ee1a912892a890a8a2a1ae.mp3 ",
      duration:""
    },

    {
      name:"♫ Nedir Bende Olmayan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5307ca35fab791094f07ddb16e63abff.mp3 ",
      duration:""
    },

    {
      name:"♫ Gurbet Sevgilileri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5992cc598912c67eb2237b8bdf4d19d4.mp3 ",
      duration:""
    },

    {
      name:"♫ Kimdir Bu Adam",
      file:" https://cdn.muzikmp3indir.com/mp3_files/926baea05320af20569b122b6ff1aeaf.mp3",
      duration:""
    },

    {
      name:"♫ Sevenlerin Dünyası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dc15af611c0ffcd711272ec147d67073.mp3 ",
      duration:""
    },

    {
      name:"♫ Seven Unutmaz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b3e793f89fca324f27b77c6489d79df9.mp3 ",
      duration:""
    },

    {
      name:"♫ Hasretim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/09558b363677138364364f5f5b8533a9.mp3 ",
      duration:""
    },

    {
      name:"♫ Kimin İçin Yaşayayım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/001bcdf103584fb486645d515592e43d.mp3",
      duration:""
    },

    {
      name:"♫ Çare Arıyorum Gözyaşlarıma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/63b3a62522ff83eb9cba674d67ddce0d.mp3 ",
      duration:""
    },

    {
      name:"♫ Kader Değil",
      file:"https://cdn.muzikmp3indir.com/mp3_files/488aedc83a0a06bef2f3d2e63ed1bd13.mp3 ",
      duration:""
    },

    {
      name:"♫ Neden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/60e54ca2703af060b6397e64794353a7.mp3 ",
      duration:""
    },

    {
      name:"♫ Zalimler Ayıracak",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8c29b8ca56fdc6b973b3d32589800ada.mp3 ",
      duration:""
    },

    {
      name:"♫ Ayrılık Bitmiyor ki",
      file:"https://cdn.muzikmp3indir.com/mp3_files/024d60c08e76918bb6bd5af62fd9e103.mp3 ",
      duration:""
    },

    {
      name:"♫ Olmuyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f4b7f972d71a3d492d5606e79b88c120.mp3 ",
      duration:""
    },

    {
      name:"♫ Yaşamak Bu mu Beyim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5aaa54236d94123ac71e021630d7982a.mp3 ",
      duration:""
    },

    {
      name:"♫ Gecekondu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b33c5353e348ef66d10915f875381a90.mp3",
      duration:""
    },

    {
      name:"♫ Ey Millet İnsan Yokmu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b5fc6b2b11f10a6d53d04580dec3cddc.mp3 ",
      duration:""
    },

    {
      name:"♫ Sen Busun İşte",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cc1d7aa4d6e61a6828408a3cd74398c8.mp3 ",
      duration:""
    },

    {
      name:"♫ Senden Başkasına Yar Olamam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8719d2eb247b01e6e75915524df8a7b5.mp3 ",
      duration:""
    },

    {
      name:"♫ Yıkılası Gurbet Bırak Gideyim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/924ac5018312e28d2ee034ae2d765728.mp3 ",
      duration:""
    },

    {
      name:"♫ Ayırdılar İkimizi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/134e9ba87fe08eccbc3beccc7cbbedf7.mp3 ",
      duration:""
    },

    {
      name:"♫ İçin İçin Hıçkıran",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d87ca525e6056b734462b6ccdfb2bb71.mp3 ",
      duration:""
    },

    {
      name:"♫ Bir Senmisin Ağlayan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a722190c8aa8c243a5a4446cc905c689.mp3 ",
      duration:""
    },

    {
      name:"♫ Sevenler Ağlıyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bb2c61864e130eb98b2268c7d17623f2.mp3 ",
      duration:""
    },

    {
      name:"♫ Anlarsın Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2fa4b470dc0a05a3b56b8f1f3201c2fc.mp3 ",
      duration:""
    },

    {
      name:"♫ Çare Sensin Yarabbim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8460a6a422bc6bd09a8e22a8ad42182a.mp3 ",
      duration:""
    },

    {
      name:"♫ Umutsuz Yaşamak",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0dd3d3618c0a48f7e512e14caacdb22c.mp3 ",
      duration:""
    },

    {
      name:"♫ İnsafsız Sevgili",
      file:"https://cdn.muzikmp3indir.com/mp3_files/64f5e0807588775e58d1e60f791df129.mp3 ",
      duration:""
    },

    {
      name:"♫ Neyleyim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/be939fd810b9eaa8a7d0dafcf8bebb05.mp3 ",
      duration:""
    },

    {
      name:"♫ Sevenlerin Kaderi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aa04e5443381d691f7064e581eee4d34.mp3 ",
      duration:""
    },

    {
      name:"♫ Her Çare Sende",
      file:"https://cdn.muzikmp3indir.com/mp3_files/46987b5e1f753ba7751389a7e47f527f.mp3 ",
      duration:""
    },

    {
      name:"♫ Göç Eylemiş Nazlım Buradan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e8a55abcfa38e18f0866b18b3d83059c.mp3 ",
      duration:""
    },

    {
      name:"♫ Boynum Bükülü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ddc6aa25747822765fc5e0b5336ce6b0.mp3 ",
      duration:""
    },

    {
      name:"♫ İstanbul Toprağı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/243d080c134d95370b6d52670b34e3f4.mp3",
      duration:""
    },

    {
      name:"♫ Günler Varki Kederimden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7e1a50571de0f7ff9f69ec6dd9285bd0.mp3 ",
      duration:""
    },

    {
      name:"♫ Nazlım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ab6e8b235c9db6892ce54de6977bdc42.mp3 ",
      duration:""
    },

    {
      name:"♫ Çarem Sensin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fc444f404cc8674a2ddb5042678ea225.mp3 ",
      duration:""
    },

    {
      name:"♫ Ben Gidince",
      file:"https://cdn.muzikmp3indir.com/mp3_files/54905c980dee9b6848ed477b88e60abc.mp3 ",
      duration:""
    },

    {
      name:"♫ Kula Kulluk Yakışmıyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/032978bd1fb8968acb91f5c006e49b33.mp3 ",
      duration:""
    },

    {
      name:"♫ Suçum ve Cezam",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2abb0e6db9a165bd331c3ca264031a47.mp3 ",
      duration:""
    },

    {
      name:"♫ Maziye Dönecek miyiz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/217eba08a1014be542dd8e2f4fc0d13c.mp3 ",
      duration:""
    },

    {
      name:"♫ Bekleme Yolumu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6100d1126bd4f652782e6d573899f113.mp3 ",
      duration:""
    },

    {
      name:"♫ Teselliye Gerek Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5f90e104225ae4b36f074735389f23f3.mp3 ",
      duration:""
    },

    {
      name:"♫ Dayanamam Hasretine",
      file:" https://cdn.muzikmp3indir.com/mp3_files/97e4b14e252f72a1c0663005fda47ae0.mp3",
      duration:""
    },

    {
      name:"♫ Ne Oldu Bize",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed9dca2e0304aa604d15c20f788349a0.mp3 ",
      duration:""
    },

    {
      name:"♫ Almanya Sokakları",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c60e9aa89d9bfc43b5854dc46741f547.mp3 ",
      duration:""
    },

    {
      name:"♫ Yollarımız Ayrıldı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0fc494be288a6a1318a35099769e0904.mp3 ",
      duration:""
    },

    {
      name:"♫ Oyun Havası",
      file:"https://cdn.muzikmp3indir.com/mp3_files/971ce4395bda57333e5085bb431a30ae.mp3 ",
      duration:""
    },

    {
      name:"♫ Yine Kapında",
      file:"https://cdn.muzikmp3indir.com/mp3_files/024f9003b6d4580b2fdde041e484de68.mp3 ",
      duration:""
    },

    {
      name:"♫ Uzaklarda Olsanda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e99ff2e86525b5c4a3187170d06b8473.mp3 ",
      duration:""
    },

    {
      name:"♫ Dönmek Yok mu Ey Sevgilim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/caf2a9166603a681440795c40c346c4d.mp3 ",
      duration:""
    },

    {
      name:"♫ Seven Yanmasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/564af3af5f5faeb15def794bc837c156.mp3 ",
      duration:""
    },

    {
      name:"♫ Sebepte Sen Çare de Sen",
      file:" https://cdn.muzikmp3indir.com/mp3_files/cb5ed9e0a1cc0a91bc87034fde43f8d4.mp3",
      duration:""
    },

    {
      name:"♫ Sen Kadersiz Ben Kadersiz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b6fd0487f581e3bb828f2349c5151fb1.mp3 ",
      duration:""
    },

    {
      name:"♫ Hayal Olmasın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7034e0dc11da197d6474b213afc65dd1.mp3 ",
      duration:""
    },

    {
      name:"♫ Seven Anlar Diyordun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b5cc6b901072ddf6b0cc7d37400cefe7.mp3 ",
      duration:""
    },

    {
      name:"♫ Güzel Alsın Canımı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cb2c7e3a875c56470a5c98e8225898ee.mp3 ",
      duration:""
    },

    {
      name:"♫ Kul İsyankar Olmaz mı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fba8e0adb4c4169a78f7b6ebc1221186.mp3 ",
      duration:""
    },

    {
      name:"♫ Garipler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/35b54bbded6fac44f938bdd23d74492a.mp3 ",
      duration:""
    },

    {
      name:"♫ Sarı Kız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/81088327a855d5d1a1d0c3908943bc23.mp3 ",
      duration:""
    },

    {
      name:"♫ Bu Mahalleden Göçmeli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/aae0a5932bda65d27169aaad8781f48a.mp3 ",
      duration:""
    },

    {
      name:"♫ Bizden Değildir",
      file:" https://cdn.muzikmp3indir.com/mp3_files/d332aa716fdd9a8fbce69e652c4b2c42.mp3",
      duration:""
    },

    {
      name:"♫ Bir Mecnun Yarattın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7d81bf951da314f310dde50c94925035.mp3 ",
      duration:""
    },

    {
      name:"♫ Asker Mektubu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/f06dea94a3e2593278b3b088d538aac3.mp3",
      duration:""
    },

    {
      name:"♫ Kırasım Geliyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8075d123e5ef716b62ee14370dd9ce96.mp3 ",
      duration:""
    },

    {
      name:"♫ Ya Beni Sev Ya Onu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/697bc3a2f2942624fd9ba084c7dfe878.mp3 ",
      duration:""
    },

    {
      name:"♫ Küsmesin Aynalar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/009d1a4f30204175fce3dbf7093115c1.mp3 ",
      duration:""
    },

    {
      name:"♫ Ahu Gözlüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9c9436e9635cf9746693a118adf9e099.mp3 ",
      duration:""
    },

    {
      name:"♫ Yaşanmıyor Dünya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/de973684900469afa28eba75c3335f44.mp3 ",
      duration:""
    },

    {
      name:"♫ Sana Dua Etsinler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f7192cbd137251d57b7bb0ee8775364.mp3 ",
      duration:""
    },

    {
      name:"♫ Sabır Ver Allahım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f27031e2fa12e1d1cbeba70867988058.mp3 ",
      duration:""
    },

    {
      name:"♫ Sen Güzelsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cf1e6402c89a6fa0ee3bf2c1fe46d12b.mp3 ",
      duration:""
    },

    {
      name:"♫ Üstümü Örtün Geceler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cfd63e053d005872d61249b3df77bcb3.mp3 ",
      duration:""
    },

    {
      name:"♫ Tutsağız İkimiz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5c2e5346262360be4cf5d234e0e8bdad.mp3",
      duration:""
    },

    {
      name:"♫ Mutlu Et Rabbim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c49aee862cb0bef44dcfb3f904d70f9d.mp3 ",
      duration:""
    },

    {
      name:"♫ Dersim Dört Dağ İçinde",
      file:"https://cdn.muzikmp3indir.com/mp3_files/41881ff914c658c3ee3e7232a526ac34.mp3 ",
      duration:""
    },
    {
      name:"♫ Sabır Ey Gönül",
      file:"https://cdn.muzikmp3indir.com/mp3_files/548edb86e25836465704b86b4707b630.mp3 ",
      duration:""
    },
    {
      name:"♫ Leylası Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/166d4aaeea6bc1c99fef46db20bff0e3.mp3 ",
      duration:""
    },
    {
      name:"♫ Kurban Olduğum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b9bed39fc807cdbf5469ad871656f8b4.mp3 ",
      duration:""
    },

    {
      name:"♫ Aramızda Biri Varsa",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4d154f0e603cedcd44e5564c99f23322.mp3 ",
      duration:""
    },

    {
      name:"♫ İkimiz Bir Fidanın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3d72beec825a550aa1c03ded30ddc0cc.mp3 ",
      duration:""
    },

    {
      name:"♫ Ben Sevdim İşte",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1488cb7abfc63f87f951cc316e52a86e.mp3",
      duration:""
    },

    {
      name:"♫ Kavuşmamız İmkansiz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f9e3c2227557ee7cbb4bd1f0d4320c3b.mp3 ",
      duration:""
    },

    {
      name:"♫ Sorma Beni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/99f082952a244394f3805a257b2c9ede.mp3",
      duration:""
    },

    {
      name:"♫ Bir An Önce Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/920a62430deb9c1c3e36e75c001e3532.mp3 ",
      duration:""
    },

    {
      name:"♫ He Desende Yok Desende",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d26818d6dba99cbe78ba1e9c85ec9229.mp3 ",
      duration:""
    },

    {
      name:"♫ Lütfen",
      file:"https://cdn.muzikmp3indir.com/mp3_files/27c131ed91709d03aafba71deeda1cea.mp3 ",
      duration:""
    },

    {
      name:"♫ Seni Elde Görmek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2d26648eb6cbf6a57d5c57c02f78a414.mp3 ",
      duration:""
    },

    {
      name:"♫ Sen Benimsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e64fa98fc2af9506a6105316d796b038.mp3 ",
      duration:""
    },

    {
      name:"♫ Ayrılmak Kaderdi",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1b765643ea29817e12b65b340aabb0be.mp3",
      duration:""
    },

    {
      name:"♫ Aşkınla Ettin Divane",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8410299f4e2c18bcfea2bc3bc54eabed.mp3 ",
      duration:""
    },

    {
      name:"♫ Eden Utansın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6f276b79823c0ef73bb4dc840d3f2423.mp3 ",
      duration:""
    },

    {
      name:"♫ Ben Buyum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/557c4fee35e67057d5a6e92a5d54b3c7.mp3 ",
      duration:""
    },

    {
      name:"♫ Kumralım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ac4bd2bbf6b138dcf43a0ef672a35e85.mp3 ",
      duration:""
    },

    {
      name:"♫ Beni Unutma",
      file:"https://cdn.muzikmp3indir.com/mp3_files/89d1354bb95f8b04a2a93b4594c38a25.mp3 ",
      duration:""
    },

    {
      name:"♫ Gitme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b5dafccd676ca1c93a7d27fd42240eba.mp3 ",
      duration:""
    },

    {
      name:"♫ Askerin Türküsü",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fcce42836b5d9195a67ba8bbc75922f3.mp3 ",
      duration:""
    },

    {
      name:"♫ Rezerveni Yaptın Mı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/735f4ef5c1db34123df442f17d2bf758.mp3 ",
      duration:""
    },

    {
      name:"♫ Gelme",
      file:" https://cdn.muzikmp3indir.com/mp3_files/b50c1726090cbaebf1ccad80cd90b888.mp3",
      duration:""
    },

    {
      name:"♫ Götürün",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0d963561e3bf16b2af62baca38000950.mp3 ",
      duration:""
    },

    {
      name:"♫ Ötme Bülbül Ötme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/70c14b0aded5ed28a5cda3adb74709fe.mp3 ",
      duration:""
    },
    {
      name:"♫ Ölmemi Bekliyorlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9164744983818d3113f3f05f0efd689c.mp3 ",
      duration:""
    },
    {
      name:"♫ Vay Be",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c9bbeee76a9aa53eabd97bccb4241d0f.mp3 ",
      duration:""
    },
    {
      name:"♫ Gönül Meyhanesi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5e13390ca0fae7ae47060b31b1d38020.mp3 ",
      duration:""
    },
    {
      name:"♫ Gül Be Meleğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/99cdfe47e817c57548b4856d19378355.mp3 ",
      duration:""
    },
    {
      name:"♫ Bana Hatırlat",
      file:"https://cdn.muzikmp3indir.com/mp3_files/51130e943ba3d531594cb89b3e679912.mp3 ",
      duration:""
    },
    {
      name:"♫ Dert Babasıyım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/eb30a822d716d17a7830fce568ec9c8c.mp3 ",
      duration:""
    },
    {
      name:"♫ Sen Unutulamazsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/485a947022a765bb8be2812e731b72e6.mp3 ",
      duration:""
    },
    {
      name:"♫ Hayırsız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a3e5aa857929598cf4588365b20cc829.mp3 ",
      duration:""
    },
    {
      name:"♫ Aç Be Meyhaneci",
      file:"https://cdn.muzikmp3indir.com/mp3_files/721985168005ab9ec1b922dfaa58de80.mp3 ",
      duration:""
    },
    {
      name:"♫ Hadi Canım Sende",
      file:"https://cdn.muzikmp3indir.com/mp3_files/da8b0c879ea1e43e78a197ab8169da1b.mp3 ",
      duration:""
    },
    {
      name:"♫ İster Kıskanç De",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f68868192ac9be6535b8b4ed898749f5.mp3 ",
      duration:""
    },
    {
      name:"♫ Son Mektup",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3c250ad0b497e6995d6104b6b1f69b30.mp3",
      duration:""
    },
    {
      name:"♫ Ne Tez Unuttun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ee73323c2b9cf7fb9253b783093b5d13.mp3 ",
      duration:""
    },
    {
      name:"♫ Seni Çok Özledim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/11455d3a845eb605ceb64282cf856618.mp3 ",
      duration:""
    },
    {
      name:"♫ İnsan Aldanırsa",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c9814a66988ba3c0e674b9f984e96f6c.mp3 ",
      duration:""
    },
    {
      name:"♫ Tövbelerim Bozulur",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a41ed7f4483609174df84c37b3400d16.mp3",
      duration:""
    },
    {
      name:"♫ Anlatamadım (Şiir)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d5905ffea866de298f594dadcf256b93.mp3 ",
      duration:""
    },
    {
      name:"♫ Töre",
      file:"https://cdn.muzikmp3indir.com/mp3_files/291635541a21c51dcde11f4c8c91f94c.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu Yüzden",
      file:"https://cdn.muzikmp3indir.com/mp3_files/66f4f89632474a53805cf9694ae130dd.mp3 ",
      duration:""
    },
    {
      name:"♫ İftira",
      file:"https://cdn.muzikmp3indir.com/mp3_files/78f8eab35aea94de08b73d4277e20070.mp3 ",
      duration:""
    },
    {
      name:"♫ Ah Ah Ah",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5876b7783f1fa22f0ab0f96efa348347.mp3 ",
      duration:""
    },
    {
      name:"♫ Geç Kalmadın Mı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5b1a9c117cd6f3d5e8028c1cdf58dcd0.mp3",
      duration:""
    },
    {
      name:"♫ Kötü Şaka",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5949e046296d124c739f50d8c76dee8b.mp3 ",
      duration:""
    },
    {
      name:"♫ Bende Bir İnsanım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/58d12580806d78c3574ebd66878cff3a.mp3 ",
      duration:""
    },
    {
      name:"♫ Köyüme Dönüyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7b71c52ee08b80a8f60331ffe9655b65.mp3 ",
      duration:""
    },
    {
      name:"♫ Kimsem Yokki",
      file:"https://cdn.muzikmp3indir.com/mp3_files/edc5582bd7821903b87ddc4a60f6e328.mp3 ",
      duration:""
    },
    {
      name:"♫ Asla",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5e0ce24d23a0ee28545c3963a6ba9167.mp3 ",
      duration:""
    },
    {
      name:"♫ Biz Ayrılamayız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a484f2b9fdda172f586cb107050b6a11.mp3 ",
      duration:""
    },
    {
      name:"♫ Vay Zalim Vay",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ab95e82b01191769741a8ca75ca051d9.mp3 ",
      duration:""
    },
    {
      name:"♫ İyi Biliriz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/be63a056d941bb3c178fe9a196f084f8.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Fırsat Verebilsen",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c9176ba279e8f74e0a5d601e45b4ca22.mp3 ",
      duration:""
    },
    {
      name:"♫ Öf Be Öf",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f7f70e14b620f6ef23f895e0c5af3f33.mp3 ",
      duration:""
    },
    {
      name:"♫ Yanarım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8ab56ca7adfa5a5c23141e90cc2ee489.mp3 ",
      duration:""
    },
    {
      name:"♫ Bizim Sevdamız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fd0f7f88e54e66d673cc8287633d455f.mp3 ",
      duration:""
    },
    {
      name:"♫ Bana İşkence Ettiler",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bfabccbe3080204889db4284d7257e05.mp3",
      duration:""
    },
    {
      name:"♫ Anlayamazsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4560eb85a888ed96bd7966c5ca1dcfa3.mp3 ",
      duration:""
    },
    {
      name:"♫ Sev Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5ceca6bd5199db4db1ee655a2b6b9b64.mp3 ",
      duration:""
    },
    {
      name:"♫ Hiçmi Önemim Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7b2581b965a019a0b21d59e2b96825f2.mp3 ",
      duration:""
    },
    {
      name:"♫ Seni Seviyorum Ya",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e4ee55f3d85c566ebd5e81564a80882d.mp3 ",
      duration:""
    },
    {
      name:"♫ Ben Köylüyüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0dcf001c6c6479e6cfba806599cf618c.mp3 ",
      duration:""
    },
    {
      name:"♫ Mayınlar Döşenmiş Yüreğime",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a80a6b510226b17fc052e3634741ea65.mp3 ",
      duration:""
    },
    {
      name:"♫ Sür Arabacı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/250aa8c34e8d00c5e430075d7e1e66c1.mp3 ",
      duration:""
    },
    {
      name:"♫ Saklayamıyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/856e582175b5b224971da0510ccf5499.mp3 ",
      duration:""
    },
    {
      name:"♫ Falcı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fa165e7b9a6bd097a07e04eddbceef53.mp3 ",
      duration:""
    },
    {
      name:"♫ Son Veda",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a05485bb9514f8e9423573b4a2d7d0d5.mp3 ",
      duration:""
    },
    {
      name:"♫ Yüreğimin Sevinci",
      file:"https://cdn.muzikmp3indir.com/mp3_files/facbd344cbdab16c04c75a7c8b3b95b9.mp3 ",
      duration:""
    },
    {
      name:"♫ Kusurlarımı Ver",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1dfa1eb2a6f3ff2325a1160deb2d10ea.mp3 ",
      duration:""
    },
    {
      name:"♫ Nankörler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9535c56f2313b4c440657c1251a764b4.mp3 ",
      duration:""
    },
    {
      name:"♫ Hayret",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b0b3e3b10ca4241b7bafefdb2e6b340a.mp3 ",
      duration:""
    },
    {
      name:"♫ Gençliğimi Çaldı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e392604c77993364ec9dbe6bac8726b4.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Tek Gün",
      file:" https://cdn.muzikmp3indir.com/mp3_files/06fc390a4c8e5a0f53f4626d25f8f67c.mp3",
      duration:""
    },
    {
      name:"♫ Yuvamı Yıktın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9665ebe8b3a8cfa06a3364586bd4fce9.mp3 ",
      duration:""
    },
    {
      name:"♫ Ayırmasın Tanrım Bizi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/e294697c40146ec75ca15658ef029fb5.mp3 ",
      duration:""
    },
    {
      name:"♫ Vazgeçilmezmisin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/12e6997c4c897abd4f9bca9cb60ef5ff.mp3 ",
      duration:""
    },
    {
      name:"♫ Kul Hatasız Olmaz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7123a7a1afcc9df9d47b8d95ea1c55e9.mp3 ",
      duration:""
    },
    {
      name:"♫ Sen Bilirsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/33eeb0e8d1b714424991954df7d1a9c4.mp3 ",
      duration:""
    },
    {
      name:"♫ Gitmişse Gitmiş",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d31d84fc792c3610f2b7997830178d0c.mp3 ",
      duration:""
    },
    {
      name:"♫ Faydasız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d0979f85130cfcf28cf69780598b6d0c.mp3 ",
      duration:""
    },
    {
      name:"♫ Ya Sen Ya Hiç",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9f12098aa25b6790794c6711caf16a85.mp3 ",
      duration:""
    },
    {
      name:"♫ Bıkmadım",
      file:" https://cdn.muzikmp3indir.com/mp3_files/8adbf52c20470d2834d0073551825c91.mp3",
      duration:""
    },
    {
      name:"♫ Neredesin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a9cb4a945ab9e07304f392b05d9cc609.mp3",
      duration:""
    },
    {
      name:"♫ Gömüldüm",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c79a69cedb5d9e7d7f590916e7502497.mp3 ",
      duration:""
    },
    {
      name:"♫ Aşkların En Güzeli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/777eb047c1fcb541ec6df09bab777047.mp3 ",
      duration:""
    },
    {
      name:"♫ Kalbin Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9ac42e22b8cdf85405d87f48ec6f3df4.mp3 ",
      duration:""
    },
    {
      name:"♫ Daha Dur Dur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/241fa221cfa53faffa0ce1ed8a1dd916.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu Benim Hayatım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/97543709584518cba02cc09bcf67ccc1.mp3 ",
      duration:""
    },
    {
      name:"♫ Kader Öyle Mi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0ef871f973812fbe7c0a4e8432a471a3.mp3 ",
      duration:""
    },
    {
      name:"♫ Beddua",
      file:" https://cdn.muzikmp3indir.com/mp3_files/c7728303ebaa2b9043b3e7f238b908f3.mp3",
      duration:""
    },
    {
      name:"♫ Yaşayamam Sensiz",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f62fa4a38033d541a37e5ead19919b6d.mp3 ",
      duration:""
    },
    {
      name:"♫ O Sevgi Yetti",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f7ce3c41314e93874edddd262d94904b.mp3 ",
      duration:""
    },
    {
      name:"♫ Saramadın Sen Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0f54e969340dfd6ceb0ea8aa3c94677c.mp3 ",
      duration:""
    },
    {
      name:"♫ Sus Kalbim Sus",
      file:" https://cdn.muzikmp3indir.com/mp3_files/a8dd07e4b419a2e463ed87ed26cf1a92.mp3",
      duration:""
    },
    {
      name:"♫ Gönül Yaşlanmıyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/09e9394913f5a3651ee5fc3cd286f982.mp3 ",
      duration:""
    },
    {
      name:"♫ Bırak Çocukluğu",
      file:" https://cdn.muzikmp3indir.com/mp3_files/93373ca25b321682dd467d239a8d4aa4.mp3",
      duration:""
    },
    {
      name:"♫ Huzur Vermez Halay",
      file:"https://cdn.muzikmp3indir.com/mp3_files/2c2589b26fecece8c963542d8348709d.mp3 ",
      duration:""
    },
    {
      name:"♫ Gidiyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/98b5acd48f99ba8c9dbd84a78ff8c843.mp3 ",
      duration:""
    },
    {
      name:"♫ Ne Peki",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f395061096e529e65e34cec452c26b94.mp3 ",
      duration:""
    },
    {
      name:"♫ Ne Yaptım Ben Sana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9ec3d2ec8061182a58e1b667066db5f6.mp3 ",
      duration:""
    },
    {
      name:"♫ Aşka Saygın Yok",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5cabb78e218f695f98c68dc3412d8aff.mp3 ",
      duration:""
    },
    {
      name:"♫ Ne Değişecek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a885c7c35b6cd588dcf7439b7a9a1ffe.mp3 ",
      duration:""
    },
    {
      name:"♫ Ağır Gelir",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fbbccec87ab0fe9bd98410969fce7e6a.mp3 ",
      duration:""
    },
    {
      name:"♫ Bunlar Beni Seviyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3f8f3fc07b9b31654bc468d2254997ca.mp3",
      duration:""
    },
    {
      name:"♫ El Oldun Pul Oldun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6ed457a422fc6ff0d830c5719bb28fa5.mp3 ",
      duration:""
    },
    {
      name:"♫ Ağlarım İşte",
      file:"https://cdn.muzikmp3indir.com/mp3_files/551406be1460a6380e0e70720b8b7031.mp3 ",
      duration:""
    },
    {
      name:"♫ Sen Yoksun Diye",
      file:"https://cdn.muzikmp3indir.com/mp3_files/992fd86dcc006f743a447be84cdeb709.mp3 ",
      duration:""
    },
    {
      name:"♫ İyimi Böyle",
      file:"https://cdn.muzikmp3indir.com/mp3_files/976aa9b0b80ce29ebb89199a3253221a.mp3 ",
      duration:""
    },
    {
      name:"♫ Töreniz Batsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1afff1bb4f8470d3ef37edcd3aa66095.mp3 ",
      duration:""
    },
    {
      name:"♫ Sensiz Geceler",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bf8e780c07a62f73abd9f2ee3f256f7a.mp3 ",
      duration:""
    },
    {
      name:"♫ Kara Kız",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c349d357a849ef990b9f1a8f73d7664e.mp3 ",
      duration:""
    },
    {
      name:"♫ Bilirim Dönmeyeceksin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/195db6c9cfdeeb9939d11e9f6c88768a.mp3 ",
      duration:""
    },
    {
      name:"♫ Ne Manası Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f49cac186775dbb7ff6b15ba16495296.mp3 ",
      duration:""
    },
    {
      name:"♫ Şerefe Dostlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4a8a07e8a9bbc034b46f6f1c0b48ace1.mp3 ",
      duration:""
    },
    {
      name:"♫ Seni Aldatır Mıyım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/14a402040f7a3b1b96c920e337b06e40.mp3 ",
      duration:""
    },
    {
      name:"♫ Anne",
      file:"https://cdn.muzikmp3indir.com/mp3_files/efe706964d44118e7e4c5c0611fa7578.mp3 ",
      duration:""
    },
    {
      name:"♫ Ağlamayacağım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ff51beb5d560f353ed5328a7703192ae.mp3 ",
      duration:""
    },
    {
      name:"♫ Amca",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1f306e1aacce93e4153a924bcb42b23a.mp3",
      duration:""
    },
    {
      name:"♫ Zaman",
      file:"https://cdn.muzikmp3indir.com/mp3_files/a7100b72b60915ee80e9e2fb680742f4.mp3 ",
      duration:""
    },
    {
      name:"♫ Aşktan Anladığım Bu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/975675b26e4b9051e91c4b3683934673.mp3 ",
      duration:""
    },
    {
      name:"♫ en Mansurum Mansur Benim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/47360ebd3d29351f8385d9388232c226.mp3 ",
      duration:""
    },
    {
      name:"♫ Ah Zaman Amca (Şiir)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8269c52c5fc430bc24e2af22bdd62024.mp3 ",
      duration:""
    },
    {
      name:"♫ Bana Ne",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8361c54ebc4252aa9fd550934b35e0d4.mp3 ",
      duration:""
    },
    {
      name:"♫ Falcı (Enstrümantal)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1683544a3810f18211862f792091a3c5.mp3 ",
      duration:""
    },
    {
      name:"♫ Hadi Git",
      file:"https://cdn.muzikmp3indir.com/mp3_files/28ee4ea4114dda1db8a4d304711b2c96.mp3 ",
      duration:""
    },
    {
      name:"♫ Güller Beyaz Olsa Da",
      file:"https://cdn.muzikmp3indir.com/mp3_files/679d40bc8a8a16fbc40cf5700e72038f.mp3 ",
      duration:""
    },
    {
      name:"♫ Sakın Söyleme",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dda852225692a5288014028cdc401050.mp3 ",
      duration:""
    },
    {
      name:"♫ Bulutlar Ağlıyor",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0de72eb797ec85b1ee19d48c2b784beb.mp3 ",
      duration:""
    },
    {
      name:"♫ Hayatımın Adı Sensin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bf2700942da482a48c41e14eb9f24000.mp3",
      duration:""
    },
    {
      name:"♫ Bu Bizmiyiz Allahım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b54b392f845a0214de51a42179ca6978.mp3 ",
      duration:""
    },
    {
      name:"♫ Boyun Eğmem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/7440bbbfdb661255e0e52d055a760c8c.mp3 ",
      duration:""
    },
    {
      name:"♫ Bu Nasıl Töre",
      file:"https://cdn.muzikmp3indir.com/mp3_files/90d1650ff76e38d36e145f43293720b8.mp3 ",
      duration:""
    },
    {
      name:"♫ Mutluluğu Göstermedin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/cc8c5af01e6c719a2540dc2343076f0a.mp3 ",
      duration:""
    },
    {
      name:"♫ Utan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5f1331d895fee6b2b66a430795a46aca.mp3 ",
      duration:""
    },
    {
      name:"♫ Senden Vazgeçmem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6f537dfb846a4d386a50d09f67795a96.mp3 ",
      duration:""
    },
    {
      name:"♫ Hayat İkimize Güzel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/433742a052fbd7f3b2667019d0d86bc6.mp3 ",
      duration:""
    },
    {
      name:"♫ Oğul",
      file:"https://cdn.muzikmp3indir.com/mp3_files/77fc3bbf7fc52de6cd03046dab3c65dd.mp3 ",
      duration:""
    },
    {
      name:"♫ Gülüşlerinde Kadı Gözlerim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fcfc0eb5628b7688977f4c2d896b4dac.mp3 ",
      duration:""
    },
    {
      name:"♫ Yanılmışım Be",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1644215d75af5a9026a04f07ae2fc8e5.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Gün",
      file:"https://cdn.muzikmp3indir.com/mp3_files/32f2bc6265e7c2b1496d83db867276fd.mp3",
      duration:""
    },
    {
      name:"♫ Yar Olmaz",
      file:" https://cdn.muzikmp3indir.com/mp3_files/04cff92ce7eadbba17f517a56128b66d.mp3",
      duration:""
    },
    {
      name:"♫ Yar Olmaz (Enstrümantal)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f692ce7774c060354769bad75db80efe.mp3 ",
      duration:""
    },

    {
      name:"♫ Vuslat Çiçekleri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/vuslat-cicekleri-CiuaE7gNPF-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Bahardan Önce Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bahardan-once-gel-ruO9ZQNDj8-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Ben Cenneti Tez Bulurum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ben-cenneti-tez-bulurum-MBzGnCcIZO-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Düşmezdim Yerlere Eğilmezdi Başım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/dusmezdim-yerlere-egilmezdi-basim-NwmXB69gMk-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Kör Ebe",
      file:"https://cdn.muzikmp3indir.com/mp3_files/kor-ebe-otqyYuaMLX-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Vazgeçilmezimsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/vazgecilmezimsin-eRSghTasMw-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Seven Kıskanır",
      file:"https://cdn.muzikmp3indir.com/mp3_files/seven-kiskanir-McWPoSCshG-0.mp3 ",
      duration:""
    },
    {
      name:"♫ Öyle mi",
      file:"https://cdn.muzikmp3indir.com/mp3_files/c3947659812bd128235197c3e681a9bb.mp3 ",
      duration:""
    },
    {
      name:"♫ Kıskanıyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5d0de67a530405d2642ad5d4a822fce4.mp3 ",
      duration:""
    },
    {
      name:"♫ Beni Unutturan Başka Birimi Böylemi Olur",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b017c84ef41a1ed5766b74e540e0e89c.mp3 ",
      duration:""
    },
    {
      name:"♫ Intizarım Var",
      file:"https://cdn.muzikmp3indir.com/mp3_files/64e753d43155fde2f5bb6480e3b04d46.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevginin Bedeli",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5d359456d5d7c5ba782475b67d885d13.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevmek Bu mu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b8fdd6d491f76f5dda8ab261a473afb7.mp3 ",
      duration:""
    },
    {
      name:"♫ Git",
      file:"https://cdn.muzikmp3indir.com/mp3_files/19850aea6aeba323850cf24a33cc2a81.mp3 ",
      duration:""
    },
    {
      name:"♫ Sen Canımsın",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4a35791fe6f0411aefebddc278fabb39.mp3 ",
      duration:""
    },
    {
      name:"♫ Unutamam Seni",
      file:" https://cdn.muzikmp3indir.com/mp3_files/1061d93e128596a3e9eb56081b5082cb.mp3",
      duration:""
    },
    {
      name:"♫ Çocuk Kalsaydım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/fae808b2f01a907ce096f1b2d8e9eeaf.mp3 ",
      duration:""
    },
    {
      name:"♫ Sana Taptım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/59faa4e5edf815163eef9e73484f67f6.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevenleri Ayırmışlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4530f99ba0e74b754038a0d6d6db26dc.mp3 ",
      duration:""
    },
    {
      name:"♫ Hep Bana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/0f7e9502aded6706825b27566faf8eae.mp3 ",
      duration:""
    },
    {
      name:"♫ Yaşamak Bu Mu",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ef7d7cf43e04f974c256242ba438d301.mp3 ",
      duration:""
    },
    {
      name:"♫ Nasıl Gülelim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d4acff2514ea613e3096d914f4356d4e.mp3 ",
      duration:""
    },
    {
      name:"♫ Dönecek Misin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6aea6ee30c4c435e205ee93a3f156728.mp3 ",
      duration:""
    },
    {
      name:"♫ Bir Daha Bu Şehre Gelmem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/9328de8dbdc6a0b9233efd283c45bf20.mp3",
      duration:""
    },
    {
      name:"♫ O Taş Kalbinle Hiç Sorma Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b9808a18616cd75a60d5d3492d9e3408.mp3 ",
      duration:""
    },
    {
      name:"♫ Dağlara Gömün Beni",
      file:"https://cdn.muzikmp3indir.com/mp3_files/44c7e35ce5769577a2314c193611a761.mp3 ",
      duration:""
    },

    {
      name:"♫ Kızlar",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3735351ec12d1f25f647e6089295a2f7.mp3 ",
      duration:""
    },
    {
      name:"♫ Dünya Benim Değilsin",
      file:" https://cdn.muzikmp3indir.com/mp3_files/59964122899c2bf9ecd94f4e810bece5.mp3",
      duration:""
    },
    {
      name:"♫ Sevmeden Duramıyorum",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37356bdd33a1bcc1c3fede2fbfaeac3e.mp3 ",
      duration:""
    },
    {
      name:"♫ Uyan Be Kardeşim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1c0a0fa8f6027057c67a65f11b49d5ec.mp3 ",
      duration:""
    },
    {
      name:"♫ Biliyorum Dönmeyecek",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b7d10554dd026d5f4b7d8644e449c06f.mp3 ",
      duration:""
    },
    {
      name:"♫ Gardiyan",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d0a07b108a6bde52ee8d593567f971a6.mp3 ",
      duration:""
    },
    {
      name:"♫ Hatırladın Mı",
      file:" https://cdn.muzikmp3indir.com/mp3_files/bedd220e86e645d3c44f5e13233fb6fb.mp3",
      duration:""
    },
    {
      name:"♫ Haticem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/34dceb5c14ae1d0ddd0524d224698bfb.mp3 ",
      duration:""
    },
    {
      name:"♫ Gelme Postacı",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1f601cef564f14eb3207ea6dbf6b13bf.mp3 ",
      duration:""
    },
    {
      name:"♫ Sevdalıyım Sana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8a6bc56fb208950ec79419cd11db0c9a.mp3 ",
      duration:""
    },
    {
      name:"♫ Vazgeç Gönlüm",
      file:" https://cdn.muzikmp3indir.com/mp3_files/3085f71c20617a5b2b7fdbf1ab9c3f42.mp3",
      duration:""
    },
    {
      name:"♫ Ben Hep Kaybettim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/f4c6282894ee3f296f251a52bf784618.mp3 ",
      duration:""
    },
    {
      name:"♫ Gurbet Garipleri",
      file:"https://cdn.muzikmp3indir.com/mp3_files/37eecf032c9d0a89086f4f4971d49522.mp3 ",
      duration:""
    },
    {
      name:"♫ Sen Öyle Zannet",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d1e36e2005641c9855291df0bd41f5b5.mp3 ",
      duration:""
    },
    {
      name:"♫ Bizim Gönül-Dünyadan Yıldızlara",
      file:"https://cdn.muzikmp3indir.com/mp3_files/b7f6bce7709d035f551f70e02d6dd037.mp3 ",
      duration:""
    },
    {
      name:"♫ Dünyadan Yıldızlara",
      file:"https://cdn.muzikmp3indir.com/mp3_files/15842b2bd71b6165653d720888f96764.mp3 ",
      duration:""
    },
    {
      name:"♫ Günaydın (Hoş Geldin)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/28c5478b838b674eacb408963cb6590e.mp3 ",
      duration:""
    },
    {
      name:"♫ Rabbim Seni Korusun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/bad333cebaa092c74f00447d26afa128.mp3 ",
      duration:""
    },
    {
      name:"♫ Benim Dünyam Değilsin",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3b3c1027e50069a0beb54551d2020275.mp3",
      duration:""
    },
    {
      name:"♫ Öyle Zannet",
      file:"https://cdn.muzikmp3indir.com/mp3_files/d3323362daeb0fa96648642dd016f3cd.mp3 ",
      duration:""
    },
    {
      name:"♫ Göz Göre Göre",
      file:"https://cdn.muzikmp3indir.com/mp3_files/6bbb70ab743713ecb9873310bea7d0d4.mp3 ",
      duration:""
    },
    {
      name:"♫ Önce Gel",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3a9eaee41b853e6ced366db368f47ce2.mp3 ",
      duration:""
    },
    {
      name:"♫ Bizde Töre Bu Demem",
      file:"https://cdn.muzikmp3indir.com/mp3_files/78ba1f1730c4873b28e828c724c6f88d.mp3 ",
      duration:""
    },
    {
      name:"♫ Bahtın Açık Olsun",
      file:" https://cdn.muzikmp3indir.com/mp3_files/01fe1c62cf29ac112403f0a935984cb3.mp3",
      duration:""
    },
    {
      name:"♫ Yasaksın Sen Bana",
      file:"https://cdn.muzikmp3indir.com/mp3_files/5b5b649b88d69e52e270cc9f6638d131.mp3 ",
      duration:""
    },
 {
      name:"♫ Bir Bilebilsen",
      file:"https://cdn.muzikmp3indir.com/mp3_files/4ff7d7b51a2bb6a34ad795f6745fa1e2.mp3 ",
      duration:""
    },
 {
      name:"♫ Biri Sen Biri Ben",
      file:"https://cdn.muzikmp3indir.com/mp3_files/ed358cd85dc7e3784d294cf277f3d4ca.mp3 ",
      duration:""
    },
 {
      name:"♫ Seni Hiç Unutamadım",
      file:"https://cdn.muzikmp3indir.com/mp3_files/8ba3053d928e6a5379b69446f9b04e55.mp3",
      duration:""
    },
 {
      name:"♫ Dobra Dobra",
      file:" https://cdn.muzikmp3indir.com/mp3_files/e8398b0ef81cbedf5900849ed6ffbd8b.mp3",
      duration:""
    },
 {
      name:"♫ Bir Daha da Ölemem ki",
      file:"https://cdn.muzikmp3indir.com/mp3_files/3e77941786eb75aac8450f3602c25ec8.mp3 ",
      duration:""
    },
 {
      name:"♫ Ne Manası Var (Şiir)",
      file:"https://cdn.muzikmp3indir.com/mp3_files/55f591a44053317d7f38cd9635dbb0d9.mp3 ",
      duration:""
    },
 {
      name:"♫ Ne Zaman Güleceğim",
      file:"https://cdn.muzikmp3indir.com/mp3_files/067bd6642bbe46ab79a15d701ceeb06e.mp3 ",
      duration:""
    },
 {
      name:"♫ Yazıklar Olsun",
      file:"https://cdn.muzikmp3indir.com/mp3_files/1a53e9559dddf55b2e2b69ca01e027af.mp3 ",
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