(function(a){a.ScrollToFixed=function(d,p){var c=this;c.$el=a(d);c.el=d;c.$el.data("ScrollToFixed",c);var j=false;var k=c.$el;var e=0;var g=0;var h=-1;var l=null;function b(){i();h=-1;e=k.offset().top;g=k.offset().left;j=true;if(c.options.bottom!=-1){o()}}function f(){return k.css("position")=="fixed"}function o(){if(!f()){l.css({display:k.css("display"),width:k.outerWidth(true),height:k.outerHeight(true),"float":k.css("float")});k.css({width:k.width(),position:"fixed",top:c.options.bottom==-1?c.options.marginTop:"",bottom:c.options.bottom==-1?"":c.options.bottom})}}function i(){if(f()){h=-1;l.css("display","none");k.css({width:"",position:"",left:"",top:""})}}function n(q){if(q!=h){k.css("left",g-q);h=q}}function m(){if(!j){b()}var q=a(window).scrollLeft();var r=a(window).scrollTop();if(c.options.limit>0){if(c.options.bottom==-1&&r>=c.options.limit-c.options.marginTop){k.css("position","absolute");k.css("top",c.options.limit)}else{if(c.options.bottom!=-1){if(r+a(window).height()-k.outerHeight()>=c.options.limit-c.options.marginTop){i()}else{o();n(q)}}}}else{if(r>=e-c.options.marginTop){o();n(q)}else{if(c.options.bottom!=-1){n(q)}else{i()}}}}c.init=function(){c.options=a.extend({},a.ScrollToFixed.defaultOptions,p);if(navigator.platform=="iPad"||navigator.platform=="iPhone"||navigator.platform=="iPod"){return}c.$el.css("z-index",1000);l=a("<div/>");c.$el.after(l);a(window).bind("resize",function(q){b();m()});a(window).bind("scroll",function(q){m()});if(c.options.bottom!=-1){o()}};c.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);