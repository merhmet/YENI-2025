const header = document.createElement("header");
const navbarDiv = document.createElement("div");
navbarDiv.classList.add("navbar");

const uList = document.createElement("ul");

const CanliTv = document.createElement("li");
const Haber = document.createElement("li");
const Spor = document.createElement("li");
const Belgesel = document.createElement("li");

const canliTvlink = document.createElement("a");
const haberlink = document.createElement("a");
const sporlink = document.createElement("a");
const belgesellink = document.createElement("a");




header.appendChild(navbarDiv)
navbarDiv.appendChild(uList);
uList.appendChild(CanliTv);
uList.appendChild(Haber);
uList.appendChild(Spor);
uList.appendChild(Belgesel);



canliTvlink.setAttribute("href" , "index.html")
haberlink.setAttribute("href","haber.html")


