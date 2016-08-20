/* A */
      jQuery(window).load(function () {
        jQuery(".parallax-1").parallax("50%", "0.3");
        jQuery(".parallax-2").parallax("50%", "0.3");
      });

/* B */
      imgr=new Array();
      imgr[0]="http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png";
      showRandomImg=true;
      aBold=true;
      summaryPost=230;
      summaryPost1=350;
      summaryTitle=15;
      numposts=6;
      numposts1=6;
      numposts2=4;
      numposts3=9;
      numposts4=5;
      numposts5=7;
      numposts6=1;
      function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)}}s=s.join("");s=s.substring(0,chop-1);return s}
      function recentposts(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();if(numposts<=json.feed.entry.length){maxpost=numposts}else{maxpost=json.feed.entry.length}for(var i=0;i<maxpost;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;var trtd='<li><h4 class="entry-title"><a href="'+posturl+'">'+posttitle+'</a></h4></li>';document.write(trtd);j++}}
      function recentgallery(json){j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var i=0;i<numposts3;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var pcm;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){pcm=entry.link[k].title.split(" ")[0];break}}if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";postdate=entry.published.$t;if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var month=[1,2,3,4,5,6,7,8,9,10,11,12];var month2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var day=postdate.split("-")[2].substring(0,2);var m=postdate.split("-")[1];var y=postdate.split("-")[0];for(var u2=0;u2<month.length;u2++){if(parseInt(m)==month[u2]){m=month2[u2];break}}var daystr=day+' '+m+' '+y;var trtd='<li class="zoom"><a href="'+posturl+'"><img width="90" height="70" class=" " title="'+posttitle+'" alt="image" src="'+img[i]+'"/></a><a class="title" href="'+posturl+'"><span>'+posttitle+'</span></a></li>';document.write(trtd);j++}}

/* C */
     function removeHtmlTag(strx,chop){ 
        if(strx.indexOf("<")!=-1)
        {
          var s = strx.split("<"); 
          for(var i=0;i<s.length;i++){ 
            if(s[i].indexOf(">")!=-1){ 
              s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
            } 
          } 
          strx =  s.join(""); 
        }
        chop = (chop < strx.length-1) ? chop : strx.length-2; 
        while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
        strx = strx.substring(0,chop-1); 
        return strx+'...'; 
      }
      function createSummaryAndThumb(pID, pURL, pTITLE){
        var div = document.getElementById(pID);
        var imgtag = "";
        var img = div.getElementsByTagName("img");
        var summ = summary_noimg;
        if(img.length>=1) {
          imgtag = '<div class="entry-thumb"><a href="'+ pURL +'" title="'+ pTITLE+'"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></a></div><a class="post-title" href="'+ pURL +'" title="'+ pTITLE+'"><h3>'+ pTITLE+'</h3> </a>';
          summ = summary_img;
        }
        var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
        div.innerHTML = summary;
      }

/* D */
;(function(a){a.backstretch=function(p,b,l){function s(){if(p){var b;0==c.length?c=a("<div />").attr("id","backstretch").css({left:0,top:0,position:m?"fixed":"absolute",overflow:"hidden",zIndex:-999999,margin:0,padding:0,height:"100%",width:"100%"}):c.find("img").addClass("deleteable");b=a("<img />").css({position:"absolute",display:"none",margin:0,padding:0,border:"none",zIndex:-999999,maxWidth:"none"}).bind("load",function(d){var b=a(this),e;b.css({width:"auto",height:"auto"});e=this.width||a(d.target).width();d=this.height||a(d.target).height();n=e/d;q();b.fadeIn(g.speed,function(){c.find(".deleteable").remove();"function"==typeof l&&l()})}).appendTo(c);0==a("body #backstretch").length&&(0===a(window).scrollTop()&&window.scrollTo(0,0),a("body").append(c));c.data("settings",g);b.attr("src",p);a(window).unbind("resize.backstretch").bind("resize.backstretch",function(){"onorientationchange"in window&&window.pageYOffset===0&&window.scrollTo(0,1);q()})}}function q(){try{j={left:0,top:0},rootWidth=h=o.width(),rootHeight=r?window.innerHeight:o.height(),f=h/n,f>=rootHeight?(k=(f-rootHeight)/2,g.centeredY&&(j.top="-"+k+"px")):(f=rootHeight,h=f*n,k=(h-rootWidth)/2,g.centeredX&&(j.left="-"+k+"px")),c.css({width:rootWidth,height:rootHeight}).find("img:not(.deleteable)").css({width:h,height:f}).css(j)}catch(a){}}var t={centeredX:!0,centeredY:!0,speed:0},c=a("#backstretch"),g=c.data("settings")||t;c.data("settings");var o,m,r,n,h,f,k,j;b&&"object"==typeof b&&a.extend(g,b);b&&"function"==typeof b&&(l=b);a(document).ready(function(){var b=window,d=navigator.userAgent,c=navigator.platform,e=d.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],f=d.match(/Fennec\/([0-9]+)/),f=!!f&&f[1],g=d.match(/Opera Mobi\/([0-9]+)/),h=!!g&&g[1],i=d.match(/MSIE ([0-9]+)/),i=!!i&&i[1];o=(m=!((-1<c.indexOf("iPhone")||-1<c.indexOf("iPad")||-1<c.indexOf("iPod"))&&e&&534>e||b.operamini&&"[object OperaMini]"==={}.toString.call(b.operamini)||g&&7458>h||-1<d.indexOf("Android")&&e&&533>e||f&&6>f||"palmGetResource"in window&&e&&534>e||-1<d.indexOf("MeeGo")&&-1<d.indexOf("NokiaBrowser/8.5.0")||i&&6>=i))?a(window):a(document);r=m&&window.innerHeight;s()});return this}})(jQuery);

