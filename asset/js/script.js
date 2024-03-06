var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



$(function() {
    var titulo = $("h2");
    titulo.on("click",function() {
        titulo.css ("color", "violet");
    });
});