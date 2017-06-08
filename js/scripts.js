$(document).ready(function() {

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------

    getPromoFloatBlockSize();

    getFooterPosition();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------------------

        getPromoFloatBlockSize();

    });


    $(function() {        

        setTimeout(function() {

            $(".shape-sect-box img").addClass("horizontal_moving");

        }, 1000);

    });

    // $(function() {

    //     $(".mosaik-thumbnails .thumbnail").each(function() {

    //         console.log("sdsd");

    //         $(this).css({ "height" : $(this).height() + "px"});

    //     });

    // });

    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }

    function getPromoFloatBlockSize() {

        $(".shape-sect-box").css({
            "height" : $(".shape-sect-box img").height() + "px"
        });

    }

});