/* E */
      (function($){
        $.fn.viewportChecker = function(useroptions){
          // Define options and extend with user
          var options = {
            classToAdd: 'visible',
            offset: 100,
            callbackFunction: function(elem){}
          };
          $.extend(options, useroptions);
          // Cache the given element and height of the browser
          var $elem = this,
              windowHeight = $(window).height();
          this.checkElements = function(){
            // Set some vars to check with
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html'),
                viewportTop = $(scrollElem).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);
            $elem.each(function(){
              var $obj = $(this);
              // If class already exists; quit
              if ($obj.hasClass(options.classToAdd)){
                return;
              }
              // define the top position of the element and include the offset which makes is appear earlier or later
              var elemTop = Math.round( $obj.offset().top ) + options.offset,
                  elemBottom = elemTop + ($obj.height());
              // Add class if in viewport
              if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                $obj.addClass(options.classToAdd);
                // Do the callback function. Callback wil send the jQuery object as parameter
                options.callbackFunction($obj);
              }
            });
          };
          // Run checkelements on load and scroll
          $(window).scroll(this.checkElements);
          this.checkElements();
          // On resize change the height var
          $(window).resize(function(e){
            windowHeight = e.currentTarget.innerHeight;
          });
        };
      })(jQuery);

/* F */
          jQuery(document).ready(function() {
            jQuery('.fade').addClass("hidden").viewportChecker({
              classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
              offset: 100    
            });
            jQuery('.fadeUp').addClass("hidden").viewportChecker({
              classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
              offset: 100    
            }); 
            jQuery('.fadeLeft').addClass("hidden").viewportChecker({
              classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
              offset: 100    
            });
            jQuery('.fadeRight').addClass("hidden").viewportChecker({
              classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
              offset: 100    
            }); 
            jQuery('.fadeDown').addClass("hidden").viewportChecker({
              classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
              offset: 100    
            }); 
            jQuery('.zoom').addClass("hidden").viewportChecker({
              classToAdd: 'visible animated zoomInUp', // Class to add to the elements when they are visible
              offset: 100    
            });    
          });

/* G */
      jQuery(document).ready(function() {
        jQuery('.table').addClass("hidden").viewportChecker({
          classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
          offset: 100    
        });
      });

/* H */
$(document).ready(function() {$('.PopularPosts img').attr('src', function(i, src) {return src.replace( 's72-c', 's300' );});});

/* I */
!function(a){"use strict";var b=function(b,c){var d=this;d.element=b,d.$element=a(b),d.tabs=d.$element.children(),d.options=a.extend({},a.fn.mtabs.defaults,c),d.current_tab=0,d.init()};b.prototype={init:function(){var a=this;a.tabs.length&&(a.build(),a.buildTabMenu())},build:function(){var b=this,c=b.options,d=c.tab_text_el,e=c.container_class;b.tab_names=[],b.$wrapper=b.$element.wrapInner('<div class="'+e+'" />').find("."+e),b.tabs.wrapAll('<div class="'+c.tabs_container_class+'" />'),b.tabs.each(function(c,e){var f,g=a(e),h=d;f=g.find(h).filter(":first").hide().text(),b.tab_names.push(f)}),a.isFunction(c.onReady)&&c.onReady.call(b.element)},buildTabMenu:function(){for(var b,c=this,d=c.options,e=d.tabsmenu_el,f=c.tab_names,g="<"+e+' class="'+d.tabsmenu_class+'">',h=0,i=f.length,j=function(){var a=arguments;return d.tmpl.tabsmenu_tab.replace(/\{[0-9]\}/g,function(b){var c=Number(b.replace(/\D/g,""));return a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$tabs_menu=a(g).prependTo(c.$wrapper),b=c.$tabs_menu.find(":first")[0].nodeName.toLowerCase(),c.$tabs_menu.on("click",b,function(b){var d=a(this),e=d.index();c.show(e),b.preventDefault()}).find(":first").trigger("click")},show:function(b){var c=this,d=c.options,e=d.active_tab_class;c.tabs.hide().filter(":eq("+b+")").show(),c.$tabs_menu.children().removeClass(e).filter(":eq("+b+")").addClass(e),a.isFunction(d.onTabSelect)&&b!==c.current_tab&&d.onTabSelect.call(c.element,b),c.current_tab=b},destroy:function(){var a=this,b=a.options.tab_text_el;a.$tabs_menu.remove(),a.tabs.unwrap().unwrap(),a.tabs.removeAttr("style"),a.tabs.children(b+":first").removeAttr("style"),a.$element.removeData("mtabs")}},a.fn.mtabs=function(c,d){return this.each(function(){var e,f=a(this),g=f.data("mtabs");e="object"==typeof c&&c,g||f.data("mtabs",g=new b(this,e)),"string"==typeof c&&g[c](d)})},a.fn.mtabs.defaults={container_class:"tabs",tabs_container_class:"tabs-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",tabsmenu_class:"tabs-menu",tabsmenu_el:"ul",tmpl:{tabsmenu_tab:'<li class="tab-{0}"><span>{1}</span></li>'},onTabSelect:null}}(window.jQuery,window,document);