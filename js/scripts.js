$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // --------------------------

    var parentEl;

    // --------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------

    var priceGood;
    var countGoods;
    var priceMultiple;
    var indexBasketRow;
    var indexRow;
    var totalPrice = 0;
    var priceMultipleVal = 0;
    var countElementsInputIndex;
    var countElementsVal;

    // ----------------------

    var dataAttr;

    // ----------------------

    var indexVideoBox;
    var videoIdAttr;

    // ----------------------

    var noUiValueText;

    // ----------------------

    getPromoFloatBlockSize();

    getFooterPosition();

    getBootomPaddingForUseDescripts();

    getContactCircleSize();

    getPaddingTopWrapper();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        if( bodyWidth <= 768 ) {

            $(".main-nav-block").css({
                "top" : $(".header").outerHeight() + "px",
                "height" : $(window).height() - $(".header").height() + "px"
            });

        } else {

            $(".main-nav-block").css({
                "top" : 0 + "px",
                "height" : "auto"
            });

        }

        // ---------------------------------

        getPromoFloatBlockSize();

        getBootomPaddingForUseDescripts();

        getContactCircleSize();

        getPaddingTopWrapper();

    });


    // ----------------------------------------

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

     // ----------------------------------------

     // Калькулятор на странице Корзины товара

     $(function() {

        // var priceGood;
        // var countGoods;
        // var priceMultiple;
        // var indexBasketRow;
        // var indexRow;
        totalPrice = 0;
        priceMultipleVal = 0;

        $(".bascket-sect .choise-count button").click(function(countGoodsEvent) {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("bascket-row")) {             

                    indexBasketRow = parentEl.index(".bascket-row");

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

            priceGood = parseInt( $(".bascket-row:eq("+ indexBasketRow + ") .price_one_good").val() );
            priceMultiple = priceGood * countElementsVal;
            $(".bascket-row:eq("+ indexBasketRow + ") .price_multipple").val(priceMultiple);

            getTotalPRice();

        });

        $(".bascket-sect .choise-count .count-num-val").keyup(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("bascket-row")) {             

                    indexBasketRow = parentEl.index(".bascket-row");

                    break;

                }

            }

            countElementsVal = $(".bascket-row:eq("+ indexBasketRow + ") .count-num .count-num-val").val();

            if( countElementsVal <=  -1 ) {

                $(".choise-count:eq("+ countElementsInputIndex +") .count-num .count-num-val").val(0);

            }

            if( $(this).hasClass("minus") && countElementsVal > 0 ) {

                countElementsVal--;

            } else if( $(this).hasClass("plus") ) {

                countElementsVal++;

            }

            $(".bascket-row:eq("+ indexBasketRow + ") .count-num .count-num-val").val(countElementsVal);

            priceGood = parseInt( $(".bascket-row:eq("+ indexBasketRow + ") .price_one_good").val() );
            priceMultiple = priceGood * countElementsVal;
            $(".bascket-row:eq("+ indexBasketRow + ") .price_multipple").val(priceMultiple);

            getTotalPRice();

        });

        $(".bascket-sect .dell-btn").click(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("bascket-row")) {             

                    indexBasketRow = parentEl.index(".bascket-row");

                    break;

                }

            }

            $(".bascket-row:eq("+ indexBasketRow +")").fadeOut(300);

            setTimeout(function() {

                $(".bascket-row:eq("+ indexBasketRow +")").remove();

            }, 500);


            setTimeout(function() {

                getTotalPRice();

            }, 1000);

        });

     });

     // -----------------------------------------

    $(function() {

        // var indexVideoBox;
        // var videoIdAttr;

        $(".play-video").on("click", function(playBtnEvent) {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("video-box")) {             

                    indexVideoBox = parentEl.index(".video-box");

                    videoIdAttr = "video_" + indexVideoBox;

                    $(".video-box:eq("+ indexVideoBox +") iframe").attr("id", videoIdAttr);

                    break;

                }

            }

            $(".video-box:eq("+ indexVideoBox +") .hover-block").fadeOut(300);

            $("#" + videoIdAttr)[0].src += "?rel=0&autoplay=1";
            playBtnEvent.preventDefault();

        });

    });

     // -----------------------------------------

     $(function() {

        // var noUiValueText;

        $(".noUi-value").each(function() {

            noUiValueText = parseInt( $(this).text() );

            if( noUiValueText == 0 || noUiValueText >= 5) {

                $(this).append("<span class='text_val'>лет</span>");

            } else if( noUiValueText == 1) {

                $(this).append("<span class='text_val'>год</span>");

            } else {

                $(this).append("<span class='text_val'>года</span>");

            }

            if( noUiValueText > 4 && noUiValueText < 6 ) {
                $(this).css({
                    "opacity" : 0
                });
            }

            if( noUiValueText == 6 ) {

                $(this).text("8");

                if( !$(this).children(".text_val").length ) {

                    $(this).append("<span class='text_val'>лет</span>");

                }

            }

        });

        $(".noUi-value.noUi-value-large:eq("+ 0 +")").css({
            "left" : "2%"
        });    

     });

     // -----------------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav-block").is(":hidden") ) {

                $(".main-nav-block").fadeIn(500);

                $(".main-nav-block").css({
                    "top" : $(".header").outerHeight() + "px",
                    "height" : $(window).height() - $(".header").height() + "px"
                });

                $(this).addClass("active");

            } else {

                $(".main-nav-block").fadeOut(500);

                $(this).removeClass("active");

            }

        });

    });

    // ------------------------------------------

    $(function() {

        $(".choise-radio-box label img").click(function() {

            $(this).parent($("label")).click();

        })
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

        $(".popup-bg, .close-popup, .close_popup_cansel").click(function() {
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

        if( bodyWidth > 480 ) {

            $(".contacts-thumbnails.contacts-page .thumbnail .inner").each(function() {

                $(this).outerWidth( $(this).outerHeight() );

            });

        } else {

            $(".contacts-thumbnails.contacts-page .thumbnail .inner").css({
                "width" : "auto",
                "height" : "auto"
            });

        }

     }

     // ---------------

    function getTotalPRice() {

        totalPrice = 0;

        if( !$(".bascket-table .price_multipple").length ) {

            totalPrice = 0;

        } else {

            for( indexRow = 0; indexRow <= $(".bascket-table .price_multipple").length - 1; indexRow++ ) {

                if( +$(".bascket-table .price_multipple:eq("+ indexRow +") ").val() != 0 && $(".bascket-table .price_multipple:eq("+ indexRow +") ").val() != false) {

                    priceMultipleVal = +$(".bascket-table .price_multipple:eq("+ indexRow +") ").val();            

                    totalPrice += priceMultipleVal;                    

                }

            }

        }

        $(".price_total_sum").val(totalPrice);

     }


     function getPaddingTopWrapper() {

        if( bodyWidth <= 768 ) {

            $(".wrapper").css({
                "padding-top" : $(".header").height() + "px"
            });

        } else {

            $(".wrapper").css({
                "padding-top" : 0 + "px"
            });

        }
     }

});
