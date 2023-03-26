window.onload = function() {
    var modal_overlay_element = document.getElementById("modal-overlay");
    modal_overlay_element.style.display = "block";
}

var sha256 = document.getElementById("sha256")
var xobj = new XMLHttpRequest();
xobj.open("get","password.txt");
xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == 200) {
        sha256.textContent = xobj.responseText;
    }
}
xobj.send(null);


function hash(text) {
    const sha = new jsSHA('SHA-256', 'TEXT');
    sha.update(text);
    return sha.getHash('HEX');
  }

var text = document.getElementById('password');
text.oninput = inputChange;
form.addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const hash = hash(password);
    console.log(hash);
    event.preventDefault();
  });