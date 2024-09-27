const channelsData = [
    
 
    { 
      id: "Yetim Yavrum ",
      name: "Yetim Yavrum ",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/bs4eji6HhFE?autoplay=1&mute=1"
    },

    { 
      id: "Yetim Yavrum ",
      name: "Yetim Yavrum ",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/VDPN1JIuluQ?autoplay=1&mute=1"
    },



    { 
      id: "Mühür Gözlüm",
      name: "Mühür Gözlüm",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/7Hp69yNvOAE?autoplay=1&mute=1"
    },



    { 
      id: "sen küçüksün ölemezsin",
      name: "sen küçüksün ölemezsin",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/go80wKF-LVI?autoplay=1&mute=1"
    },


    { 
      id: "sen küçüksün ölemezsin",
      name: "sen küçüksün ölemezsin",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/rAfJdUuvVfo?autoplay=1&mute=1"
    },

    { 
      id: "Evlat Acısı",
      name: "Evlat Acısı",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/r10pCo037Bc?autoplay=1&mute=1"
    },




    { 
      id: "GİDİYORUM HABERİN OLSUN",
      name: "GİDİYORUM HABERİN OLSUN",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/BoDsXvOizRk?autoplay=1&mute=1"
    },


    { 
      id: "Yaramsın",
      name: "Yaramsın",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/RXfyJquWvG4?autoplay=1&mute=1"
    },


    { 
      id: "Hayatım Paramparça",
      name: "Hayatım Paramparça",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/7WE4qoMxPUk?autoplay=1&mute=1"
    },


    { 
      id: "Çay var mı çay",
      name: "Çay var mı çay",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/nHm3d97YSUA?autoplay=1&mute=1"
    },



    { 
      id: "Acıların Kadını",
      name: "Acıların Kadını",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/NbSwsyg3QVs?autoplay=1&mute=1"
    },




      {                 
        id: "Ben Ne Yangınlar Gördüm",
        name: "Ben Ne Yangınlar Gördüm",
        visibilidad: "",
        tipo: "video",
          source: "https://www.youtube.com/embed/INBFgDVUUj0?autoplay=1&mute=1"
      },/*
      { 
        id: "c9",
        name: "C9",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/c9?volume=0&mute=1"
      },
     /* { 
        id: "uatv",
        name: "UATV",
        visibilidad: "",
        tipo: "video",
        source: "https://rudo.video/live/uatv"
      },
      
      { 
        id: "itvpatagonia",
        name: "ITV Patagonia",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/k_O0QiiyIKU?autoplay=1&mute=1"
      },*/
  ];

  function channelTemplate(channel) {
    return `
  
      <div class="channel-grid ${channel.id}-channel ${channel.visibilidad}">
          <div id="video" class="video-container" style="--aspect-ratio: 16 / 9;">
              <iframe id="player" width="100%" src="${channel.source}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="channel-name"><h4>${channel.name}</h4><a target="_BLANK" href="${channel.source}"><span class="new-window">Turis Tv</span><img width="16px" src="assets/img/Icon material-open-in-new.svg"></a></div>
      </div>
    `;
  }
  
  document.getElementById("grid-channels").innerHTML = `
    ${channelsData.map(channelTemplate).join("")}
  `;
  