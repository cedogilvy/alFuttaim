jQuery(function(a){a(document).ready(function(){a(function(){a('[data-toggle="tooltip"]').tooltip(),a('[data-toggle="tooltip"]').tooltip({customClass:"tooltip-custom"})}),a(".mySwiper .swiper-slide").click(function(){a(".mySwiper2").addClass("translate-x")}),a(".mySwiper .swiper-slide").each(function(){a(this).click(function(){a(".mySwiper .swiper-slide").removeClass("active"),a(this).addClass("active")})}),a(".more-tags").click(function(){a(".hidden-tags").toggleClass("d-none"),a(".more-tags .more").toggleClass("d-none"),a(".more-tags .less").toggleClass("d-none")}),a(".home-page header").addClass("loaded"),a(".home-page .initial-state .img-wrapper").addClass("loaded"),a(".home-page .initial-state .state-content").addClass("loaded"),a(".home-page .initial-state .state-content").addClass("loaded"),a(".home-page .accordion").addClass("loaded");var e=[];a(".partners-logo a").click(function(){a(".partners-logo").removeClass("active"),a(this).parent().addClass("active"),e=a(this).attr("data-tag"),thispartner=a(this).attr("data-partner"),console.log(thispartner);var t=e.split(",");a(".map-pins-list a").each(function(){a(this).removeClass("active"),interTags=a(this).attr("data-tag"),intersectingColors=t.includes(interTags),intersectingColors&&a(this).addClass("active")}),a(".brand-logo img").each(function(){a(this).addClass("d-none"),interPartner=a(this).attr("data-partner"),intersecting=thispartner.includes(interPartner),intersecting&&a(this).removeClass("d-none")})});var t;a(".filter");a(".filter").click(function(){t=a(this).attr("data-filter"),a(".listing .listing-item:not([data-filter="+t+"])"),a(".listing .listing-item[data-filter="+t+"]"),a(".listing .listing-item:not([data-filter="+t+"])").each(function(){a(this).addClass("hideItem"),a(this).removeClass("showItem")}),a(".listing [data-filter="+t+"]").each(function(){a(this).addClass("showItem"),a(this).removeClass("hideItem")}),"all"==t&&a(".listing .listing-item").each(function(){a(this).removeClass("hideItem")}),a(".filter").each(function(){a(this).removeClass("active")}),a(this).addClass("active")}),a(".more-text").click(function(){a(".hidden-text").toggleClass("d-none"),a(".more-text .more").toggleClass("d-none"),a(".more-text .less").toggleClass("d-none"),a(".gradient-image").toggleClass("d-none")}),a(".fixed-bottom .accordion").click(function(){function e(t,e){var i=a("#slider-"+t+"-label");i.text(e);var s=a("#slider-div ."+t+"-slider-handle")[0].getBoundingClientRect();i.offset({left:s.left})}function i(t){e("min",t[0]),e("max",t[1])}a("#ex2").slider().on("slide",function(t){i(t.value)}),i(a("#ex2").attr("data-value").split(","))})}),a.fn.moveIt=function(){var t=a(window),i=[];a(this).each(function(){i.push(new e(a(this)))}),window.addEventListener("scroll",function(){var e=t.scrollTop();i.forEach(function(t){t.update(e)})},{passive:!0})};var e=function(t){this.el=a(t),this.speed=parseInt(this.el.attr("data-scroll-speed"))};e.prototype.update=function(t){this.el.css("transform","translateY("+-t/this.speed+"px)"),this.el.css("margin-bottom",-t/this.speed+"px")},a(function(){a("[data-scroll-speed]").moveIt()}),a.fn.moveItX=function(){var t=a(window),i=[];a(this).each(function(){i.push(new s(a(this)))}),window.addEventListener("scroll",function(){var e=t.scrollTop();i.forEach(function(t){t.update(e)})},{passive:!0})};var s=function(t){this.el=a(t),this.speed=parseInt(this.el.attr("data-scroll-speed-x"))};s.prototype.update=function(t){this.el.css("transform","translateX("+-t/this.speed+"px)")},a(function(){a("[data-scroll-speed-x]").moveItX()});var i=a(".mySwiper .swiper-slide");!function t(){i.eq(function(t){return Math.floor(Math.random()*t)}(i.length)).addClass("t"),setTimeout(function(){t()},50)}()});