function onYouTubeIframeAPIReady() {

  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');


var videos = [ 'ewlAvU8DOho','XArK1pIkA48','8G2B0H7BMoU','ba8KNR3IQSc','uEMNvizrslw','JKqUPyiB-s0','QoroDa2nnKo','fMptUkVboEg','SfG6jFklsIg','XolrYWYFACo','vXUpDAVZyHg','Vl_V74NvHoY','m89XUIKMCfA','wMRklYe3Vo4','wnGXmqnDkQY','W4inFsPbZuc','j6jL95BaSeM','mtKWWcg60qE','p0SKiivc5Qs','DSB3_m2dGb4','6w0YLvC33bk','IYmGUyXeXY8','Nmz81cBcJhc','rgQgi0vuzVA'
      ,'VNPV-kfDmpE','ZHn6S57RAO0','EW_2Un2Qzt4','UgYk7wGnghY','7K-N_QK5u7k','Kz_ELUkzWPo','G6v372o6HnE','Mb2GIEZqRAM','m89XUIKMCfA','WJaVAbVJfPA','zdR6vcsm6UU',
      'RucEQcLJluw','k_CtpKNQOBQ','b2iHljAKDT8','sAHpDTea6p4','pJAAwp4rxwc','fch61Gk6c6c','mYzzCYzUiq0','c4XBVCBMEI8','fch61Gk6c6c','1IYejfWvRk0','zyZjJicBK0U' ,
'YiwGXMWZJ3E','Ku0QyYG20rE','7rMrdcwBhNo','7srEsFK8hDA','W6ZuBrUhRFE'];







  var playlistThumbs = document.querySelector('.playlist-thumbs');

  var videoThumbs;
  var currentIndex = 0;

  videos.forEach(function(id, i){
    var activeClass = '';
    if ( i === currentIndex ) {
      activeClass = 'is-active';
    }
    playlistThumbs.innerHTML += '<li class="video-thumb '+activeClass+'"><img src="https://img.youtube.com/vi/'+id+'/default.jpg"/></li>';
  });
  
  videoThumbs = document.querySelectorAll('.video-thumb');
  
  initPlayer(videos[currentIndex]);
  
  
  var player;
  function initPlayer(id) {
    console.log('initPlayer');
    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    player = new YT.Player('player', {
      height: '250',
      width: '340',
      videoId: id,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  
  prevBtn.addEventListener('click', playPrevVideo);
  nextBtn.addEventListener('click', playNextVideo);

  // The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    console.log('onPlayerREady', event);
    event.target.playVideo();
  }
  
  function onPlayerStateChange(event) {
    if ( event.data === 0 ) { // video ended
      playNextVideo();
    }
  }

  function playNextVideo() {
    currentIndex += 1;
    player.loadVideoById(videos[currentIndex], 0, "large");
    for ( var i=0; videoThumbs.length > i; i++ ) {
      videoThumbs[i].className = videoThumbs[i].className.split('is-active').join('');
      videoThumbs[currentIndex].className += ' is-active';
    }
  }
  
  function playPrevVideo() {
    currentIndex -= 1;
    player.loadVideoById(videos[currentIndex], 0, "large");
    for ( var i=0; videoThumbs.length > i; i++ ) {
      videoThumbs[i].className = videoThumbs[i].className.split('is-active').join('');
      videoThumbs[currentIndex].className += ' is-active';
    }
  }
  
  
  
}