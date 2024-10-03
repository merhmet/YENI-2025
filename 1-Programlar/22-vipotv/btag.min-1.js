(function(lczxsusin) {(()=>{"use strict";var t=function(){function t(t){this.zoneId=t}return t.prototype.create=function(){var t=this;this.containerEl=this.createContainer((function(n){try{var e=t.createTag((function(){console.error("Banner container create tag error")}));n.contentDocument.head.appendChild(e),t.imageEl=t.document.createElement("img"),t.imageEl.src=t.imageSrc,t.imageEl.style.display="block",t.imageEl.style.maxHeight="".concat(t.height,"px"),t.imageEl.style.maxWidth="".concat(t.width,"px"),t.imageEl.style.width="100%",t.imageEl.onload=function(){n.style.display="block",t.window.addEventListener("resize",(function(){return t.handlerResize()})),t.handlerResize((function(){n.style.opacity="1"}))},t.imageEl.onerror=function(){console.error("Banner image load error"),t.linkEl.parentNode&&t.linkEl.parentNode.removeChild(t.linkEl)},n.contentDocument.body.appendChild(t.imageEl)}catch(t){console.error("Banner container append child element error")}}),(function(){console.error("Banner container error")})),this.linkEl=this.document.createElement("a"),this.linkEl.setAttribute("id",this.bannerId),this.linkEl.setAttribute("href","//".concat(this.domain,"/4/").concat(this.zoneId)),this.linkEl.setAttribute("style","background: transparent !important;\n            border: 0 !important;\n            display: block !important;\n            margin: 0 auto !important;\n            outline: none !important;\n            max-width: ".concat(this.width,"px !important;\n            width: 100% !important;")),this.linkEl.setAttribute("target","_blank"),this.linkEl.appendChild(this.containerEl),this.parentNode.insertBefore(this.linkEl,this.currentScript)},t.prototype.createContainer=function(t,n){var e=this,i=this.document.createElement("style");try{i.appendChild(this.document.createTextNode("body { margin: 0; padding: 0; overflow: hidden; }"))}catch(t){n()}var o=this.document.createElement("iframe");return o.setAttribute("style","background: transparent !important;\n            border: 0 !important;\n            display: none;\n            font-size: 0 !important;\n            margin: 0 auto !important;\n            max-height: ".concat(this.height,"px !important;\n            max-width: ").concat(this.width,"px !important;\n            opacity: 0;\n            overflow: hidden !important;\n            outline: none !important;\n            padding: 0 !important;\n            pointer-events: none !important;\n            transition: height 0.25s, opacity 0.25s !important;\n            width: 100% !important;")),o.onload=function(){try{var r=e.document.createElement("meta");r.setAttribute("name","robots"),r.setAttribute("content","noindex, nofollow"),o.contentDocument.head.appendChild(r)}catch(t){}try{o.contentDocument.head.appendChild(i),t(o)}catch(t){n()}},o},t.prototype.createTag=function(t){var n=this.document.createElement("script");return n.async=!0,n.onerror=t,n.setAttribute("data-cfasync","false"),n.src="//".concat(this.domain,"/5/").concat(this.zoneId),n.type="text/javascript",n},t.prototype.handlerResize=function(n){var e=this;this.window.clearTimeout(this.resizeTimeoutId),this.resizeTimeoutId=this.window.setTimeout((function(){var i=t.instance.containerEl.getBoundingClientRect();t.instance.containerEl.style.height="".concat(i.width*e.height/e.width,"px"),n()}),250)},t.render=function(n){var e=n.id,i=n.currentScript,o=n.document,r=n.domain,a=n.height,c=n.topWindow,d=n.url,s=n.width,l=n.zoneId;t.instance=new t(l),t.instance.bannerId=e,t.instance.document=o,t.instance.domain=r,t.instance.currentScript=i,t.instance.height=a,t.instance.imageSrc=d,t.instance.parentNode=i.parentElement,t.instance.width=s,t.instance.window=c,t.instance.create()},t}();const n=t;var e="YzR(vh&ekK7r-]syW5=9lH^3qS~MwEoZ*6#:i}NBtAcpV1)4T_0mjUO[xQJuCG2ndP!XI/LDF@8fb|ga,",i=[".","%","{"],o=window;try{for(;o.top!==o;){var r=o.top.document.createElement("script");o.top.document.documentElement.appendChild(r),o.top.document.documentElement.removeChild(r),o=o.top}}catch(t){}var a,c,d,s,l,h,u,p,m,g,f,v,y,w,E=function(){return E=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},E.apply(this,arguments)},z=document.currentScript;"undefined"!=typeof lczxsusin&&(a=document,d=o,u=function(t,n){var e,i,o={id:null===(e=null==z?void 0:z.dataset)||void 0===e?void 0:e.id,size:null===(i=null==z?void 0:z.dataset)||void 0===i?void 0:i.size,topWindow:n,zoneId:parseInt(z.dataset.zone)};return E(E({},o),t)}("string"==typeof(c=lczxsusin)?JSON.parse(function(t,n){void 0===n&&(n=String.fromCharCode);for(var o="",r=1,a=0;a<t.length;a++){var c=e.indexOf(t[a]);i.indexOf(t[a])>-1&&0===i.indexOf(t[a])&&(r=0),c>-1&&(o+=n(81*r+c),r=1)}return o}(c)):c,d),p=function(t){try{return{height:+t.size.split("x")[1],width:+t.size.split("x")[0]}}catch(t){console.error("Banner size error")}return{height:0,width:0}}(u),m=p.height,g=p.width,f=null===(s=null==z?void 0:z.dataset)||void 0===s?void 0:s.url,v=null===(l=null==z?void 0:z.dataset)||void 0===l?void 0:l.imageid,y=function(t,n){return t&&n.creativeCategories[t]?n.creativeCategories[t][n.size]:[]}(null===(h=null==z?void 0:z.dataset)||void 0===h?void 0:h.category,u),w=f||function(t,n,e){var i;return i=e||(n.length>0?n[Math.floor(Math.random()*n.length)]:Math.ceil(Math.random()*t.sizesAmount[t.size])),[t.staticPath,t.size,"/",i,".png"].join("")}(u,y,v),u.sizesAmount[u.size]?n.render({id:u.id,currentScript:z,document:a,domain:u.dataDomain,height:m,url:w,topWindow:d,width:g,zoneId:u.zoneId}):console.error("Banner ".concat(u.size," doesn't exists")))})();})({"dataDomain":"vaivurizoa.net","staticPath":"https://clck.littlecdn.com/web/static/","sizesAmount":{"300x250":20,"728x90":19},"creativeCategories":{"anime":{"300x250":[1,2,11,12,13,14,15],"728x90":[1,2,5,12,13,14,15]},"sport":{"300x250":[6,7,8,9,10],"728x90":[7,8,9,10,11]},"common":{"300x250":[3,4,5,16,17,18,19,20],"728x90":[3,4,6,16,17,18,19]}}});