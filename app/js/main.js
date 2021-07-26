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
        $("header").addClass("loaded");
        $(".initial-state .img-wrapper").addClass("loaded");
        $(".initial-state .state-content").addClass("loaded");
        $(".initial-state .state-content").addClass("loaded");
        $(".accordion").addClass("loaded");
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