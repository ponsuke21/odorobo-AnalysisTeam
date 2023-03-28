
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
}