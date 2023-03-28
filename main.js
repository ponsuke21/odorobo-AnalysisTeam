
function login() {
    var xobj = new XMLHttpRequest();
    xobj.open("get","password.txt");
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == 200) {
            var password = document.getElementById('password').value;
            document.getElementById("password").value = '';
            var hash = hashing(password);
            if (hash == xobj.responseText) {
                var modal_overlay_element = document.getElementById("modal-overlay");
                modal_overlay_element.style.display = "none";
                var form_element = document.getElementById("form");
                form_element.style.display = "none";
                var menu_element = document.getElementById("menu");
                menu_element.style.display = "flex";
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