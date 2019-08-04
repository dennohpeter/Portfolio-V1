function show_menu() {
    var element = document.querySelector('#nav_bar #menu');
    element.classList.toggle('show');
}  
var notice = document.getElementById("copyright-notice");
var show = document.getElementById("notice");
var close = document.getElementsByClassName("close")[0];
show.onclick = function() {
  notice.style.display = "block";
}
close.onclick = function() {
  notice.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == notice) {
    notice.style.display = "none";
  }
}