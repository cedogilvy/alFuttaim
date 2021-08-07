jQuery(function ($) {

    ///////////////////////////////////////////////////////////////   START DOCUMENT READY  ///////////////////////////////////////////////////////////////

    $(document).ready(function () {

        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="tooltip"]').tooltip({
                customClass: 'tooltip-custom'
            });
        })
        $(".mySwiper .swiper-slide").click(function () {
            $(".mySwiper2").addClass("translate-x");
        })

        $(".mySwiper .swiper-slide").each(function () {
            $(this).click(function () {
                $(".mySwiper .swiper-slide").removeClass("active")
                $(this).addClass("active")
            })
        });
        $(".more-tags").click(function () {
            $(".hidden-tags").toggleClass("d-none");
            $(".more-tags .more").toggleClass("d-none");
            $(".more-tags .less").toggleClass("d-none");
        })
        $(".home-page header").addClass("loaded");
        $(".home-page .initial-state .img-wrapper").addClass("loaded");
        $(".home-page .initial-state .state-content").addClass("loaded");
        $(".home-page .initial-state .state-content").addClass("loaded");
        $(".home-page .accordion").addClass("loaded");



        var thisTag = [];
        $('.partners-logo a').click(function () {
            $('.partners-logo').removeClass("active");
            $(this).parent().addClass("active");
            thisTag = $(this).attr('data-tag');
            thispartner = $(this).attr('data-partner');
            console.log(thispartner);
            var arrayInterTags = thisTag.split(",");
            $('.map-pins-list a').each(function () {
                $(this).removeClass("active");
                interTags = $(this).attr('data-tag');
                intersectingColors = arrayInterTags.includes(interTags);

                if (intersectingColors) {
                    $(this).addClass("active");
                }
            });
            $('.brand-logo img').each(function () {
                $(this).addClass("d-none");
                interPartner = $(this).attr('data-partner');
                intersecting = thispartner.includes(interPartner);
                if (intersecting) {
                    $(this).removeClass("d-none");
                }
            });
        });

        function getArraysIntersection(a1, a2) {
            return a1.filter(function (n) { return a2.indexOf(n) !== -1; });
        }




        /////////////////// FILTERS ///////////////////

        var filters = $('.filter');
        var selectedFilter, itemsToHide, itemsToShow;
        $('.filter').click(function () {
            selectedFilter = $(this).attr('data-filter');
            itemsToHide = $('.listing .listing-item:not([data-filter=' + selectedFilter + '])');
            itemsToShow = $('.listing .listing-item[data-filter=' + selectedFilter + ']');

            $('.listing .listing-item:not([data-filter=' + selectedFilter + '])').each(function () {
                $(this).addClass("hideItem");
                $(this).removeClass("showItem");
            })
            $('.listing [data-filter=' + selectedFilter + ']').each(function () {
                $(this).addClass("showItem");
                $(this).removeClass("hideItem");
            })
            if (selectedFilter == 'all') {
                $('.listing .listing-item').each(function () {
                    $(this).removeClass("hideItem");
                })
            }
            $('.filter').each(function () {
                $(this).removeClass("active")
            })
            $(this).addClass("active")
        })


        /////////////////// ACCORDION TEXT TOGGLE ///////////////////

        $(".more-text").click(function () {
            $(".hidden-text").toggleClass("d-none");
            $(".more-text .more").toggleClass("d-none");
            $(".more-text .less").toggleClass("d-none");
            $(".gradient-image").toggleClass("d-none");
        })



        /////////////////// RANGE SLIDER ///////////////////

        $(".fixed-bottom .accordion").click(function () {

            // var setLabel = (lbl, val) => {
            //     var label = $(`#slider-${lbl}-label`);
            //     label.text(val);
            //     var slider = $(`#slider-div .${lbl}-slider-handle`);
            //     var rect = slider[0].getBoundingClientRect();
            //     label.offset({
            //         left: rect.left
            //     });
            // };
            // var setLabels = values => {
            //     setLabel("min", values[0]);
            //     setLabel("max", values[1]);
            // };

            // $('#ex2').slider().on('slide', function (ev) {
            //     setLabels(ev.value);
            // });
            // setLabels($('#ex2').attr("data-value").split(","));
            //////////////////////////////////////////////////

            function setLabel(lbl, val) {
                var label = $('#slider-' + lbl + '-label');
                label.text(val);
                var slider = $('#slider-div .' + lbl + '-slider-handle');
                var rect = slider[0].getBoundingClientRect();
                label.offset({
                    left: rect.left
                });
            }

            function setLabels(values) {
                setLabel("min", values[0]);
                setLabel("max", values[1]);
            }
            $('#ex2').slider().on('slide', function (ev) {
                setLabels(ev.value);
            });
            setLabels($('#ex2').attr("data-value").split(","));

        });
    });

    ///////////////////////////////////////////////////////////////   END DOCUMENT READY  ///////////////////////////////////////////////////////////////



    ///////////////   START DATA SCROLL  ///////////////
    $.fn.moveIt = function () {
        var $window = $(window);
        var instances = [];

        $(this).each(function () {
            instances.push(new moveItItem($(this)));
        });

        window.addEventListener('scroll', function () {
            var scrollTop = $window.scrollTop();
            instances.forEach(function (inst) {
                inst.update(scrollTop);
            });
        }, { passive: true });
    }
    var moveItItem = function (el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };
    moveItItem.prototype.update = function (scrollTop) {
        this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
        this.el.css('margin-bottom', -(scrollTop / this.speed) + 'px');
    };
    // Initialization
    $(function () {
        $('[data-scroll-speed]').moveIt();
    });


    $.fn.moveItX = function () {
        var $window = $(window);
        var instances = [];

        $(this).each(function () {
            instances.push(new moveItXItem($(this)));
        });

        window.addEventListener('scroll', function () {
            var scrollTop = $window.scrollTop();
            instances.forEach(function (inst) {
                inst.update(scrollTop);
            });
        }, { passive: true });
    }
    var moveItXItem = function (el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed-x'));
    };
    moveItXItem.prototype.update = function (scrollTop) {
        this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
    };
    // Initialization
    $(function () {
        $('[data-scroll-speed-x]').moveItX();
    });
    ///////////////   END DATA SCROLL  ///////////////



    var randoNumo = function (value) {
        return Math.floor(Math.random() * value);
    };

    var list = $('.mySwiper .swiper-slide');

    (function go() {

        list.eq(randoNumo(list.length)).addClass('t');
        setTimeout(function () {
            go();
        }, 50);

    })();

});