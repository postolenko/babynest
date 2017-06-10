$(document).ready(function() {

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------

    getPromoFloatBlockSize();

    getFooterPosition();

    getBootomPaddingForUseDescripts();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // ---------------------------------

        getPromoFloatBlockSize();

        getBootomPaddingForUseDescripts();

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

    $(function() {

        $(".use-descripts li .icon-box").bind({

            mouseenter : function() {

                $(this).prev(".tooltip").addClass("visibility");

                $(this).prev(".tooltip").css({
                    "left" : -1 * $(this).prev(".tooltip").width() / 2 + $(this).width() / 2 + "px"
                });

            }, mouseleave: function() {

                $(this).prev(".tooltip").removeClass("visibility");

            }

        });

    });

    $(function() {

        $(".video-box iframe").each(function() {

            $(this).attr("src", $(this).attr("src") + "?autoplay=0&controls=0&rel=0&showinfo=0");

        });

    });

    function getBootomPaddingForUseDescripts() {

        if( $(".two-cols-box > .col-2 .use-descripts").length > 0 ) {

            $(".two-cols-box > .col-2").css({
                "padding-bottom" : $(".two-cols-box .col-2 .use-descripts").height() + "px"
            });
            
        }

    }

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
