window.onload = function() {
    var modal_overlay_element = document.getElementById("modal-overlay");
    modal_overlay_element.style.display = "block";
}

function login() {
    var xobj = new XMLHttpRequest();
    xobj.open("get","password.txt");
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == 200) {
            console.log(xobj.responseText);
            var password = document.getElementById('password').value;
            var hash = hash(password);
            console.log(hash);
        }
    }
    xobj.send();
}

function hash(text) {
    var sha = new jsSHA('SHA-256', 'TEXT');
    sha.update(text);
    return sha.getHash('HEX');
}