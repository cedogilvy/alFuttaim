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
            $(".hidden-tags").toggleClass("d-lg-none");
            $(".more-tags .more").toggleClass("d-none");
            $(".more-tags .less").toggleClass("d-none");
        })
        $(".more-text").click(function () {
            $(".hidden-text").toggleClass("d-none");
            $(".more-text .more").toggleClass("d-none");
            $(".more-text .less").toggleClass("d-none");
            $(".gradient-image").toggleClass("d-none");

        })
        $(".home-page header").addClass("loaded");
        $(".home-page .initial-state .img-wrapper").addClass("loaded");
        $(".home-page .initial-state .state-content").addClass("loaded");
        $(".home-page .initial-state .state-content").addClass("loaded");
        $(".home-page .fixed-bottom .accordion").addClass("loaded");
        setTimeout(function () {
            $(".home-page .mySwiper .swiper-slide").addClass("loaded");
        }, 2000);

        var thisTag = [];
        $(document).on('click', '.partners-logo a', function () {
            $('.partners-logo').removeClass("active");
            $(this).parent().addClass("active");
            thisTag = $(this).attr('data-tag');
            thispartner = $(this).attr('data-partner');
            var arrayInterTags = thisTag.split(",");
            $('.map-pins-list a').each(function () {
                $(this).removeClass("active");
                interTags = $(this).attr('data-tag');
                intersectingColors = arrayInterTags.includes(interTags);

                if (intersectingColors) {
                    $(this).addClass("active");
                }
            });
            $('.brand-logo').each(function () {
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
        $(".navbar-toggler").click(function () {
            $(".open-menu").toggleClass("d-none");
            $(".close-menu").toggleClass("d-none");
            $("body").toggleClass("overflow-hidden");
        })

        var thisID = null
        /////////////////// SCROLL TO SECTION ///////////////////
        $(".scroll-to-tabs-anchor").on('click', function (event) {
            $(".scroll-to-tabs-anchor").each(function () {
                $(this).removeClass("active");
            })
            $(this).addClass("active");
            thisID = $(this).attr("data-href");

            $('html, body').animate({
                scrollTop: $(thisID).offset().top - 100
            }, 100);
            /* if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            } */
        });




        /////////////////// filters ///////////////////

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


        $(".search-icon").click(function () {
            $(".search").toggleClass("open");
            $("body").toggleClass("overflow-hidden");
            $("header").toggleClass("open");
        })
        $(".search .btn-close").click(function () {
            $(".search").toggleClass("open");
            $("body").toggleClass("overflow-hidden");
            $("header").toggleClass("open");
        })

        $(".modalSwiper .swiper-slide").click(function () {
            $(".video-modal .swiper-slide video").each(function () {
                this.pause();
            })
        })

        $(".video-modal .btn-close").click(function () {
            $(".video-modal .swiper-slide video").each(function () {
                this.pause();
            })
        })
        // $(".tag").click(function(){
        //     $(this).toggleClass("active");
        // })





        var timelines = $('.cd-horizontal-timeline'),
            eventsMinDistance = 60;

        (timelines.length > 0) && initTimeline(timelines);

        function initTimeline(timelines) {
            timelines.each(function () {
                var timeline = $(this),
                    timelineComponents = {};
                //cache timeline components 
                timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
                timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
                timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
                timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
                timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
                timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
                timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
                timelineComponents['eventsContent'] = timeline.children('.events-content');

                //assign a left postion to the single events along the timeline
                setDatePosition(timelineComponents, eventsMinDistance);
                //assign a width to the timeline
                var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
                //the timeline has been initialize - show it
                timeline.addClass('loaded');

                //detect click on the next arrow
                timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
                    event.preventDefault();
                    updateSlide(timelineComponents, timelineTotWidth, 'next');
                });
                //detect click on the prev arrow
                timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
                    event.preventDefault();
                    updateSlide(timelineComponents, timelineTotWidth, 'prev');
                });
                //detect click on the a single event - show new event content
                timelineComponents['eventsWrapper'].on('click', 'a', function (event) {
                    event.preventDefault();
                    timelineComponents['timelineEvents'].removeClass('selected');
                    $(this).addClass('selected');
                    updateOlderEvents($(this));
                    updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
                    updateVisibleContent($(this), timelineComponents['eventsContent']);
                });

                //on swipe, show next/prev event content
                timelineComponents['eventsContent'].on('swipeleft', function () {
                    var mq = checkMQ();
                    (mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
                });
                timelineComponents['eventsContent'].on('swiperight', function () {
                    var mq = checkMQ();
                    (mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
                });

                //keyboard navigation
                $(document).keyup(function (event) {
                    if (event.which == '37' && elementInViewport(timeline.get(0))) {
                        showNewContent(timelineComponents, timelineTotWidth, 'prev');
                    } else if (event.which == '39' && elementInViewport(timeline.get(0))) {
                        showNewContent(timelineComponents, timelineTotWidth, 'next');
                    }
                });
            });
        }

        function updateSlide(timelineComponents, timelineTotWidth, string) {
            //retrieve translateX value of timelineComponents['eventsWrapper']
            var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
                wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
            //translate the timeline to the left('next')/right('prev') 
            (string == 'next')
                ? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
                : translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
        }

        function showNewContent(timelineComponents, timelineTotWidth, string) {
            //go from one event to the next/previous one
            var visibleContent = timelineComponents['eventsContent'].find('.selected'),
                newContent = (string == 'next') ? visibleContent.next() : visibleContent.prev();

            if (newContent.length > 0) { //if there's a next/prev event - show it
                var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
                    newEvent = (string == 'next') ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

                updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
                updateVisibleContent(newEvent, timelineComponents['eventsContent']);
                newEvent.addClass('selected');
                selectedDate.removeClass('selected');
                updateOlderEvents(newEvent);
                updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
            }
        }

        function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
            //translate timeline to the left/right according to the position of the selected event
            var eventStyle = window.getComputedStyle(event.get(0), null),
                eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
                timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
                timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
            var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

            if ((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate)) {
                translateTimeline(timelineComponents, - eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
            }
        }

        function translateTimeline(timelineComponents, value, totWidth) {
            var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
            value = (value > 0) ? 0 : value; //only negative translate value
            value = (!(typeof totWidth === 'undefined') && value < totWidth) ? totWidth : value; //do not translate more than timeline width
            setTransformValue(eventsWrapper, 'translateX', value + 'px');
            //update navigation arrows visibility
            (value == 0) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
            (value == totWidth) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
        }

        function updateFilling(selectedEvent, filling, totWidth) {
            //change .filling-line length according to the selected event
            var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
                eventLeft = eventStyle.getPropertyValue("left"),
                eventWidth = eventStyle.getPropertyValue("width");
            eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
            var scaleValue = eventLeft / totWidth;
            setTransformValue(filling.get(0), 'scaleX', scaleValue);
        }

        function setDatePosition(timelineComponents, min) {
            for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
                var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
                    distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
                timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
            }
        }

        function setTimelineWidth(timelineComponents, width) {
            var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
                timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'],
                timeSpanNorm = Math.round(timeSpanNorm) + 4,
                totalWidth = timeSpanNorm * width;
            timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
            updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

            return totalWidth;
        }

        function updateVisibleContent(event, eventsContent) {
            var eventDate = event.data('date'),
                visibleContent = eventsContent.find('.selected'),
                selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
                selectedContentHeight = selectedContent.height();

            if (selectedContent.index() > visibleContent.index()) {
                var classEnetering = 'selected enter-right',
                    classLeaving = 'leave-left';
            } else {
                var classEnetering = 'selected enter-left',
                    classLeaving = 'leave-right';
            }

            selectedContent.attr('class', classEnetering);
            visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                visibleContent.removeClass('leave-right leave-left');
                selectedContent.removeClass('enter-left enter-right');
            });
            eventsContent.css('height', selectedContentHeight + 'px');
        }

        function updateOlderEvents(event) {
            event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
        }

        function getTranslateValue(timeline) {
            var timelineStyle = window.getComputedStyle(timeline.get(0), null),
                timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
                    timelineStyle.getPropertyValue("-moz-transform") ||
                    timelineStyle.getPropertyValue("-ms-transform") ||
                    timelineStyle.getPropertyValue("-o-transform") ||
                    timelineStyle.getPropertyValue("transform");

            if (timelineTranslate.indexOf('(') >= 0) {
                var timelineTranslate = timelineTranslate.split('(')[1];
                timelineTranslate = timelineTranslate.split(')')[0];
                timelineTranslate = timelineTranslate.split(',');
                var translateValue = timelineTranslate[4];
            } else {
                var translateValue = 0;
            }

            return Number(translateValue);
        }

        function setTransformValue(element, property, value) {

            element.style["-webkit-transform"] = property + "(" + value + ")";
            element.style["-moz-transform"] = property + "(" + value + ")";
            element.style["-ms-transform"] = property + "(" + value + ")";
            element.style["-o-transform"] = property + "(" + value + ")";
            element.style["transform"] = property + "(" + value + ")";
        }

        //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
        function parseDate(events) {
            var dateArrays = [];
            events.each(function () {
                /* var dateComp = $(this).data('date').split('/'),
                    newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
                dateArrays.push(newDate); */
                var dateComp = $(this).data('date'),
                    newDate = dateComp;
                dateArrays.push(newDate);
            });
            return dateArrays;
        }

        function parseDate2(events) {
            var dateArrays = [];
            events.each(function () {
                var singleDate = $(this),
                    dateComp = singleDate.data('date').split('T');
                if (dateComp.length > 1) { //both DD/MM/YEAR and time are provided
                    var dayComp = dateComp[0].split('/'),
                        timeComp = dateComp[1].split(':');
                } else if (dateComp[0].indexOf(':') >= 0) { //only time is provide
                    var dayComp = ["2000", "0", "0"],
                        timeComp = dateComp[0].split(':');
                } else { //only DD/MM/YEAR
                    var dayComp = dateComp[0].split('/'),
                        timeComp = ["0", "0"];
                }
                var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
                dateArrays.push(newDate);
            });
            return dateArrays;
        }

        function daydiff(first, second) {
            return Math.round((second - first));
        }

        function minLapse(dates) {
            //determine the minimum distance among events
            var dateDistances = [];
            for (i = 1; i < dates.length; i++) {
                var distance = daydiff(dates[i - 1], dates[i]);
                dateDistances.push(distance);
            }
            return Math.min.apply(null, dateDistances);
        }

        /*
            How to tell if a DOM element is visible in the current viewport?
            http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        */
        function elementInViewport(el) {
            var top = el.offsetTop;
            var left = el.offsetLeft;
            var width = el.offsetWidth;
            var height = el.offsetHeight;

            while (el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
                left += el.offsetLeft;
            }

            return (
                top < (window.pageYOffset + window.innerHeight) &&
                left < (window.pageXOffset + window.innerWidth) &&
                (top + height) > window.pageYOffset &&
                (left + width) > window.pageXOffset
            );
        }

        function checkMQ() {
            //check if mobile or desktop device
            return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
        }

        $(".range-container li a").click(function () {
            $(".range-container").each(function () {
                $(this).removeClass("active");
            })
            $(this).parent().parent().addClass("active");
        })

        var len = $(".event-li").siblings().length;
        //console.log(len);
        var curItem, nextRange;
        $(".timeline-next").click(function () {
            curItem = $(".events .selected").parent();
            if (curItem.hasClass("last")) {
                curItem.parent().removeClass("active");
                nextRange = curItem.parent().parent().next().find(".range-container");
                nextRange.addClass("active");
                nextRange.find(".first a").click();
            }
            else {
                $(".events .selected").parent().next().find("a").click();
            }
        })
        $(".timeline-prev").click(function () {
            curItem = $(".events .selected").parent();
            if (curItem.hasClass("first")) {
                curItem.parent().removeClass("active");
                nextRange = curItem.parent().parent().prev().find(".range-container");
                nextRange.addClass("active");
                nextRange.find(".last a").click();
            }
            else {
                $(".events .selected").parent().prev().find("a").click();
            }
        })


        /////////////////// RANGE SLIDER ///////////////////

        $(".fixed-bottom .accordion").click(function () {

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



        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // true for mobile device
            /* $('.partners-logo a').click(function () {
                console.log("scolled to")
                var element = document.querySelector(".map-wrapper");
                element.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }); */

            $(".partners-logo a").on('click', function() {
                $('html, body').animate({
                    scrollTop: $(".brand-logos").offset().top - 100
                }, 100);
            });
        } else {
            // false for not mobile device
            $('.map-pins-list a').click(function(){
                $('[data-toggle="tooltip"]').tooltip("hide");
            })
        }

    });

    ///////////////////////////////////////////////////////////////   END DOCUMENT READY  ///////////////////////////////////////////////////////////////

    /* function myScrollFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myProgressBar").style.width = scrolled + "%";
        document.getElementById("myProgressBar").innerHTML= Math.round(scrolled) + "%";
    } */

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



    /* var randoNumo = function(value) {
        return Math.floor(Math.random()*value);
      };
      
      var list = $('.mySwiper .swiper-slide');
      
      (function go() {
        
        list.eq(randoNumo(list.length)).addClass('t');
        setTimeout(function() {
          go();
        }, 50);
        
    })(); */

});