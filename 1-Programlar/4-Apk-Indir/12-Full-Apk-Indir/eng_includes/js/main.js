function set_tab_data(tno,ino)
{var elems=document.querySelectorAll("#tab-"+tno+" .tabs_list a");[].forEach.call(elems,function(el){el.classList.remove("current");});var this_tab=document.querySelector("#tab-"+tno+" #tab-item-hndlr-"+ino);this_tab.className+=" current";var elems2=document.querySelectorAll("#tab-"+tno+" .tab-item-data");[].forEach.call(elems2,function(el){el.classList.remove("current");});var this_tab2=document.querySelector("#tab-"+tno+" #tab-item-"+ino);this_tab2.className+=" current";}
function makeid()
{var text="";var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var i=0;i<5;i++)
text+=possible.charAt(Math.floor(Math.random()*possible.length));return text;};(function(root,factory){if(typeof define==='function'&&define.amd){define([],factory);}else if(typeof exports==='object'){module.exports=factory();}else{root.Marquee3k=factory();}}(this,function(){'use strict';class Marquee3k{constructor(element,options){this.element=element;this.selector=options.selector;this.speed=element.dataset.speed||0.25;this.pausable=element.dataset.pausable;this.reverse=element.dataset.reverse;this.paused=false;this.parent=element.parentElement;this.parentProps=this.parent.getBoundingClientRect();this.content=element.children[0];this.innerContent=this.content.innerHTML;this.wrapStyles='';this.offset=0;this._setupWrapper();this._setupContent();this._setupEvents();this.wrapper.appendChild(this.content);this.element.appendChild(this.wrapper);}
_setupWrapper(){this.wrapper=document.createElement('div');this.wrapper.classList.add('marquee3k__wrapper');this.wrapper.style.whiteSpace='nowrap';}
_setupContent(){this.content.classList.add(`${this.selector}__copy`);this.content.style.display='inline-block';this.contentWidth=this.content.offsetWidth;this.requiredReps=this.contentWidth>this.parentProps.width?2:Math.ceil((this.parentProps.width-this.contentWidth)/this.contentWidth)+1;for(let i=0;i<this.requiredReps;i++){this._createClone();}
if(this.reverse){this.offset=this.contentWidth*-1;}
this.element.classList.add('is-init');}
_setupEvents(){this.element.addEventListener('mouseenter',()=>{if(this.pausable)this.paused=true;});this.element.addEventListener('mouseleave',()=>{if(this.pausable)this.paused=false;});}
_createClone(){const clone=this.content.cloneNode(true);clone.style.display='inline-block';clone.classList.add(`${this.selector}__copy`);this.wrapper.appendChild(clone);}
animate(){if(!this.paused){const isScrolled=this.reverse?this.offset<0:this.offset>this.contentWidth*-1;const direction=this.reverse?-1:1;const reset=this.reverse?this.contentWidth*-1:0;if(isScrolled)this.offset-=this.speed*direction;else this.offset=reset;this.wrapper.style.whiteSpace='nowrap';this.wrapper.style.transform=`translate(${this.offset}px, 0) translateZ(0)`;}}
_refresh(){this.contentWidth=this.content.offsetWidth;}
repopulate(difference,isLarger){this.contentWidth=this.content.offsetWidth;if(isLarger){const amount=Math.ceil(difference/this.contentWidth)+1;for(let i=0;i<amount;i++){this._createClone();}}}
static refresh(index){MARQUEES[index]._refresh();}
static refreshAll(){for(let i=0;i<MARQUEES.length;i++){MARQUEES[i]._refresh();}}
static init(options={selector:'marquee3k'}){window.MARQUEES=[];const marquees=Array.from(document.querySelectorAll(`.${options.selector}`));let previousWidth=window.innerWidth;let timer;for(let i=0;i<marquees.length;i++){const marquee=marquees[i];const instance=new Marquee3k(marquee,options);MARQUEES.push(instance);}
animate();function animate(){for(let i=0;i<MARQUEES.length;i++){MARQUEES[i].animate();}
window.requestAnimationFrame(animate);}
window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(()=>{const isLarger=previousWidth<window.innerWidth;const difference=window.innerWidth-previousWidth;for(let i=0;i<MARQUEES.length;i++){MARQUEES[i].repopulate(difference,isLarger);}
previousWidth=this.innerWidth;});},250);}}
return Marquee3k;}));function share_this(val)
{var url=$(".social_sharer a."+val).attr("data-url");var title=$(".social_sharer a."+val).attr("data-title");var pop_url='';if(val=='facebook')
{pop_url='https://www.facebook.com/sharer/sharer.php?u='+url;}
if(val=='twitter')
{pop_url='https://twitter.com/intent/tweet?text='+title+'&url='+url;}
if(val=='google-plus')
{pop_url='https://plus.google.com/share?url='+url;}
window.open(pop_url,"PopupWindow","width=500,height=500,scrollbars=yes,resizable=no");}
function validateEmail(email)
{var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}
var SimpleStarRating=function(){function a(a){function b(b,c){var d=a.getAttribute(b);return d?d:c}function j(){a.setAttribute("disabled",""),d=!0}function k(){a.removeAttribute("disabled"),d=!1}function l(b){f=b,a.setAttribute("data-rating",f),o()}function m(b){e=b,a.setAttribute("data-default-rating",e),p()}function n(a){q();for(var b=0;b<g.length&&!(b>=a);b++)b===Math.floor(a)&&b!==a&&g[b].classList.add("half"),g[b].classList.add("active")}function o(){var a=parseFloat(b("data-rating",0));a?(f=a,n(f)):p()}function p(){e=parseFloat(b("data-default-rating",0)),n(e)}function q(){for(var a=0;a<g.length;a++)g[a].classList.remove("active"),g[a].classList.remove("half")}function r(b){if(!d&&this===b.target){var c=g.indexOf(b.target);if(c!==-1){var e=c+1;l(e),"function"==typeof this.onrate&&this.onrate(f);var h=new CustomEvent("rate",{detail:e});a.dispatchEvent(h)}}}var c=parseInt(b("data-stars",5)),d="undefined"!=typeof a.getAttribute("disabled"),e=parseFloat(b("data-default-rating",0)),f=-1,g=[];a.style.display="inline-block";for(var h=0;h<c;h++){var i=document.createElement("span");i.className="star",i.addEventListener("click",r),h>0?g[h-1].appendChild(i):a.appendChild(i),g.push(i)}this.disable=j,this.enable=k,this.setCurrentRating=l,this.setDefaultRating=m,this.onrate=function(a){},a.addEventListener("mouseout",function(){d=null!==a.getAttribute("disabled"),d||o()}),a.addEventListener("mouseover",function(){d=null!==a.getAttribute("disabled"),d||q()}),p()}return a}();function go_star_rate(star_wrap,star_msg_wrap)
{var art_star_rate=document.getElementById(star_wrap);var r=new SimpleStarRating(art_star_rate);art_star_rate.addEventListener('rate',function(e){document.getElementById(star_msg_wrap).innerHTML='<span class="txt_green arial">Thnak you for voting.</span>';});}