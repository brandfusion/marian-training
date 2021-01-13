document.addEventListener("DOMContentLoaded", function () {

    // adding negative margin to Page content

    var headerElement = document.querySelector("header#Top");
    var headerOffsetHeight = headerElement.offsetHeight;
    var pageElement = document.querySelector(".page.header-overlay");
    if (pageElement != null) {
        pageElement.style.marginTop = `-${headerOffsetHeight}px !important`;
        pageElement.setAttribute("style", "margin-top:-" + headerOffsetHeight + "px !important;");
    }

    // sticky header
    window.onscroll = function () { myFunction() };

    var header = document.querySelector("header#Top");
    var sticky = 50;
    var sticky_animate = 300;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            if (window.pageYOffset > sticky_animate) {
                header.classList.add("sticky_animate");
            }
        } else {
            header.classList.remove("sticky");
            header.classList.remove("sticky_animate");
        }
    }


    // check required fields on the form
    document.querySelector("#dw-form-1 [type='submit']").addEventListener("click", e => {

        let count = 0;
        let requiredFields = document.querySelectorAll("#dw-form-1 [required]");

        requiredFields.forEach(field => {

            if (field.value == "") {
                field.classList.add("error");
                e.preventDefault();
                count++;
            } else {
                field.classList.remove("error");
            }
        });

        if (count != 0) {
            console.log("empty fields");
        }
    });

});