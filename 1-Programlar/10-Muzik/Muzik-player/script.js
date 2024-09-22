/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Rahmi Aydın ",
          artist: "Alyanaklı Sevdiğim",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/4fab6b7965ea8636291fcbfa1a25a056.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Aşığın Aşıkları İçin",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/01d149d8cb930950cd38a9c57a6c6892.mp3",
          favorited: true
        },
        {
          name: "Rahmi Aydın",
          artist: "Badı Sabah",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/bdeb7f70a31ac67e407826e2af2ca233.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Bir Bilene Soralım",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/612291eeba07a68d6d8f9b58fe7b883c.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Bir Gelin Ağlar",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/00f33f912257ac8e2d4bfde64cf98ff8.mp3",
          favorited: true
        },
        {
          name: "Rahmi Aydın",
          artist: " Bir Görüşte Aşık Oldum",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/c8c55171578144821f153f94a9f873b7.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Canımın içi",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/5b929f892c3c108824a11ea98612b317.mp3",
          favorited: true
        },
        {
          name: "Rahmi Aydın",
          artist: "Çilekeş",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/4d940b66e48b3da40b03d658590468ad.mp3",
          favorited: false
        },

        {
          name: "Rahmi Aydın",
          artist: "Düşenin Dostu Yokmuş",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/fc7144e086419c03d6c10796dcef2c1e.mp3",
          favorited: false
        },

        {
          name: "Rahmi Aydın",
          artist: "Ela Gözlüm",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/73048f20cebca7b972f707ea6dd88b26.mp3",
          favorited: false
        },

        {
          name: "Rahmi Aydın",
          artist: "Babam ",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/21aedba16be7fa457809cc3812ab9672.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Geceler",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/28a3a208bff925c28be189d3d1cb111a.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Gidecekmisin",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/975f4e482d94334f051bd149d651f2ec.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Gidemem Köyüme",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/9fee046af7903787baeaa99c58fc3caf.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Kıyamam Sana Ben",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/2e3ee5b28c7b3b0d85427755835f28b8.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Sen Uyurken Gideceğim",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/75ea037d96694bd76264417fe1c3db0c.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Senin Hasretin Varken Bu Şehirde Yaşanmaz",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/8961090525586b67168a5350c371e6e1.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Sevda Yüklü Kervanlar",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/72067353feefdc91ed3b4a1711746fdf.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Taş Yürekli",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/6778bab8b7d891d23a17bb4dfa4a152d.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Vazgeç Gönlüm ",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/4f3278e36fd580df3cb0a03fb292fc0b.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Yıkıla Yıkıla Yaşayan Benim",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/60bfeff9f3b7979e77065d61b23c825b.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Doldurun Kadehimi",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://cdn.muzikmp3indir.club/mp3_files/ed0202077d11e6e210e6346492f22f3a.mp3",
          favorited: false
        },
        {
          name: "Rahmi Aydın",
          artist: "Erdoğan Dombıra",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://mp3kulisi.mobi/indir/Ugur-Isilak/Single/Ugur-Isilak-Erdogan-Dombira.mp3",
          favorited: false
        },

        {
          name: "Rahmi Aydın",
          artist: "Birleşmiş Milletler",
          cover: "https://ucretsizmuzikmp3.com/compressed/ef4b983639754cdae250589253106d1d.png",
          source: "https://mp3kulisi.mobi/indir/ugur-isilak/burasi-dunya-2023/ugur-isilak-birlesmis-milletler.mp3",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});