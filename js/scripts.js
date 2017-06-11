$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // --------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------

    var countElementsInputIndex;
    var countElementsVal;

    // ----------------------

    var dataAttr;

    // ----------------------

    getPromoFloatBlockSize();

    getFooterPosition();

    getBootomPaddingForUseDescripts();

    getContactCircleSize();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // ---------------------------------

        getPromoFloatBlockSize();

        getBootomPaddingForUseDescripts();

        getContactCircleSize();

    });


    $(function() {

        var movingImgWidth = $(".shape-sect-box").width();
        var minusDif = movingImgWidth - bodyWidth;
        var coorDimensionModule = 1;
        var imgLeftCoor = 0;

        setTimeout(function() {

            $(".shape-sect-box").addClass("opacity_1")

            setInterval(function() {

                imgLeftCoor +=.5 * coorDimensionModule;

                if( imgLeftCoor <= (-1 * minusDif )) {

                    coorDimensionModule = 1;

                } else if( imgLeftCoor >= 0) {

                    coorDimensionModule = -1;

                }

                $(".shape-sect-box").css({
                    "left" : imgLeftCoor + "px"
                });

            }, 35);

        }, 1000);

    });


    // $(function() {

    //     // var SHAPE_WIDTH = 1928;
    //     // var SHAPE_HEIGHT = 390;

    //     // var shapeHeightActive = SHAPE_HEIGHT * bodyWidth / SHAPE_WIDTH;

    //     setTimeout(function() {

    //         $(".shape-sect-box img").addClass("horizontal_moving");

    //     });

    // });


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

    //  $(function() {

    //     // var countElementsInputIndex;
    //     // var countElementsVal;

       

    // });

     // ----------------------------------------

     // Калькулятор на странице Корзины товара

     $(function() {

        var priceGood;
        var countGoods;
        var priceMultiple;
        var indexBasketRow;

        $(".bascket-sect .choise-count button").click(function(countGoodsEvent) {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("bascket-row")) {             

                    indexBasketRow = parentEl.index();

                    console.log(indexBasketRow + "   " + parentEl.attr("class"));

                    break;

                }

            }

            countElementsInputIndex = $(this).parent(".choise-count").index(".choise-count");

            countElementsVal = $(".choise-count:eq("+ countElementsInputIndex +") .count-num .count-num-val").val();

            if( countElementsVal <=  -1 ) {

                $(".choise-count:eq("+ countElementsInputIndex +") .count-num .count-num-val").val(0);

            }

            if( $(this).hasClass("minus") && countElementsVal > 0 ) {

                countElementsVal--;

            } else if( $(this).hasClass("plus") ) {

                countElementsVal++;

            }

            $(".choise-count:eq("+ countElementsInputIndex +") .count-num .count-num-val").val(countElementsVal);

        });

     });

     // -----------------------------------------

     $(function() {

        // var dataAttr;

        $(".show_popup").click(function() {

            dataAttr = $(this).attr("data-popup");

            $(".popups-section").fadeIn(300);
            $(".popup-bg").fadeIn(300);
            $("[data-popup-name = '"+ dataAttr +"']").fadeIn(300);

        });

        $(".popup-bg").click(function() {
            hidePopup();
        });

        $(this).keydown(function(eventObject){
            if ( eventObject.which == 27 && $(".popups-section").is(":visible") ) {
                hidePopup();
            }
        });

     });

     function hidePopup(dataAttr) {        
        $(".popups-section").fadeOut(300);
        $(".popup-bg").fadeOut(300);
        $("[data-popup-name = '"+ dataAttr +"']").fadeOut(300);
     }

     // -----------------------------------------

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


     function getContactCircleSize() {
        $(".contacts-thumbnails.contacts-page .thumbnail .inner").each(function() {

            $(this).outerWidth( $(this).outerHeight() );

        });
     }

});
