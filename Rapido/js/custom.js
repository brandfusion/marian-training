document.addEventListener("DOMContentLoaded", function () {

    //adding opacity to subnavigation menu

    let subnavigationColor = document.querySelector("body").getAttribute("data-rgba-color");
    let isNavigationTransparent = document.querySelector("body").getAttribute("data-isnavigation-transparent");

    if (isNavigationTransparent == "True") {
        document.querySelectorAll(".menu .menu--dropdown").forEach(function (el) {
            el.setAttribute("style", `background-color: ${subnavigationColor}`);
        });

        document.querySelectorAll(".menu .menu--dropleft").forEach(function (el) {
            el.setAttribute("style", `background-color: ${subnavigationColor}`);
        });
    }

    // hide cart is empty or is HideEmptyCartIcon by website property

    let cartCount = document.querySelector(".js-mini-cart-counter-content").getAttribute("data-count");
    let isEmptyCart = document.querySelector(".js-mini-cart-counter-content").getAttribute("data-show-empty-cart");
    //document.querySelector("#miniCartTrigger").classList.add("u-hidden");

    if (parseInt(cartCount) < 1 && isEmptyCart == "True") {
        document.querySelector("#miniCartTrigger").classList.add("u-hidden");
        console.log("1");
    } else if (parseInt(cartCount) > 0 && isEmptyCart == "True") {
        console.log("2");
        document.querySelector("#miniCartTrigger").classList.remove("u-hidden");
    } else if (isEmptyCart == "False") {
        console.log("3");
        document.querySelector("#miniCartTrigger").classList.remove("u-hidden");
    }


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
    if (document.querySelector("#dw-form-1") != null) { 
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
    }

});