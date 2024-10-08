let contextVisible;
const customContext = function(data, e) {
    contextVisible = true;
    e.preventDefault();
    createContext({
        y: e.pageY,
        x: e.pageX
    }, data).then(data => {
        if (e.clientX > window.innerWidth - parseFloat(data.width)) {
            document.querySelector('[customContextMenu]').style.left = e.pageX - parseFloat(data.width) + 'px';
            document.querySelector('[customContextMenu]').classList.add('right');
        }
        if (e.clientY > window.innerHeight - parseFloat(data.height)) {
            document.querySelector('[customContextMenu]').style.top = e.pageY - parseFloat(data.height) + 'px';
            document.querySelector('[customContextMenu]').classList.add('bottom');
        }
    });
};
const createContext = function(position, data) {
    if (data === undefined) return;
    if (document.querySelector('[customContextMenu]')) document.querySelector('[customContextMenu]').remove();
    let html = document.createElement('DIV');
    html.setAttribute('customContextMenu', '');
    html.style.position = 'absolute';
    html.style.left = position.x + 'px';
    html.style.top = position.y + 'px';
    console.clear();
    html.innerHTML = data.map(item => {
        return `<a href="${item.link}" target="${item.target}"><div class="icon"><i class='fas fa-${item.icon}'></i></div><div class="text">${item.text}</div></a>`;
    }).join('');
    document.body.append(html);
    return new Promise(function(res) {
        res({
            width: getComputedStyle(html).width,
            height: getComputedStyle(html).height
        });
    });
};
const contextHide = function() {
    if (contextVisible) {
        document.querySelector('[customContextMenu]') ? document.querySelector('[customContextMenu]').remove() : '';
    }
};
window.addEventListener('contextmenu', function(event) {
    return customContext(JSON.parse(document.querySelector('[data-rc]').dataset.rc), event);
}, false);
window.addEventListener('click', contextHide);