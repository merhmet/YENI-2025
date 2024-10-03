
if ($_('.channel-list.glide')) {
    let a = new Glide('.channel-list.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 6,
        gap: 10,
        breakpoints: {
            480: {
                perView: 1
            },
            768: {
                perView: 4
            },
            1200: {
                perView: 6
            }
        },
    }).mount();
    $_('.channel-area .channel-left').addEventListener('click', () => a.go('<')), $_('.channel-area .channel-right').addEventListener('click', () => a.go('>'));
}
if ($_('.matches-day.glide')) {
    let fglide = new Glide('.matches-day.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 10,
        breakpoints: {
            480: {
                perView: 1
            },
            768: {
                perView: 3
            },
            1200: {
                perView: 5
            }
        },
    }).mount();
    $_('.match-list-area .channel-left').addEventListener('click', function(){
        fglide.go('<');
    });
    $_('.match-list-area .channel-right').addEventListener('click', function() {
        fglide.go('>');
    });
}

let liveMatchList = (function() {
    return Array.from($$_('[data-tabbed="live"] .single-match'))
})();
let nextMatchList = (function() {
    return Array.from($$_('[data-tabbed="next"] .single-match'))
})();
window.addEventListener('click', function(a) {
    if (a.target.closest('[data-tabbed="next"] .single-match') && !$_('.next-match-splash')) {
        let div = document.createElement('DIV');
        div.classList.add('next-match-splash');
        div.innerHTML = '<div class="not"><strong>YAYINLANACAKLAR</strong> sekmesindeki maçlar, <u>başlama saatinden 30 dakika önce</u> <strong>CANLI</strong> sekmesinde aktif olup yayına başlayacaktır.</div><div class="close-splash"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" class=""></path></svg></div>';
        return $_('.player-attributes').append(div)
    }
    if (a.target.closest('.single-channel[data-stream]')) {
        let el = a.target.closest('.single-channel[data-stream]');
        let streamid = el.dataset.stream;
        if ($_(`[data-tabbed="live"] [data-stream="${streamid}"]`)) {
            return $_(`[data-tabbed="live"] [data-stream="${streamid}"]`).click();
        }
    }
    if (a.target.closest('.bet-matches [data-stream]') && $_('.odds-container')) {
        let el = a.target.closest('.bet-matches [data-stream]');
        oddsYerlestir(el);
        return $_('.now-playing') && $_('.now-playing').remove();
    }
    if (a.target.closest('.close-splash')) return $_('.next-match-splash').remove();
    if (a.target.closest('[data-tabbed="live"] .single-match') && $_('.next-match-splash'))
        return $_('.next-match-splash').remove();
    if (a.target.closest('[data-matchfilter]')) {
        let filterName = a.target.closest('[data-matchfilter]').dataset.matchfilter;
        let activeTab = $_('[data-focustab].active').dataset.focustab;
        let matches = activeTab == "live" ? Array.from($$_('[data-tabbed="live"] .single-match')) : Array.from($$_('[data-tabbed="next"] .single-match'));
        $_(`[data-tabbed="${activeTab}"] .list-tabbed .active`).classList.remove('active');
        a.target.closest('[data-matchfilter]').classList.add('active');
        if (filterName.length) {
            matches.forEach(item => item.classList.remove('show'))
            return matches.forEach(item => {
                if (item.dataset.matchtype == filterName && item.title.includes($_(`[data-tabbed="${activeTab}"] input`).value.trim().toLowerCase())) {
                    item.classList.add('show')
                }
            })
        } else {
            return matches.forEach(item => item.classList.add('show'))
        }
    }
    if (a.target.closest('.search-toggle')) {
        let a = $_('[data-focustab].active').dataset.focustab;
        return ($_(`[data-tabbed="${a}"] .match-search`).classList.toggle('show'), setTimeout(() => {
            $_(`[data-tabbed="${a}"] .match-search input`).focus().setSelectionRange(0, 999);
        }, 10));
    }
    if (a.target.closest('[data-plyr="wide"]'))
        return ($_('.player-grid').classList.toggle('wide'), (a.target.closest('[data-plyr="wide"]').querySelector('.plyr__tooltip').textContent = $_('.player-grid.wide') ? 'Daralt' : 'Genişlet'), $_('.live-player').scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        }));
    if (a.target.closest('[data-news]')) {
        let {
            newstitle: e
        } = a.target.closest('[data-news]').dataset;
        return (
            [...$$_('.news-show[data-active]')].forEach(function(item){ item.removeAttribute('data-active','true') }), 
            ($_('.picked-news-title').textContent = e), 
            ($_(`.news-show[data-show="${e}"]`).dataset.active = !0), 
            ($_(`.news-show[data-show="${e}"]`).querySelector('img').src = $_(`.news-show[data-show="${e}"]`).querySelector('[data-src]').dataset.src), 
            $_('.news-content').scrollTo(0, 0), $_('.news-content').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            }));
    }
    if (a.target.closest('[data-focustab]')) {
        let e = a.target.closest('[data-focustab]').dataset.focustab;
        return ($_('[data-focustab].active').classList.remove('active'), $_('[data-tabbed].active').classList.remove('active'), $_(`[data-tabbed="${e}"]`).classList.add('active'), $_(`[data-focustab="${e}"]`).classList.add('active'));
    }
    if (a.target.closest('[data-showradar]')) {
        let e = a.target.closest('[data-showradar]').dataset.showradar;
        return ($_('[data-radarblock].active').classList.remove('active'), $_('[data-showradar].active').classList.remove('active'), a.target.closest('[data-showradar]').classList.add('active'), $_(`[data-radarblock="${e}"]`).classList.add('active'));
    }
    if (a.target.closest('.sr-switcher__live')) {
        $_('.sr-scrollbars__container').classList.toggle('unlimit')
    }
    if (a.target.closest('[data-focusw]')) {
        let id = a.target.closest('[data-focusw]').dataset.focusw;
        $_('.widget-content .active').classList.remove('active');
        $_('.score-sports .active').classList.remove('active');
        a.target.closest('[data-focusw]').classList.add('active');
        return $_(`.widget-content #${id}`).classList.add('active')
    }
    if (a.target.closest('[data-stream].single-match')) {

        let item = a.target.closest('[data-stream]');

        if(item.classList.contains('active')){
            return;
        }
        let streamID = a.target.closest('[data-stream]').dataset.stream;
    
        if(location.protocol !== streamID.substr(0,streamID.indexOf(':')+1)){
            if(streamID.indexOf("https:") > -1)
                window.location.href = BASE_URL + 'canli-izle/' + item.dataset.seolink;
            else
                window.location.href = BASE_URL.replace("https","http") + "canli-izle/" + item.dataset.seolink;
            
        }

        if ($$_('[data-stream].active,[data-livecdn].active')) {
            Array.from($$_('[data-stream].active,[data-livecdn].active')).forEach(item => item.classList.remove('active'));
        }
     
        Array.from($$_(`[data-stream="${streamID}"]`)).forEach(item => item.classList.add('active'));
   

        history.pushState(item.dataset.seolink,item.dataset.title ,BASE_URL + 'canli-izle/'+item.dataset.seolink);

        Canli(streamID);
      
        return player.play();
    }
   
});
window.addEventListener('submit', function(a) {
    a.preventDefault();
})
window.addEventListener('input', function(a) {
    //alert("arama");
    if (a.target.closest('[data-searchmatch]')) {
        
        let e = a.target.closest('[data-searchmatch]').value.trim().toLowerCase(),
            t = $_('[data-focustab].active').dataset.focustab,
            s = 'live' == t ? liveMatchList : nextMatchList;
        if ($_(`[data-tabbed="${t}"] [data-matchfilter].active`).dataset.matchfilter.length) {
            ($_('[data-tabbed].active .list-area .real-matches').innerHTML = s.filter(a => a.title.toLowerCase().includes(e) && !a.dataset.stream.includes("betlivematch") && a.dataset.matchtype == $_(`[data-tabbed="${t}"] [data-matchfilter].active`).dataset.matchfilter).map(a => a.outerHTML).join(''));
            
        } else {
            ($_('[data-tabbed].active .list-area .real-matches').innerHTML = s.filter(a => a.title.toLowerCase().includes(e) && a.dataset.radarapi).map(a => a.outerHTML).join(''));
           
        }
    }
})