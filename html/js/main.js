jQuery(function(e){e(document).ready(function(){e(function(){e('[data-toggle="tooltip"]').tooltip(),e('[data-toggle="tooltip"]').tooltip({customClass:"tooltip-custom"})}),e(".mySwiper .swiper-slide").click(function(){e(".mySwiper2").addClass("translate-x")}),e(".mySwiper .swiper-slide").each(function(){e(this).click(function(){e(".mySwiper .swiper-slide").removeClass("active"),e(this).addClass("active")})}),e(".more-tags").click(function(){e(".hidden-tags").toggleClass("d-none"),e(".more-tags .more").toggleClass("d-none"),e(".more-tags .less").toggleClass("d-none")}),e("header").addClass("loaded"),e(".initial-state .img-wrapper").addClass("loaded"),e(".initial-state .state-content").addClass("loaded"),e(".initial-state .state-content").addClass("loaded"),e(".accordion").addClass("loaded")}),e.fn.moveIt=function(){var t=e(window),s=[];e(this).each(function(){s.push(new a(e(this)))}),window.addEventListener("scroll",function(){var e=t.scrollTop();s.forEach(function(t){t.update(e)})},{passive:!0})};var a=function(t){this.el=e(t),this.speed=parseInt(this.el.attr("data-scroll-speed"))};a.prototype.update=function(t){this.el.css("transform","translateY("+-t/this.speed+"px)"),this.el.css("margin-bottom",-t/this.speed+"px")},e(function(){e("[data-scroll-speed]").moveIt()}),e.fn.moveItX=function(){var t=e(window),s=[];e(this).each(function(){s.push(new o(e(this)))}),window.addEventListener("scroll",function(){var e=t.scrollTop();s.forEach(function(t){t.update(e)})},{passive:!0})};var o=function(t){this.el=e(t),this.speed=parseInt(this.el.attr("data-scroll-speed-x"))};o.prototype.update=function(t){this.el.css("transform","translateX("+-t/this.speed+"px)")},e(function(){e("[data-scroll-speed-x]").moveItX()});var s=e(".mySwiper .swiper-slide");!function t(){s.eq(function(t){return Math.floor(Math.random()*t)}(s.length)).addClass("t"),setTimeout(function(){t()},180)}()});