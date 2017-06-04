$(document).ready(function() {


    getPromoFloatBlockSize();

    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------------------

        getPromoFloatBlockSize();

    });


    $(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    setTimeout(function() {

        $(".shape-sect-box").fadeIn(300);

    }, 1000);


    function getPromoFloatBlockSize() {

        $(".shape-sect-box").css({
            "height" : $(".shape-sect-box img").height() + "px"
        });

    }



});
