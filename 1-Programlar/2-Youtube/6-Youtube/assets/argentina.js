const channelsData = [
    
    
    { 
      id: "Ceylan",
      name: "Ceylan",
      visibilidad: "",
      tipo: "video",
      source: "https://www.youtube.com/embed/vZmJnYBCPHs?autoplay=1&mute=1"


    },      
    { 
        id: "Devamke",
        name: "Devamke",
        visibilidad: "",
      source: "https://www.youtube.com/embed/4DOMcjVNq-w?autoplay=1&mute=1"
    },
    {       
        id: "Gözleri Bela",
        name: "Gözleri Bela",
        visibilidad: "",
        tipo: "video",
      source: "https://www.youtube.com/embed/1xn3nEvc5Oc?autoplay=1&mute=1"
    },
    { 
        id: "Ceylan Ft. Alişan ",
        name: "Ceylan Ft. Alişan ",
        visibilidad: "",
        tipo: "video",
      source: "https://www.youtube.com/embed/QkYBMuB6sco?autoplay=1&mute=1"
    },
    { 
        id: "Ceylan Ft. Alişan",
        name: "Ceylan Ft. Alişan",
        visibilidad: "",
        tipo: "video",      
      source: "https://www.youtube.com/embed/KBq-Z-pv6Ck?autoplay=1&mute=1"
    },
    { 
        id: "Aşkından Yanayım Mı",
        name: "Aşkından Yanayım Mı",
        visibilidad: "",
        tipo: "video",        
      source: "https://www.youtube.com/embed/lzmjXDvK4EA?autoplay=1&mute=1"
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
  