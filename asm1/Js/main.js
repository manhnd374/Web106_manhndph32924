$(document).ready(function () {


    window.addEventListener("resize", function (event) {
        var checkBox = document.getElementById("side-menu");

        if (checkBox.checked == true) {
            var x = document.getElementById("menu2");
            var classold = x.className;
            if (window.innerWidth <= 550) {
                x.className = "deffault show";
            } else {
                x.className = "deffault";
            }
        }


    });
});

function menu() {
    var x = document.getElementById("menu2");

    if (x.className === "deffault") {
        x.className += " show";
    } else {
        x.className = "deffault";
    }
}