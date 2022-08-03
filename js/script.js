







$(document).ready(function () {

    let btnOpenMenu = $('#openMenu'),
        subMenu = $('#subMenu'),
        menuBar = $("#menuBar"),
        nav = $("nav:first"),
        resultImages = $(".results img"),
        rightArrow = $(".result .fa-angle-right"),
        leftArrow = $(".result .fa-angle-left");





    subMenu.addClass("hideSubMenu");

    btnOpenMenu.click(function () {
        subMenu.slideToggle(0, function () {
            subMenu.toggleClass("hideSubMenu");

        });
    });

    btnOpenMenu.blur(function () {
        subMenu.slideUp(200, function () {
            subMenu.addClass("hideSubMenu");
        });

    });


    menuBar.on("click", function () {

        nav.toggleClass("showNav");


    });


    let imagePos = 0;



    function showImage(pos) {
        resultImages.fadeOut(0);
        $(resultImages[pos]).fadeIn();
    }

    showImage(0);
    leftArrow.on("click", function () {
        imagePos--;

        if (imagePos < 0)
            imagePos = resultImages.length - 1;



        imagePos = imagePos % resultImages.length;
        showImage(imagePos);
    });
    rightArrow.on("click", function () {
        imagePos++;

        if (imagePos < 0)
            imagePos = resultImages.length - 1;


        imagePos = imagePos % resultImages.length;
        showImage(imagePos);
    });




});




