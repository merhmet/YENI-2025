const channelsData = [
    
    


      { 
        id: "Sen Affetsen Ben Affetmem",
        name: "Sen Affetsen Ben Affetmem",
        visibilidad: "",
        tipo: "video",       
      source: "https://www.youtube.com/embed/2Mg7xErW_1c?autoplay=1&mute=1"
      },
      { 
        id: "Birileri Kandırmış",
        name: "Birileri Kandırmış",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/aRbj2MzaCFA?autoplay=1&mute=1"
      },
      { 
        id: "Her Şeyim Oldun Benim",
        name: "Her Şeyim Oldun Benim",
        visibilidad: "",
        tipo: "video",
        source: "https://www.youtube.com/embed/pF99jsq4I0k?autoplay=1&mute=1"
      },
      { 
          id: "Elimde Fotoğrafın",
          name: "Elimde Fotoğrafın",
          visibilidad: "",
          tipo: "video",
          source: "https://www.youtube.com/embed/VTkoxK4n3kM?autoplay=1&mute=1"
        },


      { 
          id: "Kostak & Nolur Hey",
          name: "Kostak & Nolur Hey",
          visibilidad: "",
          tipo: "video",
          source: "https://www.youtube.com/embed/3PCZFXU6n-M?autoplay=1&mute=1"
        },

    { 
      id: "Bana Neler Vadettin",
      name: "Bana Neler Vadettin",
      visibilidad: "",
      tipo: "video",
          source: "https://www.youtube.com/embed/6N9BLjT7HbI?autoplay=1&mute=1"
    },,/*


 

 





 










 


 







 



 



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
  