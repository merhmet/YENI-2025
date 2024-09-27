const channelsData = [
    
    
    { 
      id: "Ayyaş Herif ",
      name: "Ayyaş Herif ",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/UyesACrhhjU?autoplay=1&mute=1"


    },      
    { 
        id: "Koçum Benim",
        name: "Koçum Benim",
        visibilidad: "",
      source: "https://www.youtube.com/embed/4b6BAvB1rL0?autoplay=1&mute=1"
    },
    {       
        id: "Zühtü",
        name: "Zühtü",
        visibilidad: "",
        tipo: "video",
      source: "https://www.youtube.com/embed/CNg8526379A?autoplay=1&mute=1"
    },
    { 
        id: "Alo Alo Sen misin",
        name: "Alo Alo Sen misin",
        visibilidad: "",
        tipo: "video",
      source: "https://www.youtube.com/embed/3nZlyfBT4vs?autoplay=1&mute=1"
    },
    { 
        id: "Çat Çat Çat Kapı",
        name: "Çat Çat Çat Kapı",
        visibilidad: "",
        tipo: "video",      
      source: "https://www.youtube.com/embed/5pUPf1CWFAc?autoplay=1&mute=1"
    },



    { 
        id: "Koçum Benim",
        name: "Koçum Benim",
        visibilidad: "",
        tipo: "video",      
      source: "https://www.youtube.com/embed/gC15eKi1e6M?autoplay=1&mute=1"
    },




    { 
        id: "Sarı Çiçek",
        name: "Sarı Çiçek",
        visibilidad: "",
        tipo: "video",      
      source: "https://www.youtube.com/embed/J6FGpPAvRZA?autoplay=1&mute=1"
    },





    { 
        id: "Aman Yolla",
        name: "Aman Yolla",
        visibilidad: "",
        tipo: "video",        
      source: "https://www.youtube.com/embed/LrT82bkcA?autoplay=1&mute=1"
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
  