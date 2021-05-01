document.addEventListener("keydown", function(event) {
    event.preventDefault();
    var el = document.getElementById("floatingDiv");
    if((event.key=='Escape'||event.key=='Esc'||event.keyCode==27) && (event.target.nodeName=='BODY')){
        el.style.display = "none";
    }
    if(event.key === 'Enter'){
        el.style.display = "block";
        el.className = "floatingDiv floatingDivCenter";
    }
  });

window.addEventListener('keydown', function(e){
    if((e.key=='Escape'||e.key=='Esc'||e.keyCode==27) && (e.target.nodeName=='BODY')){
        e.preventDefault();
    }
}, true);

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    setTimeout(showTime, 1000);
    
}

function resizeDiv() {
    var radios = document.getElementsByName("floatDivCheck");
    for( i = 0; i < radios.length; i++ ) {
        if( radios[i].checked ) {
            var el = document.getElementById("floatingDiv");
            if (radios[i].value === "1") {
                el.className = "floatingDiv floatingDivCenter";
            } else {
                el.className = "floatingDiv floatingDivLower";
            }
        }
    }
}