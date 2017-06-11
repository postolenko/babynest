$(document).ready(function() {

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------

    var countElementsInputIndex;
    var countElementsVal;

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

        $(".contacts-thumbnails.contacts-page .thumbnail .inner").each(function() {

            $(this).outerWidth( $(this).outerHeight() );

        });

     });

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

});
