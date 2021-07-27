jQuery(function($){
  
    ///////////////////////////////////////////////////////////////   START DOCUMENT READY  ///////////////////////////////////////////////////////////////
    
    $(document).ready(function() {

        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="tooltip"]').tooltip({
              customClass: 'tooltip-custom'
            });
        })
        $(".mySwiper .swiper-slide").click(function(){
            $(".mySwiper2").addClass("translate-x");
        })
        
        $(".mySwiper .swiper-slide").each(function(){
            $(this).click(function(){
                $(".mySwiper .swiper-slide").removeClass("active")
                $(this).addClass("active")
            })
        });
        $(".more-tags").click(function(){
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
        
        /* $('.marker-all').each(function(){
            var partTags = $(this).attr("data-tag");
            var tagList = [];
            if(partTags.indexOf(',') >= 0){
                tagList = partTags.split(',');
            }
            else{
                tagList = partTags;
            }
        }); */

        // if(thisTag.length <= 0) {
            /* $('.interactive-tags li a.active').each(function(){
                thisTag.push($(this).attr('data-tag'));
            }); */
        // }
          
                /* if(thisTag.length > 0)
                {
                  $('.marker-all').each(function(){
                    $(this).removeClass("active");
                    interTags = $(this).attr('data-tag');
                    var arrayInterTags = [];
                    if(interTags && interTags.indexOf(',') >= 0)
                    {
                    arrayInterTags = interTags.split(",");
                    }
                    else
                    {
                    arrayInterTags = interTags;
                    }
                    
                    var intersectingColors = getArraysIntersection(thisTag, arrayInterTags);
                    if (intersectingColors && intersectingColors.length !== 0){
                      $(this).addClass("active");
                    }
                  });
                } else {
                  $('.marker-all').each(function(){
                    $(this).removeClass("active");
                    $(this).addClass("active");
                  });
                }
        
                  $('.panel-heading a').click();
                  $(".marker-all.active").each(function(){
                    $(this).find(".pulse").removeClass("d-none");
                });
            }); */

        function getArraysIntersection(a1,a2){
            if(a1 && a2){
              return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
            }
        }




        /////////////////// FILTERS ///////////////////
        const filters = document.querySelectorAll('.filter');

        filters.forEach(filter => { 

        filter.addEventListener('click', function() {

            let selectedFilter = filter.getAttribute('data-filter');
            let itemsToHide = document.querySelectorAll(`.listing .listing-item:not([data-filter='${selectedFilter}'])`);
            let itemsToShow = document.querySelectorAll(`.listing [data-filter='${selectedFilter}']`);

            if (selectedFilter == 'all') {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll('.listing [data-filter]');
            }

            itemsToHide.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
            });

            itemsToShow.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show'); 
            });

        });
        });



    });
    
    ///////////////////////////////////////////////////////////////   END DOCUMENT READY  ///////////////////////////////////////////////////////////////


    
    ///////////////   START DATA SCROLL  ///////////////
    $.fn.moveIt = function(){
        var $window = $(window);
        var instances = [];
        
        $(this).each(function(){
        instances.push(new moveItItem($(this)));
        });
        
        window.addEventListener('scroll', function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
            inst.update(scrollTop);
        });
        }, {passive: true});
    } 
    var moveItItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };
    moveItItem.prototype.update = function(scrollTop){
        this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
        this.el.css('margin-bottom', -(scrollTop / this.speed) + 'px');
    }; 
    // Initialization
    $(function(){
        $('[data-scroll-speed]').moveIt();
    });


    $.fn.moveItX = function(){
        var $window = $(window);
        var instances = [];
        
        $(this).each(function(){
        instances.push(new moveItXItem($(this)));
        });
        
        window.addEventListener('scroll', function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
            inst.update(scrollTop);
        });
        }, {passive: true});
    } 
    var moveItXItem = function(el){
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed-x'));
    };
    moveItXItem.prototype.update = function(scrollTop){
        this.el.css('transform', 'translateX(' + -(scrollTop / this.speed) + 'px)');
    }; 
    // Initialization
    $(function(){
        $('[data-scroll-speed-x]').moveItX();
    });
    ///////////////   END DATA SCROLL  ///////////////



    var randoNumo = function(value) {
        return Math.floor(Math.random()*value);
      };
      
      var list = $('.mySwiper .swiper-slide');
      
      (function go() {
        
        list.eq(randoNumo(list.length)).addClass('t');
        setTimeout(function() {
          go();
        }, 180);
        
    })();

});