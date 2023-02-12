window.onload = function() {
    var hoge_element = document.getElementById("hoge");
    var i=0;
    var hoge_color=["#ff5353","#ffcf53","#e8ff53","#53ff5d","#53ffbc","#5393ff","#ca53ff","#ff53bd"]
    setInterval(() => {
        hoge_element.style.color = hoge_color[i];
        i++;
        if(i==8){i=0;}
    }, 200);
}
