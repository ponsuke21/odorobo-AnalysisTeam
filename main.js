
function login() {
    var xobj = new XMLHttpRequest();
    xobj.open("get","password.txt");
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == 200) {
            var password = document.getElementById("password").value;
            document.getElementById("password").value = "";
            var hash = hashing(password);
            if (hash == xobj.responseText) {
                document.getElementById("modal-overlay").style.display = "none";
                document.getElementById("form").style.display = "none";
                document.getElementById("menu").style.display = "flex";
                document.getElementById("main").style.display = "none";
                document.getElementById("home").style.display = "block";
            }
        }
    }
    xobj.send();
}

function hashing(text) {
    var sha = new jsSHA('SHA-256', 'TEXT');
    sha.update(text);
    return sha.getHash('HEX');
}

function page(idName) {
    document.getElementById("home").style.display = "none";
    document.getElementById("assets").style.display = "none";
    document.getElementById("communication").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById(idName).style.display = "block";
    document.getElementById("li-home").style.textDecoration = "underline";
    document.getElementById("li-assets").style.textDecoration = "underline";
    document.getElementById("li-communication").style.textDecoration = "underline";
    document.getElementById("li-contact").style.textDecoration = "underline";
    document.getElementById("li-" + idName).style.textDecoration = "none";
}

var month = document.getElementById("month");
var now = new Date();
var nowYear = now.getFullYear();
var nowMonth = now.getMonth() + 1;
month.value = nowYear + "-" + ("0" + nowMonth).slice(-2);
var eventIframe = document.getElementById("event-iframe");
eventIframe.src = "https://odorobo-ed9d4.appspot.com/createDetailHtmlManagementNews?newsId=" + month.value.slice(2,4) + month.value.slice(-2);
month.onchange = function() {
    eventIframe.src = "https://odorobo-ed9d4.appspot.com/createDetailHtmlManagementNews?newsId=" + month.value.slice(2,4) + month.value.slice(-2);
};